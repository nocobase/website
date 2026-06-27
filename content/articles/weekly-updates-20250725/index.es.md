---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana incluyen: soporte para mostrar tablas definidas por complementos en la fuente de datos principal, ejecuciones de prueba para nodos y más."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieran experimentar nuevas funciones antes y dar su opinión;
* `develop`: Versión alfa, contiene el código de funciones más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.10](https://www.nocobase.com/en/blog/v1.8.10)

*Fecha de lanzamiento: 2025-07-24*

#### 🎉 Nuevas funciones

* **[Auth: SAML 2.0]** Soporte para redirección automática a la URL SSO cuando el usuario no está autenticado por @2013xile
* **[servidor]** Soporte para configurar el límite de tamaño del cuerpo de la solicitud mediante variable de entorno ([#7273](https://github.com/nocobase/nocobase/pull/7273)) por @aaaaaajie
* **[Flujo de trabajo: Nodo paralelo]** Añadir modo "Todo resuelto" para el nodo paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher
* **[Adaptador de cola Redis]** Añadir adaptador Redis para la cola de eventos por @mytharcher

#### 🚀 Mejoras

* **[Flujo de trabajo]** Añadir constante de tipo json para variable de prueba ([#7274](https://github.com/nocobase/nocobase/pull/7274)) por @mytharcher
* **[Integración de IA]** Eliminar `await` para invocar `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) por @mytharcher
* **[Flujo de trabajo: Cálculo JSON]** Hacer que el nodo de consulta JSON sea comprobable por @mytharcher
* **[servidor]** Hacer que la cola de memoria concurrente esté disponible cuando los elementos de procesamiento no están completos ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher
* **[base de datos]** Activa automáticamente la paginación simple cuando el conjunto de datos supera un umbral ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie
* **[Flujo de trabajo: Nodo manual]** storePopupContext soporta guardar el contexto predeterminado ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe
* **[Adaptador de cola Redis]** Hacer que la cola concurrente esté disponible cuando los elementos de procesamiento no están completos para el adaptador Redis por @mytharcher

#### 🐛 Corrección de errores

* **[cliente]**
  * la búsqueda difusa no funciona en el campo de selección de asociación al usar fórmula como campo de título ([#7280](https://github.com/nocobase/nocobase/pull/7280)) por @katherinehhh
  * falta la variable de objeto actual en las reglas de vinculación de subtablas ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh
  * La configuración del campo de título del selector de datos no es válida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe
  * Corregir problema donde los campos Markdown no se renderizaban correctamente en la vista de detalle. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie
  * Después de los cambios de campo, los campos de asociación que dependen de este campo no han borrado sus valores ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe
  * problema de visualización cuando se utilizan variables de fecha obsoletas en campos de fecha de datos históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh
* **[base de datos]**
  * Resolver fallo de paginación simple automática causado por la convención de nomenclatura de tablas. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie
  * Corregido fallo al exportar grandes conjuntos de datos desde PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie
  * Corregir problema donde la ordenación por clave primaria predeterminada causa fallo de carga de lista al usar fuente de datos externa MSSQL en bloque de tabla. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie
* **[auth]** Corregir el problema donde un `secret` vacío en la configuración de subaplicación impide el inicio de sesión ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile
* **[Gestor de fuentes de datos]** Corregido preservar atributos de fuente de datos externa en la configuración de colección ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie
* **[Acción: Edición por lotes]** No se puede realizar edición masiva y actualización masiva en el selector de datos ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe
* **[Flujo de trabajo]** Corregir versión incorrecta de dependencia ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher
* **[Fuente de datos: Oracle externo]** Corregido preservar atributos de fuente de datos externa en la configuración de colección por @aaaaaajie
* **[Flujo de trabajo: Aprobación]** La URL del botón Enlace apunta a una ventana emergente en la página actual, pero al hacer clic muestra un error 404 por @zhangzhonghe
* **[Gestor de correo electrónico]** la colección de relación de mensajes y etiquetas es excepcional bajo mysql por @jiannx

### [v1.8.7](https://www.nocobase.com/en/blog/v1.8.7)

*Fecha de lanzamiento: 2025-07-18*

#### 🎉 Nuevas funciones

- **[Flujo de trabajo: nodo de cálculo de fecha]** Soporte para ejecutar nodo de prueba por @mytharcher

#### 🚀 Mejoras

- **[cliente]** Selector de color: Añadir cuatro colores recomendados ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe
- **[Flujo de trabajo]** Hacer la comparación compatible con valores de fecha ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**
  - las reglas de estilo no funcionan en la columna de acción de la tabla ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh
  - Al eliminar un menú, los datos correspondientes en la tabla uiSchemas no se eliminan ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe
  - Evitar que se seleccionen campos no asociados en appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher
- **[Flujo de trabajo: Subflujo]** Corregir error lanzado cuando llega la señal de recuperación pero la ejecución pendiente no está en la instancia actual por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.5](https://www.nocobase.com/en/blog/v1.9.0-beta.5)

*Fecha de lanzamiento: 2025-07-24*

#### 🎉 Nuevas funciones

- **[servidor]** Soporte para configurar el límite de tamaño del cuerpo de la solicitud mediante variable de entorno ([#7273](https://github.com/nocobase/nocobase/pull/7273)) por @aaaaaajie
- **[Flujo de trabajo: Nodo paralelo]** Añadir modo "Todo resuelto" para el nodo paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher
- **[Auth: SAML 2.0]** Soporte para redirección automática a la URL SSO cuando el usuario no está autenticado por @2013xile
- **[Adaptador de cola Redis]** Añadir adaptador Redis para la cola de eventos por @mytharcher
- **[Flujo de trabajo: nodo de cálculo de fecha]** Soporte para ejecutar nodo de prueba por @mytharcher

#### 🚀 Mejoras

- **[servidor]** Hacer que la cola de memoria concurrente esté disponible cuando los elementos de procesamiento no están completos ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher
- **[base de datos]** Activa automáticamente la paginación simple cuando el conjunto de datos supera un umbral ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie
- **[cliente]** Selector de color: Añadir cuatro colores recomendados ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe
- **[Integración de IA]** Eliminar `await` para invocar `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** storePopupContext soporta guardar el contexto predeterminado ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe
- **[Flujo de trabajo]**
  - Añadir constante de tipo json para variable de prueba ([#7274](https://github.com/nocobase/nocobase/pull/7274)) por @mytharcher
  - Usar registro en lugar de lanzar error cuando la ejecución no debería ejecutarse debido al estado ([#7217](https://github.com/nocobase/nocobase/pull/7217)) por @mytharcher
  - Hacer la comparación compatible con valores de fecha ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher
- **[Campo de colección: Fórmula]** Añadir más interfaces calculables ([#7215](https://github.com/nocobase/nocobase/pull/7215)) por @mytharcher
- **[Adaptador de cola Redis]** Hacer que la cola concurrente esté disponible cuando los elementos de procesamiento no están completos para el adaptador Redis por @mytharcher
- **[Flujo de trabajo: Cálculo JSON]** Hacer que el nodo de consulta JSON sea comprobable por @mytharcher
- **[Flujo de trabajo: Aprobación]** Soporte para eliminar aprobación cuando se eliminan datos relacionados por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**
  - la búsqueda difusa no funciona en el campo de selección de asociación al usar fórmula como campo de título ([#7280](https://github.com/nocobase/nocobase/pull/7280)) por @katherinehhh
  - falta la variable de objeto actual en las reglas de vinculación de subtablas ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh
  - Después de los cambios de campo, los campos de asociación que dependen de este campo no han borrado sus valores ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe
  - Corregir problema donde los campos Markdown no se renderizaban correctamente en la vista de detalle. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie
  - La configuración del campo de título del selector de datos no es válida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe
  - Evitar que se seleccionen campos no asociados en appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher
  - Al eliminar un menú, los datos correspondientes en la tabla uiSchemas no se eliminan ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe
  - las reglas de estilo no funcionan en la columna de acción de la tabla ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh
  - problema de visualización cuando se utilizan variables de fecha obsoletas en campos de fecha de datos históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh
  - problema de visualización para campos de asociación en reglas de vinculación ([#7220](https://github.com/nocobase/nocobase/pull/7220)) por @katherinehhh
  - Corregir error: No se puede resolver 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe
- **[base de datos]**
  - Resolver fallo de paginación simple automática causado por la convención de nomenclatura de tablas. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie
  - Corregir problema donde la ordenación por clave primaria predeterminada causa fallo de carga de lista al usar fuente de datos externa MSSQL en bloque de tabla. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie
  - Corregido fallo al exportar grandes conjuntos de datos desde PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie
  - Corregido error al habilitar paginación simple para tablas de fuente de datos externa ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie
- **[auth]** Corregir el problema donde un `secret` vacío en la configuración de subaplicación impide el inicio de sesión ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile
- **[Flujo de trabajo]** Corregir versión incorrecta de dependencia ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher
- **[Acción: Edición por lotes]** No se puede realizar edición masiva y actualización masiva en el selector de datos ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe
- **[Gestor de fuentes de datos]** Corregido preservar atributos de fuente de datos externa en la configuración de colección ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie
- **[Campo de colección: Orden]** falta la selección de campo de orden al duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh
- **[Fuente de datos: Oracle externo]** Corregido preservar atributos de fuente de datos externa en la configuración de colección por @aaaaaajie
- **[Flujo de trabajo: Subflujo]** Corregir error lanzado cuando llega la señal de recuperación pero la ejecución pendiente no está en la instancia actual por @mytharcher
- **[Flujo de trabajo: Aprobación]**
  - Corregir múltiples niveles de asociaciones al enviar aprobación por @mytharcher
  - La URL del botón Enlace apunta a una ventana emergente en la página actual, pero al hacer clic muestra un error 404 por @zhangzhonghe
  - Corregir asociaciones al enviar aprobación por @mytharcher
  - Añadir tolerancia a fallos para aprobación eliminada en la lista de registros por @mytharcher
  - Corregir excepción al eliminar registro por @mytharcher
- **[Gestor de correo electrónico]** la colección de relación de mensajes y etiquetas es excepcional bajo mysql por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/en/blog/v1.9.0-alpha.3)

*Fecha de lanzamiento: 2025-07-18*

#### 🎉 Nuevas funciones

- **[Fuente de datos: Principal]** Soporte para mostrar tablas definidas por complementos en la fuente de datos principal. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) por @aaaaaajie
- **[Flujo de trabajo: nodo de cálculo de fecha]** Soporte para ejecutar nodo de prueba por @mytharcher

#### 🚀 Mejoras

- **[cliente]** Selector de color: Añadir cuatro colores recomendados ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe
- **[Flujo de trabajo]** Hacer la comparación compatible con valores de fecha ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher

#### 🐛 Corrección de errores

- **[cliente]**
  - las reglas de estilo no funcionan en la columna de acción de la tabla ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh
  - Evitar que se seleccionen campos no asociados en appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher
  - Corregir error: No se puede resolver 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe
  - Al eliminar un menú, los datos correspondientes en la tabla uiSchemas no se eliminan ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe
- **[base de datos]** Corregido error al habilitar paginación simple para tablas de fuente de datos externa ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie
- **[Campo de colección: Orden]** falta la selección de campo de orden al duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh
- **[Flujo de trabajo: Subflujo]** Corregir error lanzado cuando llega la señal de recuperación pero la ejecución pendiente no está en la instancia actual por @mytharcher
- **[Flujo de trabajo: Aprobación]**
  - Corregir múltiples niveles de asociaciones al enviar aprobación por @mytharcher
  - Añadir tolerancia a fallos para aprobación eliminada en la lista de registros por @mytharcher
- **[Gestor de correo electrónico]** rendimiento óptimo de la lista de mensajes de correo electrónico por @jiannx
