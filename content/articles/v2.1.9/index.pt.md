---
title: "NocoBase v2.1.9: Adicionar opção de substituição de valor para configurações de valor de campo"
description: "Nota de lançamento da v2.1.9"
---

### 🚀 Melhorias

- **[client-v2]** Adicionar opção de valor de substituição para configurações de valor de campo. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) por @gchust

### 🐛 Correções de Bugs

- **[client-v2]**
  - Corrigido o envio de contexto JSON personalizado pelos botões de gatilho de fluxo de trabalho de ação personalizada sob uma propriedade extra `values` ou como uma string serializada. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) por @mytharcher

  - Corrigido um problema em que configurar o valor de um campo de associação como valor fixo ou valor padrão não surtia efeito. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) por @gchust

- **[auth]** Dados de senha criptografados não são mais incluídos nas respostas de status de login ([#9836](https://github.com/nocobase/nocobase/pull/9836)) por @2013xile

- **[app]** Ignorar currentScript não relacionado ao inferir caminho público do plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) por @chenos

- **[Modelos de UI]** Corrigido contexto padrão incorreto para ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) por @gchust
