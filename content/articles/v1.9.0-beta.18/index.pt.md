---
title: "NocoBase v1.9.0-beta.18: Atualização automática de campos de sequência após migração de dados"
description: "Nota de lançamento da v1.9.0-beta.18"
---

### 🎉 Novas Funcionalidades

- **[Campo de coleção: Sequência]** Atualizar automaticamente campos de sequência após migração de dados ([#8063](https://github.com/nocobase/nocobase/pull/8063)) por @cgyrock

- **[Fonte de dados: API REST]** Adicionar opções de `transformador de mensagem de erro` na configuração da fonte de dados da API RESTful por @cgyrock

- **[Autenticação: OIDC]** Suporte ao redirecionamento automático para a URL SSO quando não autenticado por @heziqiang

### 🚀 Melhorias

- **[auth]** Corrigir [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile

- **[client]**
  - Mostrar opções recolhidas ao passar o mouse no componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh

  - Otimizar mensagens de validação para subtabela ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh

  - Adicionar estado de carregamento para botões de ação de atualizar registro e destruir registro, evitando requisições duplicadas ([#7964](https://github.com/nocobase/nocobase/pull/7964)) por @mytharcher

  - Usar chaves triplas (`{{{` e `}}}`) para variáveis no conteúdo da mensagem, para evitar que variáveis sejam escapadas pelo Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher

- **[Ação: Importar registros]** Permitir selecionar ID para campos de importação ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh

- **[Fluxo de trabalho]** Adicionar contexto de fonte de dados "principal" para UserSelect, a fim de fornecer um componente mais comum que possa ser usado em outros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher

- **[Campo de coleção: Markdown(Vditor)]** Ajustar largura do conteúdo em tela cheia do vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh

- **[Gerenciador de tarefas assíncronas]** Mensagens de erro aprimoradas para tarefas assíncronas, fornecendo aos usuários motivos específicos para falhas nas tarefas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) por @mytharcher

- **[Ação: Importar registros Pro]** Mensagens de erro aprimoradas para tarefas assíncronas, fornecendo aos usuários motivos específicos para falhas nas tarefas por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Corrigir seleção de variáveis no AssigneeSelect, limitando a seleção apenas a PK ou FK da coleção de usuários por @mytharcher

  - Usar componente comum para reduzir código duplicado por @mytharcher

  - Tornar o payload da execução manual (ou acionada por nó de subfluxo) compatível com registro ou chave primária. Evitar problema de consistência no contexto do gatilho. por @mytharcher

  - Reduzir associações a carregar no popup de aprovação, para fornecer melhor desempenho por @mytharcher

- **[Logs de auditoria]** Atualizar o campo de identificador único para `text` para evitar estouro de comprimento do identificador durante edições em massa por @2013xile

- **[Gerenciador de migração]** Atualizar automaticamente campos de sequência após migração de dados por @cgyrock

### 🐛 Correções de Bugs

- **[servidor]** Corrigido um problema em que fluxos de trabalho acionados não eram adicionados à fila de processamento após a importação de dados, garantindo que os fluxos de trabalho sejam executados conforme o esperado imediatamente após a importação ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher

- **[acl]** Corrigir um problema em que as meta informações da ACL estão incorretas quando escopos de permissão de fonte de dados externa usam variáveis relacionadas ao usuário atual ([#8013](https://github.com/nocobase/nocobase/pull/8013)) por @2013xile

- **[client]**
  - Corrigir bug de carregamento preguiçoso no Variable.Input, que fazia com que o menu de opções de variáveis fosse renderizado incorretamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher

  - Resolver erro ao adicionar registros filhos no bloco de tabela de árvore de associação ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh

  - Corrigir o problema de cintilação da caixa de seleção suspensa da regra de vinculação ([#8018](https://github.com/nocobase/nocobase/pull/8018)) por @zhangzhonghe

  - Evitar erro ao abrir configurações de valor padrão ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher

  - Corrigir problemas de roteamento ao usar um Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) por @zhangzhonghe

  - corrigir select remoto não mostrando o rótulo correto para valor não-objeto ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh

- **[database]** Corrigir: remover processamento UTC na conversão de tempo para campos apenas de hora para evitar deslocamentos induzidos por fuso horário. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu

- **[Ação: Importar registros]**
  - Campos importados não correspondem aos campos definidos nas configurações de ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile

  - Corrigir o problema de erro ao encontrar campo com valor `null` no xlsx importado ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher

  - Corrigido o problema ao importar dados em tabela de árvore ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock

- **[Fluxo de trabalho]**
  - Corrigir o problema em que a página de execução lançava erro quando os jobs no nó são indefinidos ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher

  - Corrigir o problema em que um erro era lançado na tela de execução quando um nó é excluído ([#8090](https://github.com/nocobase/nocobase/pull/8090)) por @mytharcher

  - Corrigir o problema em que a fila era fechada antes da publicação de mensagens ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher

  - Corrigir o problema em que execuções preparadas não eram enviadas para a fila antes da parada ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher

  - Corrigir o problema em que alguns menus de tarefas do fluxo de trabalho não eram exibidos ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher

  - Corrigir o problema em que o link da tarefa levava a uma página de erro ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher

  - Corrigir contagem de tarefas não sendo exibida devido ao uso incorreto do provedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher

- **[Gerenciador de múltiplos aplicativos]** Configurações de nível de log não aplicadas a sub-aplicativos ([#8045](https://github.com/nocobase/nocobase/pull/8045)) por @2013xile

- **[Controle de acesso]** Adicionar middleware para verificações de permissão em operações de associação para fonte de dados externa ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile

- **[Campo de coleção: Muitos para muitos (array)]** Corrigido o problema em que o campo de array m2m na subtabela não podia ser atualizado ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock

- **[Editor de tema]** Habilitar alternador de tema em dispositivos móveis ([#8046](https://github.com/nocobase/nocobase/pull/8046)) por @zhangzhonghe

- **[Visualização de dados]**
  - Configurações de campos de filtro para coleções de fonte de dados externa não exibem propriedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile

  - Resolver problema em que a consulta do gráfico não suportava escopo de dados ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile

- **[Coleção: Árvore]** Corrigir falhas de atualização da tabela de caminho causadas pela busca incorreta do campo pai da árvore ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile

- **[Fluxo de trabalho: Nó manual]** Corrigir o problema em que a contagem de tarefas manuais não está correta ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher

- **[Gerenciador de tarefas assíncronas]** Adicionar regra de migração para a coleção `asyncTasks`, evitando que registros de tarefas assíncronas sejam migrados ([#7950](https://github.com/nocobase/nocobase/pull/7950)) por @mytharcher

- **[Gerenciador de fonte de dados]** Corrigido falha na atualização da senha da fonte de dados quando a senha do banco de dados é alterada ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock

- **[Departamentos]** Corrigir o problema em que campos associados ao departamento não podiam ser editados ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang

- **[Fluxo de trabalho: Subfluxo]** Corrigir o problema em que o fluxo de trabalho selecionado exibia "N/A" quando a contagem de fluxos de trabalho era maior que 200 por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Corrigir arquivo de idioma por @mytharcher

  - Corrigir o problema em que os registros de aprovação não são incluídos no resultado do job no branch de retorno por @mytharcher

  - Corrigir o problema de não haver dados ao carregar aprovações relacionadas com variáveis de escopo ACL por @mytharcher

  - Corrigir problema de permissão ao obter `approvalRecords.reassignee` devido à alteração do `RemoteSelect` por @mytharcher

  - Corrigir o problema em que a ação de impressão não funciona ao atualizar a página com o modal aberto por @mytharcher

  - Adicionar migração para evitar erro de registro duplicado ao adicionar índice por @mytharcher

  - Corrigir o problema em que o processo está incorreto ao ramificar com ordem e contra-assinatura por @mytharcher

  - Corrigir o problema em que o comentário no resultado do job é nulo após o usuário enviar a aprovação com comentário por @mytharcher

  - Corrigir ausência de dados do solicitante no contexto da execução após o usuário reenviar por @mytharcher

  - Corrigir o problema de erro de permissão ao carregar aprovações relacionadas ao registro no drawer de detalhes por @mytharcher

  - Corrigir o problema em que a janela pop-up do aprovador não exibe um título por @zhangzhonghe

  - Corrigir o problema de erro ao carregar aprovação relacionada no modo de função somente união por @mytharcher

  - Corrigir o problema de OOM ao listar aprovações por @mytharcher
