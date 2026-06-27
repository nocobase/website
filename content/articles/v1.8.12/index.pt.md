---
title: "NocoBase v1.8.12: Correções de Bugs"
description: "Nota de Lançamento da v1.8.12"
---

### 🎉 Novas Funcionalidades

- **[client]** Adicionada opção "Foco automático" para os componentes Input, TextArea, URL e InputNumber, que foca automaticamente o campo de entrada durante a renderização inicial da página quando ativada ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**
  - Corrige item de pré-visualização de arquivo em URL nula ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher

  - Adiciona URL completa ao arquivo local durante a pré-visualização ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher

- **[utils]** tratamento incorreto de fuso horário para parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh

- **[undefined]** Adiciona novo plugin ao preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher

- **[Gerenciador de arquivos]** Corrige permissão do campo de armazenamento ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher

- **[Workflow]** Corrige resultado `undefined` quando o processador sai ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher

- **[Workflow: Nó de cálculo dinâmico]** Corrige erro causado por API legada ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher

- **[Workflow: Subfluxo]** Corrige fluxo suspenso por @mytharcher
