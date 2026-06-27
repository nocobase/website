---
title: "Wöchentliche Updates｜Optimierungen und Fehlerbehebungen"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 29. Januar bis 5. Februar 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich dazu, dass Testnutzer Feedback geben und Funktionen weiter optimieren können. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.42](https://www.nocobase.com/en/blog/v1.9.42)

*Veröffentlichungsdatum: 2026-02-02*

### 🚀 Verbesserungen

- **[Auth: DingTalk]** Verwendet `userid` als Standardschlüssel für die Benutzerzuordnung, während die Kompatibilität mit bestehenden Authentifikatoren, die auf Mobilnummern basieren, erhalten bleibt, von @2013xile

### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]** Behebt ein Leistungsproblem, das durch ein JSON-Feld beim Laden von Listen (MySQL) verursacht wurde, von @mytharcher
- **[WeCom]** Behebt ein Problem, bei dem Benutzer nicht automatisch registriert werden konnten, wenn die Mobilnummer fehlte, von @2013xile

### [v1.9.41](https://www.nocobase.com/en/blog/v1.9.41)

*Veröffentlichungsdatum: 2026-02-02*

### 🚀 Verbesserungen

- **[client]** Unterstützt das Deaktivieren redundanter Standard-Append-Parameter für `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Workflow]** Fügt Fehlertoleranz für die Auswahlkomponente von Sammlungsdatensätzen hinzu, um Fehler zu vermeiden, wenn eine Sammlung gelöscht wurde ([#8528](https://github.com/nocobase/nocobase/pull/8528)) von @mytharcher
- **[Dateimanager]** Sichert den Dateipfad für den lokalen Speicher, um Zugriffspfade außerhalb des Dokumentenverzeichnisses zu vermeiden ([#8539](https://github.com/nocobase/nocobase/pull/8539)) von @mytharcher
- **[Workflow: Unterworkflow]** Behebt den Routenpfad des Workflow-Links von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.19](https://www.nocobase.com/en/blog/v2.0.0-beta.19)

*Veröffentlichungsdatum: 2026-02-05*

### 🎉 Neue Funktionen

- **[Auth: DingTalk]** Ermöglicht das Binden von Benutzern mit `unionId` von @2013xile

### 🚀 Verbesserungen

- **[client]** Anpassung der Spaltenbreiteneinstellung auf Dropdown-Auswahl in inline bearbeitbaren Untertabellen ([#8561](https://github.com/nocobase/nocobase/pull/8561)) von @katherinehhh
- **[Sammlungsfeld: Markdown(Vditor)]** Eine Konfigurationsoption hinzugefügt, um den Standard-Editormodus in den Komponenteneinstellungen festzulegen. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) von @Cyx649312038
- **[Multi-Space]** Multi-Space-Berechtigungssteuerung greift auf ACL zu von @jiannx
- **[AI: Wissensdatenbank]** Optimierte Build-Ausgabe zur Reduzierung der Paketgröße von plugin-ai-knowledge-base. von @cgyrock

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebt ein Problem, bei dem die Verwendung der „Schnellerstellung“ des Assoziationsdatensatz-Auswahlfelds im Bearbeitungsformular vorhandene Formulardaten überschrieb. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) von @gchust
  - Behebt Probleme mit leeren Bereichen im Grid-Layout ([#8535](https://github.com/nocobase/nocobase/pull/8535)) von @zhangzhonghe
  - Behebt, dass nach dem Aktivieren der Baumtabelle ein Seiten-Refresh erforderlich war, um einen untergeordneten Datensatz hinzuzufügen ([#8574](https://github.com/nocobase/nocobase/pull/8574)) von @katherinehhh
  - Behebt, dass die Spaltenbreite in der Untertabelle (Inline-Bearbeitung) nicht aktualisiert wird; mehrzeilige Texteingabe passt sich nicht an die Spaltenbreite an ([#8573](https://github.com/nocobase/nocobase/pull/8573)) von @katherinehhh
  - Behebt ein Problem, bei dem das Menü „Formular (Neu hinzufügen)“ fälschlicherweise im Aktions-Popup „Neu erstellen“ angezeigt wurde. ([#8562](https://github.com/nocobase/nocobase/pull/8562)) von @gchust
- **[flow-engine]**

  - Behebt ein Problem, bei dem einige Drittanbieter-Bibliotheken in JS-Blöcken nicht korrekt importiert werden konnten. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) von @gchust
  - Behebt ein Problem, bei dem das Absenden des Formulars nach dem Seitenwechsel die Seite nicht aktualisiert. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) von @gchust
- **[UI-Vorlagen]** Behebt einen Fehler beim erneuten Öffnen und Absenden einer gespeicherten Popup-Vorlage für das Formular „Neu hinzufügen“ des Assoziationsfelds. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) von @gchust
- **[Sammlungsfeld: Anhang(URL)]]** Behebt, dass die Konfiguration der Dateinamenanzeige für Anhang-URL-Felder im Bearbeitungsformular nicht funktioniert ([#8571](https://github.com/nocobase/nocobase/pull/8571)) von @katherinehhh
- **[AI-Mitarbeiter]** Behebt ein Problem, bei dem der LLM-Knoten keine Nachrichten senden kann ([#8569](https://github.com/nocobase/nocobase/pull/8569)) von @2013xile
- **[Aktion: Datensätze importieren]** Behebt die Sicherheitslücke der Importaktion ([#8544](https://github.com/nocobase/nocobase/pull/8544)) von @mytharcher
- **[Workflow: Benutzerdefinierte Aktionsereignisse]** Behebt das Problem, dass Parameter und Payload beim Auslösen eines benutzerdefinierten Workflows falsch sind von @mytharcher
- **[Multi-Space]**

  - Migrationsskript hinzugefügt, um x-ready-pretty im Space-Feld zu entfernen von @jiannx
  - Entfernt das read-pretty-Attribut für das Space-Feld von @jiannx
- **[Workflow: Genehmigung]** Behebt ein Leistungsproblem, das durch ein JSON-Feld beim Laden von Listen (MySQL) verursacht wurde, von @mytharcher

### [v2.0.0-beta.18](https://www.nocobase.com/en/blog/v2.0.0-beta.18)

*Veröffentlichungsdatum: 2026-02-02*

### 🎉 Neue Funktionen

- **[flow-engine]** Unterstützt env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) von @chenos

### 🚀 Verbesserungen

- **[acl]** acl fügt die Methode generalFixedParams hinzu ([#8363](https://github.com/nocobase/nocobase/pull/8363)) von @jiannx
- **[client]** Unterstützt das Deaktivieren redundanter Standard-Append-Parameter für `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) von @2013xile
- **[Auth: DingTalk]** Verwendet `userid` als Standardschlüssel für die Benutzerzuordnung, während die Kompatibilität mit bestehenden Authentifikatoren, die auf Mobilnummern basieren, erhalten bleibt, von @2013xile

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebt ein Problem, bei dem der Ereignisfluss beim Aktualisieren von Zielblöcken über ein Popup hinweg fehlschlug. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) von @gchust
  - Behebt ein Problem, bei dem Seitendaten nach dem ersten Öffnen und Schließen des Popups fälschlicherweise aktualisiert wurden. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) von @gchust
  - Behebt ein Problem, das dazu führte, dass der Datenblock nach dem Absenden eines Formulars wiederholt aktualisiert wurde. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) von @gchust
  - Behebt, dass das nanoid-Feld nach dem Absenden der Erstellung keinen neuen Standardwert generiert ([#8538](https://github.com/nocobase/nocobase/pull/8538)) von @katherinehhh
  - Behebt eine falsche Anzeige beim Festlegen von Standardwerten für das Kaskadenfeld-Modell ([#8537](https://github.com/nocobase/nocobase/pull/8537)) von @katherinehhh
- **[flow-engine]** Behebt ein fehlerhaftes Laden einiger ESM-Bibliotheken in runjs aufgrund falscher Klassifizierung als AMD-Module. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) von @gchust
- **[Dateimanager]** Sichert den Dateipfad für den lokalen Speicher, um Zugriffspfade außerhalb des Dokumentenverzeichnisses zu vermeiden ([#8539](https://github.com/nocobase/nocobase/pull/8539)) von @mytharcher
- **[Workflow]** Fügt Fehlertoleranz für die Auswahlkomponente von Sammlungsdatensätzen hinzu, um Fehler zu vermeiden, wenn eine Sammlung gelöscht wurde ([#8528](https://github.com/nocobase/nocobase/pull/8528)) von @mytharcher
- **[AI-Mitarbeiter]** Behebt die Ausnahme, die auftritt, wenn Tools während der KI-Datenmodellierung automatisch aufgerufen werden ([#8532](https://github.com/nocobase/nocobase/pull/8532)) von @cgyrock
- **[Aktion: Datensätze importieren Pro]** Behebt die Zählzahlen im Importergebnis und die Nachrichtenübersetzung von @mytharcher
- **[Workflow: Unterworkflow]** Behebt den Routenpfad des Workflow-Links von @mytharcher
- **[Vorlagendruck]** Behebt ein Problem mit der Feldlistenanzeige in der Konfiguration der Vorlagendruckaktion von @katherinehhh
- **[Workflow: Genehmigung]**

  - Behebt einen Fehler, der beim Hinzufügen einer Rolle zu einem Benutzer auftritt, wenn der Workflow für Zielgruppen deaktiviert ist von @mytharcher
  - Fügt Fehlertoleranz für gelöschte Workflows hinzu, um Ladefehler in der Aufgabenliste zu vermeiden von @mytharcher
- **[WeCom]** Behebt ein Problem, bei dem Benutzer nicht automatisch registriert werden konnten, wenn die Mobilnummer fehlte, von @2013xile
