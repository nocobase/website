---
title: "NocoBase v1.9.0-beta.9: Tabellenblöcke unterstützen das Hinzufügen einer Schaltfläche 'Spalteneinstellungen'"
description: "Versionshinweise zu v1.9.0-beta.9"
---

### 🎉 Neue Funktionen

- **[Client]**

  - Tabellenblöcke unterstützen das Hinzufügen einer Schaltfläche „Spalteneinstellungen“ zum Konfigurieren der Spaltenreihenfolge und -sichtbarkeit ([#7204](https://github.com/nocobase/nocobase/pull/7204)) von @kerwin612
  - Unterstützung von Feldvalidierungsregeln ([#7297](https://github.com/nocobase/nocobase/pull/7297)) von @aaaaaajie
- **[Datenquelle: Hauptdatenquelle]**

  - Unterstützung zum Lesen von Tabellen aus der Hauptdatenquelle ([#7238](https://github.com/nocobase/nocobase/pull/7238)) von @aaaaaajie
  - Unterstützung zur Anzeige von plugin-definierten Tabellen in der Hauptdatenquelle. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) von @aaaaaajie

### 🚀 Verbesserungen

- **[Client]** Unterstützung zum Drehen von Bildern während der Vorschau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) von @mytharcher
- **[snowflake-id]** Ändert die IDs von Systemtabellen mit automatisch inkrementierenden Primärschlüsseln, aber ohne eindeutige Identifikatoren, in 53-Bit-Snowflake-ähnliche IDs ([#7465](https://github.com/nocobase/nocobase/pull/7465)) von @2013xile
- **[Workflow]** Aufteilung der versandbezogenen Logik in einen eigenständigen Dispatcher ([#7535](https://github.com/nocobase/nocobase/pull/7535)) von @mytharcher
- **[RabbitMQ-Warteschlangenadapter]** Verbesserung der RabbitMQ-Verbindungsbehandlung und Nachrichtenverarbeitungslogik von @sdp-ncd
- **[E-Mail-Manager]**

  - Unterstützt Batch-Synchronisation von @jiannx
  - Rich-Editor unterstützt Bildgrößenänderung von @jiannx

### 🐛 Fehlerbehebungen

- **[Client]**

  - Behebt ein Problem, bei dem die Schaltfläche „Spalteneinstellungen“ Spalten aus der Tabelle innerhalb des modalen Dialogs lädt ([#7385](https://github.com/nocobase/nocobase/pull/7385)) von @kerwin612
  - Behebt das Problem, dass Untermenüs in der Seitenleiste nicht korrekt hervorgehoben werden können ([#7520](https://github.com/nocobase/nocobase/pull/7520)) von @duannyuuu
- **[Workflow]**

  - Behebt das Problem der doppelten Ausführung aufgrund unsachgemäßer Warteschlangenverarbeitung ([#7533](https://github.com/nocobase/nocobase/pull/7533)) von @mytharcher
  - Behebt das Problem, dass die Workflow-Listenbedingung beim Laden des assoziierten Feldkontexts in der gebundenen Workflow-Konfiguration falsch ist ([#7516](https://github.com/nocobase/nocobase/pull/7516)) von @mytharcher
  - Behebt das Problem, dass geplante Aufgaben basierend auf Datumsfeldern nach dem Start nicht ausgelöst werden ([#7524](https://github.com/nocobase/nocobase/pull/7524)) von @mytharcher
- **[Workflow: Schleifenknoten]** Behebt das Problem, dass der Prozess fälschlicherweise zum nächsten Element fortschritt, selbst wenn die Bedingungen des Schleifenknotens nicht erfüllt waren ([#7521](https://github.com/nocobase/nocobase/pull/7521)) von @mytharcher
- **[E-Mail-Manager]**

  - Betreff von Junk-E-Mails von @jiannx
  - Betreff von Junk-E-Mails von @jiannx
  - Rich-Editor unterstützt weiche Zeilenumbrüche von @jiannx
  - Unterstützt dieselbe E-Mail für mehrere Personen von @jiannx
  - Optimierte Leistung der E-Mail-Nachrichtenliste von @jiannx
  - Nach Auswahl von Zeilen „Gelesen“ und „Ungelesen“ setzen von @jiannx
  - rawId-Feld für Leistungsoptimierung hinzugefügt von @jiannx
  - ref-Attribut in HTML verursacht Rendering-Ausnahme von @jiannx
  - Submail-Inhalt kann nicht gefiltert werden von @jiannx
  - Unterstützt Resync von @jiannx
  - Manuelle Unterscheidung zwischen Weiterleiten und Antworten von @jiannx
