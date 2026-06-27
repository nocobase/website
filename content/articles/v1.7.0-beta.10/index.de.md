---
title: "NocoBase v1.7.0-beta.10: Unterstützung der Variablenkonfiguration nach dem Absenden"
description: "Versionshinweise zu v1.7.0-beta.10"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Variablenkonfiguration nach dem Absenden, ermöglicht Weiterleitung mit aktueller Daten-ID ([#6465](https://github.com/nocobase/nocobase/pull/6465)) von @katherinehhh

- **[Sammlungsfeld: Markdown(Vditor)]** Vditor unterstützt S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) von @zhangzhonghe

### 🚀 Verbesserungen

- **[Client]**
  - Nur reine Textdateien zur Vorschau unterstützen ([#6563](https://github.com/nocobase/nocobase/pull/6563)) von @mytharcher

  - Optimierung der 502-Fehlermeldung ([#6547](https://github.com/nocobase/nocobase/pull/6547)) von @chenos

  - Einschränkung der verfügbaren Aktionen für verschiedene Feldeigenschaften in Verknüpfungsregeln ([#6548](https://github.com/nocobase/nocobase/pull/6548)) von @katherinehhh

- **[Dateimanager]** Anpassung der `getFileData`-API des Speichers ([#6553](https://github.com/nocobase/nocobase/pull/6553)) von @mytharcher

- **[Zugriffskontrolle]** Optimierung der Reihenfolge und des Stils des Rollenwechsels ([#6555](https://github.com/nocobase/nocobase/pull/6555)) von @aaaaaajie

- **[Sammlungsfeld: Sequenz]** Unterstützung zum Festlegen der Sequenz als Titelfeld für Kalenderblöcke ([#6562](https://github.com/nocobase/nocobase/pull/6562)) von @katherinehhh

- **[Workflow]** Aufteilung der ausgeführten Spalten in Statistiktabellen ([#6534](https://github.com/nocobase/nocobase/pull/6534)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Aufteilung der ausgeführten Spalten in Statistiktabellen von @mytharcher

- **[Workflow: Genehmigung]**
  - Aufteilung der ausgeführten Spalten in Statistiktabellen von @mytharcher

  - Unterstützung zum Überspringen der Validierung in den Einstellungen von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ältere Browserversionen zeigen eine leere Seite an ([#6571](https://github.com/nocobase/nocobase/pull/6571)) von @zhangzhonghe

  - Die Option 'Überlaufenden Inhalt mit Auslassungspunkten' erfordert eine Seitenaktualisierung, damit der Umschaltzustand wirksam wird ([#6520](https://github.com/nocobase/nocobase/pull/6520)) von @zhangzhonghe

  - Problem mit der Anzeige von Datumsfeldern bei der Datenbereichsfilterung ([#6564](https://github.com/nocobase/nocobase/pull/6564)) von @katherinehhh

  - Unfähigkeit, innerhalb eines Modals ein weiteres Modal zu öffnen ([#6535](https://github.com/nocobase/nocobase/pull/6535)) von @zhangzhonghe

  - Die Aktion 'Als Vorlage speichern' schlägt fehl, wenn ein Assoziationsfeld enthalten ist ([#6543](https://github.com/nocobase/nocobase/pull/6543)) von @gchust

  - Das obere Menü der Seite wird leer angezeigt ([#6551](https://github.com/nocobase/nocobase/pull/6551)) von @zhangzhonghe

  - Feldzuweisung mit null-Wert ist unwirksam ([#6549](https://github.com/nocobase/nocobase/pull/6549)) von @katherinehhh

- **[Workflow]**
  - Sicherstellen, dass der Workflow-Schlüssel vor dem Speichern generiert wird ([#6567](https://github.com/nocobase/nocobase/pull/6567)) von @mytharcher

  - Fehlerbehebung beim Konfigurieren von Auto-Lösch-Optionen ([#6560](https://github.com/nocobase/nocobase/pull/6560)) von @mytharcher

- **[Öffentliche Formulare]** Problem mit dem Seitentitel öffentlicher Formulare, der 'Laden...' anzeigt ([#6569](https://github.com/nocobase/nocobase/pull/6569)) von @katherinehhh

- **[Mobil]** Anpassung der auf dem Telefon angezeigten Schriftgröße auf 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) von @zhangzhonghe

- **[Variablen und Geheimnisse]** Fehlender Icon-Filter-Button, Filteranzahl wird nicht angezeigt und Daten werden nach dem Filtern beim Seitenwechsel nicht aktualisiert ([#6568](https://github.com/nocobase/nocobase/pull/6568)) von @katherinehhh

- **[Authentifizierung]** Lokalisierungsproblem für Felder der Registrierungsseite ([#6556](https://github.com/nocobase/nocobase/pull/6556)) von @2013xile

- **[API-Dokumentation]** API-Dokumentationsseite kann nicht gescrollt werden ([#6566](https://github.com/nocobase/nocobase/pull/6566)) von @zhangzhonghe

- **[Workflow: Nachaktionsereignis]** Mehrere Datensätze in einer Bulk-Aktion sollten mehrfach ausgelöst werden ([#6559](https://github.com/nocobase/nocobase/pull/6559)) von @mytharcher

- **[Block: Vorlage]**
  - Verknüpfungsregeln des Formularblocks wurden nicht korrekt aus der Vorlage synchronisiert ([#6550](https://github.com/nocobase/nocobase/pull/6550)) von @gchust

  - Doppeltes Menü 'Als Vorlage speichern' im Detailblock ([#6558](https://github.com/nocobase/nocobase/pull/6558)) von @gchust

- **[Workflow: Genehmigung]** Fehlerbehebung bei den Werten des Genehmigungsformulars zum Absenden von @mytharcher
