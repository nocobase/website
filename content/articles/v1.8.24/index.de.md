---
title: "NocoBase v1.8.24: Workflow unterstützt Rückkehr zu beliebigen Knoten im Genehmigungsprozess"
description: "Versionshinweise zu v1.8.24"
---

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützung für die Rückkehr zu beliebigen Knoten im Genehmigungsprozess von @mytharcher

### 🚀 Verbesserungen

- **[Server]** Verwendung des standardmäßigen Systemloggers für die Nachrichtenwarteschlange ([#7480](https://github.com/nocobase/nocobase/pull/7480)) von @mytharcher

- **[Client]** Entfernung des Ellipsis-Popovers aus der Dateiliste ([#7479](https://github.com/nocobase/nocobase/pull/7479)) von @mytharcher

- **[Workflow]** Optimierung des Workflow-Vorbereitungsprozesses zur Unterstützung der Verwendung von vorgeladenen Knotendaten ([#7476](https://github.com/nocobase/nocobase/pull/7476)) von @mytharcher

- **[Theme-Editor]** Hinzufügen der Unterstützung für die Farbanpassung des Seitenmenüs ([#7483](https://github.com/nocobase/nocobase/pull/7483)) von @duannyuuu

- **[Redis-Warteschlangen-Adapter]** Verwendung des standardmäßigen Systemloggers für den Redis-Nachrichtenwarteschlangen-Adapter von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung des Problems, dass die Popover-Komponente überlappt/verdeckt wird ([#7491](https://github.com/nocobase/nocobase/pull/7491)) von @zhangzhonghe

  - Falsche 'nicht leer'-Prüfung für numerische Felder in Verknüpfungsregeln ([#7477](https://github.com/nocobase/nocobase/pull/7477)) von @katherinehhh

  - Schreibgeschützte Select/Multiselect/Date/Richtext-Felder sind im öffentlichen Formular weiterhin bearbeitbar ([#7484](https://github.com/nocobase/nocobase/pull/7484)) von @katherinehhh

- **[Workflow]** Behebung eines potenziellen Fehlers im Zusammenhang mit dem Workflow-Log-Caching ([#7490](https://github.com/nocobase/nocobase/pull/7490)) von @mytharcher

- **[HTTP-Anfrageverschlüsselung]** Behebung des Problems, dass die Anfrageparameter den nativen URLSearchParams-Typ nicht unterstützen von @mytharcher

- **[Datenquelle: REST-API]** Behebung der REST-API-URL-Validierungsregeln von @katherinehhh

- **[Workflow: Genehmigung]** Behebung des Problems, dass der Statustext in der Genehmigungsabschlussbenachrichtigung nicht übersetzt wurde von @mytharcher
