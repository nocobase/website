---
title: "Wöchentliche Updates｜Ermöglicht das Hinzufügen von KI-Mitarbeitern im Popup von Untertabellen"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 13. bis 19. März 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.19](https://www.nocobase.com/en/blog/v2.0.19)

*Veröffentlichungsdatum: 18.03.2026*

### 🚀 Verbesserungen

- **[Workflow]** Problem behoben, bei dem das ordnungsgemäße Herunterfahren nicht alle Ereignisse abarbeitete ([#8894](https://github.com/nocobase/nocobase/pull/8894)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[KI-Mitarbeiter]** Problem behoben, bei dem die angegebene URL für den LLM-Dienst bei Text-Embedding-Modellaufrufen nicht wirkte. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) von @cgyrock
- **[Aktion: Datensätze importieren Pro]** Problem behoben, bei dem das `beforeStop`-Ereignis in der Unter-App nicht ausgelöst wurde von @mytharcher

### [v2.0.18](https://www.nocobase.com/en/blog/v2.0.18)

*Veröffentlichungsdatum: 17.03.2026*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]**

  - Geplante Bereinigung von KI-Konversations-Checkpoint-Daten. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) von @cgyrock
  - Ermöglicht das Hinzufügen von KI-Mitarbeitern im Popup von Untertabellen ([#8873](https://github.com/nocobase/nocobase/pull/8873)) von @2013xile
- **[App-Supervisor]** Unterstützt Filterung in der Anwendungsliste<br />Bestätigungsdialoge für Start- und Stopp-Aktionen hinzugefügt<br />Anwendungsstatuseinträge nach Umgebungsname sortiert von @2013xile

### 🚀 Verbesserungen

- **[Server]** Verbesserung der pm add-Logik ([#8875](https://github.com/nocobase/nocobase/pull/8875)) von @chenos
- **[Client]** Unterstützt das Anzeigen einer Bestätigungsmeldung vor dem Schließen eines Popups. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) von @gchust
- **[Async-Task-Manager]** Asynchrone Aufgaben unterstützen nun das Senden von Fehlermeldungen durch Worker ([#8849](https://github.com/nocobase/nocobase/pull/8849)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem das Popup „Datensatz auswählen“ in der Untertabelle beim zweiten Öffnen nicht korrekt geladen wurde. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) von @gchust
- **[KI-Mitarbeiter]** Potenzielle Fehler durch undefinierte Variablen in KI-Plugin-Upgrade-Migrationsskripten behoben. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) von @cgyrock
- **[Aktion: Datensätze importieren Pro]** Problem behoben, bei dem asynchrone Aufgaben nach einem Fehler beim asynchronen Import nicht endeten von @cgyrock

### [v2.0.17](https://www.nocobase.com/en/blog/v2.0.17)

*Veröffentlichungsdatum: 14.03.2026*

### 🚀 Verbesserungen

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) von @gaston98765

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem die Standardwerte einiger Felder nach dem Aktualisieren der Seite nicht wirkten. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) von @gchust
- **[Datenbank]** Problem mit der serverseitigen Validierung von Datumsfeldern behoben ([#8867](https://github.com/nocobase/nocobase/pull/8867)) von @2013xile
- **[Lokalisierung]** localizationTexts:missing Schnittstellenberechtigungsausnahme ([#8861](https://github.com/nocobase/nocobase/pull/8861)) von @jiannx
- **[KI: Wissensdatenbank]** Verhindert das Löschen der verwendeten Vektordatenbank und des Vektorspeichers. von @cgyrock

### [v2.0.16](https://www.nocobase.com/en/blog/v2.0.16)

*Veröffentlichungsdatum: 12.03.2026*

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, dass verbindbare Felder beim Verknüpfen von Datenblöcken unter externen Datenquellen nicht angezeigt wurden ([#8848](https://github.com/nocobase/nocobase/pull/8848)) von @zhangzhonghe
  - Problem behoben, dass die Höhe des Tabellenblocks ungültig war ([#8842](https://github.com/nocobase/nocobase/pull/8842)) von @jiannx
  - Problem behoben, dass das Hinzufügen eines Datenblocks oder das Aktualisieren der Seite doppelte Aktualisierungen auslöste. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) von @gchust
- **[UI-Vorlagen]** Fehler behoben, die bei Verwendung der Bearbeitungsformularblock- und Detailblockvorlage auftraten. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) von @gchust
- **[Formularentwürfe]** Problem behoben, bei dem Formularentwurfsdaten verloren gingen, wenn das Popup mehrmals geöffnet wurde. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) von @gchust
- **[Lokalisierung]** Nicht gefundene Einträge werden im nicht-bearbeitbaren Zustand der Seite nicht übermittelt. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) von @jiannx
- **[Aktion: Datensätze importieren Pro]** Problem behoben, dass bei doppelten Feldern in der Importkonfiguration keine Mehrfachauswahl möglich war. von @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.9](https://www.nocobase.com/en/blog/v2.1.0-beta.9)

*Veröffentlichungsdatum: 12.03.2026*

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, dass die Höhe des Tabellenblocks ungültig war ([#8842](https://github.com/nocobase/nocobase/pull/8842)) von @jiannx
  - Problem behoben, dass das Hinzufügen eines Datenblocks oder das Aktualisieren der Seite doppelte Aktualisierungen auslöste. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) von @gchust
  - Problem behoben, dass verbindbare Felder beim Verknüpfen von Datenblöcken unter externen Datenquellen nicht angezeigt wurden ([#8848](https://github.com/nocobase/nocobase/pull/8848)) von @zhangzhonghe
- **[UI-Vorlagen]** Fehler behoben, die bei Verwendung der Bearbeitungsformularblock- und Detailblockvorlage auftraten. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) von @gchust
- **[Formularentwürfe]** Problem behoben, bei dem Formularentwurfsdaten verloren gingen, wenn das Popup mehrmals geöffnet wurde. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) von @gchust
- **[Lokalisierung]** Nicht gefundene Einträge werden im nicht-bearbeitbaren Zustand der Seite nicht übermittelt. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) von @jiannx
- **[Aktion: Datensätze importieren Pro]** Problem behoben, dass bei doppelten Feldern in der Importkonfiguration keine Mehrfachauswahl möglich war. von @jiannx
- **[E-Mail-Manager]** Anpassungen bei Antwort- und Allen-Antworten-Empfängern, Problem mit fehlgeschlagenem Hinzufügen von Tabellenfeldern und andere Probleme behoben von @jiannx
- **[Migrationsmanager]** Problem behoben, dass Systemtabellen in benutzerdefinierten Regeln nicht ausgewählt werden konnten von @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.9](https://www.nocobase.com/en/blog/v2.1.0-alpha.9)

*Veröffentlichungsdatum: 14.03.2026*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Ermöglicht das Hinzufügen von KI-Mitarbeitern im Popup von Untertabellen ([#8873](https://github.com/nocobase/nocobase/pull/8873)) von @2013xile
- **[KI: MCP-Server]** Neues MCP-Server-Plugin hinzugefügt, um NocoBase-Systeme zu erstellen und Geschäftsabläufe zu unterstützen. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) von @2013xile

### 🚀 Verbesserungen

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) von @gaston98765

### 🐛 Fehlerbehebungen

- **[Datenbank]** Problem mit der serverseitigen Validierung von Datumsfeldern behoben ([#8867](https://github.com/nocobase/nocobase/pull/8867)) von @2013xile
- **[Client]**

  - Problem behoben, dass verbindbare Felder beim Verknüpfen von Datenblöcken unter externen Datenquellen nicht angezeigt wurden ([#8848](https://github.com/nocobase/nocobase/pull/8848)) von @zhangzhonghe
  - Problem behoben, dass das Hinzufügen eines Datenblocks oder das Aktualisieren der Seite doppelte Aktualisierungen auslöste. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) von @gchust
  - Problem behoben, bei dem die Standardwerte einiger Felder nach dem Aktualisieren der Seite nicht wirkten. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) von @gchust
  - Problem behoben, dass die Höhe des Tabellenblocks ungültig war ([#8842](https://github.com/nocobase/nocobase/pull/8842)) von @jiannx
- **[Lokalisierung]**

  - localizationTexts:missing Schnittstellenberechtigungsausnahme ([#8861](https://github.com/nocobase/nocobase/pull/8861)) von @jiannx
  - Nicht gefundene Einträge werden im nicht-bearbeitbaren Zustand der Seite nicht übermittelt. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) von @jiannx
- **[Formularentwürfe]** Problem behoben, bei dem Formularentwurfsdaten verloren gingen, wenn das Popup mehrmals geöffnet wurde. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) von @gchust
- **[UI-Vorlagen]** Fehler behoben, die bei Verwendung der Bearbeitungsformularblock- und Detailblockvorlage auftraten. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) von @gchust
- **[KI: Wissensdatenbank]** Verhindert das Löschen der verwendeten Vektordatenbank und des Vektorspeichers. von @cgyrock
- **[Aktion: Datensätze importieren Pro]** Problem behoben, dass bei doppelten Feldern in der Importkonfiguration keine Mehrfachauswahl möglich war. von @jiannx
- **[E-Mail-Manager]** Anpassungen bei Antwort- und Allen-Antworten-Empfängern, Problem mit fehlgeschlagenem Hinzufügen von Tabellenfeldern und andere Probleme behoben von @jiannx
- **[Migrationsmanager]** Problem behoben, dass Systemtabellen in benutzerdefinierten Regeln nicht ausgewählt werden konnten von @cgyrock
