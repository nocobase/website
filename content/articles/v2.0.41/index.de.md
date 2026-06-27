---
title: "NocoBase v2.0.41: Mapping-Attribut unterstützt benutzerdefinierte Felder"
description: "Versionshinweise zu v2.0.41"
---

### 🎉 Neue Funktionen

- **[Auth: OIDC]** Mapping-Attribute unterstützen jetzt benutzerdefinierte Felder von @chenzhizdt

- **[DingTalk]** DingTalk: Benachrichtigungen, automatischer Login in DingTalk und Benutzersynchronisation von @chenzhizdt

### 🚀 Verbesserungen

- **[AI]** KI-Mitarbeiter und Wissensdatenbank unterstützen jetzt zusätzliche Dateitypen für Uploads (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) von @cgyrock

- **[undefined]** Arabische Übersetzung für den Leitfadenabschnitt und die Navigation hinzugefügt ([#9141](https://github.com/nocobase/nocobase/pull/9141)) von @saraTabbane

### 🐛 Fehlerbehebungen

- **[Datenquellen-Manager]** Fehler behoben, bei dem Prozentfelder beim erneuten Synchronisieren externer Datenquellen auf numerisch zurückgesetzt wurden ([#9178](https://github.com/nocobase/nocobase/pull/9178)) von @jiannx

- **[Client]**
  - Problem behoben, bei dem der Standardwert nach dem Erstellen eines Datensatzes nicht wirksam wurde. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) von @gchust

  - Problem behoben, bei dem die Schaltfläche "Tab hinzufügen" zu nah am rechten Rand war ([#9177](https://github.com/nocobase/nocobase/pull/9177)) von @zhangzhonghe

- **[Abteilungen]** Problem behoben, bei dem eine wiederholte Abteilungssynchronisation die Abteilungssortierreihenfolge nicht aktualisieren konnte ([#9173](https://github.com/nocobase/nocobase/pull/9173)) von @2013xile

- **[Datenquelle: Hauptdatenbank]** Feld-Synchronisation aus der Datenbank für verbundene Ansichten korrigiert, wenn der Sammlungsname vom Datenbank-Ansichtsnamen abweicht ([#9155](https://github.com/nocobase/nocobase/pull/9155)) von @2013xile

- **[Workflow: JavaScript]** Sicherheitsproblem bei der Skriptausführung im `node:vm`-Modus behoben ([#9084](https://github.com/nocobase/nocobase/pull/9084)) von @mytharcher

- **[KI: Wissensdatenbank]** Problem behoben, bei dem die Vektordatenbank beim Löschen von Wissensdatenbank-Dokumenten nicht synchronisiert wurde. von @cgyrock

- **[WeCom]** Fehlende Abteilungsreihenfolge beim Synchronisieren von Abteilungen aus WeCom behoben von @2013xile
