---
title: "NocoBase v1.4.30: Fehlerbehebungen"
description: "Versionshinweise zu v1.4.30"
---

### 🐛 Fehlerbehebungen

- **[Client]** Behebt ein Problem mit der Anzeige von „N/A“ für Assoziationsfelder in Tabellen ([#6109](https://github.com/nocobase/nocobase/pull/6109)) von @zhangzhonghe

- **[Collection: Baum]** Verhindert, dass ein Knoten einer Baumstruktur als sein eigener Elternknoten festgelegt wird ([#6122](https://github.com/nocobase/nocobase/pull/6122)) von @2013xile

- **[Workflow: HTTP-Anfrageknoten]** Behebt, dass der Anfrageknoten in einer Schleife hängen bleibt ([#6120](https://github.com/nocobase/nocobase/pull/6120)) von @mytharcher

- **[Workflow: Testkit]** Behebt, dass Testfälle mit Mock-Datenquellen von ACL abhängen ([#6116](https://github.com/nocobase/nocobase/pull/6116)) von @mytharcher

- **[Backup-Manager]** Behebt ein Problem, bei dem einige Sicherungsdateien nicht korrekt extrahiert und wiederhergestellt werden konnten von @gchust
