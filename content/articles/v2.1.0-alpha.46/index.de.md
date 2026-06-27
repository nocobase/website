---
title: "NocoBase v2.1.0-alpha.46: Migrierte die Einstellungsseiten für Benutzer und Rollen & Berechtigungen zu v2"
description: "Versionshinweise zu v2.1.0-alpha.46"
---

### 🎉 Neue Funktionen

- **[client-v2]** `TypedVariableInput` hinzugefügt, sodass die SMTP-Port- und Secure-Modus-Felder im v2-E-Mail-Plugin entweder typisierte Konstanten oder `{{ $env.X }}`-Variablen akzeptieren können. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) von @Molunerfinn
- **[Zugriffskontrolle]** Die Einstellungsseiten für Benutzer sowie Rollen & Berechtigungen wurden auf v2 migriert. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) von @jiannx

### 🚀 Verbesserungen

- **[Server]** Der moderne Client wird nun unter `/v/` anstelle von `/v2/` bereitgestellt. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) von @Molunerfinn
- **[KI]** `xlsx` aktualisiert, um Sicherheitsprobleme zu vermeiden. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) von @mytharcher
- **[Client]** Verbesserte Autovervollständigungsunterstützung für einige integrierte RunJS-Funktionen. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) von @gchust
- **[CLI]** Verbesserte Anleitung für Init und Self-Update. ([#9633](https://github.com/nocobase/nocobase/pull/9633)) von @chenos
- **[Undefiniert]** Die Dokumentation zum Einbetten von NocoBase für das Open-Source-Plugin wurde aktualisiert. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) von @zhangzhonghe
  Referenz: [NocoBase einbetten](https://docs.nocobase.com/de/integration/embed/)
- **[Abteilungen]** Eine v2-Einstellungsseite für die Verwaltung von Abteilungen, Abteilungsmitgliedern und Benutzer-Abteilungszuweisungen hinzugefügt. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) von @jiannx
- **[Auth: SAML 2.0]** SAML/CAS-Anmeldeweiterleitungen folgen nun dem modernen Client-Präfix. von @Molunerfinn
- **[Aktion: Datensätze importieren Pro]** `xlsx` aktualisiert, um Sicherheitsprobleme zu vermeiden. von @mytharcher
- **[Auth: OIDC]** OIDC-Anmeldeweiterleitungen folgen nun dem modernen Client-Präfix. von @Molunerfinn
- **[Workflow: Genehmigung]** Validierungsregeln für Genehmigungs-Trigger und Knotenkonfigurationen angepasst, um sicherzustellen, dass UI-bezogene Felder vorhanden sind. von @mytharcher

### 🐛 Fehlerbehebungen

- **[client-v2]**

  - Behoben: v2-Tabellenspalten wurden unsichtbar, wenn die benutzerdefinierte Spaltenbreite auf 0 gesetzt war. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) von @katherinehhh
  - Alle Relationsfeld-Selektoren wurden angepasst, um Assoziationsfelder auf maximal zwei Ebenen zu beschränken. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) von @jiannx
  - Fehler beim Speichern von Menüverknüpfungsregeln behoben. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) von @zhangzhonghe
  - Übermäßiger Abstand oberhalb von Blöcken auf v2-Seiten behoben. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) von @zhangzhonghe
  - Zugewiesene Feldwerte bleiben nun erhalten. ([#9640](https://github.com/nocobase/nocobase/pull/9640)) von @katherinehhh
- **[client]**

  - Fehler beim Speichern eines Baumrelationsfeldes in einer referenzierten Formularvorlage behoben. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) von @zhangzhonghe
  - Problem behoben, bei dem ausgewählte Relationsfelddaten auf Mobilgeräten nicht angezeigt wurden. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) von @zhangzhonghe
  - Problem behoben, bei dem Blöcke nach dem Aktualisieren der Seite fälschlicherweise als gelöscht angezeigt werden konnten. ([#9662](https://github.com/nocobase/nocobase/pull/9662)) von @zhangzhonghe
  - Fehlerhaftes Verhalten von Datensatzaktions-Verknüpfungsregeln in Tabellenblöcken behoben. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) von @gchust
  - Problem behoben, bei dem Felder schreibgeschützt wurden, wenn sie nach dem Ausblenden durch Verknüpfungsregeln wieder angezeigt wurden. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) von @katherinehhh
