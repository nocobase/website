---
title: "NocoBase v1.8.27: Unterstützung zum Drehen von Bildern bei der Vorschau"
description: "Versionshinweise zu v1.8.27"
---

### 🚀 Verbesserungen

- **[Client]** Unterstützung zum Drehen von Bildern während der Vorschau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) von @mytharcher

- **[Workflow]** Auslagerung der versandbezogenen Logik in einen eigenständigen Dispatcher ([#7535](https://github.com/nocobase/nocobase/pull/7535)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem Untermenüs in der Seitenleiste nicht korrekt hervorgehoben werden konnten ([#7520](https://github.com/nocobase/nocobase/pull/7520)) von @duannyuuu

- **[Workflow: Schleifenknoten]** Problem behoben, bei dem der Prozess fälschlicherweise zum nächsten Element fortschritt, obwohl die Bedingungen des Schleifenknotens nicht erfüllt waren ([#7521](https://github.com/nocobase/nocobase/pull/7521)) von @mytharcher

- **[Workflow]**
  - Problem mit doppelter Ausführung aufgrund unsachgemäßer Warteschlangenverarbeitung behoben ([#7533](https://github.com/nocobase/nocobase/pull/7533)) von @mytharcher

  - Problem behoben, bei dem die Workflow-Listenbedingung beim Laden des assoziierten Feldkontexts in der gebundenen Workflow-Konfiguration falsch war ([#7516](https://github.com/nocobase/nocobase/pull/7516)) von @mytharcher

  - Problem behoben, bei dem geplante Aufgaben basierend auf Datumsfeldern nach dem Start nicht ausgelöst wurden ([#7524](https://github.com/nocobase/nocobase/pull/7524)) von @mytharcher
