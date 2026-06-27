---
title: "NocoBase v1.4.0-alpha.20241017164316: Verbesserungen der Workflow-Knoten"
description: "Versionshinweise zu v1.4.0-alpha.20241017164316"
---

### 🎉 Neue Funktionen

- **[Workflow: Schleifenknoten]** Weitere Steuerungsoptionen zur Konfiguration des Schleifenknotens hinzugefügt ([#5342](https://github.com/nocobase/nocobase/pull/5342)) von @mytharcher
  Referenz: [Schleifenknoten](https://docs.nocobase.com/handbook/workflow-loop)
- **[Workflow]** Testlauf-Button für Workflow-Knoten und API zur Implementierung der Testfunktion hinzugefügt ([#5407](https://github.com/nocobase/nocobase/pull/5407)) von @mytharcher
- **[Feldkomponente: Maskierung]** Feldkomponente `mask` hinzugefügt, unterstützt die Anzeige von Felddaten als maskierte Zeichenfolge von @gchust
  Referenz: [Maskierung](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Verbesserungen

- **[client]** Tabellenspaltentitel können auf den Standardwert zurückgesetzt werden ([#5439](https://github.com/nocobase/nocobase/pull/5439)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[client]** Fehler behoben: Optionen der Feldkomponente wurden nicht korrekt übersetzt ([#5442](https://github.com/nocobase/nocobase/pull/5442)) von @gchust
- **[Workflow: HTTP-Anfrageknoten]** Legacy-Fehlermeldung im Anfrageknoten behoben ([#5443](https://github.com/nocobase/nocobase/pull/5443)) von @mytharcher
