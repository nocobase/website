---
title: "NocoBase v1.9.47: Corrección de problema de seguridad del motor evaluador de `formula.js`"
description: "Nota de la versión v1.9.47"
---

### 🐛 Corrección de Errores

- **[cliente]** Se corrige el problema por el cual el campo de adjuntos asociados, una vez limpiado, no se guardaba al enviar el formulario de edición ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh

- **[utilidades]** Se corrige un problema de seguridad en el motor de evaluación de `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Se corrige el problema por el cual los datos de aprobación no se mostraban en la ventana emergente de detalle del registro si el modo de flujo de trabajo estaba configurado como "Antes de guardar" por @mytharcher
