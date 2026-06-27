---
title: "NocoBase v1.7.0-beta.4: Kaskadenauswahl-Komponente mit Datenbereichseinstellung"
description: "Versionshinweise zu v1.7.0-beta.4"
---

### 🎉 Neue Funktionen

- **[Client]** Kaskadenauswahl-Komponente: Datenbereichseinstellung hinzugefügt ([#6386](https://github.com/nocobase/nocobase/pull/6386)) von @Cyx649312038

### 🚀 Verbesserungen

- **[Utils]** `md5` in die Hilfsfunktionen verschoben ([#6468](https://github.com/nocobase/nocobase/pull/6468)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** In Baum-Blöcken werden die Daten im Datenblock nicht gelöscht, wenn die Auswahl aufgehoben wird ([#6460](https://github.com/nocobase/nocobase/pull/6460)) von @zhangzhonghe

- **[Dateimanager]** Löschen von in S3 gespeicherten Dateien nicht möglich ([#6467](https://github.com/nocobase/nocobase/pull/6467)) von @chenos

- **[Workflow]** Schaltfläche „Workflow-Einstellungen binden“ aus der Datenauswahl entfernt ([#6455](https://github.com/nocobase/nocobase/pull/6455)) von @mytharcher

- **[Dateispeicher: S3 (Pro)]** Problem mit nicht zugänglichen signierten S3-Pro-URLs behoben von @chenos

- **[Workflow: Genehmigung]** Seitenabsturz vermieden, wenn kein Antragsteller in der Genehmigungsprozess-Tabelle vorhanden ist von @mytharcher
