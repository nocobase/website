---
title: "NocoBase v2.1.0-alpha.22: API zur Überprüfung der Knotenerstellung hinzugefügt"
description: "Versionshinweise zu v2.1.0-alpha.22"
---

### 🎉 Neue Funktionen

- **[Workflow]** API zur Überprüfung der Knotenerstellung hinzugefügt ([#9207](https://github.com/nocobase/nocobase/pull/9207)) von @mytharcher

### 🚀 Verbesserungen

- **[CLI]** CLI-Anfragenquellenverfolgung in Anfrageprotokollen und Audit-Logs hinzugefügt ([#9223](https://github.com/nocobase/nocobase/pull/9223)) von @2013xile

- **[Zugriffskontrolle]** Einige neue APIs für ACL-Fähigkeiten hinzugefügt ([#9198](https://github.com/nocobase/nocobase/pull/9198)) von @Andrew1989Y

- **[Workflow: Genehmigung]**
  - Validierung für die Erstellung von Genehmigungsknoten hinzugefügt von @mytharcher

  - Indizes für Genehmigungsdatensatzspalten hinzugefügt, um die Leistung bei Listen- und Übermittlungsaktionen zu verbessern von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Ausgeblendeter Sortierschalter für Beziehungsfelder ([#9220](https://github.com/nocobase/nocobase/pull/9220)) von @jiannx

- **[Datenbank]** Problem behoben, bei dem Dezimalfelder mit Validierung gültige numerische Eingaben ablehnen konnten ([#9204](https://github.com/nocobase/nocobase/pull/9204)) von @2013xile

- **[KI-Mitarbeiter]** Problem behoben, bei dem URL-Feldwerte für Anhänge in KI-Mitarbeiter-Formularauswahlen fehlten. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) von @cgyrock

- **[Benutzer]** Problem behoben, bei dem dynamisch konfigurierte Felder im Profil bearbeiten die neuesten Benutzerdaten nicht luden ([#9205](https://github.com/nocobase/nocobase/pull/9205)) von @2013xile

- **[Datenquellen-Manager]** Problem behoben, bei dem die gruppierte Sortierung für Sortierfelder externer Datenquellen nicht gelöscht werden konnte ([#9203](https://github.com/nocobase/nocobase/pull/9203)) von @2013xile
