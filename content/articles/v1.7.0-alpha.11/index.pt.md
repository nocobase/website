---
title: "NocoBase v1.7.0-alpha.11: suporte a variáveis no lado esquerdo das condições das regras de vinculação"
description: "Nota de lançamento da v1.7.0-alpha.11"
---

### 🎉 Novas Funcionalidades

- **[client]** suporte a variáveis no lado esquerdo das condições de regras de vinculação ([#6609](https://github.com/nocobase/nocobase/pull/6609)) por @katherinehhh

- **[Departamentos]** Torne os plugins de Departamento, URL de Anexo e mensagem de resposta do Workflow gratuitos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) por @chenos

- **[Ação: Atualização em lote]**
  - Suporte para atualizar dados em outros blocos de dados após atualizar dados em um bloco ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe

  - Suporte para atualizar dados em outros blocos de dados após atualizar dados em um bloco ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe

- **[Armazenamento de esquema UI]** Módulo de localização adicionado para UISchema, permitindo traduções personalizadas para título e descrição do esquema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) por @chenos

- **[Bloco: Painel de ações]** adicionar um callback onScanSuccess para lidar com digitalizações bem-sucedidas e sair da interface da câmera. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) por @sheldon66

- **[Campo de coleção: Código]** Adicionar interface de código por @mytharcher

- **[Workflow: nó de cálculo de data]** Adicionar função `changeTimezone` para alterar o valor do fuso horário para formatação por @mytharcher

- **[Impressão de modelo]** Suporte para renderização dinâmica de imagens e códigos de barras em modelos de documento. por @sheldon66

### 🚀 Melhorias

