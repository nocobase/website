---
title: "NocoBase v1.9.0-alpha.5: Signaturbezogene Konfigurationsoptionen hinzugefügt"
description: "Versionshinweise zu v1.9.0-alpha.5"
---

### 🎉 Neue Funktionen

- **[Client]** Option "Automatisch fokussieren" für die Komponenten Input, TextArea, URL und InputNumber hinzugefügt, die beim Aktivieren das Eingabefeld beim initialen Seitenrendering automatisch fokussiert ([#7320](https://github.com/nocobase/nocobase/pull/7320)) von @zhangzhonghe

- **[Auth: SAML 2.0]** Signaturbezogene Konfigurationsoptionen hinzugefügt von @2013xile

### 🚀 Verbesserungen

- **[Workflow: JavaScript]** Cache auf App-Cache geändert, um Fehler im Cluster-Modus zu vermeiden von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem rohe Variablenstrings mit dem Formular übermittelt wurden ([#7337](https://github.com/nocobase/nocobase/pull/7337)) von @zhangzhonghe

  - Tooltip zeigt beim Überfahren im Aktionspanel [object Object] an ([#7322](https://github.com/nocobase/nocobase/pull/7322)) von @katherinehhh

  - Bei Verwendung von Variablen zur Festlegung von Feldstandardwerten in Filterformularen wird bei leerem Variablenwert der ursprüngliche Variablenstring im Eingabefeld angezeigt ([#7335](https://github.com/nocobase/nocobase/pull/7335)) von @zhangzhonghe

- **[undefined]** Neues Plugin zur Voreinstellung hinzugefügt ([#7319](https://github.com/nocobase/nocobase/pull/7319)) von @mytharcher

- **[Collection: Tree]** Pfadsynchronisationslogik von Baumstruktur-Sammlungen korrigiert ([#7330](https://github.com/nocobase/nocobase/pull/7330)) von @ChimingLiu

- **[Office-Dateivorschau]** Unterstützt `.docx`-, `.xlsx`- und `.pptx`-Dateien, die nur über eine URL zur Vorschau verfügen ([#7336](https://github.com/nocobase/nocobase/pull/7336)) von @mytharcher

- **[Workflow: Dynamischer Berechnungsknoten]** Fehler durch veraltete API behoben ([#7321](https://github.com/nocobase/nocobase/pull/7321)) von @mytharcher

- **[Workflow: Genehmigung]** Aufgabentitel für hinzugefügte und delegierte Elemente hinzugefügt von @mytharcher

- **[E-Mail-Manager]** Unterstützt dieselbe E-Mail für mehrere Personen von @jiannx
