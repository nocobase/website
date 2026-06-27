---
title: "NocoBase v1.7.0-beta.8: Unterstützung von Umgebungsvariablen in Link-Button-URLs"
description: "Versionshinweise zu v1.7.0-beta.8"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Feld-Stil-Einstellungen für Schriftgröße, Schriftstärke und Schriftart ([#6489](https://github.com/nocobase/nocobase/pull/6489)) von @katherinehhh

- **[Variablen und Geheimnisse]** Unterstützung von Umgebungsvariablen in Link-Button-URLs ([#6494](https://github.com/nocobase/nocobase/pull/6494)) von @katherinehhh

### 🚀 Verbesserungen

- **[Client]** Unterstützung für unscharfe Suche bei ausgewählten Feldern im Filter-Button ([#6496](https://github.com/nocobase/nocobase/pull/6496)) von @katherinehhh

- **[Workflow: Mailer-Knoten]** Beschreibung der Konfiguration für das Sicherheitsfeld hinzugefügt. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) von @sheldon66

- **[WEB-Client]** Sekundäre Bestätigungsaufforderung für "Cache leeren" hinzugefügt ([#6505](https://github.com/nocobase/nocobase/pull/6505)) von @katherinehhh

- **[Benachrichtigung: E-Mail]** Beschreibung der Konfiguration für das Sicherheitsfeld hinzugefügt. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) von @sheldon66

- **[E-Mail-Manager]** Unterstützung für erneute Autorisierung und automatische Auswahl des Kontos beim Senden einer E-Mail von @jiannx

### 🐛 Fehlerbehebungen

- **[Server]** Der Upgrade-Befehl kann zu Workflow-Fehlern führen ([#6524](https://github.com/nocobase/nocobase/pull/6524)) von @gchust

- **[Client]**
  - Die Höhe der Untertabelle im Formular wird zusammen mit der Formularhöhe festgelegt ([#6518](https://github.com/nocobase/nocobase/pull/6518)) von @katherinehhh

  - Fehler bei der Übermittlung des Zeitfeldes im chinesischen Gebietsschema (ungültige Eingabesyntax für Typ time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) von @katherinehhh

  - Transparenz des Aktionsbuttons verursacht Anzeigeprobleme bei Hover ([#6529](https://github.com/nocobase/nocobase/pull/6529)) von @katherinehhh

- **[Authentifizierung]**
  - Bereinigung der Authentifikator-Optionen ([#6527](https://github.com/nocobase/nocobase/pull/6527)) von @2013xile

  - Fehlender X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) von @chenos

- **[Block: Karte]**
  - Problem mit der Schlüsselverwaltung im Kartenblock, das aufgrund unsichtbarer Zeichen zu fehlgeschlagenen Anfragen führt ([#6521](https://github.com/nocobase/nocobase/pull/6521)) von @katherinehhh

  - Geheimschlüsselfelder lösen keine Validierung in der Kartenverwaltung aus ([#6509](https://github.com/nocobase/nocobase/pull/6509)) von @katherinehhh

- **[Dateimanager]** Zugriff auf in COS gespeicherte Dateien nicht möglich ([#6512](https://github.com/nocobase/nocobase/pull/6512)) von @chenos

- **[Aktion: Datensätze exportieren Pro]** Export von Anhängen nicht möglich von @chenos

- **[Backup-Manager]** Wiederherstellung kann zu Workflow-Ausführungsfehlern führen von @gchust

- **[WeCom]** Auflösung von Umgebungsvariablen und Geheimnissen beim Abrufen der Benachrichtigungskonfiguration. von @2013xile

- **[Workflow: Genehmigung]**
  - Fehler in der Prozesstabelle behoben, wenn ein Job gelöscht wurde von @mytharcher

  - Fehler behoben, der beim Hinzufügen eines Abfrageknotenergebnisses ausgelöst wurde von @mytharcher

  - Absturz durch null-Benutzer behoben von @mytharcher
