---
title: "NocoBase v2.0.0-beta.21: Unterstützung der Konfiguration von Feldern des Assoziationssammlungsfelds im Formularblock"
description: "Versionshinweise zu v2.0.0-beta.21"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für die Konfiguration von Feldern der Assoziationssammlung im Formularblock ([#8578](https://github.com/nocobase/nocobase/pull/8578)) von @katherinehhh

- **[Aktion: Datensatz duplizieren]** 2.0 Duplizieraktion hinzugefügt ([#8580](https://github.com/nocobase/nocobase/pull/8580)) von @katherinehhh

- **[Workflow]** Unterstützung zum Kopieren, Einfügen und Verschieben von Knoten per Drag & Drop auf der Workflow-Leinwand ([#8559](https://github.com/nocobase/nocobase/pull/8559)) von @mytharcher

### 🚀 Verbesserungen

- **[Flow-Engine]** Verbesserte Autovervollständigung und Code-Hinweise im JS-Modell-Code-Editor. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) von @gchust

- **[Workflow: Genehmigung]** Unterstützung für JS-Felder entfernt von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung eines potenziellen „read hidden“-Renderfehlers im Nicht-Konfigurationsmodus. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) von @gchust

  - Behebung, dass die Untertabelle (Inline-Bearbeitung) nach dem Wechsel in die schreibgeschützte Ansicht im Bearbeitungsformular weiterhin Spalten im Bearbeitungsmodus anzeigt ([#8589](https://github.com/nocobase/nocobase/pull/8589)) von @katherinehhh

- **[Flow-Engine]** Behebung eines Problems, bei dem die Verwendung einer Blockvorlage im Modus „Duplizieren“ dazu führte, dass beim Klicken auf eine Aktionsschaltfläche aus dem Block ein leeres Popup erschien. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) von @gchust

- **[Block: Karte]** Doppelte Konfigurationsoptionen „Als Vorlage speichern“ im Kartenblock behoben ([#8584](https://github.com/nocobase/nocobase/pull/8584)) von @katherinehhh
