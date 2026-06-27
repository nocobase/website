---
title: "NocoBase v1.8.7: Unterstützung für Testlauf von Knoten"
description: "Versionshinweise zu v1.8.7"
---

### 🎉 Neue Funktionen

- **[Workflow: Datumsberechnungsknoten]** Unterstützung für Testausführung des Knotens von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Farbauswahl: Vier empfohlene Farben hinzugefügt ([#7226](https://github.com/nocobase/nocobase/pull/7226)) von @zhangzhonghe

- **[Workflow]** Vergleich für Datumswerte kompatibel gemacht ([#7237](https://github.com/nocobase/nocobase/pull/7237)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Stilregeln funktionieren nicht in der Aktionsspalte von Tabellen ([#7225](https://github.com/nocobase/nocobase/pull/7225)) von @katherinehhh

  - Beim Löschen eines Menüs werden die entsprechenden Daten in der uiSchemas-Tabelle nicht gelöscht ([#7232](https://github.com/nocobase/nocobase/pull/7232)) von @zhangzhonghe

  - Vermeidung der Auswahl von Nicht-Assoziationsfeldern in Anhängen ([#7231](https://github.com/nocobase/nocobase/pull/7231)) von @mytharcher

- **[Workflow: Unterworkflow]** Fehler behoben, der auftritt, wenn ein Rückrufsignal eintrifft, die ausstehende Ausführung jedoch nicht auf der aktuellen Instanz erfolgt, von @mytharcher
