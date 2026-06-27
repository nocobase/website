---
title: "NocoBase v1.9.0-alpha.8: Optimierung der Leistung beim Wechseln von Popup-Tabs"
description: "Versionshinweise zu v1.9.0-alpha.8"
---

### 🚀 Verbesserungen

- **[Client]** Optimierung der Leistung beim Wechseln von Popup-Tabs ([#7353](https://github.com/nocobase/nocobase/pull/7353)) von @zhangzhonghe
- **[Office-Dateivorschau]** Unterstützung für die Vorschau von `.odt`-Dateien hinzugefügt ([#7347](https://github.com/nocobase/nocobase/pull/7347)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem der zuvor gespeicherte Datenbereich bei der individuellen Konfiguration von Berechtigungen nicht vorausgewählt war ([#7288](https://github.com/nocobase/nocobase/pull/7288)) von @aaaaaajie
  - Fehler beim Massenlöschen von Sammlungen behoben ([#7345](https://github.com/nocobase/nocobase/pull/7345)) von @aaaaaajie
- **[Workflow]** Vermeidung von Fehlern, die durch das Veröffentlichen in der Ereigniswarteschlange beim Stoppen verursacht werden ([#7348](https://github.com/nocobase/nocobase/pull/7348)) von @mytharcher
- **[Workflow: Paralleler Knoten]** Problem behoben, bei dem der parallele Knoten nach der Fortsetzung unter MySQL ausgesetzt blieb ([#7346](https://github.com/nocobase/nocobase/pull/7346)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Aktualisierung von Verknüpfungen beim Einreichen eines Entwurfs behoben von @mytharcher
  - Problem behoben, bei dem Verknüpfungsregeln im ursprünglichen Genehmigungsdetailblock nicht funktionierten von @mytharcher
