---
title: "NocoBase v2.0.12: Adicionar bloqueio para backup agendado entre nós do cluster"
description: "Nota de lançamento da v2.0.12"
---

### 🚀 Melhorias

- **[Adaptador de bloqueio Redis]** Refatoração devido à mudança na API do LockManager no repositório principal por @mytharcher

- **[Gerenciador de backup]** Adicionado bloqueio para backups agendados entre nós do cluster por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Blocos v2 agora exibem apenas ações suportadas pela fonte de dados atual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe

  - Corrigido problema de estilo do botão "voltar" em subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe

- **[gerenciador de bloqueio]** Corrigido problema de condição de corrida no gerenciador de bloqueio ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher

- **[servidor]** Corrigido erro em consultas de dados de fontes de dados não relacionadas a banco de dados ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock

- **[Controle de acesso]** Corrigido erro de modificação de dados em fontes de dados da API Restful ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock

- **[Ação: Exportar registros]** Corrigido problema em que o campo belongsToArray ficava em branco no Excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock
