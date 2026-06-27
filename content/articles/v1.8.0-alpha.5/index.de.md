---
title: "NocoBase v1.8.0-alpha.5: Unterstützung zum Ausfüllen von Eingabefeldern durch QR-Code-Scannen"
description: "Versionshinweise zu v1.8.0-alpha.5"
---

### 🚀 Verbesserungen

- **[Client]**
  - Unterstützung zum Ausfüllen von Eingabefeldern durch QR-Code-Scan ([#6943](https://github.com/nocobase/nocobase/pull/6943)) von @katherinehhh

  - Unterstützung für Lokalisierung von Markdown-Blockinhalten ([#6941](https://github.com/nocobase/nocobase/pull/6941)) von @katherinehhh

  - Verschieben eines Gruppenmenüs in sich selbst verhindern ([#7005](https://github.com/nocobase/nocobase/pull/7005)) von @zhangzhonghe

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Berechtigungsbezogene Fehler beim Anzeigen von Viele-zu-viele(viele)-Feldern in Datentabellen. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) von @aaaaaajie

- **[Kalender]** Unterstützung zum Festlegen des Wochenstarttages im Kalenderblock ([#7032](https://github.com/nocobase/nocobase/pull/7032)) von @katherinehhh

- **[Sammlungsfeld: Markdown(Vditor)]** Unterstützung für Bild-Klick-zum-Vergrößern im Markdown (Vditor)-Vorschaumodus ([#7024](https://github.com/nocobase/nocobase/pull/7024)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem mit automatischem Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7052](https://github.com/nocobase/nocobase/pull/7052)) von @katherinehhh

  - Fehler behoben, bei dem Felder in Blockvorlagen aufgrund doppelter API-Anfragen nicht angezeigt wurden ([#6985](https://github.com/nocobase/nocobase/pull/6985)) von @zhangzhonghe

  - Problem mit automatischem Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7042](https://github.com/nocobase/nocobase/pull/7042)) von @katherinehhh

  - Validierungsregeln des Filterformulars führen dazu, dass der Filter-Button unwirksam wird ([#6975](https://github.com/nocobase/nocobase/pull/6975)) von @zhangzhonghe

  - Problem mit automatischem Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7042](https://github.com/nocobase/nocobase/pull/7042)) von @katherinehhh

  - Auswahlfeldoptionen funktionieren nicht in den Verknüpfungsregeln des Filterformulars ([#7035](https://github.com/nocobase/nocobase/pull/7035)) von @katherinehhh

  - Unfähigkeit, die Pflichtfeldmarkierung einer Untertabelle mithilfe von Verknüpfungsregeln zu löschen ([#7022](https://github.com/nocobase/nocobase/pull/7022)) von @zhangzhonghe

  - Fehler bei den Filterblockparametern behoben ([#6966](https://github.com/nocobase/nocobase/pull/6966)) von @zhangzhonghe

  - Problem behoben, bei dem aktuelle Benutzerdaten leer sind ([#7016](https://github.com/nocobase/nocobase/pull/7016)) von @zhangzhonghe

  - Aktuelle Objektvariable ist in Verknüpfungsregeln ungültig ([#7008](https://github.com/nocobase/nocobase/pull/7008)) von @zhangzhonghe

  - Problem behoben, bei dem ein Block keine Ansichtsdaten aus externen Datenquellen lesen konnte. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) von @aaaaaajie

  - Unabhängigen Variablenbereich für jedes Feld verwenden ([#7012](https://github.com/nocobase/nocobase/pull/7012)) von @mytharcher

- **[Datenvisualisierung]**
  - Falsche Anzeige des Datumsfeldes "zwischen" im Diagrammfilter ([#7051](https://github.com/nocobase/nocobase/pull/7051)) von @katherinehhh

  - Kontrollkästchengruppenfelder in Diagrammen sollten Beschriftungen anstelle von Rohwerten anzeigen ([#7033](https://github.com/nocobase/nocobase/pull/7033)) von @2013xile

- **[Aktion: Datensätze importieren]**
  - Behoben: xlsx-Import schränkt Textbereichsfelder ein, sodass sie keine Nicht-String-formatierten Daten akzeptieren ([#7049](https://github.com/nocobase/nocobase/pull/7049)) von @aaaaaajie

  - Fehler beim Import von Untertabellen behoben, wenn relationale Felder beteiligt sind ([#7039](https://github.com/nocobase/nocobase/pull/7039)) von @aaaaaajie

  - Fehler bei der Stapelbearbeitung beim Import von XLSX-Baumtabellendaten behoben ([#7013](https://github.com/nocobase/nocobase/pull/7013)) von @aaaaaajie

- **[API-Dokumentation]** Nicht offizielle NocoBase-Plugins zeigen keine API-Dokumentation an ([#7045](https://github.com/nocobase/nocobase/pull/7045)) von @chenzhizdt

- **[Workflow]**
  - Fehler durch `toJSON()` im Zeitplan-Trigger behoben ([#7037](https://github.com/nocobase/nocobase/pull/7037)) von @mytharcher

  - Fehler bei manueller Ausführungsaktion behoben, wenn der Trigger nicht korrekt konfiguriert ist ([#7036](https://github.com/nocobase/nocobase/pull/7036)) von @mytharcher

  - UI-Fehler behoben, wenn der Workflow nicht existiert ([#7023](https://github.com/nocobase/nocobase/pull/7023)) von @mytharcher

  - Fehler behoben: Sammlungsereignis im Modus "Bei Erstellen oder Aktualisieren" wird nicht ausgelöst, wenn ohne geändertes Feld erstellt wird ([#7015](https://github.com/nocobase/nocobase/pull/7015)) von @mytharcher

- **[Mobil]** Optimierung von Verzögerungsproblemen bei mobilen Popups ([#7029](https://github.com/nocobase/nocobase/pull/7029)) von @zhangzhonghe

- **[Datenquellen-Manager]** Datenbankabhängigkeit für possibleTypes entfernt, API-gesteuerte Konfiguration erzwungen ([#7019](https://github.com/nocobase/nocobase/pull/7019)) von @aaaaaajie

- **[Aktion: Datensätze exportieren Pro]** Fehler beim Exportieren von Anhängen mit Bedingungen behoben. von @aaaaaajie
