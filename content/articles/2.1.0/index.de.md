---
title: "Ankündigung von NocoBase 2.1.0"
description: "NocoBase 2.1 führt eine neue CLI für Menschen und KI-Agenten ein, um Anwendungen zu verbinden und zu verwalten. Es verbessert außerdem die KI-Erstellung, Skills, KI-Plugin-Entwicklung, KI-Mitarbeiter, Multi-App-Zusammenarbeit, Versionsverwaltung, Workflows und die 2.0-Kompatibilität."
---

NocoBase 2.1 ist ein bedeutendes Upgrade der **KI-Funktionen, Multi-App-Funktionen und der 2.0-Anpassung**. Wir haben die NocoBase CLI eingeführt, die es sowohl Menschen als auch KI-Agenten erleichtert, NocoBase-Anwendungen zu verbinden und zu verwalten. Von der Erstellung von Anwendungen und der KI-gestützten Erstellung bis hin zu verbesserten KI-Mitarbeitern und einem KI-Entwicklungs-Plugin deckt es den gesamten Ablauf vom Onboarding in die Umgebung bis zum Systemaufbau und der geschäftlichen Zusammenarbeit ab. Wir haben auch die Multi-App-Funktionen verbessert, um die Interaktion und Zusammenarbeit zwischen Apps zu erleichtern. Gleichzeitig haben wir die Versionskontrolle hinzugefügt und die 2.0-Seitenunterstützung und Kernfunktionen weiterhin substanziell ausgebaut – weitere Blöcke, Felder, Aktionen und Plugins unterstützen jetzt 2.0.

## Neuerungen

### Einführung der NocoBase CLI

In dieser Version ist die NocoBase CLI (`nb`) der zentrale Einstiegspunkt sowohl für normale Benutzer als auch für KI-Agenten, um eine Verbindung zu NocoBase herzustellen.

Die CLI wird verwendet, um NocoBase-Anwendungen in einem lokalen Arbeitsbereich zu initialisieren, zu verbinden und zu verwalten. Sie deckt mehrere Szenarien ab:

- Installieren einer neuen NocoBase-Anwendung über Docker, npm oder Git und Speichern als CLI-Umgebung
- Verbinden mit einer bestehenden NocoBase-Anwendung und Speichern als CLI-Umgebung
- Installieren, Erstellen und Aktivieren von Plugins
- Betreiben, Sichern und Verwalten von NocoBase-Anwendungen

