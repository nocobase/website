---
title: "NocoBase v1.9.0-beta.13: Refactorizar la configuración de ramas para adaptarse a los cambios del núcleo"
description: "Nota de la versión v1.9.0-beta.13"
---

### 🚀 Mejoras

- **[cliente]** Para obtener un tipo MIME más preciso de los archivos, se utiliza el paquete `mime` para detectar el tipo MIME en el cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher

- **[Fuente de datos: Principal]** Se ha rediseñado la lógica de localización de los mensajes de error, y se maneja dentro del plugin de gestión de errores ([#7582](https://github.com/nocobase/nocobase/pull/7582)) por @2013xile

- **[Flujo de trabajo]** Se ha añadido la opción `keepBranch` al eliminar un nodo ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Se ha rediseñado la configuración de ramas para adaptarse a los cambios del núcleo por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige el error al limpiar el campo de fecha en un bloque de filtro ([#7632](https://github.com/nocobase/nocobase/pull/7632)) por @katherinehhh

  - Se corrige que el valor predeterminado de la subtabla no funcionara en el cajón del formulario de edición ([#7631](https://github.com/nocobase/nocobase/pull/7631)) por @katherinehhh

  - Se corrige el problema por el que las imágenes no se mostraban correctamente cuando se rotaban y escalaban durante la vista previa ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher

  - Se corrige el problema de que las ventanas emergentes de los iconos de las pestañas quedaban ocultas ([#7607](https://github.com/nocobase/nocobase/pull/7607)) por @zhangzhonghe

- **[base de datos]** Se corrige el error lanzado cuando el operador `$in` se encuentra con un valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher

- **[Fuente de datos: Principal]** Se corrige el problema por el que los metadatos no se sincronizaban en múltiples nodos después de crear un campo de asociación inversa ([#7628](https://github.com/nocobase/nocobase/pull/7628)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Se corrige el problema de errores en el script de migración debido a tablas inexistentes cuando la aplicación no está instalada por @mytharcher

  - Se corrige el problema de que el ID Snowflake no se generara debido a hooks omitidos por @mytharcher

- **[Auth: LDAP]** Se corrige el fallo de enlace LDAP con DN que no son ASCII (UTF-8) en Active Directory por @2013xile
