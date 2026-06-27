---
title: "NocoBase v2.1.0-alpha.8: Update des KI-Chatbox-Benutzer-Prompts"
description: "Versionshinweise zu v2.1.0-alpha.8"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Trigger-Workflow-Button zur Konfiguration des Ablaufs nach Erfolg ([#8726](https://github.com/nocobase/nocobase/pull/8726)) von @mytharcher

- **[Sammlungsfeld: Code]** Feld-Code unterstützt 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) von @jiannx

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Unterstützung für benutzerdefinierte Kontextdaten zur Übergabe von Variablen an den benutzerdefinierten Aktions-Trigger in Unter-Workflows ([#8758](https://github.com/nocobase/nocobase/pull/8758)) von @mytharcher

- **[KI-Mitarbeiter]** Aktualisierung des KI-Chatbox-Benutzer-Prompts ([#8725](https://github.com/nocobase/nocobase/pull/8725)) von @heziqiang

### 🚀 Verbesserungen

- **[Client]**
  - Anzeige einer Hinweismeldung, wenn für den Bearbeitungsformular-Block oder den Detail-Block keine Daten verfügbar sind. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) von @gchust

  - Refaktorierung der Admin-Layout-Einstellungen und der Anwendung zur Modellierung der Host-Architektur mit Kompatibilitätssicherungen für v1 und v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) von @zhangzhonghe

  - Unterstützung für Zusammenfassungskonfiguration für Tabellen ([#8721](https://github.com/nocobase/nocobase/pull/8721)) von @chenos

- **[Flow-Engine]** Behoben: Ein Problem, bei dem neuer RunJS-Code Variablenausdrücke vor der Ausführung parst. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) von @gchust

- **[Workflow]** Alle Knotentypen im Hinzufügemenü anzeigen, auch wenn sie nicht verfügbar sind ([#8828](https://github.com/nocobase/nocobase/pull/8828)) von @mytharcher

- **[Aktion: Benutzerdefinierte Anfrage]** Event-Streaming unterstützt benutzerdefinierte Anfragen ([#8749](https://github.com/nocobase/nocobase/pull/8749)) von @jiannx

- **[KI-Mitarbeiter]** Aktualisierung des KI-Chatbox-Benutzer-Prompts ([#8717](https://github.com/nocobase/nocobase/pull/8717)) von @heziqiang

- **[NocoBase einbetten]** Bereitstellung einer Sanitize-API zum Filtern von Assoziationswerten in Aktionen ([#8688](https://github.com/nocobase/nocobase/pull/8688)) von @mytharcher

- **[KI: Wissensdatenbank]** Überarbeitung der Logik zum Laden von Wissensdatenbank-Dokumenten. von @cgyrock

- **[Redis-Sperradapter]** Refaktorierung aufgrund von API-Änderungen des LockManagers im Haupt-Repository von @mytharcher

- **[Backup-Manager]** Hinzufügen einer Sperre für geplante Backups über Cluster-Knoten hinweg von @mytharcher

- **[Migrations-Manager]** Verbesserte Migrationsprüfungen, SQL-Download-Unterstützung, Protokollformatierung und Sichtbarkeit des Ausführungsprozesses von @cgyrock

### 🐛 Fehlerbehebungen

- **[Undefiniert]** Behoben: Ein Problem, bei dem das System nach einem Upgrade meldete, dass plugin-block-reference nicht gefunden werden konnte. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) von @gchust

- **[Client]**
  - Unterformular- und Untertabellendaten werden aufgrund einer Berechtigungsprüfung nicht angezeigt ([#8846](https://github.com/nocobase/nocobase/pull/8846)) von @chenos

  - Behebung des Problems, dass der v2-Filterformular-Einklappbutton nach dem Sortieren von Feldern nicht mehr funktioniert ([#8843](https://github.com/nocobase/nocobase/pull/8843)) von @zhangzhonghe

  - Behebung des Problems, dass benutzerdefinierte Felder in den Feldwerten des Filterformulars nicht den korrekten Werteingabetyp rendern können ([#8823](https://github.com/nocobase/nocobase/pull/8823)) von @zhangzhonghe

  - Behoben: Das Problem, dass auf der Verwaltungsseite der Referenzvorlage (v1) die Filter- und Aktualisierungsaktion fehlte. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) von @gchust

  - Behoben: Das Problem, dass der Detailblock einer SQL-Sammlung beim Laden von Daten einen Fehler verursachte. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) von @gchust

  - Behoben: Das Problem, dass die Feldverknüpfungsregeln im Detailblock beim initialen Rendern nicht wirksam wurden. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) von @gchust

  - V2-Blöcke zeigen jetzt nur noch Aktionen an, die von der aktuellen Datenquelle unterstützt werden ([#8803](https://github.com/nocobase/nocobase/pull/8803)) von @zhangzhonghe

  - Behebung eines Stilproblems des Zurück-Buttons auf v2-Unterseiten ([#8810](https://github.com/nocobase/nocobase/pull/8810)) von @zhangzhonghe

  - Behebung, dass die Popup-Link-Navigation nach dem Schließen der Ansicht zurückgesetzt wurde ([#8752](https://github.com/nocobase/nocobase/pull/8752)) von @zhangzhonghe

  - Behebung der Validierung für durch Verknüpfung ausgeblendete Pflichtfelder im Konfigurationsmodus ([#8773](https://github.com/nocobase/nocobase/pull/8773)) von @zhangzhonghe

  - Behebung von Tab-Beschneidungen und Sicherstellung einer minimalen Tab-Breite im Entwurfsmodus ([#8771](https://github.com/nocobase/nocobase/pull/8771)) von @zhangzhonghe

  - Behebung verzögerter UI-Updates für den Ausblend-Umschalter von Unterspalten und aufeinanderfolgende Spaltenlöschungen ([#8755](https://github.com/nocobase/nocobase/pull/8755)) von @zhangzhonghe

  - Behoben: Ein Problem, bei dem der ursprüngliche Datenblock nach dem Bearbeiten von Daten im Assoziationsfeld-Popup nicht aktualisiert wurde. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) von @gchust

  - Das Hinzufügen von Blöcken für viele-zu-viele (Array) verknüpfte Datensätze wurde deaktiviert, um Fehler zu vermeiden. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) von @gchust

  - Behoben: Ein Problem, bei dem der Datenblock beim Wechseln von Menüs nicht aktualisiert wurde. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) von @gchust

  - Behebung des Problems, dass die CollectionField-Komponente in der DefaultValue-Komponente nicht rendert ([#8744](https://github.com/nocobase/nocobase/pull/8744)) von @mytharcher

  - Behebung, dass zwei Pflichtfeld-Validierungen im Aktualisierungsdatensatzformular erscheinen ([#8761](https://github.com/nocobase/nocobase/pull/8761)) von @jiannx

- **[Server]**
  - Behoben: Das Fehlerproblem bei Datenabfragen von Nicht-Datenbank-Datenquellen ([#8776](https://github.com/nocobase/nocobase/pull/8776)) von @cgyrock

  - Behebung von Cache-Problemen durch Anhängen eines Hashs an Assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) von @chenos

- **[Lock-Manager]** Behebung eines Wettlaufsbedingungsproblems des Lock-Managers ([#8734](https://github.com/nocobase/nocobase/pull/8734)) von @mytharcher

- **[Datenbank]**
  - Behoben: Fehlende Option 'Einfache Paginierung' in der Ansichtsvorlage der Sammlung. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) von @cgyrock

  - Die Genauigkeitsvalidierungsregel für numerische Felder wird nicht wirksam ([#8768](https://github.com/nocobase/nocobase/pull/8768)) von @2013xile

  - Behebung des Fehlschlags der benutzerdefinierten Feld-RegEx-Prüfung in v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) von @jiannx

- **[Flow-Engine]** Behoben: Ein Problem, bei dem ctx.exit die Ausführung von benutzerdefinierten Ereignisflüssen nicht beenden konnte. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) von @gchust

- **[Zugriffskontrolle]**
  - Verwendung von collection.filterTargetKey anstelle von Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) von @chenos

  - Behoben: Datenänderungsfehler der Restful-API-Datenquelle. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) von @cgyrock

  - Die beim Setzen von ACL-Metadaten verwendete Datenbankinstanz ist falsch ([#8747](https://github.com/nocobase/nocobase/pull/8747)) von @2013xile

- **[UI-Vorlagen]**
  - Behoben: Das Problem, dass Assoziationsdatensätze nach dem Speichern des Detailblocks als Vorlage nicht korrekt geladen werden konnten. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) von @gchust

  - Behoben: Der Renderfehler für den Aktionsbereich-Referenzblock. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) von @gchust

  - Behoben: Das Problem, dass der Referenzblock-Ereignisfluss im Tabellenblock nicht mit einem Zeilenklick-Ereignisfluss konfiguriert werden konnte. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) von @gchust

  - Behoben: Ein Problem, bei dem die Wiederverwendung der aktuellen Datensatzblockvorlage für Detail- und Bearbeitungsformularblöcke dazu führen konnte, dass Daten nicht korrekt geladen wurden. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) von @gchust

  - Behoben: Ein Problem, bei dem Änderungen an Eigenschaften im Ereignisfluss eines Vorlagenblocks nicht wirksam wurden. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) von @gchust

- **[Office-Dateivorschau]** Änderung der Modalhöhe auf einen angemessenen Wert, um mehr Dateiinhalte anzuzeigen ([#8835](https://github.com/nocobase/nocobase/pull/8835)) von @mytharcher

- **[Aktion: Datensätze exportieren]**
  - Behoben: Problem, dass das Feld belongsToArray im exportierten Excel leer war ([#8787](https://github.com/nocobase/nocobase/pull/8787)) von @cgyrock

  - Behoben: Das Problem, dass numerische Felder in Excel-Dateien als Zeichenfolgen angezeigt wurden ([#8774](https://github.com/nocobase/nocobase/pull/8774)) von @cgyrock

- **[Workflow]** Behebung des Problems, dass der Knoten-Drag-Platzhalter beim Ziehen von Blöcken im Genehmigungsknoten falsch angezeigt wird ([#8763](https://github.com/nocobase/nocobase/pull/8763)) von @mytharcher

- **[Block: Liste]** Behoben: Ein Problem, bei dem Listenblockfelder die aktuelle Datensatzvariable nicht verwenden konnten. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) von @gchust

- **[Datenquelle: Haupt]**
  - Die Aktualisierung des Standardwerts eines JSON-Feldes wird nicht wirksam ([#8767](https://github.com/nocobase/nocobase/pull/8767)) von @2013xile

  - Fehler bei der Feldsynchronisation ([#8766](https://github.com/nocobase/nocobase/pull/8766)) von @2013xile

- **[KI-Mitarbeiter]**
  - Behoben: Probleme, dass dashscope/deepseek/kimi hochgeladene Dokumentdateien nicht lesen konnten. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) von @cgyrock

  - Behoben: Tool-Call-Fehler bei Verwendung des deepseek-Reasoning-Modells. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) von @cgyrock

  - Behoben: KI-Mitarbeiter-Chat-Fehler bei aktivierter Wissensdatenbank ([#8746](https://github.com/nocobase/nocobase/pull/8746)) von @cgyrock

  - Behoben: Rendering-Problem der KI-Datenquellenkonfiguration. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) von @cgyrock

  - Behebung des Problems, dass KI-Nachrichten mit der Länge 0 gerendert werden ([#8723](https://github.com/nocobase/nocobase/pull/8723)) von @heziqiang

- **[Flow-Engine]** Behebung des SQL-Destroy-Fehlers ([#8745](https://github.com/nocobase/nocobase/pull/8745)) von @chenos

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebung des Problems, dass der benutzerdefinierte Aktions-Workflow hängt, wenn er als Unter-Workflow ausgeführt wird ([#8738](https://github.com/nocobase/nocobase/pull/8738)) von @mytharcher

- **[Workflow: JavaScript]** Behebung, dass Testfälle unter Windows nicht bestanden werden können ([#8722](https://github.com/nocobase/nocobase/pull/8722)) von @mytharcher

- **[Datenvisualisierung]** Behebung der i18n für den Plugin-Diagramm-Eintragstext ([#8716](https://github.com/nocobase/nocobase/pull/8716)) von @heziqiang

- **[Multi-Space]** Behebung des Bereichsberechtigungsfehlers beim Erstellen von Daten mit dem Primärschlüssel von @jiannx

- **[Vorlagendruck]** Behebung des Problems, dass die ACL-API geändert wurde, aber nicht an das Plugin angepasst ist von @mytharcher

- **[Workflow: Genehmigung]**
  - Behebung des Problems, dass Bearbeiter nicht der im Knoten konfigurierten Reihenfolge folgen von @mytharcher

  - Behebung des Problems, dass Abfrageergebnisse aufgrund von nach Typ gefilterten Knoten nicht angezeigt werden von @mytharcher

  - Behebung des Problems, dass der Parameter appends durch ACL gefiltert wird von @mytharcher

  - Behebung des ACL-Problems, dass Assoziationswerte nicht erstellt oder aktualisiert werden sollten, wenn der Benutzer keine Berechtigung hat von @mytharcher

  - Hinzufügen eines fehlenden Parameters, um zu vermeiden, dass Assoziationen beim Einreichen einer neuen Genehmigung nicht aktualisiert werden von @mytharcher

  - Behebung unübersetzter Labels in den Genehmigungsverarbeitungsdetails von @zhangzhonghe

  - Behebung eines Fehlers, der durch fehlenden Wert von `dataAfter` beim Hinzufügen oder Delegieren verursacht wurde von @mytharcher

  - Bereinigung von Assoziationswerten in Genehmigungsaktionen, um jegliche Datenmanipulation außerhalb der Berechtigung zu vermeiden von @mytharcher

  - Behebung des Problems, dass ein Fehler ausgelöst wird, wenn der Genehmigungs-Workflow manuell ausgeführt wird von @mytharcher

  - Bereinigung von Assoziationswerten in Genehmigungsaktionen, um jegliche Datenmanipulation außerhalb der Berechtigung zu vermeiden von @mytharcher

- **[E-Mail-Manager]** Behebung der Formatparsung der Bildinhalts-ID von @jiannx

- **[Migrations-Manager]**
  - Behebung der fehlenden Migrationsbeschreibung und Setzen der aktuellen Zeit als Standard von @cgyrock

  - Behebung des Build-Fehlers von @mytharcher

  - Anpassung des temporären Verzeichnisses in den Speicher, um die Nutzung im Cluster-Modus zu unterstützen von @mytharcher

  - Behoben: Ein potenzielles Einfrieren des Prozesses, das durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen verursacht wurde von @cgyrock
