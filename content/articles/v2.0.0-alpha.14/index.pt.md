---
title: "NocoBase v2.0.0-alpha.14: Otimização de codificação com IA"
description: "Nota de lançamento da v2.0.0-alpha.14"
---

### 🚀 Melhorias

- **[Funcionários de IA]** Otimização de codificação de IA ([#7614](https://github.com/nocobase/nocobase/pull/7614)) por @cgyrock

- **[Fonte de dados: Principal]** Refatoração da lógica de localização para mensagens de erro e tratamento dentro do plugin de manipulação de erros ([#7582](https://github.com/nocobase/nocobase/pull/7582)) por @2013xile

### 🐛 Correções de Bugs

- **[banco de dados]**
  - Definir o `search_path` antes de executar instruções SQL usando o método `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) por @2013xile

  - Corrigir erro lançado quando o operador `$in` encontra valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher

- **[cliente]** Corrigir o problema de pop-ups de ícones de guia sendo obscurecidos ([#7607](https://github.com/nocobase/nocobase/pull/7607)) por @zhangzhonghe

- **[Fluxo de Trabalho: Aprovação]** Corrigir o problema onde variáveis não são analisadas no formulário de envio de aprovação por @mytharcher
