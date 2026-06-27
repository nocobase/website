---
title: "NocoBase v1.5.4: Ladezustand zur Duplizieraktion hinzugefügt"
description: "Versionshinweise zu v1.5.4"
---

### 🚀 Verbesserungen

- **[Workflow]** Ladezustand zur Duplizieren-Aktion hinzugefügt ([#6179](https://github.com/nocobase/nocobase/pull/6179)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehlerbehebung beim Erstellen von Knoten-Feldeinstellungen ([#6187](https://github.com/nocobase/nocobase/pull/6187)) von @mytharcher

  - Die Konfigurationsoption 'Mehrfachauswahl zulassen' für Verknüpfungsfelder wird in Filterformularen nicht angezeigt ([#6174](https://github.com/nocobase/nocobase/pull/6174)) von @zhangzhonghe

  - Feld bleibt nach dem Ausblenden durch Verknüpfungsregeln versteckt ([#6182](https://github.com/nocobase/nocobase/pull/6182)) von @zhangzhonghe

- **[Utils]** Optimierung der Speicher-/Plugin-Leselogik ([#6186](https://github.com/nocobase/nocobase/pull/6186)) von @chenos

- **[Benachrichtigung: In-App-Nachricht]** Fehlerbehebung: Benutzerfilter zu Nachrichten-Zeitstempel- und Titel-Unterabfragen in der Kanallisten-API hinzugefügt, um Datenisolierung sicherzustellen. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) von @deepure

- **[Backup-Manager]** Dateien wurden während der toleranten Wiederherstellung nicht vom Backup in den Uploads-Ordner kopiert von @gchust
