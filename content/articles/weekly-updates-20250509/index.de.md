---
title: "NocoBase wöchentliche Updates: Vorlagendruck unterstützt Bilder und Barcodes"
description: "Die Updates dieser Woche umfassen: Unterstützung für dynamische Bilder und Barcode-Rendering in Dokumentvorlagen, Unterstützung von Variablen in Titel und Inhalt der sekundären Bestätigung und mehr."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig ausprobieren und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.26](https://www.nocobase.com/en/blog/v1.6.26)

*Veröffentlichungsdatum: 2025-05-07*

#### 🎉 Neue Funktionen

- **[Block: iframe]** Iframe-Block unterstützt die Konfiguration des allow-Attributs ([#6824](https://github.com/nocobase/nocobase/pull/6824)) von @zhangzhonghe
- **[Vorlagendruck]** Funktion: Unterstützt `{ label, value }` Select-Optionen im Vorlagendruck. von @sheldon66

#### 🐛 Fehlerbehebungen

- **[client]**

  - In verschachtelten Unterseiten wird die Blockliste nicht angezeigt, wenn die Maus über die Schaltfläche "Block hinzufügen" bewegt wird ([#6832](https://github.com/nocobase/nocobase/pull/6832)) von @zhangzhonghe
  - Wenn die Relationsfeldkomponente des Filterformulars auf eine Datenauswahl geändert wird, fehlt das Konfigurationselement "Mehrfachauswahl zulassen" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) von @zhangzhonghe
  - Mehrere Fehlermeldungen werden angezeigt, wenn eine Validierungsregel in Formularfeldern verletzt wird ([#6805](https://github.com/nocobase/nocobase/pull/6805)) von @katherinehhh
  - Problem bei der Konfiguration von Verknüpfungsregeln in Unterformularen (Popup) innerhalb von Untertabellen ([#6803](https://github.com/nocobase/nocobase/pull/6803)) von @katherinehhh
  - Behebt das Problem, dass Unterfelder von 1:n-Feldern nicht als Filteroptionen in Filterformularen ausgewählt werden können ([#6809](https://github.com/nocobase/nocobase/pull/6809)) von @zhangzhonghe
  - Stilproblem der Seitenleiste von Untertabellen im schreibgeschützten Modus ([#6830](https://github.com/nocobase/nocobase/pull/6830)) von @katherinehhh
  - Tabellenauswahl im Filterformular, abnormaler Stil ([#6827](https://github.com/nocobase/nocobase/pull/6827)) von @zhangzhonghe
- **[Datenbank]**

  - Behebt, dass die belongs-to-Assoziation nicht in appends geladen wird, wenn der Fremdschlüssel unter MariaDB bigInt ist ([#6823](https://github.com/nocobase/nocobase/pull/6823)) von @mytharcher
  - Behebt Testfälle ([#6811](https://github.com/nocobase/nocobase/pull/6811)) von @mytharcher
- **[Sammlungsfeld: Anhang(URL)]** Anhang(URL)-Felder sollten keine Wertkonfiguration in Verknüpfungsregeln erlauben ([#6831](https://github.com/nocobase/nocobase/pull/6831)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem mit der Aktionsverknüpfung des ausgelösten Workflows von @katherinehhh

### [v1.6.27](https://www.nocobase.com/en/blog/v1.6.27)

*Veröffentlichungsdatum: 2025-05-08*

#### 🐛 Fehlerbehebungen

- **[client]**
  - Es können keine anderen Schaltflächen auf die Duplizieren-Schaltfläche gezogen werden ([#6822](https://github.com/nocobase/nocobase/pull/6822)) von @katherinehhh
  - Mehrfach-Assoziationsfeld konnte nicht gesendet werden, wenn Felder aus der Assoziationssammlung angezeigt wurden ([#6833](https://github.com/nocobase/nocobase/pull/6833)) von @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.27](https://www.nocobase.com/en/blog/v1.7.0-beta.27)

*Veröffentlichungsdatum: 2025-05-04*

#### 🎉 Neue Funktionen

- **[client]** Unterstützt Variablen im Titel und Inhalt der sekundären Bestätigung ([#6787](https://github.com/nocobase/nocobase/pull/6787)) von @katherinehhh
- **[Vorlagendruck]**

  - Unterstützung für dynamische Bild- und Barcode-Rendering in Dokumentvorlagen. von @sheldon66
  - Funktion: Unterstützt `{ label, value }` Select-Optionen im Vorlagendruck. von @sheldon66
- **[Block: Baum]** Filterbaum-Block unterstützt Verknüpfungsregeln von @katherinehhh
- **[Datenvisualisierung: ECharts]** "Y-Achse invertieren"-Einstellung für Balkendiagramme hinzugefügt von @2013xile

#### 🚀 Verbesserungen

- **[client]** Optimiert den Stil der "Hinzufügen"-Schaltfläche in Untertabellen und richtet den Paginator in derselben Zeile aus ([#6790](https://github.com/nocobase/nocobase/pull/6790)) von @katherinehhh
- **[Dateimanager]** OSS-Timeout-Option hinzugefügt, Standard 10 Min. ([#6795](https://github.com/nocobase/nocobase/pull/6795)) von @mytharcher
- **[Passwortrichtlinie]** Standard-Passwortablauf auf "Nie ablaufen" geändert von @2013xile

#### 🐛 Fehlerbehebungen

- **[Datenbank]**

  - Behebt Testfälle ([#6811](https://github.com/nocobase/nocobase/pull/6811)) von @mytharcher
  - Vermeidet Fehler, wenn der Datentyp kein String ist ([#6797](https://github.com/nocobase/nocobase/pull/6797)) von @mytharcher
- **[client]**

  - Wenn die Variablenauswahl asynchrones Laden erfordert, geht das zuletzt ausgewählte Menü verloren. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) von @gchust
  - Behebt das Problem, dass Unterfelder von 1:n-Feldern nicht als Filteroptionen in Filterformularen ausgewählt werden können ([#6809](https://github.com/nocobase/nocobase/pull/6809)) von @zhangzhonghe
  - Problem bei der Konfiguration von Verknüpfungsregeln in Unterformularen (Popup) innerhalb von Untertabellen ([#6803](https://github.com/nocobase/nocobase/pull/6803)) von @katherinehhh
  - Mehrere Fehlermeldungen werden angezeigt, wenn eine Validierungsregel in Formularfeldern verletzt wird ([#6805](https://github.com/nocobase/nocobase/pull/6805)) von @katherinehhh
  - Assoziationsfeld sendet keine Daten, wenn ein Feld aus der verknüpften Sammlung angezeigt wird ([#6798](https://github.com/nocobase/nocobase/pull/6798)) von @katherinehhh
  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) von @katherinehhh
- **[Authentifizierung]** Ändern des Authentifikatornamens nicht erlaubt ([#6808](https://github.com/nocobase/nocobase/pull/6808)) von @2013xile
- **[Aktion: Benutzerdefinierte Anfrage]** Antwort der benutzerdefinierten Anfrage, die auf Variable gesetzt ist, wird nicht korrekt angezeigt ([#6793](https://github.com/nocobase/nocobase/pull/6793)) von @katherinehhh

### [v1.7.0-beta.28](https://www.nocobase.com/en/blog/v1.7.0-beta.28)

*Veröffentlichungsdatum: 2025-05-06*

#### 🚀 Verbesserungen

- **[client]** RichText-Komponente unterstützt modules- und formats-Props ([#6807](https://github.com/nocobase/nocobase/pull/6807)) von @jiannx

#### 🐛 Fehlerbehebungen

- **[Verifizierung]** Behebt Probleme des Migrationsskripts ([#6820](https://github.com/nocobase/nocobase/pull/6820)) von @2013xile
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem mit der Aktionsverknüpfung des ausgelösten Workflows von @katherinehhh

### [v1.7.0-beta.29](https://www.nocobase.com/en/blog/v1.7.0-beta.29)

*Veröffentlichungsdatum: 2025-05-07*

#### 🎉 Neue Funktionen

- **[Block: iframe]** Iframe-Block unterstützt die Konfiguration des allow-Attributs ([#6824](https://github.com/nocobase/nocobase/pull/6824)) von @zhangzhonghe

### [v1.7.0-beta.30](https://www.nocobase.com/en/blog/v1.7.0-beta.30)

*Veröffentlichungsdatum: 2025-05-08*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Wenn die Relationsfeldkomponente des Filterformulars auf eine Datenauswahl geändert wird, fehlt das Konfigurationselement "Mehrfachauswahl zulassen" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) von @zhangzhonghe
  - Tabellenauswahl im Filterformular, abnormaler Stil ([#6827](https://github.com/nocobase/nocobase/pull/6827)) von @zhangzhonghe
  - In verschachtelten Unterseiten wird die Blockliste nicht angezeigt, wenn die Maus über die Schaltfläche "Block hinzufügen" bewegt wird ([#6832](https://github.com/nocobase/nocobase/pull/6832)) von @zhangzhonghe
  - Mehrfach-Assoziationsfeld konnte nicht gesendet werden, wenn Felder aus der Assoziationssammlung angezeigt wurden ([#6833](https://github.com/nocobase/nocobase/pull/6833)) von @katherinehhh
  - Es können keine anderen Schaltflächen auf die Duplizieren-Schaltfläche gezogen werden ([#6822](https://github.com/nocobase/nocobase/pull/6822)) von @katherinehhh
  - Stilproblem der Seitenleiste von Untertabellen im schreibgeschützten Modus ([#6830](https://github.com/nocobase/nocobase/pull/6830)) von @katherinehhh
- **[Datenbank]** Behebt, dass die belongs-to-Assoziation nicht in appends geladen wird, wenn der Fremdschlüssel unter MariaDB bigInt ist ([#6823](https://github.com/nocobase/nocobase/pull/6823)) von @mytharcher
- **[Sammlungsfeld: Anhang(URL)]** Anhang(URL)-Felder sollten keine Wertkonfiguration in Verknüpfungsregeln erlauben ([#6831](https://github.com/nocobase/nocobase/pull/6831)) von @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.13](https://www.nocobase.com/en/blog/v1.7.0-alpha.13)

*Veröffentlichungsdatum: 2025-05-08*

#### 🎉 Neue Funktionen

- **[client]**

  - Unterstützt Variablen im Titel und Inhalt der sekundären Bestätigung ([#6787](https://github.com/nocobase/nocobase/pull/6787)) von @katherinehhh
  - Unterstützt die Konfiguration von Verknüpfungsregeln in Blöcken für dynamisches Ein-/Ausblenden ([#6636](https://github.com/nocobase/nocobase/pull/6636)) von @katherinehhh
- **[undefined]** Fügt publish ci für license kit hinzu ([#6786](https://github.com/nocobase/nocobase/pull/6786)) von @jiannx
- **[Block: iframe]** Iframe-Block unterstützt die Konfiguration des allow-Attributs ([#6824](https://github.com/nocobase/nocobase/pull/6824)) von @zhangzhonghe
- **[Authentifizierung]** Unterstützt die Funktion "Passwort vergessen" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) von @zhangzhonghe
  Referenz: [Passwort vergessen](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Dateimanager]** Funktion: `getFileStream`-API für Datei-Streaming-Unterstützung hinzugefügt. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) von @sheldon66
- **[Aktion: Benutzerdefinierte Anfrage]** Unterstützt Antwortvariable in der Erfolgsmeldung der benutzerdefinierten Anfrageaktion ([#6694](https://github.com/nocobase/nocobase/pull/6694)) von @katherinehhh
- **[Vorlagendruck]** Funktion: Unterstützt `{ label, value }` Select-Optionen im Vorlagendruck. von @sheldon66
- **[Block: Baum]** Filterbaum-Block unterstützt Verknüpfungsregeln von @katherinehhh
- **[Datenvisualisierung: ECharts]** "Y-Achse invertieren"-Einstellung für Balkendiagramme hinzugefügt von @2013xile

#### 🚀 Verbesserungen

- **[client]**

  - RichText-Komponente unterstützt modules- und formats-Props ([#6807](https://github.com/nocobase/nocobase/pull/6807)) von @jiannx
  - Optimiert den Stil der "Hinzufügen"-Schaltfläche in Untertabellen und richtet den Paginator in derselben Zeile aus ([#6790](https://github.com/nocobase/nocobase/pull/6790)) von @katherinehhh
  - Zeigt den Schaltflächentitel als Tooltip beim Hovern über das Aktionssymbol an ([#6761](https://github.com/nocobase/nocobase/pull/6761)) von @katherinehhh
  - Behält die Referenzvorlagenfunktionalität bei ([#6743](https://github.com/nocobase/nocobase/pull/6743)) von @gchust
  - Anpassen der Upload-Nachricht ([#6757](https://github.com/nocobase/nocobase/pull/6757)) von @mytharcher
- **[utils]** Erhöht die Höhe der Filterbutton-Feldliste und sortiert/kategorisiert die Felder ([#6779](https://github.com/nocobase/nocobase/pull/6779)) von @zhangzhonghe
- **[Dateimanager]** OSS-Timeout-Option hinzugefügt, Standard 10 Min. ([#6795](https://github.com/nocobase/nocobase/pull/6795)) von @mytharcher
- **[Datenvisualisierung]** Erweiterte API für die Feldinterface-Konfiguration hinzugefügt ([#6742](https://github.com/nocobase/nocobase/pull/6742)) von @2013xile
- **[Passwortrichtlinie]** Standard-Passwortablauf auf "Nie ablaufen" geändert von @2013xile
- **[WeCom]** Priorisiert geschäftliche E-Mails gegenüber persönlichen E-Mails bei der Aktualisierung der Benutzer-E-Mail von @2013xile

#### 🐛 Fehlerbehebungen

- **[Datenbank]**

  - Import fehlgeschlagen aufgrund von Textfeldwerten. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) von @aaaaaajie
  - Behebt, dass die belongs-to-Assoziation nicht in appends geladen wird, wenn der Fremdschlüssel unter MariaDB bigInt ist ([#6823](https://github.com/nocobase/nocobase/pull/6823)) von @mytharcher
  - Behebt Testfälle ([#6811](https://github.com/nocobase/nocobase/pull/6811)) von @mytharcher
  - Vermeidet Fehler, wenn der Datentyp kein String ist ([#6797](https://github.com/nocobase/nocobase/pull/6797)) von @mytharcher
  - Fügt unavailableActions zu SQL-Sammlung und Ansichtssammlung hinzu ([#6765](https://github.com/nocobase/nocobase/pull/6765)) von @katherinehhh
- **[client]**

  - Mehrfach-Assoziationsfeld konnte nicht gesendet werden, wenn Felder aus der Assoziationssammlung angezeigt wurden ([#6833](https://github.com/nocobase/nocobase/pull/6833)) von @katherinehhh
  - Es können keine anderen Schaltflächen auf die Duplizieren-Schaltfläche gezogen werden ([#6822](https://github.com/nocobase/nocobase/pull/6822)) von @katherinehhh
  - Tabellenauswahl im Filterformular, abnormaler Stil ([#6827](https://github.com/nocobase/nocobase/pull/6827)) von @zhangzhonghe
  - Wenn die Relationsfeldkomponente des Filterformulars auf eine Datenauswahl geändert wird, fehlt das Konfigurationselement "Mehrfachauswahl zulassen" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) von @zhangzhonghe
  - In verschachtelten Unterseiten wird die Blockliste nicht angezeigt, wenn die Maus über die Schaltfläche "Block hinzufügen" bewegt wird ([#6832](https://github.com/nocobase/nocobase/pull/6832)) von @zhangzhonghe
  - Stilproblem der Seitenleiste von Untertabellen im schreibgeschützten Modus ([#6830](https://github.com/nocobase/nocobase/pull/6830)) von @katherinehhh
  - Problem bei der Konfiguration von Verknüpfungsregeln in Unterformularen (Popup) innerhalb von Untertabellen ([#6803](https://github.com/nocobase/nocobase/pull/6803)) von @katherinehhh
  - Wenn die Variablenauswahl asynchrones Laden erfordert, geht das zuletzt ausgewählte Menü verloren. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) von @gchust
  - Mehrere Fehlermeldungen werden angezeigt, wenn eine Validierungsregel in Formularfeldern verletzt wird ([#6805](https://github.com/nocobase/nocobase/pull/6805)) von @katherinehhh
  - Behebt das Problem, dass Unterfelder von 1:n-Feldern nicht als Filteroptionen in Filterformularen ausgewählt werden können ([#6809](https://github.com/nocobase/nocobase/pull/6809)) von @zhangzhonghe
  - Übergibt andere Props an die Variable.Input-Komponente. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) von @sheldon66
  - Assoziationsfeld sendet keine Daten, wenn ein Feld aus der verknüpften Sammlung angezeigt wird ([#6798](https://github.com/nocobase/nocobase/pull/6798)) von @katherinehhh
  - Im Filterformular führt das Wechseln des Feldoperators und anschließendes Aktualisieren der Seite zu einem Fehler ([#6781](https://github.com/nocobase/nocobase/pull/6781)) von @zhangzhonghe
  - Im Collapse-Block sollte das Klicken auf die Lösch-Schaltfläche im Suchfeld des Beziehungsfelds den Datenbereich nicht löschen ([#6782](https://github.com/nocobase/nocobase/pull/6782)) von @zhangzhonghe
  - Ausrichtungsproblem der Schaltfläche "Untergeordneten Datensatz hinzufügen" in der Baumtabelle ([#6791](https://github.com/nocobase/nocobase/pull/6791)) von @katherinehhh
  - Verschieben von Menüs vor oder nach Seiten-Tabs verbieten ([#6777](https://github.com/nocobase/nocobase/pull/6777)) von @zhangzhonghe
  - Tabellenblock zeigt doppelte Daten beim Filtern an ([#6792](https://github.com/nocobase/nocobase/pull/6792)) von @zhangzhonghe
  - Problem mit dem URL-Abfrageparameter-Operator ([#6770](https://github.com/nocobase/nocobase/pull/6770)) von @katherinehhh
  - Nur Exportaktion in der Ansichtssammlung wird unterstützt, wenn writableView false ist ([#6763](https://github.com/nocobase/nocobase/pull/6763)) von @katherinehhh
  - Falsche Daten für m:n-Array-Felder aus verknüpften Tabellen in Formularen abgerufen ([#6744](https://github.com/nocobase/nocobase/pull/6744)) von @2013xile
  - Unerwartete Erstellung von Assoziationsdaten beim Anzeigen eines Assoziationsfelds unter Unterformular/Untertabelle im Erstellungsformular ([#6727](https://github.com/nocobase/nocobase/pull/6727)) von @katherinehhh
- **[create-nocobase-app]** Temporäre Behebung des MariaDB-Problems durch Downgrade auf 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) von @chenos
- **[Aktion: Datensätze exportieren]** Behebt den Fehler beim Exportieren von Langtexten. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) von @aaaaaajie
- **[Sammlungsfeld: Anhang(URL)]** Anhang(URL)-Felder sollten keine Wertkonfiguration in Verknüpfungsregeln erlauben ([#6831](https://github.com/nocobase/nocobase/pull/6831)) von @katherinehhh
- **[Verifizierung]** Behebt Probleme des Migrationsskripts ([#6820](https://github.com/nocobase/nocobase/pull/6820)) von @2013xile
- **[Authentifizierung]** Ändern des Authentifikatornamens nicht erlaubt ([#6808](https://github.com/nocobase/nocobase/pull/6808)) von @2013xile
- **[Aktion: Benutzerdefinierte Anfrage]** Antwort der benutzerdefinierten Anfrage, die auf Variable gesetzt ist, wird nicht korrekt angezeigt ([#6793](https://github.com/nocobase/nocobase/pull/6793)) von @katherinehhh
- **[Block: Aktionspanel]** Aktionspanel-Symbol fehlt, wenn nur Symbole aktiviert sind ([#6773](https://github.com/nocobase/nocobase/pull/6773)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem mit der Aktionsverknüpfung des ausgelösten Workflows von @katherinehhh
- **[Workflow: Datumsberechnungsknoten]** Behebt Fehler in Legacy-Browsern ohne `Intl`-API von @mytharcher
- **[Vorlagendruck]** Behebt: Korrigiert die Berechtigungsvalidierungslogik, um unbefugte Aktionen zu verhindern. von @sheldon66
- **[Dateispeicher: S3(Pro)]** Zugriffs-URL-Ablauf ungültig von @jiannx
- **[Block: Baum]** Nach dem Verbinden über einen Fremdschlüssel führt das Klicken zum Auslösen des Filters zu leeren Filterbedingungen von @zhangzhonghe
