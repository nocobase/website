---
title: "NocoBase v1.9.26: Suporte à API `acl.registerSnippet` para mesclar configuração de snippet"
description: "Nota de lançamento da v1.9.26"
---

### 🚀 Melhorias

- **[acl]** Suporte à API `acl.registerSnippet` para mesclar configuração de snippets ([#8155](https://github.com/nocobase/nocobase/pull/8155)) por @mytharcher

- **[Controle de acesso]** Impedir a atribuição da função raiz a usuários ([#8180](https://github.com/nocobase/nocobase/pull/8180)) por @2013xile

### 🐛 Correções de Bugs

- **[Configurações de licença]**
  - Corrigir exceção de build ts do plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) por @jiannx

  - Otimização de licença e adição de informações de aviso ([#7993](https://github.com/nocobase/nocobase/pull/7993)) por @jiannx

- **[Gerenciador de arquivos]** Corrigir problema onde a pré-visualização de arquivo `.txt` no OSS usava charset incorreto ([#8161](https://github.com/nocobase/nocobase/pull/8161)) por @mytharcher

- **[Ação: Importar registros]** Aguardar sincronizadamente a conclusão dos eventos `afterCreate` disparados pela importação. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) por @2013xile

- **[Coleção: Conectar a dados externos (FDW)]** Corrigir problema onde o carregamento falhava para tabelas com nomes em maiúsculas por @2013xile

- **[Fonte de dados: SQL Server externo]** Corrigir problemas onde as opções `encrypt` e `trustServerCertificate` não estavam disponíveis por @2013xile
