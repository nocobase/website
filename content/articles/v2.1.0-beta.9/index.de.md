---
title: "NocoBase v2.1.0-beta.9: Behebung des Problems, dass Systemtabellen in benutzerdefinierten Regeln nicht ausgewählt werden können"
description: "Versionshinweise zu v2.1.0-beta.9"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Die ungültige Höhe des Tabellenblocks wurde behoben ([#8842](https://github.com/nocobase/nocobase/pull/8842)) von @jiannx

  - Das Problem wurde behoben, dass das Hinzufügen eines Datenblocks oder das Aktualisieren der Seite doppelte Aktualisierungen auslöste. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) von @gchust

  - Behebung, dass verbindbare Felder beim Verknüpfen von Datenblöcken unter externen Datenquellen nicht angezeigt wurden ([#8848](https://github.com/nocobase/nocobase/pull/8848)) von @zhangzhonghe

- **[UI-Vorlagen]** Die Fehler bei der Verwendung der Bearbeitungsformularblock- und Detailblockvorlage wurden behoben. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) von @gchust

- **[Formularentwürfe]** Das Problem wurde behoben, dass Formularentwurfsdaten verloren gingen, wenn das Popup mehrmals geöffnet wurde. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) von @gchust

- **[Lokalisierung]** Nicht gefundene Einträge werden im nicht-bearbeitenden Zustand der Seite nicht übermittelt. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) von @jiannx

- **[Aktion: Datensätze importieren Pro]** Das Problem wurde behoben, dass bei doppelten Feldern in der Importkonfiguration keine Mehrfachauswahl möglich war. von @jiannx

- **[E-Mail-Manager]** Anpassungen bei Antworten und Allen-Antworten, Behebung von fehlgeschlagenen Tabellenfeldhinzufügungen und anderen Problemen von @jiannx

- **[Migrationsmanager]** Behebung des Problems, dass Systemtabellen in benutzerdefinierten Regeln nicht ausgewählt werden konnten von @cgyrock
