---
title: "NocoBase v2.0.50: Unterstützung der Option \"Kopieren-Schaltfläche anzeigen\" für schreibgeschützte Textfelder"
description: "Versionshinweise zu v2.0.50"
---

### 🎉 Neue Funktionen

- **[client]** Aktionen zum Verknüpfen und Trennen zu Assoziationsblöcken hinzugefügt ([#9366](https://github.com/nocobase/nocobase/pull/9366)) von @katherinehhh

- **[Text kopieren]** Option "Kopier-Button anzeigen" für schreibgeschützte Textfelder unterstützt ([#9394](https://github.com/nocobase/nocobase/pull/9394)) von @katherinehhh

### 🚀 Verbesserungen

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) von @Molunerfinn

- **[client]** Erlaubt die Zuweisung von Feldwerten für Sequenzfelder ([#9397](https://github.com/nocobase/nocobase/pull/9397)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[flow-engine]** Korrigierte unübersetzte Datenfeld-Validierungsmeldungen in v2-Formularen ([#9393](https://github.com/nocobase/nocobase/pull/9393)) von @jiannx

- **[client]**
  - Behoben: `Versteckt (reservierter Wert)`-Felder in Formularblöcken bleiben im UI-Editor-Modus sichtbar, und die Werteingabeunterstützung für deren Zuweisung in der Feldzuweisung wurde wiederhergestellt ([#9373](https://github.com/nocobase/nocobase/pull/9373)) von @jiannx

  - Korrigiert falsche Download-Dateinamen für AttachmentURL-Felder, wenn Dateimetadaten fehlen ([#9382](https://github.com/nocobase/nocobase/pull/9382)) von @mytharcher

  - Behoben: Der v2-Tabellen-Massen-Workflow-Trigger behält die Zeilenauswahl nach dem Wechsel zwischen Tabs konsistent bei, und Zeilen können nach der Rückkehr erneut ausgewählt werden ([#9388](https://github.com/nocobase/nocobase/pull/9388)) von @jiannx

  - Behoben: Filterformulare konnten nicht eingeklappt werden ([#9386](https://github.com/nocobase/nocobase/pull/9386)) von @zhangzhonghe

  - Behoben: Problem, bei dem v1-Untertabellen-Verknüpfungsregeln fälschlicherweise die Stile von Pflichtfeldern änderten ([#9364](https://github.com/nocobase/nocobase/pull/9364)) von @zhangzhonghe

  - Korrigiert falsche Datenwiedergabe im Grid-Kartenblock nach Update und Aktualisierung ([#9351](https://github.com/nocobase/nocobase/pull/9351)) von @katherinehhh

  - Behoben: Pflichtoptionsfeld in Untertabelle wurde bei erster Auswahl auf Mobilgeräten nicht korrekt validiert ([#9352](https://github.com/nocobase/nocobase/pull/9352)) von @katherinehhh

  - Behoben: Problem, bei dem URL-Abfrageparameter-Variablen nach dem Wechsel zwischen gecachten Seiten ungültig wurden ([#9263](https://github.com/nocobase/nocobase/pull/9263)) von @zhangzhonghe

  - Korrigiert: DividerItem an das Theme in v2 angepasst ([#9372](https://github.com/nocobase/nocobase/pull/9372)) von @katherinehhh

  - Korrigiert: Option "Schnellerstellung" für Assoziationsauswahlfeld in v2-Untertabelle ausgeblendet ([#9358](https://github.com/nocobase/nocobase/pull/9358)) von @katherinehhh

  - Behoben: Verknüpfungsregeln wurden nach Änderung von Formularwerten nicht erneut ausgeführt ([#9357](https://github.com/nocobase/nocobase/pull/9357)) von @gchust

  - Korrigiert den Fehler beim Filtern von Skalarfeldern mit benutzerdefinierten Mehrfachauswahl-Filtern ([#9387](https://github.com/nocobase/nocobase/pull/9387)) von @zhangzhonghe

- **[server]** Plugin-Paketnamen vor Dateisystemoperationen validieren ([#9367](https://github.com/nocobase/nocobase/pull/9367)) von @chenos

- **[Datenquellen-Manager]** Bearbeiten und Löschen aller Datensätze in benutzerdefinierten Bereichsberechtigungen für externe Datenquellen verhindert ([#9395](https://github.com/nocobase/nocobase/pull/9395)) von @katherinehhh

- **[Datenquelle: Hauptdatenbank]** Korrigiert: Importierte Datenbanktabellen verwendeten den falschen präfixierten Tabellennamen, wenn ein Tabellenpräfix aktiviert war ([#9403](https://github.com/nocobase/nocobase/pull/9403)) von @2013xile

- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die In-App-Nachrichtenliste nach dem Empfang von Echtzeit-Benachrichtigungen nicht aktualisiert wurde ([#9409](https://github.com/nocobase/nocobase/pull/9409)) von @mytharcher

- **[Block: Kanban]** Korrigiert: Zeilenumbruch bei einzelnen Wörtern in Langtextfeldern des v1-Kanban-Blocks verhindert ([#9356](https://github.com/nocobase/nocobase/pull/9356)) von @katherinehhh

- **[Sammlungsfeld: Formel]** Korrigiert: Formelfeld in v2-Untertabelle wurde nicht zur automatischen Berechnung ausgelöst ([#9354](https://github.com/nocobase/nocobase/pull/9354)) von @katherinehhh
