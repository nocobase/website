---
title: "NocoBase v2.0.25: Behebung von Leistungsproblemen durch JSON-Feld beim Laden der Genehmigungsdatensatzliste"
description: "Versionshinweise zu v2.0.25"
---

### 🚀 Verbesserungen

- **[Workflow: Genehmigung]** Behebt ein durch JSON-Felder verursachtes Leistungsproblem beim Laden der Genehmigungsdatensatzliste von @mytharcher

### 🐛 Fehlerbehebungen

- **[Server]** Ändert den Schließzeitpunkt von Pub-Sub auf `beforeStop`, um zu vermeiden, dass Nachrichten nach dem Schließen der Datenbank gesendet oder verarbeitet werden ([#8934](https://github.com/nocobase/nocobase/pull/8934)) von @mytharcher

- **[Lokalisierung]** Verhindert localizationTexts:missing-Anfragen bei verweigerter Berechtigung ([#8903](https://github.com/nocobase/nocobase/pull/8903)) von @chenos

- **[Datenquelle: Externes Oracle]** Behebt einen Fehler, der beim Laden der externen Oracle-Datenquelle auftritt von @2013xile
