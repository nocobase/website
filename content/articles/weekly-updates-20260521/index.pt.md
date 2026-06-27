---
title: "Atualizações Semanais｜Adicionado suporte client-v2 ao plugin Kanban"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 14 a 21 de maio de 2026."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.55](https://www.nocobase.com/en/blog/v2.0.55)

*Data de lançamento: 2026-05-18*

### 🚀 Melhorias

- **[Funcionários de IA]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock
- **[IA: Base de conhecimento]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido um problema onde as variáveis do registro pop-up atual não podiam ser resolvidas nos fluxos de eventos do botão de ação. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust
  - Corrigido um problema onde os valores dos campos JS em subformulários não eram definidos corretamente durante o envio do formulário. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust
- **[Gerenciador de arquivos]** Corrige uploads do gerenciador de arquivos `tx-cos` com metadados de tamanho de arquivo ausentes. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher
- **[Fonte de dados: Principal]** Corrige o problema onde as opções de campo são escritas no schema após sincronizar campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile
- **[Cliente WEB]** Limpa dados dos blocos após remover menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) por @gchust
- **[Funcionários de IA]** Corrige erros de leitura de arquivos OSS do funcionário de IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock
- **[Ação: Importar registros]** Corrige o problema onde o registro importado em campos do tipo data mostra a data errada ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher
- **[Ação: Exportar registros Pro]** Corrige o problema onde um erro é lançado ao exportar anexo do campo de URL de anexo por @mytharcher
- **[Ação: Importar registros Pro]** corrige o tratamento de fuso horário para importações xlsx pro por @mytharcher

### [v2.0.53](https://www.nocobase.com/en/blog/v2.0.53)

*Data de lançamento: 2026-05-14*

### 🚀 Melhorias

- **[mecanismo-de-fluxo]** Adicionada uma mensagem de confirmação de alterações não salvas ao fechar a página de configuração do fluxo de eventos com dados não salvos presentes. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) por @gchust

### 🐛 Correções de Bugs

- **[cliente]**

  - corrige impedir abertura de edição rápida para campos de associação em tabela ([#9469](https://github.com/nocobase/nocobase/pull/9469)) por @katherinehhh
  - Corrigidos campos de relação somente leitura em subtabelas que não apareciam ou não eram clicáveis após a atualização. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) por @jiannx
  - corrige campos de seleção múltipla em blocos de dados v2 que devem exibir rótulos de opção em vez de valores ([#9472](https://github.com/nocobase/nocobase/pull/9472)) por @katherinehhh
- **[Bloco: Formulário multi-etapas]** corrige problema da barra de rolagem ao ativar altura total no bloco de formulário de etapas v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) por @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.35](https://www.nocobase.com/en/blog/v2.1.0-beta.35)

*Data de lançamento: 2026-05-20*

### 🚀 Melhorias

- **[cliente]** Compartilhar avaliação de condição entre aplicativos v1 e v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) por @zhangzhonghe
- **[Localização]** Tarefas de tradução de localização Lina melhoradas com escopo de tradução, configurações de idioma de referência e edição rápida ([#9521](https://github.com/nocobase/nocobase/pull/9521)) por @2013xile
- **[Fluxo de trabalho: Aprovação]** Melhorar aprovações relacionadas com cartões de linha do tempo por @zhangzhonghe

### 🐛 Correções de Bugs

- **[indefinido]** alinhar caminhos de configuração do nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) por @chenos
- **[cli-v1]** Corrigida a inicialização de desenvolvimento do create-nocobase-app reutilizando shells de aplicativos empacotados enquanto permite o desenvolvimento local de plugins. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) por @Molunerfinn
- **[cliente]**

  - Corrige o problema onde um crachá de menu ainda mostra um ponto quando seu valor é 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe
  - Corrige o problema onde formulários de filtro não podem usar variáveis do formulário atual ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe
- **[Autenticação]** Impede que o servidor trave quando um token de autenticação WebSocket referencia um autenticador cujo plugin de tipo de autenticação está descarregado ou ausente. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) por @Molunerfinn
- **[Calendário]**

  - Corrige o problema onde mais itens do calendário não podem ser totalmente exibidos ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe
  - Corrigido o estilo do cursor para itens de evento na sobreposição de mais eventos do calendário ([#9519](https://github.com/nocobase/nocobase/pull/9519)) por @jiannx
- **[Configurações de licença]** resolve dependências empacotadas com link simbólico ([#9518](https://github.com/nocobase/nocobase/pull/9518)) por @chenos

### [v2.1.0-beta.34](https://www.nocobase.com/en/blog/v2.1.0-beta.34)

*Data de lançamento: 2026-05-19*

### 🎉 Novos Recursos

- **[Bloco: Kanban]** Adicionado suporte client-v2 para o plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) por @jiannx

### 🚀 Melhorias

- **[cli]** Melhorada a experiência do prompt CLI do NocoBase migrando fluxos de trabalho de configuração e gerenciamento para o Inquirer, e corrigidos problemas relacionados de instalação, habilidades e tempo de execução do Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) por @chenos
- **[Funcionários de IA]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock
- **[Gerenciador de notificações]** Altera a estratégia de fila para otimizar o desempenho de envio ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Migrados os plugins block-workbench e workflow-custom-action-trigger para o cliente v2, incluindo seus modelos de ação e fluxo do scanner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) por @jiannx
- **[Autenticação]** Implementa a página de configurações de Autenticadores no client-v2 e fornece componentes reutilizáveis de tabela client-v2, entrada de variável e primitivos de formulário. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) por @Molunerfinn
- **[IA: Base de conhecimento]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial por @cgyrock
- **[Autenticação: SAML 2.0]** Adiciona entradas client-v2 para os plugins de autenticação CAS e SAML para que funcionem com a página de login v2 e as configurações de Autenticadores. por @Molunerfinn

