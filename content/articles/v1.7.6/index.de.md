---
title: "NocoBase v1.7.6: Fehlerbehebungen"
description: "Versionshinweise zu v1.7.6"
---

### 🚀 Verbesserungen

- **[Client]** Verschieben eines Gruppenmenüs in sich selbst verhindern ([#7005](https://github.com/nocobase/nocobase/pull/7005)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ein Problem behoben, bei dem ein Block keine Ansichtsdaten aus externen Datenquellen lesen konnte. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) von @aaaaaajie

  - Fehler bei den Filterblock-Parametern behoben ([#6966](https://github.com/nocobase/nocobase/pull/6966)) von @zhangzhonghe

  - Aktuelle Objektvariable in Verknüpfungsregeln ungültig ([#7008](https://github.com/nocobase/nocobase/pull/7008)) von @zhangzhonghe

  - Pflichtfeld-Indikator einer Untertabelle kann mit Verknüpfungsregeln nicht gelöscht werden ([#7022](https://github.com/nocobase/nocobase/pull/7022)) von @zhangzhonghe

- **[Undefiniert]** Datenbankabhängigkeit für possibleTypes entfernt, API-gesteuerte Konfiguration erzwungen von @aaaaaajie

- **[Mobil]** Optimierung von Verzögerungsproblemen bei mobilen Popups ([#7029](https://github.com/nocobase/nocobase/pull/7029)) von @zhangzhonghe

- **[Datenquellen-Manager]** Datenbankabhängigkeit für possibleTypes entfernt, API-gesteuerte Konfiguration erzwungen ([#7019](https://github.com/nocobase/nocobase/pull/7019)) von @aaaaaajie

- **[Aktion: Datensätze importieren]** Fehler bei der Stapelbearbeitung beim Import von XLSX-Baumtabellendaten behoben ([#7013](https://github.com/nocobase/nocobase/pull/7013)) von @aaaaaajie

- **[Workflow]** UI-Fehler behoben, wenn Workflow nicht existiert ([#7023](https://github.com/nocobase/nocobase/pull/7023)) von @mytharcher

- **[Workflow: JavaScript]** `require` für relative Pfade korrigiert von @mytharcher

- **[Workflow: Genehmigung]**
  - Fehler beim Löschen eines Workflows behoben von @mytharcher

  - Dateiverknüpfung aus Snapshot neu laden, um URL-Ablauf zu vermeiden von @mytharcher

  - Trigger-Variablen korrigiert von @mytharcher
