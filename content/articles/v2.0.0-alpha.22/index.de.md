---
title: "NocoBase v2.0.0-alpha.22: Markdown-Block für 2.0 hinzugefügt"
description: "Versionshinweise zu v2.0.0-alpha.22"
---

### 🎉 Neue Funktionen

- **[Client]** Markdown-Block 2.0 hinzugefügt ([#7613](https://github.com/nocobase/nocobase/pull/7613)) von @katherinehhh

- **[Datenquellen-Manager]**
  - Die Hauptdatenquelle unterstützt jetzt das direkte Auslesen von Datenbanktabellen aus der Hauptdatenbank und erlaubt die Änderung von Feld-Schnittstellen ([#7118](https://github.com/nocobase/nocobase/pull/7118)) von @aaaaaajie

  - Die Hauptdatenquelle unterstützt jetzt das direkte Auslesen von Datenbanktabellen aus der Hauptdatenbank und erlaubt die Änderung von Feld-Schnittstellen ([#7118](https://github.com/nocobase/nocobase/pull/7118)) von @aaaaaajie

- **[Aufzeichnungsverlauf]** Aufzeichnungsverlauf-Block hinzugefügt von @2013xile

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Ein Problem wurde behoben, bei dem durch ein Flow-Modell definierte Flow-Aktionen nicht konfiguriert werden konnten. Benutzer können Flow-Aktionen nun wie vorgesehen anpassen. ([#7666](https://github.com/nocobase/nocobase/pull/7666)) von @gchust

- **[Redis-Warteschlangen-Adapter]** Problem behoben, bei dem der Redis-Warteschlangen-Adapter nach dem Start nicht korrekt auf abonnierte Kanäle hörte von @mytharcher
