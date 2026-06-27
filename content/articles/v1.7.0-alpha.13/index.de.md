---
title: "NocoBase v1.7.0-alpha.13: Unterstützung von Variablen in Titel und Inhalt der sekundären Bestätigung"
description: "Versionshinweise zu v1.7.0-alpha.13"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Unterstützung von Variablen in Titel und Inhalt der sekundären Bestätigung ([#6787](https://github.com/nocobase/nocobase/pull/6787)) von @katherinehhh

  - Unterstützung der Konfiguration von Verknüpfungsregeln in Blöcken für dynamisches Ein-/Ausblenden ([#6636](https://github.com/nocobase/nocobase/pull/6636)) von @katherinehhh

- **[Undefiniert]** CI für das Lizenz-Kit veröffentlichen ([#6786](https://github.com/nocobase/nocobase/pull/6786)) von @jiannx

- **[Block: Iframe]** Iframe-Block unterstützt die Konfiguration des allow-Attributs ([#6824](https://github.com/nocobase/nocobase/pull/6824)) von @zhangzhonghe

- **[Authentifizierung]** Unterstützung der Funktion "Passwort vergessen" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) von @zhangzhonghe
Referenz: [Passwort vergessen](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Dateimanager]** Funktion: `getFileStream`-API für Datei-Streaming-Unterstützung hinzugefügt. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) von @sheldon66

- **[Aktion: Benutzerdefinierte Anfrage]** Unterstützung von Antwortvariablen in der Erfolgsmeldung von benutzerdefinierten Anfrageaktionen ([#6694](https://github.com/nocobase/nocobase/pull/6694)) von @katherinehhh

- **[Vorlagendruck]** Funktion: Unterstützung von `{ label, value }` Select-Optionen im Vorlagendruck. von @sheldon66

- **[Block: Baum]** Filterbaum-Block unterstützt Verknüpfungsregeln von @katherinehhh

- **[Datenvisualisierung: ECharts]** "Y-Achse invertieren"-Einstellung für Balkendiagramme hinzugefügt von @2013xile

### 🚀 Verbesserungen

- **[Client]**
  - RichText-Komponente unterstützt Module und Formats Props ([#6807](https://github.com/nocobase/nocobase/pull/6807)) von @jiannx

  - Optimierung des Stils der "Hinzufügen"-Schaltfläche in Untertabellen und Ausrichtung des Paginators in derselben Zeile ([#6790](https://github.com/nocobase/nocobase/pull/6790)) von @katherinehhh

  - Anzeigen des Schaltflächentitels als Tooltip beim Hovern über das Aktionssymbol ([#6761](https://github.com/nocobase/nocobase/pull/6761)) von @katherinehhh

  - Beibehaltung der Referenzvorlagen-Funktionalität ([#6743](https://github.com/nocobase/nocobase/pull/6743)) von @gchust

  - Anpassung der Upload-Nachricht ([#6757](https://github.com/nocobase/nocobase/pull/6757)) von @mytharcher

- **[Utils]** Erhöhung der Höhe der Filterbutton-Feldliste und Sortierung/Kategorisierung der Felder ([#6779](https://github.com/nocobase/nocobase/pull/6779)) von @zhangzhonghe

- **[Dateimanager]** OSS-Timeout-Option hinzugefügt, Standard 10 Minuten ([#6795](https://github.com/nocobase/nocobase/pull/6795)) von @mytharcher

- **[Datenvisualisierung]** Erweiterte API für die Feldoberflächenkonfiguration hinzugefügt ([#6742](https://github.com/nocobase/nocobase/pull/6742)) von @2013xile

- **[Passwortrichtlinie]** Standard-Passwortablauf auf "Nie ablaufen" geändert von @2013xile

- **[WeCom]** Priorisierung der geschäftlichen E-Mail vor der privaten E-Mail beim Aktualisieren der Benutzer-E-Mail von @2013xile

### 🐛 Fehlerbehebungen

- **[Datenbank]**
  - Import fehlgeschlagen aufgrund von Textfeldwerten. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) von @aaaaaajie

  - Fehler behoben: belongs-to-Association wurde in appends nicht geladen, wenn der Fremdschlüssel unter MariaDB bigInt ist ([#6823](https://github.com/nocobase/nocobase/pull/6823)) von @mytharcher

  - Testfälle korrigiert ([#6811](https://github.com/nocobase/nocobase/pull/6811)) von @mytharcher

  - Vermeidung von Fehlern, wenn der Datentyp kein String ist ([#6797](https://github.com/nocobase/nocobase/pull/6797)) von @mytharcher

  - Hinzufügen von unavailableActions zu SQL-Sammlungen und Ansichtssammlungen ([#6765](https://github.com/nocobase/nocobase/pull/6765)) von @katherinehhh

- **[Client]**
  - Mehrfach-Association-Feld konnte nicht gesendet werden, wenn Felder aus der Association-Sammlung angezeigt wurden ([#6833](https://github.com/nocobase/nocobase/pull/6833)) von @katherinehhh

  - Ziehen anderer Schaltflächen auf die Duplizieren-Schaltfläche nicht möglich ([#6822](https://github.com/nocobase/nocobase/pull/6822)) von @katherinehhh

  - Tabellenauswahl im Filterformular, abnormaler Stil ([#6827](https://github.com/nocobase/nocobase/pull/6827)) von @zhangzhonghe

  - Wenn die Relationsfeldkomponente des Filterformulars auf eine Datenauswahl geändert wird, fehlt der Konfigurationseintrag "Mehrfachauswahl erlauben" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) von @zhangzhonghe

  - In verschachtelten Unterseiten wird die Blockliste nicht angezeigt, wenn die Maus über die Schaltfläche "Block hinzufügen" bewegt wird ([#6832](https://github.com/nocobase/nocobase/pull/6832)) von @zhangzhonghe

  - Stilproblem der Untertabellen-Paginierungsleiste im Nur-Lese-Modus ([#6830](https://github.com/nocobase/nocobase/pull/6830)) von @katherinehhh

  - Problem bei der Konfiguration von Verknüpfungsregeln im Unterformular (Popup) innerhalb einer Untertabelle ([#6803](https://github.com/nocobase/nocobase/pull/6803)) von @katherinehhh

  - Wenn die Variablenauswahl asynchrones Laden erfordert, geht die zuletzt ausgewählte Menüoption verloren. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) von @gchust

  - Mehrere Fehlermeldungen werden angezeigt, wenn eine Validierungsregel in Formularfeldern verletzt wird ([#6805](https://github.com/nocobase/nocobase/pull/6805)) von @katherinehhh

  - Fehler behoben: Unterfelder von 1:n-Feldern können in Filterformularen nicht als Filteroptionen ausgewählt werden ([#6809](https://github.com/nocobase/nocobase/pull/6809)) von @zhangzhonghe

  - Übergabe anderer Props an die Variable.Input-Komponente. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) von @sheldon66

  - Unterformular (Popup) in Untertabelle: Verknüpfungsregeln fehlen Feldeigenschaftseinstellungen ([#6800](https://github.com/nocobase/nocobase/pull/6800)) von @katherinehhh

  - Association-Feld sendet keine Daten, wenn ein Feld aus der verknüpften Sammlung angezeigt wird ([#6798](https://github.com/nocobase/nocobase/pull/6798)) von @katherinehhh

  - Im Filterformular führt das Wechseln des Feldoperators und anschließendes Aktualisieren der Seite zu einem Fehler ([#6781](https://github.com/nocobase/nocobase/pull/6781)) von @zhangzhonghe

  - Im Collapse-Block sollte das Klicken auf die Löschen-Schaltfläche im Suchfeld des Relationsfelds den Datenbereich nicht löschen ([#6782](https://github.com/nocobase/nocobase/pull/6782)) von @zhangzhonghe

  - Ausrichtungsproblem der Schaltfläche "Untergeordneten Datensatz hinzufügen" in der Baumtabelle ([#6791](https://github.com/nocobase/nocobase/pull/6791)) von @katherinehhh

  - Verschieben von Menüs vor oder nach Seiten-Tabs verboten ([#6777](https://github.com/nocobase/nocobase/pull/6777)) von @zhangzhonghe

  - Tabellenblock zeigt beim Filtern doppelte Daten an ([#6792](https://github.com/nocobase/nocobase/pull/6792)) von @zhangzhonghe

  - Problem mit dem URL-Abfrageparameter-Operator ([#6770](https://github.com/nocobase/nocobase/pull/6770)) von @katherinehhh

  - Nur Export-Aktion in Ansichtssammlung wird unterstützt, wenn writableView false ist ([#6763](https://github.com/nocobase/nocobase/pull/6763)) von @katherinehhh

  - Falsche Daten für m:n-Array-Felder aus verknüpften Tabellen in Formularen abgerufen ([#6744](https://github.com/nocobase/nocobase/pull/6744)) von @2013xile

  - Unerwartete Erstellung von Association-Daten beim Anzeigen eines Association-Feldes in einem Unterformular/einer Untertabelle in einem Erstellungsformular ([#6727](https://github.com/nocobase/nocobase/pull/6727)) von @katherinehhh

- **[create-nocobase-app]** Temporäre Behebung des MariaDB-Problems durch Downgrade auf 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) von @chenos

- **[Aktion: Datensätze exportieren]** Fehler beim Exportieren von Langtexten behoben. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) von @aaaaaajie

- **[Sammlungsfeld: Anhang (URL)]** Anhang (URL)-Felder sollten keine Wertekonfiguration in Verknüpfungsregeln erlauben ([#6831](https://github.com/nocobase/nocobase/pull/6831)) von @katherinehhh

- **[Verifizierung]** Probleme mit dem Migrationsskript behoben ([#6820](https://github.com/nocobase/nocobase/pull/6820)) von @2013xile

- **[Authentifizierung]** Ändern des Authentifikatornamens nicht erlaubt ([#6808](https://github.com/nocobase/nocobase/pull/6808)) von @2013xile

- **[Aktion: Benutzerdefinierte Anfrage]** Antwort der benutzerdefinierten Anfrage, die auf Variable gesetzt ist, wird nicht korrekt angezeigt ([#6793](https://github.com/nocobase/nocobase/pull/6793)) von @katherinehhh

- **[Block: Aktionspanel]** Aktionspanel-Symbol fehlt, wenn "Nur Symbol" aktiviert ist ([#6773](https://github.com/nocobase/nocobase/pull/6773)) von @katherinehhh

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem mit der Verknüpfung von ausgelösten Workflow-Aktionen von @katherinehhh

- **[Workflow: Datumsberechnungsknoten]** Fehler in Legacy-Browsern ohne `Intl`-API behoben von @mytharcher

- **[Vorlagendruck]** Korrektur: Berechtigungsvalidierungslogik korrigiert, um unbefugte Aktionen zu verhindern. von @sheldon66

- **[Dateispeicher: S3(Pro)]** Zugriffs-URL-Ablauf ungültig von @jiannx

- **[Block: Baum]** Nach dem Verbinden über einen Fremdschlüssel führt das Klicken zum Auslösen des Filters zu leeren Filterbedingungen von @zhangzhonghe
