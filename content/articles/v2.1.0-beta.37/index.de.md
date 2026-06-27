---
title: "NocoBase v2.1.0-beta.37: Unterstützung für Basic Auth"
description: "Versionshinweise zu v2.1.0-beta.37"
---

### 🎉 Neue Funktionen

- **[client-v2]** Ein Sicherheitsmenü und die Seite für Token-Richtlinieneinstellungen wurden zur v2-Administration hinzugefügt; die Benutzerzentrale unterstützt jetzt das Ändern von Passwörtern. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) von @Molunerfinn

- **[cli]** Unterstützt Basic Auth ([#9558](https://github.com/nocobase/nocobase/pull/9558)) von @chenos

- **[Passwortrichtlinie]** Migration des Plugins `plugin-password-policy` in die client-v2-Admin-Shell mit den Einstellungsseiten für Passwortrichtlinien / gesperrte Benutzer sowie clientseitiger Durchsetzung der Regeln im Formular zum Passwort ändern in der Benutzerzentrale. von @Molunerfinn

### 🚀 Verbesserungen

- **[Datenvisualisierung]** Client-v2-Unterstützung für Diagrammblöcke hinzugefügt. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) von @jiannx

- **[Workflow]** Überarbeitung der Verfügbarkeitsprüfungen für asynchrone Workflow-Knoten ([#9532](https://github.com/nocobase/nocobase/pull/9532)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[build]**
  - Text-Assets in Server-Builds werden jetzt als Dateien kopiert, anstatt in JavaScript-Module konvertiert zu werden. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) von @Molunerfinn

  - Behoben: Die Server-Verschleierung von Plugins gibt keine Browser-Globals mehr in Node.js-Laufzeitpaketen aus. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) von @Molunerfinn

- **[client-v2]** Behoben: Die Metadaten zur Browsersprache folgen jetzt der ausgewählten Anwendungssprache, anstatt als Englisch markiert zu sein. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) von @Molunerfinn

- **[Dateimanager]** Sichere Darstellung von PDF-Vorschauen mit PDF.js anstelle von iframe-basiertem Roh-PDF-Rendering. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) von @mytharcher

- **[KI-Mitarbeiter]** Korrigierte die falsche Beschreibung des Tool-Namens im Arbeitskontext-Prompt ([#9567](https://github.com/nocobase/nocobase/pull/9567)) von @cgyrock

- **[Workflow: Manueller Knoten]** Behoben: Temporäre Speicherungen für manuelle Workflow-Aufgaben behalten jetzt die übermittelten Formularwerte. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) von @mytharcher

- **[Auth: OIDC]** Behoben: Token-Leck, wenn SSO-Login-Callbacks eine externe Weiterleitungs-URL erhalten. von @2013xile

- **[Workflow: Genehmigung]**
  - Behoben: Der Widerruf einer Genehmigung aktualisiert jetzt die übermittelten Geschäftsdaten unter Berücksichtigung der Quellsammlungs-Berechtigungen. von @mytharcher

  - Behoben: Die `jobs:resume`-API wird vom Genehmigungsknoten nicht unterstützt. von @mytharcher

  - Behoben: Doppelte Genehmigungsdatensatz-Indizes, wenn Delegierungen gleichzeitig für denselben Genehmigungsauftrag auftreten. von @mytharcher

  - Behoben: Veraltete Genehmigungs-Todos, wenn Genehmigungs-Workflows durch Fehler in Nicht-Genehmigungsknoten beendet werden. von @mytharcher
