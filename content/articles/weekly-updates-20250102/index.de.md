---
title: "NocoBase wöchentliche Updates: Optimierung und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: Workflow-Optimierung, Fehlerbehebungen und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.16](https://www.nocobase.com/en/blog/v1.4.16)

*Veröffentlichungsdatum: 26.12.2024*

#### 🐛 Fehlerbehebungen

- **[client]** Problem mit der Präzisionskonvertierung des UnixTimestamp-Feldes behoben ([#5931](https://github.com/nocobase/nocobase/pull/5931)) von @chenos
- **[Aktion: Datensatz duplizieren]** Problem behoben, bei dem das o2o-Assoziationsfeld die konfigurierten Zielfelder der Sammlung in Detail- und Formularblöcken nicht anzeigte ([#5921](https://github.com/nocobase/nocobase/pull/5921)) von @katherinehhh
- **[Backup-Manager]** Fehler beim Backup behoben, wenn die mysqldump-Version unter 8 lag von @gchust

### [v1.4.17](https://www.nocobase.com/en/blog/v1.4.17)

*Veröffentlichungsdatum: 31.12.2024*

#### 🎉 Neue Funktionen

- **[client]** Unterstützt die Verwendung der Variable "Ausgewählte Datensätze der Tabelle" in m2m-Array-Feldern ([#5974](https://github.com/nocobase/nocobase/pull/5974)) von @2013xile

#### 🚀 Verbesserungen

- **[undefined]** Theme-Plugin standardmäßig aktiviert ([#5957](https://github.com/nocobase/nocobase/pull/5957)) von @zhangzhonghe
- **[Datenquelle: Haupt]** Namenskonfliktvalidierung hinzugefügt, um zu verhindern, dass Benutzer Sammlungen mit demselben Namen wie System-Sammlungen erstellen ([#5962](https://github.com/nocobase/nocobase/pull/5962)) von @chareice
- **[Workflow]** Vermeidung der Fehlverwendung von Datumsbereichsvariablen an den meisten Stellen, außer bei Filterkomponenten ([#5954](https://github.com/nocobase/nocobase/pull/5954)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Datenbank]**

  - Ein Problem in der destroy-Aktion behoben, bei dem filterByTk mit dem filter-Parameter keine Daten löschen konnte ([#5976](https://github.com/nocobase/nocobase/pull/5976)) von @chareice
  - Die Methoden firstOrCreate und updateOrCreate des Repositorys verlieren den Kontext ([#5973](https://github.com/nocobase/nocobase/pull/5973)) von @chenos
- **[client]**

  - Problem beim Hinzufügen eines Eins-zu-Eins-Beziehungsfeldes im Formular behoben ([#5975](https://github.com/nocobase/nocobase/pull/5975)) von @katherinehhh
  - Problem mit der Feldzuweisung in der Untertabelle behoben, wenn nach dem Löschen von Daten erneut Daten ausgewählt werden ([#5958](https://github.com/nocobase/nocobase/pull/5958)) von @katherinehhh
  - Fehler im Tabellenblock behoben, der durch Daten mit Feldern namens 'children' verursacht wurde ([#5951](https://github.com/nocobase/nocobase/pull/5951)) von @zhangzhonghe
- **[Datenquelle: Haupt]** Kompatibilitätsprobleme mit dem unixTimestamp-Feld behoben. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) von @chareice
- **[Workflow]** Fehler behoben, bei dem der Sub-Detail-Block in der manuellen Knoten-UI-Konfiguration einen Fehler auslöste ([#5953](https://github.com/nocobase/nocobase/pull/5953)) von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.18](https://www.nocobase.com/en/blog/v1.5.0-beta.18)

*Veröffentlichungsdatum: 27.12.2024*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem mit unerwarteter Tabellenzellenanzeige in Drittanbieter-Plugins behoben ([#5934](https://github.com/nocobase/nocobase/pull/5934)) von @zhangzhonghe
  - Problem behoben, bei dem der Lösch-Button auf der Blockvorlagen-Verwaltungsseite deaktiviert war ([#5922](https://github.com/nocobase/nocobase/pull/5922)) von @zhangzhonghe
- **[Verifizierung]** Leere Formularfelder beim Öffnen des Bearbeitungs-Drawers auf der Verifizierungseinstellungsseite behoben ([#5949](https://github.com/nocobase/nocobase/pull/5949)) von @chenos
- **[Workflow: Benutzerdefiniertes Aktionsereignis]**

  - Fehlgeschlagene Testfälle auf SQLite behoben von @mytharcher
  - Testfälle des benutzerdefinierten Aktions-Triggers behoben von @mytharcher
- **[Workflow: Voraktionsereignis]** Testfälle des Request-Interceptors behoben von @mytharcher

### [v1.5.0-beta.19](https://www.nocobase.com/en/blog/v1.5.0-beta.19)

*Veröffentlichungsdatum: 31.12.2024*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem die Datumsbereichsauswahl im Filterformular/der Filteraktion die Zeiteingabe nicht anzeigte, wenn showTime gesetzt war ([#5956](https://github.com/nocobase/nocobase/pull/5956)) von @katherinehhh
  - Problem behoben, bei dem das Klicken auf Assoziationsfelder das Popup-Dialogfeld nicht öffnete ([#5972](https://github.com/nocobase/nocobase/pull/5972)) von @zhangzhonghe
- **[Workflow: Antwortnachricht]** Falschen Parameternamen behoben von @mytharcher

### v1.5.0-beta.20

*Veröffentlichungsdatum: 31.12.2024*

#### 🎉 Neue Funktionen

- **[[Aktion: Datensätze importieren (Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Verbesserte Datenimportfunktionen mit Unterstützung für asynchrone Importe, Importe von Millionen von Datensätzen, Identifizierung und Verarbeitung doppelter Daten, Datenaktualisierungen und Workflow-Trigger.
- **[[Aktion: Datensätze exportieren (Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Verbesserte Datenexportfunktionen mit Unterstützung für asynchrone Exporte, Exporte von Millionen von Datensätzen und Anhangexporte.

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Startseite**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
