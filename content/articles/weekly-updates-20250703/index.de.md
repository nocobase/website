---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: Hinzufügen von Filterunterstützung zur Multi-App-Verwaltung, Optimierung mobiler Stile und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es könnte einige bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.18](https://www.nocobase.com/en/blog/v1.7.18)

*Veröffentlichungsdatum: 2025-06-26*

#### 🚀 Verbesserungen

- **[Workflow]** Optimierung des mobilen Stils ([#7040](https://github.com/nocobase/nocobase/pull/7040)) von @mytharcher
- **[Öffentliche Formulare]** Optimierung der Leistung von Datumskomponenten in öffentlichen Formularen ([#7117](https://github.com/nocobase/nocobase/pull/7117)) von @zhangzhonghe

#### 🐛 Fehlerbehebungen

- **[Workflow]** Korrektur der Parameter beim Laden von Datensätzen in Aufgaben ([#7123](https://github.com/nocobase/nocobase/pull/7123)) von @mytharcher
- **[WEB-Client]** Problem behoben, bei dem Blöcke unter Seiten nach dem Setzen von Rollen-Menüberechtigungen nicht angezeigt wurden ([#7112](https://github.com/nocobase/nocobase/pull/7112)) von @aaaaaajie
- **[Workflow: Genehmigung]**

  - Korrektur des Antragstellervariablennamens im Trigger von @mytharcher
  - Korrektur der mobilen Stile von @mytharcher
  - Korrektur eines Fehlers, der ausgelöst wurde, wenn die genehmigungsbezogene Sammlung gelöscht wurde von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.11](https://www.nocobase.com/en/blog/v1.8.0-beta.11)

*Veröffentlichungsdatum: 2025-06-27*

#### 🎉 Neue Funktionen

- **[Workflow: HTTP-Anfrageknoten]** Unterstützung für `multipart/form-data`-Anfragen ([#7087](https://github.com/nocobase/nocobase/pull/7087)) von @shushu992

#### 🚀 Verbesserungen

- **[Workflow]**

  - Optimierung des mobilen Stils ([#7040](https://github.com/nocobase/nocobase/pull/7040)) von @mytharcher
  - Anpassung der API von `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) von @mytharcher
- **[Öffentliche Formulare]** Optimierung der Leistung von Datumskomponenten in öffentlichen Formularen ([#7117](https://github.com/nocobase/nocobase/pull/7117)) von @zhangzhonghe
- **[Workflow: Vor-Aktions-Ereignis]** Anpassung der Variablen-API von @mytharcher
- **[Workflow: Genehmigung]** Anpassung der Variablen-API von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Falsche Bereichsbeschränkung bei Datumsfeldern mit Uhrzeit ([#7107](https://github.com/nocobase/nocobase/pull/7107)) von @katherinehhh
  - Wenn URL-Abfrageparameter-Variablen leer sind, werden die Datenbereichsbedingungen nicht entfernt ([#7104](https://github.com/nocobase/nocobase/pull/7104)) von @zhangzhonghe
- **[Workflow]**

  - Korrektur der Parameter beim Laden von Datensätzen in Aufgaben ([#7123](https://github.com/nocobase/nocobase/pull/7123)) von @mytharcher
  - Korrektur einer falsch ausgeführten Prüfung bei großen Ganzzahlen ([#7099](https://github.com/nocobase/nocobase/pull/7099)) von @mytharcher
  - Korrektur von Statistiken, die durch eine nicht aktuelle Workflow-Version kaskadiert gelöscht wurden ([#7103](https://github.com/nocobase/nocobase/pull/7103)) von @mytharcher
- **[Mobil]** Korrektur des Z-Index-Problems bei mobilen Popups ([#7110](https://github.com/nocobase/nocobase/pull/7110)) von @zhangzhonghe
- **[WEB-Client]** Problem behoben, bei dem Blöcke unter Seiten nach dem Setzen von Rollen-Menüberechtigungen nicht angezeigt wurden ([#7112](https://github.com/nocobase/nocobase/pull/7112)) von @aaaaaajie
- **[Kalender]** Problem mit dem Datumsfeld im Schnellerstellungsformular des Kalenderblocks ([#7106](https://github.com/nocobase/nocobase/pull/7106)) von @katherinehhh
- **[Aktion: Datensätze importieren]** Behebung des Anmeldefehlerproblems nach dem Batch-Import von Benutzernamen und Passwörtern ([#7076](https://github.com/nocobase/nocobase/pull/7076)) von @aaaaaajie
- **[Workflow: Genehmigung]**

  - Korrektur eines Fehlers, der ausgelöst wurde, wenn die genehmigungsbezogene Sammlung gelöscht wurde von @mytharcher
  - Korrektur der mobilen Stile von @mytharcher
  - Korrektur des Antragstellervariablennamens im Trigger von @mytharcher
  - Nur Teilnehmer können Details der Genehmigung anzeigen (abrufen) von @mytharcher
  - Korrektur der alten Variablen-API, die einen Fehler auslöst von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.12](https://www.nocobase.com/en/blog/v1.8.0-alpha.12)

*Veröffentlichungsdatum: 2025-07-02*

#### 🚀 Verbesserungen

- **[Datenbank]** Unterstützung zum Hinzufügen von Pool-Optionen aus der Umgebungsvariable ([#7133](https://github.com/nocobase/nocobase/pull/7133)) von @mytharcher
- **[Workflow]**

  - Verbesserung der Ladeleistung der Ausführungsliste durch Ausschluss des JSON-Feldes ([#7138](https://github.com/nocobase/nocobase/pull/7138)) von @mytharcher
  - Hinzufügen einer Log-API für Knotentests ([#7129](https://github.com/nocobase/nocobase/pull/7129)) von @mytharcher
- **[Workflow: Genehmigung]** Änderung der Zeit in der Zeitleiste auf absolut von @mytharcher

#### 🐛 Fehlerbehebungen

- **[utils]** Filterproblem bei DateOnly oder DateTime (ohne Zeitzone) unter Verwendung der Variablen "Exakter Tag" ([#7113](https://github.com/nocobase/nocobase/pull/7113)) von @katherinehhh
- **[cli]**

  - Undefinierter Fehler beim Herunterladen von Plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) von @jiannx
  - Anpassung der Lizenzkopie bei der Installation des Plugins ([#7135](https://github.com/nocobase/nocobase/pull/7135)) von @jiannx
- **[Client]**

  - Fehlertoleranz für Einstellungen basierend auf 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) von @mytharcher
  - Das Setzen des Feld-Anzeigenamens in der verbundenen Ansicht hatte keine Wirkung ([#7130](https://github.com/nocobase/nocobase/pull/7130)) von @aaaaaajie
  - Workflow-Manuellknoten-UI-Konfiguration: Verknüpfungsregeln können keine Variablen des aktuellen Formulars auswählen ([#7125](https://github.com/nocobase/nocobase/pull/7125)) von @zhangzhonghe
- **[Workflow]** Korrektur eines Fehlers, der durch zirkulären Import ausgelöst wurde ([#7134](https://github.com/nocobase/nocobase/pull/7134)) von @mytharcher
- **[plugin-commercial]**

  - Entwicklungsmodus zeigt kein Lizenz-Popup an von @jiannx
  - Vorübergehendes Schließen des Lizenzprüfungs-Popups von @jiannx
  - Anpassung der Lizenzprüfungslogik und Unterstützung für Pan-Domain-Namen-Matching von @jiannx
- **[Passwortrichtlinie]** Unterstützung für dauerhafte Sperrung von Benutzerkonten von @2013xile
- **[Workflow: Unterworkflow]** Problem im Cluster-Modus behoben von @mytharcher
- **[Workflow: Genehmigung]**

  - Hinzufügen von Formular-Layout-Einstellungen von @mytharcher
  - Entfernen nicht filterbarer Felder aus dem Filter von @mytharcher

### [v1.8.0-alpha.11](https://www.nocobase.com/en/blog/v1.8.0-alpha.11)

*Veröffentlichungsdatum: 2025-06-27*

#### 🎉 Neue Funktionen

- **[Lizenzeinstellungen]** Lizenzierungseinstellung hinzugefügt und Lizenz vor dem Herunterladen von Plugins validieren ([#7026](https://github.com/nocobase/nocobase/pull/7026)) von @jiannx

#### 🚀 Verbesserungen

- **[Multi-App-Manager]** Filterunterstützung zur Multi-App-Verwaltung hinzugefügt ([#7124](https://github.com/nocobase/nocobase/pull/7124)) von @katherinehhh
- **[Workflow]** Optimierung des mobilen Stils ([#7040](https://github.com/nocobase/nocobase/pull/7040)) von @mytharcher
- **[Öffentliche Formulare]** Optimierung der Leistung von Datumskomponenten in öffentlichen Formularen ([#7117](https://github.com/nocobase/nocobase/pull/7117)) von @zhangzhonghe
- **[plugin-commercial]** Verschlüsselung des Log-Versands und Verbesserung der Lizenzinformationsanzeige von @jiannx

#### 🐛 Fehlerbehebungen

- **[Client]** Standardwert des Assoziationsfeldes überschreibt vorhandene Daten in der Untertabelle ([#7120](https://github.com/nocobase/nocobase/pull/7120)) von @katherinehhh
- **[Workflow]** Korrektur der Parameter beim Laden von Datensätzen in Aufgaben ([#7123](https://github.com/nocobase/nocobase/pull/7123)) von @mytharcher
- **[WEB-Client]** Problem behoben, bei dem Blöcke unter Seiten nach dem Setzen von Rollen-Menüberechtigungen nicht angezeigt wurden ([#7112](https://github.com/nocobase/nocobase/pull/7112)) von @aaaaaajie
- **[Workflow: Genehmigung]** Korrektur des Antragstellervariablennamens im Trigger von @mytharcher
