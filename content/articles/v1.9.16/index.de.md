---
title: "NocoBase v1.9.16: Optionen zur Fehlermeldungstransformation in der RESTful-API-Datenquellenkonfiguration hinzugefügt"
description: "Versionshinweise zu v1.9.16"
---

### 🎉 Neue Funktionen

- **[Datenquelle: REST-API]** Option `Fehlermeldungstransformator` zur Konfiguration von RESTful-API-Datenquellen hinzugefügt von @cgyrock

### 🚀 Verbesserungen

- **[Client]**
  - Zusammengeklappte Optionen beim Hovern in der Select-Komponente anzeigen ([#8029](https://github.com/nocobase/nocobase/pull/8029)) von @katherinehhh

  - Validierungsmeldungen für Untertabellen optimieren ([#8001](https://github.com/nocobase/nocobase/pull/8001)) von @katherinehhh

- **[Workflow]** "Haupt"-Datenquellenkontext für UserSelect hinzugefügt, um eine allgemeinere Komponente bereitzustellen, die auch an anderen Stellen verwendet werden kann ([#8010](https://github.com/nocobase/nocobase/pull/8010)) von @mytharcher

- **[Workflow: Genehmigung]** Allgemeine Komponente verwenden, um doppelten Code zu reduzieren von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Fehler beim Lazy Loading in Variable.Input behoben, der dazu führte, dass das Variablenoptionsmenü falsch neu gerendert wurde ([#8009](https://github.com/nocobase/nocobase/pull/8009)) von @mytharcher

- **[Aktion: Datensätze importieren]** Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn ein Feld in der importierten XLSX-Datei den Wert `null` hatte ([#8037](https://github.com/nocobase/nocobase/pull/8037)) von @mytharcher

- **[Workflow]** Problem behoben, bei dem die Warteschlange vor dem Veröffentlichen von Nachrichten geschlossen wurde ([#8003](https://github.com/nocobase/nocobase/pull/8003)) von @mytharcher

- **[Workflow: Unterworkflow]** Problem behoben, bei dem bei mehr als 200 Workflows in der Auswahl "N/A" angezeigt wurde von @mytharcher

- **[Workflow: Genehmigung]**
  - Berechtigungsproblem beim Abrufen von `approvalRecords.reassignee` aufgrund von Änderungen an `RemoteSelect` behoben von @mytharcher

  - Problem behoben, bei dem die Druckaktion nicht funktionierte, wenn die Seite bei geöffnetem Modal aktualisiert wurde von @mytharcher
