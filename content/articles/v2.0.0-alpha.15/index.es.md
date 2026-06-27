---
title: "NocoBase v2.0.0-alpha.15: Añadir nuevos proveedores de LLM"
description: "Nota de la versión v2.0.0-alpha.15"
---

### 🚀 Mejoras

- **[cliente]** soporte de campos de asociación en el modelo de campo JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) por @gchust

- **[Empleados de IA]**
  - Se ha rediseñado el proveedor LLM de OpenAI en dos proveedores separados para admitir las API de Completions y Responses de OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) por @cgyrock

  - Se ha añadido un nuevo proveedor LLM: Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) por @ReLaMi96

### 🐛 Corrección de errores

- **[Flujo de trabajo: Aprobación]**
  - Se corrige el problema por el cual el recuento de tareas no se actualizaba después de añadir un asignado por @mytharcher

  - Se corrige el problema de tiempo de espera de transacción causado por transacciones que no se revierten correctamente cuando ocurren errores en la base de datos tras el envío de la aprobación por @mytharcher
