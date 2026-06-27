---
title: "NocoBase v2.0.20: Behebung des Problems, dass von Workern gesendete Lebenszyklus-Ereignisse zum Stoppen der Serving-App führen"
description: "Versionshinweise zu v2.0.20"
---

### 🐛 Fehlerbehebungen

- **[Server]** Behebt das Problem, dass durch vom Worker gesendete Lebenszyklus-Ereignisse der laufende Dienst gestoppt wird ([#8906](https://github.com/nocobase/nocobase/pull/8906)) von @mytharcher

- **[Datenquellen-Manager]** Problem behoben, dass von KI-Mitarbeitern erstellte Sammlungen immer die Felder `createBy` und `updateBy` vermissen ließen ([#8895](https://github.com/nocobase/nocobase/pull/8895)) von @cgyrock

- **[Aktion: Datensätze importieren Pro]** Behebt einen durch trägen Import verursachten SES-Fehler von @mytharcher

- **[Vorlagendruck]** Behebt einen Druckfehler bei SQL-Sammlungen von @jiannx

- **[E-Mail-Manager]** Problem behoben, dass ein Seitenfehler auftrat, wenn die E-Mail nicht existiert von @jiannx
