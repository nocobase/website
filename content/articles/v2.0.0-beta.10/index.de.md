---
title: "NocoBase v2.0.0-beta.10: Optimierung des KI-Eingabe-Buttons"
description: "Versionshinweise zu v2.0.0-beta.10"
---

### 🚀 Verbesserungen

- **[Client]** Unterstützung zur Angabe, wann ein Ereignisablauf ausgeführt werden soll. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) von @gchust
- **[KI-Mitarbeiter]**

  - Optimierung des KI-Eingabeknopfs ([#8414](https://github.com/nocobase/nocobase/pull/8414)) von @heziqiang
  - Builder-KI in der Eintragsliste ausblenden.<br/> Optimierung des LLM-Integrationsablaufs.<br/> Aktualisierung der Dokumentation zum KI-Modell Gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) von @heziqiang
- **[Benachrichtigung: In-App-Nachricht]** Behebung eines Leistungsproblems beim Senden von In-App-Nachrichten an eine große Anzahl von Benutzern ([#8402](https://github.com/nocobase/nocobase/pull/8402)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Die Eingabekomponente für Zahlen zeigt den Wert nicht an ([#8410](https://github.com/nocobase/nocobase/pull/8410)) von @chenos
  - Behebung, dass Kaskadendaten nach erfolgreicher Übermittlung im Erstellungsformular nicht gelöscht werden ([#8403](https://github.com/nocobase/nocobase/pull/8403)) von @katherinehhh
  - Behebung eines Problems mit dem Senden-Button, bei dem die optionale Validierungsüberspringung nicht funktioniert, wenn die Bestätigung aktiviert ist ([#8400](https://github.com/nocobase/nocobase/pull/8400)) von @katherinehhh
  - Behebung eines Problems, bei dem der Senden-Button im Popup zur Dateiauswahl des 1:1-Assoziationsfelds erscheint ([#8398](https://github.com/nocobase/nocobase/pull/8398)) von @katherinehhh
  - Behebung eines Problems, bei dem die Layouteinstellung im Grid-Kartenblock nicht wirksam wird ([#8399](https://github.com/nocobase/nocobase/pull/8399)) von @katherinehhh
  - Behebung, dass eine Zuweisung verhindert wird, wenn chinesische Zeichen in ein Zahlenfeld eingegeben werden ([#8397](https://github.com/nocobase/nocobase/pull/8397)) von @katherinehhh
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Fehlerbehebung beim Anhängen von zweiten Ebene Viele-zu-viele(Array)-Relationen in Assoziationsabfragen ([#8406](https://github.com/nocobase/nocobase/pull/8406)) von @cgyrock
- **[Multi-Space]**

  - Verwandter Space beim Hinzufügen assoziierter Daten von @jiannx
  - Die Farbe des Space-Auswahlfelds folgt dem Theme von @jiannx
