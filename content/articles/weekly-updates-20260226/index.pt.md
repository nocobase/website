---
title: "Atualizações Semanais｜Plugins comerciais de código aberto e atualização de licença de AGPL-3.0 para Apache-2.0"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 13 a 26 de fevereiro de 2026."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.5](https://www.nocobase.com/en/blog/v2.0.5)

*Data de lançamento: 26/02/2026*

### 🐛 Correções de Bugs

- **[client]** No mobile, feche o menu primeiro e depois execute o salto de página ([#8699](https://github.com/nocobase/nocobase/pull/8699)) por @zhangzhonghe
- **[AI LLM: GigaChat]** Corrigido o plugin GigaChat que não funcionava na versão 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) por @cgyrock
- **[Funcionários de IA]**

  - Unificar entrada de arquivo para APIs chatGPT usando ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) por @cgyrock
  - Corrigir erro do agente de IA quando o usuário envia nova mensagem sem confirmar a execução da ferramenta ([#8697](https://github.com/nocobase/nocobase/pull/8697)) por @cgyrock
- **[IA: Base de conhecimento]** Corrigido erro de inicialização do plugin de base de conhecimento de IA. por @cgyrock
- **[Gerenciador de e-mail]** Erro de renderização de imagem por @jiannx

### [v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

*Data de lançamento: 25/02/2026*

### 🎉 Novos Recursos

- **[indefinido]**

  - Adicionar um plugin experimental "Bloco de referência", que permite reutilizar blocos existentes por referência ou cópia. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) por @gchust
  - Rascunhos de formulário por @chenos
- **[acl]** Abrir plugins comerciais como código aberto e atualizar licença de AGPL-3.0 para Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) por @chenos
- **[client]**

  - Suporte para configurar títulos de abas do navegador para páginas, abas de página, popups e abas de popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) por @zhangzhonghe
  - suporte para configurar campos do campo de coleção de associação no bloco de formulário ([#8578](https://github.com/nocobase/nocobase/pull/8578)) por @katherinehhh
  - Suporte para configurar modo de carregamento de dados ([#8551](https://github.com/nocobase/nocobase/pull/8551)) por @zhangzhonghe
  - adicionar componente de campo de subtabela (edição em popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) por @katherinehhh
  - Ao criar coleção, o tipo de campo de id predefinido pode ser alterado ([#8129](https://github.com/nocobase/nocobase/pull/8129)) por @cgyrock
  - adicionar suporte para configurações de adicionar/selecionar/desassociar em subformulário muitos-para-muitos ([#8099](https://github.com/nocobase/nocobase/pull/8099)) por @katherinehhh
  - Suporte para personalizar estilos globais no editor de temas ([#7960](https://github.com/nocobase/nocobase/pull/7960)) por @ljmiaoo
  - suporte para definir regra de ordenação padrão no bloco de detalhes ([#8070](https://github.com/nocobase/nocobase/pull/8070)) por @katherinehhh
  - Suporte para definir tipo de dados para campo Número (opções: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) por @chenos
  - suporte para ordenação de campo de coluna em tabela ([#7900](https://github.com/nocobase/nocobase/pull/7900)) por @katherinehhh
  - adicionar suporte a criação rápida para seleção de campo de associação ([#7887](https://github.com/nocobase/nocobase/pull/7887)) por @katherinehhh
  - suporte a seletor em cascata para campo de associação de coleção em árvore ([#7846](https://github.com/nocobase/nocobase/pull/7846)) por @katherinehhh
  - Suporte para arrastar ações de coluna de tabela ([#7842](https://github.com/nocobase/nocobase/pull/7842)) por @zhangzhonghe
  - adicionar suporte a paginação para subtabela ([#7754](https://github.com/nocobase/nocobase/pull/7754)) por @katherinehhh
  - Fluxo de Eventos: Introduzidas novas ações predefinidas para aprimorar opções de personalização para manipulação de eventos, permitindo que os usuários simplifiquem fluxos de trabalho e melhorem a eficiência ([#7672](https://github.com/nocobase/nocobase/pull/7672)) por @zhangzhonghe
  - Adicionar bloco markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) por @katherinehhh
  - Suporte para definir regras de vinculação para subformulários ([#7640](https://github.com/nocobase/nocobase/pull/7640)) por @zhangzhonghe
  - Adicionado suporte para ouvintes de evento de clique em linha de tabela, permitindo que os usuários executem ações específicas quando uma linha na tabela é clicada ([#7622](https://github.com/nocobase/nocobase/pull/7622)) por @zhangzhonghe
  - Adicionar suporte para variáveis personalizadas ([#7585](https://github.com/nocobase/nocobase/pull/7585)) por @zhangzhonghe
  - Adicionar variável "Tipo de dispositivo atual" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) por @zhangzhonghe
- **[flow-engine]** suporte env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) por @chenos
- **[server]** Refatorar o supervisor de aplicativos para suportar gerenciamento de múltiplos aplicativos em diferentes cenários ([#8043](https://github.com/nocobase/nocobase/pull/8043)) por @2013xile
- **[test]** adicionar controle de concorrência em nível de processo para o gerenciador de tarefas base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) por @cgyrock
- **[Ação: Edição em lote]** edição em lote 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) por @jiannx
- **[Bloco: GridCard]**

  - suporte para altura de bloco configurável ([#8583](https://github.com/nocobase/nocobase/pull/8583)) por @katherinehhh
  - Adicionar bloco de cartão de grade 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) por @katherinehhh
- **[Ação: Duplicar registro]** adicionar ação de duplicação 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) por @katherinehhh
-


Devido a limitações de espaço, consulte o link abaixo para as notas de versão completas.

[https://www.nocobase.com/en/blog/v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

### [v1.9.48](https://www.nocobase.com/en/blog/v1.9.48)

*Data de lançamento: 24/02/2026*

### 🚀 Melhorias

- **[Controle de acesso]** Fornecer API sanitize para filtrar valores de associação em ação ([#8601](https://github.com/nocobase/nocobase/pull/8601)) por @2013xile

### 🐛 Correções de Bugs

- **[Fluxo de trabalho: Aprovação]** Sanitizar valores de associação em ações de aprovação, para evitar qualquer manipulação de dados além da permissão por @mytharcher

### [v2.0.2](https://www.nocobase.com/en/blog/v2.0.2])

*Data de lançamento: 22/02/2026*

### 🐛 Correções de Bugs

- **[Calendário]** Corrigir problemas de localização e formatação de data do calendário ([#8498](https://github.com/nocobase/nocobase/pull/8498)) por @sembaev-a-a

### [v2.0.1](https://www.nocobase.com/en/blog/v2.0.1)

*Data de lançamento: 16/02/2026*

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Corrigir OOM do navegador ao usar funcionário de IA ([#8653](https://github.com/nocobase/nocobase/pull/8653)) por @mytharcher

### [v1.9.47](https://www.nocobase.com/en/blog/v1.9.47)

*Data de lançamento: 13/02/2026*

### 🐛 Correções de Bugs

- **[client]** Corrigir problema onde o campo de anexo de associação limpo não é salvo após o envio no formulário de edição ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh
- **[utils]** Corrigir problema de segurança do mecanismo avaliador `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrigir o problema onde os dados de aprovação não aparecem no popup de detalhes do registro se o modo de fluxo de trabalho estiver definido como "Antes de salvar" por @mytharcher


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.2](https://www.nocobase.com/en/blog/v2.1.0-beta.2)

*Data de lançamento: 22/02/2026*

### 🐛 Correções de Bugs

- **[Calendário]** Corrigir problemas de localização e formatação de data do calendário ([#8498](https://github.com/nocobase/nocobase/pull/8498)) por @sembaev-a-a
- **[Funcionários de IA]** Corrigir OOM do navegador ao usar funcionário de IA ([#8653](https://github.com/nocobase/nocobase/pull/8653)) por @mytharcher

### [v2.1.0-beta.1](https://www.nocobase.com/en/blog/v2.1.0-beta.1)

*Data de lançamento: 14/02/2026*

### 🎉 Novos Recursos

- **[server]** Refatorar o supervisor de aplicativos para suportar gerenciamento de múltiplos aplicativos em diferentes cenários ([#8043](https://github.com/nocobase/nocobase/pull/8043)) por @2013xile

### 🚀 Melhorias

- **[client]**
  - Melhorar a UI de atribuição de campo data/hora para suportar a seleção de datas/horas relativas. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) por @gchust
  - Suporte para especificar campo de título para campos de associação ao atribuir campo. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) por @gchust

### 🐛 Correções de Bugs

- **[flow-engine]**

  - Corrigir um problema onde o submenu do campo de filtro não podia ser expandido quando uma palavra-chave de pesquisa estava presente. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) por @gchust
  - corrigir ação de exclusão de coluna não funcionando na edição de subtabela em popup quando createModelOptions está configurado ([#8560](https://github.com/nocobase/nocobase/pull/8560)) por @katherinehhh
- **[client]**

  - Corrigir um problema onde atribuir um único registro a um campo de relação muitos-para-muitos produzia resultados incorretos. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) por @gchust
  - analisar data usando seletor de data e adicionar validação de força de senha, etc ([#8647](https://github.com/nocobase/nocobase/pull/8647)) por @jiannx
  - Corrigir o problema de espaçamento causado por ações vinculadas ocultas na coluna de ação da tabela ([#8646](https://github.com/nocobase/nocobase/pull/8646)) por @zhangzhonghe
  - Corrigir o problema onde `Action.Modal` não podia ser fechado após alguma interação ([#8642](https://github.com/nocobase/nocobase/pull/8642)) por @mytharcher
  - corrigir erro de sintaxe de resolução quando o item markdown renderiza Liquid inválido ([#8637](https://github.com/nocobase/nocobase/pull/8637)) por @katherinehhh
  - Corrigir requisições de análise desnecessárias do backend para propriedades de campo muitos-para-muitos no bloco de formulário. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) por @gchust
  - corrigir formato de número ausente para campos de fórmula numérica e configurações de formato de data para campos de fórmula de data ([#8625](https://github.com/nocobase/nocobase/pull/8625)) por @katherinehhh
  - corrigir renderização incompleta da borda superior no primeiro item do formulário ([#8623](https://github.com/nocobase/nocobase/pull/8623)) por @katherinehhh
  - corrigir: ocultar "Habilitar tabela em árvore" e "Expandir todas as linhas por padrão" para coleções não-árvore ([#8566](https://github.com/nocobase/nocobase/pull/8566)) por @katherinehhh
- **[utils]** Corrigir problema de segurança do mecanismo avaliador `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher
- **[Funcionários de IA]**

  - Corrige um problema onde links de citação de pesquisas web de IA não eram exibidos na caixa de chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) por @cgyrock
  - corrigir erro de parâmetros da API openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) por @cgyrock
- **[Impressão de modelo]** corrigir campos com a mesma chave levando a erros de renderização por @jiannx
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir o problema onde erro é lançado ao aprovar registro excluído por @mytharcher
  - Corrigir o problema onde os dados de aprovação não aparecem no popup de detalhes do registro se o modo de fluxo de trabalho estiver definido como "Antes de salvar" por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.6](https://www.nocobase.com/en/blog/v2.1.0-alpha.6)

*Data de lançamento: 25/02/2026*

### 🎉 Novos Recursos

- **[acl]** Abrir plugins comerciais como código aberto e atualizar licença de AGPL-3.0 para Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) por @chenos

### 🚀 Melhorias

- **[indefinido]** Atualizar docs do funcionário de IA ([#8690](https://github.com/nocobase/nocobase/pull/8690)) por @heziqiang

### 🐛 Correções de Bugs

- **[client]**

  - Unificar comportamento de paginação mobile para tabela e cartão de grade ([#8691](https://github.com/nocobase/nocobase/pull/8691)) por @zhangzhonghe
  - filtro de bloco de gráfico não funcionando ([#8671](https://github.com/nocobase/nocobase/pull/8671)) por @chenos
- **[Funcionários de IA]** API aiTools:list retorna 403 ([#8672](https://github.com/nocobase/nocobase/pull/8672)) por @chenos
- **[Localização]** melhorar o tratamento de chaves i18n ausentes ([#8673](https://github.com/nocobase/nocobase/pull/8673)) por @chenos

### [v2.1.0-alpha.3](https://www.nocobase.com/en/blog/v2.1.0-alpha.3)

*Data de lançamento: 16/02/2026*

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Corrigir OOM do navegador ao usar funcionário de IA ([#8653](https://github.com/nocobase/nocobase/pull/8653)) por @mytharcher

### [v2.1.0-alpha.2](https://www.nocobase.com/en/blog/v2.1.0-alpha.2)

*Data de lançamento: 15/02/2026*

### 🎉 Novos Recursos

- **[Fluxo de trabalho: Aprovação]** Adicionar controle ACL para APIs de aprovação por @mytharcher
- **[Auth: DingTalk]** Permite vincular usuário com `unionId` por @2013xile

### 🚀 Melhorias

- **[IA: Base de conhecimento]** Saída de build otimizada para reduzir o tamanho do pacote do plugin-ai-knowledge-base. por @cgyrock
- **[Multi-espaço]** controle de permissão de multi-espaço acessa acl por @jiannx
- **[Ação: Exportar registros Pro]** Melhorar escopo de dados de ação de exportação com base em registros selecionados ou filtros de recurso por @katherinehhh
- **[Fluxo de trabalho: Aprovação]**

  - Remover suporte para campos JS por @zhangzhonghe
  - Simplificar parâmetros na consulta e melhorar o desempenho por @mytharcher
  - Implementar controle de acesso para APIs para evitar operações de dados não autorizadas por @mytharcher
  - Adicionar lógica de reparo para públicos sincronizados após migração por @mytharcher
- **[Auth: DingTalk]** Usar `userid` como chave padrão para associação de usuário, mantendo a compatibilidade com autenticadores existentes que dependem de mobile por @2013xile

### 🐛 Correções de Bugs

- **[Multi-espaço]**

  - adicionar script de migração para remover x-ready-pretty no campo de espaço por @jiannx
  - Espaço relacionado ao adicionar dados associados por @jiannx
  - Cor do seletor de espaço segue o tema por @jiannx
  - remover o atributo read-pretty para campo de espaço por @jiannx
- **[Componente de campo: máscara]** Corrigir um problema onde o popup de configurações do campo de máscara não conseguia carregar todas as funções de usuário corretamente. por @gchust
- **[Ação: Importar registros Pro]**

  - Corrigir o problema onde o fluxo de trabalho acionado por importação assíncrona atrasava para executar por @mytharcher
  - Corrigir números de contagem no resultado da importação e tradução de mensagens por @mytharcher
- **[IA: Base de conhecimento]** Corrigir o problema onde o sistema não pode iniciar após o build por @cgyrock
- **[Fonte de dados: API REST]** Adicionar tolerância a falhas para contexto de requisição, para evitar erro lançado quando o método não está no contexto por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigir o problema onde parâmetros e payload estão incorretos ao acionar fluxo de trabalho personalizado por @mytharcher
- **[Ação: Exportar registros Pro]** Corrigir erro quando sub-aplicativos executam tarefas assíncronas de importação/exportação enquanto o aplicativo principal não habilita o plugin de importação/exportação pro por @cgyrock
- **[Fluxo de trabalho: Webhook]**

  - Corrigir o problema onde erro 404 é lançado ao postar para URL de webhook no sub-app por @mytharcher
  - Corrigir o problema onde os dados do corpo estão ausentes quando a análise do corpo não está configurada por @mytharcher
- **[Fluxo de trabalho: Subfluxo]** Corrigir caminho de rota do link do fluxo de trabalho por @mytharcher
- **[Impressão de modelo]**

  - corrigir problema de exibição da lista de campos na configuração de ação de impressão de modelo por @katherinehhh
  - corrigir campos com a mesma chave levando a erros de renderização por @jiannx
  - Corrigir problema de pop-up de configuração de modelo obscurecido por @zhangzhonghe
  - remover botões de rodapé da configuração de modelo de impressão por @katherinehhh
  - Corrigida lógica de permissão de botão de impressão incorreta quando as funções eram unidas. por @jiannx
  - suporte a campo de espaço por @jiannx
  - exibir campos de espaço na versão 2.0 por @jiannx
- **[Armazenamento de arquivos: S3(Pro)]** Corrigir o problema onde o modo de renomeação de arquivo não funciona por @mytharcher
- **[Visualização de dados: ECharts]** Corrigir erro de ortografia do ECharts por @heziqiang
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir o problema onde erro é lançado ao aprovar registro excluído por @mytharcher
  - Corrigir erro lançado ao executar no modo antes de salvar por @mytharcher
  - Corrigir o problema onde os dados de aprovação não aparecem no popup de detalhes do registro se o modo de fluxo de trabalho estiver definido como "Antes de salvar" por @mytharcher
  - Adicionar tolerância a falhas no fluxo de trabalho excluído, para evitar erro de carregamento na lista de tarefas por @mytharcher
  - Corrigir o problema onde valores estão ausentes do popup de detalhes de "Minha aplicação" por @mytharcher
  - Corrigir o problema onde erro é lançado no popup de registro de aprovação 1.x por @mytharcher
  - Corrigir problema de desempenho causado pelo campo JSON no carregamento de lista (MySQL) por @mytharcher
  - Corrigir id incorreto para carregar registro de detalhes por @mytharcher
  - Corrigir o problema onde concorrência faz a execução ser retomada repetidamente por @mytharcher
  - Corrigir erro de build causado por dependências ausentes por @mytharcher
  - Corrigir o problema onde o registro incorreto foi carregado devido a parâmetros errados por @mytharcher
  - Corrigir o problema onde retornar uma aprovação para o nó anterior, mas retornava ao início por @mytharcher
  - Corrigir erro lançado ao adicionar função ao usuário se o fluxo de trabalho de públicos estiver desabilitado por @mytharcher
  - Corrigir bloco de valor não exibido causado pela falta do componente `ValueBlock.Result` por @mytharcher
  - Corrigir o problema onde os campos não são exibidos nos cartões de tarefa de aprovação por @zhangzhonghe
  - Corrigir o problema onde os campos de filtro não funcionam corretamente no centro de tarefas por @mytharcher
- **[Gerenciador de e-mail]**

  - corrigir cadeia de conversação por @jiannx
  - Corrigir link de resposta do Outlook ocasionalmente desconectado por @jiannx
  - corpo não recolhe quando o texto é selecionado. corrigir falha ao baixar anexo por @jiannx
  - Corrigido o problema de e-mails na mesma caixa de correio entre vários usuários e desempenho otimizado por @jiannx
  - adicionar filtros ao gerenciamento por @jiannx
  - mostrar botão responder a todos e escopo de dados suporta filtragem de mensagens filhas. por @jiannx
  - Corrigir o problema onde o popup de configuração de e-mail está obscurecido por @zhangzhonghe
- **[WeCom]** Corrigir um problema onde os usuários não podiam ser registrados automaticamente quando o mobile estava ausente por @2013xile
- **[Gerenciador de migração]** Corrigido um potencial congelamento de processo causado pelo registro de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock

### [v2.1.0-alpha.1](https://www.nocobase.com/en/blog/v2.1.0-alpha.1)

*Data de lançamento: 14/02/2026*

### 🎉 Novos Recursos

- **[Ação: Edição em lote]** edição em lote 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) por @jiannx

### 🚀 Melhorias

- **[client]**

  - Melhorar a UI de atribuição de campo data/hora para suportar a seleção de datas/horas relativas. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) por @gchust
  - Suporte para especificar campo de título para campos de associação ao atribuir campo. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) por @gchust
  - Tabela 2.0 suporta ordenação por arrastar e soltar ([#8540](https://github.com/nocobase/nocobase/pull/8540)) por @jiannx
  - Mover atribuição de campo e configurações de valor padrão para configuração em nível de formulário. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) por @chenos
- **[Localização]** criar automaticamente chaves i18n ausentes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) por @jiannx

### 🐛 Correções de Bugs

- **[flow-engine]** Corrigir um problema onde o submenu do campo de filtro não podia ser expandido quando uma palavra-chave de pesquisa estava presente. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) por @gchust
- **[client]**

  - Corrigir um problema onde atribuir um único registro a um campo de relação muitos-para-muitos produzia resultados incorretos. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) por @gchust
  - analisar data usando seletor de data e adicionar validação de força de senha, etc ([#8647](https://github.com/nocobase/nocobase/pull/8647)) por @jiannx
  - Corrigir o problema de espaçamento causado por ações vinculadas ocultas na coluna de ação da tabela ([#8646](https://github.com/nocobase/nocobase/pull/8646)) por @zhangzhonghe
  - corrigir erro de sintaxe de resolução quando o item markdown renderiza Liquid inválido ([#8637](https://github.com/nocobase/nocobase/pull/8637)) por @katherinehhh
  - Corrigir requisições de análise desnecessárias do backend para propriedades de campo muitos-para-muitos no bloco de formulário. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) por @gchust
  - Corrigir o problema onde `Action.Modal` não podia ser fechado após alguma interação ([#8642](https://github.com/nocobase/nocobase/pull/8642)) por @mytharcher
  - corrigir formato de número ausente para campos de fórmula numérica e configurações de formato de data para campos de fórmula de data ([#8625](https://github.com/nocobase/nocobase/pull/8625)) por @katherinehhh
  - corrigir renderização incompleta da borda superior no primeiro item do formulário ([#8623](https://github.com/nocobase/nocobase/pull/8623)) por @katherinehhh
  - Corrigir problema onde o campo de anexo de associação limpo não é salvo após o envio no formulário de edição ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh
  - corrigir dados filtrados incorretos no dropdown de associação quando o campo de título é uma chave estrangeira ([#8619](https://github.com/nocobase/nocobase/pull/8619)) por @katherinehhh
  - corrigir incapacidade de restaurar dados selecionados no componente de campo seletor de registro após edição ([#8610](https://github.com/nocobase/nocobase/pull/8610)) por @katherinehhh
  - Corrigir opções de componente de campo não atualizadas em tempo real quando o campo de associação alterna padrão ([#8611](https://github.com/nocobase/nocobase/pull/8611)) por @katherinehhh
- **[utils]** Corrigir problema de segurança do mecanismo avaliador `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher
- **[Funcionários de IA]**

  - Corrige um problema onde links de citação de pesquisas web de IA não eram exibidos na caixa de chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) por @cgyrock
  - corrigir erro de parâmetros da API openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) por @cgyrock
- **[Gerenciador de arquivos]** corrigir problema onde o componente de campo de arquivo ainda pode abrir o diálogo do seletor quando desabilitado ([#8617](https://github.com/nocobase/nocobase/pull/8617)) por @katherinehhh
