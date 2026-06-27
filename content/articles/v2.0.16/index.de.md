---
title: "NocoBase v2.0.16: Behebung, dass verbindbare Felder beim Verknüpfen von Datenblöcken unter externen Datenquellen nicht angezeigt werden"
description: "Versionshinweise zu v2.0.16"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung, dass verbindbare Felder nicht angezeigt wurden, wenn Datenblöcke unter externen Datenquellen verknüpft wurden ([#8848](https://github.com/nocobase/nocobase/pull/8848)) von @zhangzhonghe

  - Behobenes Problem, dass die Tabellenblockhöhe ungültig war ([#8842](https://github.com/nocobase/nocobase/pull/8842)) von @jiannx

  - Behobenes Problem, dass das Hinzufügen eines Datenblocks oder das Aktualisieren der Seite doppelte Aktualisierungen auslöste. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) von @gchust

- **[UI-Vorlagen]** Behobene Fehler bei der Verwendung der Bearbeitungsformularblock- und Detailblockvorlage. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) von @gchust

- **[Formularentwürfe]** Behobenes Problem, dass Formularentwurfsdaten verloren gingen, wenn das Popup mehrfach geöffnet wurde. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) von @gchust

- **[Lokalisierung]** Nicht gefundene Einträge werden im nicht-bearbeitenden Zustand der Seite nicht übermittelt. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) von @jiannx

- **[Aktion: Datensätze importieren Pro]** Behobenes Problem, dass bei doppelten Feldern in der Importkonfiguration keine Mehrfachauswahl möglich war. von @jiannx
