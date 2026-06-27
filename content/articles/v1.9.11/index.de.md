---
title: "NocoBase v1.9.11: Fehlerbehebungen"
description: "Versionshinweise zu v1.9.11"
---

### 🐛 Fehlerbehebungen

- **[Client]** Fehler behoben, bei dem das Feld-Interface in der Konfiguration externer Datenquellen „Viele-zu-Eins“ anstelle von „Eins-zu-Eins“ für belongsTo anzeigte ([#7936](https://github.com/nocobase/nocobase/pull/7936)) von @cgyrock

- **[Workflow]** Problem behoben, bei dem das Aktualisieren der Aufgabenanzahl den Status von ausgefüllten Formularen versehentlich zurücksetzte ([#7937](https://github.com/nocobase/nocobase/pull/7937)) von @mytharcher

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Fehler bei M2M (Array)-Feldern beim Erstellen/Aktualisieren verknüpfter Daten behoben ([#7926](https://github.com/nocobase/nocobase/pull/7926)) von @cgyrock
