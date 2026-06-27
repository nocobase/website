---
title: "Wöchentliche Updates｜Konfigurationsformular für externe Vektorspeicher in KI-Wissensdatenbanken hinzugefügt"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 12. bis 21. Juni 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.1.9](https://www.nocobase.com/en/blog/v2.1.9)

*Veröffentlichungsdatum: 20.06.2026*

### 🚀 Verbesserungen

- **[client-v2]** Option zum Überschreiben von Werten für Feldeinstellungen hinzugefügt. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) von @gchust

### 🐛 Fehlerbehebungen

- **[client-v2]**

  - Behoben: Benutzerdefinierte Aktions-Workflow-Trigger-Buttons sendeten benutzerdefinierten Kontext-JSON unter einer zusätzlichen `values`-Eigenschaft oder als serialisierten String. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) von @mytharcher
  - Behoben: Ein Problem, bei dem die Konfiguration eines Assoziationsfeldwerts als fester Wert oder Standardwert nicht wirksam wurde. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) von @gchust
- **[auth]** Verschlüsselte Passwortdaten werden nicht mehr in Antworten des Anmeldestatus enthalten sein ([#9836](https://github.com/nocobase/nocobase/pull/9836)) von @2013xile
- **[app]** Ignoriere nicht zusammenhängende currentScript beim Ableiten des öffentlichen Plugin-Pfads ([#9839](https://github.com/nocobase/nocobase/pull/9839)) von @chenos
- **[UI-Vorlagen]** Behoben: Falscher Standardkontext für ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) von @gchust

### [v2.1.8](https://www.nocobase.com/en/blog/v2.1.8)

*Veröffentlichungsdatum: 18.06.2026*

### 🐛 Fehlerbehebungen

- **[ai]**

  - `@langchain/openai` auf Patch-Level-Updates für KI-Pakete eingeschränkt. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) von @cgyrock
  - Inkompatible LangChain-Abhängigkeitsauflösung für KI-Plugins behoben. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) von @cgyrock
- **[KI: Wissensdatenbank]**

  - Unklare Fehlermeldungen beim Aktivieren des KI-Wissensdatenbank-Plugins ohne verfügbares KI-Plugin behoben. von @cgyrock
  - Inkompatible LangChain-Abhängigkeitsauflösung für das KI-Wissensdatenbank-Plugin behoben. von @cgyrock

### [v2.1.7](https://www.nocobase.com/en/blog/v2.1.7)

*Veröffentlichungsdatum: 18.06.2026*

### 🎉 Neue Funktionen

- **[Backup-Manager]** Unterstützung für Backup und Wiederherstellung mit KingBase als primärer Datenbank ([#9791](https://github.com/nocobase/nocobase/pull/9791)) von @2013xile
- **[Migrations-Manager]** Unterstützung für Migrationen mit KingBase als primärer Datenbank. von @2013xile

### 🚀 Verbesserungen

- **[KI: Wissensdatenbank]** Verbesserte Abfrage und Dokumentation der KI-Wissensdatenbank. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) von @cgyrock
- **[cli]** Umgebungs-Konfigurationsschema-Version hinzugefügt ([#9782](https://github.com/nocobase/nocobase/pull/9782)) von @chenos
- **[Workflow]** Test für Update-Optionen stabilisiert ([#9773](https://github.com/nocobase/nocobase/pull/9773)) von @mytharcher
- **[Dateimanager]** Verbesserte PDF-Vorschauen: PDF-Dateien von fremden Ursprüngen verwenden jetzt den nativen Browser-Viewer, während PDF-Dateien vom gleichen Ursprung weiterhin PDF.js verwenden. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) von @mytharcher
- **[Backup-Manager]** Tabellen, deren Sammlungs-`dataCategory` als `'runtime'` markiert ist, werden jetzt automatisch von Backups ausgeschlossen. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) von @cgyrock
- **[KI: Wissensdatenbank]** Verbesserte Dokumentensegmentierung, Segmentverwaltung, Treffertests und Unterstützung für Workflow-Knoten in der KI-Wissensdatenbank. von @cgyrock

### 🐛 Fehlerbehebungen

- **[client-v2]**

  - Behoben: Ein Problem, bei dem das Absenden eines Formulars eine falsche Meldung anzeigte, wenn ein Unterformular eine Untertabelle enthielt. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) von @gchust
  - Behoben: Ein Problem, bei dem Ereignisflüsse in Spalten von Untertabellen falsch ausgeführt wurden. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) von @gchust
  - Entfernte unerwartete `updateAssociationValues` aus Assoziationsfeldern ([#9812](https://github.com/nocobase/nocobase/pull/9812)) von @katherinehhh
  - Behoben: Nicht übersetzte Ja/Nein-Optionen in v2-Filterformular-Checkbox-Dropdowns. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) von @katherinehhh
  - Behoben: Das Problem, dass Ereignisflusseinstellungen nach dem Speichern eines Blocks als Vorlage nicht mehr aktualisiert werden konnten. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) von @gchust
  - Behoben: Falsche Anzeige und Formateinstellungen, wenn v2-Tabellen-Assoziationstitelfelder Zeit-, Nur-Datum- oder Datum/Uhrzeit-Felder verwenden. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) von @katherinehhh
- **[Workflow]** Behoben: Wiederherstellung des Workflow-Dispatchers nach unerwarteten Dispatch-Fehlern. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) von @mytharcher
- **[Dateimanager]** Behoben: 404-Fehler beim Hochladen von Dateien in Anhang-URL-Felder in externen Datenquellen ([#9809](https://github.com/nocobase/nocobase/pull/9809)) von @2013xile
- **[Aktion: Benutzerdefinierte Anfrage]** Behoben: V2-Aktionen für benutzerdefinierte Anfragen zeigten einen unnötigen Fehler an, wenn keine Anfrageeinstellungen konfiguriert waren. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) von @katherinehhh
- **[KI-Mitarbeiter]**

  - Behoben: Ein Problem, bei dem KI-Mitarbeiter Untertabellendaten nicht korrekt ausfüllen konnten. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) von @gchust
  - Behoben: Verknüpfungsaufgaben-Trigger für KI-Mitarbeiter, sodass Anhänge aus dem aktuellen Arbeitskontext beim Ausführen einer Aufgabe über das Verknüpfungsprofil einbezogen werden. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) von @cgyrock
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behoben: Aktionspanel-v2-Trigger-Workflow-Buttons zeigten Erfolg an und sendeten eine Anfrage, wenn kein Workflow gebunden war. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) von @mytharcher
- **[Flow-Engine]** Behoben: Ein Problem, bei dem aktuelle Datensatzformulare und -details in Popups falsche Daten enthalten konnten, wenn sie von KI erstellt wurden. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) von @gchust
- **[Async-Task-Manager]** Behoben: Fehler beim Herunterladen von Async-Task-Dateien, wenn die Task-ID in `filterByTk` fehlte. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) von @mytharcher
- **[Datenquelle: Externes NocoBase]** Proxy für Datei-Upload- und Speicher-Aktionen der externen NocoBase-Datenquelle über die Upload-Datenquelle von @2013xile
- **[Multi-Space]** Behoben: Berechtigungsfehler, wenn Space-Administratoren Benutzer ohne Zugriff auf das Benutzer-E-Mail-Feld hinzufügten. von @jiannx
- **[Workflow: Unterworkflow]** Behoben: Asynchrone Unterworkflows, sodass übergeordnete Workflows nach einem Worker-Neustart oder Verlust der In-Memory-Ereigniszuordnung fortgesetzt werden können. von @mytharcher
- **[App-Supervisor]** Behoben: Ein Absturz, wenn entfernte WebSocket-Proxy-Antworten fehlschlugen von @2013xile

