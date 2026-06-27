---
title: "NocoBase v1.7.0-alpha.3: Unterstützung für Inline-Tabellenaktionen im Nur-Symbol-Modus"
description: "Versionshinweise zu v1.7.0-alpha.3"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Inline-Tabellenaktionen im Nur-Symbol-Modus, Anzeige des Aktionsnamens beim Überfahren mit der Maus ([#6451](https://github.com/nocobase/nocobase/pull/6451)) von @katherinehhh

### 🚀 Verbesserungen

- **[Dateimanager]** Vereinfachung der Logik zur Generierung von Datei-URLs und der API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) von @mytharcher

- **[Dateispeicher: S3(Pro)]**
  - Änderung des Textes 'Access URL Base' zu 'Base URL' von @zhangzhonghe

  - Umstellung auf eine einfachere Methode zur Generierung von Datei-URLs von @mytharcher

- **[Backup-Manager]** Erlauben der Wiederherstellung von Backups zwischen Vorab- und Release-Version derselben Version von @gchust

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehlende Felder in der Konfiguration der Verknüpfungsregeln ([#6488](https://github.com/nocobase/nocobase/pull/6488)) von @katherinehhh

  - Die Farbe der Symbole in der oberen rechten Ecke der Seite ändert sich nicht mit dem Theme ([#6482](https://github.com/nocobase/nocobase/pull/6482)) von @zhangzhonghe

  - Rich-Text-Feld löscht beim Absenden keine Daten ([#6486](https://github.com/nocobase/nocobase/pull/6486)) von @katherinehhh

  - Falscher Eingabestil bei der Einstellung des Standardwerts für Formulare ([#6490](https://github.com/nocobase/nocobase/pull/6490)) von @gchust

  - Klicken auf die Reset-Taste im Filterformular löscht die Filterbedingungen des Rasterkarten-Blocks nicht ([#6475](https://github.com/nocobase/nocobase/pull/6475)) von @zhangzhonghe

- **[Workflow: Manueller Knoten]**
  - Änderung des Migrationsnamens, um eine erneute Ausführung sicherzustellen ([#6487](https://github.com/nocobase/nocobase/pull/6487)) von @mytharcher

  - Migration korrigiert ([#6484](https://github.com/nocobase/nocobase/pull/6484)) von @mytharcher

  - Korrektur des Workflow-Titelfeldes im Filter ([#6480](https://github.com/nocobase/nocobase/pull/6480)) von @mytharcher

  - Behebung eines Migrationsfehlers, wenn die ID-Spalte nicht existiert ([#6470](https://github.com/nocobase/nocobase/pull/6470)) von @chenos

  - Vermeidung der Synchronisierung von Sammlungen aus Feldern ([#6478](https://github.com/nocobase/nocobase/pull/6478)) von @mytharcher

- **[Workflow]** Aufgaben nicht zählen, wenn Workflow gelöscht wurde ([#6474](https://github.com/nocobase/nocobase/pull/6474)) von @mytharcher

- **[Variablen und Geheimnisse]** Schaltflächen werden im Drawer zum Erstellen neuer Variablen nicht angezeigt ([#6485](https://github.com/nocobase/nocobase/pull/6485)) von @gchust

- **[Workflow: Aggregatknoten]** Korrektur der Rundung bei null-Ergebnissen ([#6473](https://github.com/nocobase/nocobase/pull/6473)) von @mytharcher

- **[NocoBase einbetten]** Seite zeigt leeren Inhalt an von @zhangzhonghe

- **[Backup-Manager]** Server kann nicht gestartet werden, wenn Standard-Backup-Einstellungen fehlen von @gchust

- **[Workflow: Genehmigung]**
  - Korrektur des Fehlers im Zusammenhang mit Dateiverknüpfungsfeldern im Prozessformular von @mytharcher

  - Korrektur der Aufgabenanzahl basierend auf Hooks von @mytharcher
