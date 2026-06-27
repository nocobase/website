---
title: "NocoBase v1.9.0-alpha.13: Workflow unterstützt Rückkehr zu beliebigen Knoten im Genehmigungsprozess"
description: "Versionshinweise zu v1.9.0-alpha.13"
---

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützung für die Rückkehr zu beliebigen Knoten im Genehmigungsprozess von @mytharcher

### 🚀 Verbesserungen

- **[client]** Entfernen des Ellipsen-Popovers aus der Dateiliste ([#7479](https://github.com/nocobase/nocobase/pull/7479)) von @mytharcher

- **[database]** Optimierte Listen-API-Count-Abfrage zur Reduzierung des Ressourcenverbrauchs. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) von @aaaaaajie

- **[Workflow]**
  - Optimierung des Workflow-Vorbereitungsprozesses zur Unterstützung der Verwendung von vorgeladenen Knotendaten ([#7476](https://github.com/nocobase/nocobase/pull/7476)) von @mytharcher

  - Optimierung der Abfrageleistung für den Abruf von Warteschlangenausführungen durch Verwendung separater Felder und Indizes ([#7448](https://github.com/nocobase/nocobase/pull/7448)) von @mytharcher

  - Anpassung der Workflow-Variablen-API zur Unterstützung der Voreinstellung einer zusätzlichen Variablenliste ([#7439](https://github.com/nocobase/nocobase/pull/7439)) von @mytharcher

- **[Benachrichtigung: In-App-Nachricht]** Unterstützung für die Konfiguration der automatischen Schließverzögerung für In-App-Benachrichtigungen ([#7472](https://github.com/nocobase/nocobase/pull/7472)) von @mytharcher

- **[Workflow: Benachrichtigungsknoten]** Unterstützung zum Testen des Benachrichtigungsknotens ([#7470](https://github.com/nocobase/nocobase/pull/7470)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Unterstützung für die Verwendung genehmigungsbezogener Variablen in benutzerdefinierten Benachrichtigungen von @mytharcher

  - Unterstützung für die Aktualisierung des Genehmigungsstatus, nachdem der Endknoten die Ausführung beendet hat von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**
  - Falsche Prüfung auf 'nicht leer' für numerische Felder in Verknüpfungsregeln ([#7477](https://github.com/nocobase/nocobase/pull/7477)) von @katherinehhh

  - Assoziationsfeld-Renderfehler beim Wechsel zur Tag-Komponente im Bearbeitungsformular-Block ([#7468](https://github.com/nocobase/nocobase/pull/7468)) von @katherinehhh

  - Zeitlimit-Problem, wenn das ausgewählte Datum gleich dem Mindestdatum (minDate) ist ([#7461](https://github.com/nocobase/nocobase/pull/7461)) von @katherinehhh

  - Behebung eines Problems, bei dem das Bearbeiten eines Datensatzes im mobilen Datensatzauswahl-Popup unter bestimmten Umständen einen Fehler verursacht ([#7444](https://github.com/nocobase/nocobase/pull/7444)) von @zhangzhonghe

  - Erforderlichkeitsvalidierung funktioniert nicht für Anhängefelder in Untertabellen ([#7431](https://github.com/nocobase/nocobase/pull/7431)) von @katherinehhh

  - Behebung des Problems, dass das Symbol falsch angezeigt wurde, wenn die URL im Anhang-URL-Feld Abfrageparameter enthielt ([#7432](https://github.com/nocobase/nocobase/pull/7432)) von @mytharcher

- **[database]**
  - Behobenes Genauigkeitsproblem für exportierte Zahlenfelder ([#7421](https://github.com/nocobase/nocobase/pull/7421)) von @aaaaaajie

  - Behobener MySQL-Syntaxfehler, der beim Laden weiterer In-App-Nachrichten auftrat. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) von @aaaaaajie

- **[undefined]** Behobenes Problem mit der Filterung nach Datumsfeld nur in MySQL-Externquelle ([#7422](https://github.com/nocobase/nocobase/pull/7422)) von @aaaaaajie

- **[Mobil]** Mobiles Datumsfeld ohne Zeitzone zeigt Datum/Uhrzeit nicht korrekt an ([#7473](https://github.com/nocobase/nocobase/pull/7473)) von @katherinehhh

- **[Sammlung: Baum]** Entfernen von Datenbankereignissen im Zusammenhang mit der Sammlung nach dem Löschen einer Baumsammlung ([#7459](https://github.com/nocobase/nocobase/pull/7459)) von @2013xile

- **[Öffentliche Formulare]** Standardwert des öffentlichen Formularfelds wird bei Verwendung von Variablen nicht angewendet ([#7467](https://github.com/nocobase/nocobase/pull/7467)) von @katherinehhh

- **[Aktion: Datensätze importieren]**
  - Behebung der falschen Zeilennummernanzeige beim Import doppelter Daten ([#7440](https://github.com/nocobase/nocobase/pull/7440)) von @aaaaaajie

  - Behobenes Problem, bei dem der Import fehlschlug, wenn der Primärschlüssel der Tabelle ein einzeiliger Text war ([#7416](https://github.com/nocobase/nocobase/pull/7416)) von @aaaaaajie

- **[Workflow]**
  - Behebung des Problems, dass das Detail-Popup aufgrund einer falschen Routenkonfiguration im Aufgabencenter nicht angezeigt wurde ([#7452](https://github.com/nocobase/nocobase/pull/7452)) von @mytharcher

  - Vervollständigung der Optionen zum automatischen Löschen des Workflow-Ausführungsstatus ([#7436](https://github.com/nocobase/nocobase/pull/7436)) von @mytharcher

  - Behebung von Problemen im Zusammenhang mit dem mobilen Menü in den Workflow-Aufgaben ([#7419](https://github.com/nocobase/nocobase/pull/7419)) von @mytharcher

- **[Dateimanager]** Behebung des Fehlers beim Bearbeiten des `storage`-Feldes in der Dateisammlung. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) von @mytharcher

- **[Workflow: Paralleler Knoten]** Behebung des Problems, dass eine falsche Statusbestimmung in parallelen Verzweigungsknoten unter dem Modus "Alle Verzweigungen ausführen" zu einem vorzeitigen Abschluss führte ([#7445](https://github.com/nocobase/nocobase/pull/7445)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebung des Problems, dass benutzerdefinierte Aktionsereignisse nach der Initialisierung nicht sofort manuell ausgeführt werden können von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Behobenes unerwartetes Aktualisierungsergebnis bei Verwendung eines String-Primärschlüssels im xlsx-Import. von @aaaaaajie

- **[Workflow: Unterworkflow]** Behebung des Problems, dass Unterprozesse mehrfach fortgesetzt und ausgeführt werden von @mytharcher

- **[Workflow: Genehmigung]**
  - Hinzufügen der Statusvariablen für benutzerdefinierte Vorlagen in Genehmigungsabschlussbenachrichtigungen von @mytharcher

  - Für Benutzer, die nicht der aktuelle Genehmiger sind, wird der entsprechende Ansichtsbutton in der Prozessflusstabelle nicht angezeigt von @mytharcher
