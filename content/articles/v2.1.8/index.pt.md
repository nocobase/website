---
title: "NocoBase v2.1.8: Bloqueio de `@langchain/openai` para atualizações de nível de patch em pacotes de IA"
description: "Nota de lançamento da v2.1.8"
---

### 🐛 Correções de Bugs

- **[ai]**

  - Bloqueou `@langchain/openai` para atualizações apenas no nível de patch nos pacotes de IA. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) por @cgyrock
  - Corrigiu a resolução de dependência incompatível do LangChain para plugins de IA. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) por @cgyrock
- **[IA: Base de conhecimento]**

  - Corrigiu mensagens de erro pouco claras ao ativar o plugin de base de conhecimento de IA sem o plugin de IA disponível. por @cgyrock
  - Corrigiu a resolução de dependência incompatível do LangChain para o plugin de base de conhecimento de IA. por @cgyrock
