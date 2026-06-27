---
title: "NocoBase v1.7.0-beta.31: Protokoll des Import-Plugins hinzugefügt"
description: "Versionshinweise zu v1.7.0-beta.31"
---

### 🎉 Neue Funktionen

- **[Client]** Aktionsverknüpfungsregel unterstützt Variablen des Typs 'aktuelles Formular' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) von @katherinehhh

- **[Undefiniert]** Log des Import-Plugins hinzugefügt von @aaaaaajie

- **[Aktion: Datensätze importieren]** Log des Import-Plugins hinzugefügt ([#6841](https://github.com/nocobase/nocobase/pull/6841)) von @aaaaaajie

### 🚀 Verbesserungen

- **[Client]** Weitere integrierte Größeneinstellungen für das Lesestatus-Bild hinzugefügt ([#6868](https://github.com/nocobase/nocobase/pull/6868)) von @katherinehhh

- **[Sammlungsfeld: Anhang (URL)]** Weitere integrierte Größen zum Anhang-URL-Feld für den Lesestatus hinzugefügt ([#6871](https://github.com/nocobase/nocobase/pull/6871)) von @katherinehhh

- **[Workflow]** Ermöglicht die Überarbeitung von mehr als einem Entwurf ([#6851](https://github.com/nocobase/nocobase/pull/6851)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem mit Schaltflächenverknüpfung im Detailblock ([#6867](https://github.com/nocobase/nocobase/pull/6867)) von @katherinehhh

  - Wert auf der rechten Seite löschen, wenn der Operator in der Verknüpfungsregel geändert wird ([#6862](https://github.com/nocobase/nocobase/pull/6862)) von @katherinehhh

  - Falsche Auswertung von Operatoren für Datumsvariablen in Verknüpfungsbedingungen ([#6825](https://github.com/nocobase/nocobase/pull/6825)) von @katherinehhh

  - Fehlender Operator beim Wechseln in Verknüpfungsregeln ([#6857](https://github.com/nocobase/nocobase/pull/6857)) von @katherinehhh

  - Inkompatibilität der Variablenanalyse mit {{title}}-Daten in der sekundären Bestätigung ([#6838](https://github.com/nocobase/nocobase/pull/6838)) von @katherinehhh

  - Verbesserung des Stils der Wertkomponente der Verknüpfungsregel ([#6836](https://github.com/nocobase/nocobase/pull/6836)) von @katherinehhh

  - Inkompatibilität der Variablenanalyse mit {{title}}-Daten in der sekundären Bestätigung ([#6838](https://github.com/nocobase/nocobase/pull/6838)) von @katherinehhh

  - Die ausgeblendeten Felder werden weiterhin angezeigt ([#6844](https://github.com/nocobase/nocobase/pull/6844)) von @zhangzhonghe

- **[Datenbank]** Import fehlgeschlagen aufgrund von Textfeldwerten. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) von @aaaaaajie

- **[Datenvisualisierung]**
  - Diagrammblöcke werden nicht angezeigt, wenn sie zu Popups hinzugefügt werden, die durch blockbezogene Aktionen ausgelöst werden ([#6864](https://github.com/nocobase/nocobase/pull/6864)) von @2013xile

  - Fehler beim Filtern von verschachtelten m2m-Feldern behoben ([#6855](https://github.com/nocobase/nocobase/pull/6855)) von @2013xile

- **[Aktion: Datensätze exportieren]**
  - Leistungsverbesserung beim Löschen von Feldern in den Import-/Export-Feldeinstellungen ([#6861](https://github.com/nocobase/nocobase/pull/6861)) von @katherinehhh

  - Export von leeren Werten in verschachtelten Assoziationen und Anhang-URLs behoben ([#6845](https://github.com/nocobase/nocobase/pull/6845)) von @aaaaaajie

  - Fehler beim Export von Langtexten behoben. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) von @aaaaaajie

- **[Dateimanager]** Erstellen eines Dateieintrags ohne Fremdschlüsselberechtigung behoben ([#6863](https://github.com/nocobase/nocobase/pull/6863)) von @mytharcher

- **[Workflow]** Navigieren zurück funktioniert nicht, wenn ein Popup-Link direkt im Aufgabencenter geöffnet wird, behoben ([#6853](https://github.com/nocobase/nocobase/pull/6853)) von @mytharcher

- **[Aktion: Datensatz duplizieren]** Modal schließt beim ersten Eingabeklick beim Bearbeiten duplizierter Daten ([#6848](https://github.com/nocobase/nocobase/pull/6848)) von @katherinehhh

- **[Block: Vorlage]** Nach dem Speichern als geerbte Vorlage tritt ein Fehler beim Öffnen des Popups auf ([#6840](https://github.com/nocobase/nocobase/pull/6840)) von @gchust

- **[Workflow: Testkit]** Fehlgeschlagene Testfälle aufgrund eines erforderlichen Preset-Plugins behoben ([#6839](https://github.com/nocobase/nocobase/pull/6839)) von @mytharcher

- **[Workflow: Nachaktionsereignis]** Variable 'user acted' in Hanldebars-Vorlage nicht zugänglich, behoben ([#6837](https://github.com/nocobase/nocobase/pull/6837)) von @mytharcher

- **[Workflow: Manueller Knoten]** Falsche Zählung der Statistikzahlen bei Aufgaben behoben ([#6783](https://github.com/nocobase/nocobase/pull/6783)) von @mytharcher

- **[Block: Aktionspanel]** Farbe des Aktionspanels im Dunkelmodus falsch ([#6842](https://github.com/nocobase/nocobase/pull/6842)) von @zhangzhonghe

- **[Aktion: Datensätze exportieren Pro]**
  - Leistungsverbesserung beim Löschen von Feldern in den Import/Export Pro-Feldeinstellungen von @katherinehhh

  - Fehler beim Export von Langtexten behoben. von @aaaaaajie

- **[Workflow: Unterworkflow]** Undefinierter Auslöser, der Seitenabsturz verursacht, behoben von @mytharcher

- **[Vorlagendruck]**
  - Problem 'Formatierer nicht gefunden' behoben. von @sheldon66

  - Formatierer nicht gefunden behoben von @sheldon66

- **[Dateispeicher: S3(Pro)]**
  - Geändert, um Sammlungsfeld zur Lokalisierung des Speichers zu verwenden von @mytharcher

  - Ablauf der Zugriffs-URL ungültig von @jiannx

- **[Workflow: Genehmigung]** Falsche Zählung der Statistikzahlen bei Aufgaben behoben von @mytharcher
