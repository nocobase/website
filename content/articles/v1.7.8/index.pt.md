---
title: "NocoBase v1.7.8: Adicionar variável de ambiente para controlar o método de saída do log de auditoria"
description: "Nota de lançamento da v1.7.8"
---

### 🎉 Novas Funcionalidades

- **[Registros de auditoria]** Adicionada a variável de ambiente `AUDIT_LOGGER_TRANSPORT` para controlar o método de saída do log de auditoria por @2013xile

### 🚀 Melhorias

- **[Calendário]** Suporte para definir o dia de início da semana no bloco de calendário ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh

- **[Campo de coleção: Muitos para muitos (array)]** Erros relacionados a permissão ao exibir campos muitos-para-muitos (muitos) em tabelas de dados. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie

### 🐛 Correções de Bugs

- **[cliente]**
  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh

  - Opções de campo de seleção não funcionando nas regras de vinculação do formulário de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh

  - Regras de validação do formulário de filtro fazendo com que o botão de filtro se torne ineficaz ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe

  - Corrigido problema de campos não exibidos em modelos de bloco causado por requisições de API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe

- **[Ação: Importar registros]** Corrigida falha na importação de tabelas filhas quando campos relacionais estão envolvidos ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie

- **[Visualização de dados]** Campos de grupo de caixas de seleção em gráficos devem exibir rótulos em vez de valores brutos ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile

- **[Fluxo de trabalho]** Corrigido erro lançado na ação de execução manual quando o gatilho não está configurado corretamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Para evitar erro de campo indefinido por @mytharcher

  - Corrigido erro de API ao atualizar a página de detalhes por @mytharcher

- **[WeCom]** Adicionada verificação para o caminho de callback no middleware do gateway por @2013xile
