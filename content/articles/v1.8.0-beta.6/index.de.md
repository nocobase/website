---
title: "NocoBase v1.8.0-beta.6: Umgebungsvariable zur Steuerung der Audit-Log-Ausgabe hinzugefügt"
description: "Versionshinweise zu v1.8.0-beta.6"
---

### 🎉 Neue Funktionen

- **[Audit-Logs]** Umgebungsvariable `AUDIT_LOGGER_TRANSPORT` hinzugefügt, um das Ausgabeverfahren der Audit-Logs zu steuern, von @2013xile

### 🚀 Verbesserungen

- **[Client]** Verschieben eines Gruppenmenüs in sich selbst verhindern ([#7005](https://github.com/nocobase/nocobase/pull/7005)) von @zhangzhonghe

- **[Kalender]** Unterstützung für die Einstellung des Wochenstarttages im Kalenderblock ([#7032](https://github.com/nocobase/nocobase/pull/7032)) von @katherinehhh

- **[Sammlungsfeld: Markdown(Vditor)]** Unterstützung für Bild-Klick-zu-Vergrößerung im Markdown (Vditor) Vorschaumodus ([#7024](https://github.com/nocobase/nocobase/pull/7024)) von @katherinehhh

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Berechtigungsbezogene Fehler bei der Anzeige von Viele-zu-viele(viele)-Feldern in Datentabellen. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) von @aaaaaajie

- **[Kommentare]** Unterstützung für Paginierung im Kommentarblock von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem des automatischen Schließens beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7052](https://github.com/nocobase/nocobase/pull/7052)) von @katherinehhh

  - Problem behoben, bei dem Verknüpfungsregeln eine Endlosschleife verursachten ([#7050](https://github.com/nocobase/nocobase/pull/7050)) von @zhangzhonghe

  - Problem des automatischen Schließens beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7042](https://github.com/nocobase/nocobase/pull/7042)) von @katherinehhh

  - Upload-Größenhinweis korrigiert ([#7057](https://github.com/nocobase/nocobase/pull/7057)) von @mytharcher

  - Korrektur: Optionale Verkettung verwendet, um Anfragen im APIClient sicher abzulehnen, wenn der Handler möglicherweise undefiniert ist ([#7054](https://github.com/nocobase/nocobase/pull/7054)) von @sheldon66

  - Problem des automatischen Schließens beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7042](https://github.com/nocobase/nocobase/pull/7042)) von @katherinehhh

  - Problem behoben, dass Felder in Blockvorlagen aufgrund doppelter API-Anfragen nicht angezeigt wurden ([#6985](https://github.com/nocobase/nocobase/pull/6985)) von @zhangzhonghe

  - Optionen des Auswahlfelds funktionieren nicht in Verknüpfungsregeln des Filterformulars ([#7035](https://github.com/nocobase/nocobase/pull/7035)) von @katherinehhh

  - Validierungsregeln des Filterformulars führen dazu, dass der Filter-Button unwirksam wird ([#6975](https://github.com/nocobase/nocobase/pull/6975)) von @zhangzhonghe

  - Unfähigkeit, die Pflichtfeldmarkierung einer Untertabelle mithilfe von Verknüpfungsregeln zu löschen ([#7022](https://github.com/nocobase/nocobase/pull/7022)) von @zhangzhonghe

  - Problem mit dem Parameterfehler des Filterblocks behoben ([#6966](https://github.com/nocobase/nocobase/pull/6966)) von @zhangzhonghe

  - Problem behoben, bei dem ein Block keine Ansichtsdaten aus externen Datenquellen lesen konnte. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) von @aaaaaajie

  - Unabhängiger Variablenbereich für jedes Feld verwendet ([#7012](https://github.com/nocobase/nocobase/pull/7012)) von @mytharcher

  - Aktuelle Objektvariable ist in Verknüpfungsregeln ungültig ([#7008](https://github.com/nocobase/nocobase/pull/7008)) von @zhangzhonghe

- **[Datenbank]** Korrektur: Fehlende Ersteller- und Bearbeiter-Felder beim Import von xlsx hinzugefügt ([#7011](https://github.com/nocobase/nocobase/pull/7011)) von @aaaaaajie

- **[Undefiniert]** Datenbankabhängigkeit für possibleTypes entfernt, API-gesteuerte Konfiguration erzwungen von @aaaaaajie

- **[Aktion: Datensätze importieren]**
  - xlsx-Import korrigiert, um Textbereichsfelder auf die Annahme von Nicht-String-formatierten Daten zu beschränken ([#7049](https://github.com/nocobase/nocobase/pull/7049)) von @aaaaaajie

  - Fehler beim Import von Untertabellen behoben, wenn relationale Felder beteiligt sind ([#7039](https://github.com/nocobase/nocobase/pull/7039)) von @aaaaaajie

  - Fehler behoben, die während der Stapelbearbeitung beim Import von XLSX-Baumtabellendaten auftraten ([#7013](https://github.com/nocobase/nocobase/pull/7013)) von @aaaaaajie

- **[Datenvisualisierung]**
  - Falsche Anzeige des Datumsfeldes "zwischen" im Diagrammfilter ([#7051](https://github.com/nocobase/nocobase/pull/7051)) von @katherinehhh

  - Kontrollkästchengruppenfelder in Diagrammen sollten Beschriftungen anstelle von Rohwerten anzeigen ([#7033](https://github.com/nocobase/nocobase/pull/7033)) von @2013xile

- **[API-Dokumentation]** Nicht-NocoBase-offizielle Plugins können keine API-Dokumentation anzeigen ([#7045](https://github.com/nocobase/nocobase/pull/7045)) von @chenzhizdt

- **[Workflow]**
  - Fehler behoben, der durch `toJSON()` im Zeitplan-Trigger verursacht wurde ([#7037](https://github.com/nocobase/nocobase/pull/7037)) von @mytharcher

  - Fehler behoben, der in der manuellen Ausführungsaktion ausgelöst wurde, wenn der Trigger nicht korrekt konfiguriert war ([#7036](https://github.com/nocobase/nocobase/pull/7036)) von @mytharcher

  - UI-Fehler behoben, wenn der Workflow nicht existiert ([#7023](https://github.com/nocobase/nocobase/pull/7023)) von @mytharcher

  - Fehler behoben, bei dem das Sammlungsereignis im Modus "Bei Erstellen oder Aktualisieren" nicht ausgelöst wurde, wenn ohne geändertes Feld erstellt wurde ([#7015](https://github.com/nocobase/nocobase/pull/7015)) von @mytharcher

- **[Datenquellen-Manager]** Datenbankabhängigkeit für possibleTypes entfernt, API-gesteuerte Konfiguration erzwungen ([#7019](https://github.com/nocobase/nocobase/pull/7019)) von @aaaaaajie

- **[Mobil]** Optimierung von Verzögerungsproblemen bei mobilen Popups ([#7029](https://github.com/nocobase/nocobase/pull/7029)) von @zhangzhonghe

- **[Aktion: Datensätze exportieren Pro]** Fehler behoben, der beim Exportieren von Anhängen mit Bedingungen auftritt. von @aaaaaajie

- **[Workflow: JavaScript]** `require` für relative Pfade korrigiert von @mytharcher

- **[Vorlagendruck]** Fehler in der Berechtigungsanalyse behoben und Prüfung auf nicht gefundene Daten hinzugefügt. von @sheldon66

- **[Workflow: Genehmigung]**
  - Vermeidung von undefinierten Feld-Fehlern von @mytharcher

  - Fehler behoben, der ausgelöst wurde, wenn der Workflow gelöscht wurde von @mytharcher

  - Trigger-Variablen korrigiert von @mytharcher

  - Dateizuordnung aus dem Snapshot neu geladen, um Ablauf von URLs zu vermeiden von @mytharcher

  - API-Fehler beim Aktualisieren der Detailseite behoben von @mytharcher

- **[WeCom]** Prüfung auf Callback-Pfad in der Gateway-Middleware hinzugefügt von @2013xile
