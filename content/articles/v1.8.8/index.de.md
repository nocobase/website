---
title: "NocoBase v1.8.8: „Alle abgeschlossen“-Modus für parallelen Knoten hinzugefügt"
description: "Versionshinweise zu v1.8.8"
---

### 🎉 Neue Funktionen

- **[Workflow: Parallel-Knoten]** Modus „Alle abgeschlossen“ für Parallel-Knoten hinzugefügt ([#7263](https://github.com/nocobase/nocobase/pull/7263)) von @mytharcher

- **[Redis-Warteschlangen-Adapter]** Redis-Adapter für Ereigniswarteschlange hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Server]** Gleichzeitige Speicherwarteschlange verfügbar machen, wenn Elemente nicht vollständig verarbeitet werden ([#7267](https://github.com/nocobase/nocobase/pull/7267)) von @mytharcher

- **[Datenbank]** Automatische Aktivierung der einfachen Paginierung, wenn der Datensatz einen Schwellenwert überschreitet ([#7227](https://github.com/nocobase/nocobase/pull/7227)) von @aaaaaajie

- **[Workflow: Manueller Knoten]** storePopupContext unterstützt das Speichern des Standardkontexts ([#7264](https://github.com/nocobase/nocobase/pull/7264)) von @zhangzhonghe

- **[Redis-Warteschlangen-Adapter]** Gleichzeitige Warteschlange für den Redis-Adapter verfügbar machen, wenn Elemente nicht vollständig verarbeitet werden von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehlende aktuelle Objektvariable in Verknüpfungsregeln für Untertabellen ([#7266](https://github.com/nocobase/nocobase/pull/7266)) von @katherinehhh

  - Einstellung des Titelfelds im Datenauswahl ist ungültig ([#7251](https://github.com/nocobase/nocobase/pull/7251)) von @zhangzhonghe

  - Problem behoben, bei dem Markdown-Felder in der Detailansicht nicht korrekt dargestellt wurden. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) von @aaaaaajie

  - Nach Feldänderungen wurden die von diesem Feld abhängigen Assoziationsfelder nicht geleert ([#7262](https://github.com/nocobase/nocobase/pull/7262)) von @zhangzhonghe

  - Darstellungsproblem bei Verwendung veralteter Datumsvariablen in Datumsfeldern historischer Daten ([#7253](https://github.com/nocobase/nocobase/pull/7253)) von @katherinehhh

- **[Datenbank]**
  - Behebung des automatischen Fehlers der einfachen Paginierung aufgrund der Tabellenbenennungskonvention. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) von @aaaaaajie

  - Fehler beim Exportieren großer Datensätze aus PostgreSQL behoben ([#7228](https://github.com/nocobase/nocobase/pull/7228)) von @aaaaaajie

  - Problem behoben, bei dem die Standard-Primärschlüsselsortierung bei Verwendung einer externen MSSQL-Datenquelle in einem Tabellenblock zu einem Ladefehler der Liste führt. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) von @aaaaaajie

- **[Authentifizierung]** Problem behoben, bei dem ein leeres `secret` in der Unteranwendungskonfiguration die Anmeldung verhindert ([#7239](https://github.com/nocobase/nocobase/pull/7239)) von @2013xile

- **[Datenquellen-Manager]** Beibehaltung externer Datenquellenattribute in der Sammlungskonfiguration behoben ([#7249](https://github.com/nocobase/nocobase/pull/7249)) von @aaaaaajie

- **[Aktion: Stapelbearbeitung]** Stapelbearbeitung und Stapelaktualisierung im Datenauswahl nicht möglich ([#7250](https://github.com/nocobase/nocobase/pull/7250)) von @zhangzhonghe

- **[Workflow]** Falsche Version einer Abhängigkeit behoben ([#7258](https://github.com/nocobase/nocobase/pull/7258)) von @mytharcher

- **[Datenquelle: Externes Oracle]** Beibehaltung externer Datenquellenattribute in der Sammlungskonfiguration behoben von @aaaaaajie

- **[Workflow: Genehmigung]** Die URL des Link-Buttons verweist auf ein Popup auf der aktuellen Seite, aber beim Klicken wird ein 404-Fehler angezeigt von @zhangzhonghe

- **[E-Mail-Manager]** Die Beziehungssammlung zwischen Nachrichten und Labels ist unter MySQL fehlerhaft von @jiannx
