---
title: "NocoBase v2.0.58: Administrator-API hinzugefügt, um gestartete Workflow-Ausführungen vom Anfang oder einem bestimmten Knoten erneut auszuführen"
description: "Versionshinweise zu v2.0.58"
---

### 🎉 Neue Funktionen

- **[Workflow]** Administrator-API hinzugefügt, um gestartete Workflow-Ausführungen vom Anfang oder einem bestimmten Knoten erneut auszuführen. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Die Option "Ausgeblendet" aus den Menüpunkt-Einstellungen entfernt ([#9595](https://github.com/nocobase/nocobase/pull/9595)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**
  - Synchronisierung des Popup-Werts der mobilen Datumsauswahl behoben ([#9582](https://github.com/nocobase/nocobase/pull/9582)) von @katherinehhh

  - Beibehaltung des Zeitformats für v2-Zeitfelder behoben ([#9579](https://github.com/nocobase/nocobase/pull/9579)) von @katherinehhh

  - Upload-Limit für Scan-Eingabebilder erhöht ([#9580](https://github.com/nocobase/nocobase/pull/9580)) von @katherinehhh

  - Synchronisierung des ausgeblendeten Zustands für Unterformular-Verknüpfungen behoben ([#9594](https://github.com/nocobase/nocobase/pull/9594)) von @katherinehhh

  - Problem behoben, bei dem in einer Untertabelle innerhalb eines Unterformulars keine zweite Zeile hinzugefügt werden konnte ([#9586](https://github.com/nocobase/nocobase/pull/9586)) von @katherinehhh

  - Verschwinden von Seiten-Tabs nach dem Wechseln von Menüs behoben ([#9583](https://github.com/nocobase/nocobase/pull/9583)) von @zhangzhonghe

- **[Flow-Engine]** Problem behoben, bei dem Tabellen-Aktionsverknüpfungsregeln nach erfolgreichem Absenden eines Formulars in einem Popup falsch ausgeführt wurden. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) von @gchust

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem behoben, bei dem benutzerdefinierte Aktions-Tabellenschaltflächen mit mehreren Datensätzen im Kontext fälschlicherweise die Auswahl benutzerdefinierter Kontext-Workflows ermöglichten. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) von @mytharcher

- **[Dateimanager]**
  - Unicode-Dateinamen-Normalisierung beim Dateiupload behoben, um die Erstellung von Objektschlüsseln mit Steuerzeichen zu vermeiden. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) von @mytharcher

  - Verbesserte PDF-Vorschau-Fehlermeldungen und dokumentierte CORS-Anforderungen für externen Speicher. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) von @mytharcher
Referenz: [Dateivorschau](docs/docs/en/file-manager/file-preview/index.md)
