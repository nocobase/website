---
title: "NocoBase v2.1.0-alpha.47: Option hinzugefügt, dass Gantt-Blöcke standardmäßig auf heute fokussieren."
description: "Versionshinweise zu v2.1.0-alpha.47"
---

### 🎉 Neue Funktionen

- **[undefined]** Verbesserte Verwaltung von Managed Apps und Plugins in der CLI, einschließlich appPath-bewusster Umgebungsbehandlung, Plugin-Import, lizenzierter Plugin-Synchronisation und zugehöriger Dokumentationsaktualisierungen. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) von @chenos
  Referenz: [CLI-Dokumentation](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Schnellstart](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Block: Gantt]** Eine Option für Gantt-Blöcke hinzugefügt, um standardmäßig auf heute zu fokussieren. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) von @jiannx
- **[Multi-Space]** Client v2-Unterstützung für das Multi-Space-Plugin hinzugefügt, einschließlich Space-Wechsel und Space-Verwaltung. von @jiannx

### 🚀 Verbesserungen

- **[Workflow]** Entfernung der Workflow-Verlaufstransaktionskopplung von der Workflow-Ausführung. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) von @mytharcher
- **[UI-Vorlagen]** UI-Vorlagen zu Client v2 migriert. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) von @gchust
- **[Multi-Keyword-Filter]** Multi-Keyword-Filter zu Client v2 migriert. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) von @gchust
- **[Workflow: Unterworkflow]** Entfernung der Workflow-Verlaufstransaktionskopplung von Unterworkflow-Anweisungen. von @mytharcher
- **[Workflow: Genehmigung]** Entfernung der Workflow-Verlaufstransaktionskopplung von Genehmigungs-Workflow-Anweisungen. von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem ausgeblendete verknüpfte Felder weiterhin alte Werte behielten. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) von @zhangzhonghe
- **[Aktion: Datensätze importieren]** Problem behoben, bei dem importierte Datensätze doppelte Sortierwerte erhielten. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) von @2013xile
- **[Flow-Engine]** Problem behoben, bei dem die Konvertierung eines Referenzvorlagenblocks in eine Kopie zu einem Fehler führte. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) von @gchust
- **[Block: Karte]** Problem behoben, bei dem Kartenfeldwerte beim Wechsel zwischen Text- und Kartenanzeigemodus auf Detailseiten falsch konvertiert wurden. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) von @hongboji
- **[Workflow]** Problem behoben, bei dem die Workflow-Ausführung unter gleichzeitigen Workern doppelt ausgelöst wurde. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) von @mytharcher
- **[Workflow: Genehmigung]** Problem behoben, bei dem benutzerdefinierte Feldtitel in Genehmigungsformulardetails nicht angezeigt wurden. von @zhangzhonghe
