---
title: "NocoBase v2.0.0-alpha.65: Prozessebene Parallelitätssteuerung für den Basis-Task-Manager hinzugefügt"
description: "Versionshinweise zu v2.0.0-alpha.65"
---

### 🎉 Neue Funktionen

- **[Test]** Prozessebene Parallelitätssteuerung für den Basis-Task-Manager hinzugefügt ([#8343](https://github.com/nocobase/nocobase/pull/8343)) von @cgyrock

### 🚀 Verbesserungen

- **[Client]**
  - Rich-Text-Editor unterstützt Schriftgrößenanpassung, Bildgrößenanpassung und weiche Zeilenumbrüche ([#8401](https://github.com/nocobase/nocobase/pull/8401)) von @jiannx

  - Unterstützung zur Festlegung, wann ein Ereignisfluss ausgeführt werden soll. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) von @gchust

  - Verbesserte Rendering-Leistung der Plugin-Manager-Liste durch Umstellung auf natives Webkit-CSS für Textauslassungspunkte ([#8391](https://github.com/nocobase/nocobase/pull/8391)) von @mytharcher

- **[Evaluatoren]** Version von math.js aktualisiert, um weitere Funktionen zu unterstützen ([#8411](https://github.com/nocobase/nocobase/pull/8411)) von @mytharcher

- **[CLI]** Unterstützung für CDN-Basis-URL-Konfiguration über Umgebungsvariablen ([#8384](https://github.com/nocobase/nocobase/pull/8384)) von @chenos

- **[Flow-Engine]** `rowOrder` zu GridModel hinzugefügt, um eine konsistente Zeilenreihenfolge sicherzustellen ([#8371](https://github.com/nocobase/nocobase/pull/8371)) von @zhangzhonghe

- **[Flow-Engine]** Unterstützung zum Auflösen von Werten von Feldern im aktuellen Formulardatensatz, auch wenn diese nicht zum Bearbeitungsformular hinzugefügt wurden. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) von @gchust

- **[KI-Mitarbeiter]**
  - KI-Eingabe-Button optimiert ([#8414](https://github.com/nocobase/nocobase/pull/8414)) von @heziqiang

  - Ergebnis des Workflow-Aufrufers in `execution.output` geändert; durch explizite Verwendung des Ausgabeknotens kann das Ergebnis stabil sein ([#8423](https://github.com/nocobase/nocobase/pull/8423)) von @mytharcher

  - Builder-KI in der Eintragsliste ausgeblendet.<br/> LLM-Integrationsablauf optimiert.<br/> Dokumentation zu KI-Modell gemini-3 aktualisiert. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) von @heziqiang

  - Unterstützung für Anthropic und Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) von @heziqiang

- **[Benachrichtigung: In-App-Nachricht]** Leistungsproblem beim Senden von In-App-Nachrichten an eine große Anzahl von Benutzern behoben ([#8402](https://github.com/nocobase/nocobase/pull/8402)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem die Höhe des Shortcut-Modals die Viewport-Höhe überschritt ([#8437](https://github.com/nocobase/nocobase/pull/8437)) von @zhangzhonghe

  - Problem behoben, bei dem Verknüpfungsregeln für Tabellenzeilen-Buttons den Status von Buttons in Popup-Formularen beeinflussten ([#8434](https://github.com/nocobase/nocobase/pull/8434)) von @zhangzhonghe

  - Problem behoben, bei dem der Status der Tabellenaktionsspalte beim Seitenwechsel beeinträchtigt wurde. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) von @gchust

  - Fehlertoleranz für Aktionsschema hinzugefügt, um Seitenabstürze beim Klicken auf Aktions-Buttons zu vermeiden ([#8420](https://github.com/nocobase/nocobase/pull/8420)) von @mytharcher

  - Problem behoben, bei dem das Titelfeld nicht aktualisiert wurde, wenn das Assoziationsfeld im Erstellungsformular auf schreibgeschützt gesetzt war ([#8413](https://github.com/nocobase/nocobase/pull/8413)) von @katherinehhh

  - Zahlenkomponente zeigt keinen Wert an ([#8410](https://github.com/nocobase/nocobase/pull/8410)) von @chenos

  - Problem behoben, bei dem die Titelfeldeinstellung verschwand, nachdem eine Anhangs-URL festgelegt und dann im Formularelement zu einem anderen Feld gewechselt wurde ([#8418](https://github.com/nocobase/nocobase/pull/8418)) von @katherinehhh

  - Problem mit dem Senden-Button behoben, bei dem die Überspringen der Pflichtfeldvalidierung nicht funktionierte, wenn die Bestätigung aktiviert war ([#8400](https://github.com/nocobase/nocobase/pull/8400)) von @katherinehhh

  - Problem behoben, bei dem das Layouteinstellung im Grid-Kartenblock nicht wirksam wurde ([#8399](https://github.com/nocobase/nocobase/pull/8399)) von @katherinehhh

  - Problem behoben, bei dem Kaskadierungsauswahldaten nach erfolgreicher Übermittlung im Erstellungsformular nicht gelöscht wurden ([#8403](https://github.com/nocobase/nocobase/pull/8403)) von @katherinehhh

  - Problem behoben, bei dem die Zuweisung verhindert wurde, wenn chinesische Zeichen in ein Zahlenfeld eingegeben wurden ([#8397](https://github.com/nocobase/nocobase/pull/8397)) von @katherinehhh

  - Problem mit dem Senden-Button im Dateiauswahl-Popup von Eins-zu-Eins-Assoziationsfeldern behoben ([#8398](https://github.com/nocobase/nocobase/pull/8398)) von @katherinehhh

  - Logik für optionales targetKey verfeinert ([#8333](https://github.com/nocobase/nocobase/pull/8333)) von @katherinehhh

- **[Flow-Engine]** Problem behoben, bei dem die Schritte eines dynamischen Ereignisflusses zweimal ausgeführt wurden, wenn ein Popup durch einen Button-Klick geöffnet wurde. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) von @gchust

- **[Flow-Engine]** Problem behoben, bei dem die Variablenauflösung falsch war, wenn filterByTk ein Array war. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) von @gchust

- **[Dateimanager]** Problem behoben, bei dem die Datei-URL für in S3-Speicher hochgeladene Dateien falsch generiert wurde ([#8392](https://github.com/nocobase/nocobase/pull/8392)) von @mytharcher

- **[Sammlungsfeld: Viele-zu-Viele (Array)]** Fehler beim Anhängen von Viele-zu-Viele(Array)-Beziehungen der zweiten Ebene in Assoziationsabfragen behoben ([#8406](https://github.com/nocobase/nocobase/pull/8406)) von @cgyrock

- **[Workflow]**
  - Problem behoben, bei dem die Schema-ID in duplizierten Knoten nicht aktualisiert wurde ([#8396](https://github.com/nocobase/nocobase/pull/8396)) von @mytharcher

  - Instanz-ID zur Snowflake-ID von Jobs hinzugefügt, um ID-Konflikte im Cluster-Modus zu vermeiden ([#8382](https://github.com/nocobase/nocobase/pull/8382)) von @mytharcher

- **[Block: Vorlage (veraltet)]** Problem behoben, bei dem die Bearbeitungsseite für geerbte Vorlagen (v1) nicht aufgerufen werden konnte. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) von @gchust

- **[Datenquelle: REST-API]** Fehlertoleranz für Anforderungskontext hinzugefügt, um Fehler zu vermeiden, wenn die Methode nicht im Kontext ist von @mytharcher

- **[Multi-Space]**
  - Verwandter Space beim Hinzufügen assoziierter Daten von @jiannx

  - Space-Auswahlfarbe folgt dem Theme von @jiannx

- **[Vorlagendruck]**
  - Problem mit verdecktem Konfigurationsvorlagen-Popup behoben von @zhangzhonghe

  - Unterstützung für Space-Feld von @jiannx

  - Anzeige von Space-Feldern in Version 2.0 von @jiannx

- **[Dateispeicher: S3(Pro)]** Problem behoben, bei dem der Dateiumbenennungsmodus nicht funktionierte von @mytharcher

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem ein falscher Datensatz aufgrund falscher Parameter geladen wurde von @mytharcher

  - Problem behoben, bei dem der Werteblock aufgrund fehlender `ValueBlock.Result`-Komponente nicht angezeigt wurde von @mytharcher

- **[E-Mail-Manager]**
  - Gesprächskette behoben von @jiannx

  - Filter zur Verwaltungsseite hinzugefügt von @jiannx
