---
title: "Wöchentliche Updates｜LLM-basiertes Websuch-Tool für KI-Mitarbeiter hinzugefügt"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 3. bis 9. April 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit in drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein. Hauptsächlich für die interne Entwicklung und schnelle Iterationen gedacht. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.34](https://www.nocobase.com/en/blog/v2.0.34)

*Veröffentlichungsdatum: 09.04.2026*

### 🎉 Neue Funktionen

- **[Migrationsmanager]** Unterstützung für Migrationsbefehle von @chenos

### [v2.0.33](https://www.nocobase.com/en/blog/v2.0.33)

*Veröffentlichungsdatum: 08.04.2026*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Hinzufügen eines LLM-basierten Websuch-Tools für KI-Mitarbeiter ([#9032](https://github.com/nocobase/nocobase/pull/9032)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**

  - Ein Problem behoben, bei dem eine falsche Bestätigungsmeldung für nicht gespeicherte Änderungen bei der Sammelbearbeitungsaktion erschien ([#9054](https://github.com/nocobase/nocobase/pull/9054)) von @gchust
  - Ein Problem behoben, bei dem ein falsches sekundäres Bestätigungs-Popup beim Absenden des Formulars nach dem Erstellen eines Datensatzes über eine Popup-Untertabelle erschien. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) von @gchust
- **[Datenquellen-Manager]** Ein Problem behoben, bei dem einige Feldtypen nach dem Synchronisieren von Feldern aus der Datenbank nicht korrekt aktualisiert wurden ([#9046](https://github.com/nocobase/nocobase/pull/9046)) von @2013xile
- **[KI-Mitarbeiter]** Fehler beim Hochladen von KI-Mitarbeiterdokumenten bei Unterpfad-Zugriff mit konfiguriertem APP_PUBLIC_PATH behoben. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) von @cgyrock

### [v2.0.32](https://www.nocobase.com/en/blog/v2.0.32)

*Veröffentlichungsdatum: 04.04.2026*

### 🚀 Verbesserungen

- **[undefined]** Inhaltsverzeichnis zur README hinzugefügt ([#8878](https://github.com/nocobase/nocobase/pull/8878)) von @gaston98765

### 🐛 Fehlerbehebungen

- **[Client]**

  - Speichern des Beziehungsfelds im Unterformular fehlgeschlagen ([#9004](https://github.com/nocobase/nocobase/pull/9004)) von @jiannx
  - Die Unterformulare der Felder zeigen keine Daten an ([#9008](https://github.com/nocobase/nocobase/pull/9008)) von @jiannx
  - Problem behoben, bei dem ctx.request den Authorization-Header nicht überschreiben konnte. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) von @gchust
- **[Server]** Serving-Prüfung hinzugefügt, um zu verhindern, dass der App-Status von einer Nicht-Serving-Instanz aktualisiert wird ([#8959](https://github.com/nocobase/nocobase/pull/8959)) von @mytharcher
- **[KI-Mitarbeiter]**

  - Problem bei Verwendung von DeepSeek- oder MinMax-Modellen auf DashScope behoben ([#9033](https://github.com/nocobase/nocobase/pull/9033)) von @cgyrock
  - Problem behoben, bei dem das Abbrechen der Argumentation von KI-Mitarbeitern zum Absturz des Dienstes führte ([#9031](https://github.com/nocobase/nocobase/pull/9031)) von @cgyrock
- **[Workflow: HTTP-Anfrage-Knoten]** Ergebnisse des Workflow-Anfrageknotens bereinigt, um die Offenlegung der Anfragekonfiguration zu vermeiden. Neue Knoten geben standardmäßig nur Antwortdaten zurück. Debug-Logging für fehlgeschlagene Anfragen hinzugefügt. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) von @mytharcher
- **[Sammlungsfeld: Sortierung]** fix(field-sort): Absturz verhindert, wenn das scopeKey-Attribut undefiniert ist ([#9019](https://github.com/nocobase/nocobase/pull/9019)) von @gaston98765
- **[Block: GridCard]** Problem behoben, dass die Schaltfläche beim Aktualisieren der Grid-Karte nicht aktualisiert wurde ([#9021](https://github.com/nocobase/nocobase/pull/9021)) von @jiannx
- **[Workflow: Genehmigung]**

  - Fehlertoleranz beim Löschen des Workflows hinzugefügt, um Ladefehler in der Aufgabenliste zu vermeiden von @mytharcher
  - Fehlertoleranz für fehlendes `latestRound` hinzugefügt von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.13](https://www.nocobase.com/en/blog/v2.1.0-beta.13)

*Veröffentlichungsdatum: 09.04.2026*

### 🎉 Neue Funktionen

- **[Migrationsmanager]** Unterstützung für Migrationsbefehle von @chenos

### [v2.1.0-beta.12](https://www.nocobase.com/en/blog/v2.1.0-beta.12)

*Veröffentlichungsdatum: 08.04.2026*

### 🎉 Neue Funktionen

- **[Client]**

  - JS-Variablen zum Ereignisablauf hinzugefügt ([#8938](https://github.com/nocobase/nocobase/pull/8938)) von @jiannx
  - JS-Element-Aktion hinzugefügt ([#8911](https://github.com/nocobase/nocobase/pull/8911)) von @jiannx
- **[KI-Mitarbeiter]** Hinzufügen eines LLM-basierten Websuch-Tools für KI-Mitarbeiter ([#9032](https://github.com/nocobase/nocobase/pull/9032)) von @cgyrock

### 🚀 Verbesserungen

- **[undefined]**

  - Inhaltsverzeichnis zur README hinzugefügt ([#8878](https://github.com/nocobase/nocobase/pull/8878)) von @gaston98765
  - Reduziertes Log-Rauschen beim Serverstart durch Unterdrückung von Entpack-Befehlen für LibreOffice und Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) von @Rishabh1925
- **[Client]**

  - Unterstützung zum Setzen von Feldstilen über runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) von @jiannx
  - Optimierung des horizontalen Layouts von Formularaktionen ([#8869](https://github.com/nocobase/nocobase/pull/8869)) von @jiannx
- **[Workflow: JavaScript]** `isolated-vm` als standardmäßige JavaScript-Ausführungs-Engine für den JavaScript-Knoten hinzugefügt ([#8973](https://github.com/nocobase/nocobase/pull/8973)) von @mytharcher
  Referenz: [JavaScript-Knoten](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[Workflow]**

  - Größe des Aktivierungs-Schalters auf klein geändert ([#9010](https://github.com/nocobase/nocobase/pull/9010)) von @mytharcher
  - Variable für den Seitenparameter hinzugefügt ([#8951](https://github.com/nocobase/nocobase/pull/8951)) von @mytharcher
- **[KI-Mitarbeiter]** Optimierung der Prompts für DeepSeek bei der Verarbeitung nicht unterstützter Dateitypen ([#9003](https://github.com/nocobase/nocobase/pull/9003)) von @cgyrock
- **[Aktion: Benutzerdefinierte Anfrage]** Aktionsmodelle für benutzerdefinierte Anfragen hinzugefügt ([#8890](https://github.com/nocobase/nocobase/pull/8890)) von @jiannx
- **[Sammlungsfeld: Administrative Gliederung Chinas]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) von @jiannx
- **[Workflow: Unterworkflow]** Defensive Logik hinzugefügt, um Workflow-Hänger bei Auftreten einer Ausnahme zu vermeiden von @mytharcher
- **[Workflow: Genehmigung]** Problem behoben, bei dem ein JSON-Feld zu Leistungsproblemen beim Laden der Genehmigungsprotokollliste führte von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Ein Problem behoben, bei dem eine falsche Bestätigungsmeldung für nicht gespeicherte Änderungen bei der Sammelbearbeitungsaktion erschien ([#9054](https://github.com/nocobase/nocobase/pull/9054)) von @gchust
  - Ein Problem behoben, bei dem ein falsches sekundäres Bestätigungs-Popup beim Absenden des Formulars nach dem Erstellen eines Datensatzes über eine Popup-Untertabelle erschien. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) von @gchust
  - Problem behoben, bei dem ctx.request den Authorization-Header nicht überschreiben konnte. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) von @gchust
  - Speichern des Beziehungsfelds im Unterformular fehlgeschlagen ([#9004](https://github.com/nocobase/nocobase/pull/9004)) von @jiannx
  - Die Unterformulare der Felder zeigen keine Daten an ([#9008](https://github.com/nocobase/nocobase/pull/9008)) von @jiannx
  - Problem behoben, bei dem die Kopie der zugehörigen Felder in der Tabelle beim ersten Rendern nicht korrekt angezeigt wurde. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) von @jiannx
  - Falsche sekundäre Bestätigungsmeldung beim Schließen eines mehrstufigen Popups nach Änderung von Formulardaten behoben. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) von @gchust
  - Problem behoben, bei dem Leerzeichen im Variablenausdruck dazu führten, dass die Bezeichnung nicht angezeigt wurde ([#8988](https://github.com/nocobase/nocobase/pull/8988)) von @mytharcher
  - Ausnahme beim Hinzufügen von untergeordneten Knoten zur Baumtabelle im Popup-Fenster behoben ([#8872](https://github.com/nocobase/nocobase/pull/8872)) von @jiannx
- **[Datenquellen-Manager]** Ein Problem behoben, bei dem einige Feldtypen nach dem Synchronisieren von Feldern aus der Datenbank nicht korrekt aktualisiert wurden ([#9046](https://github.com/nocobase/nocobase/pull/9046)) von @2013xile
- **[Server]**

  - Serving-Prüfung hinzugefügt, um zu verhindern, dass der App-Status von einer Nicht-Serving-Instanz aktualisiert wird ([#8959](https://github.com/nocobase/nocobase/pull/8959)) von @mytharcher
  - Vermeidung der Verarbeitung von Sync-Nachrichten nach dem Stoppen der App ([#8940](https://github.com/nocobase/nocobase/pull/8940)) von @mytharcher
  - Schließzeitpunkt von Pub-Sub auf `beforeStop` geändert, um zu vermeiden, dass Nachrichten nach dem Schließen der Datenbank gesendet oder verarbeitet werden ([#8934](https://github.com/nocobase/nocobase/pull/8934)) von @mytharcher
- **[Flow-Engine]**

  - Abgeschnittene Einstellungsmenüs im Popup behoben ([#9005](https://github.com/nocobase/nocobase/pull/9005)) von @gchust
  - Ein Problem behoben, bei dem Menüpunkte nicht ausgewählt werden konnten, wenn die UI-Komponentenbreite im Konfigurationszustand zu klein war. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) von @gchust
  - JS-Snippets zum Setzen von Formularelementen und Detail-Elementen hinzugefügt ([#8974](https://github.com/nocobase/nocobase/pull/8974)) von @jiannx
  - Status mit Feldkonfiguration synchronisiert, wenn ein Formularfeld gelöscht wird ([#8857](https://github.com/nocobase/nocobase/pull/8857)) von @jiannx
- **[Datenbank]** Warnung anstelle von Fehler verwenden, wenn einer der Append-Parameter ungültig ist ([#8923](https://github.com/nocobase/nocobase/pull/8923)) von @mytharcher
- **[Resourcer]** Ein Problem behoben, bei dem externe Datenquellen nicht korrekt geladen werden. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) von @2013xile
- **[KI-Mitarbeiter]**

  - Fehler beim Hochladen von KI-Mitarbeiterdokumenten bei Unterpfad-Zugriff mit konfiguriertem APP_PUBLIC_PATH behoben. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) von @cgyrock
  - Problem bei Verwendung von DeepSeek- oder MinMax-Modellen auf DashScope behoben ([#9033](https://github.com/nocobase/nocobase/pull/9033)) von @cgyrock
  - Problem behoben, bei dem das Abbrechen der Argumentation von KI-Mitarbeitern zum Absturz des Dienstes führte ([#9031](https://github.com/nocobase/nocobase/pull/9031)) von @cgyrock
  - Problem mit abnormalem Websuchverhalten bei Verwendung des Qwen-LLM behoben ([#9012](https://github.com/nocobase/nocobase/pull/9012)) von @cgyrock
  - Eigentümerüberprüfung zur KI-Konversations-API hinzugefügt ([#8993](https://github.com/nocobase/nocobase/pull/8993)) von @cgyrock
  - Abstand zwischen den Tool-Karten-Komponenten in der KI-Konversation angepasst ([#8965](https://github.com/nocobase/nocobase/pull/8965)) von @cgyrock
- **[Workflow: HTTP-Anfrage-Knoten]** Ergebnisse des Workflow-Anfrageknotens bereinigt, um die Offenlegung der Anfragekonfiguration zu vermeiden. Neue Knoten geben standardmäßig nur Antwortdaten zurück. Debug-Logging für fehlgeschlagene Anfragen hinzugefügt. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) von @mytharcher
- **[Sammlungsfeld: Sortierung]** fix(field-sort): Absturz verhindert, wenn das scopeKey-Attribut undefiniert ist ([#9019](https://github.com/nocobase/nocobase/pull/9019)) von @gaston98765
- **[Block: GridCard]** Problem behoben, dass die Schaltfläche beim Aktualisieren der Grid-Karte nicht aktualisiert wurde ([#9021](https://github.com/nocobase/nocobase/pull/9021)) von @jiannx
- **[Benachrichtigung: In-App-Nachricht]** Aktions-Whitelist für In-App-Nachrichtenaktualisierungen behoben, um unbefugte Aktualisierungen durch Nicht-Eigentümer zu verhindern. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) von @mytharcher
- **[Workflow: SQL-Knoten]** Sicherheitsproblem im SQL-Knoten behoben ([#8989](https://github.com/nocobase/nocobase/pull/8989)) von @mytharcher
- **[Datenvisualisierung]**

  - Bei Verwendung von variablenbasierten Filtern können Diagramme die Variablenwerte beim ersten Rendern nicht korrekt auflösen ([#8964](https://github.com/nocobase/nocobase/pull/8964)) von @2013xile
  - Anormale Datenstatistik des Root-Rollen-Diagramms nach Aktivierung des Space-Plugins behoben ([#8969](https://github.com/nocobase/nocobase/pull/8969)) von @jiannx
- **[Aktion: Datensätze importieren]** Problem des Importfehlers nach dem Öffnen von plugin-space behoben ([#8968](https://github.com/nocobase/nocobase/pull/8968)) von @jiannx
- **[Workflow: JavaScript]** Sicherheitsprobleme behoben ([#8967](https://github.com/nocobase/nocobase/pull/8967)) von @mytharcher
- **[Aktion: Datensätze exportieren]** Import- und Exportkonfiguration von mehrschichtigen zugehörigen Feldern eingeschränkt ([#8893](https://github.com/nocobase/nocobase/pull/8893)) von @jiannx
- **[Benutzerdefinierte Variablen]** auth notify überspringen ([#8942](https://github.com/nocobase/nocobase/pull/8942)) von @chenos
- **[Lokalisierung]** localizationTexts:missing-Anfrage bei verweigerter Berechtigung verhindern ([#8903](https://github.com/nocobase/nocobase/pull/8903)) von @chenos
- **[Authentifizierung]** ACL behoben, um benutzerdefinierte Statusfilterparameter zu unterstützen ([#8918](https://github.com/nocobase/nocobase/pull/8918)) von @jiannx
- **[Flow-Engine]** Altes Ereignis entfernt, das aus dem uiSchema-Repository kopiert wurde, um Fehler beim Auslösen zu vermeiden ([#8957](https://github.com/nocobase/nocobase/pull/8957)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]**

  - Import- und Exportkonfiguration von mehrschichtigen zugehörigen Feldern eingeschränkt von @jiannx
  - Problem behoben, bei dem die Option "Workflow auslösen" nicht funktionierte, wenn sie nicht aktiviert war von @mytharcher
- **[Datenquelle: Externes Oracle]** Fehler beim Laden der externen Oracle-Datenquelle behoben von @2013xile
- **[Workflow: Genehmigung]**

  - Versionslimit von Legacy-Migrationen behoben, um Fehler beim Start in der neuesten Version zu vermeiden von @mytharcher
  - Fehlertoleranz beim Löschen des Workflows hinzugefügt, um Ladefehler in der Aufgabenliste zu vermeiden von @mytharcher
  - Übersetzung, Knotenauswahl und Rückgabeziel-Probleme im v2-Genehmigungsformular-Rückgabebutton behoben von @zhangzhonghe
  - Fehlertoleranz für fehlendes `latestRound` hinzugefügt von @mytharcher
- **[E-Mail-Manager]**

  - Problem behoben, dass die Signatur bei Verwendung von Vorlagen überschrieben wurde von @jiannx
  - Nach dem Senden der E-Mail wird keine Schließbestätigung angezeigt von @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.14](https://www.nocobase.com/en/blog/v2.1.0-alpha.14)

*Veröffentlichungsdatum: 07.04.2026*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Fähigkeit hinzugefügt, Unter-Agenten für KI-Mitarbeiter aufzurufen ([#8935](https://github.com/nocobase/nocobase/pull/8935)) von @cgyrock
- **[KI: MCP-Server]** Stellt eine generische Datenabfrage-API bereit, die über MCP aufrufbar ist ([#8985](https://github.com/nocobase/nocobase/pull/8985)) von @2013xile

### 🚀 Verbesserungen

- **[undefined]**

  - Inhaltsverzeichnis zur README hinzugefügt ([#8878](https://github.com/nocobase/nocobase/pull/8878)) von @gaston98765
  - Reduziertes Log-Rauschen beim Serverstart durch Unterdrückung von Entpack-Befehlen für LibreOffice und Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) von @Rishabh1925
- **[Flow-Engine]** Neue APIs für den UI-Aufbau hinzugefügt. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) von @gchust
- **[Workflow]** Größe des Aktivierungs-Schalters auf klein geändert ([#9010](https://github.com/nocobase/nocobase/pull/9010)) von @mytharcher
- **[KI-Mitarbeiter]** Optimierung der Prompts für DeepSeek bei der Verarbeitung nicht unterstützter Dateitypen ([#9003](https://github.com/nocobase/nocobase/pull/9003)) von @cgyrock
- **[Aktion: Benutzerdefinierte Anfrage]** Aktionsmodelle für benutzerdefinierte Anfragen hinzugefügt ([#8890](https://github.com/nocobase/nocobase/pull/8890)) von @jiannx
- **[Workflow: JavaScript]** `isolated-vm` als standardmäßige JavaScript-Ausführungs-Engine für den JavaScript-Knoten hinzugefügt ([#8973](https://github.com/nocobase/nocobase/pull/8973)) von @mytharcher
  Referenz: [JavaScript-Knoten](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Fehlerbehebungen

- **[Server]**

  - Serving-Prüfung hinzugefügt, um zu verhindern, dass der App-Status von einer Nicht-Serving-Instanz aktualisiert wird ([#8959](https://github.com/nocobase/nocobase/pull/8959)) von @mytharcher
  - Unterstützung zum Abrufen der Zielanwendung per Hostname hinzugefügt ([#8978](https://github.com/nocobase/nocobase/pull/8978)) von @2013xile
- **[Client]**

  - Speichern des Beziehungsfelds im Unterformular fehlgeschlagen ([#9004](https://github.com/nocobase/nocobase/pull/9004)) von @jiannx
  - Die Unterformulare der Felder zeigen keine Daten an ([#9008](https://github.com/nocobase/nocobase/pull/9008)) von @jiannx
  - Problem behoben, bei dem die Kopie der zugehörigen Felder in der Tabelle beim ersten Rendern nicht korrekt angezeigt wurde. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) von @jiannx
  - Falsche sekundäre Bestätigungsmeldung beim Schließen eines mehrstufigen Popups nach Änderung von Formulardaten behoben. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) von @gchust
  - Problem behoben, bei dem Leerzeichen im Variablenausdruck dazu führten, dass die Bezeichnung nicht angezeigt wurde ([#8988](https://github.com/nocobase/nocobase/pull/8988)) von @mytharcher
- **[Flow-Engine]**

  - Abgeschnittene Einstellungsmenüs im Popup behoben ([#9005](https://github.com/nocobase/nocobase/pull/9005)) von @gchust
  - Ein Problem behoben, bei dem Menüpunkte nicht ausgewählt werden konnten, wenn die UI-Komponentenbreite im Konfigurationszustand zu klein war. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) von @gchust
  - JS-Snippets zum Setzen von Formularelementen und Detail-Elementen hinzugefügt ([#8974](https://github.com/nocobase/nocobase/pull/8974)) von @jiannx
- **[Workflow: Mailer-Knoten]** Validierung für Variablenfelder behoben ([#9047](https://github.com/nocobase/nocobase/pull/9047)) von @mytharcher
- **[Sammlungsfeld: Sortierung]** fix(field-sort): Absturz verhindert, wenn das scopeKey-Attribut undefiniert ist ([#9019](https://github.com/nocobase/nocobase/pull/9019)) von @gaston98765
- **[KI-Mitarbeiter]**

  - Problem behoben, bei dem KI-Mitarbeiter keine Fähigkeiten nutzen konnten ([#9023](https://github.com/nocobase/nocobase/pull/9023)) von @cgyrock
  - Problem behoben, bei dem das LLM nach dem Deaktivieren des getSkill-Tools weiterhin versuchte, Fähigkeiten zu laden ([#9013](https://github.com/nocobase/nocobase/pull/9013)) von @cgyrock
  - Problem mit abnormalem Websuchverhalten bei Verwendung des Qwen-LLM behoben ([#9012](https://github.com/nocobase/nocobase/pull/9012)) von @cgyrock
  - Eigentümerüberprüfung zur KI-Konversations-API hinzugefügt ([#8993](https://github.com/nocobase/nocobase/pull/8993)) von @cgyrock
- **[Block: GridCard]** Problem behoben, dass die Schaltfläche beim Aktualisieren der Grid-Karte nicht aktualisiert wurde ([#9021](https://github.com/nocobase/nocobase/pull/9021)) von @jiannx
- **[Workflow]**

  - Falsche Validierungsregel der Bedingungsanweisung behoben ([#9017](https://github.com/nocobase/nocobase/pull/9017)) von @mytharcher
  - Problem behoben, bei dem der Modus des Sammlungs-Triggers nicht auf "Erstellen oder Aktualisieren" gesetzt werden konnte ([#8980](https://github.com/nocobase/nocobase/pull/8980)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** Aktions-Whitelist für In-App-Nachrichtenaktualisierungen behoben, um unbefugte Aktualisierungen durch Nicht-Eigentümer zu verhindern. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) von @mytharcher
- **[Datenquellen-Manager]** Optimierte MCP-Tool-Benennung und reduzierte redundante API-Antworten, um übermäßigen Verbrauch des KI-Konversationskontexts zu vermeiden ([#9000](https://github.com/nocobase/nocobase/pull/9000)) von @2013xile
- **[Workflow: SQL-Knoten]** Sicherheitsproblem im SQL-Knoten behoben ([#8989](https://github.com/nocobase/nocobase/pull/8989)) von @mytharcher
- **[Datenvisualisierung]** Bei Verwendung von variablenbasierten Filtern können Diagramme die Variablenwerte beim ersten Rendern nicht korrekt auflösen ([#8964](https://github.com/nocobase/nocobase/pull/8964)) von @2013xile
- **[Workflow: Genehmigung]**

  - Fehlertoleranz beim Löschen des Workflows hinzugefügt, um Ladefehler in der Aufgabenliste zu vermeiden von @mytharcher
  - Fehlertoleranz für fehlendes `latestRound` hinzugefügt von @mytharcher
  - Versionslimit von Legacy-Migrationen behoben, um Fehler beim Start in der neuesten Version zu vermeiden von @mytharcher
- **[E-Mail-Manager]** Nach dem Senden der E-Mail wird keine Schließbestätigung angezeigt von @jiannx
