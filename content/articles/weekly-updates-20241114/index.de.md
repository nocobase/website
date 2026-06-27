---
title: "NocoBase wöchentliche Updates: Verbesserung der Workflow-Benutzerfreundlichkeit"
description: "NocoBase wöchentliche Updates 2024-11-14"
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase wird derzeit mit zwei Branches aktualisiert: `main` und `next`.

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Alpha-Version, die einige noch nicht veröffentlichte neue Funktionen enthält. Diese Version ist möglicherweise nicht vollständig stabil und eignet sich für Entwickler oder Tester, um neue Funktionen vorab zu testen oder Kompatibilitätstests durchzuführen.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.45-beta](https://www.nocobase.com/en/blog/v1.3.45-beta)

*Veröffentlichungsdatum: 2024-11-06*

### 🐛 Fehlerbehebungen

- **[Client]** Die Berechtigung für das Feld der verknüpften Tabelle in der Tabelle basiert auf der Berechtigung des entsprechenden Verknüpfungsfelds ([#5569](https://github.com/nocobase/nocobase/pull/5569)) von @katherinehhh
- **[Aktion: Datensätze exportieren]** Export mit i18n korrigiert ([#5591](https://github.com/nocobase/nocobase/pull/5591)) von @chareice
- **[Aktion: Datensätze importieren]** Problem beim Import von "gehört zu"-Verknüpfungen behoben ([#5417](https://github.com/nocobase/nocobase/pull/5417)) von @chareice

## [v1.3.47-beta](https://www.nocobase.com/en/blog/v1.3.47-beta)

*Veröffentlichungsdatum: 2024-11-08*

### 🚀 Verbesserungen

- **[Authentifizierung]** Fehlermeldung für Anmeldung und Registrierung optimiert ([#5612](https://github.com/nocobase/nocobase/pull/5612)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Probleme mit Standardwerten in Untertabellen behoben ([#5607](https://github.com/nocobase/nocobase/pull/5607)) von @zhangzhonghe
  - Problem mit der Unterstützung der unscharfen Suche für Verknüpfungsfelder mit einem String-Typ-Titelfeld behoben ([#5611](https://github.com/nocobase/nocobase/pull/5611)) von @katherinehhh
- **[Authentifizierung]** Problem behoben, bei dem Benutzer das Passwort nicht ändern konnten, wenn sie sich mit einem Nicht-Passwort-Authentifikator anmeldeten ([#5609](https://github.com/nocobase/nocobase/pull/5609)) von @2013xile

## [v1.3.48-beta](https://www.nocobase.com/en/blog/v1.3.48-beta)

*Veröffentlichungsdatum: 2024-11-11*

### 🚀 Verbesserungen

- **[Client]** Unterstützung zum Ausblenden von Menüpunkten ([#5624](https://github.com/nocobase/nocobase/pull/5624)) von @chenos
- **[Server]** Umgebungsvariable `DB_SQL_BENCHMARK` hinzugefügt ([#5615](https://github.com/nocobase/nocobase/pull/5615)) von @chareice

### 🐛 Fehlerbehebungen

- **[Client]** Unterstützung für Datei-Collection als Ziel einer 1:n-Verknüpfung ([#5619](https://github.com/nocobase/nocobase/pull/5619)) von @mytharcher
- **[Aktion: Datensätze importieren]** Problem behoben, dass n:m-Beziehungsdaten nicht über das ID-Feld importiert werden konnten ([#5623](https://github.com/nocobase/nocobase/pull/5623)) von @chareice

## [v1.3.49-beta](https://www.nocobase.com/en/blog/v1.3.49-beta)

*Veröffentlichungsdatum: 2024-11-13*

### 🚀 Verbesserungen

- **[Client]** Unterstützung für 1:1- und n:m (Array)-Felder zur Verwendung von Datei-Collection ([#5637](https://github.com/nocobase/nocobase/pull/5637)) von @mytharcher
- **[Evaluatoren]** Formula.js als Standard-Evaluator im Berechnungsknoten verwendet ([#5626](https://github.com/nocobase/nocobase/pull/5626)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem das Zurücksetzen den Titel des Filters auf den Standardwert zurücksetzte ([#5635](https://github.com/nocobase/nocobase/pull/5635)) von @katherinehhh
- **[Aktion: Datensätze importieren]** Problem behoben, dass n:m-Beziehungsdaten nicht über das ID-Feld importiert werden konnten ([#5623](https://github.com/nocobase/nocobase/pull/5623)) von @chareice

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.6](https://www.nocobase.com/en/blog/v1.4.0-alpha.6)

*Veröffentlichungsdatum: 2024-11-07*

### 🎉 Neue Funktionen

- **[Client]** Unterstützung von Konfigurationsoptionen zum Ausblenden von Tabellenspalten ([#5597](https://github.com/nocobase/nocobase/pull/5597)) von @zhangzhonghe

### 🚀 Verbesserungen

- **[Datenquellen-Manager]** Tabellenkategorien so angepasst, dass sie aus der Hauptdatenquelle geladen und aus dem globalen Bereich entfernt werden ([#5602](https://github.com/nocobase/nocobase/pull/5602)) von @katherinehhh
- **[Benachrichtigungs-Manager]** Nachrichtenstruktur aktualisiert, um Empfänger in Benachrichtigungsprotokolldaten aufzunehmen ([#5603](https://github.com/nocobase/nocobase/pull/5603)) von @sheldon66

### 🐛 Fehlerbehebungen

- **[Client]** Problem mit der Tabellen-Scrollleiste im Nicht-Konfigurationsmodus behoben ([#5599](https://github.com/nocobase/nocobase/pull/5599)) von @katherinehhh
- **[Aktion: Datensätze importieren]** Import mit Datumsfeld korrigiert ([#5606](https://github.com/nocobase/nocobase/pull/5606)) von @chareice

## [v1.4.0-alpha.7](https://www.nocobase.com/en/blog/v1.4.0-alpha.7)

*Veröffentlichungsdatum: 2024-11-11*

### 🎉 Neue Funktionen

- **[Client]** Unterstützung von Trennzeichen-Eigenschaften für die Variable-Expression-Komponente ([#5620](https://github.com/nocobase/nocobase/pull/5620)) von @mytharcher
- **[Workflow]** Unterstützung zum Verschieben nachgelagerter Knoten in neue Zweige beim Erstellen eines Knotens mit Zweigen ([#5570](https://github.com/nocobase/nocobase/pull/5570)) von @mytharcher

### 🚀 Verbesserungen

- **[Client]**
  - Feldliste optimiert: Beziehungsfelder und "Duplikat"-Tag entfernt ([#5616](https://github.com/nocobase/nocobase/pull/5616)) von @katherinehhh
  - Unterstützung von `getFilterTargetKey()` aus der `Collection`-Klasse ([#5617](https://github.com/nocobase/nocobase/pull/5617)) von @mytharcher
- **[Datenquelle: Haupt]** Die `collections:list`-API zur Leistungsverbesserung überarbeitet ([#5610](https://github.com/nocobase/nocobase/pull/5610)) von @chareice
- **[Benachrichtigungs-Manager]** Benutzeroberfläche des Benachrichtigungskanal-Managers verbessert ([#5621](https://github.com/nocobase/nocobase/pull/5621)) von @sheldon66

## [v1.4.0-alpha.8](https://www.nocobase.com/en/blog/v1.4.0-alpha.8)

*Veröffentlichungsdatum: 2024-11-11*

### 🎉 Neue Funktionen

- **[WeCom]**
  - Unterstützung für automatische Anmeldung beim Besuch von Anwendungsseiten im WeCom-Browser von @chenzhizdt
  - Unterstützung für die Verwendung von Markdown und Vorlagenkarten in Benachrichtigungen von @chenzhizdt

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 Holen Sie sich NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
