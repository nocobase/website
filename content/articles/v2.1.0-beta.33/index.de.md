---
title: "NocoBase v2.1.0-beta.33: Client v2-Unterstützung für Markdown-Blöcke hinzugefügt"
description: "Versionshinweise zu v2.1.0-beta.33"
---

### 🎉 Neue Funktionen

- **[Block: Markdown]** Client v2-Unterstützung für Markdown-Blöcke hinzugefügt ([#9487](https://github.com/nocobase/nocobase/pull/9487)) von @jiannx

- **[Block: Liste]** Listenblöcke unterstützen jetzt Client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) von @jiannx

- **[Kalender]** Client v2-Unterstützung für das Kalender-Plugin hinzugefügt. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) von @jiannx

- **[Block: Baum]** Client-v2-Unterstützung für den Baumfilterblock hinzugefügt. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) von @jiannx

### 🚀 Verbesserungen

- **[flow-engine]** Eine Bestätigungsmeldung für ungespeicherte Änderungen wurde hinzugefügt, die erscheint, wenn die Konfigurationsseite für Ereignisabläufe mit ungespeicherten Daten geschlossen wird. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) von @gchust

- **[Datenquellen-Manager]** Optimierung der Datenmodellierungs-API zur Unterstützung der Erstellung von Kommentarsammlungen mit KI, Konfiguration von Beziehungsfeldern für externe Datenquellen und Festlegung von Feldvalidierungsregeln ([#9480](https://github.com/nocobase/nocobase/pull/9480)) von @2013xile

- **[Block: GridCard]** Das GridCard-Plugin wurde aktualisiert, um Client v2 zu unterstützen ([#9484](https://github.com/nocobase/nocobase/pull/9484)) von @jiannx

- **[Block: iframe]** V2-Unterstützung für den Iframe-Block hinzugefügt. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) von @jiannx

- **[KI-Mitarbeiter]** Parallele Konversationsinteraktion und Leistungsoptimierung für KI-Mitarbeiter ([#9462](https://github.com/nocobase/nocobase/pull/9462)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[client]**
  - Die Einstellung "Nach erfolgreicher Übermittlung" für Formular-Sendeaktionen hinzugefügt. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) von @jiannx

  - Behoben: Öffnen der Schnellbearbeitung für Assoziationsfelder in Tabellen verhindert ([#9469](https://github.com/nocobase/nocobase/pull/9469)) von @katherinehhh

  - Behoben: Anzeige-only-Beziehungsfelder in Untertabellen wurden nach dem Aktualisieren nicht angezeigt oder waren nicht anklickbar. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) von @jiannx

  - Behoben: Problem, dass alte Standardwerteinstellungen nicht entfernt werden konnten. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) von @gchust

  - Behoben: Mehrfachauswahlfelder in v2-Datenblöcken sollten jetzt Optionsbezeichnungen anstelle von Werten anzeigen ([#9472](https://github.com/nocobase/nocobase/pull/9472)) von @katherinehhh

- **[client-v2]**
  - Behoben: Problem, dass die Optionsliste für das Titelfeld bei Beziehungsfeldern in Tabellenblöcken leer war ([#9490](https://github.com/nocobase/nocobase/pull/9490)) von @katherinehhh

  - Leere Gruppen nach dem Filtern von v1-Menüs im v2-Layout beibehalten ([#9478](https://github.com/nocobase/nocobase/pull/9478)) von @zhangzhonghe

- **[flow-engine]** Behoben: Instabile Untermenüs für Beziehungsfelder in Untermodell-Menüs ([#9417](https://github.com/nocobase/nocobase/pull/9417)) von @jiannx

- **[Dateimanager]** Behoben: Fehlende Dateigrößen-Metadaten bei `tx-cos`-Uploads im Dateimanager. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) von @mytharcher

- **[KI-Mitarbeiter]** Behoben: Ladefehler von plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) von @cgyrock

- **[Block: Mehrschritt-Formular]** Behoben: Bildlaufleistenproblem bei aktivierter Vollhöhe im v1-Schrittformularblock ([#9468](https://github.com/nocobase/nocobase/pull/9468)) von @katherinehhh

- **[Workflow: Webhook]** Behoben: Problem, dass das Erstellen eines Antwortknotens durch die Validierung der `statusCode`-Konfiguration abgefangen wurde von @mytharcher

- **[Sammlungsfeld: Unterschrift]** Problem mit der Anzeige des Unterschriftenfelds auf Mobilgeräten behoben von @chenzhizdt
