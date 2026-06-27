---
title: "NocoBase v1.5.4: Adicionar carregamento à ação de duplicação"
description: "Nota de lançamento da v1.5.4"
---

### 🚀 Melhorias

- **[Workflow]** Adicionar carregamento à ação de duplicação ([#6179](https://github.com/nocobase/nocobase/pull/6179)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir erro lançado nas configurações de campo do nó de criação ([#6187](https://github.com/nocobase/nocobase/pull/6187)) por @mytharcher

  - A opção de configuração 'Permitir Seleção Múltipla' para campos de associação não é exibida em Formulários de Filtro ([#6174](https://github.com/nocobase/nocobase/pull/6174)) por @zhangzhonghe

  - Campo permanece oculto após ser ocultado por regras de vinculação ([#6182](https://github.com/nocobase/nocobase/pull/6182)) por @zhangzhonghe

- **[utils]** otimizar a lógica de leitura de armazenamento/plugins ([#6186](https://github.com/nocobase/nocobase/pull/6186)) por @chenos

- **[Notificação: Mensagem no aplicativo]** Correção: Adicionar filtro de usuário às subconsultas de timestamp e título da mensagem na API de lista de canais para garantir isolamento de dados. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) por @deepure

- **[Gerenciador de backup]** Arquivos não foram copiados do backup para a pasta de uploads durante a restauração em modo tolerante por @gchust