### [v2.1.5](https://www.nocobase.com/en/blog/v2.1.5)

*Veröffentlichungsdatum: 15.06.2026*

### 🎉 Neue Funktionen

- **[Workflow: Mailer-Knoten]** Unterstützung zum Senden von Anhängen in Workflow-Mailer-Knoten hinzugefügt. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) von @mytharcher

### 🚀 Verbesserungen

- **[client-v2]** Spaltendatenbereiche von Beziehungsfeldern in Formular-Untertabellen unterstützen jetzt Variablen des aktuellen Elements. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) von @gchust
- **[undefined]** Der chinesische Dokumentationsname des Versionierungs-Plugins wurde auf „版本控制“ vereinheitlicht. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) von @cgyrock
- **[Dateimanager]** Unterstützung für auswählbaren Text in PDF-Vorschauen des Dateimanagers für PDFs mit eingebettetem Text hinzugefügt. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) von @mytharcher
- **[Aktion: Stapelbearbeitung]** Optimierte die Lademethode für v2-Aktions-Plugins und hielt die Reihenfolge migrierter Aktions-Buttons stabil. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) von @katherinehhh
- **[Versionierung]** Der chinesische Anzeigename des Versionierungs-Plugins wurde in „版本控制“ geändert. von @cgyrock

### 🐛 Fehlerbehebungen

