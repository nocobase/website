---
title: "NocoBase v1.6.25: CI-Veröffentlichung für Lizenzpaket hinzugefügt"
description: "Versionshinweise zu v1.6.25"
---

### 🎉 Neue Funktionen

- **[undefined]** CI für Lizenzpaket-Veröffentlichung hinzugefügt ([#6786](https://github.com/nocobase/nocobase/pull/6786)) von @jiannx

- **[Datenvisualisierung: ECharts]** Einstellung "Y-Achse umkehren" für Balkendiagramme hinzugefügt von @2013xile

### 🚀 Verbesserungen

- **[utils]** Höhe der Filterbutton-Feldliste erhöht und Felder sortiert/kategorisiert ([#6779](https://github.com/nocobase/nocobase/pull/6779)) von @zhangzhonghe

- **[client]** Stil des Hinzufügen-Buttons in Untertabellen optimiert und Paginierung in derselben Zeile ausgerichtet ([#6790](https://github.com/nocobase/nocobase/pull/6790)) von @katherinehhh

- **[Dateimanager]** OSS-Timeout-Option hinzugefügt, Standardwert 10 Minuten ([#6795](https://github.com/nocobase/nocobase/pull/6795)) von @mytharcher

- **[Passwortrichtlinie]** Standard-Passwortablauf auf "Nie ablaufen" geändert von @2013xile

- **[WeCom]** Firmen-E-Mail gegenüber persönlicher E-Mail priorisieren, wenn die E-Mail des Benutzers aktualisiert wird von @2013xile

### 🐛 Fehlerbehebungen

- **[client]**
  - Im Collapse-Block löscht das Klicken auf die Schaltfläche "Löschen" im Suchfeld für Beziehungsfelder nicht den Datenbereich ([#6782](https://github.com/nocobase/nocobase/pull/6782)) von @zhangzhonghe

  - Assoziationsfeld übermittelt keine Daten, wenn ein Feld aus der verknüpften Sammlung angezeigt wird ([#6798](https://github.com/nocobase/nocobase/pull/6798)) von @katherinehhh

  - Verschieben von Menüs vor oder nach Seiten-Tabs untersagt ([#6777](https://github.com/nocobase/nocobase/pull/6777)) von @zhangzhonghe

  - Tabellenblock zeigt beim Filtern doppelte Daten an ([#6792](https://github.com/nocobase/nocobase/pull/6792)) von @zhangzhonghe

  - Im Filterformular führt das Wechseln des Feldoperators und anschließendes Aktualisieren der Seite zu einem Fehler ([#6781](https://github.com/nocobase/nocobase/pull/6781)) von @zhangzhonghe

- **[database]**
  - Fehler vermieden, wenn der Datentyp kein String ist ([#6797](https://github.com/nocobase/nocobase/pull/6797)) von @mytharcher

  - unavailableActions zu SQL-Sammlung und Ansichtssammlung hinzugefügt ([#6765](https://github.com/nocobase/nocobase/pull/6765)) von @katherinehhh

- **[create-nocobase-app]** MariaDB-Problem vorübergehend durch Downgrade auf 2.5.6 behoben ([#6762](https://github.com/nocobase/nocobase/pull/6762)) von @chenos

- **[Authentifizierung]** Ändern des Authentifikatornamens nicht erlaubt ([#6808](https://github.com/nocobase/nocobase/pull/6808)) von @2013xile

- **[Vorlagendruck]** Korrektur: Berechtigungsvalidierungslogik korrigiert, um unbefugte Aktionen zu verhindern. von @sheldon66

- **[Dateispeicher: S3(Pro)]** Ablauf der Zugriffs-URL ungültig von @jiannx

- **[Block: Baum]** Nach Verbindung über einen Fremdschlüssel führt das Klicken zum Auslösen der Filterung zu leeren Filterbedingungen von @zhangzhonghe
