---
title: "NocoBase v1.9.0-alpha.17: Verbesserungen und Fehlerbehebungen im Workflow"
description: "Versionshinweise zu v1.9.0-alpha.17"
---

### 🚀 Verbesserungen

- **[Workflow]** Die versandbezogene Logik wurde in einen eigenständigen Dispatcher ausgelagert ([#7535](https://github.com/nocobase/nocobase/pull/7535)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Workflow]**
  - Problem behoben, bei dem durch unsachgemäße Warteschlangenverarbeitung doppelte Ausführungen auftraten ([#7533](https://github.com/nocobase/nocobase/pull/7533)) von @mytharcher

  - Problem behoben, bei dem geplante Aufgaben basierend auf Datumsfeldern nach dem Start nicht ausgelöst wurden ([#7524](https://github.com/nocobase/nocobase/pull/7524)) von @mytharcher
