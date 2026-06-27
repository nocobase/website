---
title: "NocoBase v1.7.0-beta.6: Unterstützung zur Konfiguration der Genauigkeit von Aggregationsergebnissen"
description: "Versionshinweise zu v1.7.0-beta.6"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für lange Textfelder als Titel-Felder für Assoziationsfelder ([#6495](https://github.com/nocobase/nocobase/pull/6495)) von @katherinehhh

- **[Workflow: Aggregationsknoten]** Unterstützung zur Konfiguration der Genauigkeit für Aggregationsergebnisse ([#6491](https://github.com/nocobase/nocobase/pull/6491)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Evaluatoren]** Dezimalstellen auf 9 zurückgesetzt ([#6492](https://github.com/nocobase/nocobase/pull/6492)) von @mytharcher

- **[Workflow]** Korrektur der Anzahl veralteter Aufgaben nach Löschung eines Workflows ([#6493](https://github.com/nocobase/nocobase/pull/6493)) von @mytharcher

- **[Datenquelle: Haupt]** MySQL-Ansicht kann nicht erstellt werden. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) von @aaaaaajie

- **[Dateimanager]** URL kodieren ([#6497](https://github.com/nocobase/nocobase/pull/6497)) von @chenos

- **[Backup-Manager]**
  - Fehler bei der Wiederherstellung der MySQL-Datenbank aufgrund von GTID-Set-Überschneidungen von @gchust

  - Hochgeladene Dateien wurden bei der Erstellung einer Unter-App aus einer Backup-Vorlage nicht wiederhergestellt von @gchust

- **[Workflow: Genehmigung]**
  - Fehlender Aktionsbutton in der Prozesstabelle behoben von @mytharcher

  - Rückgabe der Genehmigung als „zu erledigen“ geändert von @mytharcher
