---
title: "NocoBase v2.0.0-beta.9: Verbesserung der Listen-Rendering-Leistung des Plugin-Managers durch Umstellung auf natives Webkit-CSS für Textauslassungspunkte"
description: "Versionshinweise zu v2.0.0-beta.9"
---

### 🚀 Verbesserungen

- **[Client]** Verbesserte Darstellungsleistung der Plugin-Manager-Liste durch Umstellung auf natives Webkit-CSS für Textauslassungspunkte ([#8391](https://github.com/nocobase/nocobase/pull/8391)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Dateimanager]** Problem behoben, bei dem die Datei-URL für in den S3-Speicher hochgeladene Dateien falsch generiert wurde ([#8392](https://github.com/nocobase/nocobase/pull/8392)) von @mytharcher

- **[Workflow]** Problem behoben, bei dem die Schema-ID in duplizierten Knoten nicht aktualisiert wurde ([#8396](https://github.com/nocobase/nocobase/pull/8396)) von @mytharcher

- **[Dateispeicher: S3 (Pro)]** Problem behoben, bei dem der Dateiumbenennungsmodus nicht funktionierte von @mytharcher

- **[Vorlagendruck]** Problem mit verdecktem Konfigurationsvorlagen-Popup behoben von @zhangzhonghe

- **[Workflow: Genehmigung]** Problem behoben, bei dem der Werteblock aufgrund der fehlenden Komponente `ValueBlock.Result` nicht angezeigt wurde von @mytharcher
