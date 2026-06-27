---
title: "NocoBase v2.1.0-beta.34: Se agregó soporte client-v2 para el plugin Kanban"
description: "Nota de la versión v2.1.0-beta.34"
---

### 🎉 Nuevas Funcionalidades

- **[Bloque: Kanban]** Se añadió soporte para client-v2 en el plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) por @jiannx

### 🚀 Mejoras

- **[cli]** Se mejoró la experiencia de la línea de comandos de NocoBase migrando los flujos de configuración y gestión a Inquirer, y se corrigieron problemas relacionados con la instalación, skills y el tiempo de ejecución de Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) por @chenos

- **[Empleados IA]** Aviso al duplicar nombre de tabla al guardar en la base de datos vectorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock

- **[Gestor de notificaciones]** Cambio de estrategia de cola para optimizar el rendimiento de envío ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Se migraron los plugins block-workbench y workflow-custom-action-trigger a client v2, incluyendo sus modelos de acción y el flujo del escáner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) por @jiannx

- **[Autenticación]** Se implementó la página de configuración de Authenticators en client-v2 y se enviaron componentes reutilizables de tabla, entrada de variables y formularios primitivos para client-v2. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) por @Molunerfinn

- **[IA: Base de conocimiento]** Aviso al duplicar nombre de tabla al guardar en la base de datos vectorial por @cgyrock

- **[Auth: SAML 2.0]** Se añadieron entradas client-v2 para los plugins de autenticación CAS y SAML para que funcionen con la página de inicio de sesión v2 y la configuración de Authenticators. por @Molunerfinn

### 🐛 Corrección de Errores

- **[client-v2]**
  - Se corrigió que la ruta v2 del plugin Kanban fallara al cargar porque las dependencias dnd-kit no eran proporcionadas por el cliente. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) por @jiannx

  - El componente compartido de Tabla v2 ahora muestra el selector de tamaño de página por defecto, igualando el comportamiento de v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) por @Molunerfinn

- **[client]**
  - Se corrigió un problema donde los valores de campos JS en subformularios no se establecían correctamente durante el envío del formulario. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust

  - Se corrigió un problema donde las variables de registro de la ventana emergente actual no se podían resolver en los flujos de eventos de los botones de acción. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust

- **[motor-de-flujo]** Se corrigió un mensaje de error incorrecto en la consola del navegador. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) por @gchust

- **[Empleados IA]**
  - Se corrigió un problema donde los permisos del rol de operador no estaban teniendo efecto en los nodos de empleados IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) por @cgyrock

  - Se corrigieron errores de lectura de archivos OSS de empleados IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock

- **[Documentación de la API]** Se corrigió la documentación de la API de colecciones para que los parámetros de consulta ya no interfieran entre sí ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx

- **[Fuente de datos: Principal]** Se corrigió el problema donde las opciones de campo se escribían en el esquema después de sincronizar campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile

- **[Flujo de trabajo: JavaScript]** Se corrigió la carga del paquete de tiempo de ejecución QuickJS de JavaScript en flujos de trabajo para compilaciones de producción. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) por @mytharcher

- **[Cliente WEB]** Se limpian los datos de los bloques después de eliminar menús. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) por @gchust

- **[Acción: Importar registros]** Se corrigió el problema donde el registro importado en campos similares a fechas mostraba la fecha incorrecta ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher

- **[Acción: Importar registros Pro]** Se corrigió el manejo de la zona horaria para importaciones xlsx Pro por @mytharcher

- **[Auth: SAML 2.0]** Se corrigió el interceptor de redirección automática SAML que parpadeaba el shell de la aplicación y abría paneles dobles en cada navegación. por @Molunerfinn

- **[Acción: Exportar registros Pro]** Se corrigió el problema donde se lanzaba un error al exportar un adjunto desde un campo de URL de adjunto por @mytharcher
