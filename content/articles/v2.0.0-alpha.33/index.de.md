---
title: "NocoBase v2.0.0-alpha.33: Seitenunterstützung für Untertabellen hinzugefügt"
description: "Versionshinweise zu v2.0.0-alpha.33"
---

### 🎉 Neue Funktionen

- **[Client]** Seitenumbruch für Untertabellen hinzugefügt ([#7754](https://github.com/nocobase/nocobase/pull/7754)) von @katherinehhh

### 🚀 Verbesserungen

- **[Undefiniert]** Die englische Dokumentation des Diagramm-Plugins aktualisiert ([#7748](https://github.com/nocobase/nocobase/pull/7748)) von @heziqiang

- **[Telemetrie]** Telemetrie-Metriken für die Anzahl der Online-Subanwendungen usw. hinzugefügt ([#7743](https://github.com/nocobase/nocobase/pull/7743)) von @2013xile

- **[Workflow]** Unterstützung für Datenblöcke im Workflow, um das Menü zur Konsolidierung von Detail-Einstellungen zu verwenden ([#7771](https://github.com/nocobase/nocobase/pull/7771)) von @mytharcher

- **[Multi-App-Manager (veraltet)]** Asynchroner Start von Subanwendungen mittels einer Warteschlange aktiviert ([#7749](https://github.com/nocobase/nocobase/pull/7749)) von @2013xile

- **[Datenvisualisierung]** Optionen für das Zeitformat von Diagrammdaten hinzugefügt ([#7763](https://github.com/nocobase/nocobase/pull/7763)) von @heziqiang

- **[Workflow: Genehmigung]** Benachrichtigung für delegierte und hinzugefügte Bearbeiter hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ein Problem behoben, bei dem die Bezeichnungen von Enum-Typen in variablenbezogenen Komponenten nicht in der korrekten Sprache angezeigt wurden. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) von @gchust

  - Fehlender Indikator für Pflichtfelder nach dem Setzen der Frontend-Validierung behoben ([#7760](https://github.com/nocobase/nocobase/pull/7760)) von @katherinehhh

  - Problem beim Löschen eines Datums ohne Zeitzone im Bearbeitungsformular behoben ([#7759](https://github.com/nocobase/nocobase/pull/7759)) von @katherinehhh

  - Validierung von Pflichtfeldern für Verknüpfungsregeln behoben ([#7756](https://github.com/nocobase/nocobase/pull/7756)) von @zhangzhonghe

  - Problem "Invalid Date" beim Löschen eines bestimmten Datums im Filter behoben ([#7746](https://github.com/nocobase/nocobase/pull/7746)) von @katherinehhh

  - Fehlgeschlagene Pflichtfeldvalidierung für das Markdown-Vditor-Feld behoben ([#7764](https://github.com/nocobase/nocobase/pull/7764)) von @katherinehhh

  - Datenbereichskonfiguration für Beziehungsfelder in Filterformularen hinzugefügt ([#7761](https://github.com/nocobase/nocobase/pull/7761)) von @zhangzhonghe

  - Problem mit dem Zeitformat in Untertabellenfeldern behoben ([#7750](https://github.com/nocobase/nocobase/pull/7750)) von @katherinehhh

- **[Flow-Engine]**
  - Wenn der Feld-Filterwert auf "false" gesetzt ist, ist die Anfrage mit Datenbereich falsch ([#7766](https://github.com/nocobase/nocobase/pull/7766)) von @gchust

  - Der assoziierte Feldwert der aktuellen Objektvariablen eines Unterformulars kann nicht aufgelöst werden ([#7751](https://github.com/nocobase/nocobase/pull/7751)) von @gchust

  - Problem mit Seitenanfrageparametern nach dem Löschen von Daten auf der letzten Seite behoben ([#7755](https://github.com/nocobase/nocobase/pull/7755)) von @katherinehhh

- **[Server]** Pub-Sub-Kanal nach App-Namen isoliert ([#7762](https://github.com/nocobase/nocobase/pull/7762)) von @mytharcher

- **[Block: GridCard]** Problem mit doppelten Daten zwischen Listen- und GridCard-Block behoben ([#7773](https://github.com/nocobase/nocobase/pull/7773)) von @katherinehhh

- **[Multi-App-Manager (veraltet)]** Falsche Sammlung für die Statusmetrik von Subanwendungen ([#7772](https://github.com/nocobase/nocobase/pull/7772)) von @2013xile

- **[Workflow]**
  - Ein Problem behoben, bei dem der Workflow-Dispatcher im Cluster-Modus Leerlaufzustände nicht korrekt identifizierte, was zu unnötigem Verbrauch von Warteschlangenereignissen führen konnte, bevor das Plugin bereit war ([#7768](https://github.com/nocobase/nocobase/pull/7768)) von @mytharcher

  - Ein Problem behoben, bei dem im Service-Splitting-Modus die manuelle Ausführung eines Workflows mit einem Unterbrechungsknoten im Status "Ausstehend" hängen blieb ([#7767](https://github.com/nocobase/nocobase/pull/7767)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Fehler beim Duplizieren eines Genehmigungs-Workflows behoben von @mytharcher

  - Das Erstellen von Genehmigungsknoten in parallelen Zweigen wird nicht mehr unterstützt, um Probleme durch den Prozessstatus zu vermeiden von @mytharcher

- **[E-Mail-Manager]**
  - Synchronisationsprotokolle hinzugefügt von @jiannx

  - Migration für Indizes hinzugefügt von @jiannx
