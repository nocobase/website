---
title: "NocoBase v1.9.40: Adicionar mais tipos de arquivo para visualização no Microsoft"
description: "Nota de lançamento da v1.9.40"
---

### 🚀 Melhorias

- **[Visualizador de Arquivos do Office]** Adicionar mais tipos de arquivo para visualização no Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir campo nanoid não regenerado após envio do formulário ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh

  - Corrigir mensagem de validação obrigatória duplicada ao limpar um campo em cascata ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh

- **[database]**
  - Corrigir erros ao filtrar com o operador `empty` após recarregar uma coleção ([#8496](https://github.com/nocobase/nocobase/pull/8496)) por @2013xile

  - correção: atualizar profundamente associações aninhadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos

- **[Gerenciador de Arquivos]** Corrigir o problema em que o nome do arquivo obtido do corpo da requisição se tornava uma string decodificada inesperadamente ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher

- **[Fonte de dados: Principal]** Corrigido um problema em que a exclusão de registros de um bloco de tabela de associação muitos-para-muitos não respeitava a restrição do campo de associação `onDelete: 'restrict'` ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile

- **[Bloco: iframe]** Corrigir o erro ao adicionar variáveis agregadas ao Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe

- **[Workflow: Webhook]** Corrigir o problema em que os dados do corpo estão ausentes quando a análise do corpo não está configurada por @mytharcher

- **[Impressão de modelo]** Corrigida lógica incorreta de permissão do botão de impressão quando as funções eram unidas. por @jiannx

- **[Workflow: Aprovação]**
  - Corrigir o problema em que a concorrência faz com que a execução seja retomada repetidamente por @mytharcher

  - Corrigir o problema em que retornar uma aprovação para o nó anterior, mas retornava ao início por @mytharcher

- **[Gerenciador de migração]** Corrigido um possível congelamento do processo causado pelo registro de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock
