---
title: "NocoBase wöchentliche Updates: Zwei-Faktor-Authentifizierung (2FA)"
description: "Die Updates dieser Woche umfassen: Kompatibilität mit historischen Button-Zugriffssteuerungseinstellungen, KI-Integrations-Plugin und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**Diese Woche haben wir [NocoBase 1.6.0](https://www.nocobase.com/en/blog/nocobase-1-6-0) veröffentlicht, das Cluster-Modus-Bereitstellung, Sicherheitsrichtlinien-Optimierung, Migration-Manager-Kernoptimierungen und viele weitere neue Funktionen bringt.**

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die stabilste Version bis heute, empfohlen für die Installation;
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es könnte einige bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technisch versierte Nutzer, die sich für die neuesten Entwicklungen des Produkts interessieren, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.21](https://www.nocobase.com/en/blog/v1.5.21)

*Veröffentlichungsdatum: 05.03.2025*

#### 🚀 Verbesserungen

- **[Workflow]** Lazy Load des Auftragsergebnisses für bessere Leistung ([#6344](https://github.com/nocobase/nocobase/pull/6344)) von @mytharcher
- **[Workflow: Aggregat-Knoten]** Rundungsprozess für aggregierte Zahlen basierend auf dem Double-Typ hinzugefügt ([#6358](https://github.com/nocobase/nocobase/pull/6358)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Unterformularkomponenten richten sich nicht am Hauptformular aus, wenn das Label ausgeblendet ist ([#6357](https://github.com/nocobase/nocobase/pull/6357)) von @katherinehhh
  - Assoziationsblock wird im Popup innerhalb der Sammlungsvererbung nicht gerendert ([#6303](https://github.com/nocobase/nocobase/pull/6303)) von @katherinehhh
  - Fehler beim Erstellen einer Dateisammlung behoben ([#6363](https://github.com/nocobase/nocobase/pull/6363)) von @mytharcher
- **[Workflow]** ACL für das Abrufen von Aufträgen behoben ([#6352](https://github.com/nocobase/nocobase/pull/6352)) von @mytharcher

### [v1.5.22](https://www.nocobase.com/en/blog/v1.5.22)

*Veröffentlichungsdatum: 06.03.2025*

#### 🚀 Verbesserungen

- **[client]** Entprellungsbehandlung für Schaltflächen hinzugefügt ([#6351](https://github.com/nocobase/nocobase/pull/6351)) von @Cyx649312038

#### 🐛 Fehlerbehebungen

- **[database]** Fehler beim Abrufen von Beziehungssammlungsdatensätzen behoben, wenn der Quellschlüssel in Beziehungsfeldern ein numerischer String ist ([#6360](https://github.com/nocobase/nocobase/pull/6360)) von @2013xile

### [v1.5.23](https://www.nocobase.com/en/blog/v1.5.23)

*Veröffentlichungsdatum: 06.03.2025*

#### 🐛 Fehlerbehebungen

- **[client]**
  - Zeitzonenbezogenes Problem, das eine Stunde weniger in der Datumsauswahl verursacht ([#6359](https://github.com/nocobase/nocobase/pull/6359)) von @katherinehhh
  - Fehlende Sortiereinstellung für geerbte Sammlungsfelder ([#6372](https://github.com/nocobase/nocobase/pull/6372)) von @katherinehhh

### [v1.5.24](https://www.nocobase.com/en/blog/v1.5.24)

*Veröffentlichungsdatum: 07.03.2025*

#### 🎉 Neue Funktionen

- **[Datenvisualisierung]** Unterstützung für NULLS-Sortierung in Diagrammabfragen ([#6383](https://github.com/nocobase/nocobase/pull/6383)) von @2013xile

#### 🚀 Verbesserungen

- **[Workflow]** Überspringen der Auslösung des Sammlungs-Workflows bei Datenbankereignissen erlauben ([#6379](https://github.com/nocobase/nocobase/pull/6379)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Aktion: Datensätze importieren Pro]** Zusätzliche Option verwenden, um zu bestimmen, ob der Workflow ausgelöst werden soll oder nicht von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Pro-Export-Aktion fehlende Sortierparameter von @katherinehhh

### [v1.5.25](https://www.nocobase.com/en/blog/v1.5.25)

*Veröffentlichungsdatum: 09.03.2025*

#### 🐛 Fehlerbehebungen

- **[server]** Falscher Browser-Cache nach Ausführung des `yarn start`-Befehls ([#6394](https://github.com/nocobase/nocobase/pull/6394)) von @gchust
- **[Workflow: Genehmigung]** Vermeidung, dass eine falsche Konfiguration der Bearbeiter alle Benutzer abfragt von @mytharcher
- **[WeCom]** Login-Prompt-Link und DingTalk-Login-Fehler behoben von @chenzhizdt

### [v1.6.1](https://www.nocobase.com/en/blog/v1.6.1)

*Veröffentlichungsdatum: 11.03.2025*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Bei Verwendung des '$anyOf'-Operators ist die Verknüpfungsregel ungültig ([#6415](https://github.com/nocobase/nocobase/pull/6415)) von @zhangzhonghe
  - Daten werden in Popup-Fenstern, die über Link-Schaltflächen geöffnet werden, nicht aktualisiert ([#6411](https://github.com/nocobase/nocobase/pull/6411)) von @zhangzhonghe
  - Mehrfachauswahl-Feldwertänderungen und Optionsverlust beim Löschen von Untertabelle-Datensätzen ([#6405](https://github.com/nocobase/nocobase/pull/6405)) von @katherinehhh
- **[Benachrichtigung: In-App-Nachricht]** Unterscheidung der Hintergrundfarbe der In-App-Nachrichtenliste von den Nachrichtenkarten zur Verbesserung der visuellen Hierarchie und Lesbarkeit. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) von @sheldon66

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.17](https://www.nocobase.com/en/blog/v1.6.0-beta.17)

*Veröffentlichungsdatum: 07.03.2025*

#### 🎉 Neue Funktionen

- **[client]** Tooltip-Konfiguration für Menüpunkte und Tabellenkopfzeilen hinzugefügt ([#6346](https://github.com/nocobase/nocobase/pull/6346)) von @Cyx649312038
- **[Datenvisualisierung]** Unterstützung für NULLS-Sortierung in Diagrammabfragen ([#6383](https://github.com/nocobase/nocobase/pull/6383)) von @2013xile
- **[KI-Integration]** Neues Plugin: KI-Integration ([#6283](https://github.com/nocobase/nocobase/pull/6283)) von @2013xile
  Referenz: [KI-Integration](https://docs.nocobase.com/handbook/ai/service)
- **[KI-Integration (EE)]** Neues Plugin: KI-Integration (EE) von @2013xile
  Referenz: [KI-Integration](https://docs.nocobase.com/handbook/ai/service)

#### 🚀 Verbesserungen

- **[client]**

  - Entprellungsbehandlung für Schaltflächen hinzugefügt ([#6351](https://github.com/nocobase/nocobase/pull/6351)) von @Cyx649312038
  - Menü reagiert auf Bildschirmbreite ([#6331](https://github.com/nocobase/nocobase/pull/6331)) von @zhangzhonghe
- **[Workflow]** Überspringen der Auslösung des Sammlungs-Workflows bei Datenbankereignissen erlauben ([#6379](https://github.com/nocobase/nocobase/pull/6379)) von @mytharcher
- **[Workflow: Aggregat-Knoten]** Rundungsprozess für aggregierte Zahlen basierend auf dem Double-Typ hinzugefügt ([#6358](https://github.com/nocobase/nocobase/pull/6358)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Unterstützung erweiterter Optionen im Pro-Import-Button von @katherinehhh
- **[Workflow: JavaScript]** Unterstützung zum Anfordern von Paketen aus absolutem Pfad von @mytharcher
- **[Dateispeicher: S3(Pro)]** Versuche, Speicher neu zu laden, wenn der Speicher nicht gefunden wird von @jiannx

#### 🐛 Fehlerbehebungen

- **[client]**

  - Benutzerdefinierte Übersetzung des Menütitels ist ungültig ([#6377](https://github.com/nocobase/nocobase/pull/6377)) von @zhangzhonghe
  - Zeitzonenbezogenes Problem, das eine Stunde weniger in der Datumsauswahl verursacht ([#6359](https://github.com/nocobase/nocobase/pull/6359)) von @katherinehhh
  - Fehlende Sortiereinstellung für geerbte Sammlungsfelder ([#6372](https://github.com/nocobase/nocobase/pull/6372)) von @katherinehhh
  - Dropdown für Anhangs-Feldspeichereinstellung zeigt keine Optionen an ([#6365](https://github.com/nocobase/nocobase/pull/6365)) von @katherinehhh
  - Unterformularkomponenten richten sich nicht am Hauptformular aus, wenn das Label ausgeblendet ist ([#6357](https://github.com/nocobase/nocobase/pull/6357)) von @katherinehhh
  - Assoziationsblock wird im Popup innerhalb der Sammlungsvererbung nicht gerendert ([#6303](https://github.com/nocobase/nocobase/pull/6303)) von @katherinehhh
  - Bildlaufleistenproblem beim Öffnen eines Seiten-Tabs mit einem Block in voller Höhe behoben ([#6347](https://github.com/nocobase/nocobase/pull/6347)) von @katherinehhh
  - Fehler beim Erstellen einer Dateisammlung behoben ([#6363](https://github.com/nocobase/nocobase/pull/6363)) von @mytharcher
- **[database]** Fehler beim Abrufen von Beziehungssammlungsdatensätzen behoben, wenn der Quellschlüssel in Beziehungsfeldern ein numerischer String ist ([#6360](https://github.com/nocobase/nocobase/pull/6360)) von @2013xile
- **[WEB client]**

  - Hinzufügen von Tab-Seiten in der Routenverwaltungstabelle wird nicht wirksam ([#6362](https://github.com/nocobase/nocobase/pull/6362)) von @zhangzhonghe
  - Nach dem Hinzufügen einer Seite zur Routentabelle erscheint die Seite leer ([#6366](https://github.com/nocobase/nocobase/pull/6366)) von @zhangzhonghe
- **[Benutzer]**

  - "Keine Berechtigungen"-Fehler, wenn Benutzer ohne Benutzerverwaltungsberechtigungen ihr eigenes Profil anzeigen ([#6382](https://github.com/nocobase/nocobase/pull/6382)) von @2013xile
  - "Keine Berechtigungen"-Fehler beim Aktualisieren von Systemeinstellungen in der Benutzerverwaltung ([#6380](https://github.com/nocobase/nocobase/pull/6380)) von @2013xile
- **[Zugriffskontrolle]** In der Berechtigungsverwaltungstabelle ist der Tab-Seitenname leer ([#6364](https://github.com/nocobase/nocobase/pull/6364)) von @zhangzhonghe
- **[KI-Integration]** Problem, bei dem die standardmäßige `baseURL` für den LLM-Anbieter `undefined` ist ([#6367](https://github.com/nocobase/nocobase/pull/6367)) von @2013xile
- **[Workflow]** ACL für das Abrufen von Aufträgen behoben ([#6352](https://github.com/nocobase/nocobase/pull/6352)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Locale und Sammlung nach Ausführung als änderbar behoben von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Zusätzliche Option verwenden, um zu bestimmen, ob der Workflow ausgelöst werden soll oder nicht von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Pro-Export-Aktion fehlende Sortierparameter von @katherinehhh

### [v1.6.0-beta.18](https://www.nocobase.com/en/blog/v1.6.0-beta.18)

*Veröffentlichungsdatum: 10.03.2025*

#### 🚀 Verbesserungen

- **[Auth: API-Schlüssel]** Token-Sicherheitskonfigurationstest für die API-Schlüsselauthentifizierung hinzugefügt. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) von @sheldon66

#### 🐛 Fehlerbehebungen

- **[server]** Falscher Browser-Cache nach Ausführung des `yarn start`-Befehls ([#6394](https://github.com/nocobase/nocobase/pull/6394)) von @gchust
- **[auth]** Behandlung eines nicht existierenden Benutzers mit 401-Fehler und Aktualisierung der Locale-Nachrichten ([#6381](https://github.com/nocobase/nocobase/pull/6381)) von @sheldon66
- **[WEB client]** Die Seite ist nach dem Wechsel der Rollen leer ([#6388](https://github.com/nocobase/nocobase/pull/6388)) von @aaaaaajie
- **[Theme-Editor]** Themenwechsel schlägt nach mehreren aufeinanderfolgenden Wechseln fehl ([#6387](https://github.com/nocobase/nocobase/pull/6387)) von @katherinehhh
- **[Workflow: Genehmigung]**

  - Bestellparameter beim Hinzufügen von Bearbeitern behoben von @mytharcher
  - Vermeidung, dass eine falsche Konfiguration der Bearbeiter alle Benutzer abfragt von @mytharcher
- **[WeCom]** Login-Prompt-Link und DingTalk-Login-Fehler behoben von @chenzhizdt

### [v1.7.0-beta.1](https://www.nocobase.com/en/blog/v1.7.0-beta.1)

*Veröffentlichungsdatum: 11.03.2025*

#### 🎉 Neue Funktionen

- **[client]** Kompatibilität mit historischen Schaltflächen-Zugriffskontrolleinstellungen ([#6376](https://github.com/nocobase/nocobase/pull/6376)) von @katherinehhh
- **[Workflow: Nach-Aktions-Ereignis]** Unterstützung zur Verwendung des Endknotens zur Statusbestimmung ([#6399](https://github.com/nocobase/nocobase/pull/6399)) von @mytharcher
- **[Workflow: Antwortnachricht]** Unterstützung zur Verwendung im Aktions-Trigger von @mytharcher

#### 🚀 Verbesserungen

- **[Workflow]** API 401 behoben, wenn nicht eingeloggt ([#6412](https://github.com/nocobase/nocobase/pull/6412)) von @mytharcher
- **[Workflow: Manueller Knoten]** UI des Workflow-Aufgabenzentrums angepasst ([#6272](https://github.com/nocobase/nocobase/pull/6272)) von @mytharcher
- **[E-Mail-Manager]** Verwendung derselben Elementstruktur und desselben Stils global für die Toolbar-Schaltfläche von @mytharcher
- **[Workflow: Genehmigung]** UI des Aufgabenzentrums angepasst von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Seite kann nicht in eine Gruppe verschoben werden ([#6413](https://github.com/nocobase/nocobase/pull/6413)) von @zhangzhonghe
  - Menüs auf tieferen Ebenen zeigen kein Symbol an ([#6410](https://github.com/nocobase/nocobase/pull/6410)) von @zhangzhonghe
  - FormDrawer-Theme-Kontextproblem ([#6403](https://github.com/nocobase/nocobase/pull/6403)) von @katherinehhh
- **[Workflow: Manueller Knoten]** Konflikt bei eindeutigem Schlüssel vermeiden ([#6407](https://github.com/nocobase/nocobase/pull/6407)) von @mytharcher
- **[Datenquellen-Manager]** Fehler beim Bearbeiten von Feldern in externen Datenquellen ([#6402](https://github.com/nocobase/nocobase/pull/6402)) von @katherinehhh
- **[Authentifizierung]** Benutzer ohne Rollen sollten zur Fehlermeldungsseite weitergeleitet werden. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) von @sheldon66
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Fehlende Verknüpfungsregelkonfiguration für die Schaltfläche 'Workflow auslösen' von @katherinehhh
- **[Backup-Manager]** Fehlende Verschlüsselungsschlüsseldaten während der Backup-Wiederherstellung von @gchust
- **[Workflow: Genehmigung]** Konflikt bei eindeutigem Schlüssel vermeiden von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.30](https://www.nocobase.com/en/blog/v1.6.0-alpha.30)

*Veröffentlichungsdatum: 07.03.2025*

#### 🎉 Neue Funktionen

- **[client]**

  - Tooltip-Konfiguration für Menüpunkte und Tabellenkopfzeilen hinzugefügt ([#6346](https://github.com/nocobase/nocobase/pull/6346)) von @Cyx649312038
  - Zeitfeld unterstützt Zeitformat ([#6329](https://github.com/nocobase/nocobase/pull/6329)) von @katherinehhh
- **[Datenvisualisierung]** Unterstützung für NULLS-Sortierung in Diagrammabfragen ([#6383](https://github.com/nocobase/nocobase/pull/6383)) von @2013xile
- **[KI-Integration]** Neues Plugin: KI-Integration ([#6283](https://github.com/nocobase/nocobase/pull/6283)) von @2013xile
  Referenz: [KI-Integration](https://docs.nocobase.com/handbook/ai/service)
- **[Verifizierung]** Unterstützung der Benutzerbindung verschiedener Verifizierungstypen, wie SMS und TOTP-Authentifikatoren, und Identitätsverifizierung in erforderlichen Szenarien. Ermöglicht die Entwicklung und Erweiterung von Verifizierungsmethoden. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) von @2013xile
  Referenz: [Verifizierung](https://docs.nocobase.com/handbook/verification)
- **[KI-Integration (EE)]** Neues Plugin: KI-Integration (EE) von @2013xile
  Referenz: [KI-Integration](https://docs.nocobase.com/handbook/ai/service)
- **[Zwei-Faktor-Authentifizierung (2FA)]** Neue Plugins: Zwei-Faktor-Authentifizierung und Verifizierung: TOTP-Authentifikator von @2013xile
  Referenz: [Zwei-Faktor-Authentifizierung (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verifizierung: TOTP-Authentifikator](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Verbesserungen

- **[client]**

  - Entprellungsbehandlung für Schaltflächen hinzugefügt ([#6351](https://github.com/nocobase/nocobase/pull/6351)) von @Cyx649312038
  - Menü reagiert auf Bildschirmbreite ([#6331](https://github.com/nocobase/nocobase/pull/6331)) von @zhangzhonghe
- **[server]** Upgrade von koa auf 2.15.4; Upgrade von @koa/cors auf 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) von @2013xile
- **[Workflow]**

  - Überspringen der Auslösung des Sammlungs-Workflows bei Datenbankereignissen erlauben ([#6379](https://github.com/nocobase/nocobase/pull/6379)) von @mytharcher
  - Lazy Load des Auftragsergebnisses für bessere Leistung ([#6344](https://github.com/nocobase/nocobase/pull/6344)) von @mytharcher
- **[Block: Vorlage]** Unterstützung zum Speichern eines Datenblocks als Blockvorlage von einer Seite ([#6348](https://github.com/nocobase/nocobase/pull/6348)) von @gchust
- **[Workflow: Aggregat-Knoten]** Rundungsprozess für aggregierte Zahlen basierend auf dem Double-Typ hinzugefügt ([#6358](https://github.com/nocobase/nocobase/pull/6358)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Unterstützung erweiterter Optionen im Pro-Import-Button von @katherinehhh
- **[Workflow: JavaScript]** Unterstützung zum Anfordern von Paketen aus absolutem Pfad von @mytharcher
- **[Dateispeicher: S3(Pro)]** Versuche, Speicher neu zu laden, wenn der Speicher nicht gefunden wird von @jiannx

#### 🐛 Fehlerbehebungen

- **[client]**

  - Benutzerdefinierte Übersetzung des Menütitels ist ungültig ([#6377](https://github.com/nocobase/nocobase/pull/6377)) von @zhangzhonghe
  - Fehlende Sortiereinstellung für geerbte Sammlungsfelder ([#6372](https://github.com/nocobase/nocobase/pull/6372)) von @katherinehhh
  - Falsche Formatierung des Zeitfeldes im Filterformular ([#6374](https://github.com/nocobase/nocobase/pull/6374)) von @katherinehhh
  - Zeitzonenbezogenes Problem, das eine Stunde weniger in der Datumsauswahl verursacht ([#6359](https://github.com/nocobase/nocobase/pull/6359)) von @katherinehhh
  - Dropdown für Anhangs-Feldspeichereinstellung zeigt keine Optionen an ([#6365](https://github.com/nocobase/nocobase/pull/6365)) von @katherinehhh
  - Unterformularkomponenten richten sich nicht am Hauptformular aus, wenn das Label ausgeblendet ist ([#6357](https://github.com/nocobase/nocobase/pull/6357)) von @katherinehhh
  - Fehler beim Erstellen einer Dateisammlung behoben ([#6363](https://github.com/nocobase/nocobase/pull/6363)) von @mytharcher
  - Bildlaufleistenproblem beim Öffnen eines Seiten-Tabs mit einem Block in voller Höhe behoben ([#6347](https://github.com/nocobase/nocobase/pull/6347)) von @katherinehhh
  - Seiten mit benutzerdefiniertem Favicon zeigen kurz das NocoBase-Favicon während des Ladens ([#6337](https://github.com/nocobase/nocobase/pull/6337)) von @zhangzhonghe
  - Assoziationsblock wird im Popup innerhalb der Sammlungsvererbung nicht gerendert ([#6303](https://github.com/nocobase/nocobase/pull/6303)) von @katherinehhh
  - Schaltfläche 'Neu hinzufügen' erscheint beim Überfahren im schreibgeschützten Modus des Assoziationsfeldes ([#6322](https://github.com/nocobase/nocobase/pull/6322)) von @katherinehhh
- **[auth]** Erneuerung des Tokens während der WebSocket-Autorisierung vermeiden. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) von @sheldon66
- **[database]** Fehler beim Abrufen von Beziehungssammlungsdatensätzen behoben, wenn der Quellschlüssel in Beziehungsfeldern ein numerischer String ist ([#6360](https://github.com/nocobase/nocobase/pull/6360)) von @2013xile
- **[WEB client]**

  - Nach dem Hinzufügen einer Seite zur Routentabelle erscheint die Seite leer ([#6366](https://github.com/nocobase/nocobase/pull/6366)) von @zhangzhonghe
  - Hinzufügen von Tab-Seiten in der Routenverwaltungstabelle wird nicht wirksam ([#6362](https://github.com/nocobase/nocobase/pull/6362)) von @zhangzhonghe
- **[Zugriffskontrolle]** In der Berechtigungsverwaltungstabelle ist der Tab-Seitenname leer ([#6364](https://github.com/nocobase/nocobase/pull/6364)) von @zhangzhonghe
- **[Benutzer]**

  - "Keine Berechtigungen"-Fehler, wenn Benutzer ohne Benutzerverwaltungsberechtigungen ihr eigenes Profil anzeigen ([#6382](https://github.com/nocobase/nocobase/pull/6382)) von @2013xile
  - "Keine Berechtigungen"-Fehler beim Aktualisieren von Systemeinstellungen in der Benutzerverwaltung ([#6380](https://github.com/nocobase/nocobase/pull/6380)) von @2013xile
  - Eine Fehler-UI blinkt kurz auf, wenn die Benutzerberechtigungsverwaltungstabelle zum ersten Mal geladen wird ([#6324](https://github.com/nocobase/nocobase/pull/6324)) von @zhangzhonghe
- **[KI-Integration]** Problem, bei dem die standardmäßige `baseURL` für den LLM-Anbieter `undefined` ist ([#6367](https://github.com/nocobase/nocobase/pull/6367)) von @2013xile
- **[Workflow]** ACL für das Abrufen von Aufträgen behoben ([#6352](https://github.com/nocobase/nocobase/pull/6352)) von @mytharcher
- **[Block: Karte]** Konfigurationseinstellungen für das Kartenfeld fehlen/sind nicht sichtbar ([#6336](https://github.com/nocobase/nocobase/pull/6336)) von @zhangzhonghe
- **[Mobil]** Seitenfehler: Kann Eigenschaften von null nicht lesen (Lesen von 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) von @zhangzhonghe
- **[Block: Aktionspanel]** Einstellen der Höhe des Aktionspanels ist ungültig ([#6321](https://github.com/nocobase/nocobase/pull/6321)) von @zhangzhonghe
- **[Workflow: Benutzerdefiniertes Aktionsereignis]**

  - Locale und Sammlung nach Ausführung als änderbar behoben von @mytharcher
  - Migration für veraltete Schaltflächen, die an benutzerdefinierte Aktions-Workflows gebunden sind, behoben von @mytharcher
- **[Benutzerdefinierte Marke]** Seiten mit benutzerdefiniertem Favicon zeigen kurz das NocoBase-Favicon während des Ladens von @zhangzhonghe
- **[Aktion: Datensätze importieren Pro]**

  - Zusätzliche Option verwenden, um zu bestimmen, ob der Workflow ausgelöst werden soll oder nicht von @mytharcher
  - Schaltfläche zum Importieren von Assoziationsblöcken zeigt bei der Erkennung doppelter Datensätze keine Daten im Feld-Dropdown an von @katherinehhh
- **[Aktion: Datensätze exportieren Pro]**

  - Pro-Export-Aktion fehlende Sortierparameter von @katherinehhh
  - Option 'Block hinzufügen' in den Einstellungen der Export-Anhangs-Schaltfläche entfernen von @katherinehhh
- **[Vorlagendruck]** Wiederherstellung aus lokalem Backup fehlgeschlagen, wenn sowohl die Plugins für Aktionsvorlagendruck als auch Backup-Manager aktiviert waren von @gchust
- **[Workflow: Genehmigung]**

  - Migration für veraltete Blöcke behoben von @mytharcher
  - Durch `.toJSON()` verursachter Fehler behoben von @mytharcher

### [v1.6.0-alpha.31](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Veröffentlichungsdatum: 11.03.2025*

#### 🎉 Neue Funktionen

- **[client]** Kompatibilität mit historischen Schaltflächen-Zugriffskontrolleinstellungen ([#6376](https://github.com/nocobase/nocobase/pull/6376)) von @katherinehhh
- **[Workflow: Antwortnachricht]** Unterstützung zur Verwendung im Aktions-Trigger von @mytharcher

#### 🚀 Verbesserungen

- **[Auth: API-Schlüssel]** Token-Sicherheitskonfigurationstest für die API-Schlüsselauthentifizierung hinzugefügt. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) von @sheldon66
- **[Workflow: Manueller Knoten]** UI des Workflow-Aufgabenzentrums angepasst ([#6272](https://github.com/nocobase/nocobase/pull/6272)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[server]** Falscher Browser-Cache nach Ausführung des `yarn start`-Befehls ([#6394](https://github.com/nocobase/nocobase/pull/6394)) von @gchust
- **[client]**

  - FormDrawer-Theme-Kontextproblem ([#6403](https://github.com/nocobase/nocobase/pull/6403)) von @katherinehhh
  - Bei Verwendung des '$anyOf'-Operators ist die Verknüpfungsregel ungültig ([#6400](https://github.com/nocobase/nocobase/pull/6400)) von @zhangzhonghe
- **[auth]** Behandlung eines nicht existierenden Benutzers mit 401-Fehler und Aktualisierung der Locale-Nachrichten ([#6381](https://github.com/nocobase/nocobase/pull/6381)) von @sheldon66
- **[Block: Vorlage]** Option 'Als Vorlage speichern' wird im Seiten-Datenblock nicht angezeigt ([#6398](https://github.com/nocobase/nocobase/pull/6398)) von @gchust
- **[Workflow: Manueller Knoten]** Konflikt bei eindeutigem Schlüssel vermeiden ([#6407](https://github.com/nocobase/nocobase/pull/6407)) von @mytharcher
- **[Datenquellen-Manager]** Fehler beim Bearbeiten von Feldern in externen Datenquellen ([#6402](https://github.com/nocobase/nocobase/pull/6402)) von @katherinehhh
- **[Theme-Editor]** Themenwechsel schlägt nach mehreren aufeinanderfolgenden Wechseln fehl ([#6387](https://github.com/nocobase/nocobase/pull/6387)) von @katherinehhh
- **[WEB client]** Die Seite ist nach dem Wechsel der Rollen leer ([#6388](https://github.com/nocobase/nocobase/pull/6388)) von @aaaaaajie
- **[Workflow: Genehmigung]**

  - Vermeidung, dass eine falsche Konfiguration der Bearbeiter alle Benutzer abfragt von @mytharcher
  - Bestellparameter beim Hinzufügen von Bearbeitern behoben von @mytharcher
- **[WeCom]** Login-Prompt-Link und DingTalk-Login-Fehler behoben von @chenzhizdt

### [v1.7.0-alpha.1](https://www.nocobase.com/en/blog/v1.7.0-alpha.1)

*Veröffentlichungsdatum: 11.03.2025*

#### 🎉 Neue Funktionen

- **[Workflow: Nach-Aktions-Ereignis]** Unterstützung zur Verwendung des Endknotens zur Statusbestimmung ([#6399](https://github.com/nocobase/nocobase/pull/6399)) von @mytharcher

#### 🚀 Verbesserungen

- **[Workflow]** API 401 behoben, wenn nicht eingeloggt ([#6412](https://github.com/nocobase/nocobase/pull/6412)) von @mytharcher
- **[E-Mail-Manager]** Verwendung derselben Elementstruktur und desselben Stils global für die Toolbar-Schaltfläche von @mytharcher
- **[Workflow: Genehmigung]** UI des Aufgabenzentrums angepasst von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Seite kann nicht in eine Gruppe verschoben werden ([#6413](https://github.com/nocobase/nocobase/pull/6413)) von @zhangzhonghe
  - Menüs auf tieferen Ebenen zeigen kein Symbol an ([#6410](https://github.com/nocobase/nocobase/pull/6410)) von @zhangzhonghe
- **[Authentifizierung]** Benutzer ohne Rollen sollten zur Fehlermeldungsseite weitergeleitet werden. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) von @sheldon66
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Fehlende Verknüpfungsregelkonfiguration für die Schaltfläche 'Workflow auslösen' von @katherinehhh
- **[Backup-Manager]** Fehlende Verschlüsselungsschlüsseldaten während der Backup-Wiederherstellung von @gchust
- **[Workflow: Genehmigung]** Konflikt bei eindeutigem Schlüssel vermeiden von @mytharcher

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die volle Kontrolle und unendliche Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
