---
title: "NocoBase v2.0.0-alpha.14: KI-Codierungsoptimierung"
description: "Versionshinweise zu v2.0.0-alpha.14"
---

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]** Optimierung der KI-Codierung ([#7614](https://github.com/nocobase/nocobase/pull/7614)) von @cgyrock

- **[Datenquelle: Haupt]** Überarbeitung der Lokalisierungslogik für Fehlermeldungen und Behandlung innerhalb des Fehlerbehandlungs-Plugins ([#7582](https://github.com/nocobase/nocobase/pull/7582)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Datenbank]**
  - Setzen des `search_path` vor der Ausführung von SQL-Anweisungen mit der `runSQL`-Methode ([#7611](https://github.com/nocobase/nocobase/pull/7611)) von @2013xile

  - Behebung eines Fehlers, der beim Zusammentreffen des Operators `$in` mit einem `null`-Wert ausgelöst wurde ([#7610](https://github.com/nocobase/nocobase/pull/7610)) von @mytharcher

- **[Client]** Behebung des Problems, dass Tab-Symbol-Pop-ups verdeckt werden ([#7607](https://github.com/nocobase/nocobase/pull/7607)) von @zhangzhonghe

- **[Workflow: Genehmigung]** Behebung des Problems, dass Variablen im Genehmigungs-Absendeformular nicht analysiert werden von @mytharcher
