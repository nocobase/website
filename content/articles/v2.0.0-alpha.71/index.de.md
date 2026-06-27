---
title: "NocoBase v2.0.0-alpha.71: Unterstützung für konfigurierbare Blockhöhe"
description: "Versionshinweise zu v2.0.0-alpha.71"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Unterstützung für die Konfiguration von Browser-Tab-Titeln für Seiten, Seiten-Tabs, Popups und Popup-Tabs ([#8590](https://github.com/nocobase/nocobase/pull/8590)) von @zhangzhonghe

  - Unterstützung für die Konfiguration von Feldern des assoziierten Sammlungsfeldes im Formularblock ([#8578](https://github.com/nocobase/nocobase/pull/8578)) von @katherinehhh

- **[Block: GridCard]** Unterstützung für konfigurierbare Blockhöhe ([#8583](https://github.com/nocobase/nocobase/pull/8583)) von @katherinehhh

- **[Aktion: Datensatz duplizieren]** 2.0-Duplizieraktion hinzugefügt ([#8580](https://github.com/nocobase/nocobase/pull/8580)) von @katherinehhh

- **[Workflow: Genehmigung]** ACL-Steuerung für Genehmigungs-APIs hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Verwendung unabhängiger Feldmodelle für Assoziationsfelder in Filterformularen ([#8511](https://github.com/nocobase/nocobase/pull/8511)) von @zhangzhonghe

- **[Workflow: CC]** Überarbeitung des Workflow-CC-Plugins zur Unterstützung der FlowModel-Architektur mit v1/v2-Kompatibilität ([#8405](https://github.com/nocobase/nocobase/pull/8405)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Flow-Engine]**
  - Korrektur des falschen Ausführungskontexts für "ctx.sql" in JS-Modellen. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) von @gchust

  - Behebung eines Problems, bei dem Blob-Objekte im JS-Block nicht erstellt werden konnten. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) von @gchust

- **[Client]**
  - Behebung eines Problems, bei dem Tabellenspalten nach dem Klicken auf "Ausführen" im JS-Spalteneditor nicht neu gerendert wurden. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) von @gchust

  - Behebung eines potenziellen "read hidden"-Renderfehlers im Nicht-Konfigurationsmodus. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) von @gchust

  - Behebung, dass Untertabellen (Inline-Bearbeitung) nach dem Wechsel in die schreibgeschützte Ansicht im Bearbeitungsformular weiterhin Spalten im Bearbeitungsmodus anzeigen ([#8589](https://github.com/nocobase/nocobase/pull/8589)) von @katherinehhh

- **[Flow-Engine]** Behebung eines Problems, bei dem die Verwendung einer Blockvorlage im "Duplizieren"-Modus dazu führte, dass das Popup leer blieb, wenn eine Aktionsschaltfläche aus dem Block angeklickt wurde. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) von @gchust

- **[Feldkomponente: Maske]** Behebung eines Problems, bei dem das Popup zur Maskenfeldeinstellung nicht alle Benutzerrollen korrekt laden konnte. von @gchust

- **[Workflow: Genehmigung]** Korrektur der falschen ID zum Laden des Detaildatensatzes von @mytharcher
