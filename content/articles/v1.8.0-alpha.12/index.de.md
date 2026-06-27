---
title: "NocoBase v1.8.0-alpha.12: Unterstützung zum Hinzufügen von Pool-Optionen aus der Umgebung"
description: "Versionshinweise zu v1.8.0-alpha.12"
---

### 🚀 Verbesserungen

- **[Datenbank]** Unterstützung zum Hinzufügen von Pool-Optionen aus der Umgebung ([#7133](https://github.com/nocobase/nocobase/pull/7133)) von @mytharcher

- **[Workflow]**
  - Verbesserte Ladeleistung der Ausführungsliste durch Ausschluss des JSON-Felds ([#7138](https://github.com/nocobase/nocobase/pull/7138)) von @mytharcher

  - Log-API für Knotentests hinzugefügt ([#7129](https://github.com/nocobase/nocobase/pull/7129)) von @mytharcher

- **[Workflow: Genehmigung]** Zeit in der Zeitleiste auf absolut geändert von @mytharcher

### 🐛 Fehlerbehebungen

- **[utils]** Filterproblem bei DateOnly oder Datetime (ohne Zeitzone) bei Verwendung der Variablen „Exakter Tag“ ([#7113](https://github.com/nocobase/nocobase/pull/7113)) von @katherinehhh

- **[cli]**
  - Undefinierter Fehler beim Herunterladen von Plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) von @jiannx

  - Anpassung der Lizenzkopie bei der Plugin-Installation ([#7135](https://github.com/nocobase/nocobase/pull/7135)) von @jiannx

- **[client]**
  - Fehlertoleranz für Einstellungen basierend auf 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) von @mytharcher

  - Das Setzen des Feld-anzeigenamens in der verknüpften Ansicht hatte keine Wirkung ([#7130](https://github.com/nocobase/nocobase/pull/7130)) von @aaaaaajie

  - Workflow-Manueller-Knoten-UI-Konfiguration: Verknüpfungsregeln können keine Variablen des aktuellen Formulars auswählen ([#7125](https://github.com/nocobase/nocobase/pull/7125)) von @zhangzhonghe

- **[Workflow]** Fehler durch zirkulären Import behoben ([#7134](https://github.com/nocobase/nocobase/pull/7134)) von @mytharcher

- **[plugin-commercial]**
  - Entwicklungsmodus zeigt kein Lizenz-Popup an von @jiannx

  - Lizenzprüfungs-Popup vorübergehend geschlossen von @jiannx

  - Anpassung der Lizenzprüfungslogik und Unterstützung für Pan-Domain-Namensabgleich von @jiannx

- **[Passwortrichtlinie]** Unterstützung für dauerhafte Sperrung von Benutzerkonten von @2013xile

- **[Workflow: Unterworkflow]** Problem im Cluster-Modus behoben von @mytharcher

- **[Workflow: Genehmigung]**
  - Formular-Layout-Einstellungen hinzugefügt von @mytharcher

  - Nicht filterbare Felder aus dem Filter entfernt von @mytharcher
