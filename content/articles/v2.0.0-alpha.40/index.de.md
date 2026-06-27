---
title: "NocoBase v2.0.0-alpha.40: Optimierung des Toolbar-Stils, um das Verdecken von Symbolen zu verhindern"
description: "Versionshinweise zu v2.0.0-alpha.40"
---

### 🚀 Verbesserungen

- **[Flow-Engine]** Optimierung des Toolbar-Stils, um zu verhindern, dass Symbole verdeckt werden ([#7883](https://github.com/nocobase/nocobase/pull/7883)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Problem behoben, bei dem ACL-Berechtigungsdaten nach Abmeldung und erneuter Anmeldung nicht neu geladen wurden. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) von @gchust

- **[Client]** Probleme in den Formularelement-Einstellungen behoben ([#7867](https://github.com/nocobase/nocobase/pull/7867)) von @katherinehhh

- **[Datenvisualisierung]** SQL-Ressourcen-Debug-Modus nur während der Diagrammvorschau verwenden ([#7893](https://github.com/nocobase/nocobase/pull/7893)) von @heziqiang

- **[Multi-Space]** Multi-Space verknüpfte Benutzer von @jiannx

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem die Seitengröße des Ladekanals für Benachrichtigungen nicht ausreichte und die Liste daher nicht vollständig geladen wurde von @mytharcher

  - Ein Leistungsproblem behoben, das beim Abfragen der Liste der Genehmigungsdatensätze während der Genehmigungseinreichung auftrat von @mytharcher

  - Datumsformat auf den Genehmigungslisten-Karten im Aufgabencenter korrigiert, um das vollständige Datum und die Uhrzeit anzuzeigen von @mytharcher
