---
title: "NocoBase v2.1.5: Unterstützung zum Senden von Anhängen in Workflow-Mailer-Knoten hinzugefügt"
description: "Versionshinweise zu v2.1.5"
---

### 🎉 Neue Funktionen

- **[Workflow: Mailer-Knoten]** Unterstützung für das Senden von Anhängen in Workflow-Mailer-Knoten hinzugefügt. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) von @mytharcher

### 🚀 Verbesserungen

- **[client-v2]** Die Datenbereiche für Relationsfeldspalten in Formular-Untertabellen unterstützen jetzt aktuelle Elementvariablen. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) von @gchust
- **[undefined]** Der chinesische Dokumentationsname des Versionskontroll-Plugins wurde einheitlich auf „版本控制“ festgelegt. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) von @cgyrock
- **[Dateimanager]** Unterstützung für auswählbaren Text in PDF-Vorschauen des Dateimanagers für PDFs mit eingebettetem Text hinzugefügt. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) von @mytharcher
- **[Aktion: Massenbearbeitung]** Die Lademethode für v2-Aktions-Plugins optimiert und die Reihenfolge migrierter Aktionsschaltflächen stabil gehalten. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) von @katherinehhh
- **[Versionskontrolle]** Der chinesische Anzeigename des Versionskontroll-Plugins wurde in „版本控制“ geändert. von @cgyrock

### 🐛 Fehlerbehebungen

- **[cli-v1]** Ein Fehler beim Ausführen von `yarn dev` nach dem Upgrade von Projekten, die mit create-nocobase-app von 2.0 auf 2.1 erstellt wurden, behoben. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) von @Molunerfinn
- **[client-v2]** Das Problem behoben, dass der Migrationsfortschritt die dedizierte Fortschrittsansicht nicht anzeigte. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) von @2013xile
- **[flow-engine]** Probleme mit der vietnamesischen und chinesischen IME-Eingabe in v2-Einzeilentext- und Mehrzeilentextfeldern behoben. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) von @katherinehhh
- **[server]** Unsichere Plugin-Namenbehandlung in `pm:enable` behoben, um lokale Dateieinschlussrisiken während der Plugin-Auflösung zu vermeiden. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) von @mytharcher
- **[Dateimanager]** Fehler bei PDF-Vorschauen aufgrund abnormalen Ladens des pdf.js-Worker-Moduls behoben. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) von @mytharcher
- **[Block: Kanban]** Das Problem behoben, dass das Öffnen von Kalender-, Gantt- und Kanban-Blöcken außerhalb des Bearbeitungsmodus unerwartet versteckte Popup-Aktionen beibehielt und wiederholt Lösch-Anfragen sendete. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) von @jiannx
- **[Aktion: Datensätze exportieren Pro]** Verbesserte Verarbeitungsmoduseinstellungen und Erklärungshinweise für v2 Import/Export Pro. von @katherinehhh
- **[Migrationsmanager]** Mögliche Fehler beim Importieren großer Migrationsdatendateien behoben. von @2013xile
- **[Vorlagendruck]** Nicht unterstützte Vorlagendateitypen vor dem Start des Vorlagendrucks abgelehnt. von @2013xile
