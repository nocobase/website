---
title: "Atualizações Semanais｜Suporte a Altura de Bloco Configurável"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 6 a 12 de fevereiro de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.46](https://www.nocobase.com/en/blog/v1.9.46)

*Data de lançamento: 2026-02-11*

### 🐛 Correções de Bugs

- **[client]** Corrige opções de componente de campo não atualizadas em tempo real quando o campo de associação alterna o padrão ([#8611](https://github.com/nocobase/nocobase/pull/8611)) por @katherinehhh
- **[Visualização de dados: ECharts]** Corrige erro de ortografia no ECharts por @heziqiang
- **[Fluxo de trabalho: Aprovação]**

  - Corrige o problema de valores ausentes no popup de detalhes de "Minha aplicação" por @mytharcher
  - Corrige erro lançado ao executar no modo antes de salvar por @mytharcher

### [v1.9.45](https://www.nocobase.com/en/blog/v1.9.45)

*Data de lançamento: 2026-02-09*

### 🐛 Correções de Bugs

- **[Componente de campo: máscara]** Corrige um problema onde o popup de configurações do campo de máscara não conseguia carregar todas as funções de usuário corretamente. por @gchust
- **[Fluxo de trabalho: Aprovação]** Corrige id incorreto para carregar registro de detalhes por @mytharcher

### [v1.9.44](https://www.nocobase.com/en/blog/v1.9.44)

*Data de lançamento: 2026-02-08*

### 🎉 Novos Recursos

- **[Fluxo de trabalho: Aprovação]** Adiciona controle ACL para APIs de aprovação por @mytharcher

### [v1.9.43](https://www.nocobase.com/en/blog/v1.9.43)

*Data de lançamento: 2026-02-06*

### 🎉 Novos Recursos

- **[Autenticação: DingTalk]** Permite vincular usuário com `unionId` por @2013xile

### 🚀 Melhorias

- **[Campo de coleção: Markdown(Vditor)]** Adicionada uma opção de configuração para definir o modo de edição padrão nas configurações do componente. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) por @Cyx649312038

### 🐛 Correções de Bugs

- **[Ação: Importar registros]** Corrige a vulnerabilidade da ação de importação ([#8544](https://github.com/nocobase/nocobase/pull/8544)) por @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.23](https://www.nocobase.com/en/blog/v2.0.0-beta.23)

*Data de lançamento: 2026-02-12*

### 🎉 Novos Recursos

- **[Bloco: GridCard]** suporta altura de bloco configurável ([#8583](https://github.com/nocobase/nocobase/pull/8583)) por @katherinehhh
- **[Ação: Editar em lote]** edição em massa 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) por @jiannx

### 🚀 Melhorias

- **[client]**

  - Tabela 2.0 suporta ordenação por arrastar e soltar ([#8540](https://github.com/nocobase/nocobase/pull/8540)) por @jiannx
  - Move as configurações de atribuição de campo e valor padrão para a configuração de nível de formulário. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) por @chenos
- **[Localização]** cria automaticamente chaves i18n ausentes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) por @jiannx

### 🐛 Correções de Bugs

- **[client]**

  - corrige dados filtrados incorretos no dropdown de associação quando o campo de título é uma chave estrangeira ([#8619](https://github.com/nocobase/nocobase/pull/8619)) por @katherinehhh
  - Corrige problema onde o campo de anexo de associação limpo não é salvo após o envio no formulário de edição ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh
  - Corrige opções de componente de campo não atualizadas em tempo real quando o campo de associação alterna o padrão ([#8611](https://github.com/nocobase/nocobase/pull/8611)) por @katherinehhh
  - Corrige um problema onde as colunas da tabela não renderizavam novamente após clicar em Executar no editor de coluna JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) por @gchust
  - corrige incapacidade de restaurar dados selecionados no componente de campo seletor de registro após edição ([#8610](https://github.com/nocobase/nocobase/pull/8610)) por @katherinehhh
- **[Gerenciador de arquivos]** corrige problema onde o componente de campo de arquivo ainda pode abrir o diálogo do seletor quando desabilitado ([#8617](https://github.com/nocobase/nocobase/pull/8617)) por @katherinehhh
- **[Visualização de dados: ECharts]** Corrige erro de ortografia no ECharts por @heziqiang
- **[Fluxo de trabalho: Aprovação]**

  - Corrige o problema de valores ausentes no popup de detalhes de "Minha aplicação" por @mytharcher
  - Corrige erro lançado ao executar no modo antes de salvar por @mytharcher

### [v2.0.0-beta.22](https://www.nocobase.com/en/blog/v2.0.0-beta.22)

*Data de lançamento: 2026-02-10*

### 🎉 Novos Recursos

- **[client]** Suporta configurar títulos de aba do navegador para páginas, abas de página, popups e abas de popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) por @zhangzhonghe
- **[Fluxo de trabalho: Aprovação]** Adiciona controle ACL para APIs de aprovação por @mytharcher

### 🚀 Melhorias

- **[client]** Usa modelos de campo independentes para campos de associação em formulários de filtro ([#8511](https://github.com/nocobase/nocobase/pull/8511)) por @zhangzhonghe
- **[Fluxo de trabalho: CC]** Refatora o plugin de CC do fluxo de trabalho para suportar a arquitetura FlowModel com compatibilidade v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[flow-engine]**

  - Corrige um problema onde objetos Blob não podiam ser criados no bloco JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) por @gchust
  - Corrige contexto de execução incorreto para "ctx.sql" em Modelos JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) por @gchust
- **[Componente de campo: máscara]** Corrige um problema onde o popup de configurações do campo de máscara não conseguia carregar todas as funções de usuário corretamente. por @gchust
- **[Fluxo de trabalho: Aprovação]** Corrige id incorreto para carregar registro de detalhes por @mytharcher

### [v2.0.0-beta.21](https://www.nocobase.com/en/blog/v2.0.0-beta.21)

*Data de lançamento: 2026-02-07*

### 🎉 Novos Recursos

- **[client]** suporta configurar campos do campo de coleção de associação no bloco de formulário ([#8578](https://github.com/nocobase/nocobase/pull/8578)) por @katherinehhh
- **[Ação: Duplicar registro]** adiciona ação de duplicação 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) por @katherinehhh
- **[Fluxo de trabalho]** Suporta copiar, colar e mover nós por arrastar e soltar na tela do fluxo de trabalho ([#8559](https://github.com/nocobase/nocobase/pull/8559)) por @mytharcher

### 🚀 Melhorias

- **[flow-engine]** Melhora o preenchimento automático e as dicas de código no editor de código do modelo JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) por @gchust
- **[Fluxo de trabalho: Aprovação]** Remove suporte para campos JS por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**

  - Corrige um potencial erro de renderização "read hidden" no modo não-config. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) por @gchust
  - corrige sub-tabela (edição inline) ainda mostrando colunas em modo de edição após alternar para visualização somente leitura no formulário de edição ([#8589](https://github.com/nocobase/nocobase/pull/8589)) por @katherinehhh
- **[Flow engine]** Corrige um problema onde usar um modelo de bloco no modo "Duplicar" causava popup vazio ao clicar em algum botão de ação do bloco. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) por @gchust
- **[Bloco: Mapa]** Corrige opções de configuração 'Salvar como modelo' duplicadas no bloco de mapa ([#8584](https://github.com/nocobase/nocobase/pull/8584)) por @katherinehhh

### [v2.0.0-beta.20](https://www.nocobase.com/en/blog/v2.0.0-beta.20)

*Data de lançamento: 2026-02-05*

### 🎉 Novos Recursos

- **[client]** Suporta configurar modo de carregamento de dados ([#8551](https://github.com/nocobase/nocobase/pull/8551)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[flow-engine]** corrige ação de exclusão de coluna não funcionando na edição de sub-tabela em popup quando createModelOptions está configurado ([#8576](https://github.com/nocobase/nocobase/pull/8576)) por @katherinehhh
- **[Gerenciador de e-mail]**

  - adiciona filtros ao gerenciamento por @jiannx
  - Corrige o problema de e-mails na mesma caixa de correio entre vários usuários e otimiza o desempenho por @jiannx
  - corrige cadeia de conversa por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.71](https://www.nocobase.com/en/blog/v2.0.0-alpha.71)

*Data de lançamento: 2026-02-10*

### 🎉 Novos Recursos

- **[client]**

  - Suporta configurar títulos de aba do navegador para páginas, abas de página, popups e abas de popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) por @zhangzhonghe
  - suporta configurar campos do campo de coleção de associação no bloco de formulário ([#8578](https://github.com/nocobase/nocobase/pull/8578)) por @katherinehhh
- **[Bloco: GridCard]** suporta altura de bloco configurável ([#8583](https://github.com/nocobase/nocobase/pull/8583)) por @katherinehhh
- **[Ação: Duplicar registro]** adiciona ação de duplicação 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]** Adiciona controle ACL para APIs de aprovação por @mytharcher

### 🚀 Melhorias

- **[client]** Usa modelos de campo independentes para campos de associação em formulários de filtro ([#8511](https://github.com/nocobase/nocobase/pull/8511)) por @zhangzhonghe
- **[Fluxo de trabalho: CC]** Refatora o plugin de CC do fluxo de trabalho para suportar a arquitetura FlowModel com compatibilidade v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[flow-engine]**

  - Corrige contexto de execução incorreto para "ctx.sql" em Modelos JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) por @gchust
  - Corrige um problema onde objetos Blob não podiam ser criados no bloco JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) por @gchust
- **[client]**

  - Corrige um problema onde as colunas da tabela não renderizavam novamente após clicar em Executar no editor de coluna JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) por @gchust
  - Corrige um potencial erro de renderização "read hidden" no modo não-config. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) por @gchust
  - corrige sub-tabela (edição inline) ainda mostrando colunas em modo de edição após alternar para visualização somente leitura no formulário de edição ([#8589](https://github.com/nocobase/nocobase/pull/8589)) por @katherinehhh
- **[Flow engine]** Corrige um problema onde usar um modelo de bloco no modo "Duplicar" causava popup vazio ao clicar em algum botão de ação do bloco. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) por @gchust
- **[Componente de campo: máscara]** Corrige um problema onde o popup de configurações do campo de máscara não conseguia carregar todas as funções de usuário corretamente. por @gchust
- **[Fluxo de trabalho: Aprovação]** Corrige id incorreto para carregar registro de detalhes por @mytharcher

### [v2.0.0-alpha.70](https://www.nocobase.com/en/blog/v2.0.0-alpha.70)

*Data de lançamento: 2026-02-06*

### 🎉 Novos Recursos

- **[Fluxo de trabalho]** Suporta copiar, colar e mover nós por arrastar e soltar na tela do fluxo de trabalho ([#8559](https://github.com/nocobase/nocobase/pull/8559)) por @mytharcher

### 🚀 Melhorias

- **[Fluxo de trabalho: Aprovação]** Remove suporte para campos JS por @zhangzhonghe

### 🐛 Correções de Bugs

- **[Bloco: Mapa]** Corrige opções de configuração 'Salvar como modelo' duplicadas no bloco de mapa ([#8584](https://github.com/nocobase/nocobase/pull/8584)) por @katherinehhh

### [v2.0.0-alpha.69](https://www.nocobase.com/en/blog/v2.0.0-alpha.69)

*Data de lançamento: 2026-02-05*

### 🎉 Novos Recursos

- **[client]** Suporta configurar modo de carregamento de dados ([#8551](https://github.com/nocobase/nocobase/pull/8551)) por @zhangzhonghe
- **[flow-engine]** suporta env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) por @chenos
- **[Autenticação: DingTalk]** Permite vincular usuário com `unionId` por @2013xile

### 🚀 Melhorias

- **[flow-engine]** Melhora o preenchimento automático e as dicas de código no editor de código do modelo JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) por @gchust
- **[client]**

  - ajusta a configuração de largura da coluna para seleção dropdown em sub-tabela editável inline ([#8561](https://github.com/nocobase/nocobase/pull/8561)) por @katherinehhh
  - Suporta desabilitar parâmetros de acréscimo padrão redundantes para `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile
- **[acl]** acl adiciona método generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) por @jiannx
- **[Campo de coleção: Markdown(Vditor)]** Adicionada uma opção de configuração para definir o modo de edição padrão nas configurações do componente. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) por @Cyx649312038
- **[Fluxo de trabalho]** Altera o caminho da rota das subpáginas do fluxo de trabalho, para colocar todas as páginas do fluxo de trabalho sob o prefixo `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) por @mytharcher
- **[IA: Base de conhecimento]** Otimizada a saída da compilação para reduzir o tamanho do pacote do plugin-ai-knowledge-base. por @cgyrock
- **[Multi-espaço]** controle de permissão multi-espaço acessa acl por @jiannx
- **[Autenticação: DingTalk]** Usa `userid` como chave padrão para associação de usuário, mantendo a compatibilidade com autenticadores existentes que dependem de celular por @2013xile

### 🐛 Correções de Bugs

- **[client]**

  - Corrige necessidade de atualizar página para adicionar registro filho após habilitar tabela em árvore ([#8574](https://github.com/nocobase/nocobase/pull/8574)) por @katherinehhh
  - Corrige problemas de espaço vazio no layout Grid ([#8535](https://github.com/nocobase/nocobase/pull/8535)) por @zhangzhonghe
  - Corrige largura da coluna não atualizando na sub-tabela (edição inline); entrada de texto multilinha não redimensionando com a largura da coluna ([#8573](https://github.com/nocobase/nocobase/pull/8573)) por @katherinehhh
  - Corrige um problema onde usar a "Criação rápida" do seletor de registro de associação no formulário de edição sobrescrevia os dados existentes do formulário. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) por @gchust
  - correção: ocultar "Habilitar tabela em árvore" e "Expandir todas as linhas por padrão" para coleções não-árvore ([#8566](https://github.com/nocobase/nocobase/pull/8566)) por @katherinehhh
  - Corrige um problema onde o menu "Formulário (Adicionar novo)" era exibido incorretamente no popup de ação "Criar novo". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) por @gchust
  - corrige campo nanoid não regenerando valor padrão após envio de criação ([#8538](https://github.com/nocobase/nocobase/pull/8538)) por @katherinehhh
  - Corrige um problema onde o fluxo de eventos falhava ao aplicar ao atualizar blocos de destino em popups. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) por @gchust
  - Corrige problemas conhecidos relacionados à filtragem ([#8514](https://github.com/nocobase/nocobase/pull/8514)) por @zhangzhonghe
  - Corrige um problema que causava a atualização repetida do bloco de dados após enviar um formulário. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) por @gchust
  - Corrige problema onde os dados da página são atualizados incorretamente após abrir e fechar o popup pela primeira vez. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) por @gchust
  - Corrige um problema que impedia o uso de variáveis de formulário para atribuir valores em regras de vinculação para campos de subformulário de muitos-para-muitos multinível. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) por @gchust
  - corrige exibição incorreta ao definir valores padrão para o modelo de campo cascata ([#8537](https://github.com/nocobase/nocobase/pull/8537)) por @katherinehhh
  - Corrige um problema onde os dados não eram atualizados após alterações em popups multinível e entre blocos. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) por @gchust
- **[flow-engine]**

  - corrige ação de exclusão de coluna não funcionando na edição de sub-tabela em popup quando createModelOptions está configurado ([#8576](https://github.com/nocobase/nocobase/pull/8576)) por @katherinehhh
  - Corrige um problema onde o envio do formulário após alternar páginas não atualiza a página. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) por @gchust
  - Corrige um problema onde algumas bibliotecas de terceiros não podiam ser importadas corretamente em blocos JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) por @gchust
  - Corrige carregamento incorreto de algumas bibliotecas ESM no runjs devido à classificação incorreta como módulos AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) por @gchust
  - corrige problema FilterByTK quando filterTargetKey é um array de elemento único em fonte de dados externa ([#8522](https://github.com/nocobase/nocobase/pull/8522)) por @katherinehhh
  - corrige ação de exclusão de coluna não funcionando na edição de sub-tabela em popup quando createModelOptions está configurado ([#8560](https://github.com/nocobase/nocobase/pull/8560)) por @katherinehhh
- **[Campo de coleção: Anexo(URL)]** Corrige configuração de exibição de nome de arquivo do campo de anexo URL não funcionando no formulário de edição ([#8571](https://github.com/nocobase/nocobase/pull/8571)) por @katherinehhh
- **[Funcionários de IA]**

  - Corrige um problema onde o nó LLM falha ao enviar mensagens ([#8569](https://github.com/nocobase/nocobase/pull/8569)) por @2013xile
  - Corrige o problema onde o sistema não consegue iniciar após a compilação ([#8523](https://github.com/nocobase/nocobase/pull/8523)) por @cgyrock
  - Corrige a exceção que ocorre quando ferramentas são chamadas automaticamente durante a modelagem de dados de IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) por @cgyrock
- **[Modelos de UI]** Corrige erro ao reabrir e enviar um modelo de popup salvo para o formulário "Adicionar novo" do campo de associação. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) por @gchust
- **[Ação: Importar registros]** Corrige a vulnerabilidade da ação de importação ([#8544](https://github.com/nocobase/nocobase/pull/8544)) por @mytharcher
- **[Gerenciador de arquivos]** Caminho de arquivo seguro para armazenamento local, para evitar caminho de acesso fora da raiz do documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher
- **[Fluxo de trabalho]** Adiciona tolerância a falhas para o componente de seleção de registro de coleção, para evitar erro lançado quando a coleção é excluída ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrige o problema onde parâmetros e payload estão incorretos ao acionar fluxo de trabalho personalizado por @mytharcher
- **[Multi-espaço]**

  - remove o atributo read-pretty para campo de espaço por @jiannx
  - adiciona script de migração para remover x-ready-pretty no campo de espaço por @jiannx
- **[IA: Base de conhecimento]** Corrige o problema onde o sistema não consegue iniciar após a compilação por @cgyrock
- **[Ação: Importar registros Pro]** Corrige números de contagem no resultado da importação e tradução de mensagens por @mytharcher
- **[Fluxo de trabalho: Subfluxo]** Corrige caminho da rota do link do fluxo de trabalho por @mytharcher
- **[Impressão de modelo]** corrige problema de exibição da lista de campos na configuração da ação de impressão de modelo por @katherinehhh
- **[Fluxo de trabalho: Aprovação]**

  - Corrige problema de desempenho causado pelo campo JSON no carregamento de lista (MySQL) por @mytharcher
  - Adiciona tolerância a falhas na exclusão do fluxo de trabalho, para evitar erro de carregamento na lista de tarefas por @mytharcher
  - Corrige erro lançado ao adicionar função ao usuário se o fluxo de trabalho de públicos estiver desabilitado por @mytharcher
- **[Gerenciador de e-mail]** corpo não recolhe quando o texto é selecionado. corrige falha ao baixar anexo por @jiannx
- **[WeCom]** Corrige um problema onde os usuários não podem ser registrados automaticamente quando o celular está ausente por @2013xile
