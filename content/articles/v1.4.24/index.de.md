---
title: "NocoBase v1.4.24: datePicker-Komponente schreibgeschützt"
description: "Versionshinweise zu v1.4.24"
---

### 🚀 Verbesserungen

- **[Client]** Datumsauswahl-Komponente: Eingabe schreibgeschützt ([#6061](https://github.com/nocobase/nocobase/pull/6061)) von @Cyx649312038

### 🐛 Fehlerbehebungen

- **[Client]**
  - Korrektur des fehlerhaften Ladens von modalen Assoziationsfeldern in Tabellenblöcken ([#6060](https://github.com/nocobase/nocobase/pull/6060)) von @katherinehhh

  - Korrektur eines Stilproblems in Untertabellen von Detailblöcken ([#6049](https://github.com/nocobase/nocobase/pull/6049)) von @katherinehhh

  - Korrektur der Formatierung von Zahlenfeldern im readPretty-Modus, die den Bearbeitungsmodus beeinflusste ([#6050](https://github.com/nocobase/nocobase/pull/6050)) von @katherinehhh

  - Korrektur eines Stilproblems bei Tabellenkopfzellen in ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) von @katherinehhh

- **[Datenbank]** Behebung eines Problems bei der Initialisierung des Sortierfeldes mit Primärschlüssel ([#6059](https://github.com/nocobase/nocobase/pull/6059)) von @chareice

- **[Datenvisualisierung]** Entfernung der `LIMIT`-Klausel bei Verwendung von Aggregatfunktionen ohne festgelegte Dimensionen in Diagrammabfragen ([#6062](https://github.com/nocobase/nocobase/pull/6062)) von @2013xile

- **[Backup-Manager]** Korrektur des Backup-Download-Fehlers für Benutzer, die nur in der Sub-App angemeldet sind, von @gchust
