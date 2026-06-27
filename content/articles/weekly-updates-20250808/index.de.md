---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: hinzugefügte signaturbezogene Konfigurationsoptionen, E-Mail-Manager-Unterstützung für Resynchronisation und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.14](https://www.nocobase.com/en/blog/v1.8.14)

*Veröffentlichungsdatum: 2025-08-05*

#### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem rohe Variablenstrings mit dem Formular übermittelt wurden ([#7337](https://github.com/nocobase/nocobase/pull/7337)) von @zhangzhonghe
- **[Workflow: Genehmigung]** Aufgabentitel für hinzugefügte und delegierte Elemente hinzugefügt von @mytharcher

### [v1.8.13](https://www.nocobase.com/en/blog/v1.8.13)

*Veröffentlichungsdatum: 2025-08-04*

#### 🎉 Neue Funktionen

- **[Auth: SAML 2.0]** Signaturbezogene Konfigurationsoptionen hinzugefügt von @2013xile

#### 🚀 Verbesserungen

- **[Workflow: JavaScript]** Cache auf App-Cache geändert, um Fehler im Cluster-Modus zu vermeiden von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Tooltip zeigt beim Hovern im Aktionspanel `[object Object]` an ([#7322](https://github.com/nocobase/nocobase/pull/7322)) von @katherinehhh
  - Bei Verwendung von Variablen zur Festlegung von Feldstandardwerten in Filterformularen wird bei leerem Variablenwert der ursprüngliche Variablenstring im Eingabefeld angezeigt ([#7335](https://github.com/nocobase/nocobase/pull/7335)) von @zhangzhonghe
- **[Collection: Tree]** Pfadsynchronisationslogik von Baumstrukturen korrigiert ([#7330](https://github.com/nocobase/nocobase/pull/7330)) von @ChimingLiu

### [v1.8.12](https://www.nocobase.com/en/blog/v1.8.12)

*Veröffentlichungsdatum: 2025-08-01*

#### 🎉 Neue Funktionen

- **[Client]** Option "Auto-Fokus" für Input-, TextArea-, URL- und InputNumber-Komponenten hinzugefügt, die das Eingabefeld beim initialen Seitenrendering automatisch fokussiert, wenn aktiviert ([#7320](https://github.com/nocobase/nocobase/pull/7320)) von @zhangzhonghe

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Dateivorschau bei null-URL korrigiert ([#7315](https://github.com/nocobase/nocobase/pull/7315)) von @mytharcher
  - Vollständige URL zu lokaler Datei bei der Vorschau hinzugefügt ([#7314](https://github.com/nocobase/nocobase/pull/7314)) von @mytharcher
- **[Utils]** Falsche Zeitzonenbehandlung für parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) von @katherinehhh
- **[Undefined]** Neues Plugin zur Voreinstellung hinzugefügt ([#7319](https://github.com/nocobase/nocobase/pull/7319)) von @mytharcher
- **[Dateimanager]** Speicherfeldberechtigung korrigiert ([#7316](https://github.com/nocobase/nocobase/pull/7316)) von @mytharcher
- **[Workflow]** Problem mit `undefined`-Ergebnis beim Prozessor-Exit behoben ([#7317](https://github.com/nocobase/nocobase/pull/7317)) von @mytharcher
- **[Workflow: Dynamischer Berechnungsknoten]** Fehler durch alte API behoben ([#7321](https://github.com/nocobase/nocobase/pull/7321)) von @mytharcher
- **[Workflow: Unterworkflow]** Angehaltener Workflow behoben von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.7](https://www.nocobase.com/en/blog/v1.9.0-alpha.7)

*Veröffentlichungsdatum: 2025-08-06*

#### 🐛 Fehlerbehebungen

- **[E-Mail-Manager]** Resync-Unterstützung hinzugefügt von @jiannx

### [v1.9.0-alpha.6](https://www.nocobase.com/en/blog/v1.9.0-alpha.6)

*Veröffentlichungsdatum: 2025-08-06*

#### 🚀 Verbesserungen

- **[Workflow]** Der Workflow-Titel in der Aufgabenkarte wird nicht mehr durchgestrichen angezeigt, selbst wenn die entsprechende Version deaktiviert ist ([#7339](https://github.com/nocobase/nocobase/pull/7339)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Datenvisualisierung]** Problem mit Datumsvariablen im Standardwert von Datumsfeldern im Diagrammfilterblock ([#7291](https://github.com/nocobase/nocobase/pull/7291)) von @katherinehhh
- **[Workflow: CC]** Problem behoben, dass Blöcke nicht entfernt werden konnten ([#7338](https://github.com/nocobase/nocobase/pull/7338)) von @mytharcher
- **[E-Mail-Manager]** Manuelle Unterscheidung zwischen Weiterleiten und Antworten von @jiannx

### [v1.9.0-alpha.5](https://www.nocobase.com/en/blog/v1.9.0-alpha.5)

*Veröffentlichungsdatum: 2025-08-05*

#### 🎉 Neue Funktionen

- **[Client]** Option "Auto-Fokus" für Input-, TextArea-, URL- und InputNumber-Komponenten hinzugefügt, die das Eingabefeld beim initialen Seitenrendering automatisch fokussiert, wenn aktiviert ([#7320](https://github.com/nocobase/nocobase/pull/7320)) von @zhangzhonghe
- **[Auth: SAML 2.0]** Signaturbezogene Konfigurationsoptionen hinzugefügt von @2013xile

#### 🚀 Verbesserungen

- **[Workflow: JavaScript]** Cache auf App-Cache geändert, um Fehler im Cluster-Modus zu vermeiden von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem rohe Variablenstrings mit dem Formular übermittelt wurden ([#7337](https://github.com/nocobase/nocobase/pull/7337)) von @zhangzhonghe
  - Tooltip zeigt beim Hovern im Aktionspanel `[object Object]` an ([#7322](https://github.com/nocobase/nocobase/pull/7322)) von @katherinehhh
  - Bei Verwendung von Variablen zur Festlegung von Feldstandardwerten in Filterformularen wird bei leerem Variablenwert der ursprüngliche Variablenstring im Eingabefeld angezeigt ([#7335](https://github.com/nocobase/nocobase/pull/7335)) von @zhangzhonghe
- **[Undefined]** Neues Plugin zur Voreinstellung hinzugefügt ([#7319](https://github.com/nocobase/nocobase/pull/7319)) von @mytharcher
- **[Collection: Tree]** Pfadsynchronisationslogik von Baumstrukturen korrigiert ([#7330](https://github.com/nocobase/nocobase/pull/7330)) von @ChimingLiu
- **[Office-Dateivorschau]** Unterstützung für `.docx`-, `.xlsx`- und `.pptx`-Dateien mit reiner URL zur Vorschau hinzugefügt ([#7336](https://github.com/nocobase/nocobase/pull/7336)) von @mytharcher
- **[Workflow: Dynamischer Berechnungsknoten]** Fehler durch alte API behoben ([#7321](https://github.com/nocobase/nocobase/pull/7321)) von @mytharcher
- **[Workflow: Genehmigung]** Aufgabentitel für hinzugefügte und delegierte Elemente hinzugefügt von @mytharcher
- **[E-Mail-Manager]** Unterstützt dieselbe E-Mail für mehrere Personen von @jiannx
