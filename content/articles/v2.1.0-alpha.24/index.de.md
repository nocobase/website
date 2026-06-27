---
title: "NocoBase v2.1.0-alpha.24: Anpassung der Interaktion zur Konfiguration von Fähigkeiten/Werkzeugen für KI-Mitarbeiteranweisungen"
description: "Versionshinweise zu v2.1.0-alpha.24"
---

### 🚀 Verbesserungen

- **[undefined]** Verbesserung der Installationsanleitung für KI-Agenten, um zu verhindern, dass Agenten den `--ui`-Assistenten umgehen, und um die automatische Erkennung von Node-Version-Managern zu ermöglichen. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) von @Molunerfinn

- **[KI-Mitarbeiter]**
  - Anpassung der Interaktion zur Konfiguration von Fähigkeiten/Werkzeugen in der KI-Mitarbeiter-Anweisung ([#9232](https://github.com/nocobase/nocobase/pull/9232)) von @cgyrock

  - Entfernung des empfohlenen Modells in der LLM-Dienstkonfiguration ([#9228](https://github.com/nocobase/nocobase/pull/9228)) von @cgyrock

- **[Workflow: JavaScript]** Aktualisierung von Docker-Images, CI-Workflows und der JavaScript-Sandbox-Abhängigkeit des Workflows für die Kompatibilität mit Node.js 22. ([#9245](https://github.com/nocobase/nocobase/pull/9245)) von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[undefined]** Behebung, dass der Sprachwechsler falsche URLs generiert (z. B. `/cn/es/` anstelle von `/es/`) in der Dokumentationsseite. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) von @Molunerfinn

- **[KI-Mitarbeiter]**
  - Behebung des Fehlers in der API zum Abrufen der KI-Mitarbeiterliste ([#9241](https://github.com/nocobase/nocobase/pull/9241)) von @cgyrock

  - Verbessertes Verhalten der Atlas-Aufgabendelegation und Aktualisierung von Viz zur Verwendung des Geschäftsbericht-Workflows für Berichtsanfragen ([#9229](https://github.com/nocobase/nocobase/pull/9229)) von @2013xile
