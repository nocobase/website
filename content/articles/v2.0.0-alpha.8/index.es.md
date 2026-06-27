---
title: "NocoBase v2.0.0-alpha.8: Mejora de la función de búsqueda web del plugin-ai"
description: "Nota de la versión v2.0.0-alpha.8"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** Mejora de la función de búsqueda web de plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) por @cgyrock

### 🚀 Mejoras

- **[cliente]** Para obtener un tipo MIME de archivo más preciso, se utiliza el paquete `mime` para detectar el tipo MIME de archivos en el cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher

- **[motor-de-flujo]**
  - Soporte para variable emergente ([#7583](https://github.com/nocobase/nocobase/pull/7583)) por @gchust

  - Mejora de la experiencia de edición de código con fragmentos más enriquecidos y autocompletados sensibles al contexto para varios escenarios ([#7559](https://github.com/nocobase/nocobase/pull/7559)) por @gchust

  - Flujos de trabajo automáticos estandarizados para que se activen de manera consistente mediante el evento "beforeRender", garantizando un funcionamiento predecible y unificado en todos los procesos. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) por @gchust

- **[Flujo de trabajo]** Añadida la opción `keepBranch` al eliminar un nodo ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher

- **[Visualización de datos]** Ampliación de tipos de gráficos; optimización de la interfaz de usuario y la experiencia interactiva. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) por @heziqiang

- **[Flujo de trabajo: Aprobación]** Refactorización de la configuración de ramas para adaptarse a los cambios del núcleo por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Corrección de problemas de visualización anormal de la página al cambiar la paginación de la tabla ([#7572](https://github.com/nocobase/nocobase/pull/7572)) por @zhangzhonghe

  - No se puede configurar el valor de campo asignado para las acciones `Actualizar` y `Actualización masiva` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) por @gchust

  - Corrección del problema por el cual las imágenes no se mostraban correctamente cuando se rotaban y escalaban durante la vista previa ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corrección del problema de errores en el script de migración debido a tablas inexistentes cuando la aplicación no está instalada por @mytharcher

- **[Autenticación: LDAP]** Corrección del fallo de enlace LDAP con DN no ASCII (UTF-8) en Active Directory por @2013xile
