---
title: "NocoBase v2.0.59: Corrección de errores"
description: "Nota de la versión v2.0.59"
---

### 🐛 Corrección de Errores

* **[ai]** Se fijaron las dependencias de LangChain a versiones estables para evitar fallos en las llamadas a herramientas del modelo Ollama y evitar versiones ascendentes afectadas. ([#9604](https://github.com/nocobase/nocobase/pull/9604)) por @cgyrock
* **[motor-de-flujo]** Se corrigió el nivel de registro incorrecto en el frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) por @gchust
* **[Colección: Árbol]** Se corrigieron mensajes de error poco claros cuando las consultas fallaban debido a relaciones circulares padre-hijo en datos de árbol. ([#9603](https://github.com/nocobase/nocobase/pull/9603)) por @zhangzhonghe
* **[IA: Base de conocimiento]** Se fijaron las dependencias de LangChain a versiones estables para evitar fallos en las llamadas a herramientas del modelo Ollama y evitar versiones ascendentes afectadas. por @cgyrock
