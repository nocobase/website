---
title: "NocoBase v1.4.0-alpha.20241016035453: Feld für Anhänge (URL) hinzugefügt"
description: "Versionshinweise zu v1.4.0-alpha.20241016035453"
---

### 🎉 Neue Funktionen

- **[sdk]** Ermöglicht das Speichern von Client-Informationen im sessionStorage durch Setzen der Umgebungsvariable `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) von @2013xile
- **[Sammlungsfeld: Anhang (URL)]** Anhang (URL)-Feld hinzugefügt von @katherinehhh

### 🚀 Verbesserungen

- **[client]**

  - Optimierung des Remote-Debuggings ([#5394](https://github.com/nocobase/nocobase/pull/5394)) von @chenos
  - Stiloptimierung für die Zentrierung von Symbolen, wenn Aktionsschaltflächen nur Symbole verwenden ([#5413](https://github.com/nocobase/nocobase/pull/5413)) von @katherinehhh
  - Automatisches Schließen des Popup-Fensters beim Aktualisieren eines Datensatzes ([#5408](https://github.com/nocobase/nocobase/pull/5408)) von @katherinehhh
- **[Workflow: HTTP-Anfrageknoten]** Unterstützung für SSE (Server-Sent Events) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) von @chenos

### 🐛 Fehlerbehebungen

- **[Öffentliche Formulare]** Problem beim Klicken auf Einstellungen in öffentlichen Formularen behoben ([#5392](https://github.com/nocobase/nocobase/pull/5392)) von @katherinehhh
- **[client]**

  - Problem behoben, bei dem der Wert im Eingabefeld für den Standardwert nicht angezeigt wurde ([#5400](https://github.com/nocobase/nocobase/pull/5400)) von @zhangzhonghe
  - Fehler behoben, bei dem das zugehörige Feld nicht gefunden wurde, wenn für die Untertabelle Verknüpfungsregeln festgelegt waren ([#5402](https://github.com/nocobase/nocobase/pull/5402)) von @zhangzhonghe
  - Falsche Vorschaubildanzeige behoben, wenn der Dateityp standardmäßig nicht unterstützt wird ([#5401](https://github.com/nocobase/nocobase/pull/5401)) von @mytharcher
- **[Lokalisierung]** Problem behoben, bei dem Übersetzungen im Lokalisierungs-Plugin nach der Veröffentlichung nicht wirksam wurden ([#5416](https://github.com/nocobase/nocobase/pull/5416)) von @2013xile
