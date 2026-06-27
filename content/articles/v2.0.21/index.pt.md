---
title: "NocoBase v2.0.21: Adicionar lista de execuções de filtro"
description: "Nota de lançamento da v2.0.21"
---

### 🚀 Melhorias

- **[Workflow]** Adicionar lista de execuções de filtros ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher

- **[Workflow: Aprovação]** Evitar configurar a interface de aprovadores quando nenhuma coleção estiver configurada no gatilho por @mytharcher

### 🐛 Correções de Bugs

- **[resourcer]** Impedir que o array do parâmetro `filterByTk` seja automaticamente convertido em um objeto quando exceder 100 itens ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile

- **[client]** Corrigir o problema em que não administradores não conseguem limpar valores de campos associados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx

- **[Ação: Importar registros Pro]**
  - Corrigir o problema de erro ao importar no modo síncrono por @mytharcher

  - Corrigir o problema em que colunas com mais de ~30 causavam erro de importação, devido à leitura duplicada do fluxo por @mytharcher

- **[Workflow: Aprovação]** Corrigir problema de concorrência ao adicionar responsável por @mytharcher
