---
title: "NocoBase v1.9.34: Verbesserte Berechtigungsprüfung beim Ändern verschachtelter Assoziationsfelder"
description: "Versionshinweise zu v1.9.34"
---

### 🚀 Verbesserungen

- **[Zugriffskontrolle]** Verbesserte Berechtigungsprüfungen beim Ändern von verschachtelten Assoziationsfeldern ([#7856](https://github.com/nocobase/nocobase/pull/7856)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung, dass Assoziationsfelder aus externen Datenquellen keine Assoziationsdaten in Formularblöcken laden ([#8356](https://github.com/nocobase/nocobase/pull/8356)) von @katherinehhh

  - Behebung des Problems, dass Assoziationsfelder in der `FilterAction`-Komponente nicht korrekt sind ([#8295](https://github.com/nocobase/nocobase/pull/8295)) von @mytharcher

- **[Logger]** Behebung, dass zusätzliche Fehlerinformationen beim Drucken von Systemprotokollen verworfen werden ([#8367](https://github.com/nocobase/nocobase/pull/8367)) von @cgyrock

- **[Workflow: Schleifenknoten]** Behebung des Problems, dass ein fehlgeschlagener Knoten in einem Bedingungszweig den Status nicht an den übergeordneten Verzweigungsknoten weitergeben kann ([#8360](https://github.com/nocobase/nocobase/pull/8360)) von @mytharcher

- **[Datenquelle: Haupt]** Metadaten von Ansichtssammlungen sollten Quellfeldoptionen enthalten ([#8337](https://github.com/nocobase/nocobase/pull/8337)) von @2013xile

- **[Workflow]**
  - Behebung eines Problems mit Verknüpfungsregeln im CC-Knoten-Detailblock des Workflows ([#8381](https://github.com/nocobase/nocobase/pull/8381)) von @zhangzhonghe

  - Hinzufügen der Instanz-ID zur Snowflake-ID von Jobs, um ID-Konflikte im Cluster-Modus zu vermeiden ([#8382](https://github.com/nocobase/nocobase/pull/8382)) von @mytharcher

  - Behebung des Problems, dass die Ausführungsseite abstürzt, wenn ein Workflow gelöscht wird ([#8361](https://github.com/nocobase/nocobase/pull/8361)) von @mytharcher

- **[Aktion: Datensätze importieren]** Behebung einer falschen Fehlermeldung bei einem Eindeutigkeitsfehler während des asynchronen XLSX-Imports ([#8342](https://github.com/nocobase/nocobase/pull/8342)) von @cgyrock

- **[Zugriffskontrolle]**
  - Assoziationsfelder dürfen nun über die Zielschlüssel assoziieren ([#8352](https://github.com/nocobase/nocobase/pull/8352)) von @2013xile

  - Behebung eines Problems, bei dem die Datenquelle bei der Verarbeitung von Berechtigungen für Assoziationsfelder falsch aufgelöst wird ([#8370](https://github.com/nocobase/nocobase/pull/8370)) von @2013xile

- **[Datenquelle: REST-API]** Fehlertoleranz für den Anforderungskontext hinzugefügt, um Fehler zu vermeiden, wenn die Methode nicht im Kontext ist von @mytharcher

- **[Aktion: Datensätze exportieren Pro]** Behebung eines Fehlers bei der Ausführung asynchroner Import-/Exportaufgaben in Unteranwendungen, während das Hauptplugin für Import/Export Pro nicht aktiviert ist von @cgyrock

- **[Workflow: Genehmigung]** Behebung des Problems, dass Filterfelder im Aufgabencenter nicht korrekt funktionieren von @mytharcher
