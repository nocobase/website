---
title: "NocoBase v2.0.52: Aktuelle Benutzersprachvariable in v2 hinzugefügt"
description: "Versionshinweise zu v2.0.52"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Aktuelle Benutzersprachvariable in v2 hinzugefügt ([#9405](https://github.com/nocobase/nocobase/pull/9405)) von @katherinehhh

  - Option zur Begrenzung des Datumsbereichs für Datumsfelder in v2-Formularen hinzugefügt ([#9400](https://github.com/nocobase/nocobase/pull/9400)) von @katherinehhh

### 🚀 Verbesserungen

- **[Client]** Bereits verknüpfte Datensätze im Auswahldialog für Assoziationen von 1:n-Tabellenblöcken ausschließen ([#9448](https://github.com/nocobase/nocobase/pull/9448)) von @katherinehhh

- **[Abteilungen]** Optimierung des Abteilungslisten-Stils durch Hinzufügen von Symbolen und Anpassen der Abstände ([#9435](https://github.com/nocobase/nocobase/pull/9435)) von @katherinehhh

- **[KI: Wissensdatenbank]** Die eindeutige Kennung einer Wissensdatenbank ist bei der Erstellung konfigurierbar von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem alte Standardwerteinstellungen nicht entfernt werden konnten. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) von @gchust

  - Problem behoben, bei dem keine Optionen für das Auswahlfeld einer Assoziation ausgewählt werden konnten. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) von @gchust

  - Problem behoben, bei dem der Datenbereich des Zielblocks falsch gesetzt wurde, wenn Zeilendaten in einem Tabellenblock-Ereignisfluss abgewählt wurden. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) von @gchust

  - Doppelte Tabellenanfragen behoben, wenn Filterformulare Standardwerte haben ([#9423](https://github.com/nocobase/nocobase/pull/9423)) von @zhangzhonghe

  - V2-Verknüpfungsregeln korrigiert, um die Einstellung auswählbarer Optionen für Felder zu unterstützen ([#9399](https://github.com/nocobase/nocobase/pull/9399)) von @jiannx

  - Fehler beim Ändern des Titelfeldes eines Assoziationsfeldes im v2-Tabellenblock behoben ([#9451](https://github.com/nocobase/nocobase/pull/9451)) von @katherinehhh

  - Ein zeitweiliges Problem behoben, bei dem Verknüpfungsregeln für Aktionsschaltflächen nicht wirksam wurden. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) von @gchust

  - Untertabellen-Komponente für n:m-Assoziationsfelder in v2-Untertabellen ausgeblendet ([#9438](https://github.com/nocobase/nocobase/pull/9438)) von @katherinehhh

- **[Server]** fix(file-manager): Erzwingen des Downloads von aktiven Inhaltsdateien im lokalen/öffentlichen Speicher ([#9437](https://github.com/nocobase/nocobase/pull/9437)) von @mytharcher

- **[KI-Mitarbeiter]** Problem behoben, bei dem der Ollama-Testflug eine Schlüsseleingabe erforderte ([#9450](https://github.com/nocobase/nocobase/pull/9450)) von @cgyrock

- **[Graphischer Sammlungsmanager]** Fehler behoben, bei dem das automatische Layout der grafischen Oberfläche einen Aktualisierungs-Aktionsfilter auslöste ([#9421](https://github.com/nocobase/nocobase/pull/9421)) von @katherinehhh

- **[Workflow]** fix: Hilfetext in FlowModel-Workflow-Bindungsdialogen für Operations- und benutzerdefinierte Aktionsereignisse wiederhergestellt ([#9447](https://github.com/nocobase/nocobase/pull/9447)) von @mytharcher

- **[Abteilungen]** Übersetzungskonflikt zwischen den Schaltflächen "Benutzer hinzufügen" und "Abteilung hinzufügen" in den Benutzer- & Berechtigungseinstellungen behoben ([#9456](https://github.com/nocobase/nocobase/pull/9456)) von @katherinehhh

- **[Sammlungsfeld: Markdown(Vditor)]** Problem behoben, bei dem der Tooltip des Markdown-Feldes im horizontalen Formularlayout versteckt war ([#9420](https://github.com/nocobase/nocobase/pull/9420)) von @katherinehhh

- **[WEB-Client]** Filterung nach Routentyp bei Verwendung übersetzter Bezeichnungen korrigiert ([#9425](https://github.com/nocobase/nocobase/pull/9425)) von @zhangzhonghe

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem das JS-Feld in den Genehmigungsprozess-Einstellungen angezeigt wurde von @zhangzhonghe

  - Layout des Genehmigungsformulars auf mobilen Geräten korrigiert von @zhangzhonghe

  - Doppelter Genehmigungsdatensatzindex bei Delegierung von Genehmigungsaufgaben behoben. von @mytharcher

- **[Backup-Manager]** Problem behoben, bei dem Backups mit einem Fehler fehlschlugen, wenn Dateien nicht gefunden werden konnten. von @gchust
