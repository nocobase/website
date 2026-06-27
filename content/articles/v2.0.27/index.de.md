---
title: "NocoBase v2.0.27: Variable für den Seitenparameter hinzugefügt"
description: "Versionshinweise zu v2.0.27"
---

### 🚀 Verbesserungen

- **[Workflow]** Variable für den Seitenparameter hinzugefügt ([#8951](https://github.com/nocobase/nocobase/pull/8951)) von @mytharcher

- **[Workflow: Unterworkflow]** Abwehrlogik hinzugefügt, um Workflow-Hänger bei Ausnahmen zu vermeiden von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Fehler beim Hinzufügen von Kindknoten zur Baumtabelle im Popup-Fenster behoben ([#8872](https://github.com/nocobase/nocobase/pull/8872)) von @jiannx

- **[Server]** Verarbeitung von Sync-Nachrichten nach dem Stoppen der App vermieden ([#8940](https://github.com/nocobase/nocobase/pull/8940)) von @mytharcher

- **[Flow-Engine]** Legacy-Ereignis aus dem uiSchema-Repository entfernt, um Fehler beim Auslösen zu vermeiden ([#8957](https://github.com/nocobase/nocobase/pull/8957)) von @mytharcher

- **[Authentifizierung]** ACL repariert, um benutzerdefinierte Statusfilterparameter zu unterstützen ([#8918](https://github.com/nocobase/nocobase/pull/8918)) von @jiannx

- **[E-Mail-Manager]** Fehler behoben, bei dem die Signatur bei Verwendung von Vorlagen überschrieben wurde von @jiannx
