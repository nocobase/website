---
title: "NocoBase v2.0.0-alpha.15: Adicionar novos provedores de LLM"
description: "Nota de lançamento da v2.0.0-alpha.15"
---

### 🚀 Melhorias

- **[client]** suporte a campos de associação no modelo de campo JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) por @gchust

- **[AI employees]**
  - O Provedor LLM da OpenAI foi refatorado em dois provedores separados para oferecer suporte às APIs Completions e Responses da OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) por @cgyrock

  - Adicionado novo provedor LLM Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) por @ReLaMi96

### 🐛 Correções de Bugs

- **[Workflow: Approval]**
  - Corrigido o problema em que a contagem de tarefas não era atualizada após a adição de um responsável por @mytharcher

  - Corrigido o problema de timeout de transação causado por transações que não eram revertidas corretamente quando ocorriam erros no banco de dados após o envio da aprovação por @mytharcher
