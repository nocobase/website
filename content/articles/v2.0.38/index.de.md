---
title: "NocoBase v2.0.38: Verbesserung der Fähigkeit von KI-Mitarbeitern, hochgeladene Dokumente zu analysieren"
description: "Versionshinweise zu v2.0.38"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Verbesserung der Fähigkeit von KI-Mitarbeitern, hochgeladene Dokumente zu parsen ([#9126](https://github.com/nocobase/nocobase/pull/9126)) von @cgyrock

### 🚀 Verbesserungen

- **[Logger]** Hinzufügen von `referer`-Informationen zu Anfrageprotokollen ([#9110](https://github.com/nocobase/nocobase/pull/9110)) von @2013xile

- **[Undefiniert]** Synchronisierung der übersetzten Dokumentation zu Umgebungsvariablen und Cluster-Modus mit den neuesten chinesischen Aktualisierungen. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) von @mytharcher

- **[KI-Mitarbeiter]** Nach der Blockauswahl durch KI-Mitarbeiter, Formularanhänge in den Upload-Bereich einfügen ([#9127](https://github.com/nocobase/nocobase/pull/9127)) von @cgyrock

- **[Workflow: Manueller Knoten]** Verwendung von `simplePagination` für Sammlungen, die mit Workflow-Aufgaben verknüpft sind, für eine bessere Listenleistung ([#9117](https://github.com/nocobase/nocobase/pull/9117)) von @mytharcher

- **[Workflow: Genehmigung]** Verwendung von `simplePagination` für die Sammlungen `approvals` und `approvalRecords` für eine bessere Listenleistung von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behoben: Die optionalen Optionen von Einzelfeld-Auswahlfeldern in der Feldregelkonfiguration waren leer ([#9119](https://github.com/nocobase/nocobase/pull/9119)) von @jiannx

  - Behoben: Falsche Standardwerteinstellungen für Untertabellen im Formular. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) von @gchust

- **[Benachrichtigung: In-App-Nachricht]** Behoben: Problem, bei dem die Empfängerauswahlkomponente nicht korrekt funktionierte ([#9123](https://github.com/nocobase/nocobase/pull/9123)) von @mytharcher

- **[KI-Mitarbeiter]** Behoben: Problem, bei dem die baseURL-Einstellungen des google-gen-ai LLM-Dienstes nicht wirksam wurden ([#9107](https://github.com/nocobase/nocobase/pull/9107)) von @cgyrock

- **[E-Mail-Manager]** Entfernen der Formular-Schließaufforderung nach erfolgreichem E-Mail-Versand von @jiannx