- **[cli-v1]** Behoben: Ein Fehler beim Ausführen von `yarn dev` nach dem Upgrade von Projekten, die mit create-nocobase-app von 2.0 auf 2.1 erstellt wurden. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) von @Molunerfinn
- **[client-v2]** Behoben: Das Problem, dass der Migrationsfortschritt nicht die dedizierte Fortschrittsansicht anzeigte. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) von @2013xile
- **[flow-engine]** Behoben: Probleme mit der vietnamesischen und chinesischen IME-Eingabe in v2-Einzeilentext- und Mehrzeilentextfeldern. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) von @katherinehhh
- **[server]** Behoben: Unsichere Behandlung von Plugin-Namen in `pm:enable`, um Risiken lokaler Dateieinbindung während der Plugin-Auflösung zu vermeiden. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) von @mytharcher
- **[Dateimanager]** Behoben: Fehler bei PDF-Vorschauen aufgrund abnormalen Ladens des pdf.js-Worker-Moduls. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) von @mytharcher
- **[Block: Kanban]** Behoben: Das Problem, dass das Öffnen von Kalender-, Gantt- und Kanban-Blöcken außerhalb des Bearbeitungsmodus unerwartet ausgeblendete Popup-Aktionen persistierte und wiederholt Lösch-Anfragen sendete. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) von @jiannx
- **[Aktion: Datensätze exportieren Pro]** Verbesserte Verarbeitungsmoduseinstellungen und Erklärungshinweise für v2 Import/Export Pro. von @katherinehhh
- **[Migrations-Manager]** Behoben: Mögliche Fehler beim Importieren großer Migrationsdatendateien. von @2013xile
- **[Vorlagendruck]** Nicht unterstützte Vorlagendateitypen werden vor dem Start des Vorlagendrucks abgelehnt. von @2013xile

### [v2.1.4](https://www.nocobase.com/en/blog/v2.1.4)

*Veröffentlichungsdatum: 13.06.2026*

### 🚀 Verbesserungen

- **[Workflow]** Verbesserte Bearbeitung von Workflow-Metadaten durch Unterstützung der Beschreibungsbearbeitung im Detail-Popup und automatisches Ausfüllen der Quell-Workflow-Metadaten beim Duplizieren von Workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Aktion: Datensätze importieren]** Geänderte hochgeladene Importdateien zur Speicherung auf der Festplatte, um den Speicherdruck bei großen Datenimporten zu reduzieren. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) von @mytharcher
- **[Backup-Manager]** Behoben: Ein Sicherheitsproblem, bei dem unsichere PostgreSQL-Schema-Namen während der Backup-Wiederherstellung akzeptiert werden konnten. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) von @2013xile
- **[Workflow]**

  - Behoben: Timeout-Behandlung von Workflows, sodass abgebrochene Ausführungen und ihre ausstehenden Aufgaben atomar aktualisiert werden können. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) von @mytharcher
  - Behoben: Das Problem, dass das Feld „Zuletzt aktualisiert von“ des Workflows nach Änderungen an Workflow-Knoten nicht aktualisiert wurde. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Vermeidet das Parsen großer Dateien im Anforderungsknoten, bevor der Pro-Import eine asynchrone Aufgabe erstellt. von @mytharcher
- **[Versionierung]** Die Position des Versionierungs-Verknüpfungseintrags in der oberen Leiste wurde angepasst, sodass er sowohl im alten als auch im v2-Admin-Layout neben dem UI-Editor erscheint. von @cgyrock

