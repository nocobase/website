---
title: "NocoBase v1.8.20: Anpassung der Workflow-Variablen-API zur Unterstützung einer voreingestellten zusätzlichen Variablenliste"
description: "Versionshinweise zu v1.8.20"
---

### 🚀 Verbesserungen

- **[Workflow]** Die Workflow-Variablen-API wurde angepasst, um das Voreinstellen einer zusätzlichen Variablenliste zu unterstützen ([#7439](https://github.com/nocobase/nocobase/pull/7439)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Unterstützung für die Verwendung genehmigungsbezogener Variablen in benutzerdefinierten Benachrichtigungen von @mytharcher

  - Unterstützung für die Aktualisierung des Genehmigungsstatus, nachdem der Endknoten die Ausführung beendet hat von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung eines Problems, bei dem in bestimmten Szenarien das Bearbeiten eines Datensatzes im mobilen Datensatzauswahl-Popup einen Fehler verursacht ([#7444](https://github.com/nocobase/nocobase/pull/7444)) von @zhangzhonghe

  - Die Pflichtfeldvalidierung für Anhängefelder in der Untertabelle funktionierte nicht ([#7431](https://github.com/nocobase/nocobase/pull/7431)) von @katherinehhh

  - Behebung des Problems, dass das Symbol falsch angezeigt wurde, wenn die URL im Anhang-URL-Feld Abfrageparameter enthielt ([#7432](https://github.com/nocobase/nocobase/pull/7432)) von @mytharcher

- **[Datenbank]**
  - Behebung eines MySQL-Syntaxfehlers, der beim Laden weiterer In-App-Nachrichten auftrat. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) von @aaaaaajie

  - Behebung eines Genauigkeitsproblems für exportierte Zahlenfelder ([#7421](https://github.com/nocobase/nocobase/pull/7421)) von @aaaaaajie

- **[Undefiniert]** Behebung eines Problems beim Filtern nach Datumsfeld nur in MySQL-Externer-Quelle ([#7422](https://github.com/nocobase/nocobase/pull/7422)) von @aaaaaajie

- **[Aktion: Datensätze importieren]** Behebung eines Problems, bei dem der Import fehlschlug, wenn der Primärschlüssel der Tabelle ein einzeiliger Text war ([#7416](https://github.com/nocobase/nocobase/pull/7416)) von @aaaaaajie

- **[Workflow]**
  - Vervollständigung der Optionen zum automatischen Löschen des Workflow-Ausführungsstatus ([#7436](https://github.com/nocobase/nocobase/pull/7436)) von @mytharcher

  - Behebung von Problemen im Zusammenhang mit dem mobilen Menü in den Workflow-Aufgaben ([#7419](https://github.com/nocobase/nocobase/pull/7419)) von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Behebung eines unerwarteten Aktualisierungsergebnisses bei Verwendung eines String-Primärschlüssels im xlsx-Import. von @aaaaaajie
