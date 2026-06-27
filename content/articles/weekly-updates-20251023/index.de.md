---
title: "NocoBase wöchentliche Updates: Optimierung und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Unterstützung für benutzerdefinierte Variablen, Ereignis-Listener für Tabellenzeilenklicks und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.31](https://www.nocobase.com/en/blog/v1.8.31)

*Veröffentlichungsdatum: 2025-10-17*

### 🐛 Fehlerbehebungen

- **[Datenbank]** Fehler behoben, der beim Zusammentreffen des Operators `$in` mit einem `null`-Wert ausgelöst wurde ([#7610](https://github.com/nocobase/nocobase/pull/7610)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Problem mit Transaktions-Timeout behoben, das dadurch verursacht wurde, dass Transaktionen bei Datenbankfehlern nach dem Absenden einer Genehmigung nicht korrekt zurückgesetzt wurden, von @mytharcher
  - Problem behoben, bei dem Variablen im Genehmigungs-Absendeformular nicht analysiert wurden, von @mytharcher

### [v1.8.30](https://www.nocobase.com/en/blog/v1.8.30)

*Veröffentlichungsdatum: 2025-10-16*

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem Tab-Symbol-Popups verdeckt wurden ([#7607](https://github.com/nocobase/nocobase/pull/7607)) von @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.13](https://www.nocobase.com/en/blog/v1.9.0-beta.13)

*Veröffentlichungsdatum: 2025-10-22*

### 🚀 Verbesserungen

- **[Client]** Um einen genaueren MIME-Typ von Dateien zu erhalten, wird das `mime`-Paket verwendet, um den MIME-Typ von Dateien im Client zu erkennen ([#7551](https://github.com/nocobase/nocobase/pull/7551)) von @mytharcher
- **[Datenquelle: Haupt]** Die Lokalisierungslogik für Fehlermeldungen wurde überarbeitet und innerhalb des Fehlerbehandlungs-Plugins verarbeitet ([#7582](https://github.com/nocobase/nocobase/pull/7582)) von @2013xile
- **[Workflow]** Option `keepBranch` beim Löschen eines Knotens hinzugefügt ([#7571](https://github.com/nocobase/nocobase/pull/7571)) von @mytharcher
- **[Workflow: Genehmigung]** Die Zweigkonfiguration wurde überarbeitet, um sie an Kernel-Änderungen anzupassen, von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Fehler beim Löschen des Datumsfeldes in einem Filterblock behoben ([#7632](https://github.com/nocobase/nocobase/pull/7632)) von @katherinehhh
  - Problem behoben, bei dem der Standardwert der Untertabelle im Bearbeitungsformular-Drawer nicht funktionierte ([#7631](https://github.com/nocobase/nocobase/pull/7631)) von @katherinehhh
  - Problem behoben, bei dem Bilder während der Vorschau nicht korrekt angezeigt wurden, wenn sie sowohl gedreht als auch skaliert wurden ([#7573](https://github.com/nocobase/nocobase/pull/7573)) von @mytharcher
  - Problem behoben, bei dem Tab-Symbol-Popups verdeckt wurden ([#7607](https://github.com/nocobase/nocobase/pull/7607)) von @zhangzhonghe
- **[Datenbank]** Fehler behoben, der beim Zusammentreffen des Operators `$in` mit einem `null`-Wert ausgelöst wurde ([#7610](https://github.com/nocobase/nocobase/pull/7610)) von @mytharcher
- **[Datenquelle: Haupt]** Problem behoben, bei dem Metadaten nach dem Erstellen eines umgekehrten Assoziationsfeldes nicht über mehrere Knoten synchronisiert wurden ([#7628](https://github.com/nocobase/nocobase/pull/7628)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Problem mit Migrationsskriptfehlern aufgrund nicht vorhandener Tabellen behoben, wenn die Anwendung nicht installiert ist, von @mytharcher
  - Problem behoben, bei dem die Snowflake-ID aufgrund übersprungener Hooks nicht generiert wurde, von @mytharcher
- **[Auth: LDAP]** LDAP-Bindungsfehler mit nicht-ASCII (UTF-8) DNs in Active Directory behoben, von @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.19](https://www.nocobase.com/en/blog/v2.0.0-alpha.19)

*Veröffentlichungsdatum: 2025-10-21*

### 🐛 Fehlerbehebungen

- **[Client]**

  - Ein Problem wurde behoben, bei dem die URL nach dem Wechseln von Tabs innerhalb eines Popups, dem erneuten Öffnen eines verschachtelten Popups und dem anschließenden Schließen aller Popups nicht korrekt aktualisiert wurde. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) von @gchust
  - Problem behoben, bei dem der Standardwert der Untertabelle im Bearbeitungsformular-Drawer nicht funktionierte ([#7631](https://github.com/nocobase/nocobase/pull/7631)) von @katherinehhh
  - Fehler beim Löschen des Datumsfeldes in einem Filterblock behoben ([#7632](https://github.com/nocobase/nocobase/pull/7632)) von @katherinehhh
- **[Multi-App-Manager (veraltet)]** Problem behoben, dass der alte Multi-App-Manager nicht deaktiviert werden konnte ([#7633](https://github.com/nocobase/nocobase/pull/7633)) von @jiannx

### [v2.0.0-alpha.17](https://www.nocobase.com/en/blog/v2.0.0-alpha.17)

*Veröffentlichungsdatum: 2025-10-21*

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Tabellenzeilen-Klick-Ereignis-Listener hinzugefügt, die es Benutzern ermöglicht, bestimmte Aktionen auszuführen, wenn auf eine Zeile in der Tabelle geklickt wird ([#7622](https://github.com/nocobase/nocobase/pull/7622)) von @zhangzhonghe
- **[Workflow: Genehmigung]** Die Variable `approvalId` zur Verwendung von Genehmigungs-Triggern bereitgestellt, von @mytharcher

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Problem behoben, bei dem die Übersetzung in Antd-Komponenten nicht wirksam wurde ([#7621](https://github.com/nocobase/nocobase/pull/7621)) von @zhangzhonghe
- **[Datenquelle: Haupt]** Problem behoben, bei dem Metadaten nach dem Erstellen eines umgekehrten Assoziationsfeldes nicht über mehrere Knoten synchronisiert wurden ([#7628](https://github.com/nocobase/nocobase/pull/7628)) von @mytharcher
- **[plugin-demo-platform]** Demo unterstützt jetzt automatisches Stoppen von Apps, von @jiannx
- **[Multi-App]**

  - Multi-App-Migration löst keine Hooks aus, von @jiannx
  - Multi-App-Proxy unterstützt Cache, von @jiannx

### [v2.0.0-alpha.16](https://www.nocobase.com/en/blog/v2.0.0-alpha.16)

*Veröffentlichungsdatum: 2025-10-20*

### 🎉 Neue Funktionen

- **[Formularentwürfe]** Formularentwürfe von @chenos

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Aktuellen Ansichtskontext im Referenzblock nicht abrufbar ([#7620](https://github.com/nocobase/nocobase/pull/7620)) von @gchust
- **[Client]** Fehlenden Kontext in usePlugin behandelt ([#7627](https://github.com/nocobase/nocobase/pull/7627)) von @chenos

### [v2.0.0-alpha.15](https://www.nocobase.com/en/blog/v2.0.0-alpha.15)

*Veröffentlichungsdatum: 2025-10-20*

### 🚀 Verbesserungen

- **[Client]** Unterstützung für Assoziationsfelder im JS-Feldmodell ([#7618](https://github.com/nocobase/nocobase/pull/7618)) von @gchust
- **[KI-Mitarbeiter]**

  - Der OpenAI LLM Provider wurde in zwei separate Anbieter umstrukturiert, um die Completions- und Responses-APIs von OpenAI zu unterstützen. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) von @cgyrock
  - Neuer LLM-Anbieter Ollama hinzugefügt ([#7612](https://github.com/nocobase/nocobase/pull/7612)) von @ReLaMi96

### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem die Aufgabenanzahl nach dem Hinzufügen eines Bearbeiters nicht aktualisiert wurde, von @mytharcher
  - Problem mit Transaktions-Timeout behoben, das dadurch verursacht wurde, dass Transaktionen bei Datenbankfehlern nach dem Absenden einer Genehmigung nicht korrekt zurückgesetzt wurden, von @mytharcher

### [v2.0.0-alpha.14](https://www.nocobase.com/en/blog/v2.0.0-alpha.14)

*Veröffentlichungsdatum: 2025-10-17*

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]** KI-Code-Optimierung ([#7614](https://github.com/nocobase/nocobase/pull/7614)) von @cgyrock
- **[Datenquelle: Haupt]** Die Lokalisierungslogik für Fehlermeldungen wurde überarbeitet und innerhalb des Fehlerbehandlungs-Plugins verarbeitet ([#7582](https://github.com/nocobase/nocobase/pull/7582)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Datenbank]**

  - Setzen Sie `search_path` vor der Ausführung von SQL-Anweisungen mit der `runSQL`-Methode ([#7611](https://github.com/nocobase/nocobase/pull/7611)) von @2013xile
  - Fehler behoben, der beim Zusammentreffen des Operators `$in` mit einem `null`-Wert ausgelöst wurde ([#7610](https://github.com/nocobase/nocobase/pull/7610)) von @mytharcher
- **[Client]** Problem behoben, bei dem Tab-Symbol-Popups verdeckt wurden ([#7607](https://github.com/nocobase/nocobase/pull/7607)) von @zhangzhonghe
- **[Workflow: Genehmigung]** Problem behoben, bei dem Variablen im Genehmigungs-Absendeformular nicht analysiert wurden, von @mytharcher

### [v2.0.0-alpha.13](https://www.nocobase.com/en/blog/v2.0.0-alpha.13)

*Veröffentlichungsdatum: 2025-10-16*

### 🎉 Neue Funktionen

- **[Block: Referenz]** Ein experimentelles "Referenzblock"-Plugin hinzugefügt, das die Wiederverwendung vorhandener Blöcke durch Referenzierung oder Kopieren ermöglicht. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) von @gchust

### 🐛 Fehlerbehebungen

- **[Datenvisualisierung]** Problem behoben, bei dem das Diagramm aufgrund eines Timeouts der Ereignisregistrierung nicht angezeigt werden konnte ([#7608](https://github.com/nocobase/nocobase/pull/7608)) von @heziqiang

### [v2.0.0-alpha.10](https://www.nocobase.com/en/blog/v2.0.0-alpha.10)

*Veröffentlichungsdatum: 2025-10-15*

### 🚀 Verbesserungen

- **[Datenvisualisierung]** Plugin-data-vi 2.0 aktualisiert, einige Probleme behoben und die Benutzeroberfläche optimiert. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) von @heziqiang

### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]** Problem behoben, bei dem die Snowflake-ID aufgrund übersprungener Hooks nicht generiert wurde, von @mytharcher

### [v2.0.0-alpha.9](https://www.nocobase.com/en/blog/v2.0.0-alpha.9)

*Veröffentlichungsdatum: 2025-10-15*

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für benutzerdefinierte Variablen hinzugefügt ([#7585](https://github.com/nocobase/nocobase/pull/7585)) von @zhangzhonghe

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]** Minimieren-Schaltfläche für das Chat-Fenster im mobilen Layout hinzugefügt ([#7595](https://github.com/nocobase/nocobase/pull/7595)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[Server]** field.targetKey beim Kopieren von Referenzfeldern beibehalten ([#7599](https://github.com/nocobase/nocobase/pull/7599)) von @chenos
- **[KI-Mitarbeiter]** Layout-Problem des Chat-Fensters im mobilen Layout behoben ([#7591](https://github.com/nocobase/nocobase/pull/7591)) von @cgyrock
