---
title: "NocoBase wöchentliche Updates: Unterstützt Import und Export großer Datenmengen"
description: "Die Updates dieser Woche umfassen: Unterstützung für den Import und Export großer Datenmengen und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie ist hauptsächlich für Testnutzer gedacht, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.18](https://www.nocobase.com/en/blog/v1.4.18)

*Veröffentlichungsdatum: 2025-01-06*

#### 🚀 Verbesserungen

- **[Workflow: Test-Kit]** Korrektur der Datumsfeldgenauigkeit in der Testkollektion ([#5983](https://github.com/nocobase/nocobase/pull/5983)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Korrektur des Scrollbalkenproblems bei voller Höheneinstellung für Datenblöcke in Unterseiten ([#5989](https://github.com/nocobase/nocobase/pull/5989)) von @katherinehhh
  - Korrektur des Ausrichtungsproblems, wenn Aktionsspalten-Buttons ausgeblendet sind ([#5987](https://github.com/nocobase/nocobase/pull/5987)) von @katherinehhh
  - Korrektur des Problems mit der Stapellöschung von System- und allgemeinen Feldern im Kollektionsmanager ([#5988](https://github.com/nocobase/nocobase/pull/5988)) von @katherinehhh
  - Korrektur des Problems, dass die Variable 'URL-Suchparameter' auf mobilen Seiten nicht funktioniert ([#5968](https://github.com/nocobase/nocobase/pull/5968)) von @Cyx649312038
- **[server]** Korrektur eines potenziellen App-Absturzes während der Backup-Wiederherstellung ([#5981](https://github.com/nocobase/nocobase/pull/5981)) von @gchust
- **[Mobil]** Korrektur des Problems, dass untere Buttons auf mobilen Geräten verdeckt werden ([#5991](https://github.com/nocobase/nocobase/pull/5991)) von @zhangzhonghe
- **[Datenvisualisierung]** Korrektur des Problems, dass "aktuelle Popup-Variablen", die in Diagrammen auf Unterseiten verwendet werden, nach dem Aktualisieren der Seite leer werden ([#5984](https://github.com/nocobase/nocobase/pull/5984)) von @2013xile
- **[Block: Kanban]** Korrektur, dass übergeordnete Kollektionsfelder im Kanban nicht geladen werden ([#5985](https://github.com/nocobase/nocobase/pull/5985)) von @katherinehhh

### [v1.4.19](https://www.nocobase.com/en/blog/v1.4.19)

*Veröffentlichungsdatum: 2025-01-06*

#### 🐛 Fehlerbehebungen

- **[client]** Korrektur des Problems, dass die Datumsbereichsauswahl im Filterformular/Aktion keine Zeiteingabe anzeigt, wenn showTime gesetzt ist ([#5994](https://github.com/nocobase/nocobase/pull/5994)) von @katherinehhh

### [v1.4.20](https://www.nocobase.com/en/blog/v1.4.20)

*Veröffentlichungsdatum: 2025-01-09*

#### 🎉 Neue Funktionen

- **[client]** Hinzufügen der Methode app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) von @chenos

#### 🚀 Verbesserungen

- **[client]**

  - Ermöglicht das Sortieren von Workflows beim Binden an einen Aktionsbutton ([#6017](https://github.com/nocobase/nocobase/pull/6017)) von @mytharcher
  - Ändern der Referenzlinks von Evaluatoren zur Dokumentationsseite ([#6021](https://github.com/nocobase/nocobase/pull/6021)) von @mytharcher
  - Unterstützung von maxTagCount: 'responsive' in der Multi-Select-Dropdown-Komponente ([#6007](https://github.com/nocobase/nocobase/pull/6007)) von @katherinehhh
  - Setzen der Standard-Endzeit für die Zeitbereichskomponente im Filterblock auf 23:59:59" ([#6012](https://github.com/nocobase/nocobase/pull/6012)) von @katherinehhh
- **[Aktion: Stapelbearbeitung]** Überarbeitung des Submit-Buttons im Stapelbearbeitungsformular: Entfernung der Feldzuweisung und Verknüpfungsregel ([#6008](https://github.com/nocobase/nocobase/pull/6008)) von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[client]**

  - Korrektur, dass die Pflichtfeldvalidierung nach dem Löschen von Daten im Rich-Text-Editor nicht funktioniert ([#6006](https://github.com/nocobase/nocobase/pull/6006)) von @katherinehhh
  - Korrektur des Ausrichtungsproblems, wenn Aktionsspalten-Buttons ausgeblendet sind ([#6014](https://github.com/nocobase/nocobase/pull/6014)) von @katherinehhh
  - Korrektur des Problems mit dem Button "Kollektionen erstellen" beim Klicken auf den Tab "Kollektionen" auf der REST-API-Seite ([#5992](https://github.com/nocobase/nocobase/pull/5992)) von @katherinehhh
  - Korrektur des Problems, dass targetKey in 1:n-Beziehungen kein NanoID-Feld auswählen kann ([#5999](https://github.com/nocobase/nocobase/pull/5999)) von @katherinehhh
  - Korrektur des Stils des Einstellungsbuttons im kompakten Theme ([#6001](https://github.com/nocobase/nocobase/pull/6001)) von @katherinehhh
  - Korrektur des Listenkomponentenstils ([#5998](https://github.com/nocobase/nocobase/pull/5998)) von @mytharcher
  - Korrektur des Problems, dass in Client-Anfragen enthaltene Header überschrieben wurden ([#6009](https://github.com/nocobase/nocobase/pull/6009)) von @2013xile
  - Korrektur, dass foreignKey, targetKey und sourceKey die Filterung nach chinesischen Zeichen unterstützen sollten ([#5997](https://github.com/nocobase/nocobase/pull/5997)) von @katherinehhh
- **[Aktion: Datensätze importieren]** Korrektur des Imports mit n:m-Assoziationen, die einen anderen targetKey verwenden ([#6024](https://github.com/nocobase/nocobase/pull/6024)) von @chareice
- **[Block: Karte]** Korrektur, dass ein Kartenfeld im Detailblock als Kartenblock gerendert werden sollte ([#6010](https://github.com/nocobase/nocobase/pull/6010)) von @katherinehhh
- **[NocoBase einbetten]** Der Token für die Einbettung kollidiert mit der Authentifizierung von @chenos

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.5.0-beta.20

*Veröffentlichungsdatum: 2024-12-31*

#### 🎉 Neue Funktionen

- **[[Aktion: Datensätze importieren (Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Verbesserung der Datenimportfähigkeiten mit Unterstützung für asynchrone Importe, Import von Millionen von Datensätzen, Identifizierung und Verarbeitung doppelter Daten, Datenaktualisierungen und Workflow-Trigger.
- **[[Aktion: Datensätze exportieren (Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Verbesserung der Datenexportfähigkeiten mit Unterstützung für asynchrone Exporte, Export von Millionen von Datensätzen und Anhängexporten.

### [v1.5.0-beta.22](https://www.nocobase.com/en/blog/v1.5.0-beta.22)

*Veröffentlichungsdatum: 2025-01-04*

#### 🐛 Fehlerbehebungen

- **[client]** Korrektur des Problems, dass leere Untertabellen auf iOS eine Zeile mit leeren Daten anzeigen ([#5990](https://github.com/nocobase/nocobase/pull/5990)) von @zhangzhonghe

### [v1.5.0-beta.26](https://www.nocobase.com/en/blog/v1.5.0-beta.26)

*Veröffentlichungsdatum: 2025-01-08*

#### 🐛 Fehlerbehebungen

- **[client]** Korrektur des Problems, dass Tabellenzeilen nicht per Drag & Drop sortiert werden können ([#6013](https://github.com/nocobase/nocobase/pull/6013)) von @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.8](https://www.nocobase.com/en/blog/v1.6.0-alpha.8)

*Veröffentlichungsdatum: 2025-01-02*

#### 🎉 Neue Funktionen

- **[Workflow: Manueller Knoten]** Hinzufügen eines festen globalen Eintrags für alle Arten von Workflow-Aufgaben ([#5858](https://github.com/nocobase/nocobase/pull/5858)) von @mytharcher
- **[Passwortrichtlinie]** Hinzufügen eines neuen Plugins: Passwortrichtlinie, zum Festlegen der Passwortregeln und der Anmeldesperrrichtlinie für alle Benutzer von @2013xile
  Referenz: [Passwortrichtlinie und Benutzersperrung](https://docs.nocobase.com/handbook/password-policy)

#### 🚀 Verbesserungen

- **[client]** Hinzufügen eines Filter-Keywords "Sicherheit" für den Plugin-Manager ([#5977](https://github.com/nocobase/nocobase/pull/5977)) von @2013xile
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Änderung der API für die manuelle Ausführung von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Workflow]** Korrektur, dass `onChange` in der `WorkflowVariableWrapper`-Komponente nicht funktioniert ([#5964](https://github.com/nocobase/nocobase/pull/5964)) von @mytharcher

### [v1.6.0-alpha.9](https://www.nocobase.com/en/blog/v1.6.0-alpha.9)

*Veröffentlichungsdatum: 2025-01-06*

#### 🚀 Verbesserungen

- **[Mobil]** Unterstützung der Anzeige der aktuellen Seitenzahl für Tabellen auf mobilen Geräten ([#5946](https://github.com/nocobase/nocobase/pull/5946)) von @katherinehhh
- **[Dateimanager]** Unterstützung für andere Speicher-Plugins ([#5930](https://github.com/nocobase/nocobase/pull/5930)) von @jiannx

### [v1.6.0-alpha.10](https://www.nocobase.com/en/blog/v1.6.0-alpha.10)

*Veröffentlichungsdatum: 2025-01-08*

#### 🎉 Neue Funktionen

- **[Umgebungsvariablen]** Unterstützt die Konfiguration dynamischer Umgebungsvariablen und Geheimnisse ([#5966](https://github.com/nocobase/nocobase/pull/5966)) von @katherinehhh

#### 🚀 Verbesserungen

- **[client]** Hinzufügen weiterer Symbole zur IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) von @katherinehhh
- **[Kollektionfeld: Anhang (URL)]** Herausfiltern von Dateikollektionen, die mit plugin-file-storage-s3-pro verknüpft sind. von @jiannx

#### 🐛 Fehlerbehebungen

- **[Kollektionfeld: Anhang (URL)]** Korrektur der geänderten API im Komponenten-Hook von @mytharcher

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
