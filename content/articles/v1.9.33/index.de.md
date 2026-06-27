---
title: "NocoBase v1.9.33: Unterstützung der Konfiguration von Dateiumbenennungsmethoden"
description: "Versionshinweise zu v1.9.33"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für plugin-definierte Wartungskomponenten, wenn die App in den Wartungsstatus wechselt ([#8252](https://github.com/nocobase/nocobase/pull/8252)) von @cgyrock

- **[Dateimanager]** Unterstützung für die Konfiguration der Dateiumbenennungsmethode ([#8231](https://github.com/nocobase/nocobase/pull/8231)) von @JAVA-LW

- **[Dateispeicher: S3(Pro)]** Umbenennungsmodus-Option für S3 Pro-Speicher hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Migrationsmanager]** Verbesserte Migrationsprüfungen, SQL-Download-Unterstützung, Protokollformatierung und Sichtbarkeit des Ausführungsprozesses von @cgyrock

### 🐛 Fehlerbehebungen

- **[Datenbank]**
  - Durchlauf-Scope bei Abfragen von m2m-Beziehungen einbeziehen ([#8277](https://github.com/nocobase/nocobase/pull/8277)) von @2013xile

  - Objekt-`appends` in `OptionsParser` korrigieren und `arrayLimit` für Parameter erhöhen ([#8328](https://github.com/nocobase/nocobase/pull/8328)) von @mytharcher

- **[Client]** Behebt das Problem, dass ein Fehler in den Filterformular-Blockeinstellungen eines m2m-Feldes ausgelöst wird ([#8282](https://github.com/nocobase/nocobase/pull/8282)) von @mytharcher

- **[Async-Aufgabenmanager]** Sprache beim Abbrechen von Hintergrundaufgaben korrigiert ([#8245](https://github.com/nocobase/nocobase/pull/8245)) von @mytharcher

- **[Dateimanager]** Behebt das Problem, dass ein Fehler beim Hochladen von Dateien größer als 5 MB auf AWS S3 ausgelöst wird ([#8275](https://github.com/nocobase/nocobase/pull/8275)) von @mytharcher

- **[Workflow]** Behebt, dass Datenbankereignisse nach dem Aktualisieren der externen Datenquelle ungültig werden ([#8207](https://github.com/nocobase/nocobase/pull/8207)) von @cgyrock

- **[Sammlung: Baum]** Pfade nach dem Massenanlegen von Baum-Sammlungsknoten aktualisieren ([#8267](https://github.com/nocobase/nocobase/pull/8267)) von @2013xile

- **[Datenquelle: Externes PostgreSQL]** Behebt, dass Datenbankereignisse nach dem Aktualisieren der externen Datenquelle ungültig werden von @cgyrock

- **[Datenquelle: Externes Oracle]** Behebt, dass Datenbankereignisse nach dem Aktualisieren der externen Datenquelle ungültig werden von @cgyrock
