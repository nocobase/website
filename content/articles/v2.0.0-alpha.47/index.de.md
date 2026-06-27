---
title: "NocoBase v2.0.0-alpha.47: Unterstützung der Initialisierung ausgewählter Filterfelder in Diagrammabfragen"
description: "Versionshinweise zu v2.0.0-alpha.47"
---

### 🚀 Verbesserungen

- **[Client]**
  - Unterstützung für die Initialisierung ausgewählter Filterfelder in Diagrammabfragen ([#7933](https://github.com/nocobase/nocobase/pull/7933)) von @heziqiang

  - Verwenden Sie dreifache geschweifte Klammern (`{{{` und `}}}`) für Variablen im Nachrichteninhalt, um zu vermeiden, dass Variablen von Handlebars maskiert werden ([#7972](https://github.com/nocobase/nocobase/pull/7972)) von @mytharcher

  - Ladezustand für die Schaltflächen „Datensatz aktualisieren“ und „Datensatz löschen“ hinzugefügt, um doppelte Anfragen zu vermeiden ([#7964](https://github.com/nocobase/nocobase/pull/7964)) von @mytharcher

- **[Sammlungsfeld: Markdown(Vditor)]** Anpassung der Vollbild-Inhaltsbreite von Vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ein Problem behoben, bei dem das Öffnen des Detailblocks im Popup für Nicht-ID-Beziehungsfelder einen Fehler verursachte. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) von @gchust

  - Ein Problem behoben, bei dem Assoziationsdaten im Popup für Nicht-ID-Beziehungsfelder nicht korrekt geladen wurden. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) von @gchust

  - Routing-Probleme bei Verwendung eines Iframes behoben ([#7957](https://github.com/nocobase/nocobase/pull/7957)) von @zhangzhonghe

  - Problem mit ungültiger Genauigkeitseinstellung für das Zahlenfeldformat behoben ([#7967](https://github.com/nocobase/nocobase/pull/7967)) von @katherinehhh

  - Falsche Typisierung auf der neuen 2.0-Seite korrigiert ([#7945](https://github.com/nocobase/nocobase/pull/7945)) von @zhangzhonghe

  - Problem behoben, bei dem der Filterwert beim Klicken auf die Schaltfläche „Zurücksetzen“ nicht gelöscht wurde ([#7966](https://github.com/nocobase/nocobase/pull/7966)) von @zhangzhonghe

- **[Workflow]** Problem behoben, bei dem die Aufgabenanzahl aufgrund einer falschen Verwendung des Providers nicht angezeigt wurde ([#7968](https://github.com/nocobase/nocobase/pull/7968)) von @mytharcher

- **[Datenvisualisierung]** Problem behoben, bei dem Diagrammabfragen den ACL-Datenbereich nicht unterstützten ([#7915](https://github.com/nocobase/nocobase/pull/7915)) von @2013xile

- **[Block: Referenz]** Ein Problem behoben, bei dem das Zitieren eines Blocks dazu führte, dass der zitierte Block von der Originalseite entfernt wurde. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) von @gchust

- **[KI-Mitarbeiter]** Problem bei der SQL-Ausgabe durch KI behoben ([#7956](https://github.com/nocobase/nocobase/pull/7956)) von @heziqiang

- **[Vorlagendruck]** Problem behoben, dass beim Druckvorgang einer Datensatzvorlage keine Vorlage hinzugefügt werden konnte von @katherinehhh
