---
title: "NocoBase v2.2.0-beta.3: Anhänge im Workflow-Mailer-Knoten unterstützen."
description: "Versionshinweise zu v2.2.0-beta.3"
---

### 🎉 Neue Funktionen

* **[Workflow: Mailer-Knoten]** Unterstützung für das Senden von Anhängen in Workflow-Mailer-Knoten hinzugefügt. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) von @mytharcher
* **[Workflow]** Unterstützung für Datenbank-Transaktionsbereiche in Workflows hinzugefügt. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) von @mytharcher
  Referenz: [Datenbanktransaktionen](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow: Datenbank-Transaktionsknoten]** Ein Plugin für Datenbank-Transaktions-Workflow-Knoten hinzugefügt. von @mytharcher

### 🚀 Verbesserungen

* **[client-v2]** Spalten von Beziehungsfeldern in Formular-Untertabellen unterstützen jetzt aktuelle Elementvariablen in Datenbereichen. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) von @gchust
* **[undefined]** Der chinesische Dokumentationsname des Versionskontroll-Plugins wurde auf „版本控制“ vereinheitlicht. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) von @cgyrock
* **[Dateimanager]** Unterstützung für auswählbaren Text in PDF-Vorschauen im Dateimanager für PDFs mit eingebettetem Text hinzugefügt. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) von @mytharcher
* **[Benutzer]** Das Layout der v2 Benutzer- und Berechtigungsseiten verbessert und das Verhalten des Abteilungsbaums optimiert. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) von @jiannx
* **[Aktion: Massenbearbeitung]** Optimiert, wie v2 Aktions-Plugins geladen werden, und die Reihenfolge migrierter Aktionsschaltflächen stabil gehalten. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) von @katherinehhh
* **[Versionskontrolle]** Der chinesische Anzeigename des Versionskontroll-Plugins wurde in „版本控制“ geändert. von @cgyrock

### 🐛 Fehlerbehebungen

* **[cli-v1]** Ein Fehler beim Ausführen von `<span>yarn dev</span>` nach dem Upgrade von Projekten, die mit create-nocobase-app von 2.0 auf 2.1 erstellt wurden, behoben. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) von @Molunerfinn
* **[flow-engine]** Probleme mit der vietnamesischen und chinesischen IME-Eingabe in v2 einzeiligen Text- und mehrzeiligen Textfeldern behoben. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) von @katherinehhh
* **[client-v2]** Behoben, dass der Migrationsfortschritt die dedizierte Fortschrittsansicht nicht anzeigte. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) von @2013xile
* **[server]** Unsichere Plugin-Namenbehandlung in `<span>pm:enable</span>` behoben, um Risiken lokaler Dateieinbindung während der Plugin-Auflösung zu vermeiden. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) von @mytharcher
* **[Asynchroner Aufgabenmanager]** Datenbankabfragefehler behoben, die durch fehlendes `<span>filterByTk</span>` beim Herunterladen asynchroner Aufgabendateien verursacht wurden. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) von @mytharcher
* **[Dateimanager]** PDF-Vorschaufehler behoben, die durch abnormales Laden des pdf.js Worker-Moduls verursacht wurden. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) von @mytharcher
* **[Block: Kanban]** Behoben, dass das Öffnen von Kalender-, Gantt- und Kanban-Blöcken im Nicht-Bearbeitungsmodus unerwartet ausgeblendete Popup-Aktionen beibehielt und wiederholt Lösch-Anfragen sendete. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) von @jiannx
* **[Aktion: Datensätze exportieren Pro]** Die Verarbeitungsmoduseinstellungen und der Hilfetext für v2 Import/Export Pro verbessert. von @katherinehhh
* **[Multi-Space]** Behoben, dass Bereichsadministratoren keine Bereichsbenutzer hinzufügen konnten, wenn sie keine Berechtigung für das Benutzer-E-Mail-Feld hatten. von @jiannx
* **[Migrationsmanager]** Mögliche Fehler beim Importieren großer Migrationsdatendateien behoben. von @2013xile
* **[Vorlagendruck]** Nicht unterstützte Vorlagendateitypen werden vor dem Start des Vorlagendrucks abgelehnt. von @2013xile
