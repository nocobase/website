---
title: "NocoBase v1.4.11: Optimierung der Komponentenkonfigurationselemente"
description: "Versionshinweise zu v1.4.11"
---

### 🚀 Verbesserungen

- **[Client]** Weitere Komponenten unterstützen jetzt den Konfigurationseintrag 'Ellipsis overflow content' (Textüberlauf mit Auslassungspunkten) ([#5888](https://github.com/nocobase/nocobase/pull/5888)) von @zhangzhonghe

- **[Datenbank]** `firstOrCreate` & `updateOrCreate` zum Beziehungs-Repository hinzugefügt ([#5894](https://github.com/nocobase/nocobase/pull/5894)) von @chareice

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehlender `x-data-source`-Parameter in der Duplikatanfragevorlage für externe Datenquellenblöcke behoben ([#5882](https://github.com/nocobase/nocobase/pull/5882)) von @katherinehhh

  - Problem mit der horizontalen Bildlaufleiste in Tabellen innerhalb von Plugins behoben ([#5899](https://github.com/nocobase/nocobase/pull/5899)) von @katherinehhh

  - Problem behoben, bei dem manchmal zusätzliche 'N/A'-Optionen in Dropdown-Menüs von Assoziationsfeldern erschienen ([#5878](https://github.com/nocobase/nocobase/pull/5878)) von @zhangzhonghe

  - Problem bei der PG-Ansichtserstellung behoben; Fehler beim Auswählen von Ansichten über Schemas hinweg behoben ([#5881](https://github.com/nocobase/nocobase/pull/5881)) von @katherinehhh

  - Problem mit Gruppenstilen in Formularblöcken bei horizontalem Layout behoben ([#5884](https://github.com/nocobase/nocobase/pull/5884)) von @katherinehhh

- **[Benutzer]**
  - Problem behoben, bei dem das Formular nach dem Hinzufügen oder Bearbeiten eines Benutzers in der Benutzerverwaltung nicht zurückgesetzt wurde. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) von @2013xile

  - Probleme behoben, bei denen die Seiteneinstellungen nach dem Bearbeiten und Absenden von Benutzerprofilen in der Benutzerverwaltung nach einem Seitenwechsel oder einer Änderung der Seitengröße zurückgesetzt wurden. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) von @2013xile

- **[Datenquellen-Manager]** Filterprobleme mit der externen Datenquellen-Collection behoben ([#5890](https://github.com/nocobase/nocobase/pull/5890)) von @chareice

- **[Öffentliche Formulare]** Problem behoben, bei dem der globale Themenwechsel das Thema der öffentlichen Formularvorschauseite beeinflusste ([#5883](https://github.com/nocobase/nocobase/pull/5883)) von @katherinehhh
