---
title: "NocoBase v1.9.0-alpha.3: Unterstützung der Anzeige von plugin-definierten Tabellen in der Hauptdatenquelle"
description: "Versionshinweise zu v1.9.0-alpha.3"
---

### 🎉 Neue Funktionen

- **[Datenquelle: Hauptdatenquelle]** Unterstützung für die Anzeige von plugin-definierten Tabellen in der Hauptdatenquelle. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) von @aaaaaajie

- **[Workflow: Datumsberechnungsknoten]** Unterstützung zum Testen des Knotens von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Farbauswahl: Vier empfohlene Farben hinzugefügt ([#7226](https://github.com/nocobase/nocobase/pull/7226)) von @zhangzhonghe

- **[Workflow]** Vergleich für Datumswerte kompatibel gemacht ([#7237](https://github.com/nocobase/nocobase/pull/7237)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Stilregeln funktionieren nicht in der Aktionsspalte von Tabellen ([#7225](https://github.com/nocobase/nocobase/pull/7225)) von @katherinehhh

  - Vermeidung der Auswahl von Nicht-Assoziationsfeldern in Appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) von @mytharcher

  - Fehler behoben: 'react-device-detect' kann nicht aufgelöst werden ([#7224](https://github.com/nocobase/nocobase/pull/7224)) von @zhangzhonghe

  - Beim Löschen eines Menüs werden die entsprechenden Daten in der uiSchemas-Tabelle nicht gelöscht ([#7232](https://github.com/nocobase/nocobase/pull/7232)) von @zhangzhonghe

- **[Datenbank]** Fehler beim Aktivieren der einfachen Paginierung für Tabellen externer Datenquellen behoben ([#7222](https://github.com/nocobase/nocobase/pull/7222)) von @aaaaaajie

- **[Sammlungsfeld: Sortierung]** Fehlende Sortierfeldauswahl beim Duplizieren von Datensätzen ([#7116](https://github.com/nocobase/nocobase/pull/7116)) von @katherinehhh

- **[Workflow: Unterworkflow]** Fehler behoben, der ausgelöst wird, wenn ein Rückrufsignal eintrifft, die ausstehende Ausführung jedoch nicht auf der aktuellen Instanz erfolgt von @mytharcher

- **[Workflow: Genehmigung]**
  - Mehrstufige Assoziationen beim Einreichen einer Genehmigung behoben von @mytharcher

  - Fehlertoleranz für gelöschte Genehmigungen in der Datensatzliste hinzugefügt von @mytharcher

- **[E-Mail-Manager]** Optimierte Leistung der E-Mail-Nachrichtenliste von @jiannx
