---
title: "NocoBase v1.9.15: Fehlerbehebungen"
description: "Versionshinweise zu v1.9.15"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehler beim Öffnen der Standardwerteinstellungen vermieden ([#7997](https://github.com/nocobase/nocobase/pull/7997)) von @mytharcher

  - Fehler beim Hinzufügen von Unterdatensätzen in assoziierten Baumtabellenblöcken behoben ([#7989](https://github.com/nocobase/nocobase/pull/7989)) von @katherinehhh

- **[Abteilungen]** Problem behoben, bei dem assoziierte Felder von Abteilungen nicht bearbeitet werden konnten ([#7462](https://github.com/nocobase/nocobase/pull/7462)) von @heziqiang

- **[Sammlung: Baum]** Fehlerhafte Aktualisierungen der Pfadtabelle aufgrund falscher Suche nach übergeordneten Baumfeldern behoben ([#8000](https://github.com/nocobase/nocobase/pull/8000)) von @2013xile

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem behoben, bei dem das m2m-Arrayfeld in der Untertabelle nicht aktualisiert werden konnte ([#7998](https://github.com/nocobase/nocobase/pull/7998)) von @cgyrock

- **[Workflow: Genehmigung]**
  - Fehler behoben, bei dem im Ausführungskontext nach erneuter Einreichung durch den Benutzer keine Antragstellerdaten vorhanden waren, von @mytharcher

  - Problem behoben, bei dem der Kommentar im Auftragsergebnis null war, nachdem der Benutzer die Genehmigung mit Kommentar eingereicht hatte, von @mytharcher
