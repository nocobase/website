---
title: "NocoBase v1.9.27: Fehlertoleranz hinzugefügt, wenn fehlende App-Instanzen Fehler beim Abrufen von App-Wartungsnachrichten verursachen"
description: "Versionshinweise zu v1.9.27"
---

### 🚀 Verbesserungen

- **[Server]** Fehlertoleranz hinzugefügt, wenn fehlende App-Instanzen Fehler beim Abrufen von App-Wartungsnachrichten verursachen ([#8196](https://github.com/nocobase/nocobase/pull/8196)) von @2013xile

- **[Fehlerbehandlung]** Rohdatenbank-Fehlermeldungen bei SQL-Syntaxfehlern nicht mehr preisgeben, um die Offenlegung des Datenbanktyps zu vermeiden ([#8195](https://github.com/nocobase/nocobase/pull/8195)) von @2013xile

- **[Workflow]** Unterstützung zur Verwendung alter Konfigurationen beim Erstellen neuer Workflows in duplizierten Workflows ([#8165](https://github.com/nocobase/nocobase/pull/8165)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Workflow]** Problem behoben, bei dem nur ein einziger Datensatz in der Datensatzliste zur manuellen Ausführung angezeigt wurde ([#8187](https://github.com/nocobase/nocobase/pull/8187)) von @mytharcher

- **[Sammlung: Verbindung zu externen Daten (FDW)]** Fehler bei Triggern beim Verbinden mit Tabellen mit Großbuchstaben behoben von @2013xile

- **[Workflow: Genehmigung]** Problem behoben, bei dem der Status nicht zugehöriger Genehmigungsdatensätze durch die Genehmigungsaktion fälschlicherweise auf `UNPROCESSED` geändert wurde von @mytharcher
