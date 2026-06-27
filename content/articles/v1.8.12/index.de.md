---
title: "NocoBase v1.8.12: Fehlerbehebungen"
description: "Versionshinweise zu v1.8.12"
---

### 🎉 Neue Funktionen

- **[client]** Option "Automatisch fokussieren" für Input-, TextArea-, URL- und InputNumber-Komponenten hinzugefügt, die bei Aktivierung das Eingabefeld beim initialen Seitenrendering automatisch fokussiert ([#7320](https://github.com/nocobase/nocobase/pull/7320)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[client]**
  - Vorschau von Dateielementen bei null-URL korrigiert ([#7315](https://github.com/nocobase/nocobase/pull/7315)) von @mytharcher

  - Vollständige URL zu lokalen Dateien bei der Vorschau hinzugefügt ([#7314](https://github.com/nocobase/nocobase/pull/7314)) von @mytharcher

- **[utils]** Falsche Zeitzonenbehandlung bei parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) von @katherinehhh

- **[undefined]** Neues Plugin zur Voreinstellung hinzugefügt ([#7319](https://github.com/nocobase/nocobase/pull/7319)) von @mytharcher

- **[Dateimanager]** Speicherfeldberechtigung korrigiert ([#7316](https://github.com/nocobase/nocobase/pull/7316)) von @mytharcher

- **[Workflow]** Fehlerbehebung für `undefined`-Ergebnis beim Prozessor-Exit ([#7317](https://github.com/nocobase/nocobase/pull/7317)) von @mytharcher

- **[Workflow: Dynamischer Berechnungsknoten]** Fehler durch veraltete API behoben ([#7321](https://github.com/nocobase/nocobase/pull/7321)) von @mytharcher

- **[Workflow: Unterworkflow]** Angehaltener Workflow behoben von @mytharcher
