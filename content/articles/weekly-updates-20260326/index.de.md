---
title: "Wöchentliche Updates｜KI-Mitarbeiter erhalten SKILLS-Funktion"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 20. bis 26. März 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.26](https://www.nocobase.com/en/blog/v2.0.26)

*Veröffentlichungsdatum: 25.03.2026*

### 🚀 Verbesserungen

- **[client]** Optimierung des horizontalen Layouts von Formularaktionen ([#8869](https://github.com/nocobase/nocobase/pull/8869)) von @jiannx

### 🐛 Fehlerbehebungen

- **[flow-engine]** Synchronisiere den Status mit der Feldkonfiguration, wenn ein Formularfeld gelöscht wird ([#8857](https://github.com/nocobase/nocobase/pull/8857)) von @jiannx
- **[Custom variables]** Überspringe auth-Benachrichtigung ([#8942](https://github.com/nocobase/nocobase/pull/8942)) von @chenos

### [v2.0.25](https://www.nocobase.com/en/blog/v2.0.25)

*Veröffentlichungsdatum: 24.03.2026*

### 🚀 Verbesserungen

- **[Workflow: Approval]** Behebung von Leistungsproblemen durch JSON-Felder beim Laden der Genehmigungsdatensatzliste von @mytharcher

### 🐛 Fehlerbehebungen

- **[server]** Ändere den Schließzeitpunkt von Pub-Sub auf `beforeStop`, um zu vermeiden, dass Nachrichten nach dem Schließen der Datenbank gesendet oder verarbeitet werden ([#8934](https://github.com/nocobase/nocobase/pull/8934)) von @mytharcher
- **[Localization]** Verhindere `localizationTexts:missing`-Anfragen bei verweigerter Berechtigung ([#8903](https://github.com/nocobase/nocobase/pull/8903)) von @chenos
- **[Data source: External Oracle]** Behebung eines Fehlers beim Laden der externen Oracle-Datenquelle von @2013xile

### [v2.0.24](https://www.nocobase.com/en/blog/v2.0.24)

*Veröffentlichungsdatum: 22.03.2026*

### 🐛 Fehlerbehebungen

- **[resourcer]** Behebung eines Problems, bei dem externe Datenquellen nicht korrekt geladen werden. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) von @2013xile
- **[Action: Import records Pro]** Behebung des Problems, dass die Option "Workflow auslösen" nicht funktioniert, wenn sie nicht aktiviert ist von @mytharcher

### [v2.0.23](https://www.nocobase.com/en/blog/v2.0.23)

*Veröffentlichungsdatum: 21.03.2026*

### 🐛 Fehlerbehebungen

- **[database]** Verwende eine Warnung anstelle eines Fehlers, wenn einer der `appends`-Parameter ungültig ist ([#8923](https://github.com/nocobase/nocobase/pull/8923)) von @mytharcher
- **[Workflow: Approval]** Behebung von Übersetzungs-, Knotenauswahl- und Rückgabeziel-Problemen im v2-Genehmigungsformular-Rückgabebutton von @zhangzhonghe

### [v2.0.22](https://www.nocobase.com/en/blog/v2.0.22)

*Veröffentlichungsdatum: 20.03.2026*

### 🐛 Fehlerbehebungen

- **[Migration manager]** Behebung des Problems, dass die Migration aufgrund eines Fehlers unterbrochen wird, der dadurch verursacht wird, dass die Zielumgebung die während des Upload-Migrationsprozesses erstellte neue Tabelle nicht hat. von @Andrew1989Y

### [v2.0.21](https://www.nocobase.com/en/blog/v2.0.21)

*Veröffentlichungsdatum: 20.03.2026*

### 🚀 Verbesserungen

- **[Workflow]** Filterausführungsliste hinzugefügt ([#8914](https://github.com/nocobase/nocobase/pull/8914)) von @mytharcher
- **[Workflow: Approval]** Vermeide die Konfiguration der Genehmiger-Oberfläche, wenn im Trigger keine Sammlung konfiguriert ist von @mytharcher

### 🐛 Fehlerbehebungen

- **[resourcer]** Verhindere, dass das `filterByTk`-Parameter-Array automatisch in ein Objekt umgewandelt wird, wenn es 100 Elemente überschreitet ([#8908](https://github.com/nocobase/nocobase/pull/8908)) von @2013xile
- **[client]** Behebung des Problems, dass Nicht-Administratoren keine zugehörigen Feldwerte löschen können ([#8904](https://github.com/nocobase/nocobase/pull/8904)) von @jiannx
- **[Action: Import records Pro]**

  - Behebung des Problems, dass ein Fehler beim Import im synchronen Modus ausgelöst wird von @mytharcher
  - Behebung des Problems, dass mehr als ~30 Spalten einen Importfehler verursachen, da der Stream doppelt gelesen wurde von @mytharcher
- **[Workflow: Approval]** Behebung von Parallelitätsproblemen beim Hinzufügen von Bearbeitern von @mytharcher

### [v2.0.20](https://www.nocobase.com/en/blog/v2.0.20)

*Veröffentlichungsdatum: 19.03.2026*

### 🐛 Fehlerbehebungen

- **[server]** Behebung des Problems, dass vom Worker gesendete Lebenszyklus-Ereignisse zum Stoppen der bereitstellenden App führen ([#8906](https://github.com/nocobase/nocobase/pull/8906)) von @mytharcher
- **[Data source manager]** Behebung des Problems, dass von KI-Mitarbeitern erstellte Sammlungen immer die Felder `createBy` und `updateBy` vermissen ([#8895](https://github.com/nocobase/nocobase/pull/8895)) von @cgyrock
- **[Action: Import records Pro]** Behebung von SES-Fehlern durch verzögerten Import von @mytharcher
- **[Template print]** Behebung von SQL-Sammlungsdruckfehlern von @jiannx
- **[Email manager]** Behebung von Seitenfehlern, wenn die E-Mail nicht existiert von @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.11](https://www.nocobase.com/en/blog/v2.1.0-beta.11)

*Veröffentlichungsdatum: 20.03.2026*

### 🚀 Verbesserungen

- **[Workflow]** Filterausführungsliste hinzugefügt ([#8914](https://github.com/nocobase/nocobase/pull/8914)) von @mytharcher
- **[Workflow: Approval]** Vermeide die Konfiguration der Genehmiger-Oberfläche, wenn im Trigger keine Sammlung konfiguriert ist von @mytharcher

### 🐛 Fehlerbehebungen

- **[server]** Behebung des Problems, dass vom Worker gesendete Lebenszyklus-Ereignisse zum Stoppen der bereitstellenden App führen ([#8906](https://github.com/nocobase/nocobase/pull/8906)) von @mytharcher
- **[client]** Behebung des Problems, dass Nicht-Administratoren keine zugehörigen Feldwerte löschen können ([#8904](https://github.com/nocobase/nocobase/pull/8904)) von @jiannx
- **[resourcer]** Verhindere, dass das `filterByTk`-Parameter-Array automatisch in ein Objekt umgewandelt wird, wenn es 100 Elemente überschreitet ([#8908](https://github.com/nocobase/nocobase/pull/8908)) von @2013xile
- **[Action: Import records Pro]**

  - Behebung des Problems, dass ein Fehler beim Import im synchronen Modus ausgelöst wird von @mytharcher
  - Behebung des Problems, dass mehr als ~30 Spalten einen Importfehler verursachen, da der Stream doppelt gelesen wurde von @mytharcher
- **[Workflow: Approval]** Behebung von Parallelitätsproblemen beim Hinzufügen von Bearbeitern von @mytharcher
- **[Migration manager]** Behebung des Problems, dass die Migration aufgrund eines Fehlers unterbrochen wird, der dadurch verursacht wird, dass die Zielumgebung die während des Upload-Migrationsprozesses erstellte neue Tabelle nicht hat. von @Andrew1989Y

### [v2.1.0-beta.10](https://www.nocobase.com/en/blog/v2.1.0-beta.10)

*Veröffentlichungsdatum: 19.03.2026*

### 🎉 Neue Funktionen

- **[AI employees]**

  - Ermöglicht das Hinzufügen von KI-Mitarbeitern in Popups von Untertabellen ([#8873](https://github.com/nocobase/nocobase/pull/8873)) von @2013xile
  - Geplante Bereinigung von KI-Konversations-Checkpoint-Daten. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) von @cgyrock
- **[App supervisor]** Unterstützung der Filterung in der Anwendungsliste<br />Bestätigungsdialoge für Start- und Stopp-Aktionen hinzugefügt<br />Sortierung der Anwendungsstatuseinträge nach Umgebungsname von @2013xile

### 🚀 Verbesserungen

- **[server]** Verbesserung der pm-add-Logik ([#8875](https://github.com/nocobase/nocobase/pull/8875)) von @chenos
- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) von @gaston98765
- **[client]** Unterstützung der Anzeige einer Bestätigungsmeldung vor dem Schließen von Popups. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) von @gchust
- **[Workflow]** Behebung des Problems, dass beim ordnungsgemäßen Herunterfahren nicht alle Ereignisse abgearbeitet werden ([#8894](https://github.com/nocobase/nocobase/pull/8894)) von @mytharcher
- **[Async task manager]** Asynchrone Aufgaben wurden erweitert, um Worker beim Senden von Fehlermeldungen zu unterstützen ([#8849](https://github.com/nocobase/nocobase/pull/8849)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebung des Problems, dass das Popup "Datensatz auswählen" in der Untertabelle beim zweiten Öffnen nicht korrekt geladen wurde. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) von @gchust
  - Behebung des Problems, dass die Standardwerte einiger Felder nach dem Aktualisieren der Seite nicht wirksam wurden. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) von @gchust
- **[database]** Behebung des serverseitigen Validierungsproblems für Datumsfelder ([#8867](https://github.com/nocobase/nocobase/pull/8867)) von @2013xile
- **[Data source manager]** Behebung des Problems, dass von KI-Mitarbeitern erstellte Sammlungen immer die Felder `createBy` und `updateBy` vermissen ([#8895](https://github.com/nocobase/nocobase/pull/8895)) von @cgyrock
- **[AI employees]**

  - Behebung des Problems, dass die angegebene URL für den LLM-Dienst bei Aufrufen von Text-Einbettungsmodellen nicht wirksam wird. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) von @cgyrock
  - Behebung potenzieller Fehler durch undefinierte Variablen in KI-Plugin-Upgrade-Migrationsskripten. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) von @cgyrock
- **[Localization]** Berechtigungsausnahme für `localizationTexts:missing`-Schnittstelle ([#8861](https://github.com/nocobase/nocobase/pull/8861)) von @jiannx
- **[Action: Import records Pro]**

  - Behebung, dass das `beforeStop`-Ereignis in der Unter-App nicht ausgelöst wurde von @mytharcher
  - Behebung von SES-Fehlern durch verzögerten Import von @mytharcher
  - Behebung des Problems, dass asynchrone Aufgaben nach einem Fehler beim asynchronen Import nicht enden von @cgyrock
- **[AI: Knowledge base]** Verhindere, dass die verwendete Vektordatenbank und der Vektorspeicher gelöscht werden. von @cgyrock
- **[Template print]** Behebung von SQL-Sammlungsdruckfehlern von @jiannx
- **[Email manager]** Behebung von Seitenfehlern, wenn die E-Mail nicht existiert von @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.11](https://www.nocobase.com/en/blog/v2.1.0-alpha.11)

*Veröffentlichungsdatum: 25.03.2026*

### 🎉 Neue Funktionen

- **[client]** JS-Element-Aktion hinzugefügt ([#8911](https://github.com/nocobase/nocobase/pull/8911)) von @jiannx
- **[AI employees]** Fähigkeit SKILLS für KI-Mitarbeiter hinzugefügt. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) von @cgyrock
- **[Data source manager]** Unterstützung des bedarfsgesteuerten Ladens von MCP-Tools ([#8936](https://github.com/nocobase/nocobase/pull/8936)) von @2013xile

### 🚀 Verbesserungen

- **[flow-engine]** Verbesserung der Schema-Validierung für die UI-Erstellungs-API. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) von @gchust
- **[client]** Optimierung des horizontalen Layouts von Formularaktionen ([#8869](https://github.com/nocobase/nocobase/pull/8869)) von @jiannx
- **[app]** Hinzufügen eines Rsbuild-basierten Entwicklungs-Workflows für client-v1 bei gleichzeitiger Kompatibilität der lokalen Plugin-Entwicklung und der aktuellen `/v2/`-Topologie ([#8902](https://github.com/nocobase/nocobase/pull/8902)) von @Molunerfinn
- **[Collection field: administrative divisions of China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) von @jiannx
- **[Workflow]** Validierung für alle Trigger und Knoten hinzugefügt ([#8930](https://github.com/nocobase/nocobase/pull/8930)) von @mytharcher
- **[Workflow: Approval]** Behebung von Leistungsproblemen durch JSON-Felder beim Laden der Genehmigungsdatensatzliste von @mytharcher

### 🐛 Fehlerbehebungen

- **[flow-engine]** Synchronisiere den Status mit der Feldkonfiguration, wenn ein Formularfeld gelöscht wird ([#8857](https://github.com/nocobase/nocobase/pull/8857)) von @jiannx
- **[resourcer]** Behebung eines Problems, bei dem externe Datenquellen nicht korrekt geladen werden. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) von @2013xile
- **[database]** Verwende eine Warnung anstelle eines Fehlers, wenn einer der `appends`-Parameter ungültig ist ([#8923](https://github.com/nocobase/nocobase/pull/8923)) von @mytharcher
- **[server]** Ändere den Schließzeitpunkt von Pub-Sub auf `beforeStop`, um zu vermeiden, dass Nachrichten nach dem Schließen der Datenbank gesendet oder verarbeitet werden ([#8934](https://github.com/nocobase/nocobase/pull/8934)) von @mytharcher
- **[Custom variables]** Überspringe auth-Benachrichtigung ([#8942](https://github.com/nocobase/nocobase/pull/8942)) von @chenos
- **[AI employees]** Behebung fehlgeschlagener Testfälle im KI-Modul des Kernpakets. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) von @cgyrock
- **[Localization]** Verhindere `localizationTexts:missing`-Anfragen bei verweigerter Berechtigung ([#8903](https://github.com/nocobase/nocobase/pull/8903)) von @chenos
- **[Action: Import records Pro]** Behebung des Problems, dass die Option "Workflow auslösen" nicht funktioniert, wenn sie nicht aktiviert ist von @mytharcher
- **[Data source: External Oracle]** Behebung eines Fehlers beim Laden der externen Oracle-Datenquelle von @2013xile
- **[Workflow: Approval]** Behebung von Übersetzungs-, Knotenauswahl- und Rückgabeziel-Problemen im v2-Genehmigungsformular-Rückgabebutton von @zhangzhonghe

### [v2.1.0-alpha.10](https://www.nocobase.com/en/blog/v2.1.0-alpha.10)

*Veröffentlichungsdatum: 20.03.2026*

### 🎉 Neue Funktionen

- **[IdP: OAuth]** Neues IdP: OAuth-Plugin hinzugefügt, um MCP-Diensten die Authentifizierung über OAuth zu ermöglichen ([#8896](https://github.com/nocobase/nocobase/pull/8896)) von @2013xile
- **[AI employees]** Geplante Bereinigung von KI-Konversations-Checkpoint-Daten. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) von @cgyrock
- **[App supervisor]** Unterstützung der Filterung in der Anwendungsliste<br />Bestätigungsdialoge für Start- und Stopp-Aktionen hinzugefügt<br />Sortierung der Anwendungsstatuseinträge nach Umgebungsname von @2013xile

### 🚀 Verbesserungen

- **[server]** Verbesserung der pm-add-Logik ([#8875](https://github.com/nocobase/nocobase/pull/8875)) von @chenos
- **[client]** Unterstützung der Anzeige einer Bestätigungsmeldung vor dem Schließen von Popups. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) von @gchust
- **[undefined]** Dedizierten client-v2-Eintrag hinzugefügt und unabhängig mit rsbuild erstellt, während v1 unverändert bleibt. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) von @Molunerfinn
- **[Workflow]**

  - Behebung des Problems, dass beim ordnungsgemäßen Herunterfahren nicht alle Ereignisse abgearbeitet werden ([#8894](https://github.com/nocobase/nocobase/pull/8894)) von @mytharcher
  - Filterausführungsliste hinzugefügt ([#8914](https://github.com/nocobase/nocobase/pull/8914)) von @mytharcher
- **[Async task manager]** Asynchrone Aufgaben wurden erweitert, um Worker beim Senden von Fehlermeldungen zu unterstützen ([#8849](https://github.com/nocobase/nocobase/pull/8849)) von @cgyrock
- **[Workflow: Approval]** Vermeide die Konfiguration der Genehmiger-Oberfläche, wenn im Trigger keine Sammlung konfiguriert ist von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebung des Problems, dass Nicht-Administratoren keine zugehörigen Feldwerte löschen können ([#8904](https://github.com/nocobase/nocobase/pull/8904)) von @jiannx
  - Behebung des Problems, dass das Popup "Datensatz auswählen" in der Untertabelle beim zweiten Öffnen nicht korrekt geladen wurde. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) von @gchust
- **[resourcer]** Verhindere, dass das `filterByTk`-Parameter-Array automatisch in ein Objekt umgewandelt wird, wenn es 100 Elemente überschreitet ([#8908](https://github.com/nocobase/nocobase/pull/8908)) von @2013xile
- **[server]** Behebung des Problems, dass vom Worker gesendete Lebenszyklus-Ereignisse zum Stoppen der bereitstellenden App führen ([#8906](https://github.com/nocobase/nocobase/pull/8906)) von @mytharcher
- **[Data source manager]** Behebung des Problems, dass von KI-Mitarbeitern erstellte Sammlungen immer die Felder `createBy` und `updateBy` vermissen ([#8895](https://github.com/nocobase/nocobase/pull/8895)) von @cgyrock
- **[AI employees]**

  - Behebung des Problems, dass die angegebene URL für den LLM-Dienst bei Aufrufen von Text-Einbettungsmodellen nicht wirksam wird. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) von @cgyrock
  - Behebung potenzieller Fehler durch undefinierte Variablen in KI-Plugin-Upgrade-Migrationsskripten. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) von @cgyrock
- **[Action: Import records Pro]**

  - Behebung des Problems, dass mehr als ~30 Spalten einen Importfehler verursachen, da der Stream doppelt gelesen wurde von @mytharcher
  - Behebung des Problems, dass ein Fehler beim Import im synchronen Modus ausgelöst wird von @mytharcher
  - Behebung, dass das `beforeStop`-Ereignis in der Unter-App nicht ausgelöst wurde von @mytharcher
  - Behebung des Problems, dass asynchrone Aufgaben nach einem Fehler beim asynchronen Import nicht enden von @cgyrock
  - Behebung von SES-Fehlern durch verzögerten Import von @mytharcher
- **[Template print]** Behebung von SQL-Sammlungsdruckfehlern von @jiannx
- **[Workflow: Approval]** Behebung von Parallelitätsproblemen beim Hinzufügen von Bearbeitern von @mytharcher
- **[Email manager]** Behebung von Seitenfehlern, wenn die E-Mail nicht existiert von @jiannx
- **[Migration manager]** Behebung des Problems, dass die Migration aufgrund eines Fehlers unterbrochen wird, der dadurch verursacht wird, dass die Zielumgebung die während des Upload-Migrationsprozesses erstellte neue Tabelle nicht hat. von @Andrew1989Y
