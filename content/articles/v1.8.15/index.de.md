---
title: "NocoBase v1.8.15: Optimierung der Leistung beim Wechseln von Popup-Tabs"
description: "Versionshinweise zu v1.8.15"
---

### 🚀 Verbesserungen

- **[Client]**

  - Unterstützung für die Datumsvariable "Vorgestern" hinzugefügt ([#7359](https://github.com/nocobase/nocobase/pull/7359)) von @katherinehhh
  - Leistungsoptimierung beim Wechseln von Popup-Tabs ([#7353](https://github.com/nocobase/nocobase/pull/7353)) von @zhangzhonghe
- **[Workflow]**

  - Instabilen Testfall behoben ([#7349](https://github.com/nocobase/nocobase/pull/7349)) von @mytharcher
  - Der Workflow-Titel in der Aufgabenkarte wird nicht mehr durchgestrichen angezeigt, selbst wenn die entsprechende Version deaktiviert ist ([#7339](https://github.com/nocobase/nocobase/pull/7339)) von @mytharcher
- **[Office-Dateivorschau]** Unterstützung für die Vorschau von `.odt`-Dateien hinzugefügt ([#7347](https://github.com/nocobase/nocobase/pull/7347)) von @mytharcher
- **[Backup-Manager]** Leistungsverbesserung für MySQL-Datenbank-Backup-Vorgänge von @gchust

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem das mehrspaltige Formularlayout auf mobilen Geräten nicht in ein einspaltiges Layout umgewandelt wurde ([#7355](https://github.com/nocobase/nocobase/pull/7355)) von @zhangzhonghe
  - Fehler beim Massenlöschen von Sammlungen behoben ([#7345](https://github.com/nocobase/nocobase/pull/7345)) von @aaaaaajie
  - Problem behoben, bei dem zuvor gespeicherte Datenbereiche bei der individuellen Berechtigungskonfiguration nicht vorausgewählt waren ([#7288](https://github.com/nocobase/nocobase/pull/7288)) von @aaaaaajie
- **[Workflow]**

  - Menü "Knoten hinzufügen" überarbeitet und die dadurch verursachten Leistungsprobleme beim Rendern der Workflow-Leinwand behoben ([#7363](https://github.com/nocobase/nocobase/pull/7363)) von @mytharcher
  - Problem mit falschen Filterbedingungen beim Abrufen eines einzelnen To-Do-Eintrags behoben ([#7366](https://github.com/nocobase/nocobase/pull/7366)) von @mytharcher
  - Problem mit der Schlüsselwortsuche in der Feldauswahl behoben ([#7356](https://github.com/nocobase/nocobase/pull/7356)) von @mytharcher
  - Vermeidung von Fehlern, die durch das Veröffentlichen in der Ereigniswarteschlange beim Stoppen verursacht werden ([#7348](https://github.com/nocobase/nocobase/pull/7348)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem In-Site-Nachrichten empfangen, aber nicht in einem Popup angezeigt wurden ([#7364](https://github.com/nocobase/nocobase/pull/7364)) von @mytharcher
- **[Mobil]** Problem behoben, bei dem die Datumsauswahl auf mobilen Geräten bei Anwendung von Datumsbereichsgrenzen falsch angezeigt wurde ([#7362](https://github.com/nocobase/nocobase/pull/7362)) von @katherinehhh
- **[Dateimanager]** Feld `storageId` zur Dateisammlung hinzugefügt, um die Berechtigungskonfiguration zu unterstützen ([#7351](https://github.com/nocobase/nocobase/pull/7351)) von @mytharcher
- **[Workflow: Paralleler Knoten]** Problem behoben, bei dem der parallele Knoten nach dem Fortsetzen unter MySQL pausiert blieb ([#7346](https://github.com/nocobase/nocobase/pull/7346)) von @mytharcher
- **[Workflow: CC]** Problem behoben, dass Blöcke nicht entfernt werden konnten ([#7338](https://github.com/nocobase/nocobase/pull/7338)) von @mytharcher
- **[Office-Dateivorschau]** Unterstützung für die Vorschau von `.docx`-, `.xlsx`- und `.pptx`-Dateien nur mit URL hinzugefügt ([#7336](https://github.com/nocobase/nocobase/pull/7336)) von @mytharcher
- **[Datenvisualisierung]** Problem mit Datumsvariablen im Standardwert von Datumsfeldern im Diagrammfilterblock ([#7291](https://github.com/nocobase/nocobase/pull/7291)) von @katherinehhh
- **[Workflow: Genehmigung]**

  - Problem behoben, dass Verknüpfungsregeln im ursprünglichen Genehmigungsdetailblock nicht funktionierten von @mytharcher
  - Problem behoben, dass Verknüpfungen beim Einreichen eines Entwurfs aktualisiert wurden von @mytharcher
