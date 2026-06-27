---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Beim Erstellen einer Sammlung kann der voreingestellte ID-Feldtyp geändert werden und mehr."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit in drei Zweigen aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.27](https://www.nocobase.com/en/blog/v1.9.27)

*Veröffentlichungsdatum: 2025-12-17*

### 🚀 Verbesserungen

- **[Server]** Fehlertoleranz hinzugefügt, wenn fehlende App-Instanzen beim Abrufen von Wartungsnachrichten zu Fehlern führen ([#8196](https://github.com/nocobase/nocobase/pull/8196)) von @2013xile
- **[Fehlerbehandlung]** Rohdatenbank-Fehlermeldungen bei SQL-Syntaxfehlern nicht mehr anzeigen, um den Datenbanktyp nicht preiszugeben ([#8195](https://github.com/nocobase/nocobase/pull/8195)) von @2013xile
- **[Workflow]** Unterstützung für die Verwendung alter Konfigurationen zur Erstellung neuer in duplizierten Workflows ([#8165](https://github.com/nocobase/nocobase/pull/8165)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Workflow]** Problem behoben, bei dem nur ein Datensatz in der Datensatzliste für die manuelle Ausführung angezeigt wurde ([#8187](https://github.com/nocobase/nocobase/pull/8187)) von @mytharcher
- **[Sammlung: Verbindung zu Fremddaten (FDW)]** Trigger-Fehler beim Verbinden mit Tabellen mit Großbuchstaben behoben von @2013xile
- **[Workflow: Genehmigung]** Problem behoben, bei dem der Status nicht zusammenhängender Genehmigungsdatensätze durch eine Genehmigungsaktion fälschlicherweise auf `UNPROCESSED` geändert wurde von @mytharcher

### [v1.9.26](https://www.nocobase.com/en/blog/v1.9.26)

*Veröffentlichungsdatum: 2025-12-16*

### 🚀 Verbesserungen

- **[acl]** Unterstützung der `acl.registerSnippet`-API zum Zusammenführen von Snippet-Konfigurationen ([#8155](https://github.com/nocobase/nocobase/pull/8155)) von @mytharcher
- **[Zugriffskontrolle]** Zuweisung der Root-Rolle zu Benutzern nicht mehr erlauben ([#8180](https://github.com/nocobase/nocobase/pull/8180)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Lizenzeinstellungen]**

  - Plugin-Lizenz-TS-Build-Ausnahme behoben ([#8183](https://github.com/nocobase/nocobase/pull/8183)) von @jiannx
  - Lizenzoptimierung und Hinzufügen von Hinweistexten ([#7993](https://github.com/nocobase/nocobase/pull/7993)) von @jiannx
- **[Dateimanager]** Problem behoben, bei dem die Vorschau von `.txt`-Dateien auf OSS die falsche Zeichenkodierung verwendete ([#8161](https://github.com/nocobase/nocobase/pull/8161)) von @mytharcher
- **[Aktion: Datensätze importieren]** Synchrones Warten auf den Abschluss der durch den Import ausgelösten `afterCreate`-Ereignisse ([#8158](https://github.com/nocobase/nocobase/pull/8158)) von @2013xile
- **[Sammlung: Verbindung zu Fremddaten (FDW)]** Problem behoben, bei dem das Laden für Tabellen mit Großbuchstaben fehlschlug von @2013xile
- **[Datenquelle: Externer SQL Server]** Probleme behoben, bei denen die Optionen `encrypt` und `trustServerCertificate` nicht verfügbar waren von @2013xile

### [v1.9.25](https://www.nocobase.com/en/blog/v1.9.25)

*Veröffentlichungsdatum: 2025-12-12*

### 🚀 Verbesserungen

- **[Workflow]**
  - Fehlertoleranzlogik für fehlende Daten in der Prozessorvorbereitung hinzugefügt, um Ausführungsstopps zu vermeiden ([#8156](https://github.com/nocobase/nocobase/pull/8156)) von @mytharcher
  - Verwendung von Lazy Loading für Assoziationsdaten auf der Workflow-Leinwand zur Leistungsverbesserung ([#8142](https://github.com/nocobase/nocobase/pull/8142)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[acl]** Problem behoben, bei dem die API `acl.can` `null` zurückgab, wenn die Rolle `root` ist ([#8150](https://github.com/nocobase/nocobase/pull/8150)) von @mytharcher
- **[Workflow: Manueller Knoten]** Problem behoben, bei dem die manuelle Aufgabenliste eine falsche API verwendete ([#8144](https://github.com/nocobase/nocobase/pull/8144)) von @mytharcher
- **[HTTP-Anfrageverschlüsselung]** Verwendung von Klammern für das Array-Format in der qs-Parsing von @chenos
- **[Workflow: Genehmigung]** Problem behoben, bei dem ein Fehler beim Abbrechen einer Ausführung auftrat, wenn der zugehörige Workflow gelöscht wurde von @mytharcher
- **[Migrationsmanager]** Problem behoben, bei dem Zeilenumbrüche in Daten während der Migration verloren gingen von @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.55](https://www.nocobase.com/en/blog/v2.0.0-alpha.55)

*Veröffentlichungsdatum: 2025-12-17*

### 🚀 Verbesserungen

- **[Server]** Fehlertoleranz hinzugefügt, wenn fehlende App-Instanzen beim Abrufen von Wartungsnachrichten zu Fehlern führen ([#8196](https://github.com/nocobase/nocobase/pull/8196)) von @2013xile
- **[Block: Liste]** Link-Schaltfläche für Tabellen-, Listen- und Rasterkartenblöcke hinzugefügt ([#8194](https://github.com/nocobase/nocobase/pull/8194)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem die Auswahl von „Nein“ für einen Kontrollkästchenfilter dennoch den Filter „Ja“ anwendete ([#8170](https://github.com/nocobase/nocobase/pull/8170)) von @gchust
- **[Migrationsmanager]** Fehlende Migrationsbeschreibung behoben und aktuelle Zeit als Standard gesetzt von @cgyrock

### [v2.0.0-alpha.54](https://www.nocobase.com/en/blog/v2.0.0-alpha.54)

*Veröffentlichungsdatum: 2025-12-17*

### 🎉 Neue Funktionen

- **[Client]** Beim Erstellen einer Sammlung kann der Typ des voreingestellten ID-Feldes geändert werden ([#8129](https://github.com/nocobase/nocobase/pull/8129)) von @cgyrock

### 🚀 Verbesserungen

- **[Client]**

  - Tabellenspaltenbreite zur Verwendung auswählbarer Optionen geändert ([#8188](https://github.com/nocobase/nocobase/pull/8188)) von @katherinehhh
  - recordPicker-Stile mit maxTagCount verbessert ([#8175](https://github.com/nocobase/nocobase/pull/8175)) von @katherinehhh
  - Konfigurationsoptionen (Blöcke, Felder, Aktionen) optimiert ([#8141](https://github.com/nocobase/nocobase/pull/8141)) von @katherinehhh
- **[Fehlerbehandlung]** Rohdatenbank-Fehlermeldungen bei SQL-Syntaxfehlern nicht mehr anzeigen, um den Datenbanktyp nicht preiszugeben ([#8195](https://github.com/nocobase/nocobase/pull/8195)) von @2013xile
- **[Block: Karte]** Unterstützung für Textüberlauf mit Auslassungspunkten für Kartenfelder im Textanzeigemodus ([#8189](https://github.com/nocobase/nocobase/pull/8189)) von @katherinehhh
- **[Workflow]** Unterstützung für die Verwendung alter Konfigurationen zur Erstellung neuer in duplizierten Workflows ([#8165](https://github.com/nocobase/nocobase/pull/8165)) von @mytharcher
- **[Zugriffskontrolle]** Zuweisung der Root-Rolle zu Benutzern nicht mehr erlauben ([#8180](https://github.com/nocobase/nocobase/pull/8180)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, dass die Senden-Schaltfläche im Erstellungsformular nicht angezeigt wurde, wenn die Rolle über Erstellungsberechtigung verfügt ([#8190](https://github.com/nocobase/nocobase/pull/8190)) von @katherinehhh
  - Verhindert, dass vorhandene Untertabellen-/Unterformulardaten gelöscht werden, wenn ohne Auswahl von Elementen gesendet wird ([#8172](https://github.com/nocobase/nocobase/pull/8172)) von @katherinehhh
  - Verhindert, dass die Datenbereichseinstellung in der Erstellungsformularkonfiguration angezeigt wird ([#8176](https://github.com/nocobase/nocobase/pull/8176)) von @katherinehhh
  - Speichern des Tab-Ereignisflusses fehlgeschlagen ([#8168](https://github.com/nocobase/nocobase/pull/8168)) von @chenos
  - Zusätzlichen Abstand nach dem Ausblenden eines Tabs entfernt ([#8167](https://github.com/nocobase/nocobase/pull/8167)) von @chenos
  - Falsches Filtern ausgewählter Optionen in der Assoziationsdatensatzauswahl behoben ([#8151](https://github.com/nocobase/nocobase/pull/8151)) von @katherinehhh
  - Rendering-Problem des tableoid-Feldes im Formularblock behoben ([#8177](https://github.com/nocobase/nocobase/pull/8177)) von @katherinehhh
- **[Server]**

  - license-kit auf die neueste Version aktualisiert ([#8173](https://github.com/nocobase/nocobase/pull/8173)) von @jiannx
  - Unterstützung für Snowflake-ID-Felder (53-Bit) für externe Datenquellen ([#8185](https://github.com/nocobase/nocobase/pull/8185)) von @2013xile
- **[Block: Karte]** Falsche Kartenzoomstufe nach Menüwechsel behoben ([#8193](https://github.com/nocobase/nocobase/pull/8193)) von @katherinehhh
- **[Workflow]** Problem behoben, bei dem nur ein Datensatz in der Datensatzliste für die manuelle Ausführung angezeigt wurde ([#8187](https://github.com/nocobase/nocobase/pull/8187)) von @mytharcher
- **[Datenvisualisierung]** Problem mit der SQL-Modus-Auswahl externer Datenquellen behoben; <br/>Problem mit dem Ladezustand des Diagrammblocks während des Datenabrufs behoben; <br/> Problem mit dem leeren Diagrammblock beim Abbrechen der Konfiguration behoben; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) von @heziqiang
- **[KI-Mitarbeiter]** Problem mit Zeilenumbrüchen in KI-Nachrichten behoben ([#8096](https://github.com/nocobase/nocobase/pull/8096)) von @heziqiang
- **[Lizenzeinstellungen]**

  - Plugin-Lizenz-TS-Build-Ausnahme behoben ([#8183](https://github.com/nocobase/nocobase/pull/8183)) von @jiannx
  - Lizenzoptimierung und Hinzufügen von Hinweistexten ([#7993](https://github.com/nocobase/nocobase/pull/7993)) von @jiannx
- **[Dateimanager]** Problem behoben, bei dem die Vorschau von `.txt`-Dateien auf OSS die falsche Zeichenkodierung verwendete ([#8161](https://github.com/nocobase/nocobase/pull/8161)) von @mytharcher
- **[Datenquelle: Externer SQL Server]** Probleme behoben, bei denen die Optionen `encrypt` und `trustServerCertificate` nicht verfügbar waren von @2013xile
- **[Sammlung: Verbindung zu Fremddaten (FDW)]** Problem behoben, bei dem das Laden für Tabellen mit Großbuchstaben fehlschlug von @2013xile
- **[Workflow: Genehmigung]** Problem behoben, bei dem der Status nicht zusammenhängender Genehmigungsdatensätze durch eine Genehmigungsaktion fälschlicherweise auf `UNPROCESSED` geändert wurde von @mytharcher

### [v2.0.0-alpha.53](https://www.nocobase.com/en/blog/v2.0.0-alpha.53)

*Veröffentlichungsdatum: 2025-12-12*

### 🚀 Verbesserungen

- **[acl]** Unterstützung der `acl.registerSnippet`-API zum Zusammenführen von Snippet-Konfigurationen ([#8155](https://github.com/nocobase/nocobase/pull/8155)) von @mytharcher
- **[Client]** Unterstützung der Zahlenformatierung für Prozentfelder ([#8123](https://github.com/nocobase/nocobase/pull/8123)) von @katherinehhh
- **[Flow-Engine]** Unterstützung zum dynamischen Ausblenden des Schrittkonfigurationsmenüs ([#7924](https://github.com/nocobase/nocobase/pull/7924)) von @gchust
- **[Block: Rasterkarte]** Optimierung der Rasterkartenblock-Stile für ein kompakteres Layout ([#8152](https://github.com/nocobase/nocobase/pull/8152)) von @katherinehhh
- **[KI-Mitarbeiter]** Bearbeitungsfunktion für integrierte KI-Assistenten-Systemaufforderungen aktiviert.<br/>Systemaufforderung für den Nathan-KI-Assistenten optimiert.<br/>Problem behoben, bei dem der Server statische Dateien nicht lesen konnte. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) von @heziqiang
- **[Workflow]**

  - Fehlertoleranzlogik für fehlende Daten in der Prozessorvorbereitung hinzugefügt, um Ausführungsstopps zu vermeiden ([#8156](https://github.com/nocobase/nocobase/pull/8156)) von @mytharcher
  - Verwendung von Lazy Loading für Assoziationsdaten auf der Workflow-Leinwand zur Leistungsverbesserung ([#8142](https://github.com/nocobase/nocobase/pull/8142)) von @mytharcher
- **[Sammlungsfeld: Markdown(Vditor)]** Standardmäßige Deaktivierung der Variablenanalyse im Markdown-Feld im readPretty-Modus ([#8145](https://github.com/nocobase/nocobase/pull/8145)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Falscher Dateidownload für Anhänge behoben ([#8154](https://github.com/nocobase/nocobase/pull/8154)) von @katherinehhh
- **[Client]**

  - Problem behoben, bei dem das Assoziationsfeld-Dropdown deaktiviert wurde, wenn ein Optionsfeld existierte ([#8153](https://github.com/nocobase/nocobase/pull/8153)) von @katherinehhh
  - Problem behoben, bei dem die Eingabe von chinesischem Text vorhandene Optionen löschte, wenn Mehrfachauswahl-Operatoren für ein Einfachauswahlfeld im Filterformularblock verwendet wurden ([#8140](https://github.com/nocobase/nocobase/pull/8140)) von @gchust
  - Problem behoben, bei dem das Wechseln von Beschriftungsfeldern zu verlorenen Popup-Konfigurationen führte ([#8136](https://github.com/nocobase/nocobase/pull/8136)) von @gchust
- **[acl]** Problem behoben, bei dem die API `acl.can` `null` zurückgab, wenn die Rolle `root` ist ([#8150](https://github.com/nocobase/nocobase/pull/8150)) von @mytharcher
- **[Datenbank]** `filterByTk` unterstützt jetzt Arrays beim Abfragen von Sammlungen mit mehreren Filterzielschlüsseln ([#7986](https://github.com/nocobase/nocobase/pull/7986)) von @chenos
- **[Aktion: Datensätze importieren]** Synchrones Warten auf den Abschluss der durch den Import ausgelösten `afterCreate`-Ereignisse ([#8158](https://github.com/nocobase/nocobase/pull/8158)) von @2013xile
- **[Sammlungsfeld: Sequenz]** Verbesserung der Robustheit des plugin-field-sequence bei der Verarbeitung des Reparaturbefehls ([#8139](https://github.com/nocobase/nocobase/pull/8139)) von @cgyrock
- **[Workflow: Manueller Knoten]** Problem behoben, bei dem die manuelle Aufgabenliste eine falsche API verwendete ([#8144](https://github.com/nocobase/nocobase/pull/8144)) von @mytharcher
- **[HTTP-Anfrageverschlüsselung]** Verwendung von Klammern für das Array-Format in der qs-Parsing von @chenos
- **[Workflow: Genehmigung]** Problem behoben, bei dem ein Fehler beim Abbrechen einer Ausführung auftrat, wenn der zugehörige Workflow gelöscht wurde von @mytharcher
- **[Migrationsmanager]** Problem behoben, bei dem Zeilenumbrüche in Daten während der Migration verloren gingen von @cgyrock
