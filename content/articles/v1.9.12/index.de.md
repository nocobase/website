---
title: "NocoBase v1.9.12: Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern"
description: "Versionshinweise zu v1.9.12"
---

### 🚀 Verbesserungen

- **[Client]** Ladezustand für die Aktionsschaltflächen "Datensatz aktualisieren" und "Datensatz löschen" hinzugefügt, um doppelte Anfragen zu vermeiden ([#7964](https://github.com/nocobase/nocobase/pull/7964)) von @mytharcher

- **[Asynchroner Aufgabenmanager]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern ([#7796](https://github.com/nocobase/nocobase/pull/7796)) von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern von @mytharcher

- **[Workflow: Genehmigung]**
  - Korrektur der Variablenauswahl in AssigneeSelect, sodass nur PK oder FK der Benutzersammlung ausgewählt werden können von @mytharcher

  - Reduzierung der im Genehmigungs-Popup zu ladenden Assoziationen für eine bessere Leistung von @mytharcher

  - Die Nutzlast der manuellen Ausführung (oder Auslösung durch einen Unterprozess-Knoten) ist nun mit Datensätzen oder Primärschlüsseln kompatibel. Vermeidung von Konsistenzproblemen im Auslöserkontext. von @mytharcher

### 🐛 Fehlerbehebungen

- **[Asynchroner Aufgabenmanager]** Migrationsregel für die Sammlung `asyncTasks` hinzugefügt, um zu vermeiden, dass asynchrone Aufgaben-Datensätze migriert werden ([#7950](https://github.com/nocobase/nocobase/pull/7950)) von @mytharcher

- **[Workflow: Genehmigung]** Sprachdatei korrigiert von @mytharcher
