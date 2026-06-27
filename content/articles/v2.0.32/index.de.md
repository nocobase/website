---
title: "NocoBase v2.0.32: Inhaltsverzeichnis zur README hinzugefügt"
description: "Versionshinweise zu v2.0.32"
---

### 🚀 Verbesserungen

- **[undefined]** Inhaltsverzeichnis zur README hinzugefügt ([#8878](https://github.com/nocobase/nocobase/pull/8878)) von @gaston98765

### 🐛 Fehlerbehebungen

- **[Client]**
  - Unterformular-Beziehungsfeld konnte nicht gespeichert werden ([#9004](https://github.com/nocobase/nocobase/pull/9004)) von @jiannx

  - Die Unterformulare der Felder zeigen keine Daten an ([#9008](https://github.com/nocobase/nocobase/pull/9008)) von @jiannx

  - Problem behoben, bei dem ctx.request den Authorization-Header nicht überschreiben konnte. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) von @gchust

- **[Server]** Serving-Prüfung hinzugefügt, um zu vermeiden, dass der App-Status von einer Nicht-Serving-Instanz aktualisiert wird ([#8959](https://github.com/nocobase/nocobase/pull/8959)) von @mytharcher

- **[KI-Mitarbeiter]**
  - Problem behoben bei Verwendung von DeepSeek- oder MinMax-Modellen auf DashScope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) von @cgyrock

  - Problem behoben, bei dem das Abbrechen der KI-Mitarbeiter-Schlussfolgerung zum Absturz des Dienstes führte ([#9031](https://github.com/nocobase/nocobase/pull/9031)) von @cgyrock

- **[Workflow: HTTP-Anfrage-Knoten]** Ergebnisse des Workflow-Anfrage-Knotens bereinigt, um die Offenlegung der Anfragekonfiguration zu vermeiden, neue Knoten standardmäßig so eingestellt, dass nur Antwortdaten zurückgegeben werden, und Debug-Logging für fehlgeschlagene Anfragen hinzugefügt. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) von @mytharcher

- **[Sammlungsfeld: Sortierung]** fix(field-sort): Absturz verhindert, wenn das scopeKey-Attribut undefiniert ist ([#9019](https://github.com/nocobase/nocobase/pull/9019)) von @gaston98765

- **[Block: GridCard]** Problem behoben, dass die Schaltfläche bei Aktualisierung der GridCard nicht aktualisiert wurde ([#9021](https://github.com/nocobase/nocobase/pull/9021)) von @jiannx

- **[Workflow: Genehmigung]**
  - Fehlertoleranz bei gelöschtem Workflow hinzugefügt, um Ladefehler in der Aufgabenliste zu vermeiden von @mytharcher

  - Fehlertoleranz für fehlendes `latestRound` hinzugefügt von @mytharcher
