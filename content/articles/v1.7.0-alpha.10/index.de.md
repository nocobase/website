---
title: "NocoBase v1.7.0-alpha.10: Unterstützung der Variablenkonfiguration nach dem Absenden"
description: "Versionshinweise zu v1.7.0-alpha.10"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Variablenkonfiguration nach dem Absenden, ermöglicht Weiterleitung mit aktueller Daten-ID ([#6465](https://github.com/nocobase/nocobase/pull/6465)) von @katherinehhh

- **[Sammlungsfeld: Markdown(Vditor)]** Vditor unterstützt S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) von @zhangzhonghe

### 🚀 Verbesserungen

- **[Client]**
  - Nur Klartextdateien zur Vorschau unterstützen ([#6563](https://github.com/nocobase/nocobase/pull/6563)) von @mytharcher

  - Optimierung der 502-Fehlermeldung ([#6547](https://github.com/nocobase/nocobase/pull/6547)) von @chenos

  - Einschränkung verfügbarer Aktionen für verschiedene Feldeigenschaften in Verknüpfungsregeln ([#6548](https://github.com/nocobase/nocobase/pull/6548)) von @katherinehhh

- **[Workflow]** Ausgeführte Spalten in Statistiktabellen aufteilen ([#6534](https://github.com/nocobase/nocobase/pull/6534)) von @mytharcher

- **[Mobil]** Anpassung des Stils des Benachrichtigungs-Popups für mobile Geräte ([#6557](https://github.com/nocobase/nocobase/pull/6557)) von @zhangzhonghe

- **[Sammlungsfeld: Sequenz]** Unterstützung zum Festlegen der Sequenz als Titelfeld für Kalenderblöcke ([#6562](https://github.com/nocobase/nocobase/pull/6562)) von @katherinehhh

- **[Dateimanager]** Anpassung der `getFileData`-API des Speichers ([#6553](https://github.com/nocobase/nocobase/pull/6553)) von @mytharcher

- **[Zugriffskontrolle]** Optimierung der Reihenfolge und des Stils des Rollenwechsels ([#6555](https://github.com/nocobase/nocobase/pull/6555)) von @aaaaaajie

- **[Öffentliche Formulare]** Seitentitel des öffentlichen Formulars beim Erstellen auf den konfigurierten Titel setzen ([#6538](https://github.com/nocobase/nocobase/pull/6538)) von @katherinehhh

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Ausgeführte Spalten in Statistiktabellen aufteilen von @mytharcher

- **[Workflow: Genehmigung]**
  - Unterstützung zum Überspringen des Validators in den Einstellungen von @mytharcher

  - Ausgeführte Spalten in Statistiktabellen aufteilen von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ältere Browserversionen zeigen eine leere Seite an ([#6571](https://github.com/nocobase/nocobase/pull/6571)) von @zhangzhonghe

  - Kann innerhalb eines Modals kein weiteres Modal öffnen ([#6535](https://github.com/nocobase/nocobase/pull/6535)) von @zhangzhonghe

  - Die Option 'Überlaufenden Text mit Auslassungspunkten' erfordert eine Seitenaktualisierung, damit der Umschaltzustand wirksam wird ([#6520](https://github.com/nocobase/nocobase/pull/6520)) von @zhangzhonghe

  - Problem mit der Datumsfeldanzeige beim Filtern des Datenbereichs ([#6564](https://github.com/nocobase/nocobase/pull/6564)) von @katherinehhh

  - Das obere Menü der Seite wird leer angezeigt ([#6551](https://github.com/nocobase/nocobase/pull/6551)) von @zhangzhonghe

  - Die Aktion 'Als Vorlage speichern' schlägt fehl, wenn ein Assoziationsfeld enthalten ist ([#6543](https://github.com/nocobase/nocobase/pull/6543)) von @gchust

  - Die Variable 'Aktueller Benutzer' kann beim Hinzufügen einer Linkseite nicht verwendet werden ([#6536](https://github.com/nocobase/nocobase/pull/6536)) von @zhangzhonghe

  - Feldzuweisung mit Nullwert ist unwirksam ([#6549](https://github.com/nocobase/nocobase/pull/6549)) von @katherinehhh

  - Die Aktion 'Als Vorlage speichern' schlägt fehl, wenn ein Assoziationsfeld enthalten ist ([#6543](https://github.com/nocobase/nocobase/pull/6543)) von @gchust

  - Entfernen der Option 'Mehrfachauswahl zulassen' aus Dropdown-Einzelfeldern in Filterformularen ([#6515](https://github.com/nocobase/nocobase/pull/6515)) von @zhangzhonghe

  - Die Datenbereichsverknüpfung des relationalen Feldes ist nicht wirksam ([#6530](https://github.com/nocobase/nocobase/pull/6530)) von @zhangzhonghe

  - Fehler beim Befehl `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) von @gchust

  - Problem beim Ziehen und Ablegen von Tabellenzeilen-Schaltflächen ([#6544](https://github.com/nocobase/nocobase/pull/6544)) von @katherinehhh

- **[Mobil]** Anpassung der auf dem Telefon angezeigten Schriftgröße auf 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) von @zhangzhonghe

- **[Workflow]**
  - Fehlerbehebung beim Konfigurieren von Optionen zum automatischen Löschen ([#6560](https://github.com/nocobase/nocobase/pull/6560)) von @mytharcher

  - Sicherstellen, dass der Workflow-Schlüssel vor dem Speichern generiert wird ([#6567](https://github.com/nocobase/nocobase/pull/6567)) von @mytharcher

- **[Variablen und Geheimnisse]** Fehlender Icon-Filter-Button, Filteranzahl wird nicht angezeigt und Daten werden nach dem Filtern beim Seitenwechsel nicht aktualisiert ([#6568](https://github.com/nocobase/nocobase/pull/6568)) von @katherinehhh

- **[Öffentliche Formulare]** Problem mit dem Seitentitel des öffentlichen Formulars, der 'Laden...' anzeigt ([#6569](https://github.com/nocobase/nocobase/pull/6569)) von @katherinehhh

- **[API-Dokumentation]** API-Dokumentseite kann nicht gescrollt werden ([#6566](https://github.com/nocobase/nocobase/pull/6566)) von @zhangzhonghe

- **[Workflow: Nachaktionsereignis]** Mehrere Datensätze in einer Bulk-Aktion sollten mehrmals ausgelöst werden ([#6559](https://github.com/nocobase/nocobase/pull/6559)) von @mytharcher

- **[Block: Vorlage]**
  - Doppeltes Menü 'Als Vorlage speichern' im Detailblock ([#6558](https://github.com/nocobase/nocobase/pull/6558)) von @gchust

  - Verknüpfungsregeln des Formularblocks wurden nicht korrekt aus der Vorlage synchronisiert ([#6550](https://github.com/nocobase/nocobase/pull/6550)) von @gchust

- **[Authentifizierung]** Lokalisierungsproblem für Felder der Registrierungsseite ([#6556](https://github.com/nocobase/nocobase/pull/6556)) von @2013xile

- **[Aktion: Benutzerdefinierte Anfrage]** UTF-8-kodierte Dateien können nicht heruntergeladen werden ([#6541](https://github.com/nocobase/nocobase/pull/6541)) von @2013xile

- **[Sammlung: Baum]** Migrationsproblem für plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) von @2013xile

- **[Block: Mehrschritt-Formular]** Die Senden-Schaltfläche hat in ihrem Standard- und hervorgehobenen Zustand die gleiche Farbe von @jiannx

- **[Workflow: Genehmigung]** Korrektur der Genehmigungsformularwerte zum Senden von @mytharcher
