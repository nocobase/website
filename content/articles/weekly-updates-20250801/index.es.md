---
title: "Actualizaciones semanales de NocoBase: Optimización y corrección de errores"
description: "Las actualizaciones de esta semana incluyen: soporte para configurar el límite de tamaño del cuerpo de la solicitud mediante variable de entorno, soporte para previsualizar archivos de Office mediante la vista previa en vivo de Microsoft y otras mejoras."
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/timeline).

**Actualmente, NocoBase se actualiza con tres ramas: `main`, `next` y `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: La versión más estable hasta la fecha, recomendada para instalación.
* `next`: Versión beta, contiene nuevas funciones próximas y ha sido probada preliminarmente. Puede tener algunos problemas conocidos o desconocidos. Está destinada principalmente a usuarios de prueba para recopilar comentarios y optimizar funciones. Ideal para usuarios de prueba que quieren experimentar nuevas funciones anticipadamente y dar su opinión.
* `develop`: Versión alfa, contiene el código de la función más reciente, puede estar incompleta o ser inestable, principalmente para desarrollo interno e iteración rápida. Adecuada para usuarios técnicos interesados en la vanguardia del producto, pero con posibles problemas y funciones incompletas. No apta para uso en producción.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.11](https://www.nocobase.com/en/blog/v1.8.11)

*Fecha de lanzamiento: 2025-07-31*

#### 🎉 Nuevas funciones

- **[Visor de archivos de Office]** Soporte para previsualizar archivos de Office mediante la vista previa en vivo de Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher

#### 🚀 Mejoras

- **[cliente]** No cerrar el menú automáticamente después de la selección ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612
- **[Notificación: Mensaje en la aplicación]** Cambiar mensaje en la aplicación de SSE a WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher
- **[Flujo de trabajo]** Reducir la cantidad de trabajos a cargar al preparar la ejecución ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher
- **[Autenticación: DingTalk]** En el cliente de DingTalk, establecer el título de la barra de navegación como una cadena vacía en lugar de mostrar "Cargando…" por @2013xile

#### 🐛 Corrección de errores

- **[cliente]**

  - Corregir problema donde la tabla de árbol no se puede expandir ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe
  - Corregir comportamiento inesperado en la ordenación por arrastrar y soltar de filas de tabla ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu
  - Corregir problema de bucle infinito al analizar valores predeterminados de campo ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe
  - Corregir problema de visualización de campos de fecha en el selector de datos de campos de relación en el formulario de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh
- **[Flujo de trabajo: Nodo de solicitud HTTP]** Corregir error de condición de carrera ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher
- **[Flujo de trabajo]** Corregir problema de ID BigInt en MySQL al guardar trabajo ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher
- **[Acción: Exportar registros]** Corregido el formato incorrecto de campos relacionales anidados al exportar a Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie
- **[Fuente de datos: SQL Server externo]** Corregir formato de almacenamiento inconsistente para campos datetime (sin zona horaria) de MSSQL de fuentes de datos externas por @aaaaaajie
- **[Flujo de trabajo: Aprobación]** Corregir error lanzado desde la selección de asignado dentro de una fuente de datos externa por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.4](https://www.nocobase.com/en/blog/v1.9.0-alpha.4)

*Fecha de lanzamiento: 2025-08-01*

#### 🎉 Nuevas funciones

- **[servidor]** Soporte para configurar el límite de tamaño del cuerpo de la solicitud mediante variable de entorno ([#7273](https://github.com/nocobase/nocobase/pull/7273)) por @aaaaaajie
- **[cliente]** Los bloques de tabla admiten agregar un botón 'Configuración de columna' para configurar el orden y la visibilidad de las columnas ([#7204](https://github.com/nocobase/nocobase/pull/7204)) por @kerwin612
- **[Visor de archivos de Office]** Soporte para previsualizar archivos de Office mediante la vista previa en vivo de Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher
- **[Fuente de datos: Principal]**

  - soporte para leer tablas de la fuente de datos principal ([#7238](https://github.com/nocobase/nocobase/pull/7238)) por @aaaaaajie
- **[Flujo de trabajo: Nodo paralelo]** Agregar modo "Todo resuelto" para el nodo paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher
- **[Autenticación: SAML 2.0]** Soporte para redirección automática a la URL de SSO cuando el usuario no está autenticado por @2013xile
- **[Adaptador de cola Redis]** Agregar adaptador Redis para la cola de eventos por @mytharcher

#### 🚀 Mejoras

- **[cliente]** No cerrar el menú automáticamente después de la selección ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612
- **[servidor]** Hacer que la cola de memoria concurrente esté disponible cuando se procesan elementos no completos ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher
- **[base de datos]** Activar automáticamente la paginación simple cuando el conjunto de datos supera un umbral ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie
- **[Notificación: Mensaje en la aplicación]** Cambiar mensaje en la aplicación de SSE a WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher
- **[Flujo de trabajo]**

  - Reducir la cantidad de trabajos a cargar al preparar la ejecución ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher
  - Agregar constante de tipo json para variable de prueba ([#7274](https://github.com/nocobase/nocobase/pull/7274)) por @mytharcher
- **[Integración de IA]** Eliminar `await` para invocar `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** storePopupContext soporta guardar contexto predeterminado ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe
- **[Flujo de trabajo: Cálculo JSON]** Hacer que el nodo de consulta JSON sea comprobable por @mytharcher
- **[Adaptador de cola Redis]** Hacer que la cola concurrente esté disponible cuando se procesan elementos no completos para el adaptador Redis por @mytharcher
- **[Autenticación: DingTalk]** En el cliente de DingTalk, establecer el título de la barra de navegación como una cadena vacía en lugar de mostrar "Cargando…" por @2013xile

