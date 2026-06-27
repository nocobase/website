---
title: "NocoBase v1.9.0-alpha.15: Verwendung des standardmäßigen Systemloggers für die Nachrichtenwarteschlange"
description: "Versionshinweise zu v1.9.0-alpha.15"
---

### 🚀 Verbesserungen

- **[auth]** Unterstützung der Verwendung von Punkten in Benutzernamen ([#7504](https://github.com/nocobase/nocobase/pull/7504)) von @2013xile
- **[server]** Verwendung des standardmäßigen Systemloggers für die Nachrichtenwarteschlange ([#7480](https://github.com/nocobase/nocobase/pull/7480)) von @mytharcher
- **[snowflake-id]** Änderung der IDs von Systemtabellen mit automatisch inkrementierenden Primärschlüsseln, aber ohne eindeutige Identifikatoren, auf 53-Bit-Snowflake-ähnliche IDs ([#7465](https://github.com/nocobase/nocobase/pull/7465)) von @2013xile
- **[Kalender]** Unterstützung der Gebietsschema-Zuordnungsanzeige für Kalenderkopfzeilen ([#7508](https://github.com/nocobase/nocobase/pull/7508)) von @katherinehhh
- **[Workflow: Manueller Knoten]** Unterstützung zum Anzeigen und Fortsetzen ausstehender manueller Aufgaben innerhalb deaktivierter Workflows ([#7493](https://github.com/nocobase/nocobase/pull/7493)) von @mytharcher
- **[Theme-Editor]** Hinzufügen der Unterstützung für die Farbanpassung des Seitenmenüs ([#7483](https://github.com/nocobase/nocobase/pull/7483)) von @duannyuuu
- **[Redis-Warteschlangenadapter]** Verwendung des standardmäßigen Systemloggers für den Redis-Nachrichtenwarteschlangenadapter von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebung des Problems, dass das Popup zur Schaltflächensymbolkonfiguration überdeckt/überlappt wird ([#7506](https://github.com/nocobase/nocobase/pull/7506)) von @zhangzhonghe
  - Behebung des Problems, dass die Popover-Komponente überlappt/überdeckt wird ([#7491](https://github.com/nocobase/nocobase/pull/7491)) von @zhangzhonghe
  - Schreibgeschützte Select/Multiselect/Date/Richtext-Felder sind im öffentlichen Formular weiterhin bearbeitbar ([#7484](https://github.com/nocobase/nocobase/pull/7484)) von @katherinehhh
- **[Workflow]**

  - Behebung des Problems, dass eine falsche Abonnementlogik in der Hintergrundaufgabenwarteschlange des Workflows dazu führte, dass Ausführungsnachrichten falsch behandelt wurden ([#7507](https://github.com/nocobase/nocobase/pull/7507)) von @mytharcher
  - Behebung eines potenziellen Fehlers im Zusammenhang mit dem Workflow-Log-Caching ([#7490](https://github.com/nocobase/nocobase/pull/7490)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** Behebung des Problems der fehlerhaften Analyse von Benachrichtigungslinks ([#7509](https://github.com/nocobase/nocobase/pull/7509)) von @mytharcher
- **[Datenquelle: REST-API]** Behebung der URL-Validierungsregeln für die REST-API von @katherinehhh
- **[HTTP-Anfrageverschlüsselung]** Behebung des Problems, dass die Anforderungsparameter den nativen URLSearchParams-Typ nicht unterstützen von @mytharcher
- **[Vorlagendruck]** Unterstützung des chinaRegions-Feldes von @jiannx
- **[E-Mail-Manager]** Behebung des Problems mit fehlerhaften Betreffzeilen von @jiannx
