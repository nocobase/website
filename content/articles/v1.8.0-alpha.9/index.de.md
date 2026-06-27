---
title: "NocoBase v1.8.0-alpha.9: Genehmigungsdatensatz-Variable zum Knotenergebnis hinzugefügt"
description: "Versionshinweise zu v1.8.0-alpha.9"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung des BIT-Feldes in SQL Server für externe Datenquellen. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) von @aaaaaajie

- **[Datenquelle: Externer SQL Server]** Unterstützung des SQL Server BIT-Feldes in externen Datenquellen von @aaaaaajie

- **[Workflow: Genehmigung]** Genehmigungsdatensatzvariable zum Knotenergebnis hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Aktionsleiste des Rasterkarten-Blocks bei Leerstand automatisch ausblenden ([#7069](https://github.com/nocobase/nocobase/pull/7069)) von @zhangzhonghe

- **[Verifizierung]** Entfernen der Prüferoptionen aus der Antwort der `verifiers:listByUser`-API ([#7090](https://github.com/nocobase/nocobase/pull/7090)) von @2013xile

- **[Workflow]** Anpassung der API von `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) von @mytharcher

- **[Workflow: Vor-Aktions-Ereignis]** Anpassung der Variablen-API von @mytharcher

- **[Workflow: Genehmigung]** Anpassung der Variablen-API von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Textausrichtungsfunktion in Tabellenspalten funktioniert nicht ([#7094](https://github.com/nocobase/nocobase/pull/7094)) von @zhangzhonghe

  - Feldwerte zuweisen: Daten für Beziehungsfelder können nicht gelöscht werden ([#7086](https://github.com/nocobase/nocobase/pull/7086)) von @zhangzhonghe

  - Verwendung eines unabhängigen Variablenbereichs für jedes Feld ([#7012](https://github.com/nocobase/nocobase/pull/7012)) von @mytharcher

  - Stilbedingung für Untertabellenspaltenfelder wird nicht korrekt angewendet ([#7083](https://github.com/nocobase/nocobase/pull/7083)) von @katherinehhh

  - Filtern über Beziehungssammlungsfelder in Filterformularen ist ungültig ([#7070](https://github.com/nocobase/nocobase/pull/7070)) von @zhangzhonghe

  - URL-Abfrageparameter-Variablen funktionieren nicht im Standardwert öffentlicher Formularfelder ([#7084](https://github.com/nocobase/nocobase/pull/7084)) von @katherinehhh

  - Pflichtvalidierungsmeldung in Untertabelle bleibt beim Seitenwechsel bestehen ([#7080](https://github.com/nocobase/nocobase/pull/7080)) von @katherinehhh

  - Fehler beim Klicken auf die Filtersschaltfläche ([#7100](https://github.com/nocobase/nocobase/pull/7100)) von @zhangzhonghe

- **[Datenbank]** Unterstützung von Assoziationsaktualisierungen in updateOrCreate und firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) von @chenos

- **[Workflow]**
  - Behebung, dass Statistiken durch eine nicht aktuelle Workflow-Version kaskadiert gelöscht werden ([#7103](https://github.com/nocobase/nocobase/pull/7103)) von @mytharcher

  - Behebung einer falsch ausgeführten Prüfung bei großen Ganzzahlen ([#7099](https://github.com/nocobase/nocobase/pull/7099)) von @mytharcher

  - Behebung einer falsch ausgeführten Prüfung bei großen Ganzzahlen ([#7091](https://github.com/nocobase/nocobase/pull/7091)) von @mytharcher

- **[Aktion: Datensätze importieren]** Behebung des Anmeldefehlerproblems nach dem Batch-Import von Benutzernamen und Passwörtern ([#7076](https://github.com/nocobase/nocobase/pull/7076)) von @aaaaaajie

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Aktualisieren eines Viele-zu-viele (Array)-Feldes führt zu einem Fehler, wenn das Feld `updatedBy` vorhanden ist ([#7089](https://github.com/nocobase/nocobase/pull/7089)) von @2013xile

- **[Dateimanager]** Behebung, dass das Anhängefeld im Genehmigungsprozess nicht aktualisiert werden kann ([#7093](https://github.com/nocobase/nocobase/pull/7093)) von @mytharcher

- **[Öffentliche Formulare]** Öffentliche Formulare: Behebung eines unbefugten Zugriffsproblems beim Absenden des Formulars ([#7085](https://github.com/nocobase/nocobase/pull/7085)) von @zhangzhonghe

- **[Sammlungsfeld: Sequenz]** Behebung der Berechnung einer zeichenkettenbasierten Bigint-Sequenz ([#7079](https://github.com/nocobase/nocobase/pull/7079)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Verwendung von Vergleich anstelle impliziter Logik zur Vermeidung von Typ-Problemen von @mytharcher

  - Nur Teilnehmer können Details der Genehmigung einsehen (abrufen) von @mytharcher

- **[E-Mail-Manager]** Fehler beim Löschen von E-Mails von @jiannx