### [v2.1.3](https://www.nocobase.com/en/blog/v2.1.3)

*Veröffentlichungsdatum: 12.06.2026*

### 🚀 Verbesserungen

- **[cli]**
  - Normalisiere App-Kompatibilitäts-Build-Versionen ([#9763](https://github.com/nocobase/nocobase/pull/9763)) von @chenos
  - Unterstützung zum Aktualisieren von Skills auf eine bestimmte Version ([#9760](https://github.com/nocobase/nocobase/pull/9760)) von @chenos

### 🐛 Fehlerbehebungen

- **[client]** Behoben: Das Problem, dass Felder in horizontalen Unterformularen zu schmal waren, um Daten anzuzeigen ([#9755](https://github.com/nocobase/nocobase/pull/9755)) von @zhangzhonghe
- **[Datenquellen-Manager]**

  - Behoben: Der leere Feldbearbeitungs-Drawer, der durch wiederholtes Neurendern auf der Seite „Felder konfigurieren“ der v1-externen Datenquelle verursacht wurde. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) von @katherinehhh
  - Behoben: Ein Problem, bei dem das Löschen der aktiven Sammlungskategorie im v1-Datenquellen-Manager dazu führen konnte, dass der Tab „Alle Sammlungen“ leer blieb. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) von @katherinehhh
- **[Async-Task-Manager]** Behoben: Falsche Anforderungs-IDs in Async-Task-Worker-Logs ([#9686](https://github.com/nocobase/nocobase/pull/9686)) von @2013xile
- **[Workflow: SQL-Knoten]** Behoben: Die Migration von Legacy-Template-Variablen für SQL-Workflows wurde für einige Beta-Version-Benutzer übersprungen. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) von @mytharcher
- **[KI-Mitarbeiter]**

  - Behoben: Verlust der Nachrichtenkonfiguration in Workflow-LLM-Knoten. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) von @cgyrock
  - Behoben: Ein Problem, bei dem in den KI-Mitarbeiter-Dialog eingefügte Anhänge nicht entfernt werden konnten. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) von @cgyrock
- **[Block: Kanban]** Behoben: URL-Unterstützung für Kalender und verwandte Popups. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) von @jiannx
- **[Workflow: Genehmigung]** Behoben: Das Problem, dass zugehörige Daten in v2-Genehmigungsformularen nicht angezeigt wurden von @zhangzhonghe

### [v2.1.2](https://www.nocobase.com/en/blog/v2.1.2)

*Veröffentlichungsdatum: 12.06.2026*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Konfigurationsformular für externen Vektorspeicher für KI-Wissensdatenbanken hinzugefügt. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) von @cgyrock
- **[KI: Wissensdatenbank]** Konfigurationsformular für externen Vektorspeicher für KI-Wissensdatenbanken hinzugefügt. von @cgyrock

### 🚀 Verbesserungen

- **[undefined]**

  - Ein Versionierungs-Szenario zum Schnellstart des KI-Builders hinzugefügt ([#9748](https://github.com/nocobase/nocobase/pull/9748)) von @Molunerfinn
    Referenz: [KI-Builder Schnellstart](https://docs.nocobase.com/en/ai-builder)
  - Verbesserte die Versionierungsdokumentation mit Anleitung zur automatischen Revision durch den KI-Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) von @cgyrock
- **[cli]** Klarstellung des Initialisierungs-Setup-Textes ([#9750](https://github.com/nocobase/nocobase/pull/9750)) von @chenos
- **[Aktion: Datensätze importieren]** Verbesserte Import- und Async-Task-Fehlerdialoge, sodass lange Fehlermeldungen vollständig gelesen werden können, ohne das Layout zu beeinträchtigen. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) von @katherinehhh
- **[Aktion: Datensätze importieren Pro]** Verbesserte Importdialoge, sodass lange Fehlermeldungen lesbar bleiben und der v2-Verarbeitungsmodus direkt aus dem Einstellungsmenü ausgewählt werden kann. von @katherinehhh

### 🐛 Fehlerbehebungen

- **[client-v2]** Behoben: Das Problem, dass v2-Seiten nach der Anmeldung weiterhin laden konnten ([#9738](https://github.com/nocobase/nocobase/pull/9738)) von @zhangzhonghe
- **[cli]** Erfordert Node.js 22 für nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) von @chenos
- **[Dateimanager]** Behoben: Fehlender CJK/CID-Schrifttext in PDF-Vorschauen nach der Umstellung auf pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.2.0-beta.5](https://www.nocobase.com/en/blog/v2.2.0-beta.5)

*Veröffentlichungsdatum: 16.06.2026*

### 🚀 Verbesserungen

* **[cli]** Schema-Versionseinträge für die Umgebungskonfiguration hinzugefügt. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) von @chenos
* **[Dateimanager]** Verbesserte PDF-Vorschauen: PDF-Dateien von fremden Ursprüngen verwenden jetzt die native Browser-Vorschau, während PDF-Dateien vom gleichen Ursprung weiterhin mit PDF.js gerendert werden. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) von @mytharcher

### 🐛 Fehlerbehebungen

* **[client-v2]**
  * Behoben: Das Problem, dass Ereignisflusseinstellungen nicht mehr geändert werden konnten, nachdem ein Block in eine Vorlage umgewandelt wurde. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) von @gchust
  * Behoben: Das Problem, dass Checkbox-Dropdown-Optionen in v2-Filterformularen keinen übersetzten Text anzeigten. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) von @katherinehhh
  * Behoben: Falsche Anzeige und Formateinstellungen, wenn das Titelfeld eines v2-Tabellenbeziehungsfelds ein Zeit-, Datums- oder Datum/Uhrzeit-Feld verwendete. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) von @katherinehhh
