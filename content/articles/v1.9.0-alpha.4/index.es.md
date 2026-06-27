---
title: "NocoBase v1.9.0-alpha.4: Soporte para configurar el límite de tamaño del cuerpo de la solicitud mediante variable de entorno"
description: "Nota de la versión v1.9.0-alpha.4"
---

### 🎉 Nuevas Funcionalidades

- **[servidor]** Soporte para configurar el límite de tamaño del cuerpo de la solicitud mediante variable de entorno ([#7273](https://github.com/nocobase/nocobase/pull/7273)) por @aaaaaajie
- **[cliente]** Los bloques de tabla admiten agregar un botón 'Configuración de columnas' para ordenar y ocultar columnas ([#7204](https://github.com/nocobase/nocobase/pull/7204)) por @kerwin612
- **[Visor de archivos de Office]** Soporte para previsualizar archivos de Office mediante la vista previa en vivo de Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher
- **[Fuente de datos: Principal]**

  - soporte para leer tablas desde la fuente de datos principal ([#7238](https://github.com/nocobase/nocobase/pull/7238)) por @aaaaaajie
- **[Flujo de trabajo: Nodo paralelo]** Se añade el modo "Todos resueltos" para el nodo paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher
- **[Autenticación: SAML 2.0]** Soporte para redirección automática a la URL de SSO cuando el usuario no está autenticado por @2013xile
- **[Adaptador de cola Redis]** Se añade adaptador Redis para la cola de eventos por @mytharcher

### 🚀 Mejoras

- **[cliente]** No cerrar automáticamente el menú después de la selección ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612
- **[servidor]** Hacer disponible la cola de memoria concurrente cuando los elementos en proceso no están completos ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher
- **[base de datos]** Activar automáticamente la paginación simple cuando el conjunto de datos supera un umbral ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie
- **[Notificación: Mensaje en la aplicación]** Cambiar mensaje en la aplicación de SSE a WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher
- **[Flujo de trabajo]**

  - Reducir la cantidad de trabajos a cargar al preparar la ejecución ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher
  - Añadir constante de tipo json para variable de prueba ([#7274](https://github.com/nocobase/nocobase/pull/7274)) por @mytharcher
- **[Integración de IA]** Eliminar `await` al invocar `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) por @mytharcher
- **[Flujo de trabajo: Nodo manual]** storePopupContext soporta guardar contexto predeterminado ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe
- **[Flujo de trabajo: Cálculo JSON]** Hacer que el nodo de consulta JSON sea comprobable por @mytharcher
- **[Adaptador de cola Redis]** Hacer disponible la cola concurrente cuando los elementos en proceso no están completos para el adaptador Redis por @mytharcher
- **[Autenticación: DingTalk]** En el cliente DingTalk, establecer el título de la barra de navegación como una cadena vacía en lugar de mostrar "Cargando…" por @2013xile

### 🐛 Corrección de Errores

- **[utilidades]** Manejo incorrecto de la zona horaria para parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh
- **[cliente]**

  - Corregir elemento de vista previa de archivo en url nula ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher
  - Añadir URL completa al archivo local al previsualizar ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher
  - Corregir problema donde la tabla de árbol no se puede expandir ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe
  - Corregir comportamiento inesperado en la ordenación por arrastrar y soltar de filas de tabla ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu
  - Corregir problema de bucle infinito al analizar valores predeterminados de campos ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe
  - Problema de visualización del campo de fecha en el selector de datos de campo de asociación en el popup del formulario de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh
  - La búsqueda difusa no funciona en el campo de asociación de selección al usar fórmula como campo de título ([#7280](https://github.com/nocobase/nocobase/pull/7280)) por @katherinehhh
  - Falta la variable de objeto actual en las reglas de vinculación de subtablas ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh
  - Corregir problema donde los campos Markdown no se renderizaban correctamente en la vista de detalle. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie
  - Después de cambios en el campo, los campos de asociación que dependen de este campo no han limpiado sus valores ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe
  - Problema de visualización cuando se usan variables de fecha obsoletas en campos de fecha de datos históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh
  - La configuración del campo de título del selector de datos no es válida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe
- **[base de datos]**

  - Resolver fallo de paginación simple automática causado por la convención de nomenclatura de tablas. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie
  - Corregido fallo al exportar grandes conjuntos de datos desde PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie
  - Corregir problema donde la ordenación predeterminada por clave primaria causa fallo de carga de lista al usar fuente de datos externa MSSQL en bloque de tabla. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie
- **[autenticación]** Corregir el problema donde un `secret` vacío en la configuración de subaplicación impide el inicio de sesión ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile
- **[Gestor de archivos]** Corregir permiso de campo de almacenamiento ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher
- **[Flujo de trabajo]**

  - Corregir resultado `undefined` cuando el procesador sale ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher
  - Corregir problema de ID BigInt en MySQL al guardar trabajo ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher
  - Corregir versión incorrecta de dependencia ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher
- **[Flujo de trabajo: Nodo de solicitud HTTP]** Corregir error de condición de carrera ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher
- **[Acción: Exportar registros]** Corregido formato incorrecto de campos relacionales anidados al exportar a Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie
- **[Gestor de fuentes de datos]** Corregido preservar atributos de fuente de datos externa en la configuración de colección ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie
- **[Acción: Edición por lotes]** No se puede realizar edición masiva y actualización masiva en el selector de datos ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe
- **[Fuente de datos: Oracle externa]** Corregido preservar atributos de fuente de datos externa en la configuración de colección por @aaaaaajie
- **[Fuente de datos: SQL Server externo]** Corregir formato de almacenamiento inconsistente para campos datetime (sin zona horaria) de MSSQL desde fuentes de datos externas por @aaaaaajie
- **[Flujo de trabajo: Subflujo]** Corregir flujo suspendido por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregir error lanzado desde el selector de asignatario dentro de fuente de datos externa por @mytharcher
  - La URL del botón Enlace apunta a un popup en la página actual, pero al hacer clic muestra un error 404 por @zhangzhonghe
- **[Gestor de correo electrónico]**

  - añadir campo rawId para optimización de rendimiento por @jiannx
  - el atributo ref en html causa excepción de renderizado por @jiannx
  - la relación de colección de mensajes y etiquetas es excepcional bajo mysql por @jiannx
