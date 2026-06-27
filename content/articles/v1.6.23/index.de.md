---
title: "NocoBase v1.6.23: Optimierung der internen Logik des `nocobase upgrade`-Befehls"
description: "Versionshinweise zu v1.6.23"
---

### 🚀 Verbesserungen

- **[cli]** Optimierung der internen Logik des Befehls `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) von @chenos

- **[Vorlagendruck]** Ersetzte die Datenquellen-Aktionssteuerung durch eine clientrollenbasierte Zugriffskontrolle. von @sheldon66

### 🐛 Fehlerbehebungen

- **[cli]** Automatische Aktualisierung der package.json bei einem Upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) von @chenos

- **[client]**
  - Fehlender Filter für bereits verknüpfte Daten beim Hinzufügen von Verknüpfungsdaten ([#6750](https://github.com/nocobase/nocobase/pull/6750)) von @katherinehhh

  - Fehlende Regel 'aktueller Datensatz' für die Verknüpfung des Schalters 'Unterelement hinzufügen' in der Baumtabelle ([#6752](https://github.com/nocobase/nocobase/pull/6752)) von @katherinehhh

- **[Aktion: Datensätze importieren]** Behebung der Import- und Exportausnahmen, die beim Setzen von Feldberechtigungen auftreten. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) von @aaaaaajie

- **[Block: Gantt]** Überlappende Monate in der Kalenderkopfzeile der Monatsansicht im Gantt-Diagramm-Block ([#6753](https://github.com/nocobase/nocobase/pull/6753)) von @katherinehhh

- **[Aktion: Datensätze exportieren Pro]**
  - Der Pro-Export-Button verliert Filterparameter nach dem Sortieren einer Tabellenspalte von @katherinehhh

  - Behebung der Import- und Exportausnahmen, die beim Setzen von Feldberechtigungen auftreten. von @aaaaaajie

- **[Dateispeicher: S3(Pro)]** Behebung der Antwortdaten der hochgeladenen Datei von @mytharcher

- **[Workflow: Genehmigung]** Behebung des Vorladens von Verknüpfungsfeldern für Datensätze von @mytharcher
