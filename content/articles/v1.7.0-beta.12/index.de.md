---
title: "NocoBase v1.7.0-beta.12: onScanSuccess-Callback hinzugefügt"
description: "Versionshinweise zu v1.7.0-beta.12"
---

### 🎉 Neue Funktionen

- **[Block: Aktionspanel]** Ein onScanSuccess-Callback hinzugefügt, um erfolgreiche Scans zu behandeln und die Kamera-Benutzeroberfläche zu verlassen. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) von @sheldon66

### 🚀 Verbesserungen

- **[Asynchroner Aufgabenmanager]** Import-/Export-Schaltflächen in Pro optimiert ([#6531](https://github.com/nocobase/nocobase/pull/6531)) von @chenos

- **[Aktion: Datensätze exportieren Pro]** Import-/Export-Schaltflächen in Pro optimiert von @katherinehhh

- **[Migrationsmanager]** Erlaube das Überspringen der automatischen Sicherung und Wiederherstellung für die Migration von @gchust

### 🐛 Fehlerbehebungen

- **[Client]** Verknüpfungskonflikt zwischen gleichnamigen Assoziationsfeldern in verschiedenen Untertabellen innerhalb desselben Formulars ([#6577](https://github.com/nocobase/nocobase/pull/6577)) von @katherinehhh

- **[Kalender]** Fehlende Daten an Grenzdaten in der Wochenkalenderansicht ([#6587](https://github.com/nocobase/nocobase/pull/6587)) von @katherinehhh

- **[Zugriffskontrolle]** Falsche Zuweisung der aktuellen Rolle während des Logins ([#6581](https://github.com/nocobase/nocobase/pull/6581)) von @aaaaaajie

- **[Aktion: Stapelbearbeitung]** Klicke auf die Stapelbearbeitung-Schaltfläche, konfiguriere das Pop-up-Fenster und öffne es erneut – das Pop-up-Fenster ist leer ([#6578](https://github.com/nocobase/nocobase/pull/6578)) von @zhangzhonghe

- **[Block: Mehrschritt-Formular]** Fehler behoben, bei dem das Zurücksetzen des Formulars unwirksam war, wenn das Feld mit einem anderen Feld verknüpft ist von @jiannx

- **[Workflow: Genehmigung]** Fehler behoben, bei dem die Genehmigungsknotenkonfiguration nach Schemaänderung falsch war von @mytharcher
