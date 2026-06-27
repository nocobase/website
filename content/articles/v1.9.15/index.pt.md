---
title: "NocoBase v1.9.15: Correções de Bugs"
description: "Nota de Lançamento da v1.9.15"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Evita erro ao abrir as configurações de valor padrão ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher

  - Corrige erro ao adicionar registros filhos no bloco de tabela de árvore de associação ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh

- **[Departamentos]** Corrige o problema em que os campos associados ao departamento não podiam ser editados ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang

- **[Coleção: Árvore]** Corrige falhas na atualização da tabela de caminhos causadas pela busca incorreta do campo pai da árvore ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile

- **[Campo de coleção: Muitos para muitos (array)]** Corrige o problema em que o campo de array m2m na subtabela não podia ser atualizado ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock

- **[Fluxo de trabalho: Aprovação]**
  - Corrige a ausência de dados do solicitante no contexto da execução após o reenvio do usuário por @mytharcher

  - Corrige o problema em que o comentário no resultado do trabalho é nulo após o usuário enviar a aprovação com comentário por @mytharcher
