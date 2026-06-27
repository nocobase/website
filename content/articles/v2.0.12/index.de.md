---
title: "NocoBase v2.0.12: Sperre für geplante Backups über Cluster-Knoten hinzugefügt"
description: "Versionshinweise zu v2.0.12"
---

### 🚀 Verbesserungen

- **[Redis Lock Adapter]** Refaktorierung aufgrund geänderter API von LockManager im Haupt-Repository von @mytharcher

- **[Backup-Manager]** Hinzufügen einer Sperre für geplante Sicherungen über Cluster-Knoten hinweg von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - V2-Blöcke zeigen jetzt nur noch Aktionen an, die von der aktuellen Datenquelle unterstützt werden ([#8803](https://github.com/nocobase/nocobase/pull/8803)) von @zhangzhonghe

  - Behebung eines Styling-Problems des Zurück-Buttons auf v2-Unterseiten ([#8810](https://github.com/nocobase/nocobase/pull/8810)) von @zhangzhonghe

- **[Lock-Manager]** Behebung eines Wettlaufsbedingungsproblems des Lock-Managers ([#8734](https://github.com/nocobase/nocobase/pull/8734)) von @mytharcher

- **[Server]** Behebung des Fehlerproblems bei Datenabfragen von Nicht-Datenbank-Datenquellen ([#8776](https://github.com/nocobase/nocobase/pull/8776)) von @cgyrock

- **[Zugriffskontrolle]** Behebung eines Datenänderungsfehlers bei Restful-API-Datenquellen. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) von @cgyrock

- **[Aktion: Datensätze exportieren]** Problem behoben, bei dem das belongsToArray-Feld im exportierten Excel leer war ([#8787](https://github.com/nocobase/nocobase/pull/8787)) von @cgyrock
