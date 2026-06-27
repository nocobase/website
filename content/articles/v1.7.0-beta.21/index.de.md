---
title: "NocoBase v1.7.0-beta.21: Abhängigkeiten aktualisiert und SQLite-Unterstützung entfernt"
description: "Versionshinweise zu v1.7.0-beta.21"
---

### 🚀 Verbesserungen

- **[create-nocobase-app]** Abhängigkeiten aktualisiert und SQLite-Unterstützung entfernt ([#6708](https://github.com/nocobase/nocobase/pull/6708)) von @chenos

- **[Mobil]** Öffnungsgeschwindigkeit des mobilen Datumsauswahl-Popups optimiert ([#6735](https://github.com/nocobase/nocobase/pull/6735)) von @zhangzhonghe

- **[Block: Vorlage]** Unterstützung zum Konvertieren von Vorlagenblöcken in normale Blöcke ([#6662](https://github.com/nocobase/nocobase/pull/6662)) von @gchust

- **[Theme-Editor]** Seitenleistenbreite in der Theme-Konfiguration einstellbar ([#6720](https://github.com/nocobase/nocobase/pull/6720)) von @chenos

- **[Dateimanager]** Utils-API freigegeben ([#6705](https://github.com/nocobase/nocobase/pull/6705)) von @mytharcher

- **[Workflow]** Datumstypen zum Variablentypset hinzugefügt ([#6717](https://github.com/nocobase/nocobase/pull/6717)) von @mytharcher

- **[Vorlagendruck]** Datenquellen-Aktionssteuerung durch clientseitige rollenbasierte Zugriffskontrolle ersetzt. von @sheldon66

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem beim Aktualisieren von Datenblöcken nach erfolgreicher Übermittlung ([#6748](https://github.com/nocobase/nocobase/pull/6748)) von @zhangzhonghe

  - Fehlender Filter für bereits verknüpfte Daten beim Hinzufügen von Verknüpfungsdaten ([#6750](https://github.com/nocobase/nocobase/pull/6750)) von @katherinehhh

  - Problem, dass der Einklapp-Button im linken Menü durch das Workflow-Popup-Fenster verdeckt wird ([#6733](https://github.com/nocobase/nocobase/pull/6733)) von @zhangzhonghe

  - Fehlender 'Aktueller Datensatz' in der Verknüpfungsregel des 'Untergeordneten hinzufügen'-Buttons in der Baumtabelle ([#6752](https://github.com/nocobase/nocobase/pull/6752)) von @katherinehhh

  - Datums-/Uhrzeitfeld-Bedingung funktioniert nicht in Verknüpfungsregeln ([#6728](https://github.com/nocobase/nocobase/pull/6728)) von @katherinehhh

  - Problem, dass Symbole in der mobilen oberen Navigationsleiste schwer zu löschen sind ([#6734](https://github.com/nocobase/nocobase/pull/6734)) von @zhangzhonghe

  - Falsche Wertanzeige für "Indexspalte aktivieren" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) von @katherinehhh

  - Pflichtfelder, die durch Verknüpfungsregeln ausgeblendet werden, sollten die Formularübermittlung nicht beeinträchtigen ([#6709](https://github.com/nocobase/nocobase/pull/6709)) von @zhangzhonghe

  - Variablenkonvertierung in Bedingungen von Untertabellen-/Unterformular-Verknüpfungsregeln ([#6702](https://github.com/nocobase/nocobase/pull/6702)) von @katherinehhh

  - Export-Button wird ohne Exportberechtigung angezeigt ([#6689](https://github.com/nocobase/nocobase/pull/6689)) von @katherinehhh

  - Fehlende Aktionsoptionsbeschränkungen beim erneuten Öffnen von Verknüpfungsregeln ([#6723](https://github.com/nocobase/nocobase/pull/6723)) von @katherinehhh

  - Auswahlwechselproblem im Datumsfeld des Filter-Buttons ([#6695](https://github.com/nocobase/nocobase/pull/6695)) von @katherinehhh

  - Nach Verbindung über einen Fremdschlüssel führt ein Klick zum Auslösen des Filters zu leeren Filterbedingungen ([#6634](https://github.com/nocobase/nocobase/pull/6634)) von @zhangzhonghe

- **[CLI]** Automatische Aktualisierung von package.json bei Upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) von @chenos

- **[Server]** appVersion wurde von create-migration falsch generiert ([#6740](https://github.com/nocobase/nocobase/pull/6740)) von @chenos

- **[Build]** Fehlerbehebung für Fehler im tar-Befehl ([#6722](https://github.com/nocobase/nocobase/pull/6722)) von @mytharcher

- **[Block: Gantt]** Gantt-Diagrammblock überlappt Monate in der Kalenderkopfzeile der Monatsansicht ([#6753](https://github.com/nocobase/nocobase/pull/6753)) von @katherinehhh

- **[Aktion: Datensätze importieren]** Behebung der Import- und Exportausnahmen, die beim Setzen von Feldberechtigungen auftreten. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) von @aaaaaajie

- **[Block: Vorlage]** Blockvorlagen können in MySQL-Umgebung nicht verwendet werden ([#6726](https://github.com/nocobase/nocobase/pull/6726)) von @gchust

- **[Workflow]** Fehlerbehebung für Fehler bei der Ausführung von Zeitplanereignissen in Unterworkflows ([#6721](https://github.com/nocobase/nocobase/pull/6721)) von @mytharcher

- **[Datenvisualisierung]** Enum-Feldoptionen sind im Filterblock leer ([#6706](https://github.com/nocobase/nocobase/pull/6706)) von @2013xile

- **[Aktion: Benutzerdefinierte Anfrage]** Sicherstellen, dass benutzerdefinierte Anfragedaten JSON sein müssen ([#6701](https://github.com/nocobase/nocobase/pull/6701)) von @chenos

- **[Aktion: Datensätze exportieren Pro]**
  - Behebung der Import- und Exportausnahmen, die beim Setzen von Feldberechtigungen auftreten. von @aaaaaajie

  - Pro-Export-Button verliert Filterparameter nach dem Sortieren einer Tabellenspalte von @katherinehhh

- **[Workflow: Benutzerdefinierte Aktionsereignisse]** Unterstützung für die Ausführung im Mehrfachdatensatzmodus von @mytharcher

- **[Dateispeicher: S3(Pro)]**
  - Multer-Erstellungslogik für serverseitiges Hochladen hinzugefügt von @mytharcher

  - Antwortdaten der hochgeladenen Datei korrigiert von @mytharcher

- **[Workflow: Genehmigung]** Vorladen von Verknüpfungsfeldern für Datensätze korrigiert von @mytharcher
