---
title: "NocoBase v2.1.0-alpha.38: Problem behoben, bei dem aktuelle Popup-Datensatzvariablen in Aktionsschalter-Ereignisabläufen nicht aufgelöst werden konnten"
description: "Versionshinweise zu v2.1.0-alpha.38"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ein Problem wurde behoben, bei dem aktuelle Popup-Datensatzvariablen in Aktionsschalter-Ereignisabläufen nicht aufgelöst werden konnten. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) von @gchust

  - Ein Problem wurde behoben, bei dem JS-Feldwerte in Unterformularen während der Formularübermittlung nicht korrekt gesetzt wurden. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) von @gchust

- **[Flow-Engine]** Korrigierte eine falsche Fehlermeldung in der Browser-Konsole. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) von @gchust

- **[Workflow: JavaScript]** Behoben: Das Laden des QuickJS-Laufzeitpakets für Workflow-JavaScript in Produktions-Builds. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) von @mytharcher

- **[Aktion: Datensätze importieren]** Behebt das Problem, dass importierte Datensätze in datumsähnlichen Feldern ein falsches Datum anzeigen ([#9463](https://github.com/nocobase/nocobase/pull/9463)) von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Behebt die Zeitzonenbehandlung für professionelle XLSX-Importe von @mytharcher

- **[Aktion: Datensätze exportieren Pro]** Behebt das Problem, dass ein Fehler ausgelöst wird, wenn ein Anhang aus einem Anhang-URL-Feld exportiert wird von @mytharcher
