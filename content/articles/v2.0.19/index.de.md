---
title: "NocoBase v2.0.19: Behebung des Problems, dass beim ordnungsgemäßen Herunterfahren nicht alle Ereignisse abgearbeitet werden"
description: "Versionshinweise zu v2.0.19"
---

### 🚀 Verbesserungen

- **[Workflow]** Problem behoben, bei dem ein ordnungsgemäßes Herunterfahren nicht alle Ereignisse abfließen ließ ([#8894](https://github.com/nocobase/nocobase/pull/8894)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[KI-Mitarbeiter]** Problem behoben, bei dem die angegebene URL für den LLM-Dienst bei Aufrufen des Text-Einbettungsmodells nicht wirksam wurde. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) von @cgyrock

- **[Aktion: Datensätze importieren Pro]** Problem behoben, bei dem das `beforeStop`-Ereignis in der Unter-App nicht ausgelöst wurde von @mytharcher
