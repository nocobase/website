---
title: "NocoBase v1.8.16: Correções de Bugs"
description: "Nota de Lançamento da v1.8.16"
---

### 🚀 Melhorias

- **[Notificação: Mensagem no aplicativo]** Remover logs SQL emitidos via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile

### 🐛 Correções de Bugs

- **[Servidor]** Algumas requisições não possuem `ctx.action`, causando erros no middleware de log de auditoria ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile

- **[Campo de coleção: Fórmula]** Corrigido o problema em que a entrada da fórmula não passava na validação devido ao tipo da variável ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher

- **[Gerenciador de backups]** Backups de arquivos grandes podiam exibir "bem-sucedido" antes de realmente finalizar por @gchust
