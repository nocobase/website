---
title: "NocoBase v2.2.0-alpha.1: Unterstützung für Scan-Eingabe bei Textfeldern"
description: "Versionshinweise zu v2.2.0-alpha.1"
---

### 🎉 Neue Funktionen

- **[client-v2]** Unterstützung für Scan-Eingabe bei Textfeldern ([#9599](https://github.com/nocobase/nocobase/pull/9599)) von @katherinehhh
- **[undefined]** Hinzugefügte Top-Level-Proxy-Befehle für nginx und caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) von @chenos
- **[Async-Task-Manager]** V2-Client-Unterstützung für die Topbar-Aktion des Async-Task-Managers hinzugefügt. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) von @jiannx
- **[Backup-Manager]**

  - V2-Client-Laufzeitunterstützung für das Backup-Manager-Plugin hinzugefügt. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) von @katherinehhh
  - An das neue Versionskontroll-Plugin angepasst ([#9563](https://github.com/nocobase/nocobase/pull/9563)) von @cgyrock
- **[Datenquelle: Externes NocoBase]** Datenquellen-Plugin hinzugefügt: externes NocoBase von @2013xile
- **[Versionskontrolle]** Versionskontroll-Plugin hinzugefügt von @cgyrock

### 🚀 Verbesserungen

- **[client-v2]**

  - Unterstützung zum Deaktivieren der Mehrfachauswahl in v2-Popup-Auswahl-Assoziationsfeldern hinzugefügt. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) von @katherinehhh
  - Verbesserte v2-Blockdarstellung, wenn eine konfigurierte externe Datenquelle deaktiviert ist, um Renderfehler zu vermeiden und einen klareren UI-Editor-Platzhalter anzuzeigen. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) von @katherinehhh
- **[Variablen und Geheimnisse]** Umgebungsvariablen (`$env`) können jetzt von Flow-Engine-basierten Variablenauswahlen in der v1-Laufzeit ausgewählt werden. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) von @Molunerfinn
- **[Dateimanager]** Internen Upload-`subPath`-Support für den Dateimanager hinzugefügt. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) von @mytharcher
- **[Datenquellen-Manager]** Client-v2-Datenquellen-Berechtigungsverwaltung hinzugefügt und zugehörige Berechtigungsauswahl-Drawer angeglichen. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) von @jiannx
- **[Sammlung: Verbindung zu externen Daten (FDW)]** Verbesserte V2-Sammlungsvorlagen-Parität für SQL-Sammlungen und externe Datensammlungen, einschließlich SQL-Bestätigung, Verwaltung externer Datenbankserver und Vorlagensortierung. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) von @katherinehhh
- **[Vorlagendruck]** Metadaten der Druckschablonensammlung für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[Aufzeichnungsverlauf]** Metadaten der Aufzeichnungsverlaufssammlung für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[Workflow: Genehmigung]** Metadaten der Workflow-Genehmigungssammlung für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[Prüfprotokolle]** Metadaten der Prüfprotokollsammlung für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[E-Mail-Manager]** Metadaten der E-Mail-Manager-Sammlung für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[App-Supervisor]** Metadaten der App-Supervisor-Sammlung für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock

### 🐛 Fehlerbehebungen

- **[Datenbank]** Behoben, dass Passwortfelder bei Massenaktualisierungen nicht gehasht wurden. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) von @mytharcher
- **[Client]** Behoben, dass Popup-Subtabellen-Zeilenaktionen das gesamte Subtabellenfeld ausblendeten, wenn die Aktion durch Verknüpfungsregeln ausgeblendet wurde ([#9717](https://github.com/nocobase/nocobase/pull/9717)) von @katherinehhh
- **[client-v2]**

  - Behoben, dass JSON-Felder in client v2-Anzeigeansichten leere Zellen für Objektwerte anzeigten. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) von @katherinehhh
  - Behoben, dass V2-Optionsfelder einfache Optionsbezeichnungen in lokalisierten Umgebungen falsch übersetzten. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) von @katherinehhh
- **[Block: Karte]**

  - Behoben: Der DrawingManager im v1 Google Maps-Block war nicht verfügbar ([#9735](https://github.com/nocobase/nocobase/pull/9735)) von @katherinehhh
  - Behoben, dass Karten-Geometriefelder nach dem Aktivieren des Karten-Plugins im v2-Datenquellen-Manager-Menü „Feld hinzufügen“ fehlten. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) von @katherinehhh
- **[Kalender]** Behoben, dass in v2-Kalenderblock-Detail-Drawern keine Details- und Bearbeitungsblöcke hinzugefügt werden konnten ([#9729](https://github.com/nocobase/nocobase/pull/9729)) von @jiannx
- **[Datenquellen-Manager]**

  - Behoben: Veraltete Anzeige des Titelfelds beim erneuten Öffnen des v2-Datenquellen-Feldkonfigurations-Drawers nach Änderung des Titelfelds. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) von @katherinehhh
  - Verbesserte Fehlermeldungen des V2-Datenquellen-Managers bei fehlgeschlagenen Sammlungs-, Feld-, Synchronisierungs- und Tabellenladevorgängen. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) von @katherinehhh
- **[KI-Mitarbeiter]**

  - Verbesserte KI-Mitarbeiter-Datenabfrage-Prompts, um die erforderliche Fähigkeit vor der Verwendung von Abfragetools zu laden. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) von @cgyrock
  - Behoben: Der fehlende Dara-Assistent-Button in den client-v2-Diagrammeinstellungen. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) von @cgyrock
- **[Block: Liste]** Behoben: Veralteter Zustand der Zeilenaktionsverknüpfung in Listenblöcken, wenn Aktionen vom aktuellen Datensatz abhängen. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) von @katherinehhh
- **[Fehlerbehandler]** Reduzierte störende Fehlerprotokolle für normale, nicht authentifizierte Anfragen ohne Token ([#9718](https://github.com/nocobase/nocobase/pull/9718)) von @2013xile
- **[Aktion: Datensätze importieren Pro]** Behoben: Zeichenkettenfehler beim Importieren von XLSX-Dateien mit UTF-8-Shared-Strings, die über Streaming-Blöcke aufgeteilt wurden. von @mytharcher
- **[KI: Wissensdatenbank]** Behoben: Fehlende Pfade in S3-Wissensdatenbank-Datei-URLs. von @cgyrock
- **[Aufzeichnungsverlauf]** Behoben: Fehlender Aufzeichnungsverlauf für Änderungen an externen Datenquellen von @2013xile
