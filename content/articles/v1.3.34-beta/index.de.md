---
title: "NocoBase v1.3.34-beta: Verbesserungen der Filterformular-Feldkonfiguration"
description: "Versionshinweise zu v1.3.34-beta"
---

### 🎉 Neue Funktionen

- **[Test]** Assoziationsfelder in Filterformularen unterstützen jetzt die Konfiguration, ob Mehrfachauswahl erlaubt ist ([#5451](https://github.com/nocobase/nocobase/pull/5451)) von @zhangzhonghe

- **[Client]** Eine Variable namens „Übergeordnetes Objekt“ hinzugefügt ([#5449](https://github.com/nocobase/nocobase/pull/5449)) von @zhangzhonghe
Referenz: [Übergeordnetes Objekt](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehler behoben: URL-Suchparameter-Variablen wurden nicht analysiert ([#5454](https://github.com/nocobase/nocobase/pull/5454)) von @zhangzhonghe

  - Fehler behoben: Datenlöschungsfehler bei der Auswahl von Assoziationsdaten mit Datenbereich in verschachtelten Untertabellen ([#5441](https://github.com/nocobase/nocobase/pull/5441)) von @katherinehhh

  - Hintergrundfarbe der ausgewählten Tabellenzeile korrigiert ([#5445](https://github.com/nocobase/nocobase/pull/5445)) von @mytharcher

- **[Block: Karte]** Zoomstufenkonfiguration für Kartenfelder in Tabellenspalten entfernt ([#5457](https://github.com/nocobase/nocobase/pull/5457)) von @katherinehhh

- **[Dateimanager]** Fehler behoben: Aufruf des Speicherregel-Hooks bei schreibgeschützten Feldern ([#5447](https://github.com/nocobase/nocobase/pull/5447)) von @mytharcher

- **[Datenquelle: Haupt]** Fehler behoben: E2E-Test fehlgeschlagen aufgrund geänderter Komponente ([#5437](https://github.com/nocobase/nocobase/pull/5437)) von @mytharcher
