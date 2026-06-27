---
title: "NocoBase v1.4.21: Unterstützung von Verknüpfungsregeln im Detailblock zum Ausblenden (Wert beibehalten)"
description: "Versionshinweise zu v1.4.21"
---

### 🚀 Verbesserungen

- **[Client]** Unterstützung von Verknüpfungsregeln im Detailblock zum Ausblenden (reservierter Wert) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehlender öffentlicher Pfad in Icon-Dateipfaden behoben ([#6034](https://github.com/nocobase/nocobase/pull/6034)) von @chenos

  - Problem behoben, bei dem Formularverknüpfungsregeln fehlschlugen, wenn sie von Feldwerten aus Untertabellen abhingen ([#5876](https://github.com/nocobase/nocobase/pull/5876)) von @zhangzhonghe

  - Falsches Feld der Variable 'Aktueller Datensatz' in Unterdetails behoben ([#6030](https://github.com/nocobase/nocobase/pull/6030)) von @zhangzhonghe

- **[Backup-Manager]** Fehler beim Backup-Download behoben, wenn die Umgebungsvariable API_BASE_PATH nicht /api ist, von @gchust
