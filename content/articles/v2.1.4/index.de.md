---
title: "NocoBase v2.1.4: Hochgeladene Importdateien auf Festplattenspeicher umgestellt, um den Speicherdruck bei großen Datenimporten zu reduzieren"
description: "Versionshinweise zu v2.1.4"
---

### 🚀 Verbesserungen

- **[Workflow]** Verbesserte Bearbeitung von Workflow-Metadaten durch Unterstützung der Beschreibungsbearbeitung im Detail-Popup und automatische Befüllung der Quell-Workflow-Metadaten beim Duplizieren von Workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Aktion: Datensätze importieren]** Geänderte Speicherung hochgeladener Importdateien auf Festplatte, um den Speicherdruck bei großen Datenimporten zu reduzieren. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) von @mytharcher
- **[Backup-Manager]** Behebung eines Sicherheitsproblems, bei dem unsichere PostgreSQL-Schema-Namen während der Backup-Wiederherstellung akzeptiert werden konnten. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) von @2013xile
- **[Workflow]**

  - Behobene Workflow-Timeout-Behandlung, sodass abgebrochene Ausführungen und deren ausstehende Aufgaben atomar aktualisiert werden können. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) von @mytharcher
  - Behobenes Problem, bei dem das Feld "Zuletzt aktualisiert von" des Workflows nach Änderungen an Workflow-Knoten nicht aktualisiert wurde. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Vermeidung der Analyse großer Dateien im Request-Knoten, bevor der Pro-Import eine asynchrone Aufgabe erstellt. von @mytharcher
- **[Versionskontrolle]** Anpassung der Position des oberen Kurzbefehl-Eintrags der Versionskontrolle, sodass er sowohl im alten als auch im v2-Admin-Layout neben dem UI-Editor erscheint. von @cgyrock