- **[flow-engine]**

  - Problem behoben, bei dem die Seite beim Setzen von Feldwerten für ein Unterformular hängen blieb. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) von @gchust
  - Problem behoben, bei dem ein Popup nach dem Umschalten des UI-Konfigurationsmodus-Schalters veraltete UI-Daten anzeigte. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) von @gchust
  - Problem behoben, bei dem die Feldsuche beim Überfahren von Assoziationsfeldern mit der Maus zurückgesetzt wurde. ([#9646](https://github.com/nocobase/nocobase/pull/9646)) von @zhangzhonghe
- **[CLI]** Die nginx-Vorlage wurde korrigiert, um `.mjs`-Assets mit dem JavaScript-MIME-Typ auszuliefern. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) von @mytharcher
- **[Datenbank]** Problem behoben, bei dem der Import numerischer Passwortwerte fehlschlagen konnte. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) von @2013xile
- **[Sammlung: SQL]**

  - Zugriff auf sensible PostgreSQL-Metadaten über SQL-Sammlungen blockiert. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) von @2013xile
- **[Datenquellen-Manager]** Mehrbereichs-Feldlokalisierung im v2-Datenquellen-Manager behoben. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) von @jiannx
- **[KI-Mitarbeiter]**

  - Rohe LLM-Anbieterfehler werden nun vor Frontend-Nachrichten verborgen. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) von @cgyrock
  - Workflow-KI-Mitarbeiterknoten können nun das Standardmodell verwenden. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) von @cgyrock
  - Validierung der KI-Anbieter-Basis-URL behoben. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) von @cgyrock
  - `ctx.get`-Fehler in KI-Mitarbeiter-Workflow-Knoten behoben. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) von @cgyrock
- **[Aktion: Datensatz duplizieren]** Problem behoben, bei dem der Schaltflächenstatus nach einem fehlgeschlagenen Duplizierungsversuch nicht zurückgesetzt wurde. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem behoben, bei dem die Workflow-Trigger-Aktion in der Schaltflächenliste des Workbench-Aktionspanels fehlte. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) von @katherinehhh
- **[Kalender]** Problem behoben, bei dem Kalenderereignisfarben nicht aus dem konfigurierten Farbfeld auf v2-Seiten gerendert wurden. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) von @jiannx
- **[Benachrichtigung: In-App-Nachricht]** Ein SQL-Injection-Risiko im Zeitstempelfilter des In-App-Benachrichtigungskanals behoben. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) von @mytharcher
- **[Flow-Engine]**

  - Problem behoben, bei dem das Ziehen von Popup-Tabs zum Neuanordnen nicht funktionierte. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) von @gchust
  - Problem behoben, bei dem das Ändern eines Blocks nach dem Duplizieren seiner Vorlage unbeabsichtigt den Inhalt des Originalblocks beeinflussen konnte. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) von @gchust
- **[Lizenzeinstellungen]** Problem behoben, bei dem die Seite der Lizenzeinstellungen lange hängen bleiben konnte, wenn die pkg-Login-Prüfung langsam oder nicht erreichbar war. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) von @hongboji
- **[Zugriffskontrolle]** Unvollständige Berechtigungen beim ersten Login behoben, wenn eine Verbundrolle die Standardrolle war. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) von @2013xile
- **[Block: Gantt]** Verbesserte Platzierung von Gantt-Tooltips, um das Überdecken von Aufgabenbalken zu vermeiden, und Aufgabenbeschriftungen innerhalb und außerhalb der Balken konsistent ausgerichtet. ([#9638](https://github.com/nocobase/nocobase/pull/9638)) von @jiannx
- **[Workflow: JavaScript]** Klargestellt, dass der Workflow-JavaScript-Modul-Support-Modus unsicher ist und keine Berechtigungsgrenze darstellt. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) von @mytharcher
  Referenz: [Workflow JavaScript](docs/docs/de/workflow/nodes/javascript.md)
- **[Dateimanager]** Validierung des lokalen Dateispeicherpfads behoben, um unsichere Pfade zu verhindern, die aus dem konfigurierten Speicherstammverzeichnis entkommen. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) von @mytharcher
- **[Passwortrichtlinie]**

  - Fehler bei der Anmeldung behoben, der den eigentlichen Fehler mit "Argument #1 nicht unterstützter Typ undefiniert" maskierte, wenn der zugrunde liegende Fehler keinen Statuscode hatte. von @Molunerfinn
  - Problem behoben, bei dem die Validierung der Passwortrichtlinie für numerische Passwortwerte fehlschlagen konnte. von @2013xile
- **[Datenquelle: REST-API]** Build-Fehler der REST-API-Datenquellen-Plugin-Deklaration behoben, die durch nicht übereinstimmende client-v2-Typdeklarationen des Datenquellen-Managers verursacht wurden. von @katherinehhh
