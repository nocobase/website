---
title: "NocoBase v2.0.27: Adicionar variável para o parâmetro de tamanho da página"
description: "Nota de lançamento da v2.0.27"
---

### 🚀 Melhorias

- **[Workflow]** Adicionar variável para o parâmetro de tamanho de página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher

- **[Workflow: Subfluxo]** Adicionar lógica defensiva para evitar travamentos do workflow quando ocorrer uma exceção por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Corrigida a exceção ao adicionar nós filhos à tabela em árvore na janela pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx

- **[server]** Evitar processar mensagens de sincronização após o aplicativo ser parado ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher

- **[Mecanismo de fluxo]** Remover evento legado copiado do repositório uiSchema para evitar erro lançado ao disparar ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher

- **[Autenticação]** corrigir acl para suportar parâmetros de filtragem de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx

- **[Gerenciador de e-mail]** Corrigida a assinatura sendo sobrescrita ao usar modelos por @jiannx
