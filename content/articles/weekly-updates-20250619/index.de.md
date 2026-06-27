---
title: "NocoBase wöchentliche Updates: Unterstützung zum Ausfüllen von Eingabefeldern per QR-Code-Scan"
description: "Die Updates dieser Woche umfassen: Unterstützung zum einmaligen Kopieren von Textfeldinhalten, E-Mail-Synchronisationsintervall-Einstellungen und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.14](https://www.nocobase.com/en/blog/v1.7.14)

*Veröffentlichungsdatum: 2025-06-18*

#### 🚀 Verbesserungen

- **[client]** Aktionsleiste des Grid-Karten-Blocks bei Leerstand automatisch ausblenden ([#7069](https://github.com/nocobase/nocobase/pull/7069)) von @zhangzhonghe
- **[Verification]** Entferne Verifizierer-Optionen aus der Antwort der `verifiers:listByUser`-API ([#7090](https://github.com/nocobase/nocobase/pull/7090)) von @2013xile

#### 🐛 Fehlerbehebungen

- **[database]** Unterstützung für Assoziationsaktualisierungen in updateOrCreate und firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) von @chenos
- **[client]**

  - URL-Abfrageparameter-Variablen funktionieren nicht im Standardwert von öffentlichen Formularfeldern ([#7084](https://github.com/nocobase/nocobase/pull/7084)) von @katherinehhh
  - Stilbedingungen für Unterspaltenfelder werden nicht korrekt angewendet ([#7083](https://github.com/nocobase/nocobase/pull/7083)) von @katherinehhh
  - Filtern über Beziehungssammlungsfelder in Filterformularen ist ungültig ([#7070](https://github.com/nocobase/nocobase/pull/7070)) von @zhangzhonghe
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Aktualisieren eines Viele-zu-viele (Array)-Feldes wirft einen Fehler, wenn das Feld `updatedBy` vorhanden ist ([#7089](https://github.com/nocobase/nocobase/pull/7089)) von @2013xile
- **[Öffentliche Formulare]** Öffentliche Formulare: Behebung eines unbefugten Zugriffsproblems beim Absenden des Formulars ([#7085](https://github.com/nocobase/nocobase/pull/7085)) von @zhangzhonghe

### [v1.7.13](https://www.nocobase.com/en/blog/v1.7.13)

*Veröffentlichungsdatum: 2025-06-17*

#### 🚀 Verbesserungen

- **[client]** Logo-Container-Breite passt sich dem Inhaltstyp an (feste 168px für Bilder, automatische Breite für Text) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) von @Cyx649312038
- **[Workflow: Genehmigung]** Zusätzliches Feldoption für die Liste der erneuten Zuweisungen hinzugefügt von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Pflichtfeld-Validierungsmeldung in Untertabelle bleibt beim Seitenwechsel bestehen ([#7080](https://github.com/nocobase/nocobase/pull/7080)) von @katherinehhh
  - Dezimalpunkt geht nach dem Wechsel des Betragskomponententyps von Mask zu inputNumer verloren ([#7077](https://github.com/nocobase/nocobase/pull/7077)) von @katherinehhh
  - Falsche Darstellung von Markdown (Vditor) in Untertabelle ([#7074](https://github.com/nocobase/nocobase/pull/7074)) von @katherinehhh
- **[Sammlungsfeld: Sequenz]** Korrektur der zeichenkettenbasierten Bigint-Sequenzberechnung ([#7079](https://github.com/nocobase/nocobase/pull/7079)) von @mytharcher
- **[Backup-Manager]** Unbekannter Befehlsfehler beim Wiederherstellen von MySQL-Backups auf der Windows-Plattform von @gchust

### [v1.7.12](https://www.nocobase.com/en/blog/v1.7.12)

*Veröffentlichungsdatum: 2025-06-16*

#### 🚀 Verbesserungen

- **[client]** "Leer" und "Nicht leer" Optionen zu den Verknüpfungsregeln für Kontrollkästchenfelder hinzugefügt ([#7073](https://github.com/nocobase/nocobase/pull/7073)) von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[client]** Nach dem Erstellen des inversen Beziehungsfeldes war die Option "Inverses Beziehungsfeld in der Zieldatentabelle erstellen" in den Assoziationsfeldeinstellungen nicht aktiviert. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) von @aaaaaajie
- **[Datenquellen-Manager]** Bereichsänderungen wirken sich jetzt sofort auf alle zugehörigen Rollen aus. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) von @aaaaaajie
- **[Zugriffskontrolle]** Problem behoben, bei dem die App den Zugriff blockierte, wenn keine Standardrolle existierte ([#7059](https://github.com/nocobase/nocobase/pull/7059)) von @aaaaaajie
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Korrektur der nicht geparsten Variable der Weiterleitungs-URL von @mytharcher

### [v1.7.11](https://www.nocobase.com/en/blog/v1.7.11)

*Veröffentlichungsdatum: 2025-06-15*

#### 🎉 Neue Funktionen

- **[Text kopieren]** Unterstützung zum einmaligen Kopieren von Textfeldinhalten ([#6954](https://github.com/nocobase/nocobase/pull/6954)) von @zhangzhonghe

#### 🐛 Fehlerbehebungen

- **[client]**

  - Assoziationsfeld-Auswahl löscht ausgewählte Daten nach dem Absenden nicht ([#7067](https://github.com/nocobase/nocobase/pull/7067)) von @katherinehhh
  - Korrektur des Upload-Größenhinweises ([#7057](https://github.com/nocobase/nocobase/pull/7057)) von @mytharcher
- **[server]** Kann Eigenschaften von undefined nicht lesen (Lesen von 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) von @chenos
- **[Workflow: Schleifenknoten]** Korrektur, dass der Schleifenzweig läuft, wenn die Bedingung nicht erfüllt ist ([#7063](https://github.com/nocobase/nocobase/pull/7063)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Korrektur, dass die Aufgabenstatistiken nicht aktualisiert werden, wenn die Ausführung abgebrochen wurde von @mytharcher
  - Korrektur der Trigger-Variable beim Filtern nach Typ von @mytharcher

### [v1.7.10](https://www.nocobase.com/en/blog/v1.7.10)

*Veröffentlichungsdatum: 2025-06-12*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem Verknüpfungsregeln eine Endlosschleife verursachen ([#7050](https://github.com/nocobase/nocobase/pull/7050)) von @zhangzhonghe
  - Korrektur: Verwendung von optionaler Verkettung, um Anfragen in APIClient sicher abzulehnen, wenn der Handler undefiniert sein könnte ([#7054](https://github.com/nocobase/nocobase/pull/7054)) von @sheldon66
  - Problem mit automatischem Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7052](https://github.com/nocobase/nocobase/pull/7052)) von @katherinehhh
- **[Datenvisualisierung]** Falsche Anzeige des Datumsfeldes "zwischen" im Diagrammfilter ([#7051](https://github.com/nocobase/nocobase/pull/7051)) von @katherinehhh
- **[API-Dokumentation]** Nicht offizielle NocoBase-Plugins zeigen keine API-Dokumentation an ([#7045](https://github.com/nocobase/nocobase/pull/7045)) von @chenzhizdt
- **[Aktion: Datensätze importieren]** Korrektur des xlsx-Imports, um Textbereichsfelder auf die Annahme von nicht-String-formatierten Daten zu beschränken ([#7049](https://github.com/nocobase/nocobase/pull/7049)) von @aaaaaajie

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.9](https://www.nocobase.com/en/blog/v1.8.0-beta.9)

*Veröffentlichungsdatum: 2025-06-18*

#### 🚀 Verbesserungen

- **[client]**

  - Aktionsleiste des Grid-Karten-Blocks bei Leerstand automatisch ausblenden ([#7069](https://github.com/nocobase/nocobase/pull/7069)) von @zhangzhonghe
  - Logo-Container-Breite passt sich dem Inhaltstyp an (feste 168px für Bilder, automatische Breite für Text) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) von @Cyx649312038
- **[Verification]** Entferne Verifizierer-Optionen aus der Antwort der `verifiers:listByUser`-API ([#7090](https://github.com/nocobase/nocobase/pull/7090)) von @2013xile

#### 🐛 Fehlerbehebungen

- **[client]**

  - Pflichtfeld-Validierungsmeldung in Untertabelle bleibt beim Seitenwechsel bestehen ([#7080](https://github.com/nocobase/nocobase/pull/7080)) von @katherinehhh
  - Stilbedingungen für Unterspaltenfelder werden nicht korrekt angewendet ([#7083](https://github.com/nocobase/nocobase/pull/7083)) von @katherinehhh
  - Dezimalpunkt geht nach dem Wechsel des Betragskomponententyps von Mask zu inputNumer verloren ([#7077](https://github.com/nocobase/nocobase/pull/7077)) von @katherinehhh
  - URL-Abfrageparameter-Variablen funktionieren nicht im Standardwert von öffentlichen Formularfeldern ([#7084](https://github.com/nocobase/nocobase/pull/7084)) von @katherinehhh
  - Filtern über Beziehungssammlungsfelder in Filterformularen ist ungültig ([#7070](https://github.com/nocobase/nocobase/pull/7070)) von @zhangzhonghe
  - Falsche Darstellung von Markdown (Vditor) in Untertabelle ([#7074](https://github.com/nocobase/nocobase/pull/7074)) von @katherinehhh
- **[database]** Unterstützung für Assoziationsaktualisierungen in updateOrCreate und firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) von @chenos
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Aktualisieren eines Viele-zu-viele (Array)-Feldes wirft einen Fehler, wenn das Feld `updatedBy` vorhanden ist ([#7089](https://github.com/nocobase/nocobase/pull/7089)) von @2013xile
- **[Sammlungsfeld: Sequenz]** Korrektur der zeichenkettenbasierten Bigint-Sequenzberechnung ([#7079](https://github.com/nocobase/nocobase/pull/7079)) von @mytharcher
- **[Öffentliche Formulare]** Öffentliche Formulare: Behebung eines unbefugten Zugriffsproblems beim Absenden des Formulars ([#7085](https://github.com/nocobase/nocobase/pull/7085)) von @zhangzhonghe

### [v1.8.0-beta.8](https://www.nocobase.com/en/blog/v1.8.0-beta.8)

*Veröffentlichungsdatum: 2025-06-16*

#### 🚀 Verbesserungen

- **[client]** "Leer" und "Nicht leer" Optionen zu den Verknüpfungsregeln für Kontrollkästchenfelder hinzugefügt ([#7073](https://github.com/nocobase/nocobase/pull/7073)) von @katherinehhh
- **[Workflow: Genehmigung]** Zusätzliches Feldoption für die Liste der erneuten Zuweisungen hinzugefügt von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Backup-Manager]** Unbekannter Befehlsfehler beim Wiederherstellen von MySQL-Backups auf der Windows-Plattform von @gchust

### [v1.8.0-beta.7](https://www.nocobase.com/en/blog/v1.8.0-beta.7)

*Veröffentlichungsdatum: 2025-06-15*

#### 🎉 Neue Funktionen

- **[Text kopieren]** Unterstützung zum einmaligen Kopieren von Textfeldinhalten ([#6954](https://github.com/nocobase/nocobase/pull/6954)) von @zhangzhonghe

#### 🐛 Fehlerbehebungen

- **[server]** Kann Eigenschaften von undefined nicht lesen (Lesen von 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) von @chenos
- **[client]**

  - Assoziationsfeld-Auswahl löscht ausgewählte Daten nach dem Absenden nicht ([#7067](https://github.com/nocobase/nocobase/pull/7067)) von @katherinehhh
  - Nach dem Erstellen des inversen Beziehungsfeldes war die Option "Inverses Beziehungsfeld in der Zieldatentabelle erstellen" in den Assoziationsfeldeinstellungen nicht aktiviert. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) von @aaaaaajie
- **[Zugriffskontrolle]** Problem behoben, bei dem die App den Zugriff blockierte, wenn keine Standardrolle existierte ([#7059](https://github.com/nocobase/nocobase/pull/7059)) von @aaaaaajie
- **[Workflow: Schleifenknoten]** Korrektur, dass der Schleifenzweig läuft, wenn die Bedingung nicht erfüllt ist ([#7063](https://github.com/nocobase/nocobase/pull/7063)) von @mytharcher
- **[Datenquellen-Manager]** Bereichsänderungen wirken sich jetzt sofort auf alle zugehörigen Rollen aus. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) von @aaaaaajie
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Korrektur der nicht geparsten Variable der Weiterleitungs-URL von @mytharcher
- **[Workflow: Genehmigung]**

  - Korrektur der Trigger-Variable beim Filtern nach Typ von @mytharcher
  - Korrektur, dass die Aufgabenstatistiken nicht aktualisiert werden, wenn die Ausführung abgebrochen wurde von @mytharcher

### [v1.8.0-beta.6](https://www.nocobase.com/en/blog/v1.8.0-beta.6)

*Veröffentlichungsdatum: 2025-06-12*

#### 🎉 Neue Funktionen

- **[Audit-Logs]** Hinzufügen der Umgebungsvariable `AUDIT_LOGGER_TRANSPORT` zur Steuerung der Audit-Log-Ausgabemethode von @2013xile

#### 🚀 Verbesserungen

- **[client]** Verschieben eines Gruppenmenüs in sich selbst verbieten ([#7005](https://github.com/nocobase/nocobase/pull/7005)) von @zhangzhonghe
- **[Kalender]** Unterstützung zum Festlegen des Wochenstarttages im Kalenderblock ([#7032](https://github.com/nocobase/nocobase/pull/7032)) von @katherinehhh
- **[Sammlungsfeld: Markdown(Vditor)]** Unterstützung für Bild-Klick-zu-Vergrößerung im Markdown (Vditor)-Vorschaumodus ([#7024](https://github.com/nocobase/nocobase/pull/7024)) von @katherinehhh
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Berechtigungsbezogene Fehler beim Anzeigen von Viele-zu-viele (viele)-Feldern in Datentabellen. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) von @aaaaaajie
- **[Kommentare]** Unterstützung für Paginierung im Kommentarblock von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem mit automatischem Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7052](https://github.com/nocobase/nocobase/pull/7052)) von @katherinehhh
  - Problem behoben, bei dem Verknüpfungsregeln eine Endlosschleife verursachen ([#7050](https://github.com/nocobase/nocobase/pull/7050)) von @zhangzhonghe
  - Problem mit automatischem Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7042](https://github.com/nocobase/nocobase/pull/7042)) von @katherinehhh
  - Korrektur des Upload-Größenhinweises ([#7057](https://github.com/nocobase/nocobase/pull/7057)) von @mytharcher
  - Korrektur: Verwendung von optionaler Verkettung, um Anfragen in APIClient sicher abzulehnen, wenn der Handler undefiniert sein könnte ([#7054](https://github.com/nocobase/nocobase/pull/7054)) von @sheldon66
  - Problem mit automatischem Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7042](https://github.com/nocobase/nocobase/pull/7042)) von @katherinehhh
  - Korrektur, dass Felder in Blockvorlagen aufgrund doppelter API-Anfragen nicht angezeigt werden ([#6985](https://github.com/nocobase/nocobase/pull/6985)) von @zhangzhonghe
  - Auswahlfeldoptionen funktionieren nicht in den Verknüpfungsregeln des Filterformulars ([#7035](https://github.com/nocobase/nocobase/pull/7035)) von @katherinehhh
  - Validierungsregeln des Filterformulars führen dazu, dass die Filtertaste unwirksam wird ([#6975](https://github.com/nocobase/nocobase/pull/6975)) von @zhangzhonghe
  - Unfähigkeit, die Pflichtfeldanzeige der Untertabelle mithilfe von Verknüpfungsregeln zu löschen ([#7022](https://github.com/nocobase/nocobase/pull/7022)) von @zhangzhonghe
  - Korrektur des Parameterfehlers im Filterblock ([#6966](https://github.com/nocobase/nocobase/pull/6966)) von @zhangzhonghe
  - Problem behoben, bei dem ein Block keine Ansichtsdaten aus externen Datenquellen lesen konnte. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) von @aaaaaajie
  - Verwendung eines unabhängigen Variablenbereichs für jedes Feld ([#7012](https://github.com/nocobase/nocobase/pull/7012)) von @mytharcher
  - Aktuelle Objektvariable ist in Verknüpfungsregeln ungültig ([#7008](https://github.com/nocobase/nocobase/pull/7008)) von @zhangzhonghe
- **[database]** Korrektur: Fehlende Ersteller- und Aktualisierer-Felder beim Import von xlsx hinzugefügt ([#7011](https://github.com/nocobase/nocobase/pull/7011)) von @aaaaaajie
- **[undefined]** Entferne Datenbankabhängigkeit für possibleTypes, erzwinge API-gesteuerte Konfiguration von @aaaaaajie
- **[Aktion: Datensätze importieren]**

  - Korrektur des xlsx-Imports, um Textbereichsfelder auf die Annahme von nicht-String-formatierten Daten zu beschränken ([#7049](https://github.com/nocobase/nocobase/pull/7049)) von @aaaaaajie
  - Korrektur des Fehlschlags beim Import von Kindtabellen, wenn relationale Felder beteiligt sind ([#7039](https://github.com/nocobase/nocobase/pull/7039)) von @aaaaaajie
  - Fehler behoben, die während der Batch-Bearbeitung beim Import von XLSX-Baumtabellendaten auftraten ([#7013](https://github.com/nocobase/nocobase/pull/7013)) von @aaaaaajie
- **[Datenvisualisierung]**

  - Falsche Anzeige des Datumsfeldes "zwischen" im Diagrammfilter ([#7051](https://github.com/nocobase/nocobase/pull/7051)) von @katherinehhh
  - Kontrollkästchengruppenfelder in Diagrammen sollten Beschriftungen anstelle von Rohwerten anzeigen ([#7033](https://github.com/nocobase/nocobase/pull/7033)) von @2013xile
- **[API-Dokumentation]** Nicht offizielle NocoBase-Plugins zeigen keine API-Dokumentation an ([#7045](https://github.com/nocobase/nocobase/pull/7045)) von @chenzhizdt
- **[Workflow]**

  - Korrektur, dass `toJSON()` einen Fehler im Zeitplan-Trigger verursachte ([#7037](https://github.com/nocobase/nocobase/pull/7037)) von @mytharcher
  - Korrektur eines Fehlers, der in der manuellen Ausführungsaktion ausgelöst wurde, wenn der Trigger nicht korrekt konfiguriert war ([#7036](https://github.com/nocobase/nocobase/pull/7036)) von @mytharcher
  - Korrektur eines UI-Fehlers, wenn der Workflow nicht existiert ([#7023](https://github.com/nocobase/nocobase/pull/7023)) von @mytharcher
  - Korrektur, dass das Sammlungsereignis im Modus "Beim Erstellen oder Aktualisieren" nicht ausgelöst wird, wenn ohne geändertes Feld erstellt wird ([#7015](https://github.com/nocobase/nocobase/pull/7015)) von @mytharcher
- **[Datenquellen-Manager]** Entferne Datenbankabhängigkeit für possibleTypes, erzwinge API-gesteuerte Konfiguration ([#7019](https://github.com/nocobase/nocobase/pull/7019)) von @aaaaaajie
- **[Mobil]** Optimierung von Verzögerungsproblemen bei mobilen Popups ([#7029](https://github.com/nocobase/nocobase/pull/7029)) von @zhangzhonghe
- **[Aktion: Datensätze exportieren Pro]** Korrektur des Fehlers, der beim Exportieren von Anhängen mit Bedingungen auftritt. von @aaaaaajie
- **[Workflow: JavaScript]** Korrektur von require für relative Pfade von @mytharcher
- **[Vorlage drucken]** Korrektur eines Berechtigungs-Parsing-Fehlers und Hinzufügen einer "Daten nicht gefunden"-Prüfung. von @sheldon66
- **[Workflow: Genehmigung]**

  - Vermeidung von undefinierten Feld-Fehlern von @mytharcher
  - Korrektur eines Fehlers, der ausgelöst wurde, wenn der Workflow gelöscht wurde von @mytharcher
  - Korrektur der Trigger-Variablen von @mytharcher
  - Dateiverknüpfung aus dem Snapshot neu laden, um URL-Ablauf zu vermeiden von @mytharcher
  - Korrektur eines API-Fehlers beim Aktualisieren der Detailseite von @mytharcher
- **[WeCom]** Hinzufügen einer Prüfung für den Callback-Pfad in der Gateway-Middleware von @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.8](https://www.nocobase.com/en/blog/v1.8.0-alpha.8)

*Veröffentlichungsdatum: 2025-06-17*

#### 🎉 Neue Funktionen

- **[Text kopieren]** Unterstützung zum einmaligen Kopieren von Textfeldinhalten ([#6954](https://github.com/nocobase/nocobase/pull/6954)) von @zhangzhonghe
- **[E-Mail-Manager]** Unterstützung zum Löschen von E-Mails von @jiannx

#### 🚀 Verbesserungen

- **[client]**

  - "Leer" und "Nicht leer" Optionen zu den Verknüpfungsregeln für Kontrollkästchenfelder hinzugefügt ([#7073](https://github.com/nocobase/nocobase/pull/7073)) von @katherinehhh
  - Logo-Container-Breite passt sich dem Inhaltstyp an (feste 168px für Bilder, automatische Breite für Text) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) von @Cyx649312038
- **[Async-Task-Manager]** Verbesserung der Leistung der Aufgabenerstellung während des Exports ([#7078](https://github.com/nocobase/nocobase/pull/7078)) von @aaaaaajie
- **[Workflow: Genehmigung]** Zusätzliches Feldoption für die Liste der erneuten Zuweisungen hinzugefügt von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Dezimalpunkt geht nach dem Wechsel des Betragskomponententyps von Mask zu inputNumer verloren ([#7077](https://github.com/nocobase/nocobase/pull/7077)) von @katherinehhh
  - Falsche Darstellung von Markdown (Vditor) in Untertabelle ([#7074](https://github.com/nocobase/nocobase/pull/7074)) von @katherinehhh
  - Nach dem Erstellen des inversen Beziehungsfeldes war die Option "Inverses Beziehungsfeld in der Zieldatentabelle erstellen" in den Assoziationsfeldeinstellungen nicht aktiviert. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) von @aaaaaajie
  - Assoziationsfeld-Auswahl löscht ausgewählte Daten nach dem Absenden nicht ([#7067](https://github.com/nocobase/nocobase/pull/7067)) von @katherinehhh
- **[server]** Kann Eigenschaften von undefined nicht lesen (Lesen von 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) von @chenos
- **[Zugriffskontrolle]** Problem behoben, bei dem die App den Zugriff blockierte, wenn keine Standardrolle existierte ([#7059](https://github.com/nocobase/nocobase/pull/7059)) von @aaaaaajie
- **[Datenquellen-Manager]** Bereichsänderungen wirken sich jetzt sofort auf alle zugehörigen Rollen aus. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) von @aaaaaajie
- **[Workflow: Schleifenknoten]** Korrektur, dass der Schleifenzweig läuft, wenn die Bedingung nicht erfüllt ist ([#7063](https://github.com/nocobase/nocobase/pull/7063)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Korrektur der nicht geparsten Variable der Weiterleitungs-URL von @mytharcher
- **[Workflow: Genehmigung]** Korrektur, dass die Aufgabenstatistiken nicht aktualisiert werden, wenn die Ausführung abgebrochen wurde von @mytharcher
- **[E-Mail-Manager]** E-Mail-Löschung fehlgeschlagen von @jiannx
- **[Backup-Manager]** Unbekannter Befehlsfehler beim Wiederherstellen von MySQL-Backups auf der Windows-Plattform von @gchust

### [v1.8.0-alpha.7](https://www.nocobase.com/en/blog/v1.8.0-alpha.7)

*Veröffentlichungsdatum: 2025-06-13*

#### 🎉 Neue Funktionen

- **[E-Mail-Manager]** Unterstützung für die Einstellung des E-Mail-Synchronisationsintervalls von @jiannx

#### 🐛 Fehlerbehebungen

- **[database]** eq-Operator für Zeichenkettenfelder mit dem Zahlentyp kompatibel machen ([#7062](https://github.com/nocobase/nocobase/pull/7062)) von @chenos
- **[client]** Korrektur des Upload-Größenhinweises ([#7057](https://github.com/nocobase/nocobase/pull/7057)) von @mytharcher
- **[Workflow: Genehmigung]** Korrektur der Trigger-Variable beim Filtern nach Typ von @mytharcher

### [v1.8.0-alpha.5](https://www.nocobase.com/en/blog/v1.8.0-alpha.5)

*Veröffentlichungsdatum: 2025-06-12*

#### 🚀 Verbesserungen

- **[client]**

  - Unterstützung zum Ausfüllen von Eingabefeldern durch QR-Code-Scannen ([#6943](https://github.com/nocobase/nocobase/pull/6943)) von @katherinehhh
  - Unterstützung für die Lokalisierung von Markdown-Blockinhalten ([#6941](https://github.com/nocobase/nocobase/pull/6941)) von @katherinehhh
  - Verschieben eines Gruppenmenüs in sich selbst verbieten ([#7005](https://github.com/nocobase/nocobase/pull/7005)) von @zhangzhonghe
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Berechtigungsbezogene Fehler beim Anzeigen von Viele-zu-viele (viele)-Feldern in Datentabellen. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) von @aaaaaajie
- **[Kalender]** Unterstützung zum Festlegen des Wochenstarttages im Kalenderblock ([#7032](https://github.com/nocobase/nocobase/pull/7032)) von @katherinehhh
- **[Sammlungsfeld: Markdown(Vditor)]** Unterstützung für Bild-Klick-zu-Vergrößerung im Markdown (Vditor)-Vorschaumodus ([#7024](https://github.com/nocobase/nocobase/pull/7024)) von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem mit automatischem Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7052](https://github.com/nocobase/nocobase/pull/7052)) von @katherinehhh
  - Korrektur, dass Felder in Blockvorlagen aufgrund doppelter API-Anfragen nicht angezeigt werden ([#6985](https://github.com/nocobase/nocobase/pull/6985)) von @zhangzhonghe
  - Problem mit automatischem Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7042](https://github.com/nocobase/nocobase/pull/7042)) von @katherinehhh
  - Validierungsregeln des Filterformulars führen dazu, dass die Filtertaste unwirksam wird ([#6975](https://github.com/nocobase/nocobase/pull/6975)) von @zhangzhonghe
  - Problem mit automatischem Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7042](https://github.com/nocobase/nocobase/pull/7042)) von @katherinehhh
  - Auswahlfeldoptionen funktionieren nicht in den Verknüpfungsregeln des Filterformulars ([#7035](https://github.com/nocobase/nocobase/pull/7035)) von @katherinehhh
  - Unfähigkeit, die Pflichtfeldanzeige der Untertabelle mithilfe von Verknüpfungsregeln zu löschen ([#7022](https://github.com/nocobase/nocobase/pull/7022)) von @zhangzhonghe
  - Korrektur des Parameterfehlers im Filterblock ([#6966](https://github.com/nocobase/nocobase/pull/6966)) von @zhangzhonghe
  - Problem behoben, bei dem die aktuellen Benutzerdaten leer sind ([#7016](https://github.com/nocobase/nocobase/pull/7016)) von @zhangzhonghe
  - Aktuelle Objektvariable ist in Verknüpfungsregeln ungültig ([#7008](https://github.com/nocobase/nocobase/pull/7008)) von @zhangzhonghe
  - Problem behoben, bei dem ein Block keine Ansichtsdaten aus externen Datenquellen lesen konnte. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) von @aaaaaajie
  - Verwendung eines unabhängigen Variablenbereichs für jedes Feld ([#7012](https://github.com/nocobase/nocobase/pull/7012)) von @mytharcher
- **[Datenvisualisierung]**

  - Falsche Anzeige des Datumsfeldes "zwischen" im Diagrammfilter ([#7051](https://github.com/nocobase/nocobase/pull/7051)) von @katherinehhh
  - Kontrollkästchengruppenfelder in Diagrammen sollten Beschriftungen anstelle von Rohwerten anzeigen ([#7033](https://github.com/nocobase/nocobase/pull/7033)) von @2013xile
- **[Aktion: Datensätze importieren]**

  - Korrektur des xlsx-Imports, um Textbereichsfelder auf die Annahme von nicht-String-formatierten Daten zu beschränken ([#7049](https://github.com/nocobase/nocobase/pull/7049)) von @aaaaaajie
  - Korrektur des Fehlschlags beim Import von Kindtabellen, wenn relationale Felder beteiligt sind ([#7039](https://github.com/nocobase/nocobase/pull/7039)) von @aaaaaajie
  - Fehler behoben, die während der Batch-Bearbeitung beim Import von XLSX-Baumtabellendaten auftraten ([#7013](https://github.com/nocobase/nocobase/pull/7013)) von @aaaaaajie
- **[API-Dokumentation]** Nicht offizielle NocoBase-Plugins zeigen keine API-Dokumentation an ([#7045](https://github.com/nocobase/nocobase/pull/7045)) von @chenzhizdt
- **[Workflow]**

  - Korrektur, dass `toJSON()` einen Fehler im Zeitplan-Trigger verursachte ([#7037](https://github.com/nocobase/nocobase/pull/7037)) von @mytharcher
  - Korrektur eines Fehlers, der in der manuellen Ausführungsaktion ausgelöst wurde, wenn der Trigger nicht korrekt konfiguriert war ([#7036](https://github.com/nocobase/nocobase/pull/7036)) von @mytharcher
  - Korrektur eines UI-Fehlers, wenn der Workflow nicht existiert ([#7023](https://github.com/nocobase/nocobase/pull/7023)) von @mytharcher
  - Korrektur, dass das Sammlungsereignis im Modus "Beim Erstellen oder Aktualisieren" nicht ausgelöst wird, wenn ohne geändertes Feld erstellt wird ([#7015](https://github.com/nocobase/nocobase/pull/7015)) von @mytharcher
- **[Mobil]** Optimierung von Verzögerungsproblemen bei mobilen Popups ([#7029](https://github.com/nocobase/nocobase/pull/7029)) von @zhangzhonghe
- **[Datenquellen-Manager]** Entferne Datenbankabhängigkeit für possibleTypes, erzwinge API-gesteuerte Konfiguration ([#7019](https://github.com/nocobase/nocobase/pull/7019)) von @aaaaaajie
- **[Aktion: Datensätze exportieren Pro]** Korrektur des Fehlers, der beim Exportieren von Anhängen mit Bedingungen auftritt. von @aaaaaajie
