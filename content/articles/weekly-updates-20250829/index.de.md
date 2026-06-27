---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Hinzufügen eines Inline-Vorlagentyps für die Benachrichtigungskonfiguration und Unterstützung konsistenter Aufgabentitel über alle Genehmigungsknoten im selben Workflow hinweg."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.22](https://www.nocobase.com/en/blog/v1.8.22)

*Veröffentlichungsdatum: 27.08.2025*

#### 🐛 Fehlerbehebungen

- **[Workflow]** Behebt das Problem, dass das Detail-Popup aufgrund einer falschen Routenkonfiguration im Aufgabencenter nicht angezeigt wurde ([#7452](https://github.com/nocobase/nocobase/pull/7452)) von @mytharcher

### [v1.8.21](https://www.nocobase.com/en/blog/v1.8.21)

*Veröffentlichungsdatum: 26.08.2025*

#### 🐛 Fehlerbehebungen

- **[Dateimanager]** Behebt den Fehler beim Bearbeiten des `storage`-Feldes in der Dateisammlung. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) von @mytharcher
- **[Workflow: Paralleler Knoten]** Behebt das Problem, dass eine falsche Statusbestimmung in parallelen Verzweigungsknoten im Modus "Alle Verzweigungen ausführen" zu einem vorzeitigen Abschluss führte ([#7445](https://github.com/nocobase/nocobase/pull/7445)) von @mytharcher
- **[Workflow: Genehmigung]** Fügt die Statusvariable für benutzerdefinierte Vorlagen in Genehmigungsabschlussbenachrichtigungen hinzu von @mytharcher

### [v1.8.20](https://www.nocobase.com/en/blog/v1.8.20)

*Veröffentlichungsdatum: 25.08.2025*

#### 🚀 Verbesserungen

- **[Workflow]** Passt die Workflow-Variablen-API an, um das Voreinstellen einer zusätzlichen Variablenliste zu unterstützen ([#7439](https://github.com/nocobase/nocobase/pull/7439)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Unterstützt die Verwendung genehmigungsbezogener Variablen in benutzerdefinierten Benachrichtigungen von @mytharcher
  - Unterstützt die Aktualisierung des Genehmigungsstatus, nachdem der Endknoten die Ausführung beendet hat von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Behebt ein Problem, bei dem in bestimmten Szenarien das Bearbeiten eines Datensatzes im mobilen Datensatzauswahl-Popup einen Fehler verursacht ([#7444](https://github.com/nocobase/nocobase/pull/7444)) von @zhangzhonghe
  - Pflichtfeldvalidierung funktioniert nicht für Anhangs-Felder in Untertabellen ([#7431](https://github.com/nocobase/nocobase/pull/7431)) von @katherinehhh
  - Behebt das Problem, dass das Symbol falsch angezeigt wurde, wenn die URL im Anhang-URL-Feld Abfrageparameter enthielt ([#7432](https://github.com/nocobase/nocobase/pull/7432)) von @mytharcher
- **[database]**

  - Behebt einen MySQL-Syntaxfehler, der beim Laden weiterer In-App-Nachrichten auftrat. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) von @aaaaaajie
  - Behebt ein Präzisionsproblem für exportierte Zahlenfelder ([#7421](https://github.com/nocobase/nocobase/pull/7421)) von @aaaaaajie
- **[undefined]** Behebt Problem mit dem Filtern nur nach Datumsfeld in MySQL-Externquelle ([#7422](https://github.com/nocobase/nocobase/pull/7422)) von @aaaaaajie
- **[Aktion: Datensätze importieren]** Behebt ein Problem, bei dem der Import fehlschlug, wenn der Tabellenprimärschlüssel ein einzeiliger Text war ([#7416](https://github.com/nocobase/nocobase/pull/7416)) von @aaaaaajie
- **[Workflow]**

  - Vervollständigt die Optionen zum automatischen Löschen des Workflow-Ausführungsstatus ([#7436](https://github.com/nocobase/nocobase/pull/7436)) von @mytharcher
  - Behebt Probleme im Zusammenhang mit dem mobilen Menü in den Workflow-Aufgaben ([#7419](https://github.com/nocobase/nocobase/pull/7419)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Behebt unerwartetes Aktualisierungsergebnis bei Verwendung eines String-Primärschlüssels im xlsx-Import. von @aaaaaajie

### [v1.8.19](https://www.nocobase.com/en/blog/v1.8.19)

*Veröffentlichungsdatum: 22.08.2025*

#### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Fügt Inline-Vorlagentyp für die Benachrichtigungskonfiguration hinzu von @mytharcher

#### 🚀 Verbesserungen

- **[client]** Unterstützt die Anzeige von Symbolen, die durch Zeichenfolgen identifiziert werden, in der Select-Komponente im schreibgeschützten Modus ([#7420](https://github.com/nocobase/nocobase/pull/7420)) von @mytharcher
- **[database]** Optimierte ACL-Meta-Abfrageleistung ([#7400](https://github.com/nocobase/nocobase/pull/7400)) von @aaaaaajie
- **[Mobil]** Optimiert die mobile Popup-Komponente ([#7414](https://github.com/nocobase/nocobase/pull/7414)) von @zhangzhonghe

#### 🐛 Fehlerbehebungen

- **[database]** Behebt Problem, bei dem PostgreSQL-Externtabellenlesevorgänge Ansichten aus anderen Schemata einschlossen ([#7410](https://github.com/nocobase/nocobase/pull/7410)) von @aaaaaajie
- **[Block: Vorlage]** Behebt ein Problem, bei dem E-Mail-Blöcke nicht sichtbar waren, wenn sie in einem geerbten Vorlagenblock platziert wurden ([#7430](https://github.com/nocobase/nocobase/pull/7430)) von @gchust
- **[Aktion: Datensätze importieren Pro]** Erlaubt keine Zuweisung von Beziehungsfeldern während der Import-Duplikaterkennung. von @aaaaaajie
- **[Workflow: Genehmigung]** Behebt das Problem, dass die Benutzerliste während der Gegenzeichnung leer war von @mytharcher
- **[Migrationsmanager]** Überspringt die von der neuesten pg_dump generierten Befehle `\restrict` und `\unrestrict` beim Erstellen von Migrationsdateien, um Wiederherstellungsfehler zu beheben. von @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.6](https://www.nocobase.com/en/blog/v1.9.0-beta.6)

*Veröffentlichungsdatum: 22.08.2025*

#### 🎉 Neue Funktionen

- **[client]** Option "Auto-Fokus" für Input-, TextArea-, URL- und InputNumber-Komponenten hinzugefügt, die das Eingabefeld beim ersten Rendern der Seite automatisch fokussiert, wenn aktiviert ([#7320](https://github.com/nocobase/nocobase/pull/7320)) von @zhangzhonghe
- **[Async-Task-Manager]** Unterstützt die Aufteilung asynchroner Task-Dienste nach Umgebung und Ereigniswarteschlange ([#7241](https://github.com/nocobase/nocobase/pull/7241)) von @mytharcher
- **[Office-Dateivorschau]** Unterstützt die Vorschau von Office-Dateien über die Microsoft-Live-Vorschau ([#7300](https://github.com/nocobase/nocobase/pull/7300)) von @mytharcher
- **[Auth: SAML 2.0]** Fügt signaturbezogene Konfigurationsoptionen hinzu von @2013xile
- **[Workflow: Genehmigung]**

  - Fügt Inline-Vorlagentyp für die Benachrichtigungskonfiguration hinzu von @mytharcher
  - Unterstützt die Verwendung eines einheitlichen Aufgabentitels für alle Genehmigungsknoten im selben Workflow von @mytharcher

#### 🚀 Verbesserungen

- **[database]** Optimierte ACL-Meta-Abfrageleistung ([#7400](https://github.com/nocobase/nocobase/pull/7400)) von @aaaaaajie
- **[client]**

  - Unterstützt die Anzeige von Symbolen, die durch Zeichenfolgen identifiziert werden, in der Select-Komponente im schreibgeschützten Modus ([#7420](https://github.com/nocobase/nocobase/pull/7420)) von @mytharcher
  - Fügt Unterstützung für die Datumsvariable "vorgestern" hinzu ([#7359](https://github.com/nocobase/nocobase/pull/7359)) von @katherinehhh
  - Optimiert die Leistung beim Wechseln von Popup-Tabs ([#7353](https://github.com/nocobase/nocobase/pull/7353)) von @zhangzhonghe
  - Menü nach Auswahl nicht automatisch schließen ([#7252](https://github.com/nocobase/nocobase/pull/7252)) von @kerwin612
- **[Mobil]** Optimiert die mobile Popup-Komponente ([#7414](https://github.com/nocobase/nocobase/pull/7414)) von @zhangzhonghe
- **[Workflow]**

  - Aktualisiert das Knotenauswahlmenü, um Optionen in einem zweispaltigen Layout anzuzeigen, um die Informationsdichte zu verbessern und Benutzern die gleichzeitige Anzeige weiterer Optionen zu ermöglichen ([#7396](https://github.com/nocobase/nocobase/pull/7396)) von @mytharcher
  - Behebt instabilen Testfall ([#7349](https://github.com/nocobase/nocobase/pull/7349)) von @mytharcher
  - Zeigt normalen Titel an, wenn deaktiviert ([#7339](https://github.com/nocobase/nocobase/pull/7339)) von @mytharcher
  - Reduziert die Anzahl der zu ladenden Jobs bei der Vorbereitung der Ausführung ([#7284](https://github.com/nocobase/nocobase/pull/7284)) von @mytharcher
- **[Lizenzeinstellungen]** Kopiert in den Lizenzeinstellungen jedes Mal die neueste Instanz-ID ([#7387](https://github.com/nocobase/nocobase/pull/7387)) von @jiannx
- **[Authentifizierung]** Entfernt den Token-Parameter aus der URL nach erfolgreicher Anmeldung ([#7386](https://github.com/nocobase/nocobase/pull/7386)) von @2013xile
- **[Benachrichtigung: In-App-Nachricht]**

  - Entfernt SQL-Protokollausgaben über `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) von @2013xile
  - Ändert In-App-Nachricht von SSE zu WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) von @mytharcher
- **[Office-Dateivorschau]** Fügt Unterstützung für die Vorschau von `.odt`-Dateien hinzu ([#7347](https://github.com/nocobase/nocobase/pull/7347)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Unterstützt die Aufteilung von Import-/Exportdiensten nach Umgebung und Ereigniswarteschlange von @mytharcher
- **[Workflow: JavaScript]** Ändert Cache in App-Cache, um Fehler im Cluster-Modus zu vermeiden von @mytharcher
- **[Vorlagendruck]** Unterstützt Feld-m2m-Array von @jiannx
- **[Backup-Manager]** Verbessert die Leistung für MySQL-Datenbank-Backup-Vorgänge von @gchust
- **[Auth: DingTalk]** Setzt im DingTalk-Client den Navigationstitel auf einen leeren String anstatt "Laden..." anzuzeigen von @2013xile
- **[Migrationsmanager]** Unterstützt die Aufteilung des Migrationsdienstes nach Umgebung und Ereigniswarteschlange von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Behebt das Problem, dass das Symbol falsch angezeigt wurde, wenn die URL im Anhang-URL-Feld Abfrageparameter enthielt ([#7432](https://github.com/nocobase/nocobase/pull/7432)) von @mytharcher
  - Behandelt Zahl 0 als leer bei der Leer-Validierung von Verknüpfungsregeln ([#7404](https://github.com/nocobase/nocobase/pull/7404)) von @katherinehhh
  - Behebt Textumbruch des Link-Buttons ([#7406](https://github.com/nocobase/nocobase/pull/7406)) von @mytharcher
  - Behebt das Problem, dass das mehrspaltige Formularlayout auf mobilen Geräten nicht in ein einspaltiges Layout umgewandelt wird ([#7355](https://github.com/nocobase/nocobase/pull/7355)) von @zhangzhonghe
  - Behebt Fehler beim Massenlöschen von Sammlungen ([#7345](https://github.com/nocobase/nocobase/pull/7345)) von @aaaaaajie
  - Behebt Problem, dass zuvor gespeicherter Datenbereich bei individueller Berechtigungskonfiguration nicht vorausgewählt war. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) von @aaaaaajie
  - Behebt das Problem, dass rohe Variablenstrings mit dem Formular gesendet werden ([#7337](https://github.com/nocobase/nocobase/pull/7337)) von @zhangzhonghe
  - Bei Verwendung von Variablen zum Setzen von Feldstandardwerten in Filterformularen wird bei leerem Variablenwert der ursprüngliche Variablenstring im Eingabefeld angezeigt ([#7335](https://github.com/nocobase/nocobase/pull/7335)) von @zhangzhonghe
  - Behebt, dass Tooltip beim Hovern im Aktionspanel [object Object] anzeigt ([#7322](https://github.com/nocobase/nocobase/pull/7322)) von @katherinehhh
  - Behebt Endlosschleifenproblem beim Parsen von Feldstandardwerten ([#7301](https://github.com/nocobase/nocobase/pull/7301)) von @zhangzhonghe
  - Behebt Dateivorschau-Element bei null-URL ([#7315](https://github.com/nocobase/nocobase/pull/7315)) von @mytharcher
  - Behebt Problem, dass Baumtabelle nicht erweitert werden kann ([#7309](https://github.com/nocobase/nocobase/pull/7309)) von @zhangzhonghe
  - Fügt vollständige URL zur lokalen Datei beim Vorschauen hinzu ([#7314](https://github.com/nocobase/nocobase/pull/7314)) von @mytharcher
  - Behebt unerwartetes Verhalten beim Drag-and-Drop-Sortieren von Tabellenzeilen ([#6959](https://github.com/nocobase/nocobase/pull/6959)) von @ChimingLiu
  - Problem mit der Datumsfeldanzeige im Datenauswahl-Popup für Assoziationsfelder des Filterformulars ([#7290](https://github.com/nocobase/nocobase/pull/7290)) von @katherinehhh
- **[database]** Behebt Problem, bei dem PostgreSQL-Externtabellenlesevorgänge Ansichten aus anderen Schemata einschlossen ([#7410](https://github.com/nocobase/nocobase/pull/7410)) von @aaaaaajie
- **[server]** Einigen Anfragen fehlt `ctx.action`, was Fehler in der Audit-Log-Middleware verursacht ([#7369](https://github.com/nocobase/nocobase/pull/7369)) von @2013xile
- **[undefined]** Fügt neues Plugin zur Voreinstellung hinzu ([#7319](https://github.com/nocobase/nocobase/pull/7319)) von @mytharcher
- **[utils]** Falsche Zeitzonenbehandlung für parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) von @katherinehhh
- **[Block: Vorlage]** Behebt ein Problem, bei dem E-Mail-Blöcke nicht sichtbar waren, wenn sie in einem geerbten Vorlagenblock platziert wurden ([#7430](https://github.com/nocobase/nocobase/pull/7430)) von @gchust
- **[Mobil]**

  - Falsches Anzeigeformat des Datumsfeldes auf Mobilgeräten ([#7412](https://github.com/nocobase/nocobase/pull/7412)) von @katherinehhh
  - Behebt das Problem, dass die Formularübermittlungsdaten im mobilen Genehmigungsdialog falsch sind ([#7389](https://github.com/nocobase/nocobase/pull/7389)) von @zhangzhonghe
  - Behebt ein Problem, bei dem die Datumsauswahl auf mobilen Geräten bei angewendeten Datumsbereichsgrenzen falsch angezeigt wurde ([#7362](https://github.com/nocobase/nocobase/pull/7362)) von @katherinehhh
- **[Workflow]**

  - Behebt Fehlerwurf und Verschwinden von Formulardaten beim Bearbeiten der Workflow-Kategorie ([#7408](https://github.com/nocobase/nocobase/pull/7408)) von @mytharcher
  - Behebt die Übersetzung des Seitentitels im Workflow-Aufgabencenter ([#7392](https://github.com/nocobase/nocobase/pull/7392)) von @mytharcher
  - Überarbeitet das "Knoten hinzufügen"-Menü und behebt die dadurch verursachten Leistungsprobleme beim Rendern der Workflow-Leinwand ([#7363](https://github.com/nocobase/nocobase/pull/7363)) von @mytharcher
  - Behebt das Problem falscher Filterbedingungen beim Abrufen eines einzelnen To-Do-Elements ([#7366](https://github.com/nocobase/nocobase/pull/7366)) von @mytharcher
  - Behebt das Problem der Schlüsselwortübereinstimmung in der Feldauswahl ([#7356](https://github.com/nocobase/nocobase/pull/7356)) von @mytharcher
  - Vermeidet Fehlerwurf durch Veröffentlichung in der Ereigniswarteschlange beim Stoppen ([#7348](https://github.com/nocobase/nocobase/pull/7348)) von @mytharcher
  - Behebt `undefined`-Ergebnis beim Beenden des Prozessors ([#7317](https://github.com/nocobase/nocobase/pull/7317)) von @mytharcher
  - Behebt BigInt-ID-Problem in MySQL beim Speichern von Jobs ([#7292](https://github.com/nocobase/nocobase/pull/7292)) von @mytharcher
- **[Workflow: Mailer-Knoten]** Behebt das Problem, dass der E-Mail-Knoten möglicherweise nicht ordnungsgemäß fortgesetzt wird ([#7409](https://github.com/nocobase/nocobase/pull/7409)) von @mytharcher
- **[Office-Dateivorschau]**

  - Behebt Fehlerwurf beim Hochladen einer Datei in ein Anhang-URL-Feld ([#7405](https://github.com/nocobase/nocobase/pull/7405)) von @mytharcher
  - Unterstützt `.docx`-, `.xlsx`- und `.pptx`-Dateien mit nur URL zur Vorschau ([#7336](https://github.com/nocobase/nocobase/pull/7336)) von @mytharcher
- **[Dateimanager]**

  - Entfernt den Hinweis auf das Datei-Upload-Größenlimit ([#7391](https://github.com/nocobase/nocobase/pull/7391)) von @mytharcher
  - Fügt `storageId`-Feld zur Dateisammlung hinzu, um die Berechtigungskonfiguration zu unterstützen ([#7351](https://github.com/nocobase/nocobase/pull/7351)) von @mytharcher
  - Behebt Speicherfeldberechtigung ([#7316](https://github.com/nocobase/nocobase/pull/7316)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]**

  - Behebt Übersetzungen ([#7384](https://github.com/nocobase/nocobase/pull/7384)) von @mytharcher
  - Behebt das Problem, dass In-Site-Nachrichten empfangen, aber nicht in einem Popup angezeigt wurden ([#7364](https://github.com/nocobase/nocobase/pull/7364)) von @mytharcher
- **[Kalender]** Kalenderereignis-Tooltip zeigt [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) von @katherinehhh
- **[Sammlungsfeld: Formel]** Behebt das Problem, dass die Formeleingabe aufgrund des Variablentyps die Validierung nicht bestehen konnte ([#7373](https://github.com/nocobase/nocobase/pull/7373)) von @mytharcher
- **[Workflow: Paralleler Knoten]** Behebt parallelen Knoten, der nach dem Fortsetzen unter MySQL pausiert ([#7346](https://github.com/nocobase/nocobase/pull/7346)) von @mytharcher
- **[Workflow: CC]** Behebt, dass Blöcke nicht entfernt werden können ([#7338](https://github.com/nocobase/nocobase/pull/7338)) von @mytharcher
- **[Datenvisualisierung]** Datumsvariablenproblem im Standardwert des Datumsfeldes im Diagrammfilterblock ([#7291](https://github.com/nocobase/nocobase/pull/7291)) von @katherinehhh
- **[Sammlung: Baum]** Behebt die Pfadsynchronisationslogik von Baumsammlungen ([#7330](https://github.com/nocobase/nocobase/pull/7330)) von @ChimingLiu
- **[Workflow: HTTP-Anfrageknoten]** Behebt Wettlaufsituation ([#7310](https://github.com/nocobase/nocobase/pull/7310)) von @mytharcher
- **[Workflow: Dynamischer Berechnungsknoten]** Behebt durch Legacy-API verursachten Fehler ([#7321](https://github.com/nocobase/nocobase/pull/7321)) von @mytharcher
- **[Aktion: Datensätze exportieren]** Behebt falsche Formatierung von verschachtelten Beziehungsfeldern beim Export nach Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) von @aaaaaajie
- **[Aktion: Datensätze importieren Pro]** Erlaubt keine Zuweisung von Beziehungsfeldern während der Import-Duplikaterkennung. von @aaaaaajie
- **[Datenquelle: Externer SQL Server]** Behebt inkonsistentes Speicherformat für MSSQL-Datetime-Felder (ohne Zeitzone) aus externen Datenquellen von @aaaaaajie
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Löscht die ausgewählten Zeilen nach erfolgreichem Auslösen von Aktionen für mehrere Datensätze von @mytharcher
- **[Workflow: Unterworkflow]** Behebt angehaltenen Workflow von @mytharcher
- **[Vorlagendruck]** Druck von Radio-Select-Feldern in mehreren Datenzeilen von @jiannx
- **[Dateispeicher: S3(Pro)]**

  - Behebt das Problem, dass die IAM-Authentifizierungsmethode nicht zum Hochladen von Dateien verwendet werden konnte von @mytharcher
  - Markiert problematischen Parameter `attachmentField` als veraltet von @mytharcher
- **[Workflow: Genehmigung]**

  - Behebt das Problem, dass das Laden von Daten aus externen Datenquellen in Genehmigungsdatensätzen zu einem 404-Fehler führte von @mytharcher
  - Fügt Aufgabentitel für hinzugefügte und delegierte Elemente hinzu von @mytharcher
  - Behebt Fehlerwurf aus der Bearbeiterauswahl innerhalb einer externen Datenquelle von @mytharcher
  - Behebt das Problem, dass die Benutzerliste während der Gegenzeichnung leer war von @mytharcher
  - Behebt Aktualisierung von Assoziationen beim Einreichen eines Entwurfs von @mytharcher
  - Behebt, dass Verknüpfungsregeln im ursprünglichen Genehmigungsdetailblock nicht funktionieren von @mytharcher
- **[Backup-Manager]** Große Datei-Backups könnten "erfolgreich" anzeigen, bevor sie tatsächlich abgeschlossen sind von @gchust
- **[Migrationsmanager]** Überspringt die von der neuesten pg_dump generierten Befehle `\restrict` und `\unrestrict` beim Erstellen von Migrationsdateien, um Wiederherstellungsfehler zu beheben. von @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.12](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Veröffentlichungsdatum: 22.08.2025*

#### 🎉 Neue Funktionen

- **[client]** Unterstützt Feldvalidierungsregel ([#7297](https://github.com/nocobase/nocobase/pull/7297)) von @aaaaaajie
- **[Workflow: Genehmigung]**

  - Fügt Inline-Vorlagentyp für die Benachrichtigungskonfiguration hinzu von @mytharcher
  - Unterstützt die Verwendung eines einheitlichen Aufgabentitels für alle Genehmigungsknoten im selben Workflow von @mytharcher

#### 🚀 Verbesserungen

- **[database]** Optimierte ACL-Meta-Abfrageleistung ([#7400](https://github.com/nocobase/nocobase/pull/7400)) von @aaaaaajie
- **[client]** Unterstützt die Anzeige von Symbolen, die durch Zeichenfolgen identifiziert werden, in der Select-Komponente im schreibgeschützten Modus ([#7420](https://github.com/nocobase/nocobase/pull/7420)) von @mytharcher
- **[Mobil]** Optimiert die mobile Popup-Komponente ([#7414](https://github.com/nocobase/nocobase/pull/7414)) von @zhangzhonghe
- **[Workflow]** Aktualisiert das Knotenauswahlmenü, um Optionen in einem zweispaltigen Layout anzuzeigen, um die Informationsdichte zu verbessern und Benutzern die gleichzeitige Anzeige weiterer Optionen zu ermöglichen ([#7396](https://github.com/nocobase/nocobase/pull/7396)) von @mytharcher
- **[Lizenzeinstellungen]** Kopiert in den Lizenzeinstellungen jedes Mal die neueste Instanz-ID ([#7387](https://github.com/nocobase/nocobase/pull/7387)) von @jiannx
- **[Benachrichtigung: In-App-Nachricht]** Entfernt SQL-Protokollausgaben über `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) von @2013xile
- **[Authentifizierung]** Entfernt den Token-Parameter aus der URL nach erfolgreicher Anmeldung ([#7386](https://github.com/nocobase/nocobase/pull/7386)) von @2013xile
- **[Vorlagendruck]** Unterstützt Feld-m2m-Array von @jiannx

#### 🐛 Fehlerbehebungen

- **[database]** Behebt Problem, bei dem PostgreSQL-Externtabellenlesevorgänge Ansichten aus anderen Schemata einschlossen ([#7410](https://github.com/nocobase/nocobase/pull/7410)) von @aaaaaajie
- **[client]**

  - Behandelt Zahl 0 als leer bei der Leer-Validierung von Verknüpfungsregeln ([#7404](https://github.com/nocobase/nocobase/pull/7404)) von @katherinehhh
  - Behebt ein Problem, bei dem die Schaltfläche "Spalteneinstellungen" Spalten aus der Tabelle innerhalb des modalen Dialogs lädt ([#7385](https://github.com/nocobase/nocobase/pull/7385)) von @kerwin612
  - Behebt Textumbruch des Link-Buttons ([#7406](https://github.com/nocobase/nocobase/pull/7406)) von @mytharcher
- **[server]** Einigen Anfragen fehlt `ctx.action`, was Fehler in der Audit-Log-Middleware verursacht ([#7369](https://github.com/nocobase/nocobase/pull/7369)) von @2013xile
- **[Block: Vorlage]** Behebt ein Problem, bei dem E-Mail-Blöcke nicht sichtbar waren, wenn sie in einem geerbten Vorlagenblock platziert wurden ([#7430](https://github.com/nocobase/nocobase/pull/7430)) von @gchust
- **[Workflow: Mailer-Knoten]** Behebt das Problem, dass der E-Mail-Knoten möglicherweise nicht ordnungsgemäß fortgesetzt wird ([#7409](https://github.com/nocobase/nocobase/pull/7409)) von @mytharcher
- **[Mobil]**

  - Falsches Anzeigeformat des Datumsfeldes auf Mobilgeräten ([#7412](https://github.com/nocobase/nocobase/pull/7412)) von @katherinehhh
  - Behebt das Problem, dass die Formularübermittlungsdaten im mobilen Genehmigungsdialog falsch sind ([#7389](https://github.com/nocobase/nocobase/pull/7389)) von @zhangzhonghe
- **[Workflow]**

  - Behebt Fehlerwurf und Verschwinden von Formulardaten beim Bearbeiten der Workflow-Kategorie ([#7408](https://github.com/nocobase/nocobase/pull/7408)) von @mytharcher
  - Behebt die Übersetzung des Seitentitels im Workflow-Aufgabencenter ([#7392](https://github.com/nocobase/nocobase/pull/7392)) von @mytharcher
- **[Office-Dateivorschau]** Behebt Fehlerwurf beim Hochladen einer Datei in ein Anhang-URL-Feld ([#7405](https://github.com/nocobase/nocobase/pull/7405)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** Behebt Übersetzungen ([#7384](https://github.com/nocobase/nocobase/pull/7384)) von @mytharcher
- **[Sammlungsfeld: Formel]** Behebt das Problem, dass die Formeleingabe aufgrund des Variablentyps die Validierung nicht bestehen konnte ([#7373](https://github.com/nocobase/nocobase/pull/7373)) von @mytharcher
- **[Dateimanager]** Entfernt den Hinweis auf das Datei-Upload-Größenlimit ([#7391](https://github.com/nocobase/nocobase/pull/7391)) von @mytharcher
- **[Kalender]** Kalenderereignis-Tooltip zeigt [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) von @katherinehhh
- **[Aktion: Datensätze importieren Pro]** Erlaubt keine Zuweisung von Beziehungsfeldern während der Import-Duplikaterkennung. von @aaaaaajie
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Löscht die ausgewählten Zeilen nach erfolgreichem Auslösen von Aktionen für mehrere Datensätze von @mytharcher
- **[Vorlagendruck]** Druck von Radio-Select-Feldern in mehreren Datenzeilen von @jiannx
- **[Dateispeicher: S3(Pro)]**

  - Markiert problematischen Parameter `attachmentField` als veraltet von @mytharcher
  - Behebt das Problem, dass die IAM-Authentifizierungsmethode nicht zum Hochladen von Dateien verwendet werden konnte von @mytharcher
- **[Workflow: Genehmigung]**

  - Behebt das Problem, dass das Laden von Daten aus externen Datenquellen in Genehmigungsdatensätzen zu einem 404-Fehler führte von @mytharcher
  - Behebt das Problem, dass die Benutzerliste während der Gegenzeichnung leer war von @mytharcher
- **[Backup-Manager]** Große Datei-Backups könnten "erfolgreich" anzeigen, bevor sie tatsächlich abgeschlossen sind von @gchust
- **[Migrationsmanager]** Überspringt die von der neuesten pg_dump generierten Befehle `\restrict` und `\unrestrict` beim Erstellen von Migrationsdateien, um Wiederherstellungsfehler zu beheben. von @2013xile
