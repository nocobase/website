---
title: "NocoBase v2.1.0-alpha.10: Geplante Bereinigung von KI-Konversations-Checkpoint-Daten"
description: "Versionshinweise zu v2.1.0-alpha.10"
---

### 🎉 Neue Funktionen

- **[IdP: OAuth]** Neuer IdP: OAuth-Plugin hinzugefügt, um MCP-Diensten die Authentifizierung über OAuth zu ermöglichen ([#8896](https://github.com/nocobase/nocobase/pull/8896)) von @2013xile

- **[KI-Mitarbeiter]** Geplante Bereinigung von KI-Konversations-Checkpoint-Daten. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) von @cgyrock

- **[App-Supervisor]** Filterung in der Anwendungsliste unterstützt<br />Bestätigungsdialoge für Start- und Stopp-Aktionen hinzugefügt<br />Anwendungsstatuseinträge nach Umgebungsname sortiert von @2013xile

### 🚀 Verbesserungen

- **[Server]** Verbesserung der pm add-Logik ([#8875](https://github.com/nocobase/nocobase/pull/8875)) von @chenos

- **[Client]** Unterstützung für die Anzeige einer Bestätigungsmeldung vor dem Schließen eines Popups. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) von @gchust

- **[Undefiniert]** Hinzufügen eines dedizierten client-v2-Einstiegspunkts und unabhängiges Erstellen mit rsbuild, während v1 unverändert bleibt. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) von @Molunerfinn

- **[Workflow]**
  - Behebung des Problems, dass beim Graceful Shutdown nicht alle Ereignisse abgearbeitet werden ([#8894](https://github.com/nocobase/nocobase/pull/8894)) von @mytharcher

  - Filter für Ausführungsliste hinzugefügt ([#8914](https://github.com/nocobase/nocobase/pull/8914)) von @mytharcher

- **[Asynchroner Aufgabenmanager]** Asynchrone Aufgaben unterstützen nun das Senden von Fehlermeldungen durch Worker ([#8849](https://github.com/nocobase/nocobase/pull/8849)) von @cgyrock

- **[Workflow: Genehmigung]** Vermeidung der Konfiguration der Genehmiger-Oberfläche, wenn im Trigger keine Sammlung konfiguriert ist von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung des Problems, dass Nicht-Administratoren keine zugehörigen Feldwerte löschen konnten ([#8904](https://github.com/nocobase/nocobase/pull/8904)) von @jiannx

  - Behebung des Problems, dass das Popup „Datensatz auswählen“ in der Untertabelle beim zweiten Öffnen nicht korrekt geladen wurde. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) von @gchust

- **[Resourcer]** Verhindert die automatische Konvertierung des `filterByTk`-Parameter-Arrays in ein Objekt, wenn es mehr als 100 Elemente enthält ([#8908](https://github.com/nocobase/nocobase/pull/8908)) von @2013xile

- **[Server]** Behebung des Problems, dass vom Worker gesendete Lebenszyklus-Ereignisse zum Stoppen der Serving-App führen ([#8906](https://github.com/nocobase/nocobase/pull/8906)) von @mytharcher

- **[Datenquellen-Manager]** Behebung des Problems, dass der von einem KI-Mitarbeiter erstellten Sammlung immer die Felder `createBy` und `updateBy` fehlten ([#8895](https://github.com/nocobase/nocobase/pull/8895)) von @cgyrock

- **[KI-Mitarbeiter]**
  - Behebung des Problems, dass die angegebene URL für den LLM-Dienst bei Text-Einbettungs-Modellaufrufen nicht wirksam wurde. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) von @cgyrock

  - Behebung potenzieller undefinierter Variablenfehler in KI-Plugin-Upgrade-Migrationsskripten. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) von @cgyrock

- **[Aktion: Datensätze importieren Pro]**
  - Behebung des Problems, dass bei mehr als ~30 Spalten ein Importfehler auftritt, da der Stream doppelt gelesen wurde von @mytharcher

  - Behebung des Problems, dass im synchronen Modus ein Fehler beim Import ausgelöst wurde von @mytharcher

  - Behebung, dass das `beforeStop`-Ereignis in der Unter-App nicht ausgelöst wurde von @mytharcher

  - Behebung des Problems, dass asynchrone Aufgaben nach einem Fehler beim asynchronen Import nicht beendet wurden von @cgyrock

  - Behebung eines durch Lazy Import verursachten SES-Fehlers von @mytharcher

- **[Vorlagendruck]** Behebung eines Druckfehlers bei SQL-Sammlungen von @jiannx

- **[Workflow: Genehmigung]** Behebung eines Parallelitätsproblems beim Hinzufügen von Bearbeitern von @mytharcher

- **[E-Mail-Manager]** Behebung eines Seitenfehlers, wenn die E-Mail nicht existiert von @jiannx

- **[Migrations-Manager]** Behebung des Problems, dass die Migration aufgrund eines Fehlers unterbrochen wird, der dadurch verursacht wird, dass die Zielumgebung die während des Upload-Migrationsprozesses erstellte neue Tabelle nicht hat. von @Andrew1989Y
