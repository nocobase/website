---
title: "NocoBase v1.8.0-beta.1: Workflow-Kategorieverwaltung hinzugefügt"
description: "Versionshinweise zu v1.8.0-beta.1"
---

### 🎉 Neue Funktionen

- **[undefined]** Neues Plugin „Eingabe-Kopierknopf“ für einzeilige Textfelder hinzugefügt ([#6894](https://github.com/nocobase/nocobase/pull/6894)) von @kerwin612

- **[Workflow]** Workflow-Kategorieverwaltung hinzugefügt ([#6965](https://github.com/nocobase/nocobase/pull/6965)) von @mytharcher

### 🚀 Verbesserungen

- **[client]** Unterstützung für das Öffnen von Menülinks in einem neuen Fenster konfigurierbar gemacht ([#6918](https://github.com/nocobase/nocobase/pull/6918)) von @katherinehhh

- **[Aktion: Datensätze importieren Pro]** xlsx-Importleistung optimiert von @aaaaaajie

- **[Auth: OIDC]** Groß-/Kleinschreibung bei der Benutzersuche per E-Mail ignorieren von @2013xile

- **[Workflow: Genehmigung]** Workflow-Sammlungen aus dem Workflow-Plugin importieren, um Duplikate zu vermeiden von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**
  - Felder und Aktionen werden erst nach dem Aktualisieren der Seite wirksam ([#6977](https://github.com/nocobase/nocobase/pull/6977)) von @zhangzhonghe

  - Fehler behoben, bei dem Felder in Blockvorlagen aufgrund doppelter API-Anfragen nicht angezeigt wurden ([#6957](https://github.com/nocobase/nocobase/pull/6957)) von @zhangzhonghe

  - Fehler behoben, bei dem in Popups erstellte Blöcke die falsche Sammlung hatten ([#6961](https://github.com/nocobase/nocobase/pull/6961)) von @zhangzhonghe

  - Keine Auswahl von Variablen beim Festlegen von Standardwerten für Assoziationsfelder möglich ([#6974](https://github.com/nocobase/nocobase/pull/6974)) von @zhangzhonghe

  - Fehler behoben, bei dem Werte einzeiliger Textfelder im Easy-Reading-Modus als Array angezeigt wurden ([#6968](https://github.com/nocobase/nocobase/pull/6968)) von @zhangzhonghe

  - Assoziationssammlungsfelder aus externen Datenquellen können im Rollen-Datentabellenbereich nicht erweitert werden ([#6958](https://github.com/nocobase/nocobase/pull/6958)) von @katherinehhh

  - Fehler behoben, bei dem die Option 'Überlaufenden Inhalt mit Auslassungspunkten versehen' bei Beziehungsfeldern unwirksam war ([#6967](https://github.com/nocobase/nocobase/pull/6967)) von @zhangzhonghe

  - Fehler behoben, bei dem Standardwerte des Filterformulars in Unterseiten ungültig waren ([#6960](https://github.com/nocobase/nocobase/pull/6960)) von @zhangzhonghe

  - Problem behoben, bei dem das Popup zur Auswahl eines Assoziationsfeldes beim ersten Tastendruck beim Hinzufügen neuer Daten geschlossen wurde ([#6971](https://github.com/nocobase/nocobase/pull/6971)) von @katherinehhh

  - Assoziationsfeld in Untertabelle löst Anfrage aus, wenn Iterationsvariable einen leeren Wert hat ([#6969](https://github.com/nocobase/nocobase/pull/6969)) von @katherinehhh

  - Reihenfolge der Felder in der Dropdown-Liste des Filter-Buttons korrigiert ([#6962](https://github.com/nocobase/nocobase/pull/6962)) von @zhangzhonghe

  - Daten der Formularvalidierungsregeln gehen beim Einklappen des Panels verloren ([#6949](https://github.com/nocobase/nocobase/pull/6949)) von @katherinehhh

  - Ausgewählte Werte werden beim Aktualisieren von Multi-Select-Dropdown-Optionen über Verknüpfungsregeln zurückgesetzt ([#6953](https://github.com/nocobase/nocobase/pull/6953)) von @katherinehhh

  - Untertabellen-Verknüpfungsvariable ruft beim Löschen Assoziationsdaten ab, anstatt den Formularwert zu verwenden ([#6963](https://github.com/nocobase/nocobase/pull/6963)) von @katherinehhh

  - Assoziationsfeld-Dropdown-Daten mit einer Seitengröße von 200 paginieren ([#6950](https://github.com/nocobase/nocobase/pull/6950)) von @katherinehhh

  - Datumsauswahl wird nach dem Umschalten von „ist zwischen“ zurück zu „ist“ nicht aktualisiert ([#6956](https://github.com/nocobase/nocobase/pull/6956)) von @katherinehhh

  - Falsche Hervorhebungsposition beim Ziehen von Tabellenzeilen ([#6952](https://github.com/nocobase/nocobase/pull/6952)) von @chenos

- **[Authentifizierung]** Leistungsproblem durch Bereinigung abgelaufener Token ([#6981](https://github.com/nocobase/nocobase/pull/6981)) von @2013xile

- **[Workflow]** Fehler beim Filtern von Workflows behoben ([#6978](https://github.com/nocobase/nocobase/pull/6978)) von @mytharcher

- **[Dateimanager]** Ali-OSS-Timeout-Konfiguration korrigiert ([#6970](https://github.com/nocobase/nocobase/pull/6970)) von @mytharcher

- **[Theme-Editor]** Designwechsel-Option ausgeblendet und Popup-Stil korrigiert ([#6964](https://github.com/nocobase/nocobase/pull/6964)) von @zhangzhonghe

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Initialisierer für Arbeitsbank fehlte von @mytharcher

- **[Auth: OIDC]** Text des Anmelde-Buttons wurde nicht lokalisiert von @2013xile

- **[Workflow: Genehmigung]** Fehler bei der Bereichsabfrage der Bearbeiter mit Assoziationsbedingung behoben von @mytharcher
