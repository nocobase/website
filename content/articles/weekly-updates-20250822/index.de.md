---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: Unterstützung für die Verwendung eines einheitlichen Aufgabentitels für alle Genehmigungsknoten im selben Workflow, Vorlagendruck mit Unterstützung für Viele-zu-Viele-Arrays und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.18](https://www.nocobase.com/en/blog/v1.8.18)

*Veröffentlichungsdatum: 2025-08-19*

#### 🚀 Verbesserungen

- **[Workflow]** Das Knotenauswahlmenü wurde aktualisiert, um Optionen in einem zweispaltigen Layout anzuzeigen, um die Informationsdichte zu verbessern und Benutzern die gleichzeitige Anzeige von mehr Optionen zu ermöglichen ([#7396](https://github.com/nocobase/nocobase/pull/7396)) von @mytharcher
- **[Lizenzeinstellungen]** In den Lizenzeinstellungen wird jedes Mal die neueste Instanz-ID kopiert ([#7387](https://github.com/nocobase/nocobase/pull/7387)) von @jiannx

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Behandelt die Zahl 0 bei der Leerwert-Validierung von Verknüpfungsregeln als leer ([#7404](https://github.com/nocobase/nocobase/pull/7404)) von @katherinehhh
  - Behebt den Zeilenumbruch des Link-Button-Textes ([#7406](https://github.com/nocobase/nocobase/pull/7406)) von @mytharcher
- **[Mobil]** Falsches Anzeigeformat des Datumsfeldes auf mobilen Geräten ([#7412](https://github.com/nocobase/nocobase/pull/7412)) von @katherinehhh
- **[Office-Dateivorschau]** Behebt einen Fehler, der beim Hochladen einer Datei in ein Anhang-URL-Feld ausgelöst wird ([#7405](https://github.com/nocobase/nocobase/pull/7405)) von @mytharcher
- **[Workflow]** Behebt einen Fehler, der beim Bearbeiten einer Workflow-Kategorie ausgelöst wird und bei dem Formulardaten verschwinden ([#7408](https://github.com/nocobase/nocobase/pull/7408)) von @mytharcher
- **[Workflow: E-Mail-Knoten]** Behebt das Problem, dass der E-Mail-Knoten möglicherweise nicht ordnungsgemäß fortgesetzt wird ([#7409](https://github.com/nocobase/nocobase/pull/7409)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Löscht die ausgewählten Zeilen nach erfolgreichem Auslösen von Aktionen für mehrere Datensätze von @mytharcher
- **[Vorlagendruck]** Druck von Optionsfeld-Auswahlfeldern in mehreren Datenzeilen von @jiannx
- **[Workflow: Genehmigung]** Behebt das Problem, dass beim Laden von Daten aus externen Datenquellen in Genehmigungsdatensätzen ein 404-Fehler auftritt von @mytharcher

### [v1.8.17](https://www.nocobase.com/en/blog/v1.8.17)

*Veröffentlichungsdatum: 2025-08-15*

#### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützt die Verwendung eines konsistenten Aufgabentitels für alle Genehmigungsknoten im selben Workflow von @mytharcher

#### 🚀 Verbesserungen

- **[Authentifizierung]** Entfernt den Token-Parameter aus der URL nach erfolgreicher Anmeldung ([#7386](https://github.com/nocobase/nocobase/pull/7386)) von @2013xile
- **[Vorlagendruck]** Unterstützt das Feld m2m-Array von @jiannx

#### 🐛 Fehlerbehebungen

- **[Mobil]** Behebt das Problem, dass die Formularübermittlungsdaten im mobilen Genehmigungsdialog falsch sind ([#7389](https://github.com/nocobase/nocobase/pull/7389)) von @zhangzhonghe
- **[Workflow]** Behebt die Übersetzung des Seitentitels im Workflow-Aufgabenzentrum ([#7392](https://github.com/nocobase/nocobase/pull/7392)) von @mytharcher
- **[Kalender]** Tooltip von Kalenderereigniselementen zeigt [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) von @katherinehhh
- **[Benachrichtigung: In-App-Nachricht]** Behebt Übersetzungen ([#7384](https://github.com/nocobase/nocobase/pull/7384)) von @mytharcher
- **[Dateimanager]** Entfernt den Hinweis zur Datei-Upload-Größenbeschränkung ([#7391](https://github.com/nocobase/nocobase/pull/7391)) von @mytharcher
- **[Dateispeicher: S3(Pro)]**

  - Veraltet den problematischen Parameter `attachmentField` von @mytharcher
  - Behebt das Problem, dass die IAM-Authentifizierungsmethode nicht zum Hochladen von Dateien verwendet werden konnte von @mytharcher

### [v1.8.16](https://www.nocobase.com/en/blog/v1.8.16)

*Veröffentlichungsdatum: 2025-08-14*

#### 🚀 Verbesserungen

- **[Benachrichtigung: In-App-Nachricht]** Entfernt SQL-Protokollausgaben über `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) von @2013xile

#### 🐛 Fehlerbehebungen

- **[Server]** Einige Anfragen fehlen `ctx.action`, was zu Fehlern in der Audit-Log-Middleware führt ([#7369](https://github.com/nocobase/nocobase/pull/7369)) von @2013xile
- **[Sammlungsfeld: Formel]** Behebt das Problem, dass die Formeleingabe aufgrund des Variablentyps die Validierung nicht bestehen konnte ([#7373](https://github.com/nocobase/nocobase/pull/7373)) von @mytharcher
- **[Backup-Manager]** Große Datei-Backups konnten als „erfolgreich“ angezeigt werden, bevor sie tatsächlich abgeschlossen waren von @gchust
