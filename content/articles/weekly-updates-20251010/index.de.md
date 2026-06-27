---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Verbesserungen und Fehlerbehebungen im Workflow, Optimierung der Drag-and-Drop-Funktionalität und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es könnte bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.27](https://www.nocobase.com/en/blog/v1.8.27)

*Veröffentlichungsdatum: 2025-10-02*

### 🚀 Verbesserungen

- **[client]** Unterstützung zum Drehen von Bildern bei der Vorschau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) von @mytharcher
- **[Workflow]** Auslagerung der versandbezogenen Logik in einen eigenständigen Dispatcher ([#7535](https://github.com/nocobase/nocobase/pull/7535)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Behebung des Problems, dass Untermenüs in der Seitenleiste nicht korrekt hervorgehoben werden ([#7520](https://github.com/nocobase/nocobase/pull/7520)) von @duannyuuu
- **[Workflow: Schleifenknoten]** Behoben: Der Prozess rückte fälschlicherweise zum nächsten Element vor, selbst wenn die Bedingungen des Schleifenknotens nicht erfüllt waren ([#7521](https://github.com/nocobase/nocobase/pull/7521)) von @mytharcher
- **[Workflow]**
  - Behebung des Problems der doppelten Ausführung aufgrund unsachgemäßer Warteschlangenverarbeitung ([#7533](https://github.com/nocobase/nocobase/pull/7533)) von @mytharcher
  - Behebung des Problems, dass die Workflow-Listenbedingung beim Laden des assoziierten Feldkontexts in der gebundenen Workflow-Konfiguration falsch ist ([#7516](https://github.com/nocobase/nocobase/pull/7516)) von @mytharcher
  - Behebung des Problems, dass geplante Aufgaben basierend auf Datumsfeldern nach dem Start nicht ausgelöst werden ([#7524](https://github.com/nocobase/nocobase/pull/7524)) von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.11](https://www.nocobase.com/en/blog/v1.9.0-beta.11)

*Veröffentlichungsdatum: 2025-10-09*

### 🚀 Verbesserungen

* **[server]** Hinzufügen einer Graceful-Shutdown-Lebenszyklusbehandlung für die Anwendung ([#7536](https://github.com/nocobase/nocobase/pull/7536)) von @mytharcher
* **[Workflow: Schleifenknoten]** Unterstützung zur Begrenzung der maximalen Anzahl von Zyklen für Schleifenknoten durch Umgebungsvariablen ([#7543](https://github.com/nocobase/nocobase/pull/7543)) von @mytharcher
* **[Workflow]** Unterstützung zur Begrenzung der maximalen Anzahl von Knoten in einem Workflow durch Umgebungsvariablen ([#7542](https://github.com/nocobase/nocobase/pull/7542)) von @mytharcher
* **[Workflow: Genehmigung]** Hinzufügen einer Druck-Schaltfläche zum Detail-Popup in benutzerdefinierten Genehmigungsblöcken von @mytharcher

### 🐛 Fehlerbehebungen

* **[E-Mail-Manager]** Ausnahme bei der erneuten Autorisierung von @jiannx

### [v1.9.0-beta.10](https://www.nocobase.com/en/blog/v1.9.0-beta.10)

*Veröffentlichungsdatum: 2025-10-09*

### 🐛 Fehlerbehebungen

* **[client]** Behebung des Problems, dass fehlende dynamische Eigenschaften in der `AssignedField`-Komponente zu Datei-Upload-Fehlern in den Knoten „Datensatz erstellen“ oder „Datensatz aktualisieren“ führten ([#7556](https://github.com/nocobase/nocobase/pull/7556)) von @mytharcher
* **[Öffentliche Formulare]** Behebung des Problems, dass die Upload-Regeln für Dateifelder in öffentlichen Formularen falsch waren ([#7553](https://github.com/nocobase/nocobase/pull/7553)) von @mytharcher

### [v1.9.0-beta.9](https://www.nocobase.com/en/blog/v1.9.0-beta.9)

*Veröffentlichungsdatum: 2025-09-30*

### 🎉 Neue Funktionen

* **[client]**
  * Tabellenblöcke unterstützen das Hinzufügen einer Schaltfläche „Spalteneinstellungen“ zum Konfigurieren der Spaltenreihenfolge und -sichtbarkeit ([#7204](https://github.com/nocobase/nocobase/pull/7204)) von @kerwin612
  * Unterstützung von Feldvalidierungsregeln ([#7297](https://github.com/nocobase/nocobase/pull/7297)) von @aaaaaajie
* **[Datenquelle: Haupt]**
  * Unterstützung zum Lesen von Tabellen aus der Hauptdatenquelle ([#7238](https://github.com/nocobase/nocobase/pull/7238)) von @aaaaaajie
  * Unterstützung zur Anzeige von plugin-definierten Tabellen in der Hauptdatenquelle. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) von @aaaaaajie

### 🚀 Verbesserungen

* **[client]** Unterstützung zum Drehen von Bildern bei der Vorschau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) von @mytharcher
* **[snowflake-id]** Änderung der IDs von Systemtabellen mit auto-increment Primärschlüsseln, aber ohne eindeutige Identifikatoren, auf 53-Bit-Snowflake-ähnliche IDs ([#7465](https://github.com/nocobase/nocobase/pull/7465)) von @2013xile
* **[Workflow]** Auslagerung der versandbezogenen Logik in einen eigenständigen Dispatcher ([#7535](https://github.com/nocobase/nocobase/pull/7535)) von @mytharcher
* **[RabbitMQ-Warteschlangenadapter]** Verbesserung der RabbitMQ-Verbindungsverwaltung und Nachrichtenverarbeitungslogik von @sdp-ncd
* **[E-Mail-Manager]**
  * unterstützt Batch-Synchronisation von @jiannx
  * Rich-Editor unterstützt Bildgrößenänderung von @jiannx

### 🐛 Fehlerbehebungen

* **[client]**
  * Behebung eines Problems, bei dem die Schaltfläche „Spalteneinstellungen“ Spalten aus der Tabelle innerhalb des modalen Dialogs lädt ([#7385](https://github.com/nocobase/nocobase/pull/7385)) von @kerwin612
  * Behebung des Problems, dass Untermenüs in der Seitenleiste nicht korrekt hervorgehoben werden ([#7520](https://github.com/nocobase/nocobase/pull/7520)) von @duannyuuu
* **[Workflow]**
  * Behebung des Problems der doppelten Ausführung aufgrund unsachgemäßer Warteschlangenverarbeitung ([#7533](https://github.com/nocobase/nocobase/pull/7533)) von @mytharcher
  * Behebung des Problems, dass die Workflow-Listenbedingung beim Laden des assoziierten Feldkontexts in der gebundenen Workflow-Konfiguration falsch ist ([#7516](https://github.com/nocobase/nocobase/pull/7516)) von @mytharcher
  * Behebung des Problems, dass geplante Aufgaben basierend auf Datumsfeldern nach dem Start nicht ausgelöst werden ([#7524](https://github.com/nocobase/nocobase/pull/7524)) von @mytharcher
* **[Workflow: Schleifenknoten]** Behoben: Der Prozess rückte fälschlicherweise zum nächsten Element vor, selbst wenn die Bedingungen des Schleifenknotens nicht erfüllt waren ([#7521](https://github.com/nocobase/nocobase/pull/7521)) von @mytharcher
* **[E-Mail-Manager]**
  * Betreff von Junk-E-Mails von @jiannx
  * Betreff von Junk-E-Mails von @jiannx
  * Rich-Editor unterstützt weiche Zeilenumbrüche von @jiannx
  * Unterstützt dieselbe E-Mail für mehrere Personen von @jiannx
  * Optimale Leistung der E-Mail-Nachrichtenliste von @jiannx
  * Nach Auswahl von Zeilen „Gelesen“ und „Ungelesen“ setzen von @jiannx
  * rawId-Feld für Leistungsoptimierung hinzugefügt von @jiannx
  * ref-Attribut in HTML verursacht Rendering-Ausnahme von @jiannx
  * Submail-Inhalt kann nicht gefiltert werden von @jiannx
  * Unterstützung für Resync von @jiannx
  * Manuelle Unterscheidung zwischen Weiterleiten und Antworten von @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.5](https://www.nocobase.com/en/blog/v2.0.0-alpha.5)

*Veröffentlichungsdatum: 2025-10-10*

### 🐛 Fehlerbehebungen

- **[server]** Fehler bei der Primärschlüsselmigration ([#7563](https://github.com/nocobase/nocobase/pull/7563)) von @2013xile
- **[client]**
  - Behebung des Problems, dass Daten nach dem Absenden des Formulars nicht aktualisiert werden ([#7560](https://github.com/nocobase/nocobase/pull/7560)) von @zhangzhonghe
  - Behebung des Problems, dass fehlende dynamische Eigenschaften in der `AssignedField`-Komponente zu Datei-Upload-Fehlern in den Knoten „Datensatz erstellen“ oder „Datensatz aktualisieren“ führten ([#7556](https://github.com/nocobase/nocobase/pull/7556)) von @mytharcher
- **[Kalender]** Behebung eines Datenabfrageproblems, das durch einen eindeutigen Identifikator im Kalenderblock verursacht wurde ([#7562](https://github.com/nocobase/nocobase/pull/7562)) von @katherinehhh
- **[Block: Vorlage (veraltet)]]** Behoben: Beim Öffnen oder Schließen von Modalen wurden unnötige Anfragen für Blockvorlagen ausgelöst ([#7561](https://github.com/nocobase/nocobase/pull/7561)) von @gchust
- **[Öffentliche Formulare]** Behebung des Problems, dass die Upload-Regeln für Dateifelder in öffentlichen Formularen falsch waren ([#7553](https://github.com/nocobase/nocobase/pull/7553)) von @mytharcher
- **[Multi-App-Manager (veraltet)]]** Behebung der Port-Validierung vor der Datenmigration für mehrere Anwendungen ([#7540](https://github.com/nocobase/nocobase/pull/7540)) von @jiannx

### [v2.0.0-alpha.4](https://www.nocobase.com/en/blog/v2.0.0-alpha.4)

*Veröffentlichungsdatum: 2025-10-05*

### 🚀 Verbesserungen

* **[flow-engine]** Optimierung der Drag-and-Drop-Funktionalität ([#7526](https://github.com/nocobase/nocobase/pull/7526)) von @zhangzhonghe
* **[Workflow: Schleifenknoten]** Unterstützung zur Begrenzung der maximalen Anzahl von Zyklen für Schleifenknoten durch Umgebungsvariablen ([#7543](https://github.com/nocobase/nocobase/pull/7543)) von @mytharcher
* **[Workflow]** Unterstützung zur Begrenzung der maximalen Anzahl von Knoten in einem Workflow durch Umgebungsvariablen ([#7542](https://github.com/nocobase/nocobase/pull/7542)) von @mytharcher
* **[Workflow: Genehmigung]** Hinzufügen einer Druck-Schaltfläche zum Detail-Popup in benutzerdefinierten Genehmigungsblöcken von @mytharcher

### 🐛 Fehlerbehebungen

* **[client]** Behoben: Die Aktion „Ausführen“ im Code-Editor funktionierte nicht; Benutzer können Code nun korrekt ausführen. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) von @gchust
* **[KI-Mitarbeiter]** Behebung des Fehlers auf der Konfigurationsseite für KI-Mitarbeiterberechtigungen ([#7548](https://github.com/nocobase/nocobase/pull/7548)) von @2013xile
* **[Workflow]** Behebung des Problems, dass das Hinzufügen eines Workflows in der Konfiguration der gebundenen Workflow-Schaltfläche dazu führte, dass die Anwendung nach dem Klicken einfror ([#7541](https://github.com/nocobase/nocobase/pull/7541)) von @mytharcher
* **[E-Mail-Manager]** Ausnahme bei der erneuten Autorisierung von @jiannx

### [v1.9.0-alpha.17](https://www.nocobase.com/en/blog/v1.9.0-alpha.17)

*Veröffentlichungsdatum: 2025-09-30*

### 🚀 Verbesserungen

* **[Workflow]** Auslagerung der versandbezogenen Logik in einen eigenständigen Dispatcher ([#7535](https://github.com/nocobase/nocobase/pull/7535)) von @mytharcher

### 🐛 Fehlerbehebungen

* **[Workflow]**
  * Behebung des Problems der doppelten Ausführung aufgrund unsachgemäßer Warteschlangenverarbeitung ([#7533](https://github.com/nocobase/nocobase/pull/7533)) von @mytharcher
  * Behebung des Problems, dass geplante Aufgaben basierend auf Datumsfeldern nach dem Start nicht ausgelöst werden ([#7524](https://github.com/nocobase/nocobase/pull/7524)) von @mytharcher

### [v2.0.0-alpha.1](https://www.nocobase.com/en/blog/v2.0.0-alpha.1)

*Veröffentlichungsdatum: 2025-09-30

### 🚀 Verbesserungen

- **[server]** Hinzufügen einer Graceful-Shutdown-Lebenszyklusbehandlung für die Anwendung ([#7536](https://github.com/nocobase/nocobase/pull/7536)) von @mytharcher
