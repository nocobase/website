---
title: "Ankündigung von NocoBase 2.1-beta"
description: "Großes KI-Upgrade: von CLI-Integration und KI-gestütztem Bauen über NocoBase Skills und KI-Plugin-Entwicklung bis hin zu verbesserten KI-Mitarbeitern – der gesamte Lebenszyklus von Aufbau, Erweiterung und Betrieb von Geschäftssystemen wird abgedeckt. Bauen und betreiben Sie echte Geschäftssysteme schneller mit KI."
---

Dieses Dokument gilt für NocoBase 2.1.0-beta.24 und höher.

Dies ist ein bedeutendes Upgrade **mit Fokus auf KI-Funktionen**. Dieses Release ermöglicht es, KI-Agenten in NocoBase zu integrieren – einschließlich CLI-Integration, KI-gestütztem Bauen, verbesserten KI-Mitarbeitern und einem KI-Entwicklungs-Plugin – und deckt den gesamten Ablauf vom Umgebungs-Onboarding über die Systemerstellung bis hin zur geschäftlichen Zusammenarbeit ab. Wir haben auch die V2-Seitenunterstützung und die Kernfunktionen weiter ausgebaut.

## Neuerungen

### NocoBase CLI wird zum offiziellen Einstiegspunkt für KI-Agenten

In diesem Release ist die NocoBase CLI (`nb`) der zentrale Einstiegspunkt für KI-Agenten, um eine Verbindung zu NocoBase herzustellen.

Die CLI wird verwendet, um NocoBase-Anwendungen in einem lokalen Arbeitsbereich zu initialisieren, zu verbinden und zu verwalten. Sie deckt zwei Szenarien ab:

- Verbindung zu einer bestehenden NocoBase-Anwendung herstellen und als CLI-Umgebung speichern
- Eine neue NocoBase-Anwendung über Docker, npm oder Git installieren und dann als CLI-Umgebung speichern

