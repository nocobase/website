---
title: "NocoBase v2.1.0-alpha.27: KI-Mitarbeiter können gebündelte Dokumentation mit Bash-Befehlen durchsuchen"
description: "Versionshinweise zu v2.1.0-alpha.27"
---

### 🎉 Neue Funktionen

- **[cli]** Release-Befehl zur API hinzugefügt ([#9308](https://github.com/nocobase/nocobase/pull/9308)) von @Andrew1989Y

- **[undefined]** Indonesische und vietnamesische Dokumentation hinzugefügt. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) von @Molunerfinn

- **[server]** KI-Mitarbeiter können gebündelte Dokumentation mit Bash-Befehlen durchsuchen ([#9269](https://github.com/nocobase/nocobase/pull/9269)) von @2013xile

- **[KI-Mitarbeiter]** LLM-Anbieter unterstützt jetzt die Xiaomi MIMO-Plattform ([#9315](https://github.com/nocobase/nocobase/pull/9315)) von @cgyrock

- **[Migrationsmanager]** Einige APIs für nocobase cli hinzugefügt von @Andrew1989Y

- **[Backup-Manager]** Einige APIs für nocobase cli hinzugefügt von @Andrew1989Y

### 🚀 Verbesserungen

- **[flow-engine]** Verbessertes Verhalten beim Ziehen von Blöcken auf v2-Seiten ([#9264](https://github.com/nocobase/nocobase/pull/9264)) von @zhangzhonghe

- **[undefined]**
  - Spanische, portugiesische, russische und deutsche Dokumentation an die englische Quelle angeglichen. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) von @Molunerfinn

  - Französische Dokumentation mit der chinesischen Quelle synchronisiert. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) von @Molunerfinn

- **[KI-Mitarbeiter]**
  - Nathans RunJS-Bearbeitungswerkzeuge verbessert und Verzögerungen bei langen KI-Chat-Gesprächen reduziert ([#9311](https://github.com/nocobase/nocobase/pull/9311)) von @2013xile

  - Kategorieanpassung für KI-Mitarbeiter ([#9274](https://github.com/nocobase/nocobase/pull/9274)) von @cgyrock

- **[Block: Kanban]**
  - Standard-Kanban-Spaltenbreite reduziert. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) von @jiannx

  - Verbesserte Einstellungen zur Erstellung von Kalender- und Kanban-Blöcken. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) von @jiannx

- **[Workflow: Genehmigung]** Anzeigemodus für Verknüpfungen als "Legacy" markiert, wenn aus der Datenbank geladen von @mytharcher

### 🐛 Fehlerbehebungen

- **[undefined]**
  - Der Abhängigkeits- und Build-Workflow wurde korrigiert, sodass Fehler beim Auschecken von eigenständigen Pro-Plugins den CI nicht mehr stillschweigend überspringen, sondern zum Fehlschlag führen. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) von @Molunerfinn

  - Aufgeblähte Übersetzungsdateien korrigiert und sprachübergreifende Dokumentationsstruktur angeglichen. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) von @Molunerfinn

- **[client-v2]** Problem behoben, bei dem `RemoteSelect` in der Konfiguration von gebundenen Workflows nicht gerendert wurde ([#9314](https://github.com/nocobase/nocobase/pull/9314)) von @mytharcher

- **[flow-engine]** Problem behoben, bei dem systemausgeblendete Felder in formularbezogenen Variablen ausgewählt werden konnten. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) von @gchust

- **[ai]** Fehlende Kategoriefeldeinrichtung bei der Registrierung von KI-Mitarbeitern behoben ([#9300](https://github.com/nocobase/nocobase/pull/9300)) von @cgyrock

- **[client]**
  - Problem behoben, bei dem JS-Feldzellen in v2-Tabellenblöcken nach dem Filtern oder Aktualisieren von Tabellendaten leer erscheinen konnten. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) von @jiannx

  - Problem behoben, bei dem Filterformularfelder nach dem erneuten Öffnen eines Popup-Datensatzauswahlfelds verschwanden ([#9211](https://github.com/nocobase/nocobase/pull/9211)) von @zhangzhonghe

  - Nullwerte für leere Datenbereichs-Variablenabhängigkeiten in v2-Formularen beibehalten. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) von @jiannx

  - JS-Spaltenrendering bei Änderung von Zeilendaten erneut ausführen ([#9282](https://github.com/nocobase/nocobase/pull/9282)) von @jiannx

- **[database]** Problem behoben, bei dem Datums-/Zeitfilter für externe SQL Server-Datenquellen fehlschlagen konnten ([#9272](https://github.com/nocobase/nocobase/pull/9272)) von @2013xile

- **[KI-Mitarbeiter]**
  - Problem behoben, bei dem die Aktionsschaltfläche "KI-Mitarbeiterliste" Entwickler-Mitarbeiter anzeigte ([#9320](https://github.com/nocobase/nocobase/pull/9320)) von @cgyrock

  - Fehler bei der Integration von KI-Mitarbeiter deepSeek V4 behoben ([#9275](https://github.com/nocobase/nocobase/pull/9275)) von @cgyrock

- **[Block: Gantt]** Eine Gantt-Block-Einstellung hinzugefügt, um das Verschieben zur Neuplanung per Drag & Drop zu ermöglichen. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) von @jiannx

- **[Block: Baum]** Abnormale Anzeige von Filterblockknoten behoben ([#9260](https://github.com/nocobase/nocobase/pull/9260)) von @jiannx

- **[Aktion: Datensätze importieren]** Problem behoben, bei dem der Index fehlgeschlagener Zeilen beim Importieren von Datensätzen nicht korrekt war ([#9277](https://github.com/nocobase/nocobase/pull/9277)) von @mytharcher

- **[Block: Kanban]** Wiederholte Anzeige der Feldkonfigurations-Schwebeschicht behoben ([#9271](https://github.com/nocobase/nocobase/pull/9271)) von @jiannx

- **[Aktion: Datensätze exportieren Pro]** Problem behoben, bei dem der automatische Modus nicht funktionierte von @mytharcher

- **[Migrationsmanager]** Korrektur, dass `migration:create` `taskId` aus dem asynchronen Aufgabenprotokoll zurückgibt. von @Andrew1989Y

- **[Workflow: Genehmigung]**
  - Ausführungszeitpunkt der Genehmigung korrigiert, sodass `latestExecutionId` nach dem Genehmigungs-Commit synchronisiert wird von @mytharcher

  - Typfehler behoben von @mytharcher
