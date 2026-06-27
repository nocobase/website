---
title: "NocoBase v1.9.0-alpha.12: Suporte a regras de validação de campos"
description: "Nota de lançamento da v1.9.0-alpha.12"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte a regras de validação de campos ([#7297](https://github.com/nocobase/nocobase/pull/7297)) por @aaaaaajie

- **[Workflow: Approval]**
  - Adicionado tipo de template inline para configuração de notificação por @mytharcher

  - Suporte para usar um título de tarefa consistente em todos os nós de aprovação no mesmo workflow por @mytharcher

### 🚀 Melhorias

- **[database]** Otimizado o desempenho de consultas ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie

- **[client]** Suporte para exibir ícones identificados por strings no componente Select quando em modo somente leitura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher

- **[Mobile]** Otimizado o componente de popup mobile ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe

- **[Workflow]** Atualizado o menu de seleção de nós para exibir opções em layout de duas colunas, melhorando a densidade de informações e permitindo que usuários vejam mais opções de uma vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher

- **[Configurações de licença]** Nas configurações de licença, copiar o ID da instância mais recente a cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx

- **[Notificação: Mensagem no aplicativo]** Removida a saída de logs SQL via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile

- **[Autenticação]** Removido o parâmetro token da URL após login bem-sucedido ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile

- **[Impressão de template]** Suporte a campo m2m array por @jiannx

### 🐛 Correções de Bugs

- **[database]** Corrigido problema onde a leitura de tabela externa do Postgres incluía views de outros schemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie

- **[client]**
  - Tratar número 0 como vazio durante validação de vazio em regras de encadeamento ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh

  - Corrigido problema onde o botão "Configurações de coluna" carregava colunas da tabela dentro do diálogo modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) por @kerwin612

  - Corrigido texto do botão de link quebrando linha ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher

- **[server]** Algumas requisições não possuem `ctx.action`, causando erros no middleware de log de auditoria ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile

- **[Bloco: template]** Resolvido problema onde blocos de e-mail não eram visíveis quando colocados dentro de um bloco de template herdado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust

- **[Workflow: nó de e-mail]** Corrigido problema onde o nó de e-mail podia não retomar a execução corretamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher

- **[Mobile]**
  - Formato de exibição incorreto do campo de data no mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh

  - Corrigido problema onde os dados de submissão de formulário no diálogo de aprovação mobile estavam incorretos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe

- **[Workflow]**
  - Corrigido erro lançado e dados de formulário desaparecendo ao editar categoria de workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher

  - Corrigida a tradução do título da página no centro de tarefas do workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher

- **[Visualizador de Arquivos Office]** Corrigido erro lançado ao enviar arquivo para campo de URL de anexo ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher

- **[Notificação: Mensagem no aplicativo]** Corrigidas traduções ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher

- **[Campo de coleção: Fórmula]** Corrigido problema onde entrada de fórmula não passava na validação devido ao tipo de variável ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher

- **[Gerenciador de arquivos]** Removida a dica sobre o limite de tamanho de upload de arquivo ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher

- **[Calendário]** Tooltip de item de evento do calendário exibindo [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh

- **[Ação: Importar registros Pro]** Não permitir atribuir campos de relação durante a detecção de duplicatas na importação. por @aaaaaajie

- **[Workflow: Evento de ação personalizada]** Limpar as linhas selecionadas após acionar ações com sucesso em múltiplos registros por @mytharcher

- **[Impressão de template]** Impressão de campos de seleção de rádio em múltiplas linhas de dados por @jiannx

- **[Armazenamento de arquivos: S3(Pro)]**
  - Descontinuar parâmetro problemático `attachmentField` por @mytharcher

  - Corrigido problema onde o método de autenticação IAM não podia ser usado para enviar arquivos por @mytharcher

- **[Workflow: Approval]**
  - Corrigido problema onde carregar dados de fonte de dados externa em registros de aprovação resultava em erro 404 por @mytharcher

  - Corrigido problema onde a lista de usuários estava vazia durante a co-assinatura por @mytharcher

- **[Gerenciador de backup]** Backups de arquivos grandes podiam mostrar "bem-sucedido" antes de realmente terminar por @gchust

- **[Gerenciador de migração]** Pular os comandos `\restrict` e `\unrestrict` gerados pelo pg_dump mais recente ao criar arquivos de migração para resolver erros de restauração. por @2013xile
