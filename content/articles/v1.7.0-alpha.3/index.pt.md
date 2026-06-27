---
title: "NocoBase v1.7.0-alpha.3: Suporte a ações de tabela inline com modo apenas ícone"
description: "Nota de lançamento da v1.7.0-alpha.3"
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
  - Campos ausentes na configuração de regras de vinculação ([#6488](https://github.com/nocobase/nocobase/pull/6488)) por @katherinehhh

  - A cor dos ícones no canto superior direito da página não muda com o tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe

  - Campo de texto rico não limpando dados ao enviar ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh

  - Estilo de entrada incorreto para configuração de valor padrão de formulário ([#6490](https://github.com/nocobase/nocobase/pull/6490)) por @gchust

  - Clicar no botão de reset no formulário de filtro não limpa as condições de filtragem do bloco de cartão em grade ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe

- **[Fluxo de trabalho: Nó manual]**
  - Alteração do nome da migração para garantir reexecução ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher

  - Correção da migração ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher

  - Correção do campo de título do fluxo de trabalho no filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher

  - Correção de erro de migração quando a coluna id não existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos

  - Evitar sincronização de coleção a partir de campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher

- **[Fluxo de trabalho]** Não contar tarefas quando o fluxo de trabalho é excluído ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher

- **[Variáveis e segredos]** Botões não sendo exibidos no painel de criação de novas variáveis ([#6485](https://github.com/nocobase/nocobase/pull/6485)) por @gchust

- **[Fluxo de trabalho: Nó de agregação]** Correção de arredondamento em resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher

- **[Incorporar NocoBase]** Página exibindo em branco por @zhangzhonghe

- **[Gerenciador de backup]** Não é possível iniciar o servidor quando faltam configurações de backup padrão por @gchust

- **[Fluxo de trabalho: Aprovação]**
  - Correção de erro no campo de associação de arquivo no formulário de processo por @mytharcher

  - Correção da contagem de tarefas com base em hooks por @mytharcher
