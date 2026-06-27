---
title: "NocoBase v1.8.0-alpha.10: Unterstützung für bedarfsgesteuertes Laden von Sammlungen aus externen Datenquellen"
description: "Versionshinweise zu v1.8.0-alpha.10"
---

### 🎉 Neue Funktionen

- **[Datenquellen-Manager]** ✨ Unterstützung für bedarfsgesteuertes Laden von Sammlungen aus externen Datenquellen ([#6979](https://github.com/nocobase/nocobase/pull/6979)) von @aaaaaajie

- **[Workflow: HTTP-Request-Knoten]** Unterstützung für `multipart/form-data`-Anfragen ([#7087](https://github.com/nocobase/nocobase/pull/7087)) von @shushu992

- **[Datenquelle: Externer SQL Server]** Unterstützung für bedarfsgesteuertes Laden von Sammlungen aus externen Datenquellen von @aaaaaajie

### 🐛 Fehlerbehebungen

- **[Client]**
  - Wenn URL-Abfrageparameter-Variablen leer sind, werden die Datenbereichsbedingungen nicht entfernt ([#7104](https://github.com/nocobase/nocobase/pull/7104)) von @zhangzhonghe

  - Falsche Bereichseinschränkung bei Datumsfeldern mit Uhrzeit ([#7107](https://github.com/nocobase/nocobase/pull/7107)) von @katherinehhh

- **[Mobil]** Behebung des z-index-Problems bei mobilen Popups ([#7110](https://github.com/nocobase/nocobase/pull/7110)) von @zhangzhonghe

- **[Kalender]** Problem mit Datumsfeld im Schnellerstellungsformular des Kalenderblocks ([#7106](https://github.com/nocobase/nocobase/pull/7106)) von @katherinehhh

- **[Workflow: Genehmigung]**
  - Behebung der alten Variablen-API, die einen Fehler auslöst von @mytharcher

  - Behebung der mobilen Stile von @mytharcher

  - Behebung des Fehlers, der ausgelöst wird, wenn die genehmigungsbezogene Sammlung gelöscht wird von @mytharcher

- **[E-Mail-Manager]** Anhang wird nicht angezeigt von @jiannx
