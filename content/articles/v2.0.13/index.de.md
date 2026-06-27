---
title: "NocoBase v2.0.13 : Unterstützung für Trigger-Workflow-Button zur Konfiguration des Ablaufs nach Erfolg"
description: "Versionshinweise zu v2.0.13"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für die Konfiguration des Workflow-Buttons nach erfolgreichem Ablauf ([#8726](https://github.com/nocobase/nocobase/pull/8726)) von @mytharcher

### 🚀 Verbesserungen

- **[Workflow]** Alle Knotentypen im Hinzufügemenü anzeigen, auch wenn sie nicht verfügbar sind ([#8828](https://github.com/nocobase/nocobase/pull/8828)) von @mytharcher

- **[KI: Wissensdatenbank]** Überarbeitete Logik zum Laden von Wissensdatenbank-Dokumenten. von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behoben: Das Detailblock einer SQL-Sammlung verursachte einen Fehler beim Laden von Daten. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) von @gchust

  - Behoben: Die Feldverknüpfungsregeln im Detailblock wurden beim ersten Rendern nicht wirksam. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) von @gchust

- **[Office-Dateivorschau]** Modalhöhe auf einen geeigneten Wert geändert, um mehr Dateiinhalte anzuzeigen ([#8835](https://github.com/nocobase/nocobase/pull/8835)) von @mytharcher

- **[UI-Vorlagen]** Behoben: Der Referenzblock-Ereignisfluss im Tabellenblock konnte nicht mit einem Zeilenklick-Ereignisfluss konfiguriert werden. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) von @gchust
