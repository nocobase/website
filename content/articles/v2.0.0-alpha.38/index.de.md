---
title: "NocoBase v2.0.0-alpha.38: Unterstützung für Drag & Drop bei Tabellenspaltenaktionen"
description: "Versionshinweise zu v2.0.0-alpha.38"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Drag & Drop bei Tabellenspaltenaktionen ([#7842](https://github.com/nocobase/nocobase/pull/7842)) von @zhangzhonghe

- **[Datenvisualisierung]** SQL-Datenquelle für Diagramme hinzugefügt ([#7830](https://github.com/nocobase/nocobase/pull/7830)) von @heziqiang

### 🚀 Verbesserungen

- **[Client]** Unterstützung für die Day.js-Bibliothek im RunJS-Scripting-Kontext hinzugefügt, um einfachere Datums- und Zeitmanipulationen zu ermöglichen. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) von @gchust

### 🐛 Fehlerbehebungen

- **[Utils]**
  - Fehler "Ungültiger Filterelement-Typ" beim Filter-Button behoben ([#7838](https://github.com/nocobase/nocobase/pull/7838)) von @zhangzhonghe

  - Objektzusammenführung in der Intersect-Strategie aktiviert ([#7840](https://github.com/nocobase/nocobase/pull/7840)) von @chenos

  - Fehler "Nicht erkannte Operation" im Ereignisablauf behoben ([#7835](https://github.com/nocobase/nocobase/pull/7835)) von @zhangzhonghe

- **[Client]**
  - Ein Problem behoben, bei dem die Verknüpfungsregeln für Zeilenaktionsschaltflächen in einem Tabellenblock nach der Aktualisierung der Zeilendaten nicht erneut ausgeführt wurden. Die Regeln werden nun bei Änderungen korrekt erneut angewendet. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) von @gchust

  - Fehler beim Vorschauen von Code im Code-Editor behoben, wenn der Code JSX-Syntax enthält ([#7836](https://github.com/nocobase/nocobase/pull/7836)) von @gchust

- **[Undefiniert]** Problem mit falscher Formatierung der Plugin-Dokumentations-Startseite im Dunkelmodus behoben. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) von @gchust

- **[Dateimanager]** Konfigurationsprobleme von Tabellenblockfeldern behoben ([#7843](https://github.com/nocobase/nocobase/pull/7843)) von @katherinehhh

- **[KI-Mitarbeiter]** KI-Mitarbeiter-Chat-Button auf v1-Seiten ausgeblendet ([#7829](https://github.com/nocobase/nocobase/pull/7829)) von @cgyrock

- **[Datenvisualisierung: ECharts]** Problem mit der ECharts-Konfiguration labelType behoben von @heziqiang

- **[E-Mail-Manager]**
  - Fehler bei Entwürfen behoben von @jiannx

  - Synchronisation des Lesestatus von Microsoft Mail ohne Zeitstempel von @jiannx
