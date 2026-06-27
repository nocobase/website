---
title: "NocoBase v1.4.20: Permite ordenar fluxos de trabalho ao vincular ao botão de ação"
description: "Nota de lançamento da v1.4.20"
---

### 🎉 Novas Funcionalidades

- **[client]** Adicionar método app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) por @chenos

### 🚀 Melhorias

- **[client]**
  - Permitir ordenar workflows ao vincular a botão de ação ([#6017](https://github.com/nocobase/nocobase/pull/6017)) por @mytharcher

  - Alterar links de referência dos avaliadores para o site de documentação ([#6021](https://github.com/nocobase/nocobase/pull/6021)) por @mytharcher

  - Suporte a maxTagCount: 'responsive' no componente de dropdown de seleção múltipla ([#6007](https://github.com/nocobase/nocobase/pull/6007)) por @katherinehhh

  - Definir horário final padrão para o componente de escopo de tempo no bloco de filtro como 23:59:59 ([#6012](https://github.com/nocobase/nocobase/pull/6012)) por @katherinehhh

- **[Ação: Edição em lote]** Refatorar botão de envio do formulário de edição em massa: remover atribuição de campo e regra de vínculo ([#6008](https://github.com/nocobase/nocobase/pull/6008)) por @katherinehhh

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir validação obrigatória não funcionando após excluir dados no editor de rich text ([#6006](https://github.com/nocobase/nocobase/pull/6006)) por @katherinehhh

  - Corrigir problema de desalinhamento quando botões da coluna de ação estão ocultos ([#6014](https://github.com/nocobase/nocobase/pull/6014)) por @katherinehhh

  - Corrigir problema no botão Criar Coleções ao clicar na aba Coleções na página de API REST ([#5992](https://github.com/nocobase/nocobase/pull/5992)) por @katherinehhh

  - Corrigir problema onde targetKey não conseguia selecionar campo NanoID em relacionamento um-para-muitos ([#5999](https://github.com/nocobase/nocobase/pull/5999)) por @katherinehhh

  - Corrigir estilo do botão de configuração no tema compacto ([#6001](https://github.com/nocobase/nocobase/pull/6001)) por @katherinehhh

  - Corrigir estilo do componente de lista ([#5998](https://github.com/nocobase/nocobase/pull/5998)) por @mytharcher

  - Corrigido o problema onde cabeçalhos incluídos em requisições do cliente estavam sendo sobrescritos ([#6009](https://github.com/nocobase/nocobase/pull/6009)) por @2013xile

  - Corrigir foreignKey, targetKey e sourceKey para suportar filtragem por caracteres chineses ([#5997](https://github.com/nocobase/nocobase/pull/5997)) por @katherinehhh

- **[Ação: Importar registros]** corrigir importação com associações muitos-para-muitos que usam target key diferente ([#6024](https://github.com/nocobase/nocobase/pull/6024)) por @chareice

- **[Bloco: Mapa]** Corrigir campo de mapa no bloco de detalhes para renderizar como bloco de mapa ([#6010](https://github.com/nocobase/nocobase/pull/6010)) por @katherinehhh

- **[Incorporar NocoBase]** O token para incorporação entra em conflito com autenticação por @chenos
