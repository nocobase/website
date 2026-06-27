---
title: "NocoBase v1.4.20: Workflows beim Binden an Aktionsschaltfläche sortieren"
description: "Versionshinweise zu v1.4.20"
---

### 🎉 Neue Funktionen

- **[client]** Methode `app.getHref()` hinzugefügt ([#6019](https://github.com/nocobase/nocobase/pull/6019)) von @chenos

### 🚀 Verbesserungen

- **[client]**
  - Workflows können nun beim Binden an einen Aktionsbutton sortiert werden ([#6017](https://github.com/nocobase/nocobase/pull/6017)) von @mytharcher

  - Referenzlinks von Evaluatoren zur Dokumentationsseite geändert ([#6021](https://github.com/nocobase/nocobase/pull/6021)) von @mytharcher

  - Unterstützung für `maxTagCount: 'responsive'` in der Mehrfachauswahl-Dropdown-Komponente ([#6007](https://github.com/nocobase/nocobase/pull/6007)) von @katherinehhh

  - Standard-Endzeit für die Zeitbereichskomponente im Filterblock auf 23:59:59 gesetzt ([#6012](https://github.com/nocobase/nocobase/pull/6012)) von @katherinehhh

- **[Aktion: Stapelbearbeitung]** Submit-Button des Stapelbearbeitungsformulars überarbeitet: Feldzuweisung und Verknüpfungsregel entfernt ([#6008](https://github.com/nocobase/nocobase/pull/6008)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[client]**
  - Fehler behoben, bei dem die Pflichtfeldvalidierung nach dem Löschen von Daten im Rich-Text-Editor nicht mehr funktionierte ([#6006](https://github.com/nocobase/nocobase/pull/6006)) von @katherinehhh

  - Fehler behoben, bei dem die Ausrichtung bei ausgeblendeten Aktionsspalten-Buttons nicht stimmte ([#6014](https://github.com/nocobase/nocobase/pull/6014)) von @katherinehhh

  - Problem mit dem Button "Sammlungen erstellen" beim Klicken auf den Tab "Sammlungen" auf der REST-API-Seite behoben ([#5992](https://github.com/nocobase/nocobase/pull/5992)) von @katherinehhh

  - Problem behoben, bei dem targetKey in 1:n-Beziehungen kein NanoID-Feld auswählen konnte ([#5999](https://github.com/nocobase/nocobase/pull/5999)) von @katherinehhh

  - Stil des Einstellungsbuttons im kompakten Design korrigiert ([#6001](https://github.com/nocobase/nocobase/pull/6001)) von @katherinehhh

  - Stil der Listenkomponente korrigiert ([#5998](https://github.com/nocobase/nocobase/pull/5998)) von @mytharcher

  - Problem behoben, bei dem in Client-Anfragen enthaltene Header überschrieben wurden ([#6009](https://github.com/nocobase/nocobase/pull/6009)) von @2013xile

  - Fehler behoben: foreignKey, targetKey und sourceKey sollten jetzt die Filterung nach chinesischen Zeichen unterstützen ([#5997](https://github.com/nocobase/nocobase/pull/5997)) von @katherinehhh

- **[Aktion: Datensätze importieren]** Import mit n:m-Verknüpfungen, die einen anderen targetKey verwenden, korrigiert ([#6024](https://github.com/nocobase/nocobase/pull/6024)) von @chareice

- **[Block: Karte]** Kartenfeld im Detailblock sollte jetzt als Kartenblock dargestellt werden ([#6010](https://github.com/nocobase/nocobase/pull/6010)) von @katherinehhh

- **[NocoBase einbetten]** Der Token für die Einbettung kollidierte mit der Authentifizierung von @chenos
