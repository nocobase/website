---
title: "NocoBase v1.9.0-beta.14: Variable `approvalId` für die Verwendung in Genehmigungs-Triggern verfügbar gemacht"
description: "Versionshinweise zu v1.9.0-beta.14"
---

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Die Variable `approvalId` kann nun in Genehmigungs-Triggern verwendet werden – von @mytharcher

### 🚀 Verbesserungen

- **[Server]** Optimierung der Methode zum Laden von l10n-Ressourcen, um eine Blockierung der Ereignisschleife zu verhindern ([#7653](https://github.com/nocobase/nocobase/pull/7653)) – von @2013xile

- **[Cache]** Vermeidung von Leistungseinbußen durch das Klonen von Bloom-Filtern ([#7652](https://github.com/nocobase/nocobase/pull/7652)) – von @2013xile

- **[Aktion: Datensätze importieren]** Verbesserte Fehlermeldungen, wenn Tabellenüberschriften fehlen ([#7656](https://github.com/nocobase/nocobase/pull/7656)) – von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Verhindert das Umbrechen von Wörtern in FormItem-Beschriftungen ([#7647](https://github.com/nocobase/nocobase/pull/7647)) – von @katherinehhh

- **[Workflow]** Behebt einen Logger-Fehler, der beim Stoppen der Anwendung auftritt ([#7639](https://github.com/nocobase/nocobase/pull/7639)) – von @mytharcher

- **[Workflow: Genehmigung]**
  - Behebt das Transaktions-Timeout-Problem, das dadurch verursacht wird, dass Transaktionen bei Datenbankfehlern nach dem Absenden der Genehmigung nicht ordnungsgemäß zurückgesetzt werden – von @mytharcher

  - Behebt das Problem, dass die Aufgabenanzahl nach dem Hinzufügen eines Bearbeiters nicht aktualisiert wird – von @mytharcher

  - Behebt das Problem, dass Variablen im Genehmigungs-Absendeformular nicht analysiert werden – von @mytharcher

- **[E-Mail-Manager]** Abfangen von Synchronisationsfehlern – von @jiannx
