---
title: "NocoBase v1.7.0-alpha.11: Unterstützung von Variablen auf der linken Seite von Verknüpfungsregelbedingungen"
description: "Versionshinweise zu v1.7.0-alpha.11"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung von Variablen auf der linken Seite von Verknüpfungsregelbedingungen ([#6609](https://github.com/nocobase/nocobase/pull/6609)) von @katherinehhh

- **[Abteilungen]** Abteilung, Anhang-URL und Workflow-Antwortnachrichten-Plugins kostenlos gemacht ([#6663](https://github.com/nocobase/nocobase/pull/6663)) von @chenos

- **[Aktion: Stapelaktualisierung]**
  - Unterstützt das Aktualisieren von Daten in anderen Datenblöcken nach der Aktualisierung von Daten in einem Block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) von @zhangzhonghe

  - Unterstützt das Aktualisieren von Daten in anderen Datenblöcken nach der Aktualisierung von Daten in einem Block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) von @zhangzhonghe

- **[UI-Schema-Speicher]** Lokalisierungsmodul für UISchema hinzugefügt, das benutzerdefinierte Übersetzungen für Schema-Titel und -Beschreibung ermöglicht ([#6574](https://github.com/nocobase/nocobase/pull/6574)) von @chenos

- **[Block: Aktionspanel]** Einen onScanSuccess-Callback hinzugefügt, um erfolgreiche Scans zu behandeln und die Kamera-Benutzeroberfläche zu verlassen. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) von @sheldon66

- **[Sammlungsfeld: Code]** Code-Schnittstelle hinzugefügt von @mytharcher

- **[Workflow: Datumsberechnungsknoten]** `changeTimezone`-Funktion hinzugefügt, um den Zeitzonenwert für die Formatierung zu ändern von @mytharcher

- **[Vorlagendruck]** Unterstützung für dynamische Bild- und Barcode-Darstellung in Dokumentvorlagen. von @sheldon66

### 🚀 Verbesserungen

- **[Client]**
  - Verzögerungs-API für Szenarien hinzugefügt, die ohne Verzögerung geöffnet werden ([#6681](https://github.com/nocobase/nocobase/pull/6681)) von @mytharcher

  - Unterstützt ausgewählte Tabellendatensätze in benutzerdefinierten Anfragen ([#6647](https://github.com/nocobase/nocobase/pull/6647)) von @katherinehhh

  - Standard-Typ-Fallback-API für `Variable.Input` hinzugefügt ([#6644](https://github.com/nocobase/nocobase/pull/6644)) von @mytharcher

  - Optimierte Eingabeaufforderungen für nicht konfigurierte Seiten ([#6641](https://github.com/nocobase/nocobase/pull/6641)) von @zhangzhonghe

  - Unterstützt die Suche nach Feldern in der Filterkomponente ([#6627](https://github.com/nocobase/nocobase/pull/6627)) von @mytharcher

  - `trim`-API für `Input` und `Variable.TextArea` hinzugefügt ([#6624](https://github.com/nocobase/nocobase/pull/6624)) von @mytharcher

  - Bestimmung, ob mobile Komponenten basierend auf dem Gerätetyp und nicht auf der Seitenbreite angezeigt werden sollen ([#6611](https://github.com/nocobase/nocobase/pull/6611)) von @zhangzhonghe

  - Bestimmung, ob das mobile Layout basierend auf dem Gerätetyp und nicht auf der Seitenbreite angezeigt werden soll ([#6600](https://github.com/nocobase/nocobase/pull/6600)) von @zhangzhonghe

  - Unterstützt die Konfiguration der Sichtbarkeit von Doppelpunkten in Formularfeldbeschriftungen basierend auf dem Layout ([#6561](https://github.com/nocobase/nocobase/pull/6561)) von @katherinehhh

- **[create-nocobase-app]** Einige Abhängigkeiten auf die neuesten Versionen aktualisiert ([#6673](https://github.com/nocobase/nocobase/pull/6673)) von @chenos

- **[utils]** Dauererweiterung für dayjs hinzugefügt ([#6630](https://github.com/nocobase/nocobase/pull/6630)) von @mytharcher

- **[Datenbank]**
  - Trim-Option für Textfeld hinzugefügt ([#6603](https://github.com/nocobase/nocobase/pull/6603)) von @mytharcher

  - Trim-Option für Zeichenfolgenfeld hinzugefügt ([#6565](https://github.com/nocobase/nocobase/pull/6565)) von @mytharcher

- **[Workflow]**
  - Unterstützt feste Popup-URLs für Workflow-Aufgaben ([#6640](https://github.com/nocobase/nocobase/pull/6640)) von @mytharcher

  - Optimierte Speicherlogik für Jobs ([#6613](https://github.com/nocobase/nocobase/pull/6613)) von @mytharcher

  - Code verbessert ([#6589](https://github.com/nocobase/nocobase/pull/6589)) von @mytharcher

- **[Workflow: Verzögerungsknoten]** Unterstützt die Verwendung von Variablen für die Dauer ([#6621](https://github.com/nocobase/nocobase/pull/6621)) von @mytharcher

- **[Fehlerbehandlung]** Unterstützt benutzerdefinierten Titel in der AppError-Komponente. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) von @sheldon66

- **[Dateimanager]** Trim-Option für Textfelder der Speichersammlung hinzugefügt ([#6604](https://github.com/nocobase/nocobase/pull/6604)) von @mytharcher

- **[Asynchroner Aufgabenmanager]** Import-/Export-Schaltflächen in Pro optimiert ([#6531](https://github.com/nocobase/nocobase/pull/6531)) von @chenos

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Aktualisierungseinstellungen für die Workflow-Trigger-Schaltfläche hinzugefügt von @mytharcher

- **[Aktion: Datensätze exportieren Pro]** Import-/Export-Schaltflächen in Pro optimiert von @katherinehhh

- **[IP-Einschränkung]** IP-Einschränkungsnachrichteninhalt aktualisiert. von @sheldon66

- **[Dateispeicher: S3(Pro)]** Unterstützt globale Variablen in der Speicherkonfiguration von @mytharcher

- **[Backup-Manager]** Erlaubt die Wiederherstellung der Haupt-App aus einem Sub-App-Backup von @gchust

- **[Workflow: Genehmigung]** Unterstützt die Verwendung einer Blockvorlage für das Genehmigungsprozessformular von @mytharcher

- **[Migrationsmanager]** Erlaubt das Überspringen der automatischen Sicherung und Wiederherstellung für die Migration von @gchust

### 🐛 Fehlerbehebungen

- **[Client]**
  - Picker-Wechselproblem im Datumsfeld des Filter-Buttons ([#6695](https://github.com/nocobase/nocobase/pull/6695)) von @katherinehhh

  - Variablenkonvertierung in Untertabellen-/Unterformular-Verknüpfungsregelbedingungen ([#6702](https://github.com/nocobase/nocobase/pull/6702)) von @katherinehhh

  - Export-Button wird ohne Exportberechtigung angezeigt ([#6689](https://github.com/nocobase/nocobase/pull/6689)) von @katherinehhh

  - Nach Verbindung über einen Fremdschlüssel führt das Klicken zum Auslösen der Filterung zu leeren Filterbedingungen ([#6634](https://github.com/nocobase/nocobase/pull/6634)) von @zhangzhonghe

  - Fehlerbehebung beim Erstellen / Aktualisieren von Workflow-Knoten ([#6696](https://github.com/nocobase/nocobase/pull/6696)) von @mytharcher

  - Fehlerbehebung beim Mouseover auf referenziertem Vorlagenblock in der Genehmigungsknotenkonfiguration ([#6691](https://github.com/nocobase/nocobase/pull/6691)) von @mytharcher

  - Benutzerdefiniertes Assoziationsfeld zeigt Feldkomponenteneinstellungen nicht an ([#6692](https://github.com/nocobase/nocobase/pull/6692)) von @katherinehhh

  - Kompatibilität von Verknüpfungsregeln mit Legacy-Daten ([#6686](https://github.com/nocobase/nocobase/pull/6686)) von @katherinehhh

  - Fehlende UI-Komponente beim Lazy Load führt zu Renderfehler ([#6683](https://github.com/nocobase/nocobase/pull/6683)) von @gchust

  - Gebietsschema für Upload-Komponente korrigiert ([#6682](https://github.com/nocobase/nocobase/pull/6682)) von @mytharcher

  - Native Password-Komponente zu HoC Input hinzugefügt ([#6679](https://github.com/nocobase/nocobase/pull/6679)) von @mytharcher

  - Anzeigeproblem von Feldbeschreibungen im Workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) von @katherinehhh

  - Geerbte Felder werden in der Feldzuweisungsliste der aktuellen Sammlung angezeigt ([#6666](https://github.com/nocobase/nocobase/pull/6666)) von @katherinehhh

  - Stilproblem bei der Variableneingabe beim Festlegen des Standardwerts ([#6668](https://github.com/nocobase/nocobase/pull/6668)) von @katherinehhh

  - Wechsel zum Gruppenmenü sollte nicht zu einer Seite springen, die bereits im Menü ausgeblendet wurde ([#6654](https://github.com/nocobase/nocobase/pull/6654)) von @zhangzhonghe

  - Das Filterformular sollte die Eingabeaufforderung "Ungespeicherte Änderungen" nicht anzeigen ([#6657](https://github.com/nocobase/nocobase/pull/6657)) von @zhangzhonghe

  - Im Filterformular wird beim Klicken auf den Filter-Button die Filterung trotzdem ausgelöst, wenn Felder die Validierung nicht bestanden haben ([#6659](https://github.com/nocobase/nocobase/pull/6659)) von @zhangzhonghe

  - Option "Mehrfachauswahl zulassen" funktioniert nicht für Beziehungsfelder ([#6661](https://github.com/nocobase/nocobase/pull/6661)) von @katherinehhh

  - Problem mit verdeckten Vorschaubildern behoben ([#6651](https://github.com/nocobase/nocobase/pull/6651)) von @zhangzhonghe

  - Im Formularblock wird der Standardwert der Feldkonfiguration zuerst als ursprüngliche Variablezeichenfolge angezeigt und verschwindet dann ([#6649](https://github.com/nocobase/nocobase/pull/6649)) von @zhangzhonghe

  - Falscher Variableneingabestil ([#6645](https://github.com/nocobase/nocobase/pull/6645)) von @gchust

  - Workflow-Knoten-Bearbeitungsdrawer-Titel zeigt [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) von @katherinehhh

  - Untertabellenbeschreibung überlappt mit "Neu hinzufügen"-Button ([#6646](https://github.com/nocobase/nocobase/pull/6646)) von @katherinehhh

  - Gestrichelte Unterstreichung durch horizontales Formularlayout im Modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) von @katherinehhh

  - Regel mit 'beliebig'-Bedingung wird nicht wirksam, wenn die Bedingungsliste leer ist ([#6628](https://github.com/nocobase/nocobase/pull/6628)) von @katherinehhh

  - Variablen-Parse-Fehler, wenn URL-Parameter chinesische Zeichen enthalten ([#6618](https://github.com/nocobase/nocobase/pull/6618)) von @katherinehhh

  - Leerer Bereich zwischen dem Titel der Blockvorlagen-Konfigurationsseite und dem Menü ([#6625](https://github.com/nocobase/nocobase/pull/6625)) von @gchust

  - Die Beziehungsfelder im Filterformular melden nach dem Seitenrefresh einen Fehler, weil x-data-source nicht übertragen wird ([#6619](https://github.com/nocobase/nocobase/pull/6619)) von @zhangzhonghe

  - Datenproblem mit Gantt-Diagramm-Block in Baumstruktur-Sammlung ([#6617](https://github.com/nocobase/nocobase/pull/6617)) von @katherinehhh

  - Anzeigeproblem von Feldbeschriftungen, um Abschneiden durch Doppelpunkt zu verhindern ([#6599](https://github.com/nocobase/nocobase/pull/6599)) von @katherinehhh

  - x-disabled-Eigenschaft wirkt nicht auf Formularfelder ([#6610](https://github.com/nocobase/nocobase/pull/6610)) von @katherinehhh

  - `disabled`-Eigenschaft funktioniert nicht, wenn `SchemaInitializerItem` `items` hat ([#6597](https://github.com/nocobase/nocobase/pull/6597)) von @mytharcher

  - Assoziationsfeld (Auswahl) zeigt N/A an, wenn verwandte Sammlungsfelder offengelegt werden ([#6582](https://github.com/nocobase/nocobase/pull/6582)) von @katherinehhh

  - Senden- und Aktualisieren-Buttons zeigen den Nur-Symbol-Modus nicht korrekt an ([#6592](https://github.com/nocobase/nocobase/pull/6592)) von @katherinehhh

  - Kaskadierungsproblem: 'Der Wert von xxx kann nicht im Array-Format sein' beim Löschen und erneuten Auswählen ([#6585](https://github.com/nocobase/nocobase/pull/6585)) von @katherinehhh

  - Verknüpfungskonflikt zwischen gleichnamigen Assoziationsfeldern in verschiedenen Untertabellen innerhalb desselben Formulars ([#6577](https://github.com/nocobase/nocobase/pull/6577)) von @katherinehhh

- **[Datenbank]**
  - CI-Build-Fehler behoben ([#6687](https://github.com/nocobase/nocobase/pull/6687)) von @aaaaaajie

  - Beim Löschen von 1:n-Datensätzen werden sowohl `filter` als auch `filterByTk` übergeben und `filter` enthält ein Assoziationsfeld, wird `filterByTk` ignoriert ([#6606](https://github.com/nocobase/nocobase/pull/6606)) von @2013xile

  - Vermeidung von "datetimeNoTz"-Feldänderungen, wenn sich der Wert beim Aktualisieren eines Datensatzes nicht ändert ([#6588](https://github.com/nocobase/nocobase/pull/6588)) von @mytharcher

- **[Build]** Build-Ausgabe ist falsch, wenn das Plugin von einigen AMD-Bibliotheken abhängt ([#6665](https://github.com/nocobase/nocobase/pull/6665)) von @gchust

- **[Datenvisualisierung]** Enum-Feldoptionen sind im Filterblock leer ([#6706](https://github.com/nocobase/nocobase/pull/6706)) von @2013xile

- **[Aktion: Benutzerdefinierte Anfrage]** Sicherstellen, dass benutzerdefinierte Anfragedaten JSON sein müssen ([#6701](https://github.com/nocobase/nocobase/pull/6701)) von @chenos

- **[Workflow: Manueller Knoten]**
  - ACL-Fehler im Aufgabencenter behoben ([#6693](https://github.com/nocobase/nocobase/pull/6693)) von @mytharcher

  - Konstante für manuellen Aufgabenstatus korrigiert ([#6676](https://github.com/nocobase/nocobase/pull/6676)) von @mytharcher

- **[Aktion: Datensätze importieren]** Fehler beim Importieren des xlsx-Zeitfelds behoben ([#6672](https://github.com/nocobase/nocobase/pull/6672)) von @aaaaaajie

- **[Zugriffskontrolle]**
  - Fehler beim Serialisieren des Rollenmodells in den Cache behoben ([#6674](https://github.com/nocobase/nocobase/pull/6674)) von @mytharcher

  - Korrekte Berechnungslogik für Rollenvereinigung ([#6605](https://github.com/nocobase/nocobase/pull/6605)) von @aaaaaajie

  - Falsche aktuelle Rollenzuweisung während des Logins ([#6581](https://github.com/nocobase/nocobase/pull/6581)) von @aaaaaajie

- **[Block: iframe]** Vertikale Bildlaufleiste erscheint, wenn der iframe-Block auf volle Höhe eingestellt ist ([#6675](https://github.com/nocobase/nocobase/pull/6675)) von @katherinehhh

- **[Workflow]**
  - Migrationsfehler von MySQL behoben ([#6667](https://github.com/nocobase/nocobase/pull/6667)) von @mytharcher

  - Problem behoben, dass Statistikinformationen von Workflows beim Start der App nicht geladen wurden ([#6642](https://github.com/nocobase/nocobase/pull/6642)) von @mytharcher

  - OOM behoben beim Erstellen eines Jobs mit unsicherer Integer-ID ([#6637](https://github.com/nocobase/nocobase/pull/6637)) von @mytharcher

  - Falsche Anzeige der Sync-Option korrigiert ([#6595](https://github.com/nocobase/nocobase/pull/6595)) von @mytharcher

- **[Sammlungsfeld: Anhang(URL)]** Erlaubt nur Dateisammlungen mit öffentlichem URL-Zugriff ([#6664](https://github.com/nocobase/nocobase/pull/6664)) von @katherinehhh

- **[Block: Vorlage]**
  - Wenn die referenzierte Vorlage, die vom Seitenblock verwendet wird, gelöscht wurde, schlägt das Speichern als Vorlage fehl ([#6638](https://github.com/nocobase/nocobase/pull/6638)) von @gchust

  - Ändern und Löschen derselben Felder aus Vorlage und Block, nachdem ein Block aus einer Vorlage erstellt wurde, kann zu Renderfehlern führen ([#6626](https://github.com/nocobase/nocobase/pull/6626)) von @gchust

- **[Benutzer]** Problem beim Parsen des Benutzerprofil-Formularschemas ([#6635](https://github.com/nocobase/nocobase/pull/6635)) von @2013xile

- **[Aktion: Datensätze exportieren]** Fehlende Filterparameter beim Exportieren von Daten nach Änderung der Seitennummerierung ([#6633](https://github.com/nocobase/nocobase/pull/6633)) von @katherinehhh

- **[Mobil]** Einzelfeld mit 'enthält'-Filter auf Mobilgeräten unterstützt keine Mehrfachauswahl ([#6629](https://github.com/nocobase/nocobase/pull/6629)) von @katherinehhh

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem beim Filtern nach Feldern in einer Assoziationssammlung mit einem Viele-zu-viele (Array)-Feld ([#6596](https://github.com/nocobase/nocobase/pull/6596)) von @2013xile

- **[Öffentliche Formulare]** Anzeigeberechtigungen umfassen Liste und Abruf ([#6607](https://github.com/nocobase/nocobase/pull/6607)) von @chenos

- **[Authentifizierung]** Token-Zuweisung in `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) von @2013xile

- **[Kalender]** Fehlende Daten an Grenzdaten in der wöchentlichen Kalenderansicht ([#6587](https://github.com/nocobase/nocobase/pull/6587)) von @katherinehhh

- **[Block: Karte]** Kartenverwaltungsvalidierung sollte bei Leerzeicheneingabe nicht bestehen ([#6575](https://github.com/nocobase/nocobase/pull/6575)) von @katherinehhh

- **[Aktion: Stapelbearbeitung]** Klicken Sie auf die Stapelbearbeitungsschaltfläche, konfigurieren Sie das Popup-Fenster und öffnen Sie es erneut, das Popup-Fenster ist leer ([#6578](https://github.com/nocobase/nocobase/pull/6578)) von @zhangzhonghe

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Testfälle korrigiert von @mytharcher

- **[E-Mail-Manager]**
  - Fehler behoben: kann nicht synchronisieren, keine Betreffanzeige und andere kleine Fehler von @jiannx

  - Fehler behoben: E-Mail-Verwaltungsberechtigung kann E-Mail-Liste nicht anzeigen von @jiannx

  - Fehlendes await für den nächsten Aufruf korrigiert. von @jiannx

- **[Dateispeicher: S3(Pro)]**
  - Fehlendes await für den nächsten Aufruf korrigiert. von @jiannx

  - Individuelle Basis-URL und öffentliche Einstellungen, UX des S3 Pro-Speicherkonfiguration verbessert von @jiannx

  - Fehler an Benutzer ausgeben, wenn Logo in den S3 Pro-Speicher hochgeladen wird (auf Standard gesetzt) von @mytharcher

  - Sprache organisiert von @jiannx

- **[Auth: OIDC]** Falsche Weiterleitung tritt auf, wenn der Callback-Pfad die Zeichenfolge 'null' ist von @2013xile

- **[Block: Mehrschritt-Formular]**
  - Der Senden-Button hat die gleiche Farbe im Standard- und hervorgehobenen Zustand von @jiannx

  - Fehler behoben, dass das Zurücksetzen des Formulars ungültig ist, wenn das Feld mit einem anderen Feld verknüpft ist von @jiannx

- **[Backup-Manager]** Timeout-Fehler tritt auf, wenn versucht wird, ein unverschlüsseltes Backup mit einem Passwort wiederherzustellen von @gchust

- **[Workflow: Genehmigung]**
  - ACL-Fehler im Aufgabencenter behoben von @mytharcher

  - Unterstützt feste URL für Genehmigungselemente im Aufgabencenter von @mytharcher

  - Verzweigungsmodus korrigiert, wenn `endOnReject` auf `true` gesetzt ist von @mytharcher

  - `updatedAt` nach der Migration geändert korrigiert von @mytharcher

  - Falsche Konfiguration des Genehmigungsknotens nach Schemaänderung korrigiert von @mytharcher

  - Client-Variablen zur Verwendung im Genehmigungsformular korrigiert von @mytharcher

- **[Migrationsmanager]**
  - Erstellungszeit des Migrationslogs wird in einigen Umgebungen falsch angezeigt von @gchust

  - Die Option zum Überspringen der automatischen Sicherung wird ungültig, wenn während der Migration ein Umgebungsvariablen-Popup erscheint von @gchust
