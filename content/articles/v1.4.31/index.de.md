---
title: "NocoBase v1.4.31: Optimierung der Filterkomponente im Filterformular zur Anpassung an die filterbaren Einstellungen"
description: "Versionshinweise zu v1.4.31"
---

### 🚀 Verbesserungen

- **[Client]** Optimierung der Filterkomponente im Filterformular zur Anpassung an die filterbaren Einstellungen ([#6110](https://github.com/nocobase/nocobase/pull/6110)) von @katherinehhh

- **[Dateimanager]** Ermöglicht das Löschen von Dateien, wenn der Datei- (Anhangs-) Datensatz gelöscht wird ([#6127](https://github.com/nocobase/nocobase/pull/6127)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Datenbank]**
  - Fehlerbehebung beim Filtern nach UUID-Feld ([#6138](https://github.com/nocobase/nocobase/pull/6138)) von @chareice

  - Fehlerbehebung beim Aktualisieren einer Sammlung ohne Primärschlüssel ([#6124](https://github.com/nocobase/nocobase/pull/6124)) von @chareice

- **[Client]**
  - Die Seite zur Datenquellenverwaltung meldet einen Fehler ([#6141](https://github.com/nocobase/nocobase/pull/6141)) von @zhangzhonghe

  - Wenn die Bedingungen der Verknüpfungsregel Assoziationsfelder betreffen, die nicht angezeigt werden, wird die Verknüpfungsregel der Schaltfläche unwirksam ([#6140](https://github.com/nocobase/nocobase/pull/6140)) von @zhangzhonghe

  - Fehlerbehebung bei falscher Variablenanzeige im Schnellhinzufügungsformular für Assoziationsfelder ([#6119](https://github.com/nocobase/nocobase/pull/6119)) von @katherinehhh

  - Der Inhalt wird im Schnellhinzufügungs-Popup nicht angezeigt ([#6123](https://github.com/nocobase/nocobase/pull/6123)) von @zhangzhonghe

  - Fehlerbehebung für das Problem, dass Assoziationsfeld-Blöcke keine Daten anfordern ([#6125](https://github.com/nocobase/nocobase/pull/6125)) von @zhangzhonghe

  - Fehlerbehebung für Verknüpfungsregeln in Untertabellen/Unterformularen, die Blöcke in Assoziationsfeld-Popups beeinflussen ([#5543](https://github.com/nocobase/nocobase/pull/5543)) von @katherinehhh

- **[Sammlungsfeld: Verwaltungsgliederung Chinas]** Fehlerbehebung der ACL-Berechtigung mit chinaRegion ([#6137](https://github.com/nocobase/nocobase/pull/6137)) von @chareice

- **[Workflow]** Fehlerbehebung für falsch generiertes SQL ([#6128](https://github.com/nocobase/nocobase/pull/6128)) von @mytharcher

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Fehlerbehebung für das Problem, dass die Aktualisierung von Viele-zu-viele (Array)-Feldern in einem Unterformular nicht funktioniert ([#6136](https://github.com/nocobase/nocobase/pull/6136)) von @2013xile

- **[Mobil]** Fehlerbehebung für anklickbare Auswahl im Nur-Lese-Modus und Textüberlaufproblem auf Mobilgeräten ([#6130](https://github.com/nocobase/nocobase/pull/6130)) von @katherinehhh
