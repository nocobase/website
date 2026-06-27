---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: E-Mail-Manager unterstützt Batch-Synchronisation, Workflow-Genehmigung unterstützt Rückkehr zu jedem Knoten im Genehmigungsprozess und mehr."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.7](https://www.nocobase.com/en/blog/v1.9.0-beta.7)

*Veröffentlichungsdatum: 2025-09-11*

#### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützung für die Rückkehr zu beliebigen Knoten im Genehmigungsprozess von @mytharcher

#### 🚀 Verbesserungen

- **[Client]** Entfernen des Ellipsen-Popovers aus der Dateiliste ([#7479](https://github.com/nocobase/nocobase/pull/7479)) von @mytharcher
- **[Server]** Verwendung des standardmäßigen Systemloggers für die Nachrichtenwarteschlange ([#7480](https://github.com/nocobase/nocobase/pull/7480)) von @mytharcher
- **[Datenbank]** Optimierte Listen-API-Count-Abfrage zur Reduzierung des Ressourcenverbrauchs. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) von @aaaaaajie
- **[Benachrichtigung: In-App-Nachricht]** Unterstützung für die Konfiguration der automatischen Schließverzögerung für In-App-Nachrichtenbenachrichtigungen ([#7472](https://github.com/nocobase/nocobase/pull/7472)) von @mytharcher
- **[Workflow]**

  - Optimierung des Workflow-Vorbereitungsprozesses zur Unterstützung der Verwendung vorgeladener Knotendaten ([#7476](https://github.com/nocobase/nocobase/pull/7476)) von @mytharcher
  - Optimierung der Abfrageleistung für das Abrufen von Warteschlangenausführungen durch Verwendung separater Felder und Indizes ([#7448](https://github.com/nocobase/nocobase/pull/7448)) von @mytharcher
  - Anpassung der Workflow-Variablen-API zur Unterstützung des Voreinstellens einer zusätzlichen Variablenliste ([#7439](https://github.com/nocobase/nocobase/pull/7439)) von @mytharcher
- **[Workflow: Benachrichtigungsknoten]** Unterstützung zum Testen des Benachrichtigungsknotens ([#7470](https://github.com/nocobase/nocobase/pull/7470)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Unterstützung für die Verwendung genehmigungsbezogener Variablen in benutzerdefinierten Benachrichtigungen von @mytharcher
  - Unterstützung für die Aktualisierung des Genehmigungsstatus, nachdem der Endknoten die Ausführung beendet hat von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Falsche Prüfung auf 'nicht leer' für numerische Felder in Verknüpfungsregeln ([#7477](https://github.com/nocobase/nocobase/pull/7477)) von @katherinehhh
  - Assoziationsfeld-Renderfehler beim Wechsel zur Tag-Komponente im Bearbeitungsformular-Block ([#7468](https://github.com/nocobase/nocobase/pull/7468)) von @katherinehhh
  - Schreibgeschützte Select/Multiselect/Date/Richtext-Felder waren im öffentlichen Formular weiterhin bearbeitbar ([#7484](https://github.com/nocobase/nocobase/pull/7484)) von @katherinehhh
  - Zeitlimit-Problem, wenn das ausgewählte Datum gleich dem minDate ist ([#7461](https://github.com/nocobase/nocobase/pull/7461)) von @katherinehhh
  - Erforderlichkeitsvalidierung funktioniert nicht für Anhangs-Felder in Untertabellen ([#7431](https://github.com/nocobase/nocobase/pull/7431)) von @katherinehhh
  - Behebung eines Problems, bei dem in bestimmten Szenarien das Bearbeiten eines Datensatzes im mobilen Datensatzauswahl-Popup einen Fehler verursacht ([#7444](https://github.com/nocobase/nocobase/pull/7444)) von @zhangzhonghe
- **[undefined]** Problem mit der Filterung nach Datumsfeld nur in MySQL-Externquelle behoben ([#7422](https://github.com/nocobase/nocobase/pull/7422)) von @aaaaaajie
- **[Datenbank]**

  - Behebung eines MySQL-Syntaxfehlers, der beim Laden weiterer In-App-Nachrichten auftrat. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) von @aaaaaajie
  - Behebung eines Genauigkeitsproblems für exportierte Zahlenfelder ([#7421](https://github.com/nocobase/nocobase/pull/7421)) von @aaaaaajie
- **[Mobil]** Mobiles Datumsfeld ohne Zeitzone zeigt Datum/Uhrzeit nicht korrekt an ([#7473](https://github.com/nocobase/nocobase/pull/7473)) von @katherinehhh
- **[Öffentliche Formulare]** Standardwert des öffentlichen Formularfeldes wird bei Verwendung von Variablen nicht angewendet ([#7467](https://github.com/nocobase/nocobase/pull/7467)) von @katherinehhh
- **[Sammlung: Baum]** Entfernen von Datenbankereignissen im Zusammenhang mit der Sammlung nach dem Löschen einer Baumsammlung ([#7459](https://github.com/nocobase/nocobase/pull/7459)) von @2013xile
- **[Dateimanager]** Behebung des Fehlers beim Bearbeiten des `storage`-Feldes in der Dateisammlung. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) von @mytharcher
- **[Aktion: Datensätze importieren]**

  - Korrektur der falschen Zeilennummernanzeige beim Import doppelter Daten ([#7440](https://github.com/nocobase/nocobase/pull/7440)) von @aaaaaajie
  - Behebung eines Problems, bei dem der Import fehlschlug, wenn der Primärschlüssel der Tabelle ein einzeiliger Text war ([#7416](https://github.com/nocobase/nocobase/pull/7416)) von @aaaaaajie
- **[Workflow]**

  - Vervollständigung der Optionen zum automatischen Löschen des Workflow-Ausführungsstatus ([#7436](https://github.com/nocobase/nocobase/pull/7436)) von @mytharcher
  - Behebung des Problems, dass das Detail-Popup aufgrund einer falschen Routenkonfiguration im Aufgabencenter nicht angezeigt wurde ([#7452](https://github.com/nocobase/nocobase/pull/7452)) von @mytharcher
  - Behebung von Problemen im Zusammenhang mit dem mobilen Menü in den Workflow-Aufgaben ([#7419](https://github.com/nocobase/nocobase/pull/7419)) von @mytharcher
- **[Workflow: Paralleler Knoten]** Behebung des Problems, dass eine falsche Statusbestimmung in parallelen Verzweigungsknoten im Modus "Alle Verzweigungen ausführen" zu einem vorzeitigen Abschluss führte ([#7445](https://github.com/nocobase/nocobase/pull/7445)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Behebung eines unerwarteten Aktualisierungsergebnisses bei Verwendung eines String-Primärschlüssels im xlsx-Import. von @aaaaaajie
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebung des Problems, dass benutzerdefinierte Aktionsereignisse nach der Initialisierung nicht sofort manuell ausgeführt werden können von @mytharcher
- **[Workflow: Unterworkflow]** Behebung des Problems, dass Unterprozesse mehrfach fortgesetzt und ausgeführt wurden von @mytharcher
- **[Workflow: Genehmigung]**

  - Behebung des Problems, dass der Statustext in der Genehmigungsabschlussbenachrichtigung nicht übersetzt wurde von @mytharcher
  - Für Benutzer, die nicht der aktuelle Genehmiger sind, wird der entsprechende Ansichtsbutton in der Prozessflusstabelle nicht angezeigt von @mytharcher
  - Hinzufügen der Statusvariable für benutzerdefinierte Vorlagen in Genehmigungsabschlussbenachrichtigungen von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.14](https://www.nocobase.com/en/blog/v1.9.0-alpha.14)

*Veröffentlichungsdatum: 2025-09-10*

#### 🚀 Verbesserungen

- **[E-Mail-Manager]** Unterstützt Batch-Synchronisation von @jiannx

#### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]** Behebung des Problems, dass der Statustext in der Genehmigungsabschlussbenachrichtigung nicht übersetzt wurde von @mytharcher

### [v1.9.0-alpha.13](https://www.nocobase.com/en/blog/v1.9.0-alpha.13)

*Veröffentlichungsdatum: 2025-09-09*

#### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützung für die Rückkehr zu beliebigen Knoten im Genehmigungsprozess von @mytharcher

#### 🚀 Verbesserungen

- **[Client]** Entfernen des Ellipsen-Popovers aus der Dateiliste ([#7479](https://github.com/nocobase/nocobase/pull/7479)) von @mytharcher
- **[Datenbank]** Optimierte Listen-API-Count-Abfrage zur Reduzierung des Ressourcenverbrauchs. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) von @aaaaaajie
- **[Workflow]**

  - Optimierung des Workflow-Vorbereitungsprozesses zur Unterstützung der Verwendung vorgeladener Knotendaten ([#7476](https://github.com/nocobase/nocobase/pull/7476)) von @mytharcher
  - Optimierung der Abfrageleistung für das Abrufen von Warteschlangenausführungen durch Verwendung separater Felder und Indizes ([#7448](https://github.com/nocobase/nocobase/pull/7448)) von @mytharcher
  - Anpassung der Workflow-Variablen-API zur Unterstützung des Voreinstellens einer zusätzlichen Variablenliste ([#7439](https://github.com/nocobase/nocobase/pull/7439)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** Unterstützung für die Konfiguration der automatischen Schließverzögerung für In-App-Nachrichtenbenachrichtigungen ([#7472](https://github.com/nocobase/nocobase/pull/7472)) von @mytharcher
- **[Workflow: Benachrichtigungsknoten]** Unterstützung zum Testen des Benachrichtigungsknotens ([#7470](https://github.com/nocobase/nocobase/pull/7470)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Unterstützung für die Verwendung genehmigungsbezogener Variablen in benutzerdefinierten Benachrichtigungen von @mytharcher
  - Unterstützung für die Aktualisierung des Genehmigungsstatus, nachdem der Endknoten die Ausführung beendet hat von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Falsche Prüfung auf 'nicht leer' für numerische Felder in Verknüpfungsregeln ([#7477](https://github.com/nocobase/nocobase/pull/7477)) von @katherinehhh
  - Assoziationsfeld-Renderfehler beim Wechsel zur Tag-Komponente im Bearbeitungsformular-Block ([#7468](https://github.com/nocobase/nocobase/pull/7468)) von @katherinehhh
  - Zeitlimit-Problem, wenn das ausgewählte Datum gleich dem minDate ist ([#7461](https://github.com/nocobase/nocobase/pull/7461)) von @katherinehhh
  - Behebung eines Problems, bei dem in bestimmten Szenarien das Bearbeiten eines Datensatzes im mobilen Datensatzauswahl-Popup einen Fehler verursacht ([#7444](https://github.com/nocobase/nocobase/pull/7444)) von @zhangzhonghe
  - Erforderlichkeitsvalidierung funktioniert nicht für Anhangs-Felder in Untertabellen ([#7431](https://github.com/nocobase/nocobase/pull/7431)) von @katherinehhh
  - Behebung des Problems, dass das Symbol falsch angezeigt wurde, wenn die URL im Anhangs-URL-Feld Abfrageparameter enthielt ([#7432](https://github.com/nocobase/nocobase/pull/7432)) von @mytharcher
- **[Datenbank]**

  - Behebung eines Genauigkeitsproblems für exportierte Zahlenfelder ([#7421](https://github.com/nocobase/nocobase/pull/7421)) von @aaaaaajie
  - Behebung eines MySQL-Syntaxfehlers, der beim Laden weiterer In-App-Nachrichten auftrat. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) von @aaaaaajie
- **[undefined]** Problem mit der Filterung nach Datumsfeld nur in MySQL-Externquelle behoben ([#7422](https://github.com/nocobase/nocobase/pull/7422)) von @aaaaaajie
- **[Mobil]** Mobiles Datumsfeld ohne Zeitzone zeigt Datum/Uhrzeit nicht korrekt an ([#7473](https://github.com/nocobase/nocobase/pull/7473)) von @katherinehhh
- **[Sammlung: Baum]** Entfernen von Datenbankereignissen im Zusammenhang mit der Sammlung nach dem Löschen einer Baumsammlung ([#7459](https://github.com/nocobase/nocobase/pull/7459)) von @2013xile
- **[Öffentliche Formulare]** Standardwert des öffentlichen Formularfeldes wird bei Verwendung von Variablen nicht angewendet ([#7467](https://github.com/nocobase/nocobase/pull/7467)) von @katherinehhh
- **[Aktion: Datensätze importieren]**

  - Korrektur der falschen Zeilennummernanzeige beim Import doppelter Daten ([#7440](https://github.com/nocobase/nocobase/pull/7440)) von @aaaaaajie
  - Behebung eines Problems, bei dem der Import fehlschlug, wenn der Primärschlüssel der Tabelle ein einzeiliger Text war ([#7416](https://github.com/nocobase/nocobase/pull/7416)) von @aaaaaajie
- **[Workflow]**

  - Behebung des Problems, dass das Detail-Popup aufgrund einer falschen Routenkonfiguration im Aufgabencenter nicht angezeigt wurde ([#7452](https://github.com/nocobase/nocobase/pull/7452)) von @mytharcher
  - Vervollständigung der Optionen zum automatischen Löschen des Workflow-Ausführungsstatus ([#7436](https://github.com/nocobase/nocobase/pull/7436)) von @mytharcher
  - Behebung von Problemen im Zusammenhang mit dem mobilen Menü in den Workflow-Aufgaben ([#7419](https://github.com/nocobase/nocobase/pull/7419)) von @mytharcher
- **[Dateimanager]** Behebung des Fehlers beim Bearbeiten des `storage`-Feldes in der Dateisammlung. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) von @mytharcher
- **[Workflow: Paralleler Knoten]** Behebung des Problems, dass eine falsche Statusbestimmung in parallelen Verzweigungsknoten im Modus "Alle Verzweigungen ausführen" zu einem vorzeitigen Abschluss führte ([#7445](https://github.com/nocobase/nocobase/pull/7445)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebung des Problems, dass benutzerdefinierte Aktionsereignisse nach der Initialisierung nicht sofort manuell ausgeführt werden können von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Behebung eines unerwarteten Aktualisierungsergebnisses bei Verwendung eines String-Primärschlüssels im xlsx-Import. von @aaaaaajie
- **[Workflow: Unterworkflow]** Behebung des Problems, dass Unterprozesse mehrfach fortgesetzt und ausgeführt wurden von @mytharcher
- **[Workflow: Genehmigung]**

  - Hinzufügen der Statusvariable für benutzerdefinierte Vorlagen in Genehmigungsabschlussbenachrichtigungen von @mytharcher
  - Für Benutzer, die nicht der aktuelle Genehmiger sind, wird der entsprechende Ansichtsbutton in der Prozessflusstabelle nicht angezeigt von @mytharcher
