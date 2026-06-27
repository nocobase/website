---
title: "NocoBase wöchentliche Updates: Unterstützung für Untertabellen-Seitennavigation, Workflow-Optimierung und mehr"
description: "NocoBase wöchentliche Updates 2024-10-24"
---

Fasse die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen findest du in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase wird derzeit mit zwei Branches aktualisiert: `main` und `next`.

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Alpha-Version, die einige noch nicht veröffentlichte neue Funktionen enthält. Diese Version ist möglicherweise nicht vollständig stabil und eignet sich für Entwickler oder Tester, um neue Funktionen vorab zu testen oder Kompatibilitätstests durchzuführen.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.32-beta](https://www.nocobase.com/en/blog/v1.3.32-beta)

*Veröffentlichungsdatum: 2024-10-13*

### 🐛 Fehlerbehebungen

- **[client]** Erforderliches relationales Feld löst auch nach Auswahl eines Werts mit einer Variable im Datenbereich weiterhin einen Validierungsfehler aus ([#5399](https://github.com/nocobase/nocobase/pull/5399)) von @katherinehhh

## [v1.3.33-beta](https://www.nocobase.com/en/blog/v1.3.33-beta)

*Veröffentlichungsdatum: 2024-10-17*

### 🚀 Verbesserungen

- **[Workflow]** Assoziationsfeldbezogenen Hinweis zum Batch-Modus des Aktualisierungsknotens hinzugefügt ([#5426](https://github.com/nocobase/nocobase/pull/5426)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, dass das Popup „Profil bearbeiten“ von einer Unterseite überdeckt wurde ([#5409](https://github.com/nocobase/nocobase/pull/5409)) von @zhangzhonghe
  - Workflow-Knotenvariablen zeigen keine geerbten Sammlungsfelder an ([#5415](https://github.com/nocobase/nocobase/pull/5415)) von @chenos
  - Seitenumbruch wird nach dem Löschen von Filterdaten im Tabellenfilterblock nicht zurückgesetzt ([#5411](https://github.com/nocobase/nocobase/pull/5411)) von @katherinehhh
- **[Dateimanager]** Entfernung der Begrenzung auf 20 Elemente beim Laden von Speichern in der Dateivorlagen-Sammlungskonfiguration ([#5430](https://github.com/nocobase/nocobase/pull/5430)) von @mytharcher
- **[Aktion: Datensatz duplizieren]** Problem behoben, bei dem das Popup für die Massenbearbeitung keine Inhalte anzeigte ([#5412](https://github.com/nocobase/nocobase/pull/5412)) von @zhangzhonghe
- **[Datenvisualisierung]** Problem behoben, bei dem Standardwerte im Diagrammfilterblock nicht angezeigt wurden ([#5405](https://github.com/nocobase/nocobase/pull/5405)) von @zhangzhonghe

## [v1.3.34-beta](https://www.nocobase.com/en/blog/v1.3.34-beta)

*Veröffentlichungsdatum: 2024-10-21*

### 🎉 Neue Funktionen

- **[test]** Assoziationsfelder in Filterformularen unterstützen jetzt die Konfiguration, ob Mehrfachauswahl erlaubt ist ([#5451](https://github.com/nocobase/nocobase/pull/5451)) von @zhangzhonghe
- **[client]** Eine Variable namens „Übergeordnetes Objekt“ hinzugefügt ([#5449](https://github.com/nocobase/nocobase/pull/5449)) von @zhangzhonghe
  Referenz: [Übergeordnetes Objekt](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, dass URL-Suchparameter-Variablen nicht geparst wurden ([#5454](https://github.com/nocobase/nocobase/pull/5454)) von @zhangzhonghe
  - Fehler beim Löschen von Daten behoben, wenn Assoziationsdaten mit Datenbereich in verschachtelten Untertabellen ausgewählt wurden ([#5441](https://github.com/nocobase/nocobase/pull/5441)) von @katherinehhh
  - Hintergrundfarbe der ausgewählten Tabellenzeile korrigiert ([#5445](https://github.com/nocobase/nocobase/pull/5445)) von @mytharcher
- **[Block: Karte]** Zoomstufenkonfiguration für Kartenfelder in Tabellenspalten entfernt ([#5457](https://github.com/nocobase/nocobase/pull/5457)) von @katherinehhh
- **[Dateimanager]** Aufruf des Speicherregel-Hooks bei schreibgeschützten Feldern korrigiert ([#5447](https://github.com/nocobase/nocobase/pull/5447)) von @mytharcher
- **[Datenquelle: Haupt]** Fehlerhaften e2e-Test aufgrund geänderter Komponente behoben ([#5437](https://github.com/nocobase/nocobase/pull/5437)) von @mytharcher

## [v1.3.35-beta](https://www.nocobase.com/en/blog/v1.3.35-beta)

*Veröffentlichungsdatum: 2024-10-21*

### 🚀 Verbesserungen

- **[Workflow: Mailer-Knoten]** Platzhalter zum Mailer-Knoten hinzugefügt ([#5470](https://github.com/nocobase/nocobase/pull/5470)) von @mytharcher

## [v1.3.36-beta](https://www.nocobase.com/en/blog/v1.3.36-beta)

*Veröffentlichungsdatum: 2024-10-22*

### 🐛 Fehlerbehebungen

- **[Sammlung: Baum]** Problem behoben, bei dem die Pfadsammlung für die Vererbungsbaumsammlung nicht automatisch erstellt wurde ([#5486](https://github.com/nocobase/nocobase/pull/5486)) von @2013xile
- **[Kalender]** Seitenumbruchsleiste mit Daten in der Tabelle anzeigen ([#5480](https://github.com/nocobase/nocobase/pull/5480)) von @katherinehhh
- **[Dateimanager]** Problem behoben, dass Dateien aufgrund eines Regel-Hooks nicht hochgeladen werden konnten ([#5460](https://github.com/nocobase/nocobase/pull/5460)) von @mytharcher
- **[Sammlungsfeld: Formel]** Falsche Formelberechnung in verschachtelten mehrstufigen Untertabellen korrigiert ([#5469](https://github.com/nocobase/nocobase/pull/5469)) von @gu-zhichao

## [v1.3.37-beta](https://www.nocobase.com/en/blog/v1.3.37-beta)

*Veröffentlichungsdatum: 2024-10-23*

### 🚀 Verbesserungen

- **[client]** Hinweis im Konfigurationspanel zum Binden eines Workflows in einen Button geändert ([#5494](https://github.com/nocobase/nocobase/pull/5494)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Dateimanager]** Hochladen und Löschen von Dateidatensätzen innerhalb eines Assoziationsblocks korrigiert ([#5493](https://github.com/nocobase/nocobase/pull/5493)) von @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241016035453](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241016035453)

*Veröffentlichungsdatum: 2024-10-16*

### 🎉 Neue Funktionen

- **[sdk]** Ermöglicht das Speichern von Client-Informationen im sessionStorage durch Setzen der Umgebungsvariable `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) von @2013xile
- **[Sammlungsfeld: Anhang (URL)]** Anhang (URL)-Feld hinzugefügt von @katherinehhh

### 🚀 Verbesserungen

- **[client]**

  - Remote-Debugging optimiert ([#5394](https://github.com/nocobase/nocobase/pull/5394)) von @chenos
  - Stiloptimierung für die Zentrierung des Symbols, wenn Aktionsschaltflächen nur Symbole verwenden ([#5413](https://github.com/nocobase/nocobase/pull/5413)) von @katherinehhh
  - Automatisches Schließen des Nachrichten-Popups beim Aktualisieren eines Datensatzes ([#5408](https://github.com/nocobase/nocobase/pull/5408)) von @katherinehhh
- **[Workflow: HTTP-Anfrageknoten]** Unterstützung für SSE (Server-Sent Events) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) von @chenos

### 🐛 Fehlerbehebungen

- **[Öffentliche Formulare]** Problem mit dem Klicken auf Einstellungen bei öffentlichen Formularen behoben ([#5392](https://github.com/nocobase/nocobase/pull/5392)) von @katherinehhh
- **[client]**

  - Problem behoben, dass der Wert im Eingabefeld für den Standardwert nicht angezeigt wurde ([#5400](https://github.com/nocobase/nocobase/pull/5400)) von @zhangzhonghe
  - Fehler behoben, dass das Assoziationsfeld nicht gefunden wurde, wenn Verknüpfungsregeln für die Untertabelle festgelegt wurden ([#5402](https://github.com/nocobase/nocobase/pull/5402)) von @zhangzhonghe
  - Falsche Vorschauminatur korrigiert, wenn der Dateityp standardmäßig nicht unterstützt wird ([#5401](https://github.com/nocobase/nocobase/pull/5401)) von @mytharcher
- **[Lokalisierung]** Problem behoben, bei dem Übersetzungen im Lokalisierungs-Plugin nach der Veröffentlichung nicht wirksam wurden ([#5416](https://github.com/nocobase/nocobase/pull/5416)) von @2013xile

## [v1.4.0-alpha.20241017164316](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241017164316)

*Veröffentlichungsdatum: 2024-10-18*

### 🎉 Neue Funktionen

- **[Workflow: Schleifenknoten]** Weitere Steuerungsoptionen zur Konfiguration des Schleifenknotens hinzugefügt ([#5342](https://github.com/nocobase/nocobase/pull/5342)) von @mytharcher
  Referenz: [Schleifenknoten](https://docs.nocobase.com/handbook/workflow-loop)
- **[Workflow]** Testlauf-Schaltfläche für Workflow-Knoten und API zur Implementierung der Testfunktion hinzugefügt ([#5407](https://github.com/nocobase/nocobase/pull/5407)) von @mytharcher
- **[Feldkomponente: Maske]** Feldkomponente `Maske` hinzugefügt, unterstützt die Anzeige von Felddaten als maskierten String von @gchust
  Referenz: [Maske](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Verbesserungen

- **[client]** Ermöglicht das Zurücksetzen des Tabellenspaltentitels auf den Standardwert ([#5439](https://github.com/nocobase/nocobase/pull/5439)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[client]** Korrigiert, dass feste Feldkomponentenoptionen nicht korrekt übersetzt wurden ([#5442](https://github.com/nocobase/nocobase/pull/5442)) von @gchust
- **[Workflow: HTTP-Anfrageknoten]** Legacy-Fehlermeldung im Anfrageknoten korrigiert ([#5443](https://github.com/nocobase/nocobase/pull/5443)) von @mytharcher

## [v1.4.0-alpha.20241023053303](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241023053303)

*Veröffentlichungsdatum: 2024-10-23*

### 🚀 Verbesserungen

- **[client]** Untertabelle unterstützt jetzt Seitenumbruch ([#5450](https://github.com/nocobase/nocobase/pull/5450)) von @katherinehhh
- **[Block: Kanban]** Unterstützung zum Aktivieren oder Deaktivieren der Drag-and-Drop-Sortierung im Kanban-Block hinzugefügt ([#5468](https://github.com/nocobase/nocobase/pull/5468)) von @katherinehhh
- **[Kalender]** Erstellungs-Popup anzeigen, wenn ein Kalenderslot ausgewählt wird ([#5483](https://github.com/nocobase/nocobase/pull/5483)) von @gu-zhichao
- **[Multi-App-Manager]** Unterstützung für die Umgebungsvariable USE_DB_SCHEMA_IN_SUBAPP ([#5481](https://github.com/nocobase/nocobase/pull/5481)) von @chenos
- **[Workflow]** Kartenähnliche Feldsatz-Komponente hinzugefügt ([#5464](https://github.com/nocobase/nocobase/pull/5464)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Variablenwert geht nach dem Aktualisieren des Markdown-Block-Popups verloren ([#5478](https://github.com/nocobase/nocobase/pull/5478)) von @katherinehhh
- **[Datenvisualisierung]** Probleme behoben bei Verwendung einer externen Oracle-Datenquelle für das Datenvisualisierungs-Plugin, z. B. Datumsformatierungsprobleme ([#5436](https://github.com/nocobase/nocobase/pull/5436)) von @2013xile
- **[Dateimanager]** Problem behoben, dass Dateien aufgrund eines Regel-Hooks nicht hochgeladen werden konnten ([#5460](https://github.com/nocobase/nocobase/pull/5460)) von @mytharcher

## Über NocoBase

NocoBase ist eine private, quelloffene No-Code-Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 Holen Sie sich NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
