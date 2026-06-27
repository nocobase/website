---
title: "NocoBase v1.4.0-alpha.20241017164316: Mejoras en los nodos de flujo de trabajo"
description: "Nota de la versión v1.4.0-alpha.20241017164316"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: nodo Bucle]** se añaden más opciones de control a la configuración del nodo bucle ([#5342](https://github.com/nocobase/nocobase/pull/5342)) por @mytharcher
  Referencia: [Nodo Bucle](https://docs.nocobase.com/handbook/workflow-loop)
- **[Flujo de trabajo]** Se añade un botón de ejecución de prueba para los nodos del flujo de trabajo y una API para implementar la función de prueba ([#5407](https://github.com/nocobase/nocobase/pull/5407)) por @mytharcher
- **[Componente de campo: máscara]** Se añade el componente de campo `mask`, que permite mostrar los datos del campo como una cadena enmascarada por @gchust
  Referencia: [Máscara](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Mejoras

- **[cliente]** se permite restablecer el título de la columna de la tabla al valor predeterminado ([#5439](https://github.com/nocobase/nocobase/pull/5439)) por @katherinehhh

### 🐛 Corrección de Errores

- **[cliente]** corregido que las opciones del componente de campo no se traducían correctamente ([#5442](https://github.com/nocobase/nocobase/pull/5442)) por @gchust
- **[Flujo de trabajo: nodo de solicitud HTTP]** corregido el mensaje de error heredado en el nodo de solicitud ([#5443](https://github.com/nocobase/nocobase/pull/5443)) por @mytharcher
