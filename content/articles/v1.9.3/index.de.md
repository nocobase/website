---
title: "NocoBase v1.9.3: Fehlerbehebung bei doppeltem Genehmigungsworkflow"
description: "Versionshinweise zu v1.9.3"
---

### 🚀 Verbesserungen

- **[Datenbank]** Die Option `multipleStatements` zur MariaDB-Verbindungsinstanz hinzugefügt, um die Ausführung mehrerer Anweisungen in einer einzelnen Abfrage zu unterstützen ([#7781](https://github.com/nocobase/nocobase/pull/7781)) von @mytharcher

- **[Workflow]** Unterstützung für Datenblöcke im Workflow, um das Menü für konsolidierte Detail-Einstellungen zu verwenden ([#7771](https://github.com/nocobase/nocobase/pull/7771)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Server]** Pub-Sub-Kanal nach App-Namen isoliert ([#7762](https://github.com/nocobase/nocobase/pull/7762)) von @mytharcher

- **[Client]** Fehler "Maximale Aufrufstapelgröße überschritten" behoben ([#7780](https://github.com/nocobase/nocobase/pull/7780)) von @zhangzhonghe

- **[Datenbank]** Falsche Erkennung von Indexfeldern bei Verwendung von snake_case für Feldnamen ([#7776](https://github.com/nocobase/nocobase/pull/7776)) von @2013xile

- **[Workflow]** Ein Problem behoben, bei dem der Workflow-Dispatcher im Cluster-Modus Leerlaufzustände nicht korrekt erkannte, was zu unnötigem Verbrauch von Warteschlangenereignissen führen konnte, bevor das Plugin bereit war ([#7768](https://github.com/nocobase/nocobase/pull/7768)) von @mytharcher

- **[Mobil (veraltet)]]** Problem behoben, bei dem im Popup für den Standardwert des Datumsfelds auf Mobilgeräten kein Datum ausgewählt werden konnte ([#7783](https://github.com/nocobase/nocobase/pull/7783)) von @zhangzhonghe

- **[Workflow: Genehmigung]** Fehler behoben, der bei doppelten Genehmigungs-Workflows ausgelöst wurde von @mytharcher

- **[E-Mail-Manager]** Sammlung mailMessages um Indizes ergänzt von @jiannx
