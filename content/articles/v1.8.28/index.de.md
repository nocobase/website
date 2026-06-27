---
title: "NocoBase v1.8.28: Drucktaste zum Detail-Popup in benutzerdefinierten Genehmigungsblöcken hinzugefügt"
description: "Versionshinweise zu v1.8.28"
---

### 🚀 Verbesserungen

- **[Client]** Zur genaueren Bestimmung des MIME-Typs von Dateien wird nun das `mime`-Paket verwendet ([#7551](https://github.com/nocobase/nocobase/pull/7551)) von @mytharcher

- **[Workflow]**
  - Unterstützung zur Begrenzung der maximalen Anzahl von Knoten in einem Workflow über Umgebungsvariablen ([#7542](https://github.com/nocobase/nocobase/pull/7542)) von @mytharcher

  - Hinzufügen der Option `keepBranch` beim Löschen von Knoten ([#7571](https://github.com/nocobase/nocobase/pull/7571)) von @mytharcher

- **[Workflow: Schleifenknoten]** Unterstützung zur Begrenzung der maximalen Anzahl von Durchläufen für Schleifenknoten über Umgebungsvariablen ([#7543](https://github.com/nocobase/nocobase/pull/7543)) von @mytharcher

- **[Workflow: Genehmigung]** Hinzufügen einer Druck-Schaltfläche zum Detail-Popup in benutzerdefinierten Genehmigungsblöcken von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung des Problems, dass Bilder bei der Vorschau nicht korrekt angezeigt wurden, wenn sie sowohl gedreht als auch skaliert waren ([#7573](https://github.com/nocobase/nocobase/pull/7573)) von @mytharcher

  - Behebung des Problems, dass fehlende dynamische Eigenschaften in der `AssignedField`-Komponente zu Datei-Upload-Fehlern in den Knoten "Datensatz erstellen" oder "Datensatz aktualisieren" führten ([#7556](https://github.com/nocobase/nocobase/pull/7556)) von @mytharcher

- **[Öffentliche Formulare]** Behebung des Problems, dass die Upload-Regeln für Dateifelder in öffentlichen Formularen falsch waren ([#7553](https://github.com/nocobase/nocobase/pull/7553)) von @mytharcher

- **[Kalender]** Behebung eines Datenabfrageproblems, das durch eine eindeutige Kennung im Kalenderblock verursacht wurde ([#7562](https://github.com/nocobase/nocobase/pull/7562)) von @katherinehhh

- **[Auth: LDAP]** Behebung eines LDAP-Bind-Fehlers mit nicht-ASCII (UTF-8) DNs in Active Directory von @2013xile
