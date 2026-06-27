---
title: "NocoBase v2.0.19: Corregir el problema donde el apagado elegante no drena todos los eventos"
description: "Nota de la versión v2.0.19"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Se corrige el problema por el cual el apagado ordenado no drenaba todos los eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher

### 🐛 Corrección de errores

- **[Empleados de IA]** Se corrige el problema con la URL especificada para el servicio LLM que no surtía efecto en las llamadas al modelo de incrustación de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock

- **[Acción: Importar registros Pro]** Se corrige el evento `beforeStop` en la subaplicación que no se activaba por @mytharcher
