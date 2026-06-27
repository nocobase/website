---
title: "NocoBase v2.0.0-alpha.53: suporte à formatação de números para campos de porcentagem"
description: "Nota de lançamento da v2.0.0-alpha.53"
---

### 🚀 Melhorias

- **[acl]** Suporte à API `acl.registerSnippet` para mesclar configuração de snippets ([#8155](https://github.com/nocobase/nocobase/pull/8155)) por @mytharcher

- **[client]** Suporte à formatação de números para campos percentuais ([#8123](https://github.com/nocobase/nocobase/pull/8123)) por @katherinehhh

- **[flow-engine]** Suporte para ocultar dinamicamente o menu de configuração de etapas ([#7924](https://github.com/nocobase/nocobase/pull/7924)) por @gchust

- **[Bloco: GridCard]** Otimização dos estilos do bloco Grid Card para um layout mais compacto ([#8152](https://github.com/nocobase/nocobase/pull/8152)) por @katherinehhh

- **[Funcionários de IA]** Funcionalidade de edição habilitada para prompts de sistema do assistente de IA integrado.<br/>Prompt de sistema otimizado para o assistente de IA Nathan.<br/>Corrigido um problema com o servidor ao ler arquivos estáticos. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) por @heziqiang

- **[Workflow]**
  - Adicionada lógica de tolerância a falhas para dados ausentes na preparação do processador, evitando travamento na execução ([#8156](https://github.com/nocobase/nocobase/pull/8156)) por @mytharcher

  - Uso de carregamento preguiçoso para dados de associação no canvas do workflow para melhorar o desempenho ([#8142](https://github.com/nocobase/nocobase/pull/8142)) por @mytharcher

- **[Campo de coleção: Markdown(Vditor)]** Desabilitar a análise de variáveis no campo Markdown por padrão no modo readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) por @katherinehhh

### 🐛 Correções de Bugs

- **[flow-engine]** Corrigido download incorreto de arquivos para anexos ([#8154](https://github.com/nocobase/nocobase/pull/8154)) por @katherinehhh

- **[client]**
  - Corrigido dropdown de campo de associação sendo desabilitado quando existe campo de opções ([#8153](https://github.com/nocobase/nocobase/pull/8153)) por @katherinehhh

  - Corrigido um problema onde a inserção de texto em chinês limpava opções existentes ao usar operadores de múltipla seleção em campo de seleção única no bloco de formulário de filtro. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) por @gchust

  - Corrigido um problema onde a troca de campos de rótulo causava perda de configurações de popup. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) por @gchust

- **[acl]** Corrigido o problema onde a API `acl.can` retornava `null` quando o papel era `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) por @mytharcher

- **[database]** `filterByTk` agora suporta arrays ao consultar coleções com múltiplas chaves de destino de filtro ([#7986](https://github.com/nocobase/nocobase/pull/7986)) por @chenos

- **[Ação: Importar registros]** Aguardar sincronizadamente a conclusão dos eventos `afterCreate` disparados pela importação. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) por @2013xile

- **[Campo de coleção: Sequência]** Melhoria na robustez do plugin-field-sequence ao lidar com o comando de reparo ([#8139](https://github.com/nocobase/nocobase/pull/8139)) por @cgyrock

- **[Workflow: Nó manual]** Corrigido o problema onde a lista de tarefas manuais estava usando API incorreta ([#8144](https://github.com/nocobase/nocobase/pull/8144)) por @mytharcher

- **[Criptografia de requisição HTTP]** Uso de colchetes para formato de array na análise qs por @chenos

- **[Workflow: Aprovação]** Corrigido o problema onde um erro era lançado ao cancelar uma execução quando seu workflow era excluído por @mytharcher

- **[Gerenciador de migração]** Corrigido um problema onde quebras de linha em dados eram perdidas durante a migração. por @cgyrock
