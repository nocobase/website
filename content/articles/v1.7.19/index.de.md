---
title: "NocoBase v1.7.19: Unterstützung zum Hinzufügen von Pool-Optionen aus der Umgebung"
description: "Versionshinweise zu v1.7.19"
---

### 🚀 Verbesserungen

- **[Datenbank]** Unterstützung zum Hinzufügen von Pool-Optionen aus der Umgebungsvariable ([#7133](https://github.com/nocobase/nocobase/pull/7133)) von @mytharcher

- **[Workflow]**
  - Verbesserte Ladeleistung der Ausführungsliste durch Ausschluss des JSON-Felds ([#7138](https://github.com/nocobase/nocobase/pull/7138)) von @mytharcher

  - Log-API für Knotentests hinzugefügt ([#7129](https://github.com/nocobase/nocobase/pull/7129)) von @mytharcher

- **[Multi-App-Manager]** Filterunterstützung für die Multi-App-Verwaltung hinzugefügt ([#7124](https://github.com/nocobase/nocobase/pull/7124)) von @katherinehhh

- **[Workflow: Genehmigung]** Zeit in der Zeitleiste auf absolut geändert von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Die Einstellung des Feld-Anzeigenamens in der verknüpften Ansicht hatte keine Wirkung ([#7130](https://github.com/nocobase/nocobase/pull/7130)) von @aaaaaajie

  - Problem mit der Hintergrundfarbe in der Untertabelle im Detailblock ([#7144](https://github.com/nocobase/nocobase/pull/7144)) von @katherinehhh

  - UI-Konfiguration des manuellen Workflow-Knotens: Verknüpfungsregeln können keine aktuellen Formularvariablen auswählen ([#7125](https://github.com/nocobase/nocobase/pull/7125)) von @zhangzhonghe

  - Standardwert des Assoziationsfelds überschreibt vorhandene Daten in der Untertabelle ([#7120](https://github.com/nocobase/nocobase/pull/7120)) von @katherinehhh

  - Markdown zeigte Änderungen nicht in Echtzeit an, wenn auf $nForm-Variablen verwiesen wurde ([#7147](https://github.com/nocobase/nocobase/pull/7147)) von @katherinehhh

  - Fehlertoleranz für Einstellungen basierend auf 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) von @mytharcher

- **[Utils]** Filterproblem bei DateOnly oder Datetime (ohne Zeitzone) unter Verwendung der Variablen "Exakter Tag" ([#7113](https://github.com/nocobase/nocobase/pull/7113)) von @katherinehhh

- **[Workflow]** Fehler durch zirkulären Import behoben ([#7134](https://github.com/nocobase/nocobase/pull/7134)) von @mytharcher

- **[Passwortrichtlinie]** Unterstützung für dauerhafte Sperrung von Benutzerkonten von @2013xile

- **[Workflow: Unterworkflow]** Problem im Cluster-Modus behoben von @mytharcher

- **[Workflow: Genehmigung]**
  - Nicht filterbare Felder aus dem Filter entfernt von @mytharcher

  - Formular-Layout-Einstellungen hinzugefügt von @mytharcher
