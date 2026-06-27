---
title: "NocoBase v1.6.0-alpha.8: Fügt einen festen globalen Eintrag für alle Arten von Workflow-Aufgaben hinzu"
description: "Versionshinweise zu v1.6.0-alpha.8"
---

### 🎉 Neue Funktionen

- **[Workflow: Manueller Knoten]** Füge einen festen globalen Einstiegspunkt für alle Arten von Workflow-Aufgaben hinzu ([#5858](https://github.com/nocobase/nocobase/pull/5858)) von @mytharcher

- **[Passwortrichtlinie]** Neues Plugin hinzugefügt: Passwortrichtlinie, zum Festlegen der Passwortregeln und der Sperrrichtlinie für alle Benutzer von @2013xile
Referenz: [Passwortrichtlinie und Benutzersperrung](https://docs.nocobase.com/handbook/password-policy)
### 🚀 Verbesserungen

- **[Client]** Filter-Schlüsselwort "Sicherheit" für den Plugin-Manager hinzugefügt ([#5977](https://github.com/nocobase/nocobase/pull/5977)) von @2013xile

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** API für manuelle Ausführung geändert von @mytharcher

### 🐛 Fehlerbehebungen

- **[Workflow]** Problem behoben, bei dem `onChange` in der `WorkflowVariableWrapper`-Komponente nicht funktionierte ([#5964](https://github.com/nocobase/nocobase/pull/5964)) von @mytharcher
