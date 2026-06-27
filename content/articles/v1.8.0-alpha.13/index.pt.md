---
title: "NocoBase v1.8.0-alpha.13: suporte para resposta e encaminhamento separados de e-mails dentro do mesmo assunto"
description: "Nota de lançamento da v1.8.0-alpha.13"
---

### 🚀 Melhorias

- **[Gerenciador de e-mail]** suporte para resposta e encaminhamento separados de e-mails dentro do mesmo assunto por @jiannx

### 🐛 Correções de bugs

- **[cliente]**
  - problema de estilo de cor de fundo em subtabela no bloco de detalhes ([#7144](https://github.com/nocobase/nocobase/pull/7144)) por @katherinehhh

  - markdown não refletia alterações em tempo real ao referenciar variáveis $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) por @katherinehhh

- **[Visualização de dados]** Problema de paginação em tabela ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile

- **[Gerenciador de fonte de dados]** Corrigido um problema onde a combinação de carregamento sob demanda da fonte de dados e configuração de prefixo de tabela causava um erro "ConnectionManager.getConnection foi chamado após o gerenciador de conexão ter sido fechado". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) por @aaaaaajie
