---
title: "NocoBase v2.1.0-alpha.13: JavaScript-Variablen zum Ereignisfluss hinzugefügt"
description: "Versionshinweise zu v2.1.0-alpha.13"
---

### 🎉 Neue Funktionen

- **[Client]** JS-Variablen zum Ereignisablauf hinzugefügt ([#8938](https://github.com/nocobase/nocobase/pull/8938)) von @jiannx

### 🚀 Verbesserungen

- **[Client]** Unterstützung zum Setzen von Feldstilen über runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) von @jiannx

- **[Flow-Engine]** Verbesserte Schema-Validierung für die UI-Erstellungs-API. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) von @gchust

- **[Workflow: Pre-Action Event]** Validierungsregeln für Trigger und Knoten hinzugefügt ([#8971](https://github.com/nocobase/nocobase/pull/8971)) von @mytharcher

- **[Workflow]** Variable für den Seitenparameter hinzugefügt ([#8951](https://github.com/nocobase/nocobase/pull/8951)) von @mytharcher

- **[Workflow: Webhook]** Validierung für die Erstellung von Trigger-/Knoten-APIs hinzugefügt von @mytharcher

- **[Workflow: Unterablauf]**
  - Validierung für die Erstellung von Knoten-APIs hinzugefügt von @mytharcher

  - Defensive Logik hinzugefügt, um Workflow-Hänger bei Ausnahmen zu vermeiden von @mytharcher

- **[Workflow: Genehmigung]** Validierung für Trigger-/Knoten-APIs hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Fehler beim Hinzufügen von Unterknoten zur Baumtabelle im Popup-Fenster behoben ([#8872](https://github.com/nocobase/nocobase/pull/8872)) von @jiannx

- **[Server]** Vermeidung der Verarbeitung von Sync-Nachrichten nach dem Stoppen der App ([#8940](https://github.com/nocobase/nocobase/pull/8940)) von @mytharcher

- **[Aktion: Datensätze exportieren]** Import- und Exportkonfiguration für mehrschichtige verknüpfte Felder eingeschränkt ([#8893](https://github.com/nocobase/nocobase/pull/8893)) von @jiannx

- **[Datenvisualisierung]** Fehlerhafte Datenstatistiken des Root-Rollen-Diagramms nach Aktivierung des Space-Plugins behoben ([#8969](https://github.com/nocobase/nocobase/pull/8969)) von @jiannx

- **[Aktion: Datensätze importieren]** Problem mit fehlgeschlagenem Import nach Öffnen von plugin-space behoben ([#8968](https://github.com/nocobase/nocobase/pull/8968)) von @jiannx

- **[Workflow: JavaScript]** Sicherheitsprobleme behoben ([#8967](https://github.com/nocobase/nocobase/pull/8967)) von @mytharcher

- **[KI-Mitarbeiter]** Abstand zwischen den Tool-Karten-Komponenten in der KI-Konversation angepasst ([#8965](https://github.com/nocobase/nocobase/pull/8965)) von @cgyrock

- **[Flow-Engine]** Entfernung veralteter Ereignisse aus dem uiSchema-Repository, um Fehler beim Auslösen zu vermeiden ([#8957](https://github.com/nocobase/nocobase/pull/8957)) von @mytharcher

- **[Authentifizierung]** ACL repariert, um benutzerdefinierte Statusfilterparameter zu unterstützen ([#8918](https://github.com/nocobase/nocobase/pull/8918)) von @jiannx

- **[Aktion: Datensätze importieren Pro]** Import- und Exportkonfiguration für mehrschichtige verknüpfte Felder eingeschränkt von @jiannx

- **[E-Mail-Manager]** Fehler behoben, bei dem Signaturen bei Verwendung von Vorlagen überschrieben wurden von @jiannx
