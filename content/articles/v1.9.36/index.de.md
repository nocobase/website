---
title: "NocoBase v1.9.36: Verbesserung der Rendering-Leistung der Plugin-Manager-Liste durch Umstellung auf natives Webkit-CSS für Textauslassungspunkte"
description: "Versionshinweise zu v1.9.36"
---

### 🚀 Verbesserungen

- **[Client]** Verbesserte Rendering-Leistung der Plugin-Manager-Liste durch Umstellung auf natives Webkit-CSS für Textauslassungspunkte ([#8391](https://github.com/nocobase/nocobase/pull/8391)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Dateimanager]** Problem behoben, bei dem die Datei-URL für in den S3-Speicher hochgeladene Dateien falsch generiert wurde ([#8392](https://github.com/nocobase/nocobase/pull/8392)) von @mytharcher

- **[Dateispeicher: S3 (Pro)]** Problem behoben, bei dem der Dateiumbenennungsmodus nicht funktionierte von @mytharcher

- **[Workflow: Genehmigung]** Problem behoben, bei dem der Werteblock aufgrund der fehlenden `ValueBlock.Result`-Komponente nicht angezeigt wurde von @mytharcher
