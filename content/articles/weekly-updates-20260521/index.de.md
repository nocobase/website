---
title: "Wöchentliche Updates｜Kanban-Plugin unterstützt jetzt client-v2"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 14. bis 21. Mai 2026."
---

Fasse die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen findest du in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.55](https://www.nocobase.com/en/blog/v2.0.55)

*Veröffentlichungsdatum: 2026-05-18*

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]** Hinweis bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank ([#9497](https://github.com/nocobase/nocobase/pull/9497)) von @cgyrock
- **[KI: Wissensdatenbank]** Hinweis bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**

  - Ein Problem behoben, bei dem aktuelle Popup-Datensatzvariablen in Aktionsschalter-Ereignisflüssen nicht aufgelöst werden konnten. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) von @gchust
  - Ein Problem behoben, bei dem JS-Feldwerte in Unterformularen während der Formularübermittlung nicht korrekt gesetzt wurden. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) von @gchust
- **[Dateimanager]** Fehlerbehebung für `tx-cos`-Uploads im Dateimanager, bei denen die Metadaten zur Dateigröße fehlten. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) von @mytharcher
- **[Datenquelle: Haupt]** Problem behoben, bei dem Feldoptionen nach dem Synchronisieren von Feldern in das Schema geschrieben wurden ([#9505](https://github.com/nocobase/nocobase/pull/9505)) von @2013xile
- **[WEB-Client]** Bereinigt Blockdaten nach dem Entfernen von Menüs. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) von @gchust
- **[KI-Mitarbeiter]** Fehler beim Lesen von KI-Mitarbeiter-OSS-Dateien behoben ([#9493](https://github.com/nocobase/nocobase/pull/9493)) von @cgyrock
- **[Aktion: Datensätze importieren]** Problem behoben, bei dem importierte Datensätze in datumsähnlichen Feldern das falsche Datum anzeigten ([#9463](https://github.com/nocobase/nocobase/pull/9463)) von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Problem behoben, bei dem beim Exportieren eines Anhangs aus einem Anhang-URL-Feld ein Fehler ausgelöst wurde von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Zeitzonenbehandlung für Pro-XLSX-Importe behoben von @mytharcher

### [v2.0.53](https://www.nocobase.com/en/blog/v2.0.53)

*Veröffentlichungsdatum: 2026-05-14*

### 🚀 Verbesserungen

- **[Flow-Engine]** Eine Bestätigungsmeldung für nicht gespeicherte Änderungen hinzugefügt, wenn die Ereignisfluss-Konfigurationsseite mit ungespeicherten Daten geschlossen wird. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) von @gchust

### 🐛 Fehlerbehebungen

- **[Client]**

  - Verhindert das Öffnen der Schnellbearbeitung für Assoziationsfelder in Tabellen ([#9469](https://github.com/nocobase/nocobase/pull/9469)) von @katherinehhh
  - Problem behoben, bei dem schreibgeschützte Beziehungsfelder in Untertabellen nach dem Aktualisieren nicht angezeigt oder nicht anklickbar waren. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) von @jiannx
  - Problem behoben, bei dem Mehrfachauswahlfelder in v2-Datenblöcken Optionsbezeichnungen anstelle von Werten anzeigen sollten ([#9472](https://github.com/nocobase/nocobase/pull/9472)) von @katherinehhh
- **[Block: Mehrschritt-Formular]** Problem mit der Bildlaufleiste behoben, wenn die volle Höhe im v1-Schrittformularblock aktiviert ist ([#9468](https://github.com/nocobase/nocobase/pull/9468)) von @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.35](https://www.nocobase.com/en/blog/v2.1.0-beta.35)

*Veröffentlichungsdatum: 2026-05-20*

### 🚀 Verbesserungen

- **[Client]** Gemeinsame Bedingungsauswertung zwischen v1- und v2-Apps ([#9522](https://github.com/nocobase/nocobase/pull/9522)) von @zhangzhonghe
- **[Lokalisierung]** Verbesserte Lina-Lokalisierungsübersetzungsaufgaben mit Übersetzungsbereich, Referenzspracheinstellungen und Schnellbearbeitung ([#9521](https://github.com/nocobase/nocobase/pull/9521)) von @2013xile
- **[Workflow: Genehmigung]** Verbesserung verwandter Genehmigungen mit Zeitleistenkarten von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[undefined]** Nginx-Konfigurationspfade ausrichten ([#9528](https://github.com/nocobase/nocobase/pull/9528)) von @chenos
- **[cli-v1]** Fehlerbehebung für den Entwicklungsstart von create-nocobase-app durch Wiederverwendung gepackter App-Shells bei gleichzeitiger Aktivierung der lokalen Plugin-Entwicklung. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) von @Molunerfinn
- **[Client]**

  - Problem behoben, bei dem ein Menüabzeichen immer noch einen Punkt anzeigt, wenn sein Wert 0 ist ([#9491](https://github.com/nocobase/nocobase/pull/9491)) von @zhangzhonghe
  - Problem behoben, bei dem Filterformulare keine aktuellen Formularvariablen verwenden können ([#9474](https://github.com/nocobase/nocobase/pull/9474)) von @zhangzhonghe
- **[Authentifizierung]** Verhindert Serverabstürze, wenn ein WebSocket-Auth-Token auf einen Authentifikator verweist, dessen Auth-Typ-Plugin entladen oder fehlt. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) von @Molunerfinn
- **[Kalender]**

  - Problem behoben, bei dem weitere Kalenderelemente nicht vollständig angezeigt werden konnten ([#9492](https://github.com/nocobase/nocobase/pull/9492)) von @zhangzhonghe
  - Cursor-Stil für Ereigniselemente im Kalender-Overlay für weitere Ereignisse behoben ([#9519](https://github.com/nocobase/nocobase/pull/9519)) von @jiannx
- **[Lizenzeinstellungen]** Aufgelöste symbolisch verknüpfte gebündelte Abhängigkeiten ([#9518](https://github.com/nocobase/nocobase/pull/9518)) von @chenos

### [v2.1.0-beta.34](https://www.nocobase.com/en/blog/v2.1.0-beta.34)

*Veröffentlichungsdatum: 2026-05-19*

### 🎉 Neue Funktionen

- **[Block: Kanban]** Client-v2-Unterstützung für das Kanban-Plugin hinzugefügt ([#9475](https://github.com/nocobase/nocobase/pull/9475)) von @jiannx

### 🚀 Verbesserungen

- **[cli]** Verbesserte die Eingabeaufforderungserfahrung der NocoBase-CLI durch Migration von Setup- und Verwaltungsworkflows zu Inquirer und behobene damit verbundene Installations-, Skill- und Docker-Laufzeitprobleme. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) von @chenos
- **[KI-Mitarbeiter]** Hinweis bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank ([#9497](https://github.com/nocobase/nocobase/pull/9497)) von @cgyrock
- **[Benachrichtigungsmanager]** Warteschlangenstrategie geändert, um die Sendeleistung zu optimieren ([#9407](https://github.com/nocobase/nocobase/pull/9407)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Migration der Plugins block-workbench und workflow-custom-action-trigger zu Client v2, einschließlich ihrer Aktionsmodelle und QR-Scanner-Fluss. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) von @jiannx
- **[Authentifizierung]** Implementierung der Authentifikator-Einstellungsseite in Client-v2 und Auslieferung wiederverwendbarer Client-v2-Tabellen-, Variableneingabe- und Formular-Primitive. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) von @Molunerfinn
- **[KI: Wissensdatenbank]** Hinweis bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank von @cgyrock
- **[Auth: SAML 2.0]** Client-v2-Einträge für die CAS- und SAML-Authentifizierungs-Plugins hinzugefügt, damit sie mit der v2-Anmeldeseite und den Authentifikator-Einstellungen funktionieren. von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[Client-v2]**

  - Problem behoben, bei dem die v2-Route des Kanban-Plugins nicht geladen werden konnte, weil dnd-kit-Abhängigkeiten nicht vom Client bereitgestellt wurden. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) von @jiannx
  - Die gemeinsam genutzte v2-Tabellenkomponente zeigt jetzt standardmäßig den Seitenzahl-Auswähler an, entsprechend dem v1-Verhalten. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) von @Molunerfinn
- **[Client]**

  - Ein Problem behoben, bei dem JS-Feldwerte in Unterformularen während der Formularübermittlung nicht korrekt gesetzt wurden. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) von @gchust
  - Ein Problem behoben, bei dem aktuelle Popup-Datensatzvariablen in Aktionsschalter-Ereignisflüssen nicht aufgelöst werden konnten. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) von @gchust
- **[Flow-Engine]** Falsche Fehlermeldung in der Browser-Konsole behoben. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) von @gchust
- **[KI-Mitarbeiter]**

  - Problem behoben, bei dem Operator-Rollenberechtigungen in KI-Mitarbeiter-Knoten nicht wirksam wurden ([#9513](https://github.com/nocobase/nocobase/pull/9513)) von @cgyrock
  - Fehler beim Lesen von KI-Mitarbeiter-OSS-Dateien behoben ([#9493](https://github.com/nocobase/nocobase/pull/9493)) von @cgyrock
- **[API-Dokumentation]** API-Dokumentation für Sammlungen behoben, sodass Abfrageparameter sich nicht mehr gegenseitig stören ([#9442](https://github.com/nocobase/nocobase/pull/9442)) von @jiannx
- **[Datenquelle: Haupt]** Problem behoben, bei dem Feldoptionen nach dem Synchronisieren von Feldern in das Schema geschrieben wurden ([#9505](https://github.com/nocobase/nocobase/pull/9505)) von @2013xile
- **[Workflow: JavaScript]** Problem mit dem Laden des QuickJS-Laufzeitpakets für Workflow-JavaScript in Produktions-Builds behoben. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) von @mytharcher
- **[WEB-Client]** Bereinigt Blockdaten nach dem Entfernen von Menüs. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) von @gchust
- **[Aktion: Datensätze importieren]** Problem behoben, bei dem importierte Datensätze in datumsähnlichen Feldern das falsche Datum anzeigten ([#9463](https://github.com/nocobase/nocobase/pull/9463)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Zeitzonenbehandlung für Pro-XLSX-Importe behoben von @mytharcher
- **[Auth: SAML 2.0]** SAML-Auto-Weiterleitungs-Interceptor behoben, der das App-Shell flackern ließ und bei jeder Navigation doppelte Drawer öffnete. von @Molunerfinn
- **[Aktion: Datensätze exportieren Pro]** Problem behoben, bei dem beim Exportieren eines Anhangs aus einem Anhang-URL-Feld ein Fehler ausgelöst wurde von @mytharcher

### [v2.1.0-beta.33](https://www.nocobase.com/en/blog/v2.1.0-beta.33)

*Veröffentlichungsdatum: 2026-05-15*

### 🎉 Neue Funktionen

- **[Block: Markdown]** Client-v2-Unterstützung für Markdown-Blöcke hinzugefügt ([#9487](https://github.com/nocobase/nocobase/pull/9487)) von @jiannx
- **[Block: Liste]** Listenblöcke unterstützen Client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) von @jiannx
- **[Kalender]** Client-v2-Unterstützung für das Kalender-Plugin hinzugefügt. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) von @jiannx
- **[Block: Baum]** Client-v2-Unterstützung für den Baumfilterblock hinzugefügt. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) von @jiannx

### 🚀 Verbesserungen

- **[Flow-Engine]** Eine Bestätigungsmeldung für nicht gespeicherte Änderungen hinzugefügt, wenn die Ereignisfluss-Konfigurationsseite mit ungespeicherten Daten geschlossen wird. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) von @gchust
- **[Datenquellen-Manager]** Optimierung der Datenmodellierungs-API zur Unterstützung der Erstellung von Kommentarsammlungen mit KI, Konfiguration von Beziehungsfeldern für externe Datenquellen und Festlegung von Feldvalidierungsregeln ([#9480](https://github.com/nocobase/nocobase/pull/9480)) von @2013xile
- **[Block: GridCard]** Grid-Karten-Plugin zur Unterstützung von Client v2 aktualisiert ([#9484](https://github.com/nocobase/nocobase/pull/9484)) von @jiannx
- **[Block: iframe]** V2-Unterstützung für den iframe-Block hinzugefügt. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) von @jiannx
- **[KI-Mitarbeiter]** Interaktion und Leistungsoptimierung paralleler Gespräche von KI-Mitarbeitern ([#9462](https://github.com/nocobase/nocobase/pull/9462)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**

  - Die Einstellung "Nach erfolgreicher Übermittlung" für Formular-Sendeaktionen hinzugefügt. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) von @jiannx
  - Verhindert das Öffnen der Schnellbearbeitung für Assoziationsfelder in Tabellen ([#9469](https://github.com/nocobase/nocobase/pull/9469)) von @katherinehhh
  - Problem behoben, bei dem schreibgeschützte Beziehungsfelder in Untertabellen nach dem Aktualisieren nicht angezeigt oder nicht anklickbar waren. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) von @jiannx
  - Problem behoben, bei dem alte Standardwerteinstellungen nicht entfernt werden konnten. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) von @gchust
  - Problem behoben, bei dem Mehrfachauswahlfelder in v2-Datenblöcken Optionsbezeichnungen anstelle von Werten anzeigen sollten ([#9472](https://github.com/nocobase/nocobase/pull/9472)) von @katherinehhh
- **[Client-v2]**

  - Problem behoben, bei dem die Liste der Titelfeldoptionen für Beziehungsfelder in Tabellenblöcken leer ist ([#9490](https://github.com/nocobase/nocobase/pull/9490)) von @katherinehhh
  - Leere Gruppen nach dem Filtern von v1-Menüs im v2-Layout beibehalten ([#9478](https://github.com/nocobase/nocobase/pull/9478)) von @zhangzhonghe
- **[Flow-Engine]** Instabile Untermenüs für Beziehungsfelder in Untermodell-Menüs behoben ([#9417](https://github.com/nocobase/nocobase/pull/9417)) von @jiannx
- **[Dateimanager]** Fehlerbehebung für `tx-cos`-Uploads im Dateimanager, bei denen die Metadaten zur Dateigröße fehlten. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) von @mytharcher
- **[KI-Mitarbeiter]** Fehler beim Laden von plugin-ai behoben ([#9483](https://github.com/nocobase/nocobase/pull/9483)) von @cgyrock
- **[Block: Mehrschritt-Formular]** Problem mit der Bildlaufleiste behoben, wenn die volle Höhe im v1-Schrittformularblock aktiviert ist ([#9468](https://github.com/nocobase/nocobase/pull/9468)) von @katherinehhh
- **[Workflow: Webhook]** Problem behoben, bei dem das Erstellen eines Antwortknotens durch die Validierung der `statusCode`-Konfiguration abgefangen wurde von @mytharcher
- **[Sammlungsfeld: Signatur]** Problem mit der Anzeige des Signaturfelds auf mobilen Geräten behoben von @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.39](https://www.nocobase.com/en/blog/v2.1.0-alpha.39)

*Veröffentlichungsdatum: 2026-05-20*

### 🎉 Neue Funktionen

- **[Block: Kanban]** Client-v2-Unterstützung für das Kanban-Plugin hinzugefügt ([#9475](https://github.com/nocobase/nocobase/pull/9475)) von @jiannx

### 🚀 Verbesserungen

- **[Client]** Gemeinsame Bedingungsauswertung zwischen v1- und v2-Apps ([#9522](https://github.com/nocobase/nocobase/pull/9522)) von @zhangzhonghe
- **[Lokalisierung]** Verbesserte Lina-Lokalisierungsübersetzungsaufgaben mit Übersetzungsbereich, Referenzspracheinstellungen und Schnellbearbeitung ([#9521](https://github.com/nocobase/nocobase/pull/9521)) von @2013xile
- **[KI-Mitarbeiter]** Hinweis bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank ([#9497](https://github.com/nocobase/nocobase/pull/9497)) von @cgyrock
- **[Benachrichtigungsmanager]** Warteschlangenstrategie geändert, um die Sendeleistung zu optimieren ([#9407](https://github.com/nocobase/nocobase/pull/9407)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Migration der Plugins block-workbench und workflow-custom-action-trigger zu Client v2, einschließlich ihrer Aktionsmodelle und QR-Scanner-Fluss. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) von @jiannx
- **[Authentifizierung]** Implementierung der Authentifikator-Einstellungsseite in Client-v2 und Auslieferung wiederverwendbarer Client-v2-Tabellen-, Variableneingabe- und Formular-Primitive. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) von @Molunerfinn
- **[KI: Wissensdatenbank]** Hinweis bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank von @cgyrock
- **[Auth: SAML 2.0]** Client-v2-Einträge für die CAS- und SAML-Authentifizierungs-Plugins hinzugefügt, damit sie mit der v2-Anmeldeseite und den Authentifikator-Einstellungen funktionieren. von @Molunerfinn
- **[Workflow: Genehmigung]** Verbesserung verwandter Genehmigungen mit Zeitleistenkarten von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[undefined]** Nginx-Konfigurationspfade ausrichten ([#9528](https://github.com/nocobase/nocobase/pull/9528)) von @chenos
- **[cli-v1]** Fehlerbehebung für den Entwicklungsstart von create-nocobase-app durch Wiederverwendung gepackter App-Shells bei gleichzeitiger Aktivierung der lokalen Plugin-Entwicklung. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) von @Molunerfinn
- **[Client]**

  - Problem behoben, bei dem Filterformulare keine aktuellen Formularvariablen verwenden können ([#9474](https://github.com/nocobase/nocobase/pull/9474)) von @zhangzhonghe
  - Problem behoben, bei dem ein Menüabzeichen immer noch einen Punkt anzeigt, wenn sein Wert 0 ist ([#9491](https://github.com/nocobase/nocobase/pull/9491)) von @zhangzhonghe
- **[Client-v2]**

  - Die gemeinsam genutzte v2-Tabellenkomponente zeigt jetzt standardmäßig den Seitenzahl-Auswähler an, entsprechend dem v1-Verhalten. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) von @Molunerfinn
  - Problem behoben, bei dem die v2-Route des Kanban-Plugins nicht geladen werden konnte, weil dnd-kit-Abhängigkeiten nicht vom Client bereitgestellt wurden. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) von @jiannx
- **[Kalender]**

  - Cursor-Stil für Ereigniselemente im Kalender-Overlay für weitere Ereignisse behoben ([#9519](https://github.com/nocobase/nocobase/pull/9519)) von @jiannx
  - Problem behoben, bei dem weitere Kalenderelemente nicht vollständig angezeigt werden konnten ([#9492](https://github.com/nocobase/nocobase/pull/9492)) von @zhangzhonghe
- **[Lizenzeinstellungen]** Aufgelöste symbolisch verknüpfte gebündelte Abhängigkeiten ([#9518](https://github.com/nocobase/nocobase/pull/9518)) von @chenos
- **[KI-Mitarbeiter]**

  - Problem behoben, bei dem Operator-Rollenberechtigungen in KI-Mitarbeiter-Knoten nicht wirksam wurden ([#9513](https://github.com/nocobase/nocobase/pull/9513)) von @cgyrock
  - Fehler beim Lesen von KI-Mitarbeiter-OSS-Dateien behoben ([#9493](https://github.com/nocobase/nocobase/pull/9493)) von @cgyrock
- **[Authentifizierung]** Verhindert Serverabstürze, wenn ein WebSocket-Auth-Token auf einen Authentifikator verweist, dessen Auth-Typ-Plugin entladen oder fehlt. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) von @Molunerfinn
- **[API-Dokumentation]** API-Dokumentation für Sammlungen behoben, sodass Abfrageparameter sich nicht mehr gegenseitig stören ([#9442](https://github.com/nocobase/nocobase/pull/9442)) von @jiannx
- **[Datenquelle: Haupt]** Problem behoben, bei dem Feldoptionen nach dem Synchronisieren von Feldern in das Schema geschrieben wurden ([#9505](https://github.com/nocobase/nocobase/pull/9505)) von @2013xile
- **[Auth: SAML 2.0]** SAML-Auto-Weiterleitungs-Interceptor behoben, der das App-Shell flackern ließ und bei jeder Navigation doppelte Drawer öffnete. von @Molunerfinn

### [v2.1.0-alpha.38](https://www.nocobase.com/en/blog/v2.1.0-alpha.38)

*Veröffentlichungsdatum: 2026-05-18*

### 🐛 Fehlerbehebungen

- **[Client]**

  - Ein Problem behoben, bei dem aktuelle Popup-Datensatzvariablen in Aktionsschalter-Ereignisflüssen nicht aufgelöst werden konnten. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) von @gchust
  - Ein Problem behoben, bei dem JS-Feldwerte in Unterformularen während der Formularübermittlung nicht korrekt gesetzt wurden. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) von @gchust
- **[Flow-Engine]** Falsche Fehlermeldung in der Browser-Konsole behoben. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) von @gchust
- **[Workflow: JavaScript]** Problem mit dem Laden des QuickJS-Laufzeitpakets für Workflow-JavaScript in Produktions-Builds behoben. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) von @mytharcher
- **[Aktion: Datensätze importieren]** Problem behoben, bei dem importierte Datensätze in datumsähnlichen Feldern das falsche Datum anzeigten ([#9463](https://github.com/nocobase/nocobase/pull/9463)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Zeitzonenbehandlung für Pro-XLSX-Importe behoben von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Problem behoben, bei dem beim Exportieren eines Anhangs aus einem Anhang-URL-Feld ein Fehler ausgelöst wurde von @mytharcher

### [v2.1.0-alpha.37](https://www.nocobase.com/en/blog/v2.1.0-alpha.37)

*Veröffentlichungsdatum: 2026-05-17*

### 🐛 Fehlerbehebungen

- **[WEB-Client]** Bereinigt Blockdaten nach dem Entfernen von Menüs. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) von @gchust

### [v2.1.0-alpha.36](https://www.nocobase.com/en/blog/v2.1.0-alpha.36)

*Veröffentlichungsdatum: 2026-05-16*

### 🎉 Neue Funktionen

- **[Block: Markdown]** Client-v2-Unterstützung für Markdown-Blöcke hinzugefügt ([#9487](https://github.com/nocobase/nocobase/pull/9487)) von @jiannx
- **[Block: Liste]** Listenblöcke unterstützen Client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) von @jiannx

### 🚀 Verbesserungen

- **[Flow-Engine]** Eine Bestätigungsmeldung für nicht gespeicherte Änderungen hinzugefügt, wenn die Ereignisfluss-Konfigurationsseite mit ungespeicherten Daten geschlossen wird. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) von @gchust
- **[cli]** Verbesserte die Eingabeaufforderungserfahrung der NocoBase-CLI durch Migration von Setup- und Verwaltungsworkflows zu Inquirer und behobene damit verbundene Installations-, Skill- und Docker-Laufzeitprobleme. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) von @chenos
- **[Datenquellen-Manager]** Optimierung der Datenmodellierungs-API zur Unterstützung der Erstellung von Kommentarsammlungen mit KI, Konfiguration von Beziehungsfeldern für externe Datenquellen und Festlegung von Feldvalidierungsregeln ([#9480](https://github.com/nocobase/nocobase/pull/9480)) von @2013xile
- **[Block: GridCard]** Grid-Karten-Plugin zur Unterstützung von Client v2 aktualisiert ([#9484](https://github.com/nocobase/nocobase/pull/9484)) von @jiannx
- **[Block: iframe]** V2-Unterstützung für den iframe-Block hinzugefügt. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) von @jiannx

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem schreibgeschützte Beziehungsfelder in Untertabellen nach dem Aktualisieren nicht angezeigt oder nicht anklickbar waren. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) von @jiannx
  - Die Einstellung "Nach erfolgreicher Übermittlung" für Formular-Sendeaktionen hinzugefügt. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) von @jiannx
- **[Client-v2]** Problem behoben, bei dem die Liste der Titelfeldoptionen für Beziehungsfelder in Tabellenblöcken leer ist ([#9490](https://github.com/nocobase/nocobase/pull/9490)) von @katherinehhh
- **[Flow-Engine]** Instabile Untermenüs für Beziehungsfelder in Untermodell-Menüs behoben ([#9417](https://github.com/nocobase/nocobase/pull/9417)) von @jiannx
- **[Dateimanager]** Fehlerbehebung für `tx-cos`-Uploads im Dateimanager, bei denen die Metadaten zur Dateigröße fehlten. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) von @mytharcher
- **[Sammlungsfeld: Signatur]** Problem mit der Anzeige des Signaturfelds auf mobilen Geräten behoben von @chenzhizdt

### [v2.1.0-alpha.35](https://www.nocobase.com/en/blog/v2.1.0-alpha.35)

*Veröffentlichungsdatum: 2026-05-14*

### 🎉 Neue Funktionen

- **[undefined]** Hinzufügen eines neuen KI-Mitarbeiters, Lokalisierungsingenieur Lina, zur Unterstützung bei Lokalisierungsübersetzungsaufgaben ([#9434](https://github.com/nocobase/nocobase/pull/9434)) von @2013xile
  Referenz: [Lokalisierungsverwaltung](https://docs.nocobase.com/system-management/localization)<br>[Lina: Lokalisierungsingenieur](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Verwenden Sie Lina und lokales HY-MT1.5-1.8B zur Übersetzung von Lokalisierungseinträgen](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Kalender]** Client-v2-Unterstützung für das Kalender-Plugin hinzugefügt. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) von @jiannx
- **[Block: Baum]** Client-v2-Unterstützung für den Baumfilterblock hinzugefügt. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) von @jiannx
- **[Dateispeicher: S3(Pro)]** Unterstützung zum Hochladen von Dateien über den S3 Pro-Speicher im v2-Dateimanager. von @Molunerfinn

### 🚀 Verbesserungen

- **[Build]** Regressionstests hinzugefügt, um zu verhindern, dass `deleteServerFiles` die Build-Artefakte von `client` und `client-v2` über Windows- und POSIX-Pfade hinweg entfernt. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) von @Molunerfinn
- **[Client]** Bereits assoziierte Datensätze im Assoziationsauswahldialog von Eins-zu-Viele-Tabellenblöcken ausschließen ([#9448](https://github.com/nocobase/nocobase/pull/9448)) von @katherinehhh
- **[KI-Mitarbeiter]** Interaktion und Leistungsoptimierung paralleler Gespräche von KI-Mitarbeitern ([#9462](https://github.com/nocobase/nocobase/pull/9462)) von @cgyrock
- **[Dateimanager]** Drittanbieter-Speicher-Plugins können jetzt ihr eigenes Speichertyp-Formular auf der v2-Einstellungsseite des Dateimanagers registrieren. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) von @Molunerfinn
- **[KI: Wissensdatenbank]** Die eindeutige Kennung für eine Wissensdatenbank ist zum Zeitpunkt der Erstellung konfigurierbar von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**

  - Verhindert das Öffnen der Schnellbearbeitung für Assoziationsfelder in Tabellen ([#9469](https://github.com/nocobase/nocobase/pull/9469)) von @katherinehhh
  - Problem behoben, bei dem Mehrfachauswahlfelder in v2-Datenblöcken Optionsbezeichnungen anstelle von Werten anzeigen sollten ([#9472](https://github.com/nocobase/nocobase/pull/9472)) von @katherinehhh
  - Doppelte Tabellenanfragen behoben, wenn Filterformulare Standardwerte haben ([#9423](https://github.com/nocobase/nocobase/pull/9423)) von @zhangzhonghe
  - Problem behoben, bei dem alte Standardwerteinstellungen nicht entfernt werden konnten. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) von @gchust
  - Problem behoben, bei dem Optionen für das Auswahlfeld einer Assoziation nicht ausgewählt werden konnten. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) von @gchust
  - Problem behoben, bei dem Systemeinstellungen nach dem Absenden leer erscheinen ([#9458](https://github.com/nocobase/nocobase/pull/9458)) von @zhangzhonghe
  - Ein Problem behoben, bei dem der Datenbereich des Zielblocks falsch gesetzt wurde, wenn Zeilendaten in einem Tabellenblock-Ereignisfluss abgewählt wurden. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) von @gchust
  - Fehler beim Ändern des Titelfelds eines Assoziationsfelds im v2-Tabellenblock behoben ([#9451](https://github.com/nocobase/nocobase/pull/9451)) von @katherinehhh
  - V2-Verknüpfungsregeln behoben, um die Einstellung auswählbarer Optionen für Felder zu unterstützen ([#9399](https://github.com/nocobase/nocobase/pull/9399)) von @jiannx
- **[Client-v2]**

  - Leere Gruppen nach dem Filtern von v1-Menüs im v2-Layout beibehalten ([#9478](https://github.com/nocobase/nocobase/pull/9478)) von @zhangzhonghe
  - Problem behoben, bei dem die Seite hinter dem Plugin-Aktivierungsdialog leer wird ([#9455](https://github.com/nocobase/nocobase/pull/9455)) von @zhangzhonghe
  - Abstürze von v1-Adminseiten behoben, wenn sie in Produktions-Builds auf v2-Plugin-Module verweisen. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) von @Molunerfinn
- **[cli-v1]** Fehler beim Entwicklungsstart in Apps behoben, die mit create-nocobase-app erstellt wurden, verursacht durch die Auflösung des app-dev-Client-Pfads. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) von @Molunerfinn
- **[Server]** fix(file-manager): Erzwingen des Downloads von aktiven Inhaltsdateien im lokalen/öffentlichen Speicher ([#9437](https://github.com/nocobase/nocobase/pull/9437)) von @mytharcher
- **[KI-Mitarbeiter]**

  - Fehler beim Laden von plugin-ai behoben ([#9483](https://github.com/nocobase/nocobase/pull/9483)) von @cgyrock
  - Problem behoben, bei dem der Ollama-Testflug eine Schlüsseleingabe erforderte ([#9450](https://github.com/nocobase/nocobase/pull/9450)) von @cgyrock
- **[Block: Mehrschritt-Formular]** Problem mit der Bildlaufleiste behoben, wenn die volle Höhe im v1-Schrittformularblock aktiviert ist ([#9468](https://github.com/nocobase/nocobase/pull/9468)) von @katherinehhh
- **[Abteilungen]** Übersetzungskonflikt zwischen den Schaltflächen "Benutzer hinzufügen" und "Abteilung hinzufügen" in den Benutzer- & Berechtigungseinstellungen behoben ([#9456](https://github.com/nocobase/nocobase/pull/9456)) von @katherinehhh
- **[Workflow]** fix: Hilfetext in FlowModel-Workflow-Bindungsdialogen für Operations- und benutzerdefinierte Aktionsereignisse wiederhergestellt ([#9447](https://github.com/nocobase/nocobase/pull/9447)) von @mytharcher
- **[Block: Markdown]** Problem behoben, bei dem der v2-Markdown-Block Fehler meldete ([#9440](https://github.com/nocobase/nocobase/pull/9440)) von @zhangzhonghe
- **[Workflow: Webhook]** Problem behoben, bei dem das Erstellen eines Antwortknotens durch die Validierung der `statusCode`-Konfiguration abgefangen wurde von @mytharcher
- **[Workflow: Genehmigung]**

  - Layout des Genehmigungsformulars auf mobilen Geräten behoben von @zhangzhonghe
  - Doppelten Genehmigungsdatensatzindex bei der Delegierung von Genehmigungsaufgaben behoben. von @mytharcher
- **[Backup-Manager]** Ein Problem behoben, bei dem Backups mit einem Fehler fehlschlugen, wenn Dateien nicht gefunden werden konnten. von @gchust
