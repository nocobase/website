---
title: "NocoBase v1.8.0-beta.10: Genehmigungsdatensatz-Variable zum Knotenergebnis hinzugefügt"
description: "Versionshinweise zu v1.8.0-beta.10"
---

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Variable für Genehmigungsdatensätze zum Knotenergebnis hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Textausrichtung in Tabellenspalten funktioniert nicht ([#7094](https://github.com/nocobase/nocobase/pull/7094)) von @zhangzhonghe

  - Feldwerte zuweisen: Daten für Beziehungsfelder können nicht gelöscht werden ([#7086](https://github.com/nocobase/nocobase/pull/7086)) von @zhangzhonghe

  - Unabhängigen Variablenbereich für jedes Feld verwenden ([#7012](https://github.com/nocobase/nocobase/pull/7012)) von @mytharcher

- **[Dateimanager]** Problem behoben, bei dem Anhänge-Felder im Genehmigungsprozess nicht aktualisiert werden konnten ([#7093](https://github.com/nocobase/nocobase/pull/7093)) von @mytharcher

- **[Workflow]** Problem mit falsch ausgeführter Prüfung bei großen Ganzzahlen behoben ([#7091](https://github.com/nocobase/nocobase/pull/7091)) von @mytharcher

- **[Workflow: Genehmigung]** Vergleich anstelle impliziter Logik verwendet, um Typ-Probleme zu vermeiden von @mytharcher