### 🐛 Correções de Bugs

- **[client-v2]**

  - Corrigida a falha ao carregar a rota v2 do plugin Kanban porque as dependências dnd-kit não foram fornecidas pelo cliente. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) por @jiannx
  - O componente Tabela v2 compartilhado agora mostra o seletor de tamanho de página por padrão, correspondendo ao comportamento v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) por @Molunerfinn
- **[cliente]**

  - Corrigido um problema onde os valores dos campos JS em subformulários não eram definidos corretamente durante o envio do formulário. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust
  - Corrigido um problema onde as variáveis do registro pop-up atual não podiam ser resolvidas nos fluxos de eventos do botão de ação. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust
- **[mecanismo-de-fluxo]** Corrigida mensagem de erro incorreta no console do navegador. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) por @gchust
- **[Funcionários de IA]**

  - Corrige problema onde as permissões de função do operador não estão surtindo efeito nos nós do funcionário de IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) por @cgyrock
  - Corrige erros de leitura de arquivos OSS do funcionário de IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock
- **[Documentação da API]** Corrigida a documentação da API da coleção para que os parâmetros de consulta não interfiram mais uns com os outros ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx
- **[Fonte de dados: Principal]** Corrige o problema onde as opções de campo são escritas no schema após sincronizar campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile
- **[Fluxo de trabalho: JavaScript]** Corrigido o carregamento do pacote de tempo de execução QuickJS do fluxo de trabalho JavaScript em builds de produção. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) por @mytharcher
- **[Cliente WEB]** Limpa dados dos blocos após remover menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) por @gchust
- **[Ação: Importar registros]** Corrige o problema onde o registro importado em campos do tipo data mostra a data errada ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher
- **[Ação: Importar registros Pro]** corrige o tratamento de fuso horário para importações xlsx pro por @mytharcher
- **[Autenticação: SAML 2.0]** Corrige o interceptor de redirecionamento automático SAML que piscava o shell do aplicativo e abria gavetas duplicadas em cada navegação. por @Molunerfinn
- **[Ação: Exportar registros Pro]** Corrige o problema onde um erro é lançado ao exportar anexo do campo de URL de anexo por @mytharcher

