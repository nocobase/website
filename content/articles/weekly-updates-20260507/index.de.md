---
title: "Wöchentliche Updates｜Einige APIs für NocoBase CLI hinzugefügt"
description: "Dies ist eine Zusammenfassung der Funktionsupdates und Verbesserungen von NocoBase vom 30. April bis 7. Mai 2026."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit in drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.49](https://www.nocobase.com/en/blog/v2.0.49)

*Veröffentlichungsdatum: 2026-05-06*

### 🚀 Verbesserungen

- **[undefined]** Feishu-Fehlermeldung für manuelle Release-Workflows hinzugefügt ([#9349](https://github.com/nocobase/nocobase/pull/9349)) von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[Datenquelle: Main]** Absturz verhindert, wenn `fields` beim Laden einer Sammlung undefiniert ist ([#9174](https://github.com/nocobase/nocobase/pull/9174)) von @saraTabbane
- **[UI-Vorlagen]** Ein Problem behoben, bei dem die Popup-Vorlagenliste verfügbare Vorlagen nicht korrekt laden konnte. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) von @gchust
- **[KI-Mitarbeiter]** Problem behoben, bei dem bei Verwendung des DeepSeek v4-Modells durch KI-Mitarbeiter gelegentlich Fehler auftraten ([#9348](https://github.com/nocobase/nocobase/pull/9348)) von @cgyrock
- **[Dateimanager]** Verbesserte Fehlerbehandlung beim Herunterladen von Vorschaudateien ([#9103](https://github.com/nocobase/nocobase/pull/9103)) von @gaston98765
- **[Workflow: Genehmigung]** Problem behoben, bei dem Filter- und andere Abfrageparameter jetzt in der API zum Auflisten verfügbarer Genehmigungsworkflows funktionieren von @mytharcher

### [v2.0.48](https://www.nocobase.com/en/blog/v2.0.48)

*Veröffentlichungsdatum: 2026-05-04*

### 🐛 Fehlerbehebungen

- **[KI-Mitarbeiter]** Problem behoben, bei dem die Aktionsschaltfläche „KI-Mitarbeiterliste“ Entwickler-Mitarbeiter anzeigte ([#9320](https://github.com/nocobase/nocobase/pull/9320)) von @cgyrock
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem Dateien in der ursprünglichen Anwendung nicht neu geladen wurden von @mytharcher
  - Unterstützung zum Parsen einiger Client-Variablen in Genehmigungsaktionen hinzugefügt von @mytharcher

### [v2.0.47](https://www.nocobase.com/en/blog/v2.0.47)

*Veröffentlichungsdatum: 2026-05-01*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** LLM-Anbieter unterstützt jetzt die Xiaomi MIMO-Plattform ([#9315](https://github.com/nocobase/nocobase/pull/9315)) von @cgyrock

### 🚀 Verbesserungen

- **[flow-engine]** Verbessertes Verhalten des Block-Drag-Layouts auf v2-Seiten ([#9264](https://github.com/nocobase/nocobase/pull/9264)) von @zhangzhonghe
- **[KI-Mitarbeiter]** Kategorieanpassung für KI-Mitarbeiter ([#9274](https://github.com/nocobase/nocobase/pull/9274)) von @cgyrock
- **[Workflow: Genehmigung]** Assoziations-Anzeigemodus „Laden aus DB“ als veraltet markiert von @mytharcher

### 🐛 Fehlerbehebungen

- **[Datenbank]** Problem behoben, bei dem Datums-/Uhrzeitfilter für externe SQL Server-Datenquellen fehlschlagen konnten ([#9272](https://github.com/nocobase/nocobase/pull/9272)) von @2013xile
- **[Client]**

  - Nullwerte für leere Datenbereichs-Variablenabhängigkeiten in v2-Formularen beibehalten. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) von @jiannx
  - JS-Spaltenrendering bei Änderung von Zeilendaten erneut ausführen ([#9282](https://github.com/nocobase/nocobase/pull/9282)) von @jiannx
  - Problem behoben, bei dem Filterformularfelder nach erneutem Öffnen eines Popup-Datensatzauswahlfensters verschwanden ([#9211](https://github.com/nocobase/nocobase/pull/9211)) von @zhangzhonghe
  - Problem behoben, bei dem JS-Feldzellen in v2-Tabellenblöcken nach dem Filtern oder Aktualisieren von Tabellendaten leer erscheinen konnten. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) von @jiannx
- **[flow-engine]** Problem behoben, bei dem systemausgeblendete Felder in formularbezogenen Variablen ausgewählt werden konnten. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) von @gchust
- **[Aktion: Datensätze importieren]** Problem behoben, bei dem der Index fehlgeschlagener Zeilen beim Importieren von Datensätzen nicht korrekt war ([#9277](https://github.com/nocobase/nocobase/pull/9277)) von @mytharcher
- **[Block: Gantt]** Eine Gantt-Blockeinstellung hinzugefügt, um das Verschieben per Drag & Drop zur Neuplanung zu ermöglichen. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) von @jiannx
- **[KI-Mitarbeiter]** Fehler bei der DeepSeek V4-Integration von KI-Mitarbeitern behoben ([#9275](https://github.com/nocobase/nocobase/pull/9275)) von @cgyrock
- **[Aktion: Datensätze exportieren Pro]** Problem behoben, bei dem der Automatikmodus nicht funktionierte von @mytharcher
- **[Workflow: Genehmigung]**

  - Typfehler behoben von @mytharcher
  - Ausführungszeitpunkt der Genehmigung korrigiert, sodass `latestExecutionId` nach dem Genehmigungs-Commit synchronisiert wird von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.25](https://www.nocobase.com/en/blog/v2.1.0-beta.25)

*Veröffentlichungsdatum: 2026-05-06*

### 🎉 Neue Funktionen

- **[cli]** Release-Befehl zur API hinzugefügt ([#9308](https://github.com/nocobase/nocobase/pull/9308)) von @Andrew1989Y
- **[undefined]** Indonesische und vietnamesische Dokumentation hinzugefügt. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) von @Molunerfinn
- **[KI-Mitarbeiter]** LLM-Anbieter unterstützt jetzt die Xiaomi MIMO-Plattform ([#9315](https://github.com/nocobase/nocobase/pull/9315)) von @cgyrock
- **[Migrationsmanager]** Einige APIs für die NocoBase-CLI hinzugefügt von @Andrew1989Y
- **[Backup-Manager]** Einige APIs für die NocoBase-CLI hinzugefügt von @Andrew1989Y

### 🚀 Verbesserungen

- **[undefined]**

  - Feishu-Fehlermeldung für manuelle Release-Workflows hinzugefügt ([#9349](https://github.com/nocobase/nocobase/pull/9349)) von @Molunerfinn
  - Spanische, portugiesische, russische und deutsche Dokumentation an die englische Quelle angeglichen. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) von @Molunerfinn
  - Französische Dokumentation mit der chinesischen Quelle synchronisiert. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) von @Molunerfinn
- **[IdP: OAuth]** OAuth-Sitzungen verwenden jetzt dieselben Ablaufeinstellungen wie die System-Token-Richtlinie ([#9345](https://github.com/nocobase/nocobase/pull/9345)) von @2013xile
- **[Block: Kanban]**

  - Standardbreite der Kanban-Spalten reduziert. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) von @jiannx
  - Verbesserte Einstellungen zur Erstellung von Kalender- und Kanban-Blöcken. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) von @jiannx
- **[KI-Mitarbeiter]** Kategorieanpassung für KI-Mitarbeiter ([#9274](https://github.com/nocobase/nocobase/pull/9274)) von @cgyrock
- **[Workflow: Genehmigung]** Assoziations-Anzeigemodus „Laden aus DB“ als veraltet markiert von @mytharcher

### 🐛 Fehlerbehebungen

- **[undefined]**

  - Der Abhängigkeits- und Build-Workflow wurde korrigiert, sodass Fehler beim Auschecken eigenständiger Pro-Plugins den CI-Prozess abbrechen, anstatt die Build-Abdeckung stillschweigend zu überspringen. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) von @Molunerfinn
  - Aufgeblähte Übersetzungsdateien korrigiert und sprachübergreifende Dokumentationsstruktur angeglichen. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) von @Molunerfinn
- **[cli]** CLI-Boolesche Optionen korrigiert, sodass sie mit negierten Flags deaktiviert werden können ([#9337](https://github.com/nocobase/nocobase/pull/9337)) von @2013xile
- **[client-v2]**

  - Laden von Remote-Plugins korrigiert, sodass Plugin-URLs, die bereits auf `.js` enden, nicht zu doppelten `.js.js`-Pfaden aufgelöst werden. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) von @Molunerfinn
  - Problem behoben, bei dem `RemoteSelect` in der Konfiguration von gebundenen Workflows nicht gerendert wurde ([#9314](https://github.com/nocobase/nocobase/pull/9314)) von @mytharcher
- **[ai]** Fehlende Kategoriefeldeinrichtung während der KI-Mitarbeiterregistrierung behoben ([#9300](https://github.com/nocobase/nocobase/pull/9300)) von @cgyrock
- **[flow-engine]** Problem behoben, bei dem systemausgeblendete Felder in formularbezogenen Variablen ausgewählt werden konnten. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) von @gchust
- **[Client]**

  - Problem behoben, bei dem JS-Feldzellen in v2-Tabellenblöcken nach dem Filtern oder Aktualisieren von Tabellendaten leer erscheinen konnten. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) von @jiannx
  - Nullwerte für leere Datenbereichs-Variablenabhängigkeiten in v2-Formularen beibehalten. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) von @jiannx
  - Problem behoben, bei dem Filterformularfelder nach erneutem Öffnen eines Popup-Datensatzauswahlfensters verschwanden ([#9211](https://github.com/nocobase/nocobase/pull/9211)) von @zhangzhonghe
  - JS-Spaltenrendering bei Änderung von Zeilendaten erneut ausführen ([#9282](https://github.com/nocobase/nocobase/pull/9282)) von @jiannx
- **[Datenbank]** Problem behoben, bei dem Datums-/Uhrzeitfilter für externe SQL Server-Datenquellen fehlschlagen konnten ([#9272](https://github.com/nocobase/nocobase/pull/9272)) von @2013xile
- **[KI-Mitarbeiter]**

  - Problem behoben, bei dem bei Verwendung des DeepSeek v4-Modells durch KI-Mitarbeiter gelegentlich Fehler auftraten ([#9348](https://github.com/nocobase/nocobase/pull/9348)) von @cgyrock
  - Problem behoben, bei dem der Workflow-KI-Mitarbeiterknoten Fähigkeiten löscht, nachdem KI-Mitarbeiter gewechselt wurden ([#9342](https://github.com/nocobase/nocobase/pull/9342)) von @cgyrock
  - Problem behoben, bei dem die Aktionsschaltfläche „KI-Mitarbeiterliste“ Entwickler-Mitarbeiter anzeigte ([#9320](https://github.com/nocobase/nocobase/pull/9320)) von @cgyrock
- **[Datenquelle: Main]** Absturz verhindert, wenn `fields` beim Laden einer Sammlung undefiniert ist ([#9174](https://github.com/nocobase/nocobase/pull/9174)) von @saraTabbane
- **[UI-Vorlagen]** Ein Problem behoben, bei dem die Popup-Vorlagenliste verfügbare Vorlagen nicht korrekt laden konnte. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) von @gchust
- **[Dateimanager]** Verbesserte Fehlerbehandlung beim Herunterladen von Vorschaudateien ([#9103](https://github.com/nocobase/nocobase/pull/9103)) von @gaston98765
- **[Block: Baum]** Anormale Anzeige von Filterblockknoten behoben ([#9260](https://github.com/nocobase/nocobase/pull/9260)) von @jiannx
- **[Block: Gantt]** Eine Gantt-Blockeinstellung hinzugefügt, um das Verschieben per Drag & Drop zur Neuplanung zu ermöglichen. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) von @jiannx
- **[Block: Kanban]** Wiederholte Anzeige der schwebenden Ebene für Feldkonfiguration behoben ([#9271](https://github.com/nocobase/nocobase/pull/9271)) von @jiannx
- **[Aktion: Datensätze importieren]** Problem behoben, bei dem der Index fehlgeschlagener Zeilen beim Importieren von Datensätzen nicht korrekt war ([#9277](https://github.com/nocobase/nocobase/pull/9277)) von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Problem behoben, bei dem der Automatikmodus nicht funktionierte von @mytharcher
- **[Migrationsmanager]** `migration:create` korrigiert, sodass `taskId` aus dem asynchronen Aufgabenprotokoll zurückgegeben wird. von @Andrew1989Y
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem Filter- und andere Abfrageparameter jetzt in der API zum Auflisten verfügbarer Genehmigungsworkflows funktionieren von @mytharcher
  - Problem behoben, bei dem Dateien in der ursprünglichen Anwendung nicht neu geladen wurden von @mytharcher
  - Typfehler behoben von @mytharcher
  - Unterstützung zum Parsen einiger Client-Variablen in Genehmigungsaktionen hinzugefügt von @mytharcher
  - Ausführungszeitpunkt der Genehmigung korrigiert, sodass `latestExecutionId` nach dem Genehmigungs-Commit synchronisiert wird von @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.30](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Veröffentlichungsdatum: 2026-05-06*

### 🚀 Verbesserungen

- **[undefined]** Feishu-Fehlermeldung für manuelle Release-Workflows hinzugefügt ([#9349](https://github.com/nocobase/nocobase/pull/9349)) von @Molunerfinn
- **[IdP: OAuth]** OAuth-Sitzungen verwenden jetzt dieselben Ablaufeinstellungen wie die System-Token-Richtlinie ([#9345](https://github.com/nocobase/nocobase/pull/9345)) von @2013xile

### 🐛 Fehlerbehebungen

- **[client-v2]** Laden von Remote-Plugins korrigiert, sodass Plugin-URLs, die bereits auf `.js` enden, nicht zu doppelten `.js.js`-Pfaden aufgelöst werden. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) von @Molunerfinn
- **[cli]** CLI-Boolesche Optionen korrigiert, sodass sie mit negierten Flags deaktiviert werden können ([#9337](https://github.com/nocobase/nocobase/pull/9337)) von @2013xile
- **[KI-Mitarbeiter]**

  - Problem behoben, bei dem bei Verwendung des DeepSeek v4-Modells durch KI-Mitarbeiter gelegentlich Fehler auftraten ([#9348](https://github.com/nocobase/nocobase/pull/9348)) von @cgyrock
  - Problem behoben, bei dem der Workflow-KI-Mitarbeiterknoten Fähigkeiten löscht, nachdem KI-Mitarbeiter gewechselt wurden ([#9342](https://github.com/nocobase/nocobase/pull/9342)) von @cgyrock
- **[Datenquelle: Main]** Absturz verhindert, wenn `fields` beim Laden einer Sammlung undefiniert ist ([#9174](https://github.com/nocobase/nocobase/pull/9174)) von @saraTabbane
- **[UI-Vorlagen]** Ein Problem behoben, bei dem die Popup-Vorlagenliste verfügbare Vorlagen nicht korrekt laden konnte. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) von @gchust
- **[Block: Kanban]** Kanban-assoziierte Blöcke korrigiert, die in Popup- oder Sekundärseitenkontexten unaufgelöste Laufzeit-Ressourcenparameter verwendeten. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) von @jiannx
- **[Workflow: Genehmigung]** Problem behoben, bei dem Filter- und andere Abfrageparameter jetzt in der API zum Auflisten verfügbarer Genehmigungsworkflows funktionieren von @mytharcher

### [v2.1.0-alpha.29](https://www.nocobase.com/en/blog/v2.1.0-alpha.29)

*Veröffentlichungsdatum: 2026-05-04*

### 🐛 Fehlerbehebungen

- **[Dateimanager]** Verbesserte Fehlerbehandlung beim Herunterladen von Vorschaudateien ([#9103](https://github.com/nocobase/nocobase/pull/9103)) von @gaston98765
- **[Workflow: Genehmigung]** Unterstützung zum Parsen einiger Client-Variablen in Genehmigungsaktionen hinzugefügt von @mytharcher

### [v2.1.0-alpha.28](https://www.nocobase.com/en/blog/v2.1.0-alpha.28)

*Veröffentlichungsdatum: 2026-05-04*

### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]** Problem behoben, bei dem Dateien in der ursprünglichen Anwendung nicht neu geladen wurden von @mytharcher

### [v2.1.0-alpha.27](https://www.nocobase.com/en/blog/v2.1.0-alpha.27)

*Veröffentlichungsdatum: 2026-05-03*

### 🎉 Neue Funktionen

- **[cli]** Release-Befehl zur API hinzugefügt ([#9308](https://github.com/nocobase/nocobase/pull/9308)) von @Andrew1989Y
- **[undefined]** Indonesische und vietnamesische Dokumentation hinzugefügt. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) von @Molunerfinn
- **[Server]** KI-Mitarbeiter können gebündelte Dokumentation mit Bash-Befehlen durchsuchen ([#9269](https://github.com/nocobase/nocobase/pull/9269)) von @2013xile
- **[KI-Mitarbeiter]** LLM-Anbieter unterstützt jetzt die Xiaomi MIMO-Plattform ([#9315](https://github.com/nocobase/nocobase/pull/9315)) von @cgyrock
- **[Migrationsmanager]** Einige APIs für die NocoBase-CLI hinzugefügt von @Andrew1989Y
- **[Backup-Manager]** Einige APIs für die NocoBase-CLI hinzugefügt von @Andrew1989Y

### 🚀 Verbesserungen

- **[flow-engine]** Verbessertes Verhalten des Block-Drag-Layouts auf v2-Seiten ([#9264](https://github.com/nocobase/nocobase/pull/9264)) von @zhangzhonghe
- **[undefined]**

  - Spanische, portugiesische, russische und deutsche Dokumentation an die englische Quelle angeglichen. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) von @Molunerfinn
  - Französische Dokumentation mit der chinesischen Quelle synchronisiert. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) von @Molunerfinn
- **[KI-Mitarbeiter]**

  - Verbesserte Nathan's RunJS-Bearbeitungswerkzeuge und reduzierte Verzögerung bei langen KI-Chat-Gesprächen ([#9311](https://github.com/nocobase/nocobase/pull/9311)) von @2013xile
  - Kategorieanpassung für KI-Mitarbeiter ([#9274](https://github.com/nocobase/nocobase/pull/9274)) von @cgyrock
- **[Block: Kanban]**

  - Standardbreite der Kanban-Spalten reduziert. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) von @jiannx
  - Verbesserte Einstellungen zur Erstellung von Kalender- und Kanban-Blöcken. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) von @jiannx
- **[Workflow: Genehmigung]** Assoziations-Anzeigemodus „Laden aus DB“ als veraltet markiert von @mytharcher

### 🐛 Fehlerbehebungen

- **[undefined]**

  - Der Abhängigkeits- und Build-Workflow wurde korrigiert, sodass Fehler beim Auschecken eigenständiger Pro-Plugins den CI-Prozess abbrechen, anstatt die Build-Abdeckung stillschweigend zu überspringen. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) von @Molunerfinn
  - Aufgeblähte Übersetzungsdateien korrigiert und sprachübergreifende Dokumentationsstruktur angeglichen. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) von @Molunerfinn
- **[client-v2]** Problem behoben, bei dem `RemoteSelect` in der Konfiguration von gebundenen Workflows nicht gerendert wurde ([#9314](https://github.com/nocobase/nocobase/pull/9314)) von @mytharcher
- **[flow-engine]** Problem behoben, bei dem systemausgeblendete Felder in formularbezogenen Variablen ausgewählt werden konnten. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) von @gchust
- **[ai]** Fehlende Kategoriefeldeinrichtung während der KI-Mitarbeiterregistrierung behoben ([#9300](https://github.com/nocobase/nocobase/pull/9300)) von @cgyrock
- **[Client]**

  - Problem behoben, bei dem JS-Feldzellen in v2-Tabellenblöcken nach dem Filtern oder Aktualisieren von Tabellendaten leer erscheinen konnten. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) von @jiannx
  - Problem behoben, bei dem Filterformularfelder nach erneutem Öffnen eines Popup-Datensatzauswahlfensters verschwanden ([#9211](https://github.com/nocobase/nocobase/pull/9211)) von @zhangzhonghe
  - Nullwerte für leere Datenbereichs-Variablenabhängigkeiten in v2-Formularen beibehalten. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) von @jiannx
  - JS-Spaltenrendering bei Änderung von Zeilendaten erneut ausführen ([#9282](https://github.com/nocobase/nocobase/pull/9282)) von @jiannx
- **[Datenbank]** Problem behoben, bei dem Datums-/Uhrzeitfilter für externe SQL Server-Datenquellen fehlschlagen konnten ([#9272](https://github.com/nocobase/nocobase/pull/9272)) von @2013xile
- **[KI-Mitarbeiter]**

  - Problem behoben, bei dem die Aktionsschaltfläche „KI-Mitarbeiterliste“ Entwickler-Mitarbeiter anzeigte ([#9320](https://github.com/nocobase/nocobase/pull/9320)) von @cgyrock
  - Fehler bei der DeepSeek V4-Integration von KI-Mitarbeitern behoben ([#9275](https://github.com/nocobase/nocobase/pull/9275)) von @cgyrock
- **[Block: Gantt]** Eine Gantt-Blockeinstellung hinzugefügt, um das Verschieben per Drag & Drop zur Neuplanung zu ermöglichen. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) von @jiannx
- **[Block: Baum]** Anormale Anzeige von Filterblockknoten behoben ([#9260](https://github.com/nocobase/nocobase/pull/9260)) von @jiannx
- **[Aktion: Datensätze importieren]** Problem behoben, bei dem der Index fehlgeschlagener Zeilen beim Importieren von Datensätzen nicht korrekt war ([#9277](https://github.com/nocobase/nocobase/pull/9277)) von @mytharcher
- **[Block: Kanban]** Wiederholte Anzeige der schwebenden Ebene für Feldkonfiguration behoben ([#9271](https://github.com/nocobase/nocobase/pull/9271)) von @jiannx
- **[Aktion: Datensätze exportieren Pro]** Problem behoben, bei dem der Automatikmodus nicht funktionierte von @mytharcher
- **[Migrationsmanager]** `migration:create` korrigiert, sodass `taskId` aus dem asynchronen Aufgabenprotokoll zurückgegeben wird. von @Andrew1989Y
- **[Workflow: Genehmigung]**

  - Ausführungszeitpunkt der Genehmigung korrigiert, sodass `latestExecutionId` nach dem Genehmigungs-Commit synchronisiert wird von @mytharcher
  - Typfehler behoben von @mytharcher
