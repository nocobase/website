---
title: "NocoBase v2.1.7: Unterstützung für Backup und Wiederherstellung von KingBase als primäre Datenbank"
description: "Versionshinweise zu v2.1.7"
---

### 🎉 Neue Funktionen

- **[Backup-Manager]** Unterstützung für Backup und Wiederherstellung von KingBase als primäre Datenbank ([#9791](https://github.com/nocobase/nocobase/pull/9791)) von @2013xile
- **[Migrations-Manager]** Unterstützung für Migrationen von KingBase als primäre Datenbank. von @2013xile

### 🚀 Verbesserungen

- **[KI: Wissensdatenbank]** Verbesserte Abfrage und Dokumentation der KI-Wissensdatenbank. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) von @cgyrock
- **[CLI]** Umgebungsvariablen-Konfigurationsschema-Version hinzugefügt ([#9782](https://github.com/nocobase/nocobase/pull/9782)) von @chenos
- **[Workflow]** Test für Aktualisierungsoptionen stabilisiert ([#9773](https://github.com/nocobase/nocobase/pull/9773)) von @mytharcher
- **[Dateimanager]** Verbesserte PDF-Vorschauen: PDF-Dateien von fremden Ursprüngen verwenden jetzt den nativen Browser-Viewer, während PDF-Dateien vom gleichen Ursprung weiterhin PDF.js nutzen. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) von @mytharcher
- **[Backup-Manager]** Tabellen, deren Sammlungs-`dataCategory` als `'runtime'` markiert ist, werden jetzt automatisch von Backups ausgeschlossen. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) von @cgyrock
- **[KI: Wissensdatenbank]** Verbesserte Dokumentsegmentierung, Segmentverwaltung, Treffertests und Unterstützung für Dokument-Workflow-Knoten in der KI-Wissensdatenbank. von @cgyrock

### 🐛 Fehlerbehebungen

- **[client-v2]**

  - Ein Problem behoben, bei dem das Absenden eines Formulars eine falsche Meldung anzeigte, wenn ein Unterformular eine Untertabelle enthielt. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) von @gchust
  - Ein Problem behoben, bei dem Ereignisabläufe in Spalten von Untertabellen falsch ausgeführt wurden. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) von @gchust
  - Unerwartetes `updateAssociationValues` aus Assoziationsfeldern entfernt ([#9812](https://github.com/nocobase/nocobase/pull/9812)) von @katherinehhh
  - Unübersetzte Ja/Nein-Optionen in den Kontrollkästchen-Dropdowns des v2-Filterformulars behoben. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) von @katherinehhh
  - Problem behoben, bei dem Ereignisflusseinstellungen nach dem Speichern eines Blocks als Vorlage nicht aktualisiert werden konnten. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) von @gchust
  - Falsche Anzeige und Formateinstellungen behoben, wenn v2-Tabellenassoziationstitelfelder Zeit-, Nur-Datum- oder Datum/Uhrzeit-Felder verwenden. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) von @katherinehhh
- **[Workflow]** Wiederherstellung des Workflow-Dispatchers nach unerwarteten Dispatch-Fehlern behoben. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) von @mytharcher
- **[Dateimanager]** 404-Fehler beim Hochladen von Dateien in Anhang-URL-Felder externer Datenquellen behoben ([#9809](https://github.com/nocobase/nocobase/pull/9809)) von @2013xile
- **[Aktion: Benutzerdefinierte Anfrage]** Problem behoben, bei dem v2-Aktionen für benutzerdefinierte Anfragen einen unnötigen Fehler anzeigten, wenn keine Anfrageeinstellungen konfiguriert waren. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) von @katherinehhh
- **[KI-Mitarbeiter]**

  - Ein Problem behoben, bei dem KI-Mitarbeiter Untertabellendaten nicht korrekt ausfüllen konnten. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) von @gchust
  - Verknüpfungsaufgabenauslöser für KI-Mitarbeiter behoben, sodass Anhänge aus dem aktuellen Arbeitskontext beim Ausführen einer Aufgabe über das Verknüpfungsprofil eingeschlossen werden. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) von @cgyrock
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem behoben, bei dem Aktionsschaltflächen zum Auslösen von Workflows im v2-Aktionspanel Erfolg anzeigten und eine Anfrage sendeten, wenn kein Workflow gebunden war. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) von @mytharcher
- **[Flow-Engine]** Ein Problem behoben, bei dem aktuelle Datensatzformulare und -details in Popups falsche Daten enthalten konnten, wenn sie von KI erstellt wurden. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) von @gchust
- **[Asynchroner Aufgabenmanager]** Fehler beim Herunterladen asynchroner Aufgabendateien behoben, wenn die Aufgaben-ID in `filterByTk` fehlte. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) von @mytharcher
- **[Datenquelle: Externes NocoBase]** Proxy für Datei-Upload- und Speicherungsaktionen externer NocoBase-Datenquellen über die Upload-Datenquelle von @2013xile
- **[Multi-Space]** Berechtigungsfehler behoben, wenn Bereichsadministratoren Benutzer ohne Zugriff auf das Benutzer-E-Mail-Feld hinzufügen. von @jiannx
- **[Workflow: Unterworkflow]** Asynchrone Unterworkflows behoben, sodass übergeordnete Workflows nach einem Worker-Neustart oder Verlust der In-Memory-Ereigniszuordnung fortgesetzt werden können. von @mytharcher
- **[App-Supervisor]** Absturz behoben, wenn Remote-WebSocket-Proxy-Antworten fehlschlagen von @2013xile
