---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Unterstützung für plugin-definierte Wartungskomponenten, wenn die App in den Wartungsstatus wechselt, und mehr."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.33](https://www.nocobase.com/en/blog/v1.9.33)

*Veröffentlichungsdatum: 2026-01-04*

### 🎉 Neue Funktionen

- **[client]** Unterstützung für plugin-definierte Wartungskomponenten, wenn die App in den Wartungsstatus wechselt ([#8252](https://github.com/nocobase/nocobase/pull/8252)) von @cgyrock
- **[Dateimanager]** Unterstützung für die Konfiguration der Dateiumbenennungsmethode ([#8231](https://github.com/nocobase/nocobase/pull/8231)) von @JAVA-LW
- **[Dateispeicher: S3(Pro)]** Umbenennungsmodus-Option für S3 Pro-Speicher hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Migrationsmanager]** Verbesserte Migrationsprüfungen, SQL-Download-Unterstützung, Protokollformatierung und Sichtbarkeit des Ausführungsprozesses von @cgyrock

### 🐛 Fehlerbehebungen

- **[Datenbank]**

  - Einbeziehen des Through-Scopes beim Abfragen von m2m-Beziehungen ([#8277](https://github.com/nocobase/nocobase/pull/8277)) von @2013xile
  - Objekt `appends` in `OptionsParser` korrigiert und `arrayLimit` für Parameter erhöht ([#8328](https://github.com/nocobase/nocobase/pull/8328)) von @mytharcher
- **[client]** Problem behoben, bei dem ein Fehler in den Filterformular-Blockeinstellungen eines m2m-Feldes ausgelöst wurde ([#8282](https://github.com/nocobase/nocobase/pull/8282)) von @mytharcher
- **[Asynchroner Aufgabenmanager]** Sprache beim Abbrechen von Hintergrundaufgaben korrigiert ([#8245](https://github.com/nocobase/nocobase/pull/8245)) von @mytharcher
- **[Dateimanager]** Problem behoben, bei dem ein Fehler beim Hochladen einer Datei größer als 5 MB auf AWS S3 ausgelöst wurde ([#8275](https://github.com/nocobase/nocobase/pull/8275)) von @mytharcher
- **[Workflow]** Datenbankereignisse wurden nach dem Aktualisieren der externen Datenquelle ungültig ([#8207](https://github.com/nocobase/nocobase/pull/8207)) von @cgyrock
- **[Sammlung: Baum]** Pfade nach dem Massenanlegen von Baumstruktur-Sammlungsknoten aktualisiert ([#8267](https://github.com/nocobase/nocobase/pull/8267)) von @2013xile
- **[Datenquelle: Externes PostgreSQL]** Datenbankereignisse wurden nach dem Aktualisieren der externen Datenquelle ungültig von @cgyrock
- **[Datenquelle: Externes Oracle]** Datenbankereignisse wurden nach dem Aktualisieren der externen Datenquelle ungültig von @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.6](https://www.nocobase.com/en/blog/v2.0.0-beta.6)

*Veröffentlichungsdatum: 2026-01-07*

### 🚀 Verbesserungen

- **[Workflow: Genehmigung]** Parameter in Abfragen vereinfacht und Leistung verbessert von @mytharcher

### 🐛 Fehlerbehebungen

- **[sdk]** Token-Sharing-Implementierung verbessert ([#8357](https://github.com/nocobase/nocobase/pull/8357)) von @chenos
- **[client]** Assoziationsfelder aus externen Datenquellen laden keine Assoziationsdaten in Formularblöcken ([#8356](https://github.com/nocobase/nocobase/pull/8356)) von @katherinehhh
- **[Workflow: Schleifenknoten]** Problem behoben, bei dem ein fehlgeschlagener Knoten in einem Bedingungszweig den Status nicht an den übergeordneten Verzweigungsknoten weitergeben konnte ([#8360](https://github.com/nocobase/nocobase/pull/8360)) von @mytharcher
- **[Zugriffskontrolle]** Assoziationsfeldern erlauben, die Zielschlüssel für die Verknüpfung zu verwenden ([#8352](https://github.com/nocobase/nocobase/pull/8352)) von @2013xile
- **[Workflow: Webhook]** Problem behoben, bei dem ein 404-Fehler beim POST an eine Webhook-URL in einer Sub-App ausgelöst wurde von @mytharcher
- **[E-Mail-Manager]** Problem behoben, bei dem der Outlook-Antwortlink gelegentlich getrennt wurde von @jiannx

### [v2.0.0-beta.5](https://www.nocobase.com/en/blog/v2.0.0-beta.5)

*Veröffentlichungsdatum: 2026-01-06*

### 🚀 Verbesserungen

- **[client]** Automatische Größenanpassung des Textbereichs im KI-Bearbeitungsaufgabenformular. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) von @heziqiang
- **[Workflow: Genehmigung]** Reparaturlogik für die Synchronisierung von Zielgruppen nach der Migration hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem Feld- und Aktionsberechtigungen nach dem Paginieren in Detail-, Listen- und Formularblöcken nicht neu berechnet wurden. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) von @gchust
- **[Workflow: Genehmigung]** Build-Fehler aufgrund fehlender Abhängigkeiten behoben von @mytharcher

### [v2.0.0-beta.4](https://www.nocobase.com/en/blog/v2.0.0-beta.4)

*Veröffentlichungsdatum: 2026-01-05*

### 🐛 Fehlerbehebungen

- **[Aktion: Datensätze importieren]** Falsche Fehlermeldung korrigiert, wenn während des asynchronen XLSX-Imports ein Unique-Constraint-Fehler ausgelöst wird ([#8342](https://github.com/nocobase/nocobase/pull/8342)) von @cgyrock
- **[Aktion: Datensätze exportieren Pro]** Fehler behoben, wenn Sub-Anwendungen asynchrone Import-/Exportaufgaben ausführen, während die Hauptanwendung das Import/Export Pro-Plugin nicht aktiviert hat von @cgyrock
- **[E-Mail-Manager]** "Allen antworten"-Button anzeigen und Datenbereich unterstützt das Filtern von Unternachrichten. von @jiannx

### [v2.0.0-beta.3](https://www.nocobase.com/en/blog/v2.0.0-beta.3)

*Veröffentlichungsdatum: 2026-01-05*

### 🚀 Verbesserungen

- **[Zugriffskontrolle]** Berechtigungsprüfungen beim Ändern von verschachtelten Assoziationsfeldern verbessert ([#7856](https://github.com/nocobase/nocobase/pull/7856)) von @2013xile

### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem Assoziationsfelder in der `FilterAction`-Komponente nicht korrekt waren ([#8295](https://github.com/nocobase/nocobase/pull/8295)) von @mytharcher
- **[Datenquelle: Haupt]** Metadaten der Ansichtssammlung sollten Quellfeldoptionen enthalten ([#8337](https://github.com/nocobase/nocobase/pull/8337)) von @2013xile
- **[Workflow: Genehmigung]** Problem behoben, bei dem Filterfelder im Aufgabencenter nicht korrekt funktionierten von @mytharcher

### [v2.0.0-beta.2](https://www.nocobase.com/en/blog/v2.0.0-beta.2)

*Veröffentlichungsdatum: 2026-01-04*

### 🐛 Fehlerbehebungen

- **[flow-engine]** Problem behoben, bei dem beim mehrmaligen Öffnen von Popups eine Zustandsverschmutzung auftreten konnte. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) von @gchust
- **[Datenbank]** Objekt `appends` in `OptionsParser` korrigiert und `arrayLimit` für Parameter erhöht ([#8328](https://github.com/nocobase/nocobase/pull/8328)) von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.63](https://www.nocobase.com/en/blog/v2.0.0-alpha.63)

*Veröffentlichungsdatum: 2026-01-07*

### 🚀 Verbesserungen

- **[client]**

  - Vollständiges Neu-Rendern der Tabelle beim Aktualisieren einer Zelle verhindert ([#8349](https://github.com/nocobase/nocobase/pull/8349)) von @katherinehhh
  - Automatische Größenanpassung des Textbereichs im KI-Bearbeitungsaufgabenformular. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) von @heziqiang
- **[Workflow: Genehmigung]**

  - Reparaturlogik für die Synchronisierung von Zielgruppen nach der Migration hinzugefügt von @mytharcher
  - Parameter in Abfragen vereinfacht und Leistung verbessert von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem Feld- und Aktionsberechtigungen nach dem Paginieren in Detail-, Listen- und Formularblöcken nicht neu berechnet wurden. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) von @gchust
  - Assoziationsfelder aus externen Datenquellen laden keine Assoziationsdaten in Formularblöcken ([#8356](https://github.com/nocobase/nocobase/pull/8356)) von @katherinehhh
- **[sdk]** Token-Sharing-Implementierung verbessert ([#8357](https://github.com/nocobase/nocobase/pull/8357)) von @chenos
- **[Zugriffskontrolle]** Assoziationsfeldern erlauben, die Zielschlüssel für die Verknüpfung zu verwenden ([#8352](https://github.com/nocobase/nocobase/pull/8352)) von @2013xile
- **[Workflow: Schleifenknoten]** Problem behoben, bei dem ein fehlgeschlagener Knoten in einem Bedingungszweig den Status nicht an den übergeordneten Verzweigungsknoten weitergeben konnte ([#8360](https://github.com/nocobase/nocobase/pull/8360)) von @mytharcher
- **[Workflow: Webhook]** Problem behoben, bei dem ein 404-Fehler beim POST an eine Webhook-URL in einer Sub-App ausgelöst wurde von @mytharcher
- **[Workflow: Genehmigung]** Build-Fehler aufgrund fehlender Abhängigkeiten behoben von @mytharcher
- **[E-Mail-Manager]** Problem behoben, bei dem der Outlook-Antwortlink gelegentlich getrennt wurde von @jiannx

### [v2.0.0-alpha.62](https://www.nocobase.com/en/blog/v2.0.0-alpha.62)

*Veröffentlichungsdatum: 2026-01-05*

### 🚀 Verbesserungen

- **[Zugriffskontrolle]** Berechtigungsprüfungen beim Ändern von verschachtelten Assoziationsfeldern verbessert ([#7856](https://github.com/nocobase/nocobase/pull/7856)) von @2013xile

### 🐛 Fehlerbehebungen

- **[client]**

  - Verfeinerungslogik für optionales targetKey korrigiert ([#8333](https://github.com/nocobase/nocobase/pull/8333)) von @katherinehhh
  - Problem behoben, bei dem Assoziationsfelder in der `FilterAction`-Komponente nicht korrekt waren ([#8295](https://github.com/nocobase/nocobase/pull/8295)) von @mytharcher
  - Falsche Filterparameter für das Beziehungsfeld "Auswählen" in bearbeitbarer Untertabelle korrigiert ([#8335](https://github.com/nocobase/nocobase/pull/8335)) von @katherinehhh
- **[flow-engine]** Problem behoben, bei dem beim mehrmaligen Öffnen von Popups eine Zustandsverschmutzung auftreten konnte. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) von @gchust
- **[Datenbank]** Objekt `appends` in `OptionsParser` korrigiert und `arrayLimit` für Parameter erhöht ([#8328](https://github.com/nocobase/nocobase/pull/8328)) von @mytharcher
- **[Aktion: Datensätze importieren]** Falsche Fehlermeldung korrigiert, wenn während des asynchronen XLSX-Imports ein Unique-Constraint-Fehler ausgelöst wird ([#8342](https://github.com/nocobase/nocobase/pull/8342)) von @cgyrock
- **[Datenquelle: Haupt]** Metadaten der Ansichtssammlung sollten Quellfeldoptionen enthalten ([#8337](https://github.com/nocobase/nocobase/pull/8337)) von @2013xile
- **[Aktion: Datensätze exportieren Pro]** Fehler behoben, wenn Sub-Anwendungen asynchrone Import-/Exportaufgaben ausführen, während die Hauptanwendung das Import/Export Pro-Plugin nicht aktiviert hat von @cgyrock
- **[Workflow: Genehmigung]** Problem behoben, bei dem Filterfelder im Aufgabencenter nicht korrekt funktionierten von @mytharcher
- **[E-Mail-Manager]** "Allen antworten"-Button anzeigen und Datenbereich unterstützt das Filtern von Unternachrichten. von @jiannx

### [v2.0.0-alpha.59](https://www.nocobase.com/en/blog/v2.0.0-alpha.59)

*Veröffentlichungsdatum: 2025-12-25*

### 🚀 Verbesserungen

- **[flow-engine]**
  - Leistungsprobleme beim Wechseln der Konfigurationsmodi optimiert ([#8241](https://github.com/nocobase/nocobase/pull/8241)) von @zhangzhonghe
  - Unterstützung für das FormData-Objekt in der runjs-Umgebung. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) von @gchust

### 🐛 Fehlerbehebungen

- **[client]** Stapelüberlauf durch Endlosschleife beim Lazy-Loading von Assoziationsfeldern behoben ([#8262](https://github.com/nocobase/nocobase/pull/8262)) von @zhangzhonghe
