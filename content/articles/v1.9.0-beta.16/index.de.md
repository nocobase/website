---
title: "NocoBase v1.9.0-beta.16: Unterstützung des Trigger-Modus \"Vor dem Speichern von Daten\""
description: "Versionshinweise zu v1.9.0-beta.16"
---

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützung des Trigger-Modus "Vor dem Speichern der Daten" von @mytharcher

### 🚀 Verbesserungen

- **[Server]** Gateway-Log hinzugefügt ([#7683](https://github.com/nocobase/nocobase/pull/7683)) von @2013xile

- **[Workflow: Benachrichtigungsknoten]** Option `ignoreFail` für Benachrichtigungsknoten hinzugefügt, die es ermöglicht, den Workflow fortzusetzen, wenn das Senden der Benachrichtigung fehlschlägt ([#7736](https://github.com/nocobase/nocobase/pull/7736)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehlerbehebung bei der Konfiguration der QR-Code-Scan-Verknüpfungsregel im Aktionspanel ([#7693](https://github.com/nocobase/nocobase/pull/7693)) von @katherinehhh

  - Fehlerbehebung bei fehlgeschlagener Iframe-Block-Verknüpfungsregel innerhalb eines Modals ([#7694](https://github.com/nocobase/nocobase/pull/7694)) von @katherinehhh

- **[Datenbank]** Überspringen der Standardwertsynchronisierung für MySQL-JSON-Spalten ([#7696](https://github.com/nocobase/nocobase/pull/7696)) von @2013xile

- **[Workflow]**
  - Fehlerbehebung bei dem Problem, dass im Service-Splitting-Modus eine unsachgemäße Behandlung der ausstehenden In-Memory-Warteschlange dazu führte, dass einige Workflows nicht ausgeführt wurden ([#7692](https://github.com/nocobase/nocobase/pull/7692)) von @mytharcher

  - Fehlerbehebung beim Wert des Ausführungsstatus bei der Erstellung mit Verzögerung ([#7721](https://github.com/nocobase/nocobase/pull/7721)) von @mytharcher

  - Fehlerbehebung bei dem Problem, dass nach dem Löschen eines Knotens, der eine Verzweigung startet, der Schlüssel des ersten innerhalb der Verzweigung beibehaltenen Knotens fälschlicherweise in einen neuen Wert geändert wurde ([#7665](https://github.com/nocobase/nocobase/pull/7665)) von @mytharcher

- **[Zugriffskontrolle]** Fehlerbehebung bei der Reihenfolge der Middlewares von `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) von @2013xile

- **[Dateimanager]** Fehlerbehebung bei dem Problem, dass `.msg`-Dateien nicht korrekt hochgeladen werden konnten ([#7662](https://github.com/nocobase/nocobase/pull/7662)) von @mytharcher

- **[Workflow: Manueller Knoten]** Fehlerbehebung bei dem Problem, dass manuelle Aufgaben nach der Deaktivierung des Workflows verschwinden ([#7687](https://github.com/nocobase/nocobase/pull/7687)) von @mytharcher

- **[Sammlungsfeld: Verwaltungsgliederung Chinas]** Datenimport schlägt fehl, wenn Stadt und Bezirk denselben Namen haben ([#7673](https://github.com/nocobase/nocobase/pull/7673)) von @2013xile

- **[Workflow: Genehmigung]**
  - Fehlerbehebung bei der Übersetzung des Statustextes in Genehmigungsabschlussbenachrichtigungen; es wird die Standardsprache des Systems für die Übersetzung verwendet, wenn der Benutzer keine Spracheinstellung vorgenommen hat von @mytharcher

  - Fehlerbehebung bei Locales von @mytharcher
