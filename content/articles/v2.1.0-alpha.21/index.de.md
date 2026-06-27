---
title: "NocoBase v2.1.0-alpha.21: Der Workflow hat KI-Mitarbeiteranweisungen hinzugefügt"
description: "Versionshinweise zu v2.1.0-alpha.21"
---

### 🎉 Neue Funktionen

- **[Block: Kanban]** Kanban-Block v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) von @jiannx

- **[KI-Mitarbeiter]** Der Workflow hat eine KI-Mitarbeiter-Anweisung hinzugefügt ([#9025](https://github.com/nocobase/nocobase/pull/9025)) von @cgyrock

- **[Auth: OIDC]** Mapping-Attribut unterstützt jetzt benutzerdefinierte Felder von @chenzhizdt

- **[DingTalk]** DingTalk: Benachrichtigungen, automatische Anmeldung in DingTalk und Benutzersynchronisation. von @chenzhizdt

### 🚀 Verbesserungen

- **[Build]** Die Wissensdatenbank unterstützt das Batch-Hochladen von Dateien per ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) von @cgyrock

- **[KI]** KI-Mitarbeiter und Wissensdatenbank unterstützen jetzt zusätzliche Dateitypen für Uploads (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) von @cgyrock

- **[Workflow]** Verbesserte Leistung der Ausführungsliste ([#9214](https://github.com/nocobase/nocobase/pull/9214)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** ACL-Steuerung für das Auslösen im Datensatzmodus (sowohl einzeln als auch mehrfach) hinzugefügt ([#9125](https://github.com/nocobase/nocobase/pull/9125)) von @mytharcher

- **[KI: Wissensdatenbank]** Die Wissensdatenbank unterstützt das Batch-Hochladen von Dateien per ZIP von @cgyrock

### 🐛 Fehlerbehebungen

- **[data-source-manager]**
  - Behobene Synchronisation von nullable-Feldern ([#9189](https://github.com/nocobase/nocobase/pull/9189)) von @2013xile

  - Fehlerbehebung für Prozentfelder, die bei der erneuten Synchronisation externer Datenquellen auf numerisch zurückgesetzt wurden ([#9178](https://github.com/nocobase/nocobase/pull/9178)) von @jiannx

- **[client]**
  - Behoben: Popup-Relationsblöcke und Popup-Datensatzvariablen verwendeten die falsche Datensatzkennung, wenn Sammlungen einen nicht-primären eindeutigen Schlüssel verwenden ([#9191](https://github.com/nocobase/nocobase/pull/9191)) von @2013xile

  - Behoben: Standardwerte wurden nach dem Erstellen eines Datensatzes nicht wirksam. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) von @gchust

  - Behoben: Der Button "Tab hinzufügen" war zu nah am rechten Rand ([#9177](https://github.com/nocobase/nocobase/pull/9177)) von @zhangzhonghe

- **[Workflow: Aggregationsknoten]** Behoben: Aggregationsknoten konnten aufgrund einer falschen Validierungsregel nicht gespeichert werden ([#9208](https://github.com/nocobase/nocobase/pull/9208)) von @mytharcher

- **[Kalender]** Kalenderaktionen werden nicht mehr für andere Blöcke registriert ([#9200](https://github.com/nocobase/nocobase/pull/9200)) von @jiannx

- **[KI-Mitarbeiter]**
  - Behoben: KI-Mitarbeiter konnten keine Relationsfeldwerte in Formularen ausfüllen. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) von @cgyrock

  - Behoben: Anomalien bei der Protokollaufzeichnung in der KI-Mitarbeiter-Anweisung ([#9180](https://github.com/nocobase/nocobase/pull/9180)) von @cgyrock

- **[Abteilungen]** Behoben: Wiederholte Abteilungssynchronisation konnte die Abteilungsreihenfolge nicht aktualisieren ([#9173](https://github.com/nocobase/nocobase/pull/9173)) von @2013xile

- **[Workflow: JavaScript]**
  - Sicherheitsproblem bei der Skriptausführung im `node:vm`-Modus behoben ([#9084](https://github.com/nocobase/nocobase/pull/9084)) von @mytharcher

  - Behoben: Fehler beim Konfigurieren des JavaScript-Knotens ([#9169](https://github.com/nocobase/nocobase/pull/9169)) von @mytharcher

- **[Multi-Space]** Behoben: Fehler beim Nichtfinden der Sammlung in der Space-Berechtigungsprüfung von @jiannx

- **[KI: Wissensdatenbank]** Behoben: Vektordatenbank wurde nicht synchronisiert, wenn Wissensdatenbankdokumente gelöscht wurden. von @cgyrock

- **[Workflow: Genehmigung]** Behoben: Suche nach Genehmigungs-Neuzuweisungen, um Benutzer über die ersten 200 Kandidaten hinaus abzufragen von @zhangzhonghe

- **[WeCom]** Behoben: Fehlende Abteilungsreihenfolge bei der Synchronisation von Abteilungen aus WeCom von @2013xile
