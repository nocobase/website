---
title: "NocoBase v1.8.0-beta.11: Unterstützung für `multipart/form-data`-Anfragen"
description: "Versionshinweise zu v1.8.0-beta.11"
---

### 🎉 Neue Funktionen

- **[Workflow: HTTP-Request-Knoten]** Unterstützung für `multipart/form-data`-Anfragen ([#7087](https://github.com/nocobase/nocobase/pull/7087)) von @shushu992

### 🚀 Verbesserungen

- **[Workflow]**
  - Optimierung des mobilen Stils ([#7040](https://github.com/nocobase/nocobase/pull/7040)) von @mytharcher

  - Anpassung der API von `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) von @mytharcher

- **[Öffentliche Formulare]** Optimierung der Leistung von Datumskomponenten in öffentlichen Formularen ([#7117](https://github.com/nocobase/nocobase/pull/7117)) von @zhangzhonghe

- **[Workflow: Voraktions-Ereignis]** Anpassung der Variablen-API von @mytharcher

- **[Workflow: Genehmigung]** Anpassung der Variablen-API von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Falsche Bereichseinschränkung bei Datumsfeldern mit Uhrzeit ([#7107](https://github.com/nocobase/nocobase/pull/7107)) von @katherinehhh

  - Wenn URL-Abfrageparameter-Variablen leer sind, werden die Datenbereichsbedingungen nicht entfernt ([#7104](https://github.com/nocobase/nocobase/pull/7104)) von @zhangzhonghe

- **[Workflow]**
  - Korrektur der Parameter beim Laden von Datensätzen in Aufgaben ([#7123](https://github.com/nocobase/nocobase/pull/7123)) von @mytharcher

  - Korrektur der fehlerhaft ausgeführten Prüfung bei großen Ganzzahlen ([#7099](https://github.com/nocobase/nocobase/pull/7099)) von @mytharcher

  - Korrektur der durch eine nicht aktuelle Workflow-Version kaskadiert gelöschten Statistiken ([#7103](https://github.com/nocobase/nocobase/pull/7103)) von @mytharcher

- **[Mobil]** Behebung des Z-Index-Problems bei mobilen Popups ([#7110](https://github.com/nocobase/nocobase/pull/7110)) von @zhangzhonghe

- **[WEB-Client]** Behebung des Problems, dass Blöcke unter Seiten nach dem Festlegen von Rollen-Menüberechtigungen nicht angezeigt wurden ([#7112](https://github.com/nocobase/nocobase/pull/7112)) von @aaaaaajie

- **[Kalender]** Problem mit dem Datumsfeld im Schnellerstellungsformular des Kalenderblocks ([#7106](https://github.com/nocobase/nocobase/pull/7106)) von @katherinehhh

- **[Aktion: Datensätze importieren]** Behebung des Anmeldefehlerproblems nach dem Batch-Import von Benutzernamen und Passwörtern ([#7076](https://github.com/nocobase/nocobase/pull/7076)) von @aaaaaajie

- **[Workflow: Genehmigung]**
  - Korrektur des Fehlers beim Löschen einer genehmigungsbezogenen Sammlung von @mytharcher

  - Korrektur der mobilen Stile von @mytharcher

  - Korrektur des Antragstellervariablennamens im Trigger von @mytharcher

  - Nur Teilnehmer können die Details der Genehmigung anzeigen (abrufen) von @mytharcher

  - Korrektur der alten Variablen-API, die einen Fehler auslöst von @mytharcher
