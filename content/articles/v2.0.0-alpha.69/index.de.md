---
title: "NocoBase v2.0.0-alpha.69: Unterstützung für env.ESM_CDN_BASE_URL"
description: "Versionshinweise zu v2.0.0-alpha.69"
---

### 🎉 Neue Funktionen

- **[client]** Unterstützung zur Konfiguration des Datenlademodus ([#8551](https://github.com/nocobase/nocobase/pull/8551)) von @zhangzhonghe

- **[flow-engine]** Unterstützung für env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) von @chenos

- **[Auth: DingTalk]** Ermöglicht die Bindung eines Benutzers mit `unionId` von @2013xile

### 🚀 Verbesserungen

- **[flow-engine]** Verbesserte Autovervollständigung und Code-Hinweise im JS-Modell-Code-Editor. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) von @gchust

- **[client]**
  - Anpassung der Spaltenbreiteneinstellung auf Dropdown-Auswahl in inline-bearbeitbaren Untertabellen ([#8561](https://github.com/nocobase/nocobase/pull/8561)) von @katherinehhh

  - Unterstützung zum Deaktivieren redundanter Standard-Append-Parameter für `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) von @2013xile

- **[acl]** acl fügt die Methode generalFixedParams hinzu ([#8363](https://github.com/nocobase/nocobase/pull/8363)) von @jiannx

- **[Sammlungsfeld: Markdown(Vditor)]** Eine Konfigurationsoption zum Festlegen des Standard-Bearbeitungsmodus in den Komponenteneinstellungen wurde hinzugefügt. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) von @Cyx649312038

- **[Workflow]** Änderung des Routenpfads von Workflow-Unterseiten, um alle Workflow-Seiten unter das Präfix `/admin/settings/workflow` zu legen ([#8519](https://github.com/nocobase/nocobase/pull/8519)) von @mytharcher

- **[AI: Wissensdatenbank]** Optimierte Build-Ausgabe zur Reduzierung der Paketgröße von plugin-ai-knowledge-base. von @cgyrock

- **[Multi-Space]** Multi-Space-Berechtigungssteuerung greift auf acl zu von @jiannx

- **[Auth: DingTalk]** Verwendung von `userid` als Standardschlüssel für die Benutzerzuordnung, während die Kompatibilität mit bestehenden Authentifikatoren, die auf Mobilnummern basieren, erhalten bleibt von @2013xile

### 🐛 Fehlerbehebungen

- **[client]**
  - Behebung: Seitenaktualisierung erforderlich, um nach Aktivierung der Baumtabelle einen untergeordneten Datensatz hinzuzufügen ([#8574](https://github.com/nocobase/nocobase/pull/8574)) von @katherinehhh

  - Behebung von Leerraumproblemen im Grid-Layout ([#8535](https://github.com/nocobase/nocobase/pull/8535)) von @zhangzhonghe

  - Behebung: Spaltenbreite wird in Untertabelle (Inline-Bearbeitung) nicht aktualisiert; mehrzeilige Texteingabe passt sich nicht an die Spaltenbreite an ([#8573](https://github.com/nocobase/nocobase/pull/8573)) von @katherinehhh

  - Behebung eines Problems, bei dem die Verwendung von "Schnellerstellung" des Verknüpfungsdatensatz-Auswahlfelds im Bearbeitungsformular vorhandene Formulardaten überschrieb. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) von @gchust

  - fix: "Baumtabelle aktivieren" und "Alle Zeilen standardmäßig erweitern" für Nicht-Baum-Sammlungen ausblenden ([#8566](https://github.com/nocobase/nocobase/pull/8566)) von @katherinehhh

  - Behebung eines Problems, bei dem das Menü "Formular (Neu hinzufügen)" fälschlicherweise im Popup der Aktion "Neu erstellen" angezeigt wurde. ([#8562](https://github.com/nocobase/nocobase/pull/8562)) von @gchust

  - fix: nanoid-Feld generiert nach dem Erstellungs-Submit keinen Standardwert neu ([#8538](https://github.com/nocobase/nocobase/pull/8538)) von @katherinehhh

  - Behebung eines Problems, bei dem der Ereignisfluss beim Aktualisieren von Zielblöcken über ein Popup hinweg fehlschlug. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) von @gchust

  - Behebung bekannter Probleme im Zusammenhang mit der Filterung ([#8514](https://github.com/nocobase/nocobase/pull/8514)) von @zhangzhonghe

  - Behebung eines Problems, das dazu führte, dass der Datenblock nach dem Absenden eines Formulars wiederholt aktualisiert wurde. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) von @gchust

  - Behebung eines Problems, bei dem Seitendaten nach dem ersten Öffnen und Schließen des Popups fälschlicherweise aktualisiert wurden. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) von @gchust

  - Behebung eines Problems, das die Verwendung von Formularvariablen zur Wertzuweisung in Verknüpfungsregeln für mehrstufige 1:n-Unterformularfelder verhinderte. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) von @gchust

  - fix: falsche Anzeige beim Setzen von Standardwerten für das Cascader-Feldmodell ([#8537](https://github.com/nocobase/nocobase/pull/8537)) von @katherinehhh

  - Behebung eines Problems, bei dem Daten nach Änderungen über mehrere Popup-Ebenen und Blöcke hinweg nicht aktualisiert wurden. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) von @gchust

- **[flow-engine]**
  - fix: Spaltenlöschaktion funktioniert nicht in der Popup-Untertabellenbearbeitung, wenn createModelOptions konfiguriert ist ([#8576](https://github.com/nocobase/nocobase/pull/8576)) von @katherinehhh

  - Behebung eines Problems, bei dem das Absenden des Formulars nach dem Seitenwechsel die Seite nicht aktualisiert. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) von @gchust

  - Behebung eines Problems, bei dem einige Drittanbieter-Bibliotheken in JS-Blöcken nicht korrekt importiert werden konnten. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) von @gchust

  - Behebung des fehlerhaften Ladens einiger ESM-Bibliotheken in runjs aufgrund falscher Klassifizierung als AMD-Module. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) von @gchust

  - fix: FilterByTK-Problem, wenn filterTargetKey ein Ein-Element-Array in einer externen Datenquelle ist ([#8522](https://github.com/nocobase/nocobase/pull/8522)) von @katherinehhh

  - fix: Spaltenlöschaktion funktioniert nicht in der Popup-Untertabellenbearbeitung, wenn createModelOptions konfiguriert ist ([#8560](https://github.com/nocobase/nocobase/pull/8560)) von @katherinehhh

- **[Sammlungsfeld: Anhang(URL)]** Behebung: Konfiguration der Dateinamenanzeige des Anhang-URL-Felds funktioniert nicht im Bearbeitungsformular ([#8571](https://github.com/nocobase/nocobase/pull/8571)) von @katherinehhh

- **[KI-Mitarbeiter]**
  - Behebung eines Problems, bei dem der LLM-Knoten keine Nachrichten senden kann ([#8569](https://github.com/nocobase/nocobase/pull/8569)) von @2013xile

  - Behebung des Problems, dass das System nach dem Build nicht starten kann ([#8523](https://github.com/nocobase/nocobase/pull/8523)) von @cgyrock

  - Behebung der Ausnahme, die auftritt, wenn Tools während der KI-Datenmodellierung automatisch aufgerufen werden ([#8532](https://github.com/nocobase/nocobase/pull/8532)) von @cgyrock

- **[UI-Vorlagen]** Behebung eines Fehlers beim erneuten Öffnen und Absenden einer gespeicherten Popup-Vorlage für das Formular "Neu hinzufügen" des Verknüpfungsfelds. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) von @gchust

- **[Aktion: Datensätze importieren]** Behebung der Sicherheitslücke der Importaktion ([#8544](https://github.com/nocobase/nocobase/pull/8544)) von @mytharcher

- **[Dateimanager]** Sicherer Dateipfad für lokalen Speicher, um Zugriffspfade außerhalb des Dokumentenverzeichnisses zu vermeiden ([#8539](https://github.com/nocobase/nocobase/pull/8539)) von @mytharcher

- **[Workflow]** Fehlertoleranz für die Auswahlkomponente des Sammlungsdatensatzes hinzugefügt, um Fehler beim Löschen der Sammlung zu vermeiden ([#8528](https://github.com/nocobase/nocobase/pull/8528)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebung des Problems, dass Parameter und Nutzlast beim Auslösen eines benutzerdefinierten Workflows falsch sind von @mytharcher

- **[Multi-Space]**
  - Entfernen des read-pretty-Attributs für das Space-Feld von @jiannx

  - Migrationsskript hinzugefügt, um x-ready-pretty im Space-Feld zu entfernen von @jiannx

- **[AI: Wissensdatenbank]** Behebung des Problems, dass das System nach dem Build nicht starten kann von @cgyrock

- **[Aktion: Datensätze importieren Pro]** Behebung der Zählzahlen im Importergebnis und der Nachrichtenübersetzung von @mytharcher

- **[Workflow: Unterworkflow]** Behebung des Routenpfads des Workflow-Links von @mytharcher

- **[Vorlagendruck]** fix: Problem mit der Feldlistenanzeige in der Konfiguration der Vorlagendruckaktion von @katherinehhh

- **[Workflow: Genehmigung]**
  - Behebung eines Leistungsproblems, das durch das JSON-Feld in der Listendarstellung (MySQL) verursacht wurde von @mytharcher

  - Fehlertoleranz bei gelöschtem Workflow hinzugefügt, um Ladefehler in der Aufgabenliste zu vermeiden von @mytharcher

  - Behebung eines Fehlers, der beim Hinzufügen einer Rolle zu einem Benutzer auftritt, wenn der Workflow für Zielgruppen deaktiviert ist von @mytharcher

- **[E-Mail-Manager]** Textkörper klappt nicht zusammen, wenn Text ausgewählt ist. Behebung: Herunterladen des Anhangs fehlgeschlagen von @jiannx

- **[WeCom]** Behebung eines Problems, bei dem Benutzer nicht automatisch registriert werden können, wenn die Mobilnummer fehlt von @2013xile
