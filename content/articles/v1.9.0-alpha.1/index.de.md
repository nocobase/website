---
title: "NocoBase v1.9.0-alpha.1: Ereigniswarteschlange zum Verarbeiten von Nachrichten in der Warteschlange hinzugefügt"
description: "Versionshinweise zu v1.9.0-alpha.1"
---

### 🎉 Neue Funktionen

- **[Server]** Ereigniswarteschlange hinzugefügt, um Nachrichten in der Warteschlange zu verarbeiten ([#6819](https://github.com/nocobase/nocobase/pull/6819)) von @mytharcher

### 🚀 Verbesserungen

- **[Workflow]** Gemeinsame Komponenten in das Basis-Plugin verschoben ([#7140](https://github.com/nocobase/nocobase/pull/7140)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Nach Feldänderungen sollten Datenbereiche, die von diesem Feld abhängen, automatisch die ausgewählten Werte löschen ([#7161](https://github.com/nocobase/nocobase/pull/7161)) von @zhangzhonghe

  - Problem behoben, bei dem das Festlegen der Tabellenspaltenbreite wirkungslos war ([#7158](https://github.com/nocobase/nocobase/pull/7158)) von @zhangzhonghe

  - Fehler behoben, der beim Speichern einer Eins-zu-Eins-Beziehung in einem Konfigurationsfeld auftrat. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) von @aaaaaajie

  - Fehlerproblem mit Filterformularen im Popup der Schaltfläche "Duplizieren" behoben ([#7154](https://github.com/nocobase/nocobase/pull/7154)) von @zhangzhonghe

- **[Undefiniert]** e2e.yml behoben ([#7160](https://github.com/nocobase/nocobase/pull/7160)) von @mytharcher

- **[Dateimanager]**
  - Build-Fehler aufgrund des ESM-Pakets behoben ([#7169](https://github.com/nocobase/nocobase/pull/7169)) von @mytharcher

  - MIME-Typ-Erkennung behoben ([#7164](https://github.com/nocobase/nocobase/pull/7164)) von @mytharcher

- **[Öffentliche Formulare]** Problem behoben, bei dem das Feld "Nur Datum" im öffentlichen Formular kein Datum auswählen konnte. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) von @katherinehhh

- **[Kalender]** Standard-Starttag der Woche im Kalenderblock auf 'Montag' gesetzt ([#7171](https://github.com/nocobase/nocobase/pull/7171)) von @katherinehhh

- **[Workflow: Manueller Knoten]** Fehlerhaftes Importieren einer Variable behoben ([#7156](https://github.com/nocobase/nocobase/pull/7156)) von @mytharcher

- **[Workflow]** Problem behoben, bei dem auf mobilen Geräten mehrere Wischbewegungen nach links erforderlich waren, um zur vorherigen Seite zurückzukehren ([#7165](https://github.com/nocobase/nocobase/pull/7165)) von @zhangzhonghe

- **[Workflow: Genehmigung]**
  - Aktualisierung der Verknüpfung beim Absenden behoben von @mytharcher

  - Fehler behoben, der beim Löschen einer Genehmigung ausgelöst wurde von @mytharcher

  - Verknüpfungen, die nach dem Zurückziehen nicht geladen wurden, behoben von @mytharcher

- **[E-Mail-Manager]**
  - Nach dem Auswählen von Zeilen "Gelesen" und "Ungelesen" setzen von @jiannx

  - Submail-Inhalt konnte nicht gefiltert werden von @jiannx
