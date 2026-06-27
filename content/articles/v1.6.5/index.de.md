---
title: "NocoBase v1.6.5: Vereinfachung der Logik und API zur Generierung von Datei-URLs"
description: "Versionshinweise zu v1.6.5"
---

### 🚀 Verbesserungen

- **[Dateimanager]** Vereinfachung der Logik zur Generierung von Datei-URLs und der API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) von @mytharcher

- **[Dateispeicher: S3 (Pro)]** Umstellung auf eine einfachere Methode zur Generierung von Datei-URLs von @mytharcher

- **[Backup-Manager]** Wiederherstellung von Backups zwischen Vorab- und Release-Version derselben Version erlauben von @gchust

### 🐛 Fehlerbehebungen

- **[Client]**
  - Rich-Text-Feld löscht Daten beim Absenden nicht ([#6486](https://github.com/nocobase/nocobase/pull/6486)) von @katherinehhh

  - Die Farbe der Symbole in der oberen rechten Ecke der Seite ändert sich nicht mit dem Theme ([#6482](https://github.com/nocobase/nocobase/pull/6482)) von @zhangzhonghe

  - Ein Klick auf die Schaltfläche „Zurücksetzen“ im Filterformular kann die Filterbedingungen des Rasterkarten-Blocks nicht löschen ([#6475](https://github.com/nocobase/nocobase/pull/6475)) von @zhangzhonghe

- **[Workflow: Manueller Knoten]**
  - Migration korrigiert ([#6484](https://github.com/nocobase/nocobase/pull/6484)) von @mytharcher

  - Migrationsname geändert, um erneute Ausführung sicherzustellen ([#6487](https://github.com/nocobase/nocobase/pull/6487)) von @mytharcher

  - Workflow-Titelfeld im Filter korrigiert ([#6480](https://github.com/nocobase/nocobase/pull/6480)) von @mytharcher

  - Migrationsfehler behoben, wenn die ID-Spalte nicht existiert ([#6470](https://github.com/nocobase/nocobase/pull/6470)) von @chenos

  - Vermeidung der Synchronisierung von Sammlungen aus Feldern ([#6478](https://github.com/nocobase/nocobase/pull/6478)) von @mytharcher

- **[Workflow: Aggregatknoten]** Rundung bei null-Ergebnis korrigiert ([#6473](https://github.com/nocobase/nocobase/pull/6473)) von @mytharcher

- **[Workflow]** Aufgaben nicht zählen, wenn Workflow gelöscht wurde ([#6474](https://github.com/nocobase/nocobase/pull/6474)) von @mytharcher

- **[Backup-Manager]** Server kann nicht gestartet werden, wenn Standard-Backup-Einstellungen fehlen von @gchust

- **[Workflow: Genehmigung]**
  - Fehler im Zusammenhang mit Dateiverknüpfungsfeld im Prozessformular behoben von @mytharcher

  - Aufgabenanzahl basierend auf Hooks korrigiert von @mytharcher
