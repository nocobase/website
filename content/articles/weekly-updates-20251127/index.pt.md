---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "A atualização desta semana inclui: Suporte à ordenação de campos de coluna em tabela, Suporte ao redirecionamento automático para a URL SSO quando não autenticado, e mais."
---

Resuma os logs de atualização semanal do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**Atualmente, o NocoBase é atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.14](https://www.nocobase.com/en/blog/v1.9.14)

*Data de lançamento: 27/11/2025*

### 🎉 Novos Recursos

- **[Auth: OIDC]** Suporte ao redirecionamento automático para a URL SSO quando não autenticado por @heziqiang

### 🚀 Melhorias

- **[cliente]** Use chaves triplas (`{{{` e `}}}`) para variáveis no conteúdo da mensagem, para evitar que variáveis sejam escapadas pelo Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher
- **[Campo de coleção: Markdown(Vditor)]** ajustar a largura do conteúdo em tela cheia do vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh

### 🐛 Correções de Bugs

- **[banco de dados]** Correção: remover o processamento UTC na conversão de tempo para campos apenas de hora para evitar deslocamentos induzidos por fuso horário. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu
- **[cliente]** corrigir o remote select que não mostrava o rótulo correto para valor não-objeto ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh
- **[Fluxo de trabalho]**

  - Corrigido o problema em que execuções preparadas não eram enviadas para a fila antes de parar ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher
  - Corrigido o problema em que o link da tarefa levava a uma página de erro ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher
  - Corrigido o problema em que alguns menus de tarefas do fluxo de trabalho não eram exibidos ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher
  - Corrigida a contagem de tarefas não sendo exibida devido ao uso incorreto do provedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher
- **[Fluxo de trabalho: Nó manual]** Corrigido o problema em que a contagem de tarefas manuais não estava correta ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher
- **[Visualização de dados]**

  - As configurações de campos de filtro para coleções de fonte de dados externa não exibem propriedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile
  - Resolvido o problema em que a consulta do gráfico não suportava o escopo de dados ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile
- **[Gerenciador de fonte de dados]** Corrigida a falha na atualização da senha da fonte de dados quando a senha do banco de dados é alterada ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock
- **[Ação: Importar registros]** Corrigido o problema ao importar dados em uma tabela em árvore ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock

### [v1.9.13](https://www.nocobase.com/en/blog/v1.9.13)

*Data de lançamento: 25/11/2025*

### 🐛 Correções de Bugs

- **[cliente]** Corrigidos problemas de roteamento ao usar um Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) por @zhangzhonghe

### [v1.9.12](https://www.nocobase.com/en/blog/v1.9.12)

*Data de lançamento: 24/11/2025*

### 🚀 Melhorias

- **[cliente]** Adicionado estado de carregamento para os botões de ação de atualizar registro e destruir registro, evitando requisições duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher
- **[Gerenciador de tarefas assíncronas]** Mensagens de erro aprimoradas para tarefas assíncronas, fornecendo aos usuários razões específicas para falhas de tarefas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher
- **[Ação: Importar registros Pro]** Mensagens de erro aprimoradas para tarefas assíncronas, fornecendo aos usuários razões específicas para falhas de tarefas por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigida a seleção de variáveis no AssigneeSelect, limitando a seleção apenas a PK ou FK da coleção de usuários por @mytharcher
  - Reduzidas as associações a carregar no popup de aprovação para melhor desempenho por @mytharcher
  - Tornar o payload da execução manual (ou acionada pelo nó de subfluxo) compatível com registro ou chave primária. Evitar problemas de consistência no contexto do gatilho. por @mytharcher

### 🐛 Correções de Bugs

- **[Gerenciador de tarefas assíncronas]** Adicionada regra de migração para a coleção `asyncTasks`, evitando que registros de tarefas assíncronas sejam migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrigido arquivo de idioma por @mytharcher

### [v1.9.11](https://www.nocobase.com/en/blog/v1.9.11)

*Data de lançamento: 24/11/2025*

### 🐛 Correções de Bugs

