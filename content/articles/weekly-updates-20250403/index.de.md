---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: Unterstützung für Blockvorlagen in Genehmigungsprozessformularen, Verbesserungen an Workflows und Fehlerbehebungen."
---

Fasse die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen findest du in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein. Hauptsächlich für die interne Entwicklung und schnelle Iterationen gedacht. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.11](https://www.nocobase.com/en/blog/v1.6.11)

*Veröffentlichungsdatum: 2025-03-27*

#### 🚀 Verbesserungen

- **[Client]**

  - Optimierung der 502-Fehlermeldung ([#6547](https://github.com/nocobase/nocobase/pull/6547)) von @chenos
  - Nur reine Textdateien zur Vorschau unterstützen ([#6563](https://github.com/nocobase/nocobase/pull/6563)) von @mytharcher
- **[Sammlungsfeld: Sequenz]** Unterstützung zum Setzen der Sequenz als Titelfeld für Kalenderblöcke ([#6562](https://github.com/nocobase/nocobase/pull/6562)) von @katherinehhh
- **[Workflow: Genehmigung]** Unterstützung zum Überspringen des Validators in den Einstellungen von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem mit der Anzeige von Datumsfeldern bei der Datenbereichsfilterung ([#6564](https://github.com/nocobase/nocobase/pull/6564)) von @katherinehhh
  - Die Option 'Ellipsis overflow content' erfordert eine Seitenaktualisierung, damit der Umschaltzustand wirksam wird ([#6520](https://github.com/nocobase/nocobase/pull/6520)) von @zhangzhonghe
  - Es kann kein weiteres Modal innerhalb eines Modals geöffnet werden ([#6535](https://github.com/nocobase/nocobase/pull/6535)) von @zhangzhonghe
- **[API-Dokumentation]** API-Dokumentseite kann nicht gescrollt werden ([#6566](https://github.com/nocobase/nocobase/pull/6566)) von @zhangzhonghe
- **[Workflow]** Sicherstellen, dass der Workflow-Schlüssel vor dem Speichern generiert wird ([#6567](https://github.com/nocobase/nocobase/pull/6567)) von @mytharcher
- **[Workflow: Nach-Aktions-Ereignis]** Mehrere Datensätze in einer Bulk-Aktion sollten mehrfach ausgelöst werden ([#6559](https://github.com/nocobase/nocobase/pull/6559)) von @mytharcher
- **[Authentifizierung]** Lokalisierungsproblem für Felder der Registrierungsseite ([#6556](https://github.com/nocobase/nocobase/pull/6556)) von @2013xile
- **[Öffentliche Formulare]** Problem mit dem Seitentitel öffentlicher Formulare, der 'Lädt...' anzeigt ([#6569](https://github.com/nocobase/nocobase/pull/6569)) von @katherinehhh

### [v1.6.12](https://www.nocobase.com/en/blog/v1.6.12)

*Veröffentlichungsdatum: 2025-03-27*

#### 🐛 Fehlerbehebungen

- **[Block: Mehrschritt-Formular]**

  - Der Senden-Button hat in seinem Standard- und hervorgehobenen Zustand dieselbe Farbe von @jiannx
  - Fehler behoben, bei dem das Zurücksetzen des Formulars ungültig war, wenn das Feld mit einem anderen Feld verknüpft ist von @jiannx
- **[Workflow: Genehmigung]** Korrektur der Genehmigungsformularwerte zum Senden von @mytharcher

### [v1.6.13](https://www.nocobase.com/en/blog/v1.6.13)

*Veröffentlichungsdatum: 2025-03-28*

#### 🚀 Verbesserungen

- **[Async-Task-Manager]** Optimierung der Import/Export-Buttons in Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) von @chenos
- **[Aktion: Datensätze exportieren Pro]** Optimierung der Import/Export-Buttons in Pro von @katherinehhh
- **[Migrationsmanager]** Erlaube das Überspringen des automatischen Backups und der Wiederherstellung für die Migration von @gchust

#### 🐛 Fehlerbehebungen

- **[Client]** Verknüpfungskonflikt zwischen gleichnamigen Assoziationsfeldern in verschiedenen Untertabellen innerhalb desselben Formulars ([#6577](https://github.com/nocobase/nocobase/pull/6577)) von @katherinehhh
- **[Aktion: Stapelbearbeitung]** Klicke auf den Stapelbearbeitungs-Button, konfiguriere das Pop-up-Fenster und öffne es erneut, das Pop-up-Fenster ist leer ([#6578](https://github.com/nocobase/nocobase/pull/6578)) von @zhangzhonghe

### [v1.6.14](https://www.nocobase.com/en/blog/v1.6.14)

*Veröffentlichungsdatum: 2025-03-29*

#### 🐛 Fehlerbehebungen

- **[Kalender]** Fehlende Daten an Grenzdaten in der wöchentlichen Kalenderansicht ([#6587](https://github.com/nocobase/nocobase/pull/6587)) von @katherinehhh
- **[Auth: OIDC]** Falsche Weiterleitung tritt auf, wenn der Callback-Pfad der String 'null' ist von @2013xile
- **[Workflow: Genehmigung]** Korrektur der falschen Konfiguration des Genehmigungsknotens nach Schemaänderung von @mytharcher

### [v1.6.15](https://www.nocobase.com/en/blog/v1.6.15)

*Veröffentlichungsdatum: 2025-04-01*

#### 🚀 Verbesserungen

- **[Datenbank]**

  - Trim-Option für Textfeld hinzugefügt ([#6603](https://github.com/nocobase/nocobase/pull/6603)) von @mytharcher
  - Trim-Option für String-Feld hinzugefügt ([#6565](https://github.com/nocobase/nocobase/pull/6565)) von @mytharcher
- **[Dateimanager]** Trim-Option für Textfelder der Speicher-Sammlung hinzugefügt ([#6604](https://github.com/nocobase/nocobase/pull/6604)) von @mytharcher
- **[Workflow]** Code verbessert ([#6589](https://github.com/nocobase/nocobase/pull/6589)) von @mytharcher
- **[Workflow: Genehmigung]** Unterstützung zur Verwendung von Blockvorlagen für das Genehmigungsprozessformular von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Datenbank]** Vermeide "datetimeNoTz"-Feldänderungen, wenn sich der Wert beim Aktualisieren eines Datensatzes nicht ändert ([#6588](https://github.com/nocobase/nocobase/pull/6588)) von @mytharcher
- **[Client]**

  - Assoziationsfeld (Auswahl) zeigt N/A an, wenn verwandte Sammlungsfelder offengelegt werden ([#6582](https://github.com/nocobase/nocobase/pull/6582)) von @katherinehhh
  - Behebung, dass die `disabled`-Eigenschaft nicht funktioniert, wenn `SchemaInitializerItem` `items` hat ([#6597](https://github.com/nocobase/nocobase/pull/6597)) von @mytharcher
  - Kaskadenproblem: 'Der Wert von xxx kann nicht im Array-Format sein' beim Löschen und erneuten Auswählen ([#6585](https://github.com/nocobase/nocobase/pull/6585)) von @katherinehhh
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem beim Filtern nach Feldern in einer Assoziationssammlung mit einem Viele-zu-viele (Array)-Feld ([#6596](https://github.com/nocobase/nocobase/pull/6596)) von @2013xile
- **[Öffentliche Formulare]** Ansichtsberechtigungen umfassen Liste und Abruf ([#6607](https://github.com/nocobase/nocobase/pull/6607)) von @chenos
- **[Authentifizierung]** Token-Zuweisung in `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) von @2013xile
- **[Workflow]** Korrektur der falschen Anzeige der Sync-Option ([#6595](https://github.com/nocobase/nocobase/pull/6595)) von @mytharcher
- **[Block: Karte]** Die Kartenverwaltungsvalidierung sollte bei Leerzeicheneingabe nicht bestanden werden ([#6575](https://github.com/nocobase/nocobase/pull/6575)) von @katherinehhh
- **[Workflow: Genehmigung]**

  - Korrektur der Client-Variablen zur Verwendung im Genehmigungsformular von @mytharcher
  - Korrektur des Verzweigungsmodus, wenn `endOnReject` auf `true` konfiguriert ist von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.10](https://www.nocobase.com/en/blog/v1.7.0-beta.10)

*Veröffentlichungsdatum: 2025-03-27*

#### 🎉 Neue Funktionen

- **[Client]** Unterstützung der Variablenkonfiguration nach dem Absenden, ermöglicht Weiterleitung mit aktueller Daten-ID ([#6465](https://github.com/nocobase/nocobase/pull/6465)) von @katherinehhh
- **[Sammlungsfeld: Markdown(Vditor)]** Vditor unterstützt S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) von @zhangzhonghe

#### 🚀 Verbesserungen

- **[Client]**

  - Nur reine Textdateien zur Vorschau unterstützen ([#6563](https://github.com/nocobase/nocobase/pull/6563)) von @mytharcher
  - Optimierung der 502-Fehlermeldung ([#6547](https://github.com/nocobase/nocobase/pull/6547)) von @chenos
  - Einschränkung der verfügbaren Aktionen für verschiedene Feldeigenschaften in Verknüpfungsregeln ([#6548](https://github.com/nocobase/nocobase/pull/6548)) von @katherinehhh
- **[Dateimanager]** Anpassung der `getFileData`-API des Speichers ([#6553](https://github.com/nocobase/nocobase/pull/6553)) von @mytharcher
- **[Zugriffskontrolle]** Optimierung der Reihenfolge und des Stils des Rollenwechsels ([#6555](https://github.com/nocobase/nocobase/pull/6555)) von @aaaaaajie
- **[Sammlungsfeld: Sequenz]** Unterstützung zum Setzen der Sequenz als Titelfeld für Kalenderblöcke ([#6562](https://github.com/nocobase/nocobase/pull/6562)) von @katherinehhh
- **[Workflow]** Ausgeführte Spalten in Statistiktabellen aufteilen ([#6534](https://github.com/nocobase/nocobase/pull/6534)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Ausgeführte Spalten in Statistiktabellen aufteilen von @mytharcher
- **[Workflow: Genehmigung]**

  - Ausgeführte Spalten in Statistiktabellen aufteilen von @mytharcher
  - Unterstützung zum Überspringen des Validators in den Einstellungen von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Ältere Browserversionen zeigen eine leere Seite an ([#6571](https://github.com/nocobase/nocobase/pull/6571)) von @zhangzhonghe
  - Die Option 'Ellipsis overflow content' erfordert eine Seitenaktualisierung, damit der Umschaltzustand wirksam wird ([#6520](https://github.com/nocobase/nocobase/pull/6520)) von @zhangzhonghe
  - Problem mit der Anzeige von Datumsfeldern bei der Datenbereichsfilterung ([#6564](https://github.com/nocobase/nocobase/pull/6564)) von @katherinehhh
  - Es kann kein weiteres Modal innerhalb eines Modals geöffnet werden ([#6535](https://github.com/nocobase/nocobase/pull/6535)) von @zhangzhonghe
  - 'Als Vorlage speichern'-Aktion schlägt fehl, wenn sie ein Assoziationsfeld enthält ([#6543](https://github.com/nocobase/nocobase/pull/6543)) von @gchust
  - Das obere Menü der Seite wird leer angezeigt ([#6551](https://github.com/nocobase/nocobase/pull/6551)) von @zhangzhonghe
  - Feldzuweisung mit null-Wert ist unwirksam ([#6549](https://github.com/nocobase/nocobase/pull/6549)) von @katherinehhh
- **[Workflow]**

  - Sicherstellen, dass der Workflow-Schlüssel vor dem Speichern generiert wird ([#6567](https://github.com/nocobase/nocobase/pull/6567)) von @mytharcher
  - Fehler behoben, der beim Konfigurieren der Auto-Delete-Optionen ausgelöst wird ([#6560](https://github.com/nocobase/nocobase/pull/6560)) von @mytharcher
- **[Öffentliche Formulare]** Problem mit dem Seitentitel öffentlicher Formulare, der 'Lädt...' anzeigt ([#6569](https://github.com/nocobase/nocobase/pull/6569)) von @katherinehhh
- **[Mobil]** Anpassung der auf dem Telefon angezeigten Schriftgröße auf 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) von @zhangzhonghe
- **[Variablen und Geheimnisse]** Fehlender Icon-Filter-Button, Filteranzahl wird nicht angezeigt und Daten werden nach dem Filtern beim Seitenwechsel nicht aktualisiert ([#6568](https://github.com/nocobase/nocobase/pull/6568)) von @katherinehhh
- **[Authentifizierung]** Lokalisierungsproblem für Felder der Registrierungsseite ([#6556](https://github.com/nocobase/nocobase/pull/6556)) von @2013xile
- **[API-Dokumentation]** API-Dokumentseite kann nicht gescrollt werden ([#6566](https://github.com/nocobase/nocobase/pull/6566)) von @zhangzhonghe
- **[Workflow: Nach-Aktions-Ereignis]** Mehrere Datensätze in einer Bulk-Aktion sollten mehrfach ausgelöst werden ([#6559](https://github.com/nocobase/nocobase/pull/6559)) von @mytharcher
- **[Block: Vorlage]**

  - Verknüpfungsregeln des Formularblocks wurden nicht korrekt aus der Vorlage synchronisiert ([#6550](https://github.com/nocobase/nocobase/pull/6550)) von @gchust
  - Doppeltes 'Als Vorlage speichern'-Menü im Detailblock ([#6558](https://github.com/nocobase/nocobase/pull/6558)) von @gchust
- **[Workflow: Genehmigung]** Korrektur der Genehmigungsformularwerte zum Senden von @mytharcher

### [v1.7.0-beta.11](https://www.nocobase.com/en/blog/v1.7.0-beta.11)

*Veröffentlichungsdatum: 2025-03-27*

#### 🐛 Fehlerbehebungen

- **[Block: Mehrschritt-Formular]** Der Senden-Button hat in seinem Standard- und hervorgehobenen Zustand dieselbe Farbe von @jiannx

### [v1.7.0-beta.12](https://www.nocobase.com/en/blog/v1.7.0-beta.12)

*Veröffentlichungsdatum: 2025-03-28*

#### 🎉 Neue Funktionen

- **[Block: Aktionspanel]** Füge einen onScanSuccess-Callback hinzu, um erfolgreiche Scans zu behandeln und die Kamera-Benutzeroberfläche zu verlassen. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) von @sheldon66

#### 🚀 Verbesserungen

- **[Async-Task-Manager]** Optimierung der Import/Export-Buttons in Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) von @chenos
- **[Aktion: Datensätze exportieren Pro]** Optimierung der Import/Export-Buttons in Pro von @katherinehhh
- **[Migrationsmanager]** Erlaube das Überspringen des automatischen Backups und der Wiederherstellung für die Migration von @gchust

#### 🐛 Fehlerbehebungen

- **[Client]** Verknüpfungskonflikt zwischen gleichnamigen Assoziationsfeldern in verschiedenen Untertabellen innerhalb desselben Formulars ([#6577](https://github.com/nocobase/nocobase/pull/6577)) von @katherinehhh
- **[Kalender]** Fehlende Daten an Grenzdaten in der wöchentlichen Kalenderansicht ([#6587](https://github.com/nocobase/nocobase/pull/6587)) von @katherinehhh
- **[Zugriffskontrolle]** Falsche aktuelle Rollenzuweisung während des Logins ([#6581](https://github.com/nocobase/nocobase/pull/6581)) von @aaaaaajie
- **[Aktion: Stapelbearbeitung]** Klicke auf den Stapelbearbeitungs-Button, konfiguriere das Pop-up-Fenster und öffne es erneut, das Pop-up-Fenster ist leer ([#6578](https://github.com/nocobase/nocobase/pull/6578)) von @zhangzhonghe
- **[Block: Mehrschritt-Formular]** Fehler behoben, bei dem das Zurücksetzen des Formulars ungültig war, wenn das Feld mit einem anderen Feld verknüpft ist von @jiannx
- **[Workflow: Genehmigung]** Korrektur der falschen Konfiguration des Genehmigungsknotens nach Schemaänderung von @mytharcher

### [v1.7.0-beta.13](https://www.nocobase.com/en/blog/v1.7.0-beta.13)

*Veröffentlichungsdatum: 2025-04-01*

#### 🚀 Verbesserungen

- **[Datenbank]**

  - Trim-Option für Textfeld hinzugefügt ([#6603](https://github.com/nocobase/nocobase/pull/6603)) von @mytharcher
  - Trim-Option für String-Feld hinzugefügt ([#6565](https://github.com/nocobase/nocobase/pull/6565)) von @mytharcher
- **[Client]** Unterstützung zur Konfiguration der Sichtbarkeit von Doppelpunkten in Formularfeldbeschriftungen basierend auf dem Layout ([#6561](https://github.com/nocobase/nocobase/pull/6561)) von @katherinehhh
- **[Dateimanager]** Trim-Option für Textfelder der Speicher-Sammlung hinzugefügt ([#6604](https://github.com/nocobase/nocobase/pull/6604)) von @mytharcher
- **[Workflow]** Code verbessert ([#6589](https://github.com/nocobase/nocobase/pull/6589)) von @mytharcher
- **[Workflow: Genehmigung]** Unterstützung zur Verwendung von Blockvorlagen für das Genehmigungsprozessformular von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Datenbank]**

  - Vermeide "datetimeNoTz"-Feldänderungen, wenn sich der Wert beim Aktualisieren eines Datensatzes nicht ändert ([#6588](https://github.com/nocobase/nocobase/pull/6588)) von @mytharcher
  - Beim Löschen von Eins-zu-Viele-Datensätzen werden sowohl `filter` als auch `filterByTk` übergeben und `filter` enthält ein Assoziationsfeld, wird `filterByTk` ignoriert ([#6606](https://github.com/nocobase/nocobase/pull/6606)) von @2013xile
- **[Client]**

  - Behebung, dass die `disabled`-Eigenschaft nicht funktioniert, wenn `SchemaInitializerItem` `items` hat ([#6597](https://github.com/nocobase/nocobase/pull/6597)) von @mytharcher
  - Kaskadenproblem: 'Der Wert von xxx kann nicht im Array-Format sein' beim Löschen und erneuten Auswählen ([#6585](https://github.com/nocobase/nocobase/pull/6585)) von @katherinehhh
  - Assoziationsfeld (Auswahl) zeigt N/A an, wenn verwandte Sammlungsfelder offengelegt werden ([#6582](https://github.com/nocobase/nocobase/pull/6582)) von @katherinehhh
  - Senden- und Aktualisieren-Buttons zeigen den Nur-Symbol-Modus nicht korrekt an ([#6592](https://github.com/nocobase/nocobase/pull/6592)) von @katherinehhh
- **[Öffentliche Formulare]** Ansichtsberechtigungen umfassen Liste und Abruf ([#6607](https://github.com/nocobase/nocobase/pull/6607)) von @chenos
- **[Authentifizierung]** Token-Zuweisung in `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) von @2013xile
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem beim Filtern nach Feldern in einer Assoziationssammlung mit einem Viele-zu-viele (Array)-Feld ([#6596](https://github.com/nocobase/nocobase/pull/6596)) von @2013xile
- **[Workflow]** Korrektur der falschen Anzeige der Sync-Option ([#6595](https://github.com/nocobase/nocobase/pull/6595)) von @mytharcher
- **[Block: Karte]** Die Kartenverwaltungsvalidierung sollte bei Leerzeicheneingabe nicht bestanden werden ([#6575](https://github.com/nocobase/nocobase/pull/6575)) von @katherinehhh
- **[Auth: OIDC]** Falsche Weiterleitung tritt auf, wenn der Callback-Pfad der String 'null' ist von @2013xile
- **[Workflow: Genehmigung]**

  - Korrektur der Client-Variablen zur Verwendung im Genehmigungsformular von @mytharcher
  - Korrektur des Verzweigungsmodus, wenn `endOnReject` auf `true` konfiguriert ist von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.10](https://www.nocobase.com/en/blog/v1.7.0-alpha.10)

*Veröffentlichungsdatum: 2025-03-25*

#### 🎉 Neue Funktionen

- **[Client]** Unterstützung der Variablenkonfiguration nach dem Absenden, ermöglicht Weiterleitung mit aktueller Daten-ID ([#6465](https://github.com/nocobase/nocobase/pull/6465)) von @katherinehhh
- **[Sammlungsfeld: Markdown(Vditor)]** Vditor unterstützt S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) von @zhangzhonghe

#### 🚀 Verbesserungen

- **[Client]**

  - Nur reine Textdateien zur Vorschau unterstützen ([#6563](https://github.com/nocobase/nocobase/pull/6563)) von @mytharcher
  - Optimierung der 502-Fehlermeldung ([#6547](https://github.com/nocobase/nocobase/pull/6547)) von @chenos
  - Einschränkung der verfügbaren Aktionen für verschiedene Feldeigenschaften in Verknüpfungsregeln ([#6548](https://github.com/nocobase/nocobase/pull/6548)) von @katherinehhh
- **[Workflow]** Ausgeführte Spalten in Statistiktabellen aufteilen ([#6534](https://github.com/nocobase/nocobase/pull/6534)) von @mytharcher
- **[Mobil]** Anpassung des Stils des Benachrichtigungs-Pop-ups für mobile Geräte ([#6557](https://github.com/nocobase/nocobase/pull/6557)) von @zhangzhonghe
- **[Sammlungsfeld: Sequenz]** Unterstützung zum Setzen der Sequenz als Titelfeld für Kalenderblöcke ([#6562](https://github.com/nocobase/nocobase/pull/6562)) von @katherinehhh
- **[Dateimanager]** Anpassung der `getFileData`-API des Speichers ([#6553](https://github.com/nocobase/nocobase/pull/6553)) von @mytharcher
- **[Zugriffskontrolle]** Optimierung der Reihenfolge und des Stils des Rollenwechsels ([#6555](https://github.com/nocobase/nocobase/pull/6555)) von @aaaaaajie
- **[Öffentliche Formulare]** Setze den Seitentitel des öffentlichen Formulars auf den konfigurierten Titel bei der Erstellung ([#6538](https://github.com/nocobase/nocobase/pull/6538)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Ausgeführte Spalten in Statistiktabellen aufteilen von @mytharcher
- **[Workflow: Genehmigung]**

  - Unterstützung zum Überspringen des Validators in den Einstellungen von @mytharcher
  - Ausgeführte Spalten in Statistiktabellen aufteilen von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Ältere Browserversionen zeigen eine leere Seite an ([#6571](https://github.com/nocobase/nocobase/pull/6571)) von @zhangzhonghe
  - Es kann kein weiteres Modal innerhalb eines Modals geöffnet werden ([#6535](https://github.com/nocobase/nocobase/pull/6535)) von @zhangzhonghe
  - Die Option 'Ellipsis overflow content' erfordert eine Seitenaktualisierung, damit der Umschaltzustand wirksam wird ([#6520](https://github.com/nocobase/nocobase/pull/6520)) von @zhangzhonghe
  - Problem mit der Anzeige von Datumsfeldern bei der Datenbereichsfilterung ([#6564](https://github.com/nocobase/nocobase/pull/6564)) von @katherinehhh
  - Das obere Menü der Seite wird leer angezeigt ([#6551](https://github.com/nocobase/nocobase/pull/6551)) von @zhangzhonghe
  - 'Als Vorlage speichern'-Aktion schlägt fehl, wenn sie ein Assoziationsfeld enthält ([#6543](https://github.com/nocobase/nocobase/pull/6543)) von @gchust
  - Die Variable 'Aktueller Benutzer' kann beim Hinzufügen einer Linkseite nicht verwendet werden ([#6536](https://github.com/nocobase/nocobase/pull/6536)) von @zhangzhonghe
  - Feldzuweisung mit null-Wert ist unwirksam ([#6549](https://github.com/nocobase/nocobase/pull/6549)) von @katherinehhh
  - 'Als Vorlage speichern'-Aktion schlägt fehl, wenn sie ein Assoziationsfeld enthält ([#6543](https://github.com/nocobase/nocobase/pull/6543)) von @gchust
  - Entferne die Option 'Mehrfachauswahl zulassen' von Dropdown-Einzelfeldern in Filterformularen ([#6515](https://github.com/nocobase/nocobase/pull/6515)) von @zhangzhonghe
  - Die Datenbereichsverknüpfung des relationalen Feldes ist nicht wirksam ([#6530](https://github.com/nocobase/nocobase/pull/6530)) von @zhangzhonghe
  - `yarn doc`-Befehl Fehler ([#6540](https://github.com/nocobase/nocobase/pull/6540)) von @gchust
  - Drag-and-Drop-Problem des Tabellenzeilen-Buttons ([#6544](https://github.com/nocobase/nocobase/pull/6544)) von @katherinehhh
- **[Mobil]** Anpassung der auf dem Telefon angezeigten Schriftgröße auf 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) von @zhangzhonghe
- **[Workflow]**

  - Fehler behoben, der beim Konfigurieren der Auto-Delete-Optionen ausgelöst wird ([#6560](https://github.com/nocobase/nocobase/pull/6560)) von @mytharcher
  - Sicherstellen, dass der Workflow-Schlüssel vor dem Speichern generiert wird ([#6567](https://github.com/nocobase/nocobase/pull/6567)) von @mytharcher
- **[Variablen und Geheimnisse]** Fehlender Icon-Filter-Button, Filteranzahl wird nicht angezeigt und Daten werden nach dem Filtern beim Seitenwechsel nicht aktualisiert ([#6568](https://github.com/nocobase/nocobase/pull/6568)) von @katherinehhh
- **[Öffentliche Formulare]** Problem mit dem Seitentitel öffentlicher Formulare, der 'Lädt...' anzeigt ([#6569](https://github.com/nocobase/nocobase/pull/6569)) von @katherinehhh
- **[API-Dokumentation]** API-Dokumentseite kann nicht gescrollt werden ([#6566](https://github.com/nocobase/nocobase/pull/6566)) von @zhangzhonghe
- **[Workflow: Nach-Aktions-Ereignis]** Mehrere Datensätze in einer Bulk-Aktion sollten mehrfach ausgelöst werden ([#6559](https://github.com/nocobase/nocobase/pull/6559)) von @mytharcher
- **[Block: Vorlage]**

  - Doppeltes 'Als Vorlage speichern'-Menü im Detailblock ([#6558](https://github.com/nocobase/nocobase/pull/6558)) von @gchust
  - Verknüpfungsregeln des Formularblocks wurden nicht korrekt aus der Vorlage synchronisiert ([#6550](https://github.com/nocobase/nocobase/pull/6550)) von @gchust
- **[Authentifizierung]** Lokalisierungsproblem für Felder der Registrierungsseite ([#6556](https://github.com/nocobase/nocobase/pull/6556)) von @2013xile
- **[Aktion: Benutzerdefinierte Anfrage]** UTF-8-kodierte Dateien können nicht heruntergeladen werden ([#6541](https://github.com/nocobase/nocobase/pull/6541)) von @2013xile
- **[Sammlung: Baum]** Migrationsproblem für plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) von @2013xile
- **[Block: Mehrschritt-Formular]** Der Senden-Button hat in seinem Standard- und hervorgehobenen Zustand dieselbe Farbe von @jiannx
- **[Workflow: Genehmigung]** Korrektur der Genehmigungsformularwerte zum Senden von @mytharcher
