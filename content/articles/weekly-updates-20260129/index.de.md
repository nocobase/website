---
title: "Wöchentliche Updates｜Datei einfügen im AI-Chat unterstützt"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 22. bis 28. Januar 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an der neuesten Entwicklung des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.40](https://www.nocobase.com/en/blog/v1.9.40)

*Veröffentlichungsdatum: 2026-01-25*

### 🚀 Verbesserungen

- **[Office-Dateivorschau]** Weitere Dateitypen für die Vorschau auf Microsoft hinzugefügt ([#8500](https://github.com/nocobase/nocobase/pull/8500)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behoben: nanoid-Feld wird nach dem Absenden des Formulars nicht neu generiert ([#8491](https://github.com/nocobase/nocobase/pull/8491)) von @katherinehhh
  - Behoben: Doppelte Pflichtfeld-Validierungsmeldung beim Leeren eines Kaskadenfelds ([#8476](https://github.com/nocobase/nocobase/pull/8476)) von @katherinehhh
- **[Datenbank]**

  - Behoben: Fehler beim Filtern mit dem `empty`-Operator nach dem Neuladen einer Sammlung ([#8496](https://github.com/nocobase/nocobase/pull/8496)) von @2013xile
  - Behoben: Tiefenaktualisierung von verschachtelten Assoziationen ([#8492](https://github.com/nocobase/nocobase/pull/8492)) von @chenos
- **[Dateimanager]** Behoben: Der aus dem Request-Body ermittelte Dateiname wurde unerwartet dekodiert ([#8481](https://github.com/nocobase/nocobase/pull/8481)) von @mytharcher
- **[Datenquelle: Hauptdatenquelle]** Behoben: Beim Löschen von Datensätzen aus einem Viele-zu-Viele-Verknüpfungstabellenblock wurde die Einschränkung `onDelete: 'restrict'` des Verknüpfungsfelds nicht beachtet ([#8493](https://github.com/nocobase/nocobase/pull/8493)) von @2013xile
- **[Block: Iframe]** Behoben: Fehler beim Hinzufügen von aggregierten Variablen zu Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) von @zhangzhonghe
- **[Workflow: Webhook]** Behoben: Fehlende Body-Daten, wenn das Body-Parsing nicht konfiguriert ist von @mytharcher
- **[Vorlagendruck]** Behoben: Falsche Berechtigungslogik für den Druck-Button bei vereinigten Rollen. von @jiannx
- **[Workflow: Genehmigung]**

  - Behoben: Problem, bei dem Parallelität die Ausführung wiederholt fortsetzte von @mytharcher
  - Behoben: Problem, bei dem die Rückgabe einer Genehmigung an den vorherigen Knoten stattdessen zum Start zurückkehrte von @mytharcher
- **[Migrationsmanager]** Behoben: Ein potenzielles Einfrieren des Prozesses durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen von @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.17](https://www.nocobase.com/en/blog/v2.0.0-beta.17)

*Veröffentlichungsdatum: 2026-01-29*

### 🐛 Fehlerbehebungen

- **[Client]** Behoben: Bekannte Probleme im Zusammenhang mit der Filterung ([#8514](https://github.com/nocobase/nocobase/pull/8514)) von @zhangzhonghe
- **[KI-Mitarbeiter]** Behoben: Problem, dass das System nach dem Build nicht starten kann ([#8523](https://github.com/nocobase/nocobase/pull/8523)) von @cgyrock
- **[KI: Wissensdatenbank]** Behoben: Problem, dass das System nach dem Build nicht starten kann von @cgyrock

### [v2.0.0-beta.16](https://www.nocobase.com/en/blog/v2.0.0-beta.16)

*Veröffentlichungsdatum: 2026-01-27*

### 🎉 Neue Funktionen

- **[Client]** Untertabelle (Popup-Bearbeitung) Feldkomponente hinzugefügt ([#8280](https://github.com/nocobase/nocobase/pull/8280)) von @katherinehhh
- **[Workflow]** API zum Verschieben von Knoten hinzugefügt ([#8507](https://github.com/nocobase/nocobase/pull/8507)) von @mytharcher

### 🚀 Verbesserungen

- **[Client]**

  - Vollständiges Neurendern der Tabelle beim Aktualisieren einer Zelle verhindert ([#8349](https://github.com/nocobase/nocobase/pull/8349)) von @katherinehhh
  - Verbesserung des "to-many"-Unterformulars: Initialisierung mit einem Standardeintrag und Vermeidung der Datensatzerstellung bei Leerstand ([#8458](https://github.com/nocobase/nocobase/pull/8458)) von @katherinehhh
- **[Dateimanager]** Erweiterbare Vorschau für den Dateimanager hinzugefügt ([#8501](https://github.com/nocobase/nocobase/pull/8501)) von @mytharcher
- **[Workflow]** Routenpfad von Workflow-Unterseiten geändert, sodass alle Workflow-Seiten unter dem Präfix `/admin/settings/workflow` liegen ([#8519](https://github.com/nocobase/nocobase/pull/8519)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behoben: Doppelte Uhrzeit im Filter für DateTime-Werte ([#8506](https://github.com/nocobase/nocobase/pull/8506)) von @zhangzhonghe
  - Behoben: Problem, das die Verwendung von Formularvariablen zur Wertzuweisung in Verknüpfungsregeln für mehrstufige "to-many"-Unterformularfelder verhinderte ([#8518](https://github.com/nocobase/nocobase/pull/8518)) von @gchust
  - Behoben: Problem, bei dem Daten nach Änderungen in mehrstufigen Popups und über Blöcke hinweg nicht aktualisiert wurden ([#8471](https://github.com/nocobase/nocobase/pull/8471)) von @gchust
  - Behoben: Problem, bei dem Unterdetaildaten im schreibgeschützten Modus im Bearbeitungsformular nicht korrekt angezeigt wurden ([#8469](https://github.com/nocobase/nocobase/pull/8469)) von @katherinehhh
  - Behoben: Verfeinerungslogik für optionales targetKey ([#8333](https://github.com/nocobase/nocobase/pull/8333)) von @katherinehhh
  - Behoben: Falsche Filterparameter für das Beziehungsfeld "Auswählen" in der bearbeitbaren Untertabelle ([#8335](https://github.com/nocobase/nocobase/pull/8335)) von @katherinehhh
- **[Flow-Engine]** Behoben: FilterByTK-Problem, wenn filterTargetKey ein Ein-Element-Array in einer externen Datenquelle ist ([#8522](https://github.com/nocobase/nocobase/pull/8522)) von @katherinehhh
- **[KI-Mitarbeiter]** Behoben: Probleme mit inkonsistenter Konfiguration auswählbarer Felder zwischen KI-Modellierung und Datenquellenverwaltung ([#8488](https://github.com/nocobase/nocobase/pull/8488)) von @cgyrock
- **[E-Mail-Manager]** E-Mail-Text klappt nicht ein, wenn Text ausgewählt ist. Behoben: Fehler beim Herunterladen von Anhängen von @jiannx

### [v2.0.0-beta.15](https://www.nocobase.com/en/blog/v2.0.0-beta.15)

*Veröffentlichungsdatum: 2026-01-25*

### 🚀 Verbesserungen

- **[Office-Dateivorschau]** Weitere Dateitypen für die Vorschau auf Microsoft hinzugefügt ([#8500](https://github.com/nocobase/nocobase/pull/8500)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Datenbank]** Behoben: Fehler beim Filtern mit dem `empty`-Operator nach dem Neuladen einer Sammlung ([#8496](https://github.com/nocobase/nocobase/pull/8496)) von @2013xile
- **[Vorlagendruck]** Behoben: Falsche Berechtigungslogik für den Druck-Button bei vereinigten Rollen. von @jiannx
- **[Workflow: Genehmigung]** Behoben: Problem, dass im 1.x-Genehmigungsdatensatz-Popup ein Fehler ausgelöst wurde von @mytharcher
- **[Migrationsmanager]** Behoben: Ein potenzielles Einfrieren des Prozesses durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen von @cgyrock

### [v2.0.0-beta.14](https://www.nocobase.com/en/blog/v2.0.0-beta.14)

*Veröffentlichungsdatum: 2026-01-23*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Unterstützung für Datei-Einfügen im KI-Chat ([#8487](https://github.com/nocobase/nocobase/pull/8487)) von @heziqiang

### 🚀 Verbesserungen

- **[Client]**

  - Verbesserung des "to-many"-Unterformulars: Initialisierung mit einem Standardeintrag und Vermeidung der Datensatzerstellung bei Leerstand ([#8473](https://github.com/nocobase/nocobase/pull/8473)) von @katherinehhh
  - Verbesserung der Upload- und Bearbeitungsschaltflächen für Anhangs-/Dateifelder in der Untertabelle, um Benutzer besser zum Klicken auf "Hochladen" zu führen ([#8474](https://github.com/nocobase/nocobase/pull/8474)) von @katherinehhh
- **[Flow-Engine]** Verbesserung von ctx.libs in runjs zur Unterstützung von bedarfsgesteuertem Laden und Hinzufügen vordefinierter Bibliotheken: lodash, math und formula ([#8468](https://github.com/nocobase/nocobase/pull/8468)) von @gchust
- **[Fehlerbehandlung]** Bereinigung von SQL-Referenzfehlern ([#8464](https://github.com/nocobase/nocobase/pull/8464)) von @2013xile
- **[Workflow: Genehmigung]** Implementierung der Zugriffskontrolle für APIs, um unbefugte Datenoperationen zu verhindern von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behoben: Popups des Rich-Text-Editors werden verdeckt ([#8443](https://github.com/nocobase/nocobase/pull/8443)) von @zhangzhonghe
  - Behoben: Doppelte Uhrzeit im Filter für DateTime-Werte ([#8484](https://github.com/nocobase/nocobase/pull/8484)) von @zhangzhonghe
  - Behoben: nanoid-Feld wird nach dem Absenden des Formulars nicht neu generiert ([#8491](https://github.com/nocobase/nocobase/pull/8491)) von @katherinehhh
  - Behoben: Doppelte Pflichtfeld-Validierungsmeldung beim Leeren eines Kaskadenfelds ([#8476](https://github.com/nocobase/nocobase/pull/8476)) von @katherinehhh
  - Filterliste zum Entfernen von Duplikaten ([#8431](https://github.com/nocobase/nocobase/pull/8431)) von @jiannx
  - Behoben: Problem, dass das Konfigurationsmenü in Chrome 144 nicht angezeigt wird ([#8470](https://github.com/nocobase/nocobase/pull/8470)) von @zhangzhonghe
- **[Datenbank]**

  - Behoben: Tiefenaktualisierung von verschachtelten Assoziationen ([#8492](https://github.com/nocobase/nocobase/pull/8492)) von @chenos
- **[Server]** Behoben: Version von `mathjs` in gemeinsamen Abhängigkeiten ([#8475](https://github.com/nocobase/nocobase/pull/8475)) von @mytharcher
- **[Flow-Engine]** Behoben: Problem, dass das Schließen eines eingebetteten Popups einen Fehler verursachte, nachdem nacheinander das Konfigurationspopup für Verknüpfungsregeln und das Popup für die Ereignisflusskonfiguration geöffnet wurden ([#8368](https://github.com/nocobase/nocobase/pull/8368)) von @gchust
- **[Datenquelle: Hauptdatenquelle]** Behoben: Beim Löschen von Datensätzen aus einem Viele-zu-Viele-Verknüpfungstabellenblock wurde die Einschränkung `onDelete: 'restrict'` des Verknüpfungsfelds nicht beachtet ([#8493](https://github.com/nocobase/nocobase/pull/8493)) von @2013xile
- **[Asynchroner Aufgabenmanager]** Behoben: Problem, dass der durch asynchronen Import ausgelöste Workflow verzögert ausgeführt wurde ([#8478](https://github.com/nocobase/nocobase/pull/8478)) von @mytharcher
- **[Block: Iframe]** Behoben: Fehler beim Hinzufügen von aggregierten Variablen zu Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) von @zhangzhonghe
- **[UI-Vorlagen]** Behoben: Problem, dass Referenzvorlagenblöcke keine Datenbereiche über Ereignisflusseinstellungen festlegen konnten ([#8472](https://github.com/nocobase/nocobase/pull/8472)) von @gchust
- **[Dateimanager]** Behoben: Der aus dem Request-Body ermittelte Dateiname wurde unerwartet dekodiert ([#8481](https://github.com/nocobase/nocobase/pull/8481)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Behoben: Problem, dass der durch asynchronen Import ausgelöste Workflow verzögert ausgeführt wurde von @mytharcher
- **[Workflow: Webhook]** Behoben: Fehlende Body-Daten, wenn das Body-Parsing nicht konfiguriert ist von @mytharcher
- **[Vorlagendruck]** Fußzeilen-Buttons aus der Druckvorlagenkonfiguration entfernt von @katherinehhh
- **[Workflow: Genehmigung]**

  - Behoben: Problem, bei dem die Rückgabe einer Genehmigung an den vorherigen Knoten stattdessen zum Start zurückkehrte von @mytharcher
  - Behoben: Problem, bei dem Parallelität die Ausführung wiederholt fortsetzte von @mytharcher
  - Behoben: Problem, dass Felder auf Genehmigungsaufgabenkarten nicht angezeigt werden von @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.68](https://www.nocobase.com/en/blog/v2.0.0-alpha.68)

*Veröffentlichungsdatum: 2026-01-27*

### 🎉 Neue Funktionen

- **[Workflow]** API zum Verschieben von Knoten hinzugefügt ([#8507](https://github.com/nocobase/nocobase/pull/8507)) von @mytharcher

### [v2.0.0-alpha.67](https://www.nocobase.com/en/blog/v2.0.0-alpha.67)

*Veröffentlichungsdatum: 2026-01-26*

### 🎉 Neue Funktionen

- **[Server]** Überarbeitung der App-Überwachung zur Unterstützung der Multi-App-Verwaltung über verschiedene Szenarien hinweg ([#8043](https://github.com/nocobase/nocobase/pull/8043)) von @2013xile
- **[Client]** Untertabelle (Popup-Bearbeitung) Feldkomponente hinzugefügt ([#8280](https://github.com/nocobase/nocobase/pull/8280)) von @katherinehhh
- **[KI-Mitarbeiter]** Unterstützung für Datei-Einfügen im KI-Chat ([#8487](https://github.com/nocobase/nocobase/pull/8487)) von @heziqiang

### 🚀 Verbesserungen

- **[Client]**

  - Verbesserung der Upload- und Bearbeitungsschaltflächen für Anhangs-/Dateifelder in der Untertabelle, um Benutzer besser zum Klicken auf "Hochladen" zu führen ([#8474](https://github.com/nocobase/nocobase/pull/8474)) von @katherinehhh
  - Verbesserung des "to-many"-Unterformulars: Initialisierung mit einem Standardeintrag und Vermeidung der Datensatzerstellung bei Leerstand ([#8473](https://github.com/nocobase/nocobase/pull/8473)) von @katherinehhh
- **[Flow-Engine]** Verbesserung von ctx.libs in runjs zur Unterstützung von bedarfsgesteuertem Laden und Hinzufügen vordefinierter Bibliotheken: lodash, math und formula ([#8468](https://github.com/nocobase/nocobase/pull/8468)) von @gchust
- **[Server]** Unterstützung für die Konfiguration einer CORS-Origin-Whitelist ([#8454](https://github.com/nocobase/nocobase/pull/8454)) von @2013xile
- **[Dateimanager]** Erweiterbare Vorschau für den Dateimanager hinzugefügt ([#8501](https://github.com/nocobase/nocobase/pull/8501)) von @mytharcher
- **[Office-Dateivorschau]** Weitere Dateitypen für die Vorschau auf Microsoft hinzugefügt ([#8500](https://github.com/nocobase/nocobase/pull/8500)) von @mytharcher
- **[Fehlerbehandlung]** Bereinigung von SQL-Referenzfehlern ([#8464](https://github.com/nocobase/nocobase/pull/8464)) von @2013xile
- **[Aktion: Datensätze exportieren]** Verbesserung des Datenbereichs der Exportaktion basierend auf ausgewählten Datensätzen oder Ressourcenfiltern ([#8442](https://github.com/nocobase/nocobase/pull/8442)) von @katherinehhh
- **[Aktion: Datensätze exportieren Pro]** Verbesserung des Datenbereichs der Exportaktion basierend auf ausgewählten Datensätzen oder Ressourcenfiltern von @katherinehhh
- **[Workflow: Genehmigung]** Implementierung der Zugriffskontrolle für APIs, um unbefugte Datenoperationen zu verhindern von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behoben: Doppelte Uhrzeit im Filter für DateTime-Werte ([#8484](https://github.com/nocobase/nocobase/pull/8484)) von @zhangzhonghe
  - Behoben: nanoid-Feld wird nach dem Absenden des Formulars nicht neu generiert ([#8491](https://github.com/nocobase/nocobase/pull/8491)) von @katherinehhh
  - Behoben: Popups des Rich-Text-Editors werden verdeckt ([#8443](https://github.com/nocobase/nocobase/pull/8443)) von @zhangzhonghe
  - Filterliste zum Entfernen von Duplikaten ([#8431](https://github.com/nocobase/nocobase/pull/8431)) von @jiannx
  - Behoben: Doppelte Pflichtfeld-Validierungsmeldung beim Leeren eines Kaskadenfelds ([#8476](https://github.com/nocobase/nocobase/pull/8476)) von @katherinehhh
  - Behoben: Problem, dass das Konfigurationsmenü in Chrome 144 nicht angezeigt wird ([#8470](https://github.com/nocobase/nocobase/pull/8470)) von @zhangzhonghe
  - Behoben: Problem, bei dem Unterdetaildaten im schreibgeschützten Modus im Bearbeitungsformular nicht korrekt angezeigt wurden ([#8469](https://github.com/nocobase/nocobase/pull/8469)) von @katherinehhh
  - Behoben: Problem, dass das Popup "Benutzerdefinierte Variablen" verdeckt wird ([#8463](https://github.com/nocobase/nocobase/pull/8463)) von @zhangzhonghe
  - Behoben: Problem, dass die Sortiereinstellungen für Sammlungsfeldgruppen nicht wirksam wurden ([#8453](https://github.com/nocobase/nocobase/pull/8453)) von @katherinehhh
  - Behoben: Problem, dass der Button "Spalteneinstellungen" in der Tabelle nicht funktioniert ([#8441](https://github.com/nocobase/nocobase/pull/8441)) von @zhangzhonghe
  - Behoben: Problem, dass das Auswahl-Popup für das Dateiverknüpfungsfeld einen falschen Z-Index hatte und die Popup-Konfiguration nicht korrekt gespeichert werden konnte ([#8446](https://github.com/nocobase/nocobase/pull/8446)) von @gchust
  - Behoben: Problem beim Bearbeiten einer Sammlung in der grafischen Oberfläche ([#8451](https://github.com/nocobase/nocobase/pull/8451)) von @katherinehhh
- **[Datenbank]**

  - Behoben: Fehler beim Filtern mit dem `empty`-Operator nach dem Neuladen einer Sammlung ([#8496](https://github.com/nocobase/nocobase/pull/8496)) von @2013xile
  - Behoben: Tiefenaktualisierung von verschachtelten Assoziationen ([#8492](https://github.com/nocobase/nocobase/pull/8492)) von @chenos
- **[Server]** Behoben: Version von `mathjs` in gemeinsamen Abhängigkeiten ([#8475](https://github.com/nocobase/nocobase/pull/8475)) von @mytharcher
- **[Flow-Engine]**

  - Behoben: Problem, dass das Schließen eines eingebetteten Popups einen Fehler verursachte, nachdem nacheinander das Konfigurationspopup für Verknüpfungsregeln und das Popup für die Ereignisflusskonfiguration geöffnet wurden ([#8368](https://github.com/nocobase/nocobase/pull/8368)) von @gchust
  - Behoben: Problem, dass durch wiederholtes Klicken auf das Konfigurationsmenü mehrere Konfigurations-Popups geöffnet werden konnten ([#8448](https://github.com/nocobase/nocobase/pull/8448)) von @gchust
  - Behoben: Problem, dass Variablen in runjs-Codeparametern vor der Ausführung aufgelöst wurden ([#8445](https://github.com/nocobase/nocobase/pull/8445)) von @gchust
  - Behoben: Problem, dass Popup-Variablen im Schnellerstellungs-Popup des Datenauswahlfelds nicht ausgewählt werden konnten ([#8450](https://github.com/nocobase/nocobase/pull/8450)) von @gchust
- **[KI-Mitarbeiter]** Behoben: Probleme mit inkonsistenter Konfiguration auswählbarer Felder zwischen KI-Modellierung und Datenquellenverwaltung ([#8488](https://github.com/nocobase/nocobase/pull/8488)) von @cgyrock
- **[Datenquelle: Hauptdatenquelle]** Behoben: Beim Löschen von Datensätzen aus einem Viele-zu-Viele-Verknüpfungstabellenblock wurde die Einschränkung `onDelete: 'restrict'` des Verknüpfungsfelds nicht beachtet ([#8493](https://github.com/nocobase/nocobase/pull/8493)) von @2013xile
- **[Block: Iframe]** Behoben: Fehler beim Hinzufügen von aggregierten Variablen zu Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) von @zhangzhonghe
- **[Asynchroner Aufgabenmanager]** Behoben: Problem, dass der durch asynchronen Import ausgelöste Workflow verzögert ausgeführt wurde ([#8478](https://github.com/nocobase/nocobase/pull/8478)) von @mytharcher
- **[Dateimanager]** Behoben: Der aus dem Request-Body ermittelte Dateiname wurde unerwartet dekodiert ([#8481](https://github.com/nocobase/nocobase/pull/8481)) von @mytharcher
- **[UI-Vorlagen]** Behoben: Problem, dass Referenzvorlagenblöcke keine Datenbereiche über Ereignisflusseinstellungen festlegen konnten ([#8472](https://github.com/nocobase/nocobase/pull/8472)) von @gchust
- **[Mobil (veraltet)]** Veraltetes Mobile-Plugin (ersetzt durch das ui-layout-Plugin ab Version 2.0) ([#8456](https://github.com/nocobase/nocobase/pull/8456)) von @chenos
- **[Aktion: Datensätze importieren Pro]** Behoben: Problem, dass der durch asynchronen Import ausgelöste Workflow verzögert ausgeführt wurde von @mytharcher
- **[Workflow: Webhook]** Behoben: Fehlende Body-Daten, wenn das Body-Parsing nicht konfiguriert ist von @mytharcher
- **[Vorlagendruck]**

  - Behoben: Falsche Berechtigungslogik für den Druck-Button bei vereinigten Rollen. von @jiannx
  - Fußzeilen-Buttons aus der Druckvorlagenkonfiguration entfernt von @katherinehhh
- **[Workflow: Genehmigung]**

  - Behoben: Problem, dass Felder auf Genehmigungsaufgabenkarten nicht angezeigt werden von @zhangzhonghe
  - Behoben: Problem, bei dem die Rückgabe einer Genehmigung an den vorherigen Knoten stattdessen zum Start zurückkehrte von @mytharcher
  - Behoben: Problem, bei dem Parallelität die Ausführung wiederholt fortsetzte von @mytharcher
  - Behoben: Problem, dass im 1.x-Genehmigungsdatensatz-Popup ein Fehler ausgelöst wurde von @mytharcher
- **[E-Mail-Manager]**

  - Behoben: Problem, dass das E-Mail-Konfigurations-Popup verdeckt wird von @zhangzhonghe
  - Behoben: Problem mit E-Mails im selben Postfach zwischen mehreren Benutzern und Leistungsoptimierung von @jiannx
- **[Migrationsmanager]** Behoben: Ein potenzielles Einfrieren des Prozesses durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen von @cgyrock
