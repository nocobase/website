---
title: "NocoBase v1.7.0-beta.13: Suporte ao uso de modelo de bloco para formulário de processo de aprovação"
description: "Nota de lançamento da v1.7.0-beta.13"
---

### 🚀 Melhorias

- **[database]**
  - Adicionar opção de trim para campo de texto ([#6603](https://github.com/nocobase/nocobase/pull/6603)) por @mytharcher

  - Adicionar opção de trim para campo de string ([#6565](https://github.com/nocobase/nocobase/pull/6565)) por @mytharcher

- **[client]** suporte para configurar a visibilidade dos dois-pontos nos rótulos dos campos do formulário com base no layout ([#6561](https://github.com/nocobase/nocobase/pull/6561)) por @katherinehhh

- **[Gerenciador de arquivos]** Adicionar opção de trim para campos de texto da coleção de armazenamentos ([#6604](https://github.com/nocobase/nocobase/pull/6604)) por @mytharcher

- **[Workflow]** Melhorar código ([#6589](https://github.com/nocobase/nocobase/pull/6589)) por @mytharcher

- **[Workflow: Aprovação]** Suporte para usar template de bloco no formulário do processo de aprovação por @mytharcher

### 🐛 Correções de Bugs

- **[database]**
  - Evitar alterações no campo "datetimeNoTz" quando o valor não é alterado ao atualizar registro ([#6588](https://github.com/nocobase/nocobase/pull/6588)) por @mytharcher

  - Ao excluir registros um-para-muitos, tanto `filter` quanto `filterByTk` são passados e `filter` inclui um campo de associação, o `filterByTk` é ignorado ([#6606](https://github.com/nocobase/nocobase/pull/6606)) por @2013xile

- **[client]**
  - Corrigir propriedade `disabled` não funcionando quando `SchemaInitializerItem` possui `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) por @mytharcher

  - Problema de cascata: 'O valor de xxx não pode estar no formato de array' ao excluir e reselecionar ([#6585](https://github.com/nocobase/nocobase/pull/6585)) por @katherinehhh

  - Campo de associação (select) exibindo N/A ao expor campos de coleção relacionada ([#6582](https://github.com/nocobase/nocobase/pull/6582)) por @katherinehhh

  - Botões de enviar e atualizar não exibindo corretamente o modo apenas ícone ([#6592](https://github.com/nocobase/nocobase/pull/6592)) por @katherinehhh

- **[Formulários públicos]** Permissões de visualização incluem list e get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) por @chenos

- **[Autenticação]** Atribuição de token em `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) por @2013xile

- **[Campo de coleção: Muitos para muitos (array)]** Problema de filtragem por campos em uma coleção de associação com um campo muitos para muitos (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) por @2013xile

- **[Workflow]** Corrigir exibição incorreta da opção de sincronização ([#6595](https://github.com/nocobase/nocobase/pull/6595)) por @mytharcher

- **[Bloco: Mapa]** Validação do gerenciamento de mapa não deve passar com entrada de espaço ([#6575](https://github.com/nocobase/nocobase/pull/6575)) por @katherinehhh

- **[Auth: OIDC]** Redirecionamento incorreto ocorre quando o caminho de callback é a string 'null' por @2013xile

- **[Workflow: Aprovação]**
  - Corrigir variáveis do cliente para uso no formulário de aprovação por @mytharcher

  - Corrigir modo de ramificação quando `endOnReject` está configurado como `true` por @mytharcher
