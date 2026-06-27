---
title: "NocoBase v2.0.47: LLM-Anbieter unterstützt jetzt die Xiaomi MIMO-Plattform"
description: "Versionshinweise zu v2.0.47"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** LLM-Anbieter unterstützt jetzt die Xiaomi MIMO-Plattform ([#9315](https://github.com/nocobase/nocobase/pull/9315)) von @cgyrock

### 🚀 Verbesserungen

- **[Flow-Engine]** Verbessertes Verhalten beim Ziehen von Blöcken auf v2-Seiten ([#9264](https://github.com/nocobase/nocobase/pull/9264)) von @zhangzhonghe

- **[KI-Mitarbeiter]** Kategorieanpassung für KI-Mitarbeiter ([#9274](https://github.com/nocobase/nocobase/pull/9274)) von @cgyrock

- **[Workflow: Genehmigung]** Markiert den Anzeigemodus für Verknüpfungen, der aus der DB geladen wird, als veraltet von @mytharcher

### 🐛 Fehlerbehebungen

- **[Datenbank]** Behoben: Problem, bei dem Datumsfilter für externe SQL Server-Datenquellen fehlschlagen konnten ([#9272](https://github.com/nocobase/nocobase/pull/9272)) von @2013xile

- **[Client]**
  - Nullwerte für leere Data-Scope-Variablenabhängigkeiten in v2-Formularen beibehalten. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) von @jiannx

  - JS-Spalten-Rendering bei Änderung der Zeilendaten erneut ausführen ([#9282](https://github.com/nocobase/nocobase/pull/9282)) von @jiannx

  - Problem behoben, bei dem Filterformularfelder nach erneutem Öffnen eines Popup-Datensatzauswahlfelds verschwanden ([#9211](https://github.com/nocobase/nocobase/pull/9211)) von @zhangzhonghe

  - Problem behoben, bei dem JS-Feldzellen in v2-Tabellenblöcken nach dem Filtern oder Aktualisieren von Tabellendaten leer erscheinen konnten. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) von @jiannx

- **[Flow-Engine]** Problem behoben, bei dem systemausgeblendete Felder in formularbezogenen Variablen ausgewählt werden konnten. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) von @gchust

- **[Aktion: Datensätze importieren]** Problem behoben, bei dem der Index fehlgeschlagener Zeilen beim Importieren von Datensätzen nicht korrekt war ([#9277](https://github.com/nocobase/nocobase/pull/9277)) von @mytharcher

- **[Block: Gantt]** Gantt-Block-Einstellung hinzugefügt, um das Verschieben zur Neuplanung per Drag & Drop zu ermöglichen. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) von @jiannx

- **[KI-Mitarbeiter]** Fehler bei der Integration von KI-Mitarbeiter deepSeek V4 behoben ([#9275](https://github.com/nocobase/nocobase/pull/9275)) von @cgyrock

- **[Aktion: Datensätze exportieren Pro]** Problem behoben, bei dem der Automatikmodus nicht funktionierte von @mytharcher

- **[Workflow: Genehmigung]**
  - Typfehler behoben von @mytharcher

  - Ausführungszeitpunkt der Genehmigung korrigiert, sodass `latestExecutionId` nach dem Genehmigungs-Commit synchronisiert wird von @mytharcher
