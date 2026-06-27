---
title: "NocoBase v1.6.7: Beschreibung der sicheren Feldkonfiguration hinzugefügt"
description: "Versionshinweise zu v1.6.7"
---

### 🚀 Verbesserungen

- **[Workflow: Mailer-Knoten]** Beschreibung der Konfiguration für das Sicherheitsfeld hinzugefügt. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) von @sheldon66

- **[Benachrichtigung: E-Mail]** Beschreibung der Konfiguration für das Sicherheitsfeld hinzugefügt. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) von @sheldon66

- **[Kalender]** Kalender-Plugin mit optionalen Einstellungen zum Aktivieren oder Deaktivieren der schnellen Ereigniserstellung ([#6391](https://github.com/nocobase/nocobase/pull/6391)) von @Cyx649312038

### 🐛 Fehlerbehebungen

- **[Client]** Fehler bei der Übermittlung des Zeitfelds im chinesischen Gebietsschema (ungültige Eingabesyntax für den Typ time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) von @katherinehhh

- **[Dateimanager]** Zugriff auf in COS gespeicherte Dateien nicht möglich ([#6512](https://github.com/nocobase/nocobase/pull/6512)) von @chenos

- **[Block: Karte]** Geheimschlüsselfelder lösen keine Validierung in der Kartenverwaltung aus ([#6509](https://github.com/nocobase/nocobase/pull/6509)) von @katherinehhh

- **[WEB-Client]** Der Pfad in der Routenverwaltungstabelle unterscheidet sich vom tatsächlichen Pfad ([#6483](https://github.com/nocobase/nocobase/pull/6483)) von @zhangzhonghe

- **[Aktion: Datensätze exportieren Pro]** Export von Anhängen nicht möglich von @chenos

- **[Workflow: Genehmigung]**
  - Absturz durch Null-Benutzer behoben von @mytharcher

  - Fehler beim Hinzufügen eines Abfrageknotenergebnisses behoben von @mytharcher
