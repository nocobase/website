---
title: "NocoBase wöchentliche Updates: Optimierung des mobilen Stylings"
description: "Die Updates dieser Woche umfassen: Optimierung des mobilen Stylings, Unterstützung für die Konfiguration des Anmeldeformulars, Anpassung der Standardspaltenbreite im Tabellenblock und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Diese Woche haben wir Anpassungen an der Versionsveröffentlichung vorgenommen. Zukünftige Versionsupdates werden drei Branches umfassen: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie ist hauptsächlich für Testnutzer gedacht, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.50-beta](https://www.nocobase.com/en/blog/v1.3.50-beta)

*Veröffentlichungsdatum: 2024-11-14*

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem der Titel einer Verknüpfungsregel während der Bearbeitung nicht gelöscht werden konnte ([#5644](https://github.com/nocobase/nocobase/pull/5644)) von @katherinehhh
- **[Kommentare]** Problem behoben, bei dem die Datenbereichseinstellung im Kommentarblock nicht funktionierte von @katherinehhh

## [v1.3.51](https://www.nocobase.com/en/blog/v1.3.51)

*Veröffentlichungsdatum: 2024-11-19*

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem die Feldberechtigungsprüfung nicht vom Kontext des Assoziationsfeldes beeinflusst wurde ([#5672](https://github.com/nocobase/nocobase/pull/5672)) von @katherinehhh
  - Problem behoben, bei dem das Speichern von leeren Werten in Verknüpfungsregeln diese in statische leere Werte änderte ([#5667](https://github.com/nocobase/nocobase/pull/5667)) von @katherinehhh
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem behoben, bei dem das Abrufen von Datensätzen in einer Assoziationssammlung mit Viele-zu-viele (Array)-Feldern einen Fehler verursachte ([#5661](https://github.com/nocobase/nocobase/pull/5661)) von @2013xile
- **[Block: Gantt]** Problem behoben, bei dem die Gantt-Blockvorlage beim Hinzufügen fälschlicherweise den Kalenderblock aufrief ([#5673](https://github.com/nocobase/nocobase/pull/5673)) von @katherinehhh
- **[Datenvisualisierung]** Problem behoben, bei dem Datentransformationen im Tooltip von Doppelachsen-Diagrammen nicht funktionierten ([#5649](https://github.com/nocobase/nocobase/pull/5649)) von @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.9](https://www.nocobase.com/en/blog/v1.4.0-alpha.9)

*Veröffentlichungsdatum: 2024-11-14*

### 🎉 Neue Funktionen

- **[Authentifizierung]** Ermöglicht die Konfiguration der Benutzernamen- und E-Mail-Felder des Registrierungsformulars ([#5639](https://github.com/nocobase/nocobase/pull/5639)) von @2013xile
- **[Workflow]** Unterstützung für Union-Key in Sammlungsereignissen ([#5627](https://github.com/nocobase/nocobase/pull/5627)) von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Standardspaltenbreite in Tabellenblöcken auf 100 angepasst ([#5625](https://github.com/nocobase/nocobase/pull/5625)) von @katherinehhh
- **[Benachrichtigungsmanager]** In-App-Nachrichtensymbol auf Glockensymbol aktualisiert ([#5638](https://github.com/nocobase/nocobase/pull/5638)) von @sheldon66
- **[Block: Aktionspanel]** Unterstützung für Blockhöheneinstellung im Aktionspanel hinzugefügt ([#5628](https://github.com/nocobase/nocobase/pull/5628)) von @katherinehhh
- **[Mobil]** Stil: Optimierung des mobilen Stils: Reduzierung des Feldabstands und Verbesserung der Kompaktheit der Feldanzeige ([#5605](https://github.com/nocobase/nocobase/pull/5605)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Build]** Problem behoben, bei dem das Erstellen des Plugins fehlschlug, wenn es eine .less-Datei enthielt ([#5646](https://github.com/nocobase/nocobase/pull/5646)) von @gchust
- **[Client]** Rechtsbündige fixierte Spalten in Tabellen korrigiert ([#5636](https://github.com/nocobase/nocobase/pull/5636)) von @katherinehhh
- **[Workflow: Schleifenknoten]** Falsche Bedingungsprüfung im Schleifenknoten behoben ([#5634](https://github.com/nocobase/nocobase/pull/5634)) von @mytharcher
- **[Benachrichtigungsmanager]** Problem behoben, bei dem die Vorlage in der Benachrichtigungs-API nicht kompiliert wurde ([#5630](https://github.com/nocobase/nocobase/pull/5630)) von @mytharcher

## [v1.4.0-alpha.10](https://www.nocobase.com/en/blog/v1.4.0-alpha.10)

*Veröffentlichungsdatum: 2024-11-14*

### 🚀 Verbesserungen

- **[Client]** Einige APIs des Client-Kerns angepasst und Warnungen behoben ([#5651](https://github.com/nocobase/nocobase/pull/5651)) von @mytharcher
- **[Mobil]** Bestimmte Komponenten durch mobile Komponenten ersetzt ([#5590](https://github.com/nocobase/nocobase/pull/5590)) von @katherinehhh

## [v1.4.0-alpha.11](https://www.nocobase.com/en/blog/v1.4.0-alpha.11)

*Veröffentlichungsdatum: 2024-11-15*

### 🐛 Fehlerbehebungen

- **[Client]** Änderung der `openSize`-Eigenschaft in Aktionsschaltflächen rückgängig gemacht ([#5656](https://github.com/nocobase/nocobase/pull/5656)) von @mytharcher

## [v1.4.0-alpha.12](https://www.nocobase.com/en/blog/v1.4.0-alpha.12)

*Veröffentlichungsdatum: 2024-11-16*

### 🐛 Fehlerbehebungen

- **[Client]**

  - Dateitypzuordnung korrigiert, wenn Datei oder Eigenschaft null ist ([#5659](https://github.com/nocobase/nocobase/pull/5659)) von @mytharcher
  - Problem behoben, bei dem die Seitenanzahl nach dem Löschen von Daten in einer Untertabelle nicht aktualisiert wurde ([#5648](https://github.com/nocobase/nocobase/pull/5648)) von @katherinehhh
- **[Workflow]** Problem behoben, bei dem ein Knoten verschwand, nachdem eine Bedingung ohne vorherigen Zweig hinzugefügt wurde ([#5658](https://github.com/nocobase/nocobase/pull/5658)) von @mytharcher
- **[Mobil]** Stilproblem bei Verwendung von langem Text als Titelfeld in einem Assoziationsfeld ([#5655](https://github.com/nocobase/nocobase/pull/5655)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Fehler bei Verwendung des Anhang-URL-Feldes mit externer Datenquelle behoben von @katherinehhh

## [v1.4.0-alpha.13](https://www.nocobase.com/en/blog/v1.4.0-alpha.13)

*Veröffentlichungsdatum: 2024-11-16*

### 🐛 Fehlerbehebungen

- **[Mobil]** Problem behoben: Desktop-Komponenten für die Auswahl im mobilen Konfigurationsmodus verwenden & Fehler bei Verwendung von Variablen als Standardwerte in datePicker behoben ([#5662](https://github.com/nocobase/nocobase/pull/5662)) von @katherinehhh

## [v1.4.0-alpha.14](https://www.nocobase.com/en/blog/v1.4.0-alpha.14)

*Veröffentlichungsdatum: 2024-11-17*

### 🐛 Fehlerbehebungen

- **[Mobil]** Feldzuweisung korrigiert, um den Variablenwert 0 zu unterstützen ([#5663](https://github.com/nocobase/nocobase/pull/5663)) von @katherinehhh

## [v1.4.0-alpha.16](https://www.nocobase.com/en/blog/v1.4.0-alpha.16)

*Veröffentlichungsdatum: 2024-11-18*

### 🐛 Fehlerbehebungen

- **[Build]** Problem behoben, bei dem `yarn dev` einen Fehler meldete, wenn bereits erstellte Plugins im System vorhanden waren ([#5671](https://github.com/nocobase/nocobase/pull/5671)) von @gchust
- **[Mobil]** Problem behoben: Stilproblem auf Mobilgeräten, wenn die Untertabelle so konfiguriert ist, dass nur Daten ausgewählt werden können ([#5670](https://github.com/nocobase/nocobase/pull/5670)) von @katherinehhh

## [v1.4.0-alpha.17](https://www.nocobase.com/en/blog/v1.4.0-alpha.17)

*Veröffentlichungsdatum: 2024-11-19*

### 🚀 Verbesserungen

- **[Workflow]** Unterstützung zum Registrieren von Systemvariablen im Client ([#5676](https://github.com/nocobase/nocobase/pull/5676)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem die Feldberechtigungsprüfung nicht vom Kontext des Assoziationsfeldes beeinflusst wurde ([#5672](https://github.com/nocobase/nocobase/pull/5672)) von @katherinehhh
- **[Block: Gantt]** Problem behoben, bei dem die Gantt-Blockvorlage beim Hinzufügen fälschlicherweise den Kalenderblock aufrief ([#5673](https://github.com/nocobase/nocobase/pull/5673)) von @katherinehhh
- **[Kalender]** Problem behoben, bei dem Datumsfeldoptionen mit und ohne Zeitzone im Kalenderblock fehlten ([#5674](https://github.com/nocobase/nocobase/pull/5674)) von @katherinehhh

## [v1.4.0-beta.1](https://www.nocobase.com/en/blog/v1.4.0-beta.1)

*Veröffentlichungsdatum: 2024-11-19*

### 🚀 Verbesserungen

- **[Mobil]** Unterstützung der dynamischen Eigenschaft `hidden` für die Komponente `Tabs.TabPan` zur Steuerung des Renderns ([#5687](https://github.com/nocobase/nocobase/pull/5687)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem der eingegebene Datumswert beim Wechseln der Operatoren im Filter-Button und beim Absenden des Datumsfeldes gelöscht wurde ([#5684](https://github.com/nocobase/nocobase/pull/5684)) von @katherinehhh
  - Problem behoben, bei dem die Verknüpfungsregelbedingung mit Datumsvariable nicht funktionierte ([#5675](https://github.com/nocobase/nocobase/pull/5675)) von @katherinehhh

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.1](https://www.nocobase.com/en/blog/v1.5.0-alpha.1)

*Veröffentlichungsdatum: 2024-11-19*

### 🎉 Neue Funktionen

- **[Redis Pub Sub Adapter]** Redis-Synchronisationsadapter-Plugin hinzugefügt von @mytharcher

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 Holen Sie sich NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
