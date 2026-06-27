---
title: "NocoBase v2.0.0-alpha.49: Permitir escolher entre exibir snapshot ou registro mais recente na interface do processo de aprovação"
description: "Nota de lançamento da v2.0.0-alpha.49"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Aprovação]** Permite escolher se deseja exibir o snapshot ou o registro mais recente na interface do processo de aprovação por @mytharcher

### 🚀 Melhorias

- **[cliente]** Otimiza mensagens de validação para subtabelas ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh

- **[Telemetria: Prometheus]** Atualiza `@opentelemetry/exporter-prometheus` por @2013xile

- **[Ação: Importar registros Pro]** Mensagens de erro aprimoradas para tarefas assíncronas, fornecendo aos usuários motivos específicos para falhas nas tarefas por @mytharcher

### 🐛 Correções de Bugs

- **[mecanismo-de-fluxo]** Corrigido um problema em que a variável do registro atual não era acionada corretamente para resolução no bloco de detalhes. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) por @gchust

- **[cliente]** Corrige problemas de seleção e exclusão de blocos de tabela para chaves compostas ([#7978](https://github.com/nocobase/nocobase/pull/7978)) por @katherinehhh

- **[Ação: Exportar registros]** corrige a ausência de campos do sistema na lista de campos exportáveis ([#8002](https://github.com/nocobase/nocobase/pull/8002)) por @katherinehhh

- **[Coleção: Árvore]** Corrige falhas na atualização da tabela de caminho causadas pela busca incorreta do campo pai da árvore ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile

- **[Campo de coleção: Muitos para muitos (array)]** Corrigido o problema em que o campo m2m array na subtabela não podia ser atualizado ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock

- **[Departamentos]** Corrige o problema em que campos associados ao departamento não podiam ser editados ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang

- **[Workflow: Aprovação]** Corrige problema de permissão ao obter `approvalRecords.reassignee` devido à alteração do `RemoteSelect` por @mytharcher
