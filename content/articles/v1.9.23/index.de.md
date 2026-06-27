---
title: "NocoBase v1.9.23: Auswahl der ID für Importfelder ermöglicht"
description: "Versionshinweise zu v1.9.23"
---

### 🚀 Verbesserungen

- **[auth]** Behebung von [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) von @2013xile

- **[Aktion: Datensätze importieren]** Auswahl der ID für Importfelder ermöglicht ([#8132](https://github.com/nocobase/nocobase/pull/8132)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Server]** Problem behoben, bei dem ausgelöste Workflows nach dem Importieren von Daten nicht zur Verarbeitungswarteschlange hinzugefügt wurden. Dadurch wird sichergestellt, dass Workflows unmittelbar nach dem Import wie erwartet ausgeführt werden ([#8121](https://github.com/nocobase/nocobase/pull/8121)) von @mytharcher
