---
title: "NocoBase v1.0.1-alpha.1: Blöcke unterstützen Höheneinstellungen"
description: "NocoBase v1.0.1-alpha.1 führt neue Funktionen wie Höheneinstellungen für Blöcke, URL-Link-Aktionen und Variablenunterstützung für Iframes ein, zusammen mit verschiedenen Verbesserungen und Fehlerbehebungen, um die Plattformfunktionalität und -leistung zu verbessern."
---

## Neue Funktionen

### Blöcke unterstützen Höheneinstellungen ([#4441](https://github.com/nocobase/nocobase/pull/4441))

![20240603115253](https://static-docs.nocobase.com/20240603115253.gif)

Referenzdokument:

* [Blockhöhe einstellen](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-height)

### Link-Aktion: Navigation zur angegebenen URL ([#4506](https://github.com/nocobase/nocobase/pull/4506))

Unterstützt die Konfiguration von Variablen in der URL oder in Suchparametern.

<video controls="" height="250" width="100%"></video>

Referenzdokument:

* [Link-Aktion](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Neue Variable "URL-Suchparameter" hinzugefügt ([#4506](https://github.com/nocobase/nocobase/pull/4506))

Die Variable ist nur verfügbar, wenn ein Query-String in der Seiten-URL vorhanden ist, was die Verwendung in Verbindung mit der [Link-Aktion](https://docs.nocobase.com/handbook/ui/actions/types/link) erleichtert.

![20240603170651](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603170651.png)

Referenzdokument:

* [URL-Suchparameter](https://docs.nocobase.com/handbook/ui/variables#url-search-params)
* [Link-Aktion](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Iframe unterstützt Variablen ([#4512](https://github.com/nocobase/nocobase/pull/4512))

![20240603114711](https://static-docs.nocobase.com/20240603114711.png)

![20240603114750](https://static-docs.nocobase.com/20240603114750.png)

Referenzdokument:

* [Iframe-Block](https://docs.nocobase.com/handbook/block-iframe)

### Dateispeicher unterstützt Konfiguration von Dateigröße und Dateityp ([#4118](https://github.com/nocobase/nocobase/pull/4118))

![20240603115303](https://static-docs.nocobase.com/20240603115303.png)

Referenzdokument:

* [Dateispeicher](https://docs.nocobase.com/handbook/file-manager/storage)

### Workflow: Variablenknoten unterstützen die Auswahl eines Teilpfads von Datenobjekten als Variablenwert

![20240531211727](https://static-docs.nocobase.com/20240531211727.png)

### URL-Felder unterstützen Vorschau ([#4559](https://github.com/nocobase/nocobase/pull/4559))

Derzeit wird nur die Bildvorschau unterstützt.

![337101796-916a6c97-bc08-4560-9526-53e482e2ac6c](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/337101796-916a6c97-bc08-4560-9526-53e482e2ac6c.gif)

### Datenvisualisierung: Unterstützung für Variablen "URL-Abfrageparameter" und "Aktuelle Rolle" ([#4586](https://github.com/nocobase/nocobase/pull/4586))

![data-visualization-filter-block](https://static-docs.nocobase.com/202406071148997.png)

![data-visualization-filter](https://static-docs.nocobase.com/202406071149567.png)

## Verbesserungen

### Optimierung der Import- und Exportfunktion ([#4468](https://github.com/nocobase/nocobase/pull/4468))

Verbesserte Stabilität der Import- und Exportfunktion, Erhöhung des Limits auf 2000 Datensätze. Unterstützt erweiterte Import- und Exportlogik für benutzerdefinierte Feldtypen.

![20240611112948](https://static-docs.nocobase.com/20240611112948.png)

### Fehlbedienung durch Deaktivieren der Datumsvariablenoption vermeiden ([#4452](https://github.com/nocobase/nocobase/pull/4452))

Mit Ausnahme der "aktuellen Zeit" sind die Variablen, die Daten darstellen, Intervalle (Arrays) und keine Zeitpunkte (Strings). Sie können zum Filtern verwendet werden, aber nicht direkt als Standardwerte.

![20240527150429](https://static-docs.nocobase.com/20240527150429.png)

### Interaktionsoptimierung der Verknüpfungsregelzuweisung ([#4492](https://github.com/nocobase/nocobase/pull/4492))

Mehrfachauswahlfelder zeigen keine Zuweisungsoptionen an. Wenn ein Einfachauswahlfeld ausgewählt und zugewiesen wurde, wird beim Wechsel zu einem Mehrfachauswahlfeld die Konfiguration gelöscht.

![20240603143309](https://static-docs.nocobase.com/20240603143309.png)

### Symbol oben rechts in der Aktionsspalte des Tabellenblocks angepasst ([#4538](https://github.com/nocobase/nocobase/pull/4538))

![20240603115131](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115131.png)

### ErrorFallback ([#4459](https://github.com/nocobase/nocobase/pull/4459))

Verfeinerung des Error-Fallbacks für verschiedene Komponenten im Frontend, um zu verhindern, dass die gesamte Seite aufgrund eines Frontend-Fehlers unbrauchbar wird.

![error-fallback](https://static-docs.nocobase.com/20240604122043_rec_.gif)

### Debug-Informationen sammeln und Logs bei einem Frontend-Fehler schnell herunterladen ([#4524](https://github.com/nocobase/nocobase/pull/4524))

![error-fallback-log](https://static-docs.nocobase.com/202406041224009.png)

### Sonstiges

* Zeichenlängenbegrenzung des Benutzernamens auf 1-50 geändert ([#4502](https://github.com/nocobase/nocobase/pull/4502))
* Fremdschlüsselfelder nicht ausblenden ([#4499](https://github.com/nocobase/nocobase/pull/4499))

## Fehlerbehebungen

### Der Datenbereich im Berechtigungskonfigurationsdialog sollte die Variablen "Aktuelles Formular" und "Aktueller Popup-Datensatz" nicht unterstützen ([#4484](https://github.com/nocobase/nocobase/pull/4484))

![20240527145519](https://static-docs.nocobase.com/20240527145519.png)

### Auswahl des Werts einer Variable direkt als Standardwert für ein Assoziationsfeld unterstützen ([#4439](https://github.com/nocobase/nocobase/pull/4439))

![20240603121447](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603121447.png)

### Fehler beim mehrmaligen Hinzufügen der Aktion "Benutzerdefinierte Anfrage" behoben ([#4458](https://github.com/nocobase/nocobase/pull/4458))

![20240603115234](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115234.png)

### Sonstiges

* Problem behoben, dass der Inhalt in der Untertabelle nach dem Absenden des Formulars nicht gelöscht wurde. ([#4475](https://github.com/nocobase/nocobase/pull/4475))
* Problem mit der abnormalen Verwendung der Variable "Aktuelles Objekt" in der Untertabelle behoben. ([#4521](https://github.com/nocobase/nocobase/pull/4521))
* Option 'Standard-Zoomstufe festlegen' für Kartenfelder hinzugefügt. ([#4527](https://github.com/nocobase/nocobase/pull/4527))
* Problem behoben, dass ein Block nicht angezeigt wurde, wenn ein Block mithilfe von Blockvorlagen in einem Popup-Fenster hinzugefügt wurde. ([#4531](https://github.com/nocobase/nocobase/pull/4531))
* Stilproblem bei Formulardatenvorlagen behoben. ([#4536](https://github.com/nocobase/nocobase/pull/4536))
* Workflow: Ausdrucksfeld-Stil im Berechnungsknoten verschwunden. ([#4513](https://github.com/nocobase/nocobase/pull/4513))
* Workflow: Feldtyp falsch, wenn im benutzerdefinierten Formular des manuellen Knotens erstellt. ([#4519](https://github.com/nocobase/nocobase/pull/4519))
* Workflow: Berechtigungsproblem beim Auslösen eines benutzerdefinierten Aktionsereignisses. ([#4522](https://github.com/nocobase/nocobase/pull/4522))
* Workflow: Falsche Tiefenkonfiguration des Vorladens von Assoziationen für mehrere Datenquellen. ([#4526](https://github.com/nocobase/nocobase/pull/4526))
* Fehler in der `json-templates` Bibliothek. ([#4525](https://github.com/nocobase/nocobase/pull/4525))
* Dateimanager: Fehler beim Hochladen oder Löschen von Dateien auf COS. ([#4529](https://github.com/nocobase/nocobase/pull/4529), [#4537](https://github.com/nocobase/nocobase/pull/4537))
* Formularverknüpfungsregel zeigt [object Object] an, wenn einem Zahlenfeld der Wert 0.00 zugewiesen wird. ([#4482](https://github.com/nocobase/nocobase/pull/4482))
* Der Untertabelle fehlt die Steuerungseinstellung für die Schaltfläche "Neu hinzufügen". ([#4498](https://github.com/nocobase/nocobase/pull/4498))
* Der Schaltfläche "Absenden" im Tabellenbearbeitungsformular fehlt die Einstellung für die Verknüpfungsregel. ([#4515](https://github.com/nocobase/nocobase/pull/4515))
* Datenvisualisierung: Problem behoben, dass Feldkomponenten unsichtbar waren, wenn Standardwerte für Diagrammfilterfelder festgelegt wurden ([#4509](https://github.com/nocobase/nocobase/pull/4509))
* Authentifizierung: Problem behoben, dass die Registrierungsseite für neu erstellte Basis-Authentifikatoren nicht gefunden wurde. ([#4556](https://github.com/nocobase/nocobase/pull/4556))
* Lokalisierung: Problem behoben, dass die Seitentitel bei der Übersetzung von Menütexten nicht übersetzt wurden. ([#4557](https://github.com/nocobase/nocobase/pull/4557))
* Karte: Problem behoben, dass AMap trotz korrekter Konfiguration einen Schlüsselfehler anzeigt. ([#4574](https://github.com/nocobase/nocobase/pull/4574))
