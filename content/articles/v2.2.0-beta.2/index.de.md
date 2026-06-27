---
title: "NocoBase v2.2.0-beta.2: Externes Vektorspeicher-Konfigurationsformular für KI-Wissensdatenbanken hinzugefügt"
description: "Versionshinweise zu v2.2.0-beta.2"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Ein Konfigurationsformular für externe Vektorspeicher für KI-Wissensdatenbanken hinzugefügt. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) von @cgyrock
- **[KI: Wissensdatenbank]** Ein Konfigurationsformular für externe Vektorspeicher für KI-Wissensdatenbanken hinzugefügt. von @cgyrock
- **[E-Mail-Manager]** Der E-Mail-Manager-Client wurde auf v2 migriert. von @jiannx

### 🚀 Verbesserungen

- **[cli]**

  - Kompatibilitätsprüfungen für verschiedene Versionsnummernformate optimiert. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) von @chenos
  - Unterstützung für das Aktualisieren von Skills auf eine bestimmte Version hinzugefügt. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) von @chenos
  - Die Formulierung der Initialisierungs-Setup-Eingabeaufforderungen verbessert. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) von @chenos
- **[undefined]**

  - Ein Versionskontroll-Konversationsszenario zur KI-Builder-Übersichtsseite hinzugefügt. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) von @Molunerfinn
    Referenz: [KI-Builder Schnellstart](https://docs.nocobase.com/en/ai-builder)
  - Die Dokumentation zur Versionskontrolle mit Hinweisen zur automatischen Versionsspeicherung im KI-Builder verbessert. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) von @cgyrock
    Referenz: [Versionskontrolle](docs/docs/de/ops-management/version-control/index.md)
- **[Workflow]** Die Bearbeitung von Workflow-Metadaten verbessert, indem die Beschreibungsbearbeitung im Detail-Popup unterstützt und beim Duplizieren von Workflows die Quell-Workflow-Metadaten automatisch ausgefüllt werden. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) von @mytharcher
- **[Aktion: Datensätze importieren]** Die Detaildialoge für Import- und asynchrone Aufgabenfehler verbessert, sodass lange Fehlermeldungen vollständig angezeigt werden können, ohne das Layout zu beeinträchtigen. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) von @katherinehhh
- **[Übersetzungstest-Tool]** Eine Client-v2-Einstellungsseite für das Übersetzungstest-Tool hinzugefügt. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) von @jiannx
- **[Aktion: Datensätze importieren Pro]** Importdialoge verbessert, sodass lange Fehlermeldungen vollständig angezeigt werden können und der Verarbeitungsmodus direkt über das v2-Einstellungsmenü ausgewählt werden kann. von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem Felder in horizontalen Unterformularen zu schmal waren, um Daten anzuzeigen. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) von @zhangzhonghe
- **[Client-v2]** Problem behoben, bei dem v2-Seiten nach dem Anmelden weiterhin laden konnten. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) von @zhangzhonghe
- **[cli]** Node.js-Versionserkennung für die nb-Laufzeitumgebung hinzugefügt. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) von @chenos
- **[Aktion: Datensätze importieren]** Hochgeladene Importdateien auf Festplattenspeicher umgestellt, um den Speicherdruck bei großen Datenimporten zu reduzieren. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) von @mytharcher
- **[Asynchroner Aufgabenmanager]** Falsche Anfrage-IDs in den Protokollen der asynchronen Aufgaben-Worker behoben. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) von @2013xile
- **[Workflow]**

  - Timeout-Behandlung für Workflows behoben, sodass abgebrochene Ausführungen und ihre ausstehenden Aufgaben atomar aktualisiert werden können. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) von @mytharcher
  - Problem behoben, bei dem das Feld "Zuletzt aktualisiert von" des Workflows nach Änderungen an Workflow-Knoten nicht aktualisiert wurde. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) von @mytharcher
- **[Datenquellen-Manager]**

  - Problem mit dem leeren Feldbearbeitungs-Drawer behoben, der durch wiederholtes Neu-Rendern auf der Seite "Felder konfigurieren" der v1-externen Datenquelle verursacht wurde. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) von @katherinehhh
  - Problem behoben, bei dem das Löschen der aktuellen Sammlungskategorie im v1-Datenquellen-Manager dazu führen konnte, dass der Tab "Alle Sammlungen" leer blieb. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) von @katherinehhh
- **[Backup-Manager]** Ein Sicherheitsproblem behoben, bei dem unsichere PostgreSQL-Schema-Namen während der Backup-Wiederherstellung akzeptiert werden konnten. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) von @2013xile
- **[Workflow: SQL-Knoten]** Problem behoben, bei dem die Migration von Legacy-Template-Variablen in SQL-Workflows für einige Beta-Version-Benutzer übersprungen wurde. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) von @mytharcher
- **[Block: Kanban]** URL-Unterstützung für Kalender und andere Popups behoben. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) von @jiannx
- **[KI-Mitarbeiter]**

  - Problem behoben, bei dem in den KI-Mitarbeiter-Dialog eingefügte Anhänge nicht entfernt werden konnten. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) von @cgyrock
  - Verlust der Nachrichtenkonfiguration in Workflow-LLM-Knoten behoben. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) von @cgyrock
- **[Dateimanager]** Fehlende chinesische/CID-Schriftarttexte in einigen PDF-Vorschauen nach der Umstellung auf pdf.js behoben. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) von @mytharcher
- **[API-Dokumentation]** Fehler beim Build der Deklarationsdatei des API-Dokumentations-Plugins behoben. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) von @katherinehhh
- **[Aktion: Datensätze importieren Pro]** Vermeidung der Analyse großer Dateien im Anforderungsknoten, bevor der Pro-Import eine asynchrone Aufgabe erstellt. von @mytharcher
- **[Versionskontrolle]** Position des oberen Kurzbefehl-Eintrags für die Versionskontrolle angepasst, sodass er sowohl im Legacy- als auch im v2-Admin-Layout neben dem UI-Editor erscheint. von @cgyrock
- **[Workflow: Genehmigung]** Problem behoben, bei dem zugehörige Daten in v2-Genehmigungsformularen nicht angezeigt wurden. von @zhangzhonghe
