---
title: "NocoBase v1.9.0-beta.6: Unterstützung zur Aufteilung asynchroner Aufgabendienste nach Umgebung und Ereigniswarteschlange"
description: "Versionshinweise zu v1.9.0-beta.6"
---

### 🎉 Neue Funktionen

- **[Client]** Option "Autofokus" für Eingabe-, Textbereich-, URL- und InputNumber-Komponenten hinzugefügt, die das Eingabefeld beim initialen Seitenrendering automatisch fokussiert, wenn aktiviert ([#7320](https://github.com/nocobase/nocobase/pull/7320)) von @zhangzhonghe
- **[Async-Task-Manager]** Unterstützung zur Aufteilung von Async-Task-Diensten nach Umgebung und Ereigniswarteschlange ([#7241](https://github.com/nocobase/nocobase/pull/7241)) von @mytharcher
- **[Office-Dateivorschau]** Unterstützung zur Vorschau von Office-Dateien über die Microsoft-Live-Vorschau ([#7300](https://github.com/nocobase/nocobase/pull/7300)) von @mytharcher
- **[Auth: SAML 2.0]** Signaturbezogene Konfigurationsoptionen hinzugefügt von @2013xile
- **[Workflow: Genehmigung]**

  - Inline-Vorlagentyp für Benachrichtigungskonfiguration hinzugefügt von @mytharcher
  - Unterstützung zur Verwendung eines konsistenten Aufgabentitels für alle Genehmigungsknoten im selben Workflow von @mytharcher

### 🚀 Verbesserungen

- **[Datenbank]** Optimierte ACL-Meta-Abfrageleistung ([#7400](https://github.com/nocobase/nocobase/pull/7400)) von @aaaaaajie
- **[Client]**

  - Unterstützung zur Anzeige von Symbolen, die als Zeichenketten in der Select-Komponente identifiziert werden, im schreibgeschützten Modus ([#7420](https://github.com/nocobase/nocobase/pull/7420)) von @mytharcher
  - Datumsvariable "Vorgestern" hinzugefügt ([#7359](https://github.com/nocobase/nocobase/pull/7359)) von @katherinehhh
  - Leistungsoptimierung beim Wechseln von Popup-Tabs ([#7353](https://github.com/nocobase/nocobase/pull/7353)) von @zhangzhonghe
  - Menü nach Auswahl nicht automatisch schließen ([#7252](https://github.com/nocobase/nocobase/pull/7252)) von @kerwin612
- **[Mobil]** Optimierte die mobile Popup-Komponente ([#7414](https://github.com/nocobase/nocobase/pull/7414)) von @zhangzhonghe
- **[Workflow]**

  - Aktualisiertes Knotenauswahlmenü zur Anzeige von Optionen in einem zweispaltigen Layout zur Verbesserung der Informationsdichte, sodass Benutzer mehr Optionen auf einmal sehen können ([#7396](https://github.com/nocobase/nocobase/pull/7396)) von @mytharcher
  - Instabilen Testfall behoben ([#7349](https://github.com/nocobase/nocobase/pull/7349)) von @mytharcher
  - Normalen Titel anzeigen, wenn deaktiviert ([#7339](https://github.com/nocobase/nocobase/pull/7339)) von @mytharcher
  - Reduzierung der zu ladenden Jobs bei der Vorbereitung der Ausführung ([#7284](https://github.com/nocobase/nocobase/pull/7284)) von @mytharcher
- **[Lizenzeinstellungen]** In den Lizenzeinstellungen wird jedes Mal die neueste Instanz-ID kopiert ([#7387](https://github.com/nocobase/nocobase/pull/7387)) von @jiannx
- **[Authentifizierung]** Entfernte den Token-Parameter aus der URL nach erfolgreicher Anmeldung ([#7386](https://github.com/nocobase/nocobase/pull/7386)) von @2013xile
- **[Benachrichtigung: In-App-Nachricht]**

  - SQL-Protokollausgabe über `console.log` entfernt ([#7368](https://github.com/nocobase/nocobase/pull/7368)) von @2013xile
  - In-App-Nachricht von SSE auf WebSocket umgestellt ([#7302](https://github.com/nocobase/nocobase/pull/7302)) von @mytharcher
- **[Office-Dateivorschau]** Unterstützung für die Vorschau von `.odt`-Dateien hinzugefügt ([#7347](https://github.com/nocobase/nocobase/pull/7347)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Unterstützung zur Aufteilung von Import-/Export-Diensten nach Umgebung und Ereigniswarteschlange von @mytharcher
- **[Workflow: JavaScript]** Cache in App-Cache geändert, um Fehler im Cluster-Modus zu vermeiden von @mytharcher
- **[Vorlagendruck]** Unterstützung für m2m-Array-Feld von @jiannx
- **[Backup-Manager]** Leistungsverbesserung für MySQL-Datenbank-Backup-Operationen von @gchust
- **[Auth: DingTalk]** Im DingTalk-Client wird der Navigationstitel auf eine leere Zeichenkette gesetzt, anstatt "Laden..." anzuzeigen von @2013xile
- **[Migrations-Manager]** Unterstützung zur Aufteilung des Migrationsdienstes nach Umgebung und Ereigniswarteschlange von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem das Symbol falsch angezeigt wurde, wenn die URL im Anhang-URL-Feld Abfrageparameter enthielt ([#7432](https://github.com/nocobase/nocobase/pull/7432)) von @mytharcher
  - Zahl 0 bei der Leer-Validierung von Verknüpfungsregeln als leer behandeln ([#7404](https://github.com/nocobase/nocobase/pull/7404)) von @katherinehhh
  - Zeilenumbruch des Link-Button-Textes behoben ([#7406](https://github.com/nocobase/nocobase/pull/7406)) von @mytharcher
  - Problem behoben, bei dem das mehrspaltige Formularlayout auf mobilen Geräten nicht in ein einspaltiges Layout umgewandelt wird ([#7355](https://github.com/nocobase/nocobase/pull/7355)) von @zhangzhonghe
  - Fehler beim Massenlöschen von Sammlungen behoben ([#7345](https://github.com/nocobase/nocobase/pull/7345)) von @aaaaaajie
  - Problem behoben, bei dem zuvor gespeicherte Datenbereiche bei der individuellen Berechtigungskonfiguration nicht vorausgewählt waren ([#7288](https://github.com/nocobase/nocobase/pull/7288)) von @aaaaaajie
  - Problem behoben, bei dem rohe Variablenzeichenketten mit dem Formular gesendet wurden ([#7337](https://github.com/nocobase/nocobase/pull/7337)) von @zhangzhonghe
  - Bei Verwendung von Variablen zum Setzen von Feldstandardwerten in Filterformularen wird bei leerem Variablenwert die ursprüngliche Variablenzeichenkette im Eingabefeld angezeigt ([#7335](https://github.com/nocobase/nocobase/pull/7335)) von @zhangzhonghe
  - Tooltip zeigt beim Hovern im Aktionspanel [object Object] an ([#7322](https://github.com/nocobase/nocobase/pull/7322)) von @katherinehhh
  - Endlosschleife beim Parsen von Feldstandardwerten behoben ([#7301](https://github.com/nocobase/nocobase/pull/7301)) von @zhangzhonghe
  - Dateivorschau-Element bei null-URL behoben ([#7315](https://github.com/nocobase/nocobase/pull/7315)) von @mytharcher
  - Problem behoben, bei dem eine Baumtabelle nicht erweitert werden konnte ([#7309](https://github.com/nocobase/nocobase/pull/7309)) von @zhangzhonghe
  - Vollständige URL zur lokalen Datei bei der Vorschau hinzugefügt ([#7314](https://github.com/nocobase/nocobase/pull/7314)) von @mytharcher
  - Unerwartetes Verhalten beim Drag-and-Drop-Sortieren von Tabellenzeilen behoben ([#6959](https://github.com/nocobase/nocobase/pull/6959)) von @ChimingLiu
  - Anzeigeproblem des Datumsfeldes im Popup des Assoziationsfeld-Datenselektors des Filterformulars ([#7290](https://github.com/nocobase/nocobase/pull/7290)) von @katherinehhh
- **[Datenbank]** Problem behoben, bei dem das Lesen externer Postgres-Tabellen Ansichten aus anderen Schemata einschloss ([#7410](https://github.com/nocobase/nocobase/pull/7410)) von @aaaaaajie
- **[Server]** Einige Anfragen fehlten `ctx.action`, was zu Fehlern in der Audit-Log-Middleware führte ([#7369](https://github.com/nocobase/nocobase/pull/7369)) von @2013xile
- **[undefined]** Neues Plugin zum Preset hinzugefügt ([#7319](https://github.com/nocobase/nocobase/pull/7319)) von @mytharcher
- **[utils]** Falsche Zeitzonenbehandlung für parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) von @katherinehhh
- **[Block: Vorlage]** Problem behoben, bei dem E-Mail-Blöcke innerhalb eines geerbten Vorlagenblocks nicht sichtbar waren ([#7430](https://github.com/nocobase/nocobase/pull/7430)) von @gchust
- **[Mobil]**

  - Falsches Anzeigeformat des Datumsfeldes auf mobilen Geräten ([#7412](https://github.com/nocobase/nocobase/pull/7412)) von @katherinehhh
  - Problem behoben, bei dem die Formularübermittlungsdaten im mobilen Genehmigungsdialog falsch waren ([#7389](https://github.com/nocobase/nocobase/pull/7389)) von @zhangzhonghe
  - Problem behoben, bei dem die Datumsauswahl auf mobilen Geräten bei angewendeten Datumsbereichsgrenzen falsch angezeigt wurde ([#7362](https://github.com/nocobase/nocobase/pull/7362)) von @katherinehhh
- **[Workflow]**

  - Fehler beim Bearbeiten der Workflow-Kategorie behoben, der zum Verschwinden von Formulardaten führte ([#7408](https://github.com/nocobase/nocobase/pull/7408)) von @mytharcher
  - Übersetzung des Seitentitels im Workflow-Aufgabenzentrum behoben ([#7392](https://github.com/nocobase/nocobase/pull/7392)) von @mytharcher
  - Menü "Knoten hinzufügen" überarbeitet und dadurch verursachte Leistungsprobleme beim Rendern der Workflow-Leinwand behoben ([#7363](https://github.com/nocobase/nocobase/pull/7363)) von @mytharcher
  - Problem mit falschen Filterbedingungen beim Abrufen eines einzelnen To-Do-Elements behoben ([#7366](https://github.com/nocobase/nocobase/pull/7366)) von @mytharcher
  - Problem mit der Schlüsselwortsuche in der Feldauswahl behoben ([#7356](https://github.com/nocobase/nocobase/pull/7356)) von @mytharcher
  - Fehler beim Stoppen durch Veröffentlichung in der Ereigniswarteschlange vermieden ([#7348](https://github.com/nocobase/nocobase/pull/7348)) von @mytharcher
  - `undefined`-Ergebnis beim Beenden des Prozessors behoben ([#7317](https://github.com/nocobase/nocobase/pull/7317)) von @mytharcher
  - BigInt-ID-Problem in MySQL beim Speichern von Jobs behoben ([#7292](https://github.com/nocobase/nocobase/pull/7292)) von @mytharcher
- **[Workflow: E-Mail-Knoten]** Problem behoben, bei dem der E-Mail-Knoten die Ausführung möglicherweise nicht korrekt wieder aufnahm ([#7409](https://github.com/nocobase/nocobase/pull/7409)) von @mytharcher
- **[Office-Dateivorschau]**

  - Fehler beim Hochladen einer Datei in ein Anhang-URL-Feld behoben ([#7405](https://github.com/nocobase/nocobase/pull/7405)) von @mytharcher
  - Unterstützung für `.docx`, `.xlsx` und `.pptx`-Dateien mit reiner URL zur Vorschau ([#7336](https://github.com/nocobase/nocobase/pull/7336)) von @mytharcher
- **[Dateimanager]**

  - Hinweis zur Dateigrößenbeschränkung beim Hochladen entfernt ([#7391](https://github.com/nocobase/nocobase/pull/7391)) von @mytharcher
  - `storageId`-Feld zur Dateisammlung hinzugefügt, um die Berechtigungskonfiguration zu unterstützen ([#7351](https://github.com/nocobase/nocobase/pull/7351)) von @mytharcher
  - Speicherfeldberechtigung behoben ([#7316](https://github.com/nocobase/nocobase/pull/7316)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]**

  - Übersetzungen behoben ([#7384](https://github.com/nocobase/nocobase/pull/7384)) von @mytharcher
  - Problem behoben, bei dem In-Site-Nachrichten empfangen, aber nicht in einem Popup angezeigt wurden ([#7364](https://github.com/nocobase/nocobase/pull/7364)) von @mytharcher
- **[Kalender]** Tooltip von Kalenderereigniselementen zeigt [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) von @katherinehhh
- **[Sammlungsfeld: Formel]** Problem behoben, bei dem die Formeleingabe aufgrund des Variablentyps die Validierung nicht bestand ([#7373](https://github.com/nocobase/nocobase/pull/7373)) von @mytharcher
- **[Workflow: Paralleler Knoten]** Problem behoben, bei dem der parallele Knoten nach der Fortsetzung unter MySQL anhielt ([#7346](https://github.com/nocobase/nocobase/pull/7346)) von @mytharcher
- **[Workflow: CC]** Problem behoben, dass Blöcke nicht entfernt werden konnten ([#7338](https://github.com/nocobase/nocobase/pull/7338)) von @mytharcher
- **[Datenvisualisierung]** Datumsvariablenproblem im Standardwert des Datumsfeldes im Diagrammfilterblock ([#7291](https://github.com/nocobase/nocobase/pull/7291)) von @katherinehhh
- **[Sammlung: Baum]** Pfadsynchronisationslogik von Baumsammlungen behoben ([#7330](https://github.com/nocobase/nocobase/pull/7330)) von @ChimingLiu
- **[Workflow: HTTP-Anfrageknoten]** Wettlaufsituation behoben ([#7310](https://github.com/nocobase/nocobase/pull/7310)) von @mytharcher
- **[Workflow: Dynamischer Berechnungsknoten]** Durch Legacy-API verursachten Fehler behoben ([#7321](https://github.com/nocobase/nocobase/pull/7321)) von @mytharcher
- **[Aktion: Datensätze exportieren]** Falsche Formatierung von verschachtelten Beziehungsfeldern beim Exportieren nach Excel behoben ([#7277](https://github.com/nocobase/nocobase/pull/7277)) von @aaaaaajie
- **[Aktion: Datensätze importieren Pro]** Zuweisung von Beziehungsfeldern während der Import-Duplikaterkennung nicht erlaubt von @aaaaaajie
- **[Datenquelle: Externer SQL Server]** Inkonsistentes Speicherformat für MSSQL-Datetime-Felder (ohne Zeitzone) aus externen Datenquellen behoben von @aaaaaajie
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Ausgewählte Zeilen nach erfolgreichem Auslösen von Aktionen für mehrere Datensätze löschen von @mytharcher
- **[Workflow: Unterworkflow]** Angehaltenen Workflow behoben von @mytharcher
- **[Vorlagendruck]** Druck von Optionsfeldern in mehreren Datenzeilen von @jiannx
- **[Dateispeicher: S3(Pro)]**

  - Problem behoben, bei dem die IAM-Authentifizierungsmethode nicht zum Hochladen von Dateien verwendet werden konnte von @mytharcher
  - Problemparameter `attachmentField` als veraltet markiert von @mytharcher
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem das Laden von Daten aus externen Datenquellen in Genehmigungsaufzeichnungen zu einem 404-Fehler führte von @mytharcher
  - Aufgabentitel für hinzugefügte und delegierte Elemente hinzugefügt von @mytharcher
  - Fehler behoben, der durch die Auswahl des Bearbeiters innerhalb einer externen Datenquelle ausgelöst wurde von @mytharcher
  - Problem behoben, bei dem die Benutzerliste während der Gegenzeichnung leer war von @mytharcher
  - Aktualisierung von Assoziationen beim Einreichen eines Entwurfs behoben von @mytharcher
  - Problem behoben, dass Verknüpfungsregeln im ursprünglichen Genehmigungsdetailblock nicht funktionierten von @mytharcher
- **[Backup-Manager]** Große Datei-Backups konnten "erfolgreich" anzeigen, bevor sie tatsächlich abgeschlossen waren von @gchust
- **[Migrations-Manager]** Überspringe die von der neuesten pg_dump generierten Befehle `\restrict` und `\unrestrict` beim Erstellen von Migrationsdateien, um Wiederherstellungsfehler zu beheben von @2013xile
