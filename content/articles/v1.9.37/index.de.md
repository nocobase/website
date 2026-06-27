---
title: "NocoBase v1.9.37: Aktualisierung der math.js-Version zur Unterstützung weiterer Funktionen"
description: "Versionshinweise zu v1.9.37"
---

### 🚀 Verbesserungen

- **[Evaluatoren]** Aktualisierung der math.js-Version zur Unterstützung weiterer Funktionen ([#8411](https://github.com/nocobase/nocobase/pull/8411)) von @mytharcher

- **[Benachrichtigung: In-App-Nachricht]** Behebung eines Leistungsproblems beim Senden von In-App-Nachrichten an eine große Anzahl von Benutzern ([#8402](https://github.com/nocobase/nocobase/pull/8402)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung, dass Kaskadendaten nach erfolgreicher Übermittlung im Erstellungsformular nicht gelöscht werden ([#8403](https://github.com/nocobase/nocobase/pull/8403)) von @katherinehhh

  - Fehlertoleranz für Aktionsschemata hinzugefügt, um Seitenabstürze beim Klicken auf Aktionsschaltflächen zu vermeiden ([#8420](https://github.com/nocobase/nocobase/pull/8420)) von @mytharcher

  - Behebung eines Problems mit der Senden-Schaltfläche, bei dem die optionale Validierungsüberspringung nicht funktioniert, wenn die Bestätigung aktiviert ist ([#8400](https://github.com/nocobase/nocobase/pull/8400)) von @katherinehhh

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Behebung eines Fehlers beim Anhängen von zweiten Ebene Viele-zu-viele(Array)-Beziehungen in Assoziationsabfragen ([#8406](https://github.com/nocobase/nocobase/pull/8406)) von @cgyrock

- **[Workflow]** Behebung des Problems, dass die Schema-ID in duplizierten Knoten nicht aktualisiert wird ([#8396](https://github.com/nocobase/nocobase/pull/8396)) von @mytharcher
