---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: die Möglichkeit, mehr als einen Entwurf zu überarbeiten, das Hinzufügen weiterer integrierter Größeneinstellungen für Lese-Status-Bilder und andere Verbesserungen."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.28](https://www.nocobase.com/en/blog/v1.6.28)

*Veröffentlichungsdatum: 2025-05-09*

#### 🐛 Fehlerbehebungen

- **[Datenbank]** Import fehlgeschlagen aufgrund von Textfeldwerten. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) von @aaaaaajie
- **[Client]** Die ausgeblendeten Felder werden weiterhin angezeigt ([#6844](https://github.com/nocobase/nocobase/pull/6844)) von @zhangzhonghe
- **[Aktion: Datensätze exportieren]** Fehler beim Exportieren von Langtexten behoben. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) von @aaaaaajie
- **[Workflow: Nach-Aktion-Ereignis]** Problem behoben, bei dem die Variable "benutzer_handelnd" in Hanldebars-Vorlagen nicht zugänglich war ([#6837](https://github.com/nocobase/nocobase/pull/6837)) von @mytharcher
- **[Block: Aktionspanel]** Die Farbe des Aktionspanels ist im Dunkelmodus falsch ([#6842](https://github.com/nocobase/nocobase/pull/6842)) von @zhangzhonghe
- **[Aktion: Datensätze exportieren Pro]** Fehler beim Exportieren von Langtexten behoben. von @aaaaaajie

### [v1.6.29](https://www.nocobase.com/en/blog/v1.6.29)

*Veröffentlichungsdatum: 2025-05-13*

#### 🚀 Verbesserungen

- **[Workflow]** Erlauben, mehr als einen Entwurf zu überarbeiten ([#6851](https://github.com/nocobase/nocobase/pull/6851)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Aktion: Datensätze exportieren]** Fehler beim Exportieren von leeren Werten in verschachtelten Assoziationen und Anhangs-URLs behoben ([#6845](https://github.com/nocobase/nocobase/pull/6845)) von @aaaaaajie
- **[Workflow: Manueller Knoten]** Falsche Zählung der Statistikzahlen bei Aufgaben behoben ([#6783](https://github.com/nocobase/nocobase/pull/6783)) von @mytharcher
- **[Workflow: Testkit]** Fehlgeschlagene Testfälle aufgrund eines erforderlichen Preset-Plugins behoben ([#6839](https://github.com/nocobase/nocobase/pull/6839)) von @mytharcher
- **[Datenvisualisierung]** Fehler beim Filtern von verschachtelten m2m-Feldern behoben ([#6855](https://github.com/nocobase/nocobase/pull/6855)) von @2013xile
- **[Workflow: Unterworkflow]** Problem behoben, bei dem ein undefinierter Auslöser einen Seitenabsturz verursachte von @mytharcher
- **[Dateispeicher: S3(Pro)]** Ablauf der Zugriffs-URL ungültig von @jiannx
- **[Workflow: Genehmigung]** Falsche Zählung der Statistikzahlen bei Aufgaben behoben von @mytharcher

### [v1.6.30](https://www.nocobase.com/en/blog/v1.6.30)

*Veröffentlichungsdatum: 2025-05-15*

#### 🚀 Verbesserungen

- **[Client]** Weitere integrierte Größeneinstellungen für das Lesestatus-Bild hinzugefügt ([#6868](https://github.com/nocobase/nocobase/pull/6868)) von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[Dateimanager]**

  - Typen korrigiert ([#6873](https://github.com/nocobase/nocobase/pull/6873)) von @mytharcher
  - Erstellen eines Dateieintrags ohne Fremdschlüsselberechtigung behoben ([#6863](https://github.com/nocobase/nocobase/pull/6863)) von @mytharcher
- **[Aktion: Datensätze exportieren]** Leistung beim Löschen von Feldern in den Import/Export-Feldeinstellungen verbessert ([#6861](https://github.com/nocobase/nocobase/pull/6861)) von @katherinehhh
- **[Datenvisualisierung]** Diagrammblöcke werden nicht angezeigt, wenn sie zu Popups hinzugefügt werden, die durch blockweite Aktionen ausgelöst werden ([#6864](https://github.com/nocobase/nocobase/pull/6864)) von @2013xile
- **[Aktion: Datensätze exportieren Pro]** Leistung beim Löschen von Feldern in den Import/Export-Pro-Feldeinstellungen verbessert von @katherinehhh
- **[Dateispeicher: S3(Pro)]** Geändert, um Sammlungsfelder zur Lokalisierung des Speichers zu verwenden von @mytharcher
- **[Backup-Manager]** Typfehler beim Build behoben von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.31](https://www.nocobase.com/en/blog/v1.7.0-beta.31)

*Veröffentlichungsdatum: 2025-05-15*

#### 🎉 Neue Funktionen

- **[Client]** Aktionsverknüpfungsregel unterstützt 'aktuelles Formular'-Variablen ([#6810](https://github.com/nocobase/nocobase/pull/6810)) von @katherinehhh
- **[undefined]** Protokoll des Import-Plugins hinzugefügt von @aaaaaajie
- **[Aktion: Datensätze importieren]** Protokoll des Import-Plugins hinzugefügt ([#6841](https://github.com/nocobase/nocobase/pull/6841)) von @aaaaaajie

#### 🚀 Verbesserungen

- **[Client]** Weitere integrierte Größeneinstellungen für das Lesestatus-Bild hinzugefügt ([#6868](https://github.com/nocobase/nocobase/pull/6868)) von @katherinehhh
- **[Sammlungsfeld: Anhang(URL)]** Weitere integrierte Größen zum Anhangs-URL-Feld für den Lesestatus hinzugefügt ([#6871](https://github.com/nocobase/nocobase/pull/6871)) von @katherinehhh
- **[Workflow]** Erlauben, mehr als einen Entwurf zu überarbeiten ([#6851](https://github.com/nocobase/nocobase/pull/6851)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem mit der Schaltflächenverknüpfung im Detailblock ([#6867](https://github.com/nocobase/nocobase/pull/6867)) von @katherinehhh
  - Löschen des rechten Werts, wenn sich der Operator in der Verknüpfungsregel ändert ([#6862](https://github.com/nocobase/nocobase/pull/6862)) von @katherinehhh
  - Falsche Auswertung von Operatoren für Datumsvariablen in Verknüpfungsbedingungen ([#6825](https://github.com/nocobase/nocobase/pull/6825)) von @katherinehhh
  - Fehlender Operator beim Wechseln in Verknüpfungsregeln ([#6857](https://github.com/nocobase/nocobase/pull/6857)) von @katherinehhh
  - Inkompatibilität der Variablenanalyse mit {{title}}-Daten in der sekundären Bestätigung ([#6838](https://github.com/nocobase/nocobase/pull/6838)) von @katherinehhh
  - Verbesserung des Stils der Wertkomponente der Verknüpfungsregel ([#6836](https://github.com/nocobase/nocobase/pull/6836)) von @katherinehhh
  - Inkompatibilität der Variablenanalyse mit {{title}}-Daten in der sekundären Bestätigung ([#6838](https://github.com/nocobase/nocobase/pull/6838)) von @katherinehhh
  - Die ausgeblendeten Felder werden weiterhin angezeigt ([#6844](https://github.com/nocobase/nocobase/pull/6844)) von @zhangzhonghe
- **[Datenbank]** Import fehlgeschlagen aufgrund von Textfeldwerten. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) von @aaaaaajie
- **[Datenvisualisierung]**

  - Diagrammblöcke werden nicht angezeigt, wenn sie zu Popups hinzugefügt werden, die durch blockweite Aktionen ausgelöst werden ([#6864](https://github.com/nocobase/nocobase/pull/6864)) von @2013xile
  - Fehler beim Filtern von verschachtelten m2m-Feldern behoben ([#6855](https://github.com/nocobase/nocobase/pull/6855)) von @2013xile
- **[Aktion: Datensätze exportieren]**

  - Leistung beim Löschen von Feldern in den Import/Export-Feldeinstellungen verbessert ([#6861](https://github.com/nocobase/nocobase/pull/6861)) von @katherinehhh
  - Fehler beim Exportieren von leeren Werten in verschachtelten Assoziationen und Anhangs-URLs behoben ([#6845](https://github.com/nocobase/nocobase/pull/6845)) von @aaaaaajie
  - Fehler beim Exportieren von Langtexten behoben. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) von @aaaaaajie
- **[Dateimanager]** Erstellen eines Dateieintrags ohne Fremdschlüsselberechtigung behoben ([#6863](https://github.com/nocobase/nocobase/pull/6863)) von @mytharcher
- **[Workflow]** Problem behoben, bei dem die Rückwärtsnavigation nicht funktioniert, wenn ein Popup-Link direkt im Aufgabencenter geöffnet wird ([#6853](https://github.com/nocobase/nocobase/pull/6853)) von @mytharcher
- **[Aktion: Datensatz duplizieren]** Modal schließt beim ersten Klick auf die Eingabe beim Bearbeiten duplizierter Daten ([#6848](https://github.com/nocobase/nocobase/pull/6848)) von @katherinehhh
- **[Block: Vorlage]** Nach dem Speichern als geerbte Vorlage tritt ein Fehler beim Öffnen des Popups auf ([#6840](https://github.com/nocobase/nocobase/pull/6840)) von @gchust
- **[Workflow: Testkit]** Fehlgeschlagene Testfälle aufgrund eines erforderlichen Preset-Plugins behoben ([#6839](https://github.com/nocobase/nocobase/pull/6839)) von @mytharcher
- **[Workflow: Nach-Aktion-Ereignis]** Problem behoben, bei dem die Variable "benutzer_handelnd" in Hanldebars-Vorlagen nicht zugänglich war ([#6837](https://github.com/nocobase/nocobase/pull/6837)) von @mytharcher
- **[Workflow: Manueller Knoten]** Falsche Zählung der Statistikzahlen bei Aufgaben behoben ([#6783](https://github.com/nocobase/nocobase/pull/6783)) von @mytharcher
- **[Block: Aktionspanel]** Die Farbe des Aktionspanels ist im Dunkelmodus falsch ([#6842](https://github.com/nocobase/nocobase/pull/6842)) von @zhangzhonghe
- **[Aktion: Datensätze exportieren Pro]**

  - Leistung beim Löschen von Feldern in den Import/Export-Pro-Feldeinstellungen verbessert von @katherinehhh
  - Fehler beim Exportieren von Langtexten behoben. von @aaaaaajie
- **[Workflow: Unterworkflow]** Problem behoben, bei dem ein undefinierter Auslöser einen Seitenabsturz verursachte von @mytharcher
- **[Vorlagendruck]**

  - Problem behoben, dass Formatierer nicht gefunden wurden. von @sheldon66
  - Problem behoben, dass Formatierer nicht gefunden wurden von @sheldon66
- **[Dateispeicher: S3(Pro)]**

  - Geändert, um Sammlungsfelder zur Lokalisierung des Speichers zu verwenden von @mytharcher
  - Ablauf der Zugriffs-URL ungültig von @jiannx
- **[Workflow: Genehmigung]** Falsche Zählung der Statistikzahlen bei Aufgaben behoben von @mytharcher
