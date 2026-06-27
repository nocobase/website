---
title: "NocoBase v2.0.0-alpha.49: Auswahlmöglichkeit, ob im Genehmigungsprozess-UI der Schnappschuss oder der neueste Datensatz angezeigt werden soll"
description: "Versionshinweise zu v2.0.0-alpha.49"
---

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Ermöglicht die Auswahl, ob im Genehmigungsprozess-UI der Snapshot oder der aktuelle Datensatz angezeigt werden soll, von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Optimierte Validierungsmeldungen für Untertabellen ([#8001](https://github.com/nocobase/nocobase/pull/8001)) von @katherinehhh

- **[Telemetrie: Prometheus]** Upgrade von `@opentelemetry/exporter-prometheus` von @2013xile

- **[Aktion: Datensätze importieren Pro]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern, von @mytharcher

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Behoben: Ein Problem, bei dem die aktuelle Datensatzvariable im Detailblock nicht korrekt zur Auflösung ausgelöst werden konnte. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) von @gchust

- **[Client]** Behoben: Auswahl- und Löschprobleme in Tabellenblöcken bei zusammengesetzten Schlüsseln ([#7978](https://github.com/nocobase/nocobase/pull/7978)) von @katherinehhh

- **[Aktion: Datensätze exportieren]** Behoben: Fehlende Systemfelder in der Liste der exportierbaren Felder ([#8002](https://github.com/nocobase/nocobase/pull/8002)) von @katherinehhh

- **[Sammlung: Baum]** Behoben: Fehlerhafte Aktualisierungen der Pfadtabelle aufgrund falscher Suche nach dem übergeordneten Baumfeld ([#8000](https://github.com/nocobase/nocobase/pull/8000)) von @2013xile

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Behoben: Ein Problem, bei dem das m2m-Arrayfeld in der Untertabelle nicht aktualisiert werden konnte ([#7998](https://github.com/nocobase/nocobase/pull/7998)) von @cgyrock

- **[Abteilungen]** Behoben: Ein Problem, bei dem zugehörige Felder von Abteilungen nicht bearbeitet werden konnten ([#7462](https://github.com/nocobase/nocobase/pull/7462)) von @heziqiang

- **[Workflow: Genehmigung]** Behoben: Berechtigungsproblem beim Abrufen von `approvalRecords.reassignee` aufgrund einer Änderung von `RemoteSelect` von @mytharcher
