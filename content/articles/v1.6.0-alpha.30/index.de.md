---
title: "NocoBase v1.6.0-alpha.30: Zeitfeld unterstützt Zeitformat"
description: "Versionshinweise zu v1.6.0-alpha.30"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Tooltip-Konfiguration zu Menüpunkten und Tabellenkopfzeilen hinzugefügt ([#6346](https://github.com/nocobase/nocobase/pull/6346)) von @Cyx649312038

  - Zeitfeld unterstützt Zeitformat ([#6329](https://github.com/nocobase/nocobase/pull/6329)) von @katherinehhh

- **[Datenvisualisierung]** Unterstützt NULLS-Sortierung in Diagrammabfragen ([#6383](https://github.com/nocobase/nocobase/pull/6383)) von @2013xile

- **[KI-Integration]** Neues Plugin: KI-Integration ([#6283](https://github.com/nocobase/nocobase/pull/6283)) von @2013xile
Referenz: [KI-Integration](https://docs.nocobase.com/handbook/ai/service)
- **[Verifizierung]** Unterstützt die Bindung verschiedener Verifizierungstypen an Benutzer, z. B. SMS- und TOTP-Authentifikatoren, sowie Identitätsverifizierung in erforderlichen Szenarien. Ermöglicht die Entwicklung und Erweiterung von Verifizierungsmethoden. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) von @2013xile
Referenz: [Verifizierung](https://docs.nocobase.com/handbook/verification)
- **[KI-Integration (EE)]** Neues Plugin: KI-Integration (EE) von @2013xile
Referenz: [KI-Integration](https://docs.nocobase.com/handbook/ai/service)
- **[Zwei-Faktor-Authentifizierung (2FA)]** Neue Plugins: Zwei-Faktor-Authentifizierung und Verifizierung: TOTP-Authentifikator von @2013xile
Referenz: [Zwei-Faktor-Authentifizierung (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verifizierung: TOTP-Authentifikator](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Verbesserungen

- **[Client]**
  - Entprellungsbehandlung zu Schaltflächen hinzugefügt ([#6351](https://github.com/nocobase/nocobase/pull/6351)) von @Cyx649312038

  - Menü reagiert auf Bildschirmbreite ([#6331](https://github.com/nocobase/nocobase/pull/6331)) von @zhangzhonghe

- **[Server]** Upgrade von koa auf 2.15.4; Upgrade von @koa/cors auf 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) von @2013xile

- **[Workflow]**
  - Ermöglicht das Überspringen der Auslösung des Sammlungs-Workflows bei Datenbankereignissen ([#6379](https://github.com/nocobase/nocobase/pull/6379)) von @mytharcher

  - Lazy Loading des Auftragsergebnisses für bessere Leistung ([#6344](https://github.com/nocobase/nocobase/pull/6344)) von @mytharcher

- **[Block: Vorlage]** Unterstützt das Speichern von Datenblöcken als Blockvorlage von der Seite ([#6348](https://github.com/nocobase/nocobase/pull/6348)) von @gchust

- **[Workflow: Aggregat-Knoten]** Rundungsprozess für aggregierte Zahlen basierend auf dem Double-Typ hinzugefügt ([#6358](https://github.com/nocobase/nocobase/pull/6358)) von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Unterstützt erweiterte Optionen im Pro-Import-Button von @katherinehhh

- **[Workflow: JavaScript]** Unterstützt das Anfordern von Paketen über absolute Pfade von @mytharcher

- **[Dateispeicher: S3(Pro)]** Versucht, Speicher neu zu laden, wenn der Speicher nicht gefunden wird von @jiannx

### 🐛 Fehlerbehebungen

- **[Client]**
  - Benutzerdefinierte Übersetzung des Menütitels ist ungültig ([#6377](https://github.com/nocobase/nocobase/pull/6377)) von @zhangzhonghe

  - Fehlende Sortiereinstellung für Felder geerbter Sammlungen ([#6372](https://github.com/nocobase/nocobase/pull/6372)) von @katherinehhh

  - Falsche Formatierung des Zeitfelds im Filterformular ([#6374](https://github.com/nocobase/nocobase/pull/6374)) von @katherinehhh

  - Zeitzonenbezogenes Problem, das zu einer Stunde weniger in der Datumsauswahl führt ([#6359](https://github.com/nocobase/nocobase/pull/6359)) von @katherinehhh

  - Dropdown-Menü für Anhangspeichereinstellungen zeigt keine Optionen an ([#6365](https://github.com/nocobase/nocobase/pull/6365)) von @katherinehhh

  - Unterformularkomponenten richten sich nicht am Hauptformular aus, wenn das Label ausgeblendet ist ([#6357](https://github.com/nocobase/nocobase/pull/6357)) von @katherinehhh

  - Fehler beim Erstellen einer Dateisammlung behoben ([#6363](https://github.com/nocobase/nocobase/pull/6363)) von @mytharcher

  - Scrollbalkenproblem beim Öffnen eines Seiten-Tabs mit einem Block in voller Höhe behoben ([#6347](https://github.com/nocobase/nocobase/pull/6347)) von @katherinehhh

  - Seiten mit benutzerdefiniertem Favicon zeigen kurz das NocoBase-Favicon während des Ladens ([#6337](https://github.com/nocobase/nocobase/pull/6337)) von @zhangzhonghe

  - Assoziationsblock wird im Popup innerhalb der Sammlungsvererbung nicht gerendert ([#6303](https://github.com/nocobase/nocobase/pull/6303)) von @katherinehhh

  - Schaltfläche "Neu hinzufügen" erscheint beim Überfahren im schreibgeschützten Modus des Assoziationsfelds ([#6322](https://github.com/nocobase/nocobase/pull/6322)) von @katherinehhh

- **[Auth]** Vermeidet die Erneuerung des Tokens während der WebSocket-Autorisierung. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) von @sheldon66

- **[Datenbank]** Fehler beim Abrufen von Relationssammlungsdatensätzen behoben, wenn der Quellschlüssel in Relationsfeldern ein numerischer String ist ([#6360](https://github.com/nocobase/nocobase/pull/6360)) von @2013xile

- **[WEB-Client]**
  - Nach dem Hinzufügen einer Seite zur Routentabelle erscheint die Seite leer ([#6366](https://github.com/nocobase/nocobase/pull/6366)) von @zhangzhonghe

  - Das Hinzufügen von Tab-Seiten in der Routenverwaltungstabelle wird nicht wirksam ([#6362](https://github.com/nocobase/nocobase/pull/6362)) von @zhangzhonghe

- **[Zugriffskontrolle]** In der Berechtigungsverwaltungstabelle ist der Name der Tab-Seite leer ([#6364](https://github.com/nocobase/nocobase/pull/6364)) von @zhangzhonghe

- **[Benutzer]**
  - Fehler "Keine Berechtigungen", wenn Benutzer ohne Benutzerverwaltungsberechtigungen ihr eigenes Profil anzeigen ([#6382](https://github.com/nocobase/nocobase/pull/6382)) von @2013xile

  - Fehler "Keine Berechtigungen" beim Aktualisieren von Systemeinstellungen in der Benutzerverwaltung ([#6380](https://github.com/nocobase/nocobase/pull/6380)) von @2013xile

  - Eine Fehleroberfläche blinkt kurz auf, wenn die Benutzerberechtigungsverwaltungstabelle zum ersten Mal geladen wird ([#6324](https://github.com/nocobase/nocobase/pull/6324)) von @zhangzhonghe

- **[KI-Integration]** Problem, bei dem die standardmäßige `baseURL` für den LLM-Anbieter `undefined` ist ([#6367](https://github.com/nocobase/nocobase/pull/6367)) von @2013xile

- **[Workflow]** ACL für das Abrufen von Aufträgen behoben ([#6352](https://github.com/nocobase/nocobase/pull/6352)) von @mytharcher

- **[Block: Karte]** Konfigurationseinstellungen für das Kartenfeld fehlen/sind nicht sichtbar ([#6336](https://github.com/nocobase/nocobase/pull/6336)) von @zhangzhonghe

- **[Mobil]** Seitenfehler: Eigenschaften von null können nicht gelesen werden (Lesen von 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) von @zhangzhonghe

- **[Block: Aktionspanel]** Das Festlegen der Höhe des Aktionspanels ist ungültig ([#6321](https://github.com/nocobase/nocobase/pull/6321)) von @zhangzhonghe

- **[Workflow: Benutzerdefiniertes Aktionsereignis]**
  - Locale und Sammlung nach der Ausführung als änderbar behoben von @mytharcher

  - Migration für Legacy-Buttons behoben, die an benutzerdefinierte Aktions-Workflows gebunden sind von @mytharcher

- **[Benutzerdefinierte Marke]** Seiten mit benutzerdefiniertem Favicon zeigen kurz das NocoBase-Favicon während des Ladens von @zhangzhonghe

- **[Aktion: Datensätze importieren Pro]**
  - Zusätzliche Option verwendet, um zu bestimmen, ob der Workflow ausgelöst werden soll oder nicht von @mytharcher

  - Schaltfläche zum Importieren von Assoziationsblöcken: Duplikaterkennung zeigt keine Daten im Feld-Dropdown von @katherinehhh

- **[Aktion: Datensätze exportieren Pro]**
  - Pro-Export-Aktion fehlende Sortierparameter von @katherinehhh

  - Option 'Block hinzufügen' in den Einstellungen der Export-Anhang-Schaltfläche entfernt von @katherinehhh

- **[Vorlage drucken]** Wiederherstellung aus lokalem Speicher fehlgeschlagen, wenn sowohl die Plugins "Aktion Vorlage drucken" als auch "Backup-Manager" aktiviert waren von @gchust

- **[Workflow: Genehmigung]**
  - Migration für Legacy-Blöcke behoben von @mytharcher

  - Durch `.toJSON()` verursachter Fehler behoben von @mytharcher
