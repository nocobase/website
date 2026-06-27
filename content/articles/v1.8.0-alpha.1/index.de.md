---
title: "NocoBase v1.8.0-alpha.1: Workflow-Kategorieverwaltung hinzugefügt"
description: "Versionshinweise zu v1.8.0-alpha.1"
---

### 🎉 Neue Funktionen

- **[undefined]**

  - Neue Unterstützung für Gitpod ermöglicht es, die Entwicklungsumgebung mit einem Klick zu starten und schnell mit der Entwicklung zu beginnen. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) von @kerwin612
  - Neues Plugin "Eingabe-Kopier-Button" für einzeilige Textfelder hinzugefügt ([#6894](https://github.com/nocobase/nocobase/pull/6894)) von @kerwin612
- **[Datenvisualisierung]** Unterstützung für Multiplikation und Division in der Diagrammtransformationskonfiguration ([#6788](https://github.com/nocobase/nocobase/pull/6788)) von @bugstark
- **[Workflow]** Workflow-Kategorieverwaltung hinzugefügt ([#6965](https://github.com/nocobase/nocobase/pull/6965)) von @mytharcher
- **[E-Mail-Manager]** Unterstützung für Massenversand von @jiannx

### 🚀 Verbesserungen

- **[Client]**

  - Verbesserte Stile für die Datumsbereichsfilter-Komponente ([#6939](https://github.com/nocobase/nocobase/pull/6939)) von @katherinehhh
  - Unterstützung für die Konfiguration, ob Menülinks in einem neuen Fenster geöffnet werden ([#6918](https://github.com/nocobase/nocobase/pull/6918)) von @katherinehhh
  - Problem behoben, bei dem ausgeblendete Formularsteuerelemente die Tabulatortaste abfingen, was die Effizienz der Formularbedienung erheblich verbessert ([#6942](https://github.com/nocobase/nocobase/pull/6942)) von @kerwin612
  - Validierung erforderlicher Felder vor dem Anzeigen des Bestätigungsdialogs ([#6931](https://github.com/nocobase/nocobase/pull/6931)) von @katherinehhh
- **[Öffentliche Formulare]** Unterstützung für die Verwendung von URL-Parametern als Variablen ([#6973](https://github.com/nocobase/nocobase/pull/6973)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** Optimierung der xlsx-Importleistung von @aaaaaajie
- **[Vorlagendruck]** Weitere Logs hinzugefügt. von @sheldon66
- **[Auth: OIDC]** Groß-/Kleinschreibung beim Abgleich von Benutzern per E-Mail ignorieren von @2013xile
- **[Workflow: Genehmigung]** Workflow-Sammlungen aus dem Workflow-Plugin importieren, um Duplikate zu vermeiden von @mytharcher
- **[E-Mail-Manager]** Massenversandfunktion vervollständigt von @jiannx

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem Felder in Blockvorlagen aufgrund doppelter API-Anfragen nicht angezeigt wurden ([#6957](https://github.com/nocobase/nocobase/pull/6957)) von @zhangzhonghe
  - Problem behoben, bei dem in Popups erstellte Blöcke die falsche Sammlung hatten ([#6961](https://github.com/nocobase/nocobase/pull/6961)) von @zhangzhonghe
  - Problem behoben, bei dem Werte von einzeiligen Textfeldern im einfachen Lesemodus als Array angezeigt wurden ([#6968](https://github.com/nocobase/nocobase/pull/6968)) von @zhangzhonghe
  - Reihenfolge der Felder in der Dropdown-Liste des Filter-Buttons korrigiert ([#6962](https://github.com/nocobase/nocobase/pull/6962)) von @zhangzhonghe
  - Felder und Aktionen werden erst nach dem Aktualisieren der Seite wirksam ([#6977](https://github.com/nocobase/nocobase/pull/6977)) von @zhangzhonghe
  - Problem behoben, bei dem die Option 'Überlauf mit Auslassungspunkten' für Beziehungsfelder unwirksam war ([#6967](https://github.com/nocobase/nocobase/pull/6967)) von @zhangzhonghe
  - Problem, bei dem das Popup für das Auswahl-Assoziationsfeld beim ersten Eingeben beim Hinzufügen neuer Daten schließt ([#6971](https://github.com/nocobase/nocobase/pull/6971)) von @katherinehhh
  - Assoziationsfeld in der Untertabelle löst eine Anfrage aus, wenn die Iterationsvariable einen leeren Wert hat ([#6969](https://github.com/nocobase/nocobase/pull/6969)) von @katherinehhh
  - Datenverlust bei Formularvalidierungsregeln beim Einklappen des Panels ([#6949](https://github.com/nocobase/nocobase/pull/6949)) von @katherinehhh
  - Problem behoben, bei dem Standardwerte des Filterformulars in Unterseiten ungültig sind ([#6960](https://github.com/nocobase/nocobase/pull/6960)) von @zhangzhonghe
  - i18n der Feldzuweisungskomponente funktioniert nicht ([#6945](https://github.com/nocobase/nocobase/pull/6945)) von @katherinehhh
  - Assoziations-Sammlungsfelder aus externen Datenquellen können im Rollendaten-Tabellenbereich nicht erweitert werden ([#6958](https://github.com/nocobase/nocobase/pull/6958)) von @katherinehhh
  - Datumsauswahl wird nach dem Umschalten von "ist zwischen" zurück zu "ist" nicht aktualisiert ([#6956](https://github.com/nocobase/nocobase/pull/6956)) von @katherinehhh
  - Untertabellen-Verknüpfungsvariable ruft beim Löschen Assoziationsdaten ab, anstatt den Formularwert zu verwenden ([#6963](https://github.com/nocobase/nocobase/pull/6963)) von @katherinehhh
  - Ausgewählte Werte werden beim Aktualisieren von Mehrfachauswahl-Dropdown-Optionen über Verknüpfungsregeln zurückgesetzt ([#6953](https://github.com/nocobase/nocobase/pull/6953)) von @katherinehhh
  - Falsche Hervorhebungsposition beim Ziehen von Tabellenzeilen ([#6952](https://github.com/nocobase/nocobase/pull/6952)) von @chenos
  - Sichtbarkeitseinstellung des Doppelpunkts im Formularlabel funktioniert nicht ([#6947](https://github.com/nocobase/nocobase/pull/6947)) von @katherinehhh
  - Assoziationsfeld-Dropdown-Daten mit einer Seitengröße von 200 paginieren ([#6950](https://github.com/nocobase/nocobase/pull/6950)) von @katherinehhh
  - Problem mit der Kopier-Schaltfläche im Fehler-Popup behoben, die als [object Object] kopierte. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) von @kerwin612
  - Variablen können beim Festlegen von Standardwerten für Assoziationsfelder nicht ausgewählt werden ([#6974](https://github.com/nocobase/nocobase/pull/6974)) von @zhangzhonghe
  - Blockgrößenänderung durch Ziehen funktioniert nicht ([#6944](https://github.com/nocobase/nocobase/pull/6944)) von @chenos
- **[Workflow: Manueller Knoten]** Problem behoben, bei dem der Initialisierer einen Fehler auslöst, wenn eine externe Datenquelle verwendet wird ([#6983](https://github.com/nocobase/nocobase/pull/6983)) von @mytharcher
- **[Authentifizierung]** Leistungsproblem durch Bereinigung abgelaufener Token ([#6981](https://github.com/nocobase/nocobase/pull/6981)) von @2013xile
- **[Dateimanager]** Ali-OSS-Timeout-Konfiguration korrigiert ([#6970](https://github.com/nocobase/nocobase/pull/6970)) von @mytharcher
- **[Workflow]** Problem behoben, bei dem beim Filtern von Workflows ein Fehler ausgelöst wurde ([#6978](https://github.com/nocobase/nocobase/pull/6978)) von @mytharcher
- **[Theme-Editor]** Theme-Wechseloption ausgeblendet und Popup-Stil korrigiert ([#6964](https://github.com/nocobase/nocobase/pull/6964)) von @zhangzhonghe
- **[Sammlungsfeld: Markdown(Vditor)]** Problem mit der Komponentenbreite des markdown-vditor-Feldes nach Vergrößerung und Verkleinerung ([#6946](https://github.com/nocobase/nocobase/pull/6946)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Initialisierer für die Arbeitsablaufleiste fehlte, behoben von @mytharcher
- **[Auth: OIDC]** Text der Anmeldeschaltfläche wurde nicht lokalisiert von @2013xile
- **[Workflow: Genehmigung]** Fehler behoben, wenn die Abfrage des Bearbeiterbereichs eine Assoziationsbedingung verwendet von @mytharcher
