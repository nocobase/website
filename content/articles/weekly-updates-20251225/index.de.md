---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Hinzufügen neuer Systemvariablen im Workflow, einschließlich `instanceId` und `genSnowflakeId`, und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.32](https://www.nocobase.com/en/blog/v1.9.32)

*Veröffentlichungsdatum: 2025-12-24*

### 🎉 Neue Funktionen

- **[Workflow]** Neue Systemvariablen im Workflow hinzugefügt, darunter `instanceId` und `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Behebung eines Stack-Overflows, der durch eine Endlosschleife beim verzögerten Laden von Anzeige-Assoziationsfeldern verursacht wurde ([#8262](https://github.com/nocobase/nocobase/pull/8262)) von @zhangzhonghe
- **[Aktion: Datensätze importieren]** Behebung des Problems, dass der Zeilenindex in der Fehlermeldung bei einem Fehler in der Importaktion immer 1 war ([#8244](https://github.com/nocobase/nocobase/pull/8244)) von @mytharcher
- **[Workflow: Manueller Knoten]** Behebung des Problems, dass ein Fehler ausgelöst wurde, wenn die Ausführung eines gelöschten Workflows abgebrochen wurde ([#8258](https://github.com/nocobase/nocobase/pull/8258)) von @mytharcher
- **[Sammlungsfeld: Sequenz]** Behebung eines Fehlers, wenn der Feld-Sequenz-Reparaturbefehl auf eine nicht existierende Sammlung in der aktuellen Umgebung trifft. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) von @cgyrock
- **[Aktion: Datensätze importieren Pro]** Behebung der Logik für Eindeutigkeitsprüfungen, die einen Fehler auslöste, wenn der Wert des eindeutigen Feldes null war von @mytharcher
- **[Workflow: Genehmigung]** Behebung des doppelten Rollbacks derselben Transaktion von @mytharcher

### [v1.9.31](https://www.nocobase.com/en/blog/v1.9.31)

*Veröffentlichungsdatum: 2025-12-22*

### 🚀 Verbesserungen

- **[Asynchroner Aufgabenmanager]** Verbesserte Fehlerbehandlung bei Bereinigungsaufgaben durch Hinzufügen von Ausnahmefangmechanismen, um Anwendungsabstürze zu verhindern ([#8215](https://github.com/nocobase/nocobase/pull/8215)) von @mytharcher
- **[Workflow]** Ursprüngliche Workflow-Instanz zur Duplizierungs-API hinzugefügt ([#8225](https://github.com/nocobase/nocobase/pull/8225)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Behandlung leerer Verknüpfungsregeln, um Fehler zu vermeiden ([#8239](https://github.com/nocobase/nocobase/pull/8239)) von @zhangzhonghe
- **[Abteilungen]** Behebung eines Problems, bei dem die Aggregatsuche keine Benutzer finden konnte ([#8222](https://github.com/nocobase/nocobase/pull/8222)) von @2013xile

### [v1.9.30](https://www.nocobase.com/en/blog/v1.9.30)

*Veröffentlichungsdatum: 2025-12-19*

### 🚀 Verbesserungen

- **[Workflow]** Verbesserung der Beschreibung des `changed`-Feldes im Sammlungsereignis ([#8216](https://github.com/nocobase/nocobase/pull/8216)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[cli]** license-kit ist kompatibel mit dem Fall, dass DB_PASSWORD leer ist ([#8220](https://github.com/nocobase/nocobase/pull/8220)) von @jiannx
- **[Datenbank]** Behebung der Inkonsistenz bei Datumsfeldabfragen zwischen Haupt- und externen Datenquellen ([#8181](https://github.com/nocobase/nocobase/pull/8181)) von @cgyrock
- **[Lizenzeinstellungen]** Behebung der abnormalen Anzeige des lizenzierten Plugins ([#8214](https://github.com/nocobase/nocobase/pull/8214)) von @jiannx
- **[Workflow: Genehmigung]**

  - Behebung des Problems, dass die Genehmigung eine Assoziation zur Erstellung eines neuen Datensatzes herstellt von @mytharcher
  - Behebung des Problems, dass die Genehmigung eine n-zu-m Assoziation zur Erstellung neuer Datensätze herstellt von @mytharcher

### [v1.9.29](https://www.nocobase.com/en/blog/v1.9.29)

*Veröffentlichungsdatum: 2025-12-18*

### 🐛 Fehlerbehebungen

- **[Workflow]** Behebung des Problems, dass ein Fehler ausgelöst wurde, wenn eine Workflow-Version gelöscht wurde, die nicht die aktuelle ist ([#8203](https://github.com/nocobase/nocobase/pull/8203)) von @mytharcher
- **[Migrationsmanager]** Behebung der fehlenden Migrationsbeschreibung und Setzen der aktuellen Zeit als Standard von @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.58](https://www.nocobase.com/en/blog/v2.0.0-alpha.58)

*Veröffentlichungsdatum: 2025-12-24*

### 🐛 Fehlerbehebungen

- **[KI-Mitarbeiter]** Behebung des Problems, dass der Nachrichteninhalt des LLM-Knotens nicht angezeigt wurde ([#8257](https://github.com/nocobase/nocobase/pull/8257)) von @heziqiang

### [v2.0.0-alpha.57](https://www.nocobase.com/en/blog/v2.0.0-alpha.57)

*Veröffentlichungsdatum: 2025-12-24*

### 🎉 Neue Funktionen

- **[Workflow]** Neue Systemvariablen im Workflow hinzugefügt, darunter `instanceId` und `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) von @mytharcher

