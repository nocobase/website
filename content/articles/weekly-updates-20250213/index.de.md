---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: Optimierungen für mobile Geräte, Verbesserungen der Workflows und Fehlerbehebungen."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Letzte Woche haben wir [NocoBase Version 1.5.0](https://www.nocobase.com/en/blog/nocobase-1-5-0) veröffentlicht, die Kernoptimierungen, Import/Export großer Datenmengen, E-Mail-Verwaltung, Vorlagendruck und viele weitere neue Funktionen mit sich bringt.**

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die sich für die neuesten Entwicklungen des Produkts interessieren, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.1](https://www.nocobase.com/en/blog/v1.5.1)

*Veröffentlichungsdatum: 06.02.2025*

#### 🐛 Fehlerbehebungen

- **[client]**
  - Falsche Übersetzung des Titels von `Unterformular(Popover)` ([#6159](https://github.com/nocobase/nocobase/pull/6159)) von @gchust
  - Wenn das Unterformularfeld auf 'Versteckt (Wert beibehalten)' gesetzt ist, funktionieren seine Standardwertvariablen nicht richtig ([#6165](https://github.com/nocobase/nocobase/pull/6165)) von @zhangzhonghe

### [v1.5.2](https://www.nocobase.com/en/blog/v1.5.2)

*Veröffentlichungsdatum: 06.02.2025*

#### 🚀 Verbesserungen

- **[Mobil]** Mobilkonfigurationsseiten-Header ausblenden, wenn keine Konfigurationsberechtigung vorhanden ([#6171](https://github.com/nocobase/nocobase/pull/6171)) von @zhangzhonghe

#### 🐛 Fehlerbehebungen

- **[Workflow: Benachrichtigungsknoten]** Sichergestellt, dass Benachrichtigungen korrekt gesendet werden, wenn die Benutzereingabe eine an Handlebars erinnernde Syntax enthält. ([#6164](https://github.com/nocobase/nocobase/pull/6164)) von @sheldon66
- **[Workflow: Manueller Knoten]** Behebt, dass Formularwerte beim Absenden über die Terminal-Schaltfläche nicht geparst werden ([#6160](https://github.com/nocobase/nocobase/pull/6160)) von @mytharcher

### [v1.5.3](https://www.nocobase.com/en/blog/v1.5.3)

*Veröffentlichungsdatum: 07.02.2025*

#### 🐛 Fehlerbehebungen

- **[client]**
  - Das durch Klicken auf das belongsToArray-Feld geöffnete Popup ruft falsche Daten ab ([#6173](https://github.com/nocobase/nocobase/pull/6173)) von @zhangzhonghe
  - Der Operator des Zeitfelds wurde im Filterformular auf "zwischen" gesetzt, aber die Komponente wechselte nicht zur Zeitbereichsauswahl ([#6170](https://github.com/nocobase/nocobase/pull/6170)) von @katherinehhh
  - Das Popup-Bearbeitungsformular von Kanban- und Kalenderblöcken zeigte "Ungespeicherte Änderungen" nicht an ([#6172](https://github.com/nocobase/nocobase/pull/6172)) von @katherinehhh

### [v1.5.4](https://www.nocobase.com/en/blog/v1.5.4)

*Veröffentlichungsdatum: 10.02.2025*

#### 🚀 Verbesserungen

- **[Workflow]** Ladezustand zur Duplizieraktion hinzugefügt ([#6179](https://github.com/nocobase/nocobase/pull/6179)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**
  - Behebt einen Fehler, der in den Knotenfeldeinstellungen beim Erstellen ausgelöst wurde ([#6187](https://github.com/nocobase/nocobase/pull/6187)) von @mytharcher
  - Die Konfigurationsoption 'Mehrfachauswahl zulassen' für Assoziationsfelder wird in Filterformularen nicht angezeigt ([#6174](https://github.com/nocobase/nocobase/pull/6174)) von @zhangzhonghe
  - Feld bleibt versteckt, nachdem es durch Verknüpfungsregeln ausgeblendet wurde ([#6182](https://github.com/nocobase/nocobase/pull/6182)) von @zhangzhonghe
- **[utils]** Optimierung der Speicher-/Plugin-Leselogik ([#6186](https://github.com/nocobase/nocobase/pull/6186)) von @chenos
- **[Benachrichtigung: In-App-Nachricht]** Behebung: Benutzerfilter zu Nachrichten-Zeitstempel- und Titel-Unterabfragen in der Kanallisten-API hinzugefügt, um Datenisolation zu gewährleisten. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) von @deepure
- **[Backup-Manager]** Dateien wurden während der Wiederherstellung im toleranten Modus nicht vom Backup in den Uploads-Ordner kopiert von @gchust

### [v1.5.5](https://www.nocobase.com/en/blog/v1.5.5)

*Veröffentlichungsdatum: 11.02.2025*

#### 🚀 Verbesserungen

- **[Benachrichtigung: In-App-Nachricht]** Test zum Abrufen des neuesten Nachrichtentitels und -zeitstempels in In-App-Kanälen hinzugefügt. ([#6189](https://github.com/nocobase/nocobase/pull/6189)) von @sheldon66

### [v1.5.6](https://www.nocobase.com/en/blog/v1.5.6)

*Veröffentlichungsdatum: 12.02.2025*

#### 🐛 Fehlerbehebungen

- **[client]**
  - Block wird nach Seitennavigation nicht aktualisiert ([#6200](https://github.com/nocobase/nocobase/pull/6200)) von @zhangzhonghe
  - Formularblock wird nicht angezeigt, wenn ein Erstellungsformular über eine Popup-Aktion in einer Tabellenzeile hinzugefügt wird ([#6190](https://github.com/nocobase/nocobase/pull/6190)) von @katherinehhh
  - Höheneinstellung des Tabellenblocks wird nicht angewendet, wenn keine Daten vorhanden sind ([#6192](https://github.com/nocobase/nocobase/pull/6192)) von @katherinehhh
- **[Aktion: Benutzerdefinierte Anfrage]**
  - Falscher Wert der Variable 'Aktueller Datensatz' in der Schaltfläche für benutzerdefinierte Anfragen ([#6196](https://github.com/nocobase/nocobase/pull/6196)) von @zhangzhonghe
  - Kompatibilität der Schaltfläche für benutzerdefinierte Anfragen mit Legacy-Variablen ([#6194](https://github.com/nocobase/nocobase/pull/6194)) von @zhangzhonghe
- **[Datenvisualisierung]** Diagrammblöcke werden nicht angezeigt, wenn sie zu den Popups des Aktionspanels hinzugefügt werden ([#6198](https://github.com/nocobase/nocobase/pull/6198)) von @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.4](https://www.nocobase.com/en/blog/v1.6.0-beta.4)

*Veröffentlichungsdatum: 11.02.2025*

#### 🚀 Verbesserungen

- **[Backup-Manager]** Toleranten Modus aus der Benutzeroberfläche entfernt von @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.21](https://www.nocobase.com/en/blog/v1.6.0-alpha.21)

*Veröffentlichungsdatum: 07.02.2025*

#### 🎉 Neue Funktionen

- **[IP-Beschränkung]** Behebt App-Fehler, wenn die IP-Beschränkungskonfiguration nicht existiert. von @sheldon66

#### 🐛 Fehlerbehebungen

- **[auth]** Aktualisiert die Client-Auth-Middleware-Logik, um Token-Aktualisierungsfehler aufgrund von Parallelität zu verhindern. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) von @sheldon66

### [v1.6.0-alpha.23](https://www.nocobase.com/en/blog/v1.6.0-alpha.23)

*Veröffentlichungsdatum: 07.02.2025*

#### 🐛 Fehlerbehebungen

- **[client]** Behebt, dass die Option "Aus vorhandenen Daten auswählen" weiterhin angezeigt wird, wenn "Mehrfachauswahl" in einem n-zu-n-Beziehungs-Unterformular deaktiviert wird ([#6167](https://github.com/nocobase/nocobase/pull/6167)) von @katherinehhh
- **[Datenquellen-Manager]** Verwendet loginWithJti, um authentifizierungsbezogene Testfälle zu aktualisieren und Fehler zu verhindern. ([#6175](https://github.com/nocobase/nocobase/pull/6175)) von @sheldon66
- **[WEB-Client]** Routing-Berechtigungen nach Upgrade abnormal ([#6177](https://github.com/nocobase/nocobase/pull/6177)) von @zhangzhonghe

### [v1.6.0-alpha.24](https://www.nocobase.com/en/blog/v1.6.0-alpha.24)

*Veröffentlichungsdatum: 11.02.2025*

#### 🎉 Neue Funktionen

- **[Lokalisierung]** Lokalisierung für Desktop- und Mobil-Routen ([#6180](https://github.com/nocobase/nocobase/pull/6180)) von @2013xile

#### 🚀 Verbesserungen

- **[client]** Seitentitel verwendet standardmäßig den Titel der Route ([#6188](https://github.com/nocobase/nocobase/pull/6188)) von @zhangzhonghe
- **[Datenquellen-Manager]** Ändert die Testfunktion login in asynchron und aktualisiert die relevanten Testfälle. ([#6181](https://github.com/nocobase/nocobase/pull/6181)) von @sheldon66
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Aktualisiert die relevanten Testfälle, um asynchrones Login zu verwenden. von @sheldon66
- **[Workflow: Genehmigung]** Aktualisiert die relevanten Testfälle, um asynchrones Login zu verwenden. von @sheldon66

#### 🐛 Fehlerbehebungen

- **[WEB-Client]** Standard-Seiten-Tab-Titel entfernt ([#6178](https://github.com/nocobase/nocobase/pull/6178)) von @zhangzhonghe

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die vollständige Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
