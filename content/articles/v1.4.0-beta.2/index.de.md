---
title: "NocoBase v1.4.0-beta.2: Fehlerbehebungen"
description: "Versionshinweise zu v1.4.0-beta.2"
---

### 🐛 Fehlerbehebungen

- **[Build]** Rücknahme des Client-Build-Tools von `rspack` zurück zu `vite`, um das Problem zu beheben, dass der Befehl `yarn dev` nach der Ausführung des create-nocobase-app-Befehls einen Fehler meldet ([#5697](https://github.com/nocobase/nocobase/pull/5697)) von @gchust

- **[Client]** Problem behoben, bei dem eine rechtsfixierte Spalte nicht rechtsbündig ausgerichtet wird, wenn es weniger Spalten gibt ([#5690](https://github.com/nocobase/nocobase/pull/5690)) von @katherinehhh

- **[Mobil]** Problem behoben, bei dem das Modal 'Feldwerte zuweisen' auf der mobilen Konfigurationsseite verdeckt wird ([#5701](https://github.com/nocobase/nocobase/pull/5701)) von @zhangzhonghe
