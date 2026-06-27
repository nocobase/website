---
title: "NocoBase v1.8.19: Inline-Vorlagentyp für Benachrichtigungskonfiguration hinzugefügt"
description: "Versionshinweise zu v1.8.19"
---

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Inline-Vorlagentyp für Benachrichtigungskonfiguration hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Unterstützung für die Anzeige von Symbolen, die als Zeichenketten in der Select-Komponente identifiziert werden, im schreibgeschützten Modus ([#7420](https://github.com/nocobase/nocobase/pull/7420)) von @mytharcher
- **[Datenbank]** Optimierte ACL-Meta-Abfrageleistung ([#7400](https://github.com/nocobase/nocobase/pull/7400)) von @aaaaaajie
- **[Mobil]** Optimierung der mobilen Popup-Komponente ([#7414](https://github.com/nocobase/nocobase/pull/7414)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Datenbank]** Problem behoben, bei dem das Lesen externer Postgres-Tabellen Ansichten aus anderen Schemata einschloss ([#7410](https://github.com/nocobase/nocobase/pull/7410)) von @aaaaaajie
- **[Block: Vorlage]** Problem behoben, bei dem E-Mail-Blöcke innerhalb eines geerbten Vorlagenblocks nicht sichtbar waren ([#7430](https://github.com/nocobase/nocobase/pull/7430)) von @gchust
- **[Aktion: Datensätze importieren Pro]** Zuweisung von Beziehungsfeldern während der Import-Duplikaterkennung nicht mehr zulässig. von @aaaaaajie
- **[Workflow: Genehmigung]** Problem behoben, bei dem die Benutzerliste während der Gegenzeichnung leer war von @mytharcher
- **[Migrationsmanager]** Überspringen der Befehle `\restrict` und `\unrestrict`, die vom neuesten pg_dump beim Erstellen von Migrationsdateien generiert werden, um Wiederherstellungsfehler zu beheben. von @2013xile
