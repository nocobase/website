---
title: "NocoBase v1.8.0-alpha.4: Unterstützung zum Filtern weiterer Felder von Workflows"
description: "Versionshinweise zu v1.8.0-alpha.4"
---

### 🚀 Verbesserungen

- **[Workflow]** Unterstützung zum Filtern weiterer Felder von Workflows ([#6995](https://github.com/nocobase/nocobase/pull/6995)) von @mytharcher

- **[E-Mail-Manager]** Unterstützt den Standard-Sendewert im Pop-up, ermöglicht die Fuzzy-Suche nach Empfängern und behebt Probleme von @jiannx

### 🐛 Fehlerbehebungen

- **[Datenbank]** Fehlerbehebung: Fehlende Ersteller- und Aktualisierungsfelder beim Import von XLSX ([#7011](https://github.com/nocobase/nocobase/pull/7011)) von @aaaaaajie

- **[Client]**
  - Fehlender Feldtitel beim Setzen einer Variable in der Zuweisungskomponente ([#7001](https://github.com/nocobase/nocobase/pull/7001)) von @katherinehhh

  - Assoziationsfelder zeigen beim Überfahren im Read-Pretty-Modus Untertabellen und Unterformulare an ([#7002](https://github.com/nocobase/nocobase/pull/7002)) von @zhangzhonghe

  - Verknüpfungsregeln für Markdown-Blöcke funktionieren nicht, wenn sie durch eine Popup-Aktion ausgelöst werden ([#7007](https://github.com/nocobase/nocobase/pull/7007)) von @katherinehhh

  - Seitenwechsel in der Untertabelle eines Detailblocks innerhalb eines Modals löst eine Warnung über nicht gespeicherte Änderungen aus ([#7004](https://github.com/nocobase/nocobase/pull/7004)) von @katherinehhh

  - Verknüpfungsregeln für Feldstile funktionieren nicht ([#7003](https://github.com/nocobase/nocobase/pull/7003)) von @katherinehhh

- **[Asynchroner Aufgabenmanager]** Problem mit mehrfacher Ausführung beim asynchronen Import behoben ([#7006](https://github.com/nocobase/nocobase/pull/7006)) von @aaaaaajie

- **[Lokalisierung]** Fehler durch leere Texte behoben ([#7010](https://github.com/nocobase/nocobase/pull/7010)) von @2013xile

- **[Aktion: Datensätze exportieren Pro]** Problem mit mehrfacher Ausführung beim asynchronen Import behoben von @aaaaaajie

- **[Workflow: Genehmigung]** Behoben, dass die delegierte Genehmigung nicht fortgesetzt werden kann, wenn sie von anderen genehmigt wurde von @mytharcher

- **[E-Mail-Manager]**
  - Mehrere Primärschlüssel für die Tabelle "mailmessagelabels_mailmessages" von @jiannx

  - Einstellung, dass das Pop-up nicht angezeigt wird von @jiannx

  - E-Mail-Fuzzy-Suche zur Erstellung eindeutiger Filter von @jiannx

  - Fuzzy-Suche für Empfänger unterstützt assoziierte Felder von @jiannx

  - Hinzufügen des Feldes "id" zu den mailmessagelabelsMailmessages von @jiannx
