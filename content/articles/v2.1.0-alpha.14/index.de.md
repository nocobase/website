---
title: "NocoBase v2.1.0-alpha.14: Möglichkeit hinzugefügt, Unteragenten für KI-Mitarbeiter aufzurufen"
description: "Versionshinweise zu v2.1.0-alpha.14"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Möglichkeit hinzugefügt, Unter-Agenten für KI-Mitarbeiter aufzurufen ([#8935](https://github.com/nocobase/nocobase/pull/8935)) von @cgyrock

- **[KI: MCP-Server]** Stellt eine generische Datenabfrage-API bereit, die über MCP aufrufbar ist ([#8985](https://github.com/nocobase/nocobase/pull/8985)) von @2013xile

### 🚀 Verbesserungen

- **[undefined]**
  - Inhaltsverzeichnis zur README hinzugefügt ([#8878](https://github.com/nocobase/nocobase/pull/8878)) von @gaston98765

  - Reduzierte Log-Ausgabe während des Serverstarts durch Unterdrückung von Entpack-Befehlen für LibreOffice und Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) von @Rishabh1925

- **[Flow-Engine]** Neue APIs für den UI-Aufbau hinzugefügt. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) von @gchust

- **[Workflow]** Größe des Aktivierungs-Schalters auf klein geändert ([#9010](https://github.com/nocobase/nocobase/pull/9010)) von @mytharcher

- **[KI-Mitarbeiter]** Prompts für DeepSeek bei der Verarbeitung nicht unterstützter Dateitypen optimiert ([#9003](https://github.com/nocobase/nocobase/pull/9003)) von @cgyrock

- **[Aktion: Benutzerdefinierte Anfrage]** Aktionsmodelle für benutzerdefinierte Anfragen hinzugefügt ([#8890](https://github.com/nocobase/nocobase/pull/8890)) von @jiannx

- **[Workflow: JavaScript]** `isolated-vm` als standardmäßige JavaScript-Ausführungsengine für den JavaScript-Knoten hinzugefügt ([#8973](https://github.com/nocobase/nocobase/pull/8973)) von @mytharcher
Referenz: [JavaScript-Knoten](https://docs.nocobase.com/cn/workflow/nodes/javascript)
### 🐛 Fehlerbehebungen

- **[Server]**
  - Serving-Prüfung hinzugefügt, um zu verhindern, dass der App-Status durch eine nicht-serving-Instanz aktualisiert wird ([#8959](https://github.com/nocobase/nocobase/pull/8959)) von @mytharcher

  - Unterstützung zum Abrufen der Zielanwendung per Hostname hinzugefügt ([#8978](https://github.com/nocobase/nocobase/pull/8978)) von @2013xile

- **[Client]**
  - Das Speichern von Beziehungsfeldern in Unterformularen schlug fehl ([#9004](https://github.com/nocobase/nocobase/pull/9004)) von @jiannx

  - Die Unterformulare der Felder zeigten keine Daten an ([#9008](https://github.com/nocobase/nocobase/pull/9008)) von @jiannx

  - Problem behoben, bei dem die Kopie der zugehörigen Felder in der Tabelle beim ersten Rendern nicht korrekt angezeigt wurde. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) von @jiannx

  - Falsche sekundäre Bestätigungsmeldung beim Schließen eines mehrstufigen Popups nach Änderung von Formulardaten behoben. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) von @gchust

  - Problem behoben, bei dem ein Leerzeichen im Variablenausdruck dazu führte, dass die Bezeichnung nicht angezeigt wurde ([#8988](https://github.com/nocobase/nocobase/pull/8988)) von @mytharcher

- **[Flow-Engine]**
  - Abgeschnittene Einstellungsmenüs im Popup behoben ([#9005](https://github.com/nocobase/nocobase/pull/9005)) von @gchust

  - Problem behoben, bei dem Menüpunkte nicht ausgewählt werden konnten, wenn die UI-Komponentenbreite im Konfigurationszustand zu klein war. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) von @gchust

  - JS-Snippets für Formularelement- und Detailselement-Einstellungen hinzugefügt ([#8974](https://github.com/nocobase/nocobase/pull/8974)) von @jiannx

- **[Workflow: Mailer-Knoten]** Validierung für Variablenfelder behoben ([#9047](https://github.com/nocobase/nocobase/pull/9047)) von @mytharcher

- **[Sammlungsfeld: Sortierung]** fix(field-sort): Absturz verhindert, wenn das scopeKey-Attribut undefiniert ist ([#9019](https://github.com/nocobase/nocobase/pull/9019)) von @gaston98765

- **[KI-Mitarbeiter]**
  - Problem behoben, bei dem KI-Mitarbeiter keine Fähigkeiten nutzen konnten ([#9023](https://github.com/nocobase/nocobase/pull/9023)) von @cgyrock

  - Problem behoben, bei dem das LLM weiterhin versuchte, Fähigkeiten zu laden, nachdem das getSkill-Tool deaktiviert wurde ([#9013](https://github.com/nocobase/nocobase/pull/9013)) von @cgyrock

  - Problem mit abnormalem Websuchverhalten bei Verwendung des Qwen-LLM behoben ([#9012](https://github.com/nocobase/nocobase/pull/9012)) von @cgyrock

  - Besitzüberprüfung zur KI-Konversations-API hinzugefügt ([#8993](https://github.com/nocobase/nocobase/pull/8993)) von @cgyrock

- **[Block: GridCard]** Problem behoben, dass der Button bei Aktualisierung der Grid-Karte nicht aktualisiert wurde ([#9021](https://github.com/nocobase/nocobase/pull/9021)) von @jiannx

- **[Workflow]**
  - Falsche Validierungsregel der Bedingungsanweisung behoben ([#9017](https://github.com/nocobase/nocobase/pull/9017)) von @mytharcher

  - Problem behoben, bei dem der Modus des Sammlungs-Triggers nicht auf "Erstellen oder Aktualisieren" gesetzt werden konnte ([#8980](https://github.com/nocobase/nocobase/pull/8980)) von @mytharcher

- **[Benachrichtigung: In-App-Nachricht]** Aktions-Whitelist für In-App-Nachrichtenaktualisierungen behoben, um unbefugte Aktualisierungen durch Nicht-Besitzer zu verhindern. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) von @mytharcher

- **[Datenquellen-Manager]** MCP-Tool-Benennung optimiert und redundante API-Antworten reduziert, um übermäßigen Verbrauch des KI-Konversationskontexts zu vermeiden ([#9000](https://github.com/nocobase/nocobase/pull/9000)) von @2013xile

- **[Workflow: SQL-Knoten]** Sicherheitsproblem im SQL-Knoten behoben ([#8989](https://github.com/nocobase/nocobase/pull/8989)) von @mytharcher

- **[Datenvisualisierung]** Bei Verwendung von variablenbasierten Filtern lösen Diagramme die Variablenwerte beim ersten Rendern nicht korrekt auf ([#8964](https://github.com/nocobase/nocobase/pull/8964)) von @2013xile

- **[Workflow: Genehmigung]**
  - Fehlertoleranz bei gelöschtem Workflow hinzugefügt, um Ladefehler in der Aufgabenliste zu vermeiden von @mytharcher

  - Fehlertoleranz für fehlendes `latestRound` hinzugefügt von @mytharcher

  - Versionsbeschränkung von Legacy-Migrationen behoben, um Fehler beim Start in der neuesten Version zu vermeiden von @mytharcher

- **[E-Mail-Manager]** Nach dem Senden der E-Mail wird keine Schließbestätigung angezeigt von @jiannx
