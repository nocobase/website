---
title: "NocoBase v2.0.0-alpha.36: Optimierung der Symbolleistenstile für Seitenregisterkarten"
description: "Versionshinweise zu v2.0.0-alpha.36"
---

### 🚀 Verbesserungen

- **[Flow-Engine]** Optimierung der Symbolleisten-Stile für Registerkarten ([#7795](https://github.com/nocobase/nocobase/pull/7795)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Flow-Engine]**
  - Ein Problem behoben, bei dem Variablen in assoziierten Unterformularfeldern nicht korrekt aufgelöst wurden, wenn das Feld über die Benutzeroberfläche geändert wurde. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) von @gchust

  - Fehler im Bearbeitungsformular für Datensätze mit mehreren Primärschlüsseln ([#7798](https://github.com/nocobase/nocobase/pull/7798)) von @gchust

  - Ein Problem behoben, bei dem bestimmte Konfigurationen für die Aktion "Ansicht öffnen" nicht angewendet wurden, sodass die Aktion nun wie vorgesehen für alle angegebenen Konfigurationen funktioniert. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) von @gchust

- **[Client]**
  - Problem behoben, bei dem das Feld zur Sammlungsauswahl keine Sammlung korrekt auswählen konnte ([#7794](https://github.com/nocobase/nocobase/pull/7794)) von @katherinehhh

  - Spalte "Aktionen" im Tabellenblock kann nicht ausgeblendet werden ([#7804](https://github.com/nocobase/nocobase/pull/7804)) von @gchust

  - Unterstützung für die Auswahl des gesamten Variablenobjekts in der Eingabeaufforderung des KI-Mitarbeiters ([#7791](https://github.com/nocobase/nocobase/pull/7791)) von @gchust

- **[Benutzer]** Falsche Indexaktualisierung, wenn Feldnamen im Snake_case-Stil verwendet werden ([#7785](https://github.com/nocobase/nocobase/pull/7785)) von @2013xile