### [v2.1.0-beta.33](https://www.nocobase.com/en/blog/v2.1.0-beta.33)

*Data de lançamento: 2026-05-15*

### 🎉 Novos Recursos

- **[Bloco: Markdown]** Adicionado suporte client v2 para blocos Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) por @jiannx
- **[Bloco: Lista]** Blocos de lista suportam client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) por @jiannx
- **[Calendário]** Adicionado suporte client v2 para o plugin Calendário. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) por @jiannx
- **[Bloco: Árvore]** Adicionado suporte client-v2 para o bloco de filtro de árvore. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) por @jiannx

### 🚀 Melhorias

- **[mecanismo-de-fluxo]** Adicionada uma mensagem de confirmação de alterações não salvas ao fechar a página de configuração do fluxo de eventos com dados não salvos presentes. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) por @gchust
- **[Gerenciador de fonte de dados]** Otimiza a API de modelagem de dados para suportar a criação de coleções de comentários com IA, configurar campos de relacionamento para fontes de dados externas e definir regras de validação de campo ([#9480](https://github.com/nocobase/nocobase/pull/9480)) por @2013xile
- **[Bloco: GridCard]** Plugin de cartão de grade atualizado para suportar client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) por @jiannx
- **[Bloco: iframe]** Adicionado suporte v2 para o bloco iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) por @jiannx
- **[Funcionários de IA]** Interação de conversa paralela do funcionário de IA e otimização de desempenho ([#9462](https://github.com/nocobase/nocobase/pull/9462)) por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**

  - Adicionada a configuração "Após o envio bem-sucedido" para ações de envio de formulário. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) por @jiannx
  - corrige impedir abertura de edição rápida para campos de associação em tabela ([#9469](https://github.com/nocobase/nocobase/pull/9469)) por @katherinehhh
  - Corrigidos campos de relação somente leitura em subtabelas que não apareciam ou não eram clicáveis após a atualização. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) por @jiannx
  - Corrigido o problema onde as configurações de valor padrão legadas não podem ser removidas. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust
  - corrige campos de seleção múltipla em blocos de dados v2 que devem exibir rótulos de opção em vez de valores ([#9472](https://github.com/nocobase/nocobase/pull/9472)) por @katherinehhh
- **[client-v2]**

  - Corrige problema onde a lista de opções do campo de título está vazia para campos de relação em blocos de tabela ([#9490](https://github.com/nocobase/nocobase/pull/9490)) por @katherinehhh
  - Manter grupos vazios após filtrar menus v1 no layout v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) por @zhangzhonghe
- **[mecanismo-de-fluxo]** Corrigidos submenus de campo de relação instáveis em menus de submodelo ([#9417](https://github.com/nocobase/nocobase/pull/9417)) por @jiannx
- **[Gerenciador de arquivos]** Corrige uploads do gerenciador de arquivos `tx-cos` com metadados de tamanho de arquivo ausentes. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher
- **[Funcionários de IA]** Corrigido erro de carregamento do plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) por @cgyrock
- **[Bloco: Formulário multi-etapas]** corrige problema da barra de rolagem ao ativar altura total no bloco de formulário de etapas v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) por @katherinehhh
- **[Fluxo de trabalho: Webhook]** Corrige o problema onde a criação do nó de resposta é interceptada pela validação da configuração `statusCode` por @mytharcher
- **[Campo de coleção: Assinatura]** Resolve problema de exibição da caixa de assinatura em dispositivos móveis por @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.39](https://www.nocobase.com/en/blog/v2.1.0-alpha.39)

*Data de lançamento: 2026-05-20*

### 🎉 Novos Recursos

- **[Bloco: Kanban]** Adicionado suporte client-v2 para o plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) por @jiannx

### 🚀 Melhorias

- **[cliente]** Compartilhar avaliação de condição entre aplicativos v1 e v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) por @zhangzhonghe
- **[Localização]** Tarefas de tradução de localização Lina melhoradas com escopo de tradução, configurações de idioma de referência e edição rápida ([#9521](https://github.com/nocobase/nocobase/pull/9521)) por @2013xile
- **[Funcionários de IA]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock
- **[Gerenciador de notificações]** Altera a estratégia de fila para otimizar o desempenho de envio ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Migrados os plugins block-workbench e workflow-custom-action-trigger para o cliente v2, incluindo seus modelos de ação e fluxo do scanner QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) por @jiannx
- **[Autenticação]** Implementa a página de configurações de Autenticadores no client-v2 e fornece componentes reutilizáveis de tabela client-v2, entrada de variável e primitivos de formulário. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) por @Molunerfinn
- **[IA: Base de conhecimento]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial por @cgyrock
- **[Autenticação: SAML 2.0]** Adiciona entradas client-v2 para os plugins de autenticação CAS e SAML para que funcionem com a página de login v2 e as configurações de Autenticadores. por @Molunerfinn
- **[Fluxo de trabalho: Aprovação]** Melhorar aprovações relacionadas com cartões de linha do tempo por @zhangzhonghe

### 🐛 Correções de Bugs

- **[indefinido]** alinhar caminhos de configuração do nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) por @chenos
- **[cli-v1]** Corrigida a inicialização de desenvolvimento do create-nocobase-app reutilizando shells de aplicativos empacotados enquanto permite o desenvolvimento local de plugins. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) por @Molunerfinn
- **[cliente]**

  - Corrige o problema onde formulários de filtro não podem usar variáveis do formulário atual ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe
  - Corrige o problema onde um crachá de menu ainda mostra um ponto quando seu valor é 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe
- **[client-v2]**

  - O componente Tabela v2 compartilhado agora mostra o seletor de tamanho de página por padrão, correspondendo ao comportamento v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) por @Molunerfinn
  - Corrigida a falha ao carregar a rota v2 do plugin Kanban porque as dependências dnd-kit não foram fornecidas pelo cliente. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) por @jiannx
