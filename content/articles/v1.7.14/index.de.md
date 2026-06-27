---
title: "NocoBase v1.7.14: Automatisches Ausblenden der Aktionsleiste von Rasterkartenblöcken, wenn sie leer ist"
description: "Versionshinweise zu v1.7.14"
---

### 🚀 Verbesserungen

- **[Client]** Automatisches Ausblenden der Aktionsleiste von Rasterkarten-Blöcken, wenn diese leer ist ([#7069](https://github.com/nocobase/nocobase/pull/7069)) von @zhangzhonghe

- **[Verifizierung]** Entfernen der Verifizierungsoptionen aus der Antwort der `verifiers:listByUser`-API ([#7090](https://github.com/nocobase/nocobase/pull/7090)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Datenbank]** Unterstützung von Assoziationsaktualisierungen in updateOrCreate und firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) von @chenos

- **[Client]**
  - URL-Abfrageparameter-Variablen funktionieren nicht im Standardwert von öffentlichen Formularfeldern ([#7084](https://github.com/nocobase/nocobase/pull/7084)) von @katherinehhh

  - Stilbedingungen für Spaltenfelder in Untertabellen werden nicht korrekt angewendet ([#7083](https://github.com/nocobase/nocobase/pull/7083)) von @katherinehhh

  - Filtern über Beziehungssammlungsfelder in Filterformularen ist ungültig ([#7070](https://github.com/nocobase/nocobase/pull/7070)) von @zhangzhonghe

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Aktualisieren eines Viele-zu-viele (Array)-Feldes führt zu einem Fehler, wenn das Feld `updatedBy` vorhanden ist ([#7089](https://github.com/nocobase/nocobase/pull/7089)) von @2013xile

- **[Öffentliche Formulare]** Öffentliche Formulare: Behebung eines Problems mit unbefugtem Zugriff beim Absenden des Formulars ([#7085](https://github.com/nocobase/nocobase/pull/7085)) von @zhangzhonghe
