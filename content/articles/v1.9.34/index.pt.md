---
title: "NocoBase v1.9.34: Melhorias nas verificações de permissão ao modificar campos de associação aninhados"
description: "Nota de lançamento da v1.9.34"
---

### 🚀 Melhorias

- **[Controle de acesso]** Melhora nas verificações de permissão ao modificar campos de associação aninhados ([#7856](https://github.com/nocobase/nocobase/pull/7856)) por @2013xile

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige campos de associação de fontes de dados externas que não carregam dados de associação em blocos de formulário ([#8356](https://github.com/nocobase/nocobase/pull/8356)) por @katherinehhh

  - Corrige o problema em que os campos de associação não estão corretos no componente `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) por @mytharcher

- **[logger]** Corrige informações de erro extras sendo descartadas ao imprimir logs do sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock

- **[Workflow: Nó de loop]** Corrige o problema em que um nó com falha em uma ramificação de condição não consegue passar o status para o nó de ramificação superior ([#8360](https://github.com/nocobase/nocobase/pull/8360)) por @mytharcher

- **[Fonte de dados: Principal]** Os metadados da coleção de visualização devem incluir opções de campo de origem ([#8337](https://github.com/nocobase/nocobase/pull/8337)) por @2013xile

- **[Workflow]**
  - Corrige problema de regra de vinculação no bloco de detalhes do nó CC do workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe

  - Adiciona ID da instância ao ID Snowflake dos jobs, para evitar problemas de conflito de ID em modo cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher

  - Corrige o problema em que a página de execução trava quando o workflow é excluído ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher

- **[Ação: Importar registros]** Corrige mensagem de erro incorreta quando um erro de restrição única é acionado durante a importação XLSX assíncrona ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock

- **[Controle de acesso]**
  - Permite que campos de associação se associem usando as chaves de destino ([#8352](https://github.com/nocobase/nocobase/pull/8352)) por @2013xile

  - Corrige um problema em que a fonte de dados é resolvida incorretamente ao processar permissões para campos de associação ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile

- **[Fonte de dados: API REST]** Adiciona tolerância a falhas para o contexto da requisição, para evitar erro lançado quando o método não está no contexto por @mytharcher

- **[Ação: Exportar registros Pro]** Corrige erro quando sub-aplicações executam tarefas assíncronas de importação/exportação enquanto a aplicação principal não possui o plugin de importação/exportação pro ativado por @cgyrock

- **[Workflow: Aprovação]** Corrige o problema em que os campos de filtro não funcionam corretamente no centro de tarefas por @mytharcher
