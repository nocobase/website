---
title: "NocoBase v2.0.0-alpha.51: Unterstützung für die Anpassung globaler Stile im Theme-Editor"
description: "Versionshinweise zu v2.0.0-alpha.51"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Unterstützung zur Anpassung globaler Stile im Theme-Editor ([#7960](https://github.com/nocobase/nocobase/pull/7960)) von @ljmiaoo

  - Unterstützung zum Festlegen einer standardmäßigen Sortierregel im Detailblock ([#8070](https://github.com/nocobase/nocobase/pull/8070)) von @katherinehhh

  - Unterstützung zum Festlegen des Datentyps für das Zahlenfeld (Optionen: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) von @chenos

- **[Sammlungsfeld: Sequenz]** Automatische Aktualisierung von Sequenzfeldern nach Datenmigration ([#8063](https://github.com/nocobase/nocobase/pull/8063)) von @cgyrock

### 🚀 Verbesserungen

- **[Client]**
  - Korrektur des Seitensprungs in der Untertabelle nach Zeilenentfernung und Hinzufügen der Unterstützung für Spaltenvalidierungsregeln ([#8094](https://github.com/nocobase/nocobase/pull/8094)) von @katherinehhh

  - Anpassung der Anzeige großer Felder in der bearbeitbaren Untertabelle ([#8078](https://github.com/nocobase/nocobase/pull/8078)) von @katherinehhh

  - Unterstützung von Auslassungspunkten für überlaufende JSON-Feldinhalte ([#8067](https://github.com/nocobase/nocobase/pull/8067)) von @katherinehhh

- **[Flow-Engine]**
  - Hinzufügen der useCache-Option zu FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) von @zhangzhonghe

  - Hinzufügen der Methode `removeModelWithSubModels` zum rekursiven Entfernen eines Modells und seiner Untermodelle ([#8064](https://github.com/nocobase/nocobase/pull/8064)) von @zhangzhonghe

- **[Block: GridCard]** Hinzufügen der Zeilenanzahl-Konfiguration zur Grid-Karte und Ersetzen von pageSize durch automatische Berechnung ([#8055](https://github.com/nocobase/nocobase/pull/8055)) von @katherinehhh

- **[Audit-Logs]** Aktualisierung des eindeutigen Identifikatorfelds auf `text`, um eine Überlänge des Identifikators bei Massenbearbeitungen zu verhindern von @2013xile

- **[Migrationsmanager]** Automatische Aktualisierung von Sequenzfeldern nach Datenmigration von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behoben: Die konfigurierten Felder eines entfernten Blocks wurden nicht aus dem Filterblock gelöscht. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) von @gchust

  - Korrektur eines zusätzlichen Leerraums, wenn eine Schaltfläche im Nicht-Konfigurationsmodus ausgeblendet ist ([#8092](https://github.com/nocobase/nocobase/pull/8092)) von @katherinehhh

  - Behoben: Der Text der Zurücksetzen-Schaltfläche im Filterformularblock konnte nicht geändert werden. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) von @gchust

  - Behoben: Die Feldeingabe unterstützte keine Mehrfachwerte bei Verwendung der Operatoren $in oder $notIn zum Filtern von Feldern. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) von @gchust

  - Behoben: Neu hinzugefügte Datenblöcke erschienen nicht automatisch im Feldmenü des Filterformularblocks. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) von @gchust

  - Das Konfigurationsmenü für Assoziationsfelder in Filterformularen sollte die Option "Schnellerstellung" nicht anzeigen. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) von @gchust

  - Korrektur eines Datenproblems in der Assoziations-Untertabelle im Listenblock ([#8082](https://github.com/nocobase/nocobase/pull/8082)) von @katherinehhh

  - Korrektur: Validierungsregeln für numerische Felder aus den Sammlungseinstellungen wurden nicht angewendet ([#8025](https://github.com/nocobase/nocobase/pull/8025)) von @katherinehhh

  - Behoben: Felder in Filterformularen wurden durch serverseitige Validierungsregeln für Felder eingeschränkt. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) von @gchust

  - Problem bei der Schnellbearbeitung von JSON-Feldern ([#8059](https://github.com/nocobase/nocobase/pull/8059)) von @katherinehhh

  - Korrektur eines Anzeigeproblems bei großen Feldern in der Untertabellenbearbeitung ([#8069](https://github.com/nocobase/nocobase/pull/8069)) von @katherinehhh

  - Korrektur: Schnellerstellung wirft einen Fehler, wenn allowMultiple in der Assoziationsdatensatzauswahl deaktiviert ist ([#8034](https://github.com/nocobase/nocobase/pull/8034)) von @katherinehhh

  - Korrektur: JSON-Feld sollte als Objekt übermittelt werden ([#8057](https://github.com/nocobase/nocobase/pull/8057)) von @katherinehhh

  - Behoben: Die Eingabetaste konnte nicht verwendet werden, um die Filteraktion auszulösen. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) von @gchust

- **[Flow-Engine]**
  - Behoben: Konfigurationsoptionen der vorherigen Komponente blieben nach dem Wechsel der Feldkomponenten im Menü sichtbar. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) von @gchust

  - Verschieben von useEffect vor die bedingte Rückgabe in FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) von @zhangzhonghe

  - Behoben: Nicht unterstützte Assoziationsfelder erschienen in den Filteroperationsfeldern. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) von @gchust

- **[ACL]** Korrektur: acl.allow wurde zu früh ausgeführt ([#8065](https://github.com/nocobase/nocobase/pull/8065)) von @chenos

- **[Dateimanager]**
  - Korrektur der falschen Anzeige von Unterdetaildaten in Listen- und Grid-Karten-Blöcken ([#8087](https://github.com/nocobase/nocobase/pull/8087)) von @katherinehhh

  - Korrektur: Anhängefeld wurde in der readPretty-Untertabelle nicht korrekt angezeigt ([#8073](https://github.com/nocobase/nocobase/pull/8073)) von @katherinehhh

- **[Workflow]**
  - Korrektur des Problems, dass ein Fehler in der Ausführungs-Canvas ausgelöst wurde, wenn ein Knoten gelöscht wurde ([#8090](https://github.com/nocobase/nocobase/pull/8090)) von @mytharcher

  - Korrektur des Problems, dass die Ausführungsseite einen Fehler auslöste, wenn Jobs auf einem Knoten undefiniert sind ([#8066](https://github.com/nocobase/nocobase/pull/8066)) von @mytharcher

- **[Sammlungsfeld: Formel]** Behoben: Formelfelder konnten nicht zum Filterformularblock hinzugefügt werden. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) von @gchust

- **[Block: Aktionspanel]** Optimierung des Stils im Listenlayout des Aktionspanel-Blocks ([#8084](https://github.com/nocobase/nocobase/pull/8084)) von @katherinehhh

- **[KI-Mitarbeiter]**
  - Behebung des Problems, dass der Datenquellen-Rollenname nicht kompiliert wurde ([#8076](https://github.com/nocobase/nocobase/pull/8076)) von @heziqiang

  - Behoben: Einige Felder des aktuellen Datensatzes konnten in der Variablenauswahlkomponente nicht angezeigt werden. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) von @gchust

- **[Aktion: Datensätze importieren]** Importierte Felder stimmen nicht mit den in den ACL-Einstellungen festgelegten Feldern überein ([#8075](https://github.com/nocobase/nocobase/pull/8075)) von @2013xile

- **[Zugriffskontrolle]** Hinzufügen von Middleware für Berechtigungsprüfungen bei Assoziationsoperationen für externe Datenquellen ([#8062](https://github.com/nocobase/nocobase/pull/8062)) von @2013xile

- **[Workflow: Genehmigung]**
  - Korrektur des Problems, dass keine Daten geladen wurden, wenn verwandte Genehmigungen mit ACL-Bereichsvariablen geladen wurden von @mytharcher

  - Korrektur des Problems, dass ausgefüllte Daten im Formular des Bearbeiters verschwanden von @mytharcher

  - Korrektur des Problems, dass ein Berechtigungsfehler ausgelöst wurde, wenn verwandte Genehmigungen eines Datensatzes im Detail-Drawer geladen wurden von @mytharcher

  - Korrektur des Problems, dass der Prozess bei Verzweigung mit Reihenfolge und Mitzeichnung falsch war von @mytharcher

  - Korrektur des Problems, dass bei der Auflistung von Genehmigungen ein Out-of-Memory (OOM) auftrat von @mytharcher

  - Korrektur des Problems, dass Genehmigungsdatensätze im Ergebnis des Jobs im Rückkehrzweig nicht enthalten waren von @mytharcher

  - Korrektur des Problems, dass das Popup-Fenster für den Genehmiger keinen Titel anzeigte von @zhangzhonghe

  - Korrektur des Problems, dass ein Fehler ausgelöst wurde, wenn eine verwandte Genehmigung im Nur-Vereinigung-Rollenmodus geladen wurde von @mytharcher

- **[E-Mail-Manager]**
  - Behandlung anormaler Daten von @jiannx

  - Nicht-Synchronisieren des geplanten Gmail-Status von @jiannx
