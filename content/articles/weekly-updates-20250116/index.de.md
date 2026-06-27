---
title: "NocoBase wöchentliche Updates: Unterstützung für Verknüpfungsregeln im Detailblock"
description: "Die Updates dieser Woche umfassen: Unterstützung für Verknüpfungsregeln im Detailblock zum Ausblenden (reservierter Wert) und mehr."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase wird derzeit in drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.21](https://www.nocobase.com/en/blog/v1.4.21)

*Veröffentlichungsdatum: 2025-01-10*

#### 🚀 Verbesserungen

- **[client]** Unterstützung von Verknüpfungsregeln im Detailblock zum Ausblenden (Wert beibehalten) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[client]**

  - Fehlender öffentlicher Pfad in Icon-Dateipfaden behoben ([#6034](https://github.com/nocobase/nocobase/pull/6034)) von @chenos
  - Problem behoben, bei dem Formularverknüpfungsregeln fehlschlugen, wenn sie von Feldwerten aus Untertabellen abhingen ([#5876](https://github.com/nocobase/nocobase/pull/5876)) von @zhangzhonghe
  - Falsches Feld der Variable 'Aktueller Datensatz' in Unterdetails behoben ([#6030](https://github.com/nocobase/nocobase/pull/6030)) von @zhangzhonghe
- **[Backup-Manager]** Backup-Download-Fehler behoben, wenn die Umgebungsvariable API_BASE_PATH nicht /api ist von @gchust

### [v1.4.22](https://www.nocobase.com/en/blog/v1.4.22)

*Veröffentlichungsdatum: 2025-01-11*

#### 🚀 Verbesserungen

- **[Evaluatoren]** Version der Bibliothek formula.js auf 4.4.9 aktualisiert ([#6037](https://github.com/nocobase/nocobase/pull/6037)) von @mytharcher
- **[Workflow]** Logger-API des Workflow-Plugins korrigiert ([#6036](https://github.com/nocobase/nocobase/pull/6036)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Workflow]** Abwehrlogik hinzugefügt, um doppelte Auslösungen zu vermeiden ([#6022](https://github.com/nocobase/nocobase/pull/6022)) von @mytharcher

### [v1.4.23](https://www.nocobase.com/en/blog/v1.4.23)

*Veröffentlichungsdatum: 2025-01-13*

#### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem fixierte Aktionsspalten in Tabellen nicht richtig funktionierten ([#6048](https://github.com/nocobase/nocobase/pull/6048)) von @zhangzhonghe
- **[Benutzer]** Browser-Autovervollständigung beim Festlegen von Passwörtern für Benutzer in der Benutzerverwaltung deaktiviert ([#6041](https://github.com/nocobase/nocobase/pull/6041)) von @2013xile
- **[Workflow]** Problem behoben, bei dem ein auf einem Datumsfeld basierender Zeitplanereignis nach dem Start der App nicht ausgelöst wurde ([#6042](https://github.com/nocobase/nocobase/pull/6042)) von @mytharcher

### [v1.4.24](https://www.nocobase.com/en/blog/v1.4.24)

*Veröffentlichungsdatum: 2025-01-14*

#### 🚀 Verbesserungen

- **[client]** datePicker-Komponente Eingabe schreibgeschützt ([#6061](https://github.com/nocobase/nocobase/pull/6061)) von @Cyx649312038

#### 🐛 Fehlerbehebungen

- **[client]**

  - Falsches Laden von modalen Assoziationsfeldern im Tabellenblock behoben ([#6060](https://github.com/nocobase/nocobase/pull/6060)) von @katherinehhh
  - Stilproblem in der Untertabelle im Detailblock behoben ([#6049](https://github.com/nocobase/nocobase/pull/6049)) von @katherinehhh
  - Problem behoben, bei dem die Zahlenfeldformatierung im readPretty-Modus den Bearbeitungsmodus beeinflusste ([#6050](https://github.com/nocobase/nocobase/pull/6050)) von @katherinehhh
  - Stilproblem der Tabellenkopfzelle in ant-table behoben ([#6052](https://github.com/nocobase/nocobase/pull/6052)) von @katherinehhh
- **[Datenbank]** Problem beim Initialisieren des Sortierfeldes mit Primärschlüssel behoben ([#6059](https://github.com/nocobase/nocobase/pull/6059)) von @chareice
- **[Datenvisualisierung]** `LIMIT`-Klausel entfernt, wenn Aggregatfunktionen ohne Festlegen von Dimensionen in Diagrammabfragen verwendet werden ([#6062](https://github.com/nocobase/nocobase/pull/6062)) von @2013xile
- **[Backup-Manager]** Backup-Download-Fehler für Benutzer behoben, die nur in der Sub-App angemeldet waren von @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.27](https://www.nocobase.com/en/blog/v1.5.0-beta.27)

*Veröffentlichungsdatum: 2025-01-10*

#### 🚀 Verbesserungen

- **[client]** Verknüpfungsregeln vom Schaltfläche 'Verknüpfen' entfernt ([#6016](https://github.com/nocobase/nocobase/pull/6016)) von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[client]**
  - Problem behoben, bei dem Formularverknüpfungsregeln fehlschlugen, wenn sie von Feldwerten aus Untertabellen abhingen ([#5876](https://github.com/nocobase/nocobase/pull/5876)) von @zhangzhonghe
  - Seite wird nach Abschluss der Authentifizierungsprüfungsanfrage weiter gerendert ([#6020](https://github.com/nocobase/nocobase/pull/6020)) von @2013xile

### [v1.5.0-beta.28](https://www.nocobase.com/en/blog/v1.5.0-beta.28)

*Veröffentlichungsdatum: 2025-01-14*

#### 🐛 Fehlerbehebungen

- **[client]**
  - Problem behoben, bei dem Feldzuweisungen für Formularschaltflächen in manuellen Workflow-Knoten ungültig waren ([#6054](https://github.com/nocobase/nocobase/pull/6054)) von @zhangzhonghe
  - Fehlende aktuelle Popup-Variable im Modal zum Aktivieren der Feldverknüpfung behoben ([#6045](https://github.com/nocobase/nocobase/pull/6045)) von @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.11](https://www.nocobase.com/en/blog/v1.6.0-alpha.11)

*Veröffentlichungsdatum: 2025-01-09*

#### 🎉 Neue Funktionen

- **[client]** schemaSetting hinzugefügt, um Dateinamen für Anhänge anzuzeigen ([#5995](https://github.com/nocobase/nocobase/pull/5995)) von @katherinehhh

### [v1.6.0-alpha.13](https://www.nocobase.com/en/blog/v1.6.0-alpha.13)

*Veröffentlichungsdatum: 2025-01-14*

#### 🚀 Verbesserungen

- **[Workflow: JSON-Berechnung]** Name des JSON-Abfrageknotens in JSON-Berechnung geändert von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Workflow]** Werttyp für die DatePicker-Komponente korrigiert ([#6039](https://github.com/nocobase/nocobase/pull/6039)) von @mytharcher

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die volle Kontrolle und unendliche Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig Kosten deutlich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 Holen Sie sich NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
