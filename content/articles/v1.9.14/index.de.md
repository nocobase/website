---
title: "NocoBase v1.9.14: Unterstützung der automatischen Weiterleitung zur SSO-URL bei fehlender Authentifizierung"
description: "Versionshinweise zu v1.9.14"
---

### 🎉 Neue Funktionen

- **[Auth: OIDC]** Unterstützung für automatische Weiterleitung zur SSO-URL bei fehlender Authentifizierung von @heziqiang

### 🚀 Verbesserungen

- **[Client]** Verwende dreifache geschweifte Klammern (`{{{` und `}}}`) für Variablen im Nachrichteninhalt, um zu vermeiden, dass Variablen von Handlebars escaped werden ([#7972](https://github.com/nocobase/nocobase/pull/7972)) von @mytharcher

- **[Sammlungsfeld: Markdown(Vditor)]** Anpassung der Vollbild-Inhaltsbreite von Vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Datenbank]** Behoben: Entfernung der UTC-Verarbeitung bei der Zeitumwandlung für reine Zeitfelder, um zeitzonenbedingte Verschiebungen zu verhindern. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) von @ChimingLiu

- **[Client]** Behoben: Remote-Select zeigt nicht das korrekte Label für Nicht-Objekt-Werte an ([#7975](https://github.com/nocobase/nocobase/pull/7975)) von @katherinehhh

- **[Workflow]**
  - Behoben: Problem, bei dem vorbereitete Ausführungen vor dem Stoppen nicht in die Warteschlange gesendet wurden ([#7981](https://github.com/nocobase/nocobase/pull/7981)) von @mytharcher

  - Behoben: Problem, bei dem Aufgabenlinks zu einer Fehlerseite führten ([#7983](https://github.com/nocobase/nocobase/pull/7983)) von @mytharcher

  - Behoben: Problem, bei dem einige Workflow-Aufgabenmenüs nicht angezeigt wurden ([#7980](https://github.com/nocobase/nocobase/pull/7980)) von @mytharcher

  - Behoben: Problem, bei dem die Aufgabenanzahl aufgrund falscher Provider-Nutzung nicht angezeigt wurde ([#7968](https://github.com/nocobase/nocobase/pull/7968)) von @mytharcher

- **[Workflow: Manueller Knoten]** Behoben: Problem, bei dem die Anzahl manueller Aufgaben nicht korrekt war ([#7984](https://github.com/nocobase/nocobase/pull/7984)) von @mytharcher

- **[Datenvisualisierung]**
  - Filterfeldeinstellungen für externe Datenquellensammlungen zeigen keine spezifischen Eigenschaften an ([#7982](https://github.com/nocobase/nocobase/pull/7982)) von @2013xile

  - Behoben: Problem, bei dem Diagrammabfragen den ACL-Datenbereich nicht unterstützten ([#7915](https://github.com/nocobase/nocobase/pull/7915)) von @2013xile

- **[Datenquellen-Manager]** Behoben: Fehler beim Aktualisieren des Datenquellen-Passworts, wenn das Datenbank-Passwort geändert wurde ([#7977](https://github.com/nocobase/nocobase/pull/7977)) von @cgyrock

- **[Aktion: Datensätze importieren]** Behoben: Problem beim Importieren von Daten in einer Baumtabelle ([#7976](https://github.com/nocobase/nocobase/pull/7976)) von @cgyrock
