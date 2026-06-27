---
title: "NocoBase v2.1.0-alpha.31: Assoziieren und Trennen von Aktionen zum Assoziationsblock hinzugefügt"
description: "Versionshinweise zu v2.1.0-alpha.31"
---

### 🎉 Neue Funktionen

- **[Client]** Aktionen zum Verknüpfen und Trennen zu Assoziationsblöcken hinzugefügt ([#9366](https://github.com/nocobase/nocobase/pull/9366)) von @katherinehhh

- **[Text kopieren]** Option "Kopier-Button anzeigen" für schreibgeschützte Textfelder unterstützt ([#9394](https://github.com/nocobase/nocobase/pull/9394)) von @katherinehhh

- **[KI-Mitarbeiter]** Der KI-Mitarbeiter-Knoten im Workflow unterstützt das Laden von Dateien aus Anhangs-Feldern. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) von @cgyrock

- **[Datenvisualisierung]** Client-v2-Unterstützung für Block-Plugins hinzugefügt ([#9297](https://github.com/nocobase/nocobase/pull/9297)) von @zhangzhonghe

### 🚀 Verbesserungen

- **[Client]** Erlaubt die Zuweisung eines Feldwerts für Sequenzfelder ([#9397](https://github.com/nocobase/nocobase/pull/9397)) von @mytharcher

- **[Undefiniert]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) von @Molunerfinn

- **[Block: Kanban]** Verbesserte Konsistenz der Detailfeld-Abstände in v2 und verbesserte Anpassung der Karten- und Spaltenabstände an die Theme-Einstellungen. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) von @jiannx

- **[Workflow: Genehmigung]** Korrigiertes Verhalten der Pflichtfeld-Validierung für Genehmigungsformulare von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behoben, dass Filterformulare nicht eingeklappt werden konnten ([#9386](https://github.com/nocobase/nocobase/pull/9386)) von @zhangzhonghe

  - Behoben: Der v2-Tabellen-Bulk-Workflow-Trigger behält die Zeilenauswahl nach dem Wechsel zwischen Tabs bei, und Zeilen können nach der Rückkehr erneut ausgewählt werden ([#9388](https://github.com/nocobase/nocobase/pull/9388)) von @jiannx

  - Behoben: `Versteckt (reservierter Wert)`-Felder in Formularblöcken bleiben im UI-Editor-Modus sichtbar, und die Werteingabeunterstützung für deren Zuweisung in der Feldzuweisung wurde wiederhergestellt ([#9373](https://github.com/nocobase/nocobase/pull/9373)) von @jiannx

  - Behoben: DividerItem an das Theme in v2 angepasst ([#9372](https://github.com/nocobase/nocobase/pull/9372)) von @katherinehhh

  - Behoben: Falsche Download-Dateinamen für AttachmentURL-Felder, wenn Dateimetadaten fehlen. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) von @mytharcher

  - Behoben: Fehler beim Filtern von skalaren Feldern mit benutzerdefinierten Multi-Select-Filtern ([#9387](https://github.com/nocobase/nocobase/pull/9387)) von @zhangzhonghe

  - Behoben: Verknüpfungsregeln wurden nach Änderungen der Formularwerte nicht erneut ausgeführt. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) von @gchust

  - Behoben: Problem, bei dem v1-Untertabellen-Verknüpfungsregeln fälschlicherweise die Stile von Pflichtfeldern änderten ([#9364](https://github.com/nocobase/nocobase/pull/9364)) von @zhangzhonghe

  - Behoben: Falsche Datenwiedergabe im Grid-Karten-Block nach Update und Aktualisierung ([#9351](https://github.com/nocobase/nocobase/pull/9351)) von @katherinehhh

  - Behoben: Pflichtoptionsfeld in Untertabelle wurde bei erster Auswahl auf Mobilgeräten nicht korrekt validiert ([#9352](https://github.com/nocobase/nocobase/pull/9352)) von @katherinehhh

  - Behoben: Option "Schnellerstellung" für Assoziationsauswahlfeld in v2-Untertabelle ausgeblendet ([#9358](https://github.com/nocobase/nocobase/pull/9358)) von @katherinehhh

  - Behoben: Problem, bei dem URL-Abfrageparameter-Variablen nach dem Wechsel zwischen gecachten Seiten ungültig wurden ([#9263](https://github.com/nocobase/nocobase/pull/9263)) von @zhangzhonghe

- **[Flow-Engine]** Behoben: Unübersetzte Validierungsmeldungen für Datenbanktabellenfelder in v2-Flow-Formularen ([#9393](https://github.com/nocobase/nocobase/pull/9393)) von @jiannx

- **[Server]**
  - Behoben: OAuth-Discovery-Anfragen von Unteranwendungen wurden als Hauptanwendungsanfragen weitergeleitet ([#9383](https://github.com/nocobase/nocobase/pull/9383)) von @2013xile

  - Validierung von Plugin-Paketnamen vor Dateisystemoperationen ([#9367](https://github.com/nocobase/nocobase/pull/9367)) von @chenos

- **[Client-v2]**
  - Behoben: Fehler beim Auswählen von Assoziationsfeldern in den Feldeinstellungen. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) von @gchust

  - Behoben: Problem, bei dem nach dem App-Start kurz eine 404-Seite aufblitzt ([#9365](https://github.com/nocobase/nocobase/pull/9365)) von @zhangzhonghe

  - Behoben: Probleme mit dem Drag-Placeholder und der Drop-Position von v2-Seitenblöcken ([#9361](https://github.com/nocobase/nocobase/pull/9361)) von @zhangzhonghe

  - Behoben: Problem, bei dem einige v2-Seiten keine Remote-Plugins laden konnten ([#9369](https://github.com/nocobase/nocobase/pull/9369)) von @zhangzhonghe

- **[Undefiniert]** Behoben: Tote Links in übersetzter Dokumentation; tote-Link-Erkennung ist im Docs-Build standardmäßig aktiviert. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) von @Molunerfinn

- **[Benachrichtigung: In-App-Nachricht]** Behoben: Problem, dass die In-App-Nachrichtenliste nach dem Empfang von Echtzeit-Benachrichtigungen nicht aktualisiert wurde ([#9409](https://github.com/nocobase/nocobase/pull/9409)) von @mytharcher

- **[Datenquellen-Manager]** Verhindert Bearbeitung und Löschung aller Datensätze in benutzerdefinierten Bereichsberechtigungen für externe Datenquellen ([#9395](https://github.com/nocobase/nocobase/pull/9395)) von @katherinehhh

- **[KI: MCP-Server]** Behoben: MCP-Server-Paketierung enthält nun Laufzeitabhängigkeiten ([#9401](https://github.com/nocobase/nocobase/pull/9401)) von @2013xile

- **[Datenquelle: Haupt]** Behoben: Importierte Datenbanktabellen verwendeten den falschen präfixierten Tabellennamen, wenn ein Tabellenpräfix aktiviert war ([#9403](https://github.com/nocobase/nocobase/pull/9403)) von @2013xile

- **[Flow-Engine]** Behoben: Problem, dass von KI generierte Blöcke nicht von Referenzvorlagen zurück in doppelte Vorlagen konvertiert werden konnten. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) von @gchust

- **[KI-Mitarbeiter]**
  - Behoben: Fehler beim Lesen von Assoziationsfeld-Anhängen durch den KI-Mitarbeiter-Knoten im Workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) von @cgyrock

  - Behoben: Workflow-KI-Mitarbeiter-Knoten wurde nach der Tool-Zuweisung nicht ordnungsgemäß beendet. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) von @cgyrock

- **[Aktion: Benutzerdefinierte Anfrage]** Upgrade von koa auf v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) von @chenos

- **[Block: Kanban]**
  - Verbessertes kompaktes Styling der Kanban-Karten und optimierte Vorlagenauswahl im Schnellerstellungs-Popup. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) von @jiannx

  - Behoben: Verhindert einzeiligen Zeilenumbruch in Langtextfeldern des v1-Kanban-Blocks ([#9356](https://github.com/nocobase/nocobase/pull/9356)) von @katherinehhh

- **[Sammlungsfeld: Formel]** Behoben: Formelfeld in v2-Untertabelle löst keine automatische Berechnung aus ([#9354](https://github.com/nocobase/nocobase/pull/9354)) von @katherinehhh

- **[Aktion: Datensätze importieren Pro]** Behoben: Problem, dass die Duplikatsprüfung für Datumsfelder immer fehlschlug von @mytharcher

- **[Passwortrichtlinie]** Behoben: Problem, dass dauerhaft gesperrte Benutzer sich nach einem Dienstneustart anmelden konnten von @2013xile

- **[Workflow: Genehmigung]** Behoben: Problem, dass der "Datensatz auswählen"-Dialog in der Genehmigungs-Workflow-Konfiguration verdeckt wurde von @zhangzhonghe

- **[E-Mail-Manager]** Behoben: Titelanzeige der E-Mail-Identitäten von @jiannx

- **[Backup-Manager]** Behoben: pg-Schema-Anpassung von @Andrew1989Y
