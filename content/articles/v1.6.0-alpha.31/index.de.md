---
title: "NocoBase v1.6.0-alpha.31: Kompatibel mit historischen Zugriffssteuerungseinstellungen für Schaltflächen"
description: "Versionshinweise zu v1.6.0-alpha.31"
---

### 🎉 Neue Funktionen

- **[client]** Kompatibilität mit historischen Schaltflächen-Berechtigungseinstellungen ([#6376](https://github.com/nocobase/nocobase/pull/6376)) von @katherinehhh

- **[Workflow: Antwortnachricht]** Unterstützung für die Verwendung in Aktionsauslösern von @mytharcher

### 🚀 Verbesserungen

- **[Auth: API-Schlüssel]** Token-Sicherheitskonfigurationstest für die API-Schlüssel-Authentifizierung hinzugefügt. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) von @sheldon66

- **[Workflow: Manueller Knoten]** UI des Workflow-Aufgabenzentrums angepasst ([#6272](https://github.com/nocobase/nocobase/pull/6272)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[server]** Falscher Browser-Cache nach Ausführung des Befehls `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) von @gchust

- **[client]**
  - Problem mit dem Theme-Kontext von FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) von @katherinehhh

  - Bei Verwendung des Operators '$anyOf' ist die Verknüpfungsregel ungültig ([#6400](https://github.com/nocobase/nocobase/pull/6400)) von @zhangzhonghe

- **[auth]** Behandlung nicht existierender Benutzer mit 401-Fehler und Aktualisierung der Gebietsschema-Nachrichten ([#6381](https://github.com/nocobase/nocobase/pull/6381)) von @sheldon66

- **[Block: Vorlage]** Option "Als Vorlage speichern" wird im Seiten-Datenblock nicht angezeigt ([#6398](https://github.com/nocobase/nocobase/pull/6398)) von @gchust

- **[Workflow: Manueller Knoten]** Konflikt bei eindeutigem Schlüssel vermeiden ([#6407](https://github.com/nocobase/nocobase/pull/6407)) von @mytharcher

- **[Datenquellen-Manager]** Fehler beim Bearbeiten von Feldern in externen Datenquellen ([#6402](https://github.com/nocobase/nocobase/pull/6402)) von @katherinehhh

- **[Theme-Editor]** Theme-Wechsel schlägt nach mehreren aufeinanderfolgenden Wechseln fehl ([#6387](https://github.com/nocobase/nocobase/pull/6387)) von @katherinehhh

- **[WEB-Client]** Die Seite ist nach dem Wechsel der Rolle leer ([#6388](https://github.com/nocobase/nocobase/pull/6388)) von @aaaaaajie

- **[Workflow: Genehmigung]**
  - Vermeidung der Abfrage aller Benutzer bei falscher Konfiguration der Bearbeiter von @mytharcher

  - Korrektur des Order-Parameters beim Hinzufügen von Bearbeitern von @mytharcher

- **[WeCom]** Korrektur des Login-Prompt-Links und des DingTalk-Login-Fehlers von @chenzhizdt
