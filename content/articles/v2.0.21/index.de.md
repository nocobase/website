---
title: "NocoBase v2.0.21: Filterausführungsliste hinzugefügt"
description: "Versionshinweise zu v2.0.21"
---

### 🚀 Verbesserungen

- **[Workflow]** Liste der Filterausführungen hinzugefügt ([#8914](https://github.com/nocobase/nocobase/pull/8914)) von @mytharcher

- **[Workflow: Genehmigung]** Vermeidung der Konfiguration der Genehmiger-Oberfläche, wenn im Trigger keine Sammlung konfiguriert ist, von @mytharcher

### 🐛 Fehlerbehebungen

- **[resourcer]** Verhindert, dass das `filterByTk`-Parameter-Array bei mehr als 100 Elementen automatisch in ein Objekt umgewandelt wird ([#8908](https://github.com/nocobase/nocobase/pull/8908)) von @2013xile

- **[client]** Problem behoben, bei dem Nicht-Administratoren keine zugehörigen Feldwerte löschen konnten ([#8904](https://github.com/nocobase/nocobase/pull/8904)) von @jiannx

- **[Aktion: Datensätze importieren Pro]**
  - Problem behoben, bei dem im synchronen Modus ein Fehler beim Import auftrat, von @mytharcher

  - Problem behoben, bei dem mehr als ~30 Spalten einen Importfehler verursachten, da der Stream doppelt gelesen wurde, von @mytharcher

- **[Workflow: Genehmigung]** Problem der Gleichzeitigkeit beim Hinzufügen von Bearbeitern behoben, von @mytharcher
