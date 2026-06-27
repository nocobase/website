---
title: "NocoBase v2.1.8: Bloqueo de `@langchain/openai` a actualizaciones de nivel de parche para paquetes de IA"
description: "Nota de la versión v2.1.8"
---

### 🐛 Corrección de errores

- **[ai]**

  - Bloqueada la actualización de `@langchain/openai` a nivel de parche para paquetes de IA. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) por @cgyrock
  - Corregida la resolución de dependencias incompatibles de LangChain para plugins de IA. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) por @cgyrock
- **[IA: Base de conocimiento]**

  - Corregidos mensajes de error poco claros al activar el plugin de base de conocimiento de IA sin tener disponible el plugin de IA. por @cgyrock
  - Corregida la resolución de dependencias incompatibles de LangChain para el plugin de base de conocimiento de IA. por @cgyrock
