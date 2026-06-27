---
title: "NocoBase v1.9.0-beta.13: Refatoração da configuração de branch para se adaptar às mudanças do kernel"
description: "Nota de lançamento da v1.9.0-beta.13"
---

### 🚀 Melhorias

- **[client]** Para obter um tipo MIME mais preciso de arquivos, use o pacote `mime` para detectar o tipo MIME no cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher

- **[Fonte de dados: Principal]** Reformule a lógica de localização para mensagens de erro e trate-as dentro do plugin de tratamento de erros ([#7582](https://github.com/nocobase/nocobase/pull/7582)) por @2013xile

- **[Workflow]** Adicione a opção `keepBranch` ao excluir um nó ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher

- **[Workflow: Aprovação]** Reformule a configuração de ramificações para se adaptar às mudanças do kernel por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrige erro ao limpar campo de data no bloco de filtro ([#7632](https://github.com/nocobase/nocobase/pull/7632)) por @katherinehhh

  - Corrige valor padrão da subtabela não funcionando no drawer do formulário de edição ([#7631](https://github.com/nocobase/nocobase/pull/7631)) por @katherinehhh

  - Corrige o problema em que as imagens não eram exibidas corretamente quando rotacionadas e redimensionadas durante a pré-visualização ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher

  - Corrige o problema de pop-ups do ícone da aba ficarem obscurecidos ([#7607](https://github.com/nocobase/nocobase/pull/7607)) por @zhangzhonghe

- **[database]** Corrige erro lançado quando o operador `$in` encontra valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher

- **[Fonte de dados: Principal]** Corrige o problema em que os metadados não eram sincronizados entre vários nós após criar um campo de associação reversa ([#7628](https://github.com/nocobase/nocobase/pull/7628)) por @mytharcher

- **[Workflow: Aprovação]**
  - Corrige o problema de erros no script de migração devido a tabelas inexistentes quando o aplicativo não está instalado por @mytharcher

  - Corrige o problema do ID Snowflake não ser gerado devido a hooks ignorados por @mytharcher

- **[Auth: LDAP]** Corrige falha de bind LDAP com DNs não-ASCII (UTF-8) no Active Directory por @2013xile
