---
title: "NocoBase v1.7.0-beta.13: Unterstützung der Verwendung von Blockvorlagen für Genehmigungsprozessformulare"
description: "Versionshinweise zu v1.7.0-beta.13"
---

### 🚀 Verbesserungen

- **[Datenbank]**
  - Trim-Option für Textfeld hinzugefügt ([#6603](https://github.com/nocobase/nocobase/pull/6603)) von @mytharcher

  - Trim-Option für Zeichenfolgenfeld hinzugefügt ([#6565](https://github.com/nocobase/nocobase/pull/6565)) von @mytharcher

- **[Client]** Unterstützung zur Konfiguration der Sichtbarkeit von Doppelpunkten in Formularfeldbeschriftungen basierend auf dem Layout ([#6561](https://github.com/nocobase/nocobase/pull/6561)) von @katherinehhh

- **[Dateimanager]** Trim-Option für Textfelder der Speicherkollektion hinzugefügt ([#6604](https://github.com/nocobase/nocobase/pull/6604)) von @mytharcher

- **[Workflow]** Code verbessert ([#6589](https://github.com/nocobase/nocobase/pull/6589)) von @mytharcher

- **[Workflow: Genehmigung]** Unterstützung zur Verwendung von Blockvorlagen für das Genehmigungsprozessformular von @mytharcher

### 🐛 Fehlerbehebungen

- **[Datenbank]**
  - Vermeidung von Änderungen des "datetimeNoTz"-Feldes, wenn sich der Wert beim Aktualisieren eines Datensatzes nicht ändert ([#6588](https://github.com/nocobase/nocobase/pull/6588)) von @mytharcher

  - Beim Löschen von 1:n-Datensätzen werden sowohl `filter` als auch `filterByTk` übergeben und `filter` enthält ein Assoziationsfeld, wird `filterByTk` ignoriert ([#6606](https://github.com/nocobase/nocobase/pull/6606)) von @2013xile

- **[Client]**
  - Fehler behoben, bei dem die Eigenschaft `disabled` nicht funktioniert, wenn `SchemaInitializerItem` `items` hat ([#6597](https://github.com/nocobase/nocobase/pull/6597)) von @mytharcher

  - Kaskadierungsproblem: 'Der Wert von xxx darf nicht im Array-Format vorliegen' beim Löschen und erneuten Auswählen ([#6585](https://github.com/nocobase/nocobase/pull/6585)) von @katherinehhh

  - Assoziationsfeld (Auswahl) zeigt N/A an, wenn verwandte Kollektionsfelder offengelegt werden ([#6582](https://github.com/nocobase/nocobase/pull/6582)) von @katherinehhh

  - Schaltflächen zum Senden und Aktualisieren zeigen den Nur-Symbol-Modus nicht korrekt an ([#6592](https://github.com/nocobase/nocobase/pull/6592)) von @katherinehhh

- **[Öffentliche Formulare]** Anzeigeberechtigungen umfassen Liste und Abruf ([#6607](https://github.com/nocobase/nocobase/pull/6607)) von @chenos

- **[Authentifizierung]** Token-Zuweisung in `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) von @2013xile

- **[Kollektionfeld: m:n (Array)]** Problem beim Filtern nach Feldern in einer Assoziationskollektion mit einem m:n (Array)-Feld ([#6596](https://github.com/nocobase/nocobase/pull/6596)) von @2013xile

- **[Workflow]** Fehler behoben, bei dem die Synchronisationsoption falsch angezeigt wird ([#6595](https://github.com/nocobase/nocobase/pull/6595)) von @mytharcher

- **[Block: Karte]** Die Kartenverwaltungsvalidierung sollte bei Leerzeicheneingabe nicht bestanden werden ([#6575](https://github.com/nocobase/nocobase/pull/6575)) von @katherinehhh

- **[Auth: OIDC]** Falsche Weiterleitung tritt auf, wenn der Rückrufpfad die Zeichenfolge 'null' ist von @2013xile

- **[Workflow: Genehmigung]**
  - Client-Variablen zur Verwendung im Genehmigungsformular korrigiert von @mytharcher

  - Verzweigungsmodus korrigiert, wenn `endOnReject` auf `true` gesetzt ist von @mytharcher
