---
title: "NocoBase v1.4.0-alpha.20241024133132: Unterstützung für das Hinzufügen von Gruppen in Formularen und Detailblöcken"
description: "Versionshinweise zu v1.4.0-alpha.20241024133132"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung zum Hinzufügen von Gruppen in Formularen und Detailblöcken ([#5498](https://github.com/nocobase/nocobase/pull/5498)) von @katherinehhh

- **[Kalender]** Plugin-Kalender um Standard-Ansichtseinstellungen und Internationalisierungskonfigurationen erweitert ([#5487](https://github.com/nocobase/nocobase/pull/5487)) von @Cyx649312038

- **[Datenquelle: KingbaseES]** Unterstützung für die Verwendung der Kingbase-Datenbank als Haupt- oder externe Datenquelle (pg-Modus) von @chareice
Referenz: [Datenquelle - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)
### 🚀 Verbesserungen

- **[Datenbank]** Unterstützung für statische Ladelogik von Plugins ([#5466](https://github.com/nocobase/nocobase/pull/5466)) von @chareice

- **[Client]** Verbesserte Rendering-Leistung von Tabellenblöcken (Erstladezeit um ca. 50% reduziert) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) von @zhangzhonghe

- **[Mobil]** Mobiler Client unterstützt Filter-Formular-Blöcke ([#5482](https://github.com/nocobase/nocobase/pull/5482)) von @katherinehhh

- **[Backup-Manager]**
  - Standardeinstellung für `Backup lokaler Speicherdateien` auf true geändert von @gchust

  - Datenbankänderungen rückgängig machen, wenn der Wiederherstellungsvorgang fehlschlägt von @gchust

### 🐛 Fehlerbehebungen

- **[Server]** Das afterLoad-Ereignis der App wurde nach der Installation nicht ausgelöst ([#5506](https://github.com/nocobase/nocobase/pull/5506)) von @chenos

- **[Öffentliche Formulare]** ACL-Snippet für öffentliche Formulare registriert ([#5505](https://github.com/nocobase/nocobase/pull/5505)) von @katherinehhh

- **[Backup-Manager]** Behoben: Nach der Wiederherstellung einer Sub-App stürzte die Haupt-App ab, wenn die Sub-App ein anderes Schema verwendete von @gchust
