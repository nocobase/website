---
title: "NocoBase v1.6.0-alpha.2: Unterstützung für das Öffnen von Pop-ups beim Klicken auf Links im readPretty-Feld"
description: "Versionshinweise zu v1.6.0-alpha.2"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Unterstützung für das Öffnen von Pop-ups bei Links im readPretty-Feld ([#5747](https://github.com/nocobase/nocobase/pull/5747)) von @katherinehhh

  - Unterstützung für Aktionen zum Verknüpfen und Trennen von Verknüpfungen in Assoziationsblöcken ([#5695](https://github.com/nocobase/nocobase/pull/5695)) von @katherinehhh

- **[Server]** Audit-Manager hinzugefügt ([#5601](https://github.com/nocobase/nocobase/pull/5601)) von @chenzhizdt

- **[Workflow]** Unterstützung für manuell ausgelöste Workflows ([#5664](https://github.com/nocobase/nocobase/pull/5664)) von @mytharcher

- **[Workflow: Pre-Action-Ereignis]** Unterstützung für manuell ausgelöste Workflows von @mytharcher

### 🚀 Verbesserungen

- **[Client]**
  - Bedarfsgesteuertes Laden für Frontend-Komponenten implementiert ([#5647](https://github.com/nocobase/nocobase/pull/5647)) von @gchust

  - Verbesserte Seiten-Rendering-Leistung und Unterstützung für die Keep-Alive-Funktionalität von Seiten ([#5515](https://github.com/nocobase/nocobase/pull/5515)) von @zhangzhonghe

- **[Sammlungsfeld: Sortierung]** Plugin-Beschreibung hinzugefügt ([#5720](https://github.com/nocobase/nocobase/pull/5720)) von @mytharcher

- **[NocoBase einbetten]** Verbesserte Seiten-Rendering-Leistung von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem Variablen in Blöcken von Drittanbieter-Datenquellen nicht korrekt verwendet werden konnten ([#5782](https://github.com/nocobase/nocobase/pull/5782)) von @zhangzhonghe

  - Problem behoben, bei dem Assoziationsfeldwerte in Blockvorlagen leer waren. Problem behoben, bei dem der Blockdatenbereich mit Variablen in Drittanbieter-Datenquellen nicht korrekt funktionierte ([#5777](https://github.com/nocobase/nocobase/pull/5777)) von @zhangzhonghe

  - Problem behoben, bei dem dynamische Eigenschaften von Komponenten nicht mit verzögertem Laden funktionierten ([#5776](https://github.com/nocobase/nocobase/pull/5776)) von @gchust

  - Warnmeldung in React beim dynamischen Laden von Hooks in der Entwicklungsumgebung behoben ([#5758](https://github.com/nocobase/nocobase/pull/5758)) von @gchust

- **[Datenvisualisierung]** Problem behoben, bei dem Filterfeldkomponenten von Diagrammblöcken nicht gerendert wurden ([#5769](https://github.com/nocobase/nocobase/pull/5769)) von @2013xile
