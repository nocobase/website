---
title: "Wöchentliche Updates｜KI-Chatbox-Benutzeraufforderung aktualisiert"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 6. bis 12. März 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.15](https://www.nocobase.com/en/blog/v2.0.15)

*Veröffentlichungsdatum: 12.03.2026*

### 🐛 Fehlerbehebungen

- **[E-Mail-Manager]** Anpassungen der Empfänger für Antworten und Allen Antworten, Behebung von Problemen wie fehlgeschlagenem Hinzufügen von Tabellenfeldern durch @jiannx
- **[Migrations-Manager]** Behebung des Problems, dass Systemtabellen in benutzerdefinierten Regeln nicht ausgewählt werden konnten durch @cgyrock

### [v2.0.14](https://www.nocobase.com/en/blog/v2.0.14)

*Veröffentlichungsdatum: 12.03.2026*

### 🚀 Verbesserungen

- **[Migrations-Manager]** Verbesserte Migrationsprüfungen, SQL-Download-Unterstützung, Protokollformatierung und Sichtbarkeit des Ausführungsprozesses durch @cgyrock

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebung des Problems, dass benutzerdefinierte Felder in den Feldwerten des Filterformulars nicht den korrekten Werteingabetyp rendern ([#8823](https://github.com/nocobase/nocobase/pull/8823)) von @zhangzhonghe
  - Behebung des Problems, dass die Schaltfläche zum Einklappen des v2-Filterformulars nach dem Sortieren von Feldern nicht mehr funktioniert ([#8843](https://github.com/nocobase/nocobase/pull/8843)) von @zhangzhonghe
  - Behebung des Problems, dass auf der Verwaltungsseite der Referenzvorlage (v1) die Filter- und Aktualisierungsaktion fehlte. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) von @gchust
  - Unterformular- und Untertabellendaten werden aufgrund einer Berechtigungsprüfung nicht angezeigt ([#8846](https://github.com/nocobase/nocobase/pull/8846)) von @chenos
- **[Zugriffskontrolle]** Verwendung von collection.filterTargetKey anstelle von Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) von @chenos
- **[UI-Vorlagen]**

  - Behebung des Renderfehlers für den Aktionsbereich-Referenzblock. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) von @gchust
  - Behebung des Problems, dass Assoziationsdatensätze nach dem Speichern des Detailblocks als Vorlage nicht korrekt geladen werden konnten. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) von @gchust
- **[Workflow: Genehmigung]**

  - Behebung des Problems, dass die Bearbeiter nicht der im Knoten konfigurierten Reihenfolge folgen von @mytharcher
  - Behebung von nicht übersetzten Bezeichnungen in den Genehmigungsverarbeitungsdetails von @zhangzhonghe
- **[Migrations-Manager]**

  - Behebung des Build-Fehlers von @mytharcher
  - Behebung der fehlenden Migrationsbeschreibung und Setzen der aktuellen Zeit als Standard von @cgyrock
  - Behebung eines potenziellen Prozessstillstands, der durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen verursacht wurde von @cgyrock
  - Verschiebung des temporären Verzeichnisses in den Speicher, um die Nutzung im Cluster-Modus zu unterstützen von @mytharcher

### [v2.0.13](https://www.nocobase.com/en/blog/v2.0.13)

*Veröffentlichungsdatum: 10.03.2026*

### 🎉 Neue Funktionen

- **[client]** Unterstützung für die Konfiguration des Ablaufs nach erfolgreichem Abschluss für die Schaltfläche „Workflow auslösen“ ([#8726](https://github.com/nocobase/nocobase/pull/8726)) von @mytharcher

### 🚀 Verbesserungen

- **[Workflow]** Alle Knotentypen im Hinzufügemenü anzeigen, auch wenn sie nicht verfügbar sind ([#8828](https://github.com/nocobase/nocobase/pull/8828)) von @mytharcher
- **[KI: Wissensdatenbank]** Überarbeitete Logik zum Laden von Wissensdatenbankdokumenten. von @cgyrock

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebung des Problems, dass der Detailblock einer SQL-Sammlung beim Laden von Daten einen Fehler verursachte. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) von @gchust
  - Behebung des Problems, dass die Feldverknüpfungsregeln im Detailblock beim ersten Rendern nicht wirksam wurden. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) von @gchust
- **[Office-Dateivorschau]** Änderung der Modalhöhe auf einen geeigneten Wert, um mehr Dateiinhalte anzuzeigen ([#8835](https://github.com/nocobase/nocobase/pull/8835)) von @mytharcher
- **[UI-Vorlagen]** Behebung des Problems, dass der Ereignisfluss des Referenzblocks im Tabellenblock nicht mit einem Zeilenklick-Ereignisfluss konfiguriert werden konnte. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) von @gchust

### [v2.0.12](https://www.nocobase.com/en/blog/v2.0.12)

*Veröffentlichungsdatum: 09.03.2026*

### 🚀 Verbesserungen

- **[Redis Lock Adapter]** Refactoring aufgrund geänderter API von LockManager im Haupt-Repository von @mytharcher
- **[Backup-Manager]** Hinzufügen einer Sperre für geplante Backups über Cluster-Knoten hinweg von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - V2-Blöcke zeigen jetzt nur noch Aktionen an, die von der aktuellen Datenquelle unterstützt werden ([#8803](https://github.com/nocobase/nocobase/pull/8803)) von @zhangzhonghe
  - Behebung eines Stilproblems der Zurück-Schaltfläche auf v2-Unterseiten ([#8810](https://github.com/nocobase/nocobase/pull/8810)) von @zhangzhonghe
- **[lock-manager]** Behebung eines Wettlaufsbedingungsproblems des Lock-Managers ([#8734](https://github.com/nocobase/nocobase/pull/8734)) von @mytharcher
- **[server]** Behebung des Fehlerproblems bei Datenabfragen von Nicht-Datenbank-Datenquellen ([#8776](https://github.com/nocobase/nocobase/pull/8776)) von @cgyrock
- **[Zugriffskontrolle]** Behebung des Datenänderungsfehlers der Restful-API-Datenquelle. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) von @cgyrock
- **[Aktion: Datensätze exportieren]** Behebung des Problems, dass das belongsToArray-Feld im exportierten Excel leer ist ([#8787](https://github.com/nocobase/nocobase/pull/8787)) von @cgyrock

### [v2.0.11](https://www.nocobase.com/en/blog/v2.0.11)

*Veröffentlichungsdatum: 06.03.2026*

### 🎉 Neue Funktionen

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Unterstützung für benutzerdefinierte Kontextdaten zur Übergabe von Variablen an den benutzerdefinierten Aktions-Trigger im Unter-Workflow ([#8758](https://github.com/nocobase/nocobase/pull/8758)) von @mytharcher

### 🚀 Verbesserungen

- **[client]** Anzeige einer Hinweismeldung, wenn für den Bearbeitungsformularblock oder den Detailblock keine Daten verfügbar sind. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) von @gchust
- **[flow-engine]** Behebung eines Problems, bei dem neuer runjs-Code Variablenausdrücke vor der Ausführung analysierte. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) von @gchust

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebung, dass die Popup-Link-Navigation nach dem Schließen der Ansicht rückgängig gemacht wurde ([#8752](https://github.com/nocobase/nocobase/pull/8752)) von @zhangzhonghe
  - Deaktiviert das Hinzufügen von Blöcken für Viele-zu-Viele (Array) assoziierte Datensätze, um Fehler zu vermeiden. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) von @gchust
  - Behebung eines Problems, bei dem der ursprüngliche Datenblock nach dem Bearbeiten von Daten im Assoziationsfeld-Popup nicht aktualisiert wurde. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) von @gchust
  - Behebung des Tab-Beschneidens und Sicherstellung einer minimalen Tab-Breite im Design-Modus ([#8771](https://github.com/nocobase/nocobase/pull/8771)) von @zhangzhonghe
  - Behebung der Validierung für durch Verknüpfung ausgeblendete Pflichtfelder im Konfigurationsmodus ([#8773](https://github.com/nocobase/nocobase/pull/8773)) von @zhangzhonghe
  - Behebung verzögerter UI-Updates beim Umschalten der Spaltenausblendung in Untertabellen und beim aufeinanderfolgenden Löschen von Spalten ([#8755](https://github.com/nocobase/nocobase/pull/8755)) von @zhangzhonghe
  - Behebung, dass zwei Pflichtvalidierungen im Aktualisierungsdatensatzformular erscheinen ([#8761](https://github.com/nocobase/nocobase/pull/8761)) von @jiannx
- **[database]**

  - Behebung der fehlenden Option 'Einfache Paginierung' in der Ansichtsvorlage der Sammlung. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) von @cgyrock
  - Die Genauigkeitsvalidierungsregel für numerische Felder wird nicht wirksam ([#8768](https://github.com/nocobase/nocobase/pull/8768)) von @2013xile
- **[undefined]** Behebung eines Problems, bei dem das System nach einem Upgrade meldete, dass plugin-block-reference nicht gefunden werden konnte. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) von @gchust
- **[Aktion: Datensätze exportieren]** Behebung des Problems, dass numerische Felder in Excel-Dateien als Zeichenfolgen angezeigt wurden ([#8774](https://github.com/nocobase/nocobase/pull/8774)) von @cgyrock
- **[Block: Liste]** Behebung eines Problems, bei dem Listenblockfelder die aktuelle Datensatzvariable nicht verwenden konnten. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) von @gchust
- **[Workflow]** Behebung des Problems, dass der Knoten-Ziehplatzhalter beim Ziehen von Blöcken im Genehmigungsknoten fälschlicherweise angezeigt wurde ([#8763](https://github.com/nocobase/nocobase/pull/8763)) von @mytharcher
- **[UI-Vorlagen]**

  - Behebung eines Problems, bei dem die Wiederverwendung der aktuellen Datensatzblockvorlage für den Detailblock und den Bearbeitungsformularblock dazu führen konnte, dass Daten nicht korrekt geladen wurden. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) von @gchust
  - Behebung eines Problems, bei dem Änderungen an Eigenschaften im Ereignisfluss eines Vorlagenblocks nicht wirksam wurden. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) von @gchust
- **[Datenquelle: Haupt]**

  - Aktualisierung des Standardwerts eines JSON-Feldes wird nicht wirksam ([#8767](https://github.com/nocobase/nocobase/pull/8767)) von @2013xile
  - Fehler bei der Feldsynchronisation ([#8766](https://github.com/nocobase/nocobase/pull/8766)) von @2013xile
- **[KI-Mitarbeiter]**

  - Behebung von Problemen, dass dashscope/deepseek/kimi hochgeladene Dokumentdateien nicht lesen konnten. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) von @cgyrock
  - Behebung eines Tool-Aufruffsfehlers bei Verwendung des deepseek Reasoning-Modells. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) von @cgyrock
- **[Multi-Space]** Behebung des Space-Berechtigungsfehlers beim Erstellen von Daten mit dem Primärschlüssel von @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.8](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Veröffentlichungsdatum: 12.03.2026*

### 🎉 Neue Funktionen

- **[client]** Unterstützung für die Konfiguration des Ablaufs nach erfolgreichem Abschluss für die Schaltfläche „Workflow auslösen“ ([#8726](https://github.com/nocobase/nocobase/pull/8726)) von @mytharcher
- **[Sammlungsfeld: Code]** field-code unterstützt 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) von @jiannx
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Unterstützung für benutzerdefinierte Kontextdaten zur Übergabe von Variablen an den benutzerdefinierten Aktions-Trigger im Unter-Workflow ([#8758](https://github.com/nocobase/nocobase/pull/8758)) von @mytharcher

### 🚀 Verbesserungen

- **[client]** Anzeige einer Hinweismeldung, wenn für den Bearbeitungsformularblock oder den Detailblock keine Daten verfügbar sind. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) von @gchust
- **[flow-engine]** Behebung eines Problems, bei dem neuer runjs-Code Variablenausdrücke vor der Ausführung analysierte. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) von @gchust
- **[Workflow]** Alle Knotentypen im Hinzufügemenü anzeigen, auch wenn sie nicht verfügbar sind ([#8828](https://github.com/nocobase/nocobase/pull/8828)) von @mytharcher
- **[Aktion: Benutzerdefinierte Anfrage]** Event-Streaming unterstützt benutzerdefinierte Anfragen ([#8749](https://github.com/nocobase/nocobase/pull/8749)) von @jiannx
- **[KI: Wissensdatenbank]** Überarbeitete Logik zum Laden von Wissensdatenbankdokumenten. von @cgyrock
- **[Redis Lock Adapter]** Refactoring aufgrund geänderter API von LockManager im Haupt-Repository von @mytharcher
- **[Backup-Manager]** Hinzufügen einer Sperre für geplante Backups über Cluster-Knoten hinweg von @mytharcher
- **[Migrations-Manager]** Verbesserte Migrationsprüfungen, SQL-Download-Unterstützung, Protokollformatierung und Sichtbarkeit des Ausführungsprozesses durch @cgyrock

### 🐛 Fehlerbehebungen

- **[client]**

  - Unterformular- und Untertabellendaten werden aufgrund einer Berechtigungsprüfung nicht angezeigt ([#8846](https://github.com/nocobase/nocobase/pull/8846)) von @chenos
  - Behebung des Problems, dass die Schaltfläche zum Einklappen des v2-Filterformulars nach dem Sortieren von Feldern nicht mehr funktioniert ([#8843](https://github.com/nocobase/nocobase/pull/8843)) von @zhangzhonghe
  - Behebung des Problems, dass benutzerdefinierte Felder in den Feldwerten des Filterformulars nicht den korrekten Werteingabetyp rendern ([#8823](https://github.com/nocobase/nocobase/pull/8823)) von @zhangzhonghe
  - Behebung des Problems, dass auf der Verwaltungsseite der Referenzvorlage (v1) die Filter- und Aktualisierungsaktion fehlte. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) von @gchust
  - Behebung des Problems, dass der Detailblock einer SQL-Sammlung beim Laden von Daten einen Fehler verursachte. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) von @gchust
  - Behebung des Problems, dass die Feldverknüpfungsregeln im Detailblock beim ersten Rendern nicht wirksam wurden. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) von @gchust
  - Behebung eines Stilproblems der Zurück-Schaltfläche auf v2-Unterseiten ([#8810](https://github.com/nocobase/nocobase/pull/8810)) von @zhangzhonghe
  - V2-Blöcke zeigen jetzt nur noch Aktionen an, die von der aktuellen Datenquelle unterstützt werden ([#8803](https://github.com/nocobase/nocobase/pull/8803)) von @zhangzhonghe
  - Behebung der Validierung für durch Verknüpfung ausgeblendete Pflichtfelder im Konfigurationsmodus ([#8773](https://github.com/nocobase/nocobase/pull/8773)) von @zhangzhonghe
  - Behebung des Tab-Beschneidens und Sicherstellung einer minimalen Tab-Breite im Design-Modus ([#8771](https://github.com/nocobase/nocobase/pull/8771)) von @zhangzhonghe
  - Behebung verzögerter UI-Updates beim Umschalten der Spaltenausblendung in Untertabellen und beim aufeinanderfolgenden Löschen von Spalten ([#8755](https://github.com/nocobase/nocobase/pull/8755)) von @zhangzhonghe
  - Deaktiviert das Hinzufügen von Blöcken für Viele-zu-Viele (Array) assoziierte Datensätze, um Fehler zu vermeiden. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) von @gchust
  - Behebung, dass die Popup-Link-Navigation nach dem Schließen der Ansicht rückgängig gemacht wurde ([#8752](https://github.com/nocobase/nocobase/pull/8752)) von @zhangzhonghe
  - Behebung eines Problems, bei dem der ursprüngliche Datenblock nach dem Bearbeiten von Daten im Assoziationsfeld-Popup nicht aktualisiert wurde. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) von @gchust
  - Behebung, dass zwei Pflichtvalidierungen im Aktualisierungsdatensatzformular erscheinen ([#8761](https://github.com/nocobase/nocobase/pull/8761)) von @jiannx
- **[server]** Behebung des Fehlerproblems bei Datenabfragen von Nicht-Datenbank-Datenquellen ([#8776](https://github.com/nocobase/nocobase/pull/8776)) von @cgyrock
- **[lock-manager]** Behebung eines Wettlaufsbedingungsproblems des Lock-Managers ([#8734](https://github.com/nocobase/nocobase/pull/8734)) von @mytharcher
- **[database]**

  - Behebung der fehlenden Option 'Einfache Paginierung' in der Ansichtsvorlage der Sammlung. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) von @cgyrock
  - Die Genauigkeitsvalidierungsregel für numerische Felder wird nicht wirksam ([#8768](https://github.com/nocobase/nocobase/pull/8768)) von @2013xile
- **[undefined]** Behebung eines Problems, bei dem das System nach einem Upgrade meldete, dass plugin-block-reference nicht gefunden werden konnte. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) von @gchust
- **[Zugriffskontrolle]**

  - Verwendung von collection.filterTargetKey anstelle von Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) von @chenos
  - Behebung des Datenänderungsfehlers der Restful-API-Datenquelle. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) von @cgyrock
- **[UI-Vorlagen]**

  - Behebung des Problems, dass Assoziationsdatensätze nach dem Speichern des Detailblocks als Vorlage nicht korrekt geladen werden konnten. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) von @gchust
  - Behebung des Renderfehlers für den Aktionsbereich-Referenzblock. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) von @gchust
  - Behebung des Problems, dass der Ereignisfluss des Referenzblocks im Tabellenblock nicht mit einem Zeilenklick-Ereignisfluss konfiguriert werden konnte. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) von @gchust
  - Behebung eines Problems, bei dem die Wiederverwendung der aktuellen Datensatzblockvorlage für den Detailblock und den Bearbeitungsformularblock dazu führen konnte, dass Daten nicht korrekt geladen wurden. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) von @gchust
  - Behebung eines Problems, bei dem Änderungen an Eigenschaften im Ereignisfluss eines Vorlagenblocks nicht wirksam wurden. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) von @gchust
- **[Office-Dateivorschau]** Änderung der Modalhöhe auf einen geeigneten Wert, um mehr Dateiinhalte anzuzeigen ([#8835](https://github.com/nocobase/nocobase/pull/8835)) von @mytharcher
- **[Aktion: Datensätze exportieren]**

  - Behebung des Problems, dass das belongsToArray-Feld im exportierten Excel leer ist ([#8787](https://github.com/nocobase/nocobase/pull/8787)) von @cgyrock
  - Behebung des Problems, dass numerische Felder in Excel-Dateien als Zeichenfolgen angezeigt wurden ([#8774](https://github.com/nocobase/nocobase/pull/8774)) von @cgyrock
- **[Block: Liste]** Behebung eines Problems, bei dem Listenblockfelder die aktuelle Datensatzvariable nicht verwenden konnten. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) von @gchust
- **[Datenquelle: Haupt]**

  - Aktualisierung des Standardwerts eines JSON-Feldes wird nicht wirksam ([#8767](https://github.com/nocobase/nocobase/pull/8767)) von @2013xile
  - Fehler bei der Feldsynchronisation ([#8766](https://github.com/nocobase/nocobase/pull/8766)) von @2013xile
- **[Workflow]** Behebung des Problems, dass der Knoten-Ziehplatzhalter beim Ziehen von Blöcken im Genehmigungsknoten fälschlicherweise angezeigt wurde ([#8763](https://github.com/nocobase/nocobase/pull/8763)) von @mytharcher
- **[KI-Mitarbeiter]**

  - Behebung eines Tool-Aufruffsfehlers bei Verwendung des deepseek Reasoning-Modells. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) von @cgyrock
  - Behebung von Problemen, dass dashscope/deepseek/kimi hochgeladene Dokumentdateien nicht lesen konnten. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) von @cgyrock
- **[Multi-Space]** Behebung des Space-Berechtigungsfehlers beim Erstellen von Daten mit dem Primärschlüssel von @jiannx
- **[Workflow: Genehmigung]**

  - Behebung von nicht übersetzten Bezeichnungen in den Genehmigungsverarbeitungsdetails von @zhangzhonghe
  - Behebung des Problems, dass die Bearbeiter nicht der im Knoten konfigurierten Reihenfolge folgen von @mytharcher
- **[Migrations-Manager]**

  - Behebung eines potenziellen Prozessstillstands, der durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen verursacht wurde von @cgyrock
  - Behebung des Build-Fehlers von @mytharcher
  - Behebung der fehlenden Migrationsbeschreibung und Setzen der aktuellen Zeit als Standard von @cgyrock
  - Verschiebung des temporären Verzeichnisses in den Speicher, um die Nutzung im Cluster-Modus zu unterstützen von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.8](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Veröffentlichungsdatum: 12.03.2026*

### 🎉 Neue Funktionen

- **[client]** Unterstützung für die Konfiguration des Ablaufs nach erfolgreichem Abschluss für die Schaltfläche „Workflow auslösen“ ([#8726](https://github.com/nocobase/nocobase/pull/8726)) von @mytharcher
- **[Sammlungsfeld: Code]** field-code unterstützt 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) von @jiannx
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Unterstützung für benutzerdefinierte Kontextdaten zur Übergabe von Variablen an den benutzerdefinierten Aktions-Trigger im Unter-Workflow ([#8758](https://github.com/nocobase/nocobase/pull/8758)) von @mytharcher
- **[KI-Mitarbeiter]** Aktualisierung des Benutzer-Prompts der KI-Chatbox ([#8725](https://github.com/nocobase/nocobase/pull/8725)) von @heziqiang

### 🚀 Verbesserungen

- **[client]**

  - Anzeige einer Hinweismeldung, wenn für den Bearbeitungsformularblock oder den Detailblock keine Daten verfügbar sind. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) von @gchust
  - Refactoring der Admin-Layout-Einstellungen und Anwendung zur Modell-Host-Architektur mit v1-v2-Kompatibilitätssicherungen ([#8710](https://github.com/nocobase/nocobase/pull/8710)) von @zhangzhonghe
  - Unterstützung der Zusammenfassungskonfiguration für Tabellen ([#8721](https://github.com/nocobase/nocobase/pull/8721)) von @chenos
- **[flow-engine]** Behebung eines Problems, bei dem neuer runjs-Code Variablenausdrücke vor der Ausführung analysierte. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) von @gchust
- **[Workflow]** Alle Knotentypen im Hinzufügemenü anzeigen, auch wenn sie nicht verfügbar sind ([#8828](https://github.com/nocobase/nocobase/pull/8828)) von @mytharcher
- **[Aktion: Benutzerdefinierte Anfrage]** Event-Streaming unterstützt benutzerdefinierte Anfragen ([#8749](https://github.com/nocobase/nocobase/pull/8749)) von @jiannx
- **[KI-Mitarbeiter]** Aktualisierung des Benutzer-Prompts der KI-Chatbox ([#8717](https://github.com/nocobase/nocobase/pull/8717)) von @heziqiang
- **[NocoBase einbetten]** Bereitstellung einer Sanitize-API zum Filtern von Assoziationswerten in Aktionen ([#8688](https://github.com/nocobase/nocobase/pull/8688)) von @mytharcher
- **[KI: Wissensdatenbank]** Überarbeitete Logik zum Laden von Wissensdatenbankdokumenten. von @cgyrock
- **[Redis Lock Adapter]** Refactoring aufgrund geänderter API von LockManager im Haupt-Repository von @mytharcher
- **[Backup-Manager]** Hinzufügen einer Sperre für geplante Backups über Cluster-Knoten hinweg von @mytharcher
- **[Migrations-Manager]** Verbesserte Migrationsprüfungen, SQL-Download-Unterstützung, Protokollformatierung und Sichtbarkeit des Ausführungsprozesses durch @cgyrock

### 🐛 Fehlerbehebungen

- **[undefined]** Behebung eines Problems, bei dem das System nach einem Upgrade meldete, dass plugin-block-reference nicht gefunden werden konnte. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) von @gchust
- **[client]**

  - Unterformular- und Untertabellendaten werden aufgrund einer Berechtigungsprüfung nicht angezeigt ([#8846](https://github.com/nocobase/nocobase/pull/8846)) von @chenos
  - Behebung des Problems, dass die Schaltfläche zum Einklappen des v2-Filterformulars nach dem Sortieren von Feldern nicht mehr funktioniert ([#8843](https://github.com/nocobase/nocobase/pull/8843)) von @zhangzhonghe
  - Behebung des Problems, dass benutzerdefinierte Felder in den Feldwerten des Filterformulars nicht den korrekten Werteingabetyp rendern ([#8823](https://github.com/nocobase/nocobase/pull/8823)) von @zhangzhonghe
  - Behebung des Problems, dass auf der Verwaltungsseite der Referenzvorlage (v1) die Filter- und Aktualisierungsaktion fehlte. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) von @gchust
  - Behebung des Problems, dass der Detailblock einer SQL-Sammlung beim Laden von Daten einen Fehler verursachte. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) von @gchust
  - Behebung des Problems, dass die Feldverknüpfungsregeln im Detailblock beim ersten Rendern nicht wirksam wurden. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) von @gchust
  - V2-Blöcke zeigen jetzt nur noch Aktionen an, die von der aktuellen Datenquelle unterstützt werden ([#8803](https://github.com/nocobase/nocobase/pull/8803)) von @zhangzhonghe
  - Behebung eines Stilproblems der Zurück-Schaltfläche auf v2-Unterseiten ([#8810](https://github.com/nocobase/nocobase/pull/8810)) von @zhangzhonghe
  - Behebung, dass die Popup-Link-Navigation nach dem Schließen der Ansicht rückgängig gemacht wurde ([#8752](https://github.com/nocobase/nocobase/pull/8752)) von @zhangzhonghe
  - Behebung der Validierung für durch Verknüpfung ausgeblendete Pflichtfelder im Konfigurationsmodus ([#8773](https://github.com/nocobase/nocobase/pull/8773)) von @zhangzhonghe
  - Behebung des Tab-Beschneidens und Sicherstellung einer minimalen Tab-Breite im Design-Modus ([#8771](https://github.com/nocobase/nocobase/pull/8771)) von @zhangzhonghe
  - Behebung verzögerter UI-Updates beim Umschalten der Spaltenausblendung in Untertabellen und beim aufeinanderfolgenden Löschen von Spalten ([#8755](https://github.com/nocobase/nocobase/pull/8755)) von @zhangzhonghe
  - Behebung eines Problems, bei dem der ursprüngliche Datenblock nach dem Bearbeiten von Daten im Assoziationsfeld-Popup nicht aktualisiert wurde. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) von @gchust
  - Deaktiviert das Hinzufügen von Blöcken für Viele-zu-Viele (Array) assoziierte Datensätze, um Fehler zu vermeiden. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) von @gchust
  - Behebung eines Problems, bei dem der Datenblock beim Wechseln von Menüs nicht aktualisiert wurde. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) von @gchust
  - Behebung des Problems, dass die CollectionField-Komponente in der DefaultValue-Komponente nicht gerendert wird ([#8744](https://github.com/nocobase/nocobase/pull/8744)) von @mytharcher
  - Behebung, dass zwei Pflichtvalidierungen im Aktualisierungsdatensatzformular erscheinen ([#8761](https://github.com/nocobase/nocobase/pull/8761)) von @jiannx
- **[server]**

  - Behebung des Fehlerproblems bei Datenabfragen von Nicht-Datenbank-Datenquellen ([#8776](https://github.com/nocobase/nocobase/pull/8776)) von @cgyrock
  - Behebung von Cache-Problemen durch Anhängen eines Hashs an Assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) von @chenos
- **[lock-manager]** Behebung eines Wettlaufsbedingungsproblems des Lock-Managers ([#8734](https://github.com/nocobase/nocobase/pull/8734)) von @mytharcher
- **[database]**

  - Behebung der fehlenden Option 'Einfache Paginierung' in der Ansichtsvorlage der Sammlung. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) von @cgyrock
  - Die Genauigkeitsvalidierungsregel für numerische Felder wird nicht wirksam ([#8768](https://github.com/nocobase/nocobase/pull/8768)) von @2013xile
  - Behebung des Fehlschlags der benutzerdefinierten regulären Feldprüfung in v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) von @jiannx
- **[flow-engine]** Behebung eines Problems, bei dem ctx.exit die Ausführung benutzerdefinierter Ereignisflüsse nicht beenden konnte. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) von @gchust
- **[Zugriffskontrolle]**

  - Verwendung von collection.filterTargetKey anstelle von Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) von @chenos
  - Behebung des Datenänderungsfehlers der Restful-API-Datenquelle. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) von @cgyrock
  - Die beim Setzen von ACL-Metadaten verwendete Datenbankinstanz ist falsch ([#8747](https://github.com/nocobase/nocobase/pull/8747)) von @2013xile
- **[UI-Vorlagen]**

  - Behebung des Problems, dass Assoziationsdatensätze nach dem Speichern des Detailblocks als Vorlage nicht korrekt geladen werden konnten. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) von @gchust
  - Behebung des Renderfehlers für den Aktionsbereich-Referenzblock. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) von @gchust
  - Behebung des Problems, dass der Ereignisfluss des Referenzblocks im Tabellenblock nicht mit einem Zeilenklick-Ereignisfluss konfiguriert werden konnte. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) von @gchust
  - Behebung eines Problems, bei dem die Wiederverwendung der aktuellen Datensatzblockvorlage für den Detailblock und den Bearbeitungsformularblock dazu führen konnte, dass Daten nicht korrekt geladen wurden. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) von @gchust
  - Behebung eines Problems, bei dem Änderungen an Eigenschaften im Ereignisfluss eines Vorlagenblocks nicht wirksam wurden. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) von @gchust
- **[Office-Dateivorschau]** Änderung der Modalhöhe auf einen geeigneten Wert, um mehr Dateiinhalte anzuzeigen ([#8835](https://github.com/nocobase/nocobase/pull/8835)) von @mytharcher
- **[Aktion: Datensätze exportieren]**

  - Behebung des Problems, dass das belongsToArray-Feld im exportierten Excel leer ist ([#8787](https://github.com/nocobase/nocobase/pull/8787)) von @cgyrock
  - Behebung des Problems, dass numerische Felder in Excel-Dateien als Zeichenfolgen angezeigt wurden ([#8774](https://github.com/nocobase/nocobase/pull/8774)) von @cgyrock
- **[Workflow]** Behebung des Problems, dass der Knoten-Ziehplatzhalter beim Ziehen von Blöcken im Genehmigungsknoten fälschlicherweise angezeigt wurde ([#8763](https://github.com/nocobase/nocobase/pull/8763)) von @mytharcher
- **[Block: Liste]** Behebung eines Problems, bei dem Listenblockfelder die aktuelle Datensatzvariable nicht verwenden konnten. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) von @gchust
- **[Datenquelle: Haupt]**

  - Aktualisierung des Standardwerts eines JSON-Feldes wird nicht wirksam ([#8767](https://github.com/nocobase/nocobase/pull/8767)) von @2013xile
  - Fehler bei der Feldsynchronisation ([#8766](https://github.com/nocobase/nocobase/pull/8766)) von @2013xile
- **[KI-Mitarbeiter]**

  - Behebung von Problemen, dass dashscope/deepseek/kimi hochgeladene Dokumentdateien nicht lesen konnten. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) von @cgyrock
  - Behebung eines Tool-Aufruffsfehlers bei Verwendung des deepseek Reasoning-Modells. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) von @cgyrock
  - Behebung eines KI-Mitarbeiter-Chatfehlers bei aktivierter Wissensdatenbank ([#8746](https://github.com/nocobase/nocobase/pull/8746)) von @cgyrock
  - Behebung eines Renderproblems der KI-Datenquellenkonfiguration. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) von @cgyrock
  - Behebung des Problems, dass KI-Nachrichten mit der Länge 0 gerendert werden ([#8723](https://github.com/nocobase/nocobase/pull/8723)) von @heziqiang
- **[Flow-Engine]** Behebung des SQL-Destroy-Fehlers ([#8745](https://github.com/nocobase/nocobase/pull/8745)) von @chenos
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebung des Problems, dass der benutzerdefinierte Aktions-Workflow hängt, wenn er als Unter-Workflow ausgeführt wird ([#8738](https://github.com/nocobase/nocobase/pull/8738)) von @mytharcher
- **[Workflow: JavaScript]** Behebung, dass Testfälle unter Windows nicht bestanden werden können ([#8722](https://github.com/nocobase/nocobase/pull/8722)) von @mytharcher
- **[Datenvisualisierung]** Behebung der i18n für den Plugin-Diagramm-Eintragstext ([#8716](https://github.com/nocobase/nocobase/pull/8716)) von @heziqiang
- **[Multi-Space]** Behebung des Space-Berechtigungsfehlers beim Erstellen von Daten mit dem Primärschlüssel von @jiannx
- **[Vorlagendruck]** Behebung des Problems, dass die ACL-API geändert wurde, aber nicht an das Plugin angepasst ist von @mytharcher
- **[Workflow: Genehmigung]**

  - Behebung des Problems, dass die Bearbeiter nicht der im Knoten konfigurierten Reihenfolge folgen von @mytharcher
  - Behebung des Problems, dass Abfrageergebnisse aufgrund von nach Typ gefilterten Knoten nicht angezeigt werden von @mytharcher
  - Behebung des Problems, dass der appends-Parameter durch ACL filtert von @mytharcher
  - Behebung eines ACL-Problems, bei dem Assoziationswerte nicht erstellt oder aktualisiert werden sollten, wenn der Benutzer keine Berechtigung hat von @mytharcher
  - Hinzufügen eines fehlenden Parameters, um zu vermeiden, dass Assoziationen beim Einreichen einer neuen Genehmigung nicht aktualisiert werden von @mytharcher
  - Behebung von nicht übersetzten Bezeichnungen in den Genehmigungsverarbeitungsdetails von @zhangzhonghe
  - Behebung eines Fehlers, der durch den fehlenden Wert von `dataAfter` beim Hinzufügen oder Delegieren verursacht wurde von @mytharcher
  - Bereinigung von Assoziationswerten in Genehmigungsaktionen, um jegliche Datenmanipulation außerhalb der Berechtigung zu vermeiden von @mytharcher
  - Behebung des Problems, dass ein Fehler ausgelöst wird, wenn der Genehmigungs-Workflow manuell ausgeführt wird von @mytharcher
  - Bereinigung von Assoziationswerten in Genehmigungsaktionen, um jegliche Datenmanipulation außerhalb der Berechtigung zu vermeiden von @mytharcher
- **[E-Mail-Manager]** Behebung der Formatierung der Bild-Content-ID von @jiannx
- **[Migrations-Manager]**

  - Behebung der fehlenden Migrationsbeschreibung und Setzen der aktuellen Zeit als Standard von @cgyrock
  - Behebung des Build-Fehlers von @mytharcher
  - Verschiebung des temporären Verzeichnisses in den Speicher, um die Nutzung im Cluster-Modus zu unterstützen von @mytharcher
  - Behebung eines potenziellen Prozessstillstands, der durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen verursacht wurde von @cgyrock
