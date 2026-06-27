---
title: "NocoBase v2.1.0-beta.1: Überarbeitung des App-Supervisors zur Unterstützung der Multi-App-Verwaltung in verschiedenen Szenarien"
description: "Versionshinweise zu v2.1.0-beta.1"
---

### 🎉 Neue Funktionen

- **[Server]** Überarbeitung des App-Supervisors zur Unterstützung der Multi-App-Verwaltung in verschiedenen Szenarien ([#8043](https://github.com/nocobase/nocobase/pull/8043)) von @2013xile

### 🚀 Verbesserungen

- **[Client]**
  - Verbesserung der Benutzeroberfläche für die Zuweisung von Datums-/Uhrzeitfeldern zur Unterstützung der Auswahl relativer Daten/Zeiten. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) von @gchust

  - Unterstützung der Angabe eines Titelfelds für Assoziationsfelder bei der Feldzuweisung. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) von @gchust

### 🐛 Fehlerbehebungen

- **[Flow-Engine]**
  - Behebung eines Problems, bei dem das Untermenü des Filterfelds nicht erweitert werden konnte, wenn ein Suchbegriff vorhanden war. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) von @gchust

  - Behebung, dass die Spaltenlöschaktion in der Popup-Untertabelle nicht funktionierte, wenn createModelOptions konfiguriert war ([#8560](https://github.com/nocobase/nocobase/pull/8560)) von @katherinehhh

- **[Client]**
  - Behebung eines Problems, bei dem die Zuweisung eines einzelnen Datensatzes zu einem Viele-zu-Viele-Beziehungsfeld zu falschen Ergebnissen führte. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) von @gchust

  - Datumsanalyse mit der Datumsauswahl und Hinzufügung der Passwortstärke-Validierung usw. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) von @jiannx

  - Behebung des Abstandsproblems, das durch ausgeblendete verknüpfte Aktionen in der Tabellenaktionsspalte verursacht wurde ([#8646](https://github.com/nocobase/nocobase/pull/8646)) von @zhangzhonghe

  - Behebung des Problems, dass `Action.Modal` nach bestimmten Interaktionen nicht geschlossen werden konnte ([#8642](https://github.com/nocobase/nocobase/pull/8642)) von @mytharcher

  - Behebung eines Syntaxfehlers beim Auflösen, wenn ein Markdown-Element ungültiges Liquid rendert ([#8637](https://github.com/nocobase/nocobase/pull/8637)) von @katherinehhh

  - Behebung unnötiger Backend-Parsing-Anfragen für To-Many-Feldeigenschaften in Formularblöcken. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) von @gchust

  - Behebung des fehlenden Zahlenformats für Zahlenformelfelder und des Datumsformats für Datumsformelfelder ([#8625](https://github.com/nocobase/nocobase/pull/8625)) von @katherinehhh

  - Behebung der unvollständigen Darstellung des oberen Rahmens beim ersten Formularelement ([#8623](https://github.com/nocobase/nocobase/pull/8623)) von @katherinehhh

  - Behebung: Ausblenden von "Baumtabelle aktivieren" und "Alle Zeilen standardmäßig erweitern" für Nicht-Baum-Sammlungen ([#8566](https://github.com/nocobase/nocobase/pull/8566)) von @katherinehhh

- **[Utils]** Behebung eines Sicherheitsproblems in der `formula.js`-Evaluierungs-Engine ([#8416](https://github.com/nocobase/nocobase/pull/8416)) von @mytharcher

- **[KI-Mitarbeiter]**
  - Behebung eines Problems, bei dem Zitationslinks aus KI-Websuchen nicht im Chatfenster angezeigt wurden ([#8651](https://github.com/nocobase/nocobase/pull/8651)) von @cgyrock

  - Behebung von Fehlern in den OpenAI-API-Parametern ([#8633](https://github.com/nocobase/nocobase/pull/8633)) von @cgyrock

- **[Vorlagendruck]** Behebung von Rendering-Fehlern durch Felder mit demselben Schlüssel von @jiannx

- **[Workflow: Genehmigung]**
  - Behebung des Problems, dass ein Fehler ausgelöst wurde, wenn ein gelöschter Datensatz genehmigt wurde von @mytharcher

  - Behebung des Problems, dass Genehmigungsdaten nicht im Detail-Popup des Datensatzes angezeigt wurden, wenn der Workflow-Modus auf "Vor dem Speichern" gesetzt war von @mytharcher
