---
title: "NocoBase v1.9.47: Correção de problema de segurança no mecanismo de avaliação `formula.js`"
description: "Nota de lançamento da v1.9.47"
---

### 🐛 Correções de Bugs

- **[client]** Corrigido problema em que o campo de anexo de associação limpo não era salvo após o envio no formulário de edição ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh

- **[utils]** Corrigida vulnerabilidade de segurança do mecanismo avaliador `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher

- **[Workflow: Approval]** Corrigido problema em que os dados de aprovação não eram exibidos no popup de detalhes do registro quando o modo de fluxo de trabalho estava configurado como "Antes de salvar" por @mytharcher