* **[Flow-Engine]** Behoben: Falsche Daten in aktuellen Datensatzformularen und Detaildaten innerhalb von Popups während der KI-Erstellung. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) von @gchust
* **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behoben: Das Problem, dass Aktionspanel-v2-Trigger-Workflow-Buttons weiterhin Erfolg anzeigten und Anfragen sendeten, wenn kein Workflow gebunden war. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) von @mytharcher
* **[KI-Mitarbeiter]** Behoben: Das Problem, dass KI-Mitarbeiter Untertabellendaten nicht korrekt ausfüllen konnten. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) von @gchust

### [v2.2.0-beta.3](https://www.nocobase.com/en/blog/v2.2.0-beta.3)

*Veröffentlichungsdatum: 15.06.2026*

### 🎉 Neue Funktionen

* **[Workflow: Mailer-Knoten]** Unterstützung zum Senden von Anhängen in Workflow-Mailer-Knoten hinzugefügt. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) von @mytharcher
* **[Workflow]** Unterstützung für Datenbank-Transaktionsbereiche in Workflows hinzugefügt. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) von @mytharcher
  Referenz: [Datenbanktransaktionen](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow: Datenbank-Transaktionsknoten]** Ein Plugin für Datenbank-Transaktions-Workflow-Knoten hinzugefügt. von @mytharcher

### 🚀 Verbesserungen

* **[client-v2]** Beziehungsfeldspalten in Formular-Untertabellen unterstützen jetzt Variablen des aktuellen Elements in Datenbereichen. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) von @gchust
* **[undefined]** Der chinesische Dokumentationsname des Versionierungs-Plugins wurde auf „版本控制“ vereinheitlicht. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) von @cgyrock
* **[Dateimanager]** Unterstützung für auswählbaren Text in PDF-Vorschauen des Dateimanagers für PDFs mit eingebettetem Text hinzugefügt. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) von @mytharcher
* **[Benutzer]** Verbessertes Layout der v2-Benutzer- und Berechtigungsseiten und optimiertes Verhalten des Abteilungsbaums. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) von @jiannx
* **[Aktion: Stapelbearbeitung]** Optimiert, wie v2-Aktions-Plugins geladen werden, und hielt die Reihenfolge migrierter Aktions-Buttons stabil. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) von @katherinehhh
* **[Versionierung]** Der chinesische Anzeigename des Versionierungs-Plugins wurde in „版本控制“ geändert. von @cgyrock

### 🐛 Fehlerbehebungen

