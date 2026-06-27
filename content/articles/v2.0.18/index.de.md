---
title: "NocoBase v2.0.18: Ermöglicht das Hinzufügen von KI-Mitarbeitern im Popup von Untertabellen"
description: "Versionshinweise zu v2.0.18"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]**
  - Geplante Bereinigung von KI-Konversations-Checkpoint-Daten. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) von @cgyrock

  - Ermöglicht das Hinzufügen von KI-Mitarbeitern im Popup von Untertabellen ([#8873](https://github.com/nocobase/nocobase/pull/8873)) von @2013xile

- **[App-Supervisor]** Unterstützung für Filterung in der Anwendungsliste<br />Bestätigungsdialoge für Start- und Stopp-Aktionen hinzugefügt<br />Anwendungsstatuseinträge nach Umgebungsname sortiert von @2013xile

### 🚀 Verbesserungen

- **[Server]** Verbesserung der pm add-Logik ([#8875](https://github.com/nocobase/nocobase/pull/8875)) von @chenos

- **[Client]** Unterstützung für die Anzeige einer Bestätigungsmeldung vor dem Schließen eines Popups. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) von @gchust

- **[Asynchroner Aufgabenmanager]** Asynchrone Aufgaben unterstützen nun Worker beim Senden von Fehlermeldungen ([#8849](https://github.com/nocobase/nocobase/pull/8849)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem das Popup „Datensatz auswählen“ in der Untertabelle beim zweiten Öffnen nicht korrekt geladen wurde. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) von @gchust

- **[KI-Mitarbeiter]** Potenzielle Fehler durch undefinierte Variablen in KI-Plugin-Upgrade-Migrationsskripten behoben. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) von @cgyrock

- **[Aktion: Datensätze importieren Pro]** Problem behoben, bei dem asynchrone Aufgaben nach einem Fehler beim asynchronen Import nicht beendet wurden von @cgyrock
