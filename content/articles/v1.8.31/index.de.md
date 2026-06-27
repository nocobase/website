---
title: "NocoBase v1.8.31: Fehlerbehebungen"
description: "Versionshinweise zu v1.8.31"
---

### 🐛 Fehlerbehebungen

- **[Datenbank]** Fehler behoben, der ausgelöst wurde, wenn der Operator `$in` auf einen `null`-Wert trifft ([#7610](https://github.com/nocobase/nocobase/pull/7610)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Behebung des Transaktions-Timeout-Problems, das durch nicht ordnungsgemäß zurückgesetzte Transaktionen bei Datenbankfehlern nach dem Absenden einer Genehmigung verursacht wurde, von @mytharcher

  - Behebung des Problems, dass Variablen im Genehmigungs-Absendeformular nicht analysiert werden, von @mytharcher
