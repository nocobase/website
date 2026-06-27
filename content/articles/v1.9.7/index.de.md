---
title: "NocoBase v1.9.7: Fehlerbehebungen"
description: "Versionshinweise zu v1.9.7"
---

### 🐛 Fehlerbehebungen

- **[Client]** Behebung des Problems, dass die Verknüpfungsregel für das Genehmigungsformular nicht funktioniert ([#7858](https://github.com/nocobase/nocobase/pull/7858)) von @zhangzhonghe

- **[Server]** Behebung eines Problems im Service-Splitting-Modus, bei dem abbestellte Warteschlangennachrichten nicht veröffentlicht werden konnten ([#7875](https://github.com/nocobase/nocobase/pull/7875)) von @mytharcher

- **[Workflow]**
  - Behebung des Fehlers, der durch das Abhören nicht existierender externer Datenquellenereignisse verursacht wurde ([#7855](https://github.com/nocobase/nocobase/pull/7855)) von @mytharcher

  - Verwendung von eventQueue anstelle des gemeinsamen backgroundJob, um zu verhindern, dass die gemeinsame Warteschlange im Service-Splitting-Modus fälschlicherweise verarbeitet wird ([#7871](https://github.com/nocobase/nocobase/pull/7871)) von @mytharcher

- **[Workflow: Manueller Knoten]** Korrektur des Namespace der zu verwendenden Locale-Sprache, um den korrekten Inhalt der Übersetzung anzuzeigen ([#7877](https://github.com/nocobase/nocobase/pull/7877)) von @mytharcher

- **[Zugriffskontrolle]** Problem, dass Ausschnitte von Assoziationsoperationen nicht wirksam werden ([#7876](https://github.com/nocobase/nocobase/pull/7876)) von @2013xile

- **[Workflow: Genehmigung]**
  - Behebung des Problems, dass die Seitengröße beim Laden des Benachrichtigungskanals nicht groß genug ist und die Liste daher nicht vollständig geladen wird, von @mytharcher

  - Behebung des Problems, dass die Verknüpfungsregel für das Genehmigungsformular nicht funktioniert, von @zhangzhonghe

  - Korrektur des Datumsformats auf den Genehmigungslistenkarten im Aufgabencenter, um das vollständige Datum und die Uhrzeit anzuzeigen, von @mytharcher

  - Behebung eines Leistungsproblems, das beim Abfragen der Liste der Genehmigungsdatensätze während der Genehmigungseinreichung auftrat, von @mytharcher
