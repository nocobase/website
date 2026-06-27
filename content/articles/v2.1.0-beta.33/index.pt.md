---
title: "NocoBase v2.1.0-beta.33: Adicionado suporte ao cliente v2 para blocos Markdown"
description: "Nota de lançamento da v2.1.0-beta.33"
---

### 🎉 Novas Funcionalidades

- **[Bloco: Markdown]** Adicionado suporte client v2 para blocos Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) por @jiannx

- **[Bloco: Lista]** Blocos de lista suportam client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) por @jiannx

- **[Calendário]** Adicionado suporte client v2 para o plugin Calendário. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) por @jiannx

- **[Bloco: Árvore]** Adicionado suporte client-v2 para o bloco de filtro em árvore. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) por @jiannx

### 🚀 Melhorias

- **[flow-engine]** Adicionada uma mensagem de confirmação de alterações não salvas ao fechar a página de configuração do fluxo de eventos com dados não salvos presentes. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) por @gchust

- **[Gerenciador de fonte de dados]** Otimizada a API de modelagem de dados para suportar a criação de coleções de comentários com IA, configurar campos de relacionamento para fontes de dados externas e definir regras de validação de campos ([#9480](https://github.com/nocobase/nocobase/pull/9480)) por @2013xile

- **[Bloco: GridCard]** Plugin de grid card atualizado para suportar client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) por @jiannx

- **[Bloco: iframe]** Adicionado suporte v2 para o bloco iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) por @jiannx

- **[Funcionários de IA]** Interação de conversação paralela e otimização de desempenho para funcionários de IA ([#9462](https://github.com/nocobase/nocobase/pull/9462)) por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**
  - Adicionada a configuração "Após envio bem-sucedido" para ações de envio de formulário. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) por @jiannx

  - Corrigido impedimento de abrir edição rápida para campos de relacionamento em tabela ([#9469](https://github.com/nocobase/nocobase/pull/9469)) por @katherinehhh

  - Corrigidos campos de relacionamento somente leitura em subtabelas que não apareciam ou não eram clicáveis após atualização. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) por @jiannx

  - Corrigido o problema em que configurações de valor padrão legadas não podiam ser removidas. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust

  - Corrigido: campos de seleção múltipla em blocos de dados v2 devem exibir rótulos das opções em vez de valores ([#9472](https://github.com/nocobase/nocobase/pull/9472)) por @katherinehhh

- **[client-v2]**
  - Corrigido problema em que a lista de opções do campo de título estava vazia para campos de relacionamento em blocos de tabela ([#9490](https://github.com/nocobase/nocobase/pull/9490)) por @katherinehhh

  - Manter grupos vazios após filtrar menus v1 no layout v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) por @zhangzhonghe

- **[flow-engine]** Corrigidos submenus de campo de relacionamento instáveis em menus de submodelo ([#9417](https://github.com/nocobase/nocobase/pull/9417)) por @jiannx

- **[Gerenciador de arquivos]** Corrigido uploads `tx-cos` do gerenciador de arquivos sem metadados de tamanho de arquivo. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher

- **[Funcionários de IA]** Corrigido erro de carregamento do plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) por @cgyrock

- **[Bloco: Formulário multi-etapas]** Corrigido problema de barra de rolagem ao ativar altura total no bloco de formulário de etapas v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) por @katherinehhh

- **[Workflow: Webhook]** Corrigido problema em que a criação de nó de resposta era interceptada pela validação da configuração `statusCode` por @mytharcher

- **[Campo de coleção: Assinatura]** Resolvido problema de exibição da caixa de assinatura em dispositivos móveis por @chenzhizdt
