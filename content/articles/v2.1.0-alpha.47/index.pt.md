---
title: "NocoBase v2.1.0-alpha.47: Adicionada uma opção para blocos de Gantt focarem no hoje por padrão."
description: "Nota de lançamento da v2.1.0-alpha.47"
---

### 🎉 Novas Funcionalidades

- **[undefined]** Melhorias no gerenciamento de aplicativos gerenciados e plugins na CLI, incluindo tratamento de ambiente com reconhecimento de appPath, importação de plugins, sincronização de plugins licenciados e atualizações na documentação relacionada. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) por @chenos
  Referência: [Documentação da CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Guia rápido](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Bloco: Gantt]** Adicionada uma opção para blocos Gantt focarem no dia atual por padrão. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) por @jiannx
- **[Multi-espaço]** Adicionado suporte ao client v2 para o plugin multi-espaço, incluindo alternância e gerenciamento de espaços. por @jiannx

### 🚀 Melhorias

- **[Workflow]** Removido o acoplamento de transação do histórico de workflow da execução do workflow. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) por @mytharcher
- **[Modelos de UI]** Migrados modelos de UI para o client v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) por @gchust
- **[Filtro de múltiplas palavras-chave]** Migrado filtro de múltiplas palavras-chave para o client v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) por @gchust
- **[Workflow: Subfluxo]** Removido o acoplamento de transação do histórico de workflow das instruções de subfluxo. por @mytharcher
- **[Workflow: Aprovação]** Removido o acoplamento de transação do histórico de workflow das instruções de aprovação. por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Corrigido o problema onde campos vinculados ocultos ainda mantinham valores antigos. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) por @zhangzhonghe
- **[Ação: Importar registros]** Corrigido o recebimento de valores de ordenação duplicados em registros importados. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) por @2013xile
- **[Mecanismo de fluxo]** Corrigido um erro ao converter um bloco de modelo de referência para cópia. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) por @gchust
- **[Bloco: Mapa]** Corrigido um problema onde valores de campos de mapa eram convertidos incorretamente ao alternar entre modos de exibição de texto e mapa em páginas de detalhes. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) por @hongboji
- **[Workflow]** Corrigida a execução duplicada de dispatch de workflow sob workers concorrentes. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) por @mytharcher
- **[Workflow: Aprovação]** Corrigido o problema onde títulos personalizados de campos não eram exibidos nos detalhes do formulário de aprovação. por @zhangzhonghe
