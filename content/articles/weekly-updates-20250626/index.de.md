---
title: "NocoBase wöchentliche Updates: Externe Datenquellen unterstützen bedarfsgesteuertes Laden von Sammlungen"
description: "Die Updates dieser Woche umfassen: Hinzufügen von Genehmigungsdatensatzvariablen zum Knotenergebnis, Unterstützung des BIT-Felds in SQL Server für externe Datenquellen und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Protokolle zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es könnte bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.17](https://www.nocobase.com/en/blog/v1.7.17)

*Veröffentlichungsdatum: 24.06.2025*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Falsche Bereichseinschränkung bei Datumsfeldern mit Uhrzeit ([#7107](https://github.com/nocobase/nocobase/pull/7107)) von @katherinehhh
  - Wenn URL-Abfrageparameter-Variablen leer sind, werden die Datenbereichsbedingungen nicht entfernt ([#7104](https://github.com/nocobase/nocobase/pull/7104)) von @zhangzhonghe
- **[Mobil]** Behebung des z-Index-Problems bei mobilen Popups ([#7110](https://github.com/nocobase/nocobase/pull/7110)) von @zhangzhonghe
- **[Kalender]** Problem mit Datumsfeld im Schnellerfassungsformular des Kalenderblocks ([#7106](https://github.com/nocobase/nocobase/pull/7106)) von @katherinehhh

### [v1.7.16](https://www.nocobase.com/en/blog/v1.7.16)

*Veröffentlichungsdatum: 20.06.2025*

#### 🐛 Fehlerbehebungen

- **[Workflow]**

  - Korrektur der fälschlicherweise ausgeführten Prüfung auf große Ganzzahlen ([#7099](https://github.com/nocobase/nocobase/pull/7099)) von @mytharcher
  - Korrektur der durch eine nicht aktuelle Workflow-Version kaskadierten Löschung von Statistiken ([#7103](https://github.com/nocobase/nocobase/pull/7103)) von @mytharcher
- **[Aktion: Datensätze importieren]** Behebung des Anmeldefehlerproblems nach dem Batch-Import von Benutzernamen und Passwörtern ([#7076](https://github.com/nocobase/nocobase/pull/7076)) von @aaaaaajie
- **[Workflow: Genehmigung]** Nur Teilnehmer können Details der Genehmigung anzeigen (abrufen) von @mytharcher

### [v1.7.15](https://www.nocobase.com/en/blog/v1.7.15)

*Veröffentlichungsdatum: 18.06.2025*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Verwendung eines unabhängigen Variablenbereichs für jedes Feld ([#7012](https://github.com/nocobase/nocobase/pull/7012)) von @mytharcher
  - Feldwerte zuweisen: Daten für Beziehungsfelder können nicht gelöscht werden ([#7086](https://github.com/nocobase/nocobase/pull/7086)) von @zhangzhonghe
  - Die Textausrichtungsfunktion der Tabellenspalte funktioniert nicht ([#7094](https://github.com/nocobase/nocobase/pull/7094)) von @zhangzhonghe
- **[Workflow]** Korrektur der fälschlicherweise ausgeführten Prüfung auf große Ganzzahlen ([#7091](https://github.com/nocobase/nocobase/pull/7091)) von @mytharcher
- **[Dateimanager]** Korrektur, dass Anhänge-Felder im Genehmigungsprozess nicht aktualisiert werden können ([#7093](https://github.com/nocobase/nocobase/pull/7093)) von @mytharcher
- **[Workflow: Genehmigung]** Verwendung von Vergleich anstelle von impliziter Logik, um Typ-Probleme zu vermeiden von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.10](https://www.nocobase.com/en/blog/v1.8.0-beta.10)

*Veröffentlichungsdatum: 19.06.2025*

#### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Hinzufügen einer Variable für Genehmigungsdatensätze zum Knotenergebnis von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Die Textausrichtungsfunktion der Tabellenspalte funktioniert nicht ([#7094](https://github.com/nocobase/nocobase/pull/7094)) von @zhangzhonghe
  - Feldwerte zuweisen: Daten für Beziehungsfelder können nicht gelöscht werden ([#7086](https://github.com/nocobase/nocobase/pull/7086)) von @zhangzhonghe
  - Verwendung eines unabhängigen Variablenbereichs für jedes Feld ([#7012](https://github.com/nocobase/nocobase/pull/7012)) von @mytharcher
- **[Dateimanager]** Korrektur, dass Anhänge-Felder im Genehmigungsprozess nicht aktualisiert werden können ([#7093](https://github.com/nocobase/nocobase/pull/7093)) von @mytharcher
- **[Workflow]** Korrektur der fälschlicherweise ausgeführten Prüfung auf große Ganzzahlen ([#7091](https://github.com/nocobase/nocobase/pull/7091)) von @mytharcher
- **[Workflow: Genehmigung]** Verwendung von Vergleich anstelle von impliziter Logik, um Typ-Probleme zu vermeiden von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.10](https://www.nocobase.com/en/blog/v1.8.0-alpha.10)

*Veröffentlichungsdatum: 25.06.2025*

#### 🎉 Neue Funktionen

- **[Datenquellen-Manager]** ✨ Unterstützung für bedarfsgesteuertes Laden von Sammlungen aus externen Datenquellen ([#6979](https://github.com/nocobase/nocobase/pull/6979)) von @aaaaaajie
- **[Workflow: HTTP-Anfrage-Knoten]** Unterstützung für `multipart/form-data`-Anfragen ([#7087](https://github.com/nocobase/nocobase/pull/7087)) von @shushu992
- **[Datenquelle: Externer SQL Server]** Unterstützung für bedarfsgesteuertes Laden von Sammlungen aus externen Datenquellen von @aaaaaajie

#### 🐛 Fehlerbehebungen

- **[client]**

  - Wenn URL-Abfrageparameter-Variablen leer sind, werden die Datenbereichsbedingungen nicht entfernt ([#7104](https://github.com/nocobase/nocobase/pull/7104)) von @zhangzhonghe
  - Falsche Bereichseinschränkung bei Datumsfeldern mit Uhrzeit ([#7107](https://github.com/nocobase/nocobase/pull/7107)) von @katherinehhh
- **[Mobil]** Behebung des z-Index-Problems bei mobilen Popups ([#7110](https://github.com/nocobase/nocobase/pull/7110)) von @zhangzhonghe
- **[Kalender]** Problem mit Datumsfeld im Schnellerfassungsformular des Kalenderblocks ([#7106](https://github.com/nocobase/nocobase/pull/7106)) von @katherinehhh
- **[Workflow: Genehmigung]**

  - Korrektur der alten Variablen-API, die einen Fehler auslöst von @mytharcher
  - Korrektur der mobilen Stile von @mytharcher
  - Korrektur des Fehlers, der beim Löschen einer genehmigungsbezogenen Sammlung ausgelöst wird von @mytharcher
- **[E-Mail-Manager]** Anhang wird nicht angezeigt von @jiannx

### [v1.8.0-alpha.9](https://www.nocobase.com/en/blog/v1.8.0-alpha.9)

*Veröffentlichungsdatum: 20.06.2025*

#### 🎉 Neue Funktionen

- **[client]** Unterstützung des BIT-Feldes in SQL Server für externe Datenquellen. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) von @aaaaaajie
- **[Workflow: Genehmigung]** Hinzufügen einer Variable für Genehmigungsdatensätze zum Knotenergebnis von @mytharcher

#### 🚀 Verbesserungen

- **[client]** Automatisches Ausblenden der Aktionsleiste des Grid-Karten-Blocks, wenn diese leer ist ([#7069](https://github.com/nocobase/nocobase/pull/7069)) von @zhangzhonghe
- **[Verifizierung]** Entfernen der Verifizierer-Optionen aus der Antwort der `verifiers:listByUser`-API ([#7090](https://github.com/nocobase/nocobase/pull/7090)) von @2013xile
- **[Workflow]** Anpassung der API von `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) von @mytharcher
- **[Workflow: Vor-Aktions-Ereignis]** Anpassung der Variablen-API von @mytharcher
- **[Workflow: Genehmigung]** Anpassung der Variablen-API von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Die Textausrichtungsfunktion der Tabellenspalte funktioniert nicht ([#7094](https://github.com/nocobase/nocobase/pull/7094)) von @zhangzhonghe
  - Feldwerte zuweisen: Daten für Beziehungsfelder können nicht gelöscht werden ([#7086](https://github.com/nocobase/nocobase/pull/7086)) von @zhangzhonghe
  - Verwendung eines unabhängigen Variablenbereichs für jedes Feld ([#7012](https://github.com/nocobase/nocobase/pull/7012)) von @mytharcher
  - Stilbedingung für Untertabellenspaltenfelder wird nicht korrekt angewendet ([#7083](https://github.com/nocobase/nocobase/pull/7083)) von @katherinehhh
  - Filtern über Beziehungssammlungsfelder in Filterformularen ist ungültig ([#7070](https://github.com/nocobase/nocobase/pull/7070)) von @zhangzhonghe
  - URL-Abfrageparameter-Variablen funktionieren nicht im Standardwert des öffentlichen Formularfeldes ([#7084](https://github.com/nocobase/nocobase/pull/7084)) von @katherinehhh
  - Pflichtvalidierungsmeldung in der Untertabelle bleibt beim Seitenwechsel bestehen ([#7080](https://github.com/nocobase/nocobase/pull/7080)) von @katherinehhh
  - Fehler beim Klicken auf die Filter-Schaltfläche ([#7100](https://github.com/nocobase/nocobase/pull/7100)) von @zhangzhonghe
- **[Datenbank]** Unterstützung von Assoziationsaktualisierungen in updateOrCreate und firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) von @chenos
- **[Workflow]**

  - Korrektur der durch eine nicht aktuelle Workflow-Version kaskadierten Löschung von Statistiken ([#7103](https://github.com/nocobase/nocobase/pull/7103)) von @mytharcher
  - Korrektur der fälschlicherweise ausgeführten Prüfung auf große Ganzzahlen ([#7099](https://github.com/nocobase/nocobase/pull/7099)) von @mytharcher
  - Korrektur der fälschlicherweise ausgeführten Prüfung auf große Ganzzahlen ([#7091](https://github.com/nocobase/nocobase/pull/7091)) von @mytharcher
- **[Aktion: Datensätze importieren]** Behebung des Anmeldefehlerproblems nach dem Batch-Import von Benutzernamen und Passwörtern ([#7076](https://github.com/nocobase/nocobase/pull/7076)) von @aaaaaajie
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Das Aktualisieren eines Viele-zu-viele (Array)-Feldes löst einen Fehler aus, wenn das Feld `updatedBy` vorhanden ist ([#7089](https://github.com/nocobase/nocobase/pull/7089)) von @2013xile
- **[Dateimanager]** Korrektur, dass Anhänge-Felder im Genehmigungsprozess nicht aktualisiert werden können ([#7093](https://github.com/nocobase/nocobase/pull/7093)) von @mytharcher
- **[Öffentliche Formulare]** Öffentliche Formulare: Behebung eines unbefugten Zugriffsproblems beim Absenden des Formulars ([#7085](https://github.com/nocobase/nocobase/pull/7085)) von @zhangzhonghe
- **[Sammlungsfeld: Sequenz]** Korrektur der stringbasierten Bigint-Sequenzberechnung ([#7079](https://github.com/nocobase/nocobase/pull/7079)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Verwendung von Vergleich anstelle von impliziter Logik, um Typ-Probleme zu vermeiden von @mytharcher
  - Nur Teilnehmer können Details der Genehmigung anzeigen (abrufen) von @mytharcher
- **[E-Mail-Manager]** Fehler beim Löschen von E-Mails von @jiannx