#### 🐛 Corrección de errores

- **[utilidades]** Manejo incorrecto de la zona horaria para parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh
- **[cliente]**

  - Corregir elemento de vista previa de archivo en url nula ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher
  - Agregar URL completa al archivo local al previsualizar ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher
  - Corregir problema donde la tabla de árbol no se puede expandir ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe
  - Corregir comportamiento inesperado en la ordenación por arrastrar y soltar de filas de tabla ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu
  - Corregir problema de bucle infinito al analizar valores predeterminados de campo ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe
  - Problema de visualización de campos de fecha en el selector de datos de campos de relación del formulario de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh
  - La búsqueda difusa no funciona en el campo de selección de asociación al usar fórmula como campo de título ([#7280](https://github.com/nocobase/nocobase/pull/7280)) por @katherinehhh
  - Falta la variable de objeto actual en las reglas de vinculación de subtablas ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh
  - Corregir problema donde los campos Markdown no se renderizaban correctamente en la vista de detalle. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie
  - Después de los cambios de campo, los campos de asociación que dependen de este campo no han borrado sus valores ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe
  - Problema de visualización cuando se utilizan variables de fecha obsoletas en campos de fecha de datos históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh
  - La configuración del campo de título del selector de datos no es válida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe
- **[base de datos]**

  - Resolver fallo de paginación simple automática causado por la convención de nomenclatura de tablas. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie
  - Corregido fallo al exportar grandes conjuntos de datos desde PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie
  - Corregir problema donde la ordenación por clave primaria predeterminada causa fallo de carga de lista al usar fuente de datos externa MSSQL en el bloque de tabla. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie
- **[autenticación]** Corregir el problema donde un `secret` vacío en la configuración de la subaplicación impide iniciar sesión ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile
- **[Administrador de archivos]** Corregir permiso de campo de almacenamiento ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher
- **[Flujo de trabajo]**

  - Corregir resultado `undefined` cuando el procesador sale ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher
  - Corregir problema de ID BigInt en MySQL al guardar trabajo ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher
  - Corregir versión incorrecta de dependencia ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher
- **[Flujo de trabajo: Nodo de solicitud HTTP]** Corregir error de condición de carrera ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher
- **[Acción: Exportar registros]** Corregido el formato incorrecto de campos relacionales anidados al exportar a Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie
- **[Administrador de fuentes de datos]** Corregido preservar atributos de fuente de datos externa en la configuración de colección ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie
- **[Acción: Edición por lotes]** No se puede realizar edición masiva y actualización masiva en el selector de datos ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe
- **[Fuente de datos: Oracle externo]** Corregido preservar atributos de fuente de datos externa en la configuración de colección por @aaaaaajie
- **[Fuente de datos: SQL Server externo]** Corregir formato de almacenamiento inconsistente para campos datetime (sin zona horaria) de MSSQL de fuentes de datos externas por @aaaaaajie
- **[Flujo de trabajo: Subflujo]** Corregir flujo suspendido por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir error lanzado desde la selección de asignado dentro de una fuente de datos externa por @mytharcher
  - La URL del botón de enlace apunta a una ventana emergente en la página actual, pero al hacer clic muestra un error 404 por @zhangzhonghe
- **[Administrador de correo electrónico]**

  - agregar campo rawId para optimización de rendimiento por @jiannx
  - el atributo ref en html causa una excepción de renderizado por @jiannx
  - la relación de colección de mensajes y etiquetas es excepcional bajo mysql por @jiannx
