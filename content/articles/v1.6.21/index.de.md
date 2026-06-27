---
title: "NocoBase v1.6.21: Verzögerungs-API für Szenarien ohne Verzögerung hinzugefügt"
description: "Versionshinweise zu v1.6.21"
---

### 🚀 Verbesserungen

- **[Client]** Verzögerungs-API für Szenarien hinzugefügt, die ohne Verzögerung geöffnet werden ([#6681](https://github.com/nocobase/nocobase/pull/6681)) von @mytharcher

- **[create-nocobase-app]** Einige Abhängigkeiten auf die neuesten Versionen aktualisiert ([#6673](https://github.com/nocobase/nocobase/pull/6673)) von @chenos

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehler behoben, der beim Bewegen der Maus über einen referenzierten Vorlagenblock in der Genehmigungsknotenkonfiguration auftrat ([#6691](https://github.com/nocobase/nocobase/pull/6691)) von @mytharcher

  - Benutzerdefiniertes Assoziationsfeld zeigt keine Feldkomponenteneinstellungen an ([#6692](https://github.com/nocobase/nocobase/pull/6692)) von @katherinehhh

  - Gebietsschema für die Upload-Komponente korrigiert ([#6682](https://github.com/nocobase/nocobase/pull/6682)) von @mytharcher

  - Fehlende UI-Komponente beim Lazy Load führt zu Renderfehlern ([#6683](https://github.com/nocobase/nocobase/pull/6683)) von @gchust

  - Nativen Passwort-Komponente zum HoC Input hinzugefügt ([#6679](https://github.com/nocobase/nocobase/pull/6679)) von @mytharcher

  - Geerbte Felder werden in der Feldzuweisungsliste der aktuellen Sammlung angezeigt ([#6666](https://github.com/nocobase/nocobase/pull/6666)) von @katherinehhh

- **[Datenbank]** CI-Build-Fehler behoben ([#6687](https://github.com/nocobase/nocobase/pull/6687)) von @aaaaaajie

- **[Build]** Build-Ausgabe ist falsch, wenn ein Plugin von einigen AMD-Bibliotheken abhängt ([#6665](https://github.com/nocobase/nocobase/pull/6665)) von @gchust

- **[Aktion: Datensätze importieren]** Fehler beim Importieren des xlsx-Zeitfelds behoben ([#6672](https://github.com/nocobase/nocobase/pull/6672)) von @aaaaaajie

- **[Workflow: Manueller Knoten]** Konstante für manuellen Aufgabenstatus korrigiert ([#6676](https://github.com/nocobase/nocobase/pull/6676)) von @mytharcher

- **[Block: iframe]** Vertikale Bildlaufleiste erscheint, wenn der iframe-Block auf volle Höhe gesetzt ist ([#6675](https://github.com/nocobase/nocobase/pull/6675)) von @katherinehhh

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Testfälle korrigiert von @mytharcher

- **[Backup-Manager]** Timeout-Fehler beim Versuch, ein unverschlüsseltes Backup mit einem Passwort wiederherzustellen, von @gchust
