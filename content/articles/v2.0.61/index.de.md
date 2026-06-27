---
title: "NocoBase v2.0.61: Verbesserte Autovervollständigungsunterstützung für einige integrierte RunJS-Funktionen"
description: "Versionshinweise zu v2.0.61"
---

### 🚀 Verbesserungen

- **[Client]** Verbesserte Autovervollständigungsunterstützung für einige integrierte RunJS-Funktionen. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) von @gchust
- **[Undefiniert]** Aktualisierte die Embed-NocoBase-Dokumentation für das Open-Source-Plugin. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) von @zhangzhonghe
  Referenz: [NocoBase einbetten](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Fehlerbehebungen

- **[Flow-Engine]**

  - Behoben: Problem, bei dem die Seite hängen blieb, wenn Feldwerte für ein Unterformular gesetzt wurden. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) von @gchust
  - Behoben: Problem, bei dem das Popup nach dem Umschalten des UI-Konfigurationsmodus-Schalters veraltete UI-Daten anzeigte. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) von @gchust
- **[Client]**

  - Behoben: Falsches Verhalten der Verknüpfungsregel für Datensatzaktionen in Tabellenblöcken. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) von @gchust
  - Behoben: Problem, bei dem ausgewählte Beziehungsfelddaten auf Mobilgeräten nicht angezeigt wurden. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) von @zhangzhonghe
  - Behoben: Problem, bei dem Felder schreibgeschützt wurden, wenn sie nach dem Ausblenden durch Verknüpfungsregeln wieder angezeigt wurden. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) von @katherinehhh
- **[CLI]** Behoben: Die nginx-Vorlage dient nun `.mjs`-Assets mit dem JavaScript-MIME-Typ aus. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) von @mytharcher
- **[Datenbank]** Behoben: Problem, bei dem der Import numerischer Passwortwerte fehlschlagen konnte. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) von @2013xile
- **[KI-Mitarbeiter]** Behoben: Validierung der KI-Anbieter-Basis-URL. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) von @cgyrock
- **[Flow-Engine]**

  - Behoben: Problem, bei dem das Ziehen von Popup-Tabs zur Neuanordnung nicht funktionierte. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) von @gchust
  - Behoben: Problem, bei dem das Ändern eines Blocks nach dem Duplizieren seiner Vorlage unbeabsichtigt den Inhalt des ursprünglichen Blocks beeinflussen konnte. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) von @gchust
- **[Benachrichtigung: In-App-Nachricht]** Behoben: Ein SQL-Injection-Risiko im Zeitstempelfilter des In-App-Benachrichtigungskanals. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) von @mytharcher
- **[Lizenzeinstellungen]** Behoben: Problem, bei dem die Seite der Lizenzeinstellungen lange hängen bleiben konnte, wenn die pkg-Anmeldeprüfung langsam oder nicht erreichbar war. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) von @hongboji
- **[Workflow: JavaScript]** Klargestellt, dass der Workflow-JavaScript-Modul-Support-Modus unsicher ist und keine Berechtigungsgrenze darstellt. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) von @mytharcher
  Referenz: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Zugriffskontrolle]** Behoben: Unvollständige Berechtigungen bei der ersten Anmeldung, wenn eine Verbundrolle die Standardrolle war. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) von @2013xile
- **[Dateimanager]** Behoben: Validierung des lokalen Dateispeicherpfads, um unsichere Pfade zu verhindern, die aus dem konfigurierten Speicherstammverzeichnis entkommen. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) von @mytharcher
- **[Passwortrichtlinie]** Behoben: Problem, bei dem die Validierung der Passwortrichtlinie für numerische Passwortwerte fehlschlagen konnte. von @2013xile
