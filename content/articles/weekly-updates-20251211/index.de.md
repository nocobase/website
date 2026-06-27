---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Unterstützung für die Anpassung globaler Stile im Theme-Editor und Unterstützung für die Festlegung einer Standardsortierregel im Detailblock, und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Protokolle zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.24](https://www.nocobase.com/en/blog/v1.9.24)

*Veröffentlichungsdatum: 09.12.2025*

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem die `RemoteSelect`-Komponente fälschlicherweise einen Datensatz lud, wenn der Wert null war ([#8137](https://github.com/nocobase/nocobase/pull/8137)) von @mytharcher
- **[Sammlungsfeld: Sequenz]** Verbesserung der Robustheit des plugin-field-sequence bei der Verarbeitung des Reparaturbefehls ([#8139](https://github.com/nocobase/nocobase/pull/8139)) von @cgyrock
- **[Benachrichtigung: E-Mail]** Problem mit der E-Mail-Benachrichtigungsverbindungsbeschränkung behoben ([#8119](https://github.com/nocobase/nocobase/pull/8119)) von @jiannx

### [v1.9.23](https://www.nocobase.com/en/blog/v1.9.23)

*Veröffentlichungsdatum: 09.12.2025*

### 🚀 Verbesserungen

- **[auth]** [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) behoben ([#8128](https://github.com/nocobase/nocobase/pull/8128)) von @2013xile
- **[Aktion: Datensätze importieren]** Auswahl der ID für Importfelder erlauben ([#8132](https://github.com/nocobase/nocobase/pull/8132)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Server]** Problem behoben, bei dem ausgelöste Workflows nach dem Importieren von Daten nicht zur Verarbeitungswarteschlange hinzugefügt wurden, um sicherzustellen, dass Workflows unmittelbar nach dem Import wie erwartet ausgeführt werden ([#8121](https://github.com/nocobase/nocobase/pull/8121)) von @mytharcher

### [v1.9.21](https://www.nocobase.com/en/blog/v1.9.21)

*Veröffentlichungsdatum: 07.12.2025*

### 🚀 Verbesserungen

- **[Prüfprotokolle]** Das eindeutige Identifikatorfeld auf `text` aktualisiert, um einen Identifikatorlängenüberlauf bei Massenbearbeitungen zu verhindern von @2013xile

### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]** Problem behoben, bei dem keine Daten geladen wurden, wenn verwandte Genehmigungen mit ACL-Bereichsvariablen geladen wurden von @mytharcher

### [v1.9.20](https://www.nocobase.com/en/blog/v1.9.20)

*Veröffentlichungsdatum: 05.12.2025*

### 🎉 Neue Funktionen

- **[Sammlungsfeld: Sequenz]** Sequenzfelder nach der Datenmigration automatisch aktualisieren ([#8063](https://github.com/nocobase/nocobase/pull/8063)) von @cgyrock

### 🚀 Verbesserungen

- **[Migrationsmanager]** Sequenzfelder nach der Datenmigration automatisch aktualisieren von @cgyrock

### 🐛 Fehlerbehebungen

- **[Workflow]** Problem behoben, bei dem ein Fehler in der Ausführungs-Canvas ausgelöst wurde, wenn ein Knoten gelöscht wurde ([#8090](https://github.com/nocobase/nocobase/pull/8090)) von @mytharcher
- **[Workflow: Genehmigung]** Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn eine verwandte Genehmigung im Nur-Rollen-Modus geladen wurde von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.18](https://www.nocobase.com/en/blog/v1.9.0-beta.18)

*Veröffentlichungsdatum: 09.12.2025*

### 🎉 Neue Funktionen

- **[Sammlungsfeld: Sequenz]** Sequenzfelder nach der Datenmigration automatisch aktualisieren ([#8063](https://github.com/nocobase/nocobase/pull/8063)) von @cgyrock
- **[Datenquelle: REST-API]** Option `Fehlermeldungstransformator` in der Konfiguration der RESTful-API-Datenquelle hinzugefügt von @cgyrock
- **[Auth: OIDC]** Unterstützung für automatische Weiterleitung zur SSO-URL bei fehlender Authentifizierung von @heziqiang

### 🚀 Verbesserungen

- **[auth]** [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) behoben ([#8128](https://github.com/nocobase/nocobase/pull/8128)) von @2013xile
- **[Client]**

  - Zusammengeklappte Optionen bei Hover in der Select-Komponente anzeigen ([#8029](https://github.com/nocobase/nocobase/pull/8029)) von @katherinehhh
  - Validierungsmeldungen für Untertabellen optimieren ([#8001](https://github.com/nocobase/nocobase/pull/8001)) von @katherinehhh
  - Ladezustand für die Aktionsschaltflächen "Datensatz aktualisieren" und "Datensatz löschen" hinzugefügt, um doppelte Anfragen zu vermeiden ([#7964](https://github.com/nocobase/nocobase/pull/7964)) von @mytharcher
  - Verwenden Sie dreifache Klammern (`{{{` und `}}}`) für Variablen im Nachrichteninhalt, um zu vermeiden, dass Variablen von Handlebars escaped werden ([#7972](https://github.com/nocobase/nocobase/pull/7972)) von @mytharcher
- **[Aktion: Datensätze importieren]** Auswahl der ID für Importfelder erlauben ([#8132](https://github.com/nocobase/nocobase/pull/8132)) von @katherinehhh
- **[Workflow]** "main"-Datenquellenkontext für UserSelect hinzugefügt, um eine allgemeinere Komponente bereitzustellen, die auch an anderer Stelle verwendet werden kann ([#8010](https://github.com/nocobase/nocobase/pull/8010)) von @mytharcher
- **[Sammlungsfeld: Markdown(Vditor)]** Vditor-Vollbild-Inhaltsbreite anpassen ([#7974](https://github.com/nocobase/nocobase/pull/7974)) von @katherinehhh
- **[Asynchroner Aufgabenmanager]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern ([#7796](https://github.com/nocobase/nocobase/pull/7796)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern von @mytharcher
- **[Workflow: Genehmigung]**

  - Variablenauswahl in AssigneeSelect behoben, beschränkt auf PK oder FK der Benutzersammlung von @mytharcher
  - Gemeinsame Komponente verwendet, um doppelten Code zu reduzieren von @mytharcher
  - Payload der manuellen Ausführung (oder Auslösung durch Subflow-Knoten) kompatibel mit Datensatz oder Primärschlüssel gemacht. Konsistenzproblem im Trigger-Kontext vermieden. von @mytharcher
  - Assoziationen reduziert, die im Genehmigungs-Popup geladen werden müssen, um eine bessere Leistung zu erzielen von @mytharcher
- **[Prüfprotokolle]** Das eindeutige Identifikatorfeld auf `text` aktualisiert, um einen Identifikatorlängenüberlauf bei Massenbearbeitungen zu verhindern von @2013xile
- **[Migrationsmanager]** Sequenzfelder nach der Datenmigration automatisch aktualisieren von @cgyrock

### 🐛 Fehlerbehebungen

- **[Server]** Problem behoben, bei dem ausgelöste Workflows nach dem Importieren von Daten nicht zur Verarbeitungswarteschlange hinzugefügt wurden, um sicherzustellen, dass Workflows unmittelbar nach dem Import wie erwartet ausgeführt werden ([#8121](https://github.com/nocobase/nocobase/pull/8121)) von @mytharcher
- **[acl]** Problem behoben, bei dem ACL-Metainformationen falsch sind, wenn externe Datenquellen-Berechtigungsbereiche aktuelle Benutzervariablen verwenden ([#8013](https://github.com/nocobase/nocobase/pull/8013)) von @2013xile
- **[Client]**

  - Fehler beim Lazy Loading in Variable.Input behoben, der dazu führte, dass das Variablenoptionsmenü falsch neu gerendert wurde ([#8009](https://github.com/nocobase/nocobase/pull/8009)) von @mytharcher
  - Fehler beim Hinzufügen von Unterdatensätzen im Assoziationsbaum-Tabellenblock behoben ([#7989](https://github.com/nocobase/nocobase/pull/7989)) von @katherinehhh
  - Flackerproblem des Dropdown-Auswahlfelds für Verknüpfungsregeln behoben ([#8018](https://github.com/nocobase/nocobase/pull/8018)) von @zhangzhonghe
  - Fehler beim Öffnen der Standardwerteinstellungen vermieden ([#7997](https://github.com/nocobase/nocobase/pull/7997)) von @mytharcher
  - Routing-Probleme bei Verwendung eines Iframes behoben ([#7957](https://github.com/nocobase/nocobase/pull/7957)) von @zhangzhonghe
  - Problem behoben, bei dem RemoteSelect bei nicht-Objektwerten kein korrektes Label anzeigte ([#7975](https://github.com/nocobase/nocobase/pull/7975)) von @katherinehhh
- **[Datenbank]** Behoben: UTC-Verarbeitung bei der Zeitumrechnung für Nur-Zeit-Felder entfernt, um zeitzonenbedingte Verschiebungen zu verhindern. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) von @ChimingLiu
- **[Aktion: Datensätze importieren]**

  - Importierte Felder stimmen nicht mit den in ACL-Einstellungen festgelegten Feldern überein ([#8075](https://github.com/nocobase/nocobase/pull/8075)) von @2013xile
  - Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn ein Feld in der importierenden xlsx den Wert `null` hatte ([#8037](https://github.com/nocobase/nocobase/pull/8037)) von @mytharcher
  - Problem beim Importieren von Daten in einer Baumtabelle behoben ([#7976](https://github.com/nocobase/nocobase/pull/7976)) von @cgyrock
- **[Workflow]**

  - Problem behoben, bei dem die Ausführungsseite einen Fehler ausgab, wenn Jobs auf einem Knoten undefiniert waren ([#8066](https://github.com/nocobase/nocobase/pull/8066)) von @mytharcher
  - Problem behoben, bei dem ein Fehler in der Ausführungs-Canvas ausgelöst wurde, wenn ein Knoten gelöscht wurde ([#8090](https://github.com/nocobase/nocobase/pull/8090)) von @mytharcher
  - Problem behoben, bei dem die Warteschlange vor dem Veröffentlichen von Nachrichten geschlossen wurde ([#8003](https://github.com/nocobase/nocobase/pull/8003)) von @mytharcher
  - Problem behoben, bei dem vorbereitete Ausführungen vor dem Stoppen nicht an die Warteschlange gesendet wurden ([#7981](https://github.com/nocobase/nocobase/pull/7981)) von @mytharcher
  - Problem behoben, bei dem einige Workflow-Aufgabenmenüs nicht angezeigt wurden ([#7980](https://github.com/nocobase/nocobase/pull/7980)) von @mytharcher
  - Problem behoben, bei dem der Aufgabenlink zu einer Fehlerseite führte ([#7983](https://github.com/nocobase/nocobase/pull/7983)) von @mytharcher
  - Problem behoben, bei dem die Aufgabenanzahl aufgrund falscher Provider-Verwendung nicht angezeigt wurde ([#7968](https://github.com/nocobase/nocobase/pull/7968)) von @mytharcher
- **[Multi-App-Manager]** Protokollebene-Einstellungen wurden nicht auf Unteranwendungen angewendet ([#8045](https://github.com/nocobase/nocobase/pull/8045)) von @2013xile
- **[Zugriffskontrolle]** Middleware für Berechtigungsprüfungen bei Assoziationsoperationen für externe Datenquellen hinzugefügt ([#8062](https://github.com/nocobase/nocobase/pull/8062)) von @2013xile
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem behoben, bei dem das m2m-Array-Feld in der Untertabelle nicht aktualisiert werden konnte ([#7998](https://github.com/nocobase/nocobase/pull/7998)) von @cgyrock
- **[Theme-Editor]** Theme-Umschalter auf mobilen Geräten aktiviert ([#8046](https://github.com/nocobase/nocobase/pull/8046)) von @zhangzhonghe
- **[Datenvisualisierung]**

  - Filterfeldeinstellungen für externe Datenquellensammlungen zeigen keine spezifischen Eigenschaften an ([#7982](https://github.com/nocobase/nocobase/pull/7982)) von @2013xile
  - Problem behoben, bei dem die Diagrammabfrage den ACL-Datenbereich nicht unterstützte ([#7915](https://github.com/nocobase/nocobase/pull/7915)) von @2013xile
- **[Sammlung: Baum]** Fehler bei Pfad-Tabellenaktualisierungen aufgrund falscher Suche nach übergeordnetem Baumfeld behoben ([#8000](https://github.com/nocobase/nocobase/pull/8000)) von @2013xile
- **[Workflow: Manueller Knoten]** Problem behoben, bei dem die Anzahl der manuellen Aufgaben nicht korrekt war ([#7984](https://github.com/nocobase/nocobase/pull/7984)) von @mytharcher
- **[Asynchroner Aufgabenmanager]** Migrationsregel für die `asyncTasks`-Sammlung hinzugefügt, um zu vermeiden, dass asynchrone Aufgabenaufzeichnungen migriert werden ([#7950](https://github.com/nocobase/nocobase/pull/7950)) von @mytharcher
- **[Datenquellenmanager]** Fehler bei der Aktualisierung des Datenquellenpassworts behoben, wenn das Datenbankpasswort geändert wurde ([#7977](https://github.com/nocobase/nocobase/pull/7977)) von @cgyrock
- **[Abteilungen]** Problem behoben, bei dem abteilungsassoziierte Felder nicht bearbeitet werden konnten ([#7462](https://github.com/nocobase/nocobase/pull/7462)) von @heziqiang
- **[Workflow: Subflow]** Problem behoben, bei dem der ausgewählte Workflow "N/A" anzeigte, wenn die Workflow-Anzahl größer als 200 war von @mytharcher
- **[Workflow: Genehmigung]**

  - Sprachdatei korrigiert von @mytharcher
  - Problem behoben, bei dem Genehmigungsaufzeichnungen nicht im Job-Ergebnis im Rückkehrzweig enthalten waren von @mytharcher
  - Problem behoben, bei dem keine Daten geladen wurden, wenn verwandte Genehmigungen mit ACL-Bereichsvariablen geladen wurden von @mytharcher
  - Berechtigungsproblem beim Abrufen von `approvalRecords.reassignee` aufgrund von Änderungen an `RemoteSelect` behoben von @mytharcher
  - Problem behoben, bei dem die Druckaktion nicht funktionierte, wenn die Seite mit geöffnetem Modal aktualisiert wurde von @mytharcher
  - Migration hinzugefügt, um doppelte Datensatzfehler beim Hinzufügen eines Index zu vermeiden von @mytharcher
  - Problem behoben, bei dem der Prozess bei Verzweigung mit Reihenfolge und Gegenzeichnung falsch war von @mytharcher
  - Problem behoben, bei dem der Kommentar im Job-Ergebnis null war, nachdem der Benutzer die Genehmigung mit Kommentar eingereicht hatte von @mytharcher
  - Problem behoben, dass im Ausführungskontext nach erneuter Einreichung durch den Benutzer keine Antragstellerdaten vorhanden waren von @mytharcher
  - Problem behoben, bei dem ein Berechtigungsfehler ausgelöst wurde, wenn datensatzbezogene Genehmigungen im Detail-Drawer geladen wurden von @mytharcher
  - Problem behoben, bei dem das Genehmiger-Popup-Fenster keinen Titel anzeigte von @zhangzhonghe
  - Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn eine verwandte Genehmigung im Nur-Rollen-Modus geladen wurde von @mytharcher
  - Problem behoben, bei dem beim Auflisten von Genehmigungen ein OOM-Fehler auftrat von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.52](https://www.nocobase.com/en/blog/v2.0.0-alpha.52)

*Veröffentlichungsdatum: 07.12.2025*

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Hinzufügen/Auswählen/Trennen-Einstellungen in n-zu-vielen-Unterformularen hinzugefügt ([#8099](https://github.com/nocobase/nocobase/pull/8099)) von @katherinehhh
- **[Datenquelle: REST-API]** Option `Fehlermeldungstransformator` in der Konfiguration der RESTful-API-Datenquelle hinzugefügt von @cgyrock

### 🚀 Verbesserungen

- **[auth]** [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) behoben ([#8128](https://github.com/nocobase/nocobase/pull/8128)) von @2013xile
- **[Aktion: Datensätze importieren]**

  - Auswahl der ID für Importfelder erlauben ([#8133](https://github.com/nocobase/nocobase/pull/8133)) von @katherinehhh
  - Auswahl der ID für Importfelder erlauben ([#8132](https://github.com/nocobase/nocobase/pull/8132)) von @katherinehhh
- **[Workflow: Genehmigung]** API geändert, um ein einzelnes Genehmigungselement abzurufen, und Code vereinfacht von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behoben: Verhindert, dass der deaktivierte Zustand des Kindes die Auswahl des Beziehungsfelds blockiert ([#8131](https://github.com/nocobase/nocobase/pull/8131)) von @katherinehhh
  - Problem behoben, bei dem die `RemoteSelect`-Komponente fälschlicherweise einen Datensatz lud, wenn der Wert null war ([#8137](https://github.com/nocobase/nocobase/pull/8137)) von @mytharcher
  - Problem behoben, bei dem die UI-Komponentenbreite inkonsistent war, wenn "Vergangenheit" oder "Zukunft" für Datumsfilterfelder ausgewählt wurde. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) von @gchust
  - Problem behoben, bei dem Standardfeldbezeichnungen im Filterformularblock nicht korrekt in mehrere Sprachen übersetzt werden konnten. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) von @gchust
  - Problem behoben, bei dem die Titel- und Beschreibungsstile des JS-Blocks inkonsistent mit anderen Blöcken waren. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) von @gchust
  - Problem behoben, bei dem verschachtelte Untertabellen im Unterformular keine Daten anzeigten ([#8117](https://github.com/nocobase/nocobase/pull/8117)) von @katherinehhh
  - Problem mit dem Zeilenumbruch im Tooltip für lange Textfelder behoben ([#8122](https://github.com/nocobase/nocobase/pull/8122)) von @katherinehhh
  - Problem behoben, bei dem die auswählbaren Daten für Assoziationsfelder im Filterformularblock falsch waren. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) von @gchust
  - Problem behoben, bei dem die auswählbaren Optionen bei Verwendung der Operatoren "ist einer von" oder "ist keiner von" für die Filterung auf Optionsfeldern nicht vollständig aufgelistet wurden. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) von @gchust
  - Problem behoben, bei dem benutzerdefinierte Feldkonfigurationen im Filterformular nicht korrekt vorausgefüllt wurden und einige Einstellungen nicht wirksam wurden. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) von @gchust
  - Problem behoben, bei dem das Löschen der Between-Zeitfilterwerte und das erneute Auslösen des Filters einen Fehler verursachte. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) von @gchust
  - Problem behoben, bei dem der Zahlenfeldwert in der Filteraktion nicht korrekt vorausgefüllt wurde. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) von @gchust
  - Problem behoben, bei dem einige Feldoperatoren in Filterformularen Daten nicht korrekt filterten. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) von @gchust
  - Problem behoben, bei dem das Filtern nach Kontrollkästchenfeldern keine Wirkung zeigte. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) von @gchust
- **[flow-engine]**

  - Behoben: Falsche Konvertierung bei Verwendung des Integer-Typs als Enum-Optionen ([#8138](https://github.com/nocobase/nocobase/pull/8138)) von @chenos
  - Problem behoben, bei dem umschaltbare Untermodell-Menüpunkte fehlschlugen, wenn `useModel` weggelassen wurde, indem es aus `createModelOptions.use` abgeleitet wurde ([#8105](https://github.com/nocobase/nocobase/pull/8105)) von @zhangzhonghe
- **[Server]** Problem behoben, bei dem ausgelöste Workflows nach dem Importieren von Daten nicht zur Verarbeitungswarteschlange hinzugefügt wurden, um sicherzustellen, dass Workflows unmittelbar nach dem Import wie erwartet ausgeführt werden ([#8121](https://github.com/nocobase/nocobase/pull/8121)) von @mytharcher
- **[Benachrichtigung: E-Mail]** Problem mit der E-Mail-Benachrichtigungsverbindungsbeschränkung behoben ([#8119](https://github.com/nocobase/nocobase/pull/8119)) von @jiannx
- **[Sammlungsfeld: Formel]** Problem behoben, bei dem Formelfelder in der Filteraktion und im Filterformularblock keine Eingabewerte akzeptierten. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) von @gchust
- **[Multi-Space]** Erstellung anderer Felder in der Systemsammlung korrigiert von @jiannx

### [v2.0.0-alpha.51](https://www.nocobase.com/en/blog/v2.0.0-alpha.51)

*Veröffentlichungsdatum: 07.12.2025*

### 🎉 Neue Funktionen

- **[Client]**

  - Unterstützung für die Anpassung globaler Stile im Theme-Editor ([#7960](https://github.com/nocobase/nocobase/pull/7960)) von @ljmiaoo
  - Unterstützung für die Festlegung einer Standardsortierregel im Detailblock ([#8070](https://github.com/nocobase/nocobase/pull/8070)) von @katherinehhh
  - Unterstützung für die Einstellung des Datentyps für Zahlenfelder (Optionen: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) von @chenos
- **[Sammlungsfeld: Sequenz]** Sequenzfelder nach der Datenmigration automatisch aktualisieren ([#8063](https://github.com/nocobase/nocobase/pull/8063)) von @cgyrock

### 🚀 Verbesserungen

- **[Client]**

  - Seitensprung der Untertabelle nach Zeilenentfernung behoben und Unterstützung für Spaltenvalidierungsregeln hinzugefügt ([#8094](https://github.com/nocobase/nocobase/pull/8094)) von @katherinehhh
  - Anzeige großer Felder in bearbeitbaren Untertabellen angepasst ([#8078](https://github.com/nocobase/nocobase/pull/8078)) von @katherinehhh
  - Ellipsis für überlaufende JSON-Feldinhalte unterstützt ([#8067](https://github.com/nocobase/nocobase/pull/8067)) von @katherinehhh
- **[flow-engine]**

  - useCache-Option zu FlowModelRenderer hinzugefügt ([#8072](https://github.com/nocobase/nocobase/pull/8072)) von @zhangzhonghe
  - Methode `removeModelWithSubModels` hinzugefügt, um ein Modell und seine Untermodelle rekursiv zu entfernen ([#8064](https://github.com/nocobase/nocobase/pull/8064)) von @zhangzhonghe
- **[Block: GridCard]** Zeilenanzahl-Konfiguration zur Grid-Karte hinzugefügt und pageSize durch automatische Berechnung ersetzt ([#8055](https://github.com/nocobase/nocobase/pull/8055)) von @katherinehhh
- **[Prüfprotokolle]** Das eindeutige Identifikatorfeld auf `text` aktualisiert, um einen Identifikatorlängenüberlauf bei Massenbearbeitungen zu verhindern von @2013xile
- **[Migrationsmanager]** Sequenzfelder nach der Datenmigration automatisch aktualisieren von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem die konfigurierten Felder eines entfernten Blocks nicht aus dem Filterblock gelöscht wurden. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) von @gchust
  - Zusätzlichen Leerraum behoben, wenn eine Schaltfläche im Nicht-Konfigurationsmodus ausgeblendet ist ([#8092](https://github.com/nocobase/nocobase/pull/8092)) von @katherinehhh
  - Problem behoben, bei dem der Text der Zurücksetzen-Schaltfläche im Filterformularblock nicht geändert werden konnte. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) von @gchust
  - Problem behoben, bei dem die Feldeingabe bei Verwendung der Operatoren $in / $notIn zum Filtern von Feldern keine Mehrfachwerte unterstützte. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) von @gchust
  - Problem behoben, bei dem neu hinzugefügte Datenblöcke nicht automatisch im Feldmenü des Filterformularblocks erschienen. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) von @gchust
  - Das Konfigurationsmenü für Assoziationsfelder in Filterformularen sollte die Option "Schnellerstellung" nicht anzeigen. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) von @gchust
  - Problem mit Assoziations-Untertabellendaten im Listenblock behoben ([#8082](https://github.com/nocobase/nocobase/pull/8082)) von @katherinehhh
  - Problem behoben, bei dem numerische Feldvalidierungsregeln aus den Sammlungseinstellungen nicht angewendet wurden ([#8025](https://github.com/nocobase/nocobase/pull/8025)) von @katherinehhh
  - Problem behoben, bei dem Felder in Filterformularen durch serverseitige Validierungsregeln für Felder eingeschränkt wurden. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) von @gchust
  - Problem mit der Schnellbearbeitung von JSON-Feldern ([#8059](https://github.com/nocobase/nocobase/pull/8059)) von @katherinehhh
  - Problem mit der Anzeige großer Felder in der Untertabellenbearbeitung behoben ([#8069](https://github.com/nocobase/nocobase/pull/8069)) von @katherinehhh
  - Problem behoben, bei dem die Schnellerstellung einen Fehler auslöste, wenn allowMultiple in der Assoziationsdatensatzauswahl deaktiviert war ([#8034](https://github.com/nocobase/nocobase/pull/8034)) von @katherinehhh
  - Problem behoben, bei dem das JSON-Feld als Objekt übermittelt werden sollte ([#8057](https://github.com/nocobase/nocobase/pull/8057)) von @katherinehhh
  - Problem behoben, bei dem die Eingabetaste nicht verwendet werden konnte, um die Filteraktion auszulösen. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) von @gchust
- **[flow-engine]**

  - Problem behoben, bei dem Konfigurationsoptionen der vorherigen Komponente nach dem Wechseln der Feldkomponenten im Menü sichtbar blieben. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) von @gchust
  - useEffect vor die bedingte Rückgabe in FlowModelRenderer verschoben ([#8088](https://github.com/nocobase/nocobase/pull/8088)) von @zhangzhonghe
  - Problem behoben, bei dem nicht unterstützte Assoziationsfelder in Filteroperationsfeldern erschienen. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) von @gchust
- **[acl]** Behoben: acl.allow wurde zu früh ausgeführt ([#8065](https://github.com/nocobase/nocobase/pull/8065)) von @chenos
- **[Dateimanager]**

  - Falsche Anzeige von Unterdetaildaten in Listen- und Grid-Kartenblöcken behoben ([#8087](https://github.com/nocobase/nocobase/pull/8087)) von @katherinehhh
  - Problem behoben, bei dem Anhängefelder in readPretty-Untertabellen nicht korrekt angezeigt wurden ([#8073](https://github.com/nocobase/nocobase/pull/8073)) von @katherinehhh
- **[Workflow]**

  - Problem behoben, bei dem ein Fehler in der Ausführungs-Canvas ausgelöst wurde, wenn ein Knoten gelöscht wurde ([#8090](https://github.com/nocobase/nocobase/pull/8090)) von @mytharcher
  - Problem behoben, bei dem die Ausführungsseite einen Fehler ausgab, wenn Jobs auf einem Knoten undefiniert waren ([#8066](https://github.com/nocobase/nocobase/pull/8066)) von @mytharcher
- **[Sammlungsfeld: Formel]** Problem behoben, bei dem Formelfelder nicht zum Filterformularblock hinzugefügt werden konnten. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) von @gchust
- **[Block: Aktionspanel]** Stil im Listenlayout des Aktionspanel-Blocks optimiert ([#8084](https://github.com/nocobase/nocobase/pull/8084)) von @katherinehhh
- **[KI-Mitarbeiter]**

  - Problem behoben, bei dem der Datenquellen-Rollenname nicht kompiliert wurde ([#8076](https://github.com/nocobase/nocobase/pull/8076)) von @heziqiang
  - Problem behoben, bei dem einige Felder des aktuellen Datensatzes nicht in der Variablenauswahlkomponente angezeigt werden konnten. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) von @gchust
- **[Aktion: Datensätze importieren]** Importierte Felder stimmen nicht mit den in ACL-Einstellungen festgelegten Feldern überein ([#8075](https://github.com/nocobase/nocobase/pull/8075)) von @2013xile
- **[Zugriffskontrolle]** Middleware für Berechtigungsprüfungen bei Assoziationsoperationen für externe Datenquellen hinzugefügt ([#8062](https://github.com/nocobase/nocobase/pull/8062)) von @2013xile
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem keine Daten geladen wurden, wenn verwandte Genehmigungen mit ACL-Bereichsvariablen geladen wurden von @mytharcher
  - Problem behoben, bei dem ausgefüllte Daten im Formular des Bearbeiters verschwanden von @mytharcher
  - Problem behoben, bei dem ein Berechtigungsfehler ausgelöst wurde, wenn datensatzbezogene Genehmigungen im Detail-Drawer geladen wurden von @mytharcher
  - Problem behoben, bei dem der Prozess bei Verzweigung mit Reihenfolge und Gegenzeichnung falsch war von @mytharcher
  - Problem behoben, bei dem beim Auflisten von Genehmigungen ein OOM-Fehler auftrat von @mytharcher
  - Problem behoben, bei dem Genehmigungsaufzeichnungen nicht im Job-Ergebnis im Rückkehrzweig enthalten waren von @mytharcher
  - Problem behoben, bei dem das Genehmiger-Popup-Fenster keinen Titel anzeigte von @zhangzhonghe
  - Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn eine verwandte Genehmigung im Nur-Rollen-Modus geladen wurde von @mytharcher
- **[E-Mail-Manager]**

  - Behandlung abnormaler Daten von @jiannx
  - Synchronisierung des geplanten Gmail-Status nicht durchgeführt von @jiannx
