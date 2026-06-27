---
title: "NocoBase v2.0.0-alpha.29: Korrektur der Middleware-Reihenfolge von `resourceManager`"
description: "Versionshinweise zu v2.0.0-alpha.29"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ein Problem wurde behoben, bei dem die Assoziationsfeldvariable im aktuellen Formular nicht korrekt erkannt werden konnte, um eine genaue Datenverarbeitung in Formularen sicherzustellen. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) von @gchust

  - Ein Problem wurde behoben, bei dem die Zuweisung eines Arrays als Wert oder Standardwert an ein „toOne“-Feld zu einem Fehler führte. Dies gewährleistet eine ordnungsgemäße Handhabung der Ergebnisse der Variablenauflösung und verbessert die Systemstabilität und -genauigkeit. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) von @gchust

- **[Zugriffskontrolle]** Korrektur der Middleware-Reihenfolge von `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) von @2013xile
