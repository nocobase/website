---
title: "NocoBase v2.0.0-beta.7: Prozessebenen-Parallelitätssteuerung für den Basis-Task-Manager hinzugefügt"
description: "Versionshinweise zu v2.0.0-beta.7"
---

### 🎉 Neue Funktionen

- **[Test]** Prozessebene Parallelitätssteuerung für den Basis-Task-Manager hinzugefügt ([#8343](https://github.com/nocobase/nocobase/pull/8343)) von @cgyrock

- **[KI-Mitarbeiter]** Unterstützung für das Gemini-3-Modell mit Function-Calling-Thought-Signatur ([#8377](https://github.com/nocobase/nocobase/pull/8377)) von @heziqiang

### 🚀 Verbesserungen

- **[Flow-Engine]** `rowOrder` zu GridModel hinzugefügt, um eine konsistente Zeilenreihenfolge sicherzustellen ([#8371](https://github.com/nocobase/nocobase/pull/8371)) von @zhangzhonghe

- **[KI-Mitarbeiter]**
  - Unterstützung für benutzerdefinierte Bearbeitung und automatische Aktualisierung von System-Prompts ([#8378](https://github.com/nocobase/nocobase/pull/8378)) von @heziqiang

  - Verbesserte KI-Fehlerbehandlung für LLM-Dienste und -Modelle ([#8351](https://github.com/nocobase/nocobase/pull/8351)) von @heziqiang

- **[Dateimanager]** Anfrageoptionen zum Abrufen von OSS-Dateien auf der Serverseite hinzugefügt, falls zusätzliche Parameter oder Header benötigt werden ([#8372](https://github.com/nocobase/nocobase/pull/8372)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ein Problem behoben, bei dem ein Assoziationsfeld nach dem Wechsel von der Datensatzauswahl-Komponente zur Auswahl-Komponente weiterhin ein Popup öffnen konnte. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) von @gchust

  - Ein Problem behoben, bei dem Verknüpfungsregeln nach dem Ändern der Seitennummerierung für Detailblöcke, Bearbeitungsformularblöcke und Listenblöcke nicht erneut ausgeführt wurden. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) von @gchust

  - Ein Problem behoben, bei dem konfigurierte Felder von Untertabellen/Unterformularen beim wiederholten Wechseln von Feldkomponenten nicht angezeigt wurden. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) von @gchust

- **[Logger]** Problem behoben, bei dem zusätzliche Fehlerinformationen beim Drucken von Systemprotokollen verworfen wurden ([#8367](https://github.com/nocobase/nocobase/pull/8367)) von @cgyrock

- **[Block: Vorlage (veraltet)]** Ein Problem behoben, bei dem die Bearbeitungsseite für geerbte Vorlagen (v1) nicht aufgerufen werden konnte. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) von @gchust

- **[Workflow]**
  - Instanz-ID zur Snowflake-ID von Jobs hinzugefügt, um ID-Konflikte im Cluster-Modus zu vermeiden ([#8382](https://github.com/nocobase/nocobase/pull/8382)) von @mytharcher

  - Problem mit Verknüpfungsregeln im Detailblock des Workflow-CC-Knotens behoben ([#8381](https://github.com/nocobase/nocobase/pull/8381)) von @zhangzhonghe

  - Problem behoben, bei dem die Ausführungsseite abstürzte, wenn ein Workflow gelöscht wurde ([#8361](https://github.com/nocobase/nocobase/pull/8361)) von @mytharcher

- **[Zugriffskontrolle]** Ein Problem behoben, bei dem die Datenquelle bei der Verarbeitung von Berechtigungen für Assoziationsfelder falsch aufgelöst wurde ([#8370](https://github.com/nocobase/nocobase/pull/8370)) von @2013xile

- **[Datenquelle: REST-API]** Fehlertoleranz für den Anforderungskontext hinzugefügt, um Fehler zu vermeiden, wenn die Methode nicht im Kontext ist von @mytharcher
