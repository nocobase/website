---
title: "NocoBase v2.1.0-alpha.9: Ermöglicht das Hinzufügen von KI-Mitarbeitern im Popup von Untertabellen"
description: "Versionshinweise zu v2.1.0-alpha.9"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Ermöglicht das Hinzufügen von KI-Mitarbeitern im Popup von Untertabellen ([#8873](https://github.com/nocobase/nocobase/pull/8873)) von @2013xile

- **[KI: MCP-Server]** Neues MCP-Server-Plugin hinzugefügt, um NocoBase-Systeme zu erstellen und Geschäftsabläufe zu unterstützen. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) von @2013xile

### 🚀 Verbesserungen

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) von @gaston98765

### 🐛 Fehlerbehebungen

- **[Datenbank]** Behebt das serverseitige Validierungsproblem für Datumsfelder ([#8867](https://github.com/nocobase/nocobase/pull/8867)) von @2013xile

- **[Client]**
  - Behebt, dass verbindbare Felder beim Verknüpfen von Datenblöcken unter externen Datenquellen nicht angezeigt werden ([#8848](https://github.com/nocobase/nocobase/pull/8848)) von @zhangzhonghe

  - Behebt das Problem, dass das Hinzufügen eines Datenblocks oder das Aktualisieren der Seite zu doppelten Aktualisierungen führte. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) von @gchust

  - Behebt das Problem, dass die Standardwerte einiger Felder nach dem Aktualisieren der Seite nicht wirksam wurden. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) von @gchust

  - Behebt, dass die Tabellenblockhöhe ungültig war ([#8842](https://github.com/nocobase/nocobase/pull/8842)) von @jiannx

- **[Lokalisierung]**
  - localizationTexts: fehlende Schnittstellenberechtigungsausnahme ([#8861](https://github.com/nocobase/nocobase/pull/8861)) von @jiannx

  - Nicht gefundene Einträge werden im nicht-bearbeitbaren Zustand der Seite nicht übermittelt. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) von @jiannx

- **[Formularentwürfe]** Behebt das Problem, dass Formularentwurfsdaten verloren gingen, wenn das Popup mehrmals geöffnet wurde. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) von @gchust

- **[UI-Vorlagen]** Behebt die Fehler, die bei Verwendung der Vorlagen für Bearbeitungsformularblöcke und Detailblöcke auftraten. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) von @gchust

- **[KI: Wissensdatenbank]** Verhindert das Löschen der verwendeten Vektordatenbank und des Vektorspeichers. von @cgyrock

- **[Aktion: Datensätze importieren Pro]** Behebt das Problem, dass bei doppelten Feldern in der Importkonfiguration keine Mehrfachauswahl möglich war. von @jiannx

- **[E-Mail-Manager]** Anpassungen bei Antworten und Allen-Antworten-Empfängern, Behebung von Fehlern beim Hinzufügen von Tabellenfeldern und anderen Problemen von @jiannx

- **[Migrationsmanager]** Behebt das Problem, dass Systemtabellen in benutzerdefinierten Regeln nicht ausgewählt werden können von @cgyrock
