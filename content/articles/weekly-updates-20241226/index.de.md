---
title: "NocoBase wöchentliche Updates: Unterstützung für die Konfiguration von Benutzerprofilformularen"
description: "Die Updates dieser Woche umfassen: Unterstützung für die Konfiguration von Benutzerprofilformularen sowie Erstellungs- und Bearbeitungsformularen in der Benutzerverwaltung und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie ist hauptsächlich für Testnutzer gedacht, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.11](https://www.nocobase.com/en/blog/v1.4.11)

*Veröffentlichungsdatum: 2024-12-18*

#### 🚀 Verbesserungen

- **[client]** Weitere Komponenten unterstützen jetzt den Konfigurationseintrag 'Ellipsis overflow content' ([#5888](https://github.com/nocobase/nocobase/pull/5888)) von @zhangzhonghe
- **[database]** firstOrCreate & updateOrCreate zum Relation Repository hinzugefügt ([#5894](https://github.com/nocobase/nocobase/pull/5894)) von @chareice

#### 🐛 Fehlerbehebungen

- **[client]**
  - Fehlender x-data-source-Parameter in der Duplizierungsanfragevorlage für externe Datenquellenblöcke behoben ([#5882](https://github.com/nocobase/nocobase/pull/5882)) von @katherinehhh
  - Problem mit horizontaler Bildlaufleiste in Tabellen innerhalb von Plugins behoben ([#5899](https://github.com/nocobase/nocobase/pull/5899)) von @katherinehhh
  - Problem behoben, bei dem manchmal zusätzliche 'N/A'-Optionen in Dropdown-Menüs für Assoziationsfelder angezeigt wurden ([#5878](https://github.com/nocobase/nocobase/pull/5878)) von @zhangzhonghe
  - Problem bei der PG-Ansichtserstellung behoben; Fehler beim Auswählen von Ansichten über Schemata hinweg behoben ([#5881](https://github.com/nocobase/nocobase/pull/5881)) von @katherinehhh
  - Problem mit Gruppenstilen in Formularblöcken bei horizontalem Layout behoben ([#5884](https://github.com/nocobase/nocobase/pull/5884)) von @katherinehhh
- **[Benutzer]**
  - Problem behoben, bei dem das Formular nach dem Hinzufügen oder Bearbeiten eines Benutzers in der Benutzerverwaltung nicht zurückgesetzt wurde. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) von @2013xile
  - Probleme behoben, bei denen die Seiteneinstellungen nach dem Bearbeiten und Absenden von Benutzerprofilen in der Benutzerverwaltung nach einem Seitenwechsel oder einer Änderung der Seitengröße zurückgesetzt wurden. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) von @2013xile
- **[Datenquellen-Manager]** Filterprobleme mit der externen Datenquellen-Collection behoben ([#5890](https://github.com/nocobase/nocobase/pull/5890)) von @chareice
- **[Öffentliche Formulare]** Problem behoben, bei dem der globale Themenwechsel das Thema der öffentlichen Formularvorschauseite beeinflusste ([#5883](https://github.com/nocobase/nocobase/pull/5883)) von @katherinehhh

### [v1.4.13](https://www.nocobase.com/en/blog/v1.4.13)

*Veröffentlichungsdatum: 2024-12-19*

#### 🚀 Verbesserungen

- **[Collection: SQL]** Verwendung gefährlicher Schlüsselwörter und Funktionen in SQL untersagt. ([#5913](https://github.com/nocobase/nocobase/pull/5913)) von @2013xile
- **[Theme-Editor]** API-Validierung für die Bearbeitung von Benutzerprofilen und Passwortaktualisierungen optimiert ([#5912](https://github.com/nocobase/nocobase/pull/5912)) von @2013xile

#### 🐛 Fehlerbehebungen

- **[Datenquelle: Haupt]** Probleme beim Laden von Fremdschlüsseln behoben ([#5903](https://github.com/nocobase/nocobase/pull/5903)) von @chareice
- **[Collection: SQL]** Problem behoben, bei dem Felder nach der Aktualisierung einer SQL-Collection verschwanden. ([#5909](https://github.com/nocobase/nocobase/pull/5909)) von @chareice
- **[Backup-Manager]** Problem behoben, bei dem die Wiederherstellung von Backups unter Windows nicht funktionierte von @gchust

### [v1.4.14](https://www.nocobase.com/en/blog/v1.4.14)

*Veröffentlichungsdatum: 2024-12-21*

#### 🐛 Fehlerbehebungen

- **[Datenvisualisierung]** Fehler beim Filtern mit verschachtelten Viele-zu-Viele-Assoziationen in Diagrammabfragen behoben. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) von @2013xile
- **[Workflow: Aggregationsknoten]** Falsches Aggregationsergebnis aufgrund einer Transaktion behoben ([#5916](https://github.com/nocobase/nocobase/pull/5916)) von @mytharcher

### [v1.4.15](https://www.nocobase.com/en/blog/v1.4.15)

*Veröffentlichungsdatum: 2024-12-25*

#### 🐛 Fehlerbehebungen

- **[server]** Collections wurden beim Aktivieren des Plugins nicht automatisch erstellt ([#5939](https://github.com/nocobase/nocobase/pull/5939)) von @chenos
- **[client]** Suche nach Eigenschaftsfeldern in Verknüpfungsregeln korrigiert, die nicht die richtigen Daten fanden ([#5925](https://github.com/nocobase/nocobase/pull/5925)) von @katherinehhh
- **[Workflow]**
  - Zeitplanauslöser für Datumsfelder ohne Zeitzone behoben ([#5938](https://github.com/nocobase/nocobase/pull/5938)) von @mytharcher
  - Übersetzung von Datumsbereichsvariablen behoben ([#5919](https://github.com/nocobase/nocobase/pull/5919)) von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.13](https://www.nocobase.com/en/blog/v1.5.0-beta.13)

*Veröffentlichungsdatum: 2024-12-21*

#### 🚀 Verbesserungen

- **[Datenvisualisierung]** Offset-Parameter zu charts-query hinzugefügt ([#5911](https://github.com/nocobase/nocobase/pull/5911)) von @Albert-mah

### [v1.5.0-beta.14](https://www.nocobase.com/en/blog/v1.5.0-beta.14)

*Veröffentlichungsdatum: 2024-12-21*

#### 🐛 Fehlerbehebungen

- **[Datenvisualisierung]** Fehler beim Filtern mit verschachtelten Viele-zu-Viele-Assoziationen in Diagrammabfragen behoben. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) von @2013xile
- **[Workflow: Aggregationsknoten]** Falsches Aggregationsergebnis aufgrund einer Transaktion behoben ([#5916](https://github.com/nocobase/nocobase/pull/5916)) von @mytharcher

### [v1.5.0-beta.15](https://www.nocobase.com/en/blog/v1.5.0-beta.15)

*Veröffentlichungsdatum: 2024-12-23*

#### 🎉 Neue Funktionen

- **[client]** Datumsbereichseinschränkung zur Datumsfeldkomponente hinzugefügt ([#5852](https://github.com/nocobase/nocobase/pull/5852)) von @Cyx649312038

### [v1.5.0-beta.16](https://www.nocobase.com/en/blog/v1.5.0-beta.16)

*Veröffentlichungsdatum: 2024-12-24*

#### 🐛 Fehlerbehebungen

- **[build]** Problem beim Laden nach dem Setzen der Umgebungsvariable `APP_PUBLIC_PATH` behoben ([#5924](https://github.com/nocobase/nocobase/pull/5924)) von @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.6](https://www.nocobase.com/en/blog/v1.6.0-alpha.6)

*Veröffentlichungsdatum: 2024-12-19*

#### 🎉 Neue Funktionen

- **[client]** Unterstützung für die Auswahl vorhandener Daten in Unterformularen für to-many-Assoziationsfelder ([#5849](https://github.com/nocobase/nocobase/pull/5849)) von @katherinehhh

### [v1.6.0-alpha.7](https://www.nocobase.com/en/blog/v1.6.0-alpha.7)

*Veröffentlichungsdatum: 2024-12-25*

#### 🎉 Neue Funktionen

- **[Benutzer]** Unterstützung für die Konfiguration von Benutzerprofilformularen sowie Erstellungs- und Bearbeitungsformularen in der Benutzerverwaltung. ([#5698](https://github.com/nocobase/nocobase/pull/5698)) von @2013xile

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
