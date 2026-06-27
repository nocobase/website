---
title: "NocoBase wöchentliche Updates: Optimierung der mobilen Erfahrung"
description: "Die Updates dieser Woche umfassen: Optimierung der mobilen Interaktion, Fehlerbehebungen und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.9](https://www.nocobase.com/en/blog/v1.4.9)

*Veröffentlichungsdatum: 2024-12-12*

#### 🐛 Fehlerbehebungen

- **[sdk]** Standard-Locale entfernt ([#5867](https://github.com/nocobase/nocobase/pull/5867)) von @chenos
- **[client]**

  - Problem behoben, bei dem verschachtelte Assoziationsfeldvariablen im Datenbereich leere Werte hatten ([#5866](https://github.com/nocobase/nocobase/pull/5866)) von @zhangzhonghe
  - Problem behoben, bei dem eine Bildlaufleiste angezeigt wurde, wenn es weniger Spalten mit einer rechten fixierten Spalte gab ([#5864](https://github.com/nocobase/nocobase/pull/5864)) von @katherinehhh
  - Falsche Positionierung des `FilterItem`-Komponentenstils behoben ([#5851](https://github.com/nocobase/nocobase/pull/5851)) von @mytharcher
- **[Backup-Manager]** Fehler beim Backup-Download für Sub-Apps mit benutzerdefinierter Domain behoben von @gchust

### [v1.4.10](https://www.nocobase.com/en/blog/v1.4.10)

*Veröffentlichungsdatum: 2024-12-12*

#### 🎉 Neue Funktionen

- **[Aktion: Benutzerdefinierte Anfrage]** Unterstützung der Verwendung der Variable 'Aktuelles Formular' in benutzerdefinierten Anfrage-Schaltflächen ([#5871](https://github.com/nocobase/nocobase/pull/5871)) von @zhangzhonghe

#### 🚀 Verbesserungen

- **[Datenvisualisierung]** Ermöglicht die Verwendung von Fremdschlüsseln in der Abfragekonfiguration von Diagrammen ([#5869](https://github.com/nocobase/nocobase/pull/5869)) von @2013xile

#### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem der Dateitabellen-Selektor im Nicht-Konfigurationsmodus bei Verwendung der Dateiauswahl nicht angezeigt wurde ([#5874](https://github.com/nocobase/nocobase/pull/5874)) von @katherinehhh
- **[Zugriffskontrolle]** Probleme im Zusammenhang mit replizierten Datensätzen nach der Konfiguration von Berechtigungen behoben ([#5839](https://github.com/nocobase/nocobase/pull/5839)) von @chareice
- **[Workflow]** Timeout-Fehler beim automatischen Löschen von Ausführungen behoben ([#5870](https://github.com/nocobase/nocobase/pull/5870)) von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.7](https://www.nocobase.com/en/blog/v1.5.0-beta.7)

*Veröffentlichungsdatum: 2024-12-13*

#### 🚀 Verbesserungen

- **[Authentifizierung]** Logik zum Abrufen von Metadaten von Prüfaktionen optimiert. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) von @chenzhizdt

#### 🐛 Fehlerbehebungen

- **[Datenvisualisierung]** Anfangshöhe des Diagrammblocks behoben ([#5879](https://github.com/nocobase/nocobase/pull/5879)) von @2013xile
- **[Workflow]** Fehler behoben, der beim Fortsetzen eines asynchronen Knotens in einer manuell ausgeführten Workflow ausgelöst wurde ([#5877](https://github.com/nocobase/nocobase/pull/5877)) von @mytharcher

### [v1.5.0-beta.9](https://www.nocobase.com/en/blog/v1.5.0-beta.9)

*Veröffentlichungsdatum: 2024-12-15*

#### 🎉 Neue Funktionen

- **[Mobil]** Globaler Schalter hinzugefügt, um alle Zurück-Schaltflächen auf Mobilgeräten zu steuern (standardmäßig aktiviert) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[Benutzerdatensynchronisation]** Anzeigeprobleme der Synchronisations- und Aufgaben-Schaltflächen behoben. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) von @2013xile

### [v1.5.0-beta.10](https://www.nocobase.com/en/blog/v1.5.0-beta.10)

*Veröffentlichungsdatum: 2024-12-18*

#### 🚀 Verbesserungen

- **[Mobil]** Datums- und Zeitbereichsauswahl-Komponente für Mobilgeräte angepasst ([#5863](https://github.com/nocobase/nocobase/pull/5863)) von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[Datenquelle: Haupt]** Problem behoben, bei dem Systemfelder im Filterformularblock nicht bearbeitet werden konnten ([#5885](https://github.com/nocobase/nocobase/pull/5885)) von @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.5](https://www.nocobase.com/en/blog/v1.6.0-alpha.5)

*Veröffentlichungsdatum: 2024-12-11*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem der Titel des Browser-Tabs nach dem Seitenwechsel nicht aktualisiert wurde ([#5857](https://github.com/nocobase/nocobase/pull/5857)) von @zhangzhonghe
  - Problem behoben, bei dem das Aktualisieren der Seite in der Datenquellenverwaltung zur Startseite umleitete ([#5855](https://github.com/nocobase/nocobase/pull/5855)) von @zhangzhonghe
  - Problem behoben, bei dem sich Daten nach dem Seitenwechsel in einer Untertabelle nicht änderten ([#5856](https://github.com/nocobase/nocobase/pull/5856)) von @zhangzhonghe
  - Problem behoben, bei dem Rollendaten in der Benutzerverwaltungstabelle nicht angezeigt wurden ([#5846](https://github.com/nocobase/nocobase/pull/5846)) von @zhangzhonghe
  - Problem behoben, bei dem Assoziationsfelder in Referenzvorlagen manchmal keine Daten anzeigten ([#5848](https://github.com/nocobase/nocobase/pull/5848)) von @zhangzhonghe
  - Problem behoben, bei dem die Schaltfläche 'Benutzerdefinierte Anfrage' nach dem Hinzufügen nicht sofort sichtbar war ([#5845](https://github.com/nocobase/nocobase/pull/5845)) von @zhangzhonghe
  - Verhindert, dass ausgeblendete Seiten die Interaktion mit anderen Seiten beeinträchtigen ([#5836](https://github.com/nocobase/nocobase/pull/5836)) von @zhangzhonghe
  - Problem behoben, bei dem in einem Popup-Fenster hinzugefügte Blöcke beim erneuten Öffnen des Popups nicht angezeigt wurden ([#5838](https://github.com/nocobase/nocobase/pull/5838)) von @zhangzhonghe
- **[server]** Standardmäßig verfügbare Aktionen für die ACL festgelegt ([#5847](https://github.com/nocobase/nocobase/pull/5847)) von @chenos

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die vollständige Kontrolle und unendliche Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Startseite**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
