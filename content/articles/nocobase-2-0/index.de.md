---
title: "NocoBase 2.0: Lernen Sie Ihre KI-Mitarbeiter kennen"
description: "Jetzt ist es an der Zeit, NocoBase 2.0-alpha offiziell vorzustellen!"
---

NocoBase 1.0-alpha wurde am 28. April 2024 veröffentlicht und markierte den Beginn unserer kommerziellen Reise.
Im vergangenen Jahr haben wir Feedback von Tausenden von Nutzern, Code-Beiträge von Entwicklern aus aller Welt und kommerzielle Bestellungen von Hunderten von Unternehmen aus über 50 Ländern erhalten.

Wir danken jedem Nutzer, Mitwirkenden und zahlenden Kunden aufrichtig für Ihr Vertrauen und Ihre Unterstützung.

In den letzten sechs Monaten haben wir nicht nur kontinuierlich an Version 1.x iteriert und verbessert, sondern auch viel Zeit damit verbracht, über die nächste Generation von NocoBase nachzudenken, zu diskutieren und sie zu entwickeln.

Jetzt ist es an der Zeit, **NocoBase 2.0-alpha** offiziell vorzustellen!

## KI-Mitarbeiter

Das vergangene Jahr war geprägt von rasanten Fortschritten in der KI, wobei große Modelle in vielen Bereichen bemerkenswerte – ja sogar erstaunliche – Fähigkeiten gezeigt haben.

Als selbst starke KI-Nutzer haben wir KI direkt in Form von **KI-Mitarbeitern** in NocoBase 2.0 integriert – intelligente Kollegen, die in Ihrem System arbeiten.

KI-Mitarbeiter in NocoBase sind **keine Chatbots** oder isolierte Agenten.

Sie sind **nahtlos in Ihr Geschäftssystem integriert**, in der Lage, Kontext zu verstehen und Aufgaben direkt auszuführen.

* Sie erscheinen dort, wo Sie sie brauchen – neben Ihren Tabellen und Formularen – und sind bereit zu helfen.
* Sie können E-Mails zusammenfassen, Daten analysieren, unstrukturierte Inhalte organisieren und Formulare automatisch ausfüllen, Datenmodelle entwerfen oder sogar JavaScript-Code schreiben.
* Sie rufen automatisch Kontextdaten und Seitenstrukturen für die intelligente Aufgabenausführung ab.
* Jeder hat einzigartige Fähigkeiten, Werkzeuge und Wissensdatenbanken.
* Sie können eine unbegrenzte Anzahl von KI-Mitarbeitern erstellen, um Ihr eigenes KI-Team zu bilden.

