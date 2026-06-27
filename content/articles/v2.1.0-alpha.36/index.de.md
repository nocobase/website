---
title: "NocoBase v2.1.0-alpha.36: Client v2-Unterstützung für Markdown-Blöcke hinzugefügt"
description: "Versionshinweise zu v2.1.0-alpha.36"
---

### 🎉 Neue Funktionen

- **[Block: Markdown]** Client v2-Unterstützung für Markdown-Blöcke hinzugefügt ([#9487](https://github.com/nocobase/nocobase/pull/9487)) von @jiannx

- **[Block: Liste]** Listenblöcke unterstützen jetzt Client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) von @jiannx

### 🚀 Verbesserungen

- **[flow-engine]** Eine Bestätigungsmeldung für nicht gespeicherte Änderungen wurde hinzugefügt, wenn die Konfigurationsseite für Ereignisabläufe mit ungespeicherten Daten geschlossen wird. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) von @gchust

- **[cli]** Die Benutzererfahrung der NocoBase CLI-Eingabeaufforderung wurde verbessert, indem Setup- und Verwaltungsworkflows auf Inquirer migriert wurden. Zugehörige Installations-, Skill- und Docker-Laufzeitprobleme wurden behoben. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) von @chenos

- **[Datenquellen-Manager]** Optimierung der Datenmodellierungs-API zur Unterstützung der Erstellung von Kommentarsammlungen mit KI, Konfiguration von Beziehungsfeldern für externe Datenquellen und Festlegung von Feldvalidierungsregeln ([#9480](https://github.com/nocobase/nocobase/pull/9480)) von @2013xile

- **[Block: GridCard]** Das GridCard-Plugin wurde aktualisiert, um Client v2 zu unterstützen ([#9484](https://github.com/nocobase/nocobase/pull/9484)) von @jiannx

- **[Block: iframe]** V2-Unterstützung für den iframe-Block hinzugefügt. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) von @jiannx

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem schreibgeschützte Beziehungsfelder in Untertabellen nach dem Aktualisieren nicht angezeigt oder nicht anklickbar waren. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) von @jiannx

  - Die Einstellung "Nach erfolgreicher Übermittlung" für Formular-Sendeaktionen hinzugefügt. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) von @jiannx

- **[Client-v2]** Problem behoben, bei dem die Liste der Titel-Feldoptionen für Beziehungsfelder in Tabellenblöcken leer war ([#9490](https://github.com/nocobase/nocobase/pull/9490)) von @katherinehhh

- **[flow-engine]** Problem mit instabilen Beziehungsfeld-Untermenüs in Untermodell-Menüs behoben ([#9417](https://github.com/nocobase/nocobase/pull/9417)) von @jiannx

- **[Dateimanager]** Problem behoben, bei dem `tx-cos`-Uploads im Dateimanager die Metadaten zur Dateigröße vermissten. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) von @mytharcher

- **[Sammlungsfeld: Signatur]** Darstellungsproblem des Signaturfelds auf Mobilgeräten behoben von @chenzhizdt
