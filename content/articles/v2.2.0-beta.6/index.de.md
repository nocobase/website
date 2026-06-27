---
title: "NocoBase v2.2.0-beta.6: Unterstützung für mobiles Layout hinzugefügt"
description: "Versionshinweise zu v2.2.0-beta.6"
---

### 🎉 Neue Funktionen

- **[cli]** Unterstützung für Installations-Hook-Skripte ([#9824](https://github.com/nocobase/nocobase/pull/9824)) von @chenos
- **[UI-Layout]** Unterstützung für mobiles Layout hinzugefügt ([#9641](https://github.com/nocobase/nocobase/pull/9641)) von @zhangzhonghe
- **[Backup-Manager]** Unterstützung für Backup und Wiederherstellung mit KingBase als primärer Datenbank ([#9791](https://github.com/nocobase/nocobase/pull/9791)) von @2013xile
- **[Multi-Portal]** Multi-Portal-Plugin hinzugefügt von @zhangzhonghe
- **[Migrations-Manager]** Unterstützung für Migrationen mit KingBase als primärer Datenbank von @2013xile

### 🚀 Verbesserungen

- **[client-v2]**

  - Feldvalidierungsregeln werden jetzt als schreibgeschützte vererbte Regeln in den UI-Feldvalidierungseinstellungen angezeigt ([#9819](https://github.com/nocobase/nocobase/pull/9819)) von @katherinehhh
  - Option zum Überschreiben von Werten für Feldeinstellungen hinzugefügt ([#9578](https://github.com/nocobase/nocobase/pull/9578)) von @gchust
- **[undefined]** Verbesserte KI-Wissensdatenbank-Abfrage und Dokumentation ([#9765](https://github.com/nocobase/nocobase/pull/9765)) von @cgyrock
- **[Flow-Engine]**

  - Der aktuelle Block wird beim Erstellen von KI-Mitarbeitern über die Flow Surface API standardmäßig zum Benutzerkontext hinzugefügt ([#9840](https://github.com/nocobase/nocobase/pull/9840)) von @gchust
  - Globale RunJS-Browser-Objekte geöffnet ([#9841](https://github.com/nocobase/nocobase/pull/9841)) von @gchust
- **[Workflow]** Stabilisierung der Update-Optionen-Tests ([#9773](https://github.com/nocobase/nocobase/pull/9773)) von @mytharcher
- **[Zugriffskontrolle]** Die Einstellungsseiten für Benutzer & Berechtigungen in v2 wurden an das Verhalten von v1 angeglichen, einschließlich Paginierungssummen, Baumstruktur von Abteilungen, Auswahlstilen und internem Scrollen im Berechtigungsbereich ([#9810](https://github.com/nocobase/nocobase/pull/9810)) von @jiannx
- **[Backup-Manager]** Tabellen, deren Sammlungs-`dataCategory` als `'runtime'` markiert ist, werden jetzt automatisch von Backups ausgeschlossen ([#9804](https://github.com/nocobase/nocobase/pull/9804)) von @cgyrock
- **[KI: Wissensdatenbank]** Verbesserte Dokumentsegmentierung, Segmentverwaltung, Treffertests und Unterstützung für Workflow-Knoten in der KI-Wissensdatenbank von @cgyrock

### 🐛 Fehlerbehebungen

- **[client-v2]**

  - Behoben: Block wurde nach Aktualisierung der Blockeinstellungen nicht aktualisiert ([#9843](https://github.com/nocobase/nocobase/pull/9843)) von @gchust
  - Behoben: Benutzerdefinierte Aktions-Workflow-Trigger-Buttons sendeten benutzerdefinierten Kontext-JSON unter einer zusätzlichen `values`-Eigenschaft oder als serialisierten String ([#9815](https://github.com/nocobase/nocobase/pull/9815)) von @mytharcher
  - Behoben: Ein Problem, bei dem die Konfiguration eines Assoziationsfeldwerts als fester Wert oder Standardwert nicht wirksam wurde ([#9820](https://github.com/nocobase/nocobase/pull/9820)) von @gchust
  - Behoben: Ein Problem, bei dem Ereignisflüsse in Untertabellenspalten falsch ausgeführt wurden ([#9821](https://github.com/nocobase/nocobase/pull/9821)) von @gchust
  - Entfernung von unerwartetem `updateAssociationValues` aus Assoziationsfeldern ([#9812](https://github.com/nocobase/nocobase/pull/9812)) von @katherinehhh
  - Behoben: Ein Problem, bei dem die Formularübermittlung eine falsche Meldung anzeigte, wenn ein Unterformular eine Untertabelle enthielt ([#9807](https://github.com/nocobase/nocobase/pull/9807)) von @gchust
- **[ai]**

  - Behoben: Inkompatible LangChain-Abhängigkeitsauflösungen für KI-Plugins ([#9831](https://github.com/nocobase/nocobase/pull/9831)) von @cgyrock
  - `@langchain/openai` auf Patch-Level-Updates für KI-Pakete eingeschränkt ([#9829](https://github.com/nocobase/nocobase/pull/9829)) von @cgyrock
- **[app]** Ignorieren von nicht zusammenhängendem `currentScript` bei der Ableitung des öffentlichen Plugin-Pfads ([#9839](https://github.com/nocobase/nocobase/pull/9839)) von @chenos
- **[auth]** Verschlüsselte Passwortdaten werden nicht mehr in den Antworten zum Anmeldestatus enthalten ([#9836](https://github.com/nocobase/nocobase/pull/9836)) von @2013xile
- **[Block: Gantt]** Behoben: Gantt-Aufgaben-Popup-Vorlageneinstellungen wurden nicht korrekt angewendet oder zurückgesetzt ([#9835](https://github.com/nocobase/nocobase/pull/9835)) von @jiannx
- **[Aktion: Drucken]** Behoben: Beim Drucken von v2-Detailblöcken wird bei leeren Detailblöcken nicht mehr die gesamte Seite gedruckt ([#9832](https://github.com/nocobase/nocobase/pull/9832)) von @katherinehhh
- **[UI-Vorlagen]** Behoben: Falscher Standardkontext für `ctx.openview` ([#9811](https://github.com/nocobase/nocobase/pull/9811)) von @gchust
- **[Dateimanager]** Behoben: 404-Fehler beim Hochladen von Dateien in Anhang-URL-Felder in externen Datenquellen ([#9809](https://github.com/nocobase/nocobase/pull/9809)) von @2013xile
- **[Aktion: Benutzerdefinierte Anfrage]** Behoben: V2-Aktionen für benutzerdefinierte Anfragen zeigten einen zusätzlichen Fehler an, wenn keine Anfrageeinstellungen konfiguriert waren ([#9802](https://github.com/nocobase/nocobase/pull/9802)) von @katherinehhh
- **[Workflow]** Behoben: Wiederherstellung des Workflow-Dispatchers nach unerwarteten Dispatch-Fehlern ([#9783](https://github.com/nocobase/nocobase/pull/9783)) von @mytharcher
- **[KI-Mitarbeiter]** Behoben: KI-Mitarbeiter-Verknüpfungsaufgaben-Trigger berücksichtigen jetzt Anhänge aus dem aktuellen Arbeitskontext, wenn eine Aufgabe über das Verknüpfungsprofil ausgeführt wird ([#9808](https://github.com/nocobase/nocobase/pull/9808)) von @cgyrock
- **[Datenquelle: Externes NocoBase]** Proxy für Datei-Upload- und Speicher-Aktionen externer NocoBase-Datenquellen über die Upload-Datenquelle von @2013xile
- **[KI: Wissensdatenbank]**

  - Behoben: Inkompatible LangChain-Abhängigkeitsauflösungen für das KI-Wissensdatenbank-Plugin von @cgyrock
  - Behoben: Unklare Fehlermeldungen beim Aktivieren des KI-Wissensdatenbank-Plugins ohne verfügbares KI-Plugin von @cgyrock
- **[Multi-Space]** Behoben: Authentifizierungs-Wiederherstellungsanfragen wurden durch veraltete Multi-Space-Header blockiert von @jiannx
- **[Workflow: Unterworkflow]** Behoben: Asynchrone Unterworkflows ermöglichen jetzt die Wiederaufnahme von übergeordneten Workflows nach einem Worker-Neustart oder Verlust der In-Memory-Ereigniszuordnung von @mytharcher
- **[Workflow: Genehmigung]** Behebung eines Problems, bei dem zugehörige Genehmigungen nicht korrekt geladen oder aktualisiert wurden von @zhangzhonghe
- **[App-Supervisor]** Behoben: Absturz bei fehlgeschlagenen Remote-WebSocket-Proxy-Antworten von @2013xile
