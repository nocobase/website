---
title: "NocoBase v1.6.20: Machen Sie die Plugins für Abteilung, Anhang-URL und Workflow-Antwortnachricht kostenlos"
description: "Versionshinweise zu v1.6.20"
---

### 🎉 Neue Funktionen

- **[Abteilungen]** Die Plugins für Abteilung, Anhang-URL und Workflow-Antwortnachricht werden kostenlos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) von @chenos

### 🐛 Fehlerbehebungen

- **[Client]**
  - Das Filterformular sollte die Meldung "Ungespeicherte Änderungen" nicht anzeigen ([#6657](https://github.com/nocobase/nocobase/pull/6657)) von @zhangzhonghe

  - Die Option "Mehrfachauswahl zulassen" funktioniert nicht bei Beziehungsfeldern ([#6661](https://github.com/nocobase/nocobase/pull/6661)) von @katherinehhh

  - Im Filterformular wird die Filterung trotzdem ausgelöst, wenn auf die Filter-Schaltfläche geklickt wird, obwohl Felder vorhanden sind, die die Validierung nicht bestanden haben ([#6659](https://github.com/nocobase/nocobase/pull/6659)) von @zhangzhonghe

  - Das Wechseln zum Gruppenmenü sollte nicht zu einer Seite springen, die bereits im Menü ausgeblendet wurde ([#6654](https://github.com/nocobase/nocobase/pull/6654)) von @zhangzhonghe

- **[Dateispeicher: S3(Pro)]**
  - Sprache organisieren von @jiannx

  - Individuelle Basis-URL und öffentliche Einstellungen, Verbesserung der UX der S3 Pro-Speicherkonfiguration von @jiannx

- **[Migrationsmanager]** Die Option zum Überspringen der automatischen Sicherung wird ungültig, wenn während der Migration ein Popup mit Umgebungsvariablen erscheint von @gchust
