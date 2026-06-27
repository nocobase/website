---
title: "NocoBase v1.9.0-beta.13: Überarbeitung der Branch-Konfiguration zur Anpassung an Kernel-Änderungen"
description: "Versionshinweise zu v1.9.0-beta.13"
---

### 🚀 Verbesserungen

- **[Client]** Zur genaueren Ermittlung des MIME-Typs von Dateien wird nun das `mime`-Paket verwendet ([#7551](https://github.com/nocobase/nocobase/pull/7551)) von @mytharcher

- **[Datenquelle: Haupt]** Überarbeitung der Lokalisierungslogik für Fehlermeldungen; die Verarbeitung erfolgt nun innerhalb des Fehlerbehandlungs-Plugins ([#7582](https://github.com/nocobase/nocobase/pull/7582)) von @2013xile

- **[Workflow]** Option `keepBranch` beim Löschen von Knoten hinzugefügt ([#7571](https://github.com/nocobase/nocobase/pull/7571)) von @mytharcher

- **[Workflow: Genehmigung]** Überarbeitung der Zweigkonfiguration zur Anpassung an Kernel-Änderungen von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehler beim Leeren des Datumsfeldes in einem Filterblock behoben ([#7632](https://github.com/nocobase/nocobase/pull/7632)) von @katherinehhh

  - Fehler behoben, bei dem der Standardwert einer Untertabelle im Bearbeitungsformular-Drawer nicht funktionierte ([#7631](https://github.com/nocobase/nocobase/pull/7631)) von @katherinehhh

  - Problem behoben, bei dem Bilder in der Vorschau bei gleichzeitiger Drehung und Skalierung nicht korrekt angezeigt wurden ([#7573](https://github.com/nocobase/nocobase/pull/7573)) von @mytharcher

  - Problem behoben, bei dem Pop-ups für Tab-Symbole verdeckt wurden ([#7607](https://github.com/nocobase/nocobase/pull/7607)) von @zhangzhonghe

- **[Datenbank]** Fehler behoben, der beim Verwenden des Operators `$in` mit `null`-Werten auftrat ([#7610](https://github.com/nocobase/nocobase/pull/7610)) von @mytharcher

- **[Datenquelle: Haupt]** Problem behoben, bei dem Metadaten nach dem Erstellen eines inversen Assoziationsfeldes nicht über mehrere Knoten synchronisiert wurden ([#7628](https://github.com/nocobase/nocobase/pull/7628)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem Migrationsskripte aufgrund nicht existierender Tabellen fehlschlugen, wenn die Anwendung nicht installiert war von @mytharcher

  - Problem behoben, bei dem die Snowflake-ID aufgrund übersprungener Hooks nicht generiert wurde von @mytharcher

- **[Auth: LDAP]** Fehler bei der LDAP-Bindung mit nicht-ASCII (UTF-8) DNs in Active Directory behoben von @2013xile