- **[Calendário]**

  - Corrigido o estilo do cursor para itens de evento na sobreposição de mais eventos do calendário ([#9519](https://github.com/nocobase/nocobase/pull/9519)) por @jiannx
  - Corrige o problema onde mais itens do calendário não podem ser totalmente exibidos ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe
- **[Configurações de licença]** resolve dependências empacotadas com link simbólico ([#9518](https://github.com/nocobase/nocobase/pull/9518)) por @chenos
- **[Funcionários de IA]**

  - Corrige problema onde as permissões de função do operador não estão surtindo efeito nos nós do funcionário de IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) por @cgyrock
  - Corrige erros de leitura de arquivos OSS do funcionário de IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock
- **[Autenticação]** Impede que o servidor trave quando um token de autenticação WebSocket referencia um autenticador cujo plugin de tipo de autenticação está descarregado ou ausente. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) por @Molunerfinn
- **[Documentação da API]** Corrigida a documentação da API da coleção para que os parâmetros de consulta não interfiram mais uns com os outros ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx
- **[Fonte de dados: Principal]** Corrige o problema onde as opções de campo são escritas no schema após sincronizar campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile
- **[Autenticação: SAML 2.0]** Corrige o interceptor de redirecionamento automático SAML que piscava o shell do aplicativo e abria gavetas duplicadas em cada navegação. por @Molunerfinn

### [v2.1.0-alpha.38](https://www.nocobase.com/en/blog/v2.1.0-alpha.38)

*Data de lançamento: 2026-05-18*

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido um problema onde as variáveis do registro pop-up atual não podiam ser resolvidas nos fluxos de eventos do botão de ação. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust
  - Corrigido um problema onde os valores dos campos JS em subformulários não eram definidos corretamente durante o envio do formulário. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust
- **[mecanismo-de-fluxo]** Corrigida mensagem de erro incorreta no console do navegador. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) por @gchust
- **[Fluxo de trabalho: JavaScript]** Corrigido o carregamento do pacote de tempo de execução QuickJS do fluxo de trabalho JavaScript em builds de produção. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) por @mytharcher
- **[Ação: Importar registros]** Corrige o problema onde o registro importado em campos do tipo data mostra a data errada ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher
- **[Ação: Importar registros Pro]** corrige o tratamento de fuso horário para importações xlsx pro por @mytharcher
- **[Ação: Exportar registros Pro]** Corrige o problema onde um erro é lançado ao exportar anexo do campo de URL de anexo por @mytharcher

