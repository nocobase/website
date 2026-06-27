---
title: "NocoBase v1.5.4: Agregar carga a la acción duplicada"
description: "Nota de la versión v1.5.4"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Añadir carga a la acción de duplicar ([#6179](https://github.com/nocobase/nocobase/pull/6179)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Corregir error lanzado en la configuración de campos del nodo de creación ([#6187](https://github.com/nocobase/nocobase/pull/6187)) por @mytharcher

  - La opción de configuración 'Permitir selección múltiple' para campos de asociación no se muestra en los Formularios de filtro ([#6174](https://github.com/nocobase/nocobase/pull/6174)) por @zhangzhonghe

  - El campo permanece oculto después de ser ocultado por reglas de vinculación ([#6182](https://github.com/nocobase/nocobase/pull/6182)) por @zhangzhonghe

- **[utilidades]** optimizar la lógica de lectura de almacenamiento/plugins ([#6186](https://github.com/nocobase/nocobase/pull/6186)) por @chenos

- **[Notificación: mensaje en la aplicación]** Corrección: Añadir filtro de usuario a la marca de tiempo del mensaje y subconsultas de título en la API de lista de canales para garantizar el aislamiento de datos. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) por @deepure

- **[Gestor de copias de seguridad]** Los archivos no se copiaban de la copia de seguridad a la carpeta de subidas durante la restauración en modo tolerante por @gchust
