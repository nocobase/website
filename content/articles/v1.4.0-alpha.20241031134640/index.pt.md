---
title: "NocoBase v1.4.0-alpha.20241031134640: Adicionar canal de notificação WeCom"
description: "Nota de lançamento da v1.4.0-alpha.20241031134640"
---

### 🎉 Novas Funcionalidades

- **[WeCom]** Adicionar canal de notificação WeCom por @chenzhizdt

### 🚀 Melhorias

- **[client]** restaurar valor padrão quando o título do campo é limpo ([#5549](https://github.com/nocobase/nocobase/pull/5549)) por @katherinehhh

- **[Gerenciador de notificações]**
  - Adicionar componentes UserSelect e UserAddition para simplificar o desenvolvimento de canais de notificação ([#5553](https://github.com/nocobase/nocobase/pull/5553)) por @2013xile

  - adicionar API para obter o registro de tipos de canal do plugin de notificação ([#5531](https://github.com/nocobase/nocobase/pull/5531)) por @mytharcher

  - ajustar o nome do registro de tipos de canal do plugin de notificação ([#5532](https://github.com/nocobase/nocobase/pull/5532)) por @mytharcher

  - adicionar API do plugin gerenciador de notificações para obter todos os tipos registrados ([#5529](https://github.com/nocobase/nocobase/pull/5529)) por @mytharcher

- **[Notificação: Mensagem no aplicativo]** Melhorar a interface de mensagem no aplicativo e adicionar alguns logs. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) por @sheldon66

### 🐛 Correções de Bugs

- **[database]**
  - corrigir atualização de opções de coleção com chave alvo de filtro ([#5558](https://github.com/nocobase/nocobase/pull/5558)) por @chareice

  - corrigir valor errado de primaryKeyField no sequelize ao trabalhar com múltiplas chaves alvo de filtro ([#5556](https://github.com/nocobase/nocobase/pull/5556)) por @chareice

- **[client]**
  - Corrigir o problema em que componentes esqueleto em blocos de tabela não desaparecem ([#5548](https://github.com/nocobase/nocobase/pull/5548)) por @zhangzhonghe

  - Corrigir problemas com ação de exclusão, reticências de texto e exibição de novos dados em subtabela ([#5523](https://github.com/nocobase/nocobase/pull/5523)) por @katherinehhh

- **[Gerenciador de fonte de dados]** Corrigir remoção de fonte de dados em status de falha ([#5554](https://github.com/nocobase/nocobase/pull/5554)) por @chareice

- **[Notificação: Email]**
  - corrigir a consulta de usuários por IDs em notificação por email ([#5533](https://github.com/nocobase/nocobase/pull/5533)) por @mytharcher

  - corrigir assunto ausente em notificação por email baseada em IDs de usuário ([#5534](https://github.com/nocobase/nocobase/pull/5534)) por @mytharcher

  - corrigir caminho do campo de reação em formulário dinâmico de notificação por email ([#5527](https://github.com/nocobase/nocobase/pull/5527)) por @mytharcher

- **[Campo de coleção: Muitos para muitos (array)]** Corrigir o problema em que o componente de seleção para um campo muitos para muitos (array) tem apenas uma opção ([#5544](https://github.com/nocobase/nocobase/pull/5544)) por @2013xile

- **[Gerenciador de notificações]** corrigir travamento de página devido a tipo de canal errado ([#5528](https://github.com/nocobase/nocobase/pull/5528)) por @mytharcher

- **[Workflow: Nó SQL]** Corrigir sse causando timeout em “waitForLoadState(‘networkidle’)” ([#5524](https://github.com/nocobase/nocobase/pull/5524)) por @hongboji

- **[Componente de campo: máscara]** Corrigido problema em que dados originais não podiam ser exibidos ao clicar se o componente estivesse em estado somente leitura por @gchust

- **[Workflow: Evento de ação personalizada]** Corrigir sse causando timeout em “waitForLoadState(‘networkidle’)” por @hongboji

- **[WeCom]** Corrigir o problema de resposta 404 não encontrada ao entrar no aplicativo a partir da bancada de trabalho do WeCom por @chenzhizdt
