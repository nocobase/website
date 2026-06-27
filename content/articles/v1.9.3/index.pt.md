---
title: "NocoBase v1.9.3: Corrige erro lançado ao duplicar fluxo de trabalho de aprovação"
description: "Nota de lançamento da v1.9.3"
---

### 🚀 Melhorias

- **[database]** Adicionar a opção `multipleStatements` à instância de conexão MariaDB para suportar a invocação de múltiplas instruções em uma única consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher

- **[Workflow]** Suporte ao bloco de dados no workflow para usar o menu de configurações de detalhes consolidados ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher

### 🐛 Correções de Bugs

- **[servidor]** Isolar o canal Pub-Sub por nome do aplicativo ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher

- **[cliente]** Corrigir "Tamanho máximo da pilha de chamadas excedido" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe

- **[database]** Detecção incorreta de campo de índice quando os nomes dos campos usam o estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile

- **[Workflow]** Corrigido um problema onde o despachante do workflow em modo cluster falhava ao identificar corretamente estados ociosos, o que poderia levar a um consumo desnecessário de eventos de fila antes do plugin estar pronto ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher

- **[Mobile (obsoleto)]** Corrigir o problema onde o popup de valor padrão do campo de data no mobile não conseguia selecionar uma data ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe

- **[Workflow: Aprovação]** Corrigir erro lançado ao duplicar workflow de aprovação por @mytharcher

- **[Gerenciador de e-mail]** Adicionar índices à coleção mailMessages por @jiannx
