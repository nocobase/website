---
title: "NocoBase v2.0.0-alpha.50: Unterstützung für Mehrfachauswahl im Anhang-Upload-Komponente"
description: "Versionshinweise zu v2.0.0-alpha.50"
---

### 🚀 Verbesserungen

- **[Client]**

  - Unterstützung für die Mehrfachauswahl-Einstellung in der Anhang-Upload-Komponente ([#8052](https://github.com/nocobase/nocobase/pull/8052)) von @katherinehhh
  - Anzeige eingeklappter Optionen beim Überfahren mit der Maus in der Select-Komponente ([#8029](https://github.com/nocobase/nocobase/pull/8029)) von @katherinehhh
  - Anzeige eingeklappter Optionen beim Überfahren mit der Maus in der Select-Komponente ([#8030](https://github.com/nocobase/nocobase/pull/8030)) von @katherinehhh
- **[KI-Mitarbeiter]** Fehlendes Provider-Feld zum LLM-Formular hinzugefügt ([#8049](https://github.com/nocobase/nocobase/pull/8049)) von @heziqiang
- **[Workflow]** "Haupt"-Datenquellenkontext für UserSelect hinzugefügt, um eine allgemeinere Komponente bereitzustellen, die auch an anderen Stellen verwendet werden kann ([#8010](https://github.com/nocobase/nocobase/pull/8010)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem "N/A" angezeigt wurde, nachdem die Mehrfachauswahl bei der Auswahl von Viele-zu-Viele-Verknüpfungsdatensätzen deaktiviert wurde ([#8050](https://github.com/nocobase/nocobase/pull/8050)) von @katherinehhh
  - Flackerproblem des Dropdown-Auswahlfelds für Verknüpfungsregeln behoben ([#8018](https://github.com/nocobase/nocobase/pull/8018)) von @zhangzhonghe
  - Problem behoben, bei dem das Umschalten eines Datumsfelds auf ein Zeitfeld in der Filteraktion einen Rendering-Fehler verursachte ([#8036](https://github.com/nocobase/nocobase/pull/8036)) von @gchust
  - Problem behoben, bei dem das Menü des aktuellen Datensatzes beim Hinzufügen eines Kommentar-Blocks erschien ([#8039](https://github.com/nocobase/nocobase/pull/8039)) von @gchust
  - Fehler beim Löschen eines Datensatzes im Datensatzauswahl-Block behoben ([#8023](https://github.com/nocobase/nocobase/pull/8023)) von @katherinehhh
  - Problem behoben, bei dem der Standardstil des JS-Felds im Detailblock falsch war ([#8031](https://github.com/nocobase/nocobase/pull/8031)) von @gchust
  - Problem behoben, dass der Baumtabellenblock keine untergeordneten Knoten erweitern konnte ([#8011](https://github.com/nocobase/nocobase/pull/8011)) von @katherinehhh
  - Problem behoben, dass das Ziehen von Unterspalten nicht funktionierte ([#8026](https://github.com/nocobase/nocobase/pull/8026)) von @katherinehhh
  - Problem behoben, dass die Spaltenbreite von Unterspalten nicht angewendet wurde ([#8027](https://github.com/nocobase/nocobase/pull/8027)) von @katherinehhh
  - Problem behoben, das Fehler beim Laden von Daten für Verknüpfungsfelder in Popup-Fenstern verursachte, um eine reibungslosere Datenanzeige und -funktionalität zu gewährleisten ([#7985](https://github.com/nocobase/nocobase/pull/7985)) von @gchust
  - Stilproblem des Popovers für das Markdown-Anzeigefeld behoben ([#8012](https://github.com/nocobase/nocobase/pull/8012)) von @katherinehhh
  - Problem behoben, bei dem die Standardtitel der Popups für die Aktionen "Bearbeiten" und "Neu erstellen" falsch waren ([#8033](https://github.com/nocobase/nocobase/pull/8033)) von @gchust
  - Lazy-Load-Fehler in Variable.Input behoben, der dazu führte, dass das Variablenoptionsmenü falsch neu gerendert wurde ([#8009](https://github.com/nocobase/nocobase/pull/8009)) von @mytharcher
  - Problem behoben, bei dem die Variable des aktuellen Popup-Datensatzes in einem durch ein Verknüpfungsfeld geöffneten Popup nicht korrekt aufgelöst werden konnte ([#8019](https://github.com/nocobase/nocobase/pull/8019)) von @gchust
- **[ACL]** Problem behoben, bei dem ACL-Metainformationen falsch waren, wenn externe Datenquellen-Berechtigungsbereiche Variablen des aktuellen Benutzers verwendeten ([#8013](https://github.com/nocobase/nocobase/pull/8013)) von @2013xile
- **[Flow-Engine]**

  - Problem behoben, dass der Kommentardatensatz nach der Bearbeitung nicht gespeichert werden konnte ([#8035](https://github.com/nocobase/nocobase/pull/8035)) von @katherinehhh
  - Problem behoben, bei dem Datenblöcke beim Schließen eines Popups durch Klicken auf die Formular-Senden-Schaltfläche im Popup nicht aktualisiert wurden ([#8021](https://github.com/nocobase/nocobase/pull/8021)) von @gchust
- **[Theme-Editor]** Theme-Umschalter auf mobilen Geräten aktiviert ([#8046](https://github.com/nocobase/nocobase/pull/8046)) von @zhangzhonghe
- **[Multi-App-Manager (veraltet)]** Protokollebene-Einstellungen wurden nicht auf Unteranwendungen angewendet ([#8045](https://github.com/nocobase/nocobase/pull/8045)) von @2013xile
- **[Datenquellen-Manager]** Fehler beim Aktualisieren von Passwörtern für externe Datenquellen behoben ([#8024](https://github.com/nocobase/nocobase/pull/8024)) von @cgyrock
- **[Aktion: Datensätze importieren]** Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn ein Feld in der zu importierenden XLSX-Datei einen `null`-Wert hatte ([#8037](https://github.com/nocobase/nocobase/pull/8037)) von @mytharcher
- **[Workflow]** Problem behoben, bei dem die Warteschlange vor dem Veröffentlichen von Nachrichten geschlossen wurde ([#8003](https://github.com/nocobase/nocobase/pull/8003)) von @mytharcher
- **[Kommentare]**

  - Fehler beim Löschen eines Datensatzes im Kommentar-Block behoben von @katherinehhh
  - Warnung beim Verwenden des Kommentar-Blocks in einer Nicht-Kommentar-Sammlung behoben von @katherinehhh
- **[Multi-Space]** Mobile Geräte unterstützen Space-Wechsel von @jiannx
- **[Workflow: Unterworkflow]** Problem behoben, dass bei mehr als 200 Workflows "N/A" im ausgewählten Workflow angezeigt wurde von @mytharcher
- **[Workflow: Genehmigung]**

  - Fehler beim Erstellen eines Genehmigungsinformations-Blocks behoben von @mytharcher
  - Migration hinzugefügt, um doppelte Datensatzfehler beim Hinzufügen eines Index zu vermeiden von @mytharcher
  - Problem behoben, dass die Druckaktion nicht funktionierte, wenn die Seite mit geöffnetem Modal aktualisiert wurde von @mytharcher
