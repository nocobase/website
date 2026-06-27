---
title: "NocoBase v2.1.0-beta.10: Geplante Bereinigung von KI-Konversations-Checkpoint-Daten"
description: "Versionshinweise zu v2.1.0-beta.10"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]**
  - Ermöglicht das Hinzufügen von KI-Mitarbeitern im Popup von Untertabellen ([#8873](https://github.com/nocobase/nocobase/pull/8873)) von @2013xile

  - Geplante Bereinigung von KI-Konversations-Checkpoint-Daten. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) von @cgyrock

- **[App-Supervisor]** Unterstützung für Filterung in der Anwendungsliste<br />Bestätigungsdialoge für Start- und Stopp-Aktionen hinzugefügt<br />Anwendungsstatuseinträge nach Umgebungsname sortiert von @2013xile

### 🚀 Verbesserungen

- **[Server]** Verbesserung der pm add-Logik ([#8875](https://github.com/nocobase/nocobase/pull/8875)) von @chenos

- **[Undefiniert]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) von @gaston98765

- **[Client]** Unterstützung für die Anzeige einer Bestätigungsmeldung vor dem Schließen eines Popups. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) von @gchust

- **[Workflow]** Behebung des Problems, dass beim Graceful Shutdown nicht alle Ereignisse abgearbeitet werden ([#8894](https://github.com/nocobase/nocobase/pull/8894)) von @mytharcher

- **[Async-Task-Manager]** Asynchrone Aufgaben unterstützen nun Worker beim Senden von Fehlermeldungen ([#8849](https://github.com/nocobase/nocobase/pull/8849)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung des Problems, dass das Popup „Datensatz auswählen“ in der Untertabelle beim zweiten Öffnen nicht korrekt geladen wurde. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) von @gchust

  - Behebung des Problems, dass die Standardwerte einiger Felder nach dem Aktualisieren der Seite nicht wirksam wurden. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) von @gchust

- **[Datenbank]** Behebung des serverseitigen Validierungsproblems für Datumsfelder ([#8867](https://github.com/nocobase/nocobase/pull/8867)) von @2013xile

- **[Datenquellen-Manager]** Behebung des Problems, dass von KI-Mitarbeitern erstellte Sammlungen immer die Felder `createBy` und `updateBy` vermissen ließen ([#8895](https://github.com/nocobase/nocobase/pull/8895)) von @cgyrock

- **[KI-Mitarbeiter]**
  - Behebung des Problems, dass die angegebene URL für den LLM-Dienst bei Text-Embedding-Modellaufrufen nicht wirksam wurde. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) von @cgyrock

  - Behebung potenzieller Fehler durch undefinierte Variablen in Migrationsskripten für KI-Plugin-Upgrades. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) von @cgyrock

- **[Lokalisierung]** localizationTexts: Ausnahme bei fehlender Schnittstellenberechtigung ([#8861](https://github.com/nocobase/nocobase/pull/8861)) von @jiannx

- **[Aktion: Datensätze importieren Pro]**
  - Behebung, dass das `beforeStop`-Ereignis in Sub-Apps nicht ausgelöst wurde von @mytharcher

  - Behebung eines SES-Fehlers durch verzögerten Import von @mytharcher

  - Behebung des Problems, dass asynchrone Aufgaben nach einem Fehler beim asynchronen Import nicht beendet werden von @cgyrock

- **[KI: Wissensdatenbank]** Verhindert das Löschen der verwendeten Vektordatenbank und des Vektorspeichers. von @cgyrock

- **[Vorlagendruck]** Behebung eines Druckfehlers bei SQL-Sammlungen von @jiannx

- **[E-Mail-Manager]** Behebung eines Seitenfehlers, wenn die E-Mail nicht existiert von @jiannx
