---
title: "NocoBase v2.1.0-alpha.11: JS-Element-Aktion hinzugefügt"
description: "Versionshinweise zu v2.1.0-alpha.11"
---

### 🎉 Neue Funktionen

- **[Client]** JS-Element-Aktion hinzugefügt ([#8911](https://github.com/nocobase/nocobase/pull/8911)) von @jiannx

- **[KI-Mitarbeiter]** FÄHIGKEITEN-Funktion für KI-Mitarbeiter hinzugefügt. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) von @cgyrock

- **[Datenquellen-Manager]** Unterstützung für bedarfsgesteuertes Laden von MCP-Tools ([#8936](https://github.com/nocobase/nocobase/pull/8936)) von @2013xile

### 🚀 Verbesserungen

- **[Flow-Engine]** Schema-Validierung für die UI-Erstellungs-API verbessert. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) von @gchust

- **[Client]** Horizontales Layout von Formularaktionen optimiert ([#8869](https://github.com/nocobase/nocobase/pull/8869)) von @jiannx

- **[App]** Rsbuild-basierten Entwicklungs-Workflow für client-v1 hinzugefügt, während lokale Plugin-Entwicklung und die aktuelle `/v2/`-Topologie kompatibel bleiben ([#8902](https://github.com/nocobase/nocobase/pull/8902)) von @Molunerfinn

- **[Sammlungsfeld: Verwaltungsgliederung Chinas]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) von @jiannx

- **[Workflow]** Validierung für alle Trigger und Knoten hinzugefügt ([#8930](https://github.com/nocobase/nocobase/pull/8930)) von @mytharcher

- **[Workflow: Genehmigung]** Fehler behoben, bei dem ein JSON-Feld Leistungsprobleme beim Laden der Genehmigungsdatensatzliste verursachte von @mytharcher

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Status mit Feldkonfiguration synchronisiert, wenn ein Formularfeld gelöscht wird ([#8857](https://github.com/nocobase/nocobase/pull/8857)) von @jiannx

- **[Resourcer]** Problem behoben, bei dem externe Datenquellen nicht korrekt geladen werden konnten. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) von @2013xile

- **[Datenbank]** Warnung anstelle eines Fehlers verwendet, wenn einer der Append-Parameter ungültig ist ([#8923](https://github.com/nocobase/nocobase/pull/8923)) von @mytharcher

- **[Server]** Schließzeitpunkt von Pub-Sub auf `beforeStop` geändert, um zu vermeiden, dass Nachrichten nach dem Schließen der Datenbank gesendet oder verarbeitet werden ([#8934](https://github.com/nocobase/nocobase/pull/8934)) von @mytharcher

- **[Benutzerdefinierte Variablen]** Auth-Benachrichtigung überspringen ([#8942](https://github.com/nocobase/nocobase/pull/8942)) von @chenos

- **[KI-Mitarbeiter]** Fehlerhafte Testfälle im KI-Modul des Kernpakets behoben. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) von @cgyrock

- **[Lokalisierung]** Verhindert localizationTexts:missing-Anfrage bei fehlender Berechtigung ([#8903](https://github.com/nocobase/nocobase/pull/8903)) von @chenos

- **[Aktion: Datensätze importieren Pro]** Problem behoben, bei dem die Option "Workflow auslösen" nicht funktionierte, wenn sie nicht aktiviert war von @mytharcher

- **[Datenquelle: Externes Oracle]** Fehler behoben, der beim Laden der externen Oracle-Datenquelle auftritt von @2013xile

- **[Workflow: Genehmigung]** Übersetzung, Knotenauswahl und Rückgabeziel-Probleme im v2-Genehmigungsformular-Rückgabebutton behoben von @zhangzhonghe
