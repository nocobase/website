---
title: "NocoBase v1.7.0-beta.5: Unterstützung für Inline-Tabellenaktionen im Nur-Symbol-Modus"
description: "Versionshinweise zu v1.7.0-beta.5"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Inline-Tabellenaktionen im Nur-Symbol-Modus, Anzeige des Aktionsnamens beim Hovern ([#6451](https://github.com/nocobase/nocobase/pull/6451)) von @katherinehhh

### 🚀 Verbesserungen

- **[Dateimanager]** Vereinfachung der Logik und API zur Generierung von Datei-URLs ([#6472](https://github.com/nocobase/nocobase/pull/6472)) von @mytharcher

- **[Dateispeicher: S3(Pro)]**
  - Änderung des Textes 'Access URL Base' zu 'Base URL' von @zhangzhonghe

  - Umstellung auf eine einfachere Methode zur Generierung von Datei-URLs von @mytharcher

- **[Backup-Manager]** Erlaube die Wiederherstellung von Backups zwischen Pre-Release- und Release-Version derselben Version von @gchust

### 🐛 Fehlerbehebungen

- **[Client]**
  - Die Farbe der Symbole in der oberen rechten Ecke der Seite ändert sich nicht mit dem Theme ([#6482](https://github.com/nocobase/nocobase/pull/6482)) von @zhangzhonghe

  - Rich-Text-Feld löscht beim Absenden keine Daten ([#6486](https://github.com/nocobase/nocobase/pull/6486)) von @katherinehhh

  - Klicken der Reset-Taste im Filterformular kann die Filterbedingungen des Grid-Karten-Blocks nicht löschen ([#6475](https://github.com/nocobase/nocobase/pull/6475)) von @zhangzhonghe

- **[Workflow: Manueller Knoten]**
  - Migration korrigiert ([#6484](https://github.com/nocobase/nocobase/pull/6484)) von @mytharcher

  - Migrationsname geändert, um erneute Ausführung sicherzustellen ([#6487](https://github.com/nocobase/nocobase/pull/6487)) von @mytharcher

  - Workflow-Titelfeld im Filter korrigiert ([#6480](https://github.com/nocobase/nocobase/pull/6480)) von @mytharcher

  - Vermeidung der Synchronisierung von Sammlungen aus Feldern ([#6478](https://github.com/nocobase/nocobase/pull/6478)) von @mytharcher

  - Migrationsfehler behoben, wenn die ID-Spalte nicht existiert ([#6470](https://github.com/nocobase/nocobase/pull/6470)) von @chenos

- **[Workflow]** Aufgaben nicht zählen, wenn Workflow gelöscht wurde ([#6474](https://github.com/nocobase/nocobase/pull/6474)) von @mytharcher

- **[Workflow: Aggregatknoten]** Rundung bei null-Ergebnis korrigiert ([#6473](https://github.com/nocobase/nocobase/pull/6473)) von @mytharcher

- **[NocoBase einbetten]** Seite zeigt leeren Inhalt an von @zhangzhonghe

- **[Backup-Manager]** Server kann nicht gestartet werden, wenn Standard-Backup-Einstellungen fehlen von @gchust

- **[Workflow: Genehmigung]**
  - Fehler im Zusammenhang mit dem Dateizuordnungsfeld im Prozessformular behoben von @mytharcher

  - Aufgabenanzahl basierend auf Hooks korrigiert von @mytharcher
