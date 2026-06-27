---
title: "NocoBase v2.0.0-alpha.37: Anpassung an das tableoid-Feld in 2.0"
description: "Versionshinweise zu v2.0.0-alpha.37"
---

### 🚀 Verbesserungen

- **[Client]**
  - Seiteninfo-Version zum Flow-Engine-Kontext hinzugefügt ([#7826](https://github.com/nocobase/nocobase/pull/7826)) von @gchust

  - Markdown-Editor verbessert ([#7793](https://github.com/nocobase/nocobase/pull/7793)) von @katherinehhh

  - An tableoid-Feld in 2.0 angepasst ([#7809](https://github.com/nocobase/nocobase/pull/7809)) von @katherinehhh

- **[Datenvisualisierung]** Hinweistexte und Codevorlagen-Kommentare für Ereignisse aktualisiert ([#7814](https://github.com/nocobase/nocobase/pull/7814)) von @heziqiang

- **[Zugriffskontrolle]** Berechtigungslogik für Operationen mit assoziierten Feldern optimiert ([#7800](https://github.com/nocobase/nocobase/pull/7800)) von @2013xile

- **[Auth: OIDC]** Request-Timeout erhöht von @2013xile

### 🐛 Fehlerbehebungen

- **[Server]** Problem behoben, bei dem nach Aktivierung des Dienstaufteilungsmodus Worker-Prozesse, die Nachrichten über die Nachrichtenwarteschlange senden, Fehler verursachten ([#7797](https://github.com/nocobase/nocobase/pull/7797)) von @mytharcher

- **[Client]**
  - Die aktuelle Sammlungsvariable sollte im Variablenauswahlfeld des Filter-Komponenten nicht auswählbar sein ([#7818](https://github.com/nocobase/nocobase/pull/7818)) von @gchust

  - Fehler 'value.replace is not a function' im Beziehungsfeld des Filterformulars behoben ([#7824](https://github.com/nocobase/nocobase/pull/7824)) von @zhangzhonghe

  - Falsche Parameter im onChange-Callback behoben ([#7807](https://github.com/nocobase/nocobase/pull/7807)) von @zhangzhonghe

- **[Flow-Engine]** Problem behoben, bei dem Änderungen am Ereignisablauf erst nach Aktualisierung der Seite wirksam wurden ([#7811](https://github.com/nocobase/nocobase/pull/7811)) von @gchust

- **[Workflow]** Problem behoben, bei dem das Workflow-Plugin das Warteschlangenereignis auch dann noch verbrauchte, wenn es sich im Dienstaufteilungsmodus nicht im Worker-Modus befand ([#7820](https://github.com/nocobase/nocobase/pull/7820)) von @mytharcher

- **[Workflow: Genehmigung]** Problem behoben, bei dem Hauptsammlungsfelder beim erneuten Laden assoziierter Daten nicht ausgeschlossen wurden von @mytharcher

- **[E-Mail-Manager]** Problem mit reservierten Bildern und Synchronisation in Outlook behoben von @jiannx
