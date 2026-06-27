---
title: "NocoBase v2.0.0-alpha.8: Verbesserung der Websuche-Funktion von plugin-ai"
description: "Versionshinweise zu v2.0.0-alpha.8"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Verbesserung der Websuche-Funktion von plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) von @cgyrock

### 🚀 Verbesserungen

- **[Client]** Um einen genaueren MIME-Typ von Dateien zu erhalten, wird das `mime`-Paket zur Erkennung des MIME-Typs von Dateien im Client verwendet ([#7551](https://github.com/nocobase/nocobase/pull/7551)) von @mytharcher

- **[Flow-Engine]**
  - Unterstützung für Popup-Variablen ([#7583](https://github.com/nocobase/nocobase/pull/7583)) von @gchust

  - Verbesserung der Code-Bearbeitungserfahrung mit umfangreicheren Snippets und kontextbezogenen Code-Vervollständigungen für verschiedene Szenarien ([#7559](https://github.com/nocobase/nocobase/pull/7559)) von @gchust

  - Standardisierung automatischer Workflows, die konsistent durch das "beforeRender"-Ereignis ausgelöst werden, um einen vorhersagbaren und einheitlichen Betrieb über Prozesse hinweg zu gewährleisten. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) von @gchust

- **[Workflow]** Hinzufügen der Option `keepBranch` beim Löschen von Knoten ([#7571](https://github.com/nocobase/nocobase/pull/7571)) von @mytharcher

- **[Datenvisualisierung]** Erweiterung der Diagrammtypen; Optimierung der Benutzeroberfläche und der interaktiven Erfahrung. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) von @heziqiang

- **[Workflow: Genehmigung]** Überarbeitung der Zweigkonfiguration zur Anpassung an Kernel-Änderungen von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung von Problemen mit abnormaler Seitenanzeige beim Wechsel der Tabellen-Seitennummerierung ([#7572](https://github.com/nocobase/nocobase/pull/7572)) von @zhangzhonghe

  - Feldwertzuweisung für die Aktionen `Aktualisieren` und `Massenaktualisierung` kann nicht konfiguriert werden ([#7565](https://github.com/nocobase/nocobase/pull/7565)) von @gchust

  - Behebung des Problems, dass Bilder bei der Vorschau nicht korrekt angezeigt wurden, wenn sie sowohl gedreht als auch skaliert wurden ([#7573](https://github.com/nocobase/nocobase/pull/7573)) von @mytharcher

- **[Workflow: Genehmigung]** Behebung des Problems von Migrationsskriptfehlern aufgrund nicht vorhandener Tabellen, wenn die Anwendung nicht installiert ist von @mytharcher

- **[Auth: LDAP]** Behebung des LDAP-Bind-Fehlers mit nicht-ASCII (UTF-8) DNs in Active Directory von @2013xile
