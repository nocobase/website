---
title: "NocoBase v2.1.0-alpha.39: Client-v2-Unterstützung für das Kanban-Plugin hinzugefügt"
description: "Versionshinweise zu v2.1.0-alpha.39"
---

### 🎉 Neue Funktionen

- **[Block: Kanban]** Client-v2-Unterstützung für das Kanban-Plugin hinzugefügt ([#9475](https://github.com/nocobase/nocobase/pull/9475)) von @jiannx

### 🚀 Verbesserungen

- **[Client]** Gemeinsame Bedingungsauswertung zwischen v1- und v2-Apps ([#9522](https://github.com/nocobase/nocobase/pull/9522)) von @zhangzhonghe

- **[Lokalisierung]** Verbesserte Lina-Lokalisierungsübersetzungsaufgaben mit Übersetzungsbereich, Referenzspracheinstellungen und Schnellbearbeitung ([#9521](https://github.com/nocobase/nocobase/pull/9521)) von @2013xile

- **[KI-Mitarbeiter]** Hinweis bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank ([#9497](https://github.com/nocobase/nocobase/pull/9497)) von @cgyrock

- **[Benachrichtigungsmanager]** Warteschlangenstrategie geändert, um die Sendeleistung zu optimieren ([#9407](https://github.com/nocobase/nocobase/pull/9407)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Migration der Plugins block-workbench und workflow-custom-action-trigger zu Client v2, einschließlich ihrer Aktionsmodelle und des QR-Scanner-Ablaufs. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) von @jiannx

- **[Authentifizierung]** Implementierung der Authenticators-Einstellungsseite in Client-v2 und Auslieferung wiederverwendbarer Client-v2-Tabellen, Variableneingaben und Formular-Primitiven. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) von @Molunerfinn

- **[KI: Wissensdatenbank]** Hinweis bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank von @cgyrock

- **[Auth: SAML 2.0]** Client-v2-Einträge für die CAS- und SAML-Authentifizierungs-Plugins hinzugefügt, damit sie mit der v2-Anmeldeseite und den Authenticators-Einstellungen funktionieren. von @Molunerfinn

- **[Workflow: Genehmigung]** Verbesserung verwandter Genehmigungen mit Timeline-Karten von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Undefiniert]** nginx-Konfigurationspfade ausrichten ([#9528](https://github.com/nocobase/nocobase/pull/9528)) von @chenos

- **[cli-v1]** Fehlerbehebung beim Start der create-nocobase-app-Entwicklung durch Wiederverwendung verpackter App-Shells bei gleichzeitiger Aktivierung lokaler Plugin-Entwicklung. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) von @Molunerfinn

- **[Client]**
  - Behebung des Problems, dass Filterformulare keine aktuellen Formularvariablen verwenden können ([#9474](https://github.com/nocobase/nocobase/pull/9474)) von @zhangzhonghe

  - Behebung des Problems, dass ein Menü-Badge weiterhin einen Punkt anzeigt, wenn sein Wert 0 ist ([#9491](https://github.com/nocobase/nocobase/pull/9491)) von @zhangzhonghe

- **[Client-v2]**
  - Die gemeinsame v2-Tabellenkomponente zeigt jetzt standardmäßig den Seitenzahl-Auswähler an, was dem v1-Verhalten entspricht. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) von @Molunerfinn

  - Fehlerbehebung, dass die v2-Route des Kanban-Plugins nicht geladen werden konnte, weil dnd-kit-Abhängigkeiten nicht vom Client bereitgestellt wurden. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) von @jiannx

- **[Kalender]**
  - Fehlerbehebung des Cursor-Stils für Ereigniselemente im Kalender-Mehr-Ereignisse-Overlay ([#9519](https://github.com/nocobase/nocobase/pull/9519)) von @jiannx

  - Behebung des Problems, dass Kalender-Mehr-Elemente nicht vollständig angezeigt werden können ([#9492](https://github.com/nocobase/nocobase/pull/9492)) von @zhangzhonghe

- **[Lizenzeinstellungen]** Auflösung von symbolisch verlinkten gebündelten Abhängigkeiten ([#9518](https://github.com/nocobase/nocobase/pull/9518)) von @chenos

- **[KI-Mitarbeiter]**
  - Behebung des Problems, dass Operator-Rollenberechtigungen in KI-Mitarbeiter-Knoten nicht wirksam werden ([#9513](https://github.com/nocobase/nocobase/pull/9513)) von @cgyrock

  - Behebung von KI-Mitarbeiter-OSS-Dateilesefehlern ([#9493](https://github.com/nocobase/nocobase/pull/9493)) von @cgyrock

- **[Authentifizierung]** Verhindern, dass der Server abstürzt, wenn ein WebSocket-Auth-Token auf einen Authentifikator verweist, dessen Auth-Typ-Plugin entladen oder fehlt. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) von @Molunerfinn

- **[API-Dokumentation]** Fehlerbehebung der Sammlungs-API-Dokumentation, sodass Abfrageparameter sich nicht mehr gegenseitig stören ([#9442](https://github.com/nocobase/nocobase/pull/9442)) von @jiannx

- **[Datenquelle: Haupt]** Behebung des Problems, dass Feldoptionen nach dem Synchronisieren von Feldern in das Schema geschrieben werden ([#9505](https://github.com/nocobase/nocobase/pull/9505)) von @2013xile

- **[Auth: SAML 2.0]** Fehlerbehebung des SAML-Auto-Weiterleitungs-Interceptors, der die App-Shell flackern ließ und bei jeder Navigation doppelte Drawer öffnete. von @Molunerfinn
