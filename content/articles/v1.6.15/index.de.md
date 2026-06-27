---
title: "NocoBase v1.6.15: Trim-Option für Textfeld hinzugefügt"
description: "Versionshinweise zu v1.6.15"
---

### 🚀 Verbesserungen

- **[Datenbank]**
  - Trim-Option für Textfeld hinzugefügt ([#6603](https://github.com/nocobase/nocobase/pull/6603)) von @mytharcher

  - Trim-Option für Zeichenfolgenfeld hinzugefügt ([#6565](https://github.com/nocobase/nocobase/pull/6565)) von @mytharcher

- **[Dateimanager]** Trim-Option für Textfelder der Speicherkollektion hinzugefügt ([#6604](https://github.com/nocobase/nocobase/pull/6604)) von @mytharcher

- **[Workflow]** Code verbessert ([#6589](https://github.com/nocobase/nocobase/pull/6589)) von @mytharcher

- **[Workflow: Genehmigung]** Unterstützung für Blockvorlage im Genehmigungsprozessformular hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Datenbank]** Vermeidung von "datetimeNoTz"-Feldänderungen, wenn sich der Wert beim Aktualisieren eines Datensatzes nicht ändert ([#6588](https://github.com/nocobase/nocobase/pull/6588)) von @mytharcher

- **[Client]**
  - Assoziationsfeld (Auswahl) zeigt N/A an, wenn verwandte Kollektionsfelder offengelegt werden ([#6582](https://github.com/nocobase/nocobase/pull/6582)) von @katherinehhh

  - Fehler behoben, bei dem die `disabled`-Eigenschaft nicht funktionierte, wenn `SchemaInitializerItem` `items` enthielt ([#6597](https://github.com/nocobase/nocobase/pull/6597)) von @mytharcher

  - Kaskadierungsproblem: 'Der Wert von xxx kann nicht im Array-Format sein' beim Löschen und erneuten Auswählen ([#6585](https://github.com/nocobase/nocobase/pull/6585)) von @katherinehhh

- **[Kollektionfeld: Viele-zu-viele (Array)]** Problem beim Filtern nach Feldern in einer Assoziationskollektion mit einem Viele-zu-viele (Array)-Feld ([#6596](https://github.com/nocobase/nocobase/pull/6596)) von @2013xile

- **[Öffentliche Formulare]** Ansichtsberechtigungen umfassen Liste und Abruf ([#6607](https://github.com/nocobase/nocobase/pull/6607)) von @chenos

- **[Authentifizierung]** Token-Zuweisung in `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) von @2013xile

- **[Workflow]** Fehler behoben, bei dem die Synchronisationsoption falsch angezeigt wurde ([#6595](https://github.com/nocobase/nocobase/pull/6595)) von @mytharcher

- **[Block: Karte]** Kartenverwaltungsvalidierung sollte bei Leerzeicheneingabe nicht bestehen ([#6575](https://github.com/nocobase/nocobase/pull/6575)) von @katherinehhh

- **[Workflow: Genehmigung]**
  - Client-Variablen zur Verwendung im Genehmigungsformular behoben von @mytharcher

  - Verzweigungsmodus behoben, wenn `endOnReject` auf `true` gesetzt ist von @mytharcher
