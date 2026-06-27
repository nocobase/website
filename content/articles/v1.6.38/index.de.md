---
title: "NocoBase v1.6.38: Fehlerbehebungen"
description: "Versionshinweise zu v1.6.38"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung des Problems, dass in Popups erstellte Blöcke eine falsche Sammlung haben ([#6961](https://github.com/nocobase/nocobase/pull/6961)) von @zhangzhonghe

  - Behebung des Problems, dass Standardwerte des Filterformulars in Unterseiten ungültig sind ([#6960](https://github.com/nocobase/nocobase/pull/6960)) von @zhangzhonghe

  - Assoziationssammlungsfelder aus externen Datenquellen können im Rollendaten-Tabellenbereich nicht erweitert werden ([#6958](https://github.com/nocobase/nocobase/pull/6958)) von @katherinehhh

  - Behebung des Problems, dass die Option 'Überlauf mit Auslassungspunkten' bei Beziehungsfeldern unwirksam ist ([#6967](https://github.com/nocobase/nocobase/pull/6967)) von @zhangzhonghe

  - Behebung des Problems, dass Werte von einzeiligen Textfeldern im einfachen Lesemodus als Array angezeigt werden ([#6968](https://github.com/nocobase/nocobase/pull/6968)) von @zhangzhonghe

- **[Authentifizierung]** Leistungsproblem durch Bereinigung abgelaufener Token ([#6981](https://github.com/nocobase/nocobase/pull/6981)) von @2013xile

- **[Dateimanager]** Behebung der Ali-OSS-Timeout-Konfiguration ([#6970](https://github.com/nocobase/nocobase/pull/6970)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebung des Initialisierers für die Werkbank, der von @mytharcher übersehen wurde

- **[Auth: OIDC]** Der Text des Anmelde-Buttons wurde nicht lokalisiert von @2013xile
