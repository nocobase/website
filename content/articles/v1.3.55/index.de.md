---
title: "NocoBase v1.3.55: Symbole mit präziserer Bedeutung für Block-Initialisierer verwenden"
description: "Versionshinweise zu v1.3.55"
---

### 🚀 Verbesserungen

- **[Client]** Verwendung von Icons mit präziseren Bedeutungen für Block-Initialisierer ([#5757](https://github.com/nocobase/nocobase/pull/5757)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Korrektur von E2E-Tests basierend auf geänderten Icons ([#5768](https://github.com/nocobase/nocobase/pull/5768)) von @mytharcher

  - Korrektur, dass das Auswahlfeld bei leeren Daten leer angezeigt wird ([#5762](https://github.com/nocobase/nocobase/pull/5762)) von @katherinehhh

- **[Datenbank]** Korrektur der Aktualisierung von hasOne/belongsTo-Assoziationswerten ohne Fremdschlüssel ([#5754](https://github.com/nocobase/nocobase/pull/5754)) von @chareice

- **[Datenquellen-Manager]** Korrektur der falschen Anzeige des Quellschlüssels ([#5771](https://github.com/nocobase/nocobase/pull/5771)) von @katherinehhh

- **[Workflow: Benutzerdefiniertes Aktionsereignis]**
  - Allen Rollen erlauben, benutzerdefinierte Aktionsereignisse in externen Datenquellen auszulösen von @mytharcher

  - Korrektur der Standard-Datenquelle als Hauptdatenquelle von @mytharcher

  - Korrektur des Datenquellenfehlers bei fehlender Übereinstimmung von @mytharcher

  - Korrektur, dass der benutzerdefinierte Aktionsauslöser bei Assoziationen nicht auslöst von @mytharcher
