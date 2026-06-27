---
title: "NocoBase v2.0.0-beta.19: DingTalk permite vincular usuário com `unionId`"
description: "Nota de lançamento da v2.0.0-beta.19"
---

### 🎉 Novas Funcionalidades

- **[Auth: DingTalk]** Permite vincular usuário com `unionId` por @2013xile

### 🚀 Melhorias

- **[client]** ajusta a configuração de largura da coluna para seleção suspensa em subtabela editável inline ([#8561](https://github.com/nocobase/nocobase/pull/8561)) por @katherinehhh

- **[Campo de coleção: Markdown(Vditor)]** Adicionada uma opção de configuração para definir o modo de edição padrão nas configurações do componente. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) por @Cyx649312038

- **[Multi-espaço]** controle de permissão multi-espaço acessa acl por @jiannx

- **[IA: Base de conhecimento]** Otimizada a saída da compilação para reduzir o tamanho do pacote do plugin-ai-knowledge-base. por @cgyrock

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido um problema em que o uso de "Criação Rápida" do seletor de registros de associação no formulário de edição sobrescrevia os dados existentes do formulário. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) por @gchust

  - Corrigidos problemas de espaço vazio no layout Grid ([#8535](https://github.com/nocobase/nocobase/pull/8535)) por @zhangzhonghe

  - Corrigida a necessidade de atualizar a página para adicionar registro filho após ativar a tabela em árvore ([#8574](https://github.com/nocobase/nocobase/pull/8574)) por @katherinehhh

  - Corrigida a largura da coluna não sendo atualizada na subtabela (edição inline); entrada de texto multilinha não redimensionando com a largura da coluna ([#8573](https://github.com/nocobase/nocobase/pull/8573)) por @katherinehhh

  - Corrigido um problema em que o menu "Formulário (Adicionar novo)" era exibido incorretamente no popup de ação "Criar novo". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) por @gchust

- **[mecanismo de fluxo]**
  - Corrigido um problema em que algumas bibliotecas de terceiros não podiam ser importadas corretamente em blocos JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) por @gchust

  - Corrigido um problema em que o envio do formulário após alternar páginas não atualizava a página. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) por @gchust

- **[Modelos de UI]** Corrigido erro ao reabrir e enviar um modelo de popup salvo para o formulário "Adicionar novo" do campo de associação. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) por @gchust

- **[Campo de coleção: Anexo(URL)]** Corrigida a configuração de exibição do nome do arquivo do campo de URL de anexo não funcionando no formulário de edição ([#8571](https://github.com/nocobase/nocobase/pull/8571)) por @katherinehhh

- **[Funcionários de IA]** Corrigido um problema em que o nó LLM falhava ao enviar mensagens ([#8569](https://github.com/nocobase/nocobase/pull/8569)) por @2013xile

- **[Ação: Importar registros]** Corrigida a vulnerabilidade da ação de importação ([#8544](https://github.com/nocobase/nocobase/pull/8544)) por @mytharcher

- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigido o problema em que os parâmetros e o payload estavam incorretos ao acionar fluxo de trabalho personalizado por @mytharcher

- **[Multi-espaço]**
  - adicionado script de migração para remover x-ready-pretty no campo de espaço por @jiannx

  - removido o atributo read-pretty para o campo de espaço por @jiannx

- **[Fluxo de trabalho: Aprovação]** Corrigido problema de desempenho causado pelo campo JSON na listagem de carregamento (MySQL) por @mytharcher
