---
title: "NocoBase v2.0.0-alpha.54: Ao criar uma coleção, o tipo de campo de ID predefinido pode ser alterado"
description: "Nota de lançamento da v2.0.0-alpha.54"
---

### 🎉 Novas Funcionalidades

- **[client]** Ao criar uma coleção, o tipo do campo de ID predefinido pode ser alterado ([#8129](https://github.com/nocobase/nocobase/pull/8129)) por @cgyrock

### 🚀 Melhorias

- **[client]**
  - alterar a largura da coluna da tabela para usar opções selecionáveis ([#8188](https://github.com/nocobase/nocobase/pull/8188)) por @katherinehhh

  - melhorar os estilos do recordPicker com maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) por @katherinehhh

  - otimizar opções de configuração (Blocos, Campos, Ações) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) por @katherinehhh

- **[Tratamento de erros]** Não expor mensagens de erro brutas do banco de dados em erros de sintaxe SQL, para evitar revelar o tipo de banco de dados ([#8195](https://github.com/nocobase/nocobase/pull/8195)) por @2013xile

- **[Bloco: Mapa]** suportar reticências de texto para campo de mapa no modo de exibição de texto ([#8189](https://github.com/nocobase/nocobase/pull/8189)) por @katherinehhh

- **[Workflow]** Suportar o uso de configuração legada para criar novo em workflow duplicado ([#8165](https://github.com/nocobase/nocobase/pull/8165)) por @mytharcher

- **[Controle de acesso]** Não permitir atribuir a função root a usuários ([#8180](https://github.com/nocobase/nocobase/pull/8180)) por @2013xile

### 🐛 Correções de Bugs

- **[client]**
  - corrigir botão de envio não exibido no formulário de criação quando a função tem permissão de criar ([#8190](https://github.com/nocobase/nocobase/pull/8190)) por @katherinehhh

  - impedir que dados existentes de subtabela/subformulário sejam limpos ao enviar sem selecionar nenhum item ([#8172](https://github.com/nocobase/nocobase/pull/8172)) por @katherinehhh

  - impedir que a configuração de escopo de dados apareça na configuração do formulário de criação ([#8176](https://github.com/nocobase/nocobase/pull/8176)) por @katherinehhh

  - Falha ao salvar o fluxo de eventos da aba ([#8168](https://github.com/nocobase/nocobase/pull/8168)) por @chenos

  - remover espaçamento extra após a aba ser ocultada ([#8167](https://github.com/nocobase/nocobase/pull/8167)) por @chenos

  - corrigir filtragem incorreta de opções selecionadas no seletor de registro de associação ([#8151](https://github.com/nocobase/nocobase/pull/8151)) por @katherinehhh

  - Corrigir problema de renderização do campo tableoid no bloco de formulário ([#8177](https://github.com/nocobase/nocobase/pull/8177)) por @katherinehhh

- **[server]**
  - Atualizar license-kit para a versão mais recente ([#8173](https://github.com/nocobase/nocobase/pull/8173)) por @jiannx

  - Suportar campos de ID Snowflake (53 bits) para fontes de dados externas ([#8185](https://github.com/nocobase/nocobase/pull/8185)) por @2013xile

- **[Bloco: Mapa]** corrigir nível de zoom incorreto do mapa após alternância de menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) por @katherinehhh

- **[Workflow]** Corrigir o problema de apenas um registro ser exibido na lista de registros para execução manual ([#8187](https://github.com/nocobase/nocobase/pull/8187)) por @mytharcher

- **[Visualização de dados]** Resolver problema sobre o modo SQL selecionar fonte de dados externa; <br/>Resolver problema sobre estado de carregamento do bloco de gráfico durante a busca de dados; <br/>Resolver problema sobre bloco de gráfico vazio cancelar configuração; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) por @heziqiang

- **[Funcionários de IA]** Resolver problema sobre quebra de linha em mensagem de IA ([#8096](https://github.com/nocobase/nocobase/pull/8096)) por @heziqiang

- **[Configurações de licença]**
  - corrigir exceção de compilação ts do plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) por @jiannx

  - otimização de licença e adição de informações de aviso ([#7993](https://github.com/nocobase/nocobase/pull/7993)) por @jiannx

- **[Gerenciador de arquivos]** Corrigir o problema de visualização de arquivo `.txt` no OSS com charset incorreto ([#8161](https://github.com/nocobase/nocobase/pull/8161)) por @mytharcher

- **[Fonte de dados: SQL Server externo]** Corrigir problemas onde as opções `encrypt` e `trustServerCertificate` não estão disponíveis por @2013xile

- **[Coleção: Conectar a dados externos (FDW)]** Corrigir problema onde o carregamento falha para tabelas com nomes em maiúsculas por @2013xile

- **[Workflow: Aprovação]** Corrigir o problema onde o status de registros de aprovação não relacionados é alterado incorretamente para `UNPROCESSED` pela ação de aprovação por @mytharcher
