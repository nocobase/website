---
title: "NocoBase v1.8.16: Fehlerbehebungen"
description: "Versionshinweise zu v1.8.16"
---

### 🚀 Verbesserungen

- **[Benachrichtigung: In-App-Nachricht]** SQL-Protokollausgaben über `console.log` entfernt ([#7368](https://github.com/nocobase/nocobase/pull/7368)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Server]** Einige Anfragen fehlt `ctx.action`, was zu Fehlern in der Audit-Log-Middleware führt ([#7369](https://github.com/nocobase/nocobase/pull/7369)) von @2013xile

- **[Sammlungsfeld: Formel]** Problem behoben, bei dem die Formeleingabe aufgrund des Variablentyps die Validierung nicht bestand ([#7373](https://github.com/nocobase/nocobase/pull/7373)) von @mytharcher

- **[Backup-Manager]** Große Dateisicherungen konnten als „erfolgreich“ angezeigt werden, bevor sie tatsächlich abgeschlossen waren von @gchust
