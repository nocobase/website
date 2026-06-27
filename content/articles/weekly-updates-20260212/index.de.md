---
title: "Wöchentliche Updates｜Unterstützung für konfigurierbare Blockhöhe"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 6. bis 12. Februar 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Protokolle zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es könnte einige bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.46](https://www.nocobase.com/en/blog/v1.9.46)

*Veröffentlichungsdatum: 2026-02-11*

### 🐛 Fehlerbehebungen

- **[Client]** Behebt, dass Feldkomponentenoptionen nicht in Echtzeit aktualisiert werden, wenn das Assoziationsfeld den Modus wechselt ([#8611](https://github.com/nocobase/nocobase/pull/8611)) von @katherinehhh
- **[Datenvisualisierung: ECharts]** Behebt Rechtschreibfehler in ECharts von @heziqiang
- **[Workflow: Genehmigung]**

  - Behebt das Problem, dass Werte im Detail-Popup von "Mein Antrag" fehlen von @mytharcher
  - Behebt einen Fehler, der beim Ausführen im Modus "Vor dem Speichern" ausgelöst wird von @mytharcher

### [v1.9.45](https://www.nocobase.com/en/blog/v1.9.45)

*Veröffentlichungsdatum: 2026-02-09*

### 🐛 Fehlerbehebungen

- **[Feldkomponente: Maske]** Behebt ein Problem, bei dem das Einstellungs-Popup für das Maskenfeld nicht alle Benutzerrollen korrekt laden konnte. von @gchust
- **[Workflow: Genehmigung]** Behebt falsche ID zum Laden des Detaildatensatzes von @mytharcher

### [v1.9.44](https://www.nocobase.com/en/blog/v1.9.44)

*Veröffentlichungsdatum: 2026-02-08*

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** ACL-Steuerung für Genehmigungs-APIs hinzugefügt von @mytharcher

### [v1.9.43](https://www.nocobase.com/en/blog/v1.9.43)

*Veröffentlichungsdatum: 2026-02-06*

### 🎉 Neue Funktionen

- **[Auth: DingTalk]** Ermöglicht das Binden von Benutzern mit `unionId` von @2013xile

### 🚀 Verbesserungen

- **[Sammlungsfeld: Markdown(Vditor)]** Eine Konfigurationsoption hinzugefügt, um den Standard-Editormodus in den Komponenteneinstellungen festzulegen. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) von @Cyx649312038

### 🐛 Fehlerbehebungen

- **[Aktion: Datensätze importieren]** Behebt die Sicherheitslücke der Importaktion ([#8544](https://github.com/nocobase/nocobase/pull/8544)) von @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.23](https://www.nocobase.com/en/blog/v2.0.0-beta.23)

*Veröffentlichungsdatum: 2026-02-12*

### 🎉 Neue Funktionen

- **[Block: GridCard]** Unterstützt konfigurierbare Blockhöhe ([#8583](https://github.com/nocobase/nocobase/pull/8583)) von @katherinehhh
- **[Aktion: Stapelbearbeitung]** Stapelbearbeitung 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) von @jiannx

### 🚀 Verbesserungen

- **[Client]**

  - Tabelle 2.0 unterstützt Drag-and-Drop-Sortierung ([#8540](https://github.com/nocobase/nocobase/pull/8540)) von @jiannx
  - Verschiebt Feldzuweisungs- und Standardwerteinstellungen auf die Formularebene. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) von @chenos
- **[Lokalisierung]** Automatisches Erstellen fehlender i18n-Schlüssel ([#8588](https://github.com/nocobase/nocobase/pull/8588)) von @jiannx

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behebt falsch gefilterte Daten im Assoziations-Dropdown, wenn das Titelfeld ein Fremdschlüssel ist ([#8619](https://github.com/nocobase/nocobase/pull/8619)) von @katherinehhh
  - Behebt, dass ein geleertes Assoziations-Anhängsfeld nach dem Absenden im Bearbeitungsformular nicht gespeichert wird ([#8616](https://github.com/nocobase/nocobase/pull/8616)) von @katherinehhh
  - Behebt, dass Feldkomponentenoptionen nicht in Echtzeit aktualisiert werden, wenn das Assoziationsfeld den Modus wechselt ([#8611](https://github.com/nocobase/nocobase/pull/8611)) von @katherinehhh
  - Behebt ein Problem, bei dem Tabellenspalten nach dem Klicken auf "Ausführen" im JS-Spalteneditor nicht neu gerendert wurden. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) von @gchust
  - Behebt, dass ausgewählte Daten in der Datensatzauswahl-Feldkomponente nach der Bearbeitung nicht wiederhergestellt werden können ([#8610](https://github.com/nocobase/nocobase/pull/8610)) von @katherinehhh
- **[Dateimanager]** Behebt, dass die Dateifeldkomponente den Auswahldialog auch öffnen kann, wenn sie deaktiviert ist ([#8617](https://github.com/nocobase/nocobase/pull/8617)) von @katherinehhh
- **[Datenvisualisierung: ECharts]** Behebt Rechtschreibfehler in ECharts von @heziqiang
- **[Workflow: Genehmigung]**

  - Behebt das Problem, dass Werte im Detail-Popup von "Mein Antrag" fehlen von @mytharcher
  - Behebt einen Fehler, der beim Ausführen im Modus "Vor dem Speichern" ausgelöst wird von @mytharcher

### [v2.0.0-beta.22](https://www.nocobase.com/en/blog/v2.0.0-beta.22)

*Veröffentlichungsdatum: 2026-02-10*

### 🎉 Neue Funktionen

- **[Client]** Unterstützt die Konfiguration von Browser-Tab-Titeln für Seiten, Seiten-Tabs, Popups und Popup-Tabs ([#8590](https://github.com/nocobase/nocobase/pull/8590)) von @zhangzhonghe
- **[Workflow: Genehmigung]** ACL-Steuerung für Genehmigungs-APIs hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Verwendet unabhängige Feldmodelle für Assoziationsfelder in Filterformularen ([#8511](https://github.com/nocobase/nocobase/pull/8511)) von @zhangzhonghe
- **[Workflow: CC]** Überarbeitet das Workflow-CC-Plugin zur Unterstützung der FlowModel-Architektur mit v1/v2-Kompatibilität ([#8405](https://github.com/nocobase/nocobase/pull/8405)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Flow-Engine]**

  - Behebt einen falschen Ausführungskontext für "ctx.sql" in JS-Modellen. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) von @gchust
  - Behebt ein Problem, bei dem Blob-Objekte im JS-Block nicht erstellt werden konnten. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) von @gchust
- **[Feldkomponente: Maske]** Behebt ein Problem, bei dem das Einstellungs-Popup für das Maskenfeld nicht alle Benutzerrollen korrekt laden konnte. von @gchust
- **[Workflow: Genehmigung]** Behebt falsche ID zum Laden des Detaildatensatzes von @mytharcher

### [v2.0.0-beta.21](https://www.nocobase.com/en/blog/v2.0.0-beta.21)

*Veröffentlichungsdatum: 2026-02-07*

### 🎉 Neue Funktionen

- **[Client]** Unterstützt die Konfiguration von Feldern des Assoziationssammlungsfelds im Formularblock ([#8578](https://github.com/nocobase/nocobase/pull/8578)) von @katherinehhh
- **[Aktion: Datensatz duplizieren]** 2.0 Duplizieraktion hinzugefügt ([#8580](https://github.com/nocobase/nocobase/pull/8580)) von @katherinehhh
- **[Workflow]** Unterstützt Kopieren, Einfügen und Verschieben von Knoten per Drag-and-Drop auf der Workflow-Leinwand ([#8559](https://github.com/nocobase/nocobase/pull/8559)) von @mytharcher

### 🚀 Verbesserungen

- **[Flow-Engine]** Verbessert die Autovervollständigung und Code-Hinweise im JS-Modell-Code-Editor. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) von @gchust
- **[Workflow: Genehmigung]** Entfernt die Unterstützung für JS-Felder von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behebt einen potenziellen "read hidden"-Renderfehler im Nicht-Konfigurationsmodus. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) von @gchust
  - Behebt, dass die Untertabelle (Inline-Bearbeitung) nach dem Wechsel in die schreibgeschützte Ansicht im Bearbeitungsformular weiterhin Spalten im Bearbeitungsmodus anzeigt ([#8589](https://github.com/nocobase/nocobase/pull/8589)) von @katherinehhh
- **[Flow-Engine]** Behebt ein Problem, bei dem die Verwendung einer Blockvorlage im Modus "Duplizieren" dazu führte, dass ein leeres Popup angezeigt wurde, wenn eine Aktionsschaltfläche aus dem Block angeklickt wurde. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) von @gchust
- **[Block: Karte]** Behebt doppelte Konfigurationsoptionen 'Als Vorlage speichern' im Kartenblock ([#8584](https://github.com/nocobase/nocobase/pull/8584)) von @katherinehhh

### [v2.0.0-beta.20](https://www.nocobase.com/en/blog/v2.0.0-beta.20)

*Veröffentlichungsdatum: 2026-02-05*

### 🎉 Neue Funktionen

- **[Client]** Unterstützt die Konfiguration des Datenlademodus ([#8551](https://github.com/nocobase/nocobase/pull/8551)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Behebt, dass die Spaltenlöschaktion im Popup-Untertabellen-Edit nicht funktioniert, wenn createModelOptions konfiguriert ist ([#8576](https://github.com/nocobase/nocobase/pull/8576)) von @katherinehhh
- **[E-Mail-Manager]**

  - Filter zur Verwaltung hinzugefügt von @jiannx
  - Problem mit E-Mails im selben Postfach zwischen mehreren Benutzern behoben und Leistung optimiert von @jiannx
  - Gesprächskette behoben von @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.71](https://www.nocobase.com/en/blog/v2.0.0-alpha.71)

*Veröffentlichungsdatum: 2026-02-10*

### 🎉 Neue Funktionen

- **[Client]**

  - Unterstützt die Konfiguration von Browser-Tab-Titeln für Seiten, Seiten-Tabs, Popups und Popup-Tabs ([#8590](https://github.com/nocobase/nocobase/pull/8590)) von @zhangzhonghe
  - Unterstützt die Konfiguration von Feldern des Assoziationssammlungsfelds im Formularblock ([#8578](https://github.com/nocobase/nocobase/pull/8578)) von @katherinehhh
- **[Block: GridCard]** Unterstützt konfigurierbare Blockhöhe ([#8583](https://github.com/nocobase/nocobase/pull/8583)) von @katherinehhh
- **[Aktion: Datensatz duplizieren]** 2.0 Duplizieraktion hinzugefügt ([#8580](https://github.com/nocobase/nocobase/pull/8580)) von @katherinehhh
- **[Workflow: Genehmigung]** ACL-Steuerung für Genehmigungs-APIs hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Verwendet unabhängige Feldmodelle für Assoziationsfelder in Filterformularen ([#8511](https://github.com/nocobase/nocobase/pull/8511)) von @zhangzhonghe
- **[Workflow: CC]** Überarbeitet das Workflow-CC-Plugin zur Unterstützung der FlowModel-Architektur mit v1/v2-Kompatibilität ([#8405](https://github.com/nocobase/nocobase/pull/8405)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Flow-Engine]**

  - Behebt einen falschen Ausführungskontext für "ctx.sql" in JS-Modellen. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) von @gchust
  - Behebt ein Problem, bei dem Blob-Objekte im JS-Block nicht erstellt werden konnten. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) von @gchust
- **[Client]**

  - Behebt ein Problem, bei dem Tabellenspalten nach dem Klicken auf "Ausführen" im JS-Spalteneditor nicht neu gerendert wurden. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) von @gchust
  - Behebt einen potenziellen "read hidden"-Renderfehler im Nicht-Konfigurationsmodus. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) von @gchust
  - Behebt, dass die Untertabelle (Inline-Bearbeitung) nach dem Wechsel in die schreibgeschützte Ansicht im Bearbeitungsformular weiterhin Spalten im Bearbeitungsmodus anzeigt ([#8589](https://github.com/nocobase/nocobase/pull/8589)) von @katherinehhh
- **[Flow-Engine]** Behebt ein Problem, bei dem die Verwendung einer Blockvorlage im Modus "Duplizieren" dazu führte, dass ein leeres Popup angezeigt wurde, wenn eine Aktionsschaltfläche aus dem Block angeklickt wurde. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) von @gchust
- **[Feldkomponente: Maske]** Behebt ein Problem, bei dem das Einstellungs-Popup für das Maskenfeld nicht alle Benutzerrollen korrekt laden konnte. von @gchust
- **[Workflow: Genehmigung]** Behebt falsche ID zum Laden des Detaildatensatzes von @mytharcher

### [v2.0.0-alpha.70](https://www.nocobase.com/en/blog/v2.0.0-alpha.70)

*Veröffentlichungsdatum: 2026-02-06*

### 🎉 Neue Funktionen

- **[Workflow]** Unterstützt Kopieren, Einfügen und Verschieben von Knoten per Drag-and-Drop auf der Workflow-Leinwand ([#8559](https://github.com/nocobase/nocobase/pull/8559)) von @mytharcher

### 🚀 Verbesserungen

- **[Workflow: Genehmigung]** Entfernt die Unterstützung für JS-Felder von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Block: Karte]** Behebt doppelte Konfigurationsoptionen 'Als Vorlage speichern' im Kartenblock ([#8584](https://github.com/nocobase/nocobase/pull/8584)) von @katherinehhh

### [v2.0.0-alpha.69](https://www.nocobase.com/en/blog/v2.0.0-alpha.69)

*Veröffentlichungsdatum: 2026-02-05*

### 🎉 Neue Funktionen

- **[Client]** Unterstützt die Konfiguration des Datenlademodus ([#8551](https://github.com/nocobase/nocobase/pull/8551)) von @zhangzhonghe
- **[Flow-Engine]** Unterstützt env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) von @chenos
- **[Auth: DingTalk]** Ermöglicht das Binden von Benutzern mit `unionId` von @2013xile

### 🚀 Verbesserungen

- **[Flow-Engine]** Verbessert die Autovervollständigung und Code-Hinweise im JS-Modell-Code-Editor. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) von @gchust
- **[Client]**

  - Passt die Spaltenbreiteneinstellung auf Dropdown-Auswahl in der inline bearbeitbaren Untertabelle an ([#8561](https://github.com/nocobase/nocobase/pull/8561)) von @katherinehhh
  - Unterstützt das Deaktivieren redundanter Standard-Append-Parameter für `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) von @2013xile
- **[ACL]** ACL fügt die Methode generalFixedParams hinzu ([#8363](https://github.com/nocobase/nocobase/pull/8363)) von @jiannx
- **[Sammlungsfeld: Markdown(Vditor)]** Eine Konfigurationsoption hinzugefügt, um den Standard-Editormodus in den Komponenteneinstellungen festzulegen. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) von @Cyx649312038
- **[Workflow]** Ändert den Routenpfad von Workflow-Unterseiten, um alle Workflow-Seiten unter das Präfix `/admin/settings/workflow` zu legen ([#8519](https://github.com/nocobase/nocobase/pull/8519)) von @mytharcher
- **[KI: Wissensdatenbank]** Optimiert die Build-Ausgabe, um die Paketgröße von plugin-ai-knowledge-base zu reduzieren. von @cgyrock
- **[Multi-Space]** Multi-Space-Berechtigungssteuerung greift auf ACL zu von @jiannx
- **[Auth: DingTalk]** Verwendet `userid` als Standardschlüssel für die Benutzerzuordnung, während die Kompatibilität mit bestehenden Authentifikatoren, die auf Mobiltelefon angewiesen sind, erhalten bleibt von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behebt, dass ein Seiten-Refresh erforderlich ist, um einen untergeordneten Datensatz nach dem Aktivieren der Baumtabelle hinzuzufügen ([#8574](https://github.com/nocobase/nocobase/pull/8574)) von @katherinehhh
  - Behebt Probleme mit leeren Bereichen im Grid-Layout ([#8535](https://github.com/nocobase/nocobase/pull/8535)) von @zhangzhonghe
  - Behebt, dass die Spaltenbreite in der Untertabelle (Inline-Bearbeitung) nicht aktualisiert wird; mehrzeilige Texteingabe passt sich nicht an die Spaltenbreite an ([#8573](https://github.com/nocobase/nocobase/pull/8573)) von @katherinehhh
  - Behebt ein Problem, bei dem die Verwendung von "Schnellerstellung" der Assoziationsdatensatzauswahl im Bearbeitungsformular vorhandene Formulardaten überschrieb. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) von @gchust
  - Behebt: "Baumtabelle aktivieren" und "Alle Zeilen standardmäßig erweitern" für Nicht-Baum-Sammlungen ausblenden ([#8566](https://github.com/nocobase/nocobase/pull/8566)) von @katherinehhh
  - Behebt ein Problem, bei dem das Menü "Formular (Neu hinzufügen)" fälschlicherweise im Aktions-Popup "Neu erstellen" angezeigt wurde. ([#8562](https://github.com/nocobase/nocobase/pull/8562)) von @gchust
  - Behebt, dass das nanoid-Feld nach dem Absenden der Erstellung keinen neuen Standardwert generiert ([#8538](https://github.com/nocobase/nocobase/pull/8538)) von @katherinehhh
  - Behebt ein Problem, bei dem der Ereignisfluss beim Aktualisieren von Zielblöcken über ein Popup hinweg fehlschlug. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) von @gchust
  - Behebt bekannte Probleme im Zusammenhang mit der Filterung ([#8514](https://github.com/nocobase/nocobase/pull/8514)) von @zhangzhonghe
  - Behebt ein Problem, das dazu führte, dass der Datenblock nach dem Absenden eines Formulars wiederholt aktualisiert wurde. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) von @gchust
  - Behebt ein Problem, bei dem Seitendaten nach dem Öffnen und Schließen des Popups zum ersten Mal fälschlicherweise aktualisiert werden. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) von @gchust
  - Behebt ein Problem, das die Verwendung von Formularvariablen zur Wertzuweisung in Verknüpfungsregeln für mehrstufige 1:n-Unterformularfelder verhinderte. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) von @gchust
  - Behebt falsche Anzeige beim Festlegen von Standardwerten für das Cascader-Feldmodell ([#8537](https://github.com/nocobase/nocobase/pull/8537)) von @katherinehhh
  - Behebt ein Problem, bei dem Daten nach Änderungen über mehrere Ebenen von Popups und Blöcken hinweg nicht aktualisiert wurden. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) von @gchust
- **[Flow-Engine]**

  - Behebt, dass die Spaltenlöschaktion im Popup-Untertabellen-Edit nicht funktioniert, wenn createModelOptions konfiguriert ist ([#8576](https://github.com/nocobase/nocobase/pull/8576)) von @katherinehhh
  - Behebt ein Problem, bei dem das Absenden des Formulars nach dem Seitenwechsel die Seite nicht aktualisiert. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) von @gchust
  - Behebt ein Problem, bei dem einige Drittanbieter-Bibliotheken in JS-Blöcken nicht korrekt importiert werden konnten. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) von @gchust
  - Behebt falsches Laden einiger ESM-Bibliotheken in runjs aufgrund von Fehlklassifizierung als AMD-Module. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) von @gchust
  - Behebt das FilterByTK-Problem, wenn filterTargetKey ein einzelnes Element-Array in einer externen Datenquelle ist ([#8522](https://github.com/nocobase/nocobase/pull/8522)) von @katherinehhh
  - Behebt, dass die Spaltenlöschaktion im Popup-Untertabellen-Edit nicht funktioniert, wenn createModelOptions konfiguriert ist ([#8560](https://github.com/nocobase/nocobase/pull/8560)) von @katherinehhh
- **[Sammlungsfeld: Anhang (URL)]** Behebt, dass die Konfiguration der Dateinamenanzeige für das Anhang-URL-Feld im Bearbeitungsformular nicht funktioniert ([#8571](https://github.com/nocobase/nocobase/pull/8571)) von @katherinehhh
- **[KI-Mitarbeiter]**

  - Behebt ein Problem, bei dem der LLM-Knoten keine Nachrichten sendet ([#8569](https://github.com/nocobase/nocobase/pull/8569)) von @2013xile
  - Behebt das Problem, dass das System nach dem Build nicht starten kann ([#8523](https://github.com/nocobase/nocobase/pull/8523)) von @cgyrock
  - Behebt die Ausnahme, die auftritt, wenn Tools während der KI-Datenmodellierung automatisch aufgerufen werden ([#8532](https://github.com/nocobase/nocobase/pull/8532)) von @cgyrock
- **[UI-Vorlagen]** Behebt einen Fehler beim erneuten Öffnen und Absenden einer gespeicherten Popup-Vorlage für das Formular "Neu hinzufügen" des Assoziationsfelds. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) von @gchust
- **[Aktion: Datensätze importieren]** Behebt die Sicherheitslücke der Importaktion ([#8544](https://github.com/nocobase/nocobase/pull/8544)) von @mytharcher
- **[Dateimanager]** Sichert den Dateipfad für den lokalen Speicher, um Zugriffspfade außerhalb des Dokumentenverzeichnisses zu vermeiden ([#8539](https://github.com/nocobase/nocobase/pull/8539)) von @mytharcher
- **[Workflow]** Fügt Fehlertoleranz für die Sammlungsdatensatz-Auswahlkomponente hinzu, um Fehler beim Löschen der Sammlung zu vermeiden ([#8528](https://github.com/nocobase/nocobase/pull/8528)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebt das Problem, dass Parameter und Nutzdaten beim Auslösen eines benutzerdefinierten Workflows falsch sind von @mytharcher
- **[Multi-Space]**

  - Entfernt das read-pretty-Attribut für das Space-Feld von @jiannx
  - Fügt Migrationsskript hinzu, um x-ready-pretty im Space-Feld zu entfernen von @jiannx
- **[KI: Wissensdatenbank]** Behebt das Problem, dass das System nach dem Build nicht starten kann von @cgyrock
- **[Aktion: Datensätze importieren Pro]** Behebt Zählzahlen im Importergebnis und die Nachrichtenübersetzung von @mytharcher
- **[Workflow: Unterworkflow]** Behebt den Routenpfad des Workflow-Links von @mytharcher
- **[Vorlagendruck]** Behebt ein Problem mit der Feldlistenanzeige in der Konfiguration der Vorlagendruckaktion von @katherinehhh
- **[Workflow: Genehmigung]**

  - Behebt ein Leistungsproblem, das durch das JSON-Feld beim Laden von Listen (MySQL) verursacht wurde von @mytharcher
  - Fügt Fehlertoleranz beim Löschen des Workflows hinzu, um Ladefehler in der Aufgabenliste zu vermeiden von @mytharcher
  - Behebt einen Fehler, der beim Hinzufügen einer Rolle zu einem Benutzer ausgelöst wird, wenn der Workflow der Zielgruppen deaktiviert ist von @mytharcher
- **[E-Mail-Manager]** Der Textkörper klappt nicht zusammen, wenn Text ausgewählt ist. Fehler beim Herunterladen von Anhängen behoben von @jiannx
- **[WeCom]** Behebt ein Problem, bei dem Benutzer nicht automatisch registriert werden können, wenn die Mobilnummer fehlt von @2013xile
