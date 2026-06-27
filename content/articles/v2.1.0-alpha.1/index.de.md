---
title: "NocoBase v2.1.0-alpha.1: Verbesserung der Benutzeroberfläche für die Datums-/Uhrzeitfeldzuweisung zur Unterstützung der Auswahl relativer Daten/Zeiten"
description: "Versionshinweise zu v2.1.0-alpha.1"
---

### 🎉 Neue Funktionen

- **[Aktion: Stapelbearbeitung]** Stapelbearbeitung 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) von @jiannx

### 🚀 Verbesserungen

- **[Client]**
  - Verbesserung der Benutzeroberfläche für die Zuweisung von Datums-/Uhrzeitfeldern, um die Auswahl relativer Daten/Zeiten zu unterstützen. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) von @gchust

  - Unterstützung zur Angabe eines Titelfelds für Assoziationsfelder bei der Feldzuweisung. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) von @gchust

  - Tabelle 2.0 unterstützt Drag-and-Drop-Sortierung ([#8540](https://github.com/nocobase/nocobase/pull/8540)) von @jiannx

  - Verschiebung der Feldzuweisungs- und Standardwerteinstellungen in die Formularebene-Konfiguration. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) von @chenos

- **[Lokalisierung]** Automatisches Erstellen fehlender i18n-Schlüssel ([#8588](https://github.com/nocobase/nocobase/pull/8588)) von @jiannx

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Behebung eines Problems, bei dem das Untermenü des Filterfelds bei vorhandenem Suchbegriff nicht erweitert werden konnte. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) von @gchust

- **[Client]**
  - Behebung eines Problems, bei dem die Zuweisung eines einzelnen Datensatzes zu einem n:m-Beziehungsfeld zu falschen Ergebnissen führte. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) von @gchust

  - Datumsanalyse mittels Datumsauswahl und Hinzufügen der Passwortstärke-Validierung, etc. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) von @jiannx

  - Behebung des Abstandsproblems, das durch ausgeblendete verknüpfte Aktionen in der Tabellenaktionsspalte verursacht wurde ([#8646](https://github.com/nocobase/nocobase/pull/8646)) von @zhangzhonghe

  - Behebung eines Syntaxfehlers beim Auflösen, wenn ein Markdown-Element ungültiges Liquid rendert ([#8637](https://github.com/nocobase/nocobase/pull/8637)) von @katherinehhh

  - Behebung unnötiger Backend-Parsing-Anfragen für n:n-Feldeigenschaften im Formularblock. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) von @gchust

  - Behebung des Problems, dass `Action.Modal` nach bestimmten Interaktionen nicht geschlossen werden konnte ([#8642](https://github.com/nocobase/nocobase/pull/8642)) von @mytharcher

  - Behebung der fehlenden Zahlenformatierung für Zahlenformelfelder und der Datumsformateinstellungen für Datumsformelfelder ([#8625](https://github.com/nocobase/nocobase/pull/8625)) von @katherinehhh

  - Behebung der unvollständigen oberen Rahmenwiedergabe beim ersten Formularelement ([#8623](https://github.com/nocobase/nocobase/pull/8623)) von @katherinehhh

  - Behebung des Problems, dass ein geleertes Assoziations-Anhängfeld nach dem Absenden im Bearbeitungsformular nicht gespeichert wird ([#8616](https://github.com/nocobase/nocobase/pull/8616)) von @katherinehhh

  - Behebung falsch gefilterter Daten im Assoziations-Dropdown, wenn das Titelfeld ein Fremdschlüssel ist ([#8619](https://github.com/nocobase/nocobase/pull/8619)) von @katherinehhh

  - Behebung, dass ausgewählte Daten in der Datensatzauswahl-Feldkomponente nach der Bearbeitung nicht wiederhergestellt werden konnten ([#8610](https://github.com/nocobase/nocobase/pull/8610)) von @katherinehhh

  - Behebung, dass Feldkomponentenoptionen beim Wechsel des Assoziationsfeld-Musters nicht in Echtzeit aktualisiert wurden ([#8611](https://github.com/nocobase/nocobase/pull/8611)) von @katherinehhh

- **[Utils]** Behebung eines Sicherheitsproblems in der `formula.js`-Evaluator-Engine ([#8416](https://github.com/nocobase/nocobase/pull/8416)) von @mytharcher

- **[KI-Mitarbeiter]**
  - Behebung eines Problems, bei dem Zitationslinks aus KI-Websuchen nicht im Chatfenster angezeigt wurden ([#8651](https://github.com/nocobase/nocobase/pull/8651)) von @cgyrock

  - Behebung von OpenAI-API-Parameterfehlern ([#8633](https://github.com/nocobase/nocobase/pull/8633)) von @cgyrock

- **[Dateimanager]** Behebung eines Problems, bei dem die Dateifeldkomponente auch im deaktivierten Zustand den Auswahldialog öffnen konnte ([#8617](https://github.com/nocobase/nocobase/pull/8617)) von @katherinehhh
