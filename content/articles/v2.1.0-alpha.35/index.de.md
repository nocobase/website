---
title: "NocoBase v2.1.0-alpha.35: Neuer KI-Mitarbeiter, Lokalisierungsingenieurin Lina, zur Unterstützung bei Lokalisierungsübersetzungsaufgaben"
description: "Versionshinweise zu v2.1.0-alpha.35"
---

### 🎉 Neue Funktionen

- **[undefined]** Neuer KI-Mitarbeiter, Lokalisierungsingenieurin Lina, zur Unterstützung bei Lokalisierungsübersetzungsaufgaben hinzugefügt ([#9434](https://github.com/nocobase/nocobase/pull/9434)) von @2013xile
Referenz: [Lokalisierungsverwaltung](https://docs.nocobase.com/system-management/localization)<br>[Lina: Lokalisierungsingenieurin](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Lina und lokales HY-MT1.5-1.8B zur Übersetzung von Lokalisierungseinträgen verwenden](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Kalender]** Client v2-Unterstützung für das Kalender-Plugin hinzugefügt. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) von @jiannx

- **[Block: Baum]** Client-v2-Unterstützung für den Baumfilterblock hinzugefügt. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) von @jiannx

- **[Dateispeicher: S3(Pro)]** Unterstützt das Hochladen von Dateien über S3 Pro-Speicher im v2 Dateimanager. von @Molunerfinn

### 🚀 Verbesserungen

- **[Build]** Regressionstests hinzugefügt, um sicherzustellen, dass `deleteServerFiles` keine `client`- und `client-v2`-Build-Artefakte unter Windows- und POSIX-Pfaden entfernt. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) von @Molunerfinn

- **[Client]** Bereits verknüpfte Datensätze im Assoziationsauswahldialog von 1:n-Tabellenblöcken ausschließen ([#9448](https://github.com/nocobase/nocobase/pull/9448)) von @katherinehhh

- **[KI-Mitarbeiter]** Interaktion und Leistungsoptimierung paralleler Konversationen von KI-Mitarbeitern ([#9462](https://github.com/nocobase/nocobase/pull/9462)) von @cgyrock

- **[Dateimanager]** Drittanbieter-Speicher-Plugins können jetzt ihr eigenes Speichertyp-Formular auf der v2 Dateimanager-Einstellungsseite registrieren. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) von @Molunerfinn

- **[KI: Wissensdatenbank]** Die eindeutige Kennung einer Wissensdatenbank kann zum Zeitpunkt der Erstellung konfiguriert werden von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**
  - Verhindert das Öffnen der Schnellbearbeitung für Assoziationsfelder in Tabellen ([#9469](https://github.com/nocobase/nocobase/pull/9469)) von @katherinehhh

  - Mehrfachauswahlfelder in v2-Datenblöcken sollten Optionsbezeichnungen anstelle von Werten anzeigen ([#9472](https://github.com/nocobase/nocobase/pull/9472)) von @katherinehhh

  - Doppelte Tabellenanfragen behoben, wenn Filterformulare Standardwerte haben ([#9423](https://github.com/nocobase/nocobase/pull/9423)) von @zhangzhonghe

  - Problem behoben, bei dem alte Standardwerteinstellungen nicht entfernt werden konnten. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) von @gchust

  - Problem behoben, bei dem Optionen für das Auswahlfeld einer Assoziation nicht ausgewählt werden konnten. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) von @gchust

  - Problem behoben, bei dem Systemeinstellungen nach dem Absenden leer erschienen ([#9458](https://github.com/nocobase/nocobase/pull/9458)) von @zhangzhonghe

  - Problem behoben, bei dem der Datenbereich des Zielblocks falsch gesetzt wurde, wenn Zeilendaten in einem Tabellenblock-Ereignisfluss abgewählt wurden. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) von @gchust

  - Fehler beim Ändern des Titelfeldes eines Assoziationsfeldes im v2-Tabellenblock behoben ([#9451](https://github.com/nocobase/nocobase/pull/9451)) von @katherinehhh

  - V2-Verknüpfungsregeln korrigiert, um die Einstellung auswählbarer Optionen für Felder zu unterstützen ([#9399](https://github.com/nocobase/nocobase/pull/9399)) von @jiannx

- **[Client-v2]**
  - Leere Gruppen nach dem Filtern von v1-Menüs im v2-Layout beibehalten ([#9478](https://github.com/nocobase/nocobase/pull/9478)) von @zhangzhonghe

  - Problem behoben, bei dem die Seite hinter dem Plugin-Aktivierungsdialog weiß wurde ([#9455](https://github.com/nocobase/nocobase/pull/9455)) von @zhangzhonghe

  - Abstürze von v1-Adminseiten behoben, wenn sie in Produktions-Builds auf v2-Plugin-Module verweisen. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) von @Molunerfinn

- **[Cli-v1]** Fehler beim Entwicklungsstart in mit create-nocobase-app erstellten Apps behoben, der durch die App-Dev-Client-Pfadauflösung verursacht wurde. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) von @Molunerfinn

- **[Server]** fix(file-manager): Erzwingt das Herunterladen von aktiven Inhaltsdateien im lokalen/öffentlichen Speicher ([#9437](https://github.com/nocobase/nocobase/pull/9437)) von @mytharcher

- **[KI-Mitarbeiter]**
  - Fehler beim Laden von plugin-ai behoben ([#9483](https://github.com/nocobase/nocobase/pull/9483)) von @cgyrock

  - Problem behoben, bei dem der Ollama-Testflug eine Schlüsseleingabe erforderte ([#9450](https://github.com/nocobase/nocobase/pull/9450)) von @cgyrock

- **[Block: Mehrschritt-Formular]** Problem mit der Bildlaufleiste bei aktivierter Vollhöhe im v1-Schrittformularblock behoben ([#9468](https://github.com/nocobase/nocobase/pull/9468)) von @katherinehhh

- **[Abteilungen]** Übersetzungskonflikt zwischen den Schaltflächen "Benutzer hinzufügen" und "Abteilung hinzufügen" in den Benutzer- & Berechtigungseinstellungen behoben ([#9456](https://github.com/nocobase/nocobase/pull/9456)) von @katherinehhh

- **[Workflow]** fix: Hilfetext in FlowModel-Workflow-Bindungsdialogen für Operations- und benutzerdefinierte Aktionsereignisse wiederhergestellt ([#9447](https://github.com/nocobase/nocobase/pull/9447)) von @mytharcher

- **[Block: Markdown]** Problem mit Fehlermeldungen im v2-Markdown-Block behoben ([#9440](https://github.com/nocobase/nocobase/pull/9440)) von @zhangzhonghe

- **[Workflow: Webhook]** Problem behoben, bei dem das Erstellen eines Antwortknotens durch die Validierung der `statusCode`-Konfiguration abgefangen wurde von @mytharcher

- **[Workflow: Genehmigung]**
  - Layout des Genehmigungsformulars auf mobilen Geräten korrigiert von @zhangzhonghe

  - Doppelter Genehmigungsdatensatzindex bei der Delegierung von Genehmigungsaufgaben behoben. von @mytharcher

- **[Backup-Manager]** Problem behoben, bei dem Backups mit einem Fehler fehlschlugen, wenn Dateien nicht gefunden werden konnten. von @gchust
