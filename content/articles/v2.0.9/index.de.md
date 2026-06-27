---
title: "NocoBase v2.0.9: Behebung des Problems, dass die CollectionField-Komponente in der DefaultValue-Komponente nicht gerendert wird"
description: "Versionshinweise zu v2.0.9"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem die CollectionField-Komponente in der DefaultValue-Komponente nicht gerendert wurde ([#8744](https://github.com/nocobase/nocobase/pull/8744)) von @mytharcher

  - Problem behoben, bei dem der Datenblock beim Wechseln von Menüs nicht aktualisiert wurde. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) von @gchust

- **[Datenbank]** Fehler bei der benutzerdefinierten regulären Prüfung in v2 behoben ([#8729](https://github.com/nocobase/nocobase/pull/8729)) von @jiannx

- **[Flow-Engine]** Problem behoben, bei dem ctx.exit die Ausführung von benutzerdefinierten Ereignisflüssen nicht beenden konnte. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) von @gchust

- **[Workflow: Genehmigung]** Fehlenden Parameter hinzugefügt, um zu vermeiden, dass Verknüpfungen beim Einreichen einer neuen Genehmigung nicht aktualisiert werden von @mytharcher
