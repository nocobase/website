---
title: "NocoBase v2.1.0-beta.27: KI-Mitarbeiter können gebündelte Dokumentation mit Bash-Befehlen durchsuchen"
description: "Versionshinweise zu v2.1.0-beta.27"
---

### 🎉 Neue Funktionen

- **[Server]** KI-Mitarbeiter können gebündelte Dokumentation mit Bash-Befehlen durchsuchen ([#9269](https://github.com/nocobase/nocobase/pull/9269)) von @2013xile

- **[KI-Mitarbeiter]** Der Workflow-KI-Mitarbeiter-Knoten unterstützt das Laden von Dateien aus Anhangs-Feldern. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) von @cgyrock

- **[Textkopie]** Unterstützt die Option "Kopieren-Button anzeigen" für schreibgeschützte Textfelder ([#9394](https://github.com/nocobase/nocobase/pull/9394)) von @katherinehhh

### 🚀 Verbesserungen

- **[Client]** Ermöglicht die Zuweisung eines Feldwerts für Sequenzfelder ([#9397](https://github.com/nocobase/nocobase/pull/9397)) von @mytharcher

- **[Block: Kanban]** Verbesserte Konsistenz der Detailfeld-Abstände in v2 und optimierte Anpassung von Kanban-Karten- und Spaltenabständen an die Theme-Einstellungen. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) von @jiannx

- **[KI-Mitarbeiter]** Verbesserte Nathans RunJS-Bearbeitungswerkzeuge und reduzierte Verzögerungen bei langen KI-Chat-Gesprächen ([#9311](https://github.com/nocobase/nocobase/pull/9311)) von @2013xile

- **[Workflow: Genehmigung]** Korrektur des Validierungsverhaltens für Pflichtfelder in Genehmigungsformularen von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Behobene unübersetzte Validierungsmeldungen für Datenbanktabellenfelder in v2-Flow-Formularen ([#9393](https://github.com/nocobase/nocobase/pull/9393)) von @jiannx

- **[Client]**
  - Behoben: Filterformulare konnten nicht eingeklappt werden ([#9386](https://github.com/nocobase/nocobase/pull/9386)) von @zhangzhonghe

  - Behoben: Fehler beim Filtern von skalaren Feldern mit benutzerdefinierten Multi-Select-Filtern ([#9387](https://github.com/nocobase/nocobase/pull/9387)) von @zhangzhonghe

  - Behoben: Falsche Download-Dateinamen für AttachmentURL-Felder, wenn Dateimetadaten fehlen. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) von @mytharcher

  - Behoben: Anpassung des DividerItem an das Theme in v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) von @katherinehhh

  - Behoben: Problem, bei dem v1-Untertabellen-Verknüpfungsregeln fälschlicherweise die Stile von Pflichtfeldern änderten ([#9364](https://github.com/nocobase/nocobase/pull/9364)) von @zhangzhonghe

  - Behoben: `Versteckt (reservierter Wert)`-Felder in Formularblöcken bleiben nun im UI-Editor-Modus sichtbar; Werteingabeunterstützung für deren Zuweisung in der Feldzuweisung wiederhergestellt ([#9373](https://github.com/nocobase/nocobase/pull/9373)) von @jiannx

  - Behoben: Der v2-Tabellen-Bulk-Workflow-Trigger behält nun die Zeilenauswahl bei, nachdem zwischen Tabs umgeleitet wurde, und Zeilen können nach der Rückkehr erneut ausgewählt werden ([#9388](https://github.com/nocobase/nocobase/pull/9388)) von @jiannx

- **[Client-v2]**
  - Behoben: Fehler beim Auswählen von Assoziationsfeldern in den Feldeinstellungen. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) von @gchust

  - Behoben: Problem, bei dem nach dem App-Start kurz eine 404-Seite aufblitzt ([#9365](https://github.com/nocobase/nocobase/pull/9365)) von @zhangzhonghe

- **[Server]** Behoben: OAuth-Discovery-Anfragen von Sub-Anwendungen wurden als Haupt-App-Anfragen weitergeleitet ([#9383](https://github.com/nocobase/nocobase/pull/9383)) von @2013xile

- **[Datenquelle: Haupt]** Behoben: Importierte Datenbanktabellen verwendeten den falschen präfixierten Tabellennamen, wenn ein Tabellenpräfix aktiviert war ([#9403](https://github.com/nocobase/nocobase/pull/9403)) von @2013xile

- **[Benachrichtigung: In-App-Nachricht]** Behoben: Die In-App-Nachrichtenliste wurde nach dem Empfang von Echtzeit-Benachrichtigungen nicht aktualisiert ([#9409](https://github.com/nocobase/nocobase/pull/9409)) von @mytharcher

- **[Datenquellen-Manager]** Verhindert das Bearbeiten und Löschen aller Datensätze in benutzerdefinierten Bereichsberechtigungen für externe Datenquellen ([#9395](https://github.com/nocobase/nocobase/pull/9395)) von @katherinehhh

- **[KI: MCP-Server]** Behoben: MCP-Server-Paketierung enthält nun Laufzeitabhängigkeiten ([#9401](https://github.com/nocobase/nocobase/pull/9401)) von @2013xile

- **[Flow-Engine]** Behoben: Von KI generierte Blöcke konnten nicht von Referenzvorlagen zurück in doppelte Vorlagen konvertiert werden. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) von @gchust

- **[Aktion: Datensätze importieren Pro]** Behoben: Die Duplikatsprüfung für Datumsfelder schlug immer fehl von @mytharcher

- **[Passwortrichtlinie]** Behoben: Dauerhaft gesperrte Benutzer konnten sich nach einem Dienstneustart anmelden von @2013xile

- **[Workflow: Genehmigung]** Behoben: Der Auswahldialog für Datensätze wird in der Genehmigungs-Workflow-Konfiguration verdeckt von @zhangzhonghe

- **[Backup-Manager]** Behoben: pg-Schema-Anpassung von @Andrew1989Y
