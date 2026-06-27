---
title: "NocoBase v1.9.0-beta.6: Suporte para dividir serviços de tarefas assíncronas por ambiente e fila de eventos"
description: "Nota de lançamento da v1.9.0-beta.6"
---

### 🎉 Novas Funcionalidades

- **[client]** Adicionada opção "Foco automático" para os componentes Input, TextArea, URL e InputNumber que foca automaticamente o campo de entrada durante a renderização inicial da página quando ativada ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe
- **[Gerenciador de tarefas assíncronas]** Suporte para dividir serviços de tarefas assíncronas por ambiente e fila de eventos ([#7241](https://github.com/nocobase/nocobase/pull/7241)) por @mytharcher
- **[Visualizador de arquivos do Office]** Suporte para visualizar arquivos do Office via visualização ao vivo da Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher
- **[Auth: SAML 2.0]** Adicionadas opções de configuração relacionadas à assinatura por @2013xile
- **[Workflow: Aprovação]**

  - Adicionado tipo de template inline para configuração de notificação por @mytharcher
  - Suporte para usar título de tarefa consistente para todos os nós de aprovação no mesmo workflow por @mytharcher

### 🚀 Melhorias

- **[database]** Otimizado o desempenho da consulta ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie
- **[client]**

  - Suporte para exibir ícones identificados por strings no componente Select quando em modo somente leitura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher
  - Adicionado suporte à variável de data "anteontem" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) por @katherinehhh
  - Otimizado o desempenho ao alternar abas de popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
  - Não fechar menu automaticamente após seleção ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612
- **[Mobile]** Otimizado o componente de popup mobile ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe
- **[Workflow]**

  - Menu de seleção de nós atualizado para exibir opções em layout de duas colunas para melhorar a densidade de informações e permitir que usuários vejam mais opções de uma vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher
  - Corrigido caso de teste instável ([#7349](https://github.com/nocobase/nocobase/pull/7349)) por @mytharcher
  - Exibir título normal quando desabilitado ([#7339](https://github.com/nocobase/nocobase/pull/7339)) por @mytharcher
  - Reduzir quantidade de jobs a carregar ao preparar execução ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher
- **[Configurações de licença]** Nas configurações de licença, copiar o ID da instância mais recente a cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx
- **[Autenticação]** Removido o parâmetro token da URL após login bem-sucedido ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile
- **[Notificação: Mensagem no aplicativo]**

  - Removida saída de logs SQL via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile
  - Alterada mensagem no aplicativo de SSE para WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher
- **[Visualizador de arquivos do Office]** Adicionado suporte para visualizar arquivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher
- **[Ação: Importar registros Pro]** Suporte para dividir serviços de importação/exportação por ambiente e fila de eventos por @mytharcher
- **[Workflow: JavaScript]** Alterado cache para cache do aplicativo para evitar bugs em modo cluster por @mytharcher
- **[Impressão de template]** Suporte para campo m2m array por @jiannx
- **[Gerenciador de backup]** Melhorado desempenho para operação de backup de banco de dados MySQL por @gchust
- **[Auth: DingTalk]** No cliente DingTalk, definir o título da barra de navegação como string vazia em vez de exibir "Carregando…" por @2013xile
- **[Gerenciador de migração]** Suporte para dividir serviço de migração por ambiente e fila de eventos por @mytharcher

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido problema onde o ícone era exibido incorretamente quando a URL no campo de URL do anexo continha parâmetros de consulta ([#7432](https://github.com/nocobase/nocobase/pull/7432)) por @mytharcher
  - Tratar número 0 como vazio durante validação de vazio em regras de vinculação ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh
  - Corrigido texto do botão de link quebrando linha ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher
  - Corrigido problema onde layout de formulário com múltiplas colunas não convertia para layout de coluna única em dispositivos móveis ([#7355](https://github.com/nocobase/nocobase/pull/7355)) por @zhangzhonghe
  - Corrigido erro ao excluir coleções em lote ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
  - Corrigido problema onde o escopo de dados previamente salvo não era pré-selecionado ao configurar permissões individualmente. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
  - Corrigido problema onde strings brutas de variáveis eram enviadas com o formulário ([#7337](https://github.com/nocobase/nocobase/pull/7337)) por @zhangzhonghe
  - Ao usar variáveis para definir valores padrão de campo em formulários de filtro, se o valor da variável estiver vazio, a caixa de entrada exibirá a string original da variável ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe
  - Corrigido tooltip mostrando [object Object] ao passar o mouse no painel de ações ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh
  - Corrigido problema de loop infinito ao analisar valores padrão de campo ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe
  - Corrigido item de visualização de arquivo em url nula ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher
  - Corrigido problema onde tabela em árvore não podia ser expandida ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe
  - Adicionada URL completa ao arquivo local ao visualizar ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher
  - Corrigido comportamento inesperado na ordenação por arrastar e soltar de linhas da tabela ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu
  - Problema de exibição de campo de data no popup do seletor de dados de campo de associação do formulário de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh
- **[database]** Corrigido problema onde leitura de tabela externa Postgres incluía visualizações de outros schemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie
- **[server]** Algumas requisições não possuem `ctx.action`, causando erros no middleware de log de auditoria ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile
- **[undefined]** Adicionado novo plugin ao preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher
- **[utils]** Manipulação incorreta de fuso horário para parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh
- **[Bloco: template]** Resolvido problema onde blocos de e-mail não eram visíveis quando colocados dentro de um bloco de template herdado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust
- **[Mobile]**

  - Formato de exibição incorreto do campo de data no mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh
  - Corrigido problema onde os dados de envio do formulário no diálogo de aprovação mobile estavam incorretos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe
  - Resolvido problema onde o seletor de data em dispositivos móveis exibia incorretamente quando limites de intervalo de data eram aplicados ([#7362](https://github.com/nocobase/nocobase/pull/7362)) por @katherinehhh
- **[Workflow]**

  - Corrigido erro lançado e dados do formulário desaparecendo ao editar categoria de workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher
  - Corrigida a tradução do título da página no centro de tarefas do workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher
  - Refatorado o menu "Adicionar Nó" e corrigidos problemas de desempenho de renderização do canvas do workflow causados por ele ([#7363](https://github.com/nocobase/nocobase/pull/7363)) por @mytharcher
  - Corrigido problema de condições de filtro incorretas ao recuperar um único item de tarefa ([#7366](https://github.com/nocobase/nocobase/pull/7366)) por @mytharcher
  - Corrigido problema de correspondência de palavras-chave na seleção de campo ([#7356](https://github.com/nocobase/nocobase/pull/7356)) por @mytharcher
  - Evitar erro lançado devido à publicação na fila de eventos ao parar ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
  - Corrigido resultado `undefined` quando o processador sai ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher
  - Corrigido problema de ID BigInt no MySQL ao salvar job ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher
- **[Workflow: nó de e-mail]** Corrigido problema onde o nó de e-mail podia não retomar a execução corretamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher
- **[Visualizador de arquivos do Office]**

  - Corrigido erro lançado ao fazer upload de arquivo para campo de URL de anexo ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher
  - Suporte para arquivos `.docx`, `.xlsx` e `.pptx` com apenas URL serem visualizados ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher
- **[Gerenciador de arquivos]**

  - Removida dica para o limite de tamanho de upload de arquivo ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher
  - Adicionado campo `storageId` à coleção de arquivos para suportar configuração de permissão ([#7351](https://github.com/nocobase/nocobase/pull/7351)) por @mytharcher
  - Corrigida permissão de campo de armazenamento ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]**

  - Corrigidas traduções ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher
  - Corrigido problema onde mensagens no site eram recebidas mas não exibidas em um popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) por @mytharcher
- **[Calendário]** tooltip de item de evento de calendário mostrando [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh
- **[Campo de coleção: Fórmula]** Corrigido problema onde entrada de fórmula não passava na validação devido ao tipo de variável ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher
- **[Workflow: Nó paralelo]** Corrigido nó paralelo suspender após retomar no MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Workflow: CC]** Corrigido problema onde blocos não podiam ser removidos ([#7338](https://github.com/nocobase/nocobase/pull/7338)) por @mytharcher
- **[Visualização de dados]** Problema de variável de data no valor padrão do campo de data no bloco de filtro de gráfico ([#7291](https://github.com/nocobase/nocobase/pull/7291)) por @katherinehhh
- **[Coleção: Árvore]** Corrigida lógica de sincronização de caminho de coleções em árvore ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu
- **[Workflow: Nó de requisição HTTP]** Corrigido bug de condição de corrida ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher
- **[Workflow: Nó de cálculo dinâmico]** Corrigido erro causado por API legada ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher
- **[Ação: Exportar registros]** Corrigida formatação incorreta de campos relacionais aninhados ao exportar para Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie
- **[Ação: Importar registros Pro]** Desabilitada atribuição de campos de relação durante detecção de duplicatas na importação. por @aaaaaajie
- **[Fonte de dados: SQL Server externo]** Corrigido formato de armazenamento inconsistente para campos datetime do MSSQL (sem fuso horário) de fontes de dados externas por @aaaaaajie
- **[Workflow: Evento de ação personalizada]** Limpar linhas selecionadas após acionar ações com sucesso em múltiplos registros por @mytharcher
- **[Workflow: Subfluxo]** Corrigido fluxo suspenso por @mytharcher
- **[Impressão de template]** Impressão de campos de seleção de rádio em múltiplas linhas de dados por @jiannx
- **[Armazenamento de arquivos: S3(Pro)]**

  - Corrigido problema onde o método de autenticação IAM não podia ser usado para fazer upload de arquivos por @mytharcher
  - Descontinuado parâmetro problemático `attachmentField` por @mytharcher
- **[Workflow: Aprovação]**

  - Corrigido problema onde carregar dados de fonte de dados externa em registros de aprovação resultava em erro 404 por @mytharcher
  - Adicionado título de tarefa para itens adicionados e delegados por @mytharcher
  - Corrigido erro lançado pela seleção de responsável dentro de fonte de dados externa por @mytharcher
  - Corrigido problema onde a lista de usuários estava vazia durante co-assinatura por @mytharcher
  - Corrigidas associações de atualização ao enviar rascunho por @mytharcher
  - Corrigido problema onde regras de vinculação não funcionavam no bloco de detalhes original da aprovação por @mytharcher
- **[Gerenciador de backup]** Backups de arquivos grandes podiam mostrar "bem-sucedido" antes de realmente terminar por @gchust
- **[Gerenciador de migração]** Pular os comandos `\restrict` e `\unrestrict` gerados pelo pg_dump mais recente ao criar arquivos de migração para resolver erros de restauração. por @2013xile
