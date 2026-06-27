---
title: "Atualizações Semanais do NocoBase: Otimizações e Correções de Bugs"
description: "A atualização desta semana inclui: Suporte para personalizar estilos globais no editor de temas e suporte para definir regra de ordenação padrão no bloco de detalhes, e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.24](https://www.nocobase.com/en/blog/v1.9.24)

*Data de lançamento: 2025-12-09*

### 🐛 Correções de Bugs

- **[cliente]** Corrigido o problema em que o componente `RemoteSelect` carregava o registro incorretamente quando o valor era nulo ([#8137](https://github.com/nocobase/nocobase/pull/8137)) por @mytharcher
- **[Campo de coleção: Sequência]** Melhorada a robustez do plugin-field-sequence ao lidar com o comando de reparo ([#8139](https://github.com/nocobase/nocobase/pull/8139)) por @cgyrock
- **[Notificação: Email]** corrigida a limitação de conexão da notificação por email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) por @jiannx

### [v1.9.23](https://www.nocobase.com/en/blog/v1.9.23)

*Data de lançamento: 2025-12-09*

### 🚀 Melhorias

- **[auth]** Corrigido [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile
- **[Ação: Importar registros]** permitir selecionar ID para campos de importação ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh

### 🐛 Correções de Bugs

- **[servidor]** Corrigido um problema em que os fluxos de trabalho acionados não eram adicionados à fila de processamento após a importação de dados, garantindo que os fluxos de trabalho sejam executados conforme o esperado imediatamente após a importação ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher

### [v1.9.21](https://www.nocobase.com/en/blog/v1.9.21)

*Data de lançamento: 2025-12-07*

### 🚀 Melhorias

- **[Logs de auditoria]** Atualizado o campo de identificador único para `texto` para evitar estouro de comprimento do identificador durante edições em massa por @2013xile

### 🐛 Correções de Bugs

- **[Fluxo de trabalho: Aprovação]** Corrigido o problema de não haver dados ao carregar aprovações relacionadas com variáveis de escopo ACL por @mytharcher

### [v1.9.20](https://www.nocobase.com/en/blog/v1.9.20)

*Data de lançamento: 2025-12-05*

### 🎉 Novos Recursos

- **[Campo de coleção: Sequência]** Atualizar automaticamente campos de sequência após migração de dados ([#8063](https://github.com/nocobase/nocobase/pull/8063)) por @cgyrock

### 🚀 Melhorias

- **[Gerenciador de migração]** Atualizar automaticamente campos de sequência após migração de dados por @cgyrock

### 🐛 Correções de Bugs

- **[Fluxo de trabalho]** Corrigido o problema de erro lançado na tela de execução quando um nó é excluído ([#8090](https://github.com/nocobase/nocobase/pull/8090)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrigido o problema de erro lançado ao carregar aprovação relacionada no modo de função somente união por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.18](https://www.nocobase.com/en/blog/v1.9.0-beta.18)

*Data de lançamento: 2025-12-09*

### 🎉 Novos Recursos

- **[Campo de coleção: Sequência]** Atualizar automaticamente campos de sequência após migração de dados ([#8063](https://github.com/nocobase/nocobase/pull/8063)) por @cgyrock
- **[Fonte de dados: API REST]** adicionar opções de `transformador de mensagem de erro` na configuração da fonte de dados da API restful por @cgyrock
- **[Auth: OIDC]** Suportar redirecionamento automático para a URL SSO quando não autenticado por @heziqiang

### 🚀 Melhorias

- **[auth]** Corrigido [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile
- **[cliente]**

  - mostrar opções recolhidas ao passar o mouse no componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh
  - otimizar mensagens de validação para subtabela ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh
  - Adicionar estado de carregamento para o botão de ação de atualizar registro e destruir registro, evitar requisições duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher
  - Usar chaves triplas (`{{{` e `}}}`) para variáveis no conteúdo da mensagem, para evitar que variáveis sejam escapadas pelo Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher
- **[Ação: Importar registros]** permitir selecionar ID para campos de importação ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh
- **[Fluxo de trabalho]** Adicionar contexto de fonte de dados "main" para UserSelect, a fim de fornecer um componente mais comum que possa ser usado em outros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher
- **[Campo de coleção: Markdown(Vditor)]** ajustar largura do conteúdo em tela cheia do vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh
- **[Gerenciador de tarefas assíncronas]** Mensagens de erro aprimoradas para tarefas assíncronas para fornecer aos usuários razões específicas para falhas de tarefas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher
- **[Ação: Importar registros Pro]** Mensagens de erro aprimoradas para tarefas assíncronas para fornecer aos usuários razões específicas para falhas de tarefas por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir seleção de variável em AssigneeSelect, limitar que apenas PK ou FK da coleção de usuários possa ser selecionada por @mytharcher
  - Usar componente comum para reduzir código duplicado por @mytharcher
  - Tornar o payload da execução manual (ou acionada por nó de subfluxo) compatível com registro ou chave primária. Evitar problema de consistência no contexto do acionador. por @mytharcher
  - Reduzir associações a carregar no pop-up de aprovação, para fornecer melhor desempenho por @mytharcher
- **[Logs de auditoria]** Atualizado o campo de identificador único para `texto` para evitar estouro de comprimento do identificador durante edições em massa por @2013xile
- **[Gerenciador de migração]** Atualizar automaticamente campos de sequência após migração de dados por @cgyrock

### 🐛 Correções de Bugs

- **[servidor]** Corrigido um problema em que os fluxos de trabalho acionados não eram adicionados à fila de processamento após a importação de dados, garantindo que os fluxos de trabalho sejam executados conforme o esperado imediatamente após a importação ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher
- **[acl]** Corrigido um problema em que as meta informações ACL estavam incorretas quando os escopos de permissão da fonte de dados externa usavam variáveis relacionadas ao usuário atual ([#8013](https://github.com/nocobase/nocobase/pull/8013)) por @2013xile
- **[cliente]**

  - Corrigido bug de carregamento lento em Variable.Input, que fazia com que o menu de opções de variáveis fosse renderizado incorretamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher
  - resolver erro ao adicionar registros filhos no bloco de tabela de árvore de associação ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh
  - Corrigido o problema de oscilação da caixa de seleção suspensa da regra de vinculação ([#8018](https://github.com/nocobase/nocobase/pull/8018)) por @zhangzhonghe
  - Evitar erro lançado ao abrir configurações de valor padrão ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher
  - Corrigir problemas de roteamento ao usar um Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) por @zhangzhonghe
  - corrigir remote select não mostrando o rótulo correto para valor não-objeto ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh
- **[banco de dados]** Corrigir: remover processamento UTC na conversão de tempo para campos somente de hora para evitar deslocamentos induzidos por fuso horário. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu
- **[Ação: Importar registros]**

  - Campos importados não correspondem aos campos definidos nas configurações ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile
  - Corrigido o problema de erro lançado quando o campo no xlsx importado tem valor `nulo` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher
  - Corrigido o problema ao importar dados em tabela de árvore ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock
- **[Fluxo de trabalho]**

  - Corrigido o problema em que a página de execução lançava erro quando os jobs no nó eram indefinidos ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher
  - Corrigido o problema de erro lançado na tela de execução quando um nó é excluído ([#8090](https://github.com/nocobase/nocobase/pull/8090)) por @mytharcher
  - Corrigido o problema em que a fila era fechada antes da publicação das mensagens ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher
  - Corrigido o problema em que as execuções preparadas não eram enviadas para a fila antes de parar ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher
  - Corrigido o problema em que alguns menus de tarefas do fluxo de trabalho não eram exibidos ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher
  - Corrigido o problema em que o link da tarefa levava a uma página de erro ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher
  - Corrigida a contagem de tarefas não sendo exibida devido ao uso indevido do provedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher
- **[Gerenciador de múltiplos aplicativos]** Configurações de nível de log não aplicadas a sub-aplicativos ([#8045](https://github.com/nocobase/nocobase/pull/8045)) por @2013xile
- **[Controle de acesso]** Adicionar middleware para verificações de permissão em operações de associação para fonte de dados externa ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile
- **[Campo de coleção: Muitos para muitos (array)]** Corrigido o problema em que o campo de array m2m na subtabela não podia ser atualizado ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock
- **[Editor de tema]** Habilitar alternador de tema em dispositivos móveis ([#8046](https://github.com/nocobase/nocobase/pull/8046)) por @zhangzhonghe
- **[Visualização de dados]**

  - As configurações de campos de filtro para coleções de fonte de dados externa não exibem propriedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile
  - Resolver problema em que a consulta do gráfico não suportava o escopo de dados ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile
- **[Coleção: Árvore]** Corrigir falhas de atualização da tabela de caminho causadas pela pesquisa incorreta do campo pai da árvore ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile
- **[Fluxo de trabalho: Nó manual]** Corrigido o problema em que a contagem de tarefas manuais não estava correta ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher
- **[Gerenciador de tarefas assíncronas]** Adicionar regra de migração para a coleção `asyncTasks`, evitar que registros de tarefas assíncronas sejam migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher
- **[Gerenciador de fonte de dados]** Corrigida falha na atualização da senha da fonte de dados quando a senha do banco de dados é alterada ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock
- **[Departamentos]** Corrigido o problema em que os campos associados ao departamento não podiam ser editados ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang
- **[Fluxo de trabalho: Subfluxo]** Corrigido o problema em que o fluxo de trabalho selecionado exibia "N/A" quando a contagem de fluxos de trabalho era maior que 200 por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir arquivo de idioma por @mytharcher
  - Corrigido o problema em que os registros de aprovação não são incluídos no resultado do job no branch de retorno por @mytharcher
  - Corrigido o problema de não haver dados ao carregar aprovações relacionadas com variáveis de escopo ACL por @mytharcher
  - Corrigir problema de permissão ao obter `approvalRecords.reassignee` devido à alteração do `RemoteSelect` por @mytharcher
  - Corrigido o problema em que a ação de impressão não funcionava ao atualizar a página com o modal aberto por @mytharcher
  - Adicionar migração para evitar erro de registro duplicado ao adicionar índice por @mytharcher
  - Corrigido o problema em que o processo estava incorreto ao ramificar com ordem e co-assinatura por @mytharcher
  - Corrigido o problema em que o comentário no resultado do job era nulo após o usuário enviar a aprovação com comentário por @mytharcher
  - Corrigido problema de não haver dados do solicitante no contexto da execução após o usuário reenviar por @mytharcher
  - Corrigido o problema de erro de permissão lançado ao carregar aprovações relacionadas ao registro na gaveta de detalhes por @mytharcher
  - Corrigido o problema em que a janela pop-up do aprovador não exibia um título por @zhangzhonghe
  - Corrigido o problema de erro lançado ao carregar aprovação relacionada no modo de função somente união por @mytharcher
  - Corrigido o problema quando a listagem de aprovações causa OOM por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.52](https://www.nocobase.com/en/blog/v2.0.0-alpha.52)

*Data de lançamento: 2025-12-07*

### 🎉 Novos Recursos

- **[cliente]** adicionar suporte para configurações de adicionar/selecionar/desassociar em subformulário para muitos ([#8099](https://github.com/nocobase/nocobase/pull/8099)) por @katherinehhh
- **[Fonte de dados: API REST]** adicionar opções de `transformador de mensagem de erro` na configuração da fonte de dados da API restful por @cgyrock

### 🚀 Melhorias

- **[auth]** Corrigido [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile
- **[Ação: Importar registros]**

  - permitir selecionar ID para campos de importação ([#8133](https://github.com/nocobase/nocobase/pull/8133)) por @katherinehhh
  - permitir selecionar ID para campos de importação ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]** Alterar API para obter um único item de aprovação e simplificar o código por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - corrigir impedir que o estado desabilitado filho bloqueie a seleção do campo de relação ([#8131](https://github.com/nocobase/nocobase/pull/8131)) por @katherinehhh
  - Corrigido o problema em que o componente `RemoteSelect` carregava o registro incorretamente quando o valor era nulo ([#8137](https://github.com/nocobase/nocobase/pull/8137)) por @mytharcher
  - Corrigido um problema em que a largura do componente de UI era inconsistente ao selecionar "Passado" ou "Próximo" para campos de filtro de data. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) por @gchust
  - Corrigido um problema em que os rótulos de campo padrão no bloco de formulário de filtro não podiam ser traduzidos corretamente em vários idiomas. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) por @gchust
  - Corrigido um problema em que os estilos de título e descrição do bloco JS eram inconsistentes com outros blocos. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) por @gchust
  - corrigir subtabela aninhada em subformulário não exibindo dados ([#8117](https://github.com/nocobase/nocobase/pull/8117)) por @katherinehhh
  - corrigir problema de quebra de linha no tooltip de campo de texto longo ([#8122](https://github.com/nocobase/nocobase/pull/8122)) por @katherinehhh
  - Corrigido um problema em que os dados selecionáveis para campos de associação no bloco de formulário de filtro estavam incorretos. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) por @gchust
  - Corrigido um problema em que as opções selecionáveis não eram listadas completamente ao usar os operadores "é qualquer um de" ou "não é nenhum de" para filtragem de campo baseada em opção. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) por @gchust
  - Corrigido um problema em que as configurações de campos personalizados no formulário de filtro não eram pré-preenchidas corretamente e algumas configurações não surtiam efeito. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) por @gchust
  - Corrigido um problema em que limpar os valores de filtro de tempo entre e acionar o filtro novamente causava um erro. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) por @gchust
  - Corrigido um problema em que o valor do campo numérico não era pré-preenchido corretamente na ação de filtro. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) por @gchust
  - Corrigido um problema em que alguns operadores de campo em formulários de filtro falhavam ao filtrar dados corretamente. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) por @gchust
  - Corrigido um problema em que a filtragem em campos de Caixa de seleção não surtia efeito. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) por @gchust
- **[mecanismo de fluxo]**

  - corrigir: conversão incorreta ao usar tipo inteiro como opções de enumeração ([#8138](https://github.com/nocobase/nocobase/pull/8138)) por @chenos
  - Corrigir itens de menu de submodelo alternáveis falhando quando `useModel` é omitido, inferindo-o de `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) por @zhangzhonghe
- **[servidor]** Corrigido um problema em que os fluxos de trabalho acionados não eram adicionados à fila de processamento após a importação de dados, garantindo que os fluxos de trabalho sejam executados conforme o esperado imediatamente após a importação ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher
- **[Notificação: Email]** corrigida a limitação de conexão da notificação por email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) por @jiannx
- **[Campo de coleção: Fórmula]** Corrigido um problema em que os campos de fórmula na ação de filtro e no bloco de formulário de filtro não podiam digitar valores de entrada. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) por @gchust
- **[Multi-espaço]** Corrigir a criação de outros campos na coleção do sistema por @jiannx

### [v2.0.0-alpha.51](https://www.nocobase.com/en/blog/v2.0.0-alpha.51)

*Data de lançamento: 2025-12-07*

### 🎉 Novos Recursos

- **[cliente]**

  - Suportar personalização de estilos globais no editor de tema ([#7960](https://github.com/nocobase/nocobase/pull/7960)) por @ljmiaoo
  - Suportar configuração de regra de ordenação padrão no bloco de detalhes ([#8070](https://github.com/nocobase/nocobase/pull/8070)) por @katherinehhh
  - Suportar configuração de tipo de dados para campo Número (opções: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) por @chenos
- **[Campo de coleção: Sequência]** Atualizar automaticamente campos de sequência após migração de dados ([#8063](https://github.com/nocobase/nocobase/pull/8063)) por @cgyrock

### 🚀 Melhorias

- **[cliente]**

  - corrigir salto de paginação da subtabela após remoção de linha e adicionar suporte para regras de validação de coluna ([#8094](https://github.com/nocobase/nocobase/pull/8094)) por @katherinehhh
  - ajustar exibição de campo grande em subtabela editável ([#8078](https://github.com/nocobase/nocobase/pull/8078)) por @katherinehhh
  - suportar reticências para conteúdo de campo JSON transbordante ([#8067](https://github.com/nocobase/nocobase/pull/8067)) por @katherinehhh
- **[mecanismo de fluxo]**

  - Adicionar opção useCache ao FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) por @zhangzhonghe
  - Adicionar método `removeModelWithSubModels` para remover recursivamente o modelo e seus sub-modelos ([#8064](https://github.com/nocobase/nocobase/pull/8064)) por @zhangzhonghe
- **[Bloco: GridCard]** adicionar configuração de contagem de linhas ao grid card e substituir pageSize por cálculo automático ([#8055](https://github.com/nocobase/nocobase/pull/8055)) por @katherinehhh
- **[Logs de auditoria]** Atualizado o campo de identificador único para `texto` para evitar estouro de comprimento do identificador durante edições em massa por @2013xile
- **[Gerenciador de migração]** Atualizar automaticamente campos de sequência após migração de dados por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido um problema em que os campos configurados de um bloco removido não eram excluídos do bloco de filtro. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) por @gchust
  - corrigir espaço extra quando o botão está oculto no modo de não configuração ([#8092](https://github.com/nocobase/nocobase/pull/8092)) por @katherinehhh
  - Corrigido um problema em que o texto do botão de redefinir no bloco de formulário de filtro não podia ser modificado. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) por @gchust
  - Corrigido um problema em que a entrada do campo não suportava vários valores ao usar os operadores \$in / \$notIn para campos de filtro. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) por @gchust
  - Corrigido um problema em que os blocos de dados recém-adicionados não apareciam automaticamente no menu de campo do bloco de formulário de filtro. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) por @gchust
  - O menu de configuração para campos de associação em formulários de filtro não deve exibir a opção de criação rápida. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) por @gchust
  - corrigir problema de dados de subtabela de associação no bloco Lista ([#8082](https://github.com/nocobase/nocobase/pull/8082)) por @katherinehhh
  - corrigir regras de validação de campo numérico das configurações de coleção não aplicadas ([#8025](https://github.com/nocobase/nocobase/pull/8025)) por @katherinehhh
  - Corrigido um problema em que os campos em formulários de filtro eram restringidos por regras de validação de backend para campos. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) por @gchust
  - problema de edição rápida de campo json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) por @katherinehhh
  - corrigir problema de exibição de campo grande na edição de subtabela ([#8069](https://github.com/nocobase/nocobase/pull/8069)) por @katherinehhh
  - corrigir criação rápida lançando erro quando allowMultiple está desabilitado na seleção de registro de associação ([#8034](https://github.com/nocobase/nocobase/pull/8034)) por @katherinehhh
  - corrigir campo json deve ser enviado como um objeto ([#8057](https://github.com/nocobase/nocobase/pull/8057)) por @katherinehhh
  - Corrigido um problema em que a tecla enter não podia ser usada para acionar a ação de filtro. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) por @gchust
- **[mecanismo de fluxo]**

  - Corrigido um problema em que as opções de configuração do componente anterior permaneciam visíveis no menu após a troca de componentes de campo. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) por @gchust
  - Mover useEffect antes do retorno condicional no FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) por @zhangzhonghe
  - Corrigido um problema em que campos de associação não suportados apareciam nos campos de operação de filtro. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) por @gchust
- **[acl]** corrigir: acl.allow executado muito cedo ([#8065](https://github.com/nocobase/nocobase/pull/8065)) por @chenos
- **[Gerenciador de arquivos]**

  - Corrigir exibição incorreta de dados de subdetalhes em blocos de Lista e GridCard ([#8087](https://github.com/nocobase/nocobase/pull/8087)) por @katherinehhh
  - Corrigir campo de anexo não exibido corretamente na subtabela readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) por @katherinehhh
- **[Fluxo de trabalho]**

  - Corrigido o problema de erro lançado na tela de execução quando um nó é excluído ([#8090](https://github.com/nocobase/nocobase/pull/8090)) por @mytharcher
  - Corrigido o problema em que a página de execução lançava erro quando os jobs no nó eram indefinidos ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher
- **[Campo de coleção: Fórmula]** Corrigido um problema em que os campos de fórmula não podiam ser adicionados ao bloco de formulário de filtro. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) por @gchust
- **[Bloco: Painel de ação]** otimizar estilo no layout de Lista do bloco de painel de ação ([#8084](https://github.com/nocobase/nocobase/pull/8084)) por @katherinehhh
- **[Funcionários de IA]**

  - Resolver problema em que o nome da função da fonte de dados não era compilado ([#8076](https://github.com/nocobase/nocobase/pull/8076)) por @heziqiang
  - Corrigido um problema em que alguns campos de registro atuais não podiam ser exibidos no componente de seleção de variável. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) por @gchust
- **[Ação: Importar registros]** Campos importados não correspondem aos campos definidos nas configurações ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile
- **[Controle de acesso]** Adicionar middleware para verificações de permissão em operações de associação para fonte de dados externa ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile
- **[Fluxo de trabalho: Aprovação]**

  - Corrigido o problema de não haver dados ao carregar aprovações relacionadas com variáveis de escopo ACL por @mytharcher
  - Corrigido o problema de dados preenchidos desaparecerem no formulário do responsável por @mytharcher
  - Corrigido o problema de erro de permissão lançado ao carregar aprovações relacionadas ao registro na gaveta de detalhes por @mytharcher
  - Corrigido o problema em que o processo estava incorreto ao ramificar com ordem e co-assinatura por @mytharcher
  - Corrigido o problema quando a listagem de aprovações causa OOM por @mytharcher
  - Corrigido o problema em que os registros de aprovação não são incluídos no resultado do job no branch de retorno por @mytharcher
  - Corrigido o problema em que a janela pop-up do aprovador não exibia um título por @zhangzhonghe
  - Corrigido o problema de erro lançado ao carregar aprovação relacionada no modo de função somente união por @mytharcher
- **[Gerenciador de email]**

  - Lidando com dados anormais por @jiannx
  - não sincronizando o status agendado do gmail por @jiannx
