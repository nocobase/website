---
title: "NocoBase v2.1.5: Adicionado suporte para envio de anexos em nós de e-mail do fluxo de trabalho"
description: "Nota de lançamento da v2.1.5"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Nó de e-mail]** Adicionado suporte para envio de anexos em nós de e-mail do workflow. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) por @mytharcher

### 🚀 Melhorias

- **[client-v2]** Escopos de dados de coluna de campo de relação em subtabelas de formulário agora suportam variáveis do item atual. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) por @gchust
- **[undefined]** Unificado o nome da documentação em chinês do plugin de controle de versão como “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) por @cgyrock
- **[Gerenciador de arquivos]** Adicionado suporte a texto selecionável na visualização de PDF no gerenciador de arquivos para PDFs com texto incorporado. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) por @mytharcher
- **[Ação: Edição em lote]** Otimizado o método de carregamento para plugins de ação v2 e mantida a ordem dos botões de ação migrados estável. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) por @katherinehhh
- **[Controle de versão]** Alterado o nome de exibição em chinês do plugin de controle de versão para “版本控制”. por @cgyrock

### 🐛 Correções de Bugs

- **[cli-v1]** Corrigido um erro ao executar `yarn dev` após atualizar projetos criados com create-nocobase-app de 2.0 para 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) por @Molunerfinn
- **[client-v2]** Corrigido o problema em que o progresso da migração não exibia a visualização de progresso dedicada. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) por @2013xile
- **[flow-engine]** Corrigidos problemas de entrada de IME em vietnamita e chinês em campos de texto de linha única e múltiplas linhas v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) por @katherinehhh
- **[server]** Corrigido o tratamento inseguro de nomes de plugins em `pm:enable` para prevenir riscos de inclusão de arquivos locais durante a resolução de plugins. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) por @mytharcher
- **[Gerenciador de arquivos]** Corrigidas falhas na visualização de PDF causadas por carregamento anormal do módulo de trabalho pdf.js. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) por @mytharcher
- **[Bloco: Kanban]** Corrigido o problema em que abrir blocos de Calendário, Gantt e Kanban fora do modo de edição persistia inesperadamente ações pop-up ocultas e enviava repetidamente solicitações de exclusão. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) por @jiannx
- **[Ação: Exportar registros Pro]** Melhoradas as configurações do modo de processamento e dicas explicativas para Importação/Exportação Pro v2. por @katherinehhh
- **[Gerenciador de migração]** Corrigidas possíveis falhas ao importar arquivos grandes de dados de migração. por @2013xile
- **[Impressão de modelo]** Rejeitados tipos de arquivo de modelo não suportados antes do início da impressão do modelo. por @2013xile