### [v2.1.0-alpha.37](https://www.nocobase.com/en/blog/v2.1.0-alpha.37)

*Data de lançamento: 2026-05-17*

### 🐛 Correções de Bugs

- **[Cliente WEB]** Limpa dados dos blocos após remover menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) por @gchust

### [v2.1.0-alpha.36](https://www.nocobase.com/en/blog/v2.1.0-alpha.36)

*Data de lançamento: 2026-05-16*

### 🎉 Novos Recursos

- **[Bloco: Markdown]** Adicionado suporte client v2 para blocos Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) por @jiannx
- **[Bloco: Lista]** Blocos de lista suportam client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) por @jiannx

### 🚀 Melhorias

- **[mecanismo-de-fluxo]** Adicionada uma mensagem de confirmação de alterações não salvas ao fechar a página de configuração do fluxo de eventos com dados não salvos presentes. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) por @gchust
- **[cli]** Melhorada a experiência do prompt CLI do NocoBase migrando fluxos de trabalho de configuração e gerenciamento para o Inquirer, e corrigidos problemas relacionados de instalação, habilidades e tempo de execução do Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) por @chenos
- **[Gerenciador de fonte de dados]** Otimiza a API de modelagem de dados para suportar a criação de coleções de comentários com IA, configurar campos de relacionamento para fontes de dados externas e definir regras de validação de campo ([#9480](https://github.com/nocobase/nocobase/pull/9480)) por @2013xile
- **[Bloco: GridCard]** Plugin de cartão de grade atualizado para suportar client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) por @jiannx
- **[Bloco: iframe]** Adicionado suporte v2 para o bloco iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) por @jiannx

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigidos campos de relação somente leitura em subtabelas que não apareciam ou não eram clicáveis após a atualização. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) por @jiannx
  - Adicionada a configuração "Após o envio bem-sucedido" para ações de envio de formulário. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) por @jiannx
