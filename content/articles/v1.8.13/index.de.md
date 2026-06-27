---
title: "NocoBase v1.8.13: Signaturbezogene Konfigurationsoptionen hinzugefügt"
description: "Versionshinweise zu v1.8.13"
---

### 🎉 Neue Funktionen

- **[Auth: SAML 2.0]** Signaturbezogene Konfigurationsoptionen hinzugefügt von @2013xile

### 🚀 Verbesserungen

- **[Workflow: JavaScript]** Cache auf App-Cache umgestellt, um Fehler im Cluster-Modus zu vermeiden von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Tooltip zeigt [object Object] beim Hovern im Aktionspanel an – behoben ([#7322](https://github.com/nocobase/nocobase/pull/7322)) von @katherinehhh

  - Bei Verwendung von Variablen zur Festlegung von Feldstandardwerten in Filterformularen wird bei leerem Variablenwert das ursprüngliche Variablenstring im Eingabefeld angezeigt ([#7335](https://github.com/nocobase/nocobase/pull/7335)) von @zhangzhonghe

- **[Collection: Tree]** Pfadsynchronisationslogik von Baumstrukturen behoben ([#7330](https://github.com/nocobase/nocobase/pull/7330)) von @ChimingLiu
