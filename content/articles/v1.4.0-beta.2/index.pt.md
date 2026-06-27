---
title: "NocoBase v1.4.0-beta.2: Correções de Bugs"
description: "Nota de lançamento da v1.4.0-beta.2"
---

### 🐛 Correções de Bugs

- **[build]** Reverte a ferramenta de compilação do cliente de `rspack` de volta para `vite` para corrigir o problema em que o comando `yarn dev` reporta um erro após executar o comando create-nocobase-app ([#5697](https://github.com/nocobase/nocobase/pull/5697)) por @gchust

- **[client]** Corrige o problema em que a coluna fixada à direita não se alinha à direita quando há menos colunas ([#5690](https://github.com/nocobase/nocobase/pull/5690)) por @katherinehhh

- **[Mobile]** Corrige o problema em que o modal 'Atribuir valores de campo' fica oculto na página de configuração do dispositivo móvel ([#5701](https://github.com/nocobase/nocobase/pull/5701)) por @zhangzhonghe
