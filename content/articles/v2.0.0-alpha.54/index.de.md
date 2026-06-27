---
title: "NocoBase v2.0.0-alpha.54: Beim Erstellen einer Sammlung kann der voreingestellte ID-Feldtyp geändert werden"
description: "Versionshinweise zu v2.0.0-alpha.54"
---

### 🎉 Neue Funktionen

- **[Client]** Beim Erstellen einer Sammlung kann der voreingestellte ID-Feldtyp geändert werden ([#8129](https://github.com/nocobase/nocobase/pull/8129)) von @cgyrock

### 🚀 Verbesserungen

- **[Client]**
  - Tabellenspaltenbreite auf auswählbare Optionen umgestellt ([#8188](https://github.com/nocobase/nocobase/pull/8188)) von @katherinehhh

  - Verbesserte recordPicker-Stile mit maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) von @katherinehhh

  - Optimierte Konfigurationsoptionen (Blöcke, Felder, Aktionen) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) von @katherinehhh

- **[Fehlerbehandlung]** Bei SQL-Syntaxfehlern werden keine rohen Datenbankfehlermeldungen mehr angezeigt, um den Datenbanktyp nicht preiszugeben ([#8195](https://github.com/nocobase/nocobase/pull/8195)) von @2013xile

- **[Block: Karte]** Unterstützt Textüberlauf mit Auslassungspunkten für Kartenfelder im Textanzeigemodus ([#8189](https://github.com/nocobase/nocobase/pull/8189)) von @katherinehhh

- **[Workflow]** Unterstützt die Verwendung der alten Konfiguration zum Erstellen eines neuen in einem duplizierten Workflow ([#8165](https://github.com/nocobase/nocobase/pull/8165)) von @mytharcher

- **[Zugriffskontrolle]** Zuweisung der Root-Rolle zu Benutzern nicht mehr erlaubt ([#8180](https://github.com/nocobase/nocobase/pull/8180)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehler behoben: Senden-Button im Erstellungsformular wird nicht angezeigt, wenn die Rolle eine Erstellungsberechtigung hat ([#8190](https://github.com/nocobase/nocobase/pull/8190)) von @katherinehhh

  - Verhindert das Löschen vorhandener Untertabellen-/Unterformulardaten beim Absenden ohne Auswahl von Elementen ([#8172](https://github.com/nocobase/nocobase/pull/8172)) von @katherinehhh

  - Verhindert das Erscheinen der Datenbereichseinstellung in der Erstellungsformularkonfiguration ([#8176](https://github.com/nocobase/nocobase/pull/8176)) von @katherinehhh

  - Fehler beim Speichern des Tab-Ereignisflusses behoben ([#8168](https://github.com/nocobase/nocobase/pull/8168)) von @chenos

  - Entfernt zusätzlichen Abstand nach dem Ausblenden eines Tabs ([#8167](https://github.com/nocobase/nocobase/pull/8167)) von @chenos

  - Fehlerhafte Filterung ausgewählter Optionen in der Verknüpfungsdatensatzauswahl behoben ([#8151](https://github.com/nocobase/nocobase/pull/8151)) von @katherinehhh

  - Darstellungsproblem des tableoid-Feldes im Formularblock behoben ([#8177](https://github.com/nocobase/nocobase/pull/8177)) von @katherinehhh

- **[Server]**
  - license-kit auf die neueste Version aktualisiert ([#8173](https://github.com/nocobase/nocobase/pull/8173)) von @jiannx

  - Unterstützung für Snowflake-ID (53-Bit)-Felder für externe Datenquellen ([#8185](https://github.com/nocobase/nocobase/pull/8185)) von @2013xile

- **[Block: Karte]** Falscher Kartenzoom nach Menüwechsel behoben ([#8193](https://github.com/nocobase/nocobase/pull/8193)) von @katherinehhh

- **[Workflow]** Problem behoben, bei dem nur ein Datensatz in der Datensatzliste zur manuellen Ausführung angezeigt wurde ([#8187](https://github.com/nocobase/nocobase/pull/8187)) von @mytharcher

- **[Datenvisualisierung]** Problem mit der Auswahl externer Datenquellen im SQL-Modus behoben; <br/>Problem mit dem Ladezustand des Diagrammblocks während des Datenabrufs behoben; <br/>Problem mit dem Abbrechen der Konfiguration eines leeren Diagrammblocks behoben; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) von @heziqiang

- **[KI-Mitarbeiter]** Problem mit Zeilenumbrüchen in KI-Nachrichten behoben ([#8096](https://github.com/nocobase/nocobase/pull/8096)) von @heziqiang

- **[Lizenzeinstellungen]**
  - plugin-license ts-Build-Ausnahme behoben ([#8183](https://github.com/nocobase/nocobase/pull/8183)) von @jiannx

  - Lizenzoptimierung und Hinzufügen von Hinweistexten ([#7993](https://github.com/nocobase/nocobase/pull/7993)) von @jiannx

- **[Dateimanager]** Problem behoben, bei dem die Vorschau von `.txt`-Dateien auf OSS die falsche Zeichenkodierung verwendete ([#8161](https://github.com/nocobase/nocobase/pull/8161)) von @mytharcher

- **[Datenquelle: Externer SQL Server]** Probleme behoben, bei denen die Optionen `encrypt` und `trustServerCertificate` nicht verfügbar waren von @2013xile

- **[Sammlung: Verbindung zu Fremddaten (FDW)]** Problem behoben, bei dem das Laden für Tabellen mit Großbuchstaben im Namen fehlschlug von @2013xile

- **[Workflow: Genehmigung]** Problem behoben, bei dem der Status nicht zugehöriger Genehmigungsdatensätze durch eine Genehmigungsaktion fälschlicherweise auf `UNPROCESSED` geändert wurde von @mytharcher
