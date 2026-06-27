---
title: "NocoBase v2.0.0-alpha.41: KI-Mitarbeiter zum Konfigurieren von Diagrammen hinzugefügt"
description: "Versionshinweise zu v2.0.0-alpha.41"
---

### 🎉 Neue Funktionen

- **[Datenvisualisierung]** KI-Mitarbeiter zur Konfiguration von Diagrammen hinzugefügt ([#7815](https://github.com/nocobase/nocobase/pull/7815)) von @heziqiang

### 🚀 Verbesserungen

- **[Workflow-Engine]**
  - Unterstützung zum Abhören von Baumänderungsereignissen von Workflow-Modellen in der Workflow-Engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) von @gchust

  - Verbesserte Auflösung der aktuellen Datensatzvariable, um das Öffnen von Dialogen zu beschleunigen ([#7895](https://github.com/nocobase/nocobase/pull/7895)) von @gchust

  - Optimierte API-Struktur von Drittanbieterbibliotheken im RunJS-Kontext und Unterstützung für die Antd-Symbolbibliothek hinzugefügt. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) von @gchust

- **[Datenbank]** Überarbeitung des Feldverschlüsselungs-Plugins zur Erhöhung der Sicherheit, Unterstützung für Anwendungsschlüssel-Generierung und -Rotation sowie feldspezifische Verschlüsselungsschlüssel. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) von @cgyrock

- **[Sammlungsfeld: Verschlüsselung]** Optimiertes Feldverschlüsselungs-Plugin zur Unterstützung des Datenabrufs mit unabhängigen IVs von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem ausgeblendete Blöcke weiterhin Platz auf der Seite belegten. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) von @gchust

  - Problem behoben, bei dem der Reset-Button im Filter-Button die Standardbedingungen löscht ([#7903](https://github.com/nocobase/nocobase/pull/7903)) von @zhangzhonghe

  - Falsche Berechtigungsprüfung für Unterformularfelder in neuen Formularen behoben ([#7902](https://github.com/nocobase/nocobase/pull/7902)) von @katherinehhh

- **[Server]** Problem im Service-Splitting-Modus behoben, bei dem abbestellte Warteschlangennachrichten nicht veröffentlicht werden konnten ([#7875](https://github.com/nocobase/nocobase/pull/7875)) von @mytharcher

- **[Workflow]**
  - Fehler behoben, der durch das Abhören von nicht existierenden externen Datenquellenereignissen verursacht wurde ([#7855](https://github.com/nocobase/nocobase/pull/7855)) von @mytharcher

  - Verwendung von eventQueue anstelle des gemeinsamen backgroundJob, um zu verhindern, dass die gemeinsame Warteschlange im Service-Splitting-Modus fälschlicherweise verarbeitet wird ([#7871](https://github.com/nocobase/nocobase/pull/7871)) von @mytharcher

- **[Workflow: Manueller Knoten]** Namespace der zu verwendenden Locale-Sprache korrigiert, um den korrekten Inhalt der Übersetzung anzuzeigen ([#7877](https://github.com/nocobase/nocobase/pull/7877)) von @mytharcher

- **[Zugriffskontrolle]** Problem, dass Assoziationsoperations-Snippets nicht wirksam wurden ([#7876](https://github.com/nocobase/nocobase/pull/7876)) von @2013xile

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Fehler behoben, der durch das Abhören von nicht existierenden externen Datenquellenereignissen verursacht wurde von @mytharcher

- **[Kommentare]** Problem behoben, bei dem zitierte Kommentare in Kommentarblöcken nicht angezeigt wurden von @katherinehhh

- **[Vorlagendruck]** Variablen im Filter analysiert von @jiannx

- **[Workflow: Genehmigung]** Problem behoben, bei dem Race Conditions während der gleichzeitigen Genehmigungsverarbeitung durch mehrere Genehmiger dazu führen konnten, dass ein Workflow-Knoten mehr als einmal ausgeführt wurde von @mytharcher
