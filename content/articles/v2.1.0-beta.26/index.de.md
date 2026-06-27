---
title: "NocoBase v2.1.0-beta.26: Assoziieren und Dissoziieren zu Assoziationsblöcken hinzugefügt"
description: "Versionshinweise zu v2.1.0-beta.26"
---

### 🎉 Neue Funktionen

- **[Client]** Aktionen zum Verknüpfen und Trennen zu Assoziationsblöcken hinzugefügt ([#9366](https://github.com/nocobase/nocobase/pull/9366)) von @katherinehhh

- **[Datenvisualisierung]** Client-v2-Unterstützung für Block-Plugins hinzugefügt ([#9297](https://github.com/nocobase/nocobase/pull/9297)) von @zhangzhonghe

### 🚀 Verbesserungen

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[client-v2]**
  - Problem behoben, bei dem einige v2-Seiten keine Remote-Plugins laden konnten ([#9369](https://github.com/nocobase/nocobase/pull/9369)) von @zhangzhonghe

  - Problem mit dem Drag-Platzhalter und der Drop-Position von v2-Seitenblöcken behoben ([#9361](https://github.com/nocobase/nocobase/pull/9361)) von @zhangzhonghe

- **[client]**
  - Problem behoben, dass Verknüpfungsregeln nach Änderung von Formularwerten nicht erneut ausgeführt wurden. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) von @gchust

  - Problem behoben, dass ein Pflichtfeld vom Typ Option in einer Untertabelle bei der ersten Auswahl auf mobilen Geräten nicht korrekt validiert wurde ([#9352](https://github.com/nocobase/nocobase/pull/9352)) von @katherinehhh

  - Problem behoben, dass die Option zum schnellen Erstellen für das Assoziationsauswahlfeld in der v2-Untertabelle ausgeblendet wurde ([#9358](https://github.com/nocobase/nocobase/pull/9358)) von @katherinehhh

  - Problem behoben, dass URL-Abfrageparameter-Variablen nach dem Wechsel zwischen gecachten Seiten ungültig wurden ([#9263](https://github.com/nocobase/nocobase/pull/9263)) von @zhangzhonghe

  - Problem mit falscher Datenwiedergabe im Grid-Kartenblock nach Aktualisierung und Neuladen behoben ([#9351](https://github.com/nocobase/nocobase/pull/9351)) von @katherinehhh

- **[Server]** Plugin-Paketnamen vor Dateisystemoperationen validieren ([#9367](https://github.com/nocobase/nocobase/pull/9367)) von @chenos

- **[undefined]** Tote Links in übersetzter Dokumentation behoben und tote-Link-Erkennung standardmäßig im Docs-Build aktiviert. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) von @Molunerfinn

- **[KI-Mitarbeiter]**
  - Fehler behoben, bei dem der KI-Mitarbeiter-Knoten im Workflow das Feld für Assoziationsanhänge nicht lesen konnte ([#9377](https://github.com/nocobase/nocobase/pull/9377)) von @cgyrock

  - Problem behoben, dass der KI-Mitarbeiter-Knoten im Workflow nach der Tool-Zuweisung nicht ordnungsgemäß beendet wurde. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) von @cgyrock

- **[Block: Kanban]**
  - Kompaktes Styling der Kanban-Karten verbessert und Auswahl der Schnellerstellungs-Popup-Vorlage optimiert. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) von @jiannx

  - Problem behoben, das einen einwortigen Zeilenumbruch in Langtextfeldern des v1-Kanban-Blocks verhinderte ([#9356](https://github.com/nocobase/nocobase/pull/9356)) von @katherinehhh

  - Problem behoben, dass Kanban-assoziierte Blöcke unaufgelöste Laufzeit-Ressourcenparameter in Popup- oder Sekundärseiten-Kontexten verwendeten. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) von @jiannx

- **[Aktion: Benutzerdefinierte Anfrage]** Upgrade von koa auf v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) von @chenos

- **[Sammlungsfeld: Formel]** Problem behoben, dass das Formelfeld in der v2-Untertabelle nicht zur automatischen Berechnung ausgelöst wurde ([#9354](https://github.com/nocobase/nocobase/pull/9354)) von @katherinehhh

- **[E-Mail-Manager]** Anzeige des Titels der E-Mail-Identitäten korrigiert von @jiannx