- **[cliente]** Corrigida a interface do campo mostrando muitos-para-um em vez de um-para-um para belongsTo na configuração de fonte de dados externa ([#7936](https://github.com/nocobase/nocobase/pull/7936)) por @cgyrock
- **[Fluxo de trabalho]** Corrigido o problema em que a atualização da contagem de tarefas redefinia involuntariamente o estado dos formulários sendo preenchidos ([#7937](https://github.com/nocobase/nocobase/pull/7937)) por @mytharcher
- **[Campo de coleção: Muitos para muitos (array)]** Corrigidos problemas do campo M2M (array) ao criar/atualizar dados relacionados ([#7926](https://github.com/nocobase/nocobase/pull/7926)) por @cgyrock

### [v1.9.10](https://www.nocobase.com/en/blog/v1.9.10)

*Data de lançamento: 20/11/2025*

### 🚀 Melhorias

- **[Controle de acesso]** Reduzir as permissões padrão para a função de membro ([#7921](https://github.com/nocobase/nocobase/pull/7921)) por @2013xile
- **[Visualização de dados]** Adicionado suporte ao idioma russo para interfaces de plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) por @sembaev-a-a
- **[Fluxo de trabalho: Webhook]** Adicionar ícone para o tipo de nó de resposta por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** Corrigido erro: Can't resolve 'antd-mobile' e Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) por @zhangzhonghe
- **[Controle de acesso]** Suporte a restrições de escopo de dados para operações de associação. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) por @2013xile
- **[Fonte de dados: Principal]** Corrigido o problema em que um campo muitos-para-um recém-adicionado não podia ser selecionado como chave estrangeira antes de reiniciar a aplicação. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) por @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.17](https://www.nocobase.com/en/blog/v1.9.0-beta.17)

*Data de lançamento: 21/11/2025*

### 🚀 Melhorias

- **[banco de dados]** Adicionar a opção `multipleStatements` à instância de conexão MariaDB para suportar a invocação de múltiplas instruções em uma única consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher
- **[Controle de acesso]**

  - Reduzir as permissões padrão para a função de membro ([#7921](https://github.com/nocobase/nocobase/pull/7921)) por @2013xile
  - Otimizar a lógica de controle de permissão para operações de campo de associação ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile
- **[Visualização de dados]** Adicionado suporte ao idioma russo para interfaces de plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) por @sembaev-a-a
- **[Fluxo de trabalho]** Suporte ao bloco de dados no fluxo de trabalho para usar o menu de configurações de detalhes consolidados ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher
- **[Fluxo de trabalho: Webhook]** Adicionar ícone para o tipo de nó de resposta por @mytharcher
- **[Fluxo de trabalho: JavaScript]** Corrigida uma vulnerabilidade de segurança causada pela passagem de funções de nível superior para o ambiente de execução, impedindo a exploração que poderia conceder acesso ao contexto de execução superior por @mytharcher
- **[Auth: OIDC]** Aumentar o tempo limite da requisição por @2013xile
- **[Fluxo de trabalho: Aprovação]** Adicionar notificação para o responsável delegado e adicionado por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigida a interface do campo mostrando muitos-para-um em vez de um-para-um para belongsTo na configuração de fonte de dados externa ([#7936](https://github.com/nocobase/nocobase/pull/7936)) por @cgyrock
  - Corrigido erro: Can't resolve 'antd-mobile' e Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) por @zhangzhonghe
  - Corrigido o problema em que modelos duplicados não apareciam, causado por arrastar e depois excluir um modelo referenciado ([#7847](https://github.com/nocobase/nocobase/pull/7847)) por @zhangzhonghe
  - Corrigido o problema em que a regra de vinculação para o formulário de aprovação não estava funcionando ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe
  - corrigir problema de página seguinte vazia no bloco de detalhes de paginação simples ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh
  - Corrigido "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe
- **[servidor]**

  - Corrigido um problema no modo de divisão de serviço onde mensagens de fila não inscritas não podiam ser publicadas ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher
  - Isolar o canal Pub-Sub pelo nome da aplicação ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher
  - Corrigido um problema onde, após ativar o modo de divisão de serviço, processos workers enviando mensagens através da fila de mensagens causavam erros ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher
- **[utils]** Habilitar mesclagem de objetos na estratégia de interseção ([#7840](https://github.com/nocobase/nocobase/pull/7840)) por @chenos
- **[banco de dados]** Detecção incorreta de campo de índice quando os nomes dos campos usam o estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile
- **[Campo de coleção: Muitos para muitos (array)]** Corrigidos problemas do campo M2M (array) ao criar/atualizar dados relacionados ([#7926](https://github.com/nocobase/nocobase/pull/7926)) por @cgyrock
- **[Fonte de dados: Principal]** Corrigido o problema em que um campo muitos-para-um recém-adicionado não podia ser selecionado como chave estrangeira antes de reiniciar a aplicação. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) por @cgyrock
- **[Fluxo de trabalho]**

  - Corrigido o problema em que a atualização da contagem de tarefas redefinia involuntariamente o estado dos formulários sendo preenchidos ([#7937](https://github.com/nocobase/nocobase/pull/7937)) por @mytharcher
  - Usar eventQueue em vez do backgroundJob compartilhado para evitar que a fila compartilhada seja consumida incorretamente no modo de divisão de serviço ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher
  - Corrigido o problema em que o plugin de fluxo de trabalho ainda consumia o evento da fila quando não estava no modo worker sob o modo de divisão de serviço ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher
  - Corrigido o erro causado pela escuta de eventos de fonte de dados externa inexistentes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher
  - Corrigido um problema onde, no modo de divisão de serviço, a execução manual de um fluxo de trabalho contendo um nó de interrupção permanecia travada em um status pendente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) por @mytharcher
  - Adicionar `workflowId` como dado de identidade para logs do fluxo de trabalho ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher
  - Resolvido um problema onde o despachante do fluxo de trabalho em modo cluster falhava ao identificar corretamente estados ociosos, o que poderia levar ao consumo desnecessário de eventos da fila antes do plugin estar pronto ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher
- **[Controle de acesso]**

  - Suporte a restrições de escopo de dados para operações de associação. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) por @2013xile
  - Problema de snippets de operação de associação não estarem surtindo efeito ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile
- **[Fluxo de trabalho: Nó manual]** Corrigido o namespace do idioma local a ser usado, para mostrar o conteúdo correto da tradução ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher
- **[Usuários]** Atualização de índice incorreta quando os nomes dos campos usam o estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile
- **[Móvel (obsoleto)]** Corrigido o problema em que o popup de valor padrão do campo de data no móvel não permitia selecionar uma data ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe
- **[Fluxo de trabalho: Variável personalizada]** Corrigido erro lançado quando não há configuração no nó de variável por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigido o erro causado pela escuta de eventos de fonte de dados externa inexistentes por @mytharcher
- **[Impressão de modelo]** analisar as variáveis no filtro por @jiannx
- **[Visualização de dados: ECharts]** Corrigido o problema em que a configuração do tipo de Rótulo nas opções do Echarts não surtia efeito. por @heziqiang
- **[Fluxo de trabalho: Aprovação]**

  - Corrigido o formato da data nos cartões da lista de aprovação no centro de tarefas para exibir a data e hora completas por @mytharcher
  - Corrigido o problema em que o tamanho da página do canal de notificação de carregamento não era grande o suficiente, fazendo com que a lista não fosse carregada completamente por @mytharcher
  - Corrigido um problema de desempenho que ocorria ao consultar a lista de registros de aprovação durante o envio da aprovação por @mytharcher
  - Corrigido um problema onde os campos da coleção principal não eram excluídos ao recarregar dados de associação por @mytharcher
  - Corrigido um problema onde condições de corrida ocorridas durante o processamento de aprovação simultânea por múltiplos aprovadores podiam fazer com que um nó do fluxo de trabalho fosse executado mais de uma vez por @mytharcher
  - Criar nós de aprovação em branches paralelas não é mais suportado para evitar problemas causados pelo status do processo por @mytharcher
  - Corrigido o problema em que a regra de vinculação para o formulário de aprovação não estava funcionando por @zhangzhonghe
  - Corrigido erro lançado quando há fluxo de trabalho de aprovação duplicado por @mytharcher
- **[Gerenciador de e-mail]**

  - adicionar logs de sincronização por @jiannx
  - sincronizar status de leitura do e-mail da Microsoft sem timestamp por @jiannx
  - coleção mailMessages adicionar índices por @jiannx
  - adicionar migração para índices por @jiannx
  - Corrigido o problema de imagens reservadas e sincronização no outlook por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.47](https://www.nocobase.com/en/blog/v2.0.0-alpha.47)

*Data de lançamento: 26/11/2025*

### 🚀 Melhorias

- **[cliente]**

  - Suporte à inicialização de campos de filtro selecionados na consulta do gráfico ([#7933](https://github.com/nocobase/nocobase/pull/7933)) por @heziqiang
  - Use chaves triplas (`{{{` e `}}}`) para variáveis no conteúdo da mensagem, para evitar que variáveis sejam escapadas pelo Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher
  - Adicionado estado de carregamento para os botões de ação de atualizar registro e destruir registro, evitando requisições duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher
- **[Campo de coleção: Markdown(Vditor)]** ajustar a largura do conteúdo em tela cheia do vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido um problema onde abrir o bloco de detalhes no popup para campos de relacionamento não-ID causava um erro. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) por @gchust
  - Corrigido um problema onde os dados de associação falhavam ao carregar corretamente no popup para campos de relacionamento não-ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) por @gchust
  - Corrigidos problemas de roteamento ao usar um Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) por @zhangzhonghe
  - corrigir problema com configuração de precisão inválida para formato de campo numérico ([#7967](https://github.com/nocobase/nocobase/pull/7967)) por @katherinehhh
  - Corrigida a digitação incorreta na nova página 2.0 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) por @zhangzhonghe
  - corrigir o problema em que o valor do filtro não é limpo ao clicar no botão Redefinir ([#7966](https://github.com/nocobase/nocobase/pull/7966)) por @zhangzhonghe
- **[Fluxo de trabalho]** Corrigida a contagem de tarefas não sendo exibida devido ao uso incorreto do provedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher
- **[Visualização de dados]** Resolvido o problema em que a consulta do gráfico não suportava o escopo de dados ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile
- **[Bloco: Referência]** Corrigido um problema onde citar um bloco removia o bloco citado da página original. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) por @gchust
- **[Funcionários de IA]** Corrigido problema quando a IA gera saída SQL ([#7956](https://github.com/nocobase/nocobase/pull/7956)) por @heziqiang
- **[Impressão de modelo]** corrigir falha ao adicionar modelo na operação de impressão de modelo de registro por @katherinehhh

### [v2.0.0-alpha.46](https://www.nocobase.com/en/blog/v2.0.0-alpha.46)

*Data de lançamento: 24/11/2025*

### 🚀 Melhorias

- **[mecanismo de fluxo]** Suporte à troca dinâmica da classe do modelo de fluxo ([#7952](https://github.com/nocobase/nocobase/pull/7952)) por @gchust
- **[Funcionários de IA]** Plugin de funcionário de IA adicionar hook de atualização ([#7951](https://github.com/nocobase/nocobase/pull/7951)) por @heziqiang
- **[Gerenciador de tarefas assíncronas]** Mensagens de erro aprimoradas para tarefas assíncronas, fornecendo aos usuários razões específicas para falhas de tarefas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Tornar o payload da execução manual (ou acionada pelo nó de subfluxo) compatível com registro ou chave primária. Evitar problemas de consistência no contexto do gatilho. por @mytharcher
  - Reduzidas as associações a carregar no popup de aprovação para melhor desempenho por @mytharcher
  - Corrigida a seleção de variáveis no AssigneeSelect, limitando a seleção apenas a PK ou FK da coleção de usuários por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** corrigir a quebra automática de linha em campos de texto no bloco de detalhes quando o conteúdo excede a largura ([#7955](https://github.com/nocobase/nocobase/pull/7955)) por @katherinehhh
- **[Gerenciador de tarefas assíncronas]** Adicionada regra de migração para a coleção `asyncTasks`, evitando que registros de tarefas assíncronas sejam migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher
- **[Gerenciador de arquivos]** corrigir upload de arquivos para o armazenamento especificado em vez do armazenamento padrão ([#7947](https://github.com/nocobase/nocobase/pull/7947)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]** Corrigido arquivo de idioma por @mytharcher

### [v2.0.0-alpha.45](https://www.nocobase.com/en/blog/v2.0.0-alpha.45)

*Data de lançamento: 21/11/2025*

### 🎉 Novos Recursos

- **[cliente]** suporte à ordenação de campos de coluna em tabela ([#7900](https://github.com/nocobase/nocobase/pull/7900)) por @katherinehhh
- **[Fluxo de trabalho]** Adicionar nó "Múltiplas condições", fornecendo o controle de fluxo como `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** corrigir erro lançado ao limpar valor em cascata multinível ([#7943](https://github.com/nocobase/nocobase/pull/7943)) por @katherinehhh
- **[Visualização de dados]** Corrigido problema em que o bloco do gráfico não era atualizado após salvar ([#7920](https://github.com/nocobase/nocobase/pull/7920)) por @heziqiang
- **[Impressão de modelo]** corrigir erro na ação de impressão de modelo no bloco de detalhes por @katherinehhh

### [v2.0.0-alpha.44](https://www.nocobase.com/en/blog/v2.0.0-alpha.44)

*Data de lançamento: 21/11/2025*

### 🎉 Novos Recursos

- **[cliente]**

  - adicionar suporte a criação rápida para seleção de campo de associação ([#7887](https://github.com/nocobase/nocobase/pull/7887)) por @katherinehhh
  - suportar seletor em cascata para campo de associação de coleção em árvore ([#7846](https://github.com/nocobase/nocobase/pull/7846)) por @katherinehhh
- **[Telemetria]** Adicionar novo plugin: Telemetry, um plugin de telemetria baseado em OpenTelemetry fornecendo métricas de CPU, memória e requisições HTTP com suporte a exportação HTTP por @2013xile

### 🚀 Melhorias

- **[telemetria]** Suporte ao controle de quais métricas são exportadas ([#7938](https://github.com/nocobase/nocobase/pull/7938)) por @2013xile
- **[Gerenciador de tarefas assíncronas]** Tarefas assíncronas para sub-aplicações devem iniciar apenas as sub-aplicações alvo nos Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) por @2013xile

### 🐛 Correções de Bugs

- **[cliente]**

  - remover ação de tabela em árvore de blocos de coleção não-árvore ([#7931](https://github.com/nocobase/nocobase/pull/7931)) por @katherinehhh
  - Corrigida a interface do campo mostrando muitos-para-um em vez de um-para-um para belongsTo na configuração de fonte de dados externa ([#7936](https://github.com/nocobase/nocobase/pull/7936)) por @cgyrock
- **[mecanismo de fluxo]** Corrigido o problema de exibição desalinhada do ícone da barra de ferramentas no botão do bloco de detalhes ([#7929](https://github.com/nocobase/nocobase/pull/7929)) por @zhangzhonghe
- **[Fluxo de trabalho]** Corrigido o problema em que a atualização da contagem de tarefas redefinia involuntariamente o estado dos formulários sendo preenchidos ([#7937](https://github.com/nocobase/nocobase/pull/7937)) por @mytharcher
- **[Campo de coleção: Muitos para muitos (array)]** Corrigidos problemas do campo M2M (array) ao criar/atualizar dados relacionados ([#7926](https://github.com/nocobase/nocobase/pull/7926)) por @cgyrock
- **[Ação: Importar registros Pro]** corrigir problema onde a modificação do uploader nas opções de importação não tinha efeito por @katherinehhh

### [v2.0.0-alpha.43](https://www.nocobase.com/en/blog/v2.0.0-alpha.43)

*Data de lançamento: 20/11/2025*

### 🚀 Melhorias

- **[Visualização de dados]** Adicionado suporte ao idioma russo para interfaces de plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) por @sembaev-a-a
- **[Controle de acesso]** Reduzir as permissões padrão para a função de membro ([#7921](https://github.com/nocobase/nocobase/pull/7921)) por @2013xile
- **[Fluxo de trabalho: Webhook]** Adicionar ícone para o tipo de nó de resposta por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** Corrigido erro: Can't resolve 'antd-mobile' e Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) por @zhangzhonghe
- **[mecanismo de fluxo]** Corrigido o problema onde abrir o formulário de edição rápida do bloco de tabela causava um erro. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) por @gchust
- **[Mecanismo de fluxo]** Garantir que as variáveis de registro sempre retornem registros completos quando usadas junto com seus campos individuais. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) por @gchust
- **[Fonte de dados: Principal]** Corrigido o problema em que um campo muitos-para-um recém-adicionado não podia ser selecionado como chave estrangeira antes de reiniciar a aplicação. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) por @cgyrock
- **[Controle de acesso]** Suporte a restrições de escopo de dados para operações de associação. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) por @2013xile