* **[cli-v1]** Behoben: Ein Fehler beim Ausführen von `<span>yarn dev</span>` nach dem Upgrade von Projekten, die mit create-nocobase-app von 2.0 auf 2.1 erstellt wurden. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) von @Molunerfinn
* **[flow-engine]** Behoben: Probleme mit der vietnamesischen und chinesischen IME-Eingabe in v2-Einzeilentext- und Mehrzeilentextfeldern. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) von @katherinehhh
* **[client-v2]** Behoben: Das Problem, dass der Migrationsfortschritt nicht die dedizierte Fortschrittsansicht anzeigte. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) von @2013xile
* **[server]** Behoben: Unsichere Behandlung von Plugin-Namen in `<span>pm:enable</span>`, um Risiken lokaler Dateieinbindung während der Plugin-Auflösung zu vermeiden. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) von @mytharcher
* **[Async-Task-Manager]** Behoben: Datenbankabfragefehler aufgrund fehlender `<span>filterByTk</span>` beim Herunterladen von Async-Task-Dateien. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) von @mytharcher
* **[Dateimanager]** Behoben: Fehler bei PDF-Vorschauen aufgrund abnormalen Ladens des pdf.js-Worker-Moduls. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) von @mytharcher
* **[Block: Kanban]** Behoben: Das Problem, dass das Öffnen von Kalender-, Gantt- und Kanban-Blöcken im Nicht-Bearbeitungsmodus unerwartet ausgeblendete Popup-Aktionen persistierte und wiederholt Lösch-Anfragen sendete. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) von @jiannx
* **[Aktion: Datensätze exportieren Pro]** Verbesserte die Verarbeitungsmoduseinstellungen und Hilfetexte für v2 Import/Export Pro. von @katherinehhh
* **[Multi-Space]** Behoben: Das Problem, dass Space-Administratoren keine Space-Benutzer hinzufügen konnten, wenn sie keine Berechtigung für das Benutzer-E-Mail-Feld hatten. von @jiannx
* **[Migrations-Manager]** Behoben: Mögliche Fehler beim Importieren großer Migrationsdatendateien. von @2013xile
* **[Vorlagendruck]** Nicht unterstützte Vorlagendateitypen werden vor dem Start des Vorlagendrucks abgelehnt. von @2013xile

### [v2.2.0-beta.2](https://www.nocobase.com/en/blog/v2.2.0-beta.2)

*Veröffentlichungsdatum: 13.06.2026**

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Konfigurationsformular für externen Vektorspeicher für KI-Wissensdatenbanken hinzugefügt. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) von @cgyrock
- **[KI: Wissensdatenbank]** Konfigurationsformular für externen Vektorspeicher für KI-Wissensdatenbanken hinzugefügt. von @cgyrock
- **[E-Mail-Manager]** Der E-Mail-Manager-Client wurde auf v2 migriert. von @jiannx

### 🚀 Verbesserungen

- **[cli]**

  - Optimierte Kompatibilitätsprüfungen für verschiedene Versionsnummernformate. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) von @chenos
  - Unterstützung zum Aktualisieren von Skills auf eine bestimmte Version hinzugefügt. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) von @chenos
  - Verbesserte die Formulierung der Initialisierungs-Setup-Eingabeaufforderungen. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) von @chenos
- **[undefined]**

  - Ein Versionierungs-Konversationsszenario zur Übersichtsseite des KI-Builders hinzugefügt. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) von @Molunerfinn
    Referenz: [KI-Builder Schnellstart](https://docs.nocobase.com/en/ai-builder)
  - Verbesserte die Versionierungsdokumentation mit Hinweisen zum automatischen Speichern von Versionen im KI-Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) von @cgyrock
    Referenz: [Versionierung](docs/docs/en/ops-management/version-control/index.md)
