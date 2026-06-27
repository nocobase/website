---
title: "NocoBase v1.6.0-beta.16: Zeitfeld unterstützt Zeitformat"
description: "Versionshinweise zu v1.6.0-beta.16"
---

### 🎉 Neue Funktionen

- **[Client]** Zeitfeld unterstützt Zeitformat ([#6329](https://github.com/nocobase/nocobase/pull/6329)) von @katherinehhh

### 🚀 Verbesserungen

- **[Server]** Upgrade von koa auf 2.15.4; Upgrade von @koa/cors auf 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) von @2013xile

- **[Workflow]** Lazy Loading des Job-Ergebnisses für bessere Leistung ([#6344](https://github.com/nocobase/nocobase/pull/6344)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Auth]** Vermeidung der Token-Erneuerung während der WebSocket-Autorisierung. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) von @sheldon66

- **[Client]**
  - Seiten mit benutzerdefiniertem Favicon zeigen kurz das NocoBase-Favicon während des Ladens ([#6337](https://github.com/nocobase/nocobase/pull/6337)) von @zhangzhonghe

  - Schaltfläche „Hinzufügen“ erscheint beim Überfahren im schreibgeschützten Modus des Assoziationsfeldes ([#6322](https://github.com/nocobase/nocobase/pull/6322)) von @katherinehhh

- **[Devtools]** Stellt sicher, dass der X-Forwarded-For-Header nur gesetzt wird, wenn req.ip nicht undefined ist. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) von @sheldon66

- **[Block: Karte]** Konfigurationseinstellungen für das Kartenfeld fehlen/sind nicht sichtbar ([#6336](https://github.com/nocobase/nocobase/pull/6336)) von @zhangzhonghe

- **[Mobil]** Seitenfehler: Eigenschaften von null können nicht gelesen werden (Lesen von 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) von @zhangzhonghe

- **[Benutzer]** Eine Fehleroberfläche erscheint kurz beim ersten Laden der Benutzerberechtigungsverwaltungstabelle ([#6324](https://github.com/nocobase/nocobase/pull/6324)) von @zhangzhonghe

- **[Block: Aktionspanel]** Das Festlegen der Höhe des Aktionspanels ist ungültig ([#6321](https://github.com/nocobase/nocobase/pull/6321)) von @zhangzhonghe

- **[Aktion: Datensätze importieren Pro]** Schaltfläche zum Importieren von Assoziationsblock-Datensätzen zeigt bei doppelter Datensatzerkennung keine Daten im Feld-Dropdown an von @katherinehhh

- **[Aktion: Datensätze exportieren Pro]** Entfernen der Option „Block hinzufügen“ in den Einstellungen der Export-Anhang-Schaltfläche von @katherinehhh

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Migration für veraltete Schaltflächen behoben, die an benutzerdefinierte Aktions-Workflows gebunden waren von @mytharcher

- **[Benutzerdefiniertes Branding]** Seiten mit benutzerdefiniertem Favicon zeigen kurz das NocoBase-Favicon während des Ladens von @zhangzhonghe

- **[Vorlagendruck]** Wiederherstellung aus lokalem Speicher fehlgeschlagen, wenn sowohl das Plugin für Aktionsvorlagendruck als auch das Backup-Manager-Plugin aktiviert waren von @gchust

- **[Workflow: Genehmigung]**
  - Fehler durch `.toJSON()` behoben von @mytharcher

  - Migration aufgrund der Versionsnummer nicht ausgeführt behoben von @mytharcher

  - Migration für veraltete Blöcke behoben von @mytharcher
