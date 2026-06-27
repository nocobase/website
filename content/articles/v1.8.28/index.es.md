---
title: "NocoBase v1.8.28: Agregar botón de impresión en ventana emergente de detalle en bloques de aprobación personalizados"
description: "Nota de la versión v1.8.28"
---

### 🚀 Mejoras

- **[cliente]** Para obtener un tipo MIME más preciso de los archivos, se utiliza el paquete `mime` para detectar el tipo MIME en el cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher

- **[Flujo de trabajo]**
  - Soporte para limitar el número máximo de nodos en un flujo de trabajo mediante variables de entorno ([#7542](https://github.com/nocobase/nocobase/pull/7542)) por @mytharcher

  - Se añade la opción `keepBranch` al eliminar un nodo ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher

- **[Flujo de trabajo: Nodo de bucle]** Soporte para limitar el número máximo de ciclos en nodos de bucle mediante variables de entorno ([#7543](https://github.com/nocobase/nocobase/pull/7543)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Se añade un botón de impresión en la ventana emergente de detalle de los bloques de aprobación personalizados por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige el problema por el cual las imágenes no se mostraban correctamente al rotarse y escalarse simultáneamente durante la vista previa ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher

  - Se corrige el problema por el cual la falta de propiedades dinámicas en el componente `AssignedField` provocaba errores de carga de archivos en los nodos "Crear registro" o "Actualizar registro" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) por @mytharcher

- **[Formularios públicos]** Se corrige el problema por el cual las reglas de carga de archivos en campos de tipo archivo de los formularios públicos eran incorrectas ([#7553](https://github.com/nocobase/nocobase/pull/7553)) por @mytharcher

- **[Calendario]** Se corrige un problema de consulta de datos causado por un identificador único en el bloque de calendario ([#7562](https://github.com/nocobase/nocobase/pull/7562)) por @katherinehhh

- **[Autenticación: LDAP]** Se corrige un fallo de enlace LDAP con DN que no son ASCII (UTF-8) en Active Directory por @2013xile
