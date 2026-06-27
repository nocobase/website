---
title: "NocoBase v2.0.0-alpha.67: Untertabelle (Popup-Bearbeitung) Feldkomponente hinzugefügt"
description: "Versionshinweise zu v2.0.0-alpha.67"
---

### 🎉 Neue Funktionen

- **[Server]** Überarbeitung des App-Supervisors zur Unterstützung der Multi-App-Verwaltung in verschiedenen Szenarien ([#8043](https://github.com/nocobase/nocobase/pull/8043)) von @2013xile

- **[Client]** Hinzufügen einer Untertabelle (Popup-Bearbeitung) als Feldkomponente ([#8280](https://github.com/nocobase/nocobase/pull/8280)) von @katherinehhh

- **[KI-Mitarbeiter]** Unterstützung für das Einfügen von Dateien im KI-Chat ([#8487](https://github.com/nocobase/nocobase/pull/8487)) von @heziqiang

### 🚀 Verbesserungen

- **[Client]**
  - Verbesserung der Upload- und Bearbeitungsschaltflächen für Anhangs-Felder in Untertabellen, um Benutzer besser zum Klicken auf "Hochladen" zu führen. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) von @katherinehhh

  - Verbesserung des "zu-viele"-Unterformulars, um mit einem Standardeintrag zu initialisieren und das Erstellen von Datensätzen zu vermeiden, wenn es leer gelassen wird ([#8473](https://github.com/nocobase/nocobase/pull/8473)) von @katherinehhh

  - Verbesserung des "zu-viele"-Unterformulars, um mit einem Standardeintrag zu initialisieren und das Erstellen von Datensätzen zu vermeiden, wenn es leer gelassen wird ([#8458](https://github.com/nocobase/nocobase/pull/8458)) von @katherinehhh

- **[Flow-Engine]** Verbesserung von ctx.libs in runjs zur Unterstützung von bedarfsgesteuertem Laden und Hinzufügen vordefinierter Bibliotheken: lodash, math und formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) von @gchust

- **[Server]** Unterstützung für die Konfiguration einer CORS-Ursprungs-Whitelist ([#8454](https://github.com/nocobase/nocobase/pull/8454)) von @2013xile

- **[Dateimanager]** Hinzufügen eines erweiterbaren Vorschauprogramms für den Dateimanager ([#8501](https://github.com/nocobase/nocobase/pull/8501)) von @mytharcher

- **[Office-Dateivorschau]** Hinzufügen weiterer Dateitypen für die Vorschau auf Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) von @mytharcher

- **[Fehlerbehandlung]** Bereinigung von SQL-Referenzfehlern ([#8464](https://github.com/nocobase/nocobase/pull/8464)) von @2013xile

- **[Aktion: Datensätze exportieren]** Verbesserung des Datenbereichs der Exportaktion basierend auf ausgewählten Datensätzen oder Ressourcenfiltern ([#8442](https://github.com/nocobase/nocobase/pull/8442)) von @katherinehhh

- **[Aktion: Datensätze exportieren Pro]** Verbesserung des Datenbereichs der Exportaktion basierend auf ausgewählten Datensätzen oder Ressourcenfiltern von @katherinehhh

- **[Workflow: Genehmigung]** Implementierung der Zugriffskontrolle für APIs, um unbefugte Datenoperationen zu verhindern von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung doppelter Zeitangaben im Filter-Datum/Uhrzeit-Wert ([#8506](https://github.com/nocobase/nocobase/pull/8506)) von @zhangzhonghe

  - Behebung doppelter Zeitangaben im Filter-Datum/Uhrzeit-Wert ([#8484](https://github.com/nocobase/nocobase/pull/8484)) von @zhangzhonghe

  - Behebung, dass das nanoid-Feld nach dem Absenden des Formulars nicht neu generiert wurde ([#8491](https://github.com/nocobase/nocobase/pull/8491)) von @katherinehhh

  - Behebung des Problems, dass Popover des Rich-Text-Editors verdeckt werden ([#8443](https://github.com/nocobase/nocobase/pull/8443)) von @zhangzhonghe

  - Filterliste zur Entfernung von Duplikaten ([#8431](https://github.com/nocobase/nocobase/pull/8431)) von @jiannx

  - Behebung doppelter Pflichtfeld-Validierungsmeldungen beim Leeren eines Kaskadenfeldes ([#8476](https://github.com/nocobase/nocobase/pull/8476)) von @katherinehhh

  - Behebung des Problems, dass das Konfigurationsmenü in Chrome 144 nicht angezeigt wird ([#8470](https://github.com/nocobase/nocobase/pull/8470)) von @zhangzhonghe

  - Behebung des Problems, dass Unterdetaildaten im schreibgeschützten Modus im Bearbeitungsformular nicht korrekt angezeigt werden konnten ([#8469](https://github.com/nocobase/nocobase/pull/8469)) von @katherinehhh

  - Behebung des Problems, dass das Popup "Benutzerdefinierte Variablen" verdeckt wird ([#8463](https://github.com/nocobase/nocobase/pull/8463)) von @zhangzhonghe

  - Behebung des Problems, dass die Sortiereinstellungen für die Feldgruppe der Sammlung nicht wirksam wurden. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) von @katherinehhh

  - Behebung des Problems, dass die Schaltfläche "Spalteneinstellungen" der Tabelle nicht funktioniert ([#8441](https://github.com/nocobase/nocobase/pull/8441)) von @zhangzhonghe

  - Behebung eines Problems, bei dem das Auswahl-Popup des Dateiverknüpfungsfeldes einen falschen z-Index hatte und die Popup-Konfiguration nicht korrekt gespeichert werden konnte. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) von @gchust

  - Behebung eines Problems beim Bearbeiten einer Sammlung in der grafischen Oberfläche ([#8451](https://github.com/nocobase/nocobase/pull/8451)) von @katherinehhh

- **[Datenbank]**
  - Behebung von Fehlern beim Filtern mit dem `empty`-Operator nach dem Neuladen einer Sammlung ([#8496](https://github.com/nocobase/nocobase/pull/8496)) von @2013xile

  - Fehlerbehebung: Tiefenaktualisierung verschachtelter Assoziationen ([#8492](https://github.com/nocobase/nocobase/pull/8492)) von @chenos

  - Fehlerbehebung: Tiefenaktualisierung verschachtelter Assoziationen ([#8492](https://github.com/nocobase/nocobase/pull/8492)) von @chenos

- **[Server]** Behebung der Version von `mathjs` in gemeinsamen Abhängigkeiten ([#8475](https://github.com/nocobase/nocobase/pull/8475)) von @mytharcher

- **[Flow-Engine]**
  - Behebung eines Problems, bei dem das Schließen eines eingebetteten Popups einen Fehler verursachte, nachdem nacheinander die Popups für die Konfiguration der Verknüpfungsregeln und der Ereignisablaufkonfiguration geöffnet wurden. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) von @gchust

  - Behebung eines Problems, bei dem durch wiederholtes Klicken auf das Konfigurationsmenü mehrere Konfigurations-Popups geöffnet werden konnten. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) von @gchust

  - Behebung eines Problems, bei dem Variablen in runjs-Codeparametern vor der Ausführung aufgelöst wurden. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) von @gchust

  - Behebung eines Problems, bei dem Popup-Variablen im Schnellerstellungs-Popup des Datenauswahlfeldes nicht ausgewählt werden konnten. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) von @gchust

- **[KI-Mitarbeiter]** Behebung von Inkonsistenzen bei der konfigurierbaren Feldauswahl zwischen KI-Modellierung und Datenquellenverwaltung ([#8488](https://github.com/nocobase/nocobase/pull/8488)) von @cgyrock

- **[Datenquelle: Haupt]** Behebung eines Problems, bei dem das Löschen von Datensätzen aus einem Viele-zu-Viele-Verknüpfungstabellenblock die Einschränkung `onDelete: 'restrict'` des Verknüpfungsfeldes nicht berücksichtigte ([#8493](https://github.com/nocobase/nocobase/pull/8493)) von @2013xile

- **[Block: iframe]** Behebung des Fehlers beim Hinzufügen aggregierter Variablen zu Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) von @zhangzhonghe

- **[Asynchroner Aufgabenmanager]** Behebung des Problems, dass der durch asynchronen Import ausgelöste Workflow verzögert ausgeführt wurde ([#8478](https://github.com/nocobase/nocobase/pull/8478)) von @mytharcher

- **[Dateimanager]** Behebung des Problems, dass der aus dem Anforderungstext ermittelte Dateiname unerwartet zu einem dekodierten String wurde ([#8481](https://github.com/nocobase/nocobase/pull/8481)) von @mytharcher

- **[UI-Vorlagen]** Behebung eines Problems, bei dem Referenzvorlagenblöcke keine Datenbereiche über die Ereignisablaufeinstellungen festlegen konnten. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) von @gchust

- **[Mobil (veraltet)]** Veraltetes mobiles Plugin (ersetzt durch das ui-layout-Plugin ab Version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) von @chenos

- **[Aktion: Datensätze importieren Pro]** Behebung des Problems, dass der durch asynchronen Import ausgelöste Workflow verzögert ausgeführt wurde von @mytharcher

- **[Workflow: Webhook]** Behebung des Problems, dass Body-Daten fehlen, wenn das Body-Parsing nicht konfiguriert ist von @mytharcher

- **[Vorlagendruck]**
  - Korrektur der falschen Berechtigungslogik für die Drucktaste bei vereinigten Rollen. von @jiannx

  - Entfernung der Fußzeilenschaltflächen aus der Druckvorlagenkonfiguration von @katherinehhh

- **[Workflow: Genehmigung]**
  - Behebung des Problems, dass Felder auf Genehmigungsaufgabenkarten nicht angezeigt werden von @zhangzhonghe

  - Behebung des Problems, dass eine Genehmigung an den vorherigen Knoten zurückgegeben wurde, aber zum Start zurückkehrte von @mytharcher

  - Behebung des Problems, dass Parallelität die wiederholte Ausführung der Ausführung verursacht von @mytharcher

  - Behebung des Problems, dass im Popup des Genehmigungsdatensatzes der Version 1.x ein Fehler ausgelöst wurde von @mytharcher

- **[E-Mail-Manager]**
  - Behebung des Problems, dass das Popup für die E-Mail-Konfiguration verdeckt wird von @zhangzhonghe

  - Behebung des Problems von E-Mails im selben Postfach zwischen mehreren Benutzern und Optimierung der Leistung von @jiannx

- **[Migrationsmanager]** Behebung eines möglichen Prozessstillstands, der durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen verursacht wurde von @cgyrock
