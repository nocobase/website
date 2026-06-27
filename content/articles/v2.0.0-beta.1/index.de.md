---
title: "NocoBase v2.0.0-beta.1: Unterstützung von plugin-definierten Wartungskomponenten, wenn die App in den Wartungsstatus wechselt"
description: "Versionshinweise zu v2.0.0-beta.1"
---

### 🎉 Neue Funktionen

- **[undefined]** Ein experimentelles "Referenzblock"-Plugin hinzugefügt, das die Wiederverwendung vorhandener Blöcke durch Referenzierung oder Kopieren ermöglicht. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) von @gchust

- **[client]**
  - Unterstützung für plugin-definierte Wartungskomponenten, wenn die App in den Wartungsstatus wechselt ([#8252](https://github.com/nocobase/nocobase/pull/8252)) von @cgyrock

  - Beim Erstellen einer Sammlung kann der Typ des voreingestellten ID-Feldes geändert werden ([#8129](https://github.com/nocobase/nocobase/pull/8129)) von @cgyrock

  - Unterstützung für Hinzufügen/Auswählen/Trennen-Einstellungen in n-zu-n-Unterformularen hinzugefügt ([#8099](https://github.com/nocobase/nocobase/pull/8099)) von @katherinehhh

  - Unterstützung für die Anpassung globaler Stile im Theme-Editor ([#7960](https://github.com/nocobase/nocobase/pull/7960)) von @ljmiaoo

  - Unterstützung für die Einstellung einer Standardsortierregel im Detailblock ([#8070](https://github.com/nocobase/nocobase/pull/8070)) von @katherinehhh

  - Unterstützung für die Einstellung des Datentyps für Zahlenfelder (Optionen: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) von @chenos

  - Unterstützung für die Sortierung von Spaltenfeldern in Tabellen ([#7900](https://github.com/nocobase/nocobase/pull/7900)) von @katherinehhh

  - Schnellerstellungsunterstützung für die Auswahl von Verknüpfungsfeldern hinzugefügt ([#7887](https://github.com/nocobase/nocobase/pull/7887)) von @katherinehhh

  - Unterstützung für Kaskadenselektor für Baumstruktur-Verknüpfungsfelder ([#7846](https://github.com/nocobase/nocobase/pull/7846)) von @katherinehhh

  - Unterstützung für Drag & Drop bei Tabellenspaltenaktionen ([#7842](https://github.com/nocobase/nocobase/pull/7842)) von @zhangzhonghe

  - Seitenwechselunterstützung für Untertabellen hinzugefügt ([#7754](https://github.com/nocobase/nocobase/pull/7754)) von @katherinehhh

  - Ereignisablauf: Neue vordefinierte Aktionen eingeführt, um die Anpassungsoptionen für die Ereignisbehandlung zu erweitern und Benutzern zu ermöglichen, Arbeitsabläufe zu optimieren und die Effizienz zu steigern ([#7672](https://github.com/nocobase/nocobase/pull/7672)) von @zhangzhonghe

  - 2.0 Markdown-Block hinzugefügt ([#7613](https://github.com/nocobase/nocobase/pull/7613)) von @katherinehhh

  - Unterstützung für die Einstellung von Verknüpfungsregeln für Unterformulare ([#7640](https://github.com/nocobase/nocobase/pull/7640)) von @zhangzhonghe

  - Unterstützung für Tabellenzeilen-Klick-Ereignis-Listener hinzugefügt, die es Benutzern ermöglichen, bestimmte Aktionen auszuführen, wenn auf eine Zeile in der Tabelle geklickt wird ([#7622](https://github.com/nocobase/nocobase/pull/7622)) von @zhangzhonghe

  - Unterstützung für benutzerdefinierte Variablen hinzugefügt ([#7585](https://github.com/nocobase/nocobase/pull/7585)) von @zhangzhonghe

  - Variable "Aktueller Gerätetyp" hinzugefügt ([#7576](https://github.com/nocobase/nocobase/pull/7576)) von @zhangzhonghe

- **[Dateimanager]** Unterstützung für die Konfiguration der Dateiumbenennungsmethode ([#8231](https://github.com/nocobase/nocobase/pull/8231)) von @JAVA-LW

- **[Workflow]**
  - Neue Systemvariablen im Workflow hinzugefügt, einschließlich `instanceId` und `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) von @mytharcher

  - "Mehrfachbedingungen"-Knoten hinzugefügt, der eine Ablaufsteuerung wie `switch`/`case` bietet ([#7878](https://github.com/nocobase/nocobase/pull/7878)) von @mytharcher

- **[Block: Karte]** 2.0 Kartenblock hinzugefügt ([#7944](https://github.com/nocobase/nocobase/pull/7944)) von @katherinehhh

- **[Datenvisualisierung]**
  - KI-Mitarbeiter zur Konfiguration von Diagrammen hinzugefügt ([#7815](https://github.com/nocobase/nocobase/pull/7815)) von @heziqiang

  - SQL-Datenquelle für Diagramme hinzugefügt ([#7830](https://github.com/nocobase/nocobase/pull/7830)) von @heziqiang

  - Diagrammtyp "Ringdiagramm" hinzugefügt ([#7629](https://github.com/nocobase/nocobase/pull/7629)) von @heziqiang

- **[Flow-Engine]** Unterstützt die Verwendung von LiquidJS-Vorlagenstrings in SQL-Anweisungen ([#7667](https://github.com/nocobase/nocobase/pull/7667)) von @2013xile

- **[Datenquellen-Manager]**
  - Die Hauptdatenquelle unterstützt jetzt das direkte Lesen von Datenbanktabellen aus der Hauptdatenbank und erlaubt die Änderung von Feld-Schnittstellen ([#7118](https://github.com/nocobase/nocobase/pull/7118)) von @aaaaaajie

  - Die Hauptdatenquelle unterstützt jetzt das direkte Lesen von Datenbanktabellen aus der Hauptdatenbank und erlaubt die Änderung von Feld-Schnittstellen ([#7118](https://github.com/nocobase/nocobase/pull/7118)) von @aaaaaajie

- **[Block: GridCard]** 2.0 GridCard-Block hinzugefügt ([#7579](https://github.com/nocobase/nocobase/pull/7579)) von @katherinehhh

- **[Block: Liste]** 2.0 Listenblock hinzugefügt ([#7574](https://github.com/nocobase/nocobase/pull/7574)) von @katherinehhh

- **[Block: Aktionspanel]** 2.0 Aktionspanel-Block hinzugefügt ([#7594](https://github.com/nocobase/nocobase/pull/7594)) von @katherinehhh

- **[KI-Mitarbeiter]** Websuche-Funktion von plugin-ai verbessert ([#7580](https://github.com/nocobase/nocobase/pull/7580)) von @cgyrock

- **[Telemetrie]** Neues Plugin hinzugefügt: Telemetrie, ein auf OpenTelemetry basierendes Telemetrie-Plugin, das CPU-, Arbeitsspeicher- und HTTP-Anfrage-Metriken mit HTTP-Export-Unterstützung bereitstellt von @2013xile

- **[Formularentwürfe]** Formularentwürfe von @chenos

- **[Dateispeicher: S3(Pro)]** Umbenennungsmodus-Option für S3 Pro Speicher hinzugefügt von @mytharcher

- **[Workflow: Genehmigung]**
  - Ermöglicht die Auswahl, ob im Genehmigungsprozess-UI ein Schnappschuss oder der neueste Datensatz angezeigt werden soll von @mytharcher

  - Zielgruppenkonfiguration hinzugefügt, um zu steuern, wer eine Genehmigung einleiten kann von @mytharcher

- **[E-Mail-Manager]** Implementierung des E-Mail-Managements 2.0 von @jiannx

### 🚀 Verbesserungen

- **[undefined]**
  - Aktualisierung der englischen Dokumentation des Diagramm-Plugins ([#7748](https://github.com/nocobase/nocobase/pull/7748)) von @heziqiang

  - Aktualisierung des Diagramm-Übersichtsdokuments ([#7702](https://github.com/nocobase/nocobase/pull/7702)) von @heziqiang

- **[flow-engine]**
  - Unterstützung der `window.location.reload`-Methode in der RunJS-Umgebung. ([#8316](https://github.com/nocobase/nocobase/pull/8316)) von @gchust

  - Optimierung der Leistungsprobleme beim Wechseln der Konfigurationsmodi ([#8241](https://github.com/nocobase/nocobase/pull/8241)) von @zhangzhonghe

  - Unterstützung des FormData-Objekts in der RunJS-Umgebung. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) von @gchust

  - Unterstützung für dynamisches Ausblenden des Schrittkonfigurationsmenüs ([#7924](https://github.com/nocobase/nocobase/pull/7924)) von @gchust

  - `useCache`-Option zu FlowModelRenderer hinzugefügt ([#8072](https://github.com/nocobase/nocobase/pull/8072)) von @zhangzhonghe

  - `removeModelWithSubModels`-Methode hinzugefügt, um ein Modell und seine Untermodelle rekursiv zu entfernen ([#8064](https://github.com/nocobase/nocobase/pull/8064)) von @zhangzhonghe

  - Unterstützung für dynamisches Umschalten der Flow-Modellklasse ([#7952](https://github.com/nocobase/nocobase/pull/7952)) von @gchust

  - Unterstützung für das Abhören von Flow-Modell-Baumänderungsereignissen in der Flow-Engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) von @gchust

  - Verbesserung der Auflösung der aktuellen Datensatzvariable, um das Öffnen von Dialogen zu beschleunigen ([#7895](https://github.com/nocobase/nocobase/pull/7895)) von @gchust

  - Optimierte die API-Struktur von Drittanbieterbibliotheken im RunJS-Kontext und fügte Unterstützung für die Antd-Icon-Bibliothek hinzu. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) von @gchust

  - Optimierung des Toolbar-Stils, um zu verhindern, dass Symbole verdeckt werden ([#7883](https://github.com/nocobase/nocobase/pull/7883)) von @zhangzhonghe

  - Optimierung der Toolbar-Stile für Seiten-Tabs ([#7795](https://github.com/nocobase/nocobase/pull/7795)) von @zhangzhonghe

  - Unterstützung für verzögerte Operationen im Flow-Modell ([#7786](https://github.com/nocobase/nocobase/pull/7786)) von @gchust

  - Verbesserte die Fehlermeldung, die beim fehlgeschlagenen Kopieren einer UID angezeigt wird, und bietet klarere Anweisungen zur Behebung des Problems. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) von @gchust

  - Unterstützung für die Definition von Variablenkontexten in der Flow-Schrittdefinition ([#7674](https://github.com/nocobase/nocobase/pull/7674)) von @gchust

  - Unterstützung für das Überspringen des RunJS-Flow-Schritts durch Hinzufügen von `skipRunJs=true` zur URL-Abfragezeichenfolge. ([#7638](https://github.com/nocobase/nocobase/pull/7638)) von @gchust

  - Unterstützung für Popup-Variablen ([#7583](https://github.com/nocobase/nocobase/pull/7583)) von @gchust

  - Standardisierte automatische Workflows, die konsistent durch das "beforeRender"-Ereignis ausgelöst werden, um einen vorhersagbaren und einheitlichen Betrieb über Prozesse hinweg zu gewährleisten. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) von @gchust

  - Verbesserung der Code-Bearbeitungserfahrung mit umfangreicheren Snippets und kontextbezogenen Code-Vervollständigungen für verschiedene Szenarien ([#7559](https://github.com/nocobase/nocobase/pull/7559)) von @gchust

  - Optimierung der Drag-and-Drop-Funktionalität ([#7526](https://github.com/nocobase/nocobase/pull/7526)) von @zhangzhonghe

- **[sdk]** Verbesserung der API-Speicherimplementierung ([#8308](https://github.com/nocobase/nocobase/pull/8308)) von @chenos

- **[client]**
  - Unterstützung für den Vollbildmodus im JS-Code-Editor. ([#8294](https://github.com/nocobase/nocobase/pull/8294)) von @gchust

  - "Untergeordnetes Element hinzufügen" entspricht jetzt "Neu hinzufügen" der entsprechenden untergeordneten Verknüpfung ([#8272](https://github.com/nocobase/nocobase/pull/8272)) von @katherinehhh

  - Unterstützung für das Löschen des Standardwerts für Farbfelder ([#8268](https://github.com/nocobase/nocobase/pull/8268)) von @katherinehhh

  - Verwendung von Select für die Konfiguration der Spaltenbreite von Aktionen ([#8218](https://github.com/nocobase/nocobase/pull/8218)) von @katherinehhh

  - Unterstützung für benutzerdefinierte Spaltenbreiten für Tabellenspalten ([#8200](https://github.com/nocobase/nocobase/pull/8200)) von @katherinehhh

  - Änderung der Tabellenspaltenbreite zur Verwendung von auswählbaren Optionen ([#8188](https://github.com/nocobase/nocobase/pull/8188)) von @katherinehhh

  - Verbesserung der recordPicker-Stile mit maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) von @katherinehhh

  - Optimierung der Konfigurationsoptionen (Blöcke, Felder, Aktionen) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) von @katherinehhh

  - Unterstützung für Zahlenformatierung bei Prozentfeldern ([#8123](https://github.com/nocobase/nocobase/pull/8123)) von @katherinehhh

  - Fehlerbehebung beim Seitensprung der Untertabellen-Seitenwechsel nach dem Entfernen einer Zeile und Hinzufügen von Unterstützung für Spaltenvalidierungsregeln ([#8094](https://github.com/nocobase/nocobase/pull/8094)) von @katherinehhh

  - Anpassung der Anzeige großer Felder in bearbeitbaren Untertabellen ([#8078](https://github.com/nocobase/nocobase/pull/8078)) von @katherinehhh

  - Unterstützung für Auslassungspunkte bei überlaufendem JSON-Feldinhalt ([#8067](https://github.com/nocobase/nocobase/pull/8067)) von @katherinehhh

  - Unterstützung der `allowMultiple`-Einstellung in der Anhang-Upload-Komponente ([#8052](https://github.com/nocobase/nocobase/pull/8052)) von @katherinehhh

  - Anzeige zusammengeklappter Optionen beim Hovern in der Select-Komponente ([#8030](https://github.com/nocobase/nocobase/pull/8030)) von @katherinehhh

  - Unterstützung für die Initialisierung ausgewählter Filterfelder in der Diagrammabfrage ([#7933](https://github.com/nocobase/nocobase/pull/7933)) von @heziqiang

  - Anpassung von Komponenten für mobile Geräte ([#7870](https://github.com/nocobase/nocobase/pull/7870)) von @zhangzhonghe

  - Unterstützung für die Day.js-Bibliothek im RunJS-Scripting-Kontext hinzugefügt, um einfachere Datums- und Zeitmanipulationen zu ermöglichen. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) von @gchust

  - Seiteninfo-Version zum Flow-Engine-Kontext hinzugefügt ([#7826](https://github.com/nocobase/nocobase/pull/7826)) von @gchust

  - Verbesserung des Markdown-Editors ([#7793](https://github.com/nocobase/nocobase/pull/7793)) von @katherinehhh

  - Anpassung an das tableoid-Feld in 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) von @katherinehhh

  - Unterstützung für JSX im JS-Code-Editor ([#7699](https://github.com/nocobase/nocobase/pull/7699)) von @gchust

  - Unterstützung für Verknüpfungsfelder im JS-Feldmodell ([#7618](https://github.com/nocobase/nocobase/pull/7618)) von @gchust

- **[server]** Fehlertoleranz hinzugefügt, wenn fehlende App-Instanzen beim Abrufen von App-Wartungsnachrichten zu Fehlern führen ([#8196](https://github.com/nocobase/nocobase/pull/8196)) von @2013xile

- **[acl]** Unterstützung der `acl.registerSnippet`-API zum Zusammenführen von Snippet-Konfigurationen ([#8155](https://github.com/nocobase/nocobase/pull/8155)) von @mytharcher

- **[telemetry]**
  - Unterstützung zur Steuerung, welche Metriken exportiert werden ([#7938](https://github.com/nocobase/nocobase/pull/7938)) von @2013xile

  - Telemetrie-Metriken für die Anzahl der Online-Sub-Anwendungen usw. hinzugefügt ([#7743](https://github.com/nocobase/nocobase/pull/7743)) von @2013xile

- **[database]** Überarbeitung des Feldverschlüsselungs-Plugins zur Verbesserung der Sicherheit, Unterstützung der Generierung und Rotation von Anwendungsschlüsseln sowie feldspezifischer Verschlüsselungsschlüssel. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) von @cgyrock

- **[KI-Mitarbeiter]**
  - Verbesserung der Gemini-Kompatibilität für LLM-Knoten im Workflow.<br/>Optimierung des KI-Tools dataSourceQuery für die Handhabung großer Datenmengen.<br/>Behebung von Datenmodellierungsproblemen.<br/>KI-Vorschlagstool hinzugefügt. ([#8249](https://github.com/nocobase/nocobase/pull/8249)) von @heziqiang

  - Fehler behoben, bei dem der KI-Mitarbeiter bei der ersten Bearbeitungseinreichung nicht antwortete.<br/>Löschen des unnötigen integrierten KI-Mitarbeiters "Avery Form Assistant".<br/>Standard-Anfangsrollenberechtigungen für integrierte KI-Mitarbeiter hinzugefügt.<br/>Verbesserung der Fehlerbehandlung und des Ausgabeverhaltens von KI-Mitarbeitern.<br/>Unterstützung für den Zugriff von KI auf modale Kontextvariablen hinzugefügt.<br/>Unterstützung für externe Datenquellen für KI hinzugefügt.<br/>Fehler bei falscher Gesprächskürzung behoben, wenn KI große Datenmengen verarbeitet. ([#8191](https://github.com/nocobase/nocobase/pull/8191)) von @heziqiang

  - Bearbeitungsfunktion für integrierte KI-Assistenten-Systemaufforderungen aktiviert.<br/>Systemaufforderung für den Nathan-KI-Assistenten optimiert.<br/>Problem behoben, bei dem der Server keine statischen Dateien lesen konnte. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) von @heziqiang

  - Fehlendes Anbieterfeld zum LLM-Hinzufügen-Formular hinzugefügt ([#8049](https://github.com/nocobase/nocobase/pull/8049)) von @heziqiang

  - Upgrade-Hook zum KI-Mitarbeiter-Plugin hinzugefügt ([#7951](https://github.com/nocobase/nocobase/pull/7951)) von @heziqiang

  - Verbesserung der Interaktionslogik von KI-Mitarbeitern und Optimierung des Aufgabenkonfigurationsablaufs ([#7707](https://github.com/nocobase/nocobase/pull/7707)) von @cgyrock

  - KI-Mitarbeiter können basierend auf Tabellenblock-Metadaten eigenständig Daten abfragen ([#7703](https://github.com/nocobase/nocobase/pull/7703)) von @cgyrock

  - Optimierte KI-Codierungserfahrung, einschließlich der Verwendung von KI-Mitarbeitern zur Überprüfung, Diagnose und Fehlerbehebung von Code. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) von @cgyrock

  - Überarbeitung des OpenAI-LLM-Anbieters in zwei separate Anbieter, um die Completions- und Responses-APIs von OpenAI zu unterstützen. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) von @cgyrock

  - Neuer LLM-Anbieter Ollama hinzugefügt ([#7612](https://github.com/nocobase/nocobase/pull/7612)) von @ReLaMi96

  - Optimierung der KI-Codierung ([#7614](https://github.com/nocobase/nocobase/pull/7614)) von @cgyrock

  - Minimieren-Schaltfläche für das Chat-Fenster im mobilen Layout hinzugefügt ([#7595](https://github.com/nocobase/nocobase/pull/7595)) von @cgyrock

- **[UI-Vorlagen]**
  - Feldvorlagenunterstützung für Detailblöcke hinzugefügt. ([#8247](https://github.com/nocobase/nocobase/pull/8247)) von @gchust

  - UI-Vorlagen-Plugin hinzugefügt, das die Wiederverwendung von Blockvorlagen und Popup-Vorlagen ermöglicht. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) von @gchust

- **[Workflow]**
  - Ursprüngliche Workflow-Instanz zur Duplizierungs-API hinzugefügt ([#8225](https://github.com/nocobase/nocobase/pull/8225)) von @mytharcher

  - Verbesserung der Beschreibung des `changed`-Feldes im Sammlungsereignis ([#8216](https://github.com/nocobase/nocobase/pull/8216)) von @mytharcher

  - Unterstützung zur Verwendung der alten Konfiguration zum Erstellen einer neuen in einem duplizierten Workflow ([#8165](https://github.com/nocobase/nocobase/pull/8165)) von @mytharcher

  - Fehlertoleranzlogik für fehlende Daten in der Prozessorvorbereitung hinzugefügt, um Ausführungshänger zu vermeiden ([#8156](https://github.com/nocobase/nocobase/pull/8156)) von @mytharcher

  - Verwendung von Lazy Loading für Verknüpfungsdaten auf der Workflow-Leinwand zur Leistungsverbesserung ([#8142](https://github.com/nocobase/nocobase/pull/8142)) von @mytharcher

  - Vervollständigung der gebundenen Workflow-Konfiguration für die Aktionsschaltfläche "Datensatz aktualisieren" ([#7668](https://github.com/nocobase/nocobase/pull/7668)) von @mytharcher

- **[Asynchroner Aufgabenmanager]**
  - Verbesserte Fehlerbehandlung während Bereinigungsaufgaben durch Hinzufügen von Ausnahmefangmechanismen, um Anwendungsabstürze zu verhindern ([#8215](https://github.com/nocobase/nocobase/pull/8215)) von @mytharcher

  - Asynchrone Aufgaben für Sub-Anwendungen sollten nur die Ziel-Sub-Anwendungen in Workern starten ([#7927](https://github.com/nocobase/nocobase/pull/7927)) von @2013xile

- **[Block: Aktionspanel]** Verbesserte Anzeige ausgeblendeter Blöcke, Aktionen und Felder im Konfigurationsmodus ([#8174](https://github.com/nocobase/nocobase/pull/8174)) von @katherinehhh

- **[Block: Liste]** Link-Schaltfläche für Tabellen-, Listen- und GridCard-Blöcke hinzugefügt ([#8194](https://github.com/nocobase/nocobase/pull/8194)) von @katherinehhh

- **[Fehlerbehandler]** Keine Offenlegung roher Datenbankfehlermeldungen bei SQL-Syntaxfehlern, um den Datenbanktyp nicht preiszugeben ([#8195](https://github.com/nocobase/nocobase/pull/8195)) von @2013xile

- **[Block: Karte]** Unterstützung für Textüberlauf mit Auslassungspunkten für Kartenfelder im Textanzeigemodus ([#8189](https://github.com/nocobase/nocobase/pull/8189)) von @katherinehhh

- **[Zugriffskontrolle]** Zuweisung der Root-Rolle zu Benutzern nicht erlauben ([#8180](https://github.com/nocobase/nocobase/pull/8180)) von @2013xile

- **[Block: GridCard]**
  - Optimierung der GridCard-Blockstile für ein kompakteres Layout ([#8152](https://github.com/nocobase/nocobase/pull/8152)) von @katherinehhh

  - Zeilenanzahl-Konfiguration zur GridCard hinzugefügt und pageSize durch automatische Berechnung ersetzt ([#8055](https://github.com/nocobase/nocobase/pull/8055)) von @katherinehhh

- **[Sammlungsfeld: Markdown(Vditor)]** Deaktivierung der Variablenanalyse im Markdown-Feld standardmäßig im readPretty-Modus ([#8145](https://github.com/nocobase/nocobase/pull/8145)) von @katherinehhh

- **[Aktion: Datensätze importieren]** Auswahl der ID für Importfelder erlauben ([#8133](https://github.com/nocobase/nocobase/pull/8133)) von @katherinehhh

- **[Datenvisualisierung]**
  - Aktualisierung der Hinweise und Ereignis-Codevorlagen-Kommentare ([#7814](https://github.com/nocobase/nocobase/pull/7814)) von @heziqiang

  - Optionen für das Zeitformat von Diagrammdaten hinzugefügt ([#7763](https://github.com/nocobase/nocobase/pull/7763)) von @heziqiang

  - Hinweis zum Ausführen der Abfrage vor der Konfiguration von Diagrammoptionen hinzugefügt ([#7685](https://github.com/nocobase/nocobase/pull/7685)) von @heziqiang

  - Aktualisierung der Diagrammdaten beim Klicken auf die globale Vorschau-Schaltfläche ([#7678](https://github.com/nocobase/nocobase/pull/7678)) von @heziqiang

  - Aktualisierung von plugin-data-vi 2.0, Behebung einiger Probleme und Optimierung der Benutzeroberfläche. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) von @heziqiang

  - Erweiterung der Diagrammtypen; Optimierung der Benutzeroberfläche und der interaktiven Erfahrung. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) von @heziqiang

- **[Multi-App-Manager (veraltet)]**
  - Asynchroner Start von Sub-Anwendungen mittels einer Warteschlange aktiviert ([#7749](https://github.com/nocobase/nocobase/pull/7749)) von @2013xile

  - Verbesserung des App-Supervisors ([#7661](https://github.com/nocobase/nocobase/pull/7661)) von @chenos

- **[Datenquellen-Manager]** Anpassung der Spaltenreihenfolge von Feldtyp und Schnittstelle und Hinzufügen eines Bestätigungsschritts bei Änderungen. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) von @2013xile

- **[Multi-Space]** Verwendung von api.storage anstelle von localStorage, Berechtigungssteuerungs-Refactoring und Fehlerbehebung von @jiannx

- **[Aktion: Datensätze exportieren Pro]** Import Pro & Export Pro Aktionen unterstützen Berechtigungssteuerung von @katherinehhh

- **[Telemetrie: Prometheus]** Upgrade von `@opentelemetry/exporter-prometheus` von @2013xile

- **[Sammlungsfeld: Verschlüsselung]** Optimiertes Feldverschlüsselungs-Plugin zur Unterstützung des Datenabrufs mit unabhängigen IVs von @cgyrock

- **[Workflow: Genehmigung]**
  - Aktualisierung von `approval.data` auf die neueste Version des genehmigenden Datensatzes bei Ausführungsende, um dem Anzeigemodus "Neueste" zu entsprechen von @mytharcher

  - Änderung der API zum Abrufen eines einzelnen Genehmigungselements und Vereinfachung des Codes von @mytharcher

- **[Migrationsmanager]** Verbesserte Migrationsprüfungen, SQL-Download-Unterstützung, Protokollformatierung und Sichtbarkeit des Ausführungsprozesses von @cgyrock

### 🐛 Fehlerbehebungen

- **[undefined]**
  - Behebung des Problems mit falscher Formatierung auf der Plugin-Dokumentations-Startseite im Dunkelmodus. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) von @gchust

  - Routing-Pfad-Matching unterstützt jetzt mehrere neue Anwendungen ([#7570](https://github.com/nocobase/nocobase/pull/7570)) von @jiannx

  - Problem behoben, bei dem das Zitieren eines Blocks den zitierten Block von der Originalseite entfernte. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) von @gchust

- **[client]**
  - Fehlerhafte Daten im Unterdetail-Dialog des Detailblocks behoben ([#8318](https://github.com/nocobase/nocobase/pull/8318)) von @katherinehhh

  - Problem behoben, bei dem ein Fehler auftrat, wenn das aktuelle Popup nach dem aufeinanderfolgenden Öffnen der Konfigurations-Popups für Verknüpfungsregeln und Ereignisabläufe geschlossen wurde. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) von @gchust

  - Problem behoben, bei dem ein Fehler auftrat, wenn das aktuelle Popup nach dem aufeinanderfolgenden Öffnen der Konfigurations-Popups für Verknüpfungsregeln und Ereignisabläufe geschlossen wurde. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) von @gchust

  - Problem behoben, bei dem Änderungen am Schnellbearbeitungs-Umschalter in Tabellenblöcken einen Seitenwechsel erforderten, um wirksam zu werden. ([#8311](https://github.com/nocobase/nocobase/pull/8311)) von @gchust

  - Problem behoben, bei dem Blöcke, die URL-Abfrageparameter als Datenbereiche verwenden, nicht korrekt aktualisiert wurden, wenn sich die Abfrageparameter während des Menüwechsels änderten. ([#8310](https://github.com/nocobase/nocobase/pull/8310)) von @gchust

  - Berechtigungsprobleme in der Verknüpfungsfeld-Komponente behoben ([#8243](https://github.com/nocobase/nocobase/pull/8243)) von @katherinehhh

  - Problem behoben, dass Unterdetaildaten beim Blättern im Detailblock nicht aktualisiert wurden ([#8305](https://github.com/nocobase/nocobase/pull/8305)) von @katherinehhh

  - Problem behoben, dass der Inhalt verschachtelter Untertabellen beim Wechseln der Seiten im Bearbeitungsformular nicht aktualisiert wurde ([#8304](https://github.com/nocobase/nocobase/pull/8304)) von @katherinehhh

  - Problem behoben, dass Popups nicht geöffnet werden konnten, und Verbesserung der Navigationsstabilität ([#8287](https://github.com/nocobase/nocobase/pull/8287)) von @zhangzhonghe

  - Fehler beim Wechsel von der Select-Komponente zur Array-Unterformular-Komponente behoben ([#8301](https://github.com/nocobase/nocobase/pull/8301)) von @katherinehhh

  - Hinzufügen von Verknüpfungsfeldern zu Formularblöcken über JS-Feld nicht erlaubt. ([#8296](https://github.com/nocobase/nocobase/pull/8296)) von @gchust

  - Problem behoben, bei dem Daten nach der Aktion "Datensatz aktualisieren" mehrmals aktualisiert wurden. ([#8299](https://github.com/nocobase/nocobase/pull/8299)) von @gchust

  - Problem behoben, bei dem neue Daten im Unterformular durch ausgewählte Daten überschrieben wurden ([#8292](https://github.com/nocobase/nocobase/pull/8292)) von @katherinehhh

  - Problem behoben, bei dem das JS-Element nach dem Bearbeiten eines Datensatzes im Detailblock nicht aktualisiert wurde. ([#8291](https://github.com/nocobase/nocobase/pull/8291)) von @gchust

  - Problem behoben, bei dem neu hinzugefügte Datensätze im Popup der Datenauswahl-Feldkomponente nicht aktualisiert wurden. ([#8289](https://github.com/nocobase/nocobase/pull/8289)) von @gchust

  - Renderfehler für JS-Block im ausgeblendeten Zustand behoben. ([#8286](https://github.com/nocobase/nocobase/pull/8286)) von @gchust

  - Problem behoben, bei dem ein Fehler in den Filterformular-Blockeinstellungen des m2m-Feldes ausgelöst wurde ([#8282](https://github.com/nocobase/nocobase/pull/8282)) von @mytharcher

  - Problem behoben, bei dem ein Fehler in den Filterformular-Blockeinstellungen des m2m-Feldes ausgelöst wurde ([#8282](https://github.com/nocobase/nocobase/pull/8282)) von @mytharcher

  - Verhinderung von Blockfehlern nach dem Löschen eines Verknüpfungsfeldes ([#8273](https://github.com/nocobase/nocobase/pull/8273)) von @katherinehhh

  - Problem behoben, dass Standardwerte des Filterformulars beim ersten Rendern keine Filterung auslösten ([#8232](https://github.com/nocobase/nocobase/pull/8232)) von @zhangzhonghe

  - Stapelüberlauf durch Endlosschleife beim Lazy Loading von Anzeigeverknüpfungsfeldern behoben ([#8262](https://github.com/nocobase/nocobase/pull/8262)) von @zhangzhonghe

  - Behandlung leerer Verknüpfungsregeln zur Vermeidung von Fehlern ([#8239](https://github.com/nocobase/nocobase/pull/8239)) von @zhangzhonghe

  - Problem behoben, dass die Aktionsspalte des Tabellenblocks nicht entfernt werden konnte. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) von @gchust

  - Problem behoben, bei dem die Vorschauausführung kompilierte JSX-Ausgabe zurück in stepParams schrieb, was dazu führte, dass der gespeicherte Quellcode überschrieben wurde. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) von @gchust

  - Fehler beim Hochladen von Anhängen im S3 Pro Speicher behoben und Dateivorschau verbessert ([#8211](https://github.com/nocobase/nocobase/pull/8211)) von @katherinehhh

  - Verhinderung von Überlauf der Gesamtzeilenbreite während der Spaltengrößenänderung ([#8166](https://github.com/nocobase/nocobase/pull/8166)) von @zhangzhonghe

  - Problem behoben, bei dem die Auswahl von "Nein" für einen Kontrollkästchen-Filter dennoch den "Ja"-Filter anwendete. ([#8170](https://github.com/nocobase/nocobase/pull/8170)) von @gchust

  - Problem behoben, dass die Senden-Schaltfläche im Erstellungsformular nicht angezeigt wurde, wenn die Rolle über eine Erstellungsberechtigung verfügte ([#8190](https://github.com/nocobase/nocobase/pull/8190)) von @katherinehhh

  - Verhinderung, dass vorhandene Untertabellen-/Unterformulardaten gelöscht werden, wenn ohne Auswahl von Elementen gesendet wird ([#8172](https://github.com/nocobase/nocobase/pull/8172)) von @katherinehhh

  - Verhinderung, dass die Datenbereichseinstellung in der Erstellungsformularkonfiguration angezeigt wird ([#8176](https://github.com/nocobase/nocobase/pull/8176)) von @katherinehhh

  - Renderproblem des tableoid-Feldes im Formularblock behoben ([#8177](https://github.com/nocobase/nocobase/pull/8177)) von @katherinehhh

  - Speichern des Tab-Ereignisablaufs fehlgeschlagen ([#8168](https://github.com/nocobase/nocobase/pull/8168)) von @chenos

  - Entfernung des zusätzlichen Abstands nach dem Ausblenden eines Tabs ([#8167](https://github.com/nocobase/nocobase/pull/8167)) von @chenos

  - Fehlerhafte Filterung ausgewählter Optionen in der Verknüpfungsdatensatzauswahl behoben ([#8151](https://github.com/nocobase/nocobase/pull/8151)) von @katherinehhh

  - Problem behoben, dass das Dropdown-Menü des Verknüpfungsfeldes deaktiviert war, wenn ein Optionsfeld existierte ([#8153](https://github.com/nocobase/nocobase/pull/8153)) von @katherinehhh

  - Problem behoben, bei dem das Wechseln von Bezeichnungsfeldern dazu führte, dass Popup-Konfigurationen verloren gingen. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) von @gchust

  - Problem behoben, bei dem die Eingabe von chinesischem Text vorhandene Optionen löschte, wenn Multi-Select-Operatoren für ein Single-Select-Feld im Filterformularblock verwendet wurden. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) von @gchust

  - Problem behoben, bei dem die `RemoteSelect`-Komponente fälschlicherweise einen Datensatz lud, wenn der Wert null war ([#8137](https://github.com/nocobase/nocobase/pull/8137)) von @mytharcher

  - Verhinderung, dass der deaktivierte Zustand eines Kindes die Auswahl des Verknüpfungsfeldes blockiert ([#8131](https://github.com/nocobase/nocobase/pull/8131)) von @katherinehhh

  - Problem behoben, bei dem Standardfeldbezeichnungen im Filterformularblock nicht korrekt in mehrere Sprachen übersetzt werden konnten. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) von @gchust

  - Problem behoben, bei dem die UI-Komponentenbreite bei Auswahl von "Vergangenheit" oder "Zukunft" für Datumsfilterfelder inkonsistent war. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) von @gchust

  - Problem behoben, bei dem die Titel- und Beschreibungsstile des JS-Blocks inkonsistent mit anderen Blöcken waren. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) von @gchust

  - Problem mit Zeilenumbrüchen im Tooltip von Langtextfeldern behoben ([#8122](https://github.com/nocobase/nocobase/pull/8122)) von @katherinehhh

  - Problem behoben, bei dem die auswählbaren Optionen nicht vollständig aufgelistet wurden, wenn die Operatoren "ist einer von" oder "ist keiner von" für die optionbasierte Feldfilterung verwendet wurden. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) von @gchust

  - Problem behoben, dass verschachtelte Untertabellen im Unterformular keine Daten anzeigten ([#8117](https://github.com/nocobase/nocobase/pull/8117)) von @katherinehhh

  - Problem behoben, bei dem das Löschen der "Zwischen"-Zeitfilterwerte und das erneute Auslösen des Filters einen Fehler verursachte. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) von @gchust

  - Problem behoben, bei dem die auswählbaren Daten für Verknüpfungsfelder im Filterformularblock falsch waren. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) von @gchust

  - Problem behoben, bei dem benutzerdefinierte Feldkonfigurationen im Filterformular nicht korrekt vorausgefüllt wurden und einige Einstellungen nicht wirkten. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) von @gchust

  - Problem behoben, bei dem die Filterung für Kontrollkästchen-Felder nicht wirkte. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) von @gchust

  - Problem behoben, bei dem der Zahlenfeldwert in der Filteraktion nicht korrekt vorausgefüllt wurde. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) von @gchust

  - Problem behoben, bei dem einige Feldoperatoren in Filterformularen Daten nicht korrekt filterten. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) von @gchust

  - Problem behoben, bei dem die konfigurierten Felder eines entfernten Blocks nicht aus dem Filterblock gelöscht wurden. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) von @gchust

  - Problem mit zusätzlichem Abstand behoben, wenn eine Schaltfläche im Nicht-Konfigurationsmodus ausgeblendet ist ([#8092](https://github.com/nocobase/nocobase/pull/8092)) von @katherinehhh

  - Problem behoben, bei dem der Text der Zurücksetzen-Schaltfläche im Filterformularblock nicht geändert werden konnte. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) von @gchust

  - Problem behoben, bei dem die Feldeingabe keine mehreren Werte unterstützte, wenn die Operatoren $in oder $notIn für die Filterung verwendet wurden. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) von @gchust

  - Problem behoben, bei dem neu hinzugefügte Datenblöcke nicht automatisch im Feldmenü des Filterformularblocks erschienen. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) von @gchust

  - Das Konfigurationsmenü für Verknüpfungsfelder in Filterformularen sollte die Schnellerstellungsoption nicht anzeigen. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) von @gchust

  - Problem mit Verknüpfungsuntertabellendaten im Listenblock behoben ([#8082](https://github.com/nocobase/nocobase/pull/8082)) von @katherinehhh

  - Problem behoben, dass numerische Feldvalidierungsregeln aus den Sammlungseinstellungen nicht angewendet wurden ([#8025](https://github.com/nocobase/nocobase/pull/8025)) von @katherinehhh

  - Problem behoben, bei dem Felder in Filterformularen durch Backend-Validierungsregeln für Felder eingeschränkt wurden. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) von @gchust

  - Problem mit der Anzeige großer Felder in der Untertabellenbearbeitung behoben ([#8069](https://github.com/nocobase/nocobase/pull/8069)) von @katherinehhh

  - Problem behoben, dass die Schnellerstellung einen Fehler auslöst, wenn allowMultiple in der Verknüpfungsdatensatzauswahl deaktiviert ist ([#8034](https://github.com/nocobase/nocobase/pull/8034)) von @katherinehhh

  - Problem mit der Schnellbearbeitung von JSON-Feldern ([#8059](https://github.com/nocobase/nocobase/pull/8059)) von @katherinehhh

  - Problem behoben, dass JSON-Felder als Objekt gesendet werden sollten ([#8057](https://github.com/nocobase/nocobase/pull/8057)) von @katherinehhh

  - Problem behoben, bei dem die Eingabetaste nicht verwendet werden konnte, um die Filteraktion auszulösen. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) von @gchust

  - Problem behoben, bei dem "N/A" angezeigt wird, nachdem allowMultiple in der n-zu-n-Verknüpfungsdatensatzauswahl deaktiviert wurde ([#8050](https://github.com/nocobase/nocobase/pull/8050)) von @katherinehhh

  - Löschen eines Datensatzes im Datensatzauswahlblock fehlgeschlagen ([#8023](https://github.com/nocobase/nocobase/pull/8023)) von @katherinehhh

  - Problem behoben, bei dem das Menü "Aktueller Datensatz" beim Hinzufügen eines Kommentarblocks erschien. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) von @gchust

  - Problem behoben, bei dem das Wechseln eines Datumsfeldes zu einem Zeitfeld in der Filteraktion einen Renderfehler verursachte. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) von @gchust

  - Problem behoben, bei dem die Standardtitel der Popups für die Aktionen "Bearbeiten" und "Neu erstellen" falsch waren. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) von @gchust

  - Problem behoben, bei dem der Standardstil des JS-Feldes im Detailblock falsch war. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) von @gchust

  - Problem behoben, dass die Spaltenbreite der Untertabelle nicht angewendet wurde ([#8027](https://github.com/nocobase/nocobase/pull/8027)) von @katherinehhh

  - Problem behoben, dass das Ziehen von Spalten in der Untertabelle nicht funktionierte ([#8026](https://github.com/nocobase/nocobase/pull/8026)) von @katherinehhh

  - Problem behoben, bei dem die Variable des aktuellen Popup-Datensatzes in einem durch ein Verknüpfungsfeld geöffneten Popup nicht korrekt aufgelöst werden konnte. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) von @gchust

  - Problem mit dem Popover-Stil des Markdown-Anzeigefeldes behoben ([#8012](https://github.com/nocobase/nocobase/pull/8012)) von @katherinehhh

  - Problem behoben, das Fehler beim Laden von Daten für Verknüpfungsfelder in Popup-Fenstern verursachte, um eine reibungslosere Datenanzeige und Funktionalität zu gewährleisten. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) von @gchust

  - Problem behoben, dass der Baumtabellenblock keine untergeordneten Knoten erweitern konnte ([#8011](https://github.com/nocobase/nocobase/pull/8011)) von @katherinehhh

  - Probleme bei der Auswahl und Löschung von Tabellenblöcken für zusammengesetzte Schlüssel behoben ([#7978](https://github.com/nocobase/nocobase/pull/7978)) von @katherinehhh

  - Problem behoben, bei dem der Seiten-Tab-Status und die Route nicht übereinstimmten ([#7991](https://github.com/nocobase/nocobase/pull/7991)) von @zhangzhonghe

  - Anzeigeproblem behoben, wenn das Markdown-Feld im HTML-Modus mit Auslassungspunkten versehen ist ([#7994](https://github.com/nocobase/nocobase/pull/7994)) von @katherinehhh

  - Problem mit unvollständigen Suchergebnissen im Kaskadenselektor behoben ([#7990](https://github.com/nocobase/nocobase/pull/7990)) von @katherinehhh

  - Problem behoben, bei dem das Öffnen des Detailblocks im Popup für Nicht-ID-Verknüpfungsfelder einen Fehler verursachte. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) von @gchust

  - Problem behoben, bei dem Verknüpfungsdaten im Popup für Nicht-ID-Verknüpfungsfelder nicht korrekt geladen wurden. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) von @gchust

  - Problem mit ungültiger Genauigkeitseinstellung für das Zahlenfeldformat behoben ([#7967](https://github.com/nocobase/nocobase/pull/7967)) von @katherinehhh

  - Problem behoben, bei dem der Filterwert beim Klicken auf die Zurücksetzen-Schaltfläche nicht gelöscht wurde ([#7966](https://github.com/nocobase/nocobase/pull/7966)) von @zhangzhonghe

  - Falsche Eingabe in der neuen 2.0-Seite behoben ([#7945](https://github.com/nocobase/nocobase/pull/7945)) von @zhangzhonghe

  - Automatischer Zeilenumbruch für Textfelder im Detailblock bei Inhaltsüberlauf behoben ([#7955](https://github.com/nocobase/nocobase/pull/7955)) von @katherinehhh

  - Fehler beim Löschen des Werts in einer mehrstufigen Kaskade behoben ([#7943](https://github.com/nocobase/nocobase/pull/7943)) von @katherinehhh

  - Entfernung der Baumtabellenaktion aus dem Block einer Nicht-Baumsammlung ([#7931](https://github.com/nocobase/nocobase/pull/7931)) von @katherinehhh

  - Problem behoben, bei dem Titel und Beschreibung im JS-Block nicht angezeigt wurden. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) von @gchust

  - Problem behoben, bei dem ausgeblendete Blöcke weiterhin Platz auf der Seite belegten. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) von @gchust

  - Problem behoben, bei dem die Zurücksetzen-Schaltfläche im Filterbutton Standardbedingungen löscht ([#7903](https://github.com/nocobase/nocobase/pull/7903)) von @zhangzhonghe

  - Falsche Berechtigungsprüfung für Unterformularfelder in neuen Formularen behoben ([#7902](https://github.com/nocobase/nocobase/pull/7902)) von @katherinehhh

  - Probleme in der Formularelementeinstellung behoben ([#7867](https://github.com/nocobase/nocobase/pull/7867)) von @katherinehhh

  - Problem behoben, bei dem das Rich-Text-Feld keinen Standardwert eingeben konnte und das Multi-Select-Feld nicht mehrere Optionen auswählen konnte. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) von @gchust

  - Problem behoben, bei dem die Standard-JS-Feldkonfiguration die Anzeigemodus-Einstellung nicht verwendete. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) von @gchust

  - Problem behoben, bei dem der Standardwert eines Datumsfeldes im Filterformularblockmodell nicht gesetzt werden konnte. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) von @gchust

  - Problem behoben, bei dem Schnellbearbeitungsvorgänge im Tabellenblock Daten nicht korrekt aktualisierten. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) von @gchust

  - Fehler beim Vorschauen von Code im Code-Editor behoben, wenn der Code JSX-Syntax enthielt ([#7836](https://github.com/nocobase/nocobase/pull/7836)) von @gchust

  - Problem behoben, bei dem die Verknüpfungsregeln für Zeilenaktionsschaltflächen in einem Tabellenblock nach der Aktualisierung der Zeilendaten nicht erneut ausgeführt wurden, sodass die Regeln jetzt bei Änderungen ordnungsgemäß erneut angewendet werden. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) von @gchust

  - Fehler 'value.replace is not a function' im Verknüpfungsfeld des Filterformulars behoben ([#7824](https://github.com/nocobase/nocobase/pull/7824)) von @zhangzhonghe

  - Die Variable der aktuellen Sammlung sollte im Variablenauswahlfeld der Filterkomponente nicht auswählbar sein ([#7818](https://github.com/nocobase/nocobase/pull/7818)) von @gchust

  - Falsche Parameter im onChange-Callback behoben ([#7807](https://github.com/nocobase/nocobase/pull/7807)) von @zhangzhonghe

  - Aktionsspalte des Tabellenblocks kann nicht ausgeblendet werden ([#7804](https://github.com/nocobase/nocobase/pull/7804)) von @gchust

  - Problem behoben, dass das Sammlungsauswahlfeld die Sammlung nicht korrekt auswählen konnte ([#7794](https://github.com/nocobase/nocobase/pull/7794)) von @katherinehhh

  - Unterstützung für die Auswahl des gesamten Variablenobjekts in der Eingabeaufforderung des KI-Mitarbeiters ([#7791](https://github.com/nocobase/nocobase/pull/7791)) von @gchust

  - Problem behoben, dass die Breite von Tabellenaktionen und jsColumn nicht angewendet wurde ([#7777](https://github.com/nocobase/nocobase/pull/7777)) von @katherinehhh

  - Datenbereich eines Blocks funktioniert nicht, wenn er durch einen Seitenereignisablauf festgelegt wurde ([#7788](https://github.com/nocobase/nocobase/pull/7788)) von @gchust

  - Problem behoben, dass die Auslassungspunkte für das Titelfeld des Verknüpfungsfeldes nicht angewendet wurden ([#7778](https://github.com/nocobase/nocobase/pull/7778)) von @katherinehhh

  - Verknüpfungsregel der Aktion "Datensatz aktualisieren" funktioniert nicht ([#7774](https://github.com/nocobase/nocobase/pull/7774)) von @gchust

  - Fehler bei der erforderlichen Validierung für das Markdown-Vditor-Feld behoben ([#7764](https://github.com/nocobase/nocobase/pull/7764)) von @katherinehhh

  - Problem behoben, bei dem die Bezeichnungen von Enum-Typen in variablenbezogenen Komponenten nicht in der korrekten Sprache angezeigt wurden. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) von @gchust

  - Fehlende Kennzeichnung für Pflichtfelder nach dem Festlegen der Frontend-Validierung behoben ([#7760](https://github.com/nocobase/nocobase/pull/7760)) von @katherinehhh

  - Datenbereichskonfiguration für Verknüpfungsfelder in Filterformularen hinzugefügt ([#7761](https://github.com/nocobase/nocobase/pull/7761)) von @zhangzhonghe

  - Problem mit dem Löschen von Datumsangaben ohne Zeitzone im Bearbeitungsformular behoben ([#7759](https://github.com/nocobase/nocobase/pull/7759)) von @katherinehhh

  - Erforderliche Feldvalidierung für Verknüpfungsregeln behoben ([#7756](https://github.com/nocobase/nocobase/pull/7756)) von @zhangzhonghe

  - Problem mit dem Zeitformat in Untertabellenfeldern behoben ([#7750](https://github.com/nocobase/nocobase/pull/7750)) von @katherinehhh

  - Problem "Invalid Date" beim Löschen eines bestimmten Datums im Filter behoben ([#7746](https://github.com/nocobase/nocobase/pull/7746)) von @katherinehhh

  - Felder der aktuellen Formularvariablen können nicht geladen werden ([#7745](https://github.com/nocobase/nocobase/pull/7745)) von @gchust

  - Problem behoben, bei dem die Zuweisung eines Arrays als Wert oder Standardwert zu einem "toOne"-Feld einen Fehler verursachte. Dies gewährleistet eine ordnungsgemäße Handhabung der Variablenauflösungsergebnisse und verbessert die Systemstabilität und -genauigkeit. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) von @gchust

  - Problem behoben, bei dem die Verknüpfungsfeldvariable im aktuellen Formular nicht korrekt identifiziert werden konnte, um eine genaue Datenverarbeitung in Formularen zu gewährleisten. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) von @gchust

  - Problem behoben, bei dem nicht filterbare Felder fälschlicherweise in den Filteroptionen aufgelistet wurden, um sicherzustellen, dass nur anwendbare Felder zur Auswahl erscheinen. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) von @gchust

  - UI-Problem beim Löschen eines Verknüpfungsfeldes in der Sammlung behoben ([#7706](https://github.com/nocobase/nocobase/pull/7706)) von @katherinehhh

  - Bekannte Probleme mit Verknüpfungsregeln für Unterformulare behoben ([#7698](https://github.com/nocobase/nocobase/pull/7698)) von @zhangzhonghe

  - Das Feldmenü des JS-Blocks kann im Filterformularblock nicht geladen werden ([#7690](https://github.com/nocobase/nocobase/pull/7690)) von @gchust

  - Problem behoben, bei dem Benutzer keine Standardwerte für Felder festlegen konnten, die im schreibgeschützten Modus angezeigt wurden. Dies gewährleistet eine reibungslosere Feldkonfiguration, wenn Felder nicht bearbeitbar sind. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) von @gchust

  - Problem behoben, bei dem die URL nach dem Wechseln von Tabs innerhalb eines Popups, dem erneuten Öffnen eines verschachtelten Popups und dem anschließenden Schließen aller Popups nicht korrekt aktualisiert wurde. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) von @gchust

  - Behandlung fehlenden Kontexts in usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) von @chenos

  - Probleme mit der abnormalen Seitenanzeige beim Wechseln der Tabellenseitenwechsel behoben ([#7572](https://github.com/nocobase/nocobase/pull/7572)) von @zhangzhonghe

  - Feldwert für die Aktionen "Aktualisieren" und "Massenaktualisierung" kann nicht konfiguriert werden ([#7565](https://github.com/nocobase/nocobase/pull/7565)) von @gchust

  - Problem behoben, dass Daten nach dem Absenden des Formulars nicht aktualisiert wurden ([#7560](https://github.com/nocobase/nocobase/pull/7560)) von @zhangzhonghe

  - Problem behoben, bei dem die Aktion "Ausführen" im Code-Editor nicht funktionierte, sodass Benutzer jetzt Code korrekt ausführen können. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) von @gchust

- **[flow-engine]**
  - Problem behoben, bei dem das Dropdown-Menü zur Auswahl von Sammlungsfeldern in der Filteraktion eine unzureichende Höhe hatte. ([#8288](https://github.com/nocobase/nocobase/pull/8288)) von @gchust

  - Problem behoben, dass der Inhalt von Popup-Tabs nicht angezeigt wurde ([#8281](https://github.com/nocobase/nocobase/pull/8281)) von @zhangzhonghe

  - Problem mit Seitenaushang und Neu-Rendering beim Öffnen einer Unterseite behoben ([#8276](https://github.com/nocobase/nocobase/pull/8276)) von @zhangzhonghe

  - Problem mit der Berechtigungsprüfung beim Hinzufügen untergeordneter Datensätze in einer Baumtabelle behoben ([#8240](https://github.com/nocobase/nocobase/pull/8240)) von @katherinehhh

  - Problem behoben, bei dem einige blockbezogene Popup-Datensatzvariablen falsch angezeigt wurden. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) von @gchust

  - Problem behoben, bei dem Aktionen oder Tabs, die nach dem Ziehen von Aktionen oder Tabs hinzugefügt wurden, nicht angezeigt wurden. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) von @gchust

  - Problem mit der Berechtigungsprüfung in externen Datenquellen ([#8221](https://github.com/nocobase/nocobase/pull/8221)) von @katherinehhh

  - Problem behoben, dass Aktionen externer Datenquellen trotz Berechtigung ausgeblendet wurden ([#8217](https://github.com/nocobase/nocobase/pull/8217)) von @katherinehhh

  - Problem behoben, bei dem das Absenden des Formulars in einem wiederverwendeten Modal über die Popup-UID die Blockdaten nicht aktualisiert. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) von @gchust

  - Falscher Dateidownload für Anhänge behoben ([#8154](https://github.com/nocobase/nocobase/pull/8154)) von @katherinehhh

  - Fehlerhafte Konvertierung bei Verwendung des Integer-Typs als Enum-Optionen behoben ([#8138](https://github.com/nocobase/nocobase/pull/8138)) von @chenos

  - Fehler bei umschaltbaren Untermodell-Menüpunkten behoben, wenn `useModel` weggelassen wird, indem es aus `createModelOptions.use` abgeleitet wird ([#8105](https://github.com/nocobase/nocobase/pull/8105)) von @zhangzhonghe

  - Problem behoben, bei dem Konfigurationsoptionen der vorherigen Komponente nach dem Wechseln der Feldkomponenten im Menü sichtbar blieben. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) von @gchust

  - useEffect vor der bedingten Rückgabe in FlowModelRenderer verschoben ([#8088](https://github.com/nocobase/nocobase/pull/8088)) von @zhangzhonghe

  - Problem behoben, bei dem nicht unterstützte Verknüpfungsfelder in Filteroperationsfeldern erschienen. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) von @gchust

  - Problem behoben, dass der Kommentardatensatz nach der Bearbeitung nicht gespeichert werden konnte ([#8035](https://github.com/nocobase/nocobase/pull/8035)) von @katherinehhh

  - Problem behoben, bei dem Datenblöcke nicht aktualisiert wurden, wenn ein Popup durch Klicken auf die Formular-Senden-Schaltfläche innerhalb des Popups geschlossen wurde. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) von @gchust

  - Problem behoben, bei dem die Variable des aktuellen Datensatzes im Detailblock nicht korrekt zur Auflösung ausgelöst werden konnte. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) von @gchust

  - Problem mit falsch ausgerichteter Toolbar-Symbolanzeige im Detailblock-Button behoben ([#7929](https://github.com/nocobase/nocobase/pull/7929)) von @zhangzhonghe

  - Problem behoben, bei dem das Öffnen des Schnellbearbeitungsformulars des Tabellenblocks einen Fehler verursachte. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) von @gchust

  - Problem behoben, bei dem ACL-Berechtigungsdaten nach Abmeldung und Anmeldung nicht neu geladen wurden. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) von @gchust

  - Problem behoben, bei dem Änderungen am Ereignisablauf erst nach einem Seitenwechsel wirksam wurden. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) von @gchust

  - Problem behoben, bei dem Variablen in Verknüpfungsfeldern von Unterformularen nicht korrekt aufgelöst wurden, wenn das Feld über die Benutzeroberfläche geändert wurde. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) von @gchust

  - Fehler im Bearbeitungsformular für Datensätze mit mehreren Primärschlüsseln ([#7798](https://github.com/nocobase/nocobase/pull/7798)) von @gchust

  - Problem behoben, bei dem bestimmte Konfigurationen für die Aktion "Ansicht öffnen" nicht angewendet wurden, sodass die Aktion jetzt wie für alle angegebenen Konfigurationen beabsichtigt funktioniert. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) von @gchust

  - Problem behoben, bei dem die Aktionsschaltflächen im Tabellenblock nach dem Wechseln der Seiten nicht korrekt aktualisiert wurden, um sicherzustellen, dass ihre Funktionalität mit den Daten der aktuellen Seite übereinstimmt. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) von @gchust

  - Wenn der Feldfilterwert auf false gesetzt ist, ist die Anfrage mit Datenbereich falsch ([#7766](https://github.com/nocobase/nocobase/pull/7766)) von @gchust

  - Problem mit Seitenanfrageparametern nach dem Löschen von Daten auf der letzten Seite behoben ([#7755](https://github.com/nocobase/nocobase/pull/7755)) von @katherinehhh

  - Wert des Verknüpfungsfeldes der aktuellen Objektvariablen des Unterformulars kann nicht aufgelöst werden ([#7751](https://github.com/nocobase/nocobase/pull/7751)) von @gchust

  - Schritte des Ereignisablaufs sollten nicht in Konfigurationsmenüs angezeigt werden ([#7723](https://github.com/nocobase/nocobase/pull/7723)) von @gchust

  - Falsche Kontextauswahl des aktuellen Popup-Datensatzes beim Bearbeiten des Datenbereichs eines verknüpften Feldes innerhalb eines Bearbeitungsformulars ([#7675](https://github.com/nocobase/nocobase/pull/7675)) von @gchust

  - Problem behoben, bei dem von einem Flow-Modell definierte Flow-Aktionen nicht konfiguriert werden konnten, sodass Benutzer jetzt Flow-Aktionen wie beabsichtigt anpassen können. ([#7666](https://github.com/nocobase/nocobase/pull/7666)) von @gchust

  - Fehler beim Kopieren oder Einfügen von Code-Snippets im JS-Code-Editor behoben. ([#7641](https://github.com/nocobase/nocobase/pull/7641)) von @gchust

  - Problem behoben, dass die Übersetzung in Antd-Komponenten nicht wirkte ([#7621](https://github.com/nocobase/nocobase/pull/7621)) von @zhangzhonghe

  - Aktueller Ansichtskontext im Referenzblock kann nicht abgerufen werden ([#7620](https://github.com/nocobase/nocobase/pull/7620)) von @gchust

- **[database]**
  - Einbeziehung des Through-Bereichs bei der Abfrage von m2m-Beziehungen ([#8277](https://github.com/nocobase/nocobase/pull/8277)) von @2013xile

  - Einbeziehung des Through-Bereichs bei der Abfrage von m2m-Beziehungen ([#8277](https://github.com/nocobase/nocobase/pull/8277)) von @2013xile

  - Inkonsistenz bei der Datumsfeldabfrage zwischen Haupt- und externen Datenquellen behoben ([#8181](https://github.com/nocobase/nocobase/pull/8181)) von @cgyrock

  - `filterByTk` unterstützt jetzt Arrays bei der Abfrage von Sammlungen mit mehreren Filterzielschlüsseln ([#7986](https://github.com/nocobase/nocobase/pull/7986)) von @chenos

  - Setzen des `search_path` vor der Ausführung von SQL-Anweisungen mit der `runSQL`-Methode ([#7611](https://github.com/nocobase/nocobase/pull/7611)) von @2013xile

- **[cli]** license-kit ist kompatibel mit dem Fall, dass DB_PASSWORD leer ist ([#8220](https://github.com/nocobase/nocobase/pull/8220)) von @jiannx

- **[server]**
  - Unterstützung für Snowflake-ID (53-Bit) Felder für externe Datenquellen ([#8185](https://github.com/nocobase/nocobase/pull/8185)) von @2013xile

  - Aktualisierung von license-kit auf die neueste Version ([#8173](https://github.com/nocobase/nocobase/pull/8173)) von @jiannx

  - Beibehalten von field.targetKey beim Kopieren von Referenzfeldern ([#7599](https://github.com/nocobase/nocobase/pull/7599)) von @chenos

  - Fehler bei der Primärschlüsselmigration ([#7563](https://github.com/nocobase/nocobase/pull/7563)) von @2013xile

- **[acl]**
  - Problem behoben, bei dem die API `acl.can` `null` zurückgibt, wenn die Rolle `root` ist ([#8150](https://github.com/nocobase/nocobase/pull/8150)) von @mytharcher

  - Problem behoben: acl.allow wurde zu früh ausgeführt ([#8065](https://github.com/nocobase/nocobase/pull/8065)) von @chenos

- **[utils]**
  - Fehler "Invalid filter item type" am Filterbutton behoben ([#7838](https://github.com/nocobase/nocobase/pull/7838)) von @zhangzhonghe

  - Fehler 'Unrecognized operation' im Ereignisablauf behoben ([#7835](https://github.com/nocobase/nocobase/pull/7835)) von @zhangzhonghe

- **[Aktion: Massenaktualisierung]** Fehler in der Massenaktualisierungsaktion für externe Datenquellen behoben. ([#8320](https://github.com/nocobase/nocobase/pull/8320)) von @gchust

- **[Datenvisualisierung]**
  - Problem mit der KI-Kreisdiagramm-Beschriftungsanzeige behoben, Normalisierungsoption für datensatzbasierte Kreisdiagramme.<br/> Einschränkung des Diagramm-Reihenfolgefeldes auf ausgewählte Felder. ([#8309](https://github.com/nocobase/nocobase/pull/8309)) von @heziqiang

  - Problem mit der Auswahl externer Datenquellen im SQL-Modus behoben;<br/>Problem mit dem Ladezustand des Diagrammblocks während des Datenabrufs behoben;<br/>Problem mit dem Abbrechen der Konfiguration eines leeren Diagrammblocks behoben; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) von @heziqiang

  - Problem behoben, dass der Diagrammblock nach dem Speichern nicht aktualisiert wurde ([#7920](https://github.com/nocobase/nocobase/pull/7920)) von @heziqiang

  - Verwendung des SQL-Ressourcen-Debug-Modus nur während der Diagrammvorschau ([#7893](https://github.com/nocobase/nocobase/pull/7893)) von @heziqiang

  - Verwendung der sql:runById-API zum Abrufen von Abfragedaten bei der Initialisierung ([#7677](https://github.com/nocobase/nocobase/pull/7677)) von @heziqiang

  - SQL-Abfrageproblem beim Parsen von Variablen behoben ([#7642](https://github.com/nocobase/nocobase/pull/7642)) von @heziqiang

  - Fehlenden orders-Parameter in der Diagrammdatenabfrage behoben ([#7636](https://github.com/nocobase/nocobase/pull/7636)) von @heziqiang

  - Problem behoben, bei dem das Diagramm aufgrund des Timeouts der Ereignisregistrierung nicht angezeigt werden konnte ([#7608](https://github.com/nocobase/nocobase/pull/7608)) von @heziqiang

- **[Aktion: Datensätze importieren]**
  - Leerzeichenüberprüfung beim Importieren von Dateien ([#8285](https://github.com/nocobase/nocobase/pull/8285)) von @jiannx

  - Problem behoben, bei dem der Zeilenindex in der Fehlermeldung immer 1 war, wenn ein Fehler in der Importaktion ausgelöst wurde ([#8244](https://github.com/nocobase/nocobase/pull/8244)) von @mytharcher

  - Synchrones Warten auf die durch den Import ausgelösten `afterCreate`-Ereignisse. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) von @2013xile

  - Problem mit der Feldlistenanzeige in importierbaren Feldern behoben ([#7710](https://github.com/nocobase/nocobase/pull/7710)) von @katherinehhh

- **[Dateimanager]**
  - Problem behoben, bei dem ein Fehler beim Hochladen einer Datei größer als 5 MB auf AWS S3 ausgelöst wurde ([#8275](https://github.com/nocobase/nocobase/pull/8275)) von @mytharcher

  - Problem behoben, bei dem die Vorschau einer `.txt`-Datei auf OSS den falschen Zeichensatz hatte ([#8161](https://github.com/nocobase/nocobase/pull/8161)) von @mytharcher

  - Falsche Anzeige von Unterdetaildaten in Listen- und GridCard-Blöcken behoben ([#8087](https://github.com/nocobase/nocobase/pull/8087)) von @katherinehhh

  - Problem behoben, dass das Anhangsfeld in der readPretty-Untertabelle nicht korrekt angezeigt wurde ([#8073](https://github.com/nocobase/nocobase/pull/8073)) von @katherinehhh

  - Problem behoben, dass Dateien in den angegebenen Speicher anstelle des Standardspeichers hochgeladen werden ([#7947](https://github.com/nocobase/nocobase/pull/7947)) von @katherinehhh

  - Probleme mit der Feldkonfiguration des Tabellenblocks behoben ([#7843](https://github.com/nocobase/nocobase/pull/7843)) von @katherinehhh

- **[Asynchroner Aufgabenmanager]**
  - Sprache beim Abbrechen einer Hintergrundaufgabe behoben ([#8245](https://github.com/nocobase/nocobase/pull/8245)) von @mytharcher

  - Sprache beim Abbrechen einer Hintergrundaufgabe behoben ([#8245](https://github.com/nocobase/nocobase/pull/8245)) von @mytharcher

- **[Workflow]**
  - Problem behoben, dass Datenbankereignisse nach dem Aktualisieren der externen Datenquelle ungültig wurden ([#8207](https://github.com/nocobase/nocobase/pull/8207)) von @cgyrock

  - Problem behoben, dass Datenbankereignisse nach dem Aktualisieren der externen Datenquelle ungültig wurden ([#8207](https://github.com/nocobase/nocobase/pull/8207)) von @cgyrock

  - Problem behoben, bei dem ein Fehler beim Löschen einer Workflow-Version ausgelöst wurde, die nicht die aktuelle ist ([#8203](https://github.com/nocobase/nocobase/pull/8203)) von @mytharcher

  - Problem behoben, bei dem nur ein Datensatz in der Datensatzliste zur manuellen Ausführung angezeigt wurde ([#8187](https://github.com/nocobase/nocobase/pull/8187)) von @mytharcher

  - Problem behoben, bei dem das Hinzufügen eines Workflows in der Konfiguration der gebundenen Workflow-Schaltfläche dazu führte, dass die Anwendung nach dem Klicken einfror ([#7541](https://github.com/nocobase/nocobase/pull/7541)) von @mytharcher

- **[UI-Vorlagen]**
  - Problem behoben, bei dem einige ältere Popups nach der Konvertierung in Vorlagen nicht korrekt wiederverwendet werden konnten. ([#8283](https://github.com/nocobase/nocobase/pull/8283)) von @gchust

  - Problem behoben, bei dem Feldvorlagen keine Verknüpfungsregeln und kein Formularlayout anwenden konnten. ([#8266](https://github.com/nocobase/nocobase/pull/8266)) von @gchust

  - Fehler behoben, bei dem das Öffnen eines Verknüpfungsfeld-Popups fälschlicherweise eine Nicht-Verknüpfungsfeld-Popup-Vorlage verwendete. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) von @gchust

- **[Sammlung: Baum]** Pfade nach dem Massenerstellen von Baumstruktur-Knoten aktualisieren ([#8267](https://github.com/nocobase/nocobase/pull/8267)) von @2013xile

- **[KI-Mitarbeiter]**
  - Problem behoben, bei dem der Nachrichteninhalt des LLM-Knotens nicht angezeigt wurde ([#8257](https://github.com/nocobase/nocobase/pull/8257)) von @heziqiang

  - Problem mit Zeilenumbrüchen in KI-Nachrichten behoben ([#8096](https://github.com/nocobase/nocobase/pull/8096)) von @heziqiang

  - Problem behoben, bei dem der Datenquellen-Rollenname nicht kompiliert wurde ([#8076](https://github.com/nocobase/nocobase/pull/8076)) von @heziqiang

  - Problem behoben, bei dem einige Felder des aktuellen Datensatzes in der Variablenauswahlkomponente nicht angezeigt werden konnten. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) von @gchust

  - Problem bei der KI-generierten SQL-Ausgabe behoben ([#7956](https://github.com/nocobase/nocobase/pull/7956)) von @heziqiang

  - KI-Mitarbeiter-Chat-Button auf v1-Seiten ausblenden ([#7829](https://github.com/nocobase/nocobase/pull/7829)) von @cgyrock

  - Optimiertes Websuchverhalten und Benutzerhinweise für Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) von @cgyrock

  - Problem behoben, bei dem Blöcke mit zugehörigen API-Ressourcen beim Auswählen keine entsprechenden Daten abriefen. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) von @cgyrock

  - Layoutproblem des Chat-Fensters im mobilen Layout behoben ([#7591](https://github.com/nocobase/nocobase/pull/7591)) von @cgyrock

  - Fehler im KI-Mitarbeiter-Datenmodellierungstool bei Verwendung von ChatGPT-4o behoben. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) von @cgyrock

  - Fehler auf der Berechtigungskonfigurationsseite des KI-Mitarbeiters behoben ([#7548](https://github.com/nocobase/nocobase/pull/7548)) von @2013xile

- **[Workflow: Manueller Knoten]**
  - Problem behoben, bei dem ein Fehler beim Abbrechen der Ausführung eines gelöschten Workflows ausgelöst wurde ([#8258](https://github.com/nocobase/nocobase/pull/8258)) von @mytharcher

  - Problem behoben, dass die manuelle Aufgabenliste eine falsche API verwendet ([#8144](https://github.com/nocobase/nocobase/pull/8144)) von @mytharcher

- **[Sammlungsfeld: Sequenz]**
  - Fehler behoben, wenn der field-sequence-Reparaturbefehl auf eine nicht vorhandene Sammlung in der aktuellen Umgebung trifft. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) von @cgyrock

  - Verbesserung der Robustheit von plugin-field-sequence bei der Verarbeitung des Reparaturbefehls ([#8139](https://github.com/nocobase/nocobase/pull/8139)) von @cgyrock

- **[Abteilungen]** Problem behoben, bei dem die Aggregatsuche keine Benutzer finden kann ([#8222](https://github.com/nocobase/nocobase/pull/8222)) von @2013xile

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem behoben, bei dem viele-zu-viele (Array)-Felder nicht erstellt werden können, wenn der Zielschlüsseltyp Snowflake-ID (53-Bit) ist ([#8226](https://github.com/nocobase/nocobase/pull/8226)) von @2013xile

- **[Lizenzeinstellungen]**
  - Abnormale Anzeige des lizenzierten Plugins behoben ([#8214](https://github.com/nocobase/nocobase/pull/8214)) von @jiannx

  - Ausnahme beim TS-Build von plugin-license behoben ([#8183](https://github.com/nocobase/nocobase/pull/8183)) von @jiannx

  - Lizenzoptimierung und Hinzufügen von Hinweistexten ([#7993](https://github.com/nocobase/nocobase/pull/7993)) von @jiannx

- **[Sammlungsfeld: Formel]**
  - Problem behoben, dass BigInt-Felder nicht zu Detail- und Formularblöcken hinzugefügt werden können ([#8201](https://github.com/nocobase/nocobase/pull/8201)) von @katherinehhh

  - Problem behoben, bei dem Formelfelder in der Filteraktion und im Filterformularblock keine Eingabewerte eingeben konnten. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) von @gchust

  - Problem behoben, bei dem Formelfelder nicht zum Filterformularblock hinzugefügt werden konnten. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) von @gchust

- **[Block: Karte]** Falsche Zoomstufe der Karte nach Menüwechsel behoben ([#8193](https://github.com/nocobase/nocobase/pull/8193)) von @katherinehhh

- **[Benachrichtigung: E-Mail]** Einschränkung der E-Mail-Benachrichtigungsverbindung behoben ([#8119](https://github.com/nocobase/nocobase/pull/8119)) von @jiannx

- **[Block: Aktionspanel]** Optimierung des Stils im Listenlayout des Aktionspanel-Blocks ([#8084](https://github.com/nocobase/nocobase/pull/8084)) von @katherinehhh

- **[Datenquellen-Manager]** Fehler beim Aktualisieren von Passwörtern für externe Datenquellen behoben ([#8024](https://github.com/nocobase/nocobase/pull/8024)) von @cgyrock

- **[Aktion: Datensätze exportieren]**
  - Fehlende Systemfelder in der exportierbaren Feldliste behoben ([#8002](https://github.com/nocobase/nocobase/pull/8002)) von @katherinehhh

  - Problem mit der Anzeige der exportierbaren Feldliste in der Exportaktion behoben ([#7714](https://github.com/nocobase/nocobase/pull/7714)) von @katherinehhh

- **[Flow-Engine]**
  - Sicherstellen, dass Datensatzvariablen immer vollständige Datensätze zurückgeben, wenn sie zusammen mit ihren einzelnen Feldern verwendet werden. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) von @gchust

  - Variablen in der Aktion "Verknüpfte Felder setzen" können nicht aufgelöst werden ([#7684](https://github.com/nocobase/nocobase/pull/7684)) von @gchust

  - Falsche Auflösung der Datensatzvariable des übergeordneten Popups behoben. ([#7637](https://github.com/nocobase/nocobase/pull/7637)) von @gchust

- **[Multi-App-Manager (veraltet)]**
  - Nach dem Stoppen einer Sub-Anwendung eine Synchronisationsnachricht veröffentlichen, um andere Knoten zu benachrichtigen, die entsprechende Sub-Anwendung zu stoppen ([#7849](https://github.com/nocobase/nocobase/pull/7849)) von @2013xile

  - Falsche Sammlung für die Metrik des Sub-Anwendungsstatus ([#7772](https://github.com/nocobase/nocobase/pull/7772)) von @2013xile

  - Problem behoben, dass der alte Multi-App-Manager nicht deaktiviert werden konnte ([#7633](https://github.com/nocobase/nocobase/pull/7633)) von @jiannx

  - Port-Validierung vor der Multi-Anwendungs-Datenmigration behoben ([#7540](https://github.com/nocobase/nocobase/pull/7540)) von @jiannx

- **[Block: GridCard]** Problem mit Datenverdopplung zwischen Listen- und GridCard-Block behoben ([#7773](https://github.com/nocobase/nocobase/pull/7773)) von @katherinehhh

- **[Block: Vorlage (veraltet)]** Problem behoben, bei dem unnötige Anfragen für Blockvorlagen beim Öffnen oder Schließen von Modalen ausgelöst wurden ([#7561](https://github.com/nocobase/nocobase/pull/7561)) von @gchust

- **[Aktion: Datensätze exportieren Pro]** Problem behoben, dass die Exportoption für Anhänge "Einen Ordner für jeden Datensatz erstellen" nicht wirkte von @katherinehhh

- **[Datenquelle: Externes PostgreSQL]** Problem behoben, dass Datenbankereignisse nach dem Aktualisieren der externen Datenquelle ungültig wurden von @cgyrock

- **[Aktion: Datensätze importieren Pro]**
  - Eindeutigkeitsprüflogik behoben, die einen Fehler auslöst, wenn der Wert des eindeutigen Feldes null ist von @mytharcher

  - Problem behoben, dass die Änderung der Importoptionen durch den Uploader keine Wirkung hatte von @katherinehhh

  - Problem mit der Feldlistenanzeige in importierbaren Feldern behoben von @katherinehhh

- **[Sammlung: Verbindung zu externen Daten (FDW)]**
  - Trigger-Fehler beim Verbinden mit Tabellen mit Großbuchstaben im Namen behoben von @2013xile

  - Problem behoben, dass das Laden für Tabellen mit Großbuchstaben im Namen fehlschlägt von @2013xile

- **[Datenquelle: Externes SQL Server]** Probleme behoben, bei denen die Optionen `encrypt` und `trustServerCertificate` nicht verfügbar sind von @2013xile

- **[Multi-Space]**
  - Mobile Geräte unterstützen Space-Wechsel von @jiannx

  - Erstellung anderer Felder in der Systemsammlung behoben von @jiannx

  - Multi-Space-verknüpfte Benutzer von @jiannx

- **[HTTP-Anfrageverschlüsselung]** Verwendung von eckigen Klammern für das Array-Format in der qs-Parsing von @chenos

- **[Kommentare]**
  - Löschen eines Datensatzes im Kommentarblock fehlgeschlagen behoben von @katherinehhh

  - Problem behoben, wenn zitierte Kommentare im Kommentarblock nicht angezeigt werden von @katherinehhh

  - Warnung beim Verwenden des Kommentarblocks in einer Nicht-Kommentar-Sammlung behoben von @katherinehhh

- **[Vorlagendruck]**
  - Fehler bei der Vorlagendruckaktion im Detailblock behoben von @katherinehhh

  - Fehler beim Hinzufügen einer Vorlage im Datensatz-Vorlagendruckvorgang behoben von @katherinehhh

  - Problem behoben, dass die Vorlagendruckanfrage nicht mit externen Datenquellen funktioniert von @katherinehhh

- **[Multi-App]**
  - Multi-App-Proxy unterstützt Cache von @jiannx

  - Multi-App-Migration löst keine Hooks aus von @jiannx

- **[plugin-demo-platform]** Demo unterstützt automatisches Stoppen von Apps von @jiannx

- **[Datenquelle: Externes Oracle]** Problem behoben, dass Datenbankereignisse nach dem Aktualisieren der externen Datenquelle ungültig wurden von @cgyrock

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem der Status nicht zusammenhängender Genehmigungsdatensätze fälschlicherweise durch die Genehmigungsaktion in `UNPROCESSED` geändert wurde von @mytharcher

  - Problem behoben, bei dem die Genehmigung eine Verknüpfung zur Erstellung eines neuen Datensatzes herstellt von @mytharcher

  - Doppeltes Rollback derselben Transaktion behoben von @mytharcher

  - Problem behoben, bei dem ein Fehler beim Abbrechen einer Ausführung ausgelöst wurde, wenn der zugehörige Workflow gelöscht wurde von @mytharcher

  - Problem behoben, dass ausgefüllte Daten im Formular des Bearbeiters verschwanden von @mytharcher

  - Problem behoben, bei dem die Genehmigung eine n-zu-n-Verknüpfung zur Erstellung neuer Datensätze verursacht von @mytharcher

  - Fehler beim Erstellen eines Genehmigungsinformationsblocks behoben von @mytharcher

- **[E-Mail-Manager]**
  - Behandlung abnormaler Daten von @jiannx

  - Fehler in Entwürfen behoben von @jiannx

  - Nicht synchronisierter Gmail-Planungsstatus von @jiannx

  - ShadowHtml-Aktualisierungsfehler von @jiannx

  - Änderung der übergeordneten E-Mail-ID erlauben von @jiannx

- **[Migrationsmanager]**
  - Problem behoben, bei dem Zeilenumbrüche in Daten während der Migration verloren gingen. von @cgyrock

  - Fehlende Migrationsbeschreibung behoben und aktuelle Zeit als Standard gesetzt von @cgyrock
