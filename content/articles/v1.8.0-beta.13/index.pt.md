---
title: "NocoBase v1.8.0-beta.13: Suporte ao campo BIT no SQL Server para fontes de dados externas"
description: "Nota de lançamento da v1.8.0-beta.13"
---

### 🎉 Novas Funcionalidades

- **[client]**

  - Suporte ao campo BIT no SQL Server para fontes de dados externas. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) por @aaaaaajie
  - Suporte a variáveis de agregação personalizadas ([#6916](https://github.com/nocobase/nocobase/pull/6916)) por @zhangzhonghe
    Referência: [Variáveis personalizadas](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** suporte a autorização comercial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) por @jiannx
- **[Gerenciador de fontes de dados]** ✨ Suporte ao carregamento sob demanda de coleções de fontes de dados externas ([#6979](https://github.com/nocobase/nocobase/pull/6979)) por @aaaaaajie
- **[Configurações de licença]** adicionar configuração de licença e validar licença antes de baixar plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) por @jiannx
- **[Autenticação]** Suporte à função "Esqueci a senha" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) por @zhangzhonghe
  Referência: [Esqueci a senha](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Ação: Atualização em lote]** Suporte à atualização de dados em outros blocos de dados após atualizar dados em um bloco ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe
- **[Fonte de dados: SQL Server externo]**

  - Adicionado suporte ao campo BIT do SQL Server em fontes de dados externas por @aaaaaajie
  - Suporte ao carregamento sob demanda de coleções de fontes de dados externas por @aaaaaajie
- **[Variáveis personalizadas]** Suporte a variáveis de agregação personalizadas por @zhangzhonghe
  Referência: [Variáveis personalizadas](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[Gerenciador de e-mail]**

  - suporte para excluir e-mail por @jiannx
  - suporte para configuração de intervalo de sincronização de e-mail por @jiannx
  - suporte para envio em massa por @jiannx

### 🚀 Melhorias

- **[client]**

  - Suporte ao preenchimento de campos de entrada via leitura de código QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) por @katherinehhh
  - Determinar se deve exibir os componentes móveis com base no tipo de dispositivo, em vez da largura da página ([#6611](https://github.com/nocobase/nocobase/pull/6611)) por @zhangzhonghe
  - suporte à localização para conteúdo de bloco Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) por @katherinehhh
  - Determinar se deve exibir o layout móvel com base no tipo de dispositivo, em vez da largura da página ([#6600](https://github.com/nocobase/nocobase/pull/6600)) por @zhangzhonghe
- **[Gerenciador de tarefas assíncronas]** Melhorar o desempenho da criação de tarefas durante a exportação ([#7078](https://github.com/nocobase/nocobase/pull/7078)) por @aaaaaajie
- **[Mobile]** Adaptar o estilo do pop-up de notificação para dispositivos móveis ([#6557](https://github.com/nocobase/nocobase/pull/6557)) por @zhangzhonghe
- **[Gerenciador de e-mail]**

  - suporte para resposta e encaminhamento separados de e-mails dentro do mesmo assunto por @jiannx
  - implementação de esquema para envio de e-mail e suporte a IA por @jiannx
  - suporta o valor de envio padrão em pop-up, suporta pesquisa difusa para destinatários e corrige problemas por @jiannx
  - completar função de envio em massa por @jiannx
  - melhoria funcional e correção de problemas por @jiannx

### 🐛 Correções de Bugs

- **[cli]**

  - Ajustar a cópia da licença ao instalar o plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) por @jiannx
  - erro indefinido ao baixar plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) por @jiannx
- **[client]**

  - Após limpar o valor do badge, a UI não é atualizada ([#7055](https://github.com/nocobase/nocobase/pull/7055)) por @zhangzhonghe
  - Erro ao clicar no botão de filtro ([#7100](https://github.com/nocobase/nocobase/pull/7100)) por @zhangzhonghe
  - Corrigir o problema em que os dados do usuário atual estão vazios ([#7016](https://github.com/nocobase/nocobase/pull/7016)) por @zhangzhonghe
  - O conteúdo exibido incorretamente em páginas abertas através de links pop-up ([#6990](https://github.com/nocobase/nocobase/pull/6990)) por @zhangzhonghe
  - Passar outras props para o componente Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) por @sheldon66
  - A ação de salvar como modelo falhará se contiver campo de associação ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust
- **[database]** tornar o operador eq para campos de string compatível com tipo numérico ([#7062](https://github.com/nocobase/nocobase/pull/7062)) por @chenos
- **[build]** corrigir o erro de tempo de execução do cliente em plugin-workflow-javascript, erro de processo indefinido ([#6859](https://github.com/nocobase/nocobase/pull/6859)) por @jiannx
- **[Visualização de dados]** Problema de paginação de tabela ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile
- **[Gerenciador de fontes de dados]** Corrigido um problema onde a combinação de carregamento sob demanda de fonte de dados e configuração de prefixo de tabela causava um erro "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) por @aaaaaajie
- **[plugin-service-platform]** ajustar texto da licença por @jiannx
- **[Variáveis personalizadas]** Após limpar o valor do badge, a UI não é atualizada por @zhangzhonghe
- **[Gerenciador de e-mail]**

  - anexo não exibido por @jiannx
  - erro de exclusão de e-mail por @jiannx
  - falha ao excluir e-mail por @jiannx
  - pop-up de configuração não exibido por @jiannx
  - a gaveta de resposta não está visível por @jiannx
  - pesquisa difusa de destinatário suporta campos associados por @jiannx
  - adicionar o campo "id" ao mailmessagelabelsMailmessages por @jiannx
  - pesquisa difusa de e-mail para criar filtros únicos por @jiannx
  - múltiplas chaves primárias para a tabela "mailmessagelabels_mailmessages" por @jiannx
