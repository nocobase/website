---
title: "NocoBase v2.0.60: Verbesserung des LLM-Basis-URL-Felds, sodass es globale Variablen in Erstellungs- und Bearbeitungsformularen verwenden kann"
description: "Versionshinweise zu v2.0.60"
---

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]** Verbessertes LLM-Basis-URL-Feld, sodass es global gültige Variablen in Erstellungs- und Bearbeitungsformularen verwenden kann. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]** Korrigierte die Badge-Breite in der oberen Navigationsleiste ([#9607](https://github.com/nocobase/nocobase/pull/9607)) von @zhangzhonghe
- **[KI-Mitarbeiter]** Behoben: KI-Shortcut-Buttons erhielten einen leeren Blockkontext, nachdem referenzierte Tabellenblöcke entfernt wurden. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) von @cgyrock
- **[Migrationsmanager]** Korrigierte PostgreSQL-Migrationsdiffs, sodass geerbte Spalten von Kindtabellen nicht gelöscht werden, wenn eine lokale Spalte zu einer geerbten wird. von @hongboji
