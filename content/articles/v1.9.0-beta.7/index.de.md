---
title: "NocoBase v1.9.0-beta.7: Workflow unterstützt Rückkehr zu beliebigen Knoten im Genehmigungsprozess"
description: "Versionshinweise zu v1.9.0-beta.7"
---

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützung für die Rückkehr zu beliebigen Knoten im Genehmigungsprozess von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Entfernen des Ellipsis-Popovers aus der Dateiliste ([#7479](https://github.com/nocobase/nocobase/pull/7479)) von @mytharcher

- **[Server]** Verwendung des standardmäßigen Systemloggers für die Nachrichtenwarteschlange ([#7480](https://github.com/nocobase/nocobase/pull/7480)) von @mytharcher

- **[Datenbank]** Optimierte Listen-API-Count-Abfrage zur Reduzierung des Ressourcenverbrauchs. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) von @aaaaaajie

- **[Benachrichtigung: In-App-Nachricht]** Unterstützung für die Konfiguration der automatischen Schließverzögerung für In-App-Benachrichtigungen ([#7472](https://github.com/nocobase/nocobase/pull/7472)) von @mytharcher

- **[Workflow]**
  - Optimierung des Workflow-Vorbereitungsprozesses zur Unterstützung der Verwendung von vorgeladenen Knotendaten ([#7476](https://github.com/nocobase/nocobase/pull/7476)) von @mytharcher

  - Optimierung der Abfrageleistung für das Abrufen von wartenden Ausführungen durch Verwendung separater Felder und Indizes ([#7448](https://github.com/nocobase/nocobase/pull/7448)) von @mytharcher

  - Anpassung der Workflow-Variablen-API zur Unterstützung des Voreinstellens einer zusätzlichen Variablenliste ([#7439](https://github.com/nocobase/nocobase/pull/7439)) von @mytharcher

- **[Workflow: Benachrichtigungsknoten]** Unterstützung zum Testen des Benachrichtigungsknotens ([#7470](https://github.com/nocobase/nocobase/pull/7470)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Unterstützung für die Verwendung genehmigungsbezogener Variablen in benutzerdefinierten Benachrichtigungen von @mytharcher

  - Unterstützung für die Aktualisierung des Genehmigungsstatus, nachdem der Endknoten die Ausführung beendet hat von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Falsche Prüfung auf 'nicht leer' für numerische Felder in Verknüpfungsregeln ([#7477](https://github.com/nocobase/nocobase/pull/7477)) von @katherinehhh

  - Rendering-Fehler für Assoziationsfelder beim Wechsel zur Tag-Komponente im Bearbeitungsformular-Block ([#7468](https://github.com/nocobase/nocobase/pull/7468)) von @katherinehhh

  - Schreibgeschützte Select/Multiselect/Date/Richtext-Felder sind im öffentlichen Formular weiterhin bearbeitbar ([#7484](https://github.com/nocobase/nocobase/pull/7484)) von @katherinehhh

  - Zeitlimit-Problem, wenn das ausgewählte Datum gleich dem minDate ist ([#7461](https://github.com/nocobase/nocobase/pull/7461)) von @katherinehhh

  - Erforderliche Validierung funktioniert nicht für Anhangsfelder in Untertabellen ([#7431](https://github.com/nocobase/nocobase/pull/7431)) von @katherinehhh

  - Behebung eines Problems, bei dem das Bearbeiten eines Datensatzes im mobilen Datensatzauswahl-Popup unter bestimmten Umständen einen Fehler verursacht ([#7444](https://github.com/nocobase/nocobase/pull/7444)) von @zhangzhonghe

- **[Undefiniert]** Problem mit der Filterung nach Datumsfeld nur in MySQL-Externquelle behoben ([#7422](https://github.com/nocobase/nocobase/pull/7422)) von @aaaaaajie

- **[Datenbank]**
  - Behebung eines MySQL-Syntaxfehlers, der beim Laden weiterer In-App-Nachrichten auftrat. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) von @aaaaaajie

  - Behebung eines Genauigkeitsproblems für exportierte Zahlenfelder ([#7421](https://github.com/nocobase/nocobase/pull/7421)) von @aaaaaajie

- **[Mobil]** Mobiles Datumsfeld ohne Zeitzone zeigt Datum/Uhrzeit nicht korrekt an ([#7473](https://github.com/nocobase/nocobase/pull/7473)) von @katherinehhh

- **[Öffentliche Formulare]** Standardwert des öffentlichen Formularfelds wird bei Verwendung von Variablen nicht angewendet ([#7467](https://github.com/nocobase/nocobase/pull/7467)) von @katherinehhh

- **[Sammlung: Baum]** Entfernen von Datenbankereignissen im Zusammenhang mit der Sammlung nach dem Löschen einer Baumsammlung ([#7459](https://github.com/nocobase/nocobase/pull/7459)) von @2013xile

- **[Dateimanager]** Fehler beim Bearbeiten des `storage`-Feldes in der Dateisammlung behoben. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) von @mytharcher

- **[Aktion: Datensätze importieren]**
  - Korrektur der falschen Zeilennummer, die beim Import doppelter Daten angezeigt wird ([#7440](https://github.com/nocobase/nocobase/pull/7440)) von @aaaaaajie

  - Behebung eines Problems, bei dem der Import fehlschlug, wenn der Primärschlüssel der Tabelle ein einzeiliger Text war ([#7416](https://github.com/nocobase/nocobase/pull/7416)) von @aaaaaajie

- **[Workflow]**
  - Vervollständigung der Optionen zum automatischen Löschen des Workflow-Ausführungsstatus ([#7436](https://github.com/nocobase/nocobase/pull/7436)) von @mytharcher

  - Behebung des Problems, dass das Detail-Popup aufgrund einer falschen Routenkonfiguration im Aufgabencenter nicht angezeigt wurde ([#7452](https://github.com/nocobase/nocobase/pull/7452)) von @mytharcher

  - Behebung von Problemen im Zusammenhang mit dem mobilen Menü in den Workflow-Aufgaben ([#7419](https://github.com/nocobase/nocobase/pull/7419)) von @mytharcher

- **[Workflow: Paralleler Knoten]** Behebung des Problems, dass eine falsche Statusbestimmung in parallelen Verzweigungsknoten unter dem Modus "Alle Verzweigungen ausführen" zu einem vorzeitigen Abschluss führte ([#7445](https://github.com/nocobase/nocobase/pull/7445)) von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Behebung eines unerwarteten Aktualisierungsergebnisses bei Verwendung eines String-Primärschlüssels im xlsx-Import. von @aaaaaajie

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebung des Problems, dass benutzerdefinierte Aktionsereignisse nach der Initialisierung nicht sofort manuell ausgeführt werden können von @mytharcher

- **[Workflow: Unterworkflow]** Behebung des Problems, dass Unterprozesse mehrfach fortgesetzt und ausgeführt werden von @mytharcher

- **[Workflow: Genehmigung]**
  - Behebung des Problems, dass der Statustext in der Genehmigungsabschlussbenachrichtigung nicht übersetzt wurde von @mytharcher

  - Für Benutzer, die nicht der aktuelle Genehmiger sind, wird die entsprechende Ansichtsschaltfläche in der Prozessflusstabelle nicht angezeigt von @mytharcher

  - Hinzufügen der Statusvariablen für benutzerdefinierte Vorlagen in Genehmigungsabschlussbenachrichtigungen von @mytharcher
