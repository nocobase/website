---
title: "NocoBase v1.9.41: Fehlerbehebung des Routenpfads des Workflow-Links"
description: "Versionshinweise zu v1.9.41"
---

### 🚀 Verbesserungen

- **[Client]** Unterstützung zum Deaktivieren redundanter Standard-Append-Parameter für `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Workflow]** Fehlertoleranz für die Auswahlkomponente von Sammlungsdatensätzen hinzugefügt, um Fehler beim Löschen einer Sammlung zu vermeiden ([#8528](https://github.com/nocobase/nocobase/pull/8528)) von @mytharcher

- **[Dateimanager]** Sicherer Dateipfad für lokalen Speicher, um Zugriffspfade außerhalb des Dokumentenstammverzeichnisses zu vermeiden ([#8539](https://github.com/nocobase/nocobase/pull/8539)) von @mytharcher

- **[Workflow: Unterworkflow]** Routenpfad des Workflow-Links korrigiert von @mytharcher
