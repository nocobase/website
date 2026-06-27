---
title: "NocoBase v2.0.57: Behobene Plugin-Server-Verschleierungsausgabe zur Vermeidung von Browser-Globals in Node.js-Laufzeitpaketen"
description: "Versionshinweise zu v2.0.57"
---

### 🐛 Fehlerbehebungen

- **[Build]** Behobene Ausgabe der Plugin-Server-Verschleierung, um Browser-Globals in Node.js-Laufzeit-Bundles zu vermeiden. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) von @Molunerfinn

- **[Workflow: Manueller Knoten]** Behobene temporäre Speicherungen für manuelle Workflow-Aufgaben, die übermittelte Formularwerte nicht dauerhaft speicherten. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) von @mytharcher

- **[KI-Mitarbeiter]** Korrigierte falsche Beschreibung des Tool-Namens im Arbeitskontext-Prompt ([#9567](https://github.com/nocobase/nocobase/pull/9567)) von @cgyrock

- **[Dateimanager]** Sicheres Rendern von PDF-Vorschauen mit PDF.js anstelle von iframe-basiertem Roh-PDF-Rendering. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) von @mytharcher

- **[Auth: OIDC]** Behobener Token-Verlust, wenn SSO-Login-Callbacks eine externe Weiterleitungs-URL erhalten von @2013xile

- **[Workflow: Genehmigung]**
  - Behebung des Problems, dass die `jobs:resume`-API vom Genehmigungsknoten nicht unterstützt wird von @mytharcher

  - Behobener Genehmigungsrückzug zur Aktualisierung übermittelter Geschäftsdaten unter Berücksichtigung der Quellsammlungs-Update-Berechtigungen von @mytharcher

  - Behobene veraltete Genehmigungs-Todos, wenn Genehmigungs-Workflows durch Fehler in Nicht-Genehmigungsknoten beendet werden von @mytharcher
