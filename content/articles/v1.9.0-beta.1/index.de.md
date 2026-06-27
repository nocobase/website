---
title: "NocoBase v1.9.0-beta.1: Ereigniswarteschlange zur Verarbeitung von Nachrichten in der Warteschlange hinzugefügt"
description: "Versionshinweise zu v1.9.0-beta.1"
---

### 🎉 Neue Funktionen

- **[Server]** Ereigniswarteschlange hinzugefügt, um Nachrichten in der Warteschlange zu verarbeiten ([#6819](https://github.com/nocobase/nocobase/pull/6819)) von @mytharcher

### 🚀 Verbesserungen

- **[Workflow]** Gemeinsame Komponenten in das Basis-Plugin verschoben ([#7140](https://github.com/nocobase/nocobase/pull/7140)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Nach Feldänderungen sollten Datenbereiche, die von diesem Feld abhängen, automatisch die ausgewählten Werte löschen ([#7161](https://github.com/nocobase/nocobase/pull/7161)) von @zhangzhonghe

  - Problem behoben, bei dem das Festlegen der Tabellenspaltenbreite wirkungslos war ([#7158](https://github.com/nocobase/nocobase/pull/7158)) von @zhangzhonghe

  - Fehlerproblem mit Filterformularen im Popup der Duplizieren-Schaltfläche behoben ([#7154](https://github.com/nocobase/nocobase/pull/7154)) von @zhangzhonghe

  - Ein Fehler, der beim Speichern einer Eins-zu-eins-Beziehung in einem Konfigurationsfeld auftrat, wurde behoben. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) von @aaaaaajie

- **[Undefiniert]** e2e.yml behoben ([#7160](https://github.com/nocobase/nocobase/pull/7160)) von @mytharcher

- **[Kalender]** Standard-Starttag der Woche im Kalenderblock auf 'Montag' gesetzt ([#7171](https://github.com/nocobase/nocobase/pull/7171)) von @katherinehhh

- **[Workflow]** Problem behoben, bei dem auf mobilen Geräten mehrere Wischbewegungen nach links erforderlich waren, um zur vorherigen Seite zurückzukehren ([#7165](https://github.com/nocobase/nocobase/pull/7165)) von @zhangzhonghe

- **[Dateimanager]**
  - Build-Fehler aufgrund eines ESM-Pakets behoben ([#7169](https://github.com/nocobase/nocobase/pull/7169)) von @mytharcher

  - MIME-Typ-Erkennung behoben ([#7164](https://github.com/nocobase/nocobase/pull/7164)) von @mytharcher

- **[Workflow: Manueller Knoten]** Falscher Import einer Variable behoben ([#7156](https://github.com/nocobase/nocobase/pull/7156)) von @mytharcher

- **[Öffentliche Formulare]** Problem behoben, bei dem das Feld „Nur Datum“ in einem öffentlichen Formular kein Datum auswählen konnte. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) von @katherinehhh

- **[Workflow: Genehmigung]**
  - Transaktion zum Patchen des Schemas aufgrund von Zeitüberschreitung entfernt von @mytharcher

  - Problem behoben, dass Assoziationen nach dem Zurückziehen nicht geladen wurden von @mytharcher

  - Fehler behoben, der beim Löschen der Genehmigung ausgelöst wurde von @mytharcher

  - Aktualisierung der Assoziation beim Einreichen behoben von @mytharcher
