---
title: "NocoBase v2.0.0-alpha.62: Melhoria nas verificações de permissão ao modificar campos de associação aninhados"
description: "Nota de lançamento da v2.0.0-alpha.62"
---

### 🚀 Melhorias

- **[Controle de acesso]** Melhora as verificações de permissão ao modificar campos de associação aninhados ([#7856](https://github.com/nocobase/nocobase/pull/7856)) por @2013xile

### 🐛 Correções de Bugs

- **[client]**
  - Corrige a lógica de refinamento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh

  - Corrige o problema em que os campos de associação não estavam corretos no componente `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) por @mytharcher

  - Corrige parâmetros de filtro incorretos para o campo de relação Select em subtabela editável ([#8335](https://github.com/nocobase/nocobase/pull/8335)) por @katherinehhh

- **[flow-engine]** Corrige um problema em que a poluição de estado poderia ocorrer ao abrir popups várias vezes. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) por @gchust

- **[database]** Corrige o objeto `appends` no `OptionsParser` e aumenta o `arrayLimit` para parâmetros ([#8328](https://github.com/nocobase/nocobase/pull/8328)) por @mytharcher

- **[Ação: Importar registros]** Corrige mensagem de erro incorreta quando uma restrição de unicidade é acionada durante a importação XLSX assíncrona ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock

- **[Fonte de dados: Principal]** Os metadados da coleção de visualização devem incluir as opções do campo de origem ([#8337](https://github.com/nocobase/nocobase/pull/8337)) por @2013xile

- **[Ação: Exportar registros Pro]** Corrige erro quando sub-aplicações executam tarefas de importação/exportação assíncronas enquanto a aplicação principal não possui o plugin de importação/exportação pro ativado por @cgyrock

- **[Workflow: Aprovação]** Corrige o problema em que os campos de filtro não funcionavam corretamente no centro de tarefas por @mytharcher

- **[Gerenciador de e-mail]** Exibe o botão de responder a todos e o escopo dos dados suporta a filtragem de mensagens filhas. por @jiannx
