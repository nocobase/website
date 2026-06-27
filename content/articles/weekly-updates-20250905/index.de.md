---
title: "NocoBase wöchentliche Updates: Optimierung und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: optimierte Listen-API-Zählabfrage, Workflow-Unterstützung für Testbenachrichtigungsknoten und mehr."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es könnte einige bekannte oder unbekannte Probleme geben. Sie ist hauptsächlich für Testnutzer gedacht, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.23](https://www.nocobase.com/en/blog/v1.8.23)

*Veröffentlichungsdatum: 2025-09-03*

#### 🚀 Verbesserungen

- **[Datenbank]** Optimierte Listen-API-Count-Abfrage zur Reduzierung des Ressourcenverbrauchs. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) von @aaaaaajie
- **[Benachrichtigung: In-App-Nachricht]** Unterstützt die Konfiguration der automatischen Schließverzögerung für In-App-Benachrichtigungen ([#7472](https://github.com/nocobase/nocobase/pull/7472)) von @mytharcher
- **[Workflow: Benachrichtigungsknoten]** Unterstützt das Testen des Benachrichtigungsknotens ([#7470](https://github.com/nocobase/nocobase/pull/7470)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Assoziationsfeld-Renderfehler beim Wechsel zur Tag-Komponente im Bearbeitungsformular-Block ([#7468](https://github.com/nocobase/nocobase/pull/7468)) von @katherinehhh
  - Zeitlimit-Problem, wenn das ausgewählte Datum gleich dem Mindestdatum ist ([#7461](https://github.com/nocobase/nocobase/pull/7461)) von @katherinehhh
- **[Mobil]** Mobiles Datumsfeld ohne Zeitzone zeigt Datum/Uhrzeit nicht korrekt an ([#7473](https://github.com/nocobase/nocobase/pull/7473)) von @katherinehhh
- **[Öffentliche Formulare]** Standardwert des öffentlichen Formularfelds wird bei Verwendung von Variablen nicht angewendet ([#7467](https://github.com/nocobase/nocobase/pull/7467)) von @katherinehhh
- **[Aktion: Datensätze importieren]** Korrigiert die falsche Zeilennummer, die beim Import doppelter Daten angezeigt wird ([#7440](https://github.com/nocobase/nocobase/pull/7440)) von @aaaaaajie
- **[Sammlung: Baum]** Entfernt Datenbankereignisse im Zusammenhang mit der Sammlung nach dem Löschen einer Baumsammlung ([#7459](https://github.com/nocobase/nocobase/pull/7459)) von @2013xile
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebt das Problem, dass benutzerdefinierte Aktionsereignisse nach der Initialisierung nicht sofort manuell ausgeführt werden können von @mytharcher
- **[Workflow: Unterprozess]** Behebt das Problem, dass Unterprozesse mehrfach fortgesetzt und ausgeführt werden von @mytharcher
- **[Workflow: Genehmigung]** Für Benutzer, die nicht der aktuelle Genehmiger sind, wird der entsprechende Ansichtsbutton in der Prozessflusstabelle nicht angezeigt von @mytharcher
