---
title: "NocoBase v1.9.0-alpha.3: Suporte para exibir tabelas definidas por plugins na fonte de dados principal"
description: "Nota de lançamento da v1.9.0-alpha.3"
---

### 🎉 Novas Funcionalidades

- **[Fonte de dados: Principal]** Suporte para exibir tabelas definidas por plugins na fonte de dados principal. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) por @aaaaaajie

- **[Fluxo de trabalho: nó de cálculo de data]** Suporte para executar nó de teste por @mytharcher

### 🚀 Melhorias

- **[cliente]** Seletor de cores: Adicionar quatro cores recomendadas ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe

- **[Fluxo de trabalho]** Tornar a comparação compatível com valores de data ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Regras de estilo não funcionando na coluna de ação da tabela ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh

  - Evitar que campos não associativos sejam selecionados em appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher

  - Corrigir erro: Não é possível resolver 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe

  - Ao excluir um menu, os dados correspondentes na tabela uiSchemas não são excluídos ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe

- **[banco de dados]** Corrigido erro ao ativar paginação simples para tabelas de fontes de dados externas ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie

- **[Campo de coleção: Ordenação]** Seleção de campo de ordenação ausente ao duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh

- **[Fluxo de trabalho: Subfluxo]** Corrigir erro lançado quando o sinal de recall chega, mas a execução pendente não está na instância atual por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Corrigir múltiplos níveis de associações ao enviar aprovação por @mytharcher

  - Adicionar tolerância a falhas para aprovação excluída na lista de registros por @mytharcher

- **[Gerenciador de e-mail]** Desempenho otimizado da lista de mensagens de e-mail por @jiannx
