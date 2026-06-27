---
title: "NocoBase v2.0.0-alpha.53: Unterstützung der Zahlenformatierung für Prozentfelder"
description: "Versionshinweise zu v2.0.0-alpha.53"
---

### 🚀 Verbesserungen

- **[acl]** Unterstützung der `acl.registerSnippet`-API zum Zusammenführen von Snippet-Konfigurationen ([#8155](https://github.com/nocobase/nocobase/pull/8155)) von @mytharcher

- **[client]** Unterstützung der Zahlenformatierung für Prozentfelder ([#8123](https://github.com/nocobase/nocobase/pull/8123)) von @katherinehhh

- **[flow-engine]** Unterstützung zum dynamischen Ausblenden des Schrittkonfigurationsmenüs ([#7924](https://github.com/nocobase/nocobase/pull/7924)) von @gchust

- **[Block: GridCard]** Optimierung der Grid-Card-Block-Stile für ein kompakteres Layout ([#8152](https://github.com/nocobase/nocobase/pull/8152)) von @katherinehhh

- **[KI-Mitarbeiter]** Aktivierte Bearbeitungsfunktion für integrierte KI-Assistenten-System-Prompts.<br/>Optimierter System-Prompt für den Nathan-KI-Assistenten.<br/>Behobenes Problem, bei dem der Server statische Dateien nicht lesen konnte. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) von @heziqiang

- **[Workflow]**
  - Fehlertoleranzlogik für fehlende Daten bei der Prozessorvorbereitung hinzugefügt, um Ausführungsstopps zu vermeiden ([#8156](https://github.com/nocobase/nocobase/pull/8156)) von @mytharcher

  - Verwendung von Lazy Loading für Assoziationsdaten auf der Workflow-Leinwand zur Leistungsverbesserung ([#8142](https://github.com/nocobase/nocobase/pull/8142)) von @mytharcher

- **[Sammlungsfeld: Markdown(Vditor)]** Deaktivierung der Variablenanalyse im Markdown-Feld standardmäßig im readPretty-Modus ([#8145](https://github.com/nocobase/nocobase/pull/8145)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[flow-engine]** Korrektur des fehlerhaften Dateidownloads für Anhänge ([#8154](https://github.com/nocobase/nocobase/pull/8154)) von @katherinehhh

- **[client]**
  - Korrektur, dass das Dropdown-Menü für Assoziationsfelder deaktiviert wurde, wenn ein Optionsfeld existiert ([#8153](https://github.com/nocobase/nocobase/pull/8153)) von @katherinehhh

  - Behobenes Problem, bei dem die Eingabe von chinesischem Text vorhandene Optionen löschte, wenn Multi-Select-Operatoren auf einem Single-Select-Feld im Filterformularblock verwendet wurden. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) von @gchust

  - Behobenes Problem, bei dem das Wechseln von Bezeichnungsfeldern zu verlorenen Popup-Konfigurationen führte. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) von @gchust

- **[acl]** Korrektur des Problems, dass die API `acl.can` `null` zurückgibt, wenn die Rolle `root` ist ([#8150](https://github.com/nocobase/nocobase/pull/8150)) von @mytharcher

- **[database]** `filterByTk` unterstützt jetzt Arrays beim Abfragen von Sammlungen mit mehreren Filter-Zielschlüsseln ([#7986](https://github.com/nocobase/nocobase/pull/7986)) von @chenos

- **[Aktion: Datensätze importieren]** Synchrones Warten auf den Abschluss der durch den Import ausgelösten `afterCreate`-Ereignisse. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) von @2013xile

- **[Sammlungsfeld: Sequenz]** Verbesserung der Robustheit von plugin-field-sequence bei der Verarbeitung des Reparaturbefehls ([#8139](https://github.com/nocobase/nocobase/pull/8139)) von @cgyrock

- **[Workflow: Manueller Knoten]** Korrektur des Problems, dass die manuelle Aufgabenliste eine falsche API verwendet ([#8144](https://github.com/nocobase/nocobase/pull/8144)) von @mytharcher

- **[HTTP-Anfrageverschlüsselung]** Verwendung von Klammern für das Array-Format bei der qs-Analyse von @chenos

- **[Workflow: Genehmigung]** Korrektur des Problems, dass ein Fehler ausgelöst wird, wenn eine Ausführung abgebrochen wird, deren Workflow gelöscht wurde von @mytharcher

- **[Migrationsmanager]** Korrektur eines Problems, bei dem Zeilenumbrüche in Daten während der Migration verloren gingen. von @cgyrock
