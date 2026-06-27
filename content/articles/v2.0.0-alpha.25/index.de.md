---
title: "NocoBase v2.0.0-alpha.25: Optimierte KI-Codierungserfahrung"
description: "Versionshinweise zu v2.0.0-alpha.25"
---

### 🚀 Verbesserungen

- **[Server]** Gateway-Log hinzugefügt ([#7683](https://github.com/nocobase/nocobase/pull/7683)) von @2013xile

- **[Flow-Engine]** Unterstützung zur Definition von Variablenkontexten in der Flussschritt-Definition ([#7674](https://github.com/nocobase/nocobase/pull/7674)) von @gchust

- **[Datenvisualisierung]**
  - Hinweis zum Ausführen der Abfrage vor dem Konfigurieren von Diagrammoptionen hinzugefügt ([#7685](https://github.com/nocobase/nocobase/pull/7685)) von @heziqiang

  - Diagrammdaten beim Klick auf die globale Vorschau-Schaltfläche aktualisieren ([#7678](https://github.com/nocobase/nocobase/pull/7678)) von @heziqiang

- **[KI-Mitarbeiter]** Optimierte KI-Codierungserfahrung, einschließlich der Nutzung von KI-Mitarbeitern zur Überprüfung, Diagnose und Behebung von Code. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) von @cgyrock

- **[Datenquellen-Manager]** Spaltenreihenfolge von Feldtyp und Schnittstelle angepasst und Bestätigungsschritt bei Änderungen hinzugefügt. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) von @2013xile

- **[Workflow]** Konfiguration des gebundenen Workflows für die Aktionsschaltfläche "Datensatz aktualisieren" abgeschlossen ([#7668](https://github.com/nocobase/nocobase/pull/7668)) von @mytharcher

- **[Multi-App-Manager (veraltet)]** App-Supervisor verbessert ([#7661](https://github.com/nocobase/nocobase/pull/7661)) von @chenos

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem Benutzer keine Standardwerte für Felder festlegen konnten, die im schreibgeschützten Modus angezeigt werden. Dies gewährleistet eine reibungslosere Feldkonfiguration, wenn Felder nicht bearbeitbar sind. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) von @gchust

  - Bekannte Probleme mit Verknüpfungsregeln für Unterformulare behoben ([#7698](https://github.com/nocobase/nocobase/pull/7698)) von @zhangzhonghe

  - Das Menü für JS-Blockfelder konnte im Filterformularblock nicht geladen werden ([#7690](https://github.com/nocobase/nocobase/pull/7690)) von @gchust

- **[Flow-Engine]** Falsche Kontextauswahl des aktuellen Popup-Datensatzes beim Bearbeiten des Datenbereichs eines verknüpften Feldes innerhalb eines Bearbeitungsformulars ([#7675](https://github.com/nocobase/nocobase/pull/7675)) von @gchust

- **[Workflow: Manueller Knoten]** Problem behoben, bei dem manuelle Aufgaben nach Deaktivierung des Workflows verschwanden ([#7687](https://github.com/nocobase/nocobase/pull/7687)) von @mytharcher

- **[KI-Mitarbeiter]** Problem behoben, bei dem Blöcke mit verknüpften API-Ressourcen beim Auswählen keine entsprechenden Daten abriefen. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) von @cgyrock

- **[Workflow]** Problem behoben, bei dem nach dem Löschen eines Knotens, der eine Verzweigung startet, der Schlüssel des ersten innerhalb der Verzweigung verbleibenden Knotens fälschlicherweise in einen neuen Wert geändert wurde ([#7665](https://github.com/nocobase/nocobase/pull/7665)) von @mytharcher

- **[Sammlungsfeld: Verwaltungsgliederung Chinas]** Datenimport schlägt fehl, wenn Stadt und Gebiet denselben Namen haben ([#7673](https://github.com/nocobase/nocobase/pull/7673)) von @2013xile

- **[Dateimanager]** Problem behoben, dass `.msg`-Dateien nicht korrekt hochgeladen werden konnten ([#7662](https://github.com/nocobase/nocobase/pull/7662)) von @mytharcher

- **[Flow-Engine]** Variablen in der Aktion "Verknüpfte Felder setzen" konnten nicht aufgelöst werden ([#7684](https://github.com/nocobase/nocobase/pull/7684)) von @gchust

- **[Datenvisualisierung]** Verwendung der sql:runById-API zum Abrufen von Abfragedaten bei der Initialisierung ([#7677](https://github.com/nocobase/nocobase/pull/7677)) von @heziqiang

- **[Workflow: Genehmigung]** Übersetzungsproblem des Statustextes in Genehmigungsabschlussbenachrichtigungen behoben; es wird nun die Standardsprache des Systems zur Übersetzung verwendet, wenn der Benutzer keine Spracheinstellung vorgenommen hat von @mytharcher
