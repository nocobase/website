---
title: "NocoBase v2.0.0-beta.22: Unterstützung der Konfiguration von Browser-Tab-Titeln für Seiten, Seiten-Tabs, Popups und Popup-Tabs"
description: "Versionshinweise zu v2.0.0-beta.22"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für die Konfiguration von Browser-Tab-Titeln für Seiten, Seiten-Tabs, Popups und Popup-Tabs ([#8590](https://github.com/nocobase/nocobase/pull/8590)) von @zhangzhonghe

- **[Workflow: Genehmigung]** ACL-Steuerung für Genehmigungs-APIs hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Verwendung unabhängiger Feldmodelle für Assoziationsfelder in Filterformularen ([#8511](https://github.com/nocobase/nocobase/pull/8511)) von @zhangzhonghe

- **[Workflow: CC]** Überarbeitung des Workflow-CC-Plugins zur Unterstützung der FlowModel-Architektur mit v1/v2-Kompatibilität ([#8405](https://github.com/nocobase/nocobase/pull/8405)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Flow-Engine]**
  - Behebung eines Problems, bei dem Blob-Objekte im JS-Block nicht erstellt werden konnten. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) von @gchust

  - Behebung eines falschen Ausführungskontexts für "ctx.sql" in JS-Modellen. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) von @gchust

- **[Feldkomponente: Maske]** Behebung eines Problems, bei dem das Popup für die Maskenfeldeinstellungen nicht alle Benutzerrollen korrekt laden konnte. von @gchust

- **[Workflow: Genehmigung]** Behebung einer falschen ID zum Laden des Detaildatensatzes von @mytharcher
