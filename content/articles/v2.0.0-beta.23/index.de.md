---
title: "NocoBase v2.0.0-beta.23: Unterstützung für konfigurierbare Blockhöhe"
description: "Versionshinweise zu v2.0.0-beta.23"
---

### 🎉 Neue Funktionen

- **[Block: GridCard]** Unterstützung für konfigurierbare Blockhöhe ([#8583](https://github.com/nocobase/nocobase/pull/8583)) von @katherinehhh

- **[Aktion: Stapelbearbeitung]** Stapelbearbeitung 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) von @jiannx

### 🚀 Verbesserungen

- **[Client]**
  - Tabelle 2.0 unterstützt Drag-and-Drop-Sortierung ([#8540](https://github.com/nocobase/nocobase/pull/8540)) von @jiannx

  - Feldzuweisung und Standardwerteinstellungen auf Formularebene verschoben. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) von @chenos

- **[Lokalisierung]** Automatisches Erstellen fehlender i18n-Schlüssel ([#8588](https://github.com/nocobase/nocobase/pull/8588)) von @jiannx

### 🐛 Fehlerbehebungen

- **[Client]**
  - Korrektur falsch gefilterter Daten im Assoziations-Dropdown, wenn das Titelfeld ein Fremdschlüssel ist ([#8619](https://github.com/nocobase/nocobase/pull/8619)) von @katherinehhh

  - Problem behoben, bei dem ein geleertes assoziiertes Anhangs-Feld nach dem Absenden im Bearbeitungsformular nicht gespeichert wurde ([#8616](https://github.com/nocobase/nocobase/pull/8616)) von @katherinehhh

  - Problem behoben, bei dem Feldkomponenten-Optionen nicht in Echtzeit aktualisiert wurden, wenn das Assoziationsfeld das Muster wechselt ([#8611](https://github.com/nocobase/nocobase/pull/8611)) von @katherinehhh

  - Problem behoben, bei dem Tabellenspalten nach Klicken auf "Ausführen" im JS-Spalteneditor nicht neu gerendert wurden. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) von @gchust

  - Problem behoben, dass ausgewählte Daten im Datensatzauswahl-Feldkomponenten nach der Bearbeitung nicht wiederhergestellt werden konnten ([#8610](https://github.com/nocobase/nocobase/pull/8610)) von @katherinehhh

- **[Dateimanager]** Problem behoben, bei dem die Dateifeld-Komponente den Auswahldialog auch im deaktivierten Zustand öffnen konnte ([#8617](https://github.com/nocobase/nocobase/pull/8617)) von @katherinehhh

- **[Datenvisualisierung: ECharts]** Korrektur eines Rechtschreibfehlers in ECharts von @heziqiang

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem Werte im Detail-Popup von "Meine Anträge" fehlten von @mytharcher

  - Fehler behoben, der beim Ausführen im Modus "Vor dem Speichern" auftrat von @mytharcher
