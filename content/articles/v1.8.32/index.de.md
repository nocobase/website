---
title: "NocoBase v1.8.32: Methoden zur Optimierung des Ladens lokalisierter Ressourcen"
description: "Versionshinweise zu v1.8.32"
---

### 🚀 Verbesserungen

- **[Server]** Optimierung der Methode zum Laden von l10n-Ressourcen, um eine Blockierung der Ereignisschleife zu verhindern ([#7653](https://github.com/nocobase/nocobase/pull/7653)) von @2013xile

- **[Cache]** Vermeidung von Leistungseinbußen durch das Klonen von Bloom-Filtern ([#7652](https://github.com/nocobase/nocobase/pull/7652)) von @2013xile

- **[Aktion: Datensätze importieren]** Verbesserte Fehlermeldungen, wenn Tabellenüberschriften fehlen ([#7656](https://github.com/nocobase/nocobase/pull/7656)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehler beim Löschen des Datumsfeldes im Filterblock behoben ([#7632](https://github.com/nocobase/nocobase/pull/7632)) von @katherinehhh

  - Verhindert Zeilenumbruch von Wörtern im FormItem-Label ([#7647](https://github.com/nocobase/nocobase/pull/7647)) von @katherinehhh

  - Fehler behoben, bei dem der Standardwert der Untertabelle im Bearbeitungsformular-Drawer nicht funktionierte ([#7631](https://github.com/nocobase/nocobase/pull/7631)) von @katherinehhh

- **[Sammlungsfeld: Verwaltungsgliederung Chinas]** Datenimport schlägt fehl, wenn Stadt und Gebiet denselben Namen haben ([#7673](https://github.com/nocobase/nocobase/pull/7673)) von @2013xile

- **[Workflow]**
  - Behebung des Problems, dass nach dem Löschen eines Knotens, der eine Verzweigung startet, der Schlüssel des ersten innerhalb der Verzweigung beibehaltenen Knotens fälschlicherweise auf einen neuen Wert geändert wurde ([#7665](https://github.com/nocobase/nocobase/pull/7665)) von @mytharcher

  - Behebung des Logger-Fehlers, der beim Stoppen der Anwendung ausgelöst wurde ([#7639](https://github.com/nocobase/nocobase/pull/7639)) von @mytharcher

- **[Dateimanager]** Behebung des Problems, dass `.msg`-Dateien nicht korrekt hochgeladen werden konnten ([#7662](https://github.com/nocobase/nocobase/pull/7662)) von @mytharcher

- **[Datenquelle: Hauptdatenquelle]** Behebung des Problems, dass Metadaten nach dem Erstellen eines inversen Assoziationsfeldes nicht über mehrere Knoten hinweg synchronisiert wurden ([#7628](https://github.com/nocobase/nocobase/pull/7628)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Behebung des Übersetzungsproblems des Statustextes in Genehmigungsabschlussbenachrichtigungen; es wird nun die Standardsprache des Systems zur Übersetzung verwendet, wenn der Benutzer keine Spracheinstellung vorgenommen hat von @mytharcher

  - Behebung des Problems, dass die Aufgabenanzahl nach dem Hinzufügen eines Bearbeiters nicht aktualisiert wurde von @mytharcher
