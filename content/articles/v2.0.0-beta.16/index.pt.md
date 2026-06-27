---
title: "NocoBase v2.0.0-beta.16: Adicionar API para mover nó"
description: "Nota de lançamento da v2.0.0-beta.16"
---

### 🎉 Novas Funcionalidades

- **[client]** adicionar componente de campo de subtabela (edição em popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) por @katherinehhh

- **[Workflow]** Adicionar API para mover nó ([#8507](https://github.com/nocobase/nocobase/pull/8507)) por @mytharcher

### 🚀 Melhorias

- **[client]**
  - evitar re-renderização completa da tabela ao atualizar uma célula ([#8349](https://github.com/nocobase/nocobase/pull/8349)) por @katherinehhh

  - Melhorar subformulário de muitos-para-muitos para inicializar com um item padrão e evitar a criação de registros quando deixado vazio ([#8458](https://github.com/nocobase/nocobase/pull/8458)) por @katherinehhh

- **[Gerenciador de arquivos]** Adicionar visualizador extensível para o gerenciador de arquivos ([#8501](https://github.com/nocobase/nocobase/pull/8501)) por @mytharcher

- **[Workflow]** Alterar o caminho da rota das subpáginas do workflow, para que todas as páginas do workflow fiquem sob o prefixo `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir hora duplicada no valor DateTime do filtro ([#8506](https://github.com/nocobase/nocobase/pull/8506)) por @zhangzhonghe

  - Corrigido um problema que impedia o uso de variáveis de formulário para atribuir valores em regras de vinculação para campos de subformulário de muitos-para-muitos em vários níveis. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) por @gchust

  - Corrigir um problema em que os dados não eram atualizados após alterações em popups de vários níveis e entre blocos. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) por @gchust

  - corrigir problema em que os dados de subdetalhe no modo somente leitura não eram exibidos corretamente no formulário de edição ([#8469](https://github.com/nocobase/nocobase/pull/8469)) por @katherinehhh

  - corrigir lógica de refinamento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh

  - corrigir parâmetros de filtro incorretos para o campo Select de relação em subtabela editável ([#8335](https://github.com/nocobase/nocobase/pull/8335)) por @katherinehhh

- **[mecanismo de fluxo]** corrigir problema do FilterByTK quando filterTargetKey é um array de um único elemento em fonte de dados externa ([#8522](https://github.com/nocobase/nocobase/pull/8522)) por @katherinehhh

- **[Funcionários de IA]** corrigir problemas de configuração inconsistente de campos selecionáveis entre modelagem de IA e gerenciamento de fontes de dados ([#8488](https://github.com/nocobase/nocobase/pull/8488)) por @cgyrock

- **[Gerenciador de e-mail]** corpo não recolhe quando o texto é selecionado. corrigir falha ao baixar anexo por @jiannx
