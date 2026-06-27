---
title: "NocoBase v2.0.0-alpha.69: suporte a env.ESM_CDN_BASE_URL"
description: "Nota de lançamento da v2.0.0-alpha.69"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte para configurar modo de carregamento de dados ([#8551](https://github.com/nocobase/nocobase/pull/8551)) por @zhangzhonghe

- **[flow-engine]** suporte para env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) por @chenos

- **[Auth: DingTalk]** Permite vincular usuário com `unionId` por @2013xile

### 🚀 Melhorias

- **[flow-engine]** Melhoria no autocomplete e dicas de código no editor de código do modelo JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) por @gchust

- **[client]**
  - Ajuste da configuração de largura da coluna para seleção suspensa em subtabela editável inline ([#8561](https://github.com/nocobase/nocobase/pull/8561)) por @katherinehhh

  - Suporte para desabilitar parâmetros de appends padrão redundantes para `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile

- **[acl]** acl adiciona método generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) por @jiannx

- **[Campo de coleção: Markdown(Vditor)]** Adicionada opção de configuração para definir o modo de edição padrão nas configurações do componente. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) por @Cyx649312038

- **[Workflow]** Alteração do caminho da rota das subpáginas do workflow, para que todas as páginas do workflow fiquem sob o prefixo `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) por @mytharcher

- **[AI: Base de conhecimento]** Saída de build otimizada para reduzir o tamanho do pacote do plugin-ai-knowledge-base. por @cgyrock

- **[Multi-espaço]** Controle de permissão de multi-espaço acessa acl por @jiannx

- **[Auth: DingTalk]** Usa `userid` como chave padrão para associação de usuário, mantendo compatibilidade com autenticadores existentes que dependem de celular por @2013xile

### 🐛 Correções de Bugs

- **[client]**
  - Correção: necessário atualizar a página para adicionar registro filho após habilitar tabela em árvore ([#8574](https://github.com/nocobase/nocobase/pull/8574)) por @katherinehhh

  - Correção de problemas de espaço vazio no layout Grid ([#8535](https://github.com/nocobase/nocobase/pull/8535)) por @zhangzhonghe

  - Correção: largura da coluna não atualizando na subtabela (edição inline); entrada de texto multilinha não redimensionando com a largura da coluna ([#8573](https://github.com/nocobase/nocobase/pull/8573)) por @katherinehhh

  - Correção de um problema onde usar a "Criação Rápida" do seletor de registro de associação no formulário de edição sobrescrevia os dados existentes do formulário. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) por @gchust

  - correção: ocultar "Habilitar tabela em árvore" e "Expandir todas as linhas por padrão" para coleções não-árvore ([#8566](https://github.com/nocobase/nocobase/pull/8566)) por @katherinehhh

  - Correção de um problema onde o menu “Formulário (Adicionar novo)” era exibido incorretamente no popup da ação "Criar novo". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) por @gchust

  - correção: campo nanoid não regenerando valor padrão após envio de criação ([#8538](https://github.com/nocobase/nocobase/pull/8538)) por @katherinehhh

  - Corrigido um problema onde o fluxo de evento falhava ao aplicar ao atualizar blocos de destino em popups. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) por @gchust

  - Correção de problemas conhecidos relacionados à filtragem ([#8514](https://github.com/nocobase/nocobase/pull/8514)) por @zhangzhonghe

  - Corrigido um problema que causava a atualização repetida do bloco de dados após enviar um formulário. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) por @gchust

  - Correção de problema onde os dados da página eram atualizados incorretamente após abrir e fechar o popup pela primeira vez. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) por @gchust

  - Corrigido um problema que impedia o uso de variáveis de formulário para atribuir valores em regras de vinculação para campos de subformulário de muitos-para-muitos em vários níveis. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) por @gchust

  - correção: exibição incorreta ao definir valores padrão para o modelo de campo cascader ([#8537](https://github.com/nocobase/nocobase/pull/8537)) por @katherinehhh

  - Correção de um problema onde os dados não eram atualizados após alterações em popups de vários níveis e entre blocos. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) por @gchust

- **[flow-engine]**
  - correção: ação de exclusão de coluna não funcionando na edição de subtabela em popup quando createModelOptions está configurado ([#8576](https://github.com/nocobase/nocobase/pull/8576)) por @katherinehhh

  - Correção de um problema onde enviar o formulário após trocar de página não atualiza a página. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) por @gchust

  - Correção de um problema onde algumas bibliotecas de terceiros não podiam ser importadas corretamente em blocos JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) por @gchust

  - Corrigido carregamento incorreto de algumas bibliotecas ESM no runjs devido à classificação incorreta como módulos AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) por @gchust

  - correção do problema FilterByTK quando filterTargetKey é um array de elemento único em fonte de dados externa ([#8522](https://github.com/nocobase/nocobase/pull/8522)) por @katherinehhh

  - correção: ação de exclusão de coluna não funcionando na edição de subtabela em popup quando createModelOptions está configurado ([#8560](https://github.com/nocobase/nocobase/pull/8560)) por @katherinehhh

- **[Campo de coleção: Anexo(URL)]** Correção: configuração de exibição do nome do arquivo do campo de anexo URL não funcionando no formulário de edição ([#8571](https://github.com/nocobase/nocobase/pull/8571)) por @katherinehhh

- **[Funcionários de IA]**
  - Correção de um problema onde o nó LLM falha ao enviar mensagens ([#8569](https://github.com/nocobase/nocobase/pull/8569)) por @2013xile

  - Correção do problema onde o sistema não inicia após o build ([#8523](https://github.com/nocobase/nocobase/pull/8523)) por @cgyrock

  - Correção da exceção que ocorre quando ferramentas são chamadas automaticamente durante a modelagem de dados de IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) por @cgyrock

- **[Modelos de UI]** Correção de erro ao reabrir e enviar um modelo de popup salvo para o formulário "Adicionar novo" do campo de associação. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) por @gchust

- **[Ação: Importar registros]** Correção da vulnerabilidade da ação de importação ([#8544](https://github.com/nocobase/nocobase/pull/8544)) por @mytharcher

- **[Gerenciador de arquivos]** Caminho de arquivo seguro para armazenamento local, para evitar caminho de acesso fora da raiz do documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher

- **[Workflow]** Adicionada tolerância a falhas para o componente de seleção de registro de coleção, para evitar erro quando a coleção é excluída ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher

- **[Workflow: Evento de ação personalizada]** Correção do problema onde parâmetros e payload estão incorretos ao acionar workflow personalizado por @mytharcher

- **[Multi-espaço]**
  - remover o atributo read-pretty para o campo de espaço por @jiannx

  - adicionar script de migração para remover x-ready-pretty no campo de espaço por @jiannx

- **[AI: Base de conhecimento]** Correção do problema onde o sistema não inicia após o build por @cgyrock

- **[Ação: Importar registros Pro]** Correção dos números de contagem no resultado da importação e tradução de mensagens por @mytharcher

- **[Workflow: Subfluxo]** Correção do caminho da rota do link do workflow por @mytharcher

- **[Impressão de modelo]** correção do problema de exibição da lista de campos na configuração da ação de impressão de modelo por @katherinehhh

- **[Workflow: Aprovação]**
  - Correção de problema de desempenho causado pelo campo JSON na listagem de carregamento (MySQL) por @mytharcher

  - Adicionada tolerância a falhas quando o workflow é excluído, para evitar erro de carregamento na lista de tarefas por @mytharcher

  - Correção de erro ao adicionar função ao usuário se o workflow de públicos estiver desabilitado por @mytharcher

- **[Gerenciador de e-mail]** corpo não recolhe quando o texto está selecionado. correção: falha ao baixar anexo por @jiannx

- **[WeCom]** Correção de um problema onde usuários não podem ser registrados automaticamente quando o celular está ausente por @2013xile
