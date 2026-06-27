---
title: "NocoBase v2.1.0-beta.47: An das neue Versionskontroll-Plugin angepasst"
description: "Versionshinweise zu v2.1.0-beta.47"
---

### 🎉 Neue Funktionen

- **[undefined]** Proxy-Befehle der obersten Ebene für nginx und caddy hinzugefügt. ([#9721](https://github.com/nocobase/nocobase/pull/9721)) von @chenos
- **[Backup-Manager]** An das neue Versionskontroll-Plugin angepasst. ([#9563](https://github.com/nocobase/nocobase/pull/9563)) von @cgyrock
- **[Versionskontrolle]** Versionskontroll-Plugin hinzugefügt. von @cgyrock

### 🚀 Verbesserungen

- **[Datenquellen-Manager]** Berechtigungsverwaltung für client-v2-Datenquellen hinzugefügt und zugehörige Berechtigungsauswahl-Dialoge angeglichen. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) von @jiannx
- **[Sammlung: Verbindung zu externen Daten (FDW)]** Verbesserte V2-Sammlungsvorlagen-Parität für SQL-Sammlungen und externe Datensammlungen, einschließlich SQL-Bestätigung, Serververwaltung für externe Datenbanken und Vorlagensortierung. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) von @katherinehhh
- **[Vorlagendruck]** Metadaten der Drucksammlungsvorlage für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[Datensatzverlauf]** Metadaten der Datensatzverlaufssammlung für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[Workflow: Genehmigung]** Metadaten der Workflow-Genehmigungssammlung für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[Prüfprotokolle]** Metadaten der Prüfprotokollsammlung für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[E-Mail-Manager]** Metadaten der E-Mail-Manager-Sammlung für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[App-Supervisor]** Metadaten der App-Supervisor-Sammlung für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock

### 🐛 Fehlerbehebungen

- **[client-v2]**

  - Behoben: JSON-Felder zeigten leere Zellen für Objektwerte in client-v2-Detailansichten an. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) von @katherinehhh
  - Behoben: Optionsfelder übersetzten einfache Optionsbezeichnungen in lokalisierten Umgebungen fälschlicherweise. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) von @katherinehhh
- **[Fehlerbehandlung]** Reduzierte störende Fehlerprotokolle für routinemäßige, nicht authentifizierte Anfragen ohne Token. ([#9718](https://github.com/nocobase/nocobase/pull/9718)) von @2013xile
- **[Block: Liste]** Behoben: Veralteter Zeilenaktionsverknüpfungszustand in Listenblöcken, wenn Aktionen vom aktuellen Datensatz abhängen. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) von @katherinehhh
- **[Datenquellen-Manager]** Verbesserte Fehlermeldungen im V2-Datenquellen-Manager, wenn Sammlungs-, Feld-, Synchronisierungs- und Tabellenladevorgänge fehlschlagen. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) von @katherinehhh
- **[KI-Mitarbeiter]** Behoben: Fehlender Dara-Assistent-Button in den client-v2-Diagrammeinstellungen. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) von @cgyrock
- **[KI: Wissensdatenbank]** Behoben: Fehlende Pfade in S3-Wissensdatenbank-Datei-URLs. von @cgyrock
- **[Aktion: Datensätze importieren Pro]** Behoben: Zeichensalat beim Importieren von XLSX-Dateien mit UTF-8-Shared Strings, die über Streaming-Chunks aufgeteilt wurden. von @mytharcher
- **[Datensatzverlauf]** Behoben: Fehlender Datensatzverlauf für Änderungen an externen Datenquellen. von @2013xile
