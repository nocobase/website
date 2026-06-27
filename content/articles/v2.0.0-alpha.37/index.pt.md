---
title: "NocoBase v2.0.0-alpha.37: adaptação ao campo tableoid na versão 2.0"
description: "Nota de lançamento da v2.0.0-alpha.37"
---

### 🚀 Melhorias

- **[client]**
  - Adicionar informações da versão da página ao contexto do mecanismo de fluxo ([#7826](https://github.com/nocobase/nocobase/pull/7826)) por @gchust

  - Aprimorar o Editor Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) por @katherinehhh

  - Adaptar ao campo tableoid na versão 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) por @katherinehhh

- **[Visualização de dados]** Atualizar dicas de alerta e anotações de modelos de código de eventos ([#7814](https://github.com/nocobase/nocobase/pull/7814)) por @heziqiang

- **[Controle de acesso]** Otimizar a lógica de controle de permissão para operações em campos de associação ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile

- **[Auth: OIDC]** Aumentar o tempo limite da requisição por @2013xile

### 🐛 Correções de Bugs

- **[servidor]** Corrigir um problema onde, após ativar o modo de divisão de serviço, processos workers que enviam mensagens através da fila de mensagens causavam erros ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher

- **[client]**
  - A variável da coleção atual não deve ser selecionável no seletor de variáveis do componente de filtro ([#7818](https://github.com/nocobase/nocobase/pull/7818)) por @gchust

  - Corrigir o erro 'value.replace is not a function' no campo de relacionamento do formulário de filtro ([#7824](https://github.com/nocobase/nocobase/pull/7824)) por @zhangzhonghe

  - Corrigir parâmetros incorretos no callback onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) por @zhangzhonghe

- **[mecanismo de fluxo]** Corrigir o problema onde as alterações no fluxo de eventos só entravam em vigor após atualizar a página. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) por @gchust

- **[Workflow]** Corrigir o problema onde o plugin de workflow ainda consumia o evento da fila quando não estava no modo worker sob o modo de divisão de serviço ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher

- **[Workflow: Aprovação]** Corrigir um problema onde os campos da coleção principal não eram excluídos ao recarregar dados de associação por @mytharcher

- **[Gerenciador de e-mail]** Corrigir o problema de imagens reservadas e sincronização no outlook por @jiannx
