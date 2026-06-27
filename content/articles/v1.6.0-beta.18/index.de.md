---
title: "NocoBase v1.6.0-beta.18: Sicherheitstest für Token-Konfiguration bei API-Key-Authentifizierung hinzugefügt"
description: "Versionshinweise zu v1.6.0-beta.18"
---

### 🚀 Verbesserungen

- **[Auth: API-Schlüssel]** Sicherheitskonfigurationstest für die API-Schlüssel-Authentifizierung hinzugefügt. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) von @sheldon66

### 🐛 Fehlerbehebungen

- **[Server]** Falscher Browser-Cache nach Ausführung des Befehls `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) von @gchust

- **[Auth]** Behandlung eines nicht existierenden Benutzers mit 401-Fehler und Aktualisierung der Locale-Nachrichten ([#6381](https://github.com/nocobase/nocobase/pull/6381)) von @sheldon66

- **[WEB-Client]** Die Seite bleibt nach dem Wechsel der Rollen leer ([#6388](https://github.com/nocobase/nocobase/pull/6388)) von @aaaaaajie

- **[Theme-Editor]** Themenwechsel schlägt nach mehreren aufeinanderfolgenden Wechseln fehl ([#6387](https://github.com/nocobase/nocobase/pull/6387)) von @katherinehhh

- **[Workflow: Genehmigung]**
  - Korrektur des order-Parameters beim Hinzufügen eines Bearbeiters von @mytharcher

  - Vermeidung der Abfrage aller Benutzer bei falscher Bearbeiter-Konfiguration von @mytharcher

- **[WeCom]** Korrektur des Login-Prompt-Links und des DingTalk-Login-Fehlers von @chenzhizdt
