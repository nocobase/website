---
title: "NocoBase v1.9.0-beta.17: Benachrichtigung für delegierte und hinzugefügte Bearbeiter hinzugefügt"
description: "Versionshinweise zu v1.9.0-beta.17"
---

### 🚀 Verbesserungen

- **[Datenbank]** Die Option `multipleStatements` zur MariaDB-Verbindungsinstanz hinzugefügt, um die Ausführung mehrerer Anweisungen in einer einzelnen Abfrage zu unterstützen ([#7781](https://github.com/nocobase/nocobase/pull/7781)) von @mytharcher

- **[Zugriffskontrolle]**
  - Standardberechtigungen für die Mitgliederrolle reduziert ([#7921](https://github.com/nocobase/nocobase/pull/7921)) von @2013xile

  - Berechtigungskontrolllogik für Operationen an Assoziationsfeldern optimiert ([#7800](https://github.com/nocobase/nocobase/pull/7800)) von @2013xile

- **[Datenvisualisierung]** Russische Sprachunterstützung für Plugin-Oberflächen hinzugefügt. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) von @sembaev-a-a

- **[Workflow]** Unterstützung für Datenblöcke im Workflow, um das konsolidierte Detail-Einstellungsmenü zu verwenden ([#7771](https://github.com/nocobase/nocobase/pull/7771)) von @mytharcher

- **[Workflow: Webhook]** Symbol für den Antwortknotentyp hinzugefügt von @mytharcher

- **[Workflow: JavaScript]** Eine Sicherheitslücke behoben, die durch die Übergabe von Funktionen höherer Ebenen an die Ausführungsumgebung verursacht wurde, um Ausbeutung zu verhindern, die Zugriff auf den übergeordneten Ausführungskontext gewähren könnte von @mytharcher

- **[Auth: OIDC]** Das Request-Timeout erhöht von @2013xile

- **[Workflow: Genehmigung]** Benachrichtigung für delegierte und hinzugefügte Bearbeiter hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehler behoben, bei dem die Feld-Schnittstelle für `belongsTo` in der Konfiguration externer Datenquellen "viele-zu-eins" anstelle von "eins-zu-eins" anzeigte ([#7936](https://github.com/nocobase/nocobase/pull/7936)) von @cgyrock

  - Fehler behoben: "Can't resolve 'antd-mobile'" und "Can't resolve 'antd-mobile-icons'" ([#7914](https://github.com/nocobase/nocobase/pull/7914)) von @zhangzhonghe

  - Problem behoben, bei dem duplizierte Vorlagen nicht angezeigt wurden, verursacht durch Ziehen und anschließendes Löschen einer referenzierten Vorlage ([#7847](https://github.com/nocobase/nocobase/pull/7847)) von @zhangzhonghe

  - Problem behoben, bei dem die Verknüpfungsregel für das Genehmigungsformular nicht funktionierte ([#7858](https://github.com/nocobase/nocobase/pull/7858)) von @zhangzhonghe

  - Problem mit leerer nächster Seite im einfachen Paginierungs-Detailblock behoben ([#7784](https://github.com/nocobase/nocobase/pull/7784)) von @katherinehhh

  - "Maximum call stack size exceeded" behoben ([#7780](https://github.com/nocobase/nocobase/pull/7780)) von @zhangzhonghe

- **[Server]**
  - Problem im Dienstaufteilungsmodus behoben, bei dem abbestellte Warteschlangennachrichten nicht veröffentlicht werden konnten ([#7875](https://github.com/nocobase/nocobase/pull/7875)) von @mytharcher

  - Pub-Sub-Kanal nach App-Namen isoliert ([#7762](https://github.com/nocobase/nocobase/pull/7762)) von @mytharcher

  - Problem behoben, bei dem nach Aktivierung des Dienstaufteilungsmodus das Senden von Nachrichten durch Worker-Prozesse über die Nachrichtenwarteschlange zu Fehlern führte ([#7797](https://github.com/nocobase/nocobase/pull/7797)) von @mytharcher

- **[Utils]** Objektzusammenführung in der Intersect-Strategie aktiviert ([#7840](https://github.com/nocobase/nocobase/pull/7840)) von @chenos

- **[Datenbank]** Falsche Indexfeld-Erkennung, wenn Feldnamen im snake_case-Stil verwendet werden ([#7776](https://github.com/nocobase/nocobase/pull/7776)) von @2013xile

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Probleme mit M2M (Array)-Feldern beim Erstellen/Aktualisieren verknüpfter Daten behoben ([#7926](https://github.com/nocobase/nocobase/pull/7926)) von @cgyrock

- **[Datenquelle: Haupt]** Problem behoben, bei dem ein neu hinzugefügtes Eins-zu-viele-Feld erst nach einem Neustart der Anwendung als Fremdschlüssel ausgewählt werden konnte. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) von @cgyrock

- **[Workflow]**
  - Problem behoben, bei dem das Aktualisieren der Aufgabenanzahl unbeabsichtigt den Status von ausgefüllten Formularen zurücksetzte ([#7937](https://github.com/nocobase/nocobase/pull/7937)) von @mytharcher

  - Verwendung von `eventQueue` anstelle des gemeinsamen `backgroundJob`, um zu verhindern, dass die gemeinsame Warteschlange im Dienstaufteilungsmodus fälschlicherweise verarbeitet wird ([#7871](https://github.com/nocobase/nocobase/pull/7871)) von @mytharcher

  - Problem behoben, bei dem das Workflow-Plugin das Warteschlangenereignis auch dann verarbeitete, wenn es sich im Dienstaufteilungsmodus nicht im Worker-Modus befand ([#7820](https://github.com/nocobase/nocobase/pull/7820)) von @mytharcher

  - Fehler behoben, der durch das Lauschen auf nicht existierende Ereignisse externer Datenquellen verursacht wurde ([#7855](https://github.com/nocobase/nocobase/pull/7855)) von @mytharcher

  - Problem im Dienstaufteilungsmodus behoben, bei dem die manuelle Ausführung eines Workflows mit einem Unterbrechungsknoten im Status "Ausstehend" hängen blieb ([#7767](https://github.com/nocobase/nocobase/pull/7767)) von @mytharcher

  - `workflowId` als Identitätsdaten für Workflow-Protokolle hinzugefügt ([#7789](https://github.com/nocobase/nocobase/pull/7789)) von @mytharcher

  - Problem behoben, bei dem der Workflow-Dispatcher im Cluster-Modus Leerlaufzustände nicht korrekt identifizierte, was zu unnötigem Verarbeiten von Warteschlangenereignissen führen konnte, bevor das Plugin bereit war ([#7768](https://github.com/nocobase/nocobase/pull/7768)) von @mytharcher

- **[Zugriffskontrolle]**
  - Unterstützung für Datenbereichsbeschränkungen bei Assoziationsoperationen. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) von @2013xile

  - Problem, dass Assoziationsoperations-Snippets nicht wirksam wurden ([#7876](https://github.com/nocobase/nocobase/pull/7876)) von @2013xile

- **[Workflow: Manueller Knoten]** Namespace der zu verwendenden Locale-Sprache korrigiert, um den korrekten Inhalt der Übersetzung anzuzeigen ([#7877](https://github.com/nocobase/nocobase/pull/7877)) von @mytharcher

- **[Benutzer]** Falsche Indexaktualisierung, wenn Feldnamen im snake_case-Stil verwendet werden ([#7785](https://github.com/nocobase/nocobase/pull/7785)) von @2013xile

- **[Mobil (veraltet)]** Problem behoben, bei dem im Popup für den Standardwert des Datumsfelds auf Mobilgeräten kein Datum ausgewählt werden konnte ([#7783](https://github.com/nocobase/nocobase/pull/7783)) von @zhangzhonghe

- **[Workflow: Benutzerdefinierte Variable]** Fehler behoben, der ausgelöst wurde, wenn keine Konfiguration im Variablenknoten vorhanden war von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Fehler behoben, der durch das Lauschen auf nicht existierende Ereignisse externer Datenquellen verursacht wurde von @mytharcher

- **[Vorlagendruck]** Variablen im Filter analysiert von @jiannx

- **[Datenvisualisierung: ECharts]** Problem behoben, bei dem die Konfiguration des Label-Typs in ECharts-Optionen nicht wirksam wurde. von @heziqiang

- **[Workflow: Genehmigung]**
  - Datumsformat auf den Genehmigungslistenkarten im Aufgabencenter korrigiert, um das vollständige Datum und die Uhrzeit anzuzeigen von @mytharcher

  - Problem behoben, bei dem die Seitengröße des Lade-Benachrichtigungskanals nicht ausreichte, was dazu führte, dass die Liste nicht vollständig geladen wurde von @mytharcher

  - Ein Leistungsproblem behoben, das beim Abfragen der Liste der Genehmigungsdatensätze während der Genehmigungseinreichung auftrat von @mytharcher

  - Problem behoben, bei dem Hauptsammlungsfelder beim erneuten Laden von Assoziationsdaten nicht ausgeschlossen wurden von @mytharcher

  - Problem behoben, bei dem Wettlaufsituationen während der gleichzeitigen Genehmigungsverarbeitung durch mehrere Genehmiger dazu führen konnten, dass ein Workflow-Knoten mehr als einmal ausgeführt wurde von @mytharcher

  - Das Erstellen von Genehmigungsknoten in parallelen Zweigen wird nicht mehr unterstützt, um Probleme durch den Prozessstatus zu vermeiden von @mytharcher

  - Problem behoben, bei dem die Verknüpfungsregel für das Genehmigungsformular nicht funktionierte von @zhangzhonghe

  - Fehler behoben, der beim Duplizieren eines Genehmigungs-Workflows ausgelöst wurde von @mytharcher

- **[E-Mail-Manager]**
  - Synchronisationsprotokolle hinzugefügt von @jiannx

  - Lesestatus von Microsoft-Mail ohne Zeitstempel synchronisiert von @jiannx

  - Sammlung mailMessages um Indizes erweitert von @jiannx

  - Migration für Indizes hinzugefügt von @jiannx

  - Problem mit reservierten Bildern und Synchronisation in Outlook behoben von @jiannx
