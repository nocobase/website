---
title: "NocoBase v1.9.26: Unterstützung der `acl.registerSnippet`-API zum Zusammenführen von Snippet-Konfigurationen"
description: "Versionshinweise zu v1.9.26"
---

### 🚀 Verbesserungen

- **[ACL]** Unterstützung der `acl.registerSnippet`-API zum Zusammenführen von Snippet-Konfigurationen ([#8155](https://github.com/nocobase/nocobase/pull/8155)) von @mytharcher

- **[Zugriffskontrolle]** Verhindern, dass die Root-Rolle Benutzern zugewiesen wird ([#8180](https://github.com/nocobase/nocobase/pull/8180)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Lizenz-Einstellungen]**
  - Behebung eines TypeScript-Build-Fehlers in plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) von @jiannx

  - Lizenzoptimierung und Hinzufügen von Hinweistexten ([#7993](https://github.com/nocobase/nocobase/pull/7993)) von @jiannx

- **[Dateimanager]** Behebung des Problems, dass die Vorschau von `.txt`-Dateien auf OSS die falsche Zeichenkodierung verwendete ([#8161](https://github.com/nocobase/nocobase/pull/8161)) von @mytharcher

- **[Aktion: Datensätze importieren]** Synchrones Warten auf den Abschluss der durch den Import ausgelösten `afterCreate`-Ereignisse ([#8158](https://github.com/nocobase/nocobase/pull/8158)) von @2013xile

- **[Sammlung: Verbindung zu externen Daten (FDW)]** Behebung des Problems, dass das Laden von Tabellen mit Großbuchstaben im Namen fehlschlägt von @2013xile

- **[Datenquelle: Externer SQL Server]** Behebung von Problemen, bei denen die Optionen `encrypt` und `trustServerCertificate` nicht verfügbar waren von @2013xile
