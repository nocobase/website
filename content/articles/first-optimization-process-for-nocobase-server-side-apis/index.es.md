---
title: "Primer proceso de optimización para las API del lado del servidor de NocoBase"
description: "Descubra el proceso integral de optimización para las API del lado del servidor de NocoBase. Esta guía detallada cubre pruebas de rendimiento, análisis de código y mejoras estratégicas para aumentar la eficiencia de las API. Conozca el impacto de varios middleware y estrategias de almacenamiento en caché en el rendimiento, y explore las mejoras significativas logradas. Ideal para desarrolladores que buscan optimizar el rendimiento de las API en escenarios complejos."
---

## Antecedentes

Un usuario reportó un rendimiento insatisfactorio del sistema para NocoBase a través de un [issue de GitHub](https://github.com/nocobase/nocobase/issues/2912). Dada la rápida iteración de nuestro producto, el equipo está priorizando actualmente las mejoras de funcionalidad del sistema, con menos enfoque en optimizaciones específicas de rendimiento. Sin embargo, a medida que NocoBase pasa a producción y expande su base de usuarios, están surgiendo problemas de rendimiento. Es imperativo que intensifiquemos nuestro enfoque e iniciemos esfuerzos de optimización.

Ciertamente, para un producto como NocoBase, los escenarios de aplicación del mundo real tienden a ser complejos, y hay una variación significativa en los hábitos de los usuarios. La optimización del rendimiento requiere análisis específicos y por fases para diferentes escenarios. No es factible abordar todos los problemas de manera integral en una sola ronda de optimización.

Esta ronda de optimización se centra en proporcionar una evaluación inicial del rendimiento de la API del lado del servidor del sistema, seguida de mejoras fundamentales específicas.

## Pruebas de rendimiento

### Explicación

NocoBase utiliza el framework subyacente de Koa + Sequelize. Hemos diseñado varios escenarios de prueba para usarlos como puntos de referencia para el análisis comparativo:

* **Koa + Sequelize:** Esto representa el framework base, reflejando el óptimo teórico, aunque los escenarios del mundo real podrían introducir algunas concesiones.
* **Koa + @nocobase/database:** @nocobase/database es una capa de abstracción basada en Sequelize para operaciones de base de datos.
* **Koa + @nocobase/resourcer:** @nocobase/resourcer funciona como la capa de enrutamiento y despacho.
* **Koa + @nocobase/server:** @nocobase/server sirve como el servidor de NocoBase.
* **Koa + Nocobase:** Este es el programa NocoBase completo, que incorpora plugins integrados.

Esta prueba de rendimiento no es una simulación de un entorno de producción para pruebas de estrés exhaustivas. En cambio, se centra en pruebas por capas para comparar datos e identificar los factores principales que afectan el rendimiento de la API. Las pruebas se realizaron principalmente en mi computadora personal con las siguientes especificaciones:

* **Sistema Operativo:** MacOS 14.0
* **CPU:** 10 núcleos
* **Memoria:** 32GB
* **Base de datos:** PostgreSQL (Docker, última versión)
* **Ejecución de NocoBase:** `yarn start -d`

El endpoint de la API probado es `/api/users:list`, equivalente a ejecutar sentencias `select ... limit 20` y `count` en la tabla `users`. El código específico se puede consultar [aquí](https://github.com/nocobase/nocobase/tree/main/benchmark).

Cada escenario de prueba se evaluó usando el comando `wrk -t20 -c20 -d1m`.

### Koa + Sequelize

RPS: 6938.71

```
> $ wrk -t20 -c20 -d1m http://localhost:13020/ 
Running 1m test @ http://localhost:13020/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.91ms    0.88ms  38.10ms   97.01%
    Req/Sec   348.52     30.22   434.00     84.53%
  416831 requests in 1.00m, 141.52MB read
Requests/sec:   6938.71
Transfer/sec:      2.36MB
```

CPU de la base de datos > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   125.63%   196.7MiB / 7.748GiB   2.48%     11.6GB / 15.8GB   76.4MB / 2.81GB   11
```

PostgreSQL normalmente utiliza solo un núcleo de CPU, lo que indica que el cuello de botella de rendimiento se encuentra dentro de la base de datos.

### Koa + @nocobase/database

RPS: 5487.29

```
> $ wrk -t20 -c20 -d1m http://localhost:13010/                   
Running 1m test @ http://localhost:13010/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.66ms  795.89us  32.80ms   91.85%
    Req/Sec   275.53     21.87   434.00     82.60%
  329784 requests in 1.00m, 121.71MB read
Requests/sec:   5487.29
Transfer/sec:      2.03MB
```

CPU de la base de datos > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   102.99%   197.7MiB / 7.748GiB   2.49%     12.3GB / 16.6GB   76.5MB / 2.82GB   11
```

El rendimiento ha disminuido algo, pero es aceptable, y la base de datos generalmente funciona a su máxima capacidad.

### Koa + @nocobase/resourcer

RPS: 4787.94

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13040/api/users:list'
Running 1m test @ http://localhost:13040/api/users
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.20ms    0.92ms  30.97ms   88.29%
    Req/Sec   240.48     18.01   333.00     80.79%
  287757 requests in 1.00m, 120.47MB read
Requests/sec:   4787.94
Transfer/sec:      2.00MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O         BLOCK I/O         PIDS
80393e7580c1   postgres   87.72%    197.3MiB / 7.748GiB   2.49%     12.6GB / 17GB   76.5MB / 2.82GB   11
```

El rendimiento se ha degradado aún más, y la base de datos no ha alcanzado su capacidad máxima. Analizaremos las razones más adelante.

### Koa + @nocobase/server

RPS: 2285.86

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13030/api/users:list'                                                   
Running 1m test @ http://localhost:13030/api/users:list
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.80ms    2.05ms  93.25ms   97.23%
    Req/Sec   114.80      9.27   300.00     93.35%
  137358 requests in 1.00m, 87.90MB read
Requests/sec:   2285.86
Transfer/sec:      1.46MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   47.82%    197.5MiB / 7.748GiB   2.49%     13.2GB / 17.7GB   76.9MB / 3.15GB   11
```

Comparando los datos de la prueba con Koa + @nocobase/resourcer, hay aproximadamente una reducción del 50% en el rendimiento, lo que indica que el principal cuello de botella de rendimiento se ha desplazado de la base de datos al propio programa.

### Nocobase

RPS: 580.48

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg' 
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    34.44ms    3.85ms  97.95ms   85.18%
    Req/Sec    29.03      3.94    50.00     85.04%
  34886 requests in 1.00m, 26.25MB read
Requests/sec:    580.48
Transfer/sec:    447.27KB
```

El rendimiento integral de NocoBase ha disminuido significativamente, como se anticipó antes de las pruebas. Esto se debe a que las interfaces atraviesan numerosos middlewares de plugins, lo que implica autenticación, comprobaciones de permisos y consultas a la base de datos. En particular, no se ha implementado almacenamiento en caché hasta este punto, lo que lo convierte en un enfoque clave para la optimización en la fase actual.

## Análisis de código y optimización

### Sequelize -> database -> resourcer

La transición desde el Sequelize subyacente a la base de datos, y luego al resourcer, aunque cada capa incurre en cierta sobrecarga de rendimiento, sigue siendo aceptable para un solo proceso. Esto se debe principalmente a una encapsulación adicional de la lógica del código. Como el enfoque de optimización actual no es lograr una solución completa de una sola vez, esta parte se mantendrá como está por ahora, y cualquier ajuste necesario se abordará por separado en el futuro.

### resourcer -> server

La transición del resourcer al servidor, la degradación del rendimiento supera la mitad, lo que indica un problema definitivo en esta área. Por lo tanto, comencemos el análisis aquí. El servidor introduce middleware adicional a nivel de aplicación en comparación con el resourcer (consulte [`helper.ts`](https://github.com/nocobase/nocobase/blob/main/packages/core/server/src/helper.ts)). Al revisar el código, la mayoría de la lógica parece relativamente sencilla, sin áreas aparentes que afecten significativamente el rendimiento. En consecuencia, he decidido recopilar datos relacionados con el consumo de tiempo del middleware para obtener más información.

#### perf\_hooks

NodeJS proporciona APIs de prueba de rendimiento a través de [perf\_hooks](https://nodejs.org/api/perf_hooks.html#perf_hooksperformance). Estas APIs ofrecen un conjunto más rico de métricas más allá de los simples cálculos de tiempo de ejecución. En nuestro contexto, el enfoque sigue siendo examinar el tiempo dedicado a cada middleware. Al utilizar `perf_hooks.createHistogram` para construir histogramas, podemos ejecutar pruebas de estrés, registrando meticulosamente los tiempos de ejecución de cada middleware. Este enfoque nos permite obtener estadísticas clave como los tiempos de ejecución mínimo, máximo y mediano durante el período de prueba de estrés. Por ejemplo:

```
{
  "i18n": {
    "count": 12455,
    "min": 1875,
    "max": 927231,
    "mean": 4867.227137695704,
    "exceeds": 0,
    "stddev": 10258.399954791737,
    "percentiles": {
      "0": 1875,
      "50": 3250,
      "75": 5372,
      "100": 926720
    }
  }
}
```

Al ordenar los resultados, dos componentes de middleware que afectan notablemente el rendimiento destacan: logging e `i18n`.

#### Logging

Por defecto, NocoBase envía los logs tanto a archivos como a la terminal simultáneamente. Refiriéndose a la documentación de Node.js sobre [E/S de proceso](https://nodejs.org/api/process.html#a-note-on-process-io),

> **Advertencia**: Las escrituras síncronas bloquean el bucle de eventos hasta que la escritura se completa.

En mi entorno de prueba, ambas salidas son probablemente síncronas, y dado que hay logging para cada solicitud y respuesta, inevitablemente tiene algún impacto en el rendimiento. Considerando que los logs de la interfaz son esenciales, mantendremos la configuración actual por ahora. Sin embargo, en un entorno de producción, es común conservar solo los logs de archivos. Por lo tanto, en pruebas futuras, podemos considerar deshabilitar los logs de terminal para reducir algo de sobrecarga de rendimiento. En producción, ajustar los niveles de log según sea necesario también es una opción viable.

#### i18n

El middleware `i18n`, responsable de gestionar los recursos localizados, mostró un consumo de tiempo significativo, con el principal cuello de botella identificado en la siguiente línea de código:

```
const i18n = ctx.app.i18n.cloneInstance({ initImmediate: false });
```

El enfoque actual de clonar una instancia de i18n para aislar los recursos de idioma en diferentes solicitudes consume mucho tiempo. Para optimizar, se puede implementar un patrón singleton basado en el idioma, permitiendo reutilizar las instancias existentes para el mismo idioma en lugar de recargarlas para cada solicitud.

### server -> NocoBase

La transición de un servidor simple al NocoBase completo, hay una caída significativa en el rendimiento. Como se mencionó anteriormente, el NocoBase completo incluye numerosos plugins integrados, introduciendo muchos middlewares a nivel de ruta, incluyendo autenticación y permisos. Siguiendo los métodos discutidos anteriormente, usamos `perf_hooks` para medir el tiempo dedicado en estos middlewares. Los resultados destacan los dos middlewares más impactantes y su lógica de ejecución principal:

* `authManager.middleware` - Middleware para la autenticación de usuarios
  1. Verificar si el token del usuario está en la lista negra.
  2. Recuperar el método de autenticación actualmente utilizado.
  3. Obtener información del usuario basada en el método de autenticación.
* `acl.setCurrentRole` - Middleware para establecer la información del rol en el módulo de permisos
  * Recuperar la información del rol asociado basada en el ID de usuario actual y establecer el rol del usuario.

Ambos middlewares realizan consultas a la base de datos en su lógica principal para cada solicitud. Para abordar esto, estamos introduciendo almacenamiento en caché.

#### Estrategia de almacenamiento en caché

##### Almacenamiento

NocoBase emplea actualmente almacenamiento en caché en memoria y Redis. Para datos relativamente estáticos, como los métodos de autenticación del sistema, los almacenamos en memoria. Los datos relacionados con la información del usuario siguen la configuración de almacenamiento predeterminada, permitiendo a los usuarios optar por Redis como método de almacenamiento predeterminado.

##### Caché bajo demanda + Actualizaciones por Hook

Datos como métodos de autenticación, información de usuario y roles generalmente caen en la categoría de lectura intensiva y escritura mínima. Implementamos una estrategia de caché bajo demanda, donde la primera solicitud desencadena una consulta a la base de datos y los resultados se almacenan en caché. Las solicitudes posteriores utilizan los resultados en caché. Para garantizar la consistencia de los datos, introducimos hooks para escuchar cualquier cambio en la base de datos y sincronizarlos con la caché.

##### Filtro Bloom

Para las consultas de la lista negra de tokens, donde necesitamos comparar los tokens de usuario con los de la lista negra, la caché bajo demanda no es adecuada. En su lugar, durante el inicio del programa, precargamos los tokens de la lista negra en la caché. Para ahorrar espacio en memoria, empleamos un filtro Bloom para almacenar en caché la lista negra. El filtro Bloom determina con precisión si un valor no está presente, con una probabilidad de juzgar erróneamente la existencia de un valor. Inicialmente, el filtro Bloom verifica si un token de usuario está en la lista negra. Si el filtro Bloom indica existencia, realizamos una consulta secundaria a la base de datos para mayor precisión.

##### LRU

La caché en memoria de NocoBase utiliza por defecto la estrategia de desalojo de caché Menos Recientemente Usado (LRU). Los usuarios pueden configurar políticas de caché, como establecer un límite superior en el espacio de caché. Para los usuarios de Redis, se pueden configurar estrategias de caché personalizadas como LRU o LFU según sea necesario.

#### Otras optimizaciones

Además de las optimizaciones de middleware mencionadas anteriormente, algunos middlewares, como db2resource y ACLMiddleware, también afectan el rendimiento. Para analizar más a fondo los posibles cuellos de botella de rendimiento, y dado que actualmente no hay tareas de optimización directas, planeamos habilitar el inspector para examinar el perfil de CPU del sistema durante el tiempo de ejecución.

```
# Habilitar inspector
NODE_ARGS=--inspect yarn start
```

Al enviar solicitudes continuamente a la API usando wrk y capturando el perfil de CPU en Chrome DevTools durante un período específico, podemos obtener resultados similares a los siguientes.

![Chrome DevTools](https://static-docs.nocobase.com/fdfa998ef9c4067b2b302551f6ab950d.webp)

Al inspeccionar el perfil, identificamos que cierta lógica en db2resource para analizar rutas, como el uso de pathToRegexp, tiene un impacto notable en el rendimiento, explicando la degradación adicional en el rendimiento en la capa de enrutamiento observada en pruebas anteriores. En ACLMiddleware, las operaciones relacionadas con el manejo de permisos, como miniMatch, también mostraron tiempos de ejecución más largos. Para estos aspectos, hemos implementado algunas optimizaciones preliminares, como el almacenamiento en caché de variables para cálculos repetitivos. Optimizaciones más extensas se abordarán en iteraciones futuras.

## Resumen

### Resultados de la optimización

En este esfuerzo de optimización, nos centramos en:

* Usar variables para almacenar en caché operaciones que consumen mucho tiempo en middleware, como la creación de instancias de `i18n` y las comprobaciones de permisos.
* Introducir mecanismos de almacenamiento en caché apropiados para operaciones de middleware que implican consultas frecuentes a la base de datos.

Además, recomendamos ajustar el nivel y el método de salida de logs en el entorno de producción según los requisitos para mitigar el impacto de la impresión de logs en el rendimiento de la API.

Después de implementar estas optimizaciones, volver a probar la aplicación NocoBase completa reveló mejoras significativas en el rendimiento de la API.

```
> $ wrk -c20 -t20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0'
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.60ms    2.62ms 103.80ms   96.32%
    Req/Sec   105.44     11.62   393.00     83.66%
  126047 requests in 1.00m, 60.10MB read
  Non-2xx or 3xx responses: 2
Requests/sec:   2097.31
Transfer/sec:      1.00MB
```

### Optimización continua

El proceso de optimización en esta ronda tiene ciertas limitaciones:

Por un lado, solo probamos solicitudes simples. En escenarios comerciales reales, aspectos como el filtrado, el análisis de variables, las transacciones complejas, etc., pueden presentar desafíos de rendimiento adicionales que requieren una mayor optimización.

Por otro lado, nos centramos en optimizar las partes que afectan significativamente el rendimiento, dejando margen de mejora en otras áreas.

En el futuro, continuaremos optimizando el rendimiento de NocoBase. Si encuentra problemas de rendimiento en su uso, no dude en proporcionar casos específicos para su análisis y optimización. Sus comentarios serán valiosos para abordar escenarios de uso del mundo real.

## Referencias

* [Caching Best Practices | Amazon Web Services](https://aws.amazon.com/cn/caching/best-practices/)
* [Bloom filter](https://redis.io/docs/data-types/probabilistic/bloom-filter/)
* [Performance measurement APIs | Node.js v21.4.0 Documentation](https://nodejs.org/api/perf_hooks.html#perf_hookscreatehistogramoptions)
* [Debugging - Getting Started | Node.js](https://nodejs.org/en/guides/debugging-getting-started)
