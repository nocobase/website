---
title: "NocoBase v1.9.0-beta.18: Automatische Aktualisierung von Sequenzfeldern nach Datenmigration"
description: "Versionshinweise zu v1.9.0-beta.18"
---

### 🎉 Neue Funktionen

- **[Sammlungsfeld: Sequenz]** Automatische Aktualisierung von Sequenzfeldern nach Datenmigration ([#8063](https://github.com/nocobase/nocobase/pull/8063)) von @cgyrock

- **[Datenquelle: REST-API]** Option `Fehlermeldungstransformator` in der RESTful-API-Datenquellenkonfiguration hinzugefügt von @cgyrock

- **[Authentifizierung: OIDC]** Unterstützung für automatische Weiterleitung zur SSO-URL bei nicht authentifizierten Benutzern von @heziqiang

### 🚀 Verbesserungen

- **[auth]** Behebung von [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) von @2013xile

- **[client]**
  - Anzeigen ausgeblendeter Optionen beim Hovern in der Select-Komponente ([#8029](https://github.com/nocobase/nocobase/pull/8029)) von @katherinehhh

  - Optimierung der Validierungsmeldungen für Untertabellen ([#8001](https://github.com/nocobase/nocobase/pull/8001)) von @katherinehhh

  - Ladezustand für die Aktionsschaltflächen "Datensatz aktualisieren" und "Datensatz löschen" hinzugefügt, um doppelte Anfragen zu vermeiden ([#7964](https://github.com/nocobase/nocobase/pull/7964)) von @mytharcher

  - Verwendung von dreifachen Klammern (`{{{` und `}}}`) für Variablen im Nachrichteninhalt, um zu vermeiden, dass Variablen von Handlebars maskiert werden ([#7972](https://github.com/nocobase/nocobase/pull/7972)) von @mytharcher

- **[Aktion: Datensätze importieren]** Auswahl der ID für Importfelder ermöglicht ([#8132](https://github.com/nocobase/nocobase/pull/8132)) von @katherinehhh

- **[Workflow]** "Haupt"-Datenquellenkontext für UserSelect hinzugefügt, um eine allgemeinere Komponente bereitzustellen, die auch an anderen Stellen verwendet werden kann ([#8010](https://github.com/nocobase/nocobase/pull/8010)) von @mytharcher

- **[Sammlungsfeld: Markdown(Vditor)]** Anpassung der Vollbild-Inhaltsbreite von Vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) von @katherinehhh

- **[Asynchroner Aufgabenmanager]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern ([#7796](https://github.com/nocobase/nocobase/pull/7796)) von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern von @mytharcher

- **[Workflow: Genehmigung]**
  - Korrektur der Variablenauswahl in AssigneeSelect, Einschränkung auf PK oder FK der Benutzersammlung von @mytharcher

  - Verwendung einer gemeinsamen Komponente zur Reduzierung von doppeltem Code von @mytharcher

  - Payload der manuellen Ausführung (oder Auslösung durch Subflow-Knoten) kompatibel mit Datensatz oder Primärschlüssel gemacht. Konsistenzprobleme im Trigger-Kontext vermieden. von @mytharcher

  - Reduzierung der im Genehmigungs-Popup zu ladenden Assoziationen für bessere Leistung von @mytharcher

- **[Audit-Logs]** Aktualisierung des eindeutigen Identifikatorfelds auf `text`, um Identifikatorlängenüberlauf bei Massenbearbeitungen zu verhindern von @2013xile

- **[Migrationsmanager]** Automatische Aktualisierung von Sequenzfeldern nach Datenmigration von @cgyrock

### 🐛 Fehlerbehebungen

- **[server]** Problem behoben, bei dem ausgelöste Workflows nach dem Importieren von Daten nicht zur Verarbeitungswarteschlange hinzugefügt wurden, um sicherzustellen, dass Workflows unmittelbar nach dem Import wie erwartet ausgeführt werden ([#8121](https://github.com/nocobase/nocobase/pull/8121)) von @mytharcher

- **[acl]** Problem behoben, bei dem ACL-Metainformationen falsch sind, wenn Berechtigungsbereiche externer Datenquellen aktuelle benutzerbezogene Variablen verwenden ([#8013](https://github.com/nocobase/nocobase/pull/8013)) von @2013xile

- **[client]**
  - Fehler beim Lazy Load in Variable.Input behoben, der dazu führte, dass das Variablenoptionsmenü falsch neu gerendert wurde ([#8009](https://github.com/nocobase/nocobase/pull/8009)) von @mytharcher

  - Fehler beim Hinzufügen von Unterdatensätzen im Assoziationsbaum-Tabellenblock behoben ([#7989](https://github.com/nocobase/nocobase/pull/7989)) von @katherinehhh

  - Flackerproblem des Dropdown-Auswahlfelds für Verknüpfungsregeln behoben ([#8018](https://github.com/nocobase/nocobase/pull/8018)) von @zhangzhonghe

  - Fehler beim Öffnen der Standardwerteinstellungen vermieden ([#7997](https://github.com/nocobase/nocobase/pull/7997)) von @mytharcher

  - Routing-Probleme bei Verwendung eines Iframes behoben ([#7957](https://github.com/nocobase/nocobase/pull/7957)) von @zhangzhonghe

  - Problem behoben, bei dem Remote-Select bei Nicht-Objekt-Werten kein korrektes Label anzeigte ([#7975](https://github.com/nocobase/nocobase/pull/7975)) von @katherinehhh

- **[Datenbank]** Korrektur: Entfernung der UTC-Verarbeitung bei der Zeitumwandlung für reine Zeitfelder, um zeitzonenbedingte Verschiebungen zu verhindern. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) von @ChimingLiu

- **[Aktion: Datensätze importieren]**
  - Importierte Felder stimmen nicht mit den in ACL-Einstellungen festgelegten Feldern überein ([#8075](https://github.com/nocobase/nocobase/pull/8075)) von @2013xile

  - Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn ein Feld in der importierenden XLSX-Datei einen `null`-Wert hatte ([#8037](https://github.com/nocobase/nocobase/pull/8037)) von @mytharcher

  - Problem beim Importieren von Daten in einer Baumtabelle behoben ([#7976](https://github.com/nocobase/nocobase/pull/7976)) von @cgyrock

- **[Workflow]**
  - Problem behoben, bei dem die Ausführungsseite einen Fehler ausgab, wenn Jobs auf einem Knoten undefiniert waren ([#8066](https://github.com/nocobase/nocobase/pull/8066)) von @mytharcher

  - Problem behoben, bei dem in der Ausführungs-Canvas ein Fehler ausgelöst wurde, wenn ein Knoten gelöscht wurde ([#8090](https://github.com/nocobase/nocobase/pull/8090)) von @mytharcher

  - Problem behoben, bei dem die Warteschlange vor dem Veröffentlichen von Nachrichten geschlossen wurde ([#8003](https://github.com/nocobase/nocobase/pull/8003)) von @mytharcher

  - Problem behoben, bei dem vorbereitete Ausführungen vor dem Stoppen nicht an die Warteschlange gesendet wurden ([#7981](https://github.com/nocobase/nocobase/pull/7981)) von @mytharcher

  - Problem behoben, bei dem einige Workflow-Aufgabenmenüs nicht angezeigt wurden ([#7980](https://github.com/nocobase/nocobase/pull/7980)) von @mytharcher

  - Problem behoben, bei dem der Aufgabenlink zu einer Fehlerseite führte ([#7983](https://github.com/nocobase/nocobase/pull/7983)) von @mytharcher

  - Problem behoben, bei dem die Aufgabenanzahl aufgrund falscher Provider-Nutzung nicht angezeigt wurde ([#7968](https://github.com/nocobase/nocobase/pull/7968)) von @mytharcher

- **[Multi-App-Manager]** Protokollebene-Einstellungen wurden nicht auf Unteranwendungen angewendet ([#8045](https://github.com/nocobase/nocobase/pull/8045)) von @2013xile

- **[Zugriffskontrolle]** Middleware für Berechtigungsprüfungen bei Assoziationsoperationen für externe Datenquellen hinzugefügt ([#8062](https://github.com/nocobase/nocobase/pull/8062)) von @2013xile

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem behoben, bei dem das m2m-Array-Feld in der Untertabelle nicht aktualisiert werden konnte ([#7998](https://github.com/nocobase/nocobase/pull/7998)) von @cgyrock

- **[Theme-Editor]** Theme-Umschalter auf mobilen Geräten aktiviert ([#8046](https://github.com/nocobase/nocobase/pull/8046)) von @zhangzhonghe

- **[Datenvisualisierung]**
  - Filterfeldeinstellungen für externe Datenquellensammlungen zeigen keine spezifischen Eigenschaften an ([#7982](https://github.com/nocobase/nocobase/pull/7982)) von @2013xile

  - Problem behoben, bei dem die Diagrammabfrage den ACL-Datenbereich nicht unterstützte ([#7915](https://github.com/nocobase/nocobase/pull/7915)) von @2013xile

- **[Sammlung: Baum]** Fehlerhafte Aktualisierungen der Pfadtabelle aufgrund falscher Suche nach dem übergeordneten Baumfeld behoben ([#8000](https://github.com/nocobase/nocobase/pull/8000)) von @2013xile

- **[Workflow: Manueller Knoten]** Problem behoben, bei dem die Anzahl der manuellen Aufgaben nicht korrekt war ([#7984](https://github.com/nocobase/nocobase/pull/7984)) von @mytharcher

- **[Asynchroner Aufgabenmanager]** Migrationsregel für die `asyncTasks`-Sammlung hinzugefügt, um die Migration asynchroner Aufgabenaufzeichnungen zu vermeiden ([#7950](https://github.com/nocobase/nocobase/pull/7950)) von @mytharcher

- **[Datenquellenmanager]** Problem behoben, bei dem die Aktualisierung des Datenquellenpassworts fehlschlug, wenn das Datenbankpasswort geändert wurde ([#7977](https://github.com/nocobase/nocobase/pull/7977)) von @cgyrock

- **[Abteilungen]** Problem behoben, bei dem abteilungsassoziierte Felder nicht bearbeitet werden konnten ([#7462](https://github.com/nocobase/nocobase/pull/7462)) von @heziqiang

- **[Workflow: Unterworkflow]** Problem behoben, bei dem der ausgewählte Workflow "N/A" anzeigte, wenn die Workflow-Anzahl größer als 200 war von @mytharcher

- **[Workflow: Genehmigung]**
  - Sprachdatei korrigiert von @mytharcher

  - Problem behoben, bei dem Genehmigungsaufzeichnungen im Rückgabezweig nicht im Job-Ergebnis enthalten waren von @mytharcher

  - Problem behoben, bei dem beim Laden verwandter Genehmigungen mit ACL-Bereichsvariablen keine Daten vorhanden waren von @mytharcher

  - Berechtigungsproblem beim Abrufen von `approvalRecords.reassignee` aufgrund von Änderungen an `RemoteSelect` behoben von @mytharcher

  - Problem behoben, bei dem die Druckaktion nicht funktionierte, wenn die Seite bei geöffnetem Modal aktualisiert wurde von @mytharcher

  - Migration hinzugefügt, um doppelte Datensatzfehler beim Hinzufügen eines Index zu vermeiden von @mytharcher

  - Problem behoben, bei dem der Prozess bei Verzweigung mit Reihenfolge und Gegenzeichnung falsch war von @mytharcher

  - Problem behoben, bei dem der Kommentar im Job-Ergebnis null war, nachdem der Benutzer die Genehmigung mit Kommentar eingereicht hatte von @mytharcher

  - Problem behoben, dass im Ausführungskontext nach erneuter Einreichung durch den Benutzer keine Antragstellerdaten vorhanden waren von @mytharcher

  - Problem behoben, bei dem beim Laden datensatzbezogener Genehmigungen im Detail-Drawer ein Berechtigungsfehler ausgelöst wurde von @mytharcher

  - Problem behoben, bei dem das Genehmiger-Popup-Fenster keinen Titel anzeigte von @zhangzhonghe

  - Problem behoben, bei dem beim Laden verwandter Genehmigungen im Nur-Vereinigungs-Rollenmodus ein Fehler ausgelöst wurde von @mytharcher

  - Problem behoben, bei dem beim Auflisten von Genehmigungen ein Out-of-Memory-Fehler auftrat von @mytharcher
