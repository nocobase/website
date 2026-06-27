---
title: "NocoBase v2.0.0-beta.18: Unterstützung für env.ESM_CDN_BASE_URL"
description: "Versionshinweise zu v2.0.0-beta.18"
---

### 🎉 Neue Funktionen

- **[flow-engine]** Unterstützung für env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) von @chenos

### 🚀 Verbesserungen

- **[acl]** acl fügt die Methode `generalFixedParams` hinzu ([#8363](https://github.com/nocobase/nocobase/pull/8363)) von @jiannx

- **[client]** Unterstützung zum Deaktivieren redundanter Standard-Append-Parameter für `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) von @2013xile

- **[Auth: DingTalk]** Verwendet `userid` als Standardschlüssel für die Benutzerzuordnung, während die Kompatibilität mit bestehenden Authentifikatoren, die auf Mobilnummern basieren, erhalten bleibt von @2013xile

### 🐛 Fehlerbehebungen

- **[client]**
  - Ein Problem behoben, bei dem der Ereignisfluss beim Aktualisieren von Zielblöcken über ein Popup-Fenster hinweg fehlschlug. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) von @gchust

  - Problem behoben, bei dem Seitendaten nach dem ersten Öffnen und Schließen des Popups falsch aktualisiert wurden. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) von @gchust

  - Ein Problem behoben, das dazu führte, dass der Datenblock nach dem Absenden eines Formulars wiederholt aktualisiert wurde. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) von @gchust

  - Problem behoben, bei dem das nanoid-Feld nach dem Erstellen eines Eintrags keinen neuen Standardwert generierte ([#8538](https://github.com/nocobase/nocobase/pull/8538)) von @katherinehhh

  - Falsche Anzeige beim Festlegen von Standardwerten für das Cascader-Feldmodell behoben ([#8537](https://github.com/nocobase/nocobase/pull/8537)) von @katherinehhh

- **[flow-engine]** Falsches Laden einiger ESM-Bibliotheken in runjs aufgrund von Fehlklassifizierung als AMD-Module behoben. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) von @gchust

- **[Dateimanager]** Sicherer Dateipfad für lokalen Speicher, um Zugriffspfade außerhalb des Dokumentenverzeichnisses zu vermeiden ([#8539](https://github.com/nocobase/nocobase/pull/8539)) von @mytharcher

- **[Workflow]** Fehlertoleranz für die Auswahlkomponente von Sammlungseinträgen hinzugefügt, um Fehler beim Löschen einer Sammlung zu vermeiden ([#8528](https://github.com/nocobase/nocobase/pull/8528)) von @mytharcher

- **[KI-Mitarbeiter]** Behebung der Ausnahme, die beim automatischen Aufruf von Tools während der KI-Datenmodellierung auftritt ([#8532](https://github.com/nocobase/nocobase/pull/8532)) von @cgyrock

- **[Aktion: Datensätze importieren Pro]** Korrektur der Zählzahlen im Importergebnis und der Nachrichtenübersetzung von @mytharcher

- **[Workflow: Unterworkflow]** Korrektur des Routenpfads des Workflow-Links von @mytharcher

- **[Vorlagendruck]** Problem mit der Feldlistenanzeige in der Konfiguration der Vorlagendruckaktion behoben von @katherinehhh

- **[Workflow: Genehmigung]**
  - Fehler behoben, der beim Hinzufügen einer Rolle zu einem Benutzer auftrat, wenn der Workflow für Zielgruppen deaktiviert war von @mytharcher

  - Fehlertoleranz für gelöschte Workflows hinzugefügt, um Ladefehler in der Aufgabenliste zu vermeiden von @mytharcher

- **[WeCom]** Problem behoben, bei dem Benutzer nicht automatisch registriert werden konnten, wenn die Mobilnummer fehlte von @2013xile
