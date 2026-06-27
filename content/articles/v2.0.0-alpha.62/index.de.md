---
title: "NocoBase v2.0.0-alpha.62: Verbesserte Berechtigungsprüfungen beim Ändern verschachtelter Assoziationsfelder"
description: "Versionshinweise zu v2.0.0-alpha.62"
---

### 🚀 Verbesserungen

- **[Zugriffskontrolle]** Verbesserte Berechtigungsprüfungen beim Ändern von verschachtelten Assoziationsfeldern ([#7856](https://github.com/nocobase/nocobase/pull/7856)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Korrektur der Verfeinerungslogik für optionales targetKey ([#8333](https://github.com/nocobase/nocobase/pull/8333)) von @katherinehhh

  - Behebung des Problems, dass Assoziationsfelder in der `FilterAction`-Komponente nicht korrekt sind ([#8295](https://github.com/nocobase/nocobase/pull/8295)) von @mytharcher

  - Korrektur falscher Filterparameter für das Beziehungsfeld Select in bearbeitbaren Untertabellen ([#8335](https://github.com/nocobase/nocobase/pull/8335)) von @katherinehhh

- **[Flow-Engine]** Behebung eines Problems, bei dem beim mehrmaligen Öffnen von Popups eine Zustandsverschmutzung auftreten konnte. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) von @gchust

- **[Datenbank]** Korrektur des Objekts `appends` im `OptionsParser` und Erhöhung von `arrayLimit` für Parameter ([#8328](https://github.com/nocobase/nocobase/pull/8328)) von @mytharcher

- **[Aktion: Datensätze importieren]** Korrektur einer falschen Fehlermeldung, wenn während des asynchronen XLSX-Imports ein Unique-Constraint-Fehler ausgelöst wird ([#8342](https://github.com/nocobase/nocobase/pull/8342)) von @cgyrock

- **[Datenquelle: Haupt]** Metadaten der Ansichtssammlung sollten Quellfeldoptionen enthalten ([#8337](https://github.com/nocobase/nocobase/pull/8337)) von @2013xile

- **[Aktion: Datensätze exportieren Pro]** Behebung eines Fehlers, wenn Unteranwendungen asynchrone Import-/Exportaufgaben ausführen, während die Hauptanwendung das Import/Export Pro-Plugin nicht aktiviert hat von @cgyrock

- **[Workflow: Genehmigung]** Behebung des Problems, dass Filterfelder im Aufgabencenter nicht korrekt funktionieren von @mytharcher

- **[E-Mail-Manager]** Schaltfläche "Allen antworten" anzeigen und Datenbereich unterstützt das Filtern von untergeordneten Nachrichten. von @jiannx
