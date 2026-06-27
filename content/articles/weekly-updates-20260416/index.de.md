---
title: "Wöchentliche Updates｜Baumfilter-Block hinzugefügt"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 09. bis 16. April 2026."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit in drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.37](https://www.nocobase.com/en/blog/v2.0.37)

*Veröffentlichungsdatum: 2026-04-14*

### 🚀 Verbesserungen

- **[undefined]**

  - Inhaltsverzeichnis zur französischen README hinzugefügt ([#9037](https://github.com/nocobase/nocobase/pull/9037)) von @saraTabbane
  - Konsistenz des Inhaltsverzeichnisses in lokalisierten READMEs sichergestellt ([#9038](https://github.com/nocobase/nocobase/pull/9038)) von @gaston98765
  - Arabische Übersetzung für die Dokumentations-Startseite hinzugefügt ([#9043](https://github.com/nocobase/nocobase/pull/9043)) von @gaston98765
  - Docs: Arabische Übersetzung für die Einführungsseiten „Erste Schritte“ hinzugefügt ([#9044](https://github.com/nocobase/nocobase/pull/9044)) von @gaston98765
- **[client]** Schalter für Pflichtfeldprüfung bei Formularen hinzugefügt ([#9060](https://github.com/nocobase/nocobase/pull/9060)) von @jiannx

### 🐛 Fehlerbehebungen

- **[utils]** Sicherheitskontrolle für das Senden von HTTP-Anfragen vom Server hinzugefügt, um mögliche SSRF zu vermeiden ([#9079](https://github.com/nocobase/nocobase/pull/9079)) von @mytharcher
  Referenz: [Umgebungsvariablen](https://docs.nocobase.com/get-started/installation/env)

### [v2.0.36](https://www.nocobase.com/en/blog/v2.0.36)

*Veröffentlichungsdatum: 2026-04-10*

### 🐛 Fehlerbehebungen

- **[client]** Fehler beim Hinzufügen von n:m-Feldern in Untertabellen behoben ([#9070](https://github.com/nocobase/nocobase/pull/9070)) von @jiannx
- **[flow-engine]** Problem behoben, dass n:1-Felder aus externen Datenquellen nicht im Tabellenblock hinzugefügt werden konnten ([#9068](https://github.com/nocobase/nocobase/pull/9068)) von @jiannx
- **[Notification manager]** Leistung beim Senden von In-App-Benachrichtigungen in Workflow-Szenarien optimiert ([#9066](https://github.com/nocobase/nocobase/pull/9066)) von @mytharcher

### [v2.0.35](https://www.nocobase.com/en/blog/v2.0.35)

*Veröffentlichungsdatum: 2026-04-09*

### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem das Popup zur Datensatzauswahl über die Auswahlschaltfläche einer Untertabelle die Variablenwerte des übergeordneten Elements nicht korrekt auflösen konnte. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) von @gchust
- **[Collection field: Code]** Benutzeroberfläche der Code-Felder korrigiert ([#9061](https://github.com/nocobase/nocobase/pull/9061)) von @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.16](https://www.nocobase.com/en/blog/v2.1.0-alpha.16)

*Veröffentlichungsdatum: 2026-04-14*

### 🚀 Verbesserungen

- **[undefined]**

  - Konsistenz des Inhaltsverzeichnisses in lokalisierten READMEs sichergestellt ([#9038](https://github.com/nocobase/nocobase/pull/9038)) von @gaston98765
  - Inhaltsverzeichnis zur französischen README hinzugefügt ([#9037](https://github.com/nocobase/nocobase/pull/9037)) von @saraTabbane
- **[server]** Swagger-API-Dokumentation des Plugin-Managers verbessert ([#9080](https://github.com/nocobase/nocobase/pull/9080)) von @2013xile

### 🐛 Fehlerbehebungen

- **[AI employees]** Problem behoben, dass Fehlermeldungen in den KI-Mitarbeiter-Konversationen nicht angezeigt wurden ([#9097](https://github.com/nocobase/nocobase/pull/9097)) von @cgyrock
- **[Access control]** acl swagger für mcp server aktualisiert ([#9096](https://github.com/nocobase/nocobase/pull/9096)) von @Andrew1989Y

### [v2.1.0-alpha.15](https://www.nocobase.com/en/blog/v2.1.0-alpha.15)

*Veröffentlichungsdatum: 2026-04-10*

### 🎉 Neue Funktionen

- **[Block: Tree]** Baumfilterblock hinzugefügt ([#9016](https://github.com/nocobase/nocobase/pull/9016)) von @jiannx
- **[Auth: API keys]** `pm list` und `generate-api-key` Befehle hinzugefügt ([#9076](https://github.com/nocobase/nocobase/pull/9076)) von @chenos
- **[AI employees]**

  - Datenabfrage-Tool und Tool für Geschäftsanalyseberichte für KI-Mitarbeiter hinzugefügt ([#9040](https://github.com/nocobase/nocobase/pull/9040)) von @2013xile
  - LLIM-basiertes Websuch-Tool für KI-Mitarbeiter hinzugefügt ([#9032](https://github.com/nocobase/nocobase/pull/9032)) von @cgyrock
- **[Migration manager]** Unterstützung für Migrationsbefehle von @chenos
- **[Email manager]** Gmail unterstützt jetzt das Senden von E-Mails mit Aliasen von @jiannx

### 🐛 Fehlerbehebungen

- **[flow-engine]** Problem behoben, dass n:1-Felder aus externen Datenquellen nicht im Tabellenblock hinzugefügt werden konnten ([#9068](https://github.com/nocobase/nocobase/pull/9068)) von @jiannx
- **[client]**

  - Fehler beim Hinzufügen von n:m-Feldern in Untertabellen behoben ([#9070](https://github.com/nocobase/nocobase/pull/9070)) von @jiannx
  - Problem behoben, bei dem das Popup zur Datensatzauswahl über die Auswahlschaltfläche einer Untertabelle die Variablenwerte des übergeordneten Elements nicht korrekt auflösen konnte. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) von @gchust
  - Problem behoben, bei dem eine falsche Bestätigungsmeldung für nicht gespeicherte Änderungen bei der Stapelbearbeitungsaktion angezeigt wurde ([#9054](https://github.com/nocobase/nocobase/pull/9054)) von @gchust
  - Problem behoben, bei dem ein falsches sekundäres Bestätigungspopup beim Absenden des Formulars nach dem Erstellen eines Datensatzes über eine Popup-Untertabelle angezeigt wurde. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) von @gchust
  - Problem behoben, bei dem ctx.request den Authorization-Header nicht überschreiben konnte. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) von @gchust
- **[data-source-manager]** Problem behoben, bei dem einige Feldtypen nach dem Synchronisieren von Feldern aus der Datenbank nicht korrekt aktualisiert wurden ([#9046](https://github.com/nocobase/nocobase/pull/9046)) von @2013xile
- **[Notification manager]** Leistung beim Senden von In-App-Benachrichtigungen in Workflow-Szenarien optimiert ([#9066](https://github.com/nocobase/nocobase/pull/9066)) von @mytharcher
- **[Collection field: Code]** Benutzeroberfläche der Code-Felder korrigiert ([#9061](https://github.com/nocobase/nocobase/pull/9061)) von @2013xile
- **[Workflow: HTTP request node]** Ergebnisse des Workflow-Anfrageknotens bereinigt, um die Offenlegung der Anfragekonfiguration zu vermeiden, neue Knoten standardmäßig so eingestellt, dass nur Antwortdaten zurückgegeben werden, und Debug-Logging für fehlgeschlagene Anfragen hinzugefügt. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) von @mytharcher
- **[AI employees]**

  - Problem behoben, bei dem das Abbrechen der KI-Mitarbeiter-Schlussfolgerung zum Absturz des Dienstes führte ([#9031](https://github.com/nocobase/nocobase/pull/9031)) von @cgyrock
  - Fehler beim Hochladen von KI-Mitarbeiter-Dokumenten bei Unterpfad-Zugriff mit konfiguriertem APP_PUBLIC_PATH behoben. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) von @cgyrock
  - Problem bei Verwendung von Deepseek- oder MiniMax-Modellen auf dashscope behoben ([#9033](https://github.com/nocobase/nocobase/pull/9033)) von @cgyrock
