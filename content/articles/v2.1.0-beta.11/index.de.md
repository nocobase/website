---
title: "NocoBase v2.1.0-beta.11: Filterausführungsliste hinzugefügt"
description: "Versionshinweise zu v2.1.0-beta.11"
---

### 🚀 Verbesserungen

- **[Workflow]** Liste der Filterausführungen hinzugefügt ([#8914](https://github.com/nocobase/nocobase/pull/8914)) von @mytharcher

- **[Workflow: Genehmigung]** Vermeidung der Konfiguration der Genehmiger-Oberfläche, wenn im Trigger keine Sammlung konfiguriert ist, von @mytharcher

### 🐛 Fehlerbehebungen

- **[Server]** Problem behoben, bei dem vom Worker gesendete Lebenszyklus-Ereignisse zum Stoppen der bereitstellenden App führten ([#8906](https://github.com/nocobase/nocobase/pull/8906)) von @mytharcher

- **[Client]** Problem behoben, bei dem Nicht-Administratoren keine zugehörigen Feldwerte löschen konnten ([#8904](https://github.com/nocobase/nocobase/pull/8904)) von @jiannx

- **[Resourcer]** Verhindert, dass das `filterByTk`-Parameter-Array bei mehr als 100 Elementen automatisch in ein Objekt umgewandelt wird ([#8908](https://github.com/nocobase/nocobase/pull/8908)) von @2013xile

- **[Aktion: Datensätze importieren Pro]**
  - Problem behoben, bei dem beim Import im Synchronmodus ein Fehler ausgelöst wurde, von @mytharcher

  - Problem behoben, bei dem mehr als ~30 Spalten aufgrund eines doppelten Lesens des Streams zu einem Importfehler führten, von @mytharcher

- **[Workflow: Genehmigung]** Parallelitätsproblem beim Hinzufügen von Bearbeitern behoben, von @mytharcher

- **[Migrationsmanager]** Problem behoben, bei dem die Migration aufgrund eines Fehlers unterbrochen wurde, der dadurch verursacht wurde, dass die Zielumgebung die während des Upload-Migrationsprozesses erstellte neue Tabelle nicht hatte, von @Andrew1989Y
