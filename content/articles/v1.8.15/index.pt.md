---
title: "NocoBase v1.8.15: Otimizar desempenho ao alternar abas pop-up"
description: "Nota de lançamento da v1.8.15"
---

### 🚀 Melhorias

- **[client]**

  - Adicionar suporte à variável de data "anteontem" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) por @katherinehhh
  - Otimizar desempenho ao alternar abas de popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
- **[Workflow]**

  - Corrigir caso de teste instável ([#7349](https://github.com/nocobase/nocobase/pull/7349)) por @mytharcher
  - O título do workflow no cartão de tarefa não será mais exibido com tachado, mesmo se a versão correspondente estiver desabilitada ([#7339](https://github.com/nocobase/nocobase/pull/7339)) por @mytharcher
- **[Visualizador de Arquivos Office]** Adicionar suporte para visualização de arquivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher
- **[Gerenciador de Backup]** melhorar desempenho para operação de backup de banco de dados mysql por @gchust

### 🐛 Correções de Bugs

- **[client]**

  - Corrigir o problema em que o layout de formulário com várias colunas não se converte para layout de coluna única em dispositivos móveis ([#7355](https://github.com/nocobase/nocobase/pull/7355)) por @zhangzhonghe
  - Corrigir erro ao excluir coleções em massa ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
  - Corrigido problema em que o escopo de dados salvo anteriormente não era pré-selecionado ao configurar permissões individualmente. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
- **[Workflow]**

  - Refatorar o menu "Adicionar Nó" e corrigir os problemas de desempenho de renderização do canvas do workflow que ele causava ([#7363](https://github.com/nocobase/nocobase/pull/7363)) por @mytharcher
  - Corrigir o problema de condições de filtro incorretas ao recuperar um único item de tarefa ([#7366](https://github.com/nocobase/nocobase/pull/7366)) por @mytharcher
  - Corrigir o problema de correspondência de palavras-chave na seleção de campo ([#7356](https://github.com/nocobase/nocobase/pull/7356)) por @mytharcher
  - Evitar erro lançado ao publicar na fila de eventos durante a parada ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Corrigir o problema em que mensagens no site eram recebidas, mas não exibidas em um popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) por @mytharcher
- **[Mobile]** Resolvido um problema em que o seletor de data em dispositivos móveis era exibido incorretamente quando limites de intervalo de data eram aplicados ([#7362](https://github.com/nocobase/nocobase/pull/7362)) por @katherinehhh
- **[Gerenciador de Arquivos]** Adicionar campo `storageId` à coleção de arquivos para suportar configuração de permissão ([#7351](https://github.com/nocobase/nocobase/pull/7351)) por @mytharcher
- **[Workflow: Nó paralelo]** Corrigir suspensão do nó paralelo após retomada no MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Workflow: CC]** Corrigir blocos que não podem ser removidos ([#7338](https://github.com/nocobase/nocobase/pull/7338)) por @mytharcher
- **[Visualizador de Arquivos Office]** Suportar arquivos `.docx`, `.xlsx` e `.pptx` apenas com URL para serem visualizados ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher
- **[Visualização de dados]** problema de variável de data no valor padrão do campo de data no bloco de filtro de gráfico ([#7291](https://github.com/nocobase/nocobase/pull/7291)) por @katherinehhh
- **[Workflow: Aprovação]**

  - Corrigir regras de vinculação que não funcionam no bloco de detalhes original da aprovação por @mytharcher
  - Corrigir atualização de associações ao enviar rascunho por @mytharcher
