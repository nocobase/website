---
title: "NocoBase v2.1.0-alpha.17: Überarbeitung der NocoBase CLI"
description: "Versionshinweise zu v2.1.0-alpha.17"
---

### 🎉 Neue Funktionen

- **[cli]** NocoBase CLI umgestaltet ([#9122](https://github.com/nocobase/nocobase/pull/9122)) von @chenos

- **[KI-Mitarbeiter]** Fähigkeit der KI-Mitarbeiter verbessert, hochgeladene Dokumente zu parsen ([#9126](https://github.com/nocobase/nocobase/pull/9126)) von @cgyrock

### 🚀 Verbesserungen

- **[undefined]**
  - Synchronisierte Übersetzungen der Dokumentation für Umgebungsvariablen und Cluster-Modus mit den neuesten chinesischen Aktualisierungen. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) von @mytharcher

  - Dokumentation: Arabische Übersetzung für die Einführungsseiten "Erste Schritte" hinzugefügt ([#9044](https://github.com/nocobase/nocobase/pull/9044)) von @gaston98765

  - Arabische Übersetzung für die Dokumentations-Startseite hinzugefügt ([#9043](https://github.com/nocobase/nocobase/pull/9043)) von @gaston98765

- **[logger]** `Referer`-Information zu Anfrageprotokollen hinzugefügt ([#9110](https://github.com/nocobase/nocobase/pull/9110)) von @2013xile

- **[client]** Schalter für die Pflichtfeldprüfung in Formularen hinzugefügt ([#9060](https://github.com/nocobase/nocobase/pull/9060)) von @jiannx

- **[Workflow: Manueller Knoten]** `simplePagination` für Workflow-Aufgaben-bezogene Sammlungen verwendet, für bessere Listenleistung ([#9117](https://github.com/nocobase/nocobase/pull/9117)) von @mytharcher

- **[KI-Mitarbeiter]** Nach Auswahl eines KI-Mitarbeiter-Blocks wird der Formular-Anhang in den Upload-Bereich eingefügt ([#9127](https://github.com/nocobase/nocobase/pull/9127)) von @cgyrock

- **[Workflow: Genehmigung]** `simplePagination` für die Sammlungen `approvals` und `approvalRecords` verwendet, für bessere Listenleistung von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**
  - Behoben: Die optionalen Optionen von Einfachauswahlfeldern in der Feldregelkonfiguration waren leer ([#9119](https://github.com/nocobase/nocobase/pull/9119)) von @jiannx

  - Behoben: Ein Problem, bei dem die Komponente für Verknüpfungsfelder in den Feldwerteinstellungen falsch war. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) von @gchust

  - Behoben: Falsche Standardwerteinstellungen für Untertabellen in Formularen. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) von @gchust

- **[utils]** Sicherheitskontrolle für das Senden von HTTP-Anfragen des Servers hinzugefügt, um mögliche SSRF zu vermeiden ([#9079](https://github.com/nocobase/nocobase/pull/9079)) von @mytharcher
Referenz: [Umgebungsvariablen](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow: Schleifenknoten]** Validierungen von Workflow-Knoten behoben ([#9111](https://github.com/nocobase/nocobase/pull/9111)) von @mytharcher

- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Empfängerauswahl-Komponente nicht korrekt funktionierte ([#9123](https://github.com/nocobase/nocobase/pull/9123)) von @mytharcher

- **[IdP: OAuth]** OAuth-Zugriff für reguläre API-Anfragen behoben ([#9120](https://github.com/nocobase/nocobase/pull/9120)) von @2013xile

- **[KI-Mitarbeiter]**
  - Behoben: Sortierung von Aggregatabfragen wurde durch ACL verworfen ([#9099](https://github.com/nocobase/nocobase/pull/9099)) von @2013xile

  - Problem behoben, bei dem die baseURL-Einstellungen des google-gen-ai LLM-Dienstes nicht wirkten ([#9107](https://github.com/nocobase/nocobase/pull/9107)) von @cgyrock

- **[E-Mail-Manager]** Formular-Schließhinweis nach erfolgreichem E-Mail-Versand entfernt von @jiannx
