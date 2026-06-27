---
title: "NocoBase wöchentliche Updates: Optimierung und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Hinzufügen der Variable \"Aktueller Gerätetyp\", Verbesserung der Websuche-Funktion von plugin-ai"
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.29](https://www.nocobase.com/en/blog/v1.8.29)

*Veröffentlichungsdatum: 2025-10-15*

### 🚀 Verbesserungen

* **[Workflow: Genehmigung]** Überarbeitung der Zweigkonfiguration zur Anpassung an Kernel-Änderungen von @mytharcher

### 🐛 Fehlerbehebungen

* **[Workflow: Genehmigung]** Behebung des Problems von Migrationsskriptfehlern aufgrund nicht vorhandener Tabellen, wenn die Anwendung nicht installiert ist von @mytharcher

### [v1.8.28](https://www.nocobase.com/en/blog/v1.8.28)

*Veröffentlichungsdatum: 2025-10-14*

### 🚀 Verbesserungen

* **[Client]** Um einen genaueren MIME-Typ der Datei zu erhalten, wird das `mime`-Paket verwendet, um den MIME-Typ der Datei im Client zu erkennen ([#7551](https://github.com/nocobase/nocobase/pull/7551)) von @mytharcher
* **[Workflow]**
  * Unterstützung zur Begrenzung der maximalen Anzahl von Knoten in einem Workflow durch Umgebungsvariablen ([#7542](https://github.com/nocobase/nocobase/pull/7542)) von @mytharcher
  * Hinzufügen der Option `keepBranch` beim Löschen eines Knotens ([#7571](https://github.com/nocobase/nocobase/pull/7571)) von @mytharcher
* **[Workflow: Schleifenknoten]** Unterstützung zur Begrenzung der maximalen Anzahl von Zyklen für Schleifenknoten durch Umgebungsvariablen ([#7543](https://github.com/nocobase/nocobase/pull/7543)) von @mytharcher
* **[Workflow: Genehmigung]** Hinzufügen einer Druck-Schaltfläche zum Detail-Popup in benutzerdefinierten Genehmigungsblöcken von @mytharcher

### 🐛 Fehlerbehebungen

* **[Client]**
  * Behebung des Problems, dass Bilder bei der Vorschau nicht korrekt angezeigt wurden, wenn sie sowohl gedreht als auch skaliert wurden ([#7573](https://github.com/nocobase/nocobase/pull/7573)) von @mytharcher
  * Behebung des Problems, dass fehlende dynamische Eigenschaften in der `AssignedField`-Komponente zu Datei-Upload-Fehlern in den Knoten „Datensatz erstellen“ oder „Datensatz aktualisieren“ führten ([#7556](https://github.com/nocobase/nocobase/pull/7556)) von @mytharcher
* **[Öffentliche Formulare]** Behebung des Problems, dass die Upload-Regeln für Dateifelder in öffentlichen Formularen falsch waren ([#7553](https://github.com/nocobase/nocobase/pull/7553)) von @mytharcher
* **[Kalender]** Behebung eines Datenabfrageproblems, das durch einen eindeutigen Bezeichner im Kalenderblock verursacht wurde ([#7562](https://github.com/nocobase/nocobase/pull/7562)) von @katherinehhh
* **[Auth: LDAP]** Behebung eines LDAP-Bind-Fehlers mit Nicht-ASCII (UTF-8) DNs in Active Directory von @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.12](https://www.nocobase.com/en/blog/v1.9.0-beta.12)

*Veröffentlichungsdatum: 2025-10-11*

### 🐛 Fehlerbehebungen

* **[Server]** Primärschlüssel-Migrationsfehler ([#7568](https://github.com/nocobase/nocobase/pull/7568)) von @2013xile
* **[Kalender]** Behebung eines Datenabfrageproblems, das durch einen eindeutigen Bezeichner im Kalenderblock verursacht wurde ([#7562](https://github.com/nocobase/nocobase/pull/7562)) von @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.8](https://www.nocobase.com/en/blog/v2.0.0-alpha.8)

*Veröffentlichungsdatum: 2025-10-14*

### 🎉 Neue Funktionen

* **[KI-Mitarbeiter]** Verbesserung der Websuche-Funktion von plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) von @cgyrock

### 🚀 Verbesserungen

* **[Client]** Um einen genaueren MIME-Typ der Datei zu erhalten, wird das `mime`-Paket verwendet, um den MIME-Typ der Datei im Client zu erkennen ([#7551](https://github.com/nocobase/nocobase/pull/7551)) von @mytharcher
* **[Flow-Engine]**
  * Unterstützung für Popup-Variable ([#7583](https://github.com/nocobase/nocobase/pull/7583)) von @gchust
  * Verbesserung der Code-Bearbeitungserfahrung mit umfangreicheren Snippets und kontextabhängigen Code-Vervollständigungen für verschiedene Szenarien ([#7559](https://github.com/nocobase/nocobase/pull/7559)) von @gchust
  * Standardisierung automatischer Workflows, um konsistent durch das „beforeRender“-Ereignis ausgelöst zu werden, was einen vorhersagbaren und einheitlichen Betrieb über Prozesse hinweg gewährleistet. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) von @gchust
* **[Workflow]** Hinzufügen der Option `keepBranch` beim Löschen eines Knotens ([#7571](https://github.com/nocobase/nocobase/pull/7571)) von @mytharcher
* **[Datenvisualisierung]** Erweiterung der Diagrammtypen; Optimierung der Benutzeroberfläche und der interaktiven Erfahrung. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) von @heziqiang
* **[Workflow: Genehmigung]** Überarbeitung der Zweigkonfiguration zur Anpassung an Kernel-Änderungen von @mytharcher

### 🐛 Fehlerbehebungen

* **[Client]**
  * Behebung von Problemen mit der abnormalen Seitenanzeige beim Wechseln der Tabellen-Seitennummerierung ([#7572](https://github.com/nocobase/nocobase/pull/7572)) von @zhangzhonghe
  * Feldwert für die Aktionen „Aktualisieren“ und „Massenaktualisierung“ kann nicht konfiguriert werden ([#7565](https://github.com/nocobase/nocobase/pull/7565)) von @gchust
  * Behebung des Problems, dass Bilder bei der Vorschau nicht korrekt angezeigt wurden, wenn sie sowohl gedreht als auch skaliert wurden ([#7573](https://github.com/nocobase/nocobase/pull/7573)) von @mytharcher
* **[Workflow: Genehmigung]** Behebung des Problems von Migrationsskriptfehlern aufgrund nicht vorhandener Tabellen, wenn die Anwendung nicht installiert ist von @mytharcher
* **[Auth: LDAP]** Behebung eines LDAP-Bind-Fehlers mit Nicht-ASCII (UTF-8) DNs in Active Directory von @2013xile

### [v2.0.0-alpha.7](https://www.nocobase.com/en/blog/v2.0.0-alpha.7)

*Veröffentlichungsdatum: 2025-10-13*

### 🎉 Neue Funktionen

* **[Client]** Hinzufügen der Variable „Aktueller Gerätetyp“ ([#7576](https://github.com/nocobase/nocobase/pull/7576)) von @zhangzhonghe

### [v2.0.0-alpha.6](https://www.nocobase.com/en/blog/v2.0.0-alpha.6)

*Veröffentlichungsdatum: 2025-10-11*

### 🐛 Fehlerbehebungen

* **[Server]** Primärschlüssel-Migrationsfehler ([#7568](https://github.com/nocobase/nocobase/pull/7568)) von @2013xile
* **[undefined]** Routing-Pfad-Matching unterstützt neue mehrere Anwendungen ([#7570](https://github.com/nocobase/nocobase/pull/7570)) von @jiannx
* **[KI-Mitarbeiter]** Behebung von Fehlern im KI-Mitarbeiter-Datenmodellierungstool bei Verwendung von ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) von @cgyrock
