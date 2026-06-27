---
title: "NocoBase v1.7.0-beta.2: Unterstützung für konfigurierbare Feldoptionen in Verknüpfungsregeln"
description: "Versionshinweise zu v1.7.0-beta.2"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Tabellenblöcke unterstützen das Ausblenden der Indexspalte (standardmäßig sichtbar) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) von @katherinehhh

  - Unterstützung zur Konfiguration auswählbarer Feldoptionen in Verknüpfungsregeln ([#6338](https://github.com/nocobase/nocobase/pull/6338)) von @katherinehhh

  - Unterstützung von Datumsbereichen (min/max) für Zeitfelder in Verknüpfungsregeln ([#6356](https://github.com/nocobase/nocobase/pull/6356)) von @katherinehhh

- **[Block: Aktionspanel]** Unterstützung für Zeilenumbrüche im Aktions-Titel im Aktionspanel ([#6433](https://github.com/nocobase/nocobase/pull/6433)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Client]**
  - Falsche Seitenzahl beim Hinzufügen von Daten nach Änderung der Seitengröße in einer Untertabelle ([#6437](https://github.com/nocobase/nocobase/pull/6437)) von @katherinehhh

  - Das Logo-Stil ist inkonsistent zum vorherigen ([#6444](https://github.com/nocobase/nocobase/pull/6444)) von @zhangzhonghe

  - Wertänderungen bei Mehrfachauswahl-Feldern und Verlust von Optionen beim Löschen von Untertabelleneinträgen ([#6405](https://github.com/nocobase/nocobase/pull/6405)) von @katherinehhh

  - Datumsbereichsauswahl schließt das maximale Datum aus ([#6418](https://github.com/nocobase/nocobase/pull/6418)) von @katherinehhh

  - Bei Verwendung des '$anyOf'-Operators ist die Verknüpfungsregel ungültig ([#6415](https://github.com/nocobase/nocobase/pull/6415)) von @zhangzhonghe

  - Daten in Popup-Fenstern, die über Link-Schaltflächen geöffnet werden, werden nicht aktualisiert ([#6411](https://github.com/nocobase/nocobase/pull/6411)) von @zhangzhonghe

- **[Aktion: Stapelbearbeitung]** Workflow kann bei der Stapelbearbeitungs-Übermittlung nicht ausgelöst werden ([#6440](https://github.com/nocobase/nocobase/pull/6440)) von @mytharcher

- **[Datenvisualisierung]** Entfernte Felder erscheinen beim Hinzufügen benutzerdefinierter Filterfelder ([#6450](https://github.com/nocobase/nocobase/pull/6450)) von @2013xile

- **[Datenquellen-Manager]** Wechsel der Datenquelle in der Rollenverwaltung lädt die entsprechenden Sammlungen nicht ([#6431](https://github.com/nocobase/nocobase/pull/6431)) von @katherinehhh

- **[Aktion: Benutzerdefinierte Anfrage]** Fehler bei der serverseitigen Berechtigungsvalidierung für benutzerdefinierte Anfragen ([#6438](https://github.com/nocobase/nocobase/pull/6438)) von @katherinehhh

- **[Dateimanager]** Behebung einiger Probleme des Dateimanagers ([#6436](https://github.com/nocobase/nocobase/pull/6436)) von @mytharcher

- **[Benachrichtigung: In-App-Nachricht]**
  - Vermeidung, dass eine falsche Empfängerkonfiguration alle Benutzer abfragt ([#6424](https://github.com/nocobase/nocobase/pull/6424)) von @sheldon66

  - Unterscheidung der Hintergrundfarbe der In-App-Nachrichtenliste von den Nachrichtenkarten zur Verbesserung der visuellen Hierarchie und Lesbarkeit. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) von @sheldon66

- **[Workflow: Manueller Knoten]**
  - Änderung der Versionsbeschränkung der Migration auf `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) von @mytharcher

  - Behebung der Migration, die das Tabellenpräfix und die Schema-Logik übersehen hat ([#6425](https://github.com/nocobase/nocobase/pull/6425)) von @mytharcher
