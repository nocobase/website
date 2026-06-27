---
title: "NocoBase v1.7.20: Fehlerbehebungen"
description: "Versionshinweise zu v1.7.20"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Nach Feldänderungen sollten Datenbereiche, die von diesem Feld abhängen, automatisch die ausgewählten Werte löschen ([#7161](https://github.com/nocobase/nocobase/pull/7161)) von @zhangzhonghe

  - Behebung des Problems, dass die Einstellung der Tabellenspaltenbreite wirkungslos ist ([#7158](https://github.com/nocobase/nocobase/pull/7158)) von @zhangzhonghe

  - Behebung des Fehlerproblems mit Filterformularen im Popup der Schaltfläche "Duplizieren" ([#7154](https://github.com/nocobase/nocobase/pull/7154)) von @zhangzhonghe

  - Ein Fehler beim Speichern einer Eins-zu-Eins-Beziehung in einem Konfigurationsfeld wurde behoben. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) von @aaaaaajie

- **[Undefiniert]** Behebung von e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) von @mytharcher

- **[Dateimanager]**
  - Behebung der MIME-Typ-Erkennung ([#7164](https://github.com/nocobase/nocobase/pull/7164)) von @mytharcher

  - Behebung eines Build-Fehlers aufgrund eines ESM-Pakets ([#7169](https://github.com/nocobase/nocobase/pull/7169)) von @mytharcher

- **[Öffentliche Formulare]** Behebung eines Problems, bei dem das Feld "Nur Datum" in einem öffentlichen Formular kein Datum auswählen konnte. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) von @katherinehhh

- **[Workflow]** Behebung des Problems, dass auf mobilen Geräten mehrmals nach links gewischt werden muss, um zur vorherigen Seite zurückzukehren ([#7165](https://github.com/nocobase/nocobase/pull/7165)) von @zhangzhonghe

- **[Datenvisualisierung]** Problem mit der Tabellenseitennummerierung ([#7151](https://github.com/nocobase/nocobase/pull/7151)) von @2013xile

- **[Workflow: Genehmigung]**
  - Behebung, dass Verknüpfungen nach dem Zurückziehen nicht geladen wurden von @mytharcher

  - Entfernung der Transaktion zum Patchen des Schemas aufgrund von Zeitüberschreitung von @mytharcher

  - Behebung eines Fehlers, der beim Löschen einer Genehmigung ausgelöst wurde von @mytharcher

  - Behebung der Aktualisierung von Verknüpfungen beim Absenden von @mytharcher
