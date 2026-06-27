---
title: "NocoBase v2.1.2: Konfigurationsformular für externe Vektorspeicher in KI-Wissensdatenbanken hinzugefügt"
description: "Versionshinweise zu v2.1.2"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Konfigurationsformular für externe Vektorspeicher für KI-Wissensdatenbanken hinzugefügt. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) von @cgyrock
- **[KI: Wissensdatenbank]** Konfigurationsformular für externe Vektorspeicher für KI-Wissensdatenbanken hinzugefügt. von @cgyrock

### 🚀 Verbesserungen

- **[undefined]**

  - Ein Szenario zur Versionskontrolle zum Schnellstart des KI-Builders hinzugefügt ([#9748](https://github.com/nocobase/nocobase/pull/9748)) von @Molunerfinn
    Referenz: [Schnellstart KI-Builder](https://docs.nocobase.com/en/ai-builder)
  - Die Dokumentation zur Versionskontrolle mit Anleitung zur automatischen Revision durch den KI-Builder verbessert. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) von @cgyrock
- **[cli]** Formulierung des Init-Setups präzisiert ([#9750](https://github.com/nocobase/nocobase/pull/9750)) von @chenos
- **[Aktion: Datensätze importieren]** Verbesserte Dialoge für Import- und asynchrone Aufgabenfehler, sodass lange Fehlermeldungen vollständig lesbar sind, ohne das Layout zu beeinträchtigen. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) von @katherinehhh
- **[Aktion: Datensätze importieren Pro]** Verbesserte Importdialoge, sodass lange Fehlermeldungen lesbar bleiben und der v2-Verarbeitungsmodus direkt aus dem Einstellungsmenü ausgewählt werden kann. von @katherinehhh

### 🐛 Fehlerbehebungen

- **[client-v2]** Problem behoben, bei dem v2-Seiten nach der Anmeldung weiterhin laden konnten ([#9738](https://github.com/nocobase/nocobase/pull/9738)) von @zhangzhonghe
- **[cli]** Node.js 22 für nb erforderlich ([#9749](https://github.com/nocobase/nocobase/pull/9749)) von @chenos
- **[Dateimanager]** Fehler bei PDF-Vorschauen behoben, bei dem nach dem Wechsel zu pdf.js CJK/CID-Schrifttexte fehlten. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) von @mytharcher
