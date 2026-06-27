---
title: "NocoBase wöchentliche Updates: Optimierung und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Unterstützung für Drag & Drop bei Tabellenspaltenaktionen, Hinzufügen einer SQL-Datenquelle für Diagramme und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.6](https://www.nocobase.com/en/blog/v1.9.6)

*Veröffentlichungsdatum: 2025-11-12*

### 🐛 Fehlerbehebungen

- **[client]** Behebt das Problem, dass duplizierte Vorlagen nicht angezeigt werden, wenn eine referenzierte Vorlage per Drag & Drop gelöscht wird ([#7847](https://github.com/nocobase/nocobase/pull/7847)) von @zhangzhonghe
- **[utils]** Aktiviert die Objektzusammenführung in der Intersect-Strategie ([#7840](https://github.com/nocobase/nocobase/pull/7840)) von @chenos
- **[Datenvisualisierung: ECharts]** Behebt Problem mit der ECharts-Konfiguration labelType von @heziqiang
- **[E-Mail-Manager]** Synchronisiert den Microsoft-Mail-Lesestatus ohne Zeitstempel von @jiannx

### [v1.9.5](https://www.nocobase.com/en/blog/v1.9.5)

*Veröffentlichungsdatum: 2025-11-10*

### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]** Behebt ein Problem, bei dem Hauptsammlungsfelder beim erneuten Laden von Assoziationsdaten nicht ausgeschlossen wurden von @mytharcher
- **[E-Mail-Manager]** Behebt das Problem mit reservierten Bildern und der Synchronisation in Outlook von @jiannx

### [v1.9.4](https://www.nocobase.com/en/blog/v1.9.4)

*Veröffentlichungsdatum: 2025-11-10*

### 🚀 Verbesserungen

- **[Zugriffskontrolle]** Optimiert die Berechtigungskontrolllogik für Assoziationsfeldoperationen ([#7800](https://github.com/nocobase/nocobase/pull/7800)) von @2013xile
- **[Workflow: JavaScript]** Behebt eine Sicherheitslücke, die durch die Übergabe von übergeordneten Funktionen in die Ausführungsumgebung verursacht wurde, und verhindert so die Ausnutzung, die Zugriff auf den übergeordneten Ausführungskontext gewähren könnte von @mytharcher
- **[Auth: OIDC]** Erhöht das Request-Timeout von @2013xile

### 🐛 Fehlerbehebungen

- **[server]** Behebt ein Problem, bei dem nach Aktivierung des Dienstaufteilungsmodus das Senden von Nachrichten durch Worker-Prozesse über die Nachrichtenwarteschlange zu Fehlern führte ([#7797](https://github.com/nocobase/nocobase/pull/7797)) von @mytharcher
- **[client]** Behebt Problem mit leerer nächster Seite im einfachen Paginierungs-Detailblock ([#7784](https://github.com/nocobase/nocobase/pull/7784)) von @katherinehhh
- **[Workflow]**

  - Fügt `workflowId` als Identitätsdaten für Logs des Workflows hinzu ([#7789](https://github.com/nocobase/nocobase/pull/7789)) von @mytharcher
  - Behebt das Problem, dass das Workflow-Plugin das Warteschlangenereignis weiterhin verarbeitet, wenn es sich im Dienstaufteilungsmodus nicht im Workermodus befindet ([#7820](https://github.com/nocobase/nocobase/pull/7820)) von @mytharcher
- **[Benutzer]** Falsche Indexaktualisierung, wenn Feldnamen im snake_case-Stil verwendet werden ([#7785](https://github.com/nocobase/nocobase/pull/7785)) von @2013xile
- **[Workflow: Benutzerdefinierte Variable]** Behebt Fehler, der ausgelöst wird, wenn keine Konfiguration im Variablenknoten vorhanden ist von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.38](https://www.nocobase.com/en/blog/v2.0.0-alpha.38)

*Veröffentlichungsdatum: 2025-11-12*

### 🎉 Neue Funktionen

- **[client]** Unterstützt Drag & Drop für Tabellenspaltenaktionen ([#7842](https://github.com/nocobase/nocobase/pull/7842)) von @zhangzhonghe
- **[Datenvisualisierung]** Fügt SQL-Datenquelle für Diagramme hinzu ([#7830](https://github.com/nocobase/nocobase/pull/7830)) von @heziqiang

### 🚀 Verbesserungen

- **[client]** Unterstützung für die Day.js-Bibliothek im RunJS-Scripting-Kontext hinzugefügt, um einfachere Datums- und Zeitmanipulationen zu ermöglichen. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) von @gchust

### 🐛 Fehlerbehebungen

- **[utils]**

  - Behebt den Fehler "Ungültiger Filterelementtyp" auf der Filtersschaltfläche ([#7838](https://github.com/nocobase/nocobase/pull/7838)) von @zhangzhonghe
  - Aktiviert die Objektzusammenführung in der Intersect-Strategie ([#7840](https://github.com/nocobase/nocobase/pull/7840)) von @chenos
  - Behebt den Fehler 'Nicht erkannte Operation' im Ereignisablauf ([#7835](https://github.com/nocobase/nocobase/pull/7835)) von @zhangzhonghe
- **[client]**

  - Behebt ein Problem, bei dem die Verknüpfungsregeln für Zeilenaktionsschaltflächen in einem Tabellenblock nach der Aktualisierung der Zeilendaten nicht erneut ausgeführt wurden, sodass die Regeln nun bei Änderungen ordnungsgemäß erneut angewendet werden. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) von @gchust
  - Behebt die Fehler bei der Vorschau von Code im Code-Editor, wenn der Code JSX-Syntax enthält ([#7836](https://github.com/nocobase/nocobase/pull/7836)) von @gchust
- **[undefined]** Behebt das Problem der falschen Formatierung auf der Plugin-Dokumentationsstartseite im Dunkelmodus. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) von @gchust
- **[Dateimanager]** Behebt Konfigurationsprobleme von Tabellenblockfeldern ([#7843](https://github.com/nocobase/nocobase/pull/7843)) von @katherinehhh
- **[KI-Mitarbeiter]** Blendet die Chat-Schaltfläche des KI-Mitarbeiters auf v1-Seiten aus ([#7829](https://github.com/nocobase/nocobase/pull/7829)) von @cgyrock
- **[Datenvisualisierung: ECharts]** Behebt Problem mit der ECharts-Konfiguration labelType von @heziqiang
- **[E-Mail-Manager]**

  - Behebt Entwurfsfehler von @jiannx
  - Synchronisiert den Microsoft-Mail-Lesestatus ohne Zeitstempel von @jiannx

### [v2.0.0-alpha.37](https://www.nocobase.com/en/blog/v2.0.0-alpha.37)

*Veröffentlichungsdatum: 2025-11-11*

### 🚀 Verbesserungen

- **[client]**

  - Fügt Seiteninfo-Version zum Flow-Engine-Kontext hinzu ([#7826](https://github.com/nocobase/nocobase/pull/7826)) von @gchust
  - Verbessert den Markdown-Editor ([#7793](https://github.com/nocobase/nocobase/pull/7793)) von @katherinehhh
  - Passt sich an das tableoid-Feld in 2.0 an ([#7809](https://github.com/nocobase/nocobase/pull/7809)) von @katherinehhh
- **[Datenvisualisierung]** Aktualisiert Warnhinweise und Ereigniscode-Vorlagenanmerkungen ([#7814](https://github.com/nocobase/nocobase/pull/7814)) von @heziqiang
- **[Zugriffskontrolle]** Optimiert die Berechtigungskontrolllogik für Assoziationsfeldoperationen ([#7800](https://github.com/nocobase/nocobase/pull/7800)) von @2013xile
- **[Auth: OIDC]** Erhöht das Request-Timeout von @2013xile

### 🐛 Fehlerbehebungen

- **[server]** Behebt ein Problem, bei dem nach Aktivierung des Dienstaufteilungsmodus das Senden von Nachrichten durch Worker-Prozesse über die Nachrichtenwarteschlange zu Fehlern führte ([#7797](https://github.com/nocobase/nocobase/pull/7797)) von @mytharcher
- **[client]**

  - Die aktuelle Sammlungsvariable sollte im Variablenauswahlfeld der Filterkomponente nicht auswählbar sein ([#7818](https://github.com/nocobase/nocobase/pull/7818)) von @gchust
  - Behebt den Fehler 'value.replace is not a function' im Beziehungsfeld des Filterformulars ([#7824](https://github.com/nocobase/nocobase/pull/7824)) von @zhangzhonghe
  - Behebt falsche Parameter im onChange-Callback ([#7807](https://github.com/nocobase/nocobase/pull/7807)) von @zhangzhonghe
- **[flow-engine]** Behebt das Problem, dass Änderungen am Ereignisablauf erst nach einem Seitenrefresh wirksam wurden. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) von @gchust
- **[Workflow]** Behebt das Problem, dass das Workflow-Plugin das Warteschlangenereignis weiterhin verarbeitet, wenn es sich im Dienstaufteilungsmodus nicht im Workermodus befindet ([#7820](https://github.com/nocobase/nocobase/pull/7820)) von @mytharcher
- **[Workflow: Genehmigung]** Behebt ein Problem, bei dem Hauptsammlungsfelder beim erneuten Laden von Assoziationsdaten nicht ausgeschlossen wurden von @mytharcher
- **[E-Mail-Manager]** Behebt das Problem mit reservierten Bildern und der Synchronisation in Outlook von @jiannx

### [v2.0.0-alpha.36](https://www.nocobase.com/en/blog/v2.0.0-alpha.36)

*Veröffentlichungsdatum: 2025-11-10*

### 🚀 Verbesserungen

- **[flow-engine]** Optimiert die Symbolleistenstile für Seitenregisterkarten ([#7795](https://github.com/nocobase/nocobase/pull/7795)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[flow-engine]**

  - Behebt ein Problem, bei dem Variablen in Assoziationsfeldern von Unterformularen nicht korrekt aufgelöst wurden, wenn das Feld über die Benutzeroberfläche geändert wurde. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) von @gchust
  - Fehler im Bearbeitungsformular für Datensätze mit mehreren Primärschlüsseln ([#7798](https://github.com/nocobase/nocobase/pull/7798)) von @gchust
  - Behebt ein Problem, bei dem bestimmte Konfigurationen für die Aktion "Ansicht öffnen" nicht angewendet wurden, sodass die Aktion nun wie vorgesehen für alle angegebenen Konfigurationen funktioniert. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) von @gchust
- **[client]**

  - Behebt, dass das Sammlungsauswahlfeld die Sammlung nicht korrekt auswählen kann ([#7794](https://github.com/nocobase/nocobase/pull/7794)) von @katherinehhh
  - Die Aktionsspalte des Tabellenblocks kann nicht ausgeblendet werden ([#7804](https://github.com/nocobase/nocobase/pull/7804)) von @gchust
  - Unterstützt die Auswahl des gesamten Variablenobjekts in der Eingabeaufforderung des KI-Mitarbeiters ([#7791](https://github.com/nocobase/nocobase/pull/7791)) von @gchust
- **[Benutzer]** Falsche Indexaktualisierung, wenn Feldnamen im snake_case-Stil verwendet werden ([#7785](https://github.com/nocobase/nocobase/pull/7785)) von @2013xile

### [v2.0.0-alpha.35](https://www.nocobase.com/en/blog/v2.0.0-alpha.35)

*Veröffentlichungsdatum: 2025-11-06*

### 🚀 Verbesserungen

- **[flow-engine]** Unterstützt verzögerte Operation im Flow-Modell ([#7786](https://github.com/nocobase/nocobase/pull/7786)) von @gchust
- **[Workflow: JavaScript]** Behebt eine Sicherheitslücke, die durch die Übergabe von übergeordneten Funktionen in die Ausführungsumgebung verursacht wurde, und verhindert so die Ausnutzung, die Zugriff auf den übergeordneten Ausführungskontext gewähren könnte von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebt Problem mit leerer nächster Seite im einfachen Paginierungs-Detailblock ([#7784](https://github.com/nocobase/nocobase/pull/7784)) von @katherinehhh
  - Behebt, dass die Breite von Tabellenaktionen und jsColumn nicht angewendet wurde ([#7777](https://github.com/nocobase/nocobase/pull/7777)) von @katherinehhh
  - Der Datenbereich des Blocks funktioniert nicht, wenn er durch den Seitenereignisablauf festgelegt wurde ([#7788](https://github.com/nocobase/nocobase/pull/7788)) von @gchust
- **[Workflow]** Fügt `workflowId` als Identitätsdaten für Logs des Workflows hinzu ([#7789](https://github.com/nocobase/nocobase/pull/7789)) von @mytharcher
- **[Workflow: Benutzerdefinierte Variable]** Behebt Fehler, der ausgelöst wird, wenn keine Konfiguration im Variablenknoten vorhanden ist von @mytharcher
- **[E-Mail-Manager]** Sammlung MailMessages fügt Indizes hinzu von @jiannx
