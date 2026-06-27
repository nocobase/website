---
title: "NocoBase v1.6.8: Fehlerbehebungen"
description: "Versionshinweise zu v1.6.8"
---

### 🐛 Fehlerbehebungen

- **[Server]** Der Upgrade-Befehl kann Workflow-Fehler verursachen ([#6524](https://github.com/nocobase/nocobase/pull/6524)) von @gchust

- **[Client]** Die Höhe der Untertabelle im Formular wird zusammen mit der Formularhöhe festgelegt ([#6518](https://github.com/nocobase/nocobase/pull/6518)) von @katherinehhh

- **[Authentifizierung]**
  - X-Authenticator fehlt ([#6526](https://github.com/nocobase/nocobase/pull/6526)) von @chenos

  - Authentifikator-Optionen kürzen ([#6527](https://github.com/nocobase/nocobase/pull/6527)) von @2013xile

- **[Block: Karte]** Problem mit der Schlüsselverwaltung des Kartenblocks, das aufgrund unsichtbarer Zeichen zu Anforderungsfehlern führt ([#6521](https://github.com/nocobase/nocobase/pull/6521)) von @katherinehhh

- **[Backup-Manager]** Wiederherstellung kann Workflow-Ausführungsfehler verursachen von @gchust

- **[WeCom]** Umgebungsvariablen und Geheimnisse beim Abrufen der Benachrichtigungskonfiguration auflösen. von @2013xile
