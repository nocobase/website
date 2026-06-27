---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Unterstützung des Trigger-Modus \"Vor dem Speichern von Daten\", Hinzufügen von Paginierungsunterstützung für Untertabellen und mehr."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.3](https://www.nocobase.com/en/blog/v1.9.3)

*Veröffentlichungsdatum: 2025-11-05*

### 🚀 Verbesserungen

- **[Datenbank]** Die Option `multipleStatements` zur MariaDB-Verbindungsinstanz hinzugefügt, um das Aufrufen mehrerer Anweisungen in einer einzelnen Abfrage zu unterstützen ([#7781](https://github.com/nocobase/nocobase/pull/7781)) von @mytharcher
- **[Workflow]** Unterstützung für Datenblöcke im Workflow, um das Menü für konsolidierte Detail-Einstellungen zu verwenden ([#7771](https://github.com/nocobase/nocobase/pull/7771)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Server]** Pub-Sub-Kanal nach App-Namen isolieren ([#7762](https://github.com/nocobase/nocobase/pull/7762)) von @mytharcher
- **[Client]** "Maximum call stack size exceeded" behoben ([#7780](https://github.com/nocobase/nocobase/pull/7780)) von @zhangzhonghe
- **[Datenbank]** Falsche Indexfeld-Erkennung, wenn Feldnamen im snake_case-Stil verwendet werden ([#7776](https://github.com/nocobase/nocobase/pull/7776)) von @2013xile
- **[Workflow]** Ein Problem behoben, bei dem der Workflow-Dispatcher im Cluster-Modus Leerlaufzustände nicht korrekt identifizierte, was zu unnötigem Queue-Event-Verbrauch führen konnte, bevor das Plugin bereit war ([#7768](https://github.com/nocobase/nocobase/pull/7768)) von @mytharcher
- **[Mobil (veraltet)]]** Problem behoben, bei dem im Popup für den Standardwert des Datumsfeldes auf Mobilgeräten kein Datum ausgewählt werden konnte ([#7783](https://github.com/nocobase/nocobase/pull/7783)) von @zhangzhonghe
- **[Workflow: Genehmigung]** Fehler behoben, der bei doppeltem Genehmigungs-Workflow auftrat von @mytharcher
- **[E-Mail-Manager]** Sammlung mailMessages um Indizes erweitert von @jiannx

### [v1.9.2](https://www.nocobase.com/en/blog/v1.9.2)

*Veröffentlichungsdatum: 2025-11-04*

### 🚀 Verbesserungen

- **[Workflow: Genehmigung]** Benachrichtigung für delegierte und hinzugefügte Bearbeiter hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Workflow]** Ein Problem behoben, bei dem im Service-Splitting-Modus die manuelle Ausführung eines Workflows, der einen Unterbrechungsknoten enthielt, im Status "Ausstehend" hängen blieb ([#7767](https://github.com/nocobase/nocobase/pull/7767)) von @mytharcher
- **[E-Mail-Manager]** Migration für Indizes hinzugefügt von @jiannx

### [v1.9.1](https://www.nocobase.com/en/blog/v1.9.1)

*Veröffentlichungsdatum: 2025-11-04*

### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]** Das Erstellen von Genehmigungsknoten in parallelen Zweigen wird nicht mehr unterstützt, um Probleme durch den Prozessstatus zu vermeiden von @mytharcher
- **[E-Mail-Manager]** Synchronisationsprotokolle hinzugefügt von @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.16](https://www.nocobase.com/en/blog/v1.9.0-beta.16)

*Veröffentlichungsdatum: 2025-11-03*

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützung des Auslösemodus "Vor dem Speichern von Daten" von @mytharcher

### 🚀 Verbesserungen

- **[Server]** Gateway-Protokoll hinzugefügt ([#7683](https://github.com/nocobase/nocobase/pull/7683)) von @2013xile
- **[Workflow: Benachrichtigungsknoten]** Option `ignoreFail` für Benachrichtigungsknoten hinzugefügt, die es erlaubt, den Workflow fortzusetzen, wenn das Senden der Benachrichtigung fehlschlägt ([#7736](https://github.com/nocobase/nocobase/pull/7736)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Konfiguration der QR-Code-Scan-Verknüpfungsregel im Aktionspanel behoben ([#7693](https://github.com/nocobase/nocobase/pull/7693)) von @katherinehhh
  - Fehler der Iframe-Block-Verknüpfungsregel innerhalb eines Modals behoben ([#7694](https://github.com/nocobase/nocobase/pull/7694)) von @katherinehhh
- **[Datenbank]** Synchronisierung von Standardwerten für MySQL JSON-Spalten übersprungen ([#7696](https://github.com/nocobase/nocobase/pull/7696)) von @2013xile
- **[Workflow]**

  - Problem behoben, bei dem im Service-Splitting-Modus eine unsachgemäße Behandlung der ausstehenden In-Memory-Warteschlange dazu führte, dass einige Workflows nicht ausgeführt wurden ([#7692](https://github.com/nocobase/nocobase/pull/7692)) von @mytharcher
  - Wert des Ausführungsstatus bei Erstellung mit `deferred` behoben ([#7721](https://github.com/nocobase/nocobase/pull/7721)) von @mytharcher
  - Problem behoben, bei dem nach dem Löschen eines Knotens, der eine Verzweigung startet, der Schlüssel des ersten innerhalb der Verzweigung verbleibenden Knotens fälschlicherweise auf einen neuen Wert geändert wurde ([#7665](https://github.com/nocobase/nocobase/pull/7665)) von @mytharcher
- **[Zugriffskontrolle]** Reihenfolge der Middlewares von `resourceManager` behoben ([#7728](https://github.com/nocobase/nocobase/pull/7728)) von @2013xile
- **[Dateimanager]** Problem behoben, dass `.msg`-Dateien nicht korrekt hochgeladen werden konnten ([#7662](https://github.com/nocobase/nocobase/pull/7662)) von @mytharcher
- **[Workflow: Manueller Knoten]** Problem behoben, bei dem manuelle Aufgaben nach Deaktivierung des Workflows verschwanden ([#7687](https://github.com/nocobase/nocobase/pull/7687)) von @mytharcher
- **[Sammlungsfeld: Verwaltungsgliederung Chinas]** Datenimport schlägt fehl, wenn Stadt und Gebiet denselben Namen haben ([#7673](https://github.com/nocobase/nocobase/pull/7673)) von @2013xile
- **[Workflow: Genehmigung]**

  - Übersetzungsproblem des Statustextes in Genehmigungsabschlussbenachrichtigungen behoben, wobei die Standardsprache des Systems für die Übersetzung verwendet wird, wenn der Benutzer keine Spracheinstellung vorgenommen hat von @mytharcher
  - Locales behoben von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.34](https://www.nocobase.com/en/blog/v2.0.0-alpha.34)

*Veröffentlichungsdatum: 2025-11-05*

### 🚀 Verbesserungen

- **[Datenbank]** Die Option `multipleStatements` zur MariaDB-Verbindungsinstanz hinzugefügt, um das Aufrufen mehrerer Anweisungen in einer einzelnen Abfrage zu unterstützen ([#7781](https://github.com/nocobase/nocobase/pull/7781)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Problem behoben, bei dem die Aktionsschaltflächen im Tabellenblock nach dem Seitenwechsel nicht korrekt aktualisiert wurden, um sicherzustellen, dass ihre Funktionalität mit den Daten der aktuellen Seite übereinstimmt. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) von @gchust
- **[Client]**

  - "Maximum call stack size exceeded" behoben ([#7780](https://github.com/nocobase/nocobase/pull/7780)) von @zhangzhonghe
  - Textverkürzung des Titelfeldes bei Assoziationsfeldern nicht angewendet behoben ([#7778](https://github.com/nocobase/nocobase/pull/7778)) von @katherinehhh
  - Verknüpfungsregel der Aktualisierungsdatensatz-Aktion funktioniert nicht ([#7774](https://github.com/nocobase/nocobase/pull/7774)) von @gchust
- **[Datenbank]** Falsche Indexfeld-Erkennung, wenn Feldnamen im snake_case-Stil verwendet werden ([#7776](https://github.com/nocobase/nocobase/pull/7776)) von @2013xile
- **[Mobil (veraltet)]]** Problem behoben, bei dem im Popup für den Standardwert des Datumsfeldes auf Mobilgeräten kein Datum ausgewählt werden konnte ([#7783](https://github.com/nocobase/nocobase/pull/7783)) von @zhangzhonghe

### [v2.0.0-alpha.33](https://www.nocobase.com/en/blog/v2.0.0-alpha.33)

*Veröffentlichungsdatum: 2025-11-05*

### 🎉 Neue Funktionen

- **[Client]** Seitenumbruch-Unterstützung für Untertabellen hinzugefügt ([#7754](https://github.com/nocobase/nocobase/pull/7754)) von @katherinehhh

### 🚀 Verbesserungen

- **[undefined]** Englische Dokumentation des Diagramm-Plugins aktualisiert ([#7748](https://github.com/nocobase/nocobase/pull/7748)) von @heziqiang
- **[Telemetrie]** Telemetrie-Metriken für die Anzahl der Online-Sub-Applikationen usw. hinzugefügt ([#7743](https://github.com/nocobase/nocobase/pull/7743)) von @2013xile
- **[Workflow]** Unterstützung für Datenblöcke im Workflow, um das Menü für konsolidierte Detail-Einstellungen zu verwenden ([#7771](https://github.com/nocobase/nocobase/pull/7771)) von @mytharcher
- **[Multi-App-Manager (veraltet)]]** Asynchroner Start für Sub-Applikationen mittels einer Warteschlange aktiviert ([#7749](https://github.com/nocobase/nocobase/pull/7749)) von @2013xile
- **[Datenvisualisierung]** Optionen für das Zeitformat von Diagrammdaten hinzugefügt ([#7763](https://github.com/nocobase/nocobase/pull/7763)) von @heziqiang
- **[Workflow: Genehmigung]** Benachrichtigung für delegierte und hinzugefügte Bearbeiter hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem die Bezeichnungen von Enum-Typen in variablenbezogenen Komponenten nicht in der korrekten Sprache angezeigt wurden. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) von @gchust
  - Fehlender Indikator für Pflichtfelder nach dem Setzen der Frontend-Validierung behoben ([#7760](https://github.com/nocobase/nocobase/pull/7760)) von @katherinehhh
  - Problem beim Löschen eines Datums ohne Zeitzone im Bearbeitungsformular behoben ([#7759](https://github.com/nocobase/nocobase/pull/7759)) von @katherinehhh
  - Validierung von Pflichtfeldern für Verknüpfungsregeln behoben ([#7756](https://github.com/nocobase/nocobase/pull/7756)) von @zhangzhonghe
  - "Invalid Date"-Problem beim Löschen eines bestimmten Datums im Filter behoben ([#7746](https://github.com/nocobase/nocobase/pull/7746)) von @katherinehhh
  - Fehlgeschlagene Pflichtvalidierung für das Markdown Vditor-Feld behoben ([#7764](https://github.com/nocobase/nocobase/pull/7764)) von @katherinehhh
  - Datenbereichskonfiguration für Beziehungsfelder in Filterformularen hinzugefügt ([#7761](https://github.com/nocobase/nocobase/pull/7761)) von @zhangzhonghe
  - Zeitformatproblem in Untertabellenfeldern behoben ([#7750](https://github.com/nocobase/nocobase/pull/7750)) von @katherinehhh
- **[Flow-Engine]**

  - Wenn der Feld-Filterwert auf `false` gesetzt ist, ist die Anfrage mit Datenbereich falsch ([#7766](https://github.com/nocobase/nocobase/pull/7766)) von @gchust
  - Assoziationsfeldwert der aktuellen Objektvariablen im Unterformular kann nicht aufgelöst werden ([#7751](https://github.com/nocobase/nocobase/pull/7751)) von @gchust
  - Problem mit Seitenanforderungsparametern nach dem Löschen von Daten auf der letzten Seite behoben ([#7755](https://github.com/nocobase/nocobase/pull/7755)) von @katherinehhh
- **[Server]** Pub-Sub-Kanal nach App-Namen isolieren ([#7762](https://github.com/nocobase/nocobase/pull/7762)) von @mytharcher
- **[Block: GridCard]** Problem mit Datenverdopplung zwischen Listen- und GridCard-Block behoben ([#7773](https://github.com/nocobase/nocobase/pull/7773)) von @katherinehhh
- **[Multi-App-Manager (veraltet)]]** Falsche Sammlung für die Metrik des Sub-Applikationsstatus ([#7772](https://github.com/nocobase/nocobase/pull/7772)) von @2013xile
- **[Workflow]**

  - Ein Problem behoben, bei dem der Workflow-Dispatcher im Cluster-Modus Leerlaufzustände nicht korrekt identifizierte, was zu unnötigem Queue-Event-Verbrauch führen konnte, bevor das Plugin bereit war ([#7768](https://github.com/nocobase/nocobase/pull/7768)) von @mytharcher
  - Ein Problem behoben, bei dem im Service-Splitting-Modus die manuelle Ausführung eines Workflows, der einen Unterbrechungsknoten enthielt, im Status "Ausstehend" hängen blieb ([#7767](https://github.com/nocobase/nocobase/pull/7767)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Fehler behoben, der bei doppeltem Genehmigungs-Workflow auftrat von @mytharcher
  - Das Erstellen von Genehmigungsknoten in parallelen Zweigen wird nicht mehr unterstützt, um Probleme durch den Prozessstatus zu vermeiden von @mytharcher
- **[E-Mail-Manager]**

  - Synchronisationsprotokolle hinzugefügt von @jiannx
  - Migration für Indizes hinzugefügt von @jiannx

### [v2.0.0-alpha.31](https://www.nocobase.com/en/blog/v2.0.0-alpha.31)

*Veröffentlichungsdatum: 2025-11-03*

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützung des Auslösemodus "Vor dem Speichern von Daten" von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Felder der aktuellen Formularvariablen können nicht geladen werden ([#7745](https://github.com/nocobase/nocobase/pull/7745)) von @gchust
- **[Workflow: Genehmigung]** Locales behoben von @mytharcher

### [v2.0.0-alpha.30](https://www.nocobase.com/en/blog/v2.0.0-alpha.30)

*Veröffentlichungsdatum: 2025-11-02*

### 🚀 Verbesserungen

- **[Workflow: Benachrichtigungsknoten]** Option `ignoreFail` für Benachrichtigungsknoten hinzugefügt, die es erlaubt, den Workflow fortzusetzen, wenn das Senden der Benachrichtigung fehlschlägt ([#7736](https://github.com/nocobase/nocobase/pull/7736)) von @mytharcher

### [v2.0.0-alpha.29](https://www.nocobase.com/en/blog/v2.0.0-alpha.29)

*Veröffentlichungsdatum: 2025-11-02*

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem die Assoziationsfeldvariable im aktuellen Formular nicht korrekt identifiziert werden konnte, um eine genaue Datenverarbeitung in Formularen zu gewährleisten. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) von @gchust
  - Problem behoben, bei dem die Zuweisung eines Arrays als Wert oder Standardwert an ein "toOne"-Feld zu einem Fehler führte. Dies gewährleistet eine ordnungsgemäße Handhabung der Ergebnisse der Variablenauflösung und verbessert die Systemstabilität und -genauigkeit. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) von @gchust
- **[Zugriffskontrolle]** Reihenfolge der Middlewares von `resourceManager` behoben ([#7728](https://github.com/nocobase/nocobase/pull/7728)) von @2013xile

### [v2.0.0-alpha.28](https://www.nocobase.com/en/blog/v2.0.0-alpha.28)

*Veröffentlichungsdatum: 2025-11-01*

### 🚀 Verbesserungen

- **[Flow-Engine]** Verbesserte Fehlermeldung beim fehlgeschlagenen Kopieren der UID, die klarere Anweisungen zur Behebung des Problems bietet. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) von @gchust

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Schritte des Ereignisflusses sollten nicht in Konfigurationsmenüs angezeigt werden ([#7723](https://github.com/nocobase/nocobase/pull/7723)) von @gchust
- **[Client]** Problem behoben, bei dem nicht filterbare Felder fälschlicherweise in den Filteroptionen aufgeführt wurden, um sicherzustellen, dass nur anwendbare Felder zur Auswahl erscheinen. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) von @gchust
- **[Workflow]** Wert des Ausführungsstatus bei Erstellung mit `deferred` behoben ([#7721](https://github.com/nocobase/nocobase/pull/7721)) von @mytharcher
- **[KI-Mitarbeiter]** Optimiertes Websuchverhalten und Benutzerhinweise für Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) von @cgyrock
- **[Aktion: Datensätze exportieren]** Problem mit der Anzeige der Liste exportierbarer Felder in der Exportaktion behoben ([#7714](https://github.com/nocobase/nocobase/pull/7714)) von @katherinehhh
- **[Aktion: Datensätze importieren]** Problem mit der Anzeige der Feldliste in importierbaren Feldern behoben ([#7710](https://github.com/nocobase/nocobase/pull/7710)) von @katherinehhh
- **[Aktion: Datensätze importieren Pro]** Problem mit der Anzeige der Feldliste in importierbaren Feldern behoben von @katherinehhh

### [v2.0.0-alpha.27](https://www.nocobase.com/en/blog/v2.0.0-alpha.27)

*Veröffentlichungsdatum: 2025-10-31*

### 🎉 Neue Funktionen

- **[Client]** Ereignisfluss: Neue vordefinierte Aktionen eingeführt, um die Anpassungsoptionen für die Ereignisbehandlung zu erweitern, sodass Benutzer Arbeitsabläufe optimieren und die Effizienz steigern können ([#7672](https://github.com/nocobase/nocobase/pull/7672)) von @zhangzhonghe

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]** Interaktionslogik des KI-Mitarbeiters verbessert und Aufgabenkonfigurationsablauf optimiert ([#7707](https://github.com/nocobase/nocobase/pull/7707)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]** UI-Problem beim Löschen eines Assoziationsfeldes in der Sammlung behoben ([#7706](https://github.com/nocobase/nocobase/pull/7706)) von @katherinehhh

### [v2.0.0-alpha.26](https://www.nocobase.com/en/blog/v2.0.0-alpha.26)

*Veröffentlichungsdatum: 2025-10-30*

### 🚀 Verbesserungen

- **[undefined]** Diagramm-Übersichtsdokument aktualisiert ([#7702](https://github.com/nocobase/nocobase/pull/7702)) von @heziqiang
- **[Client]** Unterstützung für JSX im JS-Code-Editor ([#7699](https://github.com/nocobase/nocobase/pull/7699)) von @gchust
- **[KI-Mitarbeiter]** KI-Mitarbeiter kann basierend auf Tabellenblock-Metadaten selbstständig Daten abfragen ([#7703](https://github.com/nocobase/nocobase/pull/7703)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**

  - Fehler der Iframe-Block-Verknüpfungsregel innerhalb eines Modals behoben ([#7694](https://github.com/nocobase/nocobase/pull/7694)) von @katherinehhh
  - Konfiguration der QR-Code-Scan-Verknüpfungsregel im Aktionspanel behoben ([#7693](https://github.com/nocobase/nocobase/pull/7693)) von @katherinehhh
- **[Datenbank]** Synchronisierung von Standardwerten für MySQL JSON-Spalten übersprungen ([#7696](https://github.com/nocobase/nocobase/pull/7696)) von @2013xile
- **[Workflow]** Problem behoben, bei dem im Service-Splitting-Modus eine unsachgemäße Behandlung der ausstehenden In-Memory-Warteschlange dazu führte, dass einige Workflows nicht ausgeführt wurden ([#7692](https://github.com/nocobase/nocobase/pull/7692)) von @mytharcher
