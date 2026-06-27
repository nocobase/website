---
title: "NocoBase v2.0.53: Bestätigungsmeldung für nicht gespeicherte Änderungen beim Schließen der Ereignisfluss-Konfigurationsseite mit ungespeicherten Daten hinzugefügt."
description: "Versionshinweise zu v2.0.53"
---

### 🚀 Verbesserungen

- **[Flow-Engine]** Beim Schließen der Ereignisfluss-Konfigurationsseite mit ungespeicherten Daten wird nun eine Bestätigungsmeldung angezeigt. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) von @gchust

### 🐛 Fehlerbehebungen

- **[Client]**
  - Verhindert das Öffnen der Schnellbearbeitung für Assoziationsfelder in Tabellen. ([#9469](https://github.com/nocobase/nocobase/pull/9469)) von @katherinehhh

  - Behebt, dass schreibgeschützte Beziehungsfelder in Untertabellen nach dem Aktualisieren nicht angezeigt oder nicht anklickbar waren. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) von @jiannx

  - Behebt, dass in v2-Datenblöcken bei Mehrfachauswahlfeldern die Optionsbezeichnungen anstelle der Werte angezeigt werden. ([#9472](https://github.com/nocobase/nocobase/pull/9472)) von @katherinehhh

- **[Block: Mehrstufiges Formular]** Behebt ein Scrollbalken-Problem bei aktivierter Vollhöhe im v1-Schrittformular-Block. ([#9468](https://github.com/nocobase/nocobase/pull/9468)) von @katherinehhh
