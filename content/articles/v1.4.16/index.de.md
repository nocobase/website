---
title: "NocoBase v1.4.16: Fehlerbehebungen"
description: "Versionshinweise zu v1.4.16"
---

### 🐛 Fehlerbehebungen

- **[Client]** Problem mit der Präzisionsumwandlung des UnixTimestamp-Felds behoben ([#5931](https://github.com/nocobase/nocobase/pull/5931)) von @chenos

- **[Aktion: Datensatz duplizieren]** Problem behoben, bei dem das o2o-Assoziationsfeld das konfigurierte Zielfeld der Sammlung in Detail- und Formularblöcken nicht anzeigte ([#5921](https://github.com/nocobase/nocobase/pull/5921)) von @katherinehhh

- **[Backup-Manager]** Fehler beim Backup behoben, wenn die mysqldump-Version unter 8 lag von @gchust
