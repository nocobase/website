---
title: "NocoBase v2.0.56: plugin de gerenciamento de backup de código aberto"
description: "Nota de lançamento da v2.0.56"
---

### 🎉 Novas Funcionalidades

- **[Gerenciador de backup]** plugin de gerenciador de backup de código aberto ([#9550](https://github.com/nocobase/nocobase/pull/9550)) por @chenos

### 🚀 Melhorias

- **[client]** otimizar configurações de exibição do botão de ação ([#9510](https://github.com/nocobase/nocobase/pull/9510)) por @katherinehhh
- **[flow-engine]** Menus de configuração de campo da V2 agora suportam busca de campos ([#9489](https://github.com/nocobase/nocobase/pull/9489)) por @zhangzhonghe
- **[undefined]**

  - Adicionar revisão de segurança de dependências para pull requests ([#9523](https://github.com/nocobase/nocobase/pull/9523)) por @zhangzhonghe
  - **[Gerenciador de notificações]** Alterar estratégia de fila para otimizar desempenho de envio ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher
- **[IA: Base de conhecimento]** Habilitada modificação de armazenamento vetorial para bases de conhecimento de IA por @cgyrock
- **[Workflow: Aprovação]** Melhorar aprovações relacionadas com cartões de linha do tempo por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**

  - corrigir limpeza de valores selecionados quando campos de associação dependentes mudam no vínculo de escopo de dados ([#9551](https://github.com/nocobase/nocobase/pull/9551)) por @katherinehhh
  - Corrigir o problema onde um emblema de menu ainda exibe um ponto quando seu valor é 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe
  - Corrigir o problema onde formulários de filtro não podem usar variáveis do formulário atual ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe
  - Corrigir o problema onde blocos v2 reduzidos se tornam largura total após sair do modo de edição ([#9529](https://github.com/nocobase/nocobase/pull/9529)) por @zhangzhonghe
  - Corrigido estado incorreto do menu de campo JS em subformulários. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) por @gchust
- **[flow-engine]** corrigir problema de seleção múltipla para campos de fonte de dados externa no formulário v2 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) por @katherinehhh
- **[Funcionários de IA]** Corrigir erro quando funcionário de IA acessa base de conhecimento somente leitura ([#9539](https://github.com/nocobase/nocobase/pull/9539)) por @cgyrock
- **[Calendário]** Corrigir o problema onde itens adicionais do calendário não podem ser totalmente exibidos ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe
- **[Ação: Atualização em lote]** corrigir ação de atualização em lote redefinindo estado de carregamento após falha na atualização ([#9509](https://github.com/nocobase/nocobase/pull/9509)) por @katherinehhh
- **[Documentação da API]** Corrigida documentação da API de coleções para que parâmetros de consulta não interfiram mais entre si ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx
- **[Workflow]** Adicionar estado de carregamento para execução manual de workflow. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) por @mytharcher
- **[Gerenciador de migração]** Corrigida falha na criação de arquivos de migração ao usar OceanBase por @2013xile
- **[Armazenamento de arquivos: S3(Pro)]** Corrigir manipulação de endpoint S3 Pro para que uploads do servidor e pré-visualizações de URL não dupliquem o host do bucket. por @mytharcher
- **[Workflow: Aprovação]** Corrigir índices duplicados de registro de aprovação quando delegações ocorrem simultaneamente no mesmo trabalho de aprovação. por @mytharcher
