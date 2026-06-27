---
title: "NocoBase v1.5.0: Adicionar intervalo de datas limitado ao componente de campo de data"
description: "Nota de lançamento da v1.5.0"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Adicionar intervalo de datas limitado ao componente de campo de data ([#5852](https://github.com/nocobase/nocobase/pull/5852)) por @Cyx649312038

  - Suporte para configurar texto, ícone e tipo dos botões adicionar e selecionar em sub-tabelas ([#5778](https://github.com/nocobase/nocobase/pull/5778)) por @katherinehhh

  - Suporte para habilitar abertura de pop-ups em links no campo readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) por @katherinehhh

  - Suporte para ações de associar e desassociar em blocos de associação ([#5695](https://github.com/nocobase/nocobase/pull/5695)) por @katherinehhh

- **[server]** Adicionar gerenciador de auditoria ([#5601](https://github.com/nocobase/nocobase/pull/5601)) por @chenzhizdt

- **[Workflow]**
  - Adicionar padrões de caracteres aleatórios ([#5959](https://github.com/nocobase/nocobase/pull/5959)) por @kennnnnnnnnn

  - Adicionar configuração de limite de pilha para workflows ([#6077](https://github.com/nocobase/nocobase/pull/6077)) por @citlalinda

  - Suporte para acionar workflow manualmente ([#5664](https://github.com/nocobase/nocobase/pull/5664)) por @mytharcher

- **[Mobile]** Adicionar chave global para controlar todos os botões de voltar no mobile (habilitado por padrão) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) por @katherinehhh

- **[Calendário]** Plugin de calendário adiciona modo de abertura de eventos ([#5808](https://github.com/nocobase/nocobase/pull/5808)) por @Cyx649312038

- **[Coleção: Árvore]** Permite filtrar nós filhos em blocos de tabela em árvore ([#4770](https://github.com/nocobase/nocobase/pull/4770)) por @jimmy201602

- **[Workflow: Evento de pré-ação]** Suporte para acionar workflow manualmente por @mytharcher

- **[Adaptador Redis pub sub]** Adicionar plugin adaptador de sincronização Redis por @mytharcher

### 🚀 Melhorias

- **[client]**
  - Remover regras de vinculação do botão Associar ([#6016](https://github.com/nocobase/nocobase/pull/6016)) por @katherinehhh

  - Remover componente de esqueleto de linha de tabela ([#5751](https://github.com/nocobase/nocobase/pull/5751)) por @zhangzhonghe

  - Otimizar lógica recursiva no useMenuSearch para melhor desempenho ([#5784](https://github.com/nocobase/nocobase/pull/5784)) por @katherinehhh

  - Remover componentes Formily da tabela para melhorar o desempenho ao alternar a paginação da tabela ([#5738](https://github.com/nocobase/nocobase/pull/5738)) por @zhangzhonghe

  - Melhorar o desempenho de renderização de página e suportar funcionalidade de keep-alive de página ([#5515](https://github.com/nocobase/nocobase/pull/5515)) por @zhangzhonghe

  - Implementar carregamento sob demanda para componentes front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) por @gchust

- **[Notificação: Email]** Adicionar links para página inicial dos plugins de notificação no package.json. ([#6150](https://github.com/nocobase/nocobase/pull/6150)) por @sheldon66

- **[Workflow: Nó de loop]** Corrigir estilos ([#6095](https://github.com/nocobase/nocobase/pull/6095)) por @mytharcher

- **[Gerenciador de arquivos]** Suporte para outros plugins de armazenamento ([#6096](https://github.com/nocobase/nocobase/pull/6096)) por @jiannx
Referência: [Armazenamento de Arquivos: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Workflow: kit de teste]** Ajustar estilo da tela do workflow para tornar o conteúdo mais compacto ([#6088](https://github.com/nocobase/nocobase/pull/6088)) por @mytharcher

- **[Workflow]** Alterar nomes de API para nomes mais razoáveis ([#6082](https://github.com/nocobase/nocobase/pull/6082)) por @mytharcher

- **[Visualização de dados]** Adicionar parâmetro offset ao charts-query ([#5911](https://github.com/nocobase/nocobase/pull/5911)) por @Albert-mah

- **[Mobile]** Adaptar componente de seleção de intervalo de data e hora para mobile ([#5863](https://github.com/nocobase/nocobase/pull/5863)) por @katherinehhh

- **[Autenticação]** Otimizar a lógica de obtenção de metadados de ações de auditoria. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) por @chenzhizdt

- **[Formulários públicos]** Otimizar painel de ações e componentes de formulário público para adaptação mobile ([#5788](https://github.com/nocobase/nocobase/pull/5788)) por @katherinehhh

- **[Campo de coleção: Ordenação]** Adicionar descrição do plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) por @mytharcher

- **[Workflow: Evento de ação personalizada]** Alterar API de execução manual por @mytharcher

- **[Workflow: Cálculo JSON]**
  - Alterar nome e grupo do nó JSON-query por @mytharcher

  - Adicionar ícone aos nós por @mytharcher

- **[Incorporar NocoBase]** Melhorar desempenho de renderização de página por @zhangzhonghe

- **[Gerenciador de backup]** Mensagens de erro melhoradas para falhas de restauração por @gchust

### 🐛 Correções de Bugs

- **[client]**
  - As regras de vinculação do botão não estão funcionando corretamente devido a um problema na sequência ([#6147](https://github.com/nocobase/nocobase/pull/6147)) por @zhangzhonghe

  - Anomalia de layout após excluir blocos ou campos ([#6139](https://github.com/nocobase/nocobase/pull/6139)) por @zhangzhonghe

  - Corrigir configurações de campo não filtrável do botão de filtro afetando outras tabelas com a mesma coleção ([#6121](https://github.com/nocobase/nocobase/pull/6121)) por @katherinehhh

  - dados não exibidos para o campo de associação nos sub-detalhes ([#6117](https://github.com/nocobase/nocobase/pull/6117)) por @zhangzhonghe

  - Corrigir o problema em que o 'modo de carregamento de dados' se torna inválido após alternar páginas ([#6115](https://github.com/nocobase/nocobase/pull/6115)) por @zhangzhonghe

  - Corrigir o problema em que os valores padrão do campo de associação não são atualizados após alternar páginas ([#6114](https://github.com/nocobase/nocobase/pull/6114)) por @zhangzhonghe

  - Corrigir o problema em que os valores padrão para campos de associação não estão surtindo efeito no modo de Leitura Fácil ([#6066](https://github.com/nocobase/nocobase/pull/6066)) por @zhangzhonghe

  - Corrigir o problema em que as atribuições de campo para botões de formulário em nós manuais do workflow são inválidas ([#6054](https://github.com/nocobase/nocobase/pull/6054)) por @zhangzhonghe

  - Corrigir variável de pop-up atual ausente no modal de link de campo habilitado ([#6045](https://github.com/nocobase/nocobase/pull/6045)) por @katherinehhh

  - Continuar renderizando a página após a conclusão da solicitação de verificação de autenticação ([#6020](https://github.com/nocobase/nocobase/pull/6020)) por @2013xile

  - Corrigir o problema em que as linhas da tabela não podem ser arrastadas e ordenadas ([#6013](https://github.com/nocobase/nocobase/pull/6013)) por @zhangzhonghe

  - Corrigir o problema em que sub-tabelas vazias exibem uma linha de dados vazios no iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) por @zhangzhonghe

  - Corrigir o problema em que clicar em campos de associação não abre o diálogo pop-up ([#5972](https://github.com/nocobase/nocobase/pull/5972)) por @zhangzhonghe

  - Corrigir seletor de intervalo de datas no formulário/ação de filtro não mostrando o seletor de hora quando showTime está definido ([#5956](https://github.com/nocobase/nocobase/pull/5956)) por @katherinehhh

  - Corrigir o problema de exibição inesperada de célula de tabela em plugins de terceiros ([#5934](https://github.com/nocobase/nocobase/pull/5934)) por @zhangzhonghe

  - Corrigir o problema em que o botão excluir está desabilitado na página de gerenciamento de modelos de bloco ([#5922](https://github.com/nocobase/nocobase/pull/5922)) por @zhangzhonghe

  - Corrigir o problema em que as regras de vinculação de formulário falham quando dependem de valores de campo de subtabelas ([#5876](https://github.com/nocobase/nocobase/pull/5876)) por @zhangzhonghe

  - Corrigir o problema de dados não alterados após a paginação em sub-tabela ([#5856](https://github.com/nocobase/nocobase/pull/5856)) por @zhangzhonghe

  - Corrigir o problema em que o título da aba do navegador não atualiza após alternar páginas ([#5857](https://github.com/nocobase/nocobase/pull/5857)) por @zhangzhonghe

  - Corrigir o problema em que atualizar a página na página de gerenciamento de fonte de dados redireciona para a página inicial ([#5855](https://github.com/nocobase/nocobase/pull/5855)) por @zhangzhonghe

  - Corrigir o problema em que campos de associação em modelos de referência às vezes não exibem dados ([#5848](https://github.com/nocobase/nocobase/pull/5848)) por @zhangzhonghe

  - Corrigir o problema em que os dados de função não são exibidos na tabela de gerenciamento de usuários ([#5846](https://github.com/nocobase/nocobase/pull/5846)) por @zhangzhonghe

  - Corrigir o problema em que o botão 'Solicitação Personalizada' não fica imediatamente visível após ser adicionado ([#5845](https://github.com/nocobase/nocobase/pull/5845)) por @zhangzhonghe

  - Corrigir o problema em que blocos adicionados em uma janela pop-up não são exibidos ao reabrir o pop-up ([#5838](https://github.com/nocobase/nocobase/pull/5838)) por @zhangzhonghe

  - Impedir que páginas ocultas afetem interações com outras páginas ([#5836](https://github.com/nocobase/nocobase/pull/5836)) por @zhangzhonghe

  - Corrigir o problema em que alterar o valor de um campo de associação no bloco de detalhes não atualiza imediatamente ([#5826](https://github.com/nocobase/nocobase/pull/5826)) por @zhangzhonghe

  - Corrigir o problema em que os campos não são exibidos após adicioná-los em um subformulário ([#5827](https://github.com/nocobase/nocobase/pull/5827)) por @zhangzhonghe

  - Corrigir o problema em que clicar em links não abre um pop-up quando 'Habilitar link' está ativado pela primeira vez ([#5812](https://github.com/nocobase/nocobase/pull/5812)) por @zhangzhonghe

  - Corrigir o problema em que o login mobile redireciona para a página desktop ([#5805](https://github.com/nocobase/nocobase/pull/5805)) por @zhangzhonghe

  - Corrigir botão de ação de configuração que deve estar alinhado à esquerda ([#5798](https://github.com/nocobase/nocobase/pull/5798)) por @katherinehhh

  - Impedir múltiplas chamadas de API ao fechar o pop-up ([#5804](https://github.com/nocobase/nocobase/pull/5804)) por @zhangzhonghe

  - Corrigir problemas em que variáveis não podem ser usadas corretamente em blocos de fonte de dados de terceiros ([#5782](https://github.com/nocobase/nocobase/pull/5782)) por @zhangzhonghe

  - Corrigir o problema em que os valores do campo de associação estão vazios em modelos de bloco. Corrigir o problema em que o escopo de dados do bloco usando variáveis não funciona corretamente em fontes de dados de terceiros ([#5777](https://github.com/nocobase/nocobase/pull/5777)) por @zhangzhonghe

  - Corrigir o problema em que as props dinâmicas do componente não funcionam com carregamento lento ([#5776](https://github.com/nocobase/nocobase/pull/5776)) por @gchust

  - corrigida a mensagem de aviso no React ao carregar hooks dinamicamente no ambiente de desenvolvimento ([#5758](https://github.com/nocobase/nocobase/pull/5758)) por @gchust

- **[build]**
  - Corrigido problema de carregamento após definir a variável de ambiente `APP_PUBLIC_PATH` ([#5924](https://github.com/nocobase/nocobase/pull/5924)) por @gchust

  - Corrigido cache incorreto de arquivos js do frontend após a construção do plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) por @gchust

  - Corrigir o problema de execução de `yarn dev` após create-nocobase-app resultar em erro ([#5708](https://github.com/nocobase/nocobase/pull/5708)) por @gchust

- **[server]** Definir as ações disponíveis padrão para o ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) por @chenos

- **[Formulários públicos]** Incapacidade de adicionar campos no `Sub-form(Popover)` de formulários públicos ([#6157](https://github.com/nocobase/nocobase/pull/6157)) por @gchust

- **[Coleção: SQL]** Corrigir o problema em que filtrar Coleção SQL lança um erro quando `DB_TABLE_PREFIX` está definido ([#6156](https://github.com/nocobase/nocobase/pull/6156)) por @2013xile

- **[Workflow]**
  - Adicionar caso de teste para ação "mover" para acionar workflow ([#6145](https://github.com/nocobase/nocobase/pull/6145)) por @mytharcher

  - Corrigir erro lançado ao retomar nó assíncrono na execução manual do workflow ([#5877](https://github.com/nocobase/nocobase/pull/5877)) por @mytharcher

- **[Sincronização de dados do usuário]**
  - Corrigir o problema em que o botão "repetir" não é exibido na lista de tarefas ([#6079](https://github.com/nocobase/nocobase/pull/6079)) por @2013xile

  - Corrigir problemas de exibição dos botões de sincronização e tarefas. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) por @2013xile

- **[Verificação]** Corrigir campos de formulário vazios ao abrir a gaveta de edição na página de configurações de Verificação ([#5949](https://github.com/nocobase/nocobase/pull/5949)) por @chenos

- **[Fonte de dados: Principal]** Corrigir o problema em que os campos do sistema no bloco de formulário de filtro não podem ser editados ([#5885](https://github.com/nocobase/nocobase/pull/5885)) por @zhangzhonghe

- **[Visualização de dados]**
  - Corrigir a altura inicial do bloco de gráfico ([#5879](https://github.com/nocobase/nocobase/pull/5879)) por @2013xile

  - Corrigir o problema em que os componentes de campo de filtro dos blocos de gráfico não renderizam ([#5769](https://github.com/nocobase/nocobase/pull/5769)) por @2013xile

- **[Mobile]**
  - Corrigir adaptação mobile do componente de data na sub-página ([#5859](https://github.com/nocobase/nocobase/pull/5859)) por @katherinehhh

  - Corrigir campo de entrada de data ausente na operação de filtro no mobile ([#5779](https://github.com/nocobase/nocobase/pull/5779)) por @katherinehhh

- **[Workflow: Evento de ação personalizada]**
  - Corrigir casos de teste do gatilho de ação personalizada por @mytharcher

  - Corrigir caso de teste falhando no SQLite por @mytharcher

- **[Workflow: Evento de pré-ação]** Corrigir casos de teste do interceptador de requisição por @mytharcher

- **[Workflow: Mensagem de resposta]** Corrigir nome de parâmetro errado usado por @mytharcher
