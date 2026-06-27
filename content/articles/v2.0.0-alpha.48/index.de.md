---
title: "NocoBase v2.0.0-alpha.48: Kartenblock für 2.0 hinzugefügt"
description: "Versionshinweise zu v2.0.0-alpha.48"
---

### 🎉 Neue Funktionen

- **[Block: Karte]** 2.0-Kartenblock hinzugefügt ([#7944](https://github.com/nocobase/nocobase/pull/7944)) von @katherinehhh

- **[Auth: OIDC]** Unterstützung für automatische Weiterleitung zur SSO-URL bei nicht authentifizierten Benutzern von @heziqiang

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehler beim Öffnen der Standardwerteinstellungen vermieden ([#7997](https://github.com/nocobase/nocobase/pull/7997)) von @mytharcher

  - Fehler beim Hinzufügen von Unterdatensätzen in assoziierten Baumtabellenblöcken behoben ([#7989](https://github.com/nocobase/nocobase/pull/7989)) von @katherinehhh

  - Anzeigeproblem behoben, wenn das Markdown-Feld im HTML-Modus abgeschnitten wird ([#7994](https://github.com/nocobase/nocobase/pull/7994)) von @katherinehhh

  - Unvollständige Suchergebnisse im Kaskadenauswahlfeld behoben ([#7990](https://github.com/nocobase/nocobase/pull/7990)) von @katherinehhh

  - Problem behoben, bei dem der Seiten-Tab-Status und die Route nicht übereinstimmten ([#7991](https://github.com/nocobase/nocobase/pull/7991)) von @zhangzhonghe

  - Problem behoben, bei dem die Remote-Auswahl für Nicht-Objekt-Werte keine korrekte Bezeichnung anzeigte ([#7975](https://github.com/nocobase/nocobase/pull/7975)) von @katherinehhh

- **[Datenbank]** Entfernung der UTC-Verarbeitung bei der Zeitumwandlung für reine Zeitfelder, um zeitzonenbedingte Verschiebungen zu verhindern. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) von @ChimingLiu

- **[Workflow]**
  - Problem behoben, bei dem vorbereitete Ausführungen vor dem Stoppen nicht in die Warteschlange gesendet wurden ([#7981](https://github.com/nocobase/nocobase/pull/7981)) von @mytharcher

  - Problem behoben, bei dem einige Workflow-Aufgabenmenüs nicht angezeigt wurden ([#7980](https://github.com/nocobase/nocobase/pull/7980)) von @mytharcher

  - Problem behoben, bei dem Aufgabenlinks zu einer Fehlerseite führten ([#7983](https://github.com/nocobase/nocobase/pull/7983)) von @mytharcher

- **[Datenvisualisierung]** Filterfeldeinstellungen für externe Datenquellensammlungen zeigen keine spezifischen Eigenschaften an ([#7982](https://github.com/nocobase/nocobase/pull/7982)) von @2013xile

- **[Datenquellen-Manager]** Fehler bei der Aktualisierung des Datenquellen-Passworts bei Änderung des Datenbank-Passworts behoben ([#7977](https://github.com/nocobase/nocobase/pull/7977)) von @cgyrock

- **[Aktion: Datensätze importieren]** Problem beim Importieren von Daten in einer Baumtabelle behoben ([#7976](https://github.com/nocobase/nocobase/pull/7976)) von @cgyrock

- **[Workflow: Manueller Knoten]** Problem behoben, bei dem die Anzahl der manuellen Aufgaben nicht korrekt war ([#7984](https://github.com/nocobase/nocobase/pull/7984)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Problem behoben, dass nach erneuter Einreichung durch den Benutzer keine Antragstellerdaten im Ausführungskontext vorhanden waren von @mytharcher

  - Problem behoben, dass der Kommentar im Aufgabenergebnis null war, nachdem der Benutzer eine Genehmigung mit Kommentar eingereicht hatte von @mytharcher
