---
title: "NocoBase wöchentliche Updates: Einige kommerzielle Plugins in Open Source umgewandelt"
description: "Die Updates dieser Woche umfassen: Die kommerziellen Plugins für Abteilung, Anhang-URL und Workflow-Antwortnachricht werden jetzt kostenlos zur Verfügung gestellt."
---

Fasse die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen findest du in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie ist hauptsächlich für Testnutzer gedacht, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.18](https://www.nocobase.com/en/blog/v1.6.18)

*Veröffentlichungsdatum: 2025-04-11*

#### 🚀 Verbesserungen

- **[Client]**

  - Standard-Typ-Fallback-API für `Variable.Input` hinzugefügt ([#6644](https://github.com/nocobase/nocobase/pull/6644)) von @mytharcher
  - Eingabeaufforderungen für nicht konfigurierte Seiten optimiert ([#6641](https://github.com/nocobase/nocobase/pull/6641)) von @zhangzhonghe
- **[Workflow: Verzögerungsknoten]** Unterstützung für die Verwendung von Variablen für die Dauer ([#6621](https://github.com/nocobase/nocobase/pull/6621)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Aktualisierungseinstellungen für den Trigger-Workflow-Button hinzugefügt von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Überschneidung der Untertabellenbeschreibung mit dem "Neu hinzufügen"-Button ([#6646](https://github.com/nocobase/nocobase/pull/6646)) von @katherinehhh
  - Gestrichelte Unterstreichung durch horizontales Formular-Layout im Modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) von @katherinehhh
- **[Dateispeicher: S3(Pro)]** Fehlendes `await` für den nächsten Aufruf behoben. von @jiannx
- **[E-Mail-Manager]** Fehlendes `await` für den nächsten Aufruf behoben. von @jiannx

### [v1.6.19](https://www.nocobase.com/en/blog/v1.6.19)

*Veröffentlichungsdatum: 2025-04-14*

#### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem Vorschaubilder verdeckt wurden ([#6651](https://github.com/nocobase/nocobase/pull/6651)) von @zhangzhonghe
  - Im Formularblock wird der Standardwert der Feldkonfiguration zuerst als ursprünglicher Variablenstring angezeigt und verschwindet dann ([#6649](https://github.com/nocobase/nocobase/pull/6649)) von @zhangzhonghe

### [v1.6.20](https://www.nocobase.com/en/blog/v1.6.20)

*Veröffentlichungsdatum: 2025-04-14*

#### 🎉 Neue Funktionen

- **[Abteilungen]** Die Plugins für Abteilung, Anhang-URL und Workflow-Antwortnachricht kostenlos gemacht ([#6663](https://github.com/nocobase/nocobase/pull/6663)) von @chenos

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Das Filterformular sollte die Eingabeaufforderung "Ungespeicherte Änderungen" nicht anzeigen ([#6657](https://github.com/nocobase/nocobase/pull/6657)) von @zhangzhonghe
  - Option "Mehrfachauswahl zulassen" funktioniert nicht für Beziehungsfelder ([#6661](https://github.com/nocobase/nocobase/pull/6661)) von @katherinehhh
  - Im Filterformular wird die Filterung trotzdem ausgelöst, wenn der Filter-Button geklickt wird, aber Felder die Validierung nicht bestanden haben ([#6659](https://github.com/nocobase/nocobase/pull/6659)) von @zhangzhonghe
  - Das Wechseln zum Gruppenmenü sollte nicht zu einer Seite springen, die bereits im Menü ausgeblendet wurde ([#6654](https://github.com/nocobase/nocobase/pull/6654)) von @zhangzhonghe
- **[Dateispeicher: S3(Pro)]**

  - Sprache organisieren von @jiannx
  - Individuelle Baseurl- und Public-Einstellungen, Verbesserung der S3 Pro-Speicherkonfigurations-UX von @jiannx
- **[Migrationsmanager]** Die Option zum Überspringen des automatischen Backups wird ungültig, wenn während der Migration ein Popup für Umgebungsvariablen erscheint von @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.15](https://www.nocobase.com/en/blog/v1.7.0-beta.15)

*Veröffentlichungsdatum: 2025-04-10*

#### 🚀 Verbesserungen

- **[Workflow: Verzögerungsknoten]** Unterstützung für die Verwendung von Variablen für die Dauer ([#6621](https://github.com/nocobase/nocobase/pull/6621)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Workflow]** OOM-Fehler beim Erstellen eines Jobs mit unsicherer Integer-ID behoben ([#6637](https://github.com/nocobase/nocobase/pull/6637)) von @mytharcher
- **[Block: Vorlage]** Wenn die vom Seitenblock verwendete referenzierte Vorlage gelöscht wurde, schlägt das Speichern als Vorlage fehl ([#6638](https://github.com/nocobase/nocobase/pull/6638)) von @gchust

### [v1.7.0-beta.16](https://www.nocobase.com/en/blog/v1.7.0-beta.16)

*Veröffentlichungsdatum: 2025-04-12*

#### 🚀 Verbesserungen

- **[Client]**

  - Standard-Typ-Fallback-API für `Variable.Input` hinzugefügt ([#6644](https://github.com/nocobase/nocobase/pull/6644)) von @mytharcher
  - Eingabeaufforderungen für nicht konfigurierte Seiten optimiert ([#6641](https://github.com/nocobase/nocobase/pull/6641)) von @zhangzhonghe
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Aktualisierungseinstellungen für den Trigger-Workflow-Button hinzugefügt von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Workflow-Knoten-Bearbeitungsdrawer-Titel zeigt [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) von @katherinehhh
  - Überschneidung der Untertabellenbeschreibung mit dem "Neu hinzufügen"-Button ([#6646](https://github.com/nocobase/nocobase/pull/6646)) von @katherinehhh
  - Falscher Stil für Variableneingabe ([#6645](https://github.com/nocobase/nocobase/pull/6645)) von @gchust
  - Gestrichelte Unterstreichung durch horizontales Formular-Layout im Modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) von @katherinehhh
- **[Workflow]** Problem behoben, bei dem die Statistikinformationen von Workflows beim Start der App nicht geladen wurden ([#6642](https://github.com/nocobase/nocobase/pull/6642)) von @mytharcher

### [v1.7.0-beta.17](https://www.nocobase.com/en/blog/v1.7.0-beta.17)

*Veröffentlichungsdatum: 2025-04-15*

#### 🎉 Neue Funktionen

- **[Abteilungen]** Die Plugins für Abteilung, Anhang-URL und Workflow-Antwortnachricht kostenlos gemacht ([#6663](https://github.com/nocobase/nocobase/pull/6663)) von @chenos
- **[Aktion: Stapelaktualisierung]** Unterstützung zum Aktualisieren von Daten in anderen Datenblöcken nach dem Aktualisieren von Daten in einem Block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) von @zhangzhonghe

#### 🚀 Verbesserungen

- **[Workflow]** Unterstützung für feste Popup-URLs für Workflow-Aufgaben ([#6640](https://github.com/nocobase/nocobase/pull/6640)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Das Wechseln zum Gruppenmenü sollte nicht zu einer Seite springen, die bereits im Menü ausgeblendet wurde ([#6654](https://github.com/nocobase/nocobase/pull/6654)) von @zhangzhonghe
  - Das Filterformular sollte die Eingabeaufforderung "Ungespeicherte Änderungen" nicht anzeigen ([#6657](https://github.com/nocobase/nocobase/pull/6657)) von @zhangzhonghe
  - Problem behoben, bei dem Vorschaubilder verdeckt wurden ([#6651](https://github.com/nocobase/nocobase/pull/6651)) von @zhangzhonghe
  - Im Filterformular wird die Filterung trotzdem ausgelöst, wenn der Filter-Button geklickt wird, aber Felder die Validierung nicht bestanden haben ([#6659](https://github.com/nocobase/nocobase/pull/6659)) von @zhangzhonghe
  - Option "Mehrfachauswahl zulassen" funktioniert nicht für Beziehungsfelder ([#6661](https://github.com/nocobase/nocobase/pull/6661)) von @katherinehhh
  - Im Formularblock wird der Standardwert der Feldkonfiguration zuerst als ursprünglicher Variablenstring angezeigt und verschwindet dann ([#6649](https://github.com/nocobase/nocobase/pull/6649)) von @zhangzhonghe
- **[Sammlungsfeld: Anhang(URL)]** Erlaubt nur Dateisammlungen mit öffentlichem URL-Zugriff ([#6664](https://github.com/nocobase/nocobase/pull/6664)) von @katherinehhh
- **[Dateispeicher: S3(Pro)]**

  - Individuelle Baseurl- und Public-Einstellungen, Verbesserung der S3 Pro-Speicherkonfigurations-UX von @jiannx
  - Sprache organisieren von @jiannx
- **[Workflow: Genehmigung]** Unterstützung für feste URLs für Genehmigungselemente im Aufgabencenter von @mytharcher
- **[Migrationsmanager]** Die Option zum Überspringen des automatischen Backups wird ungültig, wenn während der Migration ein Popup für Umgebungsvariablen erscheint von @gchust

### [v1.7.0-beta.18](https://www.nocobase.com/en/blog/v1.7.0-beta.18)

*Veröffentlichungsdatum: 2025-04-16*

#### 🎉 Neue Funktionen

- **[Sammlungsfeld: Code]** Code-Schnittstelle hinzugefügt von @mytharcher

#### 🚀 Verbesserungen

- **[create-nocobase-app]** Einige Abhängigkeiten auf die neuesten Versionen aktualisiert ([#6673](https://github.com/nocobase/nocobase/pull/6673)) von @chenos

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Geerbte Felder werden in der Feldzuweisungsliste der aktuellen Sammlung angezeigt ([#6666](https://github.com/nocobase/nocobase/pull/6666)) von @katherinehhh
  - Stilproblem bei der Variableingabe beim Festlegen des Standardwerts ([#6668](https://github.com/nocobase/nocobase/pull/6668)) von @katherinehhh
- **[Build]** Die Build-Ausgabe ist falsch, wenn ein Plugin von einigen AMD-Bibliotheken abhängt ([#6665](https://github.com/nocobase/nocobase/pull/6665)) von @gchust
- **[Block: iframe]** Vertikale Bildlaufleiste erscheint, wenn der Iframe-Block auf volle Höhe eingestellt ist ([#6675](https://github.com/nocobase/nocobase/pull/6675)) von @katherinehhh
- **[Zugriffskontrolle]** Fehler behoben, der beim Serialisieren des Rollenmodells in den Cache ausgelöst wurde ([#6674](https://github.com/nocobase/nocobase/pull/6674)) von @mytharcher
- **[Workflow]** Migrationsfehler behoben, der von MySQL ausgelöst wurde ([#6667](https://github.com/nocobase/nocobase/pull/6667)) von @mytharcher
- **[E-Mail-Manager]** Fehler behoben: Kann nicht synchronisieren, keine Betreffanzeige und andere kleine Fehler von @jiannx
