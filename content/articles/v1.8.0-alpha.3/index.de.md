---
title: "NocoBase v1.8.0-alpha.3: Optimierung der Leistungsprobleme bei der Verarbeitung großer XLSX-Dateien"
description: "Versionshinweise zu v1.8.0-alpha.3"
---

### 🚀 Verbesserungen

- **[Aktion: Stapelbearbeitung]** Verwendung von `filterByTk` anstelle von `filter` im ausgewählten Modus ([#6994](https://github.com/nocobase/nocobase/pull/6994)) von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Optimierung der Leistungsprobleme bei der Verarbeitung großer XLSX-Dateien (Datensätze mit vielen Zeilen/Spalten), um Systemabstürze oder Einfrieren zu verhindern. von @aaaaaajie

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehlender Feldtitel in der assignedField-Komponente ([#6987](https://github.com/nocobase/nocobase/pull/6987)) von @katherinehhh

  - Das letzte Menüelement kann in der Menüverschiebeliste nicht ausgewählt werden ([#6997](https://github.com/nocobase/nocobase/pull/6997)) von @zhangzhonghe

  - Falsche Anzeige des Inhalts auf Seiten, die über Popup-Links geöffnet werden ([#6990](https://github.com/nocobase/nocobase/pull/6990)) von @zhangzhonghe

- **[Workflow]**
  - Filter wird nicht aktualisiert, wenn zwischen Kategorie-Tabs gewechselt wird ([#6989](https://github.com/nocobase/nocobase/pull/6989)) von @mytharcher

  - Workflow-Statistiken werden nicht automatisch erstellt ([#6993](https://github.com/nocobase/nocobase/pull/6993)) von @mytharcher
