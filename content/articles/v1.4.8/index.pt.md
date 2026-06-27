---
title: "NocoBase v1.4.8: Correções de Bugs"
description: "Nota de Lançamento da v1.4.8"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige problema de modelo de dados no formulário de filtro configurado no seletor de registros de campo de associação ([#5837](https://github.com/nocobase/nocobase/pull/5837)) por @katherinehhh

  - Corrige problema com modelos de string Markdown não carregando dados de dados de associação (fonte de dados externa) ([#5791](https://github.com/nocobase/nocobase/pull/5791)) por @katherinehhh

- **[Sincronização de dados do usuário]** Ignora tipos de dados não suportados durante a sincronização em vez de lançar um erro. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) por @chenzhizdt

- **[Gerenciador de backup]**
  - Corrige a abertura lenta da janela de download para arquivos de backup grandes por @gchust

  - Corrige o problema em que restaurar um sub-aplicativo de backup faz com que todos os aplicativos reiniciem por @gchust
