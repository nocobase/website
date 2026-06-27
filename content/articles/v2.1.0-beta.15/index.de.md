---
title: "NocoBase v2.1.0-beta.15: Mapping-Attribut unterstützt benutzerdefinierte Felder"
description: "Versionshinweise zu v2.1.0-beta.15"
---

### 🎉 Neue Funktionen

- **[Block: Kanban]** Kanban-Block v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) von @jiannx

- **[Auth: OIDC]** Mapping-Attribut unterstützt benutzerdefinierte Felder von @chenzhizdt

- **[DingTalk]** DingTalk: Benachrichtigungen, automatischer Login in DingTalk und Benutzersynchronisation. von @chenzhizdt

### 🚀 Verbesserungen

- **[Build]** Wissensdatenbank unterstützt das Batch-Hochladen von Dateien per ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) von @cgyrock

- **[AI]** KI-Mitarbeiter und Wissensdatenbank unterstützen nun zusätzliche Dateitypen für Uploads (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) von @cgyrock

- **[Workflow]** Verbesserte Leistung der Ausführungsliste ([#9214](https://github.com/nocobase/nocobase/pull/9214)) von @mytharcher

- **[AI: Wissensdatenbank]** Wissensdatenbank unterstützt Batch-Hochladen von Dateien per ZIP von @cgyrock

- **[Workflow: Genehmigung]** Indizes zu Genehmigungsdatensatzspalten hinzugefügt, um die Leistung bei Listen- und Übermittlungsaktionen zu verbessern von @mytharcher

### 🐛 Fehlerbehebungen

- **[Datenbank]** Problem behoben, bei dem Dezimalfelder mit Validierung gültige numerische Eingaben ablehnen konnten ([#9204](https://github.com/nocobase/nocobase/pull/9204)) von @2013xile

- **[Client]**
  - Problem behoben, bei dem die Schaltfläche "Tab hinzufügen" zu nah am rechten Rand war ([#9177](https://github.com/nocobase/nocobase/pull/9177)) von @zhangzhonghe

  - Problem behoben, bei dem Popup-Beziehungsblöcke und Popup-Datensatzvariablen die falsche Datensatzkennung verwendeten, wenn Sammlungen einen nicht-primären eindeutigen Schlüssel verwenden ([#9191](https://github.com/nocobase/nocobase/pull/9191)) von @2013xile

  - Problem behoben, bei dem der Standardwert nach dem Erstellen eines Datensatzes nicht wirksam wurde. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) von @gchust

- **[Datenquellen-Manager]**
  - Synchronisierung von nullable-Feldern behoben ([#9189](https://github.com/nocobase/nocobase/pull/9189)) von @2013xile

  - Fehlerbehebung für Prozentfelder, die bei der erneuten Synchronisierung externer Datenquellen auf numerisch zurückgesetzt wurden ([#9178](https://github.com/nocobase/nocobase/pull/9178)) von @jiannx

- **[KI-Mitarbeiter]**
  - Problem behoben, bei dem URL-Feldwerte für Anhänge in KI-Mitarbeiter-Formularauswahlen fehlten. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) von @cgyrock

  - Problem behoben, bei dem KI-Mitarbeiter keine Beziehungsfeldwerte in Formularen ausfüllen konnten. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) von @cgyrock

- **[Benutzer]** Problem behoben, bei dem dynamisch konfigurierte Felder im Profil bearbeiten nicht die neuesten Benutzerdaten luden ([#9205](https://github.com/nocobase/nocobase/pull/9205)) von @2013xile

- **[Kalender]** Kalenderaktionen werden nicht für andere Blöcke registriert ([#9200](https://github.com/nocobase/nocobase/pull/9200)) von @jiannx

- **[Abteilungen]** Problem behoben, bei dem eine wiederholte Abteilungssynchronisation die Abteilungssortierreihenfolge nicht aktualisieren konnte ([#9173](https://github.com/nocobase/nocobase/pull/9173)) von @2013xile

- **[Workflow: JavaScript]** Sicherheitsproblem bei der Skriptausführung im `node:vm`-Modus behoben ([#9084](https://github.com/nocobase/nocobase/pull/9084)) von @mytharcher

- **[Datenquellen-Manager]** Problem behoben, bei dem die gruppierte Sortierung auf externen Datenquellen-Sortierfeldern nicht gelöscht werden konnte ([#9203](https://github.com/nocobase/nocobase/pull/9203)) von @2013xile

- **[Multi-Space]** Fehler beim Nichtfinden der Sammlung in der Space-Berechtigungsprüfung behoben von @jiannx

- **[AI: Wissensdatenbank]** Problem behoben, bei dem die Vektordatenbank beim Löschen von Wissensdatenbankdokumenten nicht synchronisiert wurde. von @cgyrock

- **[Workflow: Genehmigung]** Suche nach Genehmigungs-Neuzuweisung behoben, um Benutzer über die ersten 200 Kandidaten hinaus abzufragen von @zhangzhonghe

- **[WeCom]** Fehlende Abteilungsreihenfolge bei der Synchronisierung von Abteilungen aus WeCom behoben von @2013xile
