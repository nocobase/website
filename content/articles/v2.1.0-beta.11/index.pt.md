---
title: "NocoBase v2.1.0-beta.11: Adicionar lista de execuções de filtro"
description: "Nota de lançamento da v2.1.0-beta.11"
---

### 🚀 Melhorias

- **[Workflow]** Adicionar lista de execuções de filtros ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher

- **[Workflow: Aprovação]** Evitar configurar a interface de aprovadores quando nenhuma coleção estiver configurada no gatilho por @mytharcher

### 🐛 Correções de Bugs

- **[servidor]** Corrigir o problema em que eventos do ciclo de vida enviados pelo worker fazem o aplicativo servidor parar ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher

- **[cliente]** corrigir o problema em que não administradores não conseguem limpar valores de campos associados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx

- **[resourcer]** Impedir que o array do parâmetro `filterByTk` seja automaticamente convertido em um objeto quando exceder 100 itens ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile

- **[Ação: Importar registros Pro]**
  - Corrigir o problema em que um erro é lançado ao importar no modo síncrono por @mytharcher

  - Corrigir o problema em que colunas com mais de ~30 causam erro de importação, devido à leitura duplicada do stream por @mytharcher

- **[Workflow: Aprovação]** Corrigir problema de concorrência ao adicionar responsável por @mytharcher

- **[Gerenciador de migrações]** Corrigido o problema em que a migração é interrompida devido a um erro causado pelo ambiente de destino não ter a nova tabela criada durante o processo de migração de upload. por @Andrew1989Y
