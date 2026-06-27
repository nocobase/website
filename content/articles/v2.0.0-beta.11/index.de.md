---
title: "NocoBase v2.0.0-beta.11: Rich-Text-Editor unterstützt Schriftgrößenanpassung, Bildgrößenanpassung und weiche Zeilenumbrüche"
description: "Versionshinweise zu v2.0.0-beta.11"
---

### 🚀 Verbesserungen

- **[Evaluatoren]** Aktualisierung der math.js-Version zur Unterstützung weiterer Funktionen ([#8411](https://github.com/nocobase/nocobase/pull/8411)) von @mytharcher

- **[Client]** Rich-Text-Editor unterstützt Schriftgrößenanpassung, Bildgrößenanpassung und weiche Zeilenumbrüche ([#8401](https://github.com/nocobase/nocobase/pull/8401)) von @jiannx

- **[KI-Mitarbeiter]** Ergebnis des Workflow-Aufrufers auf `execution.output` geändert; durch explizite Verwendung des Ausgabeknotens kann das Ergebnis stabil sein ([#8423](https://github.com/nocobase/nocobase/pull/8423)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehlertoleranz für Aktionsschema hinzugefügt, um Seitenabstürze beim Klicken auf Aktionsschaltflächen zu vermeiden ([#8420](https://github.com/nocobase/nocobase/pull/8420)) von @mytharcher

  - Fehler behoben, bei dem die Titelfeldeinstellung nach dem Festlegen einer Anhangs-URL und anschließendem Wechsel zu einem anderen Feld in einem Formularelement verschwand ([#8418](https://github.com/nocobase/nocobase/pull/8418)) von @katherinehhh

  - Fehler behoben, bei dem das Titelfeld nicht aktualisiert wurde, wenn das Verknüpfungsfeld im Erstellungsformular auf den schreibgeschützten Modus gesetzt war ([#8413](https://github.com/nocobase/nocobase/pull/8413)) von @katherinehhh

- **[Flow-Engine]** Problem behoben, bei dem die Variablenauflösung falsch war, wenn filterByTk ein Array war. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) von @gchust

- **[Vorlagendruck]** Unterstützung für Leerzeichenfeld von @jiannx
