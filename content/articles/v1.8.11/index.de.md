---
title: "NocoBase v1.8.11: Unterstützung zur Vorschau von Office-Dateien über Microsoft Live Preview"
description: "Versionshinweise zu v1.8.11"
---

### 🎉 Neue Funktionen

- **[Office-Dateivorschau]** Unterstützung zur Vorschau von Office-Dateien über die Microsoft-Live-Vorschau ([#7300](https://github.com/nocobase/nocobase/pull/7300)) von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Menü nach Auswahl nicht mehr automatisch schließen ([#7252](https://github.com/nocobase/nocobase/pull/7252)) von @kerwin612

- **[Benachrichtigung: In-App-Nachricht]** In-App-Nachricht von SSE auf WebSocket umgestellt ([#7302](https://github.com/nocobase/nocobase/pull/7302)) von @mytharcher

- **[Workflow]** Reduzierung der zu ladenden Job-Anzahl bei der Vorbereitung der Ausführung ([#7284](https://github.com/nocobase/nocobase/pull/7284)) von @mytharcher

- **[Auth: DingTalk]** Im DingTalk-Client wird der Titel der Navigationsleiste auf einen leeren String gesetzt, anstatt „Lädt…“ anzuzeigen von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem eine Baumtabelle nicht erweitert werden konnte ([#7309](https://github.com/nocobase/nocobase/pull/7309)) von @zhangzhonghe

  - Unerwartetes Verhalten beim Drag-and-Drop-Sortieren von Tabellenzeilen behoben ([#6959](https://github.com/nocobase/nocobase/pull/6959)) von @ChimingLiu

  - Endlosschleife beim Parsen von Feldstandardwerten behoben ([#7301](https://github.com/nocobase/nocobase/pull/7301)) von @zhangzhonghe

  - Problem behoben, bei dem die Datumsfeldanzeige im Popup-Fenster bei der Konfiguration des Datenauswahl-Tools für Beziehungsfelder im Filterformular fehlerhaft war ([#7290](https://github.com/nocobase/nocobase/pull/7290)) von @katherinehhh

- **[Workflow: HTTP-Anfrageknoten]** Wettlaufsituation (Race Condition) behoben ([#7310](https://github.com/nocobase/nocobase/pull/7310)) von @mytharcher

- **[Workflow]** BigInt-ID-Problem in MySQL beim Speichern von Jobs behoben ([#7292](https://github.com/nocobase/nocobase/pull/7292)) von @mytharcher

- **[Aktion: Datensätze exportieren]** Falsche Formatierung von verschachtelten Beziehungsfeldern beim Export nach Excel behoben. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) von @aaaaaajie

- **[Datenquelle: Externer SQL Server]** Inkonsistentes Speicherformat für MSSQL-Datetime-Felder (ohne Zeitzone) aus externen Datenquellen behoben von @aaaaaajie

- **[Workflow: Genehmigung]** Fehler behoben, der bei der Auswahl von Bearbeitern innerhalb einer externen Datenquelle ausgelöst wurde von @mytharcher