![NocoBase CLI visueller Assistent](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Egal, ob Sie KI in ein bestehendes System einbinden oder eine neue Anwendung von Grund auf neu erstellen möchten, Sie können die Initialisierung und laufende Verwaltung über die CLI durchführen.

Für Teams bietet die CLI einen standardisierten Einstiegspunkt, den KI-Agenten verstehen und bedienen können – Umgebungsinitialisierung, Verbindungskonfiguration und Laufzeitverwaltung folgen alle dem gleichen Ablauf.

Verwandte Dokumentation:

- [KI-Agenten-Integrationsleitfaden](https://docs.nocobase.com/ai/quick-start)
- [NocoBase CLI-Befehlsreferenz](https://docs.nocobase.com/api/cli/)

### KI-gestütztes Bauen: Manuelle Konfiguration durch Konversation ersetzen

KI-gestütztes Bauen ist eine der Kernfunktionen dieses Releases. Sie können Ihre Geschäftsanforderungen in natürlicher Sprache beschreiben, und die KI hilft bei der Datenmodellierung, Seitenkonfiguration, Berechtigungseinrichtung und Workflow-Orchestrierung.

Im Vergleich zum traditionellen Low-Code-Bauen bietet das KI-gestützte Bauen mehrere klare Vorteile:

- Niedrigere Einstiegshürde – Sie müssen nicht im Voraus mit jedem Konfigurationskonzept vertraut sein
- Kürzerer Weg von der Anforderungsbeschreibung zum funktionierenden Prototypen
- Daten-, UI- und Workflow-Konfiguration können kontinuierlich von der KI erledigt werden

Zum Beispiel: "Entwirf mir ein CRM-Datenmodell", "Erstelle mir eine Kundenverwaltungsseite" oder "Orchestriere einen Workflow, der nach der Erstellung einer Bestellung automatisch den Bestand abzieht" – all dies kann von der KI im Rahmen der NocoBase-Fähigkeiten erledigt werden.

Verwandte Dokumentation:

- [Schnellstart KI-gestütztes Bauen](https://docs.nocobase.com/ai-builder/)

### NocoBase Skills decken den gesamten Bauprozess ab

Um der KI zu helfen, das NocoBase-Konfigurationssystem wirklich zu verstehen, wird mit diesem Release eine Reihe von Domänenwissenspaketen ausgeliefert, die in KI-Agenten installiert werden können – NocoBase Skills.

Skills sind standardisierte Wissens- und Operations-Wrapper, die um die wichtigsten Fähigkeitsdomänen von NocoBase herum organisiert sind. Sie helfen der KI, Objektmodelle, Konfigurationsstrukturen und Ausführungsgrenzen genauer zu verstehen.

Wir bieten derzeit 8 Skills an, die den gesamten Bauprozess abdecken:

- [Umgebungsverwaltung](https://docs.nocobase.com/ai-builder/env-bootstrap) – Umgebungsprüfungen, Installation/Bereitstellung, Upgrade und Fehlerbehebung
- [Datenmodellierung](https://docs.nocobase.com/ai-builder/data-modeling) – Tabellen, Felder und Beziehungen erstellen und verwalten
- [UI-Erstellung](https://docs.nocobase.com/ai-builder/ui-builder) – Seiten, Blöcke, Popups und Interaktionsreaktionen erstellen und bearbeiten
- [Workflow-Verwaltung](https://docs.nocobase.com/ai-builder/workflow) – Workflows erstellen, bearbeiten, aktivieren und diagnostizieren
- [Berechtigungskonfiguration](https://docs.nocobase.com/ai-builder/acl) – Rollen, Berechtigungsrichtlinien, Benutzerbindungen und Risikobewertung verwalten
- [Lösungen](https://docs.nocobase.com/ai-builder/dsl-reconciler) – Komplette Geschäftssysteme aus YAML erstellen (noch in der Beta-Phase, mit eingeschränkter Stabilität)
- [Plugin-Verwaltung](https://docs.nocobase.com/ai-builder/plugin-manage) – Plugins anzeigen, aktivieren und deaktivieren
- [Veröffentlichungsverwaltung](https://docs.nocobase.com/ai-builder/publish) – Umgebungsübergreifende Veröffentlichung, Backup/Wiederherstellung und Migration

Mit Skills kann die KI das Konfigurationssystem von NocoBase genauer verstehen und beim Erstellen und Verwalten von Systemen intelligentere Unterstützung bieten.

**Hinweis**: NocoBase Skills werden noch aktiv verbessert. NocoBase Skills werden auch automatisch installiert, wenn Sie die NocoBase CLI installieren und initialisieren, sodass Sie sie in den meisten Fällen nicht separat installieren müssen.

Verwandte Dokumentation:

- [NocoBase Skills](https://github.com/nocobase/skills)

### KI-Entwicklungs-Plugin

Dieses Release schließt die grundlegenden Fähigkeiten für die KI-Plugin-Entwicklung, sodass die KI nicht nur am Bau von Anwendungen, sondern auch an der Entwicklung benutzerdefinierter Plugins teilnehmen kann.

Dies zeigt sich in drei Hauptbereichen:

- Eine einheitliche `rsbuild/rspack`-Build-Pipeline, die die Plugin-Entwicklung und das Frontend-Build-System konsolidiert
- Eine auf KI-Entwicklung ausgerichtete `client-v2`-Fähigkeit und ein `/v2/`-Routing-System, das die Voraussetzungen für die nächste Generation der Client-Plugin-Entwicklung schafft
- KI-Plugin-Entwicklungs-Skills, die der KI helfen, die Plugin-Struktur, Code-Organisation und Implementierungsmuster besser zu verstehen

Die Vorbereitungen rund um `client-v2` umfassen:

- `@nocobase/app` stellt den `client-v2`-Einstiegspunkt bereit
- Der Kernel enthält ein `@nocobase/client-v2`-Paket mit Basiskomponenten, Hilfsprogrammen und Typdefinitionen
- Jedes Plugin erhält ein `/src/client-v2`-Verzeichnis
- Eine neue `/v2/`-Route wird hinzugefügt
- Der Kernel migriert schrittweise zu V2
- Plugins migrieren schrittweise zu V2

Eine einheitliche Build-Pipeline senkt die Kosten für die Frontend-Plugin-Entwicklung und das Debugging. Die schrittweise Einführung von `client-v2` gibt der KI zudem eine stabilere Zielstruktur für die Generierung und Wartung von Plugin-Code.

In der Praxis: Sie können eine Plugin-Anforderung in natürlicher Sprache beschreiben, und die KI hilft bei der Generierung des Frontend- und Backend-Codes, der Datentabellen, APIs, Berechtigungskonfiguration und i18n-Inhalte.

**Hinweis**: Die KI-Plugin-Entwicklung ist nur für neue Plugins im `client-v2`-Stil vorgesehen. Wir werden in Kürze Migrationsdokumentation und Skills für den Wechsel von `client-v1`-Plugins zu `client-v2` bereitstellen, um Ihnen zu helfen, bestehende Plugins in das neue System zu überführen.

Verwandte Dokumentation:

- [Schnellstart KI-Entwicklungs-Plugin](https://docs.nocobase.com/ai-dev/)
- [Plugin-Entwicklung](https://docs.nocobase.com/plugin-development/)

### Verbesserungen der KI-Mitarbeiter

KI-gestütztes Bauen beantwortet die Frage "Wie verwende ich KI, um ein System zu bauen?"; KI-Mitarbeiter beantworten die Frage "Wie lasse ich KI im System arbeiten, um konkrete Geschäftsprobleme zu lösen?".

KI-Mitarbeiter gab es bereits in früheren Releases, aber in diesem Release wurden die zugehörigen Fähigkeiten erweitert und der KI-Kernel wurde ausgebaut:

- [MCP-Unterstützung](https://docs.nocobase.com/ai-employees/features/mcp)
- [Neuer KI-Mitarbeiter-Atlas](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), der eine Teamleiter-Rolle einnimmt und basierend auf der Benutzerabsicht andere KI-Mitarbeiter zur Erledigung von Aufgaben einsetzt
- [KI-Mitarbeiter-Workflow-Knoten](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [LLM-basiertes Websuche-Tool](https://docs.nocobase.com/ai-employees/features/web-search)
- [Neues Aggregationsabfrage-Tool und Berichtsgenerierungs-Tool](https://docs.nocobase.com/ai-employees/scenarios/business-report) zur Erstellung von Geschäftsanalyseberichten

Diese Verbesserungen heben die Erweiterbarkeit, Orchestrierung und Ausführungsfähigkeiten von KI-Mitarbeitern in Geschäftssystemen auf die nächste Stufe. KI-Mitarbeiter können den aktuellen Geschäftskontext verstehen, Skills aufrufen, um spezifische Aufgaben auszuführen, an automatisierten Workflows teilnehmen und externe Informationen kombinieren, um Analysen und Ergebnisse zu liefern.

Wenn Ihr Team intelligente Zusammenarbeit, automatisierte Analysen und Aufgabenausführung in Ihre Geschäftssysteme integrieren muss, ist dies auch eine der bemerkenswertesten Richtungen in diesem Update.

Verwandte Dokumentation:

- [KI-Mitarbeiter](https://docs.nocobase.com/ai-employees/)

### 2.0-Anpassung und neue Funktionen

Über KI hinaus migriert dieses Release weiterhin wichtige Funktionsmodule auf 2.0 und führt gleichzeitig neue Funktionen für reale Geschäftsszenarien ein.

Neue Funktionen

- [Handschriftliches Signaturfeld](https://docs.nocobase.com/data-sources/field-signature/)
- [JS-Element-Aktion](https://docs.nocobase.com/interface-builder/actions/types/js-item)

2.0-Anpassung

- [Benutzerdefinierte Anfrage](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Baumfilter-Block](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Kalender-Block](https://docs.nocobase.com/data-sources/calendar/)
- [Kanban-Block](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
