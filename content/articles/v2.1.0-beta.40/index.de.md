---
title: "NocoBase v2.1.0-beta.40: Unterstützung der Feldwertzuweisung in Formularübermittlungsaktionen"
description: "Versionshinweise zu v2.1.0-beta.40"
---

### 🎉 Neue Funktionen

- **[client-v2]** Unterstützung für Feldwertzuweisung in Aktionen zum Absenden von Formularen ([#9570](https://github.com/nocobase/nocobase/pull/9570)) von @katherinehhh
- **[Office-Dateivorschau]** Migration des Office-Dateivorschau-Plugins zum v2 (FlowEngine) Client. ([#9620](https://github.com/nocobase/nocobase/pull/9620)) von @Molunerfinn

### 🚀 Verbesserungen

- **[Benachrichtigungsmanager]** Migration der benachrichtigungsbezogenen Plugins zu v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[client]** Korrektur der Badge-Breite in der oberen Navigationsleiste ([#9607](https://github.com/nocobase/nocobase/pull/9607)) von @zhangzhonghe
- **[Block: Gantt]** Korrektur des freigegebenen Ordnerpfads für das v2-Gantt-Diagramm und Hinzufügen von Zebrastreifen. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) von @jiannx
- **[Lizenzeinstellungen]** Hinzufügen von client-v2-Unterstützung für Lizenzeinstellungen und kommerzielle Lizenzinjektion. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) von @jiannx
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Korrektur doppelter Trigger-Workflow-Optionen in v2-Block-Aktionsmenüs ([#9622](https://github.com/nocobase/nocobase/pull/9622)) von @zhangzhonghe
- **[KI-Mitarbeiter]** Korrektur, dass KI-Verknüpfungsschaltflächen einen leeren Blockkontext erhalten, nachdem referenzierte Tabellenblöcke entfernt wurden. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) von @cgyrock
- **[plugin-commercial]** Hinzufügen von client-v2 kommerziellen Lizenzkomponenten und Lizenzstatuseintrag in der oberen Leiste. von @jiannx
- **[Migrationsmanager]** Korrektur von PostgreSQL-Migrationsdiffs, sodass untergeordnete vererbte Spalten nicht gelöscht werden, wenn eine lokale Spalte vererbt wird. von @hongboji