[Erfahren Sie mehr über KI-Mitarbeiter](https://v2.docs.nocobase.com/ai-employees)

[Demo ausprobieren](https://demo.nocobase.com/new)

<video controls>
  <source src="https://static-docs.nocobase.com/Meet-Your-AI-Employee-EN.mp4" type="video/mp4">
</video>

## Ein brandneues 2.0-Seitensystem

Obwohl NocoBase schon immer plugin-basiert war, hatte Version 1.x Einschränkungen im Umgang mit dynamischen Interaktionen, flexiblen Layouts oder angepasster Logik im Frontend.

Solche Anforderungen ohne erheblichen Aufwand zu erfüllen, war schwierig.

NocoBase 2.0 führt ein **komplett neu strukturiertes Seitensystem** ein, das darauf ausgelegt ist, personalisierte und komplexe Frontend-Anforderungen effizient zu unterstützen.

### RUNJS

**RunJS** bietet eine einfache Möglichkeit, UI-Logik oder -Styling zu erweitern und anzupassen – ohne Plugins zu erstellen oder Quellcode zu ändern.

Im Seiten-Designer können Sie direkt JavaScript schreiben, um:

* Gerenderte Inhalte anzupassen (Felder, Blöcke, Spalten, Elemente usw.)
* Benutzerdefinierte Interaktionen zu definieren (Schaltflächenaktionen, Ereignisauslöser)
* Mit Kontextdaten für dynamisches Verhalten zu kombinieren

RunJS wird unterstützt in:

* JS-Block
* JS-Aktion
* JS-Feld
* JS-Element
* Verknüpfungsregeln
* Ereignisflüssen

[Erfahren Sie mehr über RUNJS](https://v2.docs.nocobase.com/interface-builder/runjs)

![20251102213506-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251102213506-2025-11-02-21-35-08.png)

### Ereignisfluss

In NocoBase 1.x erlaubte das System der Verknüpfungsregeln eine begrenzte Logik-Orchestrierung, die auf einen einzelnen Block beschränkt war.

NocoBase 2.0 führt den **Ereignisfluss** ein, eine wesentliche Erweiterung der Frontend-Logikkonfiguration.

Ein Ereignisfluss besteht aus:

* **Auslöser-Ereignissen**, wie z. B. vor dem Rendern, bei Klick oder bei Wertänderung
* **Auslöser-Bedingungen**
* **Aktionsschritten**, wie z. B. das Anzeigen von Benachrichtigungen, das Aktualisieren von Zielblöcken oder das Ausführen von JavaScript

[Erfahren Sie mehr über den Ereignisfluss](https://v2.docs.nocobase.com/interface-builder/event-flow)

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251031093341.png)

### Raster-Layout

In Version 1.x verwendeten Blöcke und Felder ein vollbreites, flexibles Drag-Layout, was die Präzision und Ästhetik einschränkte.

NocoBase 2.0 führt ein **neues Raster-Layout-System** ein, das es jedem Element ermöglicht, sich an Rastereinheiten auszurichten, für eine feinere Kontrolle.

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251029201501.gif)

### Wiederverwendbare Blöcke und Modale

In 1.x waren die Kopier-/Referenzfunktionen für Blöcke eingeschränkt und fehleranfällig, und ganze Modale konnten nicht referenziert werden.

NocoBase 2.0 definiert dies komplett neu – es ermöglicht **flexibles Referenzieren und Duplizieren** sowohl von Blöcken als auch von Modalen, was den Konfigurationsaufwand drastisch reduziert.

[Erfahren Sie mehr über Block-Referenzen & Kopien](https://v2.docs.nocobase.com/interface-builder/blocks/other-blocks/block-reference)

[Erfahren Sie mehr über Modal-Referenzen](https://v2.docs.nocobase.com/interface-builder/actions/action-settings/edit-popup)

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102211459_rec_.gif)

### Verbesserte Block-Erfahrung

Basierend auf Benutzerfeedback bringt NocoBase 2.0 viele Verfeinerungen an Block-Komponenten.

Tabellen unterstützen jetzt beispielsweise die **Inline-Bearbeitung** direkt in den Zellen – kein Popup erforderlich.

Weitere Verbesserungen sind in Arbeit.

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102215026-2025-11-02-21-50-28.png)

### Bessere Leistung

NocoBase 2.0 bietet im Vergleich zu 1.x eine deutlich verbesserte Frontend-Leistung.

## FlowEngine

Das neue Seitensystem in 2.0 wird von **FlowEngine** angetrieben – einer Low-Code-Frontend-Engine der nächsten Generation, die **Modelle** und **Flows** kombiniert.

Es vereinfacht die Frontend-Logik, verbessert die Wiederverwendbarkeit und erhöht die Wartbarkeit.

Durch die konfigurierbare Natur von Flow bringt es No-Code-Orchestrierung zu Frontend-Komponenten und Geschäftslogik.

Die Entwicklung von Plugin-Frontends in 1.x war oft mit komplexen Herausforderungen verbunden. Mit FlowEngine sind diese nun stark vereinfacht.

[Erfahren Sie mehr über FlowEngine](https://v2.docs.nocobase.com/flow-engine/what-is-flow-engine)

## Multi-Anwendung und Multi-Space

Version 1.x unterstützte grundlegende Multi-Anwendungsfähigkeiten, aber alle Apps teilten sich einen einzigen Prozess und konnten nicht einzeln überwacht oder verwaltet werden.

NocoBase 2.0 führt **eine komplett neue Multi-App- und Multi-Space-Architektur** ein.

* **Multi-App-Plugin** *(in Entwicklung)*
  Ermöglicht die dynamische Erstellung und Verwaltung mehrerer eigenständiger Apps ohne separate Bereitstellungen.
  Jede App läuft als unabhängige Instanz mit eigener Datenbank, eigenen Plugins und eigener Konfiguration – entweder in isolierten oder gemeinsamen Prozessen.
  Die übergeordnete App kann die Ressourcennutzung und den Status von Unter-Apps überwachen und verwalten, ideal für Multi-Tenant-Szenarien.
* **Multi-Space-Plugin**
  Ermöglicht logische Isolation innerhalb einer einzigen Instanz – perfekt für Szenarien wie mehrere Filialen oder Werke.
  Geschäftslogik, Workflows und Konfigurationen bleiben konsistent, während die Daten vollständig isoliert bleiben.

[Erfahren Sie mehr über Multi-Space](https://v2.docs.nocobase.com/multi-app/multi-space)

![20251102220714-2025-11-02-22-07-16](https://static-docs.nocobase.com/20251102220714-2025-11-02-22-07-16.png)

## Neue Datenvisualisierung

Das 1.x-Diagramm-Plugin basierte auf Ant Design Charts und ECharts, geeignet für einfache Fälle, aber eingeschränkt für komplexe, interaktive oder verknüpfte Visualisierungen.

NocoBase 2.0 führt ein **neues Datenvisualisierungs-Plugin** ein, das vollständig auf ECharts basiert und Folgendes unterstützt:

* Visueller Konfigurationsmodus
* SQL- und JSON-Modi
* Ereignisgesteuerte Interaktion
* Multi-Diagramm-Verknüpfung und Drill-Down

Und wenn SQL oder JSON zu komplex erscheinen – Ihr KI-Mitarbeiter **Nathan** kann helfen.

[Erfahren Sie mehr über Datenvisualisierung](https://v2.docs.nocobase.com/data-visualization)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

## Synchronisieren der Datenbankstruktur & Ändern von Feldtypen

In Version 1.x konnten Tabellen und Felder nur über den NocoBase-Datenquellen-Manager erstellt werden, und Feldtypen konnten nachträglich nicht geändert werden.

NocoBase 2.0 erlaubt jetzt:

* Synchronisieren vorhandener Tabellen und Felder aus Ihrer Hauptdatenbank
* Ändern von Feldtypen nach der Erstellung

Das bedeutet, Sie können ein vorhandenes Datenbankschema direkt als Ihre primäre Datenquelle verwenden.

![20251102222325-2025-11-02-22-23-27](https://static-docs.nocobase.com/20251102222325-2025-11-02-22-23-27.png)

## Zusätzliche Plugins

### Datensatzverlauf

Das Datensatzverlauf-Plugin verfolgt automatisch Datenänderungen – Einfügungen, Aktualisierungen, Löschungen – und speichert Snapshots und Diffs für Prüfungs- und Rollback-Zwecke.

[Erfahren Sie mehr über den Datensatzverlauf](https://v2.docs.nocobase.com/record-history/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/202511011346400.png)

### Formularentwürfe

Das Formularentwurf-Plugin speichert automatisch Entwurfsdaten, während Benutzer Formulare ausfüllen, um versehentlichen Datenverlust zu verhindern.

### Neuer E-Mail-Manager

Mit FlowEngine neu aufgebaut, integriert der neue E-Mail-Manager nahtlos KI-Mitarbeiter zum Zusammenfassen, Analysieren und Verfassen von E-Mails.

Er führt auch automatisches Speichern von Entwürfen und andere Verbesserungen ein.

[Erfahren Sie mehr über den E-Mail-Manager](https://v2.docs.nocobase.com/email-manager/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

## Upgrade von 1.x auf 2.0

Das Upgrade von 1.x auf 2.0 ist unkompliziert – folgen Sie einfach der [offiziellen Anleitung](https://v2.docs.nocobase.com/get-started/upgrading/docker).

Beachten Sie jedoch, dass **NocoBase 2.0 derzeit im Alpha-Stadium ist**, daher ist mit einer gewissen Instabilität zu rechnen.

Dank der **entkoppelten Architektur zwischen UI und Daten** von NocoBase bleiben Ihre bestehenden 1.x-Anwendungen vollständig intakt.

Wenn Sie neue Seiten erstellen, können Sie jetzt zwischen den Typen **v1** und **v2** wählen – wählen Sie v2, um auf die neuen Funktionen von NocoBase 2.0 zuzugreifen.

![20251102222729-2025-11-02-22-27-31](https://static-docs.nocobase.com/20251102222729-2025-11-02-22-27-31.png)
