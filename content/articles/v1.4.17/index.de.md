---
title: "NocoBase v1.4.17: Unterstützt die Verwendung der Variable \"Ausgewählte Datensätze der Tabelle\" in m2m-Array-Feldern"
description: "Versionshinweise zu v1.4.17"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützt die Verwendung der Variable „Ausgewählte Datensätze der Tabelle“ in m2m-Array-Feldern ([#5974](https://github.com/nocobase/nocobase/pull/5974)) von @2013xile

### 🚀 Verbesserungen

- **[Undefined]** Aktiviert das Theme-Plugin standardmäßig ([#5957](https://github.com/nocobase/nocobase/pull/5957)) von @zhangzhonghe

- **[Datenquelle: Haupt]** Namenskonfliktvalidierung hinzugefügt, um zu verhindern, dass Benutzer Collections mit demselben Namen wie System-Collections erstellen ([#5962](https://github.com/nocobase/nocobase/pull/5962)) von @chareice

- **[Workflow]** Vermeidet die Verwendung von Datumsbereichsvariablen an den meisten Stellen außerhalb von Filterkomponenten ([#5954](https://github.com/nocobase/nocobase/pull/5954)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Datenbank]**
  - Ein Problem in der destroy-Aktion behoben, bei dem filterByTk mit dem filter-Parameter keine Daten löschen konnte ([#5976](https://github.com/nocobase/nocobase/pull/5976)) von @chareice

  - Die Methoden firstOrCreate und updateOrCreate des Repositorys verlieren den Kontext ([#5973](https://github.com/nocobase/nocobase/pull/5973)) von @chenos

- **[Client]**
  - Problem beim Hinzufügen eines Eins-zu-Eins-Beziehungsfeldes im Formular behoben ([#5975](https://github.com/nocobase/nocobase/pull/5975)) von @katherinehhh

  - Problem mit der Feldzuweisung in der Untertabelle behoben, wenn nach dem Löschen von Daten erneut Daten ausgewählt werden ([#5958](https://github.com/nocobase/nocobase/pull/5958)) von @katherinehhh

  - Fehler im Tabellenblock behoben, der durch Daten mit Feldern namens 'children' verursacht wurde ([#5951](https://github.com/nocobase/nocobase/pull/5951)) von @zhangzhonghe

- **[Datenquelle: Haupt]** Probleme mit der Legacy-Unterstützung des unixTimestamp-Feldes behoben. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) von @chareice

- **[Workflow]** Fehler behoben, bei dem der Unterdetail-Block in der manuellen Knoten-UI-Konfiguration einen Fehler auslöste ([#5953](https://github.com/nocobase/nocobase/pull/5953)) von @mytharcher
