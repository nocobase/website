---
title: "NocoBase v2.2.0-beta.3: Adicionar suporte a anexos ao nó de e-mail do fluxo de trabalho."
description: "Nota de lançamento da v2.2.0-beta.3"
---

### 🎉 Novas Funcionalidades

* **[Workflow: Nó de e-mail]** Adicionado suporte para envio de anexos em nós de e-mail do workflow. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) por @mytharcher
* **[Workflow]** Adicionado suporte para escopos de transação de banco de dados em workflows. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) por @mytharcher
  Referência: [Transações de banco de dados](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow: Nó de transação de banco de dados]** Adicionado um plugin de nó de workflow para transação de banco de dados. por @mytharcher

### 🚀 Melhorias

* **[client-v2]** Colunas de campos de relação em subtabelas de formulário agora suportam variáveis do item atual em escopos de dados. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) por @gchust
* **[undefined]** Unificado o nome em chinês da documentação do plugin Version control para "版本控制". ([#9776](https://github.com/nocobase/nocobase/pull/9776)) por @cgyrock
* **[File manager]** Adicionado suporte a texto selecionável na visualização de PDF no File manager para PDFs com texto incorporado. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) por @mytharcher
* **[Users]** Melhorado o layout das páginas v2 de Usuários e Permissões e otimizado o comportamento da árvore de departamentos. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) por @jiannx
* **[Ação: Edição em massa]** Otimizado como os plugins de ação v2 são carregados e mantida a ordem estável dos botões de ação migrados. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) por @katherinehhh
* **[Version control]** Renomeado o nome em chinês do plugin Version control para "版本控制". por @cgyrock

### 🐛 Correções de Bugs

* **[cli-v1]** Corrigido um erro ao executar `<span>yarn dev</span>` após atualizar projetos criados com create-nocobase-app de 2.0 para 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) por @Molunerfinn
* **[flow-engine]** Corrigidos problemas de entrada de IME em vietnamita e chinês em campos de texto de linha única e texto multilinha v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) por @katherinehhh
* **[client-v2]** Corrigido o problema em que o progresso da migração não exibia a visualização de progresso dedicada. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) por @2013xile
* **[server]** Corrigido o tratamento inseguro de nomes de plugins em `<span>pm:enable</span>` para evitar riscos de inclusão de arquivos locais durante a resolução de plugins. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) por @mytharcher
* **[Async task manager]** Corrigidos erros de consulta ao banco de dados causados pela falta de `<span>filterByTk</span>` ao baixar arquivos de tarefas assíncronas. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) por @mytharcher
* **[File manager]** Corrigidas falhas na visualização de PDF causadas por carregamento anormal do módulo worker do pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) por @mytharcher
* **[Bloco: Kanban]** Corrigido o problema em que abrir blocos de Calendário, Gantt e Kanban no modo não edição persistia inesperadamente ações pop-up ocultas e enviava repetidamente solicitações de exclusão. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) por @jiannx
* **[Ação: Exportar registros Pro]** Melhoradas as configurações do modo de processamento e o texto de ajuda para v2 Import/Export Pro. por @katherinehhh
* **[Multi-espaço]** Corrigido o problema em que administradores de espaço não podiam adicionar usuários ao espaço quando não tinham permissão para o campo de e-mail do usuário. por @jiannx
* **[Migration manager]** Corrigidas possíveis falhas ao importar arquivos grandes de dados de migração. por @2013xile
* **[Impressão de modelo]** Rejeitados tipos de arquivo de modelo não suportados antes do início da impressão do modelo. por @2013xile
