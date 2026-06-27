---
title: "NocoBase CRM-Lösung ist jetzt live – bereit für Ihre Erkundung"
description: "Die NocoBase CRM-Lösung nutzt die Funktionen einer Open-Source-No-Code-Plattform und integriert Kernfunktionen wie Kundenverwaltung und Prozessgenehmigung. Sie unterstützt Plugin-Erweiterungen, kann direkt in die eigene Umgebung kopiert werden und bietet flexible Optionen für die Geschäftsanpassung."
---

Wir freuen uns, den offiziellen Start der NocoBase CRM-Lösung bekannt zu geben!

Als Open-Source-No-Code-Plattform wird NocoBase bereits vielfältig eingesetzt, um verschiedenste Geschäftsanwendungen zu erstellen. CRM ist dabei einer der häufigsten Startpunkte – daher war es nur logisch, dies zur ersten offiziellen Lösung in unserem Portfolio zu machen.

Sie können die Lösung jetzt direkt in unserer Live-Demo-Umgebung ausprobieren und sie einfach für Ihre eigenen Anforderungen replizieren.

👉 Jetzt testen: [https://www.nocobase.com/en/solutions/crm](https://www.nocobase.com/en/solutions/crm)

<iframe width="679" height="382" src="https://www.youtube.com/embed/rU0xaUYEtYk" title="NocoBase CRM Solution is Now Live" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Warum CRM?

CRM-Systeme gehören zu den beliebtesten Anwendungsfällen für NocoBase. Sie haben eine klare Struktur, standardisierte Arbeitsabläufe und klar definierte Datenbeziehungen – und sind damit eine perfekte Demonstration der Stärken von NocoBase: visuelle Datenmodellierung, flexible Berechtigungen, automatisierte Workflows und integrierte Diagramme.

Noch wichtiger ist, dass CRM ein Anwendungsfall ist, der von unserer globalen Nutzerbasis in einer Vielzahl realer Szenarien validiert wurde.

## Was ist in der CRM-Demo enthalten?

Sie finden ein voll funktionsfähiges CRM-System, mit dem Sie:

* Kunden, Kontakte und Organisationsprofile verwalten
* Dashboards mit Trichterdiagrammen, Rankings und mehr anpassen
* Genehmigungen bearbeiten und E-Mails direkt in der Plattform versenden
* Erinnerungen einrichten, Workflows automatisieren und Aufgaben zuweisen
* Felder, Beziehungen, Berechtigungen und Oberflächenlayouts anpassen

Von der Datenmodellierung über das UI-Design bis hin zur Geschäftslogik – alles wird visuell konfiguriert, ohne Code.

## Welche kommerziellen Plugins werden verwendet?

Die aktuelle CRM-Demo enthält die folgenden kommerziellen Plugins, um ein vollständiges Erlebnis zu bieten:

| Plugin                                                                                                     | Rolle im CRM                                                                  | Alternative ohne Plugin                                                                               |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Datenvisualisierung: ECharts](https://docs.nocobase.com/handbook/data-visualization-echarts)               | Anpassbare Diagramme (z. B. Trichter, Balken, Kreis)                          | Verwenden Sie das kostenlose Diagramm-Plugin oder betten Sie externe Diagramme über iframe-Blöcke ein |
| Datentabelle: Kommentare                                                                                   | Kommentare zu Kunden, Kontakten, Tickets usw. hinzufügen                      | Kombinieren Sie Markdown (Vditor) mit Listenansichten als Workaround                                    |
| [E-Mail-Manager](https://docs.nocobase.com/handbook/email-manager/usage-admin)                              | E-Mails innerhalb des Systems senden und verwalten (unterstützt hohes Volumen) | Grundfunktionalität (~50%) mit Datentabellen + E-Mail-Workflow-Knoten erreichbar; Anhänge nicht unterstützt |
| [Backup-Manager](https://docs.nocobase.com/handbook/backups)                                              | App-Daten sichern, wiederherstellen und verteilen                             | Verwenden Sie die manuelle Datenbankmigration als Alternative                                            |
| [Workflow: Genehmigung](https://docs.nocobase.com/handbook/workflow/triggers/approval)                        | Unterstützt Genehmigungsabläufe (z. B. Angebote, Bestellungen)                | Verwenden Sie Statusfelder mit Verknüpfungsregeln; für komplexe Workflows eingeschränkt                  |
| [Workflow: JSON-Variablenzuordnung](https://docs.nocobase.com/handbook/workflow/nodes/json-variable-mapping) | SQL-Ergebnisse parsen und Leads Vertriebsmitarbeitern zuweisen                | Kann SQL-Stored Procedures für komplexe Logik verwenden                                                  |
| [Workflow: JSON-Abfrage](https://docs.nocobase.com/handbook/workflow/nodes/json-query)                       | Erweiterte JSON-Parsing für Aufgaben nach der Lead-Zuweisung                  | SQL-Stored Procedures können als Alternative verwendet werden                                            |
| [Workflow: Benutzerdefinierte Variable](https://docs.nocobase.com/handbook/workflow/nodes/variable)                    | Werte temporär speichern (z. B. Kunden-ID nach Erstellung eines Service-Tickets) | SQL-Stored Procedures können als Workaround dienen                                                       |
| [Aktion: Datensätze exportieren (Pro)](https://docs.nocobase.com/handbook/action-export-pro)                       | Daten aus jeder Tabelle exportieren                                           | Verwenden Sie die Standard-Exportfunktion (eingeschränkte Fähigkeiten)                                   |
| [Aktion: Datensätze importieren (Pro)](https://docs.nocobase.com/handbook/action-import-pro)                       | Daten in jede Tabelle importieren                                             | Verwenden Sie die Standard-Importfunktion als grundlegende Alternative                                   |
| [Benutzerdefinierte Variable](https://docs.nocobase.com/handbook/custom-variables)                                     | Numerische Badges auf Tab-Labels anzeigen                                     | ⚠️ Nein                                                                                                  |
| [Vorlagendruck](https://docs.nocobase.com/handbook/action-template-print)                              | Druckbare Angebote und Bestellungen generieren                                | ⚠️ Nein                                                                                                  |
| Verlauf (in Beta)                                                                                          | Änderungen an Datensätzen verfolgen                                           | ⚠️ Nein                                                                                                  |

## Was ist, wenn Sie keine kommerziellen Plugins gekauft haben?

Auch ohne kommerzielle Plugins können Sie mit den Kernfunktionen von NocoBase ein voll funktionsfähiges CRM erstellen und betreiben. So gehen Sie einige der fortgeschritteneren Anwendungsfälle an:

1. **Komplexe Logik (z. B. Lead-Zuweisung)**

Wenn Sie keinen Zugriff auf Funktionen wie Pre-Operation-Events, JSON-Parsing-Knoten oder JavaScript-Knoten haben, können Sie die Logik in SQL-Stored Procedures verlagern. Das funktioniert, kann aber die Codebasis schwerer verwaltbar machen und zukünftige Migrationen erschweren.

2. **Änderungsverfolgung ohne Verlaufsprotokolle**

Ohne das Verlaufsprotokoll-Plugin können Sie diese Funktionalität annähern, indem Sie Pre-Operation-Events, Abfrageknoten und JavaScript-Knoten kombinieren, um Feldwerte zu vergleichen. Diese Methode ist jedoch manuell, komplex und kann die Leistung beeinträchtigen – insbesondere bei großen Datensätzen oder häufigen Änderungen.

3. **Basis-Kommentarfunktion ohne spezielle Blöcke**

Fehlen Funktionen wie das Kommentare-Plugin? Sie können eine grundlegende Kommentarfunktion mit Listenansichten und Markdown-Feldern nachbilden. Ein Beispiel finden Sie in diesem Tutorial:

👉 [Verwendung des Task-Tutorial-Plugins](https://www.nocobase.com/en/tutorials/task-tutorial-plugin-use)

Es ist zwar nicht so nahtlos, deckt aber die meisten grundlegenden Szenarien ab.

4. **Andere Funktionen**

Einige Funktionen – wie benutzerdefinierte Variablen, Vorlagendruck oder Verlaufsprotokolle – sind ohne die entsprechenden Plugins nur schwer zu replizieren. Diese können erhebliche benutzerdefinierte Entwicklung oder Workarounds erfordern.

## Kopieren Sie es in Ihre eigene Umgebung

Sie können das gesamte CRM-System mit nur wenigen Klicks in Ihre eigene NocoBase-Umgebung kopieren. Es ist eine solide Grundlage, auf der Sie aufbauen können – fügen Sie Funktionen hinzu, entfernen Sie sie oder passen Sie sie an Ihre spezifischen Geschäftsanforderungen an.

Lesen Sie die Anleitung: [NocoBase CRM Demo Bereitstellungsanleitung](https://www.nocobase.com/en/tutorials/nocobase-crm-demo-deployment-guide)

Wir werden auch Schritt-für-Schritt-Tutorials veröffentlichen, die genau erklären, wie dieses CRM erstellt wurde.

Und das ist erst der Anfang – weitere einsatzbereite Lösungen sind in Vorbereitung, darunter Ticket-Systeme, Projektmanagement-Tools und mehr.

**Verwandte Lektüre:**

* [Top 10 der meistgestarnten Open-Source-ERP- und CRM-Systeme auf GitHub](https://www.nocobase.com/en/blog/top-10-most-starred-open-source-erp-and-crm-on-github)
* [Top 11 Open-Source-CRM-Projekte mit den meisten GitHub-Sternen](https://www.nocobase.com/en/blog/github-open-source-crm-projects)
* [NocoBase vs. Salesforce: Wer ist Ihr ideales CRM?](https://www.nocobase.com/en/blog/nocobase-vs-salesforce)
* [CRM in Stunden erstellen: Die besten No-Code/Low-Code-Tools, die Sie kennen müssen](https://www.nocobase.com/en/blog/low-code-no-code-crm-builder)
* [Top 4 Custom CRM Fallstudien (Hilfe bei der Auswahl einer flexibleren CRM-Lösung)](https://www.nocobase.com/en/blog/custom-crm-case-studies)
* [4 beste Open-Source-CRM-Software für kleine Unternehmen: Leichtgewichtig & effizient](https://www.nocobase.com/en/blog/the-best-4-crm-software-for-small-businesses)
* [So implementieren Sie die CRM-Lead-Konvertierung in NocoBase](https://www.nocobase.com/en/tutorials/how-to-implement-lead-conversion-in-nocobase)
* [Implementierung der CRM-Vertriebspipeline-Visualisierung in NocoBase: Lead-Status-Fortschrittsbalken & Phasenverwaltung](https://www.nocobase.com/en/tutorials/nocobase-crm-sales-pipeline-visualization-lead-status-progress-bar)
