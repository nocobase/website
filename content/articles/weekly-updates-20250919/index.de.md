---
title: "NocoBase wöchentliche Updates: Optimierung und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: Unterstützung für die Anzeige von Gebietsschema-Zuordnungen für Kalenderüberschriften, Fehlerbehebungen und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es könnte bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.25](https://www.nocobase.com/en/blog/v1.8.25)

*Veröffentlichungsdatum: 2025-09-17*

#### 🚀 Verbesserungen

- **[auth]** Unterstützung der Verwendung von `.` in Benutzernamen ([#7504](https://github.com/nocobase/nocobase/pull/7504)) von @2013xile

#### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem das Popup zur Schaltflächensymbol-Konfiguration überdeckt/überlappt wurde ([#7506](https://github.com/nocobase/nocobase/pull/7506)) von @zhangzhonghe
- **[Vorlagendruck]** Unterstützung des Feldes chinaRegions von @jiannx

### [v1.8.24](https://www.nocobase.com/en/blog/v1.8.24)

*Veröffentlichungsdatum: 2025-09-13*

#### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützung der Rückkehr zu beliebigen Knoten im Genehmigungsprozess von @mytharcher

#### 🚀 Verbesserungen

- **[server]** Verwendung des standardmäßigen Systemloggers für die Nachrichtenwarteschlange ([#7480](https://github.com/nocobase/nocobase/pull/7480)) von @mytharcher
- **[client]** Entfernung des Auslassungspopovers aus der Dateiliste ([#7479](https://github.com/nocobase/nocobase/pull/7479)) von @mytharcher
- **[Workflow]** Optimierung des Workflow-Vorbereitungsprozesses zur Unterstützung der Verwendung von vorgeladenen Knotendaten ([#7476](https://github.com/nocobase/nocobase/pull/7476)) von @mytharcher
- **[Theme-Editor]** Hinzufügen der Unterstützung für die Farbanpassung des Seitenmenüs ([#7483](https://github.com/nocobase/nocobase/pull/7483)) von @duannyuuu
- **[Redis-Warteschlangenadapter]** Verwendung des standardmäßigen Systemloggers für den Redis-Nachrichtenwarteschlangenadapter von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem die Popover-Komponente überdeckt/überlappt wurde ([#7491](https://github.com/nocobase/nocobase/pull/7491)) von @zhangzhonghe
  - Falsche Prüfung auf 'nicht leer' für numerische Felder in Verknüpfungsregeln ([#7477](https://github.com/nocobase/nocobase/pull/7477)) von @katherinehhh
  - Schreibgeschützte Select/Multiselect/Date/Richtext-Felder waren im öffentlichen Formular weiterhin bearbeitbar ([#7484](https://github.com/nocobase/nocobase/pull/7484)) von @katherinehhh
- **[Workflow]** Behebung eines potenziellen Fehlers im Zusammenhang mit dem Workflow-Log-Caching ([#7490](https://github.com/nocobase/nocobase/pull/7490)) von @mytharcher
- **[HTTP-Anfrageverschlüsselung]** Problem behoben, bei dem Anforderungsparameter den nativen URLSearchParams-Typ nicht unterstützten von @mytharcher
- **[Datenquelle: REST-API]** Korrektur der URL-Validierungsregeln für die REST-API von @katherinehhh
- **[Workflow: Genehmigung]** Problem behoben, bei dem der Statustext in der Genehmigungsabschlussbenachrichtigung nicht übersetzt wurde von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.15](https://www.nocobase.com/en/blog/v1.9.0-alpha.15)

*Veröffentlichungsdatum: 2025-09-17*

#### 🚀 Verbesserungen

- **[auth]** Unterstützung der Verwendung von `.` in Benutzernamen ([#7504](https://github.com/nocobase/nocobase/pull/7504)) von @2013xile
- **[server]** Verwendung des standardmäßigen Systemloggers für die Nachrichtenwarteschlange ([#7480](https://github.com/nocobase/nocobase/pull/7480)) von @mytharcher
- **[snowflake-id]** Änderung der IDs von Systemtabellen mit auto-increment Primärschlüsseln, aber ohne eindeutige Identifikatoren, zu 53-Bit-Schneeflocken-ähnlichen IDs ([#7465](https://github.com/nocobase/nocobase/pull/7465)) von @2013xile
- **[Kalender]** Unterstützung der Locale-Zuordnungsanzeige für Kalenderüberschriften ([#7508](https://github.com/nocobase/nocobase/pull/7508)) von @katherinehhh
- **[Workflow: Manueller Knoten]** Unterstützung zum Anzeigen und Fortsetzen von ausstehenden manuellen Aufgaben innerhalb deaktivierter Workflows ([#7493](https://github.com/nocobase/nocobase/pull/7493)) von @mytharcher
- **[Theme-Editor]** Hinzufügen der Unterstützung für die Farbanpassung des Seitenmenüs ([#7483](https://github.com/nocobase/nocobase/pull/7483)) von @duannyuuu
- **[Redis-Warteschlangenadapter]** Verwendung des standardmäßigen Systemloggers für den Redis-Nachrichtenwarteschlangenadapter von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem das Popup zur Schaltflächensymbol-Konfiguration überdeckt/überlappt wurde ([#7506](https://github.com/nocobase/nocobase/pull/7506)) von @zhangzhonghe
  - Problem behoben, bei dem die Popover-Komponente überdeckt/überlappt wurde ([#7491](https://github.com/nocobase/nocobase/pull/7491)) von @zhangzhonghe
  - Schreibgeschützte Select/Multiselect/Date/Richtext-Felder waren im öffentlichen Formular weiterhin bearbeitbar ([#7484](https://github.com/nocobase/nocobase/pull/7484)) von @katherinehhh
- **[Workflow]**

  - Problem behoben, bei dem eine falsche Abonnementlogik in der Hintergrundaufgabenwarteschlange des Workflows dazu führte, dass Ausführungsnachrichten falsch behandelt wurden ([#7507](https://github.com/nocobase/nocobase/pull/7507)) von @mytharcher
  - Behebung eines potenziellen Fehlers im Zusammenhang mit dem Workflow-Log-Caching ([#7490](https://github.com/nocobase/nocobase/pull/7490)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** Problem mit der falschen Analyse von Benachrichtigungslinks behoben ([#7509](https://github.com/nocobase/nocobase/pull/7509)) von @mytharcher
- **[Datenquelle: REST-API]** Korrektur der URL-Validierungsregeln für die REST-API von @katherinehhh
- **[HTTP-Anfrageverschlüsselung]** Problem behoben, bei dem Anforderungsparameter den nativen URLSearchParams-Typ nicht unterstützten von @mytharcher
- **[Vorlagendruck]** Unterstützung des Feldes chinaRegions von @jiannx
- **[E-Mail-Manager]** Problem mit fehlerhaftem Betreff behoben von @jiannx
