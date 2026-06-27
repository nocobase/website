---
title: "Wöchentliche Updates｜JS-Variablen zum Ereignisablauf hinzugefügt"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 27. März bis 2. April 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.31](https://www.nocobase.com/en/blog/v2.0.31)

*Veröffentlichungsdatum: 2026-04-01*

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]** Optimierung der Prompts für Deepseek bei der Verarbeitung nicht unterstützter Dateitypen ([#9003](https://github.com/nocobase/nocobase/pull/9003)) von @cgyrock
- **[Workflow]** Größe des Aktivierungs-Schalters auf klein geändert ([#9010](https://github.com/nocobase/nocobase/pull/9010)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem die Kopie der verknüpften Felder in der Tabelle beim ersten Rendern nicht korrekt angezeigt wurde. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) von @jiannx
- **[Flow-Engine]** Problem mit abgeschnittenen Einstellungsmenüs in Popups behoben ([#9005](https://github.com/nocobase/nocobase/pull/9005)) von @gchust
- **[Benachrichtigung: In-App-Nachricht]** Aktions-Whitelist für In-App-Nachrichten-Updates korrigiert, um unbefugte Updates durch Nicht-Besitzer zu verhindern. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) von @mytharcher
- **[KI-Mitarbeiter]** Problem mit abnormalem Websuchverhalten bei Verwendung des Qwen-LLM behoben ([#9012](https://github.com/nocobase/nocobase/pull/9012)) von @cgyrock

### [v2.0.30](https://www.nocobase.com/en/blog/v2.0.30)

*Veröffentlichungsdatum: 2026-03-30*

### 🚀 Verbesserungen

- **[Workflow: JavaScript]** `isolated-vm` als standardmäßige JavaScript-Ausführungsengine für den JavaScript-Knoten hinzugefügt ([#8973](https://github.com/nocobase/nocobase/pull/8973)) von @mytharcher
  Referenz: [JavaScript-Knoten](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Fehlerbehebungen

- **[Client]** Falsche sekundäre Bestätigungsmeldung beim Schließen von mehrstufigen Popups nach Änderung von Formulardaten behoben. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) von @gchust
- **[Workflow: SQL-Knoten]** Sicherheitsproblem im SQL-Knoten behoben ([#8989](https://github.com/nocobase/nocobase/pull/8989)) von @mytharcher
- **[KI-Mitarbeiter]** Besitzüberprüfung zur KI-Konversations-API hinzugefügt ([#8993](https://github.com/nocobase/nocobase/pull/8993)) von @cgyrock
- **[Workflow: Genehmigung]** Versionslimit von Legacy-Migrationen korrigiert, um Fehler beim Start in der neuesten Version zu vermeiden von @mytharcher

### [v2.0.29](https://www.nocobase.com/en/blog/v2.0.29)

*Veröffentlichungsdatum: 2026-03-30*

### 🚀 Verbesserungen

- **[undefined]** Reduzierung des Log-Rauschens beim Serverstart durch Unterdrückung von Entpack-Befehlen für LibreOffice und Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) von @Rishabh1925

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem Leerzeichen im Variablenausdruck dazu führten, dass die Bezeichnung nicht angezeigt wurde ([#8988](https://github.com/nocobase/nocobase/pull/8988)) von @mytharcher
- **[Flow-Engine]** Problem behoben, bei dem Menüpunkte nicht ausgewählt werden konnten, wenn die UI-Komponentenbreite im Konfigurationszustand zu klein war. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) von @gchust
- **[Datenvisualisierung]** Bei Verwendung von variablenbasierten Filtern lösen Diagramme die Variablenwerte beim ersten Rendern nicht korrekt auf ([#8964](https://github.com/nocobase/nocobase/pull/8964)) von @2013xile

### [v2.0.28](https://www.nocobase.com/en/blog/v2.0.28)

*Veröffentlichungsdatum: 2026-03-27*

### 🐛 Fehlerbehebungen

- **[Aktion: Datensätze importieren]** Problem mit fehlgeschlagenem Import nach Aktivierung des Plugin-Space behoben ([#8968](https://github.com/nocobase/nocobase/pull/8968)) von @jiannx
- **[Datenvisualisierung]** Abnormale Datenstatistiken des Root-Rollen-Diagramms nach Aktivierung des Space-Plugins behoben ([#8969](https://github.com/nocobase/nocobase/pull/8969)) von @jiannx
- **[Workflow: JavaScript]** Sicherheitsprobleme behoben ([#8967](https://github.com/nocobase/nocobase/pull/8967)) von @mytharcher
- **[KI-Mitarbeiter]** Abstand zwischen den Tool-Kartenkomponenten in der KI-Konversation angepasst ([#8965](https://github.com/nocobase/nocobase/pull/8965)) von @cgyrock
- **[Aktion: Datensätze exportieren]** Import- und Exportkonfiguration von mehrschichtigen verknüpften Feldern eingeschränkt ([#8893](https://github.com/nocobase/nocobase/pull/8893)) von @jiannx
- **[Aktion: Datensätze importieren Pro]** Import- und Exportkonfiguration von mehrschichtigen verknüpften Feldern eingeschränkt von @jiannx

### [v2.0.27](https://www.nocobase.com/en/blog/v2.0.27)

*Veröffentlichungsdatum: 2026-03-26*

### 🚀 Verbesserungen

- **[Workflow]** Variable für den Seitenparameter hinzugefügt ([#8951](https://github.com/nocobase/nocobase/pull/8951)) von @mytharcher
- **[Workflow: Unterworkflow]** Defensive Logik hinzugefügt, um Workflow-Hänger bei Ausnahmen zu vermeiden von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Ausnahme beim Hinzufügen von Unterknoten zur Baumtabelle im Popup-Fenster behoben ([#8872](https://github.com/nocobase/nocobase/pull/8872)) von @jiannx
- **[Server]** Vermeidung der Verarbeitung von Sync-Nachrichten nach dem Stoppen der App ([#8940](https://github.com/nocobase/nocobase/pull/8940)) von @mytharcher
- **[Flow-Engine]** Entfernung von Legacy-Ereignissen, die aus dem uiSchema-Repository kopiert wurden, um Fehler beim Auslösen zu vermeiden ([#8957](https://github.com/nocobase/nocobase/pull/8957)) von @mytharcher
- **[Authentifizierung]** ACL korrigiert, um benutzerdefinierte Statusfilterparameter zu unterstützen ([#8918](https://github.com/nocobase/nocobase/pull/8918)) von @jiannx
- **[E-Mail-Manager]** Problem behoben, bei dem die Signatur bei Verwendung von Vorlagen überschrieben wurde von @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.13](https://www.nocobase.com/en/blog/v2.1.0-alpha.13)

*Veröffentlichungsdatum: 2026-03-27*

### 🎉 Neue Funktionen

- **[Client]** JS-Variablen zum Ereignisablauf hinzugefügt ([#8938](https://github.com/nocobase/nocobase/pull/8938)) von @jiannx

### 🚀 Verbesserungen

- **[Client]** Unterstützung zum Setzen von Feldstilen über runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) von @jiannx
- **[Flow-Engine]** Verbesserte Schema-Validierung für die UI-Erstellungs-API. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) von @gchust
- **[Workflow: Pre-Action-Ereignis]** Validierungsregeln für Trigger und Knoten hinzugefügt ([#8971](https://github.com/nocobase/nocobase/pull/8971)) von @mytharcher
- **[Workflow]** Variable für den Seitenparameter hinzugefügt ([#8951](https://github.com/nocobase/nocobase/pull/8951)) von @mytharcher
- **[Workflow: Webhook]** Validierung für die Erstellung von Trigger-/Knoten-APIs hinzugefügt von @mytharcher
- **[Workflow: Unterworkflow]**

  - Validierung für die Erstellung von Knoten-APIs hinzugefügt von @mytharcher
  - Defensive Logik hinzugefügt, um Workflow-Hänger bei Ausnahmen zu vermeiden von @mytharcher
- **[Workflow: Genehmigung]** Validierung für Trigger-/Knoten-APIs hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Ausnahme beim Hinzufügen von Unterknoten zur Baumtabelle im Popup-Fenster behoben ([#8872](https://github.com/nocobase/nocobase/pull/8872)) von @jiannx
- **[Server]** Vermeidung der Verarbeitung von Sync-Nachrichten nach dem Stoppen der App ([#8940](https://github.com/nocobase/nocobase/pull/8940)) von @mytharcher
- **[Aktion: Datensätze exportieren]** Import- und Exportkonfiguration von mehrschichtigen verknüpften Feldern eingeschränkt ([#8893](https://github.com/nocobase/nocobase/pull/8893)) von @jiannx
- **[Datenvisualisierung]** Abnormale Datenstatistiken des Root-Rollen-Diagramms nach Aktivierung des Space-Plugins behoben ([#8969](https://github.com/nocobase/nocobase/pull/8969)) von @jiannx
- **[Aktion: Datensätze importieren]** Problem mit fehlgeschlagenem Import nach Aktivierung des Plugin-Space behoben ([#8968](https://github.com/nocobase/nocobase/pull/8968)) von @jiannx
- **[Workflow: JavaScript]** Sicherheitsprobleme behoben ([#8967](https://github.com/nocobase/nocobase/pull/8967)) von @mytharcher
- **[KI-Mitarbeiter]** Abstand zwischen den Tool-Kartenkomponenten in der KI-Konversation angepasst ([#8965](https://github.com/nocobase/nocobase/pull/8965)) von @cgyrock
- **[Flow-Engine]** Entfernung von Legacy-Ereignissen, die aus dem uiSchema-Repository kopiert wurden, um Fehler beim Auslösen zu vermeiden ([#8957](https://github.com/nocobase/nocobase/pull/8957)) von @mytharcher
- **[Authentifizierung]** ACL korrigiert, um benutzerdefinierte Statusfilterparameter zu unterstützen ([#8918](https://github.com/nocobase/nocobase/pull/8918)) von @jiannx
- **[Aktion: Datensätze importieren Pro]** Import- und Exportkonfiguration von mehrschichtigen verknüpften Feldern eingeschränkt von @jiannx
- **[E-Mail-Manager]** Problem behoben, bei dem die Signatur bei Verwendung von Vorlagen überschrieben wurde von @jiannx
