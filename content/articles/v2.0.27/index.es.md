---
title: "NocoBase v2.0.27: Agregar variable para el parámetro de tamaño de página"
description: "Nota de la versión v2.0.27"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Añadir variable para el parámetro de tamaño de página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher

- **[Flujo de trabajo: Subflujo]** Añadir lógica defensiva para evitar bloqueos del flujo de trabajo cuando ocurre una excepción por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** Corregida la excepción al añadir nodos hijos a la tabla de árbol en la ventana emergente ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx

- **[servidor]** Evitar procesar mensajes de sincronización después de que la aplicación se haya detenido ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher

- **[Motor de flujo]** Eliminar evento heredado copiado del repositorio uiSchema para evitar errores al activarse ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher

- **[Autenticación]** corregir acl para admitir parámetros de filtrado de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx

- **[Gestor de correo electrónico]** Corregida la firma que se sobrescribía al usar plantillas por @jiannx
