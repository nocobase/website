---
title: "NocoBase v2.1.0-beta.8: Unterstützung für Trigger-Workflow-Button zur Konfiguration des Ablaufs nach Erfolg"
description: "Versionshinweise zu v2.1.0-beta.8"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Trigger-Workflow-Button zur Konfiguration des Ablaufs nach Erfolg ([#8726](https://github.com/nocobase/nocobase/pull/8726)) von @mytharcher

- **[Sammlungsfeld: Code]** Feld-Code unterstützt 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) von @jiannx

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Unterstützung für benutzerdefinierte Kontextdaten zur Übergabe von Variablen an benutzerdefinierte Aktionsauslöser in Unter-Workflows ([#8758](https://github.com/nocobase/nocobase/pull/8758)) von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Zeigt eine Hinweismeldung an, wenn für den Bearbeitungsformular-Block oder den Detail-Block keine Daten verfügbar sind. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) von @gchust

- **[Flow-Engine]** Ein Problem behoben, bei dem neuer runjs-Code Variablenausdrücke vor der Ausführung parst. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) von @gchust

- **[Workflow]** Zeigt alle Knotentypen im Hinzufügemenü an, auch wenn sie nicht verfügbar sind ([#8828](https://github.com/nocobase/nocobase/pull/8828)) von @mytharcher

- **[Aktion: Benutzerdefinierte Anfrage]** Event-Streaming unterstützt benutzerdefinierte Anfragen ([#8749](https://github.com/nocobase/nocobase/pull/8749)) von @jiannx

- **[KI: Wissensdatenbank]** Überarbeitete Logik zum Laden von Wissensdatenbank-Dokumenten. von @cgyrock

- **[Redis-Sperradapter]** Überarbeitung aufgrund geänderter API von LockManager im Haupt-Repository von @mytharcher

- **[Backup-Manager]** Sperre für geplante Backups über Cluster-Knoten hinweg hinzugefügt von @mytharcher

- **[Migrations-Manager]** Verbesserte Migrationsprüfungen, SQL-Download-Unterstützung, Log-Formatierung und Sichtbarkeit des Ausführungsprozesses von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**
  - Unterformular- und Untertabellendaten werden aufgrund einer Berechtigungsprüfung nicht angezeigt ([#8846](https://github.com/nocobase/nocobase/pull/8846)) von @chenos

  - Problem behoben, bei dem der Einklapp-Button des v2-Filterformulars nach dem Sortieren von Feldern nicht mehr funktioniert ([#8843](https://github.com/nocobase/nocobase/pull/8843)) von @zhangzhonghe

  - Problem behoben, bei dem benutzerdefinierte Felder in Filterformular-Feldwerten nicht den korrekten Werteingabetyp rendern können ([#8823](https://github.com/nocobase/nocobase/pull/8823)) von @zhangzhonghe

  - Problem behoben, bei dem auf der Verwaltungsseite der Referenzvorlage (v1) die Filter- und Aktualisierungsaktion fehlte. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) von @gchust

  - Problem behoben, bei dem der Detailblock einer SQL-Sammlung beim Laden von Daten auf einen Fehler stieß. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) von @gchust

  - Problem behoben, bei dem die Feldverknüpfungsregeln im Detailblock beim initialen Rendern nicht wirksam wurden. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) von @gchust

  - Styling-Problem des Zurück-Buttons auf v2-Unterseiten behoben ([#8810](https://github.com/nocobase/nocobase/pull/8810)) von @zhangzhonghe

  - V2-Blöcke zeigen jetzt nur noch Aktionen an, die von der aktuellen Datenquelle unterstützt werden ([#8803](https://github.com/nocobase/nocobase/pull/8803)) von @zhangzhonghe

  - Validierung für verknüpfungsversteckte Pflichtfelder im Konfigurationsmodus behoben ([#8773](https://github.com/nocobase/nocobase/pull/8773)) von @zhangzhonghe

  - Tab-Beschneidung behoben und minimale Tab-Breite im Entwurfsmodus sichergestellt ([#8771](https://github.com/nocobase/nocobase/pull/8771)) von @zhangzhonghe

  - Verzögerte UI-Updates für den Spaltenausblend-Umschalter in Untertabellen und aufeinanderfolgende Spaltenlöschung behoben ([#8755](https://github.com/nocobase/nocobase/pull/8755)) von @zhangzhonghe

  - Hinzufügen von Blöcken für viele-zu-viele (Array) verknüpfte Datensätze deaktiviert, um Fehler zu vermeiden. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) von @gchust

  - Problem behoben, bei dem die Popup-Link-Navigation nach dem Schließen der Ansicht rückgängig gemacht wurde ([#8752](https://github.com/nocobase/nocobase/pull/8752)) von @zhangzhonghe

  - Problem behoben, bei dem der ursprüngliche Datenblock nach dem Bearbeiten von Daten im Verknüpfungsfeld-Popup nicht aktualisiert wurde. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) von @gchust

  - Problem behoben, dass zwei Pflichtvalidierungen im Aktualisierungsdatensatzformular erscheinen ([#8761](https://github.com/nocobase/nocobase/pull/8761)) von @jiannx

- **[Server]** Fehlerproblem bei Datenabfragen von Nicht-Datenbank-Datenquellen behoben ([#8776](https://github.com/nocobase/nocobase/pull/8776)) von @cgyrock

- **[Lock-Manager]** Wettlaufsituation im Lock-Manager behoben ([#8734](https://github.com/nocobase/nocobase/pull/8734)) von @mytharcher

- **[Datenbank]**
  - Fehlende Option 'Einfache Paginierung' in der Ansichtsvorlage der Sammlung behoben. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) von @cgyrock

  - Die Genauigkeitsvalidierungsregel für numerische Felder wird nicht wirksam ([#8768](https://github.com/nocobase/nocobase/pull/8768)) von @2013xile

- **[Undefiniert]** Problem behoben, bei dem das System nach einem Upgrade meldete, dass plugin-block-reference nicht gefunden werden konnte. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) von @gchust

- **[Zugriffskontrolle]**
  - Verwendung von collection.filterTargetKey anstelle von Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) von @chenos

  - Fehler bei der Datenänderung der Restful-API-Datenquelle behoben. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) von @cgyrock

- **[UI-Vorlagen]**
  - Problem behoben, bei dem Verknüpfungsdatensätze nach dem Speichern des Detailblocks als Vorlage nicht korrekt geladen werden konnten. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) von @gchust

  - Renderfehler für den Aktionspanel-Referenzblock behoben. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) von @gchust

  - Problem behoben, bei dem der Ereignisablauf des Referenzblocks im Tabellenblock nicht mit einem Zeilenklick-Ereignisablauf konfiguriert werden konnte. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) von @gchust

  - Problem behoben, bei dem die Wiederverwendung der aktuellen Datensatzblockvorlage für den Detailblock und den Bearbeitungsformularblock dazu führen konnte, dass Daten nicht korrekt geladen werden. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) von @gchust

  - Problem behoben, bei dem Änderungen an Props im Ereignisablauf eines Vorlagenblocks nicht wirksam wurden. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) von @gchust

- **[Office-Dateivorschau]** Modale Höhe auf einen geeigneten Wert geändert, um mehr Dateiinhalte anzuzeigen ([#8835](https://github.com/nocobase/nocobase/pull/8835)) von @mytharcher

- **[Aktion: Datensätze exportieren]**
  - Problem behoben, dass das belongsToArray-Feld im exportierten Excel leer war ([#8787](https://github.com/nocobase/nocobase/pull/8787)) von @cgyrock

  - Problem behoben, bei dem numerische Felder in Excel-Dateien als Zeichenfolgen angezeigt wurden ([#8774](https://github.com/nocobase/nocobase/pull/8774)) von @cgyrock

- **[Block: Liste]** Problem behoben, bei dem Listenblockfelder die aktuelle Datensatzvariable nicht verwenden konnten. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) von @gchust

- **[Datenquelle: Haupt]**
  - Aktualisierung des Standardwerts eines JSON-Feldes wird nicht wirksam ([#8767](https://github.com/nocobase/nocobase/pull/8767)) von @2013xile

  - Feldsynchronisationsfehler ([#8766](https://github.com/nocobase/nocobase/pull/8766)) von @2013xile

- **[Workflow]** Problem behoben, bei dem der Knoten-Ziehplatzhalter beim Ziehen von Blöcken im Genehmigungsknoten falsch angezeigt wird ([#8763](https://github.com/nocobase/nocobase/pull/8763)) von @mytharcher

- **[KI-Mitarbeiter]**
  - Tool-Aufruffehler bei Verwendung des DeepSeek-Argumentationsmodells behoben. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) von @cgyrock

  - Probleme behoben, bei denen dashscope/deepseek/kimi hochgeladene Dokumentdateien nicht lesen konnten. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) von @cgyrock

- **[Multi-Space]** Berechtigungsfehler beim Erstellen von Daten mit dem Primärschlüssel behoben von @jiannx

- **[Workflow: Genehmigung]**
  - Unübersetzte Labels in den Genehmigungsverarbeitungsdetails behoben von @zhangzhonghe

  - Problem behoben, bei dem Bearbeiter nicht der im Knoten konfigurierten Reihenfolge folgten von @mytharcher

- **[Migrations-Manager]**
  - Potenzielles Einfrieren des Prozesses durch Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen behoben von @cgyrock

  - Build-Fehler behoben von @mytharcher

  - Fehlende Migrationsbeschreibung behoben und aktuelle Zeit als Standard gesetzt von @cgyrock

  - Temporäres Verzeichnis in den Speicher verschoben, um die Nutzung im Cluster-Modus zu unterstützen von @mytharcher
