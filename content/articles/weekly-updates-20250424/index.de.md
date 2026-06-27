---
title: "NocoBase wöchentliche Updates: Unterstützung von Variablen auf der linken Seite von Verknüpfungsregelbedingungen"
description: "Die Updates dieser Woche umfassen: die Hinzufügung einer Codeschnittstelle, Unterstützung für dynamische Bilder und Barcode-Rendering in Dokumentvorlagen und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.21](https://www.nocobase.com/en/blog/v1.6.21)

*Veröffentlichungsdatum: 2025-04-17*

#### 🚀 Verbesserungen

- **[client]** Verzögerungs-API für Szenarien hinzugefügt, die ohne Verzögerung geöffnet werden ([#6681](https://github.com/nocobase/nocobase/pull/6681)) von @mytharcher
- **[create-nocobase-app]** Einige Abhängigkeiten auf die neuesten Versionen aktualisiert ([#6673](https://github.com/nocobase/nocobase/pull/6673)) von @chenos

#### 🐛 Fehlerbehebungen

- **[client]**

  - Fehler behoben, der beim Bewegen der Maus über einen referenzierten Vorlagenblock in der Genehmigungsknotenkonfiguration ausgelöst wurde ([#6691](https://github.com/nocobase/nocobase/pull/6691)) von @mytharcher
  - Benutzerdefiniertes Assoziationsfeld zeigt keine Feldkomponenteneinstellungen an ([#6692](https://github.com/nocobase/nocobase/pull/6692)) von @katherinehhh
  - Locale für die Upload-Komponente korrigiert ([#6682](https://github.com/nocobase/nocobase/pull/6682)) von @mytharcher
  - Fehlende UI-Komponente beim Lazy Load führt zu Renderfehlern ([#6683](https://github.com/nocobase/nocobase/pull/6683)) von @gchust
  - Nativen Password-Component zu HoC Input hinzugefügt ([#6679](https://github.com/nocobase/nocobase/pull/6679)) von @mytharcher
  - Geerbte Felder werden in der Feldzuweisungsliste der aktuellen Collection angezeigt ([#6666](https://github.com/nocobase/nocobase/pull/6666)) von @katherinehhh
- **[database]** CI-Build-Fehler behoben ([#6687](https://github.com/nocobase/nocobase/pull/6687)) von @aaaaaajie
- **[build]** Build-Ausgabe ist falsch, wenn ein Plugin von einigen AMD-Bibliotheken abhängt ([#6665](https://github.com/nocobase/nocobase/pull/6665)) von @gchust
- **[Aktion: Datensätze importieren]** Fehler beim Importieren des xlsx-Zeitfelds behoben ([#6672](https://github.com/nocobase/nocobase/pull/6672)) von @aaaaaajie
- **[Workflow: Manueller Knoten]** Konstante für manuellen Aufgabenstatus korrigiert ([#6676](https://github.com/nocobase/nocobase/pull/6676)) von @mytharcher
- **[Block: iframe]** Vertikale Bildlaufleiste erscheint, wenn der iframe-Block auf volle Höhe eingestellt ist ([#6675](https://github.com/nocobase/nocobase/pull/6675)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Testfälle korrigiert von @mytharcher
- **[Backup-Manager]** Timeout-Fehler beim Versuch, ein unverschlüsseltes Backup mit einem Passwort wiederherzustellen von @gchust

### [v1.6.22](https://www.nocobase.com/en/blog/v1.6.22)

*Veröffentlichungsdatum: 2025-04-22*

#### 🚀 Verbesserungen

- **[create-nocobase-app]** Abhängigkeiten aktualisiert und SQLite-Unterstützung entfernt ([#6708](https://github.com/nocobase/nocobase/pull/6708)) von @chenos
- **[Dateimanager]** Utils-API freigegeben ([#6705](https://github.com/nocobase/nocobase/pull/6705)) von @mytharcher
- **[Workflow]** Datumstypen zum Variablentypset hinzugefügt ([#6717](https://github.com/nocobase/nocobase/pull/6717)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem mit den Symbolen der mobilen oberen Navigationsleiste, die schwer zu löschen sind ([#6734](https://github.com/nocobase/nocobase/pull/6734)) von @zhangzhonghe
  - Nach dem Verbinden über einen Fremdschlüssel führt ein Klick zum Auslösen der Filterung zu leeren Filterbedingungen ([#6634](https://github.com/nocobase/nocobase/pull/6634)) von @zhangzhonghe
  - Picker-Wechselproblem im Datumsfeld des Filter-Buttons ([#6695](https://github.com/nocobase/nocobase/pull/6695)) von @katherinehhh
  - Problem, dass der Einklapp-Button im linken Menü durch das Workflow-Popup-Fenster verdeckt wird ([#6733](https://github.com/nocobase/nocobase/pull/6733)) von @zhangzhonghe
  - Fehlende Aktionsoptionseinschränkungen beim erneuten Öffnen von Verknüpfungsregeln ([#6723](https://github.com/nocobase/nocobase/pull/6723)) von @katherinehhh
  - Export-Button wird ohne Exportberechtigung angezeigt ([#6689](https://github.com/nocobase/nocobase/pull/6689)) von @katherinehhh
  - Pflichtfelder, die durch Verknüpfungsregeln ausgeblendet werden, sollten die Formularübermittlung nicht beeinträchtigen ([#6709](https://github.com/nocobase/nocobase/pull/6709)) von @zhangzhonghe
- **[server]** appVersion wird von create-migration falsch generiert ([#6740](https://github.com/nocobase/nocobase/pull/6740)) von @chenos
- **[build]** Fehler im tar-Befehl behoben ([#6722](https://github.com/nocobase/nocobase/pull/6722)) von @mytharcher
- **[Workflow]** Fehler beim Ausführen eines geplanten Ereignisses in einem Unterworkflow behoben ([#6721](https://github.com/nocobase/nocobase/pull/6721)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Unterstützung für die Ausführung im Mehrfachdatensatzmodus von @mytharcher
- **[Dateispeicher: S3(Pro)]** Multer-Logik für serverseitigen Upload hinzugefügt von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.19](https://www.nocobase.com/en/blog/v1.7.0-beta.19)

*Veröffentlichungsdatum: 2025-04-17*

#### 🎉 Neue Funktionen

- **[client]** Unterstützung für Variablen auf der linken Seite von Verknüpfungsregelbedingungen ([#6609](https://github.com/nocobase/nocobase/pull/6609)) von @katherinehhh
- **[Workflow: Datumsberechnungsknoten]** `changeTimezone`-Funktion hinzugefügt, um den Zeitzonenwert für die Formatierung zu ändern von @mytharcher

#### 🚀 Verbesserungen

- **[client]**
  - Unterstützung für ausgewählte Tabellendatensätze in benutzerdefinierten Anfragen ([#6647](https://github.com/nocobase/nocobase/pull/6647)) von @katherinehhh
  - Verzögerungs-API für Szenarien hinzugefügt, die ohne Verzögerung geöffnet werden ([#6681](https://github.com/nocobase/nocobase/pull/6681)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[database]** CI-Build-Fehler behoben ([#6687](https://github.com/nocobase/nocobase/pull/6687)) von @aaaaaajie
- **[client]**

  - Fehler behoben, der beim Bewegen der Maus über einen referenzierten Vorlagenblock in der Genehmigungsknotenkonfiguration ausgelöst wurde ([#6691](https://github.com/nocobase/nocobase/pull/6691)) von @mytharcher
  - Anzeigeproblem von Feldbeschreibungen im Workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) von @katherinehhh
  - Locale für die Upload-Komponente korrigiert ([#6682](https://github.com/nocobase/nocobase/pull/6682)) von @mytharcher
  - Benutzerdefiniertes Assoziationsfeld zeigt keine Feldkomponenteneinstellungen an ([#6692](https://github.com/nocobase/nocobase/pull/6692)) von @katherinehhh
  - Kompatibilität von Verknüpfungsregeln mit Legacy-Daten ([#6686](https://github.com/nocobase/nocobase/pull/6686)) von @katherinehhh
  - Fehlende UI-Komponente beim Lazy Load führt zu Renderfehlern ([#6683](https://github.com/nocobase/nocobase/pull/6683)) von @gchust
  - Nativen Password-Component zu HoC Input hinzugefügt ([#6679](https://github.com/nocobase/nocobase/pull/6679)) von @mytharcher
- **[Workflow: Manueller Knoten]** Konstante für manuellen Aufgabenstatus korrigiert ([#6676](https://github.com/nocobase/nocobase/pull/6676)) von @mytharcher
- **[Aktion: Datensätze importieren]** Fehler beim Importieren des xlsx-Zeitfelds behoben ([#6672](https://github.com/nocobase/nocobase/pull/6672)) von @aaaaaajie
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Testfälle korrigiert von @mytharcher
- **[Backup-Manager]** Timeout-Fehler beim Versuch, ein unverschlüsseltes Backup mit einem Passwort wiederherzustellen von @gchust

### [v1.7.0-beta.20](https://www.nocobase.com/en/blog/v1.7.0-beta.20)

*Veröffentlichungsdatum: 2025-04-18*

#### 🚀 Verbesserungen

- **[Backup-Manager]** Wiederherstellung der Haupt-App aus einem Sub-App-Backup erlaubt von @gchust

#### 🐛 Fehlerbehebungen

- **[client]** Fehler im Erstellungs-/Aktualisierungsknoten des Workflows behoben ([#6696](https://github.com/nocobase/nocobase/pull/6696)) von @mytharcher
- **[Workflow: Manueller Knoten]** ACL-Fehler im Aufgabencenter behoben ([#6693](https://github.com/nocobase/nocobase/pull/6693)) von @mytharcher
- **[Workflow: Genehmigung]** ACL-Fehler im Aufgabencenter behoben von @mytharcher

### [v1.7.0-beta.21](https://www.nocobase.com/en/blog/v1.7.0-beta.21)

*Veröffentlichungsdatum: 2025-04-23*

#### 🚀 Verbesserungen

- **[create-nocobase-app]** Abhängigkeiten aktualisiert und SQLite-Unterstützung entfernt ([#6708](https://github.com/nocobase/nocobase/pull/6708)) von @chenos
- **[Mobil]** Öffnungsgeschwindigkeit des mobilen Datumswahl-Popups optimiert ([#6735](https://github.com/nocobase/nocobase/pull/6735)) von @zhangzhonghe
- **[Block: Vorlage]** Konvertierung von Vorlagenblöcken in normale Blöcke unterstützt ([#6662](https://github.com/nocobase/nocobase/pull/6662)) von @gchust
- **[Theme-Editor]** Einstellung der Seitenleistenbreite in der Theme-Konfiguration erlaubt ([#6720](https://github.com/nocobase/nocobase/pull/6720)) von @chenos
- **[Dateimanager]** Utils-API freigegeben ([#6705](https://github.com/nocobase/nocobase/pull/6705)) von @mytharcher
- **[Workflow]** Datumstypen zum Variablentypset hinzugefügt ([#6717](https://github.com/nocobase/nocobase/pull/6717)) von @mytharcher
- **[Vorlagendruck]** Datenquellen-Aktionssteuerung durch rollenbasierte Zugriffskontrolle des Clients ersetzt. von @sheldon66

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem mit dem Aktualisieren von Datenblöcken nach erfolgreicher Übermittlung ([#6748](https://github.com/nocobase/nocobase/pull/6748)) von @zhangzhonghe
  - Fehlender Filter für bereits verknüpfte Daten beim Hinzufügen von Verknüpfungsdaten ([#6750](https://github.com/nocobase/nocobase/pull/6750)) von @katherinehhh
  - Problem, dass der Einklapp-Button im linken Menü durch das Workflow-Popup-Fenster verdeckt wird ([#6733](https://github.com/nocobase/nocobase/pull/6733)) von @zhangzhonghe
  - Verknüpfungsregel des 'Unterelement hinzufügen'-Buttons in der Baumtabelle vermisst 'aktuellen Datensatz' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) von @katherinehhh
  - Datums-/Zeitfeldbedingung funktioniert nicht in Verknüpfungsregeln ([#6728](https://github.com/nocobase/nocobase/pull/6728)) von @katherinehhh
  - Problem mit den Symbolen der mobilen oberen Navigationsleiste, die schwer zu löschen sind ([#6734](https://github.com/nocobase/nocobase/pull/6734)) von @zhangzhonghe
  - Falsche Wertanzeige für "Indexspalte aktivieren" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) von @katherinehhh
  - Pflichtfelder, die durch Verknüpfungsregeln ausgeblendet werden, sollten die Formularübermittlung nicht beeinträchtigen ([#6709](https://github.com/nocobase/nocobase/pull/6709)) von @zhangzhonghe
  - Variablenkonvertierung in Bedingungen von Untertabellen-/Unterformular-Verknüpfungsregeln ([#6702](https://github.com/nocobase/nocobase/pull/6702)) von @katherinehhh
  - Export-Button wird ohne Exportberechtigung angezeigt ([#6689](https://github.com/nocobase/nocobase/pull/6689)) von @katherinehhh
  - Fehlende Aktionsoptionseinschränkungen beim erneuten Öffnen von Verknüpfungsregeln ([#6723](https://github.com/nocobase/nocobase/pull/6723)) von @katherinehhh
  - Picker-Wechselproblem im Datumsfeld des Filter-Buttons ([#6695](https://github.com/nocobase/nocobase/pull/6695)) von @katherinehhh
  - Nach dem Verbinden über einen Fremdschlüssel führt ein Klick zum Auslösen der Filterung zu leeren Filterbedingungen ([#6634](https://github.com/nocobase/nocobase/pull/6634)) von @zhangzhonghe
- **[cli]** Automatische Aktualisierung von package.json beim Upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) von @chenos
- **[server]** appVersion wird von create-migration falsch generiert ([#6740](https://github.com/nocobase/nocobase/pull/6740)) von @chenos
- **[build]** Fehler im tar-Befehl behoben ([#6722](https://github.com/nocobase/nocobase/pull/6722)) von @mytharcher
- **[Block: Gantt]** Gantt-Diagrammblock überlappt Monate in der Kalenderkopfzeile für die Monatsansicht ([#6753](https://github.com/nocobase/nocobase/pull/6753)) von @katherinehhh
- **[Aktion: Datensätze importieren]** Import- und Exportausnahmen behoben, die beim Setzen von Feldberechtigungen auftreten. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) von @aaaaaajie
- **[Block: Vorlage]** Blockvorlagen können in MySQL-Umgebung nicht verwendet werden ([#6726](https://github.com/nocobase/nocobase/pull/6726)) von @gchust
- **[Workflow]** Fehler beim Ausführen eines geplanten Ereignisses in einem Unterworkflow behoben ([#6721](https://github.com/nocobase/nocobase/pull/6721)) von @mytharcher
- **[Datenvisualisierung]** Enum-Feldoptionen sind im Filterblock leer ([#6706](https://github.com/nocobase/nocobase/pull/6706)) von @2013xile
- **[Aktion: Benutzerdefinierte Anfrage]** Sichergestellt, dass benutzerdefinierte Anfragedaten JSON sein müssen ([#6701](https://github.com/nocobase/nocobase/pull/6701)) von @chenos
- **[Aktion: Datensätze exportieren Pro]**

  - Import- und Exportausnahmen behoben, die beim Setzen von Feldberechtigungen auftreten. von @aaaaaajie
  - Pro-Export-Button verliert Filterparameter nach dem Sortieren der Tabellenspalte von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Unterstützung für die Ausführung im Mehrfachdatensatzmodus von @mytharcher
- **[Dateispeicher: S3(Pro)]**

  - Multer-Logik für serverseitigen Upload hinzugefügt von @mytharcher
  - Antwortdaten der hochgeladenen Datei korrigiert von @mytharcher
- **[Workflow: Genehmigung]** Vorladen von Assoziationsfeldern für Datensätze korrigiert von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.11](https://www.nocobase.com/en/blog/v1.7.0-alpha.11)

*Veröffentlichungsdatum: 2025-04-19*

#### 🎉 Neue Funktionen

- **[client]** Unterstützung für Variablen auf der linken Seite von Verknüpfungsregelbedingungen ([#6609](https://github.com/nocobase/nocobase/pull/6609)) von @katherinehhh
- **[Abteilungen]** Abteilung, Anhang-URL und Workflow-Antwortnachrichten-Plugins kostenlos gemacht ([#6663](https://github.com/nocobase/nocobase/pull/6663)) von @chenos
- **[Aktion: Stapelaktualisierung]**

  - Unterstützung zum Aktualisieren von Daten in anderen Datenblöcken nach dem Aktualisieren von Daten in einem Block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) von @zhangzhonghe
  - Unterstützung zum Aktualisieren von Daten in anderen Datenblöcken nach dem Aktualisieren von Daten in einem Block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) von @zhangzhonghe
- **[UI-Schema-Speicher]** Lokalisierungsmodul für UISchema hinzugefügt, das benutzerdefinierte Übersetzungen für Schema-Titel und -Beschreibung ermöglicht ([#6574](https://github.com/nocobase/nocobase/pull/6574)) von @chenos
- **[Block: Aktionspanel]** einen onScanSuccess-Callback hinzugefügt, um erfolgreiche Scans zu behandeln und die Kamera-UI zu verlassen. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) von @sheldon66
- **[Collection-Feld: Code]** Code-Schnittstelle hinzugefügt von @mytharcher
- **[Workflow: Datumsberechnungsknoten]** `changeTimezone`-Funktion hinzugefügt, um den Zeitzonenwert für die Formatierung zu ändern von @mytharcher
- **[Vorlagendruck]** Unterstützung für dynamische Bilder und Barcode-Rendering in Dokumentvorlagen. von @sheldon66

#### 🚀 Verbesserungen

- **[client]**

  - Verzögerungs-API für Szenarien hinzugefügt, die ohne Verzögerung geöffnet werden ([#6681](https://github.com/nocobase/nocobase/pull/6681)) von @mytharcher
  - Unterstützung für ausgewählte Tabellendatensätze in benutzerdefinierten Anfragen ([#6647](https://github.com/nocobase/nocobase/pull/6647)) von @katherinehhh
  - Standard-Typ-Fallback-API für `Variable.Input` hinzugefügt ([#6644](https://github.com/nocobase/nocobase/pull/6644)) von @mytharcher
  - Eingabeaufforderungen für nicht konfigurierte Seiten optimiert ([#6641](https://github.com/nocobase/nocobase/pull/6641)) von @zhangzhonghe
  - Unterstützung zum Durchsuchen von Feldern in der Filter-Komponente ([#6627](https://github.com/nocobase/nocobase/pull/6627)) von @mytharcher
  - `trim`-API für `Input` und `Variable.TextArea` hinzugefügt ([#6624](https://github.com/nocobase/nocobase/pull/6624)) von @mytharcher
  - Entscheidung, ob mobile Komponenten basierend auf dem Gerätetyp und nicht auf der Seitenbreite angezeigt werden ([#6611](https://github.com/nocobase/nocobase/pull/6611)) von @zhangzhonghe
  - Entscheidung, ob das mobile Layout basierend auf dem Gerätetyp und nicht auf der Seitenbreite angezeigt wird ([#6600](https://github.com/nocobase/nocobase/pull/6600)) von @zhangzhonghe
  - Unterstützung zum Konfigurieren der Sichtbarkeit von Doppelpunkten in Formularfeldbezeichnungen basierend auf dem Layout ([#6561](https://github.com/nocobase/nocobase/pull/6561)) von @katherinehhh
- **[create-nocobase-app]** Einige Abhängigkeiten auf die neuesten Versionen aktualisiert ([#6673](https://github.com/nocobase/nocobase/pull/6673)) von @chenos
- **[utils]** Dauererweiterung für dayjs hinzugefügt ([#6630](https://github.com/nocobase/nocobase/pull/6630)) von @mytharcher
- **[database]**

  - Trim-Option für Textfeld hinzugefügt ([#6603](https://github.com/nocobase/nocobase/pull/6603)) von @mytharcher
  - Trim-Option für Zeichenfolgenfeld hinzugefügt ([#6565](https://github.com/nocobase/nocobase/pull/6565)) von @mytharcher
- **[Workflow]**

  - Unterstützung für feste Popup-URLs für Workflow-Aufgaben ([#6640](https://github.com/nocobase/nocobase/pull/6640)) von @mytharcher
  - Speicherlogik für Jobs optimiert ([#6613](https://github.com/nocobase/nocobase/pull/6613)) von @mytharcher
  - Code verbessert ([#6589](https://github.com/nocobase/nocobase/pull/6589)) von @mytharcher
- **[Workflow: Verzögerungsknoten]** Unterstützung zur Verwendung einer Variable für die Dauer ([#6621](https://github.com/nocobase/nocobase/pull/6621)) von @mytharcher
- **[Fehlerbehandler]** Unterstützung für benutzerdefinierten Titel in der AppError-Komponente. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) von @sheldon66
- **[Dateimanager]** Trim-Option für Textfelder der Speicher-Collection hinzugefügt ([#6604](https://github.com/nocobase/nocobase/pull/6604)) von @mytharcher
- **[Asynchroner Aufgabenmanager]** Import-/Export-Buttons in Pro optimiert ([#6531](https://github.com/nocobase/nocobase/pull/6531)) von @chenos
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Aktualisierungseinstellungen für den Trigger-Workflow-Button hinzugefügt von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Import-/Export-Buttons in Pro optimiert von @katherinehhh
- **[IP-Einschränkung]** IP-Einschränkungsnachrichteninhalt aktualisiert. von @sheldon66
- **[Dateispeicher: S3(Pro)]** Unterstützung für globale Variablen in der Speicherkonfiguration von @mytharcher
- **[Backup-Manager]** Wiederherstellung der Haupt-App aus einem Sub-App-Backup erlaubt von @gchust
- **[Workflow: Genehmigung]** Unterstützung zur Verwendung von Blockvorlagen für das Genehmigungsprozessformular von @mytharcher
- **[Migrationsmanager]** Überspringen des automatischen Backups und der Wiederherstellung für die Migration erlaubt von @gchust

#### 🐛 Fehlerbehebungen

- **[client]**

  - Picker-Wechselproblem im Datumsfeld des Filter-Buttons ([#6695](https://github.com/nocobase/nocobase/pull/6695)) von @katherinehhh
  - Variablenkonvertierung in Bedingungen von Untertabellen-/Unterformular-Verknüpfungsregeln ([#6702](https://github.com/nocobase/nocobase/pull/6702)) von @katherinehhh
  - Export-Button wird ohne Exportberechtigung angezeigt ([#6689](https://github.com/nocobase/nocobase/pull/6689)) von @katherinehhh
  - Nach dem Verbinden über einen Fremdschlüssel führt ein Klick zum Auslösen der Filterung zu leeren Filterbedingungen ([#6634](https://github.com/nocobase/nocobase/pull/6634)) von @zhangzhonghe
  - Fehler im Erstellungs-/Aktualisierungsknoten des Workflows behoben ([#6696](https://github.com/nocobase/nocobase/pull/6696)) von @mytharcher
  - Fehler behoben, der beim Bewegen der Maus über einen referenzierten Vorlagenblock in der Genehmigungsknotenkonfiguration ausgelöst wurde ([#6691](https://github.com/nocobase/nocobase/pull/6691)) von @mytharcher
  - Benutzerdefiniertes Assoziationsfeld zeigt keine Feldkomponenteneinstellungen an ([#6692](https://github.com/nocobase/nocobase/pull/6692)) von @katherinehhh
  - Kompatibilität von Verknüpfungsregeln mit Legacy-Daten ([#6686](https://github.com/nocobase/nocobase/pull/6686)) von @katherinehhh
  - Fehlende UI-Komponente beim Lazy Load führt zu Renderfehlern ([#6683](https://github.com/nocobase/nocobase/pull/6683)) von @gchust
  - Locale für die Upload-Komponente korrigiert ([#6682](https://github.com/nocobase/nocobase/pull/6682)) von @mytharcher
  - Nativen Password-Component zu HoC Input hinzugefügt ([#6679](https://github.com/nocobase/nocobase/pull/6679)) von @mytharcher
  - Anzeigeproblem von Feldbeschreibungen im Workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) von @katherinehhh
  - Geerbte Felder werden in der Feldzuweisungsliste der aktuellen Collection angezeigt ([#6666](https://github.com/nocobase/nocobase/pull/6666)) von @katherinehhh
  - Stilproblem bei der Variableneingabe beim Festlegen des Standardwerts ([#6668](https://github.com/nocobase/nocobase/pull/6668)) von @katherinehhh
  - Wechsel zum Gruppenmenü sollte nicht zu einer Seite springen, die bereits im Menü ausgeblendet wurde ([#6654](https://github.com/nocobase/nocobase/pull/6654)) von @zhangzhonghe
  - Das Filterformular sollte die Eingabeaufforderung "Ungespeicherte Änderungen" nicht anzeigen ([#6657](https://github.com/nocobase/nocobase/pull/6657)) von @zhangzhonghe
  - Im Filterformular wird beim Klicken auf den Filter-Button die Filterung trotzdem ausgelöst, wenn es Felder gibt, die die Validierung nicht bestanden haben ([#6659](https://github.com/nocobase/nocobase/pull/6659)) von @zhangzhonghe
  - Option "mehrere zulassen" funktioniert nicht für Beziehungsfelder ([#6661](https://github.com/nocobase/nocobase/pull/6661)) von @katherinehhh
  - Problem mit verdeckten Vorschaubildern behoben ([#6651](https://github.com/nocobase/nocobase/pull/6651)) von @zhangzhonghe
  - Im Formularblock wird der Standardwert der Feldkonfiguration zuerst als ursprüngliche Variablezeichenfolge angezeigt und verschwindet dann ([#6649](https://github.com/nocobase/nocobase/pull/6649)) von @zhangzhonghe
  - Falscher Variableneingabestil ([#6645](https://github.com/nocobase/nocobase/pull/6645)) von @gchust
  - Workflow-Knoten-Bearbeitungs-Drawer-Titel zeigt [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) von @katherinehhh
  - Untertabellenbeschreibung überlappt sich mit dem Button "Neu hinzufügen" ([#6646](https://github.com/nocobase/nocobase/pull/6646)) von @katherinehhh
  - Gestrichelte Unterstreichung durch horizontales Formularlayout im Modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) von @katherinehhh
  - Regel mit 'beliebiger' Bedingung wird nicht wirksam, wenn die Bedingungsliste leer ist ([#6628](https://github.com/nocobase/nocobase/pull/6628)) von @katherinehhh
  - Variablen-Parse-Fehler, wenn URL-Parameter chinesische Zeichen enthalten ([#6618](https://github.com/nocobase/nocobase/pull/6618)) von @katherinehhh
  - Leerer Bereich zwischen dem Titel der Blockvorlagen-Konfigurationsseite und dem Menü ([#6625](https://github.com/nocobase/nocobase/pull/6625)) von @gchust
  - Die Beziehungsfelder im Filterformular melden nach dem Seitenrefresh einen Fehler, weil x-data-source nicht übertragen wird ([#6619](https://github.com/nocobase/nocobase/pull/6619)) von @zhangzhonghe
  - Datenproblem mit dem Gantt-Block in der Baum-Collection ([#6617](https://github.com/nocobase/nocobase/pull/6617)) von @katherinehhh
  - Anzeigeproblem von Feldbezeichnungen, um Abschneiden durch Doppelpunkt zu verhindern ([#6599](https://github.com/nocobase/nocobase/pull/6599)) von @katherinehhh
  - x-disabled-Eigenschaft wirkt nicht auf Formularfelder ([#6610](https://github.com/nocobase/nocobase/pull/6610)) von @katherinehhh
  - `disabled`-Eigenschaft funktioniert nicht, wenn `SchemaInitializerItem` `items` hat ([#6597](https://github.com/nocobase/nocobase/pull/6597)) von @mytharcher
  - Assoziationsfeld (Auswahl) zeigt N/A an, wenn verwandte Collection-Felder offengelegt werden ([#6582](https://github.com/nocobase/nocobase/pull/6582)) von @katherinehhh
  - Senden- und Aktualisieren-Buttons zeigen den Nur-Symbol-Modus nicht korrekt an ([#6592](https://github.com/nocobase/nocobase/pull/6592)) von @katherinehhh
  - Kaskadierungsproblem: 'Der Wert von xxx kann nicht im Array-Format sein' beim Löschen und erneuten Auswählen ([#6585](https://github.com/nocobase/nocobase/pull/6585)) von @katherinehhh
  - Verknüpfungskonflikt zwischen gleichnamigen Assoziationsfeldern in verschiedenen Untertabellen innerhalb desselben Formulars ([#6577](https://github.com/nocobase/nocobase/pull/6577)) von @katherinehhh
- **[database]**

  - CI-Build-Fehler behoben ([#6687](https://github.com/nocobase/nocobase/pull/6687)) von @aaaaaajie
  - Beim Löschen von Eins-zu-Viele-Datensätzen werden sowohl `filter` als auch `filterByTk` übergeben und `filter` enthält ein Assoziationsfeld, wird `filterByTk` ignoriert ([#6606](https://github.com/nocobase/nocobase/pull/6606)) von @2013xile
  - Vermeidung von "datetimeNoTz"-Feldänderungen, wenn sich der Wert beim Aktualisieren eines Datensatzes nicht ändert ([#6588](https://github.com/nocobase/nocobase/pull/6588)) von @mytharcher
- **[build]** Build-Ausgabe ist falsch, wenn ein Plugin von einigen AMD-Bibliotheken abhängt ([#6665](https://github.com/nocobase/nocobase/pull/6665)) von @gchust
- **[Datenvisualisierung]** Enum-Feldoptionen sind im Filterblock leer ([#6706](https://github.com/nocobase/nocobase/pull/6706)) von @2013xile
- **[Aktion: Benutzerdefinierte Anfrage]** Sichergestellt, dass benutzerdefinierte Anfragedaten JSON sein müssen ([#6701](https://github.com/nocobase/nocobase/pull/6701)) von @chenos
- **[Workflow: Manueller Knoten]**

  - ACL-Fehler im Aufgabencenter behoben ([#6693](https://github.com/nocobase/nocobase/pull/6693)) von @mytharcher
  - Konstante für manuellen Aufgabenstatus korrigiert ([#6676](https://github.com/nocobase/nocobase/pull/6676)) von @mytharcher
- **[Aktion: Datensätze importieren]** Fehler beim Importieren des xlsx-Zeitfelds behoben ([#6672](https://github.com/nocobase/nocobase/pull/6672)) von @aaaaaajie
- **[Zugriffskontrolle]**

  - Fehler beim Serialisieren des Rollenmodells in den Cache behoben ([#6674](https://github.com/nocobase/nocobase/pull/6674)) von @mytharcher
  - Korrekte Berechnungslogik für Rollenvereinigung ([#6605](https://github.com/nocobase/nocobase/pull/6605)) von @aaaaaajie
  - Falsche Zuweisung der aktuellen Rolle während des Logins ([#6581](https://github.com/nocobase/nocobase/pull/6581)) von @aaaaaajie
- **[Block: iframe]** Vertikale Bildlaufleiste erscheint, wenn der iframe-Block auf volle Höhe eingestellt ist ([#6675](https://github.com/nocobase/nocobase/pull/6675)) von @katherinehhh
- **[Workflow]**

  - Migrationsfehler von MySQL behoben ([#6667](https://github.com/nocobase/nocobase/pull/6667)) von @mytharcher
  - Statistikinformationen von Workflows wurden beim App-Start nicht geladen ([#6642](https://github.com/nocobase/nocobase/pull/6642)) von @mytharcher
  - OOM beim Erstellen eines Jobs mit unsicherer Integer-ID behoben ([#6637](https://github.com/nocobase/nocobase/pull/6637)) von @mytharcher
  - Sync-Option wird falsch angezeigt ([#6595](https://github.com/nocobase/nocobase/pull/6595)) von @mytharcher
- **[Collection-Feld: Anhang(URL)]** Nur Datei-Collections mit öffentlichem URL-Zugriff erlaubt ([#6664](https://github.com/nocobase/nocobase/pull/6664)) von @katherinehhh
- **[Block: Vorlage]**

  - Wenn die vom Seitenblock verwendete referenzierte Vorlage gelöscht wurde, schlägt das Speichern als Vorlage fehl ([#6638](https://github.com/nocobase/nocobase/pull/6638)) von @gchust
  - Ändern und Löschen derselben Felder aus Vorlage und Block, nachdem ein Block aus einer Vorlage erstellt wurde, kann zu Renderfehlern führen ([#6626](https://github.com/nocobase/nocobase/pull/6626)) von @gchust
- **[Benutzer]** Problem mit dem Parsen des Benutzerprofil-Formularschemas ([#6635](https://github.com/nocobase/nocobase/pull/6635)) von @2013xile
- **[Aktion: Datensätze exportieren]** Fehlende Filterparameter beim Exportieren von Daten nach dem Ändern der Seitennummerierung ([#6633](https://github.com/nocobase/nocobase/pull/6633)) von @katherinehhh
- **[Mobil]** Einzelfeld-Auswahl mit 'enthält'-Filter auf Mobilgeräten unterstützt keine Mehrfachauswahl ([#6629](https://github.com/nocobase/nocobase/pull/6629)) von @katherinehhh
- **[Collection-Feld: Viele-zu-Viele (Array)]** Problem beim Filtern nach Feldern in einer Assoziations-Collection mit einem Viele-zu-Viele (Array)-Feld ([#6596](https://github.com/nocobase/nocobase/pull/6596)) von @2013xile
- **[Öffentliche Formulare]** Ansichtsberechtigungen umfassen Liste und Get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) von @chenos
- **[Authentifizierung]** Token-Zuweisung in `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) von @2013xile
- **[Kalender]** Fehlende Daten an Grenzdaten in der wöchentlichen Kalenderansicht ([#6587](https://github.com/nocobase/nocobase/pull/6587)) von @katherinehhh
- **[Block: Karte]** Kartenverwaltungsvalidierung sollte bei Leerzeicheneingabe nicht bestehen ([#6575](https://github.com/nocobase/nocobase/pull/6575)) von @katherinehhh
- **[Aktion: Stapelbearbeitung]** Klicken Sie auf den Stapelbearbeitungs-Button, konfigurieren Sie das Popup-Fenster und öffnen Sie es erneut, ist das Popup-Fenster leer ([#6578](https://github.com/nocobase/nocobase/pull/6578)) von @zhangzhonghe
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Testfälle korrigiert von @mytharcher
- **[E-Mail-Manager]**

  - Fehler behoben: kann nicht synchronisieren, keine Betreffanzeige und andere kleine Fehler von @jiannx
  - Fehler behoben: E-Mail-Verwaltungsberechtigung kann E-Mail-Liste nicht anzeigen von @jiannx
  - Fehlendes await für den nächsten Aufruf korrigiert. von @jiannx
- **[Dateispeicher: S3(Pro)]**

  - Fehlendes await für den nächsten Aufruf korrigiert. von @jiannx
  - Individuelle Baseurl- und Public-Einstellungen, UX der S3 Pro-Speicherkonfiguration verbessert von @jiannx
  - Fehler an Benutzer ausgeben, wenn Logo in den S3 Pro-Speicher hochgeladen wird (auf Standard gesetzt) von @mytharcher
  - Sprache organisiert von @jiannx
- **[Auth: OIDC]** Falsche Weiterleitung, wenn der Callback-Pfad die Zeichenfolge 'null' ist von @2013xile
- **[Block: Mehrschritt-Formular]**

  - Der Senden-Button hat die gleiche Farbe im Standard- und hervorgehobenen Zustand von @jiannx
  - Fehler behoben, dass das Zurücksetzen des Formulars ungültig ist, wenn das Feld mit einem anderen Feld verknüpft ist von @jiannx
- **[Backup-Manager]** Timeout-Fehler beim Versuch, ein unverschlüsseltes Backup mit einem Passwort wiederherzustellen von @gchust
- **[Workflow: Genehmigung]**

  - ACL-Fehler im Aufgabencenter behoben von @mytharcher
  - Unterstützung für feste URL für Genehmigungselemente im Aufgabencenter von @mytharcher
  - Verzweigungsmodus korrigiert, wenn `endOnReject` auf `true` gesetzt ist von @mytharcher
  - `updatedAt` nach der Migration geändert korrigiert von @mytharcher
  - Genehmigungsknotenkonfiguration ist nach Schemaänderung falsch korrigiert von @mytharcher
  - Client-Variablen zur Verwendung im Genehmigungsformular korrigiert von @mytharcher
- **[Migrationsmanager]**

  - Erstellungszeit des Migrationslogs wird in einigen Umgebungen falsch angezeigt von @gchust
  - Die Option zum Überspringen des automatischen Backups wird ungültig, wenn während der Migration ein Popup mit Umgebungsvariablen erscheint von @gchust
