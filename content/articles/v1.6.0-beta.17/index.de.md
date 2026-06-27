---
title: "NocoBase v1.6.0-beta.17: Tooltip-Konfiguration für Menüpunkte und Tabellenköpfe hinzugefügt"
description: "Versionshinweise zu v1.6.0-beta.17"
---

### 🎉 Neue Funktionen

- **[Client]** Tooltip-Konfiguration zu Menüpunkten und Tabellenkopfzeilen hinzugefügt ([#6346](https://github.com/nocobase/nocobase/pull/6346)) von @Cyx649312038

- **[Datenvisualisierung]** Unterstützung für NULLS-Sortierung in Diagrammabfragen ([#6383](https://github.com/nocobase/nocobase/pull/6383)) von @2013xile

- **[KI-Integration]** Neues Plugin: KI-Integration ([#6283](https://github.com/nocobase/nocobase/pull/6283)) von @2013xile
Referenz: [KI-Integration](https://docs.nocobase.com/handbook/ai/service)
- **[KI-Integration (EE)]** Neues Plugin: KI-Integration (EE) von @2013xile
Referenz: [KI-Integration](https://docs.nocobase.com/handbook/ai/service)
### 🚀 Verbesserungen

- **[Client]**
  - Entprellungsbehandlung für Schaltflächen hinzugefügt ([#6351](https://github.com/nocobase/nocobase/pull/6351)) von @Cyx649312038

  - Menü reagiert jetzt auf Bildschirmbreite ([#6331](https://github.com/nocobase/nocobase/pull/6331)) von @zhangzhonghe

- **[Workflow]** Ermöglicht das Überspringen der Auslösung des Sammlungs-Workflows bei Datenbankereignissen ([#6379](https://github.com/nocobase/nocobase/pull/6379)) von @mytharcher

- **[Workflow: Aggregationsknoten]** Rundungsprozess für aggregierte Zahlen basierend auf dem double-Typ hinzugefügt ([#6358](https://github.com/nocobase/nocobase/pull/6358)) von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Unterstützt erweiterte Optionen im Pro-Import-Button von @katherinehhh

- **[Workflow: JavaScript]** Unterstützt das Anfordern von Paketen über absolute Pfade von @mytharcher

- **[Dateispeicher: S3(Pro)]** Versucht, Speicher neu zu laden, wenn der Speicher nicht gefunden wird von @jiannx

### 🐛 Fehlerbehebungen

- **[Client]**
  - Benutzerdefinierte Übersetzung des Menütitels ist ungültig ([#6377](https://github.com/nocobase/nocobase/pull/6377)) von @zhangzhonghe

  - Zeitzonenbezogenes Problem, das zu einer Stunde weniger im Datumsauswahlfeld führt ([#6359](https://github.com/nocobase/nocobase/pull/6359)) von @katherinehhh

  - Fehlende Sortiereinstellung für Felder geerbter Sammlungen ([#6372](https://github.com/nocobase/nocobase/pull/6372)) von @katherinehhh

  - Dropdown-Menü für die Speichereinstellung des Anhangsfelds zeigt keine Optionen an ([#6365](https://github.com/nocobase/nocobase/pull/6365)) von @katherinehhh

  - Unterformularkomponenten richten sich nicht am Hauptformular aus, wenn das Label ausgeblendet ist ([#6357](https://github.com/nocobase/nocobase/pull/6357)) von @katherinehhh

  - Assoziationsblock wird in Popups innerhalb der Sammlungsvererbung nicht gerendert ([#6303](https://github.com/nocobase/nocobase/pull/6303)) von @katherinehhh

  - Behebt ein Scrollbalkenproblem beim Öffnen eines Seiten-Tabs mit einem vollständigen Block ([#6347](https://github.com/nocobase/nocobase/pull/6347)) von @katherinehhh

  - Behebt einen Fehler beim Erstellen einer Dateisammlung ([#6363](https://github.com/nocobase/nocobase/pull/6363)) von @mytharcher

- **[Datenbank]** Behebt einen Fehler beim Abrufen von Relationssammlungsdatensätzen, wenn der Quellschlüssel in Relationsfeldern ein numerischer String ist ([#6360](https://github.com/nocobase/nocobase/pull/6360)) von @2013xile

- **[WEB-Client]**
  - Das Hinzufügen von Tab-Seiten in der Routenverwaltungstabelle wird nicht wirksam ([#6362](https://github.com/nocobase/nocobase/pull/6362)) von @zhangzhonghe

  - Nach dem Hinzufügen einer Seite zur Routentabelle erscheint die Seite leer ([#6366](https://github.com/nocobase/nocobase/pull/6366)) von @zhangzhonghe

- **[Benutzer]**
  - Fehler "Keine Berechtigungen", wenn Benutzer ohne Benutzerverwaltungsberechtigungen ihr eigenes Profil anzeigen ([#6382](https://github.com/nocobase/nocobase/pull/6382)) von @2013xile

  - Fehler "Keine Berechtigungen" beim Aktualisieren von Systemeinstellungen in der Benutzerverwaltung ([#6380](https://github.com/nocobase/nocobase/pull/6380)) von @2013xile

- **[Zugriffskontrolle]** In der Berechtigungsverwaltungstabelle ist der Name der Tab-Seite leer ([#6364](https://github.com/nocobase/nocobase/pull/6364)) von @zhangzhonghe

- **[KI-Integration]** Problem, bei dem die standardmäßige `baseURL` für den LLM-Anbieter `undefined` ist ([#6367](https://github.com/nocobase/nocobase/pull/6367)) von @2013xile

- **[Workflow]** ACL für das Abrufen von Jobs korrigiert ([#6352](https://github.com/nocobase/nocobase/pull/6352)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Locale und Sammlung nach der Ausführung als änderbar korrigiert von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Verwendet eine zusätzliche Option, um zu bestimmen, ob der Workflow ausgelöst werden soll oder nicht von @mytharcher

- **[Aktion: Datensätze exportieren Pro]** Pro-Export-Aktion fehlende Sortierparameter von @katherinehhh
