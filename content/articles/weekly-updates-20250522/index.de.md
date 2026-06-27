---
title: "NocoBase wöchentliche Updates: Unterstützung für Massendruck in Vorlagendruck hinzugefügt"
description: "Die Updates dieser Woche umfassen: Einzeilige Textfelder unterstützen die Filterung nach mehreren Schlüsselwörtern, Unterstützung für Massendruck im Vorlagendruck und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Protokolle zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.31](https://www.nocobase.com/en/blog/v1.6.31)

*Veröffentlichungsdatum: 2025-05-18*

#### 🚀 Verbesserungen

- **[Workflow]** Alle fehlenden en-US-Lokalisierungsschlüssel hinzugefügt ([#6885](https://github.com/nocobase/nocobase/pull/6885)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Datenbank]** Leere Zeichenfolgenzellen während des Feldimports behandeln, um Fehler zu vermeiden ([#6880](https://github.com/nocobase/nocobase/pull/6880)) von @aaaaaajie
- **[Client]**

  - Die Tabelle zur Auswahl verknüpfter Datensätze filterte bereits verknüpfte Datensätze nicht heraus ([#6874](https://github.com/nocobase/nocobase/pull/6874)) von @katherinehhh
  - Verknüpfte Daten wurden nicht übermittelt, wenn verknüpfte Felder in subForm offengelegt wurden ([#6883](https://github.com/nocobase/nocobase/pull/6883)) von @katherinehhh
  - Verschiebbare Sortierfelder zeigten verfügbare Optionen nicht korrekt an ([#6875](https://github.com/nocobase/nocobase/pull/6875)) von @katherinehhh
- **[Workflow]** Fehler behoben, bei dem das Stack-Limit für Sammlungsereignisse falsch funktionierte ([#6876](https://github.com/nocobase/nocobase/pull/6876)) von @mytharcher
- **[Block: Aktionspanel]** Den Routen-Basename aus dem Scanner lesen, um sich an die Desktop-Umgebung anzupassen. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) von @sheldon66
- **[Workflow: Manueller Knoten]** Renderfehler behoben, wenn ein unbearbeitetes Element angezeigt wird ([#6879](https://github.com/nocobase/nocobase/pull/6879)) von @mytharcher
- **[Workflow: Genehmigung]** Bereich der Beauftragten für Delegierte behoben und zu anderen Beauftragten hinzugefügt von @mytharcher

### [v1.6.32](https://www.nocobase.com/en/blog/v1.6.32)

*Veröffentlichungsdatum: 2025-05-20*

#### 🐛 Fehlerbehebungen

- **[Client]**
  - Seite wurde nach dem Löschen des letzten Elements nicht korrekt weitergeleitet ([#6892](https://github.com/nocobase/nocobase/pull/6892)) von @katherinehhh
  - Kaskadenkomponente in einem Modal lud anfänglich keine verknüpften Daten ([#6886](https://github.com/nocobase/nocobase/pull/6886)) von @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.32](https://www.nocobase.com/en/blog/v1.7.0-beta.32)

*Veröffentlichungsdatum: 2025-05-19*

#### 🎉 Neue Funktionen

- **[Client]** Einzeilige Textfelder unterstützen die Eingabe mehrerer Schlüsselwörter zum Filtern ([#6685](https://github.com/nocobase/nocobase/pull/6685)) von @zhangzhonghe
  Referenz: [Multi-Keyword-Filter](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Multi-Keyword-Filter]** Einzeilige Textfelder unterstützen die Eingabe mehrerer Schlüsselwörter zum Filtern von @zhangzhonghe
  Referenz: [Multi-Keyword-Filter](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Vorlagendruck]** Unterstützung für den Stapeldruck im Vorlagendruck hinzugefügt. von @sheldon66

#### 🚀 Verbesserungen

- **[Workflow]** Alle fehlenden en-US-Lokalisierungsschlüssel hinzugefügt ([#6885](https://github.com/nocobase/nocobase/pull/6885)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Kaskadenkomponente in einem Modal lud anfänglich keine verknüpften Daten ([#6886](https://github.com/nocobase/nocobase/pull/6886)) von @katherinehhh
  - Verknüpfte Daten wurden nicht übermittelt, wenn verknüpfte Felder in subForm offengelegt wurden ([#6883](https://github.com/nocobase/nocobase/pull/6883)) von @katherinehhh
  - Verschiebbare Sortierfelder zeigten verfügbare Optionen nicht korrekt an ([#6875](https://github.com/nocobase/nocobase/pull/6875)) von @katherinehhh
  - Fehlende aktuelle Formularvariablen im Datenbereich der Datenauswahltabelle ([#6882](https://github.com/nocobase/nocobase/pull/6882)) von @katherinehhh
  - Die Tabelle zur Auswahl verknüpfter Datensätze filterte bereits verknüpfte Datensätze nicht heraus ([#6874](https://github.com/nocobase/nocobase/pull/6874)) von @katherinehhh
- **[Datenbank]** Leere Zeichenfolgenzellen während des Feldimports behandeln, um Fehler zu vermeiden ([#6880](https://github.com/nocobase/nocobase/pull/6880)) von @aaaaaajie
- **[Workflow: Manueller Knoten]** Renderfehler behoben, wenn ein unbearbeitetes Element angezeigt wird ([#6879](https://github.com/nocobase/nocobase/pull/6879)) von @mytharcher
- **[Dateimanager]** Typen korrigiert ([#6873](https://github.com/nocobase/nocobase/pull/6873)) von @mytharcher
- **[Block: Aktionspanel]** Den Routen-Basename aus dem Scanner lesen, um sich an die Desktop-Umgebung anzupassen. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) von @sheldon66
- **[KI-Integration]** Inhalt wird nicht angezeigt, wenn zwischen den Konfigurationsseiten für den LLM-Dienst und die Validierungskonfiguration gewechselt wird ([#6887](https://github.com/nocobase/nocobase/pull/6887)) von @2013xile
- **[Workflow]** Fehler behoben, bei dem das Stack-Limit für Sammlungsereignisse falsch funktionierte ([#6876](https://github.com/nocobase/nocobase/pull/6876)) von @mytharcher
- **[Workflow: Genehmigung]** Bereich der Beauftragten für Delegierte behoben und zu anderen Beauftragten hinzugefügt von @mytharcher
- **[Backup-Manager]** Typfehler im Build behoben von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.14](https://www.nocobase.com/en/blog/v1.7.0-alpha.14)

*Veröffentlichungsdatum: 2025-05-21*

#### 🎉 Neue Funktionen

- **[Client]**

  - Einzeilige Textfelder unterstützen die Eingabe mehrerer Schlüsselwörter zum Filtern ([#6685](https://github.com/nocobase/nocobase/pull/6685)) von @zhangzhonghe
    Referenz: [Multi-Keyword-Filter](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - Aktionsverknüpfungsregeln unterstützen 'aktuelles Formular'-Variablen ([#6810](https://github.com/nocobase/nocobase/pull/6810)) von @katherinehhh
- **[Build]** Unterstützung für kommerzielle Autorisierung ([#6554](https://github.com/nocobase/nocobase/pull/6554)) von @jiannx
- **[Undefiniert]** Protokoll des Import-Plugins hinzugefügt von @aaaaaajie
- **[Aktion: Datensätze importieren]** Protokoll des Import-Plugins hinzugefügt ([#6841](https://github.com/nocobase/nocobase/pull/6841)) von @aaaaaajie
- **[plugin-commercial]** Unterstützung für kommerzielle Nutzung von @jiannx
- **[Multi-Keyword-Filter]** Einzeilige Textfelder unterstützen die Eingabe mehrerer Schlüsselwörter zum Filtern von @zhangzhonghe
  Referenz: [Multi-Keyword-Filter](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Vorlagendruck]**

  - Unterstützung für den Stapeldruck im Vorlagendruck hinzugefügt. von @sheldon66
  - Unterstützung für den Stapeldruck im Vorlagendruck hinzugefügt. von @sheldon66

#### 🚀 Verbesserungen

- **[Undefiniert]** Das vollständige Docker-Image erstellen ([#6898](https://github.com/nocobase/nocobase/pull/6898)) von @chenos
- **[Client]**

  - Optimierung des Problems, dass Seiten mit der Nutzung zunehmend langsamer werden ([#6888](https://github.com/nocobase/nocobase/pull/6888)) von @zhangzhonghe
  - Weitere integrierte Größenoptionen für das Lesestatus-Bild hinzugefügt ([#6868](https://github.com/nocobase/nocobase/pull/6868)) von @katherinehhh
- **[Workflow]**

  - Alle fehlenden en-US-Lokalisierungsschlüssel hinzugefügt ([#6885](https://github.com/nocobase/nocobase/pull/6885)) von @mytharcher
  - Ermöglicht die Überarbeitung von mehr als einem Entwurf ([#6851](https://github.com/nocobase/nocobase/pull/6851)) von @mytharcher
- **[Sammlungsfeld: Anhang (URL)]** Weitere integrierte Größen zum Anhang-URL-Feld für den Lesestatus hinzugefügt ([#6871](https://github.com/nocobase/nocobase/pull/6871)) von @katherinehhh
- **[E-Mail-Manager]**

  - Synchronisationsfehler und andere Benutzerfreundlichkeitsprobleme behoben von @jiannx
  - Entwurfsverwaltung hinzugefügt, unterstützt die E-Mail-Ansicht von Untergebenen von @jiannx

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Deaktivierte Verknüpfungsregel funktioniert nicht für Aktionsschaltfläche ([#6896](https://github.com/nocobase/nocobase/pull/6896)) von @katherinehhh
  - Seite wurde nach dem Löschen des letzten Elements nicht korrekt weitergeleitet ([#6892](https://github.com/nocobase/nocobase/pull/6892)) von @katherinehhh
  - Kaskadenkomponente in einem Modal lud anfänglich keine verknüpften Daten ([#6886](https://github.com/nocobase/nocobase/pull/6886)) von @katherinehhh
  - Die Tabelle zur Auswahl verknüpfter Datensätze filterte bereits verknüpfte Datensätze nicht heraus ([#6874](https://github.com/nocobase/nocobase/pull/6874)) von @katherinehhh
  - Verknüpfte Daten wurden nicht übermittelt, wenn verknüpfte Felder in subForm offengelegt wurden ([#6883](https://github.com/nocobase/nocobase/pull/6883)) von @katherinehhh
  - Fehlende aktuelle Formularvariablen im Datenbereich der Datenauswahltabelle ([#6882](https://github.com/nocobase/nocobase/pull/6882)) von @katherinehhh
  - Verschiebbare Sortierfelder zeigten verfügbare Optionen nicht korrekt an ([#6875](https://github.com/nocobase/nocobase/pull/6875)) von @katherinehhh
  - Wert auf der rechten Seite löschen, wenn sich der Operator in der Verknüpfungsregel ändert ([#6862](https://github.com/nocobase/nocobase/pull/6862)) von @katherinehhh
  - Operator fehlt beim Wechsel in Verknüpfungsregeln ([#6857](https://github.com/nocobase/nocobase/pull/6857)) von @katherinehhh
  - Problem mit Schaltflächenverknüpfung im Detailblock ([#6867](https://github.com/nocobase/nocobase/pull/6867)) von @katherinehhh
  - Falsche Auswertung von Operatoren für Datumsvariablen in Verknüpfungsbedingungen ([#6825](https://github.com/nocobase/nocobase/pull/6825)) von @katherinehhh
  - Die ausgeblendeten Felder werden weiterhin angezeigt ([#6844](https://github.com/nocobase/nocobase/pull/6844)) von @zhangzhonghe
  - Inkompatibilität der Variablenanalyse mit {{title}}-Daten in der sekundären Bestätigung ([#6838](https://github.com/nocobase/nocobase/pull/6838)) von @katherinehhh
  - Inkompatibilität der Variablenanalyse mit {{title}}-Daten in der sekundären Bestätigung ([#6838](https://github.com/nocobase/nocobase/pull/6838)) von @katherinehhh
  - Verbesserung des Stils der Wertkomponente der Verknüpfungsregel ([#6836](https://github.com/nocobase/nocobase/pull/6836)) von @katherinehhh
- **[Datenbank]** Leere Zeichenfolgenzellen während des Feldimports behandeln, um Fehler zu vermeiden ([#6880](https://github.com/nocobase/nocobase/pull/6880)) von @aaaaaajie
- **[Build]** Client-Laufzeitfehler in plugin-workflow-javascript behoben, Prozess undefiniert Fehler ([#6859](https://github.com/nocobase/nocobase/pull/6859)) von @jiannx
- **[Dateimanager]**

  - Vorschau-URL für Nicht-Bilddateien korrigiert ([#6889](https://github.com/nocobase/nocobase/pull/6889)) von @mytharcher
  - Typen korrigiert ([#6873](https://github.com/nocobase/nocobase/pull/6873)) von @mytharcher
  - Erstellen eines Dateidatensatzes ohne Fremdschlüsselberechtigung korrigiert ([#6863](https://github.com/nocobase/nocobase/pull/6863)) von @mytharcher
- **[Block: Aktionspanel]**

  - Den Routen-Basename aus dem Scanner lesen, um sich an die Desktop-Umgebung anzupassen. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) von @sheldon66
  - Die Farbe des Aktionspanels ist im Dunkelmodus falsch ([#6842](https://github.com/nocobase/nocobase/pull/6842)) von @zhangzhonghe
- **[KI-Integration]** Inhalt wird nicht angezeigt, wenn zwischen den Konfigurationsseiten für den LLM-Dienst und die Validierungskonfiguration gewechselt wird ([#6887](https://github.com/nocobase/nocobase/pull/6887)) von @2013xile
- **[Workflow: Manueller Knoten]**

  - Testfall aufgrund der Entfernung des Plugins aus der integrierten Liste korrigiert ([#6895](https://github.com/nocobase/nocobase/pull/6895)) von @mytharcher
  - Renderfehler behoben, wenn ein unbearbeitetes Element angezeigt wird ([#6879](https://github.com/nocobase/nocobase/pull/6879)) von @mytharcher
  - Falsche Anzahl von Statistiken bei Aufgaben korrigiert ([#6783](https://github.com/nocobase/nocobase/pull/6783)) von @mytharcher
- **[Workflow]**

  - Fehler behoben, bei dem das Stack-Limit für Sammlungsereignisse falsch funktionierte ([#6876](https://github.com/nocobase/nocobase/pull/6876)) von @mytharcher
  - Fehler behoben, bei dem die Rückwärtsnavigation nicht funktionierte, wenn ein Popup-Link direkt im Aufgabencenter geöffnet wurde ([#6853](https://github.com/nocobase/nocobase/pull/6853)) von @mytharcher
- **[Datenvisualisierung]**

  - Diagrammblöcke werden nicht angezeigt, wenn sie zu Popups hinzugefügt werden, die durch Aktionen auf Blockebene ausgelöst werden ([#6864](https://github.com/nocobase/nocobase/pull/6864)) von @2013xile
  - Fehler beim Filtern von verschachtelten m2m-Feldern behoben ([#6855](https://github.com/nocobase/nocobase/pull/6855)) von @2013xile
- **[Aktion: Datensätze exportieren]**

  - Leistung beim Löschen von Feldern in den Import-/Export-Feldeinstellungen verbessert ([#6861](https://github.com/nocobase/nocobase/pull/6861)) von @katherinehhh
  - Export von leeren Werten in verschachtelten Verknüpfungen und Anhang-URLs korrigiert ([#6845](https://github.com/nocobase/nocobase/pull/6845)) von @aaaaaajie
- **[Block: Vorlage]** Nach dem Speichern als geerbte Vorlage tritt ein Fehler beim Öffnen des Popups auf ([#6840](https://github.com/nocobase/nocobase/pull/6840)) von @gchust
- **[Aktion: Datensatz duplizieren]** Modal schließt beim ersten Klick auf die Eingabe beim Bearbeiten duplizierter Daten ([#6848](https://github.com/nocobase/nocobase/pull/6848)) von @katherinehhh
- **[Workflow: Testkit]** Fehlgeschlagene Testfälle aufgrund eines erforderlichen voreingestellten Plugins korrigiert ([#6839](https://github.com/nocobase/nocobase/pull/6839)) von @mytharcher
- **[Workflow: Ereignis nach Aktion]** Fehler behoben, bei dem die Variable 'user acted' in der Handlebars-Vorlage nicht zugänglich war ([#6837](https://github.com/nocobase/nocobase/pull/6837)) von @mytharcher
- **[plugin-commercial]**

  - Kommerzielles Log-Senden an CRM und Textübersetzung korrigiert von @jiannx
  - Implementierung der withCommercial-Funktion mittels Prototypenkette von @jiannx
- **[Aktion: Datensätze exportieren Pro]**

  - Leistung beim Löschen von Feldern in den Import/Export Pro-Feldeinstellungen verbessert von @katherinehhh
  - Fehler beim Exportieren langer Texte behoben. von @aaaaaajie
- **[Workflow: Unterworkflow]** Fehler durch undefinierten Auslöser behoben, der zum Seitenabsturz führte von @mytharcher
- **[Vorlagendruck]**

  - Problem mit nicht gefundenen Formatierungsfunktionen behoben. von @sheldon66
  - Formatierungsfunktion nicht gefunden behoben von @sheldon66
- **[Dateispeicher: S3(Pro)]**

  - Zugriffs-URL-Ablauf ungültig von @jiannx
  - Geändert, um Sammlungsfeld zur Lokalisierung des Speichers zu verwenden von @mytharcher
- **[Workflow: Genehmigung]**

  - Falsche Anzahl von Statistiken bei Aufgaben korrigiert von @mytharcher
  - Bereich der Beauftragten für Delegierte behoben und zu anderen Beauftragten hinzugefügt von @mytharcher
- **[E-Mail-Manager]**

  - TS-Fehler behoben von @jiannx
  - Listen-API unterstützt Betreff-Zusammenführung von @jiannx
- **[Backup-Manager]** Typfehler im Build behoben von @mytharcher
