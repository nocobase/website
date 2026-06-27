---
title: "NocoBase v1.8.0-beta.9: Aktionsleiste der Rasterkartenblöcke bei Leerstand automatisch ausblenden"
description: "Versionshinweise zu v1.8.0-beta.9"
---

### 🚀 Verbesserungen

- **[Client]**
  - Aktionsleiste von Rasterkartenblöcken bei Leerstand automatisch ausblenden ([#7069](https://github.com/nocobase/nocobase/pull/7069)) von @zhangzhonghe

  - Die Breite des Logo-Containers passt sich dem Inhaltstyp an (fest 168px für Bilder, automatische Breite für Text) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) von @Cyx649312038

- **[Verifizierung]** Entfernen der Prüfer-Optionen aus der Antwort der `verifiers:listByUser`-API ([#7090](https://github.com/nocobase/nocobase/pull/7090)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Pflichtfeld-Validierungsmeldung in Untertabellen bleibt beim Seitenwechsel bestehen ([#7080](https://github.com/nocobase/nocobase/pull/7080)) von @katherinehhh

  - Stilbedingung für Spaltenfelder in Untertabellen wird nicht korrekt angewendet ([#7083](https://github.com/nocobase/nocobase/pull/7083)) von @katherinehhh

  - Dezimalpunkt geht nach dem Wechsel des Betragskomponenten von Maskierung zu inputNumber verloren ([#7077](https://github.com/nocobase/nocobase/pull/7077)) von @katherinehhh

  - URL-Abfrageparameter-Variablen funktionieren nicht im Standardwert öffentlicher Formularfelder ([#7084](https://github.com/nocobase/nocobase/pull/7084)) von @katherinehhh

  - Filtern über Beziehungssammlungsfelder in Filterformularen ist ungültig ([#7070](https://github.com/nocobase/nocobase/pull/7070)) von @zhangzhonghe

  - Falsche Markdown (Vditor)-Darstellung in Untertabellen ([#7074](https://github.com/nocobase/nocobase/pull/7074)) von @katherinehhh

- **[Datenbank]** Unterstützung von Assoziationsaktualisierungen in updateOrCreate und firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) von @chenos

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Das Aktualisieren eines Viele-zu-viele (Array)-Feldes wirft einen Fehler, wenn das Feld `updatedBy` vorhanden ist ([#7089](https://github.com/nocobase/nocobase/pull/7089)) von @2013xile

- **[Sammlungsfeld: Sequenz]** Korrektur der Berechnung von Bigint-Sequenzen auf Zeichenkettenbasis ([#7079](https://github.com/nocobase/nocobase/pull/7079)) von @mytharcher

- **[Öffentliche Formulare]** Öffentliche Formulare: Behebung eines Problems mit unbefugtem Zugriff beim Absenden des Formulars ([#7085](https://github.com/nocobase/nocobase/pull/7085)) von @zhangzhonghe
