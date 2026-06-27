---
title: "NocoBase wöchentliche Updates: Optimierung der Speicherlogik"
description: "Die Updates dieser Woche umfassen: Unterstützung für die Suche nach Feldern in der Filterkomponente, Unterstützung für globale Variablen in der Speicherkonfiguration und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.16](https://www.nocobase.com/en/blog/v1.6.16)

*Veröffentlichungsdatum: 2025-04-03*

#### 🐛 Fehlerbehebungen

- **[client]**

  - x-disabled-Eigenschaft wirkt nicht bei Formularfeldern ([#6610](https://github.com/nocobase/nocobase/pull/6610)) von @katherinehhh
  - Anzeigeproblem der Feldbezeichnung, um Abschneiden durch Doppelpunkt zu verhindern ([#6599](https://github.com/nocobase/nocobase/pull/6599)) von @katherinehhh
- **[database]** Beim Löschen von 1:n-Datensätzen, wenn sowohl `filter` als auch `filterByTk` übergeben werden und `filter` ein Assoziationsfeld enthält, wird `filterByTk` ignoriert ([#6606](https://github.com/nocobase/nocobase/pull/6606)) von @2013xile

### [v1.6.17](https://www.nocobase.com/en/blog/v1.6.17)

*Veröffentlichungsdatum: 2025-04-09*

#### 🚀 Verbesserungen

- **[utils]** Dauer-Erweiterung für dayjs hinzugefügt ([#6630](https://github.com/nocobase/nocobase/pull/6630)) von @mytharcher
- **[client]**

  - Unterstützung für die Feldsuche in der Filterkomponente ([#6627](https://github.com/nocobase/nocobase/pull/6627)) von @mytharcher
  - `trim`-API für `Input` und `Variable.TextArea` hinzugefügt ([#6624](https://github.com/nocobase/nocobase/pull/6624)) von @mytharcher
- **[Fehlerbehandlung]** Unterstützung für benutzerdefinierte Titel in der AppError-Komponente. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) von @sheldon66
- **[IP-Einschränkung]** IP-Einschränkungsmeldungsinhalt aktualisiert. von @sheldon66
- **[Dateispeicher: S3(Pro)]** Unterstützung für globale Variablen in der Speicherkonfiguration von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Regel mit 'any'-Bedingung wirkt nicht, wenn die Bedingungsliste leer ist ([#6628](https://github.com/nocobase/nocobase/pull/6628)) von @katherinehhh
  - Datenproblem mit Gantt-Block in Baum-Sammlung ([#6617](https://github.com/nocobase/nocobase/pull/6617)) von @katherinehhh
  - Die Beziehungsfelder im Filterformular melden nach dem Seitenrefresh einen Fehler, weil x-data-source nicht mitgeführt wird ([#6619](https://github.com/nocobase/nocobase/pull/6619)) von @zhangzhonghe
  - Variablen-Parse-Fehler, wenn URL-Parameter chinesische Zeichen enthalten ([#6618](https://github.com/nocobase/nocobase/pull/6618)) von @katherinehhh
- **[Benutzer]** Problem beim Parsen des Benutzerprofil-Formularschemas ([#6635](https://github.com/nocobase/nocobase/pull/6635)) von @2013xile
- **[Mobil]** Einzelfeld-Auswahl mit 'enthält'-Filter auf Mobilgeräten unterstützt keine Mehrfachauswahl ([#6629](https://github.com/nocobase/nocobase/pull/6629)) von @katherinehhh
- **[Aktion: Datensätze exportieren]** Fehlende Filterparameter beim Exportieren von Daten nach Seitenwechsel ([#6633](https://github.com/nocobase/nocobase/pull/6633)) von @katherinehhh
- **[E-Mail-Manager]** Berechtigungsproblem: E-Mail-Liste kann nicht angezeigt werden von @jiannx
- **[Dateispeicher: S3(Pro)]]** Fehler an Benutzer ausgeben, wenn Logo in S3 Pro-Speicher hochgeladen wird (als Standard gesetzt) von @mytharcher
- **[Workflow: Genehmigung]** `updatedAt` nach Migration geändert behoben von @mytharcher
- **[Migrationsmanager]** Erstellungszeit des Migrationslogs wird in einigen Umgebungen falsch angezeigt von @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.14](https://www.nocobase.com/en/blog/v1.7.0-beta.14)

*Veröffentlichungsdatum: 2025-04-09*

#### 🎉 Neue Funktionen

- **[UI-Schema-Speicher]** Lokalisierungsmodul für UISchema hinzugefügt, das benutzerdefinierte Übersetzungen für Schema-Titel und -Beschreibung ermöglicht ([#6574](https://github.com/nocobase/nocobase/pull/6574)) von @chenos

#### 🚀 Verbesserungen

- **[utils]** Dauer-Erweiterung für dayjs hinzugefügt ([#6630](https://github.com/nocobase/nocobase/pull/6630)) von @mytharcher
- **[client]**

  - Unterstützung für die Feldsuche in der Filterkomponente ([#6627](https://github.com/nocobase/nocobase/pull/6627)) von @mytharcher
  - `trim`-API für `Input` und `Variable.TextArea` hinzugefügt ([#6624](https://github.com/nocobase/nocobase/pull/6624)) von @mytharcher
- **[Workflow]** Optimierung der Job-Speicherlogik ([#6613](https://github.com/nocobase/nocobase/pull/6613)) von @mytharcher
- **[Fehlerbehandlung]** Unterstützung für benutzerdefinierte Titel in der AppError-Komponente. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) von @sheldon66
- **[IP-Einschränkung]** IP-Einschränkungsmeldungsinhalt aktualisiert. von @sheldon66
- **[Dateispeicher: S3(Pro)]** Unterstützung für globale Variablen in der Speicherkonfiguration von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Die Beziehungsfelder im Filterformular melden nach dem Seitenrefresh einen Fehler, weil x-data-source nicht mitgeführt wird ([#6619](https://github.com/nocobase/nocobase/pull/6619)) von @zhangzhonghe
  - Datenproblem mit Gantt-Block in Baum-Sammlung ([#6617](https://github.com/nocobase/nocobase/pull/6617)) von @katherinehhh
  - Leerer Bereich zwischen dem Titel der Blockvorlagen-Konfigurationsseite und dem Menü ([#6625](https://github.com/nocobase/nocobase/pull/6625)) von @gchust
  - Regel mit 'any'-Bedingung wirkt nicht, wenn die Bedingungsliste leer ist ([#6628](https://github.com/nocobase/nocobase/pull/6628)) von @katherinehhh
  - x-disabled-Eigenschaft wirkt nicht bei Formularfeldern ([#6610](https://github.com/nocobase/nocobase/pull/6610)) von @katherinehhh
  - Variablen-Parse-Fehler, wenn URL-Parameter chinesische Zeichen enthalten ([#6618](https://github.com/nocobase/nocobase/pull/6618)) von @katherinehhh
  - Anzeigeproblem der Feldbezeichnung, um Abschneiden durch Doppelpunkt zu verhindern ([#6599](https://github.com/nocobase/nocobase/pull/6599)) von @katherinehhh
- **[Aktion: Datensätze exportieren]** Fehlende Filterparameter beim Exportieren von Daten nach Seitenwechsel ([#6633](https://github.com/nocobase/nocobase/pull/6633)) von @katherinehhh
- **[Benutzer]** Problem beim Parsen des Benutzerprofil-Formularschemas ([#6635](https://github.com/nocobase/nocobase/pull/6635)) von @2013xile
- **[Mobil]** Einzelfeld-Auswahl mit 'enthält'-Filter auf Mobilgeräten unterstützt keine Mehrfachauswahl ([#6629](https://github.com/nocobase/nocobase/pull/6629)) von @katherinehhh
- **[Zugriffskontrolle]** Korrekte Berechnungslogik für Rollenvereinigung ([#6605](https://github.com/nocobase/nocobase/pull/6605)) von @aaaaaajie
- **[Block: Vorlage]** Ändern und Löschen derselben Felder aus Vorlage und Block, nachdem ein Block aus einer Vorlage erstellt wurde, kann zu Rendering-Fehlern führen ([#6626](https://github.com/nocobase/nocobase/pull/6626)) von @gchust
- **[E-Mail-Manager]**

  - Fehlendes await für den nächsten Aufruf behoben. von @jiannx
  - Berechtigungsproblem: E-Mail-Liste kann nicht angezeigt werden von @jiannx
- **[Dateispeicher: S3(Pro)]**

  - Fehlendes await für den nächsten Aufruf behoben. von @jiannx
  - Fehler an Benutzer ausgeben, wenn Logo in S3 Pro-Speicher hochgeladen wird (als Standard gesetzt) von @mytharcher
- **[Workflow: Genehmigung]** `updatedAt` nach Migration geändert behoben von @mytharcher
- **[Migrationsmanager]** Erstellungszeit des Migrationslogs wird in einigen Umgebungen falsch angezeigt von @gchust
