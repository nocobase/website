---
title: "NocoBase v2.0.0-alpha.21: Fehlerbehebungen"
description: "Versionshinweise zu v2.0.0-alpha.21"
---

### 🚀 Verbesserungen

- **[Cache]** Vermeidung von Leistungseinbußen durch das Klonen von Bloom-Filtern ([#7652](https://github.com/nocobase/nocobase/pull/7652)) von @2013xile

- **[Server]** Optimierung der Methode zum Laden von l10n-Ressourcen, um eine Blockierung der Ereignisschleife zu verhindern ([#7653](https://github.com/nocobase/nocobase/pull/7653)) von @2013xile

- **[Aktion: Datensätze importieren]** Verbesserte Fehlermeldungen bei fehlenden Tabellenüberschriften ([#7656](https://github.com/nocobase/nocobase/pull/7656)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Verhindert das Umbrechen von Label-Wörtern im FormItem-Label ([#7647](https://github.com/nocobase/nocobase/pull/7647)) von @katherinehhh

- **[Datenvisualisierung]** Behebt ein SQL-Abfrageproblem beim Parsen von Variablen ([#7642](https://github.com/nocobase/nocobase/pull/7642)) von @heziqiang

- **[Workflow]** Behebt einen Logger-Fehler, der beim Stoppen der Anwendung auftritt ([#7639](https://github.com/nocobase/nocobase/pull/7639)) von @mytharcher
