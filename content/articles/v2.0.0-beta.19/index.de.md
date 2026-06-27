---
title: "NocoBase v2.0.0-beta.19: DingTalk erlaubt Bindung von Benutzern mit `unionId`"
description: "Versionshinweise zu v2.0.0-beta.19"
---

### 🎉 Neue Funktionen

- **[Auth: DingTalk]** Ermöglicht die Bindung eines Benutzers mit `unionId` von @2013xile

### 🚀 Verbesserungen

- **[client]** Spaltenbreiteneinstellung auf Dropdown-Auswahl in inline bearbeitbaren Untertabellen umgestellt ([#8561](https://github.com/nocobase/nocobase/pull/8561)) von @katherinehhh

- **[Sammlungsfeld: Markdown(Vditor)]** Eine Konfigurationsoption hinzugefügt, um den Standard-Bearbeitungsmodus in den Komponenteneinstellungen festzulegen. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) von @Cyx649312038

- **[Multi-Space]** Multi-Space-Berechtigungssteuerung greift auf ACL zu von @jiannx

- **[KI: Wissensdatenbank]** Die Build-Ausgabe optimiert, um die Paketgröße von plugin-ai-knowledge-base zu reduzieren. von @cgyrock

### 🐛 Fehlerbehebungen

- **[client]**
  - Ein Problem behoben, bei dem die Verwendung der „Schnellerstellung“ des Verknüpfungsdatensatz-Auswahlfelds im Bearbeitungsformular vorhandene Formulardaten überschrieb. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) von @gchust

  - Leerraumprobleme im Grid-Layout behoben ([#8535](https://github.com/nocobase/nocobase/pull/8535)) von @zhangzhonghe

  - Problem behoben, bei dem nach dem Aktivieren der Baumtabelle ein Seiten-Refresh erforderlich war, um einen untergeordneten Datensatz hinzuzufügen ([#8574](https://github.com/nocobase/nocobase/pull/8574)) von @katherinehhh

  - Problem behoben, bei dem die Spaltenbreite in der Untertabelle (Inline-Bearbeitung) nicht aktualisiert wurde; mehrzeilige Texteingabe passte sich nicht an die Spaltenbreite an ([#8573](https://github.com/nocobase/nocobase/pull/8573)) von @katherinehhh

  - Ein Problem behoben, bei dem das Menü „Formular (Neu hinzufügen)“ fälschlicherweise im Popup der Aktion „Neu erstellen“ angezeigt wurde. ([#8562](https://github.com/nocobase/nocobase/pull/8562)) von @gchust

- **[flow-engine]**
  - Ein Problem behoben, bei dem einige Drittanbieter-Bibliotheken in JS-Blöcken nicht korrekt importiert werden konnten. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) von @gchust

  - Ein Problem behoben, bei dem das Absenden des Formulars nach dem Seitenwechsel die Seite nicht aktualisierte. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) von @gchust

- **[UI-Vorlagen]** Fehler beim erneuten Öffnen und Absenden einer gespeicherten Popup-Vorlage für das Formular „Neu hinzufügen“ des Verknüpfungsfelds behoben. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) von @gchust

- **[Sammlungsfeld: Anhang(URL)]** Problem behoben, bei dem die Konfiguration der Dateinamenanzeige des Anhang-URL-Felds im Bearbeitungsformular nicht funktionierte ([#8571](https://github.com/nocobase/nocobase/pull/8571)) von @katherinehhh

- **[KI-Mitarbeiter]** Ein Problem behoben, bei dem der LLM-Knoten keine Nachrichten senden konnte ([#8569](https://github.com/nocobase/nocobase/pull/8569)) von @2013xile

- **[Aktion: Datensätze importieren]** Sicherheitslücke der Importaktion behoben ([#8544](https://github.com/nocobase/nocobase/pull/8544)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem behoben, bei dem Parameter und Nutzlast beim Auslösen eines benutzerdefinierten Workflows falsch waren von @mytharcher

- **[Multi-Space]**
  - Migrationsskript hinzugefügt, um x-ready-pretty im Space-Feld zu entfernen von @jiannx

  - Das read-pretty-Attribut für das Space-Feld entfernt von @jiannx

- **[Workflow: Genehmigung]** Leistungsproblem behoben, das durch JSON-Felder in der Listendarstellung (MySQL) verursacht wurde von @mytharcher