### 🚀 Verbesserungen

- **[client]** Verwendung von Select für die Konfiguration der Spaltenbreite von Aktionen ([#8218](https://github.com/nocobase/nocobase/pull/8218)) von @katherinehhh
- **[KI-Mitarbeiter]** Behebung, dass KI-Mitarbeiter bei der ersten Bearbeitungseinreichung nicht reagierten<br/>Löschen des unnötigen integrierten KI-Mitarbeiters "Avery Form Assistant"<br/>Hinzufügen von Standard-Anfangsrollenberechtigungen für integrierte KI-Mitarbeiter<br/>Verbesserung der Fehlerbehandlung und des Ausgabeverhaltens von KI-Mitarbeitern<br/>Hinzufügen von Unterstützung für KI zum Zugriff auf modale Kontextvariablen<br/>Hinzufügen von Unterstützung für externe Datenquellen für KI<br/>Behebung einer falschen Gesprächskürzung, wenn KI große Datenmengen verarbeitet ([#8191](https://github.com/nocobase/nocobase/pull/8191)) von @heziqiang
- **[Workflow]**

  - Ursprüngliche Workflow-Instanz zur Duplizierungs-API hinzugefügt ([#8225](https://github.com/nocobase/nocobase/pull/8225)) von @mytharcher
  - Verbesserung der Beschreibung des `changed`-Feldes im Sammlungsereignis ([#8216](https://github.com/nocobase/nocobase/pull/8216)) von @mytharcher
- **[Asynchroner Aufgabenmanager]** Verbesserte Fehlerbehandlung bei Bereinigungsaufgaben durch Hinzufügen von Ausnahmefangmechanismen, um Anwendungsabstürze zu verhindern ([#8215](https://github.com/nocobase/nocobase/pull/8215)) von @mytharcher
- **[Block: Aktionspanel]** Verbesserte Anzeige von ausgeblendeten Blöcken, Aktionen und Feldern im Konfigurationsmodus ([#8174](https://github.com/nocobase/nocobase/pull/8174)) von @katherinehhh
- **[UI-Vorlagen]** UI-Vorlagen-Plugin hinzugefügt, das die Möglichkeit zur Wiederverwendung von Blockvorlagen und Popup-Vorlagen bietet. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) von @gchust
- **[Aktion: Datensätze exportieren Pro]** Import Pro & Export Pro Aktion unterstützt jetzt Berechtigungssteuerung von @katherinehhh
- **[Workflow: Genehmigung]** Aktualisierung von `approval.data` auf die neueste Version des genehmigenden Datensatzes bei Ausführungsende, um dem Anzeigemodus "Neueste" zu entsprechen von @mytharcher

### 🐛 Fehlerbehebungen

- **[flow-engine]**

  - Behebung eines Berechtigungsprüfungsproblems beim Hinzufügen von Unterdatensätzen in einer Baumtabelle ([#8240](https://github.com/nocobase/nocobase/pull/8240)) von @katherinehhh
  - Behebung eines Problems, bei dem einige Popup-Datensatz-bezogene Variablen in Blöcken falsch angezeigt wurden. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) von @gchust
  - Behebung des Problems, dass Aktionen oder Tabs, die nach dem Verschieben von Aktionen oder Tabs hinzugefügt wurden, nicht angezeigt werden. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) von @gchust
  - Berechtigungsprüfungsproblem in externen Datenquellen ([#8221](https://github.com/nocobase/nocobase/pull/8221)) von @katherinehhh
  - Behebung, dass Aktionen externer Datenquellen trotz vorhandener Berechtigung ausgeblendet wurden ([#8217](https://github.com/nocobase/nocobase/pull/8217)) von @katherinehhh
- **[client]**

  - Behandlung leerer Verknüpfungsregeln, um Fehler zu vermeiden ([#8239](https://github.com/nocobase/nocobase/pull/8239)) von @zhangzhonghe
  - Behebung des Problems, dass die Aktionsspalte des Tabellenblocks nicht entfernt werden konnte. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) von @gchust
  - Behebung des Problems, dass die Vorschauausführung kompilierten JSX-Code zurück in stepParams schrieb, was dazu führte, dass der gespeicherte Quellcode überschrieben wurde. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) von @gchust
  - Behebung eines S3 Pro Anhangs-Upload-Fehlers und Verbesserung der Dateivorschau ([#8211](https://github.com/nocobase/nocobase/pull/8211)) von @katherinehhh
- **[cli]** license-kit ist kompatibel mit dem Fall, dass DB_PASSWORD leer ist ([#8220](https://github.com/nocobase/nocobase/pull/8220)) von @jiannx
- **[Datenbank]** Behebung der Inkonsistenz bei Datumsfeldabfragen zwischen Haupt- und externen Datenquellen ([#8181](https://github.com/nocobase/nocobase/pull/8181)) von @cgyrock
- **[Sammlungsfeld: Sequenz]** Behebung eines Fehlers, wenn der Feld-Sequenz-Reparaturbefehl auf eine nicht existierende Sammlung in der aktuellen Umgebung trifft. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) von @cgyrock
- **[Workflow: Manueller Knoten]** Behebung des Problems, dass ein Fehler ausgelöst wurde, wenn die Ausführung eines gelöschten Workflows abgebrochen wurde ([#8258](https://github.com/nocobase/nocobase/pull/8258)) von @mytharcher
- **[UI-Vorlagen]** Behebung eines Fehlers, bei dem das Öffnen eines Assoziationsfeld-Popups fälschlicherweise eine Nicht-Assoziationsfeld-Popup-Vorlage verwendete. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) von @gchust
- **[Abteilungen]** Behebung eines Problems, bei dem die Aggregatsuche keine Benutzer finden konnte ([#8222](https://github.com/nocobase/nocobase/pull/8222)) von @2013xile
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Behebung eines Problems, bei dem viele-zu-viele (Array)-Felder nicht erstellt werden konnten, wenn der Zielschlüsseltyp Snowflake ID (53-Bit) war ([#8226](https://github.com/nocobase/nocobase/pull/8226)) von @2013xile
- **[Lizenzeinstellungen]** Behebung der abnormalen Anzeige des lizenzierten Plugins ([#8214](https://github.com/nocobase/nocobase/pull/8214)) von @jiannx
- **[Aktion: Datensätze importieren]** Behebung des Problems, dass der Zeilenindex in der Fehlermeldung bei einem Fehler in der Importaktion immer 1 war ([#8244](https://github.com/nocobase/nocobase/pull/8244)) von @mytharcher
- **[Vorlagendruck]** Behebung, dass die Vorlagendruckanfrage nicht mit externen Datenquellen funktionierte von @katherinehhh
- **[Workflow: Genehmigung]**

  - Behebung des doppelten Rollbacks derselben Transaktion von @mytharcher
  - Behebung des Problems, dass die Genehmigung eine Assoziation zur Erstellung eines neuen Datensatzes herstellt von @mytharcher
  - Behebung des Problems, dass die Genehmigung eine n-zu-m Assoziation zur Erstellung neuer Datensätze herstellt von @mytharcher

### [v2.0.0-alpha.56](https://www.nocobase.com/en/blog/v2.0.0-alpha.56)

*Veröffentlichungsdatum: 2025-12-18*

### 🚀 Verbesserungen

- **[client]** Unterstützung für benutzerdefinierte Spaltenbreite für Tabellenspalten ([#8200](https://github.com/nocobase/nocobase/pull/8200)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[client]** Verhindern von Zeilen-Gesamtbreitenüberlauf während der Spaltengrößenänderung ([#8166](https://github.com/nocobase/nocobase/pull/8166)) von @zhangzhonghe
- **[flow-engine]** Behebung des Problems, dass das Absenden des Formulars in einem wiederverwendeten Modal über die Popup-UID die Blockdaten nicht aktualisiert. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) von @gchust
- **[Sammlungsfeld: Formel]** Behebung des Problems, dass BigInt-Felder nicht zu Detail- und Formularblöcken hinzugefügt werden können ([#8201](https://github.com/nocobase/nocobase/pull/8201)) von @katherinehhh
- **[Workflow]** Behebung des Problems, dass ein Fehler ausgelöst wurde, wenn eine Workflow-Version gelöscht wurde, die nicht die aktuelle ist ([#8203](https://github.com/nocobase/nocobase/pull/8203)) von @mytharcher
