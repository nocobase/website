---
title: "NocoBase v2.0.0-beta.1: Suporte a componentes de manutenção definidos por plugin quando o aplicativo entra em status de manutenção"
description: "Nota de lançamento da v2.0.0-beta.1"
---

### 🎉 Novas Funcionalidades

- **[indefinido]** Adiciona um plugin experimental "Bloco de Referência", que permite reutilizar blocos existentes por referência ou cópia. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) por @gchust

- **[cliente]**
  - Suporte a componentes de manutenção definidos pelo plugin quando o aplicativo entra em status de manutenção ([#8252](https://github.com/nocobase/nocobase/pull/8252)) por @cgyrock

  - Ao criar uma coleção, o tipo do campo de id predefinido pode ser alterado ([#8129](https://github.com/nocobase/nocobase/pull/8129)) por @cgyrock

  - Adiciona suporte para configurações de adicionar/selecionar/desassociar em subformulário muitos-para-muitos ([#8099](https://github.com/nocobase/nocobase/pull/8099)) por @katherinehhh

  - Suporte à personalização de estilos globais no editor de temas ([#7960](https://github.com/nocobase/nocobase/pull/7960)) por @ljmiaoo

  - Suporte à definição de regra de ordenação padrão no bloco de detalhes ([#8070](https://github.com/nocobase/nocobase/pull/8070)) por @katherinehhh

  - Suporte à configuração do tipo de dados para campo Numérico (opções: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) por @chenos

  - Suporte à ordenação de campos de coluna em tabela ([#7900](https://github.com/nocobase/nocobase/pull/7900)) por @katherinehhh

  - Adiciona suporte a criação rápida no seletor de campo de associação ([#7887](https://github.com/nocobase/nocobase/pull/7887)) por @katherinehhh

  - Suporte a seletor em cascata para campo de associação de coleção em árvore ([#7846](https://github.com/nocobase/nocobase/pull/7846)) por @katherinehhh

  - Suporte a arrastar para ações de coluna de tabela ([#7842](https://github.com/nocobase/nocobase/pull/7842)) por @zhangzhonghe

  - Adiciona suporte a paginação na subtabela ([#7754](https://github.com/nocobase/nocobase/pull/7754)) por @katherinehhh

  - Fluxo de Eventos: Novas ações predefinidas introduzidas para aprimorar as opções de personalização para manipulação de eventos, permitindo que os usuários otimizem fluxos de trabalho e melhorem a eficiência ([#7672](https://github.com/nocobase/nocobase/pull/7672)) por @zhangzhonghe

  - Adiciona bloco markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) por @katherinehhh

  - Suporte à configuração de regras de vinculação para sub-formulários ([#7640](https://github.com/nocobase/nocobase/pull/7640)) por @zhangzhonghe

  - Adicionado suporte para ouvintes de evento de clique em linha de tabela, permitindo que os usuários executem ações específicas quando uma linha na tabela é clicada ([#7622](https://github.com/nocobase/nocobase/pull/7622)) por @zhangzhonghe

  - Adiciona suporte para variáveis personalizadas ([#7585](https://github.com/nocobase/nocobase/pull/7585)) por @zhangzhonghe

  - Adiciona variável "Tipo de dispositivo atual" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) por @zhangzhonghe

- **[Gerenciador de arquivos]** Suporte à configuração do método de renomeação de arquivos ([#8231](https://github.com/nocobase/nocobase/pull/8231)) por @JAVA-LW

- **[Workflow]**
  - Adiciona novas variáveis de sistema no workflow, incluindo `instanceId` e `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) por @mytharcher

  - Adiciona nó "Multi-condições", fornecendo controle de fluxo como `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) por @mytharcher

- **[Bloco: Mapa]** adiciona bloco de mapa 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) por @katherinehhh

- **[Visualização de dados]**
  - adiciona funcionário IA para configurar gráfico ([#7815](https://github.com/nocobase/nocobase/pull/7815)) por @heziqiang

  - adiciona fonte de dados SQL para gráfico ([#7830](https://github.com/nocobase/nocobase/pull/7830)) por @heziqiang

  - adiciona tipo de gráfico "Gráfico de rosca" ([#7629](https://github.com/nocobase/nocobase/pull/7629)) por @heziqiang

- **[Mecanismo de fluxo]** Suporta o uso de strings de template LiquidJS em instruções SQL ([#7667](https://github.com/nocobase/nocobase/pull/7667)) por @2013xile

- **[Gerenciador de fonte de dados]**
  - A fonte de dados principal agora suporta a leitura direta de tabelas do banco de dados principal e permite modificar interfaces de campo ([#7118](https://github.com/nocobase/nocobase/pull/7118)) por @aaaaaajie

  - A fonte de dados principal agora suporta a leitura direta de tabelas do banco de dados principal e permite modificar interfaces de campo ([#7118](https://github.com/nocobase/nocobase/pull/7118)) por @aaaaaajie

- **[Bloco: GridCard]** Adiciona bloco de cartão de grade 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) por @katherinehhh

- **[Bloco: Lista]** Adiciona bloco de lista 2.0 ([#7574](https://github.com/nocobase/nocobase/pull/7574)) por @katherinehhh

- **[Bloco: Painel de ações]** Adiciona bloco de painel de ações 2.0 ([#7594](https://github.com/nocobase/nocobase/pull/7594)) por @katherinehhh

- **[Funcionários IA]** Melhora a função de pesquisa web do plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) por @cgyrock

- **[Telemetria]** Adiciona novo plugin: Telemetria, um plugin de telemetria baseado em OpenTelemetry fornecendo métricas de CPU, memória e requisições HTTP com suporte a exportação HTTP por @2013xile

- **[Rascunhos de formulário]** Rascunhos de formulário por @chenos

- **[Armazenamento de arquivos: S3(Pro)]** Adiciona opção de modo de renomeação para armazenamento S3 Pro por @mytharcher

- **[Workflow: Aprovação]**
  - Permite escolher se deve mostrar o snapshot ou o registro mais recente na interface do processo de aprovação por @mytharcher

  - Adiciona configuração de público para controlar quem pode iniciar uma aprovação por @mytharcher

- **[Gerenciador de e-mail]** Implementação do gerenciamento de e-mail 2.0 por @jiannx

### 🚀 Melhorias

- **[indefinido]**
  - atualiza a documentação em inglês do plugin de gráfico ([#7748](https://github.com/nocobase/nocobase/pull/7748)) por @heziqiang

  - atualiza o documento de visão geral do gráfico ([#7702](https://github.com/nocobase/nocobase/pull/7702)) por @heziqiang

- **[mecanismo-de-fluxo]**
  - Suporta o método window.location.reload no ambiente runjs. ([#8316](https://github.com/nocobase/nocobase/pull/8316)) por @gchust

  - Otimiza problemas de desempenho ao alternar modos de configuração ([#8241](https://github.com/nocobase/nocobase/pull/8241)) por @zhangzhonghe

  - Suporta o objeto FormData no ambiente runjs. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) por @gchust

  - suporta ocultar menu de configuração de etapa dinamicamente ([#7924](https://github.com/nocobase/nocobase/pull/7924)) por @gchust

  - Adiciona opção useCache ao FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) por @zhangzhonghe

  - Adiciona método `removeModelWithSubModels` para remover recursivamente modelo e seus submodelos ([#8064](https://github.com/nocobase/nocobase/pull/8064)) por @zhangzhonghe

  - Suporta alternar classe de modelo de fluxo dinamicamente ([#7952](https://github.com/nocobase/nocobase/pull/7952)) por @gchust

  - Suporta ouvir evento de alteração de árvore de modelos de fluxo no mecanismo de fluxo. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) por @gchust

  - melhora a resolução da variável de registro atual, tornando a abertura de diálogo mais rápida ([#7895](https://github.com/nocobase/nocobase/pull/7895)) por @gchust

  - Otimizou a estrutura da API de bibliotecas de terceiros no contexto runjs e adicionou suporte para a biblioteca de ícones Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) por @gchust

  - Otimiza o estilo da barra de ferramentas para evitar que ícones sejam obscurecidos ([#7883](https://github.com/nocobase/nocobase/pull/7883)) por @zhangzhonghe

  - Otimiza os estilos da barra de ferramentas para abas de página ([#7795](https://github.com/nocobase/nocobase/pull/7795)) por @zhangzhonghe

  - suporta operação atrasada no modelo de fluxo ([#7786](https://github.com/nocobase/nocobase/pull/7786)) por @gchust

  - Melhorou a mensagem de erro exibida quando a cópia do UID falha, fornecendo instruções mais claras para resolver o problema. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) por @gchust

  - Suporta definir contexto de variável na definição de etapa de fluxo ([#7674](https://github.com/nocobase/nocobase/pull/7674)) por @gchust

  - Suporta pular a etapa de fluxo runjs adicionando skipRunJs=true à string de consulta da URL. ([#7638](https://github.com/nocobase/nocobase/pull/7638)) por @gchust

  - suporta variável popup ([#7583](https://github.com/nocobase/nocobase/pull/7583)) por @gchust

  - Padronizou workflows automáticos para serem acionados consistentemente pelo evento "beforeRender", garantindo operação previsível e unificada em todos os processos. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) por @gchust

  - Aprimora a experiência de edição de código com snippets mais ricos e conclusões de código sensíveis ao contexto para vários cenários ([#7559](https://github.com/nocobase/nocobase/pull/7559)) por @gchust

  - Otimiza a funcionalidade de arrastar e soltar ([#7526](https://github.com/nocobase/nocobase/pull/7526)) por @zhangzhonghe

- **[sdk]** Melhora a implementação de armazenamento da API ([#8308](https://github.com/nocobase/nocobase/pull/8308)) por @chenos

- **[cliente]**
  - Suporta modo de tela cheia para o editor de código JS. ([#8294](https://github.com/nocobase/nocobase/pull/8294)) por @gchust

  - torna "Adicionar filho" equivalente a "Adicionar novo" da associação de filhos correspondente ([#8272](https://github.com/nocobase/nocobase/pull/8272)) por @katherinehhh

  - suporta limpar valor padrão para campo de cor ([#8268](https://github.com/nocobase/nocobase/pull/8268)) por @katherinehhh

  - usa select para configuração de largura da coluna de operação ([#8218](https://github.com/nocobase/nocobase/pull/8218)) por @katherinehhh

  - suporta largura de coluna personalizada para colunas de tabela ([#8200](https://github.com/nocobase/nocobase/pull/8200)) por @katherinehhh

  - altera a largura da coluna da tabela para usar opções selecionáveis ([#8188](https://github.com/nocobase/nocobase/pull/8188)) por @katherinehhh

  - melhora os estilos do recordPicker com maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) por @katherinehhh

  - otimiza opções de configuração (Blocos, Campos, Ações) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) por @katherinehhh

  - suporta formatação de número para campos percentuais ([#8123](https://github.com/nocobase/nocobase/pull/8123)) por @katherinehhh

  - corrige salto de paginação da subtabela após remoção de linha e adiciona suporte para regras de validação de coluna ([#8094](https://github.com/nocobase/nocobase/pull/8094)) por @katherinehhh

  - ajusta a exibição de campos grandes na subtabela editável ([#8078](https://github.com/nocobase/nocobase/pull/8078)) por @katherinehhh

  - suporta reticências para conteúdo de campo JSON transbordante ([#8067](https://github.com/nocobase/nocobase/pull/8067)) por @katherinehhh

  - suporta configuração allowMultiple no componente de upload de anexo ([#8052](https://github.com/nocobase/nocobase/pull/8052)) por @katherinehhh

  - mostra opções recolhidas ao passar o mouse no componente Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) por @katherinehhh

  - Suporta inicializar campos de filtro selecionados na consulta de gráfico ([#7933](https://github.com/nocobase/nocobase/pull/7933)) por @heziqiang

  - Adapta Componentes para Dispositivos Móveis ([#7870](https://github.com/nocobase/nocobase/pull/7870)) por @zhangzhonghe

  - Adicionado suporte para a biblioteca Day.js no contexto de script RunJS, permitindo manipulações mais fáceis de data e hora. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) por @gchust

  - adiciona versão da informação da página ao contexto do mecanismo de fluxo ([#7826](https://github.com/nocobase/nocobase/pull/7826)) por @gchust

  - aprimora o Editor Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) por @katherinehhh

  - adapta ao campo tableoid no 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) por @katherinehhh

  - suporta jsx no editor de código JS ([#7699](https://github.com/nocobase/nocobase/pull/7699)) por @gchust

  - suporta campos de associação no modelo de campo JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) por @gchust

- **[servidor]** Adiciona tolerância a falhas quando instâncias de aplicativo ausentes causam erros ao buscar mensagens de manutenção do aplicativo ([#8196](https://github.com/nocobase/nocobase/pull/8196)) por @2013xile

- **[acl]** Suporta API `acl.registerSnippet` para mesclar configuração de snippet ([#8155](https://github.com/nocobase/nocobase/pull/8155)) por @mytharcher

- **[telemetria]**
  - Suporta controlar quais métricas são exportadas ([#7938](https://github.com/nocobase/nocobase/pull/7938)) por @2013xile

  - Adiciona métricas de telemetria para número de sub-aplicativos online, etc ([#7743](https://github.com/nocobase/nocobase/pull/7743)) por @2013xile

- **[banco de dados]** Refatorou o plugin de criptografia de campo para aumentar a segurança, suportando geração e rotação de chaves do aplicativo e chaves de criptografia por campo. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) por @cgyrock

- **[Funcionários IA]**
  - melhora a compatibilidade Gemini para nós LLM no workflow.<br/>otimiza a ferramenta AI dataSourceQuery para manipulação de dados em larga escala.<br/>resolve problemas de modelagem de dados.<br/>adiciona ferramenta de sugestão IA. ([#8249](https://github.com/nocobase/nocobase/pull/8249)) por @heziqiang

  - Corrige funcionário IA não respondendo no primeiro envio de edição<br/>Exclui funcionário IA embutido desnecessário "Avery Form Assistant"<br/>Adiciona permissões de função inicial padrão para funcionários IA embutidos<br/>Melhora o tratamento de erros e comportamento de saída do funcionário IA<br/>Adiciona suporte para IA acessar variáveis de contexto modal<br/>Adiciona suporte para fontes de dados externas para IA<br/>Corrige truncamento incorreto de conversa quando IA processa grandes volumes de dados ([#8191](https://github.com/nocobase/nocobase/pull/8191)) por @heziqiang

  - Habilitou a funcionalidade de edição para prompts de sistema do assistente IA embutido.<br/>Otimizou o prompt de sistema para o assistente IA Nathan.<br/>Corrigiu um problema com o servidor falhando ao ler arquivos estáticos. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) por @heziqiang

  - adiciona campo de provedor ausente ao formulário Adicionar LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) por @heziqiang

  - Plugin de funcionário IA adiciona hook de upgrade ([#7951](https://github.com/nocobase/nocobase/pull/7951)) por @heziqiang

  - Melhora a lógica de interação do funcionário IA e otimiza o fluxo de configuração de tarefas ([#7707](https://github.com/nocobase/nocobase/pull/7707)) por @cgyrock

  - Funcionário IA pode consultar dados autonomamente com base em metadados de bloco de tabela ([#7703](https://github.com/nocobase/nocobase/pull/7703)) por @cgyrock

  - Experiência de codificação IA otimizada, incluindo o uso de funcionário IA para revisar, diagnosticar e corrigir código. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) por @cgyrock

  - Refatorou o Provedor LLM OpenAI em dois provedores separados para suportar as APIs Completions e Responses da OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) por @cgyrock

  - Adiciona novo provedor LLM Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) por @ReLaMi96

  - Otimização de codificação IA ([#7614](https://github.com/nocobase/nocobase/pull/7614)) por @cgyrock

  - adiciona botão minimizar para caixa de chat no layout móvel ([#7595](https://github.com/nocobase/nocobase/pull/7595)) por @cgyrock

- **[Modelos de UI]**
  - Adiciona suporte a modelo de campo para bloco de detalhes. ([#8247](https://github.com/nocobase/nocobase/pull/8247)) por @gchust

  - Adicionado plugin de modelos de UI, fornecendo a capacidade de reutilizar modelos de bloco e modelos de popup. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) por @gchust

- **[Workflow]**
  - Adiciona instância de workflow original à API de duplicação ([#8225](https://github.com/nocobase/nocobase/pull/8225)) por @mytharcher

  - Melhora a descrição do campo `changed` no evento de coleção ([#8216](https://github.com/nocobase/nocobase/pull/8216)) por @mytharcher

  - Suporta usar configuração legada para criar novo em workflow duplicado ([#8165](https://github.com/nocobase/nocobase/pull/8165)) por @mytharcher

  - Adiciona lógica de tolerância a falhas para dados ausentes na preparação do processador, para evitar parada de execução ([#8156](https://github.com/nocobase/nocobase/pull/8156)) por @mytharcher

  - Usa carregamento lento para dados de associação na tela do workflow para melhorar o desempenho ([#8142](https://github.com/nocobase/nocobase/pull/8142)) por @mytharcher

  - Completa a configuração do workflow vinculado para o botão de ação de atualizar registro ([#7668](https://github.com/nocobase/nocobase/pull/7668)) por @mytharcher

- **[Gerenciador de tarefas assíncronas]**
  - Melhorou o tratamento de erros durante tarefas de limpeza adicionando mecanismos de captura de exceção para evitar falhas no aplicativo ([#8215](https://github.com/nocobase/nocobase/pull/8215)) por @mytharcher

  - Tarefas assíncronas para sub-aplicativos devem iniciar apenas os sub-aplicativos alvo nos Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) por @2013xile

- **[Bloco: Painel de ações]** melhora a exibição de blocos, ações e campos ocultos no modo de configuração ([#8174](https://github.com/nocobase/nocobase/pull/8174)) por @katherinehhh

- **[Bloco: Lista]** adiciona botão Link para blocos de Tabela, Lista e Cartão de Grade ([#8194](https://github.com/nocobase/nocobase/pull/8194)) por @katherinehhh

- **[Manipulador de erros]** Não expõe mensagens de erro brutas do banco de dados em erros de sintaxe SQL, para evitar revelar o tipo de banco de dados ([#8195](https://github.com/nocobase/nocobase/pull/8195)) por @2013xile

- **[Bloco: Mapa]** suporta reticências de texto transbordante para campo de mapa no modo de exibição de texto ([#8189](https://github.com/nocobase/nocobase/pull/8189)) por @katherinehhh

- **[Controle de acesso]** Não permite atribuir a função root a usuários ([#8180](https://github.com/nocobase/nocobase/pull/8180)) por @2013xile

- **[Bloco: GridCard]**
  - Otimiza estilos do bloco Grid Card para um layout mais compacto ([#8152](https://github.com/nocobase/nocobase/pull/8152)) por @katherinehhh

  - adiciona configuração de contagem de linhas ao cartão de grade e substitui pageSize por cálculo automático ([#8055](https://github.com/nocobase/nocobase/pull/8055)) por @katherinehhh

- **[Campo de coleção: Markdown(Vditor)]** Desabilita a análise de variáveis no campo Markdown por padrão no modo readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) por @katherinehhh

- **[Ação: Importar registros]** permite selecionar ID para campos de importação ([#8133](https://github.com/nocobase/nocobase/pull/8133)) por @katherinehhh

- **[Visualização de dados]**
  - atualiza dicas de alerta e anotações de modelo de código de eventos ([#7814](https://github.com/nocobase/nocobase/pull/7814)) por @heziqiang

  - adiciona opções de formato de hora para dados de gráfico ([#7763](https://github.com/nocobase/nocobase/pull/7763)) por @heziqiang

  - adiciona dica para executar consulta antes de configurar opções de gráfico ([#7685](https://github.com/nocobase/nocobase/pull/7685)) por @heziqiang

  - atualiza dados do gráfico ao clicar no botão de pré-visualização global ([#7678](https://github.com/nocobase/nocobase/pull/7678)) por @heziqiang

  - Atualiza plugin-data-vi 2.0, corrige alguns problemas e otimiza a UI. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) por @heziqiang

  - Expande tipos de gráfico; Otimiza UI e experiência interativa. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) por @heziqiang

- **[Gerenciador de multi-aplicativos (obsoleto)]**
  - Habilitou a inicialização assíncrona para sub-aplicativos usando uma fila ([#7749](https://github.com/nocobase/nocobase/pull/7749)) por @2013xile

  - melhora o supervisor de aplicativo ([#7661](https://github.com/nocobase/nocobase/pull/7661)) por @chenos

- **[Gerenciador de fonte de dados]** Ajusta a ordem das colunas de tipo de campo e interface, e adiciona uma etapa de confirmação ao fazer modificações. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) por @2013xile

- **[Multi-espaço]** usa api.storage para substituir localstorage, refatoração de controle de permissão e correção de bugs por @jiannx

- **[Ação: Exportar registros Pro]** importar pro & exportar pro ação suporta controle de permissão por @katherinehhh

- **[Telemetria: Prometheus]** Atualiza `@opentelemetry/exporter-prometheus` por @2013xile

- **[Campo de coleção: Criptografia]** Plugin de criptografia de campo otimizado para suportar recuperação de dados com IVs independentes por @cgyrock

- **[Workflow: Aprovação]**
  - Atualiza `approval.data` para a versão mais recente do registro aprovado quando a execução termina, para corresponder ao modo de exibição "Mais recente" por @mytharcher

  - Altera a API para obter um único item de aprovação e simplifica o código por @mytharcher

- **[Gerenciador de migração]** Melhorou as verificações de migração, suporte a download SQL, formatação de log e visibilidade do processo de execução por @cgyrock

### 🐛 Correções de Bugs

- **[indefinido]**
  - Corrige o problema de estilo incorreto na página inicial da documentação do plugin no modo escuro. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) por @gchust

  - a correspondência de caminho de rota suporta novos múltiplos aplicativos ([#7570](https://github.com/nocobase/nocobase/pull/7570)) por @jiannx

  - Corrigido um problema onde citar um bloco removia o bloco citado da página original. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) por @gchust

- **[cliente]**
  - corrige dados incorretos no diálogo de sub-detalhe do bloco de detalhes ([#8318](https://github.com/nocobase/nocobase/pull/8318)) por @katherinehhh

  - Corrigido um problema onde ocorria um erro ao fechar o popup atual após abrir consecutivamente os popups de configuração de regras de vinculação e fluxo de eventos. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) por @gchust

  - Corrigido um problema onde ocorria um erro ao fechar o popup atual após abrir consecutivamente os popups de configuração de regras de vinculação e fluxo de eventos. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) por @gchust

  - Corrigido um problema onde as alterações na alternância de edição rápida em blocos de tabela exigiam uma atualização da página para surtir efeito. ([#8311](https://github.com/nocobase/nocobase/pull/8311)) por @gchust

  - Corrige um problema onde blocos usando parâmetros de consulta de URL como escopos de dados não atualizavam corretamente quando os parâmetros de consulta mudavam durante a alternância de menu. ([#8310](https://github.com/nocobase/nocobase/pull/8310)) por @gchust

  - corrige problemas de permissão no componente de campo de associação ([#8243](https://github.com/nocobase/nocobase/pull/8243)) por @katherinehhh

  - corrige dados de sub-detalhe não atualizando ao paginar bloco de detalhes ([#8305](https://github.com/nocobase/nocobase/pull/8305)) por @katherinehhh

  - corrige conteúdo de subtabela aninhada não atualizando ao alternar páginas no formulário de edição ([#8304](https://github.com/nocobase/nocobase/pull/8304)) por @katherinehhh

  - Corrige problema onde popup não pode ser aberto e melhora a estabilidade de navegação ([#8287](https://github.com/nocobase/nocobase/pull/8287)) por @zhangzhonghe

  - Corrige erro ao alternar do componente Select para o componente Array Subform ([#8301](https://github.com/nocobase/nocobase/pull/8301)) por @katherinehhh

  - Não permite adicionar campos de associação ao bloco de formulário via JS Field. ([#8296](https://github.com/nocobase/nocobase/pull/8296)) por @gchust

  - Corrige um problema onde os dados seriam atualizados várias vezes após a ação de atualizar registro. ([#8299](https://github.com/nocobase/nocobase/pull/8299)) por @gchust

  - Corrige problema onde adicionar novos dados no subformulário é sobrescrito por dados selecionados ([#8292](https://github.com/nocobase/nocobase/pull/8292)) por @katherinehhh

  - Corrige um problema onde o JS Item não atualizava após editar um registro no bloco de detalhes. ([#8291](https://github.com/nocobase/nocobase/pull/8291)) por @gchust

  - Corrige um problema onde registros recém-adicionados não atualizavam no popup do componente de campo seletor de dados. ([#8289](https://github.com/nocobase/nocobase/pull/8289)) por @gchust

  - Corrigido o erro de renderização para bloco JS em estado oculto. ([#8286](https://github.com/nocobase/nocobase/pull/8286)) por @gchust

  - Corrige o problema onde erro é lançado nas configurações do bloco de formulário de filtro do campo m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) por @mytharcher

  - Corrige o problema onde erro é lançado nas configurações do bloco de formulário de filtro do campo m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) por @mytharcher

  - corrige prevenir erros de bloco após um campo de associação ser excluído ([#8273](https://github.com/nocobase/nocobase/pull/8273)) por @katherinehhh

  - Corrige valores padrão do formulário de filtro não acionando filtro na renderização inicial ([#8232](https://github.com/nocobase/nocobase/pull/8232)) por @zhangzhonghe

  - Corrige estouro de pilha causado por loop infinito no carregamento lento de campos de associação de exibição ([#8262](https://github.com/nocobase/nocobase/pull/8262)) por @zhangzhonghe

  - Manipula regras de vinculação vazias para prevenir erros ([#8239](https://github.com/nocobase/nocobase/pull/8239)) por @zhangzhonghe

  - Corrigido o problema onde a coluna de operação do bloco de tabela não podia ser removida. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) por @gchust

  - Corrigido o problema onde a execução de pré-visualização gravava a saída JSX compilada de volta em stepParams, fazendo com que o código-fonte salvo fosse reescrito. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) por @gchust

  - Corrige erro de upload de anexo S3 Pro e melhora a pré-visualização de arquivos ([#8211](https://github.com/nocobase/nocobase/pull/8211)) por @katherinehhh

  - Previne transbordamento de largura total da linha durante o redimensionamento de coluna ([#8166](https://github.com/nocobase/nocobase/pull/8166)) por @zhangzhonghe

  - Corrige um problema onde selecionar "Não" para um filtro de caixa de seleção ainda aplicava o filtro "Sim". ([#8170](https://github.com/nocobase/nocobase/pull/8170)) por @gchust

  - corrige botão de envio não mostrado no formulário de criação quando a função tem permissão de criação ([#8190](https://github.com/nocobase/nocobase/pull/8190)) por @katherinehhh

  - impede que dados existentes de subtabela/subformulário sejam limpos ao enviar sem selecionar nenhum item ([#8172](https://github.com/nocobase/nocobase/pull/8172)) por @katherinehhh

  - impede que a configuração de Escopo de dados apareça na configuração do formulário de criação ([#8176](https://github.com/nocobase/nocobase/pull/8176)) por @katherinehhh

  - Corrige problema de renderização do campo tableoid no bloco de formulário ([#8177](https://github.com/nocobase/nocobase/pull/8177)) por @katherinehhh

  - Falha ao salvar o fluxo de eventos da aba ([#8168](https://github.com/nocobase/nocobase/pull/8168)) por @chenos

  - remove espaçamento extra após a aba ser ocultada ([#8167](https://github.com/nocobase/nocobase/pull/8167)) por @chenos

  - corrige filtragem incorreta de opções selecionadas no select de registro de associação ([#8151](https://github.com/nocobase/nocobase/pull/8151)) por @katherinehhh

  - corrige dropdown de campo de associação sendo desabilitado quando campo de opções existe ([#8153](https://github.com/nocobase/nocobase/pull/8153)) por @katherinehhh

  - Corrigido um problema onde alternar campos de rótulo fazia com que as configurações de popup fossem perdidas. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) por @gchust

  - Corrigido um problema onde inserir texto chinês limpava as opções existentes ao usar operadores de múltipla seleção em campo de seleção única no bloco de formulário de filtro. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) por @gchust

  - Corrige o problema onde o componente `RemoteSelect` carregava registro incorretamente quando o valor é nulo ([#8137](https://github.com/nocobase/nocobase/pull/8137)) por @mytharcher

  - corrige prevenir que o estado desabilitado filho bloqueie a seleção de campo de relação ([#8131](https://github.com/nocobase/nocobase/pull/8131)) por @katherinehhh

  - Corrigido um problema onde os rótulos de campo padrão no bloco de formulário de filtro não podiam ser traduzidos corretamente em vários idiomas. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) por @gchust

  - Corrigido um problema onde a largura do componente de UI era inconsistente ao selecionar "Passado" ou "Próximo" para campos de filtro de data. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) por @gchust

  - Corrigido um problema onde os estilos de título e descrição do bloco JS eram inconsistentes com outros blocos. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) por @gchust

  - corrige problema de quebra de linha no tooltip de campo de texto longo ([#8122](https://github.com/nocobase/nocobase/pull/8122)) por @katherinehhh

  - Corrigido um problema onde as opções selecionáveis não eram listadas completamente ao usar os operadores "é qualquer um de" ou "é nenhum de" para filtragem de campo baseada em opção. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) por @gchust

  - corrige subtabela aninhada em subformulário não exibindo dados ([#8117](https://github.com/nocobase/nocobase/pull/8117)) por @katherinehhh

  - Corrigido um problema onde limpar os valores do filtro de tempo entre e acionar o filtro novamente causava um erro. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) por @gchust

  - Corrigido um problema onde os dados selecionáveis para campos de associação no bloco de formulário de filtro estavam incorretos. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) por @gchust

  - Corrigido um problema onde as configurações de campos personalizados no formulário de filtro não eram pré-preenchidas corretamente e algumas configurações não surtiam efeito. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) por @gchust

  - Corrigido um problema onde a filtragem em campos de Caixa de seleção não surtia efeito. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) por @gchust

  - Corrigido um problema onde o valor do campo numérico não era pré-preenchido corretamente na ação de filtro. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) por @gchust

  - Corrigido um problema onde alguns operadores de campo em formulários de filtro falhavam ao filtrar dados corretamente. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) por @gchust

  - Corrigido um problema onde os campos configurados de um bloco removido não eram excluídos do bloco de filtro. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) por @gchust

  - corrige espaço extra quando o botão está oculto no modo de não configuração ([#8092](https://github.com/nocobase/nocobase/pull/8092)) por @katherinehhh

  - Corrigido um problema onde o texto do botão de redefinir no bloco de formulário de filtro não podia ser modificado. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) por @gchust

  - Corrigido um problema onde a entrada de campo não suportava múltiplos valores ao usar os operadores $in ou $notIn para campos de filtro. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) por @gchust

  - Corrigido um problema onde blocos de dados recém-adicionados não apareciam automaticamente no menu de campos do bloco de formulário de filtro. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) por @gchust

  - O menu de configuração para campos de associação em formulários de filtro não deve exibir a opção de criação rápida. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) por @gchust

  - corrige problema de dados de subtabela de associação no bloco Lista ([#8082](https://github.com/nocobase/nocobase/pull/8082)) por @katherinehhh

  - corrige regras de validação de campo numérico das configurações de coleção não aplicadas ([#8025](https://github.com/nocobase/nocobase/pull/8025)) por @katherinehhh

  - Corrigido um problema onde campos em formulários de filtro eram restringidos por regras de validação de backend para campos. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) por @gchust

  - corrige problema de exibição de campo grande na edição de subtabela ([#8069](https://github.com/nocobase/nocobase/pull/8069)) por @katherinehhh

  - corrige criação rápida lançando erro quando allowMultiple está desabilitado no select de registro de associação ([#8034](https://github.com/nocobase/nocobase/pull/8034)) por @katherinehhh

  - problema de edição rápida de campo json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) por @katherinehhh

  - corrige campo json deve ser enviado como um objeto ([#8057](https://github.com/nocobase/nocobase/pull/8057)) por @katherinehhh

  - Corrigido um problema onde a tecla enter não podia ser usada para acionar a ação de filtro. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) por @gchust

  - Corrige problema onde N/A é exibido após desabilitar allowMultiple no select de registro de associação muitos-para-muitos ([#8050](https://github.com/nocobase/nocobase/pull/8050)) por @katherinehhh

  - Corrige falha ao excluir registro no bloco de seletor de registro ([#8023](https://github.com/nocobase/nocobase/pull/8023)) por @katherinehhh

  - Corrigido um problema onde o menu de registro atual aparecia ao adicionar um bloco de comentário. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) por @gchust

  - Corrigido um problema onde alternar um campo de data para um campo de hora na ação de filtro causava um erro de renderização. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) por @gchust

  - Corrigido um problema onde os títulos padrão dos popups de ação de editar e criar novo estavam incorretos. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) por @gchust

  - Corrigido um problema onde o estilo padrão do campo JS no bloco de detalhes estava incorreto. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) por @gchust

  - corrige largura da coluna da subtabela não aplicada ([#8027](https://github.com/nocobase/nocobase/pull/8027)) por @katherinehhh

  - corrige arrastar coluna da subtabela não funcionando ([#8026](https://github.com/nocobase/nocobase/pull/8026)) por @katherinehhh

  - Corrigido um problema onde a variável de registro do popup atual não podia ser resolvida corretamente em popup aberto por campo de associação. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) por @gchust

  - corrige problema de estilo de popover de campo de exibição markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) por @katherinehhh

  - Resolvido um problema que causava erros ao carregar dados para campos de associação em janelas popup, garantindo uma exibição e funcionalidade de dados mais suaves. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) por @gchust

  - corrige bloco de tabela em árvore não pode expandir nós filhos ([#8011](https://github.com/nocobase/nocobase/pull/8011)) por @katherinehhh

  - Corrige problemas de seleção e exclusão de bloco de tabela para chaves compostas ([#7978](https://github.com/nocobase/nocobase/pull/7978)) por @katherinehhh

  - Corrige o problema onde o estado da aba da página e a rota não correspondem ([#7991](https://github.com/nocobase/nocobase/pull/7991)) por @zhangzhonghe

  - corrige problema de exibição quando o campo markdown é truncado com reticências no modo HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) por @katherinehhh

  - corrige resultados de pesquisa incompletos no seletor em cascata ([#7990](https://github.com/nocobase/nocobase/pull/7990)) por @katherinehhh

  - Corrigido um problema onde abrir o bloco de detalhes no popup para campos de relação não-ID causava um erro. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) por @gchust

  - Corrigido um problema onde os dados de associação falhavam ao carregar corretamente no popup para campos de relação não-ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) por @gchust

  - corrige problema com configuração de precisão inválida para formato de campo numérico ([#7967](https://github.com/nocobase/nocobase/pull/7967)) por @katherinehhh

  - corrige o problema onde o valor do filtro não é limpo ao clicar no botão Redefinir ([#7966](https://github.com/nocobase/nocobase/pull/7966)) por @zhangzhonghe

  - Corrige a digitação incorreta na nova página 2.0 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) por @zhangzhonghe

  - corrige campos de texto com quebra automática de linha no bloco de detalhes quando o conteúdo excede a largura ([#7955](https://github.com/nocobase/nocobase/pull/7955)) por @katherinehhh

  - corrige erro lançado ao limpar valor em cascata de vários níveis ([#7943](https://github.com/nocobase/nocobase/pull/7943)) por @katherinehhh

  - remove ação de tabela em árvore do bloco de coleção não-árvore ([#7931](https://github.com/nocobase/nocobase/pull/7931)) por @katherinehhh

  - Corrigido um problema onde o título e a descrição não eram exibidos no bloco JS. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) por @gchust

  - Corrigido o problema onde blocos ocultos ainda ocupavam espaço na página. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) por @gchust

  - Corrige o problema onde o botão de redefinir no botão de filtro limpa as condições padrão ([#7903](https://github.com/nocobase/nocobase/pull/7903)) por @zhangzhonghe

  - corrige verificação de permissão incorreta para campos de subformulário em novos formulários ([#7902](https://github.com/nocobase/nocobase/pull/7902)) por @katherinehhh

  - corrige problemas na configuração de item de formulário ([#7867](https://github.com/nocobase/nocobase/pull/7867)) por @katherinehhh

  - Corrige problema onde o campo de texto rico não pode inserir valor padrão e o campo de seleção múltipla não pode selecionar múltiplas opções como valor padrão. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) por @gchust

  - Corrigido o problema onde a configuração padrão do campo JS não usava a configuração do modo de exibição. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) por @gchust

  - Corrigido o problema sobre não ser capaz de definir valor padrão do campo de data no modelo de bloco de formulário de filtro. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) por @gchust

  - Corrigido o problema onde operações de edição rápida no bloco de tabela não atualizam dados corretamente. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) por @gchust

  - Corrigidos os erros ao pré-visualizar código no editor de código se o código contém sintaxe jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) por @gchust

  - Corrigido um problema onde as regras de vinculação para botões de ação de linha em um bloco de tabela não eram reexecutadas após os dados da linha serem atualizados, garantindo que as regras sejam agora reaplicadas corretamente quando ocorrem alterações. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) por @gchust

  - Corrige o erro 'value.replace is not a function' no campo de relação do formulário de filtro ([#7824](https://github.com/nocobase/nocobase/pull/7824)) por @zhangzhonghe

  - a variável de coleção atual não deve ser selecionável no seletor de variáveis do componente de filtro ([#7818](https://github.com/nocobase/nocobase/pull/7818)) por @gchust

  - Corrige parâmetros incorretos no callback onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) por @zhangzhonghe

  - não é possível ocultar a coluna de ações do bloco de tabela ([#7804](https://github.com/nocobase/nocobase/pull/7804)) por @gchust

  - Corrige campo seletor de coleção incapaz de selecionar coleção corretamente ([#7794](https://github.com/nocobase/nocobase/pull/7794)) por @katherinehhh

  - suporta selecionar objeto de variável inteiro no prompt do funcionário IA ([#7791](https://github.com/nocobase/nocobase/pull/7791)) por @gchust

  - corrige largura da ação da tabela e jsColumn não aplicada ([#7777](https://github.com/nocobase/nocobase/pull/7777)) por @katherinehhh

  - o escopo de dados do bloco não está funcionando se definido pelo fluxo de eventos da página ([#7788](https://github.com/nocobase/nocobase/pull/7788)) por @gchust

  - corrige reticências do campo de título de campo de associação não aplicadas ([#7778](https://github.com/nocobase/nocobase/pull/7778)) por @katherinehhh

  - a regra de vinculação da ação de atualizar registro não está funcionando ([#7774](https://github.com/nocobase/nocobase/pull/7774)) por @gchust

  - Corrige falha de validação de campo obrigatório para campo Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) por @katherinehhh

  - Corrigido um problema onde os rótulos de tipos enum em componentes relacionados a variáveis não eram exibidos no idioma correto. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) por @gchust

  - Corrige indicador de campo obrigatório ausente após definir validação de frontend ([#7760](https://github.com/nocobase/nocobase/pull/7760)) por @katherinehhh

  - Adiciona configuração de escopo de dados para campos de relação em formulários de filtro ([#7761](https://github.com/nocobase/nocobase/pull/7761)) por @zhangzhonghe

  - corrige problema com limpeza de data sem fuso horário no formulário de edição ([#7759](https://github.com/nocobase/nocobase/pull/7759)) por @katherinehhh

  - Corrige validação de campo obrigatório para regras de vinculação ([#7756](https://github.com/nocobase/nocobase/pull/7756)) por @zhangzhonghe

  - corrige problema de formato de hora em campos de subtabela ([#7750](https://github.com/nocobase/nocobase/pull/7750)) por @katherinehhh

  - resolve problema de Data Inválida ao excluir Data Especificada no filtro... ([#7746](https://github.com/nocobase/nocobase/pull/7746)) por @katherinehhh

  - não é possível carregar os campos da variável do formulário atual ([#7745](https://github.com/nocobase/nocobase/pull/7745)) por @gchust

  - Resolvido um problema onde atribuir um array como valor ou valor padrão a um campo "toOne" resultava em erro. Isso garante o tratamento adequado dos resultados da resolução de variáveis, melhorando a estabilidade e precisão do sistema. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) por @gchust

  - Resolvido um problema onde a variável de campo de associação no formulário atual não podia ser identificada corretamente, garantindo o processamento preciso de dados em formulários. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) por @gchust

  - Corrigido um problema onde campos não filtráveis eram listados incorretamente nas opções de filtro, garantindo que apenas campos aplicáveis apareçam para seleção. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) por @gchust

  - resolve problema de UI ao excluir campo de associação na coleção ([#7706](https://github.com/nocobase/nocobase/pull/7706)) por @katherinehhh

  - Corrige problemas conhecidos com regras de vinculação de subformulário ([#7698](https://github.com/nocobase/nocobase/pull/7698)) por @zhangzhonghe

  - o menu de campos do bloco js não pode ser carregado no bloco de formulário de filtro ([#7690](https://github.com/nocobase/nocobase/pull/7690)) por @gchust

  - Resolvido um problema onde os usuários não podiam definir valores padrão para campos exibidos no modo somente leitura. Isso garante uma configuração de campo mais suave quando os campos não são editáveis. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) por @gchust

  - Corrigido um problema onde a URL não atualizava corretamente após alternar abas dentro de um popup, reabrir um popup aninhado e depois fechar todos os popups. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) por @gchust

  - lida com contexto ausente em usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) por @chenos

  - Corrige problemas de exibição anormal da página ao alternar a paginação da tabela ([#7572](https://github.com/nocobase/nocobase/pull/7572)) por @zhangzhonghe

  - Não é possível configurar o valor do campo de atribuição para as ações `Atualizar` e `Atualizar em massa` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) por @gchust

  - Corrige o problema de não atualizar os dados após enviar o formulário ([#7560](https://github.com/nocobase/nocobase/pull/7560)) por @zhangzhonghe

  - Corrigido um problema onde a ação "Executar" no editor de código não estava funcionando, garantindo que os usuários agora possam executar o código corretamente. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) por @gchust

- **[mecanismo-de-fluxo]**
  - Corrige o problema onde o dropdown do seletor de campos de coleção na ação de filtro tinha uma altura insuficiente. ([#8288](https://github.com/nocobase/nocobase/pull/8288)) por @gchust

  - Corrige conteúdo da aba popup não exibindo ([#8281](https://github.com/nocobase/nocobase/pull/8281)) por @zhangzhonghe

  - Corrige problema de desmontagem e re-renderização da página ao abrir uma subpágina ([#8276](https://github.com/nocobase/nocobase/pull/8276)) por @zhangzhonghe

  - corrige problema de verificação de permissão para adicionar registros filhos em tabela em árvore ([#8240](https://github.com/nocobase/nocobase/pull/8240)) por @katherinehhh

  - Corrigido um problema onde algumas variáveis relacionadas a registros de popup de bloco eram exibidas incorretamente. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) por @gchust

  - Corrigido o problema onde ações ou abas adicionadas após arrastar ações ou abas não são exibidas. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) por @gchust

  - problema de verificação de permissão em fontes de dados externas ([#8221](https://github.com/nocobase/nocobase/pull/8221)) por @katherinehhh

  - corrige ações de fonte de dados externa sendo ocultadas apesar de ter permissão ([#8217](https://github.com/nocobase/nocobase/pull/8217)) por @katherinehhh

  - Corrige o problema onde enviar o formulário em um modal reutilizado via popup uid não atualiza os dados do bloco. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) por @gchust

  - Corrige download de arquivo incorreto para anexos ([#8154](https://github.com/nocobase/nocobase/pull/8154)) por @katherinehhh

  - corrige: conversão incorreta ao usar tipo inteiro como opções de enum ([#8138](https://github.com/nocobase/nocobase/pull/8138)) por @chenos

  - Corrige itens de menu de submodelo alternáveis falhando quando `useModel` é omitido, inferindo-o de `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) por @zhangzhonghe

  - Corrigido um problema onde as opções de configuração do componente anterior permaneciam visíveis no menu após alternar os componentes de campo. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) por @gchust

  - Move useEffect antes do retorno condicional no FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) por @zhangzhonghe

  - Corrigido um problema onde campos de associação não suportados apareciam nos campos de operação de filtro. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) por @gchust

  - corrige registro de comentário falha ao salvar após edição ([#8035](https://github.com/nocobase/nocobase/pull/8035)) por @katherinehhh

  - Corrigido um problema onde os blocos de dados não atualizavam ao fechar um popup clicando no botão de envio do formulário dentro do popup. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) por @gchust

  - Corrigido um problema onde a variável de registro atual não podia ser acionada corretamente para resolução no bloco de detalhes. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) por @gchust

  - Corrige o problema de exibição desalinhada do ícone da barra de ferramentas no botão do bloco de detalhes ([#7929](https://github.com/nocobase/nocobase/pull/7929)) por @zhangzhonghe

  - Corrigido o problema onde abrir o formulário de edição rápida do bloco de tabela causava um erro. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) por @gchust

  - Corrigido o problema onde os dados de permissão ACL não são recarregados após logout e login. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) por @gchust

  - Corrige o problema onde as alterações no fluxo de eventos só surtiam efeito após atualizar a página. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) por @gchust

  - Corrigido um problema onde variáveis em campos de associação de subformulário não eram resolvidas corretamente quando o campo era modificado via interface do usuário. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) por @gchust

  - erro no formulário de edição para registros de múltiplas chaves primárias ([#7798](https://github.com/nocobase/nocobase/pull/7798)) por @gchust

  - Corrigido um problema onde certas configurações para a ação "Abrir Visualização" não eram aplicadas, garantindo que a ação agora funcione conforme o esperado para todas as configurações especificadas. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) por @gchust

  - Corrigido um problema onde os botões de ação no bloco de tabela não atualizavam corretamente após alternar páginas, garantindo que sua funcionalidade corresponda aos dados da página atual. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) por @gchust

  - quando o valor do filtro de campo é definido como falso, a requisição com escopo de dados está incorreta ([#7766](https://github.com/nocobase/nocobase/pull/7766)) por @gchust

  - corrige: resolve problema de parâmetro de requisição de página após excluir dados na última página ([#7755](https://github.com/nocobase/nocobase/pull/7755)) por @katherinehhh

  - não é possível resolver o valor do campo de associação da variável de objeto atual do subformulário ([#7751](https://github.com/nocobase/nocobase/pull/7751)) por @gchust

  - as etapas do fluxo de eventos não devem ser exibidas nos menus de configuração ([#7723](https://github.com/nocobase/nocobase/pull/7723)) por @gchust

  - seleção de contexto incorreta do registro do popup atual ao editar o escopo de dados de um campo associado dentro de um formulário de edição ([#7675](https://github.com/nocobase/nocobase/pull/7675)) por @gchust

  - Resolvido um problema onde as ações de fluxo definidas por um modelo de fluxo não podiam ser configuradas, garantindo que os usuários agora possam personalizar as ações de fluxo conforme desejado. ([#7666](https://github.com/nocobase/nocobase/pull/7666)) por @gchust

  - Corrigido um erro ao copiar ou colar trechos de código no editor de código JS. ([#7641](https://github.com/nocobase/nocobase/pull/7641)) por @gchust

  - Corrige o problema de tradução não surtindo efeito em componentes antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) por @zhangzhonghe

  - incapaz de obter o contexto de visualização atual no bloco de referência ([#7620](https://github.com/nocobase/nocobase/pull/7620)) por @gchust

- **[banco de dados]**
  - Inclui escopo through ao consultar relacionamentos m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) por @2013xile

  - Inclui escopo through ao consultar relacionamentos m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) por @2013xile

  - Corrige inconsistência de consulta de campo de data entre fontes de dados principal e externa ([#8181](https://github.com/nocobase/nocobase/pull/8181)) por @cgyrock

  - `filterByTk` agora suporta arrays ao consultar coleções com múltiplas chaves de destino de filtro ([#7986](https://github.com/nocobase/nocobase/pull/7986)) por @chenos

  - Define o `search_path` antes de executar instruções SQL usando o método `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) por @2013xile

- **[cli]** license-kit é compatível com o caso onde DB_PASSWORD está vazio ([#8220](https://github.com/nocobase/nocobase/pull/8220)) por @jiannx

- **[servidor]**
  - Suporta campos de ID Snowflake (53 bits) para fontes de dados externas ([#8185](https://github.com/nocobase/nocobase/pull/8185)) por @2013xile

  - Atualiza license-kit para a versão mais recente ([#8173](https://github.com/nocobase/nocobase/pull/8173)) por @jiannx

  - Preserva field.targetKey ao copiar campos de referência ([#7599](https://github.com/nocobase/nocobase/pull/7599)) por @chenos

  - Erro de migração de chave primária ([#7563](https://github.com/nocobase/nocobase/pull/7563)) por @2013xile

- **[acl]**
  - Corrige o problema onde a API `acl.can` retorna `null` quando a função é `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) por @mytharcher

  - corrige: acl.allow executado muito cedo ([#8065](https://github.com/nocobase/nocobase/pull/8065)) por @chenos

- **[utils]**
  - Corrige o erro "Invalid filter item type" no botão de filtro ([#7838](https://github.com/nocobase/nocobase/pull/7838)) por @zhangzhonghe

  - Corrige o erro 'Unrecognized operation' no fluxo de eventos ([#7835](https://github.com/nocobase/nocobase/pull/7835)) por @zhangzhonghe

- **[Ação: Atualização em lote]** Corrigido o erro na ação de atualização em lote para fontes de dados externas. ([#8320](https://github.com/nocobase/nocobase/pull/8320)) por @gchust

- **[Visualização de dados]**
  - Corrige problema sobre exibição de rótulo de gráfico de pizza IA, normaliza opção para gráficos de pizza baseados em conjunto de dados.<br/> Restringe campo de ordem do gráfico apenas a campos selecionados. ([#8309](https://github.com/nocobase/nocobase/pull/8309)) por @heziqiang

  - Resolve problema sobre modo SQL selecionar fonte de dados externa; <br/>Resolve problema sobre estado de carregamento do bloco de gráfico durante a busca de dados; <br/> Resolve problema sobre cancelar configuração de bloco de gráfico vazio; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) por @heziqiang

  - Corrige problema onde o bloco de gráfico não atualizava após salvar ([#7920](https://github.com/nocobase/nocobase/pull/7920)) por @heziqiang

  - Usa modo de depuração de recurso sql apenas durante a pré-visualização do gráfico ([#7893](https://github.com/nocobase/nocobase/pull/7893)) por @heziqiang

  - usa API sql:runById para buscar dados de consulta na inicialização ([#7677](https://github.com/nocobase/nocobase/pull/7677)) por @heziqiang

  - corrige problema de consulta SQL ao analisar variáveis ([#7642](https://github.com/nocobase/nocobase/pull/7642)) por @heziqiang

  - corrige parâmetro orders ausente na consulta de dados do gráfico ([#7636](https://github.com/nocobase/nocobase/pull/7636)) por @heziqiang

  - Corrige o problema onde o gráfico não pode ser exibido devido ao timeout do registro de evento ([#7608](https://github.com/nocobase/nocobase/pull/7608)) por @heziqiang

- **[Ação: Importar registros]**
  - Verificação de espaço ao importar arquivos ([#8285](https://github.com/nocobase/nocobase/pull/8285)) por @jiannx

  - Corrige o problema onde o índice da linha na mensagem de erro é sempre 1 quando um erro é lançado na ação de importação ([#8244](https://github.com/nocobase/nocobase/pull/8244)) por @mytharcher

  - Aguarda sincronamente a conclusão dos eventos `afterCreate` acionados pela importação. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) por @2013xile

  - resolve problema com exibição da lista de campos em campos importáveis ([#7710](https://github.com/nocobase/nocobase/pull/7710)) por @katherinehhh

- **[Gerenciador de arquivos]**
  - Corrige o problema onde erro é lançado ao fazer upload de arquivo maior que 5MB para AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) por @mytharcher

  - Corrige o problema onde a pré-visualização de arquivo `.txt` no OSS obtinha charset errado ([#8161](https://github.com/nocobase/nocobase/pull/8161)) por @mytharcher

  - Corrige exibição incorreta de dados de sub-detalhe em blocos de Lista e Cartão de Grade ([#8087](https://github.com/nocobase/nocobase/pull/8087)) por @katherinehhh

  - Corrige campo de anexo não exibido corretamente na subtabela readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) por @katherinehhh

  - corrige upload de arquivos para armazenamento especificado em vez do armazenamento padrão ([#7947](https://github.com/nocobase/nocobase/pull/7947)) por @katherinehhh

  - corrige problemas de configuração de campo de bloco de tabela ([#7843](https://github.com/nocobase/nocobase/pull/7843)) por @katherinehhh

- **[Gerenciador de tarefas assíncronas]**
  - Corrige idioma do cancelamento de tarefa em segundo plano ([#8245](https://github.com/nocobase/nocobase/pull/8245)) por @mytharcher

  - Corrige idioma do cancelamento de tarefa em segundo plano ([#8245](https://github.com/nocobase/nocobase/pull/8245)) por @mytharcher

- **[Workflow]**
  - Corrigido eventos de banco de dados se tornando inválidos após atualizar a fonte de dados externa ([#8207](https://github.com/nocobase/nocobase/pull/8207)) por @cgyrock

  - Corrigido eventos de banco de dados se tornando inválidos após atualizar a fonte de dados externa ([#8207](https://github.com/nocobase/nocobase/pull/8207)) por @cgyrock

  - Corrige o problema onde erro é lançado ao excluir versão de workflow que não é a atual ([#8203](https://github.com/nocobase/nocobase/pull/8203)) por @mytharcher

  - Corrige o problema onde apenas um registro é mostrado na lista de registros para executar manualmente ([#8187](https://github.com/nocobase/nocobase/pull/8187)) por @mytharcher

  - Corrige o problema onde adicionar um workflow na configuração do botão de workflow vinculado fazia o aplicativo congelar após clicar ([#7541](https://github.com/nocobase/nocobase/pull/7541)) por @mytharcher

- **[Modelos de UI]**
  - Corrige um problema onde alguns popups legados não podiam ser reutilizados corretamente após serem convertidos em modelos. ([#8283](https://github.com/nocobase/nocobase/pull/8283)) por @gchust

  - Corrige um problema onde modelos de campo não podiam aplicar regras de vinculação e layout de formulário. ([#8266](https://github.com/nocobase/nocobase/pull/8266)) por @gchust

  - Corrige um erro onde abrir um popup de campo de associação usava incorretamente um modelo de popup de campo não-associação. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) por @gchust

- **[Coleção: Árvore]** Atualiza caminhos após criar em massa nós de coleção em árvore ([#8267](https://github.com/nocobase/nocobase/pull/8267)) por @2013xile

- **[Funcionários IA]**
  - Resolve problema onde o conteúdo da mensagem do nó llm não era exibido ([#8257](https://github.com/nocobase/nocobase/pull/8257)) por @heziqiang

  - Resolve problema sobre quebra de linha de mensagem IA ([#8096](https://github.com/nocobase/nocobase/pull/8096)) por @heziqiang

  - Resolve problema onde o nome da função da fonte de dados não era compilado ([#8076](https://github.com/nocobase/nocobase/pull/8076)) por @heziqiang

  - Corrigido um problema onde alguns campos de registro atual não podiam ser exibidos no componente de seleção de variáveis. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) por @gchust

  - Corrige problema quando IA gera saída SQL ([#7956](https://github.com/nocobase/nocobase/pull/7956)) por @heziqiang

  - Oculta botão de chat do funcionário IA em páginas v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) por @cgyrock

  - Comportamento de pesquisa web otimizado e dicas de usuário para Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) por @cgyrock

  - Corrigido um problema onde blocos com recursos de API associados não buscavam dados correspondentes quando selecionados. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) por @cgyrock

  - corrige problema de layout da caixa de chat no layout móvel ([#7591](https://github.com/nocobase/nocobase/pull/7591)) por @cgyrock

  - Corrige erros na ferramenta de modelagem de dados do funcionário IA ao usar ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) por @cgyrock

  - Corrige o erro na página de configuração de permissões do funcionário IA ([#7548](https://github.com/nocobase/nocobase/pull/7548)) por @2013xile

- **[Workflow: Nó manual]**
  - Corrige o problema onde erro é lançado ao cancelar a execução de workflow excluído ([#8258](https://github.com/nocobase/nocobase/pull/8258)) por @mytharcher

  - Corrige o problema onde a lista de tarefas manual está usando API incorreta ([#8144](https://github.com/nocobase/nocobase/pull/8144)) por @mytharcher

- **[Campo de coleção: Sequência]**
  - Corrigido um erro quando o comando de reparo field-sequence encontra uma coleção inexistente no ambiente atual. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) por @cgyrock

  - Melhora a robustez do plugin-field-sequence ao lidar com o comando de reparo ([#8139](https://github.com/nocobase/nocobase/pull/8139)) por @cgyrock

- **[Departamentos]** Corrige um problema onde a pesquisa agregada não consegue localizar usuários ([#8222](https://github.com/nocobase/nocobase/pull/8222)) por @2013xile

- **[Campo de coleção: Muitos para muitos (array)]** Corrige um problema onde campos muitos-para-muitos (array) não podem ser criados quando o tipo de chave de destino é ID Snowflake (53 bits) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) por @2013xile

- **[Configurações de licença]**
  - Corrige a exibição anormal do plugin licenciado ([#8214](https://github.com/nocobase/nocobase/pull/8214)) por @jiannx

  - corrige exceção de build ts do plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) por @jiannx

  - otimização de licença e adição de informações de prompt ([#7993](https://github.com/nocobase/nocobase/pull/7993)) por @jiannx

- **[Campo de coleção: Fórmula]**
  - Corrige problema onde campos BigInt não podem ser adicionados ao bloco de Detalhes e Formulário ([#8201](https://github.com/nocobase/nocobase/pull/8201)) por @katherinehhh

  - Corrigido um problema onde campos de fórmula na ação de filtro e no bloco de formulário de filtro não podiam digitar valores de entrada. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) por @gchust

  - Corrigido um problema onde campos de fórmula não podiam ser adicionados ao bloco de formulário de filtro. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) por @gchust

- **[Bloco: Mapa]** corrige nível de zoom do mapa incorreto após alternância de menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) por @katherinehhh

- **[Notificação: Email]** corrige limitação de conexão de notificação por email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) por @jiannx

- **[Bloco: Painel de ações]** otimiza estilo no layout de Lista do bloco de painel de ações ([#8084](https://github.com/nocobase/nocobase/pull/8084)) por @katherinehhh

- **[Gerenciador de fonte de dados]** Corrige erros ao atualizar senhas para fontes de dados externas ([#8024](https://github.com/nocobase/nocobase/pull/8024)) por @cgyrock

- **[Ação: Exportar registros]**
  - corrige campos de sistema ausentes na lista de campos exportáveis ([#8002](https://github.com/nocobase/nocobase/pull/8002)) por @katherinehhh

  - resolve problema com exibição da lista de campos exportáveis na ação de exportação ([#7714](https://github.com/nocobase/nocobase/pull/7714)) por @katherinehhh

- **[Mecanismo de fluxo]**
  - Garante que variáveis de registro sempre retornem registros completos quando usadas junto com seus campos individuais. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) por @gchust

  - não é possível resolver variáveis na ação de campos de conjunto de vinculação ([#7684](https://github.com/nocobase/nocobase/pull/7684)) por @gchust

  - Corrigida resolução incorreta da variável de registro do popup pai. ([#7637](https://github.com/nocobase/nocobase/pull/7637)) por @gchust

- **[Gerenciador de multi-aplicativos (obsoleto)]**
  - Após um sub-aplicativo parar, publica uma mensagem de sincronização para notificar outros nós a parar o sub-aplicativo correspondente ([#7849](https://github.com/nocobase/nocobase/pull/7849)) por @2013xile

  - Coleção incorreta para métrica de status de sub-aplicativo ([#7772](https://github.com/nocobase/nocobase/pull/7772)) por @2013xile

  - Corrige não ser capaz de desabilitar o antigo multi-app-manager ([#7633](https://github.com/nocobase/nocobase/pull/7633)) por @jiannx

  - Corrige validação de porta antes da migração de dados de multi-aplicativo ([#7540](https://github.com/nocobase/nocobase/pull/7540)) por @jiannx

- **[Bloco: GridCard]** corrige problema de duplicação de dados entre bloco de lista e cartão de grade ([#7773](https://github.com/nocobase/nocobase/pull/7773)) por @katherinehhh

- **[Bloco: modelo (obsoleto)]** Corrigido um problema onde requisições desnecessárias para modelos de bloco eram acionadas ao abrir ou fechar modais ([#7561](https://github.com/nocobase/nocobase/pull/7561)) por @gchust

- **[Ação: Exportar registros Pro]** corrige opção de exportação de anexo "Gerar uma pasta para cada registro" não surtindo efeito por @katherinehhh

- **[Fonte de dados: PostgreSQL externo]** Corrigido eventos de banco de dados se tornando inválidos após atualizar a fonte de dados externa por @cgyrock

- **[Ação: Importar registros Pro]**
  - Corrige lógica de verificação única que lançará erro quando o valor do campo único é nulo por @mytharcher

  - corrige problema onde a modificação do uploader das opções de importação não tem efeito por @katherinehhh

  - resolve problema com exibição da lista de campos em campos importáveis por @katherinehhh

- **[Coleção: Conectar a dados estrangeiros (FDW)]**
  - Corrige erros de trigger ao conectar a tabelas com nomes em maiúsculas por @2013xile

  - Corrige problema onde o carregamento falha para tabelas com nomes em maiúsculas por @2013xile

- **[Fonte de dados: SQL Server externo]** Corrige problemas onde as opções `encrypt` e `trustServerCertificate` não estão disponíveis por @2013xile

- **[Multi-espaço]**
  - Dispositivos móveis suportam alternância de espaço por @jiannx

  - Corrige a criação de outros campos na coleção do sistema por @jiannx

  - multi-espaço associado a usuários por @jiannx

- **[Criptografia de requisição HTTP]** Usa colchetes para formato de array na análise qs por @chenos

- **[Comentários]**
  - Corrige falha ao excluir registro no bloco de comentário por @katherinehhh

  - corrige problema quando comentários citados no bloco de comentário falham ao exibir por @katherinehhh

  - Corrige exibição de aviso quando o bloco de comentário é usado em coleção não-comentário por @katherinehhh

- **[Impressão de modelo]**
  - corrige erro de ação de impressão de modelo no bloco de detalhes por @katherinehhh

  - corrige falha ao adicionar modelo na operação de impressão de modelo de registro por @katherinehhh

  - Corrige requisição de impressão de modelo não funcionando com fontes de dados externas por @katherinehhh

- **[Multi-app]**
  - proxy multi app suporta cache por @jiannx

  - migração multi-app não emite hooks por @jiannx

- **[plugin-demo-platform]** demo suporta parada automática de apps por @jiannx

- **[Fonte de dados: Oracle externo]** Corrigido eventos de banco de dados se tornando inválidos após atualizar a fonte de dados externa por @cgyrock

- **[Workflow: Aprovação]**
  - Corrige o problema onde o status de registros de aprovação não relacionados é alterado incorretamente para `UNPROCESSED` pela ação de aprovação por @mytharcher

  - Corrige o problema onde aprovar faz associação para criar novo registro por @mytharcher

  - Corrige reversão duplicada da mesma transação por @mytharcher

  - Corrige o problema onde erro é lançado ao cancelar uma execução quando seu workflow é excluído por @mytharcher

  - Corrige o problema onde dados preenchidos desapareciam no formulário do responsável por @mytharcher

  - Corrige o problema onde aprovar faz associação muitos-para-muitos para criar novos registros por @mytharcher

  - Corrige erro lançado ao criar bloco de informação de aprovação por @mytharcher

- **[Gerenciador de e-mail]**
  - Manipulação de dados anormais por @jiannx

  - corrige bugs de rascunho por @jiannx

  - não sincronizando status agendado do gmail por @jiannx

  - Erro de atualização do ShadowHtml por @jiannx

  - permite modificação do id pai do email por @jiannx

- **[Gerenciador de migração]**
  - Corrige um problema onde as quebras de linha nos dados eram perdidas durante a migração. por @cgyrock

  - Corrige descrição de migração ausente e define a hora atual como padrão por @cgyrock
