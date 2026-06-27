---
title: "NocoBase v2.1.3: Normalisieren der App-Kompatibilitäts-Build-Versionen"
description: "Versionshinweise zu v2.1.3"
---

### 🚀 Verbesserungen

- **[cli]**
  - Normalisiere App-Kompatibilitäts-Build-Versionen ([#9763](https://github.com/nocobase/nocobase/pull/9763)) von @chenos
  - Unterstützung zum Aktualisieren von Skills auf eine bestimmte Version ([#9760](https://github.com/nocobase/nocobase/pull/9760)) von @chenos

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem Felder in horizontalen Unterformularen zu schmal waren, um Daten anzuzeigen ([#9755](https://github.com/nocobase/nocobase/pull/9755)) von @zhangzhonghe
- **[Datenquellen-Manager]**

  - Problem mit leerem Bearbeitungsfeld-Drawer behoben, das durch wiederholtes Neu-Rendern auf der Seite „Felder konfigurieren“ der v1 externen Datenquelle verursacht wurde. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) von @katherinehhh
  - Problem behoben, bei dem das Löschen der aktiven Sammlungskategorie im v1 Datenquellen-Manager den Tab „Alle Sammlungen“ leer lassen konnte. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) von @katherinehhh
- **[Async-Task-Manager]** Falsche Anfrage-IDs in den Logs des Async-Task-Workers behoben ([#9686](https://github.com/nocobase/nocobase/pull/9686)) von @2013xile
- **[Workflow: SQL-Knoten]** Problem behoben, bei dem die Migration von Legacy-Template-Variablen im SQL-Workflow für einige Beta-Versions-Benutzer übersprungen wurde. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) von @mytharcher
- **[KI-Mitarbeiter]**

  - Verlust der Nachrichtenkonfiguration in Workflow-LLM-Knoten behoben. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) von @cgyrock
  - Problem behoben, bei dem in den KI-Mitarbeiter-Dialog eingefügte Anhänge nicht entfernt werden konnten. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) von @cgyrock
- **[Block: Kanban]** URL-Unterstützung für Kalender und zugehörige Popups behoben. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) von @jiannx
- **[Workflow: Genehmigung]** Problem behoben, bei dem verknüpfte Daten in v2-Genehmigungsformularen nicht angezeigt wurden von @zhangzhonghe
