---
title: "NocoBase wöchentliche Updates: KI-Mitarbeiter zur Diagrammkonfiguration hinzugefügt"
description: "Das dieswöchige Update umfasst: Hinzufügen eines KI-Mitarbeiters zur Diagrammkonfiguration, Optimierung des Toolbar-Stils, um das Verdecken von Symbolen zu verhindern, und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es könnte einige bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die sich für die neuesten Entwicklungen des Produkts interessieren, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.8](https://www.nocobase.com/en/blog/v1.9.8)

*Veröffentlichungsdatum: 2025-11-19*

### 🐛 Fehlerbehebungen

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebt den Fehler, der durch das Lauschen auf nicht existierende externe Datenquellenereignisse verursacht wurde, von @mytharcher
- **[Vorlagendruck]** Analysiert die Variablen im Filter, von @jiannx
- **[Workflow: Genehmigung]** Behebt ein Problem, bei dem Wettlaufsituationen während der gleichzeitigen Genehmigungsverarbeitung durch mehrere Genehmiger dazu führen konnten, dass ein Workflow-Knoten mehr als einmal ausgeführt wurde, von @mytharcher

### [v1.9.7](https://www.nocobase.com/en/blog/v1.9.7)

*Veröffentlichungsdatum: 2025-11-18*

### 🐛 Fehlerbehebungen

