---
title: "NocoBase v1.8.31: Correções de Bugs"
description: "Nota de Lançamento da v1.8.31"
---

### 🐛 Correções de Bugs

- **[database]** Corrige erro lançado quando o operador `$in` encontra valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher

- **[Workflow: Aprovação]**
  - Corrige o problema de timeout de transação causado por transações que não são revertidas corretamente quando ocorrem erros no banco de dados após o envio da aprovação por @mytharcher

  - Corrige o problema em que variáveis não são analisadas no formulário de envio de aprovação por @mytharcher
