---
title: "NocoBase v1.7.0-alpha.12: Abhängigkeiten aktualisiert und SQLite-Unterstützung entfernt"
description: "Versionshinweise zu v1.7.0-alpha.12"
---

### 🚀 Verbesserungen

- **[cli]** Optimierung der internen Logik des Befehls `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) von @chenos

- **[create-nocobase-app]** Aktualisierung der Abhängigkeiten und Entfernung der SQLite-Unterstützung ([#6708](https://github.com/nocobase/nocobase/pull/6708)) von @chenos

- **[Mobile]** Optimierung der Öffnungsgeschwindigkeit des mobilen Datumsauswahl-Popups ([#6735](https://github.com/nocobase/nocobase/pull/6735)) von @zhangzhonghe

- **[Block: Vorlage]** Unterstützung für die Umwandlung eines Vorlagenblocks in einen normalen Block ([#6662](https://github.com/nocobase/nocobase/pull/6662)) von @gchust

- **[Dateimanager]** Bereitstellung der utils API ([#6705](https://github.com/nocobase/nocobase/pull/6705)) von @mytharcher

- **[Theme-Editor]** Ermöglicht das Festlegen der Seitenleistenbreite in der Theme-Konfiguration ([#6720](https://github.com/nocobase/nocobase/pull/6720)) von @chenos

- **[Workflow]** Hinzufügen von Datumstypen zum Satz der Variablentypen ([#6717](https://github.com/nocobase/nocobase/pull/6717)) von @mytharcher

- **[Vorlagendruck]** Ersetzte die Datenquellen-Aktionssteuerung durch eine clientseitige, rollenbasierte Zugriffskontrolle. von @sheldon66

### 🐛 Fehlerbehebungen

- **[client]**
  - Anzeigeproblem mit Verknüpfungsregeln in mehrstufigen Assoziationsdaten ([#6755](https://github.com/nocobase/nocobase/pull/6755)) von @katherinehhh

  - Fehlender 'aktueller Datensatz' in der Verknüpfungsregel der Schaltfläche 'Unterelement hinzufügen' in der Baumtabelle ([#6752](https://github.com/nocobase/nocobase/pull/6752)) von @katherinehhh

  - Problem beim Aktualisieren von Datenblöcken nach erfolgreicher Übermittlung ([#6748](https://github.com/nocobase/nocobase/pull/6748)) von @zhangzhonghe

  - Das Problem, dass die Einklappschaltfläche im linken Menü durch das Workflow-Popup-Fenster verdeckt wird ([#6733](https://github.com/nocobase/nocobase/pull/6733)) von @zhangzhonghe

  - Das Problem, dass Symbole in der mobilen oberen Navigationsleiste schwer zu löschen sind ([#6734](https://github.com/nocobase/nocobase/pull/6734)) von @zhangzhonghe

  - Falsche Wertanzeige für "Indexspalte aktivieren" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) von @katherinehhh

  - Datums-/Uhrzeitfeld-Bedingung funktioniert nicht in Verknüpfungsregeln ([#6728](https://github.com/nocobase/nocobase/pull/6728)) von @katherinehhh

  - Fehlende Aktionsoptionseinschränkungen beim erneuten Öffnen von Verknüpfungsregeln ([#6723](https://github.com/nocobase/nocobase/pull/6723)) von @katherinehhh

  - Pflichtfelder, die durch Verknüpfungsregeln ausgeblendet werden, sollten die Formularübermittlung nicht beeinträchtigen ([#6709](https://github.com/nocobase/nocobase/pull/6709)) von @zhangzhonghe

  - Fehlender Filter für bereits assoziierte Daten beim Hinzufügen von Assoziationsdaten ([#6750](https://github.com/nocobase/nocobase/pull/6750)) von @katherinehhh

- **[server]** appVersion wird von create-migration falsch generiert ([#6740](https://github.com/nocobase/nocobase/pull/6740)) von @chenos

- **[cli]** Automatische Aktualisierung von package.json bei Upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) von @chenos

- **[build]** Behebung eines Fehlers im tar-Befehl ([#6722](https://github.com/nocobase/nocobase/pull/6722)) von @mytharcher

- **[Block: Gantt]** Gantt-Diagrammblock überlappt Monate in der Kalenderkopfzeile der Monatsansicht ([#6753](https://github.com/nocobase/nocobase/pull/6753)) von @katherinehhh

- **[Aktion: Datensätze importieren]** Behebung der Import- und Exportausnahmen, die beim Setzen von Feldberechtigungen auftreten. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) von @aaaaaajie

- **[Block: Vorlage]** Blockvorlagen können in MySQL-Umgebungen nicht verwendet werden ([#6726](https://github.com/nocobase/nocobase/pull/6726)) von @gchust

- **[Workflow]** Behebung eines Fehlers bei der Ausführung eines Zeitplanereignisses in einem Unterworkflow ([#6721](https://github.com/nocobase/nocobase/pull/6721)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Unterstützung für die Ausführung im Mehrfachdatensatzmodus von @mytharcher

- **[Aktion: Datensätze exportieren Pro]**
  - Behebung der Import- und Exportausnahmen, die beim Setzen von Feldberechtigungen auftreten. von @aaaaaajie

  - Pro-Export-Schaltfläche verliert Filterparameter nach dem Sortieren der Tabellenspalte von @katherinehhh

- **[Dateispeicher: S3(Pro)]**
  - Behebung der Antwortdaten der hochgeladenen Datei von @mytharcher

  - Hinzufügen der multer-Erstellungslogik für serverseitiges Hochladen von @mytharcher

- **[Workflow: Genehmigung]** Behebung des Vorladens von Assoziationsfeldern für Datensätze von @mytharcher
