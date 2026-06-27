---
title: "NocoBase v2.0.14: Verbesserte Migrationsprüfungen, SQL-Download-Unterstützung, Log-Formatierung und Sichtbarkeit des Ausführungsprozesses"
description: "Versionshinweise zu v2.0.14"
---

### 🚀 Verbesserungen

- **[Migrationsmanager]** Verbesserte Migrationsprüfungen, SQL-Download-Unterstützung, Protokollformatierung und Sichtbarkeit des Ausführungsprozesses von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebt das Problem, dass benutzerdefinierte Felder in den Feldwerten des Filterformulars nicht den korrekten Eingabetyp für Werte rendern ([#8823](https://github.com/nocobase/nocobase/pull/8823)) von @zhangzhonghe

  - Behebt das Problem, dass der Einklapp-Button des v2-Filterformulars nach dem Sortieren von Feldern nicht mehr funktioniert ([#8843](https://github.com/nocobase/nocobase/pull/8843)) von @zhangzhonghe

  - Behebt das Problem, dass auf der Verwaltungsseite der Referenzvorlage (v1) die Filter- und Aktualisierungsaktion fehlte. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) von @gchust

  - Unterformular- und Untertabellendaten werden aufgrund einer Berechtigungsprüfung nicht angezeigt ([#8846](https://github.com/nocobase/nocobase/pull/8846)) von @chenos

- **[Zugriffskontrolle]** Verwendet collection.filterTargetKey anstelle von Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) von @chenos

- **[UI-Vorlagen]**
  - Behebt den Renderfehler für den Aktionsbereich-Referenzblock. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) von @gchust

  - Behebt das Problem, dass Assoziationsdatensätze nach dem Speichern des Detailblocks als Vorlage nicht korrekt geladen werden konnten. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) von @gchust

- **[Workflow: Genehmigung]**
  - Behebt das Problem, dass die Bearbeiter nicht der im Knoten konfigurierten Reihenfolge folgen von @mytharcher

  - Behebt unübersetzte Bezeichnungen in den Genehmigungsverarbeitungsdetails von @zhangzhonghe

- **[Migrationsmanager]**
  - Behebt Build-Fehler von @mytharcher

  - Behebt fehlende Migrationsbeschreibung und setzt die aktuelle Zeit als Standard von @cgyrock

  - Behebt ein potenzielles Einfrieren des Prozesses, das durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen verursacht wurde von @cgyrock

  - Verschiebt das temporäre Verzeichnis in den Speicher, um die Nutzung im Cluster-Modus zu unterstützen von @mytharcher
