---
title: "NocoBase v2.1.0-beta.35: Bedingungsauswertung zwischen v1- und v2-Apps teilen"
description: "Versionshinweise zu v2.1.0-beta.35"
---

### 🚀 Verbesserungen

- **[Client]** Gemeinsame Bedingungsauswertung zwischen v1- und v2-Apps ([#9522](https://github.com/nocobase/nocobase/pull/9522)) von @zhangzhonghe

- **[Lokalisierung]** Verbesserte Lina-Lokalisierungsübersetzungsaufgaben mit Übersetzungsbereich, Referenzspracheinstellungen und Schnellbearbeitung ([#9521](https://github.com/nocobase/nocobase/pull/9521)) von @2013xile

- **[Workflow: Genehmigung]** Verbesserung verwandter Genehmigungen mit Zeitstrahlkarten von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[undefined]** Ausrichtung der nginx-Konfigurationspfade ([#9528](https://github.com/nocobase/nocobase/pull/9528)) von @chenos

- **[cli-v1]** Behoben: Start der create-nocobase-app-Entwicklung durch Wiederverwendung gepackter App-Shells bei gleichzeitiger Aktivierung lokaler Plugin-Entwicklung. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) von @Molunerfinn

- **[Client]**
  - Behoben: Problem, bei dem ein Menüabzeichen weiterhin einen Punkt anzeigt, wenn sein Wert 0 ist ([#9491](https://github.com/nocobase/nocobase/pull/9491)) von @zhangzhonghe

  - Behoben: Problem, bei dem Filterformulare keine aktuellen Formularvariablen verwenden können ([#9474](https://github.com/nocobase/nocobase/pull/9474)) von @zhangzhonghe

- **[Authentifizierung]** Verhindert Serverabstürze, wenn ein WebSocket-Auth-Token auf einen Authentifikator verweist, dessen Auth-Typ-Plugin entladen oder fehlt. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) von @Molunerfinn

- **[Kalender]**
  - Behoben: Problem, bei dem weitere Kalenderelemente nicht vollständig angezeigt werden können ([#9492](https://github.com/nocobase/nocobase/pull/9492)) von @zhangzhonghe

  - Behoben: Cursor-Stil für Ereigniselemente im Kalender-Overlay für weitere Ereignisse ([#9519](https://github.com/nocobase/nocobase/pull/9519)) von @jiannx

- **[Lizenzeinstellungen]** Auflösung von symbolisch verlinkten gebündelten Abhängigkeiten ([#9518](https://github.com/nocobase/nocobase/pull/9518)) von @chenos
