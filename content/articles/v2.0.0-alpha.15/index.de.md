---
title: "NocoBase v2.0.0-alpha.15: Neue LLM-Anbieter hinzugefügt"
description: "Versionshinweise zu v2.0.0-alpha.15"
---

### 🚀 Verbesserungen

- **[Client]** Unterstützung von Assoziationsfeldern im JS-Feldmodell ([#7618](https://github.com/nocobase/nocobase/pull/7618)) von @gchust

- **[KI-Mitarbeiter]**
  - Der OpenAI-LLM-Anbieter wurde in zwei separate Anbieter aufgeteilt, um die Completions- und Responses-APIs von OpenAI zu unterstützen. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) von @cgyrock

  - Neuer LLM-Anbieter Ollama hinzugefügt ([#7612](https://github.com/nocobase/nocobase/pull/7612)) von @ReLaMi96

### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem die Aufgabenanzahl nach dem Hinzufügen eines Bearbeiters nicht aktualisiert wurde von @mytharcher

  - Problem mit Transaktions-Timeouts behoben, das durch nicht ordnungsgemäßes Zurücksetzen von Transaktionen bei Datenbankfehlern nach der Genehmigungseinreichung verursacht wurde von @mytharcher