- **[Workflow]** Verbesserte Bearbeitung von Workflow-Metadaten durch Unterstützung der Beschreibungsbearbeitung im Detail-Popup und automatisches Ausfüllen der Quell-Workflow-Metadaten beim Duplizieren von Workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) von @mytharcher
- **[Aktion: Datensätze importieren]** Verbesserte Import- und Async-Task-Fehlerdetaildialoge, sodass lange Fehlermeldungen vollständig angezeigt werden können, ohne das Layout zu beeinträchtigen. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) von @katherinehhh
- **[Übersetzungstest-Tool]** Eine client-v2-Einstellungsseite für das Übersetzungstest-Tool hinzugefügt. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) von @jiannx
- **[Aktion: Datensätze importieren Pro]** Verbesserte Importdialoge, sodass lange Fehlermeldungen vollständig angezeigt werden können und der Verarbeitungsmodus direkt aus dem v2-Einstellungsmenü ausgewählt werden kann. von @katherinehhh

### 🐛 Fehlerbehebungen

- **[client]** Behoben: Das Problem, dass Felder in horizontalen Unterformularen zu schmal waren, um Daten anzuzeigen. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) von @zhangzhonghe
- **[client-v2]** Behoben: Das Problem, dass v2-Seiten nach der Anmeldung weiterhin laden konnten. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) von @zhangzhonghe
- **[cli]** Node.js-Versionserkennung für die nb-Laufzeitumgebung hinzugefügt. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) von @chenos
- **[Aktion: Datensätze importieren]** Geänderte hochgeladene Importdateien zur Speicherung auf der Festplatte, um den Speicherdruck bei großen Datenimporten zu reduzieren. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) von @mytharcher
- **[Async-Task-Manager]** Behoben: Falsche Anforderungs-IDs in Async-Task-Worker-Logs. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) von @2013xile
- **[Workflow]**

  - Behoben: Timeout-Behandlung von Workflows, sodass abgebrochene Ausführungen und ihre ausstehenden Aufgaben atomar aktualisiert werden können. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) von @mytharcher
  - Behoben: Das Problem, dass das Feld „Zuletzt aktualisiert von“ des Workflows nach Änderungen an Workflow-Knoten nicht aktualisiert wurde. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) von @mytharcher
- **[Datenquellen-Manager]**

  - Behoben: Der leere Feldbearbeitungs-Drawer, der durch wiederholtes Neurendern auf der Seite „Felder konfigurieren“ der v1-externen Datenquelle verursacht wurde. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) von @katherinehhh
  - Behoben: Das Problem, dass das Löschen der aktuellen Sammlungskategorie im v1-Datenquellen-Manager dazu führen konnte, dass der Tab „Alle Sammlungen“ leer blieb. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) von @katherinehhh
- **[Backup-Manager]** Behoben: Ein Sicherheitsproblem, bei dem unsichere PostgreSQL-Schema-Namen während der Backup-Wiederherstellung akzeptiert werden konnten. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) von @2013xile
- **[Workflow: SQL-Knoten]** Behoben: Das Problem, dass die Migration von Legacy-Template-Variablen für SQL-Workflows für einige Beta-Version-Benutzer übersprungen wurde. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) von @mytharcher
- **[Block: Kanban]** Behoben: URL-Unterstützung für Kalender und andere Popups. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) von @jiannx
- **[KI-Mitarbeiter]**

  - Behoben: Das Problem, dass in den KI-Mitarbeiter-Dialog eingefügte Anhänge nicht entfernt werden konnten. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) von @cgyrock
  - Behoben: Verlust der Nachrichtenkonfiguration in Workflow-LLM-Knoten. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) von @cgyrock
- **[Dateimanager]** Behoben: Fehlender chinesischer/CID-Schrifttext in einigen PDF-Vorschauen nach der Umstellung auf pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) von @mytharcher
- **[API-Dokumentation]** Behoben: Der Build-Fehler der Deklarationsdatei des API-Dokumentations-Plugins. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) von @katherinehhh
- **[Aktion: Datensätze importieren Pro]** Vermeidet das Parsen großer Dateien im Anforderungsknoten, bevor der Pro-Import eine asynchrone Aufgabe erstellt. von @mytharcher
- **[Versionierung]** Die Position des Versionierungs-Verknüpfungseintrags in der oberen Leiste wurde angepasst, sodass er sowohl im alten als auch im v2-Admin-Layout neben dem UI-Editor erscheint. von @cgyrock
- **[Workflow: Genehmigung]** Behoben: Das Problem, dass zugehörige Daten in v2-Genehmigungsformularen nicht angezeigt wurden. von @zhangzhonghe
