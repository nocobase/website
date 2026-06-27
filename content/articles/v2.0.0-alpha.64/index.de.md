---
title: "NocoBase v2.0.0-alpha.64: Unterstützung des Gemini-3-Modells mit Function-Calling-Thought-Signatur"
description: "Versionshinweise zu v2.0.0-alpha.64"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Unterstützung für das Gemini-3-Modell mit Funktionsaufruf-Signatur ([#8377](https://github.com/nocobase/nocobase/pull/8377)) von @heziqiang

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]**
  - Verbesserte KI-Fehlerbehandlung für LLM-Dienste und -Modelle ([#8351](https://github.com/nocobase/nocobase/pull/8351)) von @heziqiang

  - Unterstützung für benutzerdefinierte Bearbeitung und automatische Aktualisierung von System-Prompts ([#8378](https://github.com/nocobase/nocobase/pull/8378)) von @heziqiang

- **[Dateimanager]** Hinzufügen von Anfrageoptionen zum Abrufen von OSS-Dateien auf der Serverseite, falls zusätzliche Parameter oder Header benötigt werden ([#8372](https://github.com/nocobase/nocobase/pull/8372)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Logger]** Behebung, dass zusätzliche Fehlerinformationen beim Drucken von Systemprotokollen verworfen wurden ([#8367](https://github.com/nocobase/nocobase/pull/8367)) von @cgyrock

- **[Client]**
  - Behoben: Ein Assoziationsfeld konnte nach dem Wechsel von der Datensatzauswahl-Komponente zur Auswahl-Komponente weiterhin ein Popup öffnen. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) von @gchust

  - Behoben: Verknüpfungsregeln wurden nach dem Seitenwechsel für Detailblock, Bearbeitungsformularblock und Listenblock nicht erneut ausgeführt. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) von @gchust

  - Behoben: Konfigurierte Felder von Untertabellen/Unterformularen wurden beim Hin- und Herschalten von Feldkomponenten nicht angezeigt. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) von @gchust

- **[Workflow]**
  - Behebung eines Verknüpfungsregel-Problems im CC-Knoten-Detailblock des Workflows ([#8381](https://github.com/nocobase/nocobase/pull/8381)) von @zhangzhonghe

  - Behebung des Problems, dass die Ausführungsseite abstürzt, wenn ein Workflow gelöscht wurde ([#8361](https://github.com/nocobase/nocobase/pull/8361)) von @mytharcher

- **[Zugriffskontrolle]** Behebung eines Problems, bei dem die Datenquelle bei der Verarbeitung von Berechtigungen für Assoziationsfelder falsch aufgelöst wurde ([#8370](https://github.com/nocobase/nocobase/pull/8370)) von @2013xile
