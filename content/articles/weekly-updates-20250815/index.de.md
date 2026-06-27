---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche bringen optimierte Popup-Tab-Wechselleistung, Fehlerbehebungen und mehr."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit in drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich dazu, Feedback von Testern zu sammeln und Funktionen weiter zu optimieren. Ideal für Tester, die neue Funktionen frühzeitig ausprobieren und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Benutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.15](https://www.nocobase.com/en/blog/v1.8.15)

*Veröffentlichungsdatum: 2025-08-12*

#### 🚀 Verbesserungen

- **[client]**

  - Unterstützung für die Datumsvariable "vorgestern" hinzugefügt ([#7359](https://github.com/nocobase/nocobase/pull/7359)) von @katherinehhh
  - Leistung beim Wechseln von Popup-Tabs optimiert ([#7353](https://github.com/nocobase/nocobase/pull/7353)) von @zhangzhonghe
- **[Workflow]**

  - Instabilen Testfall behoben ([#7349](https://github.com/nocobase/nocobase/pull/7349)) von @mytharcher
  - Der Workflow-Titel in der Aufgabenkarte wird nicht mehr durchgestrichen angezeigt, selbst wenn die entsprechende Version deaktiviert ist ([#7339](https://github.com/nocobase/nocobase/pull/7339)) von @mytharcher
- **[Office-Dateivorschau]** Unterstützung für die Vorschau von `.odt`-Dateien hinzugefügt ([#7347](https://github.com/nocobase/nocobase/pull/7347)) von @mytharcher
- **[Backup-Manager]** Leistung für MySQL-Datenbank-Backup-Vorgänge verbessert von @gchust

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem das mehrspaltige Formularlayout auf mobilen Geräten nicht in ein einspaltiges Layout umgewandelt wurde ([#7355](https://github.com/nocobase/nocobase/pull/7355)) von @zhangzhonghe
  - Fehler beim Massenlöschen von Sammlungen behoben ([#7345](https://github.com/nocobase/nocobase/pull/7345)) von @aaaaaajie
  - Problem behoben, bei dem der zuvor gespeicherte Datenbereich bei der individuellen Konfiguration von Berechtigungen nicht vorausgewählt war ([#7288](https://github.com/nocobase/nocobase/pull/7288)) von @aaaaaajie
- **[Workflow]**

  - Das Menü "Knoten hinzufügen" überarbeitet und die dadurch verursachten Leistungsprobleme bei der Darstellung der Workflow-Leinwand behoben ([#7363](https://github.com/nocobase/nocobase/pull/7363)) von @mytharcher
  - Problem mit falschen Filterbedingungen beim Abrufen eines einzelnen To-Do-Elements behoben ([#7366](https://github.com/nocobase/nocobase/pull/7366)) von @mytharcher
  - Problem mit der Schlüsselwortsuche in der Feldauswahl behoben ([#7356](https://github.com/nocobase/nocobase/pull/7356)) von @mytharcher
  - Vermeidung von Fehlern, die durch das Veröffentlichen in der Ereigniswarteschlange beim Stoppen verursacht werden ([#7348](https://github.com/nocobase/nocobase/pull/7348)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem In-Site-Nachrichten empfangen, aber nicht in einem Popup angezeigt wurden ([#7364](https://github.com/nocobase/nocobase/pull/7364)) von @mytharcher
- **[Mobil]** Problem behoben, bei dem die Datumsauswahl auf mobilen Geräten bei Anwendung von Datumsbereichsbeschränkungen falsch angezeigt wurde ([#7362](https://github.com/nocobase/nocobase/pull/7362)) von @katherinehhh
- **[Dateimanager]** `storageId`-Feld zur Dateisammlung hinzugefügt, um die Berechtigungskonfiguration zu unterstützen ([#7351](https://github.com/nocobase/nocobase/pull/7351)) von @mytharcher
- **[Workflow: Paralleler Knoten]** Problem behoben, bei dem der parallele Knoten nach dem Fortsetzen unter MySQL pausierte ([#7346](https://github.com/nocobase/nocobase/pull/7346)) von @mytharcher
- **[Workflow: CC]** Problem behoben, dass Blöcke nicht entfernt werden konnten ([#7338](https://github.com/nocobase/nocobase/pull/7338)) von @mytharcher
- **[Office-Dateivorschau]** Unterstützung für die Vorschau von `.docx`-, `.xlsx`- und `.pptx`-Dateien nur mit URL hinzugefügt ([#7336](https://github.com/nocobase/nocobase/pull/7336)) von @mytharcher
- **[Datenvisualisierung]** Problem mit Datumsvariablen im Standardwert des Datumsfeldes im Diagrammfilterblock behoben ([#7291](https://github.com/nocobase/nocobase/pull/7291)) von @katherinehhh
- **[Workflow: Genehmigung]**

  - Problem behoben, dass Verknüpfungsregeln im ursprünglichen Genehmigungsdetailblock nicht funktionierten von @mytharcher
  - Aktualisierung von Verknüpfungen beim Einreichen eines Entwurfs behoben von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.10](https://www.nocobase.com/en/blog/v1.9.0-alpha.10)

*Veröffentlichungsdatum: 2025-08-09*

#### 🐛 Fehlerbehebungen

- **[E-Mail-Manager]** Rich-Editor unterstützt weiche Zeilenumbrüche von @jiannx

### [v1.9.0-alpha.9](https://www.nocobase.com/en/blog/v1.9.0-alpha.9)

*Veröffentlichungsdatum: 2025-08-09*

#### 🚀 Verbesserungen

- **[Workflow]** Instabilen Testfall behoben ([#7349](https://github.com/nocobase/nocobase/pull/7349)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem das mehrspaltige Formularlayout auf mobilen Geräten nicht in ein einspaltiges Layout umgewandelt wurde ([#7355](https://github.com/nocobase/nocobase/pull/7355)) von @zhangzhonghe
- **[Workflow]** Problem mit der Schlüsselwortsuche in der Feldauswahl behoben ([#7356](https://github.com/nocobase/nocobase/pull/7356)) von @mytharcher

### [v1.9.0-alpha.8](https://www.nocobase.com/en/blog/v1.9.0-alpha.8)

*Veröffentlichungsdatum: 2025-08-08*

#### 🚀 Verbesserungen

- **[client]** Leistung beim Wechseln von Popup-Tabs optimiert ([#7353](https://github.com/nocobase/nocobase/pull/7353)) von @zhangzhonghe
- **[Office-Dateivorschau]** Unterstützung für die Vorschau von `.odt`-Dateien hinzugefügt ([#7347](https://github.com/nocobase/nocobase/pull/7347)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem der zuvor gespeicherte Datenbereich bei der individuellen Konfiguration von Berechtigungen nicht vorausgewählt war ([#7288](https://github.com/nocobase/nocobase/pull/7288)) von @aaaaaajie
  - Fehler beim Massenlöschen von Sammlungen behoben ([#7345](https://github.com/nocobase/nocobase/pull/7345)) von @aaaaaajie
- **[Workflow]** Vermeidung von Fehlern, die durch das Veröffentlichen in der Ereigniswarteschlange beim Stoppen verursacht werden ([#7348](https://github.com/nocobase/nocobase/pull/7348)) von @mytharcher
- **[Workflow: Paralleler Knoten]** Problem behoben, bei dem der parallele Knoten nach dem Fortsetzen unter MySQL pausierte ([#7346](https://github.com/nocobase/nocobase/pull/7346)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Aktualisierung von Verknüpfungen beim Einreichen eines Entwurfs behoben von @mytharcher
  - Problem behoben, dass Verknüpfungsregeln im ursprünglichen Genehmigungsdetailblock nicht funktionierten von @mytharcher
