---
title: "NocoBase v2.1.4: Arquivos de importação alterados para armazenamento em disco para reduzir pressão de memória durante importações de grandes volumes de dados"
description: "Nota de lançamento da v2.1.4"
---

### 🚀 Melhorias

- **[Workflow]** Melhorada a experiência de edição de metadados do workflow, permitindo edição da descrição no popup de detalhes e preenchendo automaticamente os metadados do workflow de origem ao duplicar workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) por @mytharcher

### 🐛 Correções de Bugs

- **[Ação: Importar registros]** Alterado o armazenamento de arquivos importados para disco, reduzindo a pressão na memória durante importações de grandes volumes de dados. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) por @mytharcher
- **[Gerenciador de backup]** Corrigida uma falha de segurança onde nomes de esquemas PostgreSQL inseguros podiam ser aceitos durante a restauração de backup. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) por @2013xile
- **[Workflow]**

  - Corrigido o tratamento de timeout do workflow para que execuções abortadas e suas tarefas pendentes sejam atualizadas atomicamente. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) por @mytharcher
  - Corrigido o problema em que o campo "última atualização por" do workflow não era atualizado após alterações nos nós do workflow. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) por @mytharcher
- **[Ação: Importar registros Pro]** Evitada a análise de arquivos grandes no nó de requisição antes da importação Pro criar uma tarefa assíncrona. por @mytharcher
- **[Controle de versão]** Ajustada a posição do atalho superior do controle de versão para que apareça ao lado do editor de interface nos layouts administrativos legado e v2. por @cgyrock
