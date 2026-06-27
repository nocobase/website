---
title: "NocoBase v1.6.0-alpha.18: Unterstützung für IP-Einschränkungen"
description: "Versionshinweise zu v1.6.0-alpha.18"
---

### 🎉 Neue Funktionen

- **[WEB-Client]** Unterstützung für Berechtigungskonfiguration von Seiten-Tabs und Hinzufügen einer Routenverwaltungsseite ([#5955](https://github.com/nocobase/nocobase/pull/5955)) von @zhangzhonghe
Referenz: [Routen](https://docs.nocobase.com/handbook/routes)
- **[IP-Einschränkung]** Unterstützung für IP-Einschränkung. von @sheldon66
Referenz: [IP-Einschränkung](https://docs.nocobase.com/handbook/IP-restriction)
### 🚀 Verbesserungen

- **[Server]**
  - AesEncryptor in den Kern verschoben ([#6132](https://github.com/nocobase/nocobase/pull/6132)) von @chenos

  - 1. Server-Middleware hinzugefügt, um die IP-Adresse des Clients zu extrahieren.<br />2. Problem mit unendlichem Neuladen behoben, wenn eine IP blockiert ist.<br />3. Den `X-Forwarded-For` HTTP-Header im Proxy hinzugefügt, um die Weiterleitung für lokales Debugging zu ermöglichen. ([#6069](https://github.com/nocobase/nocobase/pull/6069)) von @sheldon66

### 🐛 Fehlerbehebungen

- **[Authentifizierung]** Migrationsregeln für ausgestellte Token und Token-Richtlinienkonfiguration aktualisiert. ([#6107](https://github.com/nocobase/nocobase/pull/6107)) von @sheldon66
