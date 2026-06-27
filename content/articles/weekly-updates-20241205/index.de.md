---
title: "NocoBase wöchentliche Updates: Unterstützung für das Öffnen von Pop-ups beim Klicken auf Links im readPretty-Feld"
description: "Die Updates dieser Woche umfassen: Unterstützung für das Öffnen von Pop-ups beim Klicken auf Links im readPretty-Feld, Unterstützung für manuelles Auslösen von Workflows und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Protokolle zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Diese Woche haben wir [NocoBase 1.4.0](https://www.nocobase.com/en/blog/nocobase-1-4-0) veröffentlicht, das mehrere neue Funktionen und Verbesserungen mit sich bringt, darunter eine vereinfachte Plugin-Verwaltung, erweiterte Benachrichtigungsfunktionen, Benutzerdatensynchronisierung und einen Backup-Manager.**

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es könnte einige bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich dazu, Feedback von Testern zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die sich für die neuesten Entwicklungen des Produkts interessieren, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.53](https://www.nocobase.com/en/blog/v1.3.53)

*Veröffentlichungsdatum: 28.11.2024*

### 🚀 Verbesserungen

- **[Client]**

  - Exportieren des essentiellen Hooks ([#5702](https://github.com/nocobase/nocobase/pull/5702)) von @mytharcher
  - Plugin für das Feld „China-Region“ aus den integrierten Plugins entfernt ([#5693](https://github.com/nocobase/nocobase/pull/5693)) von @katherinehhh
- **[Workflow: Pre-Action-Event]** Entfernen von Warnmeldungen im Request-Interceptor von @mytharcher

### 🐛 Fehlerbehebungen

- **[CLI]** Daemon-Modus löscht keine Sock-Dateien ([#5750](https://github.com/nocobase/nocobase/pull/5750)) von @chenos
- **[Client]**

  - Problem behoben, bei dem sich Assoziationsfelder gegenseitig beeinflussen, wenn mehrere Assoziationsfelder dieselbe Zielsammlung haben ([#5744](https://github.com/nocobase/nocobase/pull/5744)) von @katherinehhh
  - Problem mit der Ausrichtung von Kontrollkästchen in Untertabellen behoben ([#5735](https://github.com/nocobase/nocobase/pull/5735)) von @katherinehhh
  - Problem mit der Anzeige von Fremdschlüsselfeldern im Datenauswähler behoben ([#5734](https://github.com/nocobase/nocobase/pull/5734)) von @katherinehhh
  - Anpassung von feedbackLayout zur Verbesserung der Validierungsmeldungen in Untertabellen behoben ([#5700](https://github.com/nocobase/nocobase/pull/5700)) von @katherinehhh
- **[Server]** Plugins in Abhängigkeitsreihenfolge laden ([#5706](https://github.com/nocobase/nocobase/pull/5706)) von @chenos
- **[Block: Karte]** Fehler beim Ändern der Zoomstufen in Google Maps behoben ([#5722](https://github.com/nocobase/nocobase/pull/5722)) von @katherinehhh
- **[Datenquelle: Haupt]** Problem beim Ableiten des Feldnamens in Ansichtssammlungen behoben ([#5729](https://github.com/nocobase/nocobase/pull/5729)) von @chareice
- **[Dateimanager]** Wenn der Endpunkt nicht leer ist, wird forcePathStyle auf true gesetzt ([#5712](https://github.com/nocobase/nocobase/pull/5712)) von @chenos

## [v1.3.55](https://www.nocobase.com/en/blog/v1.3.55)

*Veröffentlichungsdatum: 03.12.2024*

### 🚀 Verbesserungen

- **[Client]** Verwendung von Icons mit präziserer Bedeutung für Block-Initialisierer ([#5757](https://github.com/nocobase/nocobase/pull/5757)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - E2E-Tests basierend auf geänderten Icons korrigiert ([#5768](https://github.com/nocobase/nocobase/pull/5768)) von @mytharcher
  - Problem behoben, bei dem das Auswahlfeld bei leeren Daten leer angezeigt wurde ([#5762](https://github.com/nocobase/nocobase/pull/5762)) von @katherinehhh
- **[Datenbank]** Aktualisieren von hasOne/belongsTo-Assoziationswerten ohne Fremdschlüssel behoben ([#5754](https://github.com/nocobase/nocobase/pull/5754)) von @chareice
- **[Datenquellen-Manager]** Falsche Anzeige des Quellschlüssels behoben ([#5771](https://github.com/nocobase/nocobase/pull/5771)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]**

  - Allen Rollen erlauben, benutzerdefinierte Aktionsereignisse in externen Datenquellen auszulösen von @mytharcher
  - Standarddatenquelle als Haupt festgelegt von @mytharcher
  - Datenquellenfehler behoben, wenn keine Übereinstimmung vorliegt von @mytharcher
  - Problem behoben, dass der benutzerdefinierte Aktions-Trigger bei Assoziationen nicht ausgelöst wurde von @mytharcher

## [v1.4.1](https://www.nocobase.com/en/blog/v1.4.1)

*Veröffentlichungsdatum: 04.12.2024*

### 🚀 Verbesserungen

- **[CLI]** Optimierung des pkg-Befehls ([#5785](https://github.com/nocobase/nocobase/pull/5785)) von @chenos

### 🐛 Fehlerbehebungen

- **[Mobil]** Fehlendes Datumseingabefeld bei Filteroperationen auf Mobilgeräten behoben ([#5786](https://github.com/nocobase/nocobase/pull/5786)) von @katherinehhh

## [v1.4.2](https://www.nocobase.com/en/blog/v1.4.2)

*Veröffentlichungsdatum: 04.12.2024*

### 🐛 Fehlerbehebungen

- **[Workflow]** Problem behoben, dass das asynchrone Workflow-Tag in der Workflow-Tabelle verschwand ([#5787](https://github.com/nocobase/nocobase/pull/5787)) von @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.9](https://www.nocobase.com/en/blog/v1.4.0-beta.9)

*Veröffentlichungsdatum: 28.11.2024*

### 🚀 Verbesserungen

- **[Mobil]** Optimierung des kompakten Themes für Mobilgeräte ([#5723](https://github.com/nocobase/nocobase/pull/5723)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Datenvisualisierung]** Problem behoben, bei dem die Zeitzone fälschlicherweise aus dem `context` abgerufen wurde ([#5743](https://github.com/nocobase/nocobase/pull/5743)) von @2013xile

## [v1.4.0-beta.10](https://www.nocobase.com/en/blog/v1.4.0-beta.10)

*Veröffentlichungsdatum: 28.11.2024*

### 🚀 Verbesserungen

- **[Client]** Unterstützung für die Verwendung einer benutzerdefinierten Komponente in der Variableneingabekomponente, wenn `nullable` auf `false` gesetzt ist ([#5746](https://github.com/nocobase/nocobase/pull/5746)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Problem mit der Bildlaufleiste behoben, wenn eine Tabelle bei mittlerer Größe nur wenige Spalten hat ([#5745](https://github.com/nocobase/nocobase/pull/5745)) von @katherinehhh

## [v1.4.0-beta.11](https://www.nocobase.com/en/blog/v1.4.0-beta.11)

*Veröffentlichungsdatum: 02.12.2024*

### 🚀 Verbesserungen

- **[Client]** Unterstützung für Anhangsdateifelder in öffentlichen Formularen ([#5749](https://github.com/nocobase/nocobase/pull/5749)) von @katherinehhh
- **[CLI]** Neustart des Prozesses beim Hinzufügen oder Entfernen von Plugins ([#5761](https://github.com/nocobase/nocobase/pull/5761)) von @chenos
- **[Kalender]** Unterstützung für schnelle Terminerstellung durch Klicken auf ein Datum im Kalenderblock ([#5733](https://github.com/nocobase/nocobase/pull/5733)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Client]** Problem mit der Feldbreite in Untertabellen im horizontalen Layout behoben ([#5763](https://github.com/nocobase/nocobase/pull/5763)) von @katherinehhh

## [v1.5.0-beta.1](https://www.nocobase.com/en/blog/v1.5.0-beta.1)

*Veröffentlichungsdatum: 03.12.2024*

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem der Datensatzauswähler bei der Auswahl über Seiten hinweg keine ausgewählten Elemente anzeigte ([#5770](https://github.com/nocobase/nocobase/pull/5770)) von @katherinehhh
- **[Mobil]** Fehlendes Datumseingabefeld bei Filteroperationen auf Mobilgeräten behoben ([#5779](https://github.com/nocobase/nocobase/pull/5779)) von @katherinehhh
- **[Workflow]** Problem behoben, dass Variablen im Testmodus von Knoten nicht angezeigt wurden ([#5766](https://github.com/nocobase/nocobase/pull/5766)) von @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.6.0-alpha.2](https://www.nocobase.com/en/blog/v1.6.0-alpha.2)

*Veröffentlichungsdatum: 03.12.2024*

### 🎉 Neue Funktionen

- **[Client]**

  - Unterstützung für das Öffnen von Pop-ups über Links im readPretty-Feld ([#5747](https://github.com/nocobase/nocobase/pull/5747)) von @katherinehhh
  - Unterstützung für Aktionen zum Verknüpfen und Trennen von Verknüpfungen in Assoziationsblöcken ([#5695](https://github.com/nocobase/nocobase/pull/5695)) von @katherinehhh
- **[Server]** Audit-Manager hinzugefügt ([#5601](https://github.com/nocobase/nocobase/pull/5601)) von @chenzhizdt
- **[Workflow]** Unterstützung für manuelles Auslösen von Workflows ([#5664](https://github.com/nocobase/nocobase/pull/5664)) von @mytharcher
- **[Workflow: Pre-Action-Event]** Unterstützung für manuelles Auslösen von Workflows von @mytharcher

### 🚀 Verbesserungen

- **[Client]**

  - Bedarfsgesteuertes Laden für Frontend-Komponenten implementiert ([#5647](https://github.com/nocobase/nocobase/pull/5647)) von @gchust
  - Verbesserung der Seitenrendering-Leistung und Unterstützung der Keep-Alive-Funktionalität für Seiten ([#5515](https://github.com/nocobase/nocobase/pull/5515)) von @zhangzhonghe
- **[Sammlungsfeld: Sortierung]** Plugin-Beschreibung hinzugefügt ([#5720](https://github.com/nocobase/nocobase/pull/5720)) von @mytharcher
- **[NocoBase einbetten]** Verbesserung der Seitenrendering-Leistung von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**

  - Probleme behoben, bei denen Variablen in Blöcken von Drittanbieter-Datenquellen nicht korrekt verwendet werden konnten ([#5782](https://github.com/nocobase/nocobase/pull/5782)) von @zhangzhonghe
  - Problem behoben, dass Assoziationsfeldwerte in Blockvorlagen leer sind. Problem behoben, dass der Blockdatenbereich mit Variablen in Drittanbieter-Datenquellen nicht richtig funktioniert ([#5777](https://github.com/nocobase/nocobase/pull/5777)) von @zhangzhonghe
  - Problem behoben, dass dynamische Eigenschaften von Komponenten nicht mit Lazy Loading funktionieren ([#5776](https://github.com/nocobase/nocobase/pull/5776)) von @gchust
  - Warnmeldung in React beim dynamischen Laden von Hooks in der Entwicklungsumgebung behoben ([#5758](https://github.com/nocobase/nocobase/pull/5758)) von @gchust
- **[Datenvisualisierung]** Problem behoben, dass Filterfeldkomponenten von Diagrammblöcken nicht gerendert wurden ([#5769](https://github.com/nocobase/nocobase/pull/5769)) von @2013xile

## Über NocoBase

NocoBase ist eine private Open-Source-No-Code-Plattform, die vollständige Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
