---
title: "NocoBase wöchentliche Updates: Optimierung der Spalten und Operationen von Tabellenblöcken"
description: "Die Updates dieser Woche umfassen: Unterstützung zum Ausblenden der Indexspalte in Tabellenblöcken, Konfigurieren von auswählbaren Feldoptionen in Verknüpfungsregeln und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.2](https://www.nocobase.com/en/blog/v1.6.2)

*Veröffentlichungsdatum: 2025-03-12*

#### 🐛 Fehlerbehebungen

- **[Client]** Datumsfeld-Bereichsauswahl schließt das maximale Datum aus ([#6418](https://github.com/nocobase/nocobase/pull/6418)) von @katherinehhh
- **[Benachrichtigung: In-App-Nachricht]** Vermeidet, dass eine falsche Empfängerkonfiguration alle Benutzer abfragt ([#6424](https://github.com/nocobase/nocobase/pull/6424)) von @sheldon66
- **[Workflow: Manueller Knoten]**

  - Migration behoben, die Tabellenpräfix und Schema-Logik vermisste ([#6425](https://github.com/nocobase/nocobase/pull/6425)) von @mytharcher
  - Versionslimit der Migration auf `<1.7.0` geändert ([#6430](https://github.com/nocobase/nocobase/pull/6430)) von @mytharcher

### [v1.6.3](https://www.nocobase.com/en/blog/v1.6.3)

*Veröffentlichungsdatum: 2025-03-14*

#### 🎉 Neue Funktionen

- **[WeCom]** Ermöglicht das Festlegen eines benutzerdefinierten Tooltips für den Anmeldebutton von @2013xile

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Sonderzeichen in Bild-URLs behoben, die dazu führten, dass Bilder nicht angezeigt wurden ([#6459](https://github.com/nocobase/nocobase/pull/6459)) von @mytharcher
  - Falsche Seitenzahl beim Hinzufügen von Daten nach Änderung der Seitengröße in einer Untertabelle ([#6437](https://github.com/nocobase/nocobase/pull/6437)) von @katherinehhh
  - Der Logo-Stil stimmt nicht mit dem vorherigen überein ([#6444](https://github.com/nocobase/nocobase/pull/6444)) von @zhangzhonghe
- **[Workflow: Manueller Knoten]** Fehler in der Migration behoben ([#6445](https://github.com/nocobase/nocobase/pull/6445)) von @mytharcher
- **[Datenvisualisierung]** Entfernte Felder erscheinen beim Hinzufügen benutzerdefinierter Filterfelder ([#6450](https://github.com/nocobase/nocobase/pull/6450)) von @2013xile
- **[Dateimanager]** Einige Probleme des Dateimanagers behoben ([#6436](https://github.com/nocobase/nocobase/pull/6436)) von @mytharcher
- **[Aktion: Benutzerdefinierte Anfrage]** Fehler bei der serverseitigen Berechtigungsvalidierung für benutzerdefinierte Anfragen ([#6438](https://github.com/nocobase/nocobase/pull/6438)) von @katherinehhh
- **[Datenquellen-Manager]** Wechsel der Datenquelle in der Rollenverwaltung lädt keine entsprechenden Collections ([#6431](https://github.com/nocobase/nocobase/pull/6431)) von @katherinehhh
- **[Aktion: Stapelbearbeitung]** Behoben, dass Workflows bei der Stapelbearbeitungsübermittlung nicht ausgelöst werden konnten ([#6440](https://github.com/nocobase/nocobase/pull/6440)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** `only` im E2E-Testfall entfernt von @mytharcher
- **[Workflow: Genehmigung]**

  - Assoziationsdaten werden im Genehmigungsformular nicht angezeigt, behoben von @mytharcher
  - Fehler beim Genehmigen in einer externen Datenquelle behoben von @mytharcher

### [v1.6.4](https://www.nocobase.com/en/blog/v1.6.4)

*Veröffentlichungsdatum: 2025-03-15*

#### 🎉 Neue Funktionen

- **[Client]** Kaskadenauswahl-Komponente um Datenbereichseinstellung erweitert ([#6386](https://github.com/nocobase/nocobase/pull/6386)) von @Cyx649312038

#### 🚀 Verbesserungen

- **[Utils]** `md5` in die Utils verschoben ([#6468](https://github.com/nocobase/nocobase/pull/6468)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]** Im Baumblock werden die Daten im Datenblock nicht gelöscht, wenn die Auswahl aufgehoben wird ([#6460](https://github.com/nocobase/nocobase/pull/6460)) von @zhangzhonghe
- **[Dateimanager]** Löschen von in S3 gespeicherten Dateien nicht möglich ([#6467](https://github.com/nocobase/nocobase/pull/6467)) von @chenos
- **[Workflow]** Schaltfläche "Workflow-Einstellungen binden" aus der Datenauswahl entfernt ([#6455](https://github.com/nocobase/nocobase/pull/6455)) von @mytharcher
- **[Dateispeicher: S3(Pro)]]** Problem mit nicht zugänglichen signierten S3 Pro URLs behoben von @chenos
- **[Workflow: Genehmigung]** Seitenabsturz vermieden, wenn kein Antragsteller in der Genehmigungsprozess-Tabelle vorhanden ist von @mytharcher

### [v1.6.5](https://www.nocobase.com/en/blog/v1.6.5)

*Veröffentlichungsdatum: 2025-03-17*

#### 🚀 Verbesserungen

- **[Dateimanager]** Vereinfachung der Logik und API zur Generierung von Datei-URLs ([#6472](https://github.com/nocobase/nocobase/pull/6472)) von @mytharcher
- **[Dateispeicher: S3(Pro)]** Auf eine einfachere Methode zur Generierung von Datei-URLs umgestellt von @mytharcher
- **[Backup-Manager]** Wiederherstellung von Backups zwischen Pre-Release- und Release-Version derselben Version erlaubt von @gchust

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Rich-Text-Feld löscht Daten bei Übermittlung nicht ([#6486](https://github.com/nocobase/nocobase/pull/6486)) von @katherinehhh
  - Die Farbe der Symbole in der oberen rechten Ecke der Seite ändert sich nicht mit dem Theme ([#6482](https://github.com/nocobase/nocobase/pull/6482)) von @zhangzhonghe
  - Klicken der Reset-Taste im Filterformular kann die Filterbedingungen des Grid-Kartenblocks nicht löschen ([#6475](https://github.com/nocobase/nocobase/pull/6475)) von @zhangzhonghe
- **[Workflow: Manueller Knoten]**

  - Migration behoben ([#6484](https://github.com/nocobase/nocobase/pull/6484)) von @mytharcher
  - Migrationsname geändert, um erneute Ausführung zu gewährleisten ([#6487](https://github.com/nocobase/nocobase/pull/6487)) von @mytharcher
  - Workflow-Titelfeld im Filter behoben ([#6480](https://github.com/nocobase/nocobase/pull/6480)) von @mytharcher
  - Migrationsfehler behoben, wenn die ID-Spalte nicht existiert ([#6470](https://github.com/nocobase/nocobase/pull/6470)) von @chenos
  - Synchronisierung der Collection aus Feldern vermieden ([#6478](https://github.com/nocobase/nocobase/pull/6478)) von @mytharcher
- **[Workflow: Aggregatknoten]** Rundung bei null Ergebnis behoben ([#6473](https://github.com/nocobase/nocobase/pull/6473)) von @mytharcher
- **[Workflow]** Aufgaben nicht zählen, wenn Workflow gelöscht wurde ([#6474](https://github.com/nocobase/nocobase/pull/6474)) von @mytharcher
- **[Backup-Manager]** Server kann nicht gestartet werden, wenn Standard-Backup-Einstellungen fehlen von @gchust
- **[Workflow: Genehmigung]**

  - Fehler im Dateiassoziationsfeld im Prozessformular behoben von @mytharcher
  - Aufgabenanzahl basierend auf Hooks behoben von @mytharcher

### [v1.6.6](https://www.nocobase.com/en/blog/v1.6.6)

*Veröffentlichungsdatum: 2025-03-18*

#### 🎉 Neue Funktionen

- **[Client]** Unterstützung langer Textfelder als Titelfelder für Assoziationsfelder ([#6495](https://github.com/nocobase/nocobase/pull/6495)) von @katherinehhh
- **[Workflow: Aggregatknoten]** Unterstützung zur Konfiguration der Genauigkeit für Aggregationsergebnisse ([#6491](https://github.com/nocobase/nocobase/pull/6491)) von @mytharcher

#### 🚀 Verbesserungen

- **[Dateispeicher: S3(Pro)]** Text 'Access URL Base' in 'Base URL' geändert von @zhangzhonghe

#### 🐛 Fehlerbehebungen

- **[Evaluatoren]** Dezimalstellen für Rundung auf 9 zurückgesetzt ([#6492](https://github.com/nocobase/nocobase/pull/6492)) von @mytharcher
- **[Dateimanager]** URL kodieren ([#6497](https://github.com/nocobase/nocobase/pull/6497)) von @chenos
- **[Datenquelle: Haupt]** Erstellen einer MySQL-Ansicht nicht möglich ([#6477](https://github.com/nocobase/nocobase/pull/6477)) von @aaaaaajie
- **[Workflow]** Alte Aufgabenanzahl nach Löschen des Workflows behoben ([#6493](https://github.com/nocobase/nocobase/pull/6493)) von @mytharcher
- **[NocoBase einbetten]** Seite zeigt leeren Bildschirm von @zhangzhonghe
- **[Backup-Manager]**

  - Hochgeladene Dateien wurden beim Erstellen einer Sub-App aus einer Backup-Vorlage nicht wiederhergestellt von @gchust
  - Fehler bei der MySQL-Datenbankwiederherstellung aufgrund von GTID-Set-Überlappung von @gchust
- **[Workflow: Genehmigung]**

  - Zurückgegebene Genehmigung als "zu erledigen" geändert von @mytharcher
  - Aktionsbutton in der Prozesstabelle fehlte, behoben von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.2](https://www.nocobase.com/en/blog/v1.7.0-beta.2)

*Veröffentlichungsdatum: 2025-03-13*

#### 🎉 Neue Funktionen

- **[Client]**

  - Tabellenblock unterstützt das Ausblenden der Indexspalte (standardmäßig sichtbar) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) von @katherinehhh
  - Unterstützt die Konfiguration auswählbarer Feldoptionen in Verknüpfungsregeln ([#6338](https://github.com/nocobase/nocobase/pull/6338)) von @katherinehhh
  - Unterstützt Datumsbereichskonfiguration (min/max) für Zeitfelder in Verknüpfungsregeln ([#6356](https://github.com/nocobase/nocobase/pull/6356)) von @katherinehhh
- **[Block: Aktionspanel]** Unterstützt Zeilenumbruch für Aktions-Titel im Aktionspanel ([#6433](https://github.com/nocobase/nocobase/pull/6433)) von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Falsche Seitenzahl beim Hinzufügen von Daten nach Änderung der Seitengröße in einer Untertabelle ([#6437](https://github.com/nocobase/nocobase/pull/6437)) von @katherinehhh
  - Der Logo-Stil stimmt nicht mit dem vorherigen überein ([#6444](https://github.com/nocobase/nocobase/pull/6444)) von @zhangzhonghe
  - Mehrfachauswahl-Feldwert ändert sich und Optionen gehen beim Löschen von Untertabelleneinträgen verloren ([#6405](https://github.com/nocobase/nocobase/pull/6405)) von @katherinehhh
  - Datumsfeld-Bereichsauswahl schließt das maximale Datum aus ([#6418](https://github.com/nocobase/nocobase/pull/6418)) von @katherinehhh
  - Bei Verwendung des '$anyOf'-Operators ist die Verknüpfungsregel ungültig ([#6415](https://github.com/nocobase/nocobase/pull/6415)) von @zhangzhonghe
  - Daten in Popup-Fenstern, die über Link-Buttons geöffnet wurden, werden nicht aktualisiert ([#6411](https://github.com/nocobase/nocobase/pull/6411)) von @zhangzhonghe
- **[Aktion: Stapelbearbeitung]** Behoben, dass Workflows bei der Stapelbearbeitungsübermittlung nicht ausgelöst werden konnten ([#6440](https://github.com/nocobase/nocobase/pull/6440)) von @mytharcher
- **[Datenvisualisierung]** Entfernte Felder erscheinen beim Hinzufügen benutzerdefinierter Filterfelder ([#6450](https://github.com/nocobase/nocobase/pull/6450)) von @2013xile
- **[Datenquellen-Manager]** Wechsel der Datenquelle in der Rollenverwaltung lädt keine entsprechenden Collections ([#6431](https://github.com/nocobase/nocobase/pull/6431)) von @katherinehhh
- **[Aktion: Benutzerdefinierte Anfrage]** Fehler bei der serverseitigen Berechtigungsvalidierung für benutzerdefinierte Anfragen ([#6438](https://github.com/nocobase/nocobase/pull/6438)) von @katherinehhh
- **[Dateimanager]** Einige Probleme des Dateimanagers behoben ([#6436](https://github.com/nocobase/nocobase/pull/6436)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]**

  - Vermeidet, dass eine falsche Empfängerkonfiguration alle Benutzer abfragt ([#6424](https://github.com/nocobase/nocobase/pull/6424)) von @sheldon66
  - Unterscheidet die Hintergrundfarbe der In-App-Nachrichtenliste von den Nachrichtenkarten, um die visuelle Hierarchie und Lesbarkeit zu verbessern ([#6417](https://github.com/nocobase/nocobase/pull/6417)) von @sheldon66
- **[Workflow: Manueller Knoten]**

  - Versionslimit der Migration auf `<1.7.0` geändert ([#6430](https://github.com/nocobase/nocobase/pull/6430)) von @mytharcher
  - Migration behoben, die Tabellenpräfix und Schema-Logik vermisste ([#6425](https://github.com/nocobase/nocobase/pull/6425)) von @mytharcher

### [v1.7.0-beta.3](https://www.nocobase.com/en/blog/v1.7.0-beta.3)

*Veröffentlichungsdatum: 2025-03-14*

#### 🎉 Neue Funktionen

- **[WeCom]** Ermöglicht das Festlegen eines benutzerdefinierten Tooltips für den Anmeldebutton von @2013xile

#### 🚀 Verbesserungen

- **[Datenvisualisierung]** Veraltetes `x-designer` durch `x-settings` ersetzt ([#6442](https://github.com/nocobase/nocobase/pull/6442)) von @2013xile

#### 🐛 Fehlerbehebungen

- **[Client]** Sonderzeichen in Bild-URLs behoben, die dazu führten, dass Bilder nicht angezeigt wurden ([#6459](https://github.com/nocobase/nocobase/pull/6459)) von @mytharcher
- **[Workflow: Manueller Knoten]** Fehler in der Migration behoben ([#6445](https://github.com/nocobase/nocobase/pull/6445)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** `only` im E2E-Testfall entfernt von @mytharcher
- **[Workflow: Genehmigung]**

  - Fehler beim Genehmigen in einer externen Datenquelle behoben von @mytharcher
  - Assoziationsdaten werden im Genehmigungsformular nicht angezeigt, behoben von @mytharcher

### [v1.7.0-beta.4](https://www.nocobase.com/en/blog/v1.7.0-beta.4)

*Veröffentlichungsdatum: 2025-03-15*

#### 🎉 Neue Funktionen

- **[Client]** Kaskadenauswahl-Komponente um Datenbereichseinstellung erweitert ([#6386](https://github.com/nocobase/nocobase/pull/6386)) von @Cyx649312038

#### 🚀 Verbesserungen

- **[Utils]** `md5` in die Utils verschoben ([#6468](https://github.com/nocobase/nocobase/pull/6468)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]** Im Baumblock werden die Daten im Datenblock nicht gelöscht, wenn die Auswahl aufgehoben wird ([#6460](https://github.com/nocobase/nocobase/pull/6460)) von @zhangzhonghe
- **[Dateimanager]** Löschen von in S3 gespeicherten Dateien nicht möglich ([#6467](https://github.com/nocobase/nocobase/pull/6467)) von @chenos
- **[Workflow]** Schaltfläche "Workflow-Einstellungen binden" aus der Datenauswahl entfernt ([#6455](https://github.com/nocobase/nocobase/pull/6455)) von @mytharcher
- **[Dateispeicher: S3(Pro)]** Problem mit nicht zugänglichen signierten S3 Pro URLs behoben von @chenos
- **[Workflow: Genehmigung]** Seitenabsturz vermieden, wenn kein Antragsteller in der Genehmigungsprozess-Tabelle vorhanden ist von @mytharcher

### [v1.7.0-beta.5](https://www.nocobase.com/en/blog/v1.7.0-beta.5)

*Veröffentlichungsdatum: 2025-03-18*

#### 🎉 Neue Funktionen

- **[Client]** Unterstützt Inline-Tabellenaktionen im Nur-Symbol-Modus, zeigt Aktionsnamen beim Überfahren mit der Maus an ([#6451](https://github.com/nocobase/nocobase/pull/6451)) von @katherinehhh

#### 🚀 Verbesserungen

- **[Dateimanager]** Vereinfachung der Logik und API zur Generierung von Datei-URLs ([#6472](https://github.com/nocobase/nocobase/pull/6472)) von @mytharcher
- **[Dateispeicher: S3(Pro)]**

  - Text 'Access URL Base' in 'Base URL' geändert von @zhangzhonghe
  - Auf eine einfachere Methode zur Generierung von Datei-URLs umgestellt von @mytharcher
- **[Backup-Manager]** Wiederherstellung von Backups zwischen Pre-Release- und Release-Version derselben Version erlaubt von @gchust

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Die Farbe der Symbole in der oberen rechten Ecke der Seite ändert sich nicht mit dem Theme ([#6482](https://github.com/nocobase/nocobase/pull/6482)) von @zhangzhonghe
  - Rich-Text-Feld löscht Daten bei Übermittlung nicht ([#6486](https://github.com/nocobase/nocobase/pull/6486)) von @katherinehhh
  - Klicken der Reset-Taste im Filterformular kann die Filterbedingungen des Grid-Kartenblocks nicht löschen ([#6475](https://github.com/nocobase/nocobase/pull/6475)) von @zhangzhonghe
- **[Workflow: Manueller Knoten]**

  - Migration behoben ([#6484](https://github.com/nocobase/nocobase/pull/6484)) von @mytharcher
  - Migrationsname geändert, um erneute Ausführung zu gewährleisten ([#6487](https://github.com/nocobase/nocobase/pull/6487)) von @mytharcher
  - Workflow-Titelfeld im Filter behoben ([#6480](https://github.com/nocobase/nocobase/pull/6480)) von @mytharcher
  - Synchronisierung der Collection aus Feldern vermieden ([#6478](https://github.com/nocobase/nocobase/pull/6478)) von @mytharcher
  - Migrationsfehler behoben, wenn die ID-Spalte nicht existiert ([#6470](https://github.com/nocobase/nocobase/pull/6470)) von @chenos
- **[Workflow]** Aufgaben nicht zählen, wenn Workflow gelöscht wurde ([#6474](https://github.com/nocobase/nocobase/pull/6474)) von @mytharcher
- **[Workflow: Aggregatknoten]** Rundung bei null Ergebnis behoben ([#6473](https://github.com/nocobase/nocobase/pull/6473)) von @mytharcher
- **[NocoBase einbetten]** Seite zeigt leeren Bildschirm von @zhangzhonghe
- **[Backup-Manager]** Server kann nicht gestartet werden, wenn Standard-Backup-Einstellungen fehlen von @gchust
- **[Workflow: Genehmigung]**

  - Fehler im Dateiassoziationsfeld im Prozessformular behoben von @mytharcher
  - Aufgabenanzahl basierend auf Hooks behoben von @mytharcher

### [v1.7.0-beta.6](https://www.nocobase.com/en/blog/v1.7.0-beta.6)

*Veröffentlichungsdatum: 2025-03-19*

#### 🎉 Neue Funktionen

- **[Client]** Unterstützung langer Textfelder als Titelfelder für Assoziationsfelder ([#6495](https://github.com/nocobase/nocobase/pull/6495)) von @katherinehhh
- **[Workflow: Aggregatknoten]** Unterstützung zur Konfiguration der Genauigkeit für Aggregationsergebnisse ([#6491](https://github.com/nocobase/nocobase/pull/6491)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Evaluatoren]** Dezimalstellen für Rundung auf 9 zurückgesetzt ([#6492](https://github.com/nocobase/nocobase/pull/6492)) von @mytharcher
- **[Workflow]** Alte Aufgabenanzahl nach Löschen des Workflows behoben ([#6493](https://github.com/nocobase/nocobase/pull/6493)) von @mytharcher
- **[Datenquelle: Haupt]** Erstellen einer MySQL-Ansicht nicht möglich ([#6477](https://github.com/nocobase/nocobase/pull/6477)) von @aaaaaajie
- **[Dateimanager]** URL kodieren ([#6497](https://github.com/nocobase/nocobase/pull/6497)) von @chenos
- **[Backup-Manager]**

  - Fehler bei der MySQL-Datenbankwiederherstellung aufgrund von GTID-Set-Überlappung von @gchust
  - Hochgeladene Dateien wurden beim Erstellen einer Sub-App aus einer Backup-Vorlage nicht wiederhergestellt von @gchust
- **[Workflow: Genehmigung]**

  - Aktionsbutton in der Prozesstabelle fehlte, behoben von @mytharcher
  - Zurückgegebene Genehmigung als "zu erledigen" geändert von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.2](https://www.nocobase.com/en/blog/v1.7.0-alpha.2)

*Veröffentlichungsdatum: 2025-03-15*

#### 🎉 Neue Funktionen

- **[Client]**

  - Kaskadenauswahl-Komponente um Datenbereichseinstellung erweitert ([#6386](https://github.com/nocobase/nocobase/pull/6386)) von @Cyx649312038
  - Tabellenblock unterstützt das Ausblenden der Indexspalte (standardmäßig sichtbar) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) von @katherinehhh
  - Unterstützt die Konfiguration auswählbarer Feldoptionen in Verknüpfungsregeln ([#6338](https://github.com/nocobase/nocobase/pull/6338)) von @katherinehhh
  - Unterstützt Datumsbereichskonfiguration (min/max) für Zeitfelder in Verknüpfungsregeln ([#6356](https://github.com/nocobase/nocobase/pull/6356)) von @katherinehhh
- **[ACL]** Unterstützt Benutzerrollen-Vereinigung ([#6301](https://github.com/nocobase/nocobase/pull/6301)) von @aaaaaajie
- **[Block: Aktionspanel]** Unterstützt Zeilenumbruch für Aktions-Titel im Aktionspanel ([#6433](https://github.com/nocobase/nocobase/pull/6433)) von @katherinehhh
- **[plugin-demo-platform]** Setzt skipAuthCheck der "/new"-Route auf true von @sheldon66
- **[WeCom]** Ermöglicht das Festlegen eines benutzerdefinierten Tooltips für den Anmeldebutton von @2013xile

#### 🚀 Verbesserungen

- **[Utils]**

  - `md5` in die Utils verschoben ([#6468](https://github.com/nocobase/nocobase/pull/6468)) von @mytharcher
  - Desktop-Seitenanpassung für mobile Geräte ([#6393](https://github.com/nocobase/nocobase/pull/6393)) von @zhangzhonghe
- **[Client]** Fügt skipAuthCheck zu router.add hinzu, um die Weiterleitung zur Anmeldeseite auf öffentlichen Seiten zu verhindern ([#6453](https://github.com/nocobase/nocobase/pull/6453)) von @sheldon66
- **[Datenvisualisierung]** Veraltetes `x-designer` durch `x-settings` ersetzt ([#6442](https://github.com/nocobase/nocobase/pull/6442)) von @2013xile

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Im Baumblock werden die Daten im Datenblock nicht gelöscht, wenn die Auswahl aufgehoben wird ([#6460](https://github.com/nocobase/nocobase/pull/6460)) von @zhangzhonghe
  - Sonderzeichen in Bild-URLs behoben, die dazu führten, dass Bilder nicht angezeigt wurden ([#6459](https://github.com/nocobase/nocobase/pull/6459)) von @mytharcher
  - Falsche Seitenzahl beim Hinzufügen von Daten nach Änderung der Seitengröße in einer Untertabelle ([#6437](https://github.com/nocobase/nocobase/pull/6437)) von @katherinehhh
  - Inhalt wird in mobilen Browsern nicht vollständig angezeigt ([#6446](https://github.com/nocobase/nocobase/pull/6446)) von @zhangzhonghe
  - Der Logo-Stil stimmt nicht mit dem vorherigen überein ([#6444](https://github.com/nocobase/nocobase/pull/6444)) von @zhangzhonghe
  - Datumsfeld-Bereichsauswahl schließt das maximale Datum aus ([#6418](https://github.com/nocobase/nocobase/pull/6418)) von @katherinehhh
  - Bei Verwendung des '$anyOf'-Operators ist die Verknüpfungsregel ungültig ([#6415](https://github.com/nocobase/nocobase/pull/6415)) von @zhangzhonghe
  - Mehrfachauswahl-Feldwert ändert sich und Optionen gehen beim Löschen von Untertabelleneinträgen verloren ([#6405](https://github.com/nocobase/nocobase/pull/6405)) von @katherinehhh
  - Daten in Popup-Fenstern, die über Link-Buttons geöffnet wurden, werden nicht aktualisiert ([#6411](https://github.com/nocobase/nocobase/pull/6411)) von @zhangzhonghe
- **[ACL]** Problem behoben, dass Beziehungsfelder unter der Rollenvereinigung nicht angezeigt werden ([#6456](https://github.com/nocobase/nocobase/pull/6456)) von @aaaaaajie
- **[Dateimanager]**

  - Löschen von in S3 gespeicherten Dateien nicht möglich ([#6467](https://github.com/nocobase/nocobase/pull/6467)) von @chenos
  - Einige Probleme des Dateimanagers behoben ([#6436](https://github.com/nocobase/nocobase/pull/6436)) von @mytharcher
- **[Workflow]** Schaltfläche "Workflow-Einstellungen binden" aus der Datenauswahl entfernt ([#6455](https://github.com/nocobase/nocobase/pull/6455)) von @mytharcher
- **[Workflow: Manueller Knoten]**

  - Fehler in der Migration behoben ([#6445](https://github.com/nocobase/nocobase/pull/6445)) von @mytharcher
  - Versionslimit der Migration auf `<1.7.0` geändert ([#6430](https://github.com/nocobase/nocobase/pull/6430)) von @mytharcher
  - Migration behoben, die Tabellenpräfix und Schema-Logik vermisste ([#6425](https://github.com/nocobase/nocobase/pull/6425)) von @mytharcher
- **[Zugriffskontrolle]**

  - Wechsel der Rollen wurde nicht wirksam, behoben ([#6454](https://github.com/nocobase/nocobase/pull/6454)) von @aaaaaajie
  - Fehler, wenn der Datenbereich auf eigene Daten gesetzt ist und der Tabelle ein Erstellerfeld fehlt ([#6428](https://github.com/nocobase/nocobase/pull/6428)) von @aaaaaajie
- **[WEB-Client]** Alle Instanzen von ctx.state.currentRole (einzelne Rolle) durch ctx.state.currentRoles (unterstützt mehrere Rollen) ersetzt ([#6427](https://github.com/nocobase/nocobase/pull/6427)) von @aaaaaajie
- **[Aktion: Stapelbearbeitung]** Behoben, dass Workflows bei der Stapelbearbeitungsübermittlung nicht ausgelöst werden konnten ([#6440](https://github.com/nocobase/nocobase/pull/6440)) von @mytharcher
- **[Datenquellen-Manager]** Wechsel der Datenquelle in der Rollenverwaltung lädt keine entsprechenden Collections ([#6431](https://github.com/nocobase/nocobase/pull/6431)) von @katherinehhh
- **[Datenvisualisierung]** Entfernte Felder erscheinen beim Hinzufügen benutzerdefinierter Filterfelder ([#6450](https://github.com/nocobase/nocobase/pull/6450)) von @2013xile
- **[Benachrichtigung: In-App-Nachricht]**

  - Unterscheidet die Hintergrundfarbe der In-App-Nachrichtenliste von den Nachrichtenkarten, um die visuelle Hierarchie und Lesbarkeit zu verbessern ([#6417](https://github.com/nocobase/nocobase/pull/6417)) von @sheldon66
  - Vermeidet, dass eine falsche Empfängerkonfiguration alle Benutzer abfragt ([#6424](https://github.com/nocobase/nocobase/pull/6424)) von @sheldon66
- **[Aktion: Benutzerdefinierte Anfrage]** Fehler bei der serverseitigen Berechtigungsvalidierung für benutzerdefinierte Anfragen ([#6438](https://github.com/nocobase/nocobase/pull/6438)) von @katherinehhh
- **[Authentifizierung: API-Schlüssel]** Entfernung der Rollenlisten-Vereinigung im API-Schlüssel-Plugin ([#6432](https://github.com/nocobase/nocobase/pull/6432)) von @aaaaaajie
- **[Block: Vorlage]** Falsches Verhalten von "Als Vorlage speichern" im mobilen Client ([#6420](https://github.com/nocobase/nocobase/pull/6420)) von @gchust
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** `only` im E2E-Testfall entfernt von @mytharcher
- **[Dateispeicher: S3(Pro)]** Problem mit nicht zugänglichen signierten S3 Pro URLs behoben von @chenos
- **[Workflow: Genehmigung]**

  - Seitenabsturz vermieden, wenn kein Antragsteller in der Genehmigungsprozess-Tabelle vorhanden ist von @mytharcher
  - Assoziationsdaten werden im Genehmigungsformular nicht angezeigt, behoben von @mytharcher
  - Fehler beim Genehmigen in einer externen Datenquelle behoben von @mytharcher

### [v1.7.0-alpha.3](https://www.nocobase.com/en/blog/v1.7.0-alpha.3)

*Veröffentlichungsdatum: 2025-03-18*

#### 🎉 Neue Funktionen

- **[Client]** Unterstützt Inline-Tabellenaktionen im Nur-Symbol-Modus, zeigt Aktionsnamen beim Überfahren mit der Maus an ([#6451](https://github.com/nocobase/nocobase/pull/6451)) von @katherinehhh

#### 🚀 Verbesserungen

- **[Dateimanager]** Vereinfachung der Logik und API zur Generierung von Datei-URLs ([#6472](https://github.com/nocobase/nocobase/pull/6472)) von @mytharcher
- **[Dateispeicher: S3(Pro)]**

  - Text 'Access URL Base' in 'Base URL' geändert von @zhangzhonghe
  - Auf eine einfachere Methode zur Generierung von Datei-URLs umgestellt von @mytharcher
- **[Backup-Manager]** Wiederherstellung von Backups zwischen Pre-Release- und Release-Version derselben Version erlaubt von @gchust

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Fehlende Felder in der Verknüpfungsregel-Konfiguration ([#6488](https://github.com/nocobase/nocobase/pull/6488)) von @katherinehhh
  - Die Farbe der Symbole in der oberen rechten Ecke der Seite ändert sich nicht mit dem Theme ([#6482](https://github.com/nocobase/nocobase/pull/6482)) von @zhangzhonghe
  - Rich-Text-Feld löscht Daten bei Übermittlung nicht ([#6486](https://github.com/nocobase/nocobase/pull/6486)) von @katherinehhh
  - Eingabestil für die Standardwerteinstellung des Formulars nicht korrekt ([#6490](https://github.com/nocobase/nocobase/pull/6490)) von @gchust
  - Klicken der Reset-Taste im Filterformular kann die Filterbedingungen des Grid-Kartenblocks nicht löschen ([#6475](https://github.com/nocobase/nocobase/pull/6475)) von @zhangzhonghe
- **[Workflow: Manueller Knoten]**

  - Migrationsname geändert, um erneute Ausführung zu gewährleisten ([#6487](https://github.com/nocobase/nocobase/pull/6487)) von @mytharcher
  - Migration behoben ([#6484](https://github.com/nocobase/nocobase/pull/6484)) von @mytharcher
  - Workflow-Titelfeld im Filter behoben ([#6480](https://github.com/nocobase/nocobase/pull/6480)) von @mytharcher
  - Migrationsfehler behoben, wenn die ID-Spalte nicht existiert ([#6470](https://github.com/nocobase/nocobase/pull/6470)) von @chenos
  - Synchronisierung der Collection aus Feldern vermieden ([#6478](https://github.com/nocobase/nocobase/pull/6478)) von @mytharcher
- **[Workflow]** Aufgaben nicht zählen, wenn Workflow gelöscht wurde ([#6474](https://github.com/nocobase/nocobase/pull/6474)) von @mytharcher
- **[Variablen und Geheimnisse]** Buttons wurden im Drawer zum Erstellen neuer Variablen nicht angezeigt ([#6485](https://github.com/nocobase/nocobase/pull/6485)) von @gchust
- **[Workflow: Aggregatknoten]** Rundung bei null Ergebnis behoben ([#6473](https://github.com/nocobase/nocobase/pull/6473)) von @mytharcher
- **[NocoBase einbetten]** Seite zeigt leeren Bildschirm von @zhangzhonghe
- **[Backup-Manager]** Server kann nicht gestartet werden, wenn Standard-Backup-Einstellungen fehlen von @gchust
- **[Workflow: Genehmigung]**

  - Fehler im Dateiassoziationsfeld im Prozessformular behoben von @mytharcher
  - Aufgabenanzahl basierend auf Hooks behoben von @mytharcher

## Über NocoBase

NocoBase ist eine private, quelloffene No-Code-Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten deutlich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 Holen Sie sich NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
