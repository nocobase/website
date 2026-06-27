---
title: "Wöchentliche Updates: Hinzufügen von prozessebenen Parallelitätskontrollen zum Basis-Task-Manager"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 15. Januar bis 22. Januar 2026."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit in drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig ausprobieren und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein. Hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.39](https://www.nocobase.com/en/blog/v1.9.39)

*Veröffentlichungsdatum: 21.01.2026*

### 🐛 Fehlerbehebungen

- **[Server]** Version von `mathjs` in den gemeinsamen Abhängigkeiten korrigiert ([#8475](https://github.com/nocobase/nocobase/pull/8475)) von @mytharcher
- **[Client]** Problem behoben, bei dem das Konfigurationsmenü in Chrome 144 nicht angezeigt wurde ([#8470](https://github.com/nocobase/nocobase/pull/8470)) von @zhangzhonghe
- **[Async-Aufgabenmanager]** Problem behoben, bei dem ein durch asynchronen Import ausgelöster Workflow verzögert ausgeführt wurde ([#8478](https://github.com/nocobase/nocobase/pull/8478)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Problem behoben, bei dem ein durch asynchronen Import ausgelöster Workflow verzögert ausgeführt wurde von @mytharcher

### [v1.9.38](https://www.nocobase.com/en/blog/v1.9.38)

*Veröffentlichungsdatum: 20.01.2026*

### 🚀 Verbesserungen

- **[Server]** Unterstützung für die Konfiguration einer CORS-Origin-Whitelist hinzugefügt ([#8454](https://github.com/nocobase/nocobase/pull/8454)) von @2013xile
- **[Fehlerbehandler]** SQL-Referenzfehler bereinigt ([#8464](https://github.com/nocobase/nocobase/pull/8464)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem die Sortiereinstellungen für Sammlungsfeldgruppen nicht wirkten. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) von @katherinehhh
  - Problem beim Bearbeiten einer Sammlung in der grafischen Oberfläche behoben ([#8451](https://github.com/nocobase/nocobase/pull/8451)) von @katherinehhh
  - Problem behoben, bei dem der Button "Spalteneinstellungen" in der Tabelle nicht funktionierte ([#8441](https://github.com/nocobase/nocobase/pull/8441)) von @zhangzhonghe
  - Problem behoben, bei dem Verknüpfungsregeln für Tabellenzeilen-Buttons den Status von Buttons in Popup-Formularen beeinflussten ([#8434](https://github.com/nocobase/nocobase/pull/8434)) von @zhangzhonghe
- **[Mobil (veraltet)]** Veraltetes Mobil-Plugin (ersetzt durch das ui-layout-Plugin ab Version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) von @chenos

### [v1.9.37](https://www.nocobase.com/en/blog/v1.9.37)

*Veröffentlichungsdatum: 15.01.2026*

### 🚀 Verbesserungen

- **[Evaluatoren]** Version von math.js aktualisiert, um weitere Funktionen zu unterstützen ([#8411](https://github.com/nocobase/nocobase/pull/8411)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** Leistungsproblem beim Senden von In-App-Nachrichten an eine große Anzahl von Benutzern behoben ([#8402](https://github.com/nocobase/nocobase/pull/8402)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem Kaskadendaten nach erfolgreicher Übermittlung im Erstellungsformular nicht gelöscht wurden ([#8403](https://github.com/nocobase/nocobase/pull/8403)) von @katherinehhh
  - Fehlertoleranz für Aktionsschemata hinzugefügt, um Seitenabstürze beim Klicken auf Aktions-Buttons zu vermeiden ([#8420](https://github.com/nocobase/nocobase/pull/8420)) von @mytharcher
  - Problem mit dem Senden-Button behoben, bei dem die Überspringung der erforderlichen Validierung nicht funktionierte, wenn die Bestätigung aktiviert war ([#8400](https://github.com/nocobase/nocobase/pull/8400)) von @katherinehhh
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Fehler beim Anhängen von zweistufigen Viele-zu-viele(Array)-Beziehungen in Assoziationsabfragen behoben ([#8406](https://github.com/nocobase/nocobase/pull/8406)) von @cgyrock
- **[Workflow]** Problem behoben, bei dem die Schema-ID in einem duplizierten Knoten nicht aktualisiert wurde ([#8396](https://github.com/nocobase/nocobase/pull/8396)) von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.13](https://www.nocobase.com/en/blog/v2.0.0-beta.13)

*Veröffentlichungsdatum: 19.01.2026*

### 🚀 Verbesserungen

- **[Server]** Unterstützung für die Konfiguration einer CORS-Origin-Whitelist hinzugefügt ([#8454](https://github.com/nocobase/nocobase/pull/8454)) von @2013xile
- **[Aktion: Datensätze exportieren]** Datenbereich der Exportaktion basierend auf ausgewählten Datensätzen oder Ressourcenfiltern verbessert ([#8442](https://github.com/nocobase/nocobase/pull/8442)) von @katherinehhh
- **[Aktion: Datensätze exportieren Pro]** Datenbereich der Exportaktion basierend auf ausgewählten Datensätzen oder Ressourcenfiltern verbessert von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem das Popup "Benutzerdefinierte Variablen" verdeckt wurde ([#8463](https://github.com/nocobase/nocobase/pull/8463)) von @zhangzhonghe
  - Problem beim Bearbeiten einer Sammlung in der grafischen Oberfläche behoben ([#8451](https://github.com/nocobase/nocobase/pull/8451)) von @katherinehhh
  - Problem behoben, bei dem die Sortiereinstellungen für Sammlungsfeldgruppen nicht wirkten. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) von @katherinehhh
  - Problem behoben, bei dem die Höhe des Verknüpfungsmodals die Viewport-Höhe überschritt ([#8437](https://github.com/nocobase/nocobase/pull/8437)) von @zhangzhonghe
  - Problem behoben, bei dem Verknüpfungsregeln für Tabellenzeilen-Buttons den Status von Buttons in Popup-Formularen beeinflussten ([#8434](https://github.com/nocobase/nocobase/pull/8434)) von @zhangzhonghe
  - Problem behoben, bei dem der Status der Tabellenaktionsspalte beim Seitenwechsel beeinträchtigt wurde. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) von @gchust
  - Problem behoben, bei dem der Button "Spalteneinstellungen" in der Tabelle nicht funktionierte ([#8441](https://github.com/nocobase/nocobase/pull/8441)) von @zhangzhonghe
  - Problem behoben, bei dem das Auswahl-Popup des Dateiverknüpfungsfeldes einen falschen Z-Index hatte und die Popup-Konfiguration nicht korrekt gespeichert werden konnte. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) von @gchust
- **[Flow-Engine]**
  - Problem behoben, bei dem Variablen in RunJS-Codeparametern vor der Ausführung aufgelöst wurden. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) von @gchust
  - Problem behoben, bei dem Popup-Variablen im Schnellerstellungs-Popup des Datenauswahlfeldes nicht ausgewählt werden konnten. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) von @gchust
  - Problem behoben, bei dem durch wiederholtes Klicken auf das Konfigurationsmenü mehrere Konfigurations-Popups geöffnet werden konnten. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) von @gchust
- **[Mobil (veraltet)]** Veraltetes Mobil-Plugin (ersetzt durch das ui-layout-Plugin ab Version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) von @chenos
- **[Flow-Engine]** Problem behoben, bei dem Variablen mit Bindestrichen nicht korrekt analysiert werden konnten. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) von @gchust
- **[E-Mail-Manager]** Problem behoben, bei dem das E-Mail-Konfigurations-Popup verdeckt wurde von @zhangzhonghe

### [v2.0.0-beta.12](https://www.nocobase.com/en/blog/v2.0.0-beta.12)

*Veröffentlichungsdatum: 16.01.2026*

### 🚀 Verbesserungen

- **[Flow-Engine]** Unterstützung für die Auflösung von Werten von Feldern im aktuellen Formulardatensatz, auch wenn diese nicht zum Bearbeitungsformular hinzugefügt wurden. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) von @gchust

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Problem behoben, bei dem die Schritte eines dynamischen Ereignisflusses zweimal ausgeführt wurden, wenn ein Popup durch einen Button-Klick geöffnet wurde. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) von @gchust
- **[Vorlagendruck]** Leerzeichenfelder in Version 2.0 anzeigen von @jiannx

### [v2.0.0-beta.11](https://www.nocobase.com/en/blog/v2.0.0-beta.11)

*Veröffentlichungsdatum: 15.01.2026*

### 🚀 Verbesserungen

- **[Evaluatoren]** Version von math.js aktualisiert, um weitere Funktionen zu unterstützen ([#8411](https://github.com/nocobase/nocobase/pull/8411)) von @mytharcher
- **[Client]** Rich-Text-Editor unterstützt Schriftgrößenanpassung, Bildgrößenanpassung und weiche Zeilenumbrüche ([#8401](https://github.com/nocobase/nocobase/pull/8401)) von @jiannx
- **[KI-Mitarbeiter]** Ergebnis des Workflow-Aufrufers in `execution.output` geändert. Durch die explizite Verwendung des Ausgabeknotens kann das Ergebnis stabil sein ([#8423](https://github.com/nocobase/nocobase/pull/8423)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehlertoleranz für Aktionsschemata hinzugefügt, um Seitenabstürze beim Klicken auf Aktions-Buttons zu vermeiden ([#8420](https://github.com/nocobase/nocobase/pull/8420)) von @mytharcher
  - Problem behoben, bei dem die Titelfeldeinstellung verschwand, nachdem eine Anhangs-URL festgelegt und dann zu einem anderen Feld im Formularelement gewechselt wurde ([#8418](https://github.com/nocobase/nocobase/pull/8418)) von @katherinehhh
  - Problem behoben, bei dem das Titelfeld nicht aktualisiert wurde, wenn das Verknüpfungsfeld im Erstellungsformular auf schreibgeschützt gesetzt war ([#8413](https://github.com/nocobase/nocobase/pull/8413)) von @katherinehhh
- **[Flow-Engine]** Problem behoben, bei dem die Variablenauflösung falsch war, wenn filterByTk ein Array war. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) von @gchust
- **[Vorlagendruck]** Leerzeichenfeld unterstützen von @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.66](https://www.nocobase.com/en/blog/v2.0.0-alpha.66)

*Veröffentlichungsdatum: 16.01.2026*

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Problem behoben, bei dem Variablen mit Bindestrichen nicht korrekt analysiert werden konnten. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) von @gchust

### [v2.0.0-alpha.65](https://www.nocobase.com/en/blog/v2.0.0-alpha.65)

*Veröffentlichungsdatum: 16.01.2026*

### 🎉 Neue Funktionen

- **[Test]** Prozessebenen-Parallelitätssteuerung für den Basisaufgabenmanager hinzugefügt ([#8343](https://github.com/nocobase/nocobase/pull/8343)) von @cgyrock

### 🚀 Verbesserungen

- **[Client]**
  - Rich-Text-Editor unterstützt Schriftgrößenanpassung, Bildgrößenanpassung und weiche Zeilenumbrüche ([#8401](https://github.com/nocobase/nocobase/pull/8401)) von @jiannx
  - Unterstützung für die Angabe, wann ein Ereignisfluss ausgeführt werden soll. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) von @gchust
  - Rendering-Leistung der Plugin-Manager-Liste verbessert, indem auf natives Webkit-CSS für Textauslassungspunkte umgestellt wurde ([#8391](https://github.com/nocobase/nocobase/pull/8391)) von @mytharcher
- **[Evaluatoren]** Version von math.js aktualisiert, um weitere Funktionen zu unterstützen ([#8411](https://github.com/nocobase/nocobase/pull/8411)) von @mytharcher
- **[CLI]** Unterstützung für CDN-Basis-URL-Konfiguration über Umgebungsvariablen ([#8384](https://github.com/nocobase/nocobase/pull/8384)) von @chenos
- **[Flow-Engine]** `rowOrder` zu GridModel hinzugefügt, um eine konsistente Zeilenreihenfolge sicherzustellen ([#8371](https://github.com/nocobase/nocobase/pull/8371)) von @zhangzhonghe
- **[Flow-Engine]** Unterstützung für die Auflösung von Werten von Feldern im aktuellen Formulardatensatz, auch wenn diese nicht zum Bearbeitungsformular hinzugefügt wurden. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) von @gchust
- **[KI-Mitarbeiter]**
  - KI-Eingabe-Button optimiert ([#8414](https://github.com/nocobase/nocobase/pull/8414)) von @heziqiang
  - Ergebnis des Workflow-Aufrufers in `execution.output` geändert. Durch die explizite Verwendung des Ausgabeknotens kann das Ergebnis stabil sein ([#8423](https://github.com/nocobase/nocobase/pull/8423)) von @mytharcher
  - Builder-KI in der Eintragsliste ausblenden.<br/>LLM-Integrationsablauf optimieren.<br/>Dokumentation zum KI-Modell Gemini-3 aktualisieren. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) von @heziqiang
  - Unterstützung für Anthropic und Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) von @heziqiang
- **[Benachrichtigung: In-App-Nachricht]** Leistungsproblem beim Senden von In-App-Nachrichten an eine große Anzahl von Benutzern behoben ([#8402](https://github.com/nocobase/nocobase/pull/8402)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem die Höhe des Verknüpfungsmodals die Viewport-Höhe überschritt ([#8437](https://github.com/nocobase/nocobase/pull/8437)) von @zhangzhonghe
  - Problem behoben, bei dem Verknüpfungsregeln für Tabellenzeilen-Buttons den Status von Buttons in Popup-Formularen beeinflussten ([#8434](https://github.com/nocobase/nocobase/pull/8434)) von @zhangzhonghe
  - Problem behoben, bei dem der Status der Tabellenaktionsspalte beim Seitenwechsel beeinträchtigt wurde. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) von @gchust
  - Fehlertoleranz für Aktionsschemata hinzugefügt, um Seitenabstürze beim Klicken auf Aktions-Buttons zu vermeiden ([#8420](https://github.com/nocobase/nocobase/pull/8420)) von @mytharcher
  - Problem behoben, bei dem das Titelfeld nicht aktualisiert wurde, wenn das Verknüpfungsfeld im Erstellungsformular auf schreibgeschützt gesetzt war ([#8413](https://github.com/nocobase/nocobase/pull/8413)) von @katherinehhh
  - Zahlenkomponente zeigt keinen Wert an ([#8410](https://github.com/nocobase/nocobase/pull/8410)) von @chenos
  - Problem behoben, bei dem die Titelfeldeinstellung verschwand, nachdem eine Anhangs-URL festgelegt und dann zu einem anderen Feld im Formularelement gewechselt wurde ([#8418](https://github.com/nocobase/nocobase/pull/8418)) von @katherinehhh
  - Problem mit dem Senden-Button behoben, bei dem die Überspringung der erforderlichen Validierung nicht funktionierte, wenn die Bestätigung aktiviert war ([#8400](https://github.com/nocobase/nocobase/pull/8400)) von @katherinehhh
  - Problem behoben, bei dem die Layouteinstellung im Rasterkartenblock nicht wirkte ([#8399](https://github.com/nocobase/nocobase/pull/8399)) von @katherinehhh
  - Problem behoben, bei dem Kaskadendaten nach erfolgreicher Übermittlung im Erstellungsformular nicht gelöscht wurden ([#8403](https://github.com/nocobase/nocobase/pull/8403)) von @katherinehhh
  - Zuweisung verhindern, wenn chinesische Zeichen in ein Zahlenfeld eingegeben werden ([#8397](https://github.com/nocobase/nocobase/pull/8397)) von @katherinehhh
  - Problem behoben, bei dem der Senden-Button im Dateiauswahl-Popup des Eins-zu-eins-Verknüpfungsfeldes erschien ([#8398](https://github.com/nocobase/nocobase/pull/8398)) von @katherinehhh
  - Logik für optionales targetKey verfeinert ([#8333](https://github.com/nocobase/nocobase/pull/8333)) von @katherinehhh
- **[Flow-Engine]** Problem behoben, bei dem die Schritte eines dynamischen Ereignisflusses zweimal ausgeführt wurden, wenn ein Popup durch einen Button-Klick geöffnet wurde. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) von @gchust
- **[Flow-Engine]** Problem behoben, bei dem die Variablenauflösung falsch war, wenn filterByTk ein Array war. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) von @gchust
- **[Dateimanager]** Problem behoben, bei dem die Datei-URL für in den S3-Speicher hochgeladene Dateien falsch generiert wurde ([#8392](https://github.com/nocobase/nocobase/pull/8392)) von @mytharcher
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Fehler beim Anhängen von zweistufigen Viele-zu-viele(Array)-Beziehungen in Assoziationsabfragen behoben ([#8406](https://github.com/nocobase/nocobase/pull/8406)) von @cgyrock
- **[Workflow]**
  - Problem behoben, bei dem die Schema-ID in einem duplizierten Knoten nicht aktualisiert wurde ([#8396](https://github.com/nocobase/nocobase/pull/8396)) von @mytharcher
  - Instanz-ID zur Snowflake-ID von Jobs hinzugefügt, um ID-Konfliktprobleme im Cluster-Modus zu vermeiden ([#8382](https://github.com/nocobase/nocobase/pull/8382)) von @mytharcher
- **[Block: Vorlage (veraltet)]** Problem behoben, bei dem die Bearbeitungsseite für geerbte Vorlagen (v1) nicht aufgerufen werden konnte. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) von @gchust
- **[Datenquelle: REST-API]** Fehlertoleranz für den Anforderungskontext hinzugefügt, um Fehler zu vermeiden, wenn die Methode nicht im Kontext ist von @mytharcher
- **[Multi-Space]**
  - Verwandter Space beim Hinzufügen verknüpfter Daten von @jiannx
  - Space-Auswahlfarbe folgt dem Theme von @jiannx
- **[Vorlagendruck]**
  - Problem mit verdecktem Konfigurationsvorlagen-Popup behoben von @zhangzhonghe
  - Leerzeichenfeld unterstützen von @jiannx
  - Leerzeichenfelder in Version 2.0 anzeigen von @jiannx
- **[Dateispeicher: S3(Pro)]** Problem behoben, bei dem der Dateiumbenennungsmodus nicht funktionierte von @mytharcher
- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem aufgrund falscher Parameter der falsche Datensatz geladen wurde von @mytharcher
  - Problem behoben, bei dem der Werteblock aufgrund der fehlenden `ValueBlock.Result`-Komponente nicht angezeigt wurde von @mytharcher
- **[E-Mail-Manager]**
  - Gesprächskette behoben von @jiannx
  - Filterung zur Verwaltungsseite hinzugefügt von @jiannx
