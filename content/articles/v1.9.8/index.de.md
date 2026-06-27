---
title: "NocoBase v1.9.8: Fehlerbehebungen"
description: "Versionshinweise zu v1.9.8"
---

### 🐛 Fehlerbehebungen

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebt den Fehler, der durch das Abhören nicht vorhandener externer Datenquellenereignisse verursacht wurde – von @mytharcher
- **[Vorlagendruck]** Analysiert die Variablen im Filter – von @jiannx
- **[Workflow: Genehmigung]** Behebt ein Problem, bei dem Race Conditions während der gleichzeitigen Genehmigungsverarbeitung durch mehrere Genehmiger dazu führen konnten, dass ein Workflow-Knoten mehr als einmal ausgeführt wurde – von @mytharcher
