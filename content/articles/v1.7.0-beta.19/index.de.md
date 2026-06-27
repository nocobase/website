---
title: "NocoBase v1.7.0-beta.19: Unterstützung von Variablen auf der linken Seite von Verknüpfungsregelbedingungen"
description: "Versionshinweise zu v1.7.0-beta.19"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung von Variablen auf der linken Seite von Verknüpfungsregelbedingungen ([#6609](https://github.com/nocobase/nocobase/pull/6609)) von @katherinehhh

- **[Workflow: Datumsberechnungsknoten]** Funktion `changeTimezone` hinzugefügt, um den Zeitzonenwert für die Formatierung zu ändern von @mytharcher

### 🚀 Verbesserungen

- **[Client]**
  - Unterstützung ausgewählter Tabellendatensätze in benutzerdefinierten Anfragen ([#6647](https://github.com/nocobase/nocobase/pull/6647)) von @katherinehhh

  - Verzögerungs-API für Szenarien hinzugefügt, die ohne Verzögerung geöffnet werden ([#6681](https://github.com/nocobase/nocobase/pull/6681)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Datenbank]** Fehler beim CI-Build behoben ([#6687](https://github.com/nocobase/nocobase/pull/6687)) von @aaaaaajie

- **[Client]**
  - Fehler behoben, der beim Überfahren mit der Maus über einen referenzierten Vorlagenblock in der Genehmigungsknotenkonfiguration auftrat ([#6691](https://github.com/nocobase/nocobase/pull/6691)) von @mytharcher

  - Anzeigeproblem von Feldbeschreibungen im Workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) von @katherinehhh

  - Lokalisierung für die Upload-Komponente behoben ([#6682](https://github.com/nocobase/nocobase/pull/6682)) von @mytharcher

  - Benutzerdefiniertes Assoziationsfeld zeigt keine Feldkomponenteneinstellungen an ([#6692](https://github.com/nocobase/nocobase/pull/6692)) von @katherinehhh

  - Kompatibilität von Verknüpfungsregeln mit Legacy-Daten ([#6686](https://github.com/nocobase/nocobase/pull/6686)) von @katherinehhh

  - Fehlende UI-Komponente beim Lazy Loading führt zu Renderfehlern ([#6683](https://github.com/nocobase/nocobase/pull/6683)) von @gchust

  - Native Passwort-Komponente zu HoC Input hinzugefügt ([#6679](https://github.com/nocobase/nocobase/pull/6679)) von @mytharcher

- **[Workflow: Manueller Knoten]** Konstante für manuellen Aufgabenstatus behoben ([#6676](https://github.com/nocobase/nocobase/pull/6676)) von @mytharcher

- **[Aktion: Datensätze importieren]** Fehler beim Importieren von xlsx-Zeitfeldern behoben ([#6672](https://github.com/nocobase/nocobase/pull/6672)) von @aaaaaajie

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Testfälle behoben von @mytharcher

- **[Backup-Manager]** Timeout-Fehler beim Versuch, ein unverschlüsseltes Backup mit einem Passwort wiederherzustellen von @gchust
