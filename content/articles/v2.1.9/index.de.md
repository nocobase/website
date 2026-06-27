---
title: "NocoBase v2.1.9: Überschreibungsoption für Feldwerteinstellungen hinzugefügt"
description: "Versionshinweise zu v2.1.9"
---

### 🚀 Verbesserungen

- **[client-v2]** Option zum Überschreiben von Werten für Feldeinstellungen hinzugefügt. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) von @gchust

### 🐛 Fehlerbehebungen

- **[client-v2]**
  - Behoben: Benutzerdefinierte Aktions-Workflow-Trigger-Buttons sendeten benutzerdefinierten Kontext-JSON fälschlicherweise unter einer zusätzlichen `values`-Eigenschaft oder als serialisierten String. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) von @mytharcher

  - Behoben: Ein Problem, bei dem die Konfiguration eines Assoziationsfeldwerts als fester Wert oder Standardwert keine Wirkung zeigte. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) von @gchust

- **[auth]** Verschlüsselte Passwortdaten werden nicht mehr in Antworten zum Anmeldestatus eingeschlossen ([#9836](https://github.com/nocobase/nocobase/pull/9836)) von @2013xile

- **[app]** Ignoriert nicht zusammenhängende currentScript beim Ableiten des öffentlichen Plugin-Pfads ([#9839](https://github.com/nocobase/nocobase/pull/9839)) von @chenos

- **[UI-Vorlagen]** Behoben: Falscher Standardkontext für ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) von @gchust
