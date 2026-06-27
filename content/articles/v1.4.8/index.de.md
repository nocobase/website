---
title: "NocoBase v1.4.8: Fehlerbehebungen"
description: "Versionshinweise zu v1.4.8"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebt ein Problem mit der Datenvorlage im Filterformular, das im Auswahlfeld für Verknüpfungsdatensätze konfiguriert ist ([#5837](https://github.com/nocobase/nocobase/pull/5837)) von @katherinehhh

  - Behebt ein Problem, bei dem Markdown-String-Vorlagen keine Daten von Verknüpfungsdaten (externe Datenquelle) laden ([#5791](https://github.com/nocobase/nocobase/pull/5791)) von @katherinehhh

- **[Benutzerdatensynchronisation]** Überspringt nicht unterstützte Datentypen während der Synchronisation, anstatt einen Fehler auszulösen. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) von @chenzhizdt

- **[Backup-Manager]**
  - Behebt das langsame Öffnen des Download-Fensters für große Backup-Dateien von @gchust

  - Behebt das Problem, dass die Wiederherstellung einer Backup-Subanwendung einen Neustart aller Anwendungen verursacht von @gchust
