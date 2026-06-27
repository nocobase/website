---
title: "NocoBase v1.8.0-alpha.3: Otimização de desempenho ao processar arquivos XLSX grandes"
description: "Nota de lançamento da v1.8.0-alpha.3"
---

### 🚀 Melhorias

- **[Ação: Edição em lote]** Uso de `filterByTk` em vez de `filter` no modo selecionado ([#6994](https://github.com/nocobase/nocobase/pull/6994)) por @mytharcher

- **[Ação: Importar registros Pro]** Otimização de desempenho ao processar arquivos XLSX grandes (conjuntos de dados com muitas linhas/colunas), prevenindo travamentos ou congelamentos do sistema. por @aaaaaajie

### 🐛 Correções de Bugs

- **[client]**
  - Título do campo ausente no componente assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) por @katherinehhh

  - O último item do menu não pode ser selecionado na lista de movimentação do menu ([#6997](https://github.com/nocobase/nocobase/pull/6997)) por @zhangzhonghe

  - Conteúdo exibido incorretamente em páginas abertas através de links pop-up ([#6990](https://github.com/nocobase/nocobase/pull/6990)) por @zhangzhonghe

- **[Workflow]**
  - Correção do filtro não atualizado ao alternar entre abas de categorias ([#6989](https://github.com/nocobase/nocobase/pull/6989)) por @mytharcher

  - Correção das estatísticas do workflow não criadas automaticamente ([#6993](https://github.com/nocobase/nocobase/pull/6993)) por @mytharcher
