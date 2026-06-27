---
title: "NocoBase v1.6.22: Abhängigkeiten aktualisiert und SQLite-Unterstützung entfernt"
description: "Versionshinweise zu v1.6.22"
---

### 🚀 Verbesserungen

- **[create-nocobase-app]** Abhängigkeiten aktualisiert und SQLite-Unterstützung entfernt ([#6708](https://github.com/nocobase/nocobase/pull/6708)) von @chenos

- **[Dateimanager]** Utils-API bereitgestellt ([#6705](https://github.com/nocobase/nocobase/pull/6705)) von @mytharcher

- **[Workflow]** Datumstypen zum Variablentypset hinzugefügt ([#6717](https://github.com/nocobase/nocobase/pull/6717)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem, dass Symbole der mobilen oberen Navigationsleiste schwer zu löschen sind ([#6734](https://github.com/nocobase/nocobase/pull/6734)) von @zhangzhonghe

  - Nach Verbindung über einen Fremdschlüssel führt das Klicken zum Auslösen der Filterung zu leeren Filterbedingungen ([#6634](https://github.com/nocobase/nocobase/pull/6634)) von @zhangzhonghe

  - Picker-Wechselproblem im Datumsfeld des Filter-Buttons ([#6695](https://github.com/nocobase/nocobase/pull/6695)) von @katherinehhh

  - Problem, dass der Einklapp-Button im linken Menü durch das Workflow-Popup-Fenster verdeckt wird ([#6733](https://github.com/nocobase/nocobase/pull/6733)) von @zhangzhonghe

  - Fehlende Aktionsoptionseinschränkungen beim erneuten Öffnen von Verknüpfungsregeln ([#6723](https://github.com/nocobase/nocobase/pull/6723)) von @katherinehhh

  - Export-Button wird ohne Exportberechtigung angezeigt ([#6689](https://github.com/nocobase/nocobase/pull/6689)) von @katherinehhh

  - Pflichtfelder, die durch Verknüpfungsregeln ausgeblendet werden, sollten die Formularübermittlung nicht beeinträchtigen ([#6709](https://github.com/nocobase/nocobase/pull/6709)) von @zhangzhonghe

- **[Server]** appVersion wurde von create-migration falsch generiert ([#6740](https://github.com/nocobase/nocobase/pull/6740)) von @chenos

- **[Build]** Fehlerbehebung beim Ausführen des tar-Befehls ([#6722](https://github.com/nocobase/nocobase/pull/6722)) von @mytharcher

- **[Workflow]** Fehlerbehebung beim Ausführen von geplanten Ereignissen in Unterworkflows ([#6721](https://github.com/nocobase/nocobase/pull/6721)) von @mytharcher

- **[Workflow: Benutzerdefinierte Aktion]** Unterstützung für die Ausführung im Mehrfachdatensatz-Modus von @mytharcher

- **[Dateispeicher: S3(Pro)]** Multer-Logik für serverseitiges Hochladen hinzugefügt von @mytharcher
