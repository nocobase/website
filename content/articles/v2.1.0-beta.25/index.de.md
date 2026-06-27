---
title: "NocoBase v2.1.0-beta.25: Einige APIs für die NocoBase CLI hinzugefügt"
description: "Versionshinweise zu v2.1.0-beta.25"
---

### 🎉 Neue Funktionen

- **[cli]** Release-Befehl zur API hinzugefügt ([#9308](https://github.com/nocobase/nocobase/pull/9308)) von @Andrew1989Y

- **[undefined]** Indonesische und vietnamesische Dokumentation hinzugefügt. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) von @Molunerfinn

- **[KI-Mitarbeiter]** LLM-Anbieter unterstützt jetzt die Xiaomi MIMO-Plattform ([#9315](https://github.com/nocobase/nocobase/pull/9315)) von @cgyrock

- **[Migrationsmanager]** Einige APIs für nocobase cli hinzugefügt von @Andrew1989Y

- **[Backup-Manager]** Einige APIs für nocobase cli hinzugefügt von @Andrew1989Y

### 🚀 Verbesserungen

- **[undefined]**
  - - ([#9349](https://github.com/nocobase/nocobase/pull/9349)) von @Molunerfinn

  - Spanische, portugiesische, russische und deutsche Dokumentation an die englische Quelle angeglichen. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) von @Molunerfinn

  - Französische Dokumentation mit der chinesischen Quelle synchronisiert. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) von @Molunerfinn

- **[IdP: OAuth]** OAuth-Sitzungen verwenden jetzt dieselben Ablaufeinstellungen wie die System-Token-Richtlinie ([#9345](https://github.com/nocobase/nocobase/pull/9345)) von @2013xile

- **[Block: Kanban]**
  - Standard-Kanban-Spaltenbreite reduziert. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) von @jiannx

  - Verbesserte Einstellungen zur Erstellung von Kalender- und Kanban-Blöcken. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) von @jiannx

- **[KI-Mitarbeiter]** Kategorieanpassung für KI-Mitarbeiter ([#9274](https://github.com/nocobase/nocobase/pull/9274)) von @cgyrock

- **[Workflow: Genehmigung]** Assoziations-Anzeigemodus-Laden aus der DB als Legacy markiert von @mytharcher

### 🐛 Fehlerbehebungen

- **[undefined]**
  - Behebung des Dependency-and-Build-Workflows, sodass Fehler beim Auschecken von eigenständigen Pro-Plugins den CI zum Scheitern bringen, anstatt die Build-Abdeckung stillschweigend zu überspringen. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) von @Molunerfinn

  - Behebung aufgeblähter Übersetzungsdateien und Angleichung der sprachübergreifenden Dokumentationsstruktur. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) von @Molunerfinn

- **[cli]** CLI-Boolesche Optionen behoben, sodass sie mit negierten Flags deaktiviert werden können ([#9337](https://github.com/nocobase/nocobase/pull/9337)) von @2013xile

- **[client-v2]**
  - Behoben: Laden von Remote-Plugins, sodass Plugin-URLs, die bereits auf `.js` enden, nicht zu doppelten `.js.js`-Pfaden aufgelöst werden. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) von @Molunerfinn

  - Behebung des Problems, dass `RemoteSelect` in der Konfiguration von gebundenen Workflows nicht gerendert wird ([#9314](https://github.com/nocobase/nocobase/pull/9314)) von @mytharcher

- **[ai]** Behebung der fehlenden Kategoriefeldeinrichtung bei der Registrierung von KI-Mitarbeitern ([#9300](https://github.com/nocobase/nocobase/pull/9300)) von @cgyrock

- **[flow-engine]** Behoben: Systemausgeblendete Felder konnten in formularbezogenen Variablen ausgewählt werden. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) von @gchust

- **[client]**
  - Behoben: JS-Feldzellen in v2-Tabellenblöcken konnten nach dem Filtern oder Aktualisieren von Tabellendaten leer erscheinen. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) von @jiannx

  - Nullwerte für leere Datenbereichs-Variablenabhängigkeiten in v2-Formularen beibehalten. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) von @jiannx

  - Behebung des Problems, dass Filterformularfelder nach dem erneuten Öffnen eines Popup-Datensatzauswahlfensters verschwinden ([#9211](https://github.com/nocobase/nocobase/pull/9211)) von @zhangzhonghe

  - JS-Spaltenrendering bei Änderung von Zeilendaten erneut ausführen ([#9282](https://github.com/nocobase/nocobase/pull/9282)) von @jiannx

- **[Datenbank]** Behoben: Datums-/Uhrzeitfilter für externe SQL Server-Datenquellen konnten fehlschlagen ([#9272](https://github.com/nocobase/nocobase/pull/9272)) von @2013xile

- **[KI-Mitarbeiter]**
  - Behebung des Problems gelegentlicher Fehler bei Verwendung des DeepSeek v4-Modells durch KI-Mitarbeiter ([#9348](https://github.com/nocobase/nocobase/pull/9348)) von @cgyrock

  - Behebung des Problems, dass der Workflow-KI-Mitarbeiterknoten nach dem Wechseln von KI-Mitarbeitern Fähigkeiten löscht ([#9342](https://github.com/nocobase/nocobase/pull/9342)) von @cgyrock

  - Behebung des Problems, dass die Aktionsschaltfläche "KI-Mitarbeiterliste" Entwickler-Mitarbeiter anzeigt ([#9320](https://github.com/nocobase/nocobase/pull/9320)) von @cgyrock

- **[Datenquelle: Hauptdatenbank]** Absturz verhindern, wenn `fields` während des Sammlungsladens undefiniert ist ([#9174](https://github.com/nocobase/nocobase/pull/9174)) von @saraTabbane

- **[UI-Vorlagen]** Behoben: Die Popup-Vorlagenliste konnte keine verfügbaren Vorlagen korrekt laden. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) von @gchust

- **[Dateimanager]** Verbesserte Fehlerbehandlung beim Herunterladen von Vorschaudateien ([#9103](https://github.com/nocobase/nocobase/pull/9103)) von @gaston98765

- **[Block: Baum]** Behebung der abnormalen Anzeige von Filterblockknoten ([#9260](https://github.com/nocobase/nocobase/pull/9260)) von @jiannx

- **[Block: Gantt]** Gantt-Block-Einstellung hinzugefügt, um Drag-to-Reschedule zu ermöglichen. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) von @jiannx

- **[Block: Kanban]** Behoben: Wiederholte Anzeige der Feldkonfigurations-Schwebeschicht ([#9271](https://github.com/nocobase/nocobase/pull/9271)) von @jiannx

- **[Aktion: Datensätze importieren]** Behebung des Problems, dass der Index fehlgeschlagener Zeilen beim Importieren von Datensätzen nicht korrekt ist ([#9277](https://github.com/nocobase/nocobase/pull/9277)) von @mytharcher

- **[Aktion: Datensätze exportieren Pro]** Behebung des Problems, dass der Automatikmodus nicht funktioniert von @mytharcher

- **[Migrationsmanager]** Behebung, dass `migration:create` `taskId` aus dem asynchronen Aufgabenprotokoll zurückgibt. von @Andrew1989Y

- **[Workflow: Genehmigung]**
  - Behebung des Problems, dass Filter und andere Abfrageparameter jetzt in der API zur Auflistung verfügbarer Genehmigungsworkflows funktionieren von @mytharcher

  - Behebung des Problems, dass Dateien in der ursprünglichen Anwendung nicht neu geladen werden von @mytharcher

  - Typfehler behoben von @mytharcher

  - Unterstützung zum Parsen einiger Client-Variablen in Genehmigungsaktionen von @mytharcher

  - Behebung des Ausführungszeitpunkts der Genehmigung, sodass `latestExecutionId` nach dem Genehmigungs-Commit synchronisiert wird von @mytharcher
