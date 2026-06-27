---
title: "NocoBase v1.4.0-alpha.20241031134640: WeCom-Benachrichtigungskanal hinzugefügt"
description: "Versionshinweise zu v1.4.0-alpha.20241031134640"
---

### 🎉 Neue Funktionen

- **[WeCom]** WeCom-Benachrichtigungskanal hinzugefügt von @chenzhizdt

### 🚀 Verbesserungen

- **[Client]** Standardwert wiederherstellen, wenn der Feldtitel gelöscht wird ([#5549](https://github.com/nocobase/nocobase/pull/5549)) von @katherinehhh

- **[Benachrichtigungsmanager]**
  - UserSelect- und UserAddition-Komponenten hinzugefügt, um die Entwicklung von Benachrichtigungskanälen zu optimieren ([#5553](https://github.com/nocobase/nocobase/pull/5553)) von @2013xile

  - API zum Abrufen der Kanaltyp-Registrierung des Benachrichtigungs-Plugins hinzugefügt ([#5531](https://github.com/nocobase/nocobase/pull/5531)) von @mytharcher

  - Name der Kanaltyp-Registrierung des Benachrichtigungs-Plugins angepasst ([#5532](https://github.com/nocobase/nocobase/pull/5532)) von @mytharcher

  - API des Benachrichtigungsmanager-Plugins zum Abrufen aller registrierten Typen hinzugefügt ([#5529](https://github.com/nocobase/nocobase/pull/5529)) von @mytharcher

- **[Benachrichtigung: In-App-Nachricht]** Verbesserung der In-App-Nachrichten-Benutzeroberfläche und Hinzufügen einiger Logs. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) von @sheldon66

### 🐛 Fehlerbehebungen

- **[Datenbank]**
  - Fehler beim Aktualisieren von Sammlungsoptionen mit Filter-Zielschlüssel behoben ([#5558](https://github.com/nocobase/nocobase/pull/5558)) von @chareice

  - Falscher primaryKeyField-Wert in Sequelize bei Verwendung mehrerer Filter-Zielschlüssel behoben ([#5556](https://github.com/nocobase/nocobase/pull/5556)) von @chareice

- **[Client]**
  - Problem behoben, bei dem Skelett-Komponenten in Tabellenblöcken nicht verschwinden ([#5548](https://github.com/nocobase/nocobase/pull/5548)) von @zhangzhonghe

  - Probleme mit Löschaktion, Textauslassungspunkten und Anzeige neuer Daten in Untertabellen behoben ([#5523](https://github.com/nocobase/nocobase/pull/5523)) von @katherinehhh

- **[Datenquellen-Manager]** Entfernen einer Datenquelle im fehlgeschlagenen Status behoben ([#5554](https://github.com/nocobase/nocobase/pull/5554)) von @chareice

- **[Benachrichtigung: E-Mail]**
  - Abfrage nach Benutzern anhand von IDs in der E-Mail-Benachrichtigung behoben ([#5533](https://github.com/nocobase/nocobase/pull/5533)) von @mytharcher

  - Fehlender Betreff in der E-Mail-Benachrichtigung basierend auf Benutzer-IDs behoben ([#5534](https://github.com/nocobase/nocobase/pull/5534)) von @mytharcher

  - Reaktionsfeldpfad im dynamischen Formular der E-Mail-Benachrichtigung behoben ([#5527](https://github.com/nocobase/nocobase/pull/5527)) von @mytharcher

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem behoben, bei dem die Auswahlkomponente für ein Viele-zu-viele (Array)-Feld nur eine Option hatte ([#5544](https://github.com/nocobase/nocobase/pull/5544)) von @2013xile

- **[Benachrichtigungsmanager]** Seitenabsturz aufgrund falschen Kanaltyps behoben ([#5528](https://github.com/nocobase/nocobase/pull/5528)) von @mytharcher

- **[Workflow: SQL-Knoten]** Timeout von „waitForLoadState(‘networkidle’)“ durch SSE behoben ([#5524](https://github.com/nocobase/nocobase/pull/5524)) von @hongboji

- **[Feldkomponente: Maske]** Problem behoben, dass Originaldaten durch Klicken nicht angezeigt werden konnten, wenn die Komponente im schreibgeschützten Zustand war von @gchust

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Timeout von „waitForLoadState(‘networkidle’)“ durch SSE behoben von @hongboji

- **[WeCom]** Problem behoben, dass beim Aufrufen der Anwendung aus der WeCom-Arbeitsumgebung eine 404-Antwort (nicht gefunden) zurückgegeben wurde von @chenzhizdt
