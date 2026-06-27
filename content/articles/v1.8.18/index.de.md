---
title: "NocoBase v1.8.18: Kopieren Sie jedes Mal die neueste Instanz-ID in den Lizenz-Einstellungen"
description: "Versionshinweise zu v1.8.18"
---

### 🚀 Verbesserungen

- **[Workflow]** Das Knotenauswahlmenü zeigt Optionen jetzt in einem zweispaltigen Layout an, um die Informationsdichte zu erhöhen und Benutzern die gleichzeitige Ansicht weiterer Optionen zu ermöglichen ([#7396](https://github.com/nocobase/nocobase/pull/7396)) von @mytharcher

- **[Lizenzeinstellungen]** In den Lizenzeinstellungen wird bei jedem Vorgang die aktuelle Instanz-ID kopiert ([#7387](https://github.com/nocobase/nocobase/pull/7387)) von @jiannx

### 🐛 Fehlerbehebungen

- **[Client]**
  - Die Zahl 0 wird bei der Leerwert-Validierung von Verknüpfungsregeln als leer behandelt ([#7404](https://github.com/nocobase/nocobase/pull/7404)) von @katherinehhh

  - Textumbruch bei Link-Buttons behoben ([#7406](https://github.com/nocobase/nocobase/pull/7406)) von @mytharcher

- **[Mobil]** Falsches Anzeigeformat des Datumsfelds auf mobilen Geräten ([#7412](https://github.com/nocobase/nocobase/pull/7412)) von @katherinehhh

- **[Office-Dateivorschau]** Fehler beim Hochladen einer Datei in ein Anhang-URL-Feld behoben ([#7405](https://github.com/nocobase/nocobase/pull/7405)) von @mytharcher

- **[Workflow]** Fehler beim Bearbeiten einer Workflow-Kategorie behoben, bei dem Formulardaten verschwanden ([#7408](https://github.com/nocobase/nocobase/pull/7408)) von @mytharcher

- **[Workflow: E-Mail-Knoten]** Problem behoben, bei dem der E-Mail-Knoten die Ausführung möglicherweise nicht korrekt wieder aufnahm ([#7409](https://github.com/nocobase/nocobase/pull/7409)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Ausgewählte Zeilen werden nach erfolgreichem Auslösen von Aktionen für mehrere Datensätze gelöscht von @mytharcher

- **[Vorlagendruck]** Drucken von Optionsfeldern in mehreren Datenzeilen von @jiannx

- **[Workflow: Genehmigung]** Problem behoben, bei dem das Laden externer Datenquellen in Genehmigungsdatensätzen zu einem 404-Fehler führte von @mytharcher
