---
title: "NocoBase v2.0.0-beta.14: Unterstützung für Dateieinfügen im KI-Chat"
description: "Versionshinweise zu v2.0.0-beta.14"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Unterstützung für das Einfügen von Dateien im KI-Chat ([#8487](https://github.com/nocobase/nocobase/pull/8487)) von @heziqiang

### 🚀 Verbesserungen

- **[Client]**
  - Verbesserung des "to-many"-Unterformulars, sodass es mit einem Standardeintrag initialisiert wird und keine Datensätze erstellt, wenn es leer gelassen wird ([#8473](https://github.com/nocobase/nocobase/pull/8473)) von @katherinehhh

  - Verbesserung der Upload- und Bearbeitungsschaltflächen für Anhangsfelder in Untertabellen, um Benutzer besser zum Klicken auf "Hochladen" zu führen. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) von @katherinehhh

- **[Flow-Engine]** Verbesserung von ctx.libs in runjs zur Unterstützung von bedarfsgesteuertem Laden und Hinzufügen vordefinierter Bibliotheken: lodash, math und formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) von @gchust

- **[Fehlerbehandlung]** Bereinigung von SQL-Referenzfehlern ([#8464](https://github.com/nocobase/nocobase/pull/8464)) von @2013xile

- **[Workflow: Genehmigung]** Implementierung der Zugriffskontrolle für APIs, um unbefugte Datenoperationen zu verhindern von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung des Problems, dass Popover des Rich-Text-Editors verdeckt werden ([#8443](https://github.com/nocobase/nocobase/pull/8443)) von @zhangzhonghe

  - Behebung doppelter Zeitangaben im DateTime-Filterwert ([#8484](https://github.com/nocobase/nocobase/pull/8484)) von @zhangzhonghe

  - Behebung, dass das nanoid-Feld nach dem Absenden des Formulars nicht neu generiert wurde ([#8491](https://github.com/nocobase/nocobase/pull/8491)) von @katherinehhh

  - Behebung doppelter Pflichtfeld-Validierungsmeldungen beim Leeren eines Kaskadenfelds ([#8476](https://github.com/nocobase/nocobase/pull/8476)) von @katherinehhh

  - Filterung der Liste zur Entfernung von Duplikaten ([#8431](https://github.com/nocobase/nocobase/pull/8431)) von @jiannx

  - Behebung des Problems, dass das Konfigurationsmenü in Chrome 144 nicht angezeigt wird ([#8470](https://github.com/nocobase/nocobase/pull/8470)) von @zhangzhonghe

- **[Datenbank]**
  - Fehlerbehebung: Tiefenaktualisierung verschachtelter Assoziationen ([#8492](https://github.com/nocobase/nocobase/pull/8492)) von @chenos

  - Fehlerbehebung: Tiefenaktualisierung verschachtelter Assoziationen ([#8492](https://github.com/nocobase/nocobase/pull/8492)) von @chenos

- **[Server]** Korrektur der Version von `mathjs` in gemeinsamen Abhängigkeiten ([#8475](https://github.com/nocobase/nocobase/pull/8475)) von @mytharcher

- **[Flow-Engine]** Behebung eines Problems, bei dem das Schließen eines eingebetteten Popups nach dem aufeinanderfolgenden Öffnen des Popups für die Konfiguration von Verknüpfungsregeln und Ereignisablaufkonfiguration einen Fehler verursachte. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) von @gchust

- **[Datenquelle: Hauptdatenbank]** Behebung eines Problems, bei dem das Löschen von Datensätzen aus einem Block einer Viele-zu-Viele-Verknüpfungstabelle die Einschränkung `onDelete: 'restrict'` des Verknüpfungsfelds nicht respektierte ([#8493](https://github.com/nocobase/nocobase/pull/8493)) von @2013xile

- **[Asynchroner Aufgabenmanager]** Behebung des Problems, dass der durch asynchronen Import ausgelöste Workflow verzögert ausgeführt wurde ([#8478](https://github.com/nocobase/nocobase/pull/8478)) von @mytharcher

- **[Block: Iframe]** Behebung des Fehlers beim Hinzufügen aggregierter Variablen zu Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) von @zhangzhonghe

- **[UI-Vorlagen]** Behebung eines Problems, bei dem Referenzvorlagenblöcke keine Datenbereiche über die Ereignisablaufeinstellungen festlegen konnten. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) von @gchust

- **[Dateimanager]** Behebung des Problems, dass der aus dem Anforderungstext ermittelte Dateiname unerwartet dekodiert wurde ([#8481](https://github.com/nocobase/nocobase/pull/8481)) von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Behebung des Problems, dass der durch asynchronen Import ausgelöste Workflow verzögert ausgeführt wurde von @mytharcher

- **[Workflow: Webhook]** Behebung des Problems, dass Body-Daten fehlen, wenn das Body-Parsing nicht konfiguriert ist von @mytharcher

- **[Vorlagendruck]** Entfernung der Fußzeilenschaltflächen aus der Druckvorlagenkonfiguration von @katherinehhh

- **[Workflow: Genehmigung]**
  - Behebung des Problems, dass eine Genehmigung an den vorherigen Knoten zurückgesendet wurde, aber zum Start zurückkehrte von @mytharcher

  - Behebung des Problems, dass Parallelität die wiederholte Wiederaufnahme der Ausführung verursachte von @mytharcher

  - Behebung des Problems, dass Felder auf Genehmigungsaufgabenkarten nicht angezeigt wurden von @zhangzhonghe
