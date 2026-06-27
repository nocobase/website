---
title: "NocoBase wöchentliche Updates: Blöcke unterstützen Verknüpfungsregeln"
description: "Die Updates dieser Woche umfassen: Blöcke unterstützen Verknüpfungsregeln für dynamische Anzeige, Unterstützung von Antwortvariablen in Erfolgsmeldungen benutzerdefinierter Anfrageaktionen und mehr."
---

Fasse die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen findest du in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/en/blog/v1.6.23)

*Veröffentlichungsdatum: 2025-04-23*

#### 🚀 Verbesserungen

- **[cli]** Optimierung der internen Logik des `nocobase upgrade`-Befehls ([#6754](https://github.com/nocobase/nocobase/pull/6754)) von @chenos
- **[Vorlagendruck]** Datenquellen-Aktionssteuerung durch clientseitige rollenbasierte Zugriffskontrolle ersetzt. von @sheldon66

#### 🐛 Fehlerbehebungen

- **[cli]** Automatische Aktualisierung von package.json beim Upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) von @chenos
- **[client]**

  - Fehlender Filter für bereits verknüpfte Daten beim Hinzufügen von Verknüpfungsdaten ([#6750](https://github.com/nocobase/nocobase/pull/6750)) von @katherinehhh
  - Fehlende 'aktueller Datensatz'-Verknüpfungsregel für die Schaltfläche 'Unterelement hinzufügen' in der Baumtabelle ([#6752](https://github.com/nocobase/nocobase/pull/6752)) von @katherinehhh
- **[Aktion: Datensätze importieren]** Behebung der Import- und Exportausnahmen, die beim Setzen von Feldberechtigungen auftreten. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) von @aaaaaajie
- **[Block: Gantt]** Überlappende Monate in der Kalenderkopfzeile der Monatsansicht im Gantt-Diagramm-Block ([#6753](https://github.com/nocobase/nocobase/pull/6753)) von @katherinehhh
- **[Aktion: Datensätze exportieren Pro]**

  - Pro-Export-Schaltfläche verliert Filterparameter nach dem Sortieren einer Tabellenspalte von @katherinehhh
  - Behebung der Import- und Exportausnahmen, die beim Setzen von Feldberechtigungen auftreten. von @aaaaaajie
- **[Dateispeicher: S3(Pro)]** Behebung der Antwortdaten der hochgeladenen Datei von @mytharcher
- **[Workflow: Genehmigung]** Behebung des Vorladens von Verknüpfungsfeldern für Datensätze von @mytharcher

### [v1.6.24](https://www.nocobase.com/en/blog/v1.6.24)

*Veröffentlichungsdatum: 2025-04-24*

#### 🚀 Verbesserungen

- **[client]** Anpassung der Upload-Nachricht ([#6757](https://github.com/nocobase/nocobase/pull/6757)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**
  - Nur Exportaktion in Ansichtssammlung wird unterstützt, wenn writableView false ist ([#6763](https://github.com/nocobase/nocobase/pull/6763)) von @katherinehhh
  - Unerwartete Erstellung von Verknüpfungsdaten beim Anzeigen eines Verknüpfungsfeldes in einem Unterformular/einer Untertabelle im Erstellungsformular ([#6727](https://github.com/nocobase/nocobase/pull/6727)) von @katherinehhh
  - Falsche Datenabfrage für viele-zu-viele-Array-Felder aus verknüpften Tabellen in Formularen ([#6744](https://github.com/nocobase/nocobase/pull/6744)) von @2013xile

### [v1.6.25](https://www.nocobase.com/en/blog/v1.6.25)

*Veröffentlichungsdatum: 2025-04-29*

#### 🎉 Neue Funktionen

- **[undefined]** CI für die Veröffentlichung des Lizenz-Kits hinzugefügt ([#6786](https://github.com/nocobase/nocobase/pull/6786)) von @jiannx
- **[Datenvisualisierung: ECharts]** "Y-Achse umkehren"-Einstellung für Balkendiagramme hinzugefügt von @2013xile

#### 🚀 Verbesserungen

- **[utils]** Erhöhung der Höhe der Filterbutton-Feldliste und Sortierung/Kategorisierung der Felder ([#6779](https://github.com/nocobase/nocobase/pull/6779)) von @zhangzhonghe
- **[client]** Optimierung des Stils der Untertabelle-Hinzufügen-Schaltfläche und Ausrichtung des Paginators in derselben Zeile ([#6790](https://github.com/nocobase/nocobase/pull/6790)) von @katherinehhh
- **[Dateimanager]** OSS-Timeout-Option hinzugefügt, Standard 10 Minuten ([#6795](https://github.com/nocobase/nocobase/pull/6795)) von @mytharcher
- **[Passwortrichtlinie]** Standard-Passwortablauf auf nie ablaufen geändert von @2013xile
- **[WeCom]** Priorisierung der geschäftlichen E-Mail vor der privaten E-Mail beim Aktualisieren der Benutzer-E-Mail von @2013xile

#### 🐛 Fehlerbehebungen

- **[client]**

  - Im Collapse-Block sollte das Klicken auf die Lösch-Schaltfläche im Suchfeld für Verknüpfungsfelder den Datenbereich nicht löschen ([#6782](https://github.com/nocobase/nocobase/pull/6782)) von @zhangzhonghe
  - Verknüpfungsfeld sendet keine Daten, wenn ein Feld aus der verknüpften Sammlung angezeigt wird ([#6798](https://github.com/nocobase/nocobase/pull/6798)) von @katherinehhh
  - Verschieben von Menüs vor oder nach Seiten-Tabs verbieten ([#6777](https://github.com/nocobase/nocobase/pull/6777)) von @zhangzhonghe
  - Tabellenblock zeigt doppelte Daten beim Filtern an ([#6792](https://github.com/nocobase/nocobase/pull/6792)) von @zhangzhonghe
  - Im Filterformular führt das Wechseln des Feldoperators und anschließende Aktualisieren der Seite zu einem Fehler ([#6781](https://github.com/nocobase/nocobase/pull/6781)) von @zhangzhonghe
- **[Datenbank]**

  - Vermeidung von Fehlern, wenn der Datentyp kein String ist ([#6797](https://github.com/nocobase/nocobase/pull/6797)) von @mytharcher
  - Hinzufügen von unavailableActions zu SQL-Sammlungen und Ansichtssammlungen ([#6765](https://github.com/nocobase/nocobase/pull/6765)) von @katherinehhh
- **[create-nocobase-app]** Vorübergehende Behebung des MariaDB-Problems durch Downgrade auf 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) von @chenos
- **[Authentifizierung]** Ändern des Authentifikatornamens verbieten ([#6808](https://github.com/nocobase/nocobase/pull/6808)) von @2013xile
- **[Vorlagendruck]** Korrektur der Berechtigungsvalidierungslogik, um unbefugte Aktionen zu verhindern. von @sheldon66
- **[Dateispeicher: S3(Pro)]** Zugriffs-URL-Ablauf ungültig von @jiannx
- **[Block: Baum]** Nach Verbindung über einen Fremdschlüssel führt das Klicken zum Auslösen des Filters zu leeren Filterbedingungen von @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.22](https://www.nocobase.com/en/blog/v1.7.0-beta.22)

*Veröffentlichungsdatum: 2025-04-24*

#### 🚀 Verbesserungen

- **[cli]** Optimierung der internen Logik des `nocobase upgrade`-Befehls ([#6754](https://github.com/nocobase/nocobase/pull/6754)) von @chenos

#### 🐛 Fehlerbehebungen

- **[client]** Anzeigeproblem mit Verknüpfungsregeln in mehrstufigen Verknüpfungsdaten ([#6755](https://github.com/nocobase/nocobase/pull/6755)) von @katherinehhh

### [v1.7.0-beta.23](https://www.nocobase.com/en/blog/v1.7.0-beta.23)

*Veröffentlichungsdatum: 2025-04-24*

#### 🎉 Neue Funktionen

- **[Aktion: Benutzerdefinierte Anfrage]** Unterstützung von Antwortvariablen in der Erfolgsmeldung von benutzerdefinierten Anfrageaktionen ([#6694](https://github.com/nocobase/nocobase/pull/6694)) von @katherinehhh

#### 🚀 Verbesserungen

- **[client]** Anpassung der Upload-Nachricht ([#6757](https://github.com/nocobase/nocobase/pull/6757)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**
  - Falsche Datenabfrage für viele-zu-viele-Array-Felder aus verknüpften Tabellen in Formularen ([#6744](https://github.com/nocobase/nocobase/pull/6744)) von @2013xile
  - Nur Exportaktion in Ansichtssammlung wird unterstützt, wenn writableView false ist ([#6763](https://github.com/nocobase/nocobase/pull/6763)) von @katherinehhh
  - Unerwartete Erstellung von Verknüpfungsdaten beim Anzeigen eines Verknüpfungsfeldes in einem Unterformular/einer Untertabelle im Erstellungsformular ([#6727](https://github.com/nocobase/nocobase/pull/6727)) von @katherinehhh

### [v1.7.0-beta.24](https://www.nocobase.com/en/blog/v1.7.0-beta.24)

*Veröffentlichungsdatum: 2025-04-25*

#### 🎉 Neue Funktionen

- **[client]** Unterstützung der Konfiguration von Verknüpfungsregeln in Blöcken für dynamisches Ein-/Ausblenden ([#6636](https://github.com/nocobase/nocobase/pull/6636)) von @katherinehhh

#### 🚀 Verbesserungen

- **[client]** Beibehaltung der Referenzvorlagenfunktionalität ([#6743](https://github.com/nocobase/nocobase/pull/6743)) von @gchust
- **[Datenvisualisierung]** Erweiterte API für die Feldinterface-Konfiguration hinzugefügt ([#6742](https://github.com/nocobase/nocobase/pull/6742)) von @2013xile

#### 🐛 Fehlerbehebungen

- **[create-nocobase-app]** Vorübergehende Behebung des MariaDB-Problems durch Downgrade auf 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) von @chenos
- **[Datenbank]** Hinzufügen von unavailableActions zu SQL-Sammlungen und Ansichtssammlungen ([#6765](https://github.com/nocobase/nocobase/pull/6765)) von @katherinehhh
- **[client]** Problem mit dem URL-Abfrageparameter-Operator ([#6770](https://github.com/nocobase/nocobase/pull/6770)) von @katherinehhh
- **[Block: Aktionspanel]** Aktionspanel-Symbol fehlt, wenn nur-Symbol aktiviert ist ([#6773](https://github.com/nocobase/nocobase/pull/6773)) von @katherinehhh
- **[Workflow: Datumsberechnungsknoten]** Fehlerbehebung in älteren Browsern ohne `Intl`-API von @mytharcher

### [v1.7.0-beta.25](https://www.nocobase.com/en/blog/v1.7.0-beta.25)

*Veröffentlichungsdatum: 2025-04-28*

#### 🎉 Neue Funktionen

- **[Dateimanager]** Funktion: `getFileStream`-API für Datei-Streaming-Unterstützung hinzugefügt. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) von @sheldon66

#### 🚀 Verbesserungen

- **[client]** Schaltflächentitel mit Tooltip beim Hovern über Aktionssymbole anzeigen ([#6761](https://github.com/nocobase/nocobase/pull/6761)) von @katherinehhh
- **[WeCom]** Priorisierung der geschäftlichen E-Mail vor der privaten E-Mail beim Aktualisieren der Benutzer-E-Mail von @2013xile

#### 🐛 Fehlerbehebungen

- **[Dateispeicher: S3(Pro)]** Zugriffs-URL-Ablauf ungültig von @jiannx
- **[Vorlagendruck]** Korrektur der Berechtigungsvalidierungslogik, um unbefugte Aktionen zu verhindern. von @sheldon66
- **[Block: Baum]** Nach Verbindung über einen Fremdschlüssel führt das Klicken zum Auslösen des Filters zu leeren Filterbedingungen von @zhangzhonghe

### [v1.7.0-beta.26](https://www.nocobase.com/en/blog/v1.7.0-beta.26)

*Veröffentlichungsdatum: 2025-04-28*

#### 🎉 Neue Funktionen

- **[undefined]** CI für die Veröffentlichung des Lizenz-Kits hinzugefügt ([#6786](https://github.com/nocobase/nocobase/pull/6786)) von @jiannx

#### 🚀 Verbesserungen

- **[utils]** Erhöhung der Höhe der Filterbutton-Feldliste und Sortierung/Kategorisierung der Felder ([#6779](https://github.com/nocobase/nocobase/pull/6779)) von @zhangzhonghe

#### 🐛 Fehlerbehebungen

- **[client]**
  - Im Collapse-Block sollte das Klicken auf die Lösch-Schaltfläche im Suchfeld für Verknüpfungsfelder den Datenbereich nicht löschen ([#6782](https://github.com/nocobase/nocobase/pull/6782)) von @zhangzhonghe
  - Im Filterformular führt das Wechseln des Feldoperators und anschließende Aktualisieren der Seite zu einem Fehler ([#6781](https://github.com/nocobase/nocobase/pull/6781)) von @zhangzhonghe
  - Tabellenblock zeigt doppelte Daten beim Filtern an ([#6792](https://github.com/nocobase/nocobase/pull/6792)) von @zhangzhonghe
  - Ausrichtungsproblem der Schaltfläche 'Unterelement hinzufügen' in der Baumtabelle ([#6791](https://github.com/nocobase/nocobase/pull/6791)) von @katherinehhh
  - Verschieben von Menüs vor oder nach Seiten-Tabs verbieten ([#6777](https://github.com/nocobase/nocobase/pull/6777)) von @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/en/blog/v1.7.0-alpha.12)

*Veröffentlichungsdatum: 2025-04-24*

#### 🚀 Verbesserungen

- **[cli]** Optimierung der internen Logik des `nocobase upgrade`-Befehls ([#6754](https://github.com/nocobase/nocobase/pull/6754)) von @chenos
- **[create-nocobase-app]** Upgrade von Abhängigkeiten und Entfernung der SQLite-Unterstützung ([#6708](https://github.com/nocobase/nocobase/pull/6708)) von @chenos
- **[Mobil]** Optimierung der Öffnungsgeschwindigkeit des mobilen Datumsauswahl-Popups ([#6735](https://github.com/nocobase/nocobase/pull/6735)) von @zhangzhonghe
- **[Block: Vorlage]** Unterstützung der Konvertierung von Vorlagenblöcken in normale Blöcke ([#6662](https://github.com/nocobase/nocobase/pull/6662)) von @gchust
- **[Dateimanager]** Bereitstellung der utils-API ([#6705](https://github.com/nocobase/nocobase/pull/6705)) von @mytharcher
- **[Theme-Editor]** Ermöglicht das Festlegen der Seitenleistenbreite in der Theme-Konfiguration ([#6720](https://github.com/nocobase/nocobase/pull/6720)) von @chenos
- **[Workflow]** Hinzufügen von Datumstypen zum Satz von Variablentypen ([#6717](https://github.com/nocobase/nocobase/pull/6717)) von @mytharcher
- **[Vorlagendruck]** Datenquellen-Aktionssteuerung durch clientseitige rollenbasierte Zugriffskontrolle ersetzt. von @sheldon66

#### 🐛 Fehlerbehebungen

- **[client]**

  - Anzeigeproblem mit Verknüpfungsregeln in mehrstufigen Verknüpfungsdaten ([#6755](https://github.com/nocobase/nocobase/pull/6755)) von @katherinehhh
  - Fehlende 'aktueller Datensatz'-Verknüpfungsregel für die Schaltfläche 'Unterelement hinzufügen' in der Baumtabelle ([#6752](https://github.com/nocobase/nocobase/pull/6752)) von @katherinehhh
  - Problem mit dem Aktualisieren von Datenblöcken nach erfolgreicher Übermittlung ([#6748](https://github.com/nocobase/nocobase/pull/6748)) von @zhangzhonghe
  - Das Problem, dass die Einklappschaltfläche im linken Menü durch das Workflow-Popup-Fenster verdeckt wird ([#6733](https://github.com/nocobase/nocobase/pull/6733)) von @zhangzhonghe
  - Das Problem, dass Symbole in der mobilen oberen Navigationsleiste schwer zu löschen sind ([#6734](https://github.com/nocobase/nocobase/pull/6734)) von @zhangzhonghe
  - Falsche Wertanzeige für "Indexspalte aktivieren" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) von @katherinehhh
  - Datums-/Zeitfeldbedingung funktioniert nicht in Verknüpfungsregeln ([#6728](https://github.com/nocobase/nocobase/pull/6728)) von @katherinehhh
  - Fehlende Aktionsoptionseinschränkungen beim erneuten Öffnen von Verknüpfungsregeln ([#6723](https://github.com/nocobase/nocobase/pull/6723)) von @katherinehhh
  - Pflichtfelder, die durch Verknüpfungsregeln ausgeblendet werden, sollten die Formularübermittlung nicht beeinflussen ([#6709](https://github.com/nocobase/nocobase/pull/6709)) von @zhangzhonghe
  - Fehlender Filter für bereits verknüpfte Daten beim Hinzufügen von Verknüpfungsdaten ([#6750](https://github.com/nocobase/nocobase/pull/6750)) von @katherinehhh
- **[Server]** appVersion wird von create-migration falsch generiert ([#6740](https://github.com/nocobase/nocobase/pull/6740)) von @chenos
- **[cli]** Automatische Aktualisierung von package.json beim Upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) von @chenos
- **[build]** Behebung eines Fehlers im tar-Befehl ([#6722](https://github.com/nocobase/nocobase/pull/6722)) von @mytharcher
- **[Block: Gantt]** Überlappende Monate in der Kalenderkopfzeile der Monatsansicht im Gantt-Diagramm-Block ([#6753](https://github.com/nocobase/nocobase/pull/6753)) von @katherinehhh
- **[Aktion: Datensätze importieren]** Behebung der Import- und Exportausnahmen, die beim Setzen von Feldberechtigungen auftreten. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) von @aaaaaajie
- **[Block: Vorlage]** Blockvorlagen können in MySQL-Umgebung nicht verwendet werden ([#6726](https://github.com/nocobase/nocobase/pull/6726)) von @gchust
- **[Workflow]** Behebung eines Fehlers bei der Ausführung eines geplanten Ereignisses in einem Unterworkflow ([#6721](https://github.com/nocobase/nocobase/pull/6721)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Unterstützung der Ausführung im Mehrfachdatensatzmodus von @mytharcher
- **[Aktion: Datensätze exportieren Pro]**

  - Behebung der Import- und Exportausnahmen, die beim Setzen von Feldberechtigungen auftreten. von @aaaaaajie
  - Pro-Export-Schaltfläche verliert Filterparameter nach dem Sortieren einer Tabellenspalte von @katherinehhh
- **[Dateispeicher: S3(Pro)]**

  - Behebung der Antwortdaten der hochgeladenen Datei von @mytharcher
  - Hinzufügen der multer-Logik für serverseitige Uploads von @mytharcher
- **[Workflow: Genehmigung]** Behebung des Vorladens von Verknüpfungsfeldern für Datensätze von @mytharcher
