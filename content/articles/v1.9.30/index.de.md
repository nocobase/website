---
title: "NocoBase v1.9.30: Verbesserte Beschreibung des Feldes `changed` im Sammlungsereignis"
description: "Versionshinweise zu v1.9.30"
---

### 🚀 Verbesserungen

- **[Workflow]** Verbesserte Beschreibung des Feldes `changed` im Collection-Ereignis ([#8216](https://github.com/nocobase/nocobase/pull/8216)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[cli]** license-kit ist kompatibel mit dem Fall, dass DB_PASSWORD leer ist ([#8220](https://github.com/nocobase/nocobase/pull/8220)) von @jiannx

- **[Datenbank]** Behebung der Inkonsistenz bei Datumsfeldabfragen zwischen Haupt- und externen Datenquellen ([#8181](https://github.com/nocobase/nocobase/pull/8181)) von @cgyrock

- **[Lizenzeinstellungen]** Behebung der abnormalen Anzeige des lizenzierten Plugins ([#8214](https://github.com/nocobase/nocobase/pull/8214)) von @jiannx

- **[Workflow: Genehmigung]**
  - Behebung des Problems, dass durch Genehmigung eine Assoziation zur Erstellung eines neuen Datensatzes führt von @mytharcher

  - Behebung des Problems, dass durch Genehmigung eine 1:n-Assoziation zur Erstellung neuer Datensätze führt von @mytharcher