- **[client]**
  - Adicionar API de atraso para cenários que abrem sem atraso ([#6681](https://github.com/nocobase/nocobase/pull/6681)) por @mytharcher

  - suportar registros de tabela selecionados em solicitação personalizada ([#6647](https://github.com/nocobase/nocobase/pull/6647)) por @katherinehhh

  - Adicionar API de fallback de tipo padrão para `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) por @mytharcher

  - Otimizar prompts para páginas não configuradas ([#6641](https://github.com/nocobase/nocobase/pull/6641)) por @zhangzhonghe

  - Suporte para pesquisar campo no componente Filtro ([#6627](https://github.com/nocobase/nocobase/pull/6627)) por @mytharcher

  - Adicionar API `trim` para `Input` e `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) por @mytharcher

  - Determinar se deve exibir os componentes móveis com base no tipo de dispositivo, em vez da largura da página ([#6611](https://github.com/nocobase/nocobase/pull/6611)) por @zhangzhonghe

  - Determinar se deve exibir o layout móvel com base no tipo de dispositivo, em vez da largura da página ([#6600](https://github.com/nocobase/nocobase/pull/6600)) por @zhangzhonghe

  - suportar a configuração da visibilidade dos dois-pontos nos rótulos dos campos do formulário com base no layout ([#6561](https://github.com/nocobase/nocobase/pull/6561)) por @katherinehhh

- **[create-nocobase-app]** Atualizar algumas dependências para as versões mais recentes ([#6673](https://github.com/nocobase/nocobase/pull/6673)) por @chenos

- **[utils]** Adicionar extensão de duração para dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) por @mytharcher

- **[database]**
  - Adicionar opção trim para campo de texto ([#6603](https://github.com/nocobase/nocobase/pull/6603)) por @mytharcher

  - Adicionar opção trim para campo de string ([#6565](https://github.com/nocobase/nocobase/pull/6565)) por @mytharcher

- **[Workflow]**
  - Suporte para URL fixa de pop-up para tarefas do workflow ([#6640](https://github.com/nocobase/nocobase/pull/6640)) por @mytharcher

  - Otimizar lógica de salvamento de job ([#6613](https://github.com/nocobase/nocobase/pull/6613)) por @mytharcher

  - Melhorar código ([#6589](https://github.com/nocobase/nocobase/pull/6589)) por @mytharcher

- **[Workflow: Nó de atraso]** Suporte para usar variável para duração ([#6621](https://github.com/nocobase/nocobase/pull/6621)) por @mytharcher

- **[Manipulador de erros]** Suporte para título personalizado no componente AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) por @sheldon66

- **[Gerenciador de arquivos]** Adicionar opção trim para campos de texto da coleção de armazenamentos ([#6604](https://github.com/nocobase/nocobase/pull/6604)) por @mytharcher

- **[Gerenciador de tarefas assíncronas]** otimizar botões de importação/exportação no Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) por @chenos

- **[Workflow: Evento de ação personalizada]** Adicionar configurações de atualização para o botão de acionamento do workflow por @mytharcher

- **[Ação: Exportar registros Pro]** otimizar botões de importação/exportação no Pro por @katherinehhh

- **[Restrição de IP]** Atualizar conteúdo da mensagem de restrição de IP. por @sheldon66

- **[Armazenamento de arquivos: S3(Pro)]** Suporte para variáveis globais na configuração de armazenamento por @mytharcher

- **[Gerenciador de backup]** permitir restaurar o aplicativo principal a partir do backup do sub-aplicativo por @gchust

- **[Workflow: Aprovação]** Suporte para usar modelo de bloco para o formulário do processo de aprovação por @mytharcher

- **[Gerenciador de migração]** permitir pular backup e restauração automáticos para migração por @gchust

### 🐛 Correções de Bugs

- **[client]**
  - problema de alternância do seletor no campo de data do botão de filtro ([#6695](https://github.com/nocobase/nocobase/pull/6695)) por @katherinehhh

  - conversão de variável nas condições de regra de vinculação de sub-tabela/sub-formulário ([#6702](https://github.com/nocobase/nocobase/pull/6702)) por @katherinehhh

  - botão de exportação exibido sem permissão de exportação ([#6689](https://github.com/nocobase/nocobase/pull/6689)) por @katherinehhh

  - Após conectar através de uma chave estrangeira, clicar para acionar a filtragem resulta em condições de filtro vazias ([#6634](https://github.com/nocobase/nocobase/pull/6634)) por @zhangzhonghe

  - Corrigir erro lançado no nó de criação / atualização do workflow ([#6696](https://github.com/nocobase/nocobase/pull/6696)) por @mytharcher

  - Corrigir erro lançado ao passar o mouse sobre o bloco de modelo referenciado na configuração do nó de aprovação ([#6691](https://github.com/nocobase/nocobase/pull/6691)) por @mytharcher

  - campo de associação personalizado não exibindo as configurações do componente de campo ([#6692](https://github.com/nocobase/nocobase/pull/6692)) por @katherinehhh

  - compatibilidade das regras de vinculação com dados legados ([#6686](https://github.com/nocobase/nocobase/pull/6686)) por @katherinehhh

  - carregamento lento de componente de UI ausente pode causar erro de renderização ([#6683](https://github.com/nocobase/nocobase/pull/6683)) por @gchust

  - Corrigir localidade para o componente de upload ([#6682](https://github.com/nocobase/nocobase/pull/6682)) por @mytharcher

  - Adicionar componente Password nativo ao HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) por @mytharcher

  - problema de exibição das descrições de campo no workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) por @katherinehhh

  - campos herdados exibidos na lista de atribuição de campo da coleção atual ([#6666](https://github.com/nocobase/nocobase/pull/6666)) por @katherinehhh

  - problema de estilo na entrada de variável ao definir valor padrão ([#6668](https://github.com/nocobase/nocobase/pull/6668)) por @katherinehhh

  - Alternar para o menu de grupo não deve pular para uma página que já foi ocultada no menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) por @zhangzhonghe

  - O formulário de filtro não deve exibir o prompt "Alterações não salvas" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) por @zhangzhonghe

  - No formulário de filtro, quando o botão de filtro é clicado, se houver campos que não passaram na validação, a filtragem ainda é acionada ([#6659](https://github.com/nocobase/nocobase/pull/6659)) por @zhangzhonghe

  - opção "permitir múltiplos" não funcionando para campo de relação ([#6661](https://github.com/nocobase/nocobase/pull/6661)) por @katherinehhh

  - Corrigir o problema de imagens de pré-visualização sendo obscurecidas ([#6651](https://github.com/nocobase/nocobase/pull/6651)) por @zhangzhonghe

  - No bloco de formulário, o valor padrão da configuração do campo será exibido primeiro como a string de variável original e depois desaparecerá ([#6649](https://github.com/nocobase/nocobase/pull/6649)) por @zhangzhonghe

  - estilo incorreto de entrada de variável ([#6645](https://github.com/nocobase/nocobase/pull/6645)) por @gchust

  - título da gaveta de edição do nó do workflow exibindo [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) por @katherinehhh

  - descrição da sub-tabela sobrepondo o botão "Adicionar novo" ([#6646](https://github.com/nocobase/nocobase/pull/6646)) por @katherinehhh

  - sublinhado tracejado causado pelo layout de formulário horizontal no modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) por @katherinehhh

  - regra com condição 'qualquer' não entra em vigor quando a lista de condições está vazia ([#6628](https://github.com/nocobase/nocobase/pull/6628)) por @katherinehhh

  - falha na análise de variável quando os parâmetros de URL contêm caracteres chineses ([#6618](https://github.com/nocobase/nocobase/pull/6618)) por @katherinehhh

  - área em branco entre o título da página de configuração do modelo de bloco e o menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) por @gchust

  - Os campos de relação no formulário de filtro reportam um erro após a página ser atualizada porque x-data-source não é transportado ([#6619](https://github.com/nocobase/nocobase/pull/6619)) por @zhangzhonghe

  - problema de dados com o bloco Gantt na coleção em árvore ([#6617](https://github.com/nocobase/nocobase/pull/6617)) por @katherinehhh

  - problema de exibição do rótulo do campo para evitar truncamento por dois-pontos ([#6599](https://github.com/nocobase/nocobase/pull/6599)) por @katherinehhh

  - propriedade x-disabled não entrando em vigor nos campos do formulário ([#6610](https://github.com/nocobase/nocobase/pull/6610)) por @katherinehhh

  - Corrigir propriedade `disabled` não funcionando quando `SchemaInitializerItem` tem `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) por @mytharcher

  - campo de associação (seleção) exibindo N/A ao expor campos de coleção relacionados ([#6582](https://github.com/nocobase/nocobase/pull/6582)) por @katherinehhh

  - botões de enviar e atualizar não exibindo o modo apenas ícone corretamente ([#6592](https://github.com/nocobase/nocobase/pull/6592)) por @katherinehhh

  - problema de cascata: 'O valor de xxx não pode estar no formato de array' ao excluir e re-selecionar ([#6585](https://github.com/nocobase/nocobase/pull/6585)) por @katherinehhh

  - conflito de vinculação entre campos de associação de mesmo nome em diferentes sub-tabelas dentro do mesmo formulário ([#6577](https://github.com/nocobase/nocobase/pull/6577)) por @katherinehhh

- **[database]**
  - Corrigido erro de build do CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) por @aaaaaajie

  - Ao excluir registros um-para-muitos, tanto `filter` quanto `filterByTk` são passados e `filter` inclui um campo de associação, o `filterByTk` é ignorado ([#6606](https://github.com/nocobase/nocobase/pull/6606)) por @2013xile

  - Evitar que o campo "datetimeNoTz" mude quando o valor não é alterado no registro de atualização ([#6588](https://github.com/nocobase/nocobase/pull/6588)) por @mytharcher

- **[build]** a saída do build está incorreta quando o plugin depende de algumas bibliotecas AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) por @gchust

- **[Visualização de dados]** As opções do campo Enum estão vazias no bloco de filtro ([#6706](https://github.com/nocobase/nocobase/pull/6706)) por @2013xile

- **[Ação: Solicitação personalizada]** Garantir que os dados da solicitação personalizada sejam JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) por @chenos

- **[Workflow: Nó manual]**
  - Corrigir erro de ACL no centro de tarefas ([#6693](https://github.com/nocobase/nocobase/pull/6693)) por @mytharcher

  - Corrigir constante de status de tarefa manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) por @mytharcher

- **[Ação: Importar registros]** corrigido um erro ao importar campo de tempo xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) por @aaaaaajie

- **[Controle de acesso]**
  - Corrigir erro lançado ao serializar o modelo de função para o cache ([#6674](https://github.com/nocobase/nocobase/pull/6674)) por @mytharcher

  - Corrigir lógica de cálculo de união de funções ([#6605](https://github.com/nocobase/nocobase/pull/6605)) por @aaaaaajie

  - Atribuição incorreta da função atual durante o login ([#6581](https://github.com/nocobase/nocobase/pull/6581)) por @aaaaaajie

- **[Bloco: iframe]** barra de rolagem vertical aparece quando o bloco iframe é definido para altura total ([#6675](https://github.com/nocobase/nocobase/pull/6675)) por @katherinehhh

- **[Workflow]**
  - Corrigir erro de migração lançado do MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) por @mytharcher

  - Corrigir informações de estatísticas dos workflows não carregadas quando o aplicativo é iniciado ([#6642](https://github.com/nocobase/nocobase/pull/6642)) por @mytharcher

  - Corrigir OOM ao criar job com id inteiro inseguro ([#6637](https://github.com/nocobase/nocobase/pull/6637)) por @mytharcher

  - Corrigir exibição incorreta da opção de sincronização ([#6595](https://github.com/nocobase/nocobase/pull/6595)) por @mytharcher

- **[Campo de coleção: Anexo(URL)]** permitir apenas coleções de arquivos com acesso URL público ([#6664](https://github.com/nocobase/nocobase/pull/6664)) por @katherinehhh

- **[Bloco: modelo]**
  - quando o modelo referenciado usado pelo bloco de página foi excluído, salvar como modelo falha ([#6638](https://github.com/nocobase/nocobase/pull/6638)) por @gchust

  - Modificar e excluir os mesmos campos do modelo e do bloco, após criar um bloco a partir do modelo, pode causar erros de renderização ([#6626](https://github.com/nocobase/nocobase/pull/6626)) por @gchust

- **[Usuários]** Problema com a análise do esquema do formulário de perfil do usuário ([#6635](https://github.com/nocobase/nocobase/pull/6635)) por @2013xile

- **[Ação: Exportar registros]** parâmetros de filtro ausentes ao exportar dados após alterar a paginação ([#6633](https://github.com/nocobase/nocobase/pull/6633)) por @katherinehhh

- **[Móvel]** campo de seleção única com filtro 'contém' no móvel não suporta seleção múltipla ([#6629](https://github.com/nocobase/nocobase/pull/6629)) por @katherinehhh

- **[Campo de coleção: Muitos para muitos (array)]** Problema de filtragem por campos em uma coleção de associação com um campo muitos para muitos (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) por @2013xile

- **[Formulários públicos]** Permissões de visualização incluem list e get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) por @chenos

- **[Autenticação]** atribuição de token em `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) por @2013xile

- **[Calendário]** dados ausentes em datas limite na visualização de calendário semanal ([#6587](https://github.com/nocobase/nocobase/pull/6587)) por @katherinehhh

- **[Bloco: Mapa]** a validação do gerenciamento de mapa não deve passar com entrada de espaço ([#6575](https://github.com/nocobase/nocobase/pull/6575)) por @katherinehhh

- **[Ação: Edição em lote]** Clique no botão de edição em lote, configure a janela pop-up e, em seguida, abra-a novamente, a janela pop-up fica em branco ([#6578](https://github.com/nocobase/nocobase/pull/6578)) por @zhangzhonghe

- **[Workflow: Evento de ação personalizada]** Corrigir casos de teste por @mytharcher

- **[Gerenciador de e-mail]**
  - corrigir não é possível sincronizar, nenhuma exibição de assunto e outros pequenos bugs por @jiannx

  - corrigir permissão de gerenciamento de e-mail não pode visualizar lista de e-mails por @jiannx

  - Corrigir falta de await para próxima chamada. por @jiannx

- **[Armazenamento de arquivos: S3(Pro)]**
  - Corrigir falta de await para próxima chamada. por @jiannx

  - Configurações individuais de baseurl e públicas, melhorar UX de configuração de armazenamento S3 Pro por @jiannx

  - Lançar erro para o usuário ao fazer upload de logotipo para o armazenamento S3 Pro (definido como padrão) por @mytharcher

  - Organizar idioma por @jiannx

- **[Auth: OIDC]** Redirecionamento incorreto ocorre quando o caminho de callback é a string 'null' por @2013xile

- **[Bloco: Formulário de várias etapas]**
  - o botão de enviar tem a mesma cor em seu estado padrão e destacado por @jiannx

  - corrigido o bug de que a redefinição do formulário é inválida quando o campo está associado a outro campo por @jiannx

- **[Gerenciador de backup]** erro de tempo limite ocorre ao tentar restaurar um backup não criptografado com uma senha por @gchust

- **[Workflow: Aprovação]**
  - Corrigir erro de ACL no centro de tarefas por @mytharcher

  - Suporte para URL fixa para itens de aprovação no centro de tarefas por @mytharcher

  - Corrigir modo de ramificação quando `endOnReject` configurado como `true` por @mytharcher

  - Corrigir `updatedAt` alterado após a migração por @mytharcher

  - Corrigir configuração do nó de aprovação incorreta após a alteração do esquema por @mytharcher

  - Corrigir variáveis do cliente para usar no formulário de aprovação por @mytharcher

- **[Gerenciador de migração]**
  - o tempo de criação do log de migração é exibido incorretamente em alguns ambientes por @gchust

  - a opção de pular backup automático torna-se inválida se o pop-up de variável de ambiente aparecer durante a migração por @gchust
