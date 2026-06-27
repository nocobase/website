---
title: "NocoBase v2.0.0-alpha.5: Fehlerbehebungen"
description: "Versionshinweise zu v2.0.0-alpha.5"
---

### 🐛 Fehlerbehebungen

- **[Server]** Fehler bei der Migration des Primärschlüssels ([#7563](https://github.com/nocobase/nocobase/pull/7563)) von @2013xile

- **[Client]**
  - Problem behoben, dass Daten nach dem Absenden des Formulars nicht aktualisiert wurden ([#7560](https://github.com/nocobase/nocobase/pull/7560)) von @zhangzhonghe

  - Problem behoben, bei dem fehlende dynamische Eigenschaften in der `AssignedField`-Komponente zu Datei-Upload-Fehlern in den Knoten "Datensatz erstellen" oder "Datensatz aktualisieren" führten ([#7556](https://github.com/nocobase/nocobase/pull/7556)) von @mytharcher

- **[Kalender]** Datenabfrageproblem aufgrund einer eindeutigen Kennung im Kalenderblock behoben ([#7562](https://github.com/nocobase/nocobase/pull/7562)) von @katherinehhh

- **[Block: Vorlage (veraltet)]]** Problem behoben, bei dem beim Öffnen oder Schließen von Modalen unnötige Anfragen für Blockvorlagen ausgelöst wurden ([#7561](https://github.com/nocobase/nocobase/pull/7561)) von @gchust

- **[Öffentliche Formulare]** Problem behoben, dass die Upload-Regeln für Dateifelder in öffentlichen Formularen falsch waren ([#7553](https://github.com/nocobase/nocobase/pull/7553)) von @mytharcher

- **[Multi-App-Manager (veraltet)]]** Port-Validierung vor der Datenmigration von Multi-Anwendungen behoben ([#7540](https://github.com/nocobase/nocobase/pull/7540)) von @jiannx
