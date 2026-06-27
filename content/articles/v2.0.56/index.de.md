---
title: "NocoBase v2.0.56: Open-Source-Backup-Manager-Plugin"
description: "Versionshinweise zu v2.0.56"
---

### 🎉 Neue Funktionen

- **[Backup-Manager]** Open-Source-Backup-Manager-Plugin ([#9550](https://github.com/nocobase/nocobase/pull/9550)) von @chenos

### 🚀 Verbesserungen

- **[Client]** Optimierung der Anzeigeeinstellungen für Aktionsschaltflächen ([#9510](https://github.com/nocobase/nocobase/pull/9510)) von @katherinehhh
- **[Flow-Engine]** V2-Feldkonfigurationsmenüs unterstützen jetzt die Suche nach Feldern ([#9489](https://github.com/nocobase/nocobase/pull/9489)) von @zhangzhonghe
- **[Undefiniert]**

  - Sicherheitsüberprüfung von Abhängigkeiten für Pull-Requests hinzugefügt ([#9523](https://github.com/nocobase/nocobase/pull/9523)) von @zhangzhonghe
  - **[Benachrichtigungsmanager]** Warteschlangenstrategie geändert, um die Sendeleistung zu optimieren ([#9407](https://github.com/nocobase/nocobase/pull/9407)) von @mytharcher
- **[KI: Wissensdatenbank]** Vektorspeicheränderung für KI-Wissensdatenbanken aktiviert von @cgyrock
- **[Workflow: Genehmigung]** Verbesserung verwandter Genehmigungen mit Zeitleistenkarten von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behebung des Problems, dass ausgewählte Werte gelöscht werden, wenn abhängige Assoziationsfelder in der Datenbereichsverknüpfung geändert werden ([#9551](https://github.com/nocobase/nocobase/pull/9551)) von @katherinehhh
  - Behebung des Problems, dass ein Menüabzeichen weiterhin einen Punkt anzeigt, wenn sein Wert 0 ist ([#9491](https://github.com/nocobase/nocobase/pull/9491)) von @zhangzhonghe
  - Behebung des Problems, dass Filterformulare keine aktuellen Formularvariablen verwenden können ([#9474](https://github.com/nocobase/nocobase/pull/9474)) von @zhangzhonghe
  - Behebung des Problems, dass verkleinerte v2-Blöcke nach Verlassen des Bearbeitungsmodus wieder volle Breite einnehmen ([#9529](https://github.com/nocobase/nocobase/pull/9529)) von @zhangzhonghe
  - Fehlerhafter JS-Feldmenüstatus in Unterformularen behoben. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) von @gchust
- **[Flow-Engine]** Behebung des Mehrfachauswahlproblems für externe Datenquellenfelder im v2-Formular ([#9542](https://github.com/nocobase/nocobase/pull/9542)) von @katherinehhh
- **[KI-Mitarbeiter]** Fehler behoben, wenn KI-Mitarbeiter auf eine schreibgeschützte Wissensdatenbank zugreifen ([#9539](https://github.com/nocobase/nocobase/pull/9539)) von @cgyrock
- **[Kalender]** Behebung des Problems, dass weitere Kalenderelemente nicht vollständig angezeigt werden können ([#9492](https://github.com/nocobase/nocobase/pull/9492)) von @zhangzhonghe
- **[Aktion: Stapelaktualisierung]** Behebung, dass der Ladestatus der Stapelaktualisierungsaktion nach einem Aktualisierungsfehler zurückgesetzt wird ([#9509](https://github.com/nocobase/nocobase/pull/9509)) von @katherinehhh
- **[API-Dokumentation]** API-Dokumentation für Sammlungen korrigiert, sodass Abfrageparameter sich nicht mehr gegenseitig stören ([#9442](https://github.com/nocobase/nocobase/pull/9442)) von @jiannx
- **[Workflow]** Ladezustand für die manuelle Workflow-Ausführung hinzugefügt. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) von @mytharcher
- **[Migrationsmanager]** Fehler bei der Erstellung von Migrationsdateien bei Verwendung von OceanBase behoben von @2013xile
- **[Dateispeicher: S3(Pro)]** S3 Pro-Endpunktbehandlung korrigiert, sodass Server-Uploads und URL-Vorschauen den Bucket-Host nicht duplizieren. von @mytharcher
- **[Workflow: Genehmigung]** Doppelte Genehmigungsdatensatzindizes behoben, wenn Delegierungen gleichzeitig beim selben Genehmigungsauftrag auftreten. von @mytharcher
