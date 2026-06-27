---
title: "NocoBase v1.6.0-alpha.21: Fehlerbehebung bei App-Fehler, wenn IP-Einschränkungskonfiguration nicht vorhanden ist"
description: "Versionshinweise zu v1.6.0-alpha.21"
---

### 🎉 Neue Funktionen

- **[IP-Einschränkung]** Behebung eines App-Fehlers, wenn die IP-Einschränkungskonfiguration nicht vorhanden ist. von @sheldon66

### 🐛 Fehlerbehebungen

- **[Authentifizierung]** Aktualisierung der Client-Authentifizierungs-Middleware-Logik, um Token-Aktualisierungsfehler aufgrund von Parallelität zu verhindern. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) von @sheldon66
