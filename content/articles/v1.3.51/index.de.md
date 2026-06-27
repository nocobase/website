---
title: "NocoBase v1.3.51: Fehlerbehebungen"
description: "Versionshinweise zu v1.3.51"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung der Feldberechtigungsprüfung, die nicht durch den Assoziationsfeldkontext beeinflusst wurde ([#5672](https://github.com/nocobase/nocobase/pull/5672)) von @katherinehhh

  - Behebung, dass beim Speichern von Verknüpfungsregeln leere Werte in statische leere Werte geändert wurden ([#5667](https://github.com/nocobase/nocobase/pull/5667)) von @katherinehhh

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Behebung des Problems, dass das Abrufen von Datensätzen in einer Assoziationssammlung mit Viele-zu-viele (Array)-Feldern einen Fehler verursacht ([#5661](https://github.com/nocobase/nocobase/pull/5661)) von @2013xile

- **[Block: Gantt]** Behebung, dass die Gantt-Blockvorlage beim Hinzufügen fälschlicherweise den Kalenderblock aufruft ([#5673](https://github.com/nocobase/nocobase/pull/5673)) von @katherinehhh

- **[Datenvisualisierung]** Behebung des Problems, dass Datentransformationen im Tooltip von Doppelachsen-Diagrammen nicht funktionieren ([#5649](https://github.com/nocobase/nocobase/pull/5649)) von @2013xile
