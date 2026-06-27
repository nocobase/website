---
title: "NocoBase v1.8.0-alpha.10: Suporte ao carregamento sob demanda de coleções de fontes de dados externas"
description: "Nota de lançamento da v1.8.0-alpha.10"
---

### 🎉 Novas Funcionalidades

- **[Gerenciador de fontes de dados]** ✨ Suporte ao carregamento sob demanda de coleções de fontes de dados externas ([#6979](https://github.com/nocobase/nocobase/pull/6979)) por @aaaaaajie

- **[Fluxo de trabalho: nó de requisição HTTP]** Suporte a requisições `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) por @shushu992

- **[Fonte de dados: SQL Server externo]** Suporte ao carregamento sob demanda de coleções de fontes de dados externas por @aaaaaajie

### 🐛 Correções de Bugs

- **[cliente]**
  - Quando as variáveis do parâmetro de consulta da URL estão vazias, as condições de escopo de dados não são removidas ([#7104](https://github.com/nocobase/nocobase/pull/7104)) por @zhangzhonghe

  - Limitação de intervalo incorreta em campos de data com hora ([#7107](https://github.com/nocobase/nocobase/pull/7107)) por @katherinehhh

- **[Mobile]** Corrigido problema de z-index em popups no mobile ([#7110](https://github.com/nocobase/nocobase/pull/7110)) por @zhangzhonghe

- **[Calendário]** Problema no campo de data no formulário de criação rápida do bloco de calendário ([#7106](https://github.com/nocobase/nocobase/pull/7106)) por @katherinehhh

- **[Fluxo de trabalho: Aprovação]**
  - Corrigida API de variável legada que gerava erro por @mytharcher

  - Corrigidos estilos para mobile por @mytharcher

  - Corrigido erro gerado quando a coleção relacionada à aprovação era excluída por @mytharcher

- **[Gerenciador de e-mail]** Anexo não é exibido por @jiannx
