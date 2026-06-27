---
title: "NocoBase v1.3.53: Exportieren des essentiellen Hooks"
description: "Versionshinweise zu v1.3.53"
---

### 🚀 Verbesserungen

- **[Client]**
  - Export wesentlicher Hooks ([#5702](https://github.com/nocobase/nocobase/pull/5702)) von @mytharcher

  - Plugin für chinesische Regionen aus den integrierten Plugins entfernt ([#5693](https://github.com/nocobase/nocobase/pull/5693)) von @katherinehhh

- **[Workflow: Pre-Action-Ereignis]** Entfernen von Warn-Logs im Request-Interceptor von @mytharcher

### 🐛 Fehlerbehebungen

- **[CLI]** Daemon-Modus löscht keine Sock-Dateien ([#5750](https://github.com/nocobase/nocobase/pull/5750)) von @chenos

- **[Client]**
  - Problem behoben, bei dem sich Assoziationsfelder gegenseitig beeinflussen, wenn mehrere Assoziationsfelder dieselbe Ziel-Collection haben ([#5744](https://github.com/nocobase/nocobase/pull/5744)) von @katherinehhh

  - Problem mit der Ausrichtung von Kontrollkästchen in Untertabellen behoben ([#5735](https://github.com/nocobase/nocobase/pull/5735)) von @katherinehhh

  - Problem mit der Anzeige von Fremdschlüsselfeldern im Datenselektor behoben ([#5734](https://github.com/nocobase/nocobase/pull/5734)) von @katherinehhh

  - Anpassung des feedbackLayout zur Verbesserung der Validierungsmeldungen in Untertabellen behoben ([#5700](https://github.com/nocobase/nocobase/pull/5700)) von @katherinehhh

- **[Server]** Plugins in Abhängigkeitsreihenfolge laden ([#5706](https://github.com/nocobase/nocobase/pull/5706)) von @chenos

- **[Block: Karte]** Fehler beim Ändern der Zoomstufen in Google Maps behoben ([#5722](https://github.com/nocobase/nocobase/pull/5722)) von @katherinehhh

- **[Datenquelle: Haupt]** Problem beim Ableiten des Feldnamens in der View-Collection behoben ([#5729](https://github.com/nocobase/nocobase/pull/5729)) von @chareice

- **[Dateimanager]** Wenn der Endpunkt nicht leer ist, wird forcePathStyle auf true gesetzt ([#5712](https://github.com/nocobase/nocobase/pull/5712)) von @chenos
