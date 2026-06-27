---
title: "NocoBase v1.9.23: permite seleccionar ID para campos de importación"
description: "Nota de la versión v1.9.23"
---

### 🚀 Mejoras

- **[auth]** Corregido [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile

- **[Acción: Importar registros]** Permitir seleccionar ID para campos de importación ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh

### 🐛 Corrección de errores

- **[servidor]** Se corrigió un problema por el cual los flujos de trabajo activados no se añadían a la cola de procesamiento después de importar datos, garantizando que los flujos de trabajo se ejecuten según lo esperado inmediatamente después de la importación ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher
