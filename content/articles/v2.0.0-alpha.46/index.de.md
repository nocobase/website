---
title: "NocoBase v2.0.0-alpha.46: Unterstützung für dynamischen Wechsel der Flow-Modellklasse"
description: "Versionshinweise zu v2.0.0-alpha.46"
---

### 🚀 Verbesserungen

- **[Flow-Engine]** Unterstützung für dynamisches Umschalten des Flow-Modell-Klassen ([#7952](https://github.com/nocobase/nocobase/pull/7952)) von @gchust

- **[KI-Mitarbeiter]** KI-Mitarbeiter-Plugin um Upgrade-Hook erweitert ([#7951](https://github.com/nocobase/nocobase/pull/7951)) von @heziqiang

- **[Asynchroner Aufgabenmanager]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern ([#7796](https://github.com/nocobase/nocobase/pull/7796)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Payload der manuellen Ausführung (oder Auslösung durch Unterprozess-Knoten) kompatibel mit Datensatz oder Primärschlüssel gemacht. Konsistenzprobleme im Auslöserkontext vermieden. von @mytharcher

  - Reduzierung der im Genehmigungs-Popup zu ladenden Verknüpfungen für bessere Leistung von @mytharcher

  - Korrektur der Variablenauswahl in AssigneeSelect, beschränkt auf PK oder FK der Benutzersammlung von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Automatischer Zeilenumbruch für Textfelder im Detailblock bei Inhaltsüberschreitung behoben ([#7955](https://github.com/nocobase/nocobase/pull/7955)) von @katherinehhh

- **[Asynchroner Aufgabenmanager]** Migrationsregel für die Sammlung `asyncTasks` hinzugefügt, um die Migration asynchroner Aufgabenaufzeichnungen zu verhindern ([#7950](https://github.com/nocobase/nocobase/pull/7950)) von @mytharcher

- **[Dateimanager]** Hochladen von Dateien in den angegebenen Speicher anstelle des Standardspeichers behoben ([#7947](https://github.com/nocobase/nocobase/pull/7947)) von @katherinehhh

- **[Workflow: Genehmigung]** Sprachdatei korrigiert von @mytharcher
