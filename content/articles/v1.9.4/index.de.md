---
title: "NocoBase v1.9.4: Optimierung der Berechtigungssteuerungslogik für Operationen mit Verknüpfungsfeldern"
description: "Versionshinweise zu v1.9.4"
---

### 🚀 Verbesserungen

- **[Zugriffskontrolle]** Optimierung der Berechtigungslogik für Operationen an Assoziationsfeldern ([#7800](https://github.com/nocobase/nocobase/pull/7800)) von @2013xile

- **[Workflow: JavaScript]** Behebung einer Sicherheitslücke, die durch die Übergabe übergeordneter Funktionen in die Ausführungsumgebung verursacht wurde, um zu verhindern, dass der Zugriff auf den übergeordneten Ausführungskontext ausgenutzt werden kann von @mytharcher

- **[Auth: OIDC]** Erhöhung des Request-Timeout von @2013xile

### 🐛 Fehlerbehebungen

- **[Server]** Behebung eines Problems, bei dem nach Aktivierung des Dienstaufteilungsmodus das Senden von Nachrichten durch Worker-Prozesse über die Nachrichtenwarteschlange zu Fehlern führte ([#7797](https://github.com/nocobase/nocobase/pull/7797)) von @mytharcher

- **[Client]** Behebung des Problems mit einer leeren nächsten Seite im einfachen Paginierungs-Detailblock ([#7784](https://github.com/nocobase/nocobase/pull/7784)) von @katherinehhh

- **[Workflow]**
  - Hinzufügen von `workflowId` als Identitätsdaten für Workflow-Protokolle ([#7789](https://github.com/nocobase/nocobase/pull/7789)) von @mytharcher

  - Behebung des Problems, dass das Workflow-Plugin das Warteschlangenereignis weiterhin verarbeitet, wenn es sich im Dienstaufteilungsmodus nicht im Worker-Modus befindet ([#7820](https://github.com/nocobase/nocobase/pull/7820)) von @mytharcher

- **[Benutzer]** Falsche Indexaktualisierung, wenn Feldnamen im snake_case-Stil verwendet werden ([#7785](https://github.com/nocobase/nocobase/pull/7785)) von @2013xile

- **[Workflow: Benutzerdefinierte Variable]** Behebung eines Fehlers, der ausgelöst wird, wenn keine Konfiguration im Variablenknoten vorhanden ist von @mytharcher
