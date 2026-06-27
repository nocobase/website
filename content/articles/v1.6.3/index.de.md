---
title: "NocoBase v1.6.3: Ermöglicht das Festlegen eines benutzerdefinierten Tooltips für die Anmeldeschaltfläche"
description: "Versionshinweise zu v1.6.3"
---

### 🎉 Neue Funktionen

- **[WeCom]** Ermöglicht das Festlegen eines benutzerdefinierten Tooltips für die Anmeldeschaltfläche von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Sonderzeichen in Bild-URL führten dazu, dass das Bild nicht angezeigt wurde ([#6459](https://github.com/nocobase/nocobase/pull/6459)) von @mytharcher

  - Falsche Seitenzahl beim Hinzufügen von Daten nach Änderung der Seitengröße in einer Untertabelle ([#6437](https://github.com/nocobase/nocobase/pull/6437)) von @katherinehhh

  - Der Logo-Stil ist inkonsistent zum vorherigen ([#6444](https://github.com/nocobase/nocobase/pull/6444)) von @zhangzhonghe

- **[Workflow: Manueller Knoten]** Behebt einen Fehler, der bei der Migration ausgelöst wurde ([#6445](https://github.com/nocobase/nocobase/pull/6445)) von @mytharcher

- **[Datenvisualisierung]** Entfernte Felder erscheinen beim Hinzufügen benutzerdefinierter Filterfelder ([#6450](https://github.com/nocobase/nocobase/pull/6450)) von @2013xile

- **[Dateimanager]** Behebt einige Probleme des Dateimanagers ([#6436](https://github.com/nocobase/nocobase/pull/6436)) von @mytharcher

- **[Aktion: Benutzerdefinierte Anfrage]** Validierungsfehler der serverseitigen Berechtigungen bei benutzerdefinierten Anfragen ([#6438](https://github.com/nocobase/nocobase/pull/6438)) von @katherinehhh

- **[Datenquellen-Manager]** Wechsel der Datenquelle in der Rollenverwaltung lädt die entsprechenden Sammlungen nicht ([#6431](https://github.com/nocobase/nocobase/pull/6431)) von @katherinehhh

- **[Aktion: Stapelbearbeitung]** Behebt, dass der Workflow bei der Stapelbearbeitungs-Übermittlung nicht ausgelöst werden kann ([#6440](https://github.com/nocobase/nocobase/pull/6440)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Entfernt `only` im E2E-Testfall von @mytharcher

- **[Workflow: Genehmigung]**
  - Behebt, dass Verknüpfungsdaten im Genehmigungsformular nicht angezeigt werden von @mytharcher

  - Behebt einen Fehler, der bei der Genehmigung in einer externen Datenquelle ausgelöst wurde von @mytharcher
