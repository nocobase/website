---
title: "NocoBase v1.9.0-beta.5: Soporte para configurar el límite de tamaño del cuerpo de la solicitud mediante variable de entorno"
description: "Nota de la versión v1.9.0-beta.5"
---

### 🎉 Nuevas Funcionalidades

- **[server]** Soporte para configurar el límite de tamaño del cuerpo de la solicitud mediante variable de entorno ([#7273](https://github.com/nocobase/nocobase/pull/7273)) por @aaaaaajie

- **[Flujo de trabajo: Nodo paralelo]** Añadido modo "Todo resuelto" para el nodo paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher

- **[Autenticación: SAML 2.0]** Soporte para redirección automática a la URL SSO cuando el usuario no está autenticado por @2013xile

- **[Adaptador de cola Redis]** Añadido adaptador Redis para la cola de eventos por @mytharcher

- **[Flujo de trabajo: Nodo de cálculo de fecha]** Soporte para ejecutar prueba del nodo por @mytharcher

### 🚀 Mejoras

- **[server]** Hacer disponible la cola de memoria concurrente cuando los elementos no están completos ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher

- **[base de datos]** Activa automáticamente la paginación simple cuando el conjunto de datos supera un umbral ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie

- **[cliente]** Selector de color: Añadidos cuatro colores recomendados ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe

- **[Integración de IA]** Eliminado `await` para invocar `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) por @mytharcher

- **[Flujo de trabajo: Nodo manual]** storePopupContext soporta guardar el contexto predeterminado ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe

- **[Flujo de trabajo]**
  - Añadido tipo constante json para variable de prueba ([#7274](https://github.com/nocobase/nocobase/pull/7274)) por @mytharcher

  - Usar registro en lugar de lanzar error cuando la ejecución no debería ejecutarse debido al estado ([#7217](https://github.com/nocobase/nocobase/pull/7217)) por @mytharcher

  - Hacer la comparación compatible con valores de fecha ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher

- **[Campo de colección: Fórmula]** Añadidas más interfaces calculables ([#7215](https://github.com/nocobase/nocobase/pull/7215)) por @mytharcher

- **[Adaptador de cola Redis]** Hacer disponible la cola concurrente cuando los elementos no están completos para el adaptador Redis por @mytharcher

- **[Flujo de trabajo: Cálculo JSON]** Hacer comprobable el nodo de consulta JSON por @mytharcher

- **[Flujo de trabajo: Aprobación]** Soporte para eliminar la aprobación cuando se eliminan los datos relacionados por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - La búsqueda difusa no funciona en el campo de selección de asociación cuando se usa fórmula como campo de título ([#7280](https://github.com/nocobase/nocobase/pull/7280)) por @katherinehhh

  - Falta la variable de objeto actual en las reglas de vinculación de subtablas ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh

  - Después de los cambios de campo, los campos de asociación que dependen de este campo no han borrado sus valores ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe

  - Corregido problema por el cual los campos Markdown no se renderizaban correctamente en la vista de detalle. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie

  - La configuración del campo de título del selector de datos no es válida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe

  - Evitar que se seleccionen campos no asociados en appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher

  - Al eliminar un menú, los datos correspondientes en la tabla uiSchemas no se eliminan ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe

  - Las reglas de estilo no funcionan en la columna de acción de la tabla ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh

  - Problema de visualización cuando se utilizan variables de fecha obsoletas en campos de fecha de datos históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh

  - Problema de visualización para campos de asociación en reglas de vinculación ([#7220](https://github.com/nocobase/nocobase/pull/7220)) por @katherinehhh

  - Corregido error: No se puede resolver 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe

- **[base de datos]**
  - Resuelto fallo de paginación simple automática causado por la convención de nomenclatura de tablas. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie

  - Corregido problema por el cual la ordenación predeterminada de la clave primaria causa un fallo en la carga de la lista al usar una fuente de datos externa MSSQL en un bloque de tabla. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie

  - Corregido fallo al exportar grandes conjuntos de datos desde PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie

  - Corregido error al habilitar la paginación simple para tablas de fuentes de datos externas ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie

- **[autenticación]** Corregido el problema por el cual un `secret` vacío en la configuración de la subaplicación impide el inicio de sesión ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile

- **[Flujo de trabajo]** Corregida versión incorrecta de dependencia ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher

- **[Acción: Edición por lotes]** No se puede realizar la edición por lotes y la actualización por lotes en el selector de datos ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe

- **[Gestor de fuentes de datos]** Corregida la preservación de atributos de fuentes de datos externas en la configuración de colecciones ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie

- **[Campo de colección: Orden]** Falta la selección del campo de orden al duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh

- **[Fuente de datos: Oracle externa]** Corregida la preservación de atributos de fuentes de datos externas en la configuración de colecciones por @aaaaaajie

- **[Flujo de trabajo: Subflujo]** Corregido error lanzado cuando llega una señal de recuperación pero la ejecución pendiente no está en la instancia actual por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregidos múltiples niveles de asociaciones al enviar una aprobación por @mytharcher

  - La URL del botón Enlace apunta a una ventana emergente en la página actual, pero al hacer clic muestra un error 404 por @zhangzhonghe

  - Corregidas asociaciones al enviar una aprobación por @mytharcher

  - Añadida tolerancia a fallos para aprobaciones eliminadas en la lista de registros por @mytharcher

  - Corregida excepción al eliminar un registro por @mytharcher

- **[Gestor de correo electrónico]** La colección de relación de mensajes y etiquetas es excepcional bajo mysql por @jiannx
