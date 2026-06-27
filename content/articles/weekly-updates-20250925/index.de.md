---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Unterstützung für das Drehen von Bildern während der Vorschau, Hinzufügen von Lokalisierungsunterstützung für Tooltips und Gruppenelementtitel und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es könnte bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.26](https://www.nocobase.com/en/blog/v1.8.26)

*Veröffentlichungsdatum: 2025-09-20*

#### 🚀 Verbesserungen

- **[client]** Lokalisierungsunterstützung für Tooltip & Gruppenelementtitel hinzugefügt ([#7485](https://github.com/nocobase/nocobase/pull/7485)) von @katherinehhh
- **[Kalender]** Unterstützung für die Anzeige der Locale-Zuordnung für Kalenderkopfzeilen ([#7508](https://github.com/nocobase/nocobase/pull/7508)) von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem das Popover zur Menüsymbolkonfiguration verdeckt wurde ([#7515](https://github.com/nocobase/nocobase/pull/7515)) von @zhangzhonghe
- **[Benachrichtigung: In-App-Nachricht]**

  - Problem mit falscher Analyse von Benachrichtigungslinks behoben ([#7509](https://github.com/nocobase/nocobase/pull/7509)) von @mytharcher
  - Problem behoben, bei dem beim Öffnen des Benachrichtigungs-Popups keine aktuellen Nachrichten angezeigt wurden ([#7514](https://github.com/nocobase/nocobase/pull/7514)) von @mytharcher
- **[Workflow]** Problem behoben, bei dem eine falsche Abonnementlogik in der Hintergrundaufgabenwarteschlange des Workflows dazu führte, dass Ausführungsnachrichten falsch behandelt wurden ([#7507](https://github.com/nocobase/nocobase/pull/7507)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem beim Löschen von Daten aus einer externen Datenquelle ein Fehler auftrat von @mytharcher
  - Problem behoben, bei dem sich Formelfelder im Genehmigungsformular nicht automatisch aktualisierten von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.8](https://www.nocobase.com/en/blog/v1.9.0-beta.8)

*Veröffentlichungsdatum: 2025-09-20*

#### 🚀 Verbesserungen

- **[auth]** Unterstützung für die Verwendung von `.` in Benutzernamen ([#7504](https://github.com/nocobase/nocobase/pull/7504)) von @2013xile
- **[client]** Lokalisierungsunterstützung für Tooltip & Gruppenelementtitel hinzugefügt ([#7485](https://github.com/nocobase/nocobase/pull/7485)) von @katherinehhh
- **[Workflow: Manueller Knoten]** Unterstützung zum Anzeigen und Fortsetzen ausstehender manueller Aufgaben innerhalb deaktivierter Workflows ([#7493](https://github.com/nocobase/nocobase/pull/7493)) von @mytharcher
- **[Kalender]** Unterstützung für die Anzeige der Locale-Zuordnung für Kalenderkopfzeilen ([#7508](https://github.com/nocobase/nocobase/pull/7508)) von @katherinehhh
- **[Theme-Editor]** Unterstützung für die Anpassung der Seitenmenüfarbe hinzugefügt ([#7483](https://github.com/nocobase/nocobase/pull/7483)) von @duannyuuu
- **[Redis-Warteschlangen-Adapter]** Verwendung des standardmäßigen Systemloggers für den Redis-Nachrichtenwarteschlangen-Adapter von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem das Popup zur Schaltflächensymbolkonfiguration überdeckt/überlappt wurde ([#7506](https://github.com/nocobase/nocobase/pull/7506)) von @zhangzhonghe
  - Problem behoben, bei dem das Popover zur Menüsymbolkonfiguration verdeckt wurde ([#7515](https://github.com/nocobase/nocobase/pull/7515)) von @zhangzhonghe
  - Problem behoben, bei dem die Popover-Komponente überlappt/überdeckt wurde ([#7491](https://github.com/nocobase/nocobase/pull/7491)) von @zhangzhonghe
- **[Benachrichtigung: In-App-Nachricht]**

  - Problem mit falscher Analyse von Benachrichtigungslinks behoben ([#7509](https://github.com/nocobase/nocobase/pull/7509)) von @mytharcher
  - Problem behoben, bei dem beim Öffnen des Benachrichtigungs-Popups keine aktuellen Nachrichten angezeigt wurden ([#7514](https://github.com/nocobase/nocobase/pull/7514)) von @mytharcher
- **[Workflow]**

  - Einen potenziellen Fehler im Zusammenhang mit dem Workflow-Log-Caching behoben ([#7490](https://github.com/nocobase/nocobase/pull/7490)) von @mytharcher
  - Problem behoben, bei dem eine falsche Abonnementlogik in der Hintergrundaufgabenwarteschlange des Workflows dazu führte, dass Ausführungsnachrichten falsch behandelt wurden ([#7507](https://github.com/nocobase/nocobase/pull/7507)) von @mytharcher
- **[Datenquelle: REST-API]** REST-API-URL-Validierungsregeln korrigiert von @katherinehhh
- **[HTTP-Anfrageverschlüsselung]** Problem behoben, bei dem Anforderungsparameter den nativen URLSearchParams-Typ nicht unterstützten von @mytharcher
- **[Vorlagendruck]** Unterstützung für das Feld chinaRegions von @jiannx
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem sich Formelfelder im Genehmigungsformular nicht automatisch aktualisierten von @mytharcher
  - Problem behoben, bei dem beim Löschen von Daten aus einer externen Datenquelle ein Fehler auftrat von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.16](https://www.nocobase.com/en/blog/v1.9.0-alpha.16)

*Veröffentlichungsdatum: 2025-09-24*

#### 🚀 Verbesserungen

- **[client]**

  - Unterstützung zum Drehen von Bildern während der Vorschau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) von @mytharcher
  - Lokalisierungsunterstützung für Tooltip & Gruppenelementtitel hinzugefügt ([#7485](https://github.com/nocobase/nocobase/pull/7485)) von @katherinehhh
- **[RabbitMQ-Warteschlangen-Adapter]** Verbesserung der RabbitMQ-Verbindungsverwaltung und Nachrichtenverarbeitungslogik von @sdp-ncd

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem Seitenmenü-Untermenüs nicht korrekt hervorgehoben werden konnten ([#7520](https://github.com/nocobase/nocobase/pull/7520)) von @duannyuuu
  - Problem behoben, bei dem das Popover zur Menüsymbolkonfiguration verdeckt wurde ([#7515](https://github.com/nocobase/nocobase/pull/7515)) von @zhangzhonghe
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem beim Öffnen des Benachrichtigungs-Popups keine aktuellen Nachrichten angezeigt wurden ([#7514](https://github.com/nocobase/nocobase/pull/7514)) von @mytharcher
- **[Workflow]** Problem behoben, bei dem die Workflow-Listenbedingung beim Laden des zugehörigen Feldkontexts in der gebundenen Workflow-Konfiguration falsch war ([#7516](https://github.com/nocobase/nocobase/pull/7516)) von @mytharcher
- **[Workflow: Schleifenknoten]** Problem behoben, bei dem der Prozess fälschlicherweise zum nächsten Element überging, selbst wenn die Bedingungen des Schleifenknotens nicht erfüllt waren ([#7521](https://github.com/nocobase/nocobase/pull/7521)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem beim Löschen von Daten aus einer externen Datenquelle ein Fehler auftrat von @mytharcher
  - Problem behoben, bei dem sich Formelfelder im Genehmigungsformular nicht automatisch aktualisierten von @mytharcher
