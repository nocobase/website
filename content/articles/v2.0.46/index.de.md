---
title: "NocoBase v2.0.46: Fehlerbehebungen"
description: "Versionshinweise zu v2.0.46"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ein Problem wurde behoben, bei dem Standardwerte nicht angewendet wurden, wenn ein Datensatz nach dem Entfernen aus einer Untertabelle erneut hinzugefügt wurde. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) von @gchust

  - Popover maximale Höhe und Scroll-Schutzmaßnahmen wurden festgelegt, sodass der Absendebereich erreichbar bleibt. ([#9226](https://github.com/nocobase/nocobase/pull/9226)) von @jiannx

- **[Authentifizierung]** Ein Problem wurde behoben, bei dem alte Sitzungen nach einer Passwortänderung weiterhin aktiv blieben. ([#9261](https://github.com/nocobase/nocobase/pull/9261)) von @2013xile

- **[Datenquelle: Externes MariaDB]** Ein fehlgeschlagener Testfall wurde behoben, der durch einen falschen Modulimport verursacht wurde. von @mytharcher
