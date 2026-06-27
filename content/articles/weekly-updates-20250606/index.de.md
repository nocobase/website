---
title: "NocoBase wöchentliche Updates: Hinzufügen der Workflow-Kategorieverwaltung"
description: "Die Updates dieser Woche umfassen: Unterstützung für Multiplikation und Division in Diagrammtransformationskonfigurationen, Verbesserung der Importfunktionalität und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**Diese Woche haben wir [NocoBase 1.7.0](https://www.nocobase.com/en/blog/nocobase-1-7-0) veröffentlicht, das eine verbesserte Berechtigungsverwaltung, optimierte Systemleistung und Open-Source-Plugins einführt, um die Funktionalität und Benutzererfahrung umfassend zu verbessern.**

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie ist hauptsächlich für Testnutzer gedacht, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig ausprobieren und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.35](https://www.nocobase.com/en/blog/v1.6.35)

*Veröffentlichungsdatum: 2025-05-29*

#### 🎉 Neue Funktionen

- **[undefined]**
  - Gitpod-Unterstützung für den One-Click-Start der Entwicklungsumgebung hinzugefügt ([#6922](https://github.com/nocobase/nocobase/pull/6922)) von @kerwin612

#### 🚀 Verbesserungen

- **[client]**
  - Tab-Tasten-Interaktion im Formular optimiert ([#6942](https://github.com/nocobase/nocobase/pull/6942)) von @kerwin612
  - Unterstützung für die Konfiguration, ob Menülinks in einem neuen Fenster geöffnet werden ([#6918](https://github.com/nocobase/nocobase/pull/6918)) von @katherinehhh
  - Pflichtfelder validieren, bevor der Bestätigungsdialog angezeigt wird ([#6931](https://github.com/nocobase/nocobase/pull/6931)) von @katherinehhh

#### 🐛 Fehlerbehebungen

- **[client]**
  - Dropdown-Daten von Assoziationsfeldern mit einer Seitengröße von 200 paginieren ([#6950](https://github.com/nocobase/nocobase/pull/6950)) von @katherinehhh
  - Falsche Hervorhebungsposition beim Ziehen von Tabellenzeilen ([#6952](https://github.com/nocobase/nocobase/pull/6952)) von @chenos
  - Blockgrößenänderung durch Ziehen funktioniert nicht ([#6944](https://github.com/nocobase/nocobase/pull/6944)) von @chenos
  - i18n der Feldzuweisungskomponente funktioniert nicht ([#6945](https://github.com/nocobase/nocobase/pull/6945)) von @katherinehhh
  - Fehlermeldungen können nicht korrekt kopiert werden ([#6908](https://github.com/nocobase/nocobase/pull/6908)) von @kerwin612
- **[Sammlungsfeld: Markdown(Vditor)]** Problem mit der Breite der Markdown-Vditor-Feldkomponente nach Vergrößerung/Verkleinerung ([#6946](https://github.com/nocobase/nocobase/pull/6946)) von @katherinehhh
- **[Workflow: Genehmigung]** Übersetzungsinhalt korrigiert von @mytharcher

### [v1.6.36](https://www.nocobase.com/en/blog/v1.6.36)

*Veröffentlichungsdatum: 2025-05-29*

#### 🚀 Verbesserungen

- **[Auth: OIDC]** Groß-/Kleinschreibung beim Abgleich von Benutzern per E-Mail ignorieren von @2013xile

### [v1.6.37](https://www.nocobase.com/en/blog/v1.6.37)

*Veröffentlichungsdatum: 2025-05-30*

#### 🐛 Fehlerbehebungen

- **[client]**
  - Feldreihenfolge in der Dropdown-Liste des Filter-Buttons korrigiert ([#6962](https://github.com/nocobase/nocobase/pull/6962)) von @zhangzhonghe
  - Untertabellen-Verknüpfungsvariable ruft beim Löschen Assoziationsdaten ab, anstatt den Formularwert zu verwenden ([#6963](https://github.com/nocobase/nocobase/pull/6963)) von @katherinehhh
  - Assoziationsfeld in Untertabelle löst Anfrage aus, wenn Iterationsvariable einen leeren Wert hat ([#6969](https://github.com/nocobase/nocobase/pull/6969)) von @katherinehhh
- **[Theme-Editor]** Theme-Wechsel-Option ausblenden und Popup-Stil korrigieren ([#6964](https://github.com/nocobase/nocobase/pull/6964)) von @zhangzhonghe
- **[Workflow: Genehmigung]** Fehler behoben, wenn der Bereich der Bearbeiter mit einer Assoziationsbedingung abgefragt wird von @mytharcher

### [v1.6.38](https://www.nocobase.com/en/blog/v1.6.38)

*Veröffentlichungsdatum: 2025-06-03*

#### 🐛 Fehlerbehebungen

- **[client]**
  - Problem behoben, bei dem in Popups erstellte Blöcke die falsche Sammlung hatten ([#6961](https://github.com/nocobase/nocobase/pull/6961)) von @zhangzhonghe
  - Problem behoben, bei dem Standardwerte des Filterformulars in Unterseiten ungültig waren ([#6960](https://github.com/nocobase/nocobase/pull/6960)) von @zhangzhonghe
  - Assoziationssammlungsfelder aus externen Datenquellen können im Rollen-Datentabellenbereich nicht erweitert werden ([#6958](https://github.com/nocobase/nocobase/pull/6958)) von @katherinehhh
  - Problem behoben, bei dem die Option 'Überlauf mit Auslassungspunkten' für Beziehungsfelder unwirksam war ([#6967](https://github.com/nocobase/nocobase/pull/6967)) von @zhangzhonghe
  - Problem behoben, bei dem Werte von einzeiligen Textfeldern im einfachen Lesemodus als Array angezeigt wurden ([#6968](https://github.com/nocobase/nocobase/pull/6968)) von @zhangzhonghe
- **[Authentifizierung]** Leistungsproblem durch Bereinigung abgelaufener Token ([#6981](https://github.com/nocobase/nocobase/pull/6981)) von @2013xile
- **[Dateimanager]** Ali-OSS-Timeout-Konfiguration korrigiert ([#6970](https://github.com/nocobase/nocobase/pull/6970)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Initialisierer für die Werkbank fehlte, korrigiert von @mytharcher
- **[Auth: OIDC]** Anmeldebutton-Text wurde nicht lokalisiert von @2013xile

### [v1.7.1](https://www.nocobase.com/en/blog/v1.7.1)

*Veröffentlichungsdatum: 2025-06-04*

#### 🎉 Neue Funktionen

- **[Datenvisualisierung]** Unterstützung für Multiplikation und Division in der Diagrammtransformationskonfiguration ([#6788](https://github.com/nocobase/nocobase/pull/6788)) von @bugstark

#### 🚀 Verbesserungen

- **[Öffentliche Formulare]** Unterstützung für die Verwendung von URL-Parametern als Variablen ([#6973](https://github.com/nocobase/nocobase/pull/6973)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem Felder in Blockvorlagen aufgrund doppelter API-Anfragen nicht angezeigt wurden ([#6957](https://github.com/nocobase/nocobase/pull/6957)) von @zhangzhonghe
- **[Workflow: Manueller Knoten]** Initialisierer wirft Fehler bei Verwendung einer externen Datenquelle, korrigiert ([#6983](https://github.com/nocobase/nocobase/pull/6983)) von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.1](https://www.nocobase.com/en/blog/v1.8.0-beta.1)

*Veröffentlichungsdatum: 2025-06-04*

#### 🎉 Neue Funktionen

- **[undefined]** Neues Plugin "Eingabe-Kopier-Button" für einzeilige Textfelder hinzugefügt ([#6894](https://github.com/nocobase/nocobase/pull/6894)) von @kerwin612
- **[Workflow]** Workflow-Kategorieverwaltung hinzugefügt ([#6965](https://github.com/nocobase/nocobase/pull/6965)) von @mytharcher

#### 🚀 Verbesserungen

- **[client]** Unterstützung für die Konfiguration, ob Menülinks in einem neuen Fenster geöffnet werden ([#6918](https://github.com/nocobase/nocobase/pull/6918)) von @katherinehhh
- **[Aktion: Datensätze importieren Pro]** xlsx-Importleistung optimiert von @aaaaaajie
- **[Auth: OIDC]** Groß-/Kleinschreibung beim Abgleich von Benutzern per E-Mail ignorieren von @2013xile
- **[Workflow: Genehmigung]** Workflow-Sammlungen aus dem Workflow-Plugin importieren, um Duplikate zu vermeiden von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**
  - Felder und Aktionen werden erst nach dem Aktualisieren der Seite wirksam ([#6977](https://github.com/nocobase/nocobase/pull/6977)) von @zhangzhonghe
  - Problem behoben, bei dem Felder in Blockvorlagen aufgrund doppelter API-Anfragen nicht angezeigt wurden ([#6957](https://github.com/nocobase/nocobase/pull/6957)) von @zhangzhonghe
  - Problem behoben, bei dem in Popups erstellte Blöcke die falsche Sammlung hatten ([#6961](https://github.com/nocobase/nocobase/pull/6961)) von @zhangzhonghe
  - Beim Festlegen von Standardwerten für Assoziationsfelder können keine Variablen ausgewählt werden ([#6974](https://github.com/nocobase/nocobase/pull/6974)) von @zhangzhonghe
  - Problem behoben, bei dem Werte von einzeiligen Textfeldern im einfachen Lesemodus als Array angezeigt wurden ([#6968](https://github.com/nocobase/nocobase/pull/6968)) von @zhangzhonghe
  - Assoziationssammlungsfelder aus externen Datenquellen können im Rollen-Datentabellenbereich nicht erweitert werden ([#6958](https://github.com/nocobase/nocobase/pull/6958)) von @katherinehhh
  - Problem behoben, bei dem die Option 'Überlauf mit Auslassungspunkten' für Beziehungsfelder unwirksam war ([#6967](https://github.com/nocobase/nocobase/pull/6967)) von @zhangzhonghe
  - Problem behoben, bei dem Standardwerte des Filterformulars in Unterseiten ungültig waren ([#6960](https://github.com/nocobase/nocobase/pull/6960)) von @zhangzhonghe
  - Problem, bei dem das Popup des Auswahl-Assoziationsfeldes beim ersten Tastendruck beim Hinzufügen neuer Daten schließt ([#6971](https://github.com/nocobase/nocobase/pull/6971)) von @katherinehhh
  - Assoziationsfeld in Untertabelle löst Anfrage aus, wenn Iterationsvariable einen leeren Wert hat ([#6969](https://github.com/nocobase/nocobase/pull/6969)) von @katherinehhh
  - Feldreihenfolge in der Dropdown-Liste des Filter-Buttons korrigiert ([#6962](https://github.com/nocobase/nocobase/pull/6962)) von @zhangzhonghe
  - Formularvalidierungsregeln gehen verloren, wenn das Panel eingeklappt wird ([#6949](https://github.com/nocobase/nocobase/pull/6949)) von @katherinehhh
  - Ausgewählte Werte werden zurückgesetzt, wenn Mehrfachauswahl-Dropdown-Optionen über Verknüpfungsregeln aktualisiert werden ([#6953](https://github.com/nocobase/nocobase/pull/6953)) von @katherinehhh
  - Untertabellen-Verknüpfungsvariable ruft beim Löschen Assoziationsdaten ab, anstatt den Formularwert zu verwenden ([#6963](https://github.com/nocobase/nocobase/pull/6963)) von @katherinehhh
  - Dropdown-Daten von Assoziationsfeldern mit einer Seitengröße von 200 paginieren ([#6950](https://github.com/nocobase/nocobase/pull/6950)) von @katherinehhh
  - Datumsauswahl wird nach dem Wechsel von "ist zwischen" zurück zu "ist" nicht aktualisiert ([#6956](https://github.com/nocobase/nocobase/pull/6956)) von @katherinehhh
  - Falsche Hervorhebungsposition beim Ziehen von Tabellenzeilen ([#6952](https://github.com/nocobase/nocobase/pull/6952)) von @chenos
- **[Authentifizierung]** Leistungsproblem durch Bereinigung abgelaufener Token ([#6981](https://github.com/nocobase/nocobase/pull/6981)) von @2013xile
- **[Workflow]** Fehler beim Filtern von Workflows behoben ([#6978](https://github.com/nocobase/nocobase/pull/6978)) von @mytharcher
- **[Dateimanager]** Ali-OSS-Timeout-Konfiguration korrigiert ([#6970](https://github.com/nocobase/nocobase/pull/6970)) von @mytharcher
- **[Theme-Editor]** Theme-Wechsel-Option ausblenden und Popup-Stil korrigieren ([#6964](https://github.com/nocobase/nocobase/pull/6964)) von @zhangzhonghe
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Initialisierer für die Werkbank fehlte, korrigiert von @mytharcher
- **[Auth: OIDC]** Anmeldebutton-Text wurde nicht lokalisiert von @2013xile
- **[Workflow: Genehmigung]** Fehler behoben, wenn der Bereich der Bearbeiter mit einer Assoziationsbedingung abgefragt wird von @mytharcher

### [v1.8.0-beta.2](https://www.nocobase.com/en/blog/v1.8.0-beta.2)

*Veröffentlichungsdatum: 2025-06-04*

#### 🚀 Verbesserungen

- **[Vorlagendruck]** Weitere Logs hinzugefügt. von @sheldon66

### [v1.8.0-beta.3](https://www.nocobase.com/en/blog/v1.8.0-beta.3)

*Veröffentlichungsdatum: 2025-06-04*

#### 🎉 Neue Funktionen

- **[Datenvisualisierung]** Unterstützung für Multiplikation und Division in der Diagrammtransformationskonfiguration ([#6788](https://github.com/nocobase/nocobase/pull/6788)) von @bugstark

#### 🚀 Verbesserungen

- **[Öffentliche Formulare]** Unterstützung für die Verwendung von URL-Parametern als Variablen ([#6973](https://github.com/nocobase/nocobase/pull/6973)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem Felder in Blockvorlagen aufgrund doppelter API-Anfragen nicht angezeigt wurden ([#6957](https://github.com/nocobase/nocobase/pull/6957)) von @zhangzhonghe
- **[Workflow: Manueller Knoten]** Initialisierer wirft Fehler bei Verwendung einer externen Datenquelle, korrigiert ([#6983](https://github.com/nocobase/nocobase/pull/6983)) von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.1](https://www.nocobase.com/en/blog/v1.8.0-alpha.1)

*Veröffentlichungsdatum: 2025-06-04*

#### 🎉 Neue Funktionen

- **[undefined]**
  - Neue Gitpod-Unterstützung ermöglicht den One-Click-Start der Entwicklungsumgebung für einen schnellen Entwicklungsbeginn. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) von @kerwin612
  - Neues Plugin "Eingabe-Kopier-Button" für einzeilige Textfelder hinzugefügt ([#6894](https://github.com/nocobase/nocobase/pull/6894)) von @kerwin612
- **[Datenvisualisierung]** Unterstützung für Multiplikation und Division in der Diagrammtransformationskonfiguration ([#6788](https://github.com/nocobase/nocobase/pull/6788)) von @bugstark
- **[Workflow]** Workflow-Kategorieverwaltung hinzugefügt ([#6965](https://github.com/nocobase/nocobase/pull/6965)) von @mytharcher
- **[E-Mail-Manager]** Unterstützung für Massenversand von @jiannx

#### 🚀 Verbesserungen

- **[client]**
  - Stile für die Datumsbereichs-Filterkomponente verbessert ([#6939](https://github.com/nocobase/nocobase/pull/6939)) von @katherinehhh
  - Unterstützung für die Konfiguration, ob Menülinks in einem neuen Fenster geöffnet werden ([#6918](https://github.com/nocobase/nocobase/pull/6918)) von @katherinehhh
  - Problem behoben, bei dem ausgeblendete Formularsteuerelemente die Tabulatortaste abfingen, was die Formularbedienung erheblich verbessert ([#6942](https://github.com/nocobase/nocobase/pull/6942)) von @kerwin612
  - Pflichtfelder validieren, bevor der Bestätigungsdialog angezeigt wird ([#6931](https://github.com/nocobase/nocobase/pull/6931)) von @katherinehhh
- **[Öffentliche Formulare]** Unterstützung für die Verwendung von URL-Parametern als Variablen ([#6973](https://github.com/nocobase/nocobase/pull/6973)) von @mytharcher
- **[Aktion: Datensätze importieren Pro]** xlsx-Importleistung optimiert von @aaaaaajie
- **[Vorlagendruck]** Weitere Logs hinzugefügt. von @sheldon66
- **[Auth: OIDC]** Groß-/Kleinschreibung beim Abgleich von Benutzern per E-Mail ignorieren von @2013xile
- **[Workflow: Genehmigung]** Workflow-Sammlungen aus dem Workflow-Plugin importieren, um Duplikate zu vermeiden von @mytharcher
- **[E-Mail-Manager]** Massenversandfunktion abgeschlossen von @jiannx

#### 🐛 Fehlerbehebungen

- **[client]**
  - Problem behoben, bei dem Felder in Blockvorlagen aufgrund doppelter API-Anfragen nicht angezeigt wurden ([#6957](https://github.com/nocobase/nocobase/pull/6957)) von @zhangzhonghe
  - Problem behoben, bei dem in Popups erstellte Blöcke die falsche Sammlung hatten ([#6961](https://github.com/nocobase/nocobase/pull/6961)) von @zhangzhonghe
  - Problem behoben, bei dem Werte von einzeiligen Textfeldern im einfachen Lesemodus als Array angezeigt wurden ([#6968](https://github.com/nocobase/nocobase/pull/6968)) von @zhangzhonghe
  - Feldreihenfolge in der Dropdown-Liste des Filter-Buttons korrigiert ([#6962](https://github.com/nocobase/nocobase/pull/6962)) von @zhangzhonghe
  - Felder und Aktionen werden erst nach dem Aktualisieren der Seite wirksam ([#6977](https://github.com/nocobase/nocobase/pull/6977)) von @zhangzhonghe
  - Problem behoben, bei dem die Option 'Überlauf mit Auslassungspunkten' für Beziehungsfelder unwirksam war ([#6967](https://github.com/nocobase/nocobase/pull/6967)) von @zhangzhonghe
  - Problem, bei dem das Popup des Auswahl-Assoziationsfeldes beim ersten Tastendruck beim Hinzufügen neuer Daten schließt ([#6971](https://github.com/nocobase/nocobase/pull/6971)) von @katherinehhh
  - Assoziationsfeld in Untertabelle löst Anfrage aus, wenn Iterationsvariable einen leeren Wert hat ([#6969](https://github.com/nocobase/nocobase/pull/6969)) von @katherinehhh
  - Formularvalidierungsregeln gehen verloren, wenn das Panel eingeklappt wird ([#6949](https://github.com/nocobase/nocobase/pull/6949)) von @katherinehhh
  - Problem behoben, bei dem Standardwerte des Filterformulars in Unterseiten ungültig waren ([#6960](https://github.com/nocobase/nocobase/pull/6960)) von @zhangzhonghe
  - i18n der Feldzuweisungskomponente funktioniert nicht ([#6945](https://github.com/nocobase/nocobase/pull/6945)) von @katherinehhh
  - Assoziationssammlungsfelder aus externen Datenquellen können im Rollen-Datentabellenbereich nicht erweitert werden ([#6958](https://github.com/nocobase/nocobase/pull/6958)) von @katherinehhh
  - Datumsauswahl wird nach dem Wechsel von "ist zwischen" zurück zu "ist" nicht aktualisiert ([#6956](https://github.com/nocobase/nocobase/pull/6956)) von @katherinehhh
  - Untertabellen-Verknüpfungsvariable ruft beim Löschen Assoziationsdaten ab, anstatt den Formularwert zu verwenden ([#6963](https://github.com/nocobase/nocobase/pull/6963)) von @katherinehhh
  - Ausgewählte Werte werden zurückgesetzt, wenn Mehrfachauswahl-Dropdown-Optionen über Verknüpfungsregeln aktualisiert werden ([#6953](https://github.com/nocobase/nocobase/pull/6953)) von @katherinehhh
  - Falsche Hervorhebungsposition beim Ziehen von Tabellenzeilen ([#6952](https://github.com/nocobase/nocobase/pull/6952)) von @chenos
  - Sichtbarkeitseinstellung des Formularlabel-Doppelpunkts funktioniert nicht ([#6947](https://github.com/nocobase/nocobase/pull/6947)) von @katherinehhh
  - Dropdown-Daten von Assoziationsfeldern mit einer Seitengröße von 200 paginieren ([#6950](https://github.com/nocobase/nocobase/pull/6950)) von @katherinehhh
  - Problem mit dem Kopier-Button im Fehler-Popup, der [object Object] kopierte, behoben. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) von @kerwin612
  - Beim Festlegen von Standardwerten für Assoziationsfelder können keine Variablen ausgewählt werden ([#6974](https://github.com/nocobase/nocobase/pull/6974)) von @zhangzhonghe
  - Blockgrößenänderung durch Ziehen funktioniert nicht ([#6944](https://github.com/nocobase/nocobase/pull/6944)) von @chenos
- **[Workflow: Manueller Knoten]** Initialisierer wirft Fehler bei Verwendung einer externen Datenquelle, korrigiert ([#6983](https://github.com/nocobase/nocobase/pull/6983)) von @mytharcher
- **[Authentifizierung]** Leistungsproblem durch Bereinigung abgelaufener Token ([#6981](https://github.com/nocobase/nocobase/pull/6981)) von @2013xile
- **[Dateimanager]** Ali-OSS-Timeout-Konfiguration korrigiert ([#6970](https://github.com/nocobase/nocobase/pull/6970)) von @mytharcher
- **[Workflow]** Fehler beim Filtern von Workflows behoben ([#6978](https://github.com/nocobase/nocobase/pull/6978)) von @mytharcher
- **[Theme-Editor]** Theme-Wechsel-Option ausblenden und Popup-Stil korrigieren ([#6964](https://github.com/nocobase/nocobase/pull/6964)) von @zhangzhonghe
- **[Sammlungsfeld: Markdown(Vditor)]** Problem mit der Breite der Markdown-Vditor-Feldkomponente nach Vergrößerung/Verkleinerung ([#6946](https://github.com/nocobase/nocobase/pull/6946)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Initialisierer für die Werkbank fehlte, korrigiert von @mytharcher
- **[Auth: OIDC]** Anmeldebutton-Text wurde nicht lokalisiert von @2013xile
- **[Workflow: Genehmigung]** Fehler behoben, wenn der Bereich der Bearbeiter mit einer Assoziationsbedingung abgefragt wird von @mytharcher

### [v1.8.0-alpha.2](https://www.nocobase.com/en/blog/v1.8.0-alpha.2)

*Veröffentlichungsdatum: 2025-06-04*

#### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem Felder in Blockvorlagen aufgrund doppelter API-Anfragen nicht angezeigt wurden ([#6957](https://github.com/nocobase/nocobase/pull/6957)) von @zhangzhonghe