- **[client-v2]** Corrige problema onde a lista de opções do campo de título está vazia para campos de relação em blocos de tabela ([#9490](https://github.com/nocobase/nocobase/pull/9490)) por @katherinehhh
- **[mecanismo-de-fluxo]** Corrigidos submenus de campo de relação instáveis em menus de submodelo ([#9417](https://github.com/nocobase/nocobase/pull/9417)) por @jiannx
- **[Gerenciador de arquivos]** Corrige uploads do gerenciador de arquivos `tx-cos` com metadados de tamanho de arquivo ausentes. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher
- **[Campo de coleção: Assinatura]** Resolve problema de exibição da caixa de assinatura em dispositivos móveis por @chenzhizdt

### [v2.1.0-alpha.35](https://www.nocobase.com/en/blog/v2.1.0-alpha.35)

*Data de lançamento: 2026-05-14*

### 🎉 Novos Recursos

- **[indefinido]** Adicionar um novo funcionário de IA, Engenheiro de Localização Lina, para auxiliar nas tarefas de tradução de localização ([#9434](https://github.com/nocobase/nocobase/pull/9434)) por @2013xile
  Referência: [Gerenciamento de Localização](https://docs.nocobase.com/system-management/localization)<br>[Lina: Engenheira de Localização](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Use Lina e local HY-MT1.5-1.8B para traduzir entradas de localização](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Calendário]** Adicionado suporte client v2 para o plugin Calendário. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) por @jiannx
- **[Bloco: Árvore]** Adicionado suporte client-v2 para o bloco de filtro de árvore. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) por @jiannx
- **[Armazenamento de arquivos: S3(Pro)]** Suporta upload de arquivos via armazenamento S3 Pro no gerenciador de arquivos v2. por @Molunerfinn

### 🚀 Melhorias

- **[build]** Adicionada cobertura de regressão para evitar que `deleteServerFiles` remova artefatos de build `client` e `client-v2` em caminhos Windows e POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) por @Molunerfinn
- **[cliente]** excluir registros já associados no diálogo de seleção de associação do bloco de tabela um-para-muitos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh
- **[Funcionários de IA]** Interação de conversa paralela do funcionário de IA e otimização de desempenho ([#9462](https://github.com/nocobase/nocobase/pull/9462)) por @cgyrock
- **[Gerenciador de arquivos]** Plugins de armazenamento de terceiros agora podem registrar seu próprio formulário de tipo de armazenamento na página de configurações do gerenciador de arquivos v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) por @Molunerfinn
- **[IA: Base de conhecimento]** O identificador único para uma base de conhecimento é configurável no momento da criação por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**

  - corrige impedir abertura de edição rápida para campos de associação em tabela ([#9469](https://github.com/nocobase/nocobase/pull/9469)) por @katherinehhh
  - corrige campos de seleção múltipla em blocos de dados v2 que devem exibir rótulos de opção em vez de valores ([#9472](https://github.com/nocobase/nocobase/pull/9472)) por @katherinehhh
  - Corrige requisições de tabela duplicadas quando formulários de filtro têm valores padrão ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe
  - Corrigido o problema onde as configurações de valor padrão legadas não podem ser removidas. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust
  - Corrigido o problema onde não era possível selecionar opções para o campo de seleção da associação. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust
  - Corrige o problema onde as configurações do sistema aparecem vazias após o envio ([#9458](https://github.com/nocobase/nocobase/pull/9458)) por @zhangzhonghe
  - Corrigido um problema onde o escopo de dados do bloco de destino era definido incorretamente ao desmarcar dados de linha em um fluxo de eventos de bloco de tabela. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust
  - corrige erro ao alterar o campo de título do campo de associação no bloco de tabela v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh
  - Corrigidas regras de vinculação V2 para suportar a definição de opções selecionáveis para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx
- **[client-v2]**

  - Manter grupos vazios após filtrar menus v1 no layout v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) por @zhangzhonghe
  - Corrige o problema onde a página fica em branco atrás do diálogo de ativação do plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) por @zhangzhonghe
  - Corrige páginas de administração v1 que travam quando referenciam módulos de plugin v2 em builds de produção. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) por @Molunerfinn
- **[cli-v1]** Corrigidas falhas de inicialização de desenvolvimento em aplicativos criados com create-nocobase-app causadas pela resolução do caminho do cliente app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) por @Molunerfinn
- **[servidor]** corrige(gerenciador-de-arquivos): forçar download de arquivos de conteúdo ativo no armazenamento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher
- **[Funcionários de IA]**

  - Corrigido erro de carregamento do plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) por @cgyrock
  - Corrigido teste de voo do Ollama exigindo entrada de chave ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock
- **[Bloco: Formulário multi-etapas]** corrige problema da barra de rolagem ao ativar altura total no bloco de formulário de etapas v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) por @katherinehhh
- **[Departamentos]** corrige conflito de tradução entre os botões adicionar usuário e adicionar departamento nas configurações de Usuários e Permissões ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh
- **[Fluxo de trabalho]** corrige: restaurar texto de ajuda em diálogos de vinculação de fluxo de trabalho FlowModel para eventos de ação de operação e personalizada ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher
- **[Bloco: Markdown]** Corrige o problema do bloco Markdown v2 reportando erros ([#9440](https://github.com/nocobase/nocobase/pull/9440)) por @zhangzhonghe
- **[Fluxo de trabalho: Webhook]** Corrige o problema onde a criação do nó de resposta é interceptada pela validação da configuração `statusCode` por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrige layout do formulário de aprovação em dispositivos móveis por @zhangzhonghe
  - Corrige índice de registro de aprovação duplicado ao delegar tarefas de aprovação. por @mytharcher
- **[Gerenciador de backup]** Corrigido um problema onde os backups falhavam com um erro quando os arquivos não podiam ser encontrados. por @gchust
