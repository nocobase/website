---
title: "NocoBase v1.6.18: Unterstützung für die Verwendung von Variablen für die Dauer"
description: "Versionshinweise zu v1.6.18"
---

### 🚀 Verbesserungen

- **[Client]**
  - Standard-Typ-Fallback-API für `Variable.Input` hinzugefügt ([#6644](https://github.com/nocobase/nocobase/pull/6644)) von @mytharcher

  - Eingabeaufforderungen für nicht konfigurierte Seiten optimiert ([#6641](https://github.com/nocobase/nocobase/pull/6641)) von @zhangzhonghe

- **[Workflow: Verzögerungsknoten]** Unterstützung für die Verwendung von Variablen für die Dauer ([#6621](https://github.com/nocobase/nocobase/pull/6621)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Aktualisierungseinstellungen für die Trigger-Workflow-Schaltfläche hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Überlappung der Untertabellenbeschreibung mit der Schaltfläche "Neu hinzufügen" ([#6646](https://github.com/nocobase/nocobase/pull/6646)) von @katherinehhh

  - Gestrichelte Unterstreichung durch horizontales Formularlayout im Modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) von @katherinehhh

- **[Dateispeicher: S3(Pro)]** Fehlendes `await` für den nächsten Aufruf behoben. von @jiannx

- **[E-Mail-Manager]** Fehlendes `await` für den nächsten Aufruf behoben. von @jiannx
