---
title: "NocoBase v1.7.0-beta.5: Suporte a ações de tabela inline com modo apenas ícone"
description: "Nota de lançamento da v1.7.0-beta.5"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte a ações inline em tabelas com modo apenas ícone, exibindo o nome da ação ao passar o mouse ([#6451](https://github.com/nocobase/nocobase/pull/6451)) por @katherinehhh

### 🚀 Melhorias

- **[Gerenciador de arquivos]** Simplificação da lógica de geração de URL de arquivos e da API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]**
  - Alteração do texto 'Access URL Base' para 'Base URL' por @zhangzhonghe

  - Alteração para uma forma mais simples de gerar URL de arquivo por @mytharcher

- **[Gerenciador de backup]** Permitir restauração de backup entre versões pré-lançamento e versão final da mesma versão por @gchust

### 🐛 Correções de Bugs

- **[client]**
  - A cor dos ícones no canto superior direito da página não muda com o tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe

  - Campo de texto rico não limpando dados ao enviar ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh

  - Clicar no botão de redefinir no formulário de filtro não limpa as condições de filtragem do bloco de cartão em grade ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe

- **[Fluxo de trabalho: Nó manual]**
  - Correção na migração ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher

  - Alteração do nome da migração para garantir reexecução ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher

  - Correção do campo de título do fluxo de trabalho no filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher

  - Evitar sincronização de coleção a partir de campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher

  - Correção de erro de migração quando a coluna id não existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos

- **[Fluxo de trabalho]** Não contar tarefas quando o fluxo de trabalho é excluído ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher

- **[Fluxo de trabalho: Nó de agregação]** Correção de arredondamento em resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher

- **[Incorporar NocoBase]** Página exibindo em branco por @zhangzhonghe

- **[Gerenciador de backup]** Não é possível iniciar o servidor quando faltam configurações de backup padrão por @gchust

- **[Fluxo de trabalho: Aprovação]**
  - Correção de erro no campo de associação de arquivo no formulário do processo por @mytharcher

  - Correção da contagem de tarefas com base em hooks por @mytharcher
