---
title: "NocoBase v2.1.0-alpha.39: Adicionado suporte client-v2 para o plugin Kanban"
description: "Nota de lançamento da v2.1.0-alpha.39"
---

### 🎉 Novas Funcionalidades

- **[Bloco: Kanban]** Adicionado suporte client-v2 para o plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) por @jiannx

### 🚀 Melhorias

- **[client]** Compartilhar avaliação de condições entre aplicativos v1 e v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) por @zhangzhonghe

- **[Localização]** Melhoradas as tarefas de tradução da localização Lina com escopo de tradução, configurações de idioma de referência e edição rápida ([#9521](https://github.com/nocobase/nocobase/pull/9521)) por @2013xile

- **[Funcionários de IA]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock

- **[Gerenciador de notificações]** Alterar estratégia de fila para otimizar o desempenho de envio ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher

- **[Workflow: Evento de ação personalizada]** Migrados os plugins block-workbench e workflow-custom-action-trigger para client v2, incluindo seus modelos de ação e fluxo do leitor de QR code. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) por @jiannx

- **[Autenticação]** Implementar a página de configurações de Autenticadores no client-v2 e disponibilizar componentes reutilizáveis de tabela, entrada de variável e primitivos de formulário do client-v2. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) por @Molunerfinn

- **[IA: Base de conhecimento]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial por @cgyrock

- **[Auth: SAML 2.0]** Adicionar entradas client-v2 para os plugins de autenticação CAS e SAML para que funcionem com a página de login v2 e as configurações de Autenticadores. por @Molunerfinn

- **[Workflow: Aprovação]** Melhorar aprovações relacionadas com cartões de linha do tempo por @zhangzhonghe

### 🐛 Correções de Bugs

- **[undefined]** Alinhar caminhos de configuração do nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) por @chenos

- **[cli-v1]** Corrigida a inicialização de desenvolvimento do create-nocobase-app reutilizando shells de aplicativos empacotados enquanto permite o desenvolvimento local de plugins. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) por @Molunerfinn

- **[client]**
  - Corrigido o problema em que formulários de filtro não podiam usar variáveis do formulário atual ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe

  - Corrigido o problema em que um selo de menu ainda mostrava um ponto quando seu valor era 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe

- **[client-v2]**
  - O componente de Tabela v2 compartilhado agora mostra o seletor de tamanho de página por padrão, correspondendo ao comportamento do v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) por @Molunerfinn

  - Corrigida a falha ao carregar a rota v2 do plugin Kanban porque as dependências dnd-kit não eram fornecidas pelo client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) por @jiannx

- **[Calendário]**
  - Corrigido o estilo do cursor para itens de evento na sobreposição de mais eventos do calendário ([#9519](https://github.com/nocobase/nocobase/pull/9519)) por @jiannx

  - Corrigido o problema em que mais itens do calendário não podiam ser exibidos completamente ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe

- **[Configurações de licença]** Resolver dependências empacotadas com link simbólico ([#9518](https://github.com/nocobase/nocobase/pull/9518)) por @chenos

- **[Funcionários de IA]**
  - Corrigido o problema em que as permissões de função de operador não estavam surtindo efeito nos nós de funcionários de IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) por @cgyrock

  - Corrigidos erros de leitura de arquivo OSS do funcionário de IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock

- **[Autenticação]** Impedir que o servidor trave quando um token de autenticação WebSocket referencia um autenticador cujo plugin de tipo de autenticação foi descarregado ou está ausente. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) por @Molunerfinn

- **[Documentação da API]** Corrigida a documentação da API de coleções para que os parâmetros de consulta não interfiram mais entre si ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx

- **[Fonte de dados: Principal]** Corrigido o problema em que as opções de campo são escritas no esquema após sincronizar campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile

- **[Auth: SAML 2.0]** Corrigido o interceptor de redirecionamento automático SAML que piscava o shell do aplicativo e abria desenhos duplicados em cada navegação. por @Molunerfinn
