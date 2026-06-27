---
title: "NocoBase v1.6.15: Adicionar opção trim para campo de texto"
description: "Nota de lançamento da v1.6.15"
---

### 🚀 Melhorias

- **[database]**
  - Adicionar opção de trim para campo de texto ([#6603](https://github.com/nocobase/nocobase/pull/6603)) por @mytharcher

  - Adicionar opção de trim para campo de string ([#6565](https://github.com/nocobase/nocobase/pull/6565)) por @mytharcher

- **[Gerenciador de arquivos]** Adicionar opção de trim para campos de texto da coleção de armazenamentos ([#6604](https://github.com/nocobase/nocobase/pull/6604)) por @mytharcher

- **[Workflow]** Melhorar código ([#6589](https://github.com/nocobase/nocobase/pull/6589)) por @mytharcher

- **[Workflow: Aprovação]** Suporte ao uso de template de bloco para o formulário do processo de aprovação por @mytharcher

### 🐛 Correções de Bugs

- **[database]** Evitar alterações no campo "datetimeNoTz" quando o valor não for alterado ao atualizar registro ([#6588](https://github.com/nocobase/nocobase/pull/6588)) por @mytharcher

- **[client]**
  - campo de associação (select) exibindo N/A ao expor campos de coleção relacionada ([#6582](https://github.com/nocobase/nocobase/pull/6582)) por @katherinehhh

  - Corrigir propriedade `disabled` não funcionando quando `SchemaInitializerItem` possui `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) por @mytharcher

  - problema de cascata: 'O valor de xxx não pode estar no formato de array' ao excluir e reselecionar ([#6585](https://github.com/nocobase/nocobase/pull/6585)) por @katherinehhh

- **[Campo de coleção: Muitos para muitos (array)]** Problema ao filtrar por campos em uma coleção de associação com um campo muitos para muitos (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) por @2013xile

- **[Formulários públicos]** Permissões de visualização incluem listar e obter ([#6607](https://github.com/nocobase/nocobase/pull/6607)) por @chenos

- **[Autenticação]** Atribuição de token em `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) por @2013xile

- **[Workflow]** Corrigir exibição incorreta da opção de sincronização ([#6595](https://github.com/nocobase/nocobase/pull/6595)) por @mytharcher

- **[Bloco: Mapa]** Validação do gerenciamento de mapa não deve passar com entrada de espaço ([#6575](https://github.com/nocobase/nocobase/pull/6575)) por @katherinehhh

- **[Workflow: Aprovação]**
  - Corrigir variáveis do cliente para uso no formulário de aprovação por @mytharcher

  - Corrigir modo de ramificação quando `endOnReject` está configurado como `true` por @mytharcher
