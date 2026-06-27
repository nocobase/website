---
title: "NocoBase v1.9.16: Adicionar opções de transformador de mensagens de erro na configuração da fonte de dados da API RESTful"
description: "Nota de lançamento da v1.9.16"
---

### 🎉 Novas Funcionalidades

- **[Fonte de dados: API REST]** Adicionada opção `error message transformer` na configuração da fonte de dados da API RESTful por @cgyrock

### 🚀 Melhorias

- **[cliente]**
  - Exibir opções recolhidas ao passar o mouse no componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh

  - Otimizar mensagens de validação para subtabelas ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh

- **[Workflow]** Adicionado contexto da fonte de dados "principal" para UserSelect, a fim de fornecer um componente mais comum que possa ser usado em outros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher

- **[Workflow: Aprovação]** Usar componente comum para reduzir código duplicado por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** Corrigido bug de carregamento lento no Variable.Input, que fazia com que o menu de opções de variáveis fosse renderizado incorretamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher

- **[Ação: Importar registros]** Corrigido problema onde ocorria erro quando o campo no xlsx importado tinha valor `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher

- **[Workflow]** Corrigido problema onde a fila era fechada antes da publicação das mensagens ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher

- **[Workflow: Subfluxo]** Corrigido problema onde o workflow selecionado exibia "N/A" quando a contagem de workflows era maior que 200 por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigido problema de permissão ao obter `approvalRecords.reassignee` devido à alteração no `RemoteSelect` por @mytharcher

  - Corrigido problema onde a ação de impressão não funcionava ao atualizar a página com o modal aberto por @mytharcher
