---
title: "NocoBase v1.6.5: Simplifique a lógica de geração de URLs de arquivos e a API"
description: "Nota de lançamento da v1.6.5"
---

### 🚀 Melhorias

- **[Gerenciador de arquivos]** Simplifica a lógica de geração de URL de arquivos e a API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]** Altera para uma forma simples de gerar URL de arquivo por @mytharcher

- **[Gerenciador de backup]** Permite restaurar backup entre versões pré-lançamento e versão de lançamento da mesma versão por @gchust

### 🐛 Correções de Bugs

- **[cliente]**
  - Campo de texto rico não limpando dados ao enviar ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh

  - A cor dos ícones no canto superior direito da página não muda com o tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe

  - Clicar no botão de redefinir no formulário de filtro não consegue limpar as condições de filtragem do bloco de cartão de grade ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe

- **[Fluxo de trabalho: Nó manual]**
  - Corrige migração ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher

  - Altera o nome da migração para garantir reexecução ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher

  - Corrige campo de título do fluxo de trabalho no filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher

  - Corrige erro de migração quando a coluna id não existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos

  - Evita coleção sincronizada a partir de campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher

- **[Fluxo de trabalho: Nó de agregação]** Corrige arredondamento em resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher

- **[Fluxo de trabalho]** Não conta tarefas quando o fluxo de trabalho é excluído ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher

- **[Gerenciador de backup]** Não é possível iniciar o servidor quando faltam configurações de backup padrão por @gchust

- **[Fluxo de trabalho: Aprovação]**
  - Corrige erro de campo de associação de arquivo no formulário de processo por @mytharcher

  - Corrige contagem de tarefas com base em hooks por @mytharcher
