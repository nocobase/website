---
title: "NocoBase v1.9.0-alpha.12: Unterstützung von Feldvalidierungsregeln"
description: "Versionshinweise zu v1.9.0-alpha.12"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung von Feldvalidierungsregeln ([#7297](https://github.com/nocobase/nocobase/pull/7297)) von @aaaaaajie

- **[Workflow: Genehmigung]**
  - Inline-Vorlagentyp für Benachrichtigungskonfiguration hinzugefügt von @mytharcher

  - Unterstützung für einheitliche Aufgabentitel für alle Genehmigungsknoten im selben Workflow von @mytharcher

### 🚀 Verbesserungen

- **[Datenbank]** Optimierte ACL-Meta-Abfrageleistung ([#7400](https://github.com/nocobase/nocobase/pull/7400)) von @aaaaaajie

- **[Client]** Unterstützung der Anzeige von durch Zeichenketten identifizierten Symbolen in der Select-Komponente im schreibgeschützten Modus ([#7420](https://github.com/nocobase/nocobase/pull/7420)) von @mytharcher

- **[Mobil]** Optimierung der mobilen Popup-Komponente ([#7414](https://github.com/nocobase/nocobase/pull/7414)) von @zhangzhonghe

- **[Workflow]** Aktualisiertes Knotenauswahlmenü zur Anzeige von Optionen in einem zweispaltigen Layout, um die Informationsdichte zu verbessern und Benutzern die gleichzeitige Anzeige weiterer Optionen zu ermöglichen ([#7396](https://github.com/nocobase/nocobase/pull/7396)) von @mytharcher

- **[Lizenzeinstellungen]** In den Lizenzeinstellungen wird jedes Mal die neueste Instanz-ID kopiert ([#7387](https://github.com/nocobase/nocobase/pull/7387)) von @jiannx

- **[Benachrichtigung: In-App-Nachricht]** Entfernung von SQL-Protokollausgaben via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) von @2013xile

- **[Authentifizierung]** Entfernung des Token-Parameters aus der URL nach erfolgreicher Anmeldung ([#7386](https://github.com/nocobase/nocobase/pull/7386)) von @2013xile

- **[Vorlagendruck]** Unterstützung für m2m-Feld-Arrays von @jiannx

### 🐛 Fehlerbehebungen

- **[Datenbank]** Problem behoben, bei dem externe PostgreSQL-Tabellen Ansichten aus anderen Schemata einschlossen ([#7410](https://github.com/nocobase/nocobase/pull/7410)) von @aaaaaajie

- **[Client]**
  - Zahl 0 bei der Leerwert-Validierung von Verknüpfungsregeln als leer behandeln ([#7404](https://github.com/nocobase/nocobase/pull/7404)) von @katherinehhh

  - Problem behoben, bei dem die Schaltfläche "Spalteneinstellungen" Spalten aus der Tabelle innerhalb des modalen Dialogs lädt ([#7385](https://github.com/nocobase/nocobase/pull/7385)) von @kerwin612

  - Zeilenumbruch des Link-Button-Textes behoben ([#7406](https://github.com/nocobase/nocobase/pull/7406)) von @mytharcher

- **[Server]** Einige Anfragen fehlt `ctx.action`, was zu Fehlern in der Audit-Log-Middleware führt ([#7369](https://github.com/nocobase/nocobase/pull/7369)) von @2013xile

- **[Block: Vorlage]** Problem behoben, bei dem E-Mail-Blöcke innerhalb eines geerbten Vorlagenblocks nicht sichtbar waren ([#7430](https://github.com/nocobase/nocobase/pull/7430)) von @gchust

- **[Workflow: E-Mail-Knoten]** Problem behoben, bei dem der E-Mail-Knoten möglicherweise nicht ordnungsgemäß fortgesetzt wurde ([#7409](https://github.com/nocobase/nocobase/pull/7409)) von @mytharcher

- **[Mobil]**
  - Falsches Anzeigeformat des Datumsfeldes auf Mobilgeräten ([#7412](https://github.com/nocobase/nocobase/pull/7412)) von @katherinehhh

  - Problem behoben, bei dem die Formularübermittlungsdaten im mobilen Genehmigungsdialog falsch waren ([#7389](https://github.com/nocobase/nocobase/pull/7389)) von @zhangzhonghe

- **[Workflow]**
  - Fehler beim Bearbeiten der Workflow-Kategorie behoben, bei dem ein Fehler ausgelöst wurde und Formulardaten verschwanden ([#7408](https://github.com/nocobase/nocobase/pull/7408)) von @mytharcher

  - Übersetzung des Seitentitels im Workflow-Aufgabenzentrum korrigiert ([#7392](https://github.com/nocobase/nocobase/pull/7392)) von @mytharcher

- **[Office-Dateivorschau]** Fehler beim Hochladen einer Datei in ein Anhang-URL-Feld behoben ([#7405](https://github.com/nocobase/nocobase/pull/7405)) von @mytharcher

- **[Benachrichtigung: In-App-Nachricht]** Übersetzungen korrigiert ([#7384](https://github.com/nocobase/nocobase/pull/7384)) von @mytharcher

- **[Sammlungsfeld: Formel]** Problem behoben, bei dem die Formeleingabe aufgrund des Variablentyps die Validierung nicht bestand ([#7373](https://github.com/nocobase/nocobase/pull/7373)) von @mytharcher

- **[Dateimanager]** Hinweis zur Datei-Upload-Größenbeschränkung entfernt ([#7391](https://github.com/nocobase/nocobase/pull/7391)) von @mytharcher

- **[Kalender]** Tooltip von Kalenderereigniselementen zeigt [object Object] an ([#7372](https://github.com/nocobase/nocobase/pull/7372)) von @katherinehhh

- **[Aktion: Datensätze importieren Pro]** Zuweisung von Beziehungsfeldern während der Import-Duplikatserkennung nicht zulassen. von @aaaaaajie

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Ausgewählte Zeilen nach erfolgreichem Auslösen von Aktionen für mehrere Datensätze löschen von @mytharcher

- **[Vorlagendruck]** Drucken von Optionsfeldern in mehreren Datenzeilen von @jiannx

- **[Dateispeicher: S3(Pro)]**
  - Veralteten Parameter `attachmentField` als problematisch kennzeichnen von @mytharcher

  - Problem behoben, bei dem die IAM-Authentifizierungsmethode nicht zum Hochladen von Dateien verwendet werden konnte von @mytharcher

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem das Laden von Daten aus externen Datenquellen in Genehmigungsdatensätzen zu einem 404-Fehler führte von @mytharcher

  - Problem behoben, bei dem die Benutzerliste während der Gegenzeichnung leer war von @mytharcher

- **[Backup-Manager]** Große Dateisicherungen konnten als "erfolgreich" angezeigt werden, bevor sie tatsächlich abgeschlossen waren von @gchust

- **[Migrations-Manager]** Überspringen der von der neuesten pg_dump generierten Befehle `\restrict` und `\unrestrict` beim Erstellen von Migrationsdateien, um Wiederherstellungsfehler zu beheben. von @2013xile
