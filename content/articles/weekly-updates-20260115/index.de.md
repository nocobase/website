---
title: "NocoBase wöchentliche Updates: Unterstützung für Gemini-3-Modell"
description: "Das dieswöchige Update umfasst: Unterstützung für das Gemini-3-Modell mit Funktionsaufruf-Gedankensignatur und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit in drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.36](https://www.nocobase.com/en/blog/v1.9.36)

*Veröffentlichungsdatum: 2026-01-10*

### 🚀 Verbesserungen

- **[client]** Verbesserte Rendering-Leistung der Plugin-Manager-Liste durch Umstellung auf natives Webkit-CSS für Textauslassungspunkte ([#8391](https://github.com/nocobase/nocobase/pull/8391)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Dateimanager]** Problem behoben, bei dem die Datei-URL für in den S3-Speicher hochgeladene Dateien falsch generiert wurde ([#8392](https://github.com/nocobase/nocobase/pull/8392)) von @mytharcher
- **[Dateispeicher: S3(Pro)]** Problem behoben, bei dem der Dateiumbenennungsmodus nicht funktionierte von @mytharcher
- **[Workflow: Genehmigung]** Problem behoben, bei dem der Wertblock aufgrund der fehlenden `ValueBlock.Result`-Komponente nicht angezeigt wurde von @mytharcher

### [v1.9.35](https://www.nocobase.com/en/blog/v1.9.35)

*Veröffentlichungsdatum: 2026-01-09*

### 🚀 Verbesserungen

- **[Workflow: Genehmigung]** Parameter in der Abfrage vereinfacht und Leistung verbessert von @mytharcher

### 🐛 Fehlerbehebungen

- **[Workflow: Webhook]** Problem behoben, bei dem ein 404-Fehler ausgelöst wurde, wenn eine POST-Anfrage an eine Webhook-URL in einer Sub-App gesendet wurde von @mytharcher

### [v1.9.34](https://www.nocobase.com/en/blog/v1.9.34)

*Veröffentlichungsdatum: 2026-01-08*

### 🚀 Verbesserungen

- **[Zugriffskontrolle]** Verbesserte Berechtigungsprüfungen beim Ändern von verschachtelten Assoziationsfeldern ([#7856](https://github.com/nocobase/nocobase/pull/7856)) von @2013xile

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem Assoziationsfelder aus externen Datenquellen in Formularblöcken keine Assoziationsdaten luden ([#8356](https://github.com/nocobase/nocobase/pull/8356)) von @katherinehhh
  - Problem behoben, bei dem Assoziationsfelder in der `FilterAction`-Komponente nicht korrekt waren ([#8295](https://github.com/nocobase/nocobase/pull/8295)) von @mytharcher
- **[logger]** Problem behoben, bei dem zusätzliche Fehlerinformationen beim Drucken von Systemprotokollen verworfen wurden ([#8367](https://github.com/nocobase/nocobase/pull/8367)) von @cgyrock
- **[Workflow: Schleifenknoten]** Problem behoben, bei dem ein fehlgeschlagener Knoten in einem Bedingungszweig den Status nicht an den übergeordneten Verzweigungsknoten weitergeben konnte ([#8360](https://github.com/nocobase/nocobase/pull/8360)) von @mytharcher
- **[Datenquelle: Haupt]** Die Metadaten der Ansichtssammlung sollten Quellfeldoptionen enthalten ([#8337](https://github.com/nocobase/nocobase/pull/8337)) von @2013xile
- **[Workflow]**

  - Problem mit Verknüpfungsregeln im Detailblock des CC-Knotens im Workflow behoben ([#8381](https://github.com/nocobase/nocobase/pull/8381)) von @zhangzhonghe
  - Instanz-ID zur Snowflake-ID von Jobs hinzugefügt, um ID-Konflikte im Cluster-Modus zu vermeiden ([#8382](https://github.com/nocobase/nocobase/pull/8382)) von @mytharcher
  - Problem behoben, bei dem die Ausführungsseite abstürzte, wenn ein Workflow gelöscht wurde ([#8361](https://github.com/nocobase/nocobase/pull/8361)) von @mytharcher
- **[Aktion: Datensätze importieren]** Falsche Fehlermeldung behoben, wenn während des asynchronen XLSX-Imports ein Eindeutigkeitsfehler ausgelöst wurde ([#8342](https://github.com/nocobase/nocobase/pull/8342)) von @cgyrock
- **[Zugriffskontrolle]**

  - Assoziationsfeldern erlaubt, die Zielschlüssel für die Assoziation zu verwenden ([#8352](https://github.com/nocobase/nocobase/pull/8352)) von @2013xile
  - Problem behoben, bei dem die Datenquelle bei der Verarbeitung von Berechtigungen für Assoziationsfelder falsch aufgelöst wurde ([#8370](https://github.com/nocobase/nocobase/pull/8370)) von @2013xile
- **[Datenquelle: REST API]** Fehlertoleranz für den Anforderungskontext hinzugefügt, um Fehler zu vermeiden, wenn die Methode nicht im Kontext ist von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Fehler behoben, wenn Sub-Applikationen asynchrone Import-/Exportaufgaben ausführen, während die Hauptanwendung das Import/Export Pro-Plugin nicht aktiviert hat von @cgyrock
- **[Workflow: Genehmigung]** Problem behoben, bei dem Filterfelder im Aufgabencenter nicht korrekt funktionierten von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.10](https://www.nocobase.com/en/blog/v2.0.0-beta.10)

*Veröffentlichungsdatum: 2026-01-14*

### 🚀 Verbesserungen

- **[client]** Unterstützung zur Angabe, wann der Ereignisablauf ausgeführt werden soll. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) von @gchust
- **[KI-Mitarbeiter]**

  - KI-Eingabeschaltfläche optimiert ([#8414](https://github.com/nocobase/nocobase/pull/8414)) von @heziqiang
  - Builder-KI in der Eintragsliste ausgeblendet.<br/> LLM-Integrationsablauf optimiert.<br/> Dokumentation zum KI-Modell Gemini-3 aktualisiert. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) von @heziqiang
- **[Benachrichtigung: In-App-Nachricht]** Leistungsproblem beim Senden von In-App-Nachrichten an eine große Anzahl von Benutzern behoben ([#8402](https://github.com/nocobase/nocobase/pull/8402)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - Eingabe-Zahlenkomponente zeigt keinen Wert an ([#8410](https://github.com/nocobase/nocobase/pull/8410)) von @chenos
  - Problem behoben, bei dem Kaskadendaten nach erfolgreicher Übermittlung im Erstellungsformular nicht gelöscht wurden ([#8403](https://github.com/nocobase/nocobase/pull/8403)) von @katherinehhh
  - Problem mit der Senden-Schaltfläche behoben, bei dem die Überspringen der erforderlichen Validierung nicht funktionierte, wenn die Bestätigung aktiviert war ([#8400](https://github.com/nocobase/nocobase/pull/8400)) von @katherinehhh
  - Problem behoben, bei dem die Senden-Schaltfläche im Dateiauswahl-Popup eines Eins-zu-Eins-Assoziationsfeldes erschien ([#8398](https://github.com/nocobase/nocobase/pull/8398)) von @katherinehhh
  - Problem behoben, bei dem das Layout-Setting im Grid-Kartenblock nicht wirksam wurde ([#8399](https://github.com/nocobase/nocobase/pull/8399)) von @katherinehhh
  - Problem behoben, bei dem die Zuweisung verhindert wurde, wenn chinesische Zeichen in ein Zahlenfeld eingegeben wurden ([#8397](https://github.com/nocobase/nocobase/pull/8397)) von @katherinehhh
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Fehler beim Anhängen von Viele-zu-viele(Array)-Beziehungen der zweiten Ebene in Assoziationsabfragen behoben ([#8406](https://github.com/nocobase/nocobase/pull/8406)) von @cgyrock
- **[Multi-Space]**

  - Verwandter Space beim Hinzufügen zugehöriger Daten von @jiannx
  - Space-Auswahlfarbe folgt dem Theme von @jiannx

### [v2.0.0-beta.9](https://www.nocobase.com/en/blog/v2.0.0-beta.9)

*Veröffentlichungsdatum: 2026-01-12*

### 🚀 Verbesserungen

- **[client]** Verbesserte Rendering-Leistung der Plugin-Manager-Liste durch Umstellung auf natives Webkit-CSS für Textauslassungspunkte ([#8391](https://github.com/nocobase/nocobase/pull/8391)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Dateimanager]** Problem behoben, bei dem die Datei-URL für in den S3-Speicher hochgeladene Dateien falsch generiert wurde ([#8392](https://github.com/nocobase/nocobase/pull/8392)) von @mytharcher
- **[Workflow]** Problem behoben, bei dem die Schema-ID in einem duplizierten Knoten nicht aktualisiert wurde ([#8396](https://github.com/nocobase/nocobase/pull/8396)) von @mytharcher
- **[Dateispeicher: S3(Pro)]** Problem behoben, bei dem der Dateiumbenennungsmodus nicht funktionierte von @mytharcher
- **[Vorlagendruck]** Problem mit verdecktem Konfigurationsvorlagen-Popup behoben von @zhangzhonghe
- **[Workflow: Genehmigung]** Problem behoben, bei dem der Wertblock aufgrund der fehlenden `ValueBlock.Result`-Komponente nicht angezeigt wurde von @mytharcher

### [v2.0.0-beta.8](https://www.nocobase.com/en/blog/v2.0.0-beta.8)

*Veröffentlichungsdatum: 2026-01-09*

### 🚀 Verbesserungen

- **[cli]** Unterstützung für CDN-Basis-URL-Konfiguration über Umgebungsvariable ([#8384](https://github.com/nocobase/nocobase/pull/8384)) von @chenos
- **[KI-Mitarbeiter]** Unterstützung für Anthropic und Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) von @heziqiang

### 🐛 Fehlerbehebungen

- **[client]** Verbesserte Logik für optionales targetKey ([#8333](https://github.com/nocobase/nocobase/pull/8333)) von @katherinehhh
- **[Workflow: Genehmigung]** Problem behoben, bei dem aufgrund falscher Parameter der falsche Datensatz geladen wurde von @mytharcher

### [v2.0.0-beta.7](https://www.nocobase.com/en/blog/v2.0.0-beta.7)

*Veröffentlichungsdatum: 2026-01-09*

### 🎉 Neue Funktionen

- **[test]** Prozessebenen-Parallelitätssteuerung für den Basis-Task-Manager hinzugefügt ([#8343](https://github.com/nocobase/nocobase/pull/8343)) von @cgyrock
- **[KI-Mitarbeiter]** Unterstützung für das Gemini-3-Modell mit Function-Calling-Thought-Signatur ([#8377](https://github.com/nocobase/nocobase/pull/8377)) von @heziqiang

### 🚀 Verbesserungen

- **[flow-engine]** `rowOrder` zu GridModel hinzugefügt, um eine konsistente Zeilenreihenfolge sicherzustellen ([#8371](https://github.com/nocobase/nocobase/pull/8371)) von @zhangzhonghe
- **[KI-Mitarbeiter]**

  - Unterstützung für benutzerdefinierte Bearbeitung und automatische Aktualisierung von System-Prompts ([#8378](https://github.com/nocobase/nocobase/pull/8378)) von @heziqiang
  - Verbesserte KI-Fehlerbehandlung für LLM-Dienste und -Modelle ([#8351](https://github.com/nocobase/nocobase/pull/8351)) von @heziqiang
- **[Dateimanager]** Anforderungsoptionen zum Abrufen von OSS-Dateien auf der Serverseite hinzugefügt, falls zusätzliche Parameter oder Header benötigt werden ([#8372](https://github.com/nocobase/nocobase/pull/8372)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem ein Assoziationsfeld nach dem Wechsel von der Datensatzauswahl-Komponente zur Auswahl-Komponente immer noch ein Popup öffnen konnte. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) von @gchust
  - Problem behoben, bei dem Verknüpfungsregeln nach dem Ändern der Seitennummerierung für Detailblöcke, Bearbeitungsformularblöcke und Listenblöcke nicht erneut ausgeführt wurden. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) von @gchust
  - Problem behoben, bei dem konfigurierte Felder von Untertabellen/Unterformularen beim Hin- und Herschalten von Feldkomponenten nicht angezeigt wurden. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) von @gchust
- **[logger]** Problem behoben, bei dem zusätzliche Fehlerinformationen beim Drucken von Systemprotokollen verworfen wurden ([#8367](https://github.com/nocobase/nocobase/pull/8367)) von @cgyrock
- **[Block: Vorlage (veraltet)]** Problem behoben, bei dem die Bearbeitungsseite für geerbte Vorlagen (v1) nicht aufgerufen werden konnte. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) von @gchust
- **[Workflow]**

  - Instanz-ID zur Snowflake-ID von Jobs hinzugefügt, um ID-Konflikte im Cluster-Modus zu vermeiden ([#8382](https://github.com/nocobase/nocobase/pull/8382)) von @mytharcher
  - Problem mit Verknüpfungsregeln im Detailblock des CC-Knotens im Workflow behoben ([#8381](https://github.com/nocobase/nocobase/pull/8381)) von @zhangzhonghe
  - Problem behoben, bei dem die Ausführungsseite abstürzte, wenn ein Workflow gelöscht wurde ([#8361](https://github.com/nocobase/nocobase/pull/8361)) von @mytharcher
- **[Zugriffskontrolle]** Problem behoben, bei dem die Datenquelle bei der Verarbeitung von Berechtigungen für Assoziationsfelder falsch aufgelöst wurde ([#8370](https://github.com/nocobase/nocobase/pull/8370)) von @2013xile
- **[Datenquelle: REST API]** Fehlertoleranz für den Anforderungskontext hinzugefügt, um Fehler zu vermeiden, wenn die Methode nicht im Kontext ist von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.64](https://www.nocobase.com/en/blog/v2.0.0-alpha.64)

*Veröffentlichungsdatum: 2026-01-08*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Unterstützung für das Gemini-3-Modell mit Function-Calling-Thought-Signatur ([#8377](https://github.com/nocobase/nocobase/pull/8377)) von @heziqiang

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]**

  - Verbesserte KI-Fehlerbehandlung für LLM-Dienste und -Modelle ([#8351](https://github.com/nocobase/nocobase/pull/8351)) von @heziqiang
  - Unterstützung für benutzerdefinierte Bearbeitung und automatische Aktualisierung von System-Prompts ([#8378](https://github.com/nocobase/nocobase/pull/8378)) von @heziqiang
- **[Dateimanager]** Anforderungsoptionen zum Abrufen von OSS-Dateien auf der Serverseite hinzugefügt, falls zusätzliche Parameter oder Header benötigt werden ([#8372](https://github.com/nocobase/nocobase/pull/8372)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[logger]** Problem behoben, bei dem zusätzliche Fehlerinformationen beim Drucken von Systemprotokollen verworfen wurden ([#8367](https://github.com/nocobase/nocobase/pull/8367)) von @cgyrock
- **[client]**

  - Problem behoben, bei dem ein Assoziationsfeld nach dem Wechsel von der Datensatzauswahl-Komponente zur Auswahl-Komponente immer noch ein Popup öffnen konnte. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) von @gchust
  - Problem behoben, bei dem Verknüpfungsregeln nach dem Ändern der Seitennummerierung für Detailblöcke, Bearbeitungsformularblöcke und Listenblöcke nicht erneut ausgeführt wurden. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) von @gchust
  - Problem behoben, bei dem konfigurierte Felder von Untertabellen/Unterformularen beim Hin- und Herschalten von Feldkomponenten nicht angezeigt wurden. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) von @gchust
- **[Workflow]**

  - Problem mit Verknüpfungsregeln im Detailblock des CC-Knotens im Workflow behoben ([#8381](https://github.com/nocobase/nocobase/pull/8381)) von @zhangzhonghe
  - Problem behoben, bei dem die Ausführungsseite abstürzte, wenn ein Workflow gelöscht wurde ([#8361](https://github.com/nocobase/nocobase/pull/8361)) von @mytharcher
- **[Zugriffskontrolle]** Problem behoben, bei dem die Datenquelle bei der Verarbeitung von Berechtigungen für Assoziationsfelder falsch aufgelöst wurde ([#8370](https://github.com/nocobase/nocobase/pull/8370)) von @2013xile
