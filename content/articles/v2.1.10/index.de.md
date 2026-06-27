---
title: "NocoBase v2.1.10: Unterstützung für die Verwendung aktueller Benutzervariablen in Remote-MCP-Client-URLs und Headern hinzugefügt"
description: "Versionshinweise zu v2.1.10"
---

### 🎉 Neue Funktionen

- **[ai]** Unterstützung für die Verwendung aktueller Benutzervariablen in URLs und Headern von entfernten MCP-Clients hinzugefügt. ([#9828](https://github.com/nocobase/nocobase/pull/9828)) von @cgyrock
- **[cli]** Unterstützung für Installations-Hook-Skripte ([#9824](https://github.com/nocobase/nocobase/pull/9824)) von @chenos

### 🚀 Verbesserungen

- **[client-v2]** Feldvalidierungsregeln werden jetzt als schreibgeschützte, vererbte Regeln in den UI-Feldvalidierungseinstellungen angezeigt. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) von @katherinehhh
- **[Flow-Engine]** Der aktuelle Block wird beim Erstellen von KI-Mitarbeitern über die Flow Surface API standardmäßig zum Benutzerkontext hinzugefügt. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) von @gchust

### 🐛 Fehlerbehebungen

- **[client-v2]** Problem behoben, bei dem sich Blöcke nach Aktualisierung der Blockeinstellungen nicht aktualisierten. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) von @gchust
- **[Workflow: Benutzerdefiniertes Aktionsereignis]**

  - Problem behoben, bei dem Frontend-Variablen in Anfrage-Payloads bei benutzerdefinierten Kontext-Trigger-Workflow-Aktionen vor der Übermittlung in v2-Aktionsschaltflächen aufgelöst werden ([#9853](https://github.com/nocobase/nocobase/pull/9853)) von @mytharcher
  - Der v2-Auswahlselektor für benutzerdefinierte Aktions-Workflow-Bindungen wurde korrigiert, sodass aktivierte Workflows mit booleschen Werten gefiltert und korrekt aufgelistet werden können. ([#9865](https://github.com/nocobase/nocobase/pull/9865)) von @mytharcher
- **[Block: Gantt]** Problem behoben, bei dem die Einstellungen für Gantt-Aufgaben-Popup-Vorlagen nicht korrekt angewendet oder gelöscht wurden. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) von @jiannx
- **[Workflow: Genehmigung]**

  - Validierung des Genehmigungsaktionsknotens korrigiert, um `null` für `applyDetail` oder `approvalUid` zuzulassen und die Verarbeitung zu überspringen, sofern kein String-Referenz bereitgestellt wird von @mytharcher
  - Problem behoben, bei dem zugehörige Genehmigungen nicht korrekt geladen oder aktualisiert wurden von @zhangzhonghe
