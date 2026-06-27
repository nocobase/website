---
title: "NocoBase v2.0.11: Unterstützung benutzerdefinierter Kontextdaten zur Übergabe von Variablen an benutzerdefinierte Aktionsauslöser in Unterabläufen"
description: "Versionshinweise zu v2.0.11"
---

### 🎉 Neue Funktionen

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Unterstützung für benutzerdefinierte Kontextdaten zur Übergabe von Variablen an den benutzerdefinierten Aktions-Trigger in Unter-Workflows ([#8758](https://github.com/nocobase/nocobase/pull/8758)) von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Zeigt eine Hinweismeldung an, wenn für den Bearbeitungsformular-Block oder den Detail-Block keine Daten verfügbar sind. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) von @gchust

- **[Flow-Engine]** Ein Problem behoben, bei dem neuer RunJS-Code Variablenausdrücke vor der Ausführung analysierte. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) von @gchust

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebt, dass die Popup-Link-Navigation nach dem Schließen der Ansicht zurückgesetzt wurde ([#8752](https://github.com/nocobase/nocobase/pull/8752)) von @zhangzhonghe

  - Das Hinzufügen von Blöcken für viele-zu-viele (Array) verknüpfte Datensätze wurde deaktiviert, um Fehler zu vermeiden. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) von @gchust

  - Ein Problem behoben, bei dem der ursprüngliche Datenblock nach dem Bearbeiten von Daten im Popup des Verknüpfungsfeldes nicht aktualisiert wurde. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) von @gchust

  - Behebt das Abschneiden von Tabs und stellt eine minimale Tab-Breite im Designmodus sicher ([#8771](https://github.com/nocobase/nocobase/pull/8771)) von @zhangzhonghe

  - Behebt die Validierung für verknüpfungs-versteckte Pflichtfelder im Konfigurationsmodus ([#8773](https://github.com/nocobase/nocobase/pull/8773)) von @zhangzhonghe

  - Behebt verzögerte UI-Updates beim Ausblenden von Unterspalten und aufeinanderfolgendem Löschen von Spalten ([#8755](https://github.com/nocobase/nocobase/pull/8755)) von @zhangzhonghe

  - Behebt, dass zwei Pflichtvalidierungen im Aktualisierungsdatensatz-Formular erscheinen ([#8761](https://github.com/nocobase/nocobase/pull/8761)) von @jiannx

- **[Datenbank]**
  - Fehlende Option 'Einfache Paginierung' in der Ansichtsvorlage der Sammlung behoben. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) von @cgyrock

  - Die Genauigkeits-Validierungsregel für numerische Felder wirkt nicht ([#8768](https://github.com/nocobase/nocobase/pull/8768)) von @2013xile

- **[Undefiniert]** Ein Problem behoben, bei dem das System nach einem Upgrade meldete, dass plugin-block-reference nicht gefunden werden konnte. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) von @gchust

- **[Aktion: Datensätze exportieren]** Problem behoben, bei dem numerische Felder in Excel-Dateien als Zeichenfolgen angezeigt wurden ([#8774](https://github.com/nocobase/nocobase/pull/8774)) von @cgyrock

- **[Block: Liste]** Problem behoben, bei dem Felder des Listenblocks die Variable des aktuellen Datensatzes nicht verwenden konnten. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) von @gchust

- **[Workflow]** Problem behoben, bei dem der Drag-Platzhalter für Knoten fälschlicherweise beim Ziehen von Blöcken im Genehmigungsknoten angezeigt wurde ([#8763](https://github.com/nocobase/nocobase/pull/8763)) von @mytharcher

- **[UI-Vorlagen]**
  - Ein Problem behoben, bei dem die Wiederverwendung der aktuellen Datensatz-Blockvorlage für Detail- und Bearbeitungsformular-Blöcke dazu führen konnte, dass Daten nicht korrekt geladen wurden. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) von @gchust

  - Ein Problem behoben, bei dem Änderungen an Eigenschaften im Ereignisablauf eines Vorlagenblocks nicht wirksam wurden. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) von @gchust

- **[Datenquelle: Haupt]**
  - Aktualisierung des Standardwerts eines JSON-Feldes wirkt nicht ([#8767](https://github.com/nocobase/nocobase/pull/8767)) von @2013xile

  - Synchronisationsfehler bei Feldern ([#8766](https://github.com/nocobase/nocobase/pull/8766)) von @2013xile

- **[KI-Mitarbeiter]**
  - Probleme behoben, bei denen dashscope/deepseek/kimi hochgeladene Dokumentdateien nicht lesen konnten. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) von @cgyrock

  - Fehler bei Tool-Aufrufen bei Verwendung des Deepseek-Argumentationsmodells behoben. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) von @cgyrock

- **[Multi-Space]** Behebt den Berechtigungsfehler beim Erstellen von Daten mit dem Primärschlüssel von @jiannx
