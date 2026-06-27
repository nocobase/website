---
title: "NocoBase v1.9.0-beta.8: Unterstützung für die Farbanpassung des Seitenmenüs hinzugefügt"
description: "Versionshinweise zu v1.9.0-beta.8"
---

### 🚀 Verbesserungen

- **[auth]** Unterstützung für die Verwendung von `.` in Benutzernamen ([#7504](https://github.com/nocobase/nocobase/pull/7504)) von @2013xile

- **[client]** Lokalisierungsunterstützung für Tooltip- und Gruppenelementtitel hinzugefügt ([#7485](https://github.com/nocobase/nocobase/pull/7485)) von @katherinehhh

- **[Workflow: Manueller Knoten]** Unterstützung zum Anzeigen und Fortsetzen ausstehender manueller Aufgaben innerhalb deaktivierter Workflows ([#7493](https://github.com/nocobase/nocobase/pull/7493)) von @mytharcher

- **[Kalender]** Unterstützung für die locale-basierte Anzeige von Kalenderkopfzeilen ([#7508](https://github.com/nocobase/nocobase/pull/7508)) von @katherinehhh

- **[Theme-Editor]** Unterstützung für die Farbanpassung des Seitenmenüs hinzugefügt ([#7483](https://github.com/nocobase/nocobase/pull/7483)) von @duannyuuu

- **[Redis-Warteschlangenadapter]** Verwendung des standardmäßigen Systemloggers für den Redis-Nachrichtenwarteschlangenadapter von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**
  - Problem behoben, bei dem das Konfigurations-Popup für Schaltflächensymbole überdeckt/überlappt wurde ([#7506](https://github.com/nocobase/nocobase/pull/7506)) von @zhangzhonghe

  - Problem behoben, bei dem das Konfigurations-Popover für Menüsymbole verdeckt wurde ([#7515](https://github.com/nocobase/nocobase/pull/7515)) von @zhangzhonghe

  - Problem behoben, bei dem die Popover-Komponente überlappt/überdeckt wurde ([#7491](https://github.com/nocobase/nocobase/pull/7491)) von @zhangzhonghe

- **[Benachrichtigung: In-App-Nachricht]**
  - Problem mit falscher Analyse von Benachrichtigungslinks behoben ([#7509](https://github.com/nocobase/nocobase/pull/7509)) von @mytharcher

  - Problem behoben, bei dem beim Öffnen des Benachrichtigungs-Popups keine aktuellen Nachrichten angezeigt wurden ([#7514](https://github.com/nocobase/nocobase/pull/7514)) von @mytharcher

- **[Workflow]**
  - Potenziellen Fehler im Zusammenhang mit dem Workflow-Log-Caching behoben ([#7490](https://github.com/nocobase/nocobase/pull/7490)) von @mytharcher

  - Problem behoben, bei dem eine falsche Abonnementlogik in der Hintergrundaufgabenwarteschlange des Workflows dazu führte, dass Ausführungsnachrichten falsch behandelt wurden ([#7507](https://github.com/nocobase/nocobase/pull/7507)) von @mytharcher

- **[Datenquelle: REST-API]** Validierungsregeln für REST-API-URLs korrigiert von @katherinehhh

- **[HTTP-Anfrageverschlüsselung]** Problem behoben, bei dem Anfrageparameter den nativen URLSearchParams-Typ nicht unterstützten von @mytharcher

- **[Vorlagendruck]** Unterstützung für das Feld chinaRegions hinzugefügt von @jiannx

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem sich Formelfelder im Genehmigungsformular nicht automatisch aktualisierten von @mytharcher

  - Problem behoben, bei dem beim Löschen von Daten aus einer externen Datenquelle ein Fehler auftrat von @mytharcher
