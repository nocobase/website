---
title: "NocoBase v2.1.0-beta.23: Felder für Erstellungs- und Aktualisierungsbenutzer zu Workflows hinzugefügt"
description: "Versionshinweise zu v2.1.0-beta.23"
---

### 🎉 Neue Funktionen

- **[Workflow]** Felder für „Erstellt von“ und „Aktualisiert von“ zu Workflows hinzugefügt ([#9217](https://github.com/nocobase/nocobase/pull/9217)) von @mytharcher

### 🚀 Verbesserungen

- **[undefined]**
  - Verbesserung der Installationsanleitung für KI-Agenten, um zu verhindern, dass Agenten den `--ui`-Assistenten umgehen, und um Node-Versionsmanager automatisch zu erkennen. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) von @Molunerfinn

  - KI-Dokumentation aktualisiert, um NocoBase >= 2.1.0-beta.20 vorauszusetzen und die neueste Beta-Version zu empfehlen. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) von @Molunerfinn

  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) von @Molunerfinn

- **[client-v2]** Client v2 von Client v1 getrennt und seine Abhängigkeit von Client v1 entfernt ([#8937](https://github.com/nocobase/nocobase/pull/8937)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[undefined]** Fehler behoben, bei dem der Sprachwechsler falsche URLs generierte (z. B. `/cn/es/` anstelle von `/es/`) in der Dokumentationsseite. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) von @Molunerfinn

- **[client]** Popover maximale Höhe und Scroll-Schutzmechanismen eingestellt, sodass der Absendebereich erreichbar bleibt ([#9226](https://github.com/nocobase/nocobase/pull/9226)) von @jiannx

- **[Datenvisualisierung]** Fehler behoben: Leere Feldauswähler in der Diagrammabfragekonfiguration auf Flow-Seiten ([#9276](https://github.com/nocobase/nocobase/pull/9276)) von @2013xile

- **[Authentifizierung]** Fehler behoben: Alte Sitzungen blieben nach einer Passwortänderung aktiv ([#9261](https://github.com/nocobase/nocobase/pull/9261)) von @2013xile
