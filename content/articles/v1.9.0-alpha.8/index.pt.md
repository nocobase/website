---
title: "NocoBase v1.9.0-alpha.8: Otimizar desempenho ao alternar abas pop-up"
description: "Nota de lançamento da v1.9.0-alpha.8"
---

### 🚀 Melhorias

- **[client]** Otimização de desempenho ao alternar abas de popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
- **[Visualizador de Arquivos Office]** Adicionado suporte para visualização de arquivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido problema em que o escopo de dados previamente salvo não era pré-selecionado ao configurar permissões individualmente ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
  - Corrigido erro ao excluir coleções em lote ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
- **[Workflow]** Evitado erro causado pela publicação na fila de eventos ao parar ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
- **[Workflow: Nó Paralelo]** Corrigida suspensão do nó paralelo após retomada no MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Workflow: Aprovação]**

  - Corrigida atualização de associações ao enviar rascunho por @mytharcher
  - Corrigidas regras de vinculação que não funcionavam no bloco de detalhes original da aprovação por @mytharcher