![NocoBase CLI visueller Assistent](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Egal, ob Sie KI in ein bestehendes System integrieren oder eine neue Anwendung von Grund auf erstellen möchten, Sie können die Initialisierung und laufende Verwaltung über die CLI abwickeln.

Für Teams bietet die CLI einen standardisierten Einstiegspunkt, den KI-Agenten verstehen und bedienen können – Umgebungsinitialisierung, Verbindungskonfiguration und Laufzeitverwaltung folgen alle dem gleichen Ablauf.

Die offizielle Version fügt außerdem eine Reihe von betriebsbezogenen Befehlen hinzu:

- `nb api`: Aufrufen der NocoBase-API über die CLI.
- `nb app`: Verwalten des Anwendungs-Laufzeitzustands: Starten, Stoppen, Neustarten, Logs und Upgrade.
- `nb backup`: Erstellen eines Backups und lokales Herunterladen oder Wiederherstellen einer lokalen Backup-Datei in einer Zielumgebung.
- `nb config`: Verwalten der CLI-Standardkonfiguration.
- `nb db`: Verwalten der integrierten Datenbank der ausgewählten Umgebung.
- `nb env`: Verwalten von NocoBase-Projektumgebungen, der aktuellen Umgebung, des Status, der Details und der Laufzeitbefehle.
- `nb license`: Verwalten von kommerziellen Lizenzen und lizenzierten Plugins.
- `nb plugin`: Verwalten von Plugins der ausgewählten NocoBase-Umgebung.
- `nb scaffold`: Generieren eines NocoBase-Plugin-Entwicklungsgerüsts.
- `nb self`: Überprüfen oder Aktualisieren der NocoBase CLI selbst.
- `nb source`: Verwalten lokaler Quellprojekte: Herunterladen, Entwickeln, Bauen und Testen.

Verwandte Dokumentation:

- [NocoBase mit der CLI installieren](https://docs.nocobase.com/quickstart/installation/cli)
- [KI-Agenten-Integrationsleitfaden](https://docs.nocobase.com/ai/quick-start)
- [NocoBase CLI-Befehlsreferenz](https://docs.nocobase.com/api/cli/)

### KI-gestützte Erstellung: Manuelle Konfiguration durch Konversation ersetzen

Die KI-gestützte Erstellung ist eine der Kernfunktionen dieser Version. Sie können Ihre Geschäftsanforderungen in natürlicher Sprache beschreiben, und die KI hilft bei der Datenmodellierung, Seitenkonfiguration, Berechtigungseinrichtung und Workflow-Orchestrierung.

Im Vergleich zur traditionellen Low-Code-Erstellung bietet die KI-gestützte Erstellung mehrere klare Vorteile:

- Niedrigere Einstiegshürde – Sie müssen nicht im Voraus mit jedem Konfigurationskonzept vertraut sein
- Kürzerer Weg von der Anforderungsbeschreibung zum funktionierenden Prototyp
- Daten-, UI- und Workflow-Konfiguration können kontinuierlich von der KI durchgeführt werden

Zum Beispiel: „Entwirf mir ein CRM-Datenmodell“, „Erstelle mir eine Kundenverwaltungsseite“ oder „Orchestriere einen Workflow, der nach der Erstellung einer Bestellung automatisch den Bestand abzieht“ – all dies kann von der KI im Rahmen der NocoBase-Funktionen erledigt werden.

Verwandte Dokumentation:

- [Schnellstart zur KI-gestützten Erstellung](https://docs.nocobase.com/ai-builder/)

### NocoBase Skills decken den gesamten Erstellungsprozess ab

Um der KI zu helfen, das NocoBase-Konfigurationssystem wirklich zu verstehen, enthält diese Version eine Reihe von Domänenwissenspaketen, die in KI-Agenten installiert werden können – NocoBase Skills.

Skills sind standardisierte Wissens- und Operations-Wrapper, die um die wichtigsten Funktionsbereiche von NocoBase organisiert sind und der KI helfen, Objektmodelle, Konfigurationsstrukturen und Ausführungsgrenzen genauer zu verstehen.

Wir bieten derzeit 8 Skills an, die den gesamten Erstellungsprozess abdecken:

- [Umgebungsverwaltung](https://docs.nocobase.com/ai-builder/env-bootstrap) – Umgebungsprüfungen, Installation/Bereitstellung, Upgrade und Fehlerbehebung
- [Datenmodellierung](https://docs.nocobase.com/ai-builder/data-modeling) – Erstellen und Verwalten von Tabellen, Feldern und Beziehungen
- [UI-Erstellung](https://docs.nocobase.com/ai-builder/ui-builder) – Erstellen und Bearbeiten von Seiten, Blöcken, Popups und Interaktionsreaktionen
- [Workflow-Verwaltung](https://docs.nocobase.com/ai-builder/workflow) – Erstellen, Bearbeiten, Aktivieren und Diagnostizieren von Workflows
- [Berechtigungskonfiguration](https://docs.nocobase.com/ai-builder/acl) – Verwalten von Rollen, Berechtigungsrichtlinien, Benutzerbindungen und Risikobewertung
- [Lösungen](https://docs.nocobase.com/ai-builder/dsl-reconciler) – Massenerstellung ganzer Geschäftssysteme aus YAML (noch in der Beta-Phase, mit eingeschränkter Stabilität)
- [Plugin-Verwaltung](https://docs.nocobase.com/ai-builder/plugin-manage) – Anzeigen, Aktivieren und Deaktivieren von Plugins
- [Veröffentlichungsverwaltung](https://docs.nocobase.com/ai-builder/publish) – Umgebungsübergreifende Veröffentlichung, Backup/Wiederherstellung und Migration

Mit Skills kann die KI das NocoBase-Konfigurationssystem genauer verstehen und beim Erstellen und Verwalten von Systemen intelligentere Unterstützung bieten.

**Hinweis**: NocoBase Skills werden noch aktiv verbessert. NocoBase Skills werden auch automatisch installiert, wenn Sie die NocoBase CLI installieren und initialisieren, sodass Sie sie in den meisten Fällen nicht separat installieren müssen.

Verwandte Dokumentation:

- [NocoBase Skills](https://github.com/nocobase/skills)

### KI-Entwicklungs-Plugin

Diese Version füllt die grundlegenden Fähigkeiten für die KI-Plugin-Entwicklung auf, sodass die KI nicht nur am Anwendungsaufbau, sondern auch an der benutzerdefinierten Plugin-Entwicklung teilnehmen kann.

Dies zeigt sich in drei Hauptbereichen:

- Eine einheitliche `rsbuild/rspack`-Build-Pipeline, die die Plugin-Entwicklung und das Frontend-Build-System konsolidiert
- Eine `client-v2`-Fähigkeit und ein `/v/`-Routing-System, das auf die KI-Entwicklung ausgerichtet ist und die Voraussetzungen für die nächste Generation der Client-Plugin-Entwicklung schafft
- KI-Plugin-Entwicklungs-Skills, die der KI helfen, die Plugin-Struktur, Code-Organisation und Implementierungsmuster besser zu verstehen

Die Vorbereitungen rund um `client-v2` umfassen:

- `@nocobase/app` stellt den `client-v2`-Einstiegspunkt bereit
- Der Kernel enthält ein `@nocobase/client-v2`-Paket mit Basiskomponenten, Hilfsprogrammen und Typdefinitionen
- Jedes Plugin erhält ein `/src/client-v2`-Verzeichnis
- Eine neue `/v/`-Route wird hinzugefügt – wird noch aktiv verbessert, für Early Adopters verfügbar
- Der Kernel migriert schrittweise zu V2
- Plugins migrieren schrittweise zu V2

Eine einheitliche Build-Pipeline senkt die Kosten für die Frontend-Plugin-Entwicklung und das Debugging. Die schrittweise Einführung von `client-v2` gibt der KI auch eine stabilere Zielstruktur zum Generieren und Verwalten von Plugin-Code.

In der Praxis: Sie können eine Plugin-Anforderung in natürlicher Sprache beschreiben, und die KI hilft bei der Generierung des Frontend- und Backend-Codes, der Datentabellen, APIs, Berechtigungskonfiguration und i18n-Inhalte.

**Hinweis**: Die KI-Plugin-Entwicklung gilt nur für neue Plugins im `client-v2`-Stil. Wir werden mit Migrationsdokumentation und Skills für den Wechsel von `client-v1`-Plugins zu `client-v2` nachziehen, um Ihnen zu helfen, bestehende Plugins in das neue System zu überführen.

Verwandte Dokumentation:

- [Schnellstart zum KI-Entwicklungs-Plugin](https://docs.nocobase.com/ai-dev/)
- [Plugin-Entwicklung](https://docs.nocobase.com/plugin-development/)

### Verbesserungen der KI-Mitarbeiter

Die KI-gestützte Erstellung beantwortet die Frage „Wie verwende ich KI, um ein System zu bauen?“; KI-Mitarbeiter beantworten die Frage „Wie lasse ich KI im System arbeiten, um konkrete Geschäftsprobleme zu lösen?“.

KI-Mitarbeiter gab es bereits in früheren Versionen, aber in dieser Version wurden die zugehörigen Fähigkeiten verbessert und der KI-Kernel wurde abgerundet:

- [MCP-Unterstützung](https://docs.nocobase.com/ai-employees/features/mcp)
- [Neuer KI-Mitarbeiter-Atlas](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), der eine Teamleiter-Rolle spielt und andere KI-Mitarbeiter basierend auf der Benutzerabsicht zur Erledigung von Aufgaben einsetzt
- [KI-Mitarbeiter-Workflow-Knoten](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [LLM-basiertes Websuche-Tool](https://docs.nocobase.com/ai-employees/features/web-search)
- [Neues Aggregationsabfrage-Tool und Berichtsgenerierungs-Tool](https://docs.nocobase.com/ai-employees/scenarios/business-report) zur Erstellung von Geschäftsanalyseberichten
- [Neue Lokalisierungsingenieurin Lina](https://docs.nocobase.com/ai-employees/built-in/lina), ein integrierter KI-Mitarbeiter aus dem Lokalisierungs-Plugin, der für die Systemlokalisierungsübersetzung verwendet wird und inkrementelle, ausgewählte und vollständige Übersetzungsumfänge unterstützt

Diese Verbesserungen heben die Erweiterbarkeit, Orchestrierung und Ausführungsfähigkeiten der KI-Mitarbeiter in Geschäftssystemen auf die nächste Stufe. KI-Mitarbeiter können den aktuellen Geschäftskontext verstehen, Fähigkeiten aufrufen, um bestimmte Aufgaben auszuführen, an automatisierten Workflows teilnehmen und externe Informationen kombinieren, um Analysen und Ausgaben zu liefern.

Die offizielle Version fügt außerdem Unterstützung für KI-Mitarbeiter hinzu, um Dateien aus Workflow-Anhängsfeldern zu laden und mehrere Konversationen parallel zu verarbeiten, was die Benutzerfreundlichkeit von KI-Mitarbeitern in realen Geschäftsprozessen weiter verbessert.

Verwandte Dokumentation:

- [KI-Mitarbeiter](https://docs.nocobase.com/ai-employees/)
- [Lina: Lokalisierungsingenieurin](https://docs.nocobase.com/ai-employees/built-in/lina)
- [Lokalisierungsbegriffe mit Lina und einem lokalen HY-MT1.5-1.8B-Modell übersetzen](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)

### Versionskontrolle

Die Versionskontrolle hilft Ihnen, die Versionsiterationen und den Änderungsverlauf Ihrer Anwendung besser zu verwalten. Sie können verschiedene Versionen einer Anwendung erstellen, anzeigen und wiederherstellen, was das Wechseln zwischen Versionen und die Behebung von Problemen während der Entwicklung und des Betriebs erleichtert. **Hinweis: Diese Funktion erfordert die Professional Edition oder höher.**

![](https://static-docs.nocobase.com/20260526220510.png)

Verwandte Dokumentation:

- [Versionskontrolle](https://docs.nocobase.com/ops-management/version-control/)
- [Backup-Manager](https://docs.nocobase.com/ops-management/backup-manager/)

### Multi-App-Verbesserungen

In dieser Version haben wir einige wichtige Verbesserungen für Multi-App-Bereitstellungen vorgenommen, hauptsächlich in drei Bereichen:

- [Neuer App-Block und App-Umschalter](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher), mit denen Sie Einstiegspunkte zu anderen Unteranwendungen auf einer Seite anzeigen können, sodass Benutzer einfach zwischen der Haupt-App und Unter-Apps wechseln können.

![](https://static-docs.nocobase.com/202605271403304.png)

- [Neues App-Single-Sign-On](https://docs.nocobase.com/multi-app/multi-app/app-sso). Wenn ein Benutzer von der Haupt-App in eine Unter-App wechselt oder zwischen Unter-Apps wechselt, versucht das System, ihn automatisch mit dem aktuell angemeldeten Benutzer in der Ziel-Unter-App anzumelden. Benutzer müssen ihre Anmeldeinformationen nicht mehr in jeder Unter-App erneut eingeben.

![](https://static-docs.nocobase.com/202605271406542.png)

- [Aufrufen von Unter-App-APIs](https://docs.nocobase.com/multi-app/multi-app/sub-app-api). In Multi-App-Szenarien hat jede Unter-App ihre eigene unabhängige API, die sich durch Pfadpräfixe, Parameter usw. unterscheidet, was das Aufrufen der API einer Unter-App erleichtert.

Diese Verbesserungen sind für Benutzer, die Multi-App-Bereitstellungen betreiben, sehr praktisch, da sie den Datenaustausch und die Bedienung über mehrere Anwendungen hinweg erleichtern und die Gesamteffizienz der Zusammenarbeit in Multi-App-Systemen verbessern.

Verwandte Dokumentation:

- [App-Block und App-Umschalter](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher)
- [App-Single-Sign-On](https://docs.nocobase.com/multi-app/multi-app/app-sso)
- [Aufrufen von Unter-App-APIs](https://docs.nocobase.com/multi-app/multi-app/sub-app-api)

### Workflow-Verbesserungen

Diese Version verbessert die **Steuerbarkeit und Beobachtbarkeit** von Workflows:

- Zeitüberschreitungssteuerung hinzugefügt – Workflows, die zu lange laufen, werden automatisch beendet (Unter-Workflows unterstützen ebenfalls die Zeitüberschreitungskonfiguration)
- Felder „Erstellt von“ und „Aktualisiert von“ hinzugefügt
- Ein Log-Feld zu Knoten-Jobs hinzugefügt, das das Anzeigen von Knoten-Logs beim Debuggen erleichtert
- Der Webhook-Trigger (synchroner Modus) gibt bei Zeitüberschreitung den Antwortstatus 408 zurück

Verwandte Dokumentation:

- [Workflow](https://docs.nocobase.com/workflow/)

### Handschriftliches Signaturfeld

Ein handschriftliches Signaturfeld hinzugefügt, mit dem Sie in einem Formular eine Signatur zeichnen und speichern können, geeignet für Genehmigungen, Bestätigungsblätter, Quittungen und ähnliche Szenarien.

Verwandte Dokumentation:

- [Handschriftliches Signaturfeld](https://docs.nocobase.com/data-sources/field-signature/)

### JS-Item-Aktion

Die JS-Item-Aktion hinzugefügt, mit der Sie benutzerdefinierte Logik in einer Aktion durch Schreiben von JS ausführen können, die zusammen mit Ereignisabläufen arbeitet, um flexiblere Interaktionsanforderungen zu erfüllen.

Verwandte Dokumentation:

- [JS-Item-Aktion](https://docs.nocobase.com/interface-builder/actions/types/js-item)

### 2.0-Anpassung und neue Funktionen

Über KI hinaus migriert diese Version weiterhin wichtige Funktionsmodule auf 2.0 und führt gleichzeitig neue Funktionen für reale Geschäftsszenarien ein.

Neue Funktionen

- [Handschriftliches Signaturfeld](https://docs.nocobase.com/data-sources/field-signature/)
- [JS-Item-Aktion](https://docs.nocobase.com/interface-builder/actions/types/js-item)

2.0-Anpassung

- [Benutzerdefinierte Anfrage](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Baumfilterblock](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Kalenderblock](https://docs.nocobase.com/data-sources/calendar/)
- [Kanban-Block](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
- [Gantt-Block](https://docs.nocobase.com/plugins/@nocobase/plugin-gantt)
- [Listenblock](https://docs.nocobase.com/interface-builder/blocks/data-blocks/list)
- [Rasterkartenblock](https://docs.nocobase.com/interface-builder/blocks/data-blocks/grid-card)
- [Kartenblock](https://docs.nocobase.com/plugins/@nocobase/plugin-map)
- [Markdown-Block](https://docs.nocobase.com/interface-builder/blocks/other-blocks/markdown)
- [iframe-Block](https://docs.nocobase.com/integration/embed)
- [Diagrammblock / Datenvisualisierung](https://docs.nocobase.com/data-visualization)

## Mehrsprachige Dokumentation

- Indonesische und vietnamesische Dokumentation hinzugefügt
