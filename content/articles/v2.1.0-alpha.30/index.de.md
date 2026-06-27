---
title: "NocoBase v2.1.0-alpha.30: Behebung des Problems gelegentlicher Fehler bei Verwendung des DeepSeek v4-Modells durch KI-Mitarbeiter"
description: "Versionshinweise zu v2.1.0-alpha.30"
---

### 🚀 Verbesserungen

- **[undefined]** Feishu-Fehlermeldung für manuelle Release-Workflows hinzugefügt ([#9349](https://github.com/nocobase/nocobase/pull/9349)) von @Molunerfinn
- **[IdP: OAuth]** OAuth-Sitzungen verwenden jetzt dieselben Ablaufeinstellungen wie die System-Token-Richtlinie ([#9345](https://github.com/nocobase/nocobase/pull/9345)) von @2013xile

### 🐛 Fehlerbehebungen

- **[client-v2]** Behoben: Laden von Remote-Plugins, sodass Plugin-URLs, die bereits auf `.js` enden, nicht zu doppelten `.js.js`-Pfaden aufgelöst werden. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) von @Molunerfinn
- **[cli]** Behoben: CLI-Boolesche Optionen können jetzt mit negierten Flags deaktiviert werden ([#9337](https://github.com/nocobase/nocobase/pull/9337)) von @2013xile
- **[KI-Mitarbeiter]**

  - Behebung des Problems gelegentlicher Fehler bei Verwendung des DeepSeek v4-Modells durch KI-Mitarbeiter ([#9348](https://github.com/nocobase/nocobase/pull/9348)) von @cgyrock
  - Behebung des Problems, dass der Workflow-KI-Mitarbeiter-Knoten nach dem Wechsel von KI-Mitarbeitern Fähigkeiten löscht ([#9342](https://github.com/nocobase/nocobase/pull/9342)) von @cgyrock
- **[Datenquelle: Haupt]** Absturz verhindert, wenn `fields` während des Sammlungsladens undefiniert ist ([#9174](https://github.com/nocobase/nocobase/pull/9174)) von @saraTabbane
- **[UI-Vorlagen]** Behoben: Problem, bei dem die Popup-Vorlagenliste verfügbare Vorlagen nicht korrekt laden konnte. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) von @gchust
- **[Block: Kanban]** Behoben: Kanban-verknüpfte Blöcke verwendeten unaufgelöste Laufzeit-Ressourcenparameter in Popup- oder Sekundärseiten-Kontexten. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) von @jiannx
- **[Workflow: Genehmigung]** Behebung des Problems, dass Filter- und andere Abfrageparameter jetzt in der API zur Auflistung verfügbarer Genehmigungs-Workflows funktionieren von @mytharcher
