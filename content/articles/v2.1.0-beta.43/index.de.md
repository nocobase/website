---
title: "NocoBase v2.1.0-beta.43: Aktualisierung der Embed NocoBase-Dokumentation für das Open-Source-Plugin"
description: "Versionshinweise zu v2.1.0-beta.43"
---

### 🎉 Neue Funktionen

- **[client-v2]** `TypedVariableInput` hinzugefügt, sodass die SMTP-Port- und Secure-Modus-Felder des v2-E-Mail-Plugins entweder eine typisierte Konstante oder eine `{{ $env.X }}`-Variable akzeptieren können. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) von @Molunerfinn

- **[Zugriffskontrolle]** Die Einstellungsseiten für Benutzer sowie Rollen & Berechtigungen wurden auf v2 migriert. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) von @jiannx

### 🚀 Verbesserungen

- **[undefined]** Aktualisierung der Embed-NocoBase-Dokumentation für das Open-Source-Plugin ([#9642](https://github.com/nocobase/nocobase/pull/9642)) von @zhangzhonghe
Referenz: [NocoBase einbetten](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Verbesserte Autovervollständigungsunterstützung für einige integrierte RunJS-Funktionen. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) von @gchust

- **[cli]** Verbesserte Anleitung für Initialisierung und Selbstaktualisierung ([#9633](https://github.com/nocobase/nocobase/pull/9633)) von @chenos

### 🐛 Fehlerbehebungen

- **[client]**
  - Behebung des Problems, dass Blöcke nach dem Aktualisieren der Seite fälschlicherweise als gelöscht angezeigt werden können ([#9662](https://github.com/nocobase/nocobase/pull/9662)) von @zhangzhonghe

  - Korrektur des falschen Verhaltens von Datensatzaktionsverknüpfungsregeln im Tabellenblock. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) von @gchust

  - (Verknüpfungsregel) Behebung, dass Felder schreibgeschützt werden, wenn sie nach dem Ausblenden wieder angezeigt werden ([#9649](https://github.com/nocobase/nocobase/pull/9649)) von @katherinehhh

- **[cli]** Korrektur der Nginx-Vorlage, um `.mjs`-Assets mit dem JavaScript-MIME-Typ auszuliefern. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) von @mytharcher

- **[database]** Behebung eines Problems, bei dem der Import numerischer Passwortwerte fehlschlagen konnte ([#9635](https://github.com/nocobase/nocobase/pull/9635)) von @2013xile

- **[flow-engine]**
  - Behebung eines Problems, bei dem das Popup nach dem Umschalten des UI-Konfigurationsmodus-Schalters veraltete UI-Daten anzeigte. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) von @gchust

  - Behebung des Problems, dass die Feldsuche beim Überfahren von Assoziationsfeldern gelöscht wird ([#9646](https://github.com/nocobase/nocobase/pull/9646)) von @zhangzhonghe

- **[client-v2]** Beibehalten der zugewiesenen Feldwerte ([#9640](https://github.com/nocobase/nocobase/pull/9640)) von @katherinehhh

- **[Dateimanager]** Korrektur der Validierung des lokalen Dateispeicherpfads, um unsichere Pfade zu verhindern, die aus dem konfigurierten Speicherstammverzeichnis entweichen. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) von @mytharcher

- **[Block: Gantt]** Verbesserte Platzierung des Gantt-Tooltips, um das Überdecken von Aufgabenbalken zu vermeiden, und konsistente Ausrichtung der Aufgabenbeschriftungen innerhalb und außerhalb der Balken ([#9638](https://github.com/nocobase/nocobase/pull/9638)) von @jiannx

- **[Zugriffskontrolle]** Korrektur unvollständiger Berechtigungen beim ersten Login, wenn die Verbundrolle die Standardrolle ist ([#9632](https://github.com/nocobase/nocobase/pull/9632)) von @2013xile

- **[Lizenzeinstellungen]** Korrektur, dass die Seite der Lizenzeinstellungen lange hängt, wenn die pkg-Login-Prüfung langsam oder nicht erreichbar ist ([#9650](https://github.com/nocobase/nocobase/pull/9650)) von @hongboji

- **[Workflow: JavaScript]** Klarstellung, dass der Unterstützungsmodus für Workflow-JavaScript-Module unsicher ist und keine Berechtigungsgrenze darstellt ([#9629](https://github.com/nocobase/nocobase/pull/9629)) von @mytharcher
Referenz: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Passwortrichtlinie]** Behebung eines Problems, bei dem die Validierung der Passwortrichtlinie für numerische Passwortwerte fehlschlagen konnte, von @2013xile
