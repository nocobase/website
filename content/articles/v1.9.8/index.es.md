---
title: "NocoBase v1.9.8: Corrección de errores"
description: "Nota de la versión v1.9.8"
---

### 🐛 Corrección de errores

- **[Flujo de trabajo: evento de acción personalizada]** Se corrige el error causado por escuchar eventos de fuentes de datos externas inexistentes por @mytharcher
- **[Impresión de plantillas]** Se analizan las variables en el filtro por @jiannx
- **[Flujo de trabajo: Aprobación]** Se corrige un problema donde las condiciones de carrera durante el procesamiento de aprobación concurrente por múltiples aprobadores podían provocar que un nodo del flujo de trabajo se ejecutara más de una vez por @mytharcher
