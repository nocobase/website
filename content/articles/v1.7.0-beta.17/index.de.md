---
title: "NocoBase v1.7.0-beta.17: Unterstützung zum Aktualisieren von Daten in anderen Datenblöcken nach Aktualisierung eines Blocks"
description: "Versionshinweise zu v1.7.0-beta.17"
---

### 🎉 Neue Funktionen

- **[Abteilungen]** Die Plugins für Abteilung, Anhang-URL und Workflow-Antwortnachrichten sind jetzt kostenlos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) von @chenos

- **[Aktion: Stapelaktualisierung]** Unterstützt das Aktualisieren von Daten in anderen Datenblöcken nach der Aktualisierung von Daten in einem Block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) von @zhangzhonghe

### 🚀 Verbesserungen

- **[Workflow]** Unterstützt feste Popup-URLs für Workflow-Aufgaben ([#6640](https://github.com/nocobase/nocobase/pull/6640)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Beim Wechsel zum Gruppenmenü sollte nicht zu einer Seite gesprungen werden, die bereits im Menü ausgeblendet wurde ([#6654](https://github.com/nocobase/nocobase/pull/6654)) von @zhangzhonghe

  - Das Filterformular sollte die Meldung "Ungespeicherte Änderungen" nicht anzeigen ([#6657](https://github.com/nocobase/nocobase/pull/6657)) von @zhangzhonghe

  - Behebt das Problem, dass Vorschaubilder verdeckt werden ([#6651](https://github.com/nocobase/nocobase/pull/6651)) von @zhangzhonghe

  - Im Filterformular wird die Filterung trotzdem ausgelöst, wenn die Filter-Schaltfläche geklickt wird, aber Felder vorhanden sind, die die Validierung nicht bestanden haben ([#6659](https://github.com/nocobase/nocobase/pull/6659)) von @zhangzhonghe

  - Die Option "Mehrfachauswahl zulassen" funktioniert nicht bei Beziehungsfeldern ([#6661](https://github.com/nocobase/nocobase/pull/6661)) von @katherinehhh

  - Im Formularblock wird der Standardwert der Feldkonfiguration zuerst als ursprüngliche Variablezeichenfolge angezeigt und verschwindet dann ([#6649](https://github.com/nocobase/nocobase/pull/6649)) von @zhangzhonghe

- **[Sammlungsfeld: Anhang(URL)]** Erlaubt nur Dateisammlungen mit öffentlichem URL-Zugriff ([#6664](https://github.com/nocobase/nocobase/pull/6664)) von @katherinehhh

- **[Dateispeicher: S3(Pro)]**
  - Individuelle Baseurl- und Public-Einstellungen, verbessert die UX der S3 Pro-Speicherkonfiguration von @jiannx

  - Sprache organisieren von @jiannx

- **[Workflow: Genehmigung]** Unterstützt feste URLs für Genehmigungselemente im Aufgabencenter von @mytharcher

- **[Migrationsmanager]** Die Option zum Überspringen der automatischen Sicherung wird ungültig, wenn während der Migration ein Popup mit Umgebungsvariablen erscheint von @gchust
