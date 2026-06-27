---
title: "NocoBase v1.6.6: Unterstützung langer Textfelder als Titelfelder für Verknüpfungsfelder"
description: "Versionshinweise zu v1.6.6"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung langer Textfelder als Titelfelder für Assoziationsfelder ([#6495](https://github.com/nocobase/nocobase/pull/6495)) von @katherinehhh

- **[Workflow: Aggregationsknoten]** Unterstützung zur Konfiguration der Genauigkeit für Aggregationsergebnisse ([#6491](https://github.com/nocobase/nocobase/pull/6491)) von @mytharcher

### 🚀 Verbesserungen

- **[Dateispeicher: S3(Pro)]** Der Text 'Access URL Base' wurde in 'Base URL' geändert von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Evaluatoren]** Dezimalstellen auf 9 zurückgesetzt ([#6492](https://github.com/nocobase/nocobase/pull/6492)) von @mytharcher

- **[Dateimanager]** URL kodieren ([#6497](https://github.com/nocobase/nocobase/pull/6497)) von @chenos

- **[Datenquelle: Haupt]** MySQL-Ansicht kann nicht erstellt werden. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) von @aaaaaajie

- **[Workflow]** Korrektur der Anzahl veralteter Aufgaben nach Löschung des Workflows ([#6493](https://github.com/nocobase/nocobase/pull/6493)) von @mytharcher

- **[NocoBase einbetten]** Seite zeigt leeren Inhalt von @zhangzhonghe

- **[Backup-Manager]**
  - Hochgeladene Dateien wurden beim Erstellen einer Sub-App aus einer Backup-Vorlage nicht wiederhergestellt von @gchust

  - Fehler bei der MySQL-Datenbankwiederherstellung aufgrund von GTID-Set-Überschneidungen von @gchust

- **[Workflow: Genehmigung]**
  - Zurückgegebene Genehmigung als „zu erledigen“ geändert von @mytharcher

  - Fehlender Aktionsbutton in der Prozesstabelle behoben von @mytharcher
