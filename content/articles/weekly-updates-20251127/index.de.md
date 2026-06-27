---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Unterstützung der Spaltenfeldsortierung in Tabellen, Unterstützung der automatischen Weiterleitung zur SSO-URL bei fehlender Authentifizierung und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein. Hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.14](https://www.nocobase.com/en/blog/v1.9.14)

*Veröffentlichungsdatum: 27.11.2025*

### 🎉 Neue Funktionen

- **[Auth: OIDC]** Unterstützt automatische Weiterleitung zur SSO-URL, wenn nicht authentifiziert, von @heziqiang

### 🚀 Verbesserungen

- **[client]** Verwende dreifache geschweifte Klammern (`{{{` und `}}}`) für Variablen im Nachrichteninhalt, um zu vermeiden, dass Variablen von Handlebars escaped werden ([#7972](https://github.com/nocobase/nocobase/pull/7972)) von @mytharcher
- **[Sammlungsfeld: Markdown(Vditor)]** Anpassung der Vollbild-Inhaltsbreite von Vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Datenbank]** Behoben: Entfernung der UTC-Verarbeitung bei der Zeitumwandlung für reine Zeitfelder, um zeitzonenbedingte Verschiebungen zu verhindern. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) von @ChimingLiu
- **[client]** Behoben: Remote-Select zeigt nicht das korrekte Label für Nicht-Objekt-Werte an ([#7975](https://github.com/nocobase/nocobase/pull/7975)) von @katherinehhh
- **[Workflow]**

  - Behebung des Problems, dass vorbereitete Ausführungen vor dem Stoppen nicht in die Warteschlange gesendet wurden ([#7981](https://github.com/nocobase/nocobase/pull/7981)) von @mytharcher
  - Behebung des Problems, dass der Aufgabenlink zu einer Fehlerseite führte ([#7983](https://github.com/nocobase/nocobase/pull/7983)) von @mytharcher
  - Behebung des Problems, dass einige Workflow-Aufgabenmenüs nicht angezeigt wurden ([#7980](https://github.com/nocobase/nocobase/pull/7980)) von @mytharcher
  - Behebung des Problems, dass die Aufgabenanzahl aufgrund falscher Provider-Nutzung nicht angezeigt wurde ([#7968](https://github.com/nocobase/nocobase/pull/7968)) von @mytharcher
- **[Workflow: Manueller Knoten]** Behebung des Problems, dass die Anzahl der manuellen Aufgaben nicht korrekt war ([#7984](https://github.com/nocobase/nocobase/pull/7984)) von @mytharcher
- **[Datenvisualisierung]**

  - Filterfeldeinstellungen für externe Datenquellensammlungen zeigen keine spezifischen Eigenschaften an ([#7982](https://github.com/nocobase/nocobase/pull/7982)) von @2013xile
  - Behebung des Problems, dass die Diagrammabfrage den ACL-Datenbereich nicht unterstützte ([#7915](https://github.com/nocobase/nocobase/pull/7915)) von @2013xile
- **[Datenquellen-Manager]** Behebung des Fehlers beim Aktualisieren des Datenquellen-Passworts, wenn das Datenbank-Passwort geändert wurde ([#7977](https://github.com/nocobase/nocobase/pull/7977)) von @cgyrock
- **[Aktion: Datensätze importieren]** Behebung des Problems beim Importieren von Daten in einer Baumtabelle ([#7976](https://github.com/nocobase/nocobase/pull/7976)) von @cgyrock

### [v1.9.13](https://www.nocobase.com/en/blog/v1.9.13)

*Veröffentlichungsdatum: 25.11.2025*

### 🐛 Fehlerbehebungen

- **[client]** Behebung von Routing-Problemen bei Verwendung eines Iframes ([#7957](https://github.com/nocobase/nocobase/pull/7957)) von @zhangzhonghe

### [v1.9.12](https://www.nocobase.com/en/blog/v1.9.12)

*Veröffentlichungsdatum: 24.11.2025*

### 🚀 Verbesserungen

- **[client]** Ladezustand für die Aktionsschaltflächen "Datensatz aktualisieren" und "Datensatz löschen" hinzugefügt, um doppelte Anfragen zu vermeiden ([#7964](https://github.com/nocobase/nocobase/pull/7964)) von @mytharcher
- **[Asynchroner Aufgabenmanager]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern ([#7796](https://github.com/nocobase/nocobase/pull/7796)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern von @mytharcher
- **[Workflow: Genehmigung]**

  - Korrektur der Variablenauswahl in AssigneeSelect, beschränkt auf PK oder FK der Benutzersammlung von @mytharcher
  - Reduzierung der zu ladenden Assoziationen im Genehmigungs-Popup für eine bessere Leistung von @mytharcher
  - Kompatibilität der Nutzlast bei manueller Ausführung (oder Auslösung durch Unterfluss-Knoten) mit Datensatz oder Primärschlüssel. Vermeidung von Konsistenzproblemen im Trigger-Kontext. von @mytharcher

### 🐛 Fehlerbehebungen

- **[Asynchroner Aufgabenmanager]** Migrationsregel für die Sammlung `asyncTasks` hinzugefügt, um zu vermeiden, dass asynchrone Aufgaben-Datensätze migriert werden ([#7950](https://github.com/nocobase/nocobase/pull/7950)) von @mytharcher
- **[Workflow: Genehmigung]** Korrektur der Sprachdatei von @mytharcher

### [v1.9.11](https://www.nocobase.com/en/blog/v1.9.11)

*Veröffentlichungsdatum: 24.11.2025*

### 🐛 Fehlerbehebungen

- **[client]** Behebung, dass das Feld-Interface für belongsTo in der externen Datenquellenkonfiguration "viele-zu-eins" anstelle von "eins-zu-eins" anzeigt ([#7936](https://github.com/nocobase/nocobase/pull/7936)) von @cgyrock
- **[Workflow]** Behebung des Problems, dass das Aktualisieren der Aufgabenanzahl unbeabsichtigt den Status von ausgefüllten Formularen zurücksetzte ([#7937](https://github.com/nocobase/nocobase/pull/7937)) von @mytharcher
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Behebung von M2M (Array)-Feldproblemen beim Erstellen/Aktualisieren verknüpfter Daten ([#7926](https://github.com/nocobase/nocobase/pull/7926)) von @cgyrock

### [v1.9.10](https://www.nocobase.com/en/blog/v1.9.10)

*Veröffentlichungsdatum: 20.11.2025*

### 🚀 Verbesserungen

- **[Zugriffskontrolle]** Reduzierung der Standardberechtigungen für die Mitgliederrolle ([#7921](https://github.com/nocobase/nocobase/pull/7921)) von @2013xile
- **[Datenvisualisierung]** Russische Sprachunterstützung für Plugin-Oberflächen hinzugefügt. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) von @sembaev-a-a
- **[Workflow: Webhook]** Symbol für den Antwortknotentyp hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Fehler behoben: "Can't resolve 'antd-mobile'" und "Can't resolve 'antd-mobile-icons'" ([#7914](https://github.com/nocobase/nocobase/pull/7914)) von @zhangzhonghe
- **[Zugriffskontrolle]** Unterstützung von Datenbereichsbeschränkungen für Assoziationsoperationen. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) von @2013xile
- **[Datenquelle: Haupt]** Behebung des Problems, dass ein neu hinzugefügtes Eins-zu-Viele-Feld erst nach einem Neustart der Anwendung als Fremdschlüssel ausgewählt werden kann. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) von @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.17](https://www.nocobase.com/en/blog/v1.9.0-beta.17)

*Veröffentlichungsdatum: 21.11.2025*

### 🚀 Verbesserungen

- **[Datenbank]** Hinzufügen der Option `multipleStatements` zur MariaDB-Verbindungsinstanz, um die Ausführung mehrerer Anweisungen in einer einzelnen Abfrage zu unterstützen ([#7781](https://github.com/nocobase/nocobase/pull/7781)) von @mytharcher
- **[Zugriffskontrolle]**

  - Reduzierung der Standardberechtigungen für die Mitgliederrolle ([#7921](https://github.com/nocobase/nocobase/pull/7921)) von @2013xile
  - Optimierung der Berechtigungskontrolllogik für Assoziationsfeldoperationen ([#7800](https://github.com/nocobase/nocobase/pull/7800)) von @2013xile
- **[Datenvisualisierung]** Russische Sprachunterstützung für Plugin-Oberflächen hinzugefügt. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) von @sembaev-a-a
- **[Workflow]** Unterstützung für Datenblöcke im Workflow zur Verwendung des konsolidierten Detail-Einstellungsmenüs ([#7771](https://github.com/nocobase/nocobase/pull/7771)) von @mytharcher
- **[Workflow: Webhook]** Symbol für den Antwortknotentyp hinzugefügt von @mytharcher
- **[Workflow: JavaScript]** Behebung einer Sicherheitslücke, die durch die Übergabe von übergeordneten Funktionen in die Ausführungsumgebung verursacht wurde, um zu verhindern, dass auf den übergeordneten Ausführungskontext zugegriffen werden kann von @mytharcher
- **[Auth: OIDC]** Erhöhung des Request-Timeout von @2013xile
- **[Workflow: Genehmigung]** Benachrichtigung für delegierte und hinzugefügte Bearbeiter hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebung, dass das Feld-Interface für belongsTo in der externen Datenquellenkonfiguration "viele-zu-eins" anstelle von "eins-zu-eins" anzeigt ([#7936](https://github.com/nocobase/nocobase/pull/7936)) von @cgyrock
  - Fehler behoben: "Can't resolve 'antd-mobile'" und "Can't resolve 'antd-mobile-icons'" ([#7914](https://github.com/nocobase/nocobase/pull/7914)) von @zhangzhonghe
  - Behebung des Problems, dass duplizierte Vorlagen nicht angezeigt werden, was durch Ziehen und anschließendes Löschen einer referenzierten Vorlage verursacht wird ([#7847](https://github.com/nocobase/nocobase/pull/7847)) von @zhangzhonghe
  - Behebung des Problems, dass die Verknüpfungsregel für das Genehmigungsformular nicht funktioniert ([#7858](https://github.com/nocobase/nocobase/pull/7858)) von @zhangzhonghe
  - Behebung des Problems mit leerer nächster Seite im einfachen Paginierungs-Detailblock ([#7784](https://github.com/nocobase/nocobase/pull/7784)) von @katherinehhh
  - Behebung von "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) von @zhangzhonghe
- **[server]**

  - Behebung eines Problems im Service-Splitting-Modus, bei dem nicht abonnierte Warteschlangennachrichten nicht veröffentlicht werden konnten ([#7875](https://github.com/nocobase/nocobase/pull/7875)) von @mytharcher
  - Isolierung des Pub-Sub-Kanals nach App-Namen ([#7762](https://github.com/nocobase/nocobase/pull/7762)) von @mytharcher
  - Behebung eines Problems, bei dem nach Aktivierung des Service-Splitting-Modus das Senden von Nachrichten durch Worker-Prozesse über die Nachrichtenwarteschlange zu Fehlern führte ([#7797](https://github.com/nocobase/nocobase/pull/7797)) von @mytharcher
- **[utils]** Aktivierung der Objektzusammenführung in der Intersect-Strategie ([#7840](https://github.com/nocobase/nocobase/pull/7840)) von @chenos
- **[Datenbank]** Falsche Indexfeld-Erkennung, wenn Feldnamen im snake_case-Stil verwendet werden ([#7776](https://github.com/nocobase/nocobase/pull/7776)) von @2013xile
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Behebung von M2M (Array)-Feldproblemen beim Erstellen/Aktualisieren verknüpfter Daten ([#7926](https://github.com/nocobase/nocobase/pull/7926)) von @cgyrock
- **[Datenquelle: Haupt]** Behebung des Problems, dass ein neu hinzugefügtes Eins-zu-Viele-Feld erst nach einem Neustart der Anwendung als Fremdschlüssel ausgewählt werden kann. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) von @cgyrock
- **[Workflow]**

  - Behebung des Problems, dass das Aktualisieren der Aufgabenanzahl unbeabsichtigt den Status von ausgefüllten Formularen zurücksetzte ([#7937](https://github.com/nocobase/nocobase/pull/7937)) von @mytharcher
  - Verwendung von eventQueue anstelle des gemeinsamen backgroundJob, um zu verhindern, dass die gemeinsame Warteschlange im Service-Splitting-Modus fälschlicherweise verarbeitet wird ([#7871](https://github.com/nocobase/nocobase/pull/7871)) von @mytharcher
  - Behebung des Problems, dass das Workflow-Plugin das Warteschlangenereignis weiterhin verarbeitet, wenn es sich im Service-Splitting-Modus nicht im Worker-Modus befindet ([#7820](https://github.com/nocobase/nocobase/pull/7820)) von @mytharcher
  - Behebung des Fehlers, der durch das Abhören nicht vorhandener externer Datenquellenereignisse verursacht wurde ([#7855](https://github.com/nocobase/nocobase/pull/7855)) von @mytharcher
  - Behebung eines Problems, bei dem im Service-Splitting-Modus die manuelle Ausführung eines Workflows, der einen Unterbrechungsknoten enthält, in einem ausstehenden Status stecken blieb ([#7767](https://github.com/nocobase/nocobase/pull/7767)) von @mytharcher
  - Hinzufügen von `workflowId` als Identitätsdaten für Logs von Workflows ([#7789](https://github.com/nocobase/nocobase/pull/7789)) von @mytharcher
  - Behebung eines Problems, bei dem der Workflow-Dispatcher im Cluster-Modus Leerlaufzustände nicht korrekt identifizieren konnte, was zu unnötigem Verbrauch von Warteschlangenereignissen führen konnte, bevor das Plugin bereit war ([#7768](https://github.com/nocobase/nocobase/pull/7768)) von @mytharcher
- **[Zugriffskontrolle]**

  - Unterstützung von Datenbereichsbeschränkungen für Assoziationsoperationen. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) von @2013xile
  - Problem, dass Assoziationsoperations-Snippets nicht wirksam wurden ([#7876](https://github.com/nocobase/nocobase/pull/7876)) von @2013xile
- **[Workflow: Manueller Knoten]** Korrektur des Namespace der zu verwendenden Locale-Sprache, um den korrekten Inhalt der Übersetzung anzuzeigen ([#7877](https://github.com/nocobase/nocobase/pull/7877)) von @mytharcher
- **[Benutzer]** Falsche Indexaktualisierung, wenn Feldnamen im snake_case-Stil verwendet werden ([#7785](https://github.com/nocobase/nocobase/pull/7785)) von @2013xile
- **[Mobil (veraltet)]** Behebung des Problems, dass im Popup für den Standardwert des Datumsfeldes auf Mobilgeräten kein Datum ausgewählt werden kann ([#7783](https://github.com/nocobase/nocobase/pull/7783)) von @zhangzhonghe
- **[Workflow: Benutzerdefinierte Variable]** Behebung eines Fehlers, der ausgelöst wurde, wenn keine Konfiguration im Variablenknoten vorhanden war von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebung des Fehlers, der durch das Abhören nicht vorhandener externer Datenquellenereignisse verursacht wurde von @mytharcher
- **[Vorlagendruck]** Analysiere die Variablen im Filter von @jiannx
- **[Datenvisualisierung: ECharts]** Behebung des Problems, dass die Konfiguration des Label-Typs in Echarts-Optionen nicht wirksam wird. von @heziqiang
- **[Workflow: Genehmigung]**

  - Korrektur des Datumsformats auf den Genehmigungslistenkarten im Aufgabencenter, um das vollständige Datum und die Uhrzeit anzuzeigen von @mytharcher
  - Behebung des Problems, dass die Seitengröße des Benachrichtigungskanals nicht groß genug ist und die Liste nicht vollständig geladen wird von @mytharcher
  - Behebung eines Leistungsproblems, das beim Abfragen der Liste der Genehmigungsdatensätze während der Genehmigungseinreichung auftrat von @mytharcher
  - Behebung eines Problems, bei dem Hauptsammlungsfelder beim erneuten Laden von Assoziationsdaten nicht ausgeschlossen wurden von @mytharcher
  - Behebung eines Problems, bei dem Wettlaufsituationen während der gleichzeitigen Genehmigungsverarbeitung durch mehrere Genehmiger dazu führen konnten, dass ein Workflow-Knoten mehr als einmal ausgeführt wurde von @mytharcher
  - Das Erstellen von Genehmigungsknoten in parallelen Zweigen wird nicht mehr unterstützt, um Probleme durch den Prozessstatus zu vermeiden von @mytharcher
  - Behebung des Problems, dass die Verknüpfungsregel für das Genehmigungsformular nicht funktioniert von @zhangzhonghe
  - Behebung eines Fehlers, der beim Duplizieren eines Genehmigungs-Workflows ausgelöst wurde von @mytharcher
- **[E-Mail-Manager]**

  - Synchronisierungslogs hinzugefügt von @jiannx
  - Synchronisierung des Microsoft-Mail-Lesestatus ohne Zeitstempel von @jiannx
  - Sammlung mailMessages Indizes hinzugefügt von @jiannx
  - Migration für Indizes hinzugefügt von @jiannx
  - Behebung des Problems mit reservierten Bildern und Synchronisierung in Outlook von @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.47](https://www.nocobase.com/en/blog/v2.0.0-alpha.47)

*Veröffentlichungsdatum: 26.11.2025*

### 🚀 Verbesserungen

- **[client]**

  - Unterstützung für die Initialisierung ausgewählter Filterfelder in der Diagrammabfrage ([#7933](https://github.com/nocobase/nocobase/pull/7933)) von @heziqiang
  - Verwende dreifache geschweifte Klammern (`{{{` und `}}}`) für Variablen im Nachrichteninhalt, um zu vermeiden, dass Variablen von Handlebars escaped werden ([#7972](https://github.com/nocobase/nocobase/pull/7972)) von @mytharcher
  - Ladezustand für die Aktionsschaltflächen "Datensatz aktualisieren" und "Datensatz löschen" hinzugefügt, um doppelte Anfragen zu vermeiden ([#7964](https://github.com/nocobase/nocobase/pull/7964)) von @mytharcher
- **[Sammlungsfeld: Markdown(Vditor)]** Anpassung der Vollbild-Inhaltsbreite von Vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebung eines Problems, bei dem das Öffnen des Detailblocks im Popup für Nicht-ID-Beziehungsfelder einen Fehler verursachte. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) von @gchust
  - Behebung eines Problems, bei dem Assoziationsdaten im Popup für Nicht-ID-Beziehungsfelder nicht korrekt geladen wurden. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) von @gchust
  - Behebung von Routing-Problemen bei Verwendung eines Iframes ([#7957](https://github.com/nocobase/nocobase/pull/7957)) von @zhangzhonghe
  - Behebung des Problems mit ungültiger Präzisionseinstellung für das Zahlenfeldformat ([#7967](https://github.com/nocobase/nocobase/pull/7967)) von @katherinehhh
  - Korrektur der falschen Eingabe in der neuen 2.0-Seite ([#7945](https://github.com/nocobase/nocobase/pull/7945)) von @zhangzhonghe
  - Behebung des Problems, dass der Filterwert beim Klicken auf die Schaltfläche "Zurücksetzen" nicht gelöscht wird ([#7966](https://github.com/nocobase/nocobase/pull/7966)) von @zhangzhonghe
- **[Workflow]** Behebung des Problems, dass die Aufgabenanzahl aufgrund falscher Provider-Nutzung nicht angezeigt wurde ([#7968](https://github.com/nocobase/nocobase/pull/7968)) von @mytharcher
- **[Datenvisualisierung]** Behebung des Problems, dass die Diagrammabfrage den ACL-Datenbereich nicht unterstützte ([#7915](https://github.com/nocobase/nocobase/pull/7915)) von @2013xile
- **[Block: Referenz]** Behebung eines Problems, bei dem das Zitieren eines Blocks den zitierten Block von der ursprünglichen Seite entfernte. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) von @gchust
- **[KI-Mitarbeiter]** Behebung eines Problems bei der KI-generierten SQL-Ausgabe ([#7956](https://github.com/nocobase/nocobase/pull/7956)) von @heziqiang
- **[Vorlagendruck]** Behebung des Fehlers beim Hinzufügen einer Vorlage in der Datensatz-Vorlagendruckaktion von @katherinehhh

### [v2.0.0-alpha.46](https://www.nocobase.com/en/blog/v2.0.0-alpha.46)

*Veröffentlichungsdatum: 24.11.2025*

### 🚀 Verbesserungen

- **[flow-engine]** Unterstützung für dynamisches Umschalten der Flow-Modellklasse ([#7952](https://github.com/nocobase/nocobase/pull/7952)) von @gchust
- **[KI-Mitarbeiter]** KI-Mitarbeiter-Plugin Upgrade-Hook hinzugefügt ([#7951](https://github.com/nocobase/nocobase/pull/7951)) von @heziqiang
- **[Asynchroner Aufgabenmanager]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern ([#7796](https://github.com/nocobase/nocobase/pull/7796)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Kompatibilität der Nutzlast bei manueller Ausführung (oder Auslösung durch Unterfluss-Knoten) mit Datensatz oder Primärschlüssel. Vermeidung von Konsistenzproblemen im Trigger-Kontext. von @mytharcher
  - Reduzierung der zu ladenden Assoziationen im Genehmigungs-Popup für eine bessere Leistung von @mytharcher
  - Korrektur der Variablenauswahl in AssigneeSelect, beschränkt auf PK oder FK der Benutzersammlung von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Behebung des automatischen Zeilenumbruchs von Textfeldern im Detailblock, wenn der Inhalt die Breite überschreitet ([#7955](https://github.com/nocobase/nocobase/pull/7955)) von @katherinehhh
- **[Asynchroner Aufgabenmanager]** Migrationsregel für die Sammlung `asyncTasks` hinzugefügt, um zu vermeiden, dass asynchrone Aufgaben-Datensätze migriert werden ([#7950](https://github.com/nocobase/nocobase/pull/7950)) von @mytharcher
- **[Dateimanager]** Behebung des Hochladens von Dateien in den angegebenen Speicher anstelle des Standardspeichers ([#7947](https://github.com/nocobase/nocobase/pull/7947)) von @katherinehhh
- **[Workflow: Genehmigung]** Korrektur der Sprachdatei von @mytharcher

### [v2.0.0-alpha.45](https://www.nocobase.com/en/blog/v2.0.0-alpha.45)

*Veröffentlichungsdatum: 21.11.2025*

### 🎉 Neue Funktionen

- **[client]** Unterstützung für Spaltenfeldsortierung in der Tabelle ([#7900](https://github.com/nocobase/nocobase/pull/7900)) von @katherinehhh
- **[Workflow]** "Mehrfachbedingungen"-Knoten hinzugefügt, bietet Flusssteuerung wie `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Behebung eines Fehlers, der beim Löschen des Werts in einer mehrstufigen Kaskade ausgelöst wurde ([#7943](https://github.com/nocobase/nocobase/pull/7943)) von @katherinehhh
- **[Datenvisualisierung]** Behebung des Problems, dass der Diagrammblock nach dem Speichern nicht aktualisiert wurde ([#7920](https://github.com/nocobase/nocobase/pull/7920)) von @heziqiang
- **[Vorlagendruck]** Behebung des Fehlers der Vorlagendruckaktion im Detailblock von @katherinehhh

### [v2.0.0-alpha.44](https://www.nocobase.com/en/blog/v2.0.0-alpha.44)

*Veröffentlichungsdatum: 21.11.2025*

### 🎉 Neue Funktionen

- **[client]**

  - Schnellerstellungsunterstützung für Assoziationsfeldauswahl hinzugefügt ([#7887](https://github.com/nocobase/nocobase/pull/7887)) von @katherinehhh
  - Unterstützung für Kaskadenauswahl für Baumsammlungs-Assoziationsfeld ([#7846](https://github.com/nocobase/nocobase/pull/7846)) von @katherinehhh
- **[Telemetrie]** Neues Plugin hinzugefügt: Telemetry, ein auf OpenTelemetry basierendes Telemetrie-Plugin, das CPU-, Speicher- und HTTP-Anfrage-Metriken mit HTTP-Export-Unterstützung bereitstellt von @2013xile

### 🚀 Verbesserungen

- **[telemetry]** Unterstützung zur Steuerung, welche Metriken exportiert werden ([#7938](https://github.com/nocobase/nocobase/pull/7938)) von @2013xile
- **[Asynchroner Aufgabenmanager]** Asynchrone Aufgaben für Unteranwendungen sollten nur die Ziel-Unteranwendungen in Workern starten ([#7927](https://github.com/nocobase/nocobase/pull/7927)) von @2013xile

### 🐛 Fehlerbehebungen

- **[client]**

  - Entfernung der Baumtabellenaktion aus Nicht-Baumsammlungsblöcken ([#7931](https://github.com/nocobase/nocobase/pull/7931)) von @katherinehhh
  - Behebung, dass das Feld-Interface für belongsTo in der externen Datenquellenkonfiguration "viele-zu-eins" anstelle von "eins-zu-eins" anzeigt ([#7936](https://github.com/nocobase/nocobase/pull/7936)) von @cgyrock
- **[flow-engine]** Behebung des Problems mit falsch ausgerichteter Symbolleistensymbolanzeige in der Detailblock-Schaltfläche ([#7929](https://github.com/nocobase/nocobase/pull/7929)) von @zhangzhonghe
- **[Workflow]** Behebung des Problems, dass das Aktualisieren der Aufgabenanzahl unbeabsichtigt den Status von ausgefüllten Formularen zurücksetzte ([#7937](https://github.com/nocobase/nocobase/pull/7937)) von @mytharcher
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Behebung von M2M (Array)-Feldproblemen beim Erstellen/Aktualisieren verknüpfter Daten ([#7926](https://github.com/nocobase/nocobase/pull/7926)) von @cgyrock
- **[Aktion: Datensätze importieren Pro]** Behebung des Problems, dass die Änderung der Importoptionen durch den Uploader keine Wirkung hat von @katherinehhh

### [v2.0.0-alpha.43](https://www.nocobase.com/en/blog/v2.0.0-alpha.43)

*Veröffentlichungsdatum: 20.11.2025*

### 🚀 Verbesserungen

- **[Datenvisualisierung]** Russische Sprachunterstützung für Plugin-Oberflächen hinzugefügt. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) von @sembaev-a-a
- **[Zugriffskontrolle]** Reduzierung der Standardberechtigungen für die Mitgliederrolle ([#7921](https://github.com/nocobase/nocobase/pull/7921)) von @2013xile
- **[Workflow: Webhook]** Symbol für den Antwortknotentyp hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Fehler behoben: "Can't resolve 'antd-mobile'" und "Can't resolve 'antd-mobile-icons'" ([#7914](https://github.com/nocobase/nocobase/pull/7914)) von @zhangzhonghe
- **[flow-engine]** Behebung des Problems, dass das Öffnen des Schnellbearbeitungsformulars des Tabellenblocks einen Fehler verursachte. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) von @gchust
- **[Flow engine]** Stelle sicher, dass Datensatzvariablen immer vollständige Datensätze zurückgeben, wenn sie zusammen mit ihren einzelnen Feldern verwendet werden. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) von @gchust
- **[Datenquelle: Haupt]** Behebung des Problems, dass ein neu hinzugefügtes Eins-zu-Viele-Feld erst nach einem Neustart der Anwendung als Fremdschlüssel ausgewählt werden kann. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) von @cgyrock
- **[Zugriffskontrolle]** Unterstützung von Datenbereichsbeschränkungen für Assoziationsoperationen. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) von @2013xile
