---
title: "NocoBase v2.0.0-alpha.44: Unterstützung für Kaskadenauswahl bei Baumstruktur-Assoziationsfeldern"
description: "Versionshinweise zu v2.0.0-alpha.44"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Schnellerstellungs-Unterstützung für Assoziationsfeld-Auswahl hinzugefügt ([#7887](https://github.com/nocobase/nocobase/pull/7887)) von @katherinehhh

  - Kaskadenauswahl für Baumstruktur-Assoziationsfelder unterstützt ([#7846](https://github.com/nocobase/nocobase/pull/7846)) von @katherinehhh

- **[Telemetrie]** Neues Plugin hinzugefügt: Telemetrie, ein auf OpenTelemetry basierendes Telemetrie-Plugin, das CPU-, Speicher- und HTTP-Anfrage-Metriken mit HTTP-Export-Unterstützung bereitstellt von @2013xile

### 🚀 Verbesserungen

- **[Telemetrie]** Steuerung, welche Metriken exportiert werden, unterstützt ([#7938](https://github.com/nocobase/nocobase/pull/7938)) von @2013xile

- **[Asynchroner Aufgabenmanager]** Asynchrone Aufgaben für Unteranwendungen sollten in Workern nur die Ziel-Unteranwendungen starten ([#7927](https://github.com/nocobase/nocobase/pull/7927)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Baumtabellen-Aktion aus Nicht-Baumstruktur-Sammlungsblöcken entfernt ([#7931](https://github.com/nocobase/nocobase/pull/7931)) von @katherinehhh

  - Feld-Schnittstelle korrigiert, die bei belongsTo in externen Datenquellenkonfigurationen fälschlicherweise "viele-zu-eins" anstelle von "eins-zu-eins" anzeigte ([#7936](https://github.com/nocobase/nocobase/pull/7936)) von @cgyrock

- **[Flow-Engine]** Problem mit falsch ausgerichteter Symbolleistendarstellung im Detailblock-Button behoben ([#7929](https://github.com/nocobase/nocobase/pull/7929)) von @zhangzhonghe

- **[Workflow]** Problem behoben, bei dem das Aktualisieren der Aufgabenanzahl unbeabsichtigt den Status von ausgefüllten Formularen zurücksetzte ([#7937](https://github.com/nocobase/nocobase/pull/7937)) von @mytharcher

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Probleme mit M2M (Array)-Feldern beim Erstellen/Aktualisieren verknüpfter Daten behoben ([#7926](https://github.com/nocobase/nocobase/pull/7926)) von @cgyrock

- **[Aktion: Datensätze importieren Pro]** Problem behoben, bei dem die Änderung von Importoptionen durch den Uploader keine Wirkung zeigte von @katherinehhh
