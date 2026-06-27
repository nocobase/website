---
title: "NocoBase v2.0.0-beta.23: suporte a altura configurável de blocos"
description: "Nota de lançamento da v2.0.0-beta.23"
---

### 🎉 Novas Funcionalidades

- **[Bloco: GridCard]** suporte para altura configurável do bloco ([#8583](https://github.com/nocobase/nocobase/pull/8583)) por @katherinehhh

- **[Ação: Edição em lote]** edição em massa 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) por @jiannx

### 🚀 Melhorias

- **[cliente]**
  - Tabela 2.0 suporta ordenação por arrastar e soltar ([#8540](https://github.com/nocobase/nocobase/pull/8540)) por @jiannx

  - Mover a atribuição de campos e as configurações de valor padrão para o nível de configuração do formulário. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) por @chenos

- **[Localização]** criar automaticamente chaves i18n ausentes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) por @jiannx

### 🐛 Correções de Bugs

- **[cliente]**
  - corrigir dados filtrados incorretos no dropdown de associação quando o campo de título é uma chave estrangeira ([#8619](https://github.com/nocobase/nocobase/pull/8619)) por @katherinehhh

  - Corrigir problema em que o campo de anexo de associação limpo não é salvo após o envio no formulário de edição ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh

  - Corrigir opções de componente de campo não atualizadas em tempo real quando o campo de associação alterna o padrão ([#8611](https://github.com/nocobase/nocobase/pull/8611)) por @katherinehhh

  - Corrigir um problema em que as colunas da tabela não eram renderizadas novamente após clicar em Executar no editor de colunas JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) por @gchust

  - corrigir incapacidade de restaurar dados selecionados no componente de campo seletor de registro após edição ([#8610](https://github.com/nocobase/nocobase/pull/8610)) por @katherinehhh

- **[Gerenciador de arquivos]** corrigir problema em que o componente de campo de arquivo ainda pode abrir a caixa de diálogo do seletor quando desabilitado ([#8617](https://github.com/nocobase/nocobase/pull/8617)) por @katherinehhh

- **[Visualização de dados: ECharts]** Corrigir erro de ortografia do ECharts por @heziqiang

- **[Fluxo de trabalho: Aprovação]**
  - Corrigir o problema em que valores estavam ausentes no popup de detalhes de "Minha solicitação" por @mytharcher

  - Corrigir erro lançado ao executar no modo antes de salvar por @mytharcher
