---
title: "NocoBase v2.0.0-alpha.17: Unterstützung für Klickereignis-Listener in Tabellenzeilen hinzugefügt"
description: "Versionshinweise zu v2.0.0-alpha.17"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Klick-Ereignis-Listener in Tabellenzeilen hinzugefügt, sodass Benutzer bestimmte Aktionen ausführen können, wenn auf eine Zeile in der Tabelle geklickt wird ([#7622](https://github.com/nocobase/nocobase/pull/7622)) von @zhangzhonghe

- **[Workflow: Genehmigung]** Die Variable `approvalId` wird für die Verwendung in Genehmigungs-Triggern bereitgestellt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Problem behoben, bei dem die Übersetzung in Antd-Komponenten nicht wirksam wurde ([#7621](https://github.com/nocobase/nocobase/pull/7621)) von @zhangzhonghe

- **[Datenquelle: Haupt]** Problem behoben, bei dem Metadaten nach dem Erstellen eines inversen Assoziationsfeldes nicht über mehrere Knoten synchronisiert wurden ([#7628](https://github.com/nocobase/nocobase/pull/7628)) von @mytharcher

- **[plugin-demo-platform]** Demo unterstützt jetzt automatisches Stoppen von Apps von @jiannx

- **[Multi-App]**
  - Multi-App-Migration löst keine Hooks aus von @jiannx

  - Multi-App-Proxy unterstützt Caching von @jiannx
