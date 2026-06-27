---
title: "NocoBase v1.7.15: Fehlerbehebungen"
description: "Versionshinweise zu v1.7.15"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Verwendung eines unabhängigen Variablenbereichs für jedes Feld ([#7012](https://github.com/nocobase/nocobase/pull/7012)) von @mytharcher

  - Feldwerte zuweisen: Daten für Beziehungsfelder können nicht gelöscht werden ([#7086](https://github.com/nocobase/nocobase/pull/7086)) von @zhangzhonghe

  - Funktion zur Textausrichtung in Tabellenspalten funktioniert nicht ([#7094](https://github.com/nocobase/nocobase/pull/7094)) von @zhangzhonghe

- **[Workflow]** Fehlerhafte Ausführung der Prüfung bei großen Ganzzahlen behoben ([#7091](https://github.com/nocobase/nocobase/pull/7091)) von @mytharcher

- **[Dateimanager]** Behoben: Anhängefelder können im Genehmigungsprozess nicht aktualisiert werden ([#7093](https://github.com/nocobase/nocobase/pull/7093)) von @mytharcher

- **[Workflow: Genehmigung]** Verwendung von Vergleich anstelle von impliziter Logik zur Vermeidung von Typ-Problemen von @mytharcher
