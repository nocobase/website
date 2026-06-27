---
title: "NocoBase v2.1.0-beta.44: Problem behoben, bei dem ausgewählte Beziehungsfelddaten auf Mobilgeräten nicht angezeigt wurden"
description: "Versionshinweise zu v2.1.0-beta.44"
---

### 🚀 Verbesserungen

- **[Workflow: Genehmigung]** Validierungsregeln für Auslöser- und Knotenkonfigurationen von Genehmigungen angepasst, um sicherzustellen, dass UI-bezogene Felder vorhanden sind. von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem ausgewählte Beziehungsfelddaten auf Mobilgeräten nicht angezeigt wurden. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) von @zhangzhonghe
- **[client-v2]**

  - Fehler beim Speichern von Menüverknüpfungsregeln behoben. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) von @zhangzhonghe
  - Übermäßiger Abstand oberhalb von Blöcken auf v2-Seiten behoben. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) von @zhangzhonghe
- **[flow-engine]** Problem behoben, bei dem die Seite beim Festlegen von Feldwerten für ein Unterformular hängen blieb. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) von @gchust
- **[KI-Mitarbeiter]**

  - Validierung der Basis-URL des KI-Anbieters behoben. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) von @cgyrock
  - `ctx.get`-Fehler in KI-Mitarbeiter-Workflow-Knoten behoben. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) von @cgyrock
- **[Benachrichtigung: In-App-Nachricht]** Ein SQL-Injection-Risiko im Zeitstempelfilter des In-App-Benachrichtigungskanals behoben. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) von @mytharcher
- **[Aktion: Datensatz duplizieren]** Problem behoben, bei dem der Schaltflächenstatus nach fehlgeschlagener Duplizierung eines Datensatzes nicht zurückgesetzt wurde. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) von @katherinehhh
- **[Kalender]** Problem behoben, bei dem Kalenderereignisfarben auf v2-Seiten nicht aus dem konfigurierten Farbfeld gerendert wurden. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) von @jiannx
- **[Flow-Engine]**

  - Problem behoben, bei dem das Ändern eines Blocks nach dem Duplizieren seiner Vorlage unbeabsichtigt den Inhalt des ursprünglichen Blocks beeinflussen konnte. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) von @gchust
  - Problem behoben, bei dem das Ziehen von Popup-Tabs zur Neuanordnung nicht funktionierte. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) von @gchust
