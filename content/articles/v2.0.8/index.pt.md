---
title: "NocoBase v2.0.8: Atualizar prompt do usuário no chatbox de IA"
description: "Nota de lançamento da v2.0.8"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]** Atualização do prompt do usuário no chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🐛 Correções de Bugs

- **[servidor]** Resolução de problema de cache ao adicionar hash aos assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos

- **[Funcionários de IA]** Corrigido problema de renderização da configuração da fonte de dados de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock

- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigido o problema em que o fluxo de trabalho de ação personalizada travava ao ser executado como subfluxo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Sanitização dos valores de associação nas ações de aprovação para evitar qualquer manipulação de dados além da permissão por @mytharcher

  - Corrigido o problema de erro ao executar manualmente o fluxo de trabalho de aprovação por @mytharcher

  - Corrigido erro gerado pela ausência do valor de `dataAfter` ao adicionar ou delegar por @mytharcher

  - Corrigido o problema de filtragem do parâmetro `appends` pelo ACL por @mytharcher

  - Corrigido problema de ACL em que o valor de associação não deveria ser criado ou atualizado quando o usuário não tem permissão por @mytharcher
