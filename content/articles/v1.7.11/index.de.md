---
title: "NocoBase v1.7.11: Unterstützung zum Kopieren von Textfeldinhalten mit einem Klick"
description: "Versionshinweise zu v1.7.11"
---

### 🎉 Neue Funktionen

- **[Text kopieren]** Unterstützung für das Kopieren von Textfeldinhalten mit einem Klick ([#6954](https://github.com/nocobase/nocobase/pull/6954)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**
  - Der Auswahl-Assistent für Verknüpfungsfelder löscht nach dem Absenden keine ausgewählten Daten ([#7067](https://github.com/nocobase/nocobase/pull/7067)) von @katherinehhh

  - Korrektur des Upload-Größenhinweises ([#7057](https://github.com/nocobase/nocobase/pull/7057)) von @mytharcher

- **[Server]** Eigenschaften von undefined können nicht gelesen werden (Lesen von 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) von @chenos

- **[Workflow: Schleifenknoten]** Korrektur: Schleifenverzweigung wird ausgeführt, wenn Bedingung nicht erfüllt ist ([#7063](https://github.com/nocobase/nocobase/pull/7063)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Korrektur: Aufgabenstatistiken werden nicht aktualisiert, wenn die Ausführung abgebrochen wurde von @mytharcher

  - Korrektur: Trigger-Variable bei Filterung nach Typ von @mytharcher