- **[Client]** Behebt das Problem, dass die Verknüpfungsregel für das Genehmigungsformular nicht funktioniert ([#7858](https://github.com/nocobase/nocobase/pull/7858)) von @zhangzhonghe
- **[Server]** Behebt ein Problem im Service-Splitting-Modus, bei dem nicht abonnierte Warteschlangennachrichten nicht veröffentlicht werden konnten ([#7875](https://github.com/nocobase/nocobase/pull/7875)) von @mytharcher
- **[Workflow]**

  - Behebt den Fehler, der durch das Lauschen auf nicht existierende externe Datenquellenereignisse verursacht wurde ([#7855](https://github.com/nocobase/nocobase/pull/7855)) von @mytharcher
  - Verwendet eventQueue anstelle des gemeinsamen backgroundJob, um zu verhindern, dass die gemeinsame Warteschlange im Service-Splitting-Modus fälschlicherweise verarbeitet wird ([#7871](https://github.com/nocobase/nocobase/pull/7871)) von @mytharcher
- **[Workflow: Manueller Knoten]** Korrigiert den zu verwendenden Namespace der Gebietsschemsprache, um den korrekten Inhalt der Übersetzung anzuzeigen ([#7877](https://github.com/nocobase/nocobase/pull/7877)) von @mytharcher
- **[Zugriffskontrolle]** Problem, dass Assoziationsoperations-Snippets nicht wirksam werden ([#7876](https://github.com/nocobase/nocobase/pull/7876)) von @2013xile
- **[Workflow: Genehmigung]**

  - Behebt das Problem, dass die Seitengröße des Ladebenachrichtigungskanals nicht groß genug ist und die Liste nicht vollständig geladen wird, von @mytharcher
  - Behebt das Problem, dass die Verknüpfungsregel für das Genehmigungsformular nicht funktioniert, von @zhangzhonghe
  - Korrigiert das Datumsformat auf den Genehmigungslistenkarten im Aufgabencenter, um das vollständige Datum und die Uhrzeit anzuzeigen, von @mytharcher
  - Behebt ein Leistungsproblem, das beim Abfragen der Liste der Genehmigungsdatensätze während der Genehmigungseinreichung auftrat, von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.42](https://www.nocobase.com/en/blog/v2.0.0-alpha.42)

*Veröffentlichungsdatum: 2025-11-19*

### 🐛 Fehlerbehebungen

- **[Client]** Behebt ein Problem, bei dem Titel und Beschreibung im JS-Block nicht angezeigt wurden. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) von @gchust

### [v2.0.0-alpha.41](https://www.nocobase.com/en/blog/v2.0.0-alpha.41)

*Veröffentlichungsdatum: 2025-11-19*

### 🎉 Neue Funktionen

- **[Datenvisualisierung]** KI-Mitarbeiter zum Konfigurieren von Diagrammen hinzugefügt ([#7815](https://github.com/nocobase/nocobase/pull/7815)) von @heziqiang

### 🚀 Verbesserungen

- **[Flow-Engine]**

  - Unterstützt das Lauschen auf Baumänderungsereignisse von Flussmodellen in der Flow-Engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) von @gchust
  - Verbessert die Auflösung aktueller Datensatzvariablen, um das Öffnen von Dialogen zu beschleunigen ([#7895](https://github.com/nocobase/nocobase/pull/7895)) von @gchust
  - Optimierte die API-Struktur von Drittanbieterbibliotheken im Runjs-Kontext und fügte Unterstützung für die Antd-Symbolbibliothek hinzu. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) von @gchust
- **[Datenbank]** Überarbeitetes Plugin zur Feldverschlüsselung zur Verbesserung der Sicherheit, Unterstützung für Anwendungsschlüsselgenerierung und -rotation sowie feldspezifische Verschlüsselungsschlüssel. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) von @cgyrock
- **[Sammlungsfeld: Verschlüsselung]** Optimiertes Plugin zur Feldverschlüsselung zur Unterstützung des Datenabrufs mit unabhängigen IVs, von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behebt das Problem, dass ausgeblendete Blöcke weiterhin Platz auf der Seite belegten. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) von @gchust
  - Behebt das Problem, dass die Schaltfläche "Zurücksetzen" im Filter-Button Standardbedingungen löscht ([#7903](https://github.com/nocobase/nocobase/pull/7903)) von @zhangzhonghe
  - Behebt eine falsche Berechtigungsprüfung für Unterformularfelder in neuen Formularen ([#7902](https://github.com/nocobase/nocobase/pull/7902)) von @katherinehhh
- **[Server]** Behebt ein Problem im Service-Splitting-Modus, bei dem nicht abonnierte Warteschlangennachrichten nicht veröffentlicht werden konnten ([#7875](https://github.com/nocobase/nocobase/pull/7875)) von @mytharcher
- **[Workflow]**

  - Behebt den Fehler, der durch das Lauschen auf nicht existierende externe Datenquellenereignisse verursacht wurde ([#7855](https://github.com/nocobase/nocobase/pull/7855)) von @mytharcher
  - Verwendet eventQueue anstelle des gemeinsamen backgroundJob, um zu verhindern, dass die gemeinsame Warteschlange im Service-Splitting-Modus fälschlicherweise verarbeitet wird ([#7871](https://github.com/nocobase/nocobase/pull/7871)) von @mytharcher
- **[Workflow: Manueller Knoten]** Korrigiert den zu verwendenden Namespace der Gebietsschemsprache, um den korrekten Inhalt der Übersetzung anzuzeigen ([#7877](https://github.com/nocobase/nocobase/pull/7877)) von @mytharcher
- **[Zugriffskontrolle]** Problem, dass Assoziationsoperations-Snippets nicht wirksam werden ([#7876](https://github.com/nocobase/nocobase/pull/7876)) von @2013xile
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebt den Fehler, der durch das Lauschen auf nicht existierende externe Datenquellenereignisse verursacht wurde, von @mytharcher
- **[Kommentare]** Behebt ein Problem, bei dem zitierte Kommentare in Kommentarblöcken nicht angezeigt werden, von @katherinehhh
- **[Vorlagendruck]** Analysiert die Variablen im Filter, von @jiannx
- **[Workflow: Genehmigung]** Behebt ein Problem, bei dem Wettlaufsituationen während der gleichzeitigen Genehmigungsverarbeitung durch mehrere Genehmiger dazu führen konnten, dass ein Workflow-Knoten mehr als einmal ausgeführt wurde, von @mytharcher

### [v2.0.0-alpha.40](https://www.nocobase.com/en/blog/v2.0.0-alpha.40)

*Veröffentlichungsdatum: 2025-11-18*

### 🚀 Verbesserungen

- **[Flow-Engine]** Optimiert den Toolbar-Stil, um zu verhindern, dass Symbole verdeckt werden ([#7883](https://github.com/nocobase/nocobase/pull/7883)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Behebt das Problem, dass ACL-Berechtigungsdaten nach Abmeldung und Anmeldung nicht neu geladen werden. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) von @gchust
- **[Client]** Behebt Probleme in den Formularelementeinstellungen ([#7867](https://github.com/nocobase/nocobase/pull/7867)) von @katherinehhh
- **[Datenvisualisierung]** Verwendet den SQL-Ressourcen-Debug-Modus nur während der Diagrammvorschau ([#7893](https://github.com/nocobase/nocobase/pull/7893)) von @heziqiang
- **[Multi-Space]** Multi-Space zugeordnete Benutzer, von @jiannx
- **[Workflow: Genehmigung]**

  - Behebt das Problem, dass die Seitengröße des Ladebenachrichtigungskanals nicht groß genug ist und die Liste nicht vollständig geladen wird, von @mytharcher
  - Behebt ein Leistungsproblem, das beim Abfragen der Liste der Genehmigungsdatensätze während der Genehmigungseinreichung auftrat, von @mytharcher
  - Korrigiert das Datumsformat auf den Genehmigungslistenkarten im Aufgabencenter, um das vollständige Datum und die Uhrzeit anzuzeigen, von @mytharcher

### [v2.0.0-alpha.39](https://www.nocobase.com/en/blog/v2.0.0-alpha.39)

*Veröffentlichungsdatum: 2025-11-17*

### 🚀 Verbesserungen

- **[Client]** Komponenten für mobile Geräte anpassen ([#7870](https://github.com/nocobase/nocobase/pull/7870)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behebt das Problem, dass die Standard-JS-Feldkonfiguration die Anzeigemoduseinstellung nicht verwendete. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) von @gchust
  - Behebt das Problem, dass duplizierte Vorlagen nicht erscheinen, verursacht durch Ziehen und anschließendes Löschen einer referenzierten Vorlage ([#7847](https://github.com/nocobase/nocobase/pull/7847)) von @zhangzhonghe
  - Behebt das Problem, dass der Standardwert eines Datumsfeldes im Filterformular-Blockmodell nicht gesetzt werden konnte. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) von @gchust
  - Behebt das Problem, dass die Verknüpfungsregel für das Genehmigungsformular nicht funktioniert ([#7858](https://github.com/nocobase/nocobase/pull/7858)) von @zhangzhonghe
  - Behebt das Problem, dass Schnellbearbeitungsvorgänge im Tabellenblock Daten nicht korrekt aktualisieren. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) von @gchust
  - Behebt das Problem, dass das Rich-Text-Feld keinen Standardwert eingeben kann und das Mehrfachauswahlfeld nicht mehrere Optionen als Standardwert auswählen kann. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) von @gchust
- **[Multi-App-Manager (veraltet)]]** Nachdem eine Unteranwendung gestoppt wurde, eine Synchronisationsnachricht veröffentlichen, um andere Knoten zu benachrichtigen, die entsprechende Unteranwendung zu stoppen ([#7849](https://github.com/nocobase/nocobase/pull/7849)) von @2013xile
- **[Workflow: Genehmigung]** Behebt das Problem, dass die Verknüpfungsregel für das Genehmigungsformular nicht funktioniert, von @zhangzhonghe
- **[E-Mail-Manager]** ShadowHtml-Aktualisierungsfehler, von @jiannx
