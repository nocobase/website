---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: Unterstützung für das Filtern von Workflows nach weiteren Feldern, Hinzufügung der Umgebungsvariable zur Steuerung der Ausgabemethoden von Audit-Logs und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.9](https://www.nocobase.com/en/blog/v1.7.9)

*Veröffentlichungsdatum: 2025-06-11*

#### 🐛 Fehlerbehebungen

* **[Client]** Behebung von Blockfehlerproblemen ([#7048](https://github.com/nocobase/nocobase/pull/7048)) von @gchust

### [v1.7.8](https://www.nocobase.com/en/blog/v1.7.8)

*Veröffentlichungsdatum: 2025-06-10*

#### 🎉 Neue Funktionen

- **[Audit-Logs]** Hinzufügen der Umgebungsvariable `AUDIT_LOGGER_TRANSPORT` zur Steuerung der Ausgabemethode des Audit-Logs von @2013xile

#### 🚀 Verbesserungen

- **[Kalender]** Unterstützung zum Festlegen des Wochenstarttages im Kalenderblock ([#7032](https://github.com/nocobase/nocobase/pull/7032)) von @katherinehhh
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Berechtigungsbezogene Fehler beim Anzeigen von Viele-zu-viele(viele)-Feldern in Datentabellen. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) von @aaaaaajie

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Automatisches Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7042](https://github.com/nocobase/nocobase/pull/7042)) von @katherinehhh
  - Auswahlfeldoptionen funktionieren nicht in Filterformular-Verknüpfungsregeln ([#7035](https://github.com/nocobase/nocobase/pull/7035)) von @katherinehhh
  - Validierungsregeln des Filterformulars führen dazu, dass die Filtertaste unwirksam wird ([#6975](https://github.com/nocobase/nocobase/pull/6975)) von @zhangzhonghe
  - Behebung, dass Felder aufgrund doppelter API-Anfragen nicht in Blockvorlagen angezeigt werden ([#6985](https://github.com/nocobase/nocobase/pull/6985)) von @zhangzhonghe
- **[Aktion: Datensätze importieren]** Behebung des Fehlschlags beim Import von Untertabellen, wenn relationale Felder betroffen sind ([#7039](https://github.com/nocobase/nocobase/pull/7039)) von @aaaaaajie
- **[Datenvisualisierung]** Kontrollkästchengruppenfelder in Diagrammen sollten Beschriftungen anstelle von Rohwerten anzeigen ([#7033](https://github.com/nocobase/nocobase/pull/7033)) von @2013xile
- **[Workflow]** Behebung eines Fehlers, der bei der manuellen Ausführungsaktion ausgelöst wird, wenn der Trigger nicht korrekt konfiguriert ist ([#7036](https://github.com/nocobase/nocobase/pull/7036)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Vermeidung eines undefinierten Feld-Fehlers von @mytharcher
  - Behebung eines API-Fehlers beim Aktualisieren der Detailseite von @mytharcher
- **[WeCom]** Hinzufügen einer Prüfung für den Callback-Pfad in der Gateway-Middleware von @2013xile

### [v1.7.6](https://www.nocobase.com/en/blog/v1.7.6)

*Veröffentlichungsdatum: 2025-06-09*

#### 🚀 Verbesserungen

- **[Client]** Verschieben eines Gruppenmenüs in sich selbst verhindern ([#7005](https://github.com/nocobase/nocobase/pull/7005)) von @zhangzhonghe

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Behebung eines Problems, bei dem ein Block keine Ansichtsdaten aus externen Datenquellen lesen konnte. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) von @aaaaaajie
  - Behebung des Parameterfehlers im Filterblock ([#6966](https://github.com/nocobase/nocobase/pull/6966)) von @zhangzhonghe
  - Aktuelles Objektvariable ist in Verknüpfungsregeln ungültig ([#7008](https://github.com/nocobase/nocobase/pull/7008)) von @zhangzhonghe
  - Unfähigkeit, die Pflichtfeldanzeige einer Untertabelle mithilfe von Verknüpfungsregeln zu löschen ([#7022](https://github.com/nocobase/nocobase/pull/7022)) von @zhangzhonghe
- **[undefined]** Entfernen der Datenbankabhängigkeit für possibleTypes, Erzwingen einer API-gesteuerten Konfiguration von @aaaaaajie
- **[Mobil]** Optimierung von Verzögerungsproblemen bei mobilen Popups ([#7029](https://github.com/nocobase/nocobase/pull/7029)) von @zhangzhonghe
- **[Datenquellen-Manager]** Entfernen der Datenbankabhängigkeit für possibleTypes, Erzwingen einer API-gesteuerten Konfiguration ([#7019](https://github.com/nocobase/nocobase/pull/7019)) von @aaaaaajie
- **[Aktion: Datensätze importieren]** Behebung von Fehlern, die während der Stapelbearbeitung beim Import von XLSX-Baumtabellendaten auftreten ([#7013](https://github.com/nocobase/nocobase/pull/7013)) von @aaaaaajie
- **[Workflow]** Behebung eines UI-Fehlers, wenn der Workflow nicht existiert ([#7023](https://github.com/nocobase/nocobase/pull/7023)) von @mytharcher
- **[Workflow: JavaScript]** Behebung von require für relative Pfade von @mytharcher
- **[Workflow: Genehmigung]**

  - Behebung eines Fehlers, der ausgelöst wird, wenn der Workflow gelöscht wurde von @mytharcher
  - Erneutes Laden der Dateiverknüpfung aus dem Snapshot, um URL-Ablauf zu vermeiden von @mytharcher
  - Behebung von Triggervariablen von @mytharcher

### [v1.7.5](https://www.nocobase.com/en/blog/v1.7.5)

*Veröffentlichungsdatum: 2025-06-07*

#### 🐛 Fehlerbehebungen

- **[Client]** Verwendung eines unabhängigen Variablenbereichs für jedes Feld ([#7012](https://github.com/nocobase/nocobase/pull/7012)) von @mytharcher
- **[Datenbank]** Fehlerbehebung: Hinzufügen fehlender Ersteller- und Aktualisierungsfelder beim Import von xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) von @aaaaaajie
- **[Workflow]** Behebung, dass das Sammlungsereignis im Erstellungs- oder Aktualisierungsmodus nicht ausgelöst wird, wenn ohne geändertes Feld erstellt wird ([#7015](https://github.com/nocobase/nocobase/pull/7015)) von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Behebung des Fehlers, der beim Exportieren von Anhängen mit Bedingungen auftritt. von @aaaaaajie

### [v1.7.4](https://www.nocobase.com/en/blog/v1.7.4)

*Veröffentlichungsdatum: 2025-06-07*

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Assoziationsfelder zeigen beim Überfahren im schreibgeschützten Modus Untertabellen und Unterformulare an ([#7002](https://github.com/nocobase/nocobase/pull/7002)) von @zhangzhonghe
  - Markdown-Block-Verknüpfungsregeln funktionieren nicht, wenn sie durch eine Popup-Aktion ausgelöst werden ([#7007](https://github.com/nocobase/nocobase/pull/7007)) von @katherinehhh
- **[Lokalisierung]** Behebung eines Fehlers, der durch leere Texte verursacht wird ([#7010](https://github.com/nocobase/nocobase/pull/7010)) von @2013xile
- **[Asynchroner Aufgabenmanager]** Behebung eines Problems mit mehrfacher Ausführung beim asynchronen Import ([#7006](https://github.com/nocobase/nocobase/pull/7006)) von @aaaaaajie
- **[Aktion: Datensätze exportieren Pro]** Behebung eines Problems mit mehrfacher Ausführung beim asynchronen Import von @aaaaaajie
- **[Workflow: Genehmigung]** Behebung, dass die delegierte Genehmigung nicht fortgesetzt werden kann, wenn sie von anderen genehmigt wurde von @mytharcher

### [v1.7.3](https://www.nocobase.com/en/blog/v1.7.3)

*Veröffentlichungsdatum: 2025-06-06*

#### 🚀 Verbesserungen

- **[Workflow]** Unterstützung zum Filtern weiterer Felder des Workflows ([#6995](https://github.com/nocobase/nocobase/pull/6995)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**
  - Seitenwechsel in einer Untertabelle eines Detailblocks innerhalb eines Modals löst eine Warnung über nicht gespeicherte Änderungen aus ([#7004](https://github.com/nocobase/nocobase/pull/7004)) von @katherinehhh
  - Fehlender Feldtitel beim Setzen einer Variable in der Zuweisungskomponente ([#7001](https://github.com/nocobase/nocobase/pull/7001)) von @katherinehhh
  - Feldstil-Verknüpfungsregeln funktionieren nicht ([#7003](https://github.com/nocobase/nocobase/pull/7003)) von @katherinehhh

### [v1.7.2](https://www.nocobase.com/en/blog/v1.7.2)

*Veröffentlichungsdatum: 2025-06-05*

#### 🚀 Verbesserungen

- **[Aktion: Stapelbearbeitung]** Verwendung von `filterByTk` anstelle von `filter` im ausgewählten Modus ([#6994](https://github.com/nocobase/nocobase/pull/6994)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Optimierung der Leistungsprobleme bei der Verarbeitung großer XLSX-Dateien (Datensätze mit vielen Zeilen/Spalten), um Systemabstürze oder Einfrieren zu verhindern. von @aaaaaajie

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Fehlender Feldtitel in der assignedField-Komponente ([#6987](https://github.com/nocobase/nocobase/pull/6987)) von @katherinehhh
  - Das letzte Menüelement kann in der Menüverschiebeliste nicht ausgewählt werden ([#6997](https://github.com/nocobase/nocobase/pull/6997)) von @zhangzhonghe
- **[Workflow]**

  - Behebung, dass der Filter beim Wechseln von Kategorie-Tabs nicht aktualisiert wird ([#6989](https://github.com/nocobase/nocobase/pull/6989)) von @mytharcher
  - Behebung, dass Workflow-Statistiken nicht automatisch erstellt werden ([#6993](https://github.com/nocobase/nocobase/pull/6993)) von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.5](https://www.nocobase.com/en/blog/v1.8.0-beta.5)

*Veröffentlichungsdatum: 2025-06-07*

#### 🚀 Verbesserungen

- **[Workflow]** Unterstützung zum Filtern weiterer Felder des Workflows ([#6995](https://github.com/nocobase/nocobase/pull/6995)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Markdown-Block-Verknüpfungsregeln funktionieren nicht, wenn sie durch eine Popup-Aktion ausgelöst werden ([#7007](https://github.com/nocobase/nocobase/pull/7007)) von @katherinehhh
  - Assoziationsfelder zeigen beim Überfahren im schreibgeschützten Modus Untertabellen und Unterformulare an ([#7002](https://github.com/nocobase/nocobase/pull/7002)) von @zhangzhonghe
  - Feldstil-Verknüpfungsregeln funktionieren nicht ([#7003](https://github.com/nocobase/nocobase/pull/7003)) von @katherinehhh
  - Fehlender Feldtitel beim Setzen einer Variable in der Zuweisungskomponente ([#7001](https://github.com/nocobase/nocobase/pull/7001)) von @katherinehhh
  - Seitenwechsel in einer Untertabelle eines Detailblocks innerhalb eines Modals löst eine Warnung über nicht gespeicherte Änderungen aus ([#7004](https://github.com/nocobase/nocobase/pull/7004)) von @katherinehhh
- **[Asynchroner Aufgabenmanager]** Behebung eines Problems mit mehrfacher Ausführung beim asynchronen Import ([#7006](https://github.com/nocobase/nocobase/pull/7006)) von @aaaaaajie
- **[Lokalisierung]** Behebung eines Fehlers, der durch leere Texte verursacht wird ([#7010](https://github.com/nocobase/nocobase/pull/7010)) von @2013xile
- **[Aktion: Datensätze exportieren Pro]** Behebung eines Problems mit mehrfacher Ausführung beim asynchronen Import von @aaaaaajie
- **[Workflow: Genehmigung]** Behebung, dass die delegierte Genehmigung nicht fortgesetzt werden kann, wenn sie von anderen genehmigt wurde von @mytharcher

### [v1.8.0-beta.4](https://www.nocobase.com/en/blog/v1.8.0-beta.4)

*Veröffentlichungsdatum: 2025-06-05*

#### 🚀 Verbesserungen

- **[Aktion: Stapelbearbeitung]** Verwendung von `filterByTk` anstelle von `filter` im ausgewählten Modus ([#6994](https://github.com/nocobase/nocobase/pull/6994)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Optimierung der Leistungsprobleme bei der Verarbeitung großer XLSX-Dateien (Datensätze mit vielen Zeilen/Spalten), um Systemabstürze oder Einfrieren zu verhindern. von @aaaaaajie

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Fehlender Feldtitel in der assignedField-Komponente ([#6987](https://github.com/nocobase/nocobase/pull/6987)) von @katherinehhh
  - Das letzte Menüelement kann in der Menüverschiebeliste nicht ausgewählt werden ([#6997](https://github.com/nocobase/nocobase/pull/6997)) von @zhangzhonghe
- **[Workflow]**

  - Behebung, dass der Filter beim Wechseln von Kategorie-Tabs nicht aktualisiert wird ([#6989](https://github.com/nocobase/nocobase/pull/6989)) von @mytharcher
  - Behebung, dass Workflow-Statistiken nicht automatisch erstellt werden ([#6993](https://github.com/nocobase/nocobase/pull/6993)) von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.4](https://www.nocobase.com/en/blog/v1.8.0-alpha.4)

*Veröffentlichungsdatum: 2025-06-07*

#### 🚀 Verbesserungen

- **[Workflow]** Unterstützung zum Filtern weiterer Felder des Workflows ([#6995](https://github.com/nocobase/nocobase/pull/6995)) von @mytharcher
- **[E-Mail-Manager]** Unterstützt den Standard-Sendewert im Popup, unterstützt die unscharfe Suche nach Empfängern und behebt Probleme von @jiannx

#### 🐛 Fehlerbehebungen

- **[Datenbank]** Fehlerbehebung: Hinzufügen fehlender Ersteller- und Aktualisierungsfelder beim Import von xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) von @aaaaaajie
- **[Client]**

  - Fehlender Feldtitel beim Setzen einer Variable in der Zuweisungskomponente ([#7001](https://github.com/nocobase/nocobase/pull/7001)) von @katherinehhh
  - Assoziationsfelder zeigen beim Überfahren im schreibgeschützten Modus Untertabellen und Unterformulare an ([#7002](https://github.com/nocobase/nocobase/pull/7002)) von @zhangzhonghe
  - Markdown-Block-Verknüpfungsregeln funktionieren nicht, wenn sie durch eine Popup-Aktion ausgelöst werden ([#7007](https://github.com/nocobase/nocobase/pull/7007)) von @katherinehhh
  - Seitenwechsel in einer Untertabelle eines Detailblocks innerhalb eines Modals löst eine Warnung über nicht gespeicherte Änderungen aus ([#7004](https://github.com/nocobase/nocobase/pull/7004)) von @katherinehhh
  - Feldstil-Verknüpfungsregeln funktionieren nicht ([#7003](https://github.com/nocobase/nocobase/pull/7003)) von @katherinehhh
- **[Asynchroner Aufgabenmanager]** Behebung eines Problems mit mehrfacher Ausführung beim asynchronen Import ([#7006](https://github.com/nocobase/nocobase/pull/7006)) von @aaaaaajie
- **[Lokalisierung]** Behebung eines Fehlers, der durch leere Texte verursacht wird ([#7010](https://github.com/nocobase/nocobase/pull/7010)) von @2013xile
- **[Aktion: Datensätze exportieren Pro]** Behebung eines Problems mit mehrfacher Ausführung beim asynchronen Import von @aaaaaajie
- **[Workflow: Genehmigung]** Behebung, dass die delegierte Genehmigung nicht fortgesetzt werden kann, wenn sie von anderen genehmigt wurde von @mytharcher
- **[E-Mail-Manager]**

  - Mehrere Primärschlüssel für die Tabelle "mailmessagelabels_mailmessages" von @jiannx
  - Einstellung, dass Popup nicht angezeigt wird von @jiannx
  - E-Mail-unscharfe Suche zur Erstellung eindeutiger Filter von @jiannx
  - Empfänger-unscharfe Suche unterstützt assoziierte Felder von @jiannx
  - Hinzufügen des Feldes "id" zu den mailmessagelabelsMailmessages von @jiannx

### [v1.8.0-alpha.3](https://www.nocobase.com/en/blog/v1.8.0-alpha.3)

*Veröffentlichungsdatum: 2025-06-06*

#### 🚀 Verbesserungen

- **[Aktion: Stapelbearbeitung]** Verwendung von `filterByTk` anstelle von `filter` im ausgewählten Modus ([#6994](https://github.com/nocobase/nocobase/pull/6994)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Optimierung der Leistungsprobleme bei der Verarbeitung großer XLSX-Dateien (Datensätze mit vielen Zeilen/Spalten), um Systemabstürze oder Einfrieren zu verhindern. von @aaaaaajie

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Fehlender Feldtitel in der assignedField-Komponente ([#6987](https://github.com/nocobase/nocobase/pull/6987)) von @katherinehhh
  - Das letzte Menüelement kann in der Menüverschiebeliste nicht ausgewählt werden ([#6997](https://github.com/nocobase/nocobase/pull/6997)) von @zhangzhonghe
  - Der Inhalt wird auf Seiten, die über Popup-Links geöffnet werden, falsch angezeigt ([#6990](https://github.com/nocobase/nocobase/pull/6990)) von @zhangzhonghe
- **[Workflow]**

  - Behebung, dass der Filter beim Wechseln von Kategorie-Tabs nicht aktualisiert wird ([#6989](https://github.com/nocobase/nocobase/pull/6989)) von @mytharcher
  - Behebung, dass Workflow-Statistiken nicht automatisch erstellt werden ([#6993](https://github.com/nocobase/nocobase/pull/6993)) von @mytharcher
