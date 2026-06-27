---
title: "Wöchentliche Updates｜Open-Source-Commercial-Plugins und Lizenzwechsel von AGPL-3.0 zu Apache-2.0"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 13. Februar bis 26. Februar 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein. Hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.5](https://www.nocobase.com/en/blog/v2.0.5)

*Veröffentlichungsdatum: 26.02.2026*

### 🐛 Fehlerbehebungen

- **[Client]** Schließe auf Mobilgeräten zuerst das Menü und führe dann den Seitenwechsel durch ([#8699](https://github.com/nocobase/nocobase/pull/8699)) von @zhangzhonghe
- **[AI LLM: GigaChat]** Problem behoben, bei dem das GigaChat-Plugin in Version 2.0 nicht funktionierte. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) von @cgyrock
- **[KI-Mitarbeiter]**

  - Vereinheitlichung der Dateieingabe für ChatGPT-APIs mittels ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) von @cgyrock
  - Fehler im KI-Agenten behoben, wenn der Benutzer eine neue Nachricht sendet, ohne die Tool-Ausführung zu bestätigen ([#8697](https://github.com/nocobase/nocobase/pull/8697)) von @cgyrock
- **[KI: Wissensdatenbank]** Startfehler des KI-Wissensdatenbank-Plugins behoben. von @cgyrock
- **[E-Mail-Manager]** Bilddarstellungsfehler von @jiannx

### [v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

*Veröffentlichungsdatum: 25.02.2026*

### 🎉 Neue Funktionen

- **[Nicht definiert]**

  - Ein experimentelles "Referenzblock"-Plugin hinzugefügt, das die Wiederverwendung vorhandener Blöcke durch Referenzieren oder Kopieren ermöglicht. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) von @gchust
  - Formularentwürfe von @chenos
- **[ACL]** Open-Source-Kommerzplugins und Lizenzupdate von AGPL-3.0 zu Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) von @chenos
- **[Client]**

  - Unterstützung für die Konfiguration von Browser-Tab-Titeln für Seiten, Seiten-Tabs, Popups und Popup-Tabs ([#8590](https://github.com/nocobase/nocobase/pull/8590)) von @zhangzhonghe
  - Unterstützung für die Konfiguration von Feldern des Assoziationssammlungsfeldes im Formularblock ([#8578](https://github.com/nocobase/nocobase/pull/8578)) von @katherinehhh
  - Unterstützung für die Konfiguration des Datenlademodus ([#8551](https://github.com/nocobase/nocobase/pull/8551)) von @zhangzhonghe
  - Untertabellen-Komponente (Popup-Bearbeitung) für Felder hinzugefügt ([#8280](https://github.com/nocobase/nocobase/pull/8280)) von @katherinehhh
  - Beim Erstellen einer Sammlung kann der voreingestellte ID-Feldtyp geändert werden ([#8129](https://github.com/nocobase/nocobase/pull/8129)) von @cgyrock
  - Unterstützung für Hinzufügen/Auswählen/Trennen-Einstellungen in n-zu-m-Unterformularen hinzugefügt ([#8099](https://github.com/nocobase/nocobase/pull/8099)) von @katherinehhh
  - Unterstützung für die Anpassung globaler Stile im Theme-Editor ([#7960](https://github.com/nocobase/nocobase/pull/7960)) von @ljmiaoo
  - Unterstützung für die Einstellung der Standardsortierregel im Detailblock ([#8070](https://github.com/nocobase/nocobase/pull/8070)) von @katherinehhh
  - Unterstützung für die Einstellung des Datentyps für Zahlenfelder (Optionen: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) von @chenos
  - Unterstützung für die Sortierung von Spaltenfeldern in Tabellen ([#7900](https://github.com/nocobase/nocobase/pull/7900)) von @katherinehhh
  - Schnellerstellungsunterstützung für die Auswahl von Assoziationsfeldern hinzugefügt ([#7887](https://github.com/nocobase/nocobase/pull/7887)) von @katherinehhh
  - Unterstützung für Kaskadenauswahl für Baumstruktur-Assoziationsfelder ([#7846](https://github.com/nocobase/nocobase/pull/7846)) von @katherinehhh
  - Unterstützung für Drag & Drop bei Tabellenspaltenaktionen ([#7842](https://github.com/nocobase/nocobase/pull/7842)) von @zhangzhonghe
  - Seitenzählungsunterstützung für Untertabellen hinzugefügt ([#7754](https://github.com/nocobase/nocobase/pull/7754)) von @katherinehhh
  - Ereignisablauf: Neue vordefinierte Aktionen eingeführt, um die Anpassungsoptionen für die Ereignisbehandlung zu erweitern und Benutzern die Optimierung von Arbeitsabläufen und die Steigerung der Effizienz zu ermöglichen ([#7672](https://github.com/nocobase/nocobase/pull/7672)) von @zhangzhonghe
  - Markdown-Block 2.0 hinzugefügt ([#7613](https://github.com/nocobase/nocobase/pull/7613)) von @katherinehhh
  - Unterstützung für die Festlegung von Verknüpfungsregeln für Unterformulare ([#7640](https://github.com/nocobase/nocobase/pull/7640)) von @zhangzhonghe
  - Unterstützung für Tabellenzeilen-Klick-Ereignis-Listener hinzugefügt, die es Benutzern ermöglichen, bestimmte Aktionen auszuführen, wenn auf eine Zeile in der Tabelle geklickt wird ([#7622](https://github.com/nocobase/nocobase/pull/7622)) von @zhangzhonghe
  - Unterstützung für benutzerdefinierte Variablen hinzugefügt ([#7585](https://github.com/nocobase/nocobase/pull/7585)) von @zhangzhonghe
  - Variable "Aktueller Gerätetyp" hinzugefügt ([#7576](https://github.com/nocobase/nocobase/pull/7576)) von @zhangzhonghe
- **[Flow-Engine]** Unterstützung für env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) von @chenos
- **[Server]** Refaktorierung des App-Supervisors zur Unterstützung der Multi-App-Verwaltung in verschiedenen Szenarien ([#8043](https://github.com/nocobase/nocobase/pull/8043)) von @2013xile
- **[Test]** Prozessebenen-Parallelitätssteuerung für den Basis-Task-Manager hinzugefügt ([#8343](https://github.com/nocobase/nocobase/pull/8343)) von @cgyrock
- **[Aktion: Stapelbearbeitung]** Stapelbearbeitung 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) von @jiannx
- **[Block: GridCard]**

  - Unterstützung für konfigurierbare Blockhöhe ([#8583](https://github.com/nocobase/nocobase/pull/8583)) von @katherinehhh
  - GridCard-Block 2.0 hinzugefügt ([#7579](https://github.com/nocobase/nocobase/pull/7579)) von @katherinehhh
- **[Aktion: Datensatz duplizieren]** Duplizieraktion 2.0 hinzugefügt ([#8580](https://github.com/nocobase/nocobase/pull/8580)) von @katherinehhh
-


Aufgrund von Platzbeschränkungen finden Sie die vollständigen Versionshinweise unter dem folgenden Link.

[https://www.nocobase.com/en/blog/v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

### [v1.9.48](https://www.nocobase.com/en/blog/v1.9.48)

*Veröffentlichungsdatum: 24.02.2026*

### 🚀 Verbesserungen

- **[Zugriffskontrolle]** Bereitstellung einer Sanitize-API zum Filtern von Assoziationswerten in Aktionen ([#8601](https://github.com/nocobase/nocobase/pull/8601)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]** Bereinigung von Assoziationswerten in Genehmigungsaktionen, um jegliche Datenmanipulation außerhalb der Berechtigungen zu vermeiden von @mytharcher

### [v2.0.2](https://www.nocobase.com/en/blog/v2.0.2])

*Veröffentlichungsdatum: 22.02.2026*

### 🐛 Fehlerbehebungen

- **[Kalender]** Kalenderlokalisierung und Datumsformatierungsprobleme behoben ([#8498](https://github.com/nocobase/nocobase/pull/8498)) von @sembaev-a-a

### [v2.0.1](https://www.nocobase.com/en/blog/v2.0.1)

*Veröffentlichungsdatum: 16.02.2026*

### 🐛 Fehlerbehebungen

- **[KI-Mitarbeiter]** Browser-OOM bei Verwendung von KI-Mitarbeitern behoben ([#8653](https://github.com/nocobase/nocobase/pull/8653)) von @mytharcher

### [v1.9.47](https://www.nocobase.com/en/blog/v1.9.47)

*Veröffentlichungsdatum: 13.02.2026*

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem ein geleertes assoziiertes Anhangsfeld nach dem Absenden im Bearbeitungsformular nicht gespeichert wurde ([#8616](https://github.com/nocobase/nocobase/pull/8616)) von @katherinehhh
- **[Utils]** Sicherheitsproblem der `formula.js`-Evaluierungs-Engine behoben ([#8416](https://github.com/nocobase/nocobase/pull/8416)) von @mytharcher
- **[Workflow: Genehmigung]** Problem behoben, bei dem Genehmigungsdaten im Detail-Popup des Datensatzes nicht angezeigt wurden, wenn der Workflow-Modus auf "Vor dem Speichern" gesetzt war von @mytharcher


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.2](https://www.nocobase.com/en/blog/v2.1.0-beta.2)

*Veröffentlichungsdatum: 22.02.2026*

### 🐛 Fehlerbehebungen

- **[Kalender]** Kalenderlokalisierung und Datumsformatierungsprobleme behoben ([#8498](https://github.com/nocobase/nocobase/pull/8498)) von @sembaev-a-a
- **[KI-Mitarbeiter]** Browser-OOM bei Verwendung von KI-Mitarbeitern behoben ([#8653](https://github.com/nocobase/nocobase/pull/8653)) von @mytharcher

### [v2.1.0-beta.1](https://www.nocobase.com/en/blog/v2.1.0-beta.1)

*Veröffentlichungsdatum: 14.02.2026*

### 🎉 Neue Funktionen

- **[Server]** Refaktorierung des App-Supervisors zur Unterstützung der Multi-App-Verwaltung in verschiedenen Szenarien ([#8043](https://github.com/nocobase/nocobase/pull/8043)) von @2013xile

### 🚀 Verbesserungen

- **[Client]**
  - Verbesserung der Benutzeroberfläche für die Zuweisung von Datums-/Uhrzeitfeldern zur Unterstützung der Auswahl relativer Daten/Zeiten. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) von @gchust
  - Unterstützung für die Angabe eines Titelfeldes für Assoziationsfelder bei der Feldzuweisung. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) von @gchust

### 🐛 Fehlerbehebungen

- **[Flow-Engine]**

  - Problem behoben, bei dem das Untermenü des Filterfeldes nicht erweitert werden konnte, wenn ein Suchbegriff vorhanden war. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) von @gchust
  - Problem behoben, bei dem die Spaltenlöschaktion im Popup der Untertabellenbearbeitung nicht funktionierte, wenn createModelOptions konfiguriert war ([#8560](https://github.com/nocobase/nocobase/pull/8560)) von @katherinehhh
- **[Client]**

  - Problem behoben, bei dem die Zuweisung eines einzelnen Datensatzes zu einem n-zu-m-Beziehungsfeld zu falschen Ergebnissen führte. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) von @gchust
  - Datumsanalyse mit der Datumsauswahl und Hinzufügung der Passwortstärke-Validierung usw. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) von @jiannx
  - Problem mit dem Abstand behoben, der durch ausgeblendete verknüpfte Aktionen in der Tabellenaktionsspalte verursacht wurde ([#8646](https://github.com/nocobase/nocobase/pull/8646)) von @zhangzhonghe
  - Problem behoben, bei dem `Action.Modal` nach einer Interaktion nicht geschlossen werden konnte ([#8642](https://github.com/nocobase/nocobase/pull/8642)) von @mytharcher
  - Syntaxfehler beim Rendern von ungültigem Liquid in Markdown-Elementen behoben ([#8637](https://github.com/nocobase/nocobase/pull/8637)) von @katherinehhh
  - Unnötige Backend-Parsing-Anfragen für n-zu-m-Feldeigenschaften im Formularblock behoben. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) von @gchust
  - Fehlende Zahlenformatierung für Zahlenformelfelder und Datumsformateinstellungen für Datumsformelfelder behoben ([#8625](https://github.com/nocobase/nocobase/pull/8625)) von @katherinehhh
  - Unvollständige Darstellung des oberen Rahmens beim ersten Formularelement behoben ([#8623](https://github.com/nocobase/nocobase/pull/8623)) von @katherinehhh
  - Behoben: "Baumtabelle aktivieren" und "Alle Zeilen standardmäßig erweitern" für Nicht-Baum-Sammlungen ausgeblendet ([#8566](https://github.com/nocobase/nocobase/pull/8566)) von @katherinehhh
- **[Utils]** Sicherheitsproblem der `formula.js`-Evaluierungs-Engine behoben ([#8416](https://github.com/nocobase/nocobase/pull/8416)) von @mytharcher
- **[KI-Mitarbeiter]**

  - Problem behoben, bei dem Zitationslinks aus KI-Websuchen nicht im Chatfenster angezeigt wurden ([#8651](https://github.com/nocobase/nocobase/pull/8651)) von @cgyrock
  - Fehler in den OpenAI-API-Parametern behoben ([#8633](https://github.com/nocobase/nocobase/pull/8633)) von @cgyrock
- **[Druckvorlage]** Problem behoben, bei dem Felder mit demselben Schlüssel zu Rendering-Fehlern führten von @jiannx
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem ein Fehler beim Genehmigen eines gelöschten Datensatzes ausgelöst wurde von @mytharcher
  - Problem behoben, bei dem Genehmigungsdaten im Detail-Popup des Datensatzes nicht angezeigt wurden, wenn der Workflow-Modus auf "Vor dem Speichern" gesetzt war von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.6](https://www.nocobase.com/en/blog/v2.1.0-alpha.6)

*Veröffentlichungsdatum: 25.02.2026*

### 🎉 Neue Funktionen

- **[ACL]** Open-Source-Kommerzplugins und Lizenzupdate von AGPL-3.0 zu Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) von @chenos

### 🚀 Verbesserungen

- **[Nicht definiert]** KI-Mitarbeiter-Dokumentation aktualisiert ([#8690](https://github.com/nocobase/nocobase/pull/8690)) von @heziqiang

### 🐛 Fehlerbehebungen

- **[Client]**

  - Vereinheitlichung des mobilen Paginierungsverhaltens für Tabellen und GridCards ([#8691](https://github.com/nocobase/nocobase/pull/8691)) von @zhangzhonghe
  - Diagrammblockfilter funktioniert nicht ([#8671](https://github.com/nocobase/nocobase/pull/8671)) von @chenos
- **[KI-Mitarbeiter]** aiTools:list-API gibt 403 zurück ([#8672](https://github.com/nocobase/nocobase/pull/8672)) von @chenos
- **[Lokalisierung]** Verbesserte Handhabung fehlender i18n-Schlüssel ([#8673](https://github.com/nocobase/nocobase/pull/8673)) von @chenos

### [v2.1.0-alpha.3](https://www.nocobase.com/en/blog/v2.1.0-alpha.3)

*Veröffentlichungsdatum: 16.02.2026*

### 🐛 Fehlerbehebungen

- **[KI-Mitarbeiter]** Browser-OOM bei Verwendung von KI-Mitarbeitern behoben ([#8653](https://github.com/nocobase/nocobase/pull/8653)) von @mytharcher

### [v2.1.0-alpha.2](https://www.nocobase.com/en/blog/v2.1.0-alpha.2)

*Veröffentlichungsdatum: 15.02.2026*

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** ACL-Steuerung für Genehmigungs-APIs hinzugefügt von @mytharcher
- **[Auth: DingTalk]** Ermöglicht das Binden von Benutzern mit `unionId` von @2013xile

### 🚀 Verbesserungen

- **[KI: Wissensdatenbank]** Optimierte Build-Ausgabe zur Reduzierung der Paketgröße von plugin-ai-knowledge-base. von @cgyrock
- **[Multi-Space]** Multi-Space-Berechtigungssteuerung greift auf ACL zu von @jiannx
- **[Aktion: Datensätze exportieren Pro]** Verbesserung des Exportaktions-Datenbereichs basierend auf ausgewählten Datensätzen oder Ressourcenfiltern von @katherinehhh
- **[Workflow: Genehmigung]**

  - Unterstützung für JS-Felder entfernt von @zhangzhonghe
  - Parameter in Abfragen vereinfacht und Leistung verbessert von @mytharcher
  - Zugriffskontrolle für APIs implementiert, um unbefugte Datenoperationen zu verhindern von @mytharcher
  - Reparaturlogik für synchronisierte Zielgruppen nach der Migration hinzugefügt von @mytharcher
- **[Auth: DingTalk]** `userid` als Standardschlüssel für die Benutzerzuordnung verwendet, während die Kompatibilität mit bestehenden Authentifikatoren, die auf Mobilgeräte angewiesen sind, erhalten bleibt von @2013xile

### 🐛 Fehlerbehebungen

- **[Multi-Space]**

  - Migrationsskript hinzugefügt, um x-ready-pretty im Space-Feld zu entfernen von @jiannx
  - Verwandter Space beim Hinzufügen assoziierter Daten von @jiannx
  - Space-Auswahlfarbe folgt dem Theme von @jiannx
  - read-pretty-Attribut für das Space-Feld entfernt von @jiannx
- **[Feldkomponente: Maske]** Problem behoben, bei dem das Einstellungs-Popup für das Maskenfeld nicht alle Benutzerrollen korrekt laden konnte. von @gchust
- **[Aktion: Datensätze importieren Pro]**

  - Problem behoben, bei dem der durch den asynchronen Import ausgelöste Workflow verzögert ausgeführt wurde von @mytharcher
  - Anzahl der Zahlen im Importergebnis und Nachrichtenübersetzung korrigiert von @mytharcher
- **[KI: Wissensdatenbank]** Problem behoben, bei dem das System nach dem Build nicht starten konnte von @cgyrock
- **[Datenquelle: REST-API]** Fehlertoleranz für den Anforderungskontext hinzugefügt, um Fehler zu vermeiden, wenn die Methode nicht im Kontext ist von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem behoben, bei dem Parameter und Nutzlast beim Auslösen eines benutzerdefinierten Workflows falsch waren von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Fehler behoben, wenn Unteranwendungen asynchrone Import-/Exportaufgaben ausführen, während die Hauptanwendung das Import/Export Pro-Plugin nicht aktiviert hat von @cgyrock
- **[Workflow: Webhook]**

  - Problem behoben, bei dem ein 404-Fehler beim Posten an eine Webhook-URL in einer Unter-App ausgelöst wurde von @mytharcher
  - Problem behoben, bei dem Body-Daten fehlten, wenn das Body-Parsing nicht konfiguriert war von @mytharcher
- **[Workflow: Unterworkflow]** Routenpfad des Workflow-Links korrigiert von @mytharcher
- **[Druckvorlage]**

  - Problem mit der Feldlistenanzeige in der Druckvorlagen-Aktionskonfiguration behoben von @katherinehhh
  - Problem behoben, bei dem Felder mit demselben Schlüssel zu Rendering-Fehlern führten von @jiannx
  - Problem mit verdecktem Konfigurationsvorlagen-Popup behoben von @zhangzhonghe
  - Fußzeilen-Buttons aus der Druckvorlagenkonfiguration entfernt von @katherinehhh
  - Falsche Logik der Druckberechtigung bei vereinten Rollen korrigiert. von @jiannx
  - Unterstützung für Space-Feld von @jiannx
  - Space-Felder in Version 2.0 anzeigen von @jiannx
- **[Dateispeicher: S3(Pro)]** Problem behoben, bei dem der Dateiumbenennungsmodus nicht funktionierte von @mytharcher
- **[Datenvisualisierung: ECharts]** Rechtschreibfehler in ECharts korrigiert von @heziqiang
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem ein Fehler beim Genehmigen eines gelöschten Datensatzes ausgelöst wurde von @mytharcher
  - Fehler behoben, der bei Ausführung im Modus "Vor dem Speichern" ausgelöst wurde von @mytharcher
  - Problem behoben, bei dem Genehmigungsdaten im Detail-Popup des Datensatzes nicht angezeigt wurden, wenn der Workflow-Modus auf "Vor dem Speichern" gesetzt war von @mytharcher
  - Fehlertoleranz für gelöschte Workflows hinzugefügt, um Ladefehler in der Aufgabenliste zu vermeiden von @mytharcher
  - Problem behoben, bei dem Werte im Detail-Popup von "Mein Antrag" fehlten von @mytharcher
  - Problem behoben, bei dem ein Fehler im Genehmigungsdatensatz-Popup von 1.x ausgelöst wurde von @mytharcher
  - Leistungsproblem behoben, das durch JSON-Felder beim Laden von Listen (MySQL) verursacht wurde von @mytharcher
  - Falsche ID zum Laden des Detaildatensatzes korrigiert von @mytharcher
  - Problem behoben, bei dem Parallelität die wiederholte Ausführung verursachte von @mytharcher
  - Build-Fehler behoben, der durch fehlende Abhängigkeiten verursacht wurde von @mytharcher
  - Problem behoben, bei dem ein falscher Datensatz aufgrund falscher Parameter geladen wurde von @mytharcher
  - Problem behoben, bei dem eine Genehmigung an den vorherigen Knoten zurückgegeben wurde, aber zum Start zurückkehrte von @mytharcher
  - Fehler behoben, der beim Hinzufügen einer Rolle zu einem Benutzer ausgelöst wurde, wenn der Workflow für Zielgruppen deaktiviert war von @mytharcher
  - Problem behoben, bei dem der Wertblock aufgrund der fehlenden `ValueBlock.Result`-Komponente nicht angezeigt wurde von @mytharcher
  - Problem behoben, bei dem Felder auf Genehmigungsaufgabenkarten nicht angezeigt wurden von @zhangzhonghe
  - Problem behoben, bei dem Filterfelder im Aufgabencenter nicht korrekt funktionierten von @mytharcher
- **[E-Mail-Manager]**

  - Gesprächskette behoben von @jiannx
  - Gelegentliche Unterbrechung des Outlook-Antwortlinks behoben von @jiannx
  - Textkörper klappt nicht zusammen, wenn Text ausgewählt ist. Fehler beim Herunterladen von Anhängen behoben von @jiannx
  - Problem mit E-Mails im selben Postfach zwischen mehreren Benutzern behoben und Leistung optimiert von @jiannx
  - Filter zur Verwaltung hinzugefügt von @jiannx
  - "Allen antworten"-Button anzeigen und Datenbereich unterstützt das Filtern von Kindnachrichten. von @jiannx
  - Problem behoben, bei dem das E-Mail-Konfigurations-Popup verdeckt wurde von @zhangzhonghe
- **[WeCom]** Problem behoben, bei dem Benutzer nicht automatisch registriert werden konnten, wenn die Mobilnummer fehlte von @2013xile
- **[Migrationsmanager]** Potenzielles Einfrieren des Prozesses behoben, das durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen verursacht wurde von @cgyrock

### [v2.1.0-alpha.1](https://www.nocobase.com/en/blog/v2.1.0-alpha.1)

*Veröffentlichungsdatum: 14.02.2026*

### 🎉 Neue Funktionen

- **[Aktion: Stapelbearbeitung]** Stapelbearbeitung 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) von @jiannx

### 🚀 Verbesserungen

- **[Client]**

  - Verbesserung der Benutzeroberfläche für die Zuweisung von Datums-/Uhrzeitfeldern zur Unterstützung der Auswahl relativer Daten/Zeiten. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) von @gchust
  - Unterstützung für die Angabe eines Titelfeldes für Assoziationsfelder bei der Feldzuweisung. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) von @gchust
  - Tabelle 2.0 unterstützt Drag-and-Drop-Sortierung ([#8540](https://github.com/nocobase/nocobase/pull/8540)) von @jiannx
  - Feldzuweisung und Standardwerteinstellungen in die Konfiguration auf Formularebene verschoben. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) von @chenos
- **[Lokalisierung]** Automatisches Erstellen fehlender i18n-Schlüssel ([#8588](https://github.com/nocobase/nocobase/pull/8588)) von @jiannx

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Problem behoben, bei dem das Untermenü des Filterfeldes nicht erweitert werden konnte, wenn ein Suchbegriff vorhanden war. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) von @gchust
- **[Client]**

  - Problem behoben, bei dem die Zuweisung eines einzelnen Datensatzes zu einem n-zu-m-Beziehungsfeld zu falschen Ergebnissen führte. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) von @gchust
  - Datumsanalyse mit der Datumsauswahl und Hinzufügung der Passwortstärke-Validierung usw. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) von @jiannx
  - Problem mit dem Abstand behoben, der durch ausgeblendete verknüpfte Aktionen in der Tabellenaktionsspalte verursacht wurde ([#8646](https://github.com/nocobase/nocobase/pull/8646)) von @zhangzhonghe
  - Syntaxfehler beim Rendern von ungültigem Liquid in Markdown-Elementen behoben ([#8637](https://github.com/nocobase/nocobase/pull/8637)) von @katherinehhh
  - Unnötige Backend-Parsing-Anfragen für n-zu-m-Feldeigenschaften im Formularblock behoben. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) von @gchust
  - Problem behoben, bei dem `Action.Modal` nach einer Interaktion nicht geschlossen werden konnte ([#8642](https://github.com/nocobase/nocobase/pull/8642)) von @mytharcher
  - Fehlende Zahlenformatierung für Zahlenformelfelder und Datumsformateinstellungen für Datumsformelfelder behoben ([#8625](https://github.com/nocobase/nocobase/pull/8625)) von @katherinehhh
  - Unvollständige Darstellung des oberen Rahmens beim ersten Formularelement behoben ([#8623](https://github.com/nocobase/nocobase/pull/8623)) von @katherinehhh
  - Problem behoben, bei dem ein geleertes assoziiertes Anhangsfeld nach dem Absenden im Bearbeitungsformular nicht gespeichert wurde ([#8616](https://github.com/nocobase/nocobase/pull/8616)) von @katherinehhh
  - Falsch gefilterte Daten in der Assoziations-Dropdown-Liste behoben, wenn das Titelfeld ein Fremdschlüssel ist ([#8619](https://github.com/nocobase/nocobase/pull/8619)) von @katherinehhh
  - Problem behoben, dass ausgewählte Daten in der Datensatzauswahl-Feldkomponente nach der Bearbeitung nicht wiederhergestellt werden konnten ([#8610](https://github.com/nocobase/nocobase/pull/8610)) von @katherinehhh
  - Problem behoben, dass Feldkomponentenoptionen nicht in Echtzeit aktualisiert wurden, wenn das Assoziationsfeld das Muster wechselt ([#8611](https://github.com/nocobase/nocobase/pull/8611)) von @katherinehhh
- **[Utils]** Sicherheitsproblem der `formula.js`-Evaluierungs-Engine behoben ([#8416](https://github.com/nocobase/nocobase/pull/8416)) von @mytharcher
- **[KI-Mitarbeiter]**

  - Problem behoben, bei dem Zitationslinks aus KI-Websuchen nicht im Chatfenster angezeigt wurden ([#8651](https://github.com/nocobase/nocobase/pull/8651)) von @cgyrock
  - Fehler in den OpenAI-API-Parametern behoben ([#8633](https://github.com/nocobase/nocobase/pull/8633)) von @cgyrock
- **[Dateimanager]** Problem behoben, bei dem die Dateifeldkomponente den Auswahldialog trotz Deaktivierung öffnen konnte ([#8617](https://github.com/nocobase/nocobase/pull/8617)) von @katherinehhh
