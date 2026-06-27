---
title: "Ankündigung von NocoBase 2.0-beta"
description: "Nach 8 Wochen intensiver Verfeinerung ist NocoBase 2.0 in die stabile Beta-Phase eingetreten. Dieses Release bringt tiefgreifende Optimierungen für AI Employee, Visualization 2.0 und Approval 2.0 und führt gleichzeitig die brandneuen UI-Vorlagen und die Multi-App-Architektur ein."
---

Nach 8 Wochen harter Arbeit des NocoBase-Teams und aller Mitwirkenden wurde NocoBase 2.0-beta planmäßig veröffentlicht. Diese Version enthält umfangreiche Verfeinerungen und Tests der neuen Funktionen in NocoBase 2.0 und bringt 2.0 in eine stabilere Phase. Wir laden Early Adopters ein, diese Version für Produktionstests zu verwenden und zeitnah Feedback zu Problemen oder Vorschlägen zu geben.

2.0-rc wird vor dem 11. Februar 2026 mit umfassenderen Tests und zusätzlichen neuen Funktionen veröffentlicht. Bleiben Sie dran.

## Neue Funktionen

### AI Employees

Wir haben erhebliche Verbesserungen an AI Employees vorgenommen, darunter:

- Optimierte Fähigkeiten der integrierten AI Employees
- Unterstützung für den Zugriff auf externe Datenquellen
- Unterstützung für die Abfrage großer Datenmengen
- Beibehaltung der ursprünglichen Formatierung im Konversationsinhalt
- Verbesserte Fehlermeldungen

Benutzerhandbuch: [AI Employees](https://v2.docs.nocobase.com/ai-employees)

![](https://static-docs.nocobase.com/20251102121036-2025-11-02-12-10-38.png)

### UI Templates

Die 2.0 Beta führt eine brandneue UI-Vorlagenfunktion ein. Jeder Vorlagentyp unterstützt sowohl das Kopieren als auch das Referenzieren, darunter:

- Blockvorlagen
- Feldvorlagen
- Popup-Vorlagen

Bemerkenswerterweise ermöglichen Popup-Vorlagen das Speichern des gesamten Popup-Inhalts (alle Tabs und Blöcke in Unterseiten) als Vorlage, was die wiederholte Arbeit aus Version 1.x erheblich reduziert.

Benutzerhandbuch: [UI Templates](https://v2.docs.nocobase.com/interface-builder/ui-templates)

![](https://static-docs.nocobase.com/edit-popup-select-20251228.png)

### Multi-App 2.0

Multi-App Management ist NocoBases einheitliche Anwendungsverwaltungslösung zum Erstellen und Verwalten mehrerer physisch isolierter NocoBase-Anwendungsinstanzen in einer oder mehreren Laufzeitumgebungen. Über den App Supervisor können Benutzer mehrere Anwendungen von einer einheitlichen Einstiegsseite aus erstellen und verwalten, um die Anforderungen verschiedener Geschäftsbereiche und Größenordnungen zu erfüllen. NocoBase unterstützt drei Bereitstellungsarchitekturen:

- **Single App**: Stellen Sie nur eine NocoBase-Instanz bereit, in der alle Geschäftsfunktionen, Daten und Benutzer in derselben Anwendung ausgeführt werden.
- **Shared Memory Multi-App**: Mehrere Anwendungen können gleichzeitig in einer NocoBase-Instanz ausgeführt werden. Jede Anwendung ist unabhängig, kann eine eigene Datenbank verwenden und einzeln erstellt, gestartet und gestoppt werden, teilt sich jedoch denselben Prozess und Speicherplatz. Benutzer müssen weiterhin nur eine NocoBase-Instanz warten.
- **Multi-Environment Hybrid Deployment**: Stellen Sie eine NocoBase als einheitliches Verwaltungszentrum bereit, während Sie mehrere NocoBase-Instanzen als Anwendungslaufzeitumgebungen für die Ausführung von Geschäftsanwendungen bereitstellen. Verschiedene Anwendungen können auf verschiedenen Knoten oder Clustern ausgeführt werden.

Benutzerhandbuch: [Multi-App](https://v2.docs.nocobase.com/multi-app/multi-app)

![](https://static-docs.nocobase.com/202512231215186.png)

### Multi-Space

Das Multi-Space-Plugin ermöglicht eine logische Isolierung, um mehrere unabhängige Datenbereiche innerhalb einer einzelnen Anwendungsinstanz zu erstellen. Es eignet sich für Szenarien wie den Betrieb mehrerer Fabriken oder Filialen mit hochgradig konsistenten Geschäftsprozessen und Systemkonfigurationen.

Benutzerhandbuch: [Multi-Space](https://v2.docs.nocobase.com/multi-app/multi-space)

### Data Visualization 2.0

Version 1.x bot grundlegende Datenvisualisierungs-Plugins basierend auf Ant Design Charts und ECharts für grundlegende Datenvisualisierung. Sie blieb jedoch bei der Handhabung komplexer Diagramme, personalisierter Interaktionen und Datenverknüpfungsszenarien hinter den Erwartungen zurück.

NocoBase 2.0 führt ein brandneues Datenvisualisierungs-Plugin basierend auf ECharts ein, das den visuellen Konfigurationsmodus sowie SQL- und JSON-Modi unterstützt. Es unterstützt Ereignisse und erleichtert so die Handhabung komplexer Diagramme, Multi-Chart-Verknüpfungen und Daten-Drilldown-Szenarien.

Machen Sie sich keine Sorgen, dass SQL und JSON zu komplex sind – AI Employee Nathan hilft Ihnen weiter.

Benutzerhandbuch: [Data Visualization](https://v2.docs.nocobase.com/data-visualization)

![](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

### Workflow

#### Neuer "Multi-Condition Branch"-Knoten

Ähnlich wie `switch / case`- oder `if / else if`-Anweisungen in Programmiersprachen. Das System wertet mehrere konfigurierte Bedingungen nacheinander aus und führt nur den Zweig aus, der eine Bedingung erfüllt. Dieser Knoten wird einige Funktionen des "Parallel Branch"-Knotens ersetzen. Wir empfehlen, Workflows, die sowohl Bedingungs- als auch Parallelknoten verwenden, durch den neuen "Multi-Condition Branch"-Knoten zu ersetzen.

![20251123224209](https://static-docs.nocobase.com/20251123224209.png)

Benutzerhandbuch: [Multi-Condition Branch](https://v2.docs.nocobase.com/workflow/nodes/multi-conditions)

### Approval 2.0

Die meisten Blockkonfigurationen im Approval-Plugin wurden mit FlowEngine überarbeitet, was flexiblere Konfiguration und Nutzung unterstützt. Es wurden auch mehrere neue Funktionen hinzugefügt.

Benutzerhandbuch: [Approval](https://v2.docs.nocobase.com/workflow/triggers/approval)

#### Option zum Anzeigen des Daten-Snapshots oder des aktuellen Zustands in der Genehmigungsbearbeitungsoberfläche

* **Snapshot**
  Während des Genehmigungsprozesses sehen der Antragsteller und die Genehmiger den Datensatzstand, wie er zum Zeitpunkt ihres Eintritts war. Nach der Einreichung können sie nur die von ihnen geänderten Datensätze sehen – sie sehen keine späteren Aktualisierungen durch andere.
* **Latest**
  Während des Genehmigungsprozesses sehen der Antragsteller und die Genehmiger während des gesamten Prozesses immer die neueste Version des Datensatzes, unabhängig vom Zustand des Datensatzes vor ihrer Aktion. Nach dem Ende des Prozesses sehen sie die endgültige Version des Datensatzes.

#### Unterstützung für die Konfiguration des Initiatoren-Datenbereichs

Sie können Berechtigungen basierend auf dem Benutzerbereich konfigurieren, um festzulegen, welche Benutzer die Genehmigung einleiten können.

![20251226114623](https://static-docs.nocobase.com/20251226114623.png)

#### Im Aufgabencenter: Unterstützung für die Konfiguration von Geschäftsdatenfeldern in den Listkarten "Meine Initiativen" und "Meine Genehmigungen"

Die Karte "Meine Initiativen" ermöglicht eine flexible Konfiguration von Genehmigungsinformationen und Geschäftsdatenfeldern.

![20251231222654](https://static-docs.nocobase.com/20251231222654.png)

Die Karte "Meine Genehmigungen" ermöglicht eine flexible Konfiguration von Genehmigungsaufgaben und Geschäftsdatenfeldern.

![20251231222815](https://static-docs.nocobase.com/20251231222815.png)

### Email Manager 2.0

Das Email Manager-Plugin wurde mit FlowEngine überarbeitet, sodass AI Employees nahtlos an der E-Mail-Zusammenfassung, -Analyse und -Erstellung teilnehmen können. Es wurden auch neue Funktionen wie das automatische Speichern von Entwürfen hinzugefügt.

Benutzerhandbuch: [Email Manager](https://v2.docs.nocobase.com/email-manager)

![](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

### Record History

Das Record History-Plugin verfolgt Datenänderungen, indem es automatisch Snapshots und Differenzdatensätze für Erstellungs-, Aktualisierungs- und Löschvorgänge speichert. Dies hilft Benutzern, Datenänderungen schnell nachzuverfolgen und Vorgänge zu prüfen.

Benutzerhandbuch: [Record History](https://v2.docs.nocobase.com/record-history/)

![](https://static-docs.nocobase.com/202511011346400.png)

---

## Lösungen

NocoBase 2.0 bietet sofort einsatzbereite Lösungsvorlagen für den schnellen Aufbau von Geschäftssystemen.

### Intelligent Ticketing System

Eine KI-gesteuerte Ticketverwaltungsplattform mit folgenden Funktionen:

- **Multi-Source Unified Access**: Öffentliche Formulare, Kundenportal, E-Mail-Parsing, API/Webhook
- **AI Employee Team**: Sam (Routing), Grace (Antworten), Max (Wissen), Lexi (Übersetzung)...
- **Full SLA Monitoring**: P0-P3 vierstufige Priorität mit automatischen Eskalationsbenachrichtigungen
- **Knowledge Self-Circulation**: Tickets werden nach der Lösung automatisch zu Wissensartikeln

Lösungsdokumentation: https://v2.docs.nocobase.com/solution/ticket-system/

![ticketing-imgs-2026-01-01-00-46-12](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-46-12.jpg)

### CRM Customer Management (Vorschau)

> **Versionshinweis**: Die aktuelle Version basiert auf 1.x mit teilweise an 2.0 angepasster Frontend-Benutzeroberfläche, **nur zum Lernen und zur Vorschau**.

NocoBase CRM ist eine No-Code-, flexible und leistungsstarke Kundenbeziehungsmanagement-Plattform, die Folgendes abdeckt:

- **Customer Management**: Kundeninformationen, Kontakte, Kundenbewertung
- **Sales Pipeline**: Lead-Management, Opportunity-Tracking, Sales Funnel
- **Order Management**: Angebote, Bestellungen, Verträge
- **Data Analysis**: Dashboards, Berichte, Datenvisualisierung

Lösungsdokumentation: https://v2.docs.nocobase.com/solution/crm/

Live-Demo: https://demo.nocobase.com/new

![ticketing-imgs-2026-01-01-00-47-06](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-47-06.jpg)

## 2.0-beta vs 1.x

### Legende

- ✅ Supported: 1.x-Funktionen, die in 2.0 angepasst wurden
- 🆕 New feature: Neue Funktionen in 2.0
- ✨ Enhanced: Im Vergleich zu 1.0 verbesserte Funktionen
- 🔄 In progress: Funktionen in Entwicklung
- 🚀 Optimizing: Unterstützt, aber verbesserungswürdig
- ❌ Not supported: In 2.0 nicht unterstützte Funktionen
- ⚠️ Deprecated: Veraltete Funktionen
- P0/P1/P2: Funktionspriorität
  - P0: Bald verfügbar
  - P1: Wird vor der offiziellen Veröffentlichung von 2.0 unterstützt
  - P2: Wird nach der offiziellen Veröffentlichung von 2.0 unterstützt

### Interface Builder

#### Routes & Menüs


| Kategorie      | Funktion         | Status         | Priorität | Anmerkungen |
| -------------- | ---------------- | -------------- | --------- | ----------- |
| Menüpunkt hinzufügen | Gruppe           | ✅ Supported   | -         | -           |
| Menüpunkt hinzufügen | Klassische Seite (v1) | ✅ Supported   | -         | -           |
| Menüpunkt hinzufügen | Moderne Seite (v2)  | 🆕 New feature | -         | -           |
| Menüpunkt hinzufügen | Link             | ✅ Supported   | -         | -           |

#### Seiten


| Kategorie      | Funktion            | Status           | Priorität | Anmerkungen |
| -------------- | ------------------- | ---------------- | --------- | ----------- |
| Seiteneinstellungen | Seitentitel anzeigen | ✅ Supported     | -         | -           |
| Seiteneinstellungen | Seitentitel bearbeiten | ✅ Supported     | -         | -           |
| Seiteneinstellungen | Seiten-Tabs aktivieren | ✅ Supported     | -         | -           |
| Seiteneinstellungen | Eingebetteten Link kopieren | ❌ Not supported | -         | -           |
| Seiteneinstellungen | Seitenkopf aktivieren | ⚠️ Deprecated  | -         | -           |
| Layout ziehen   | Block-Layout ziehen  | ✨ Enhanced      | -         | -           |

#### Blöcke hinzufügen

##### Datenblöcke


| Funktion         | Status           | Priorität | Anmerkungen |
| --------------- | ---------------- | --------- | ----------- |
| Tabelle         | ✅ Supported     | -         | -           |
| Formular (Bearbeiten) | ✅ Supported     | -         | -           |
| Formular (Neu hinzufügen) | ✅ Supported     | -         | -           |
| Details         | ✅ Supported     | -         | -           |
| Liste           | ✅ Supported     | -         | -           |
| Rasterkarte     | ✅ Supported     | -         | -           |
| Kommentare      | ✅ Supported     | -         | -           |
| Karte           | ✅ Supported     | -         | -           |
| Diagramme       | ✨ Enhanced      | -         | -           |
| Kalender        | ❌ Not supported | -         | -           |
| Gantt           | ❌ Not supported | -         | -           |
| Kanban          | ❌ Not supported | -         | -           |
| Mehrschritt-Formular | ❌ Not supported | -         | -           |

##### Filterblöcke


| Funktion  | Status           | Priorität | Anmerkungen |
| -------- | ---------------- | --------- | ----------- |
| Formular | ✨ Enhanced      | -         | -           |
| Aufklappen | ❌ Not supported | -         | -           |
| Baum     | ❌ Not supported | -         | -           |

##### Andere Blöcke


| Funktion             | Status           | Priorität | Anmerkungen |
| ------------------- | ---------------- | --------- | ----------- |
| Blockvorlage        | 🆕 New feature   | -         | -           |
| JS-Block            | 🆕 New feature   | -         | -           |
| Iframe              | ✅ Supported     | -         | -           |
| Aktionspanel        | ✅ Supported     | -         | -           |
| Markdown            | ✨ Enhanced      | -         | -           |
| Datensatzverlauf    | 🆕 New feature   | -         | -           |
| E-Mail              | ✅ Supported     | -         | -           |
| Workflow > Aufgaben | ❌ Not supported | -         | -           |
| Workflow > Genehmigung | 🔄 In progress   | P0        | -           |

#### Tabs


| Kategorie     | Funktion  | Status         | Priorität | Anmerkungen |
| ------------- | --------- | -------------- | --------- | ----------- |
| Tab-Einstellungen | Tab bearbeiten | ✅ Supported   | -         | -           |
| Tab-Einstellungen | UID kopieren | 🆕 New feature | -         | -           |
| Tab-Einstellungen | Löschen   | ✅ Supported   | -         | -           |

#### Tabellenblock


| Kategorie                       | Funktion                      | Status           | Priorität | Anmerkungen |
| ------------------------------ | ---------------------------- | ---------------- | --------- | ----------- |
| Tabelleneinstellungen          | Titel & Beschreibung         | ✅ Supported     | -         | -           |
| Tabelleneinstellungen          | Blockverknüpfungsregeln      | ✨ Enhanced      | -         | -           |
| Tabelleneinstellungen          | Blockhöhe                    | ❌ Not supported | P1        | -           |
| Tabelleneinstellungen          | Drag-and-Drop-Sortierung aktivieren | ❌ Not supported | P1        | -           |
| Tabelleneinstellungen          | Drag-and-Drop-Sortierfeld    | ❌ Not supported | P1        | -           |
| Tabelleneinstellungen          | Datenlademodus               | ❌ Not supported | P1        | -           |
| Tabelleneinstellungen          | Schnellbearbeitung aktivieren | 🆕 New feature   | -         | -           |
| Tabelleneinstellungen          | Zeilennummern anzeigen       | ✅ Supported     | -         | -           |
| Tabelleneinstellungen          | Seitengröße                  | ✅ Supported     | -         | -           |
| Tabelleneinstellungen          | Datenbereich                 | ✅ Supported     | -         | -           |
| Tabelleneinstellungen          | Standardsortierung           | ✅ Supported     | -         | -           |
| Tabelleneinstellungen          | Baumtabelle aktivieren       | ✅ Supported     | -         | -           |
| Tabelleneinstellungen          | Alle Zeilen standardmäßig aufklappen | ✅ Supported     | -         | -           |
| Tabelleneinstellungen          | Tabellendichte               | ✅ Supported     | -         | -           |
| Tabelleneinstellungen          | Als Vorlage speichern        | 🆕 New feature   | -         | -           |
| Tabelleneinstellungen          | UID kopieren                 | 🆕 New feature   | -         | -           |
| Tabelleneinstellungen          | Löschen                      | ✅ Supported     | -         | -           |
| Tabellenaktionen > Globale Aktionen | Neu hinzufügen              | ✅ Supported     | -         | -           |
| Tabellenaktionen > Globale Aktionen | Löschen                     | ✅ Supported     | -         | -           |
| Tabellenaktionen > Globale Aktionen | Filter                      | ✅ Supported     | -         | -           |
| Tabellenaktionen > Globale Aktionen | Link                        | ✅ Supported     | -         | -           |
| Tabellenaktionen > Globale Aktionen | Popup                       | ✅ Supported     | -         | -           |
| Tabellenaktionen > Globale Aktionen | Aktualisieren               | ✅ Supported     | -         | -           |
| Tabellenaktionen > Globale Aktionen | Massenbearbeitung           | ❌ Not supported | P1        | -           |
| Tabellenaktionen > Globale Aktionen | Massenaktualisierung        | ✅ Supported     | -         | -           |
| Tabellenaktionen > Globale Aktionen | Exportieren                 | ✅ Supported     | -         | -           |
| Tabellenaktionen > Globale Aktionen | Importieren                 | ✅ Supported     | -         | -           |
| Tabellenaktionen > Globale Aktionen | Benutzerdefinierte Anfrage  | ❌ Not supported | P2        | -           |
| Tabellenaktionen > Globale Aktionen | Spalteneinstellungen        | ❌ Not supported | -         | -           |
| Tabellenaktionen > Globale Aktionen | AI-Mitarbeiter              | 🆕 New feature   | -         | -           |
| Tabellenaktionen > Globale Aktionen | JS-Aktion                   | 🆕 New feature   | -         | -           |
| Tabellenaktionen > Zeilenaktionen | Anzeigen                    | ✅ Supported     | -         | -           |
| Tabellenaktionen > Zeilenaktionen | Bearbeiten                  | ✅ Supported     | -         | -           |
| Tabellenaktionen > Zeilenaktionen | Datensatz aktualisieren     | ✅ Supported     | -         | -           |
| Tabellenaktionen > Zeilenaktionen | Löschen                     | ✅ Supported     | -         | -           |
| Tabellenaktionen > Zeilenaktionen | Popup                       | ✅ Supported     | -         | -           |
| Tabellenaktionen > Zeilenaktionen | Link                        | ✅ Supported     | -         | -           |
| Tabellenaktionen > Zeilenaktionen | Duplizieren                 | ❌ Not supported | P2        | -           |
| Tabellenaktionen > Zeilenaktionen | Benutzerdefinierte Anfrage  | ❌ Not supported | P2        | -           |
| Tabellenaktionen > Zeilenaktionen | AI-Mitarbeiter              | 🆕 New feature   | -         | -           |
| Tabellenaktionen > Zeilenaktionen | JS-Aktion                   | 🆕 New feature   | -         | -           |
| Tabellenspalten                  | Sammlungsfelder anzeigen    | ✅ Supported     | -         | -           |
| Tabellenspalten                  | Assoziationsfelder anzeigen | ✅ Supported     | -         | -           |
| Tabellenspalten > Andere Spalten | JS-Feld                     | 🆕 New feature   | -         | -           |
| Tabellenspalten > Andere Spalten | JS-Spalte                   | 🆕 New feature   | -         | -           |
| Tabellenspalten > Andere Spalten | Aktionen                    | ✨ Enhanced      | -         | -           |
| Tabellenspaltheneinstellungen    | Spaltentitel                | ✅ Supported     | -         | -           |
| Tabellenspaltheneinstellungen    | Tooltip                     | ✅ Supported     | -         | -           |
| Tabellenspaltheneinstellungen    | Spaltenbreite               | ✨ Enhanced      | -         | -           |
| Tabellenspaltheneinstellungen    | Schnellbearbeitung aktivieren | 🆕 New feature   | -         | -           |
| Tabellenspaltheneinstellungen    | Sortierbar                  | ✅ Supported     | -         | -           |
| Tabellenspaltheneinstellungen    | Fixiert                     | ✅ Supported     | -         | -           |
| Tabellenspaltheneinstellungen    | Stil                        | ❌ Not supported | P2        | -           |
| Tabellenspaltheneinstellungen    | Anzeigemodus                | 🆕 New feature   | -         | -           |
| Tabellenspaltheneinstellungen    | Kopierschaltfläche anzeigen | ❌ Not supported | -         | -           |
| Tabellenspaltheneinstellungen    | Auslassungspunkte bei Textüberlauf | ✨ Enhanced      | -         | -           |
| Tabellenspaltheneinstellungen    | Feldkomponente              | ✨ Enhanced      | -         | -           |
| Tabellenspaltheneinstellungen    | Rendermodus                 | 🆕 New feature   | -         | -           |
| Tabellenspaltheneinstellungen    | Klick-zum-Öffnen aktivieren | ✨ Enhanced      | -         | -           |
| Tabellenspaltheneinstellungen    | Bearbeitungs-Popup          | ✨ Enhanced      | -         | -           |
| Tabellenspaltheneinstellungen    | UID kopieren                | 🆕 New feature   | -         | -           |
| Tabellenspaltheneinstellungen    | Löschen                     | ✅ Supported     | -         | -           |
| Tabellenspaltheneinstellungen    | Spalte ausblenden           | ⚠️ Deprecated  | -         | -           |
| Tabellenspaltheneinstellungen    | Datenblöcke verbinden       | ⚠️ Deprecated  | -         | -           |
| Tabellenspaltheneinstellungen    | Als Referenzvorlage speichern | ⚠️ Deprecated  | -         | -           |
| Tabellenspaltheneinstellungen    | Als geerbte Vorlage speichern | ⚠️ Deprecated  | -         | -           |

#### Block "Hinzufügen & Bearbeiten" (Formular)


| Kategorie                                     | Funktion                               | Status           | Priorität | Anmerkungen |
| -------------------------------------------- | ------------------------------------- | ---------------- | --------- | ----------- |
| Formulareinstellungen                        | Titel & Beschreibung                   | ✅ Supported     | -         | -           |
| Formulareinstellungen                        | Blockhöhe                             | ❌ Not supported | P1        | -           |
| Formulareinstellungen                        | Formulardatenvorlagen                 | ❌ Not supported | -         | -           |
| Formulareinstellungen                        | Formular-Startwerte                   | 🔄 In progress   | P1        | -           |
| Formulareinstellungen                        | Layout                                | ✅ Supported     | -         | -           |
| Formulareinstellungen                        | Blockverknüpfungsregeln               | ✨ Enhanced      | -         | -           |
| Formulareinstellungen                        | Feldverknüpfungsregeln                | 🔄 In progress   | P2        | -           |
| Formulareinstellungen                        | Datenbereich                          | ✅ Supported     | -         | -           |
| Formulareinstellungen                        | Entwürfe aktivieren                   | 🆕 New feature   | -         | -           |
| Formulareinstellungen                        | Als Vorlage speichern                 | 🆕 New feature   | -         | -           |
| Formulareinstellungen                        | Referenz in Duplikat umwandeln        | 🆕 New feature   | -         | -           |
| Formulareinstellungen                        | Referenzfelder in Duplikate umwandeln | 🆕 New feature   | -         | -           |
| Formulareinstellungen                        | UID kopieren                          | 🆕 New feature   | -         | -           |
| Formulareinstellungen                        | Löschen                               | ✅ Supported     | -         | -           |
| Formulareinstellungen                        | Als Referenzvorlage speichern         | ⚠️ Deprecated  | -         | -           |
| Formulareinstellungen                        | Als geerbte Vorlage speichern         | ⚠️ Deprecated  | -         | -           |
| Formularfeldelemente                         | Sammlungsfelder anzeigen              | ✅ Supported     | -         | -           |
| Formularfeldelemente                         | Assoziationsfelder anzeigen           | ❌ Not supported | P2        | -           |
| Formularfeldelemente > Andere                | Feldvorlage                           | 🆕 New feature   | -         | -           |
| Formularfeldelemente > Andere                | JS-Element                            | 🆕 New feature   | -         | -           |
| Formularfeldelemente > Andere                | Trennlinie                            | ✨ Enhanced      | -         | -           |
| Formularfeldelemente > Andere                | Markdown                              | ✨ Enhanced      | -         | -           |
| Formularfeldelement-Einstellungen            | Beschriftung anzeigen                 | ✅ Supported     | -         | -           |
| Formularfeldelement-Einstellungen            | Beschriftung                          | ✅ Supported     | -         | -           |
| Formularfeldelement-Einstellungen            | Tooltip                               | ✅ Supported     | -         | -           |
| Formularfeldelement-Einstellungen            | Beschreibung                          | ✅ Supported     | -         | -           |
| Formularfeldelement-Einstellungen            | Standardwert                          | 🚀 Optimizing    | P0        | -           |
| Formularfeldelement-Einstellungen            | Validierung                           | ✨ Enhanced      | -         | -           |
| Formularfeldelement-Einstellungen            | Erforderlich                          | ✅ Supported     | -         | -           |
| Formularfeldelement-Einstellungen            | Anzeigemodus                          | ✨ Enhanced      | -         | -           |
| Formularfeldelement-Einstellungen > Unterformular | Mehrere                          | ❌ Not supported | P1        | -           |
| Formularfeldelement-Einstellungen > Unterformular | Feldverknüpfungsregeln            | 🔄 In progress   | P2        | -           |
| Formularfeldelement-Einstellungen > Untertabelle | Feldverknüpfungsregeln            | ❌ Not supported | P2        | -           |
| Formularfeldelement-Einstellungen > Unterformular (Popover) | -                     | ❌ Not supported | -         | -           |
| Formularfeldelement-Einstellungen            | UID kopieren                          | 🆕 New feature   | -         | -           |
| Formularfeldelement-Einstellungen            | Löschen                               | ✅ Supported     | -         | -           |
| Formularaktionen                             | Absenden                              | 🚀 Optimizing    | P1        | -           |
| Formularaktionen                             | Workflow auslösen                     | ✅ Supported     | -         | -           |
| Formularaktionen                             | Popup                                 | ❌ Not supported | P1        | -           |
| Formularaktionen                             | Benutzerdefinierte Anfrage            | ❌ Not supported | P2        | -           |
| Formularaktionen                             | AI-Mitarbeiter                        | 🆕 New feature   | -         | -           |
| Formularaktionen                             | JS-Aktion                             | 🆕 New feature   | -         | -           |

#### Details-Block


| Kategorie                                                | Funktion                    | Status           | Priorität | Anmerkungen |
| ------------------------------------------------------- | -------------------------- | ---------------- | --------- | ----------- |
| Detailseinstellungen                                    | Titel & Beschreibung       | ✅ Supported     | -         | -           |
| Detailseinstellungen                                    | Blockhöhe                  | ❌ Not supported | P1        | -           |
| Detailseinstellungen                                    | Blockverknüpfungsregeln    | ✨ Enhanced      | -         | -           |
| Detailseinstellungen                                    | Datenlademodus             | ❌ Not supported | P1        | -           |
| Detailseinstellungen                                    | Layout                     | ✅ Supported     | -         | -           |
| Detailseinstellungen                                    | Datenbereich               | ✅ Supported     | -         | -           |
| Detailseinstellungen                                    | Standardsortierung         | ✅ Supported     | -         | -           |
| Detailseinstellungen                                    | Feldverknüpfungsregeln     | 🚀 Optimizing    | -         | -           |
| Detailseinstellungen                                    | Als Vorlage speichern      | 🆕 New feature   | -         | -           |
| Detailseinstellungen                                    | UID kopieren               | 🆕 New feature   | -         | -           |
| Detailseinstellungen                                    | Löschen                    | ✅ Supported     | -         | -           |
| Detailseinstellungen                                    | Als Referenzvorlage speichern | ⚠️ Deprecated  | -         | -           |
| Detailseinstellungen                                    | Als geerbte Vorlage speichern | ⚠️ Deprecated  | -         | -           |
| Detailaktionen                                          | Anzeigen                   | 🆕 New feature   | -         | -           |
| Detailaktionen                                          | Bearbeiten                 | ✅ Supported     | -         | -           |
| Detailaktionen                                          | Popup öffnen               | ✅ Supported     | -         | -           |
| Detailaktionen                                          | Datensatz aktualisieren    | ✅ Supported     | -         | -           |
| Detailaktionen                                          | Löschen                    | ✅ Supported     | -         | -           |
| Detailaktionen                                          | Link                       | 🆕 New feature   | -         | -           |
| Detailaktionen                                          | Vorlagendruck              | ✅ Supported     | -         | -           |
| Detailaktionen                                          | Drucken                    | ❌ Not supported | -         | -           |
| Detailaktionen                                          | Benutzerdefinierte Anfrage | ❌ Not supported | P2        | -           |
| Detailaktionen                                          | Workflow auslösen          | 🆕 New feature   | -         | -           |
| Detailaktionen                                          | AI-Mitarbeiter             | 🆕 New feature   | -         | -           |
| Detailaktionen                                          | JS-Aktion                  | 🆕 New feature   | -         | -           |
| Detailfelder                                            | Sammlungsfelder anzeigen   | ✅ Supported     | -         | -           |
| Detailfelder                                            | Assoziationsfelder anzeigen | ✅ Supported     | -         | -           |
| Detailfelder > Andere                                   | Feldvorlage                | 🆕 New feature   | -         | -           |
| Detailfelder > Andere                                   | JS-Feld                    | 🆕 New feature   | -         | -           |
| Detailfelder > Andere                                   | JS-Element                 | 🆕 New feature   | -         | -           |
| Detailfelder > Andere                                   | Trennlinie                 | ✅ Supported     | -         | -           |
| Detailfelder > Andere                                   | Markdown                   | ✨ Enhanced      | -         | -           |
| Detail-Element-Einstellungen                            | Feldnamen anzeigen         | ✅ Supported     | -         | -           |
| Detail-Element-Einstellungen                            | Feldname                   | ✅ Supported     | -         | -           |
| Detail-Element-Einstellungen                            | Tooltip                    | ✅ Supported     | -         | -           |
| Detail-Element-Einstellungen                            | Beschreibung               | ✅ Supported     | -         | -           |
| Detail-Element-Einstellungen                            | Stil                       | ❌ Not supported | P2        | -           |
| Detail-Element-Einstellungen > Titelanzeige (anklickbares Feld) | Titelfeld           | ✨ Enhanced      | -         | -           |
| Detail-Element-Einstellungen > Titelanzeige (anklickbares Feld) | Stil               | ❌ Not supported | P2        | -           |
| Detail-Element-Einstellungen > Titelanzeige (anklickbares Feld) | Anzeigemodus        | 🆕 New feature   | -         | -           |
| Detail-Element-Einstellungen > Titelanzeige (anklickbares Feld) | Auslassungspunkte bei Textüberlauf | ✅ Supported     | -         | -           |
| Detail-Element-Einstellungen > Titelanzeige (anklickbares Feld) | Klick-zum-Öffnen aktivieren | ✅ Supported     | -         | -           |
| Detail-Element-Einstellungen > Titelanzeige (anklickbares Feld) | Popup-Einstellungen  | ✨ Enhanced      | -         | -           |
| Detail-Element-Einstellungen > Untertabelle             | Seitengröße               | ✅ Supported     | -         | -           |
| Detail-Element-Einstellungen > Untertabelle             | Sortierregeln festlegen    | ❌ Not supported | -         | -           |
| Detail-Element-Einstellungen > Untertabelle             | Zeilennummern aktivieren   | ❌ Not supported | -         | -           |
| Detail-Element-Einstellungen > Untertabelle             | Verknüpfungsregeln         | ❌ Not supported | -         | -           |
| Detail-Element-Einstellungen > Unterdetails             | Verknüpfungsregeln         | ❌ Not supported | -         | -           |
| Detail-Element-Einstellungen > Unterdetails             | Layout                     | ❌ Not supported | -         | -           |
| Detail-Element-Einstellungen > Großer Text              | Auslassungspunkte bei Textüberlauf | ✨ Enhanced      | -         | -           |
| Detail-Element-Einstellungen > Großer Text              | Rendermodus                | ✨ Enhanced      | -         | -           |
| Detail-Element-Einstellungen > Vorschau                 | -                          | ✨ Enhanced      | -         | -           |
| Detail-Element-Einstellungen                            | UID kopieren               | 🆕 New feature   | -         | -           |
| Detail-Element-Einstellungen                            | Löschen                    | ✅ Supported     | -         | -           |

#### Listenblock


| Kategorie                      | Funktion                               | Status           | Priorität | Anmerkungen |
| ----------------------------- | ------------------------------------- | ---------------- | --------- | ----------- |
| Listeneinstellungen           | Titel & Beschreibung                   | ✅ Supported     | -         | -           |
| Listeneinstellungen           | Blockhöhe                             | ❌ Not supported | P1        | -           |
| Listeneinstellungen           | Blockverknüpfungsregeln               | ✨ Enhanced      | -         | -           |
| Listeneinstellungen           | Seitengröße                           | ✅ Supported     | -         | -           |
| Listeneinstellungen           | Datenbereich                          | ✅ Supported     | -         | -           |
| Listeneinstellungen           | Standardsortierung                    | ✅ Supported     | -         | -           |
| Listeneinstellungen           | Datenlademodus                        | ✅ Supported     | -         | -           |
| Listeneinstellungen           | Layout                                | ✅ Supported     | -         | -           |
| Listeneinstellungen           | Als Vorlage speichern                 | 🆕 New feature   | -         | -           |
| Listeneinstellungen           | Referenz in Duplikat umwandeln        | 🆕 New feature   | -         | -           |
| Listeneinstellungen           | Referenzfelder in Duplikate umwandeln | 🆕 New feature   | -         | -           |
| Listeneinstellungen           | UID kopieren                          | 🆕 New feature   | -         | -           |
| Listeneinstellungen           | Löschen                               | ✅ Supported     | -         | -           |
| Listeneinstellungen           | Als Referenzvorlage speichern         | ⚠️ Deprecated  | -         | -           |
| Listeneinstellungen           | Als geerbte Vorlage speichern         | ⚠️ Deprecated  | -         | -           |
| Listenaktionen > Globale Aktionen | Neu hinzufügen                    | ✅ Supported     | -         | -           |
| Listenaktionen > Globale Aktionen | Löschen                           | ✅ Supported     | -         | -           |
| Listenaktionen > Globale Aktionen | Filter                            | ✅ Supported     | -         | -           |
| Listenaktionen > Globale Aktionen | Link                              | 🆕 New feature   | -         | -           |
| Listenaktionen > Globale Aktionen | Popup                             | 🆕 New feature   | -         | -           |
| Listenaktionen > Globale Aktionen | Aktualisieren                     | ✅ Supported     | -         | -           |
| Listenaktionen > Globale Aktionen | Massenaktualisierung              | 🚀 Optimizing    | -         | -           |
| Listenaktionen > Globale Aktionen | Exportieren                       | ✅ Supported     | -         | -           |
| Listenaktionen > Globale Aktionen | Importieren                       | ✅ Supported     | -         | -           |
| Listenaktionen > Globale Aktionen | Anhänge exportieren               | 🆕 New feature   | -         | -           |
| Listenaktionen > Globale Aktionen | E-Mail senden                     | 🆕 New feature   | -         | -           |
| Listenaktionen > Globale Aktionen | Vorlagendruck                     | 🆕 New feature   | -         | -           |
| Listenaktionen > Globale Aktionen | Workflow auslösen                 | ✅ Supported     | -         | -           |
| Listenaktionen > Globale Aktionen | Benutzerdefinierte Anfrage        | ❌ Not supported | P2        | -           |
| Listenaktionen > Globale Aktionen | AI-Mitarbeiter                    | 🆕 New feature   | -         | -           |
| Listenaktionen > Globale Aktionen | JS-Aktion                         | 🆕 New feature   | -         | -           |
| Listenaktionen > Zeilenaktionen | Anzeigen                            | ✅ Supported     | -         | -           |
| Listenaktionen > Zeilenaktionen | Löschen                             | ✅ Supported     | -         | -           |
| Listenaktionen > Zeilenaktionen | Bearbeiten                          | ✅ Supported     | -         | -           |
| Listenaktionen > Zeilenaktionen | Link                                | ✅ Supported     | -         | -           |
| Listenaktionen > Zeilenaktionen | Popup                               | ✅ Supported     | -         | -           |
| Listenaktionen > Zeilenaktionen | Datensatz aktualisieren             | ✅ Supported     | -         | -           |
| Listenaktionen > Zeilenaktionen | Vorlagendruck                       | ✅ Supported     | -         | -           |
| Listenaktionen > Zeilenaktionen | Workflow auslösen                   | ✅ Supported     | -         | -           |
| Listenaktionen > Zeilenaktionen | Benutzerdefinierte Anfrage          | ❌ Not supported | P2        | -           |
| Listenaktionen > Zeilenaktionen | AI-Mitarbeiter                      | 🆕 New feature   | -         | -           |
| Listenaktionen > Zeilenaktionen | JS-Aktion                           | 🆕 New feature   | -         | -           |
| Listenfelder                   | Sammlungsfelder anzeigen             | ✅ Supported     | -         | -           |
| Listenfelder                   | Assoziationsfelder anzeigen          | ✅ Supported     | -         | -           |
| Listenfelder > Andere          | JS-Feld                              | 🆕 New feature   | -         | -           |
| Listenfelder > Andere          | JS-Element                           | 🆕 New feature   | -         | -           |
| Listenfelder > Andere          | Trennlinie                           | ✅ Supported     | -         | -           |
| Listenfelder > Andere          | Markdown                             | 🆕 New feature   | -         | -           |

#### Andere Blöcke


| Funktion               | Status           | Priorität | Anmerkungen |
| --------------------- | ---------------- | --------- | ----------- |
| Rasterkartenblock     | ✅ Supported     | -         | -           |
| Kommentarblock        | ✅ Supported     | -         | -           |
| Kartenblock           | ✅ Supported     | -         | -           |
| Diagrammblock         | ✨ Enhanced      | -         | -           |
| Kalenderblock         | ❌ Not supported | -         | -           |
| Gantt-Block           | ❌ Not supported | -         | -           |
| Kanban-Block          | ❌ Not supported | -         | -           |
| Mehrschritt-Formularblock | ❌ Not supported | -         | -           |
| Filterformular        | ✨ Enhanced      | -         | -           |
| Filter aufklappen     | ❌ Not supported | -         | -           |
| Baumfilter            | ❌ Not supported | -         | -           |
| Blockvorlage          | 🆕 New feature   | -         | -           |
| JS-Block              | 🆕 New feature   | -         | -           |
| Iframe                | ✅ Supported     | -         | -           |
| Aktionspanel          | ✅ Supported     | -         | -           |
| Markdown              | ✨ Enhanced      | -         | -           |
| Datensatzverlauf      | 🆕 New feature   | -         | -           |
| E-Mail                | ✅ Supported     | -         | -           |
| Workflow              | 🔄 In progress   | P0        | -           |

#### Aktionspanel


| Kategorie              | Funktion                   | Status           | Priorität | Anmerkungen |
| --------------------- | ------------------------- | ---------------- | --------- | ----------- |
| Aktionspanel-Einstellungen | Titel & Beschreibung      | ✅ Supported     | -         | -           |
| Aktionspanel-Einstellungen | Blockhöhe                 | ❌ Not supported | P1        | -           |
| Aktionspanel-Einstellungen | Blockverknüpfungsregeln   | ✨ Enhanced      | -         | -           |
| Aktionspanel-Einstellungen | Layout                    | ✅ Supported     | -         | -           |
| Aktionspanel-Einstellungen | Auslassungspunkte bei Textüberlauf | ✅ Supported     | -         | -           |
| Aktionspanel-Einstellungen | Als Vorlage speichern     | 🆕 New feature   | -         | -           |
| Aktionspanel-Einstellungen | UID kopieren              | 🆕 New feature   | -         | -           |
| Aktionspanel-Einstellungen | Löschen                   | ✅ Supported     | -         | -           |
| Aktionen               | Popup                     | ✅ Supported     | -         | -           |
| Aktionen               | Link                      | ✅ Supported     | -         | -           |
| Aktionen               | QR-Code scannen           | ✅ Supported     | -         | -           |
| Aktionen               | Datensatz aktualisieren   | ❌ Not supported | P2        | -           |
| Aktionen               | Benutzerdefinierte Anfrage | ❌ Not supported | P2        | -           |
| Aktionen               | Workflow auslösen         | ❌ Not supported | P2        | -           |
| Aktionen               | JS-Aktion                 | 🆕 New feature   | -         | -           |

#### Felder

##### Nur-Lese-Modus


| Kategorie           | Funktion             | Status           | Priorität | Anmerkungen |
| ------------------ | ------------------- | ---------------- | --------- | ----------- |
| Anklickbares Feld  | Textanzeige         | ✅ Supported     | -         | -           |
| Anklickbares Feld  | Zahlenanzeige       | ✅ Supported     | -         | -           |
| Anklickbares Feld  | Datumsanzeige       | ✅ Supported     | -         | -           |
| Anklickbares Feld  | Zeitanzeige         | ✅ Supported     | -         | -           |
| Anklickbares Feld  | Aufzählungsanzeige  | ✅ Supported     | -         | -           |
| Anklickbares Feld  | Beziehungsanzeige   | ✅ Supported     | -         | -           |
| Große Textanzeige  | Rich-Text-Anzeige   | ✅ Supported     | -         | -           |
| Große Textanzeige  | Markdown-Anzeige    | ✅ Supported     | -         | -           |
| Große Textanzeige  | Codeblock-Anzeige   | ❌ Not supported | P1        | -           |
| Große Textanzeige  | JSON-Feld           | ✅ Supported     | -         | -           |
| Feldanzeige        | URL-Feld            | ✅ Supported     | -         | -           |
| Feldanzeige        | Vorschaufeld        | ✅ Supported     | -         | -           |
| Feldanzeige        | Kontrollkästchenfeld | ✅ Supported     | -         | -           |
| Feldanzeige        | Symbolfeld          | ✅ Supported     | -         | -           |
| Feldanzeige        | Farbfeld            | ✅ Supported     | -         | -           |
| Feldanzeige        | Formelberechnung    | ✅ Supported     | -         | -           |
| Feldanzeige        | Auto-Code           | ✅ Supported     | -         | -           |
| Beziehungsfeld     | Unterdetails        | 🔄 In progress   | P0        | -           |
| Beziehungsfeld     | Untertabelle        | 🔄 In progress   | P0        | -           |
| Feldanzeige        | Kartenanzeige       | ✅ Supported     | -         | -           |
| Feldanzeige        | JS-Feld             | ✅ Supported     | -         | -           |
| Feldanzeige        | TableOID            | ✅ Supported     | -         | -           |
| Feldanzeige        | China-Region        | ❌ Not supported | -         | -           |
| Feldanzeige        | QR-Code             | ❌ Not supported | -         | -           |

##### Bearbeitungsmodus


| Funktion                  | Status           | Priorität | Anmerkungen |
| ------------------------ | ---------------- | --------- | ----------- |
| Einzeilige Eingabe       | ✅ Supported     | -         | -           |
| Zahleneingabe            | ✅ Supported     | -         | -           |
| Prozentuale Eingabe      | ✅ Supported     | -         | -           |
| Passworteingabe          | ✅ Supported     | -         | -           |
| NanoID-Eingabe           | ✅ Supported     | -         | -           |
| Mehrzeilige Texteingabe  | ✅ Supported     | -         | -           |
| Rich-Text-Editor         | ✅ Supported     | -         | -           |
| Code-Editor              | ❌ Not supported | -         | -           |
| Markdown-Editor          | ✅ Supported     | -         | -           |
| JSON-Eingabe             | ✅ Supported     | -         | -           |
| Auswahl                  | ✅ Supported     | -         | -           |
| Optionsfeld              | ✅ Supported     | -         | -           |
| Kontrollkästchen         | ✅ Supported     | -         | -           |
| Kontrollkästchengruppe   | ✅ Supported     | -         | -           |
| Datumsauswahl            | ✅ Supported     | -         | -           |
| Farbauswahl              | ✅ Supported     | -         | -           |
| Symbolauswahl            | ✅ Supported     | -         | -           |
| Zeitauswahl              | ✅ Supported     | -         | -           |
| Datensatzauswahl (Dropdown) | ✅ Supported     | -         | -           |
| Datensatzauswahl (Popup) | ✅ Supported     | -         | -           |
| Datensatzauswahl (Kaskade) | ✅ Supported     | -         | -           |
| Dateimanager             | ✅ Supported     | -         | -           |
| Sammlungsauswahl         | 🔄 In progress   | P2        | -           |
| China-Region             | ❌ Not supported | -         | -           |
| QR-Code                  | ❌ Not supported | -         | -           |
| Scannen zur Eingabe      | ❌ Not supported | -         | -           |
| Unterformular            | 🚀 Optimizing    | P0        | -           |
| Untertabelle (einfach)   | 🚀 Optimizing    | P0        | -           |
| Untertabelle (erweitert) | 🔄 In progress   | P1        | -           |
| Kartenauswahl            | ✅ Supported     | -         | -           |
| JS-Feld                  | ✅ Supported     | -         | -           |

#### Aktionen


| Funktion            | Status           | Priorität | Anmerkungen |
| ------------------ | ---------------- | --------- | ----------- |
| Popup              | ✅ Supported     | -         | -           |
| Anzeigen           | ✅ Supported     | -         | -           |
| Filter             | ✅ Supported     | -         | -           |
| Hinzufügen         | ✅ Supported     | -         | -           |
| Unterdatensatz hinzufügen | ✅ Supported     | -         | -           |
| Link               | ✅ Supported     | -         | -           |
| Bearbeiten         | ✅ Supported     | -         | -           |
| Löschen            | ✅ Supported     | -         | -           |
| Aktualisieren      | ✅ Supported     | -         | -           |
| Datensatz aktualisieren | 🚀 Optimizing    | P1        | -           |
| Absenden           | 🚀 Optimizing    | P1        | -           |
| Hochladen          | ✅ Supported     | -         | -           |
| Workflow auslösen  | ✅ Supported     | -         | -           |
| Massenbearbeitung  | ❌ Not supported | P1        | -           |
| Massenaktualisierung | ✅ Supported     | -         | -           |
| Benutzerdefinierte Anfrage | ❌ Not supported | -         | -           |
| Kopieren           | ❌ Not supported | -         | -           |
| Drucken            | ❌ Not supported | -         | -           |
| Vorlagendruck      | ✅ Supported     | -         | -           |
| Importieren        | ✅ Supported     | -         | -           |
| Exportieren        | ✅ Supported     | -         | -           |
| Anhänge exportieren | ✅ Supported     | -         | -           |
| QR-Code scannen    | ✅ Supported     | -         | -           |
| AI-Mitarbeiter     | 🆕 New feature   | -         | -           |
| JS-Aktion          | 🆕 New feature   | -         | -           |

#### Erweiterte Funktionen


| Kategorie             | Funktion                    | Status                        | Priorität | Anmerkungen |
| -------------------- | -------------------------- | ----------------------------- | --------- | ----------- |
| UI-Vorlagen          | Block                      | 🆕 New feature                | -         | -           |
| UI-Vorlagen          | Popup                      | 🆕 New feature                | -         | -           |
| UI-Vorlagen          | Feld                       | 🆕 New feature                | -         | -           |
| UI-Vorlagen > Feld   | Formularfeld               | 🆕 New feature                | -         | -           |
| UI-Vorlagen > Feld   | Detailfeld                 | 🆕 New feature                | -         | -           |
| UI-Vorlagen > Feld   | Genehmigungsfeld           | 🆕 New feature                | -         | -           |
| UI und Berechtigungen | UI und Berechtigungen      | ✨ Enhanced                   | -         | -           |
| Ereignisablauf       | Ereignisablauf-Ereignisse  | 🆕 New feature, 🚀 Optimizing | P1        | -           |
| Ereignisablauf       | Ereignisablauf-Aktionen    | 🆕 New feature, 🚀 Optimizing | P1        | -           |
| Verknüpfungsregeln   | Verknüpfungsregeln         | 🚀 Optimizing                 | P1        | -           |
| Variablen            | Aktueller Benutzer         | 🚀 Optimizing                 | P1        | -           |
| Variablen            | Aktuelle Rolle (Kennung)   | ✅ Supported                  | -         | -           |
| Variablen            | Aktueller Bereich (Kennung) | ❌ Not supported              | P1        | -           |
| Variablen            | API-Schlüssel              | ✅ Supported                  | -         | -           |
| Variablen            | URL-Abfrageparameter       | ✅ Supported                  | -         | -           |
| Variablen            | Aktuelles Gerät            | 🆕 New feature                | -         | -           |
| Variablen            | Aktueller Datensatz        | ✅ Supported                  | -         | -           |
| Variablen            | Aktuelles Formular         | ✅ Supported                  | -         | -           |
| Variablen            | Aktuelles Objekt           | ❌ Not supported              | P1        | -           |
| Variablen            | Aktuelles Popup            | 🚀 Optimizing                 | P1        | -           |
| Variablen            | Aktuell ausgewählte Datensätze | ❌ Not supported              | P2        | -           |
| Variablen            | Datumsvariablen            | 🔄 In progress                | P1        | -           |
| Variablen            | Variablen und Schlüssel    | 🔄 In progress                | P1        | -           |
| JavaScript           | JavaScript ausführen       | 🆕 New feature                | -         | -           |

### Plugin-Status


| Plugin-Name                                      | Plugin-Status                    | Priorität | Anmerkungen                                      |
| ------------------------------------------------ | -------------------------------- | --------- | ------------------------------------------------ |
| @nocobase/plugin-action-bulk-edit                | ❌ Not supported                 | P1        | -                                                |
| @nocobase/plugin-action-custom-request           | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-action-duplicate                | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-action-print                    | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-block-multi-step-form           | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-block-tree                      | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-calendar                        | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-custom-variables                | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-embed                           | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-field-china-region              | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-field-code                      | ❌ Not supported                 | P1        | -                                                |
| @nocobase/plugin-field-sort                      | ❌ Not supported                 | -         | Drag-and-Drop-Sortierung von Datensätzen nicht unterstützt |
| @nocobase/plugin-file-previewer-office           | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-gantt                           | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-kanban                          | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-public-forms                    | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-text-copy                       | ❌ Not supported                 | -         | -                                                |
| @nocobase/plugin-data-visualization-echarts      | ⚠️ Deprecated                  | -         | Verwenden Sie stattdessen @nocobase/plugin-data-visualization |
| @nocobase/plugin-field-component-mask            | ⚠️ Deprecated                  | -         | -                                                |
| @nocobase/plugin-mobile                          | ⚠️ Deprecated                  | -         | Verwenden Sie stattdessen @nocobase/plugin-ui-layout |
| @nocobase/plugin-multi-app-manager               | ⚠️ Deprecated                  | -         | Verwenden Sie stattdessen @nocobase/plugin-app-supervisor |
| @nocobase/plugin-app-supervisor                  | 🆕 New feature                   | P0        | Bald verfügbar                                   |
| @nocobase/plugin-ai                              | 🆕 New feature                   | -         | -                                                |
| @nocobase/plugin-ai-gigachat                     | 🆕 New feature                   | -         | -                                                |
| @nocobase/plugin-block-grid-card                 | 🆕 New feature                   | -         | -                                                |
| @nocobase/plugin-block-list                      | 🆕 New feature                   | -         | -                                                |
| @nocobase/plugin-block-markdown                  | 🆕 New feature                   | -         | -                                                |
| @nocobase/plugin-flow-engine                     | 🆕 New feature                   | -         | -                                                |
| @nocobase/plugin-form-drafts                     | 🆕 New feature                   | -         | -                                                |
| @nocobase/plugin-multi-space                     | 🆕 New feature                   | -         | -                                                |
| @nocobase/plugin-record-history                  | 🆕 New feature                   | -         | -                                                |
| @nocobase/plugin-telemetry                       | 🆕 New feature                   | -         | -                                                |
| @nocobase/plugin-ui-layout                       | 🆕 New feature, ❌ Not supported | P2        | Geplant                                          |
| @nocobase/plugin-ui-templates                    | 🆕 New feature                   | -         | -                                                |
| @nocobase/plugin-acl                             | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-action-bulk-update              | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-action-export                   | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-action-export-pro               | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-action-import                   | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-action-import-pro               | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-action-template-print           | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-api-doc                         | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-api-keys                        | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-async-task-manager              | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-audit-logger                    | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-audit-logs                      | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-auth                            | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-auth-cas                        | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-auth-dingtalk                   | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-auth-ldap                       | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-auth-oidc                       | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-auth-saml                       | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-auth-sms                        | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-auth-wecom                      | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-backup-restore                  | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-backups                         | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-block-iframe                    | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-block-template                  | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-block-tree                      | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-block-workbench                 | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-client                          | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-collection-fdw                  | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-collection-sql                  | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-collection-tree                 | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-comments                        | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-custom-brand                    | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-data-source-external-mariadb    | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-data-source-external-mssql      | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-data-source-external-mysql      | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-data-source-external-oracle     | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-data-source-external-postgres   | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-data-source-kingbase            | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-data-source-main                | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-data-source-manager             | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-data-source-rest-api            | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-data-visualization              | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-departments                     | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-email-manager                   | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-environment-variables           | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-error-handler                   | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-field-attachment-url            | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-field-encryption                | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-field-formula                   | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-field-m2m-array                 | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-field-markdown-vditor           | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-field-sequence                  | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-file-manager                    | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-file-storage-s3-pro             | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-graph-collection-manager        | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-ip-restriction                  | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-license                         | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-locale-tester                   | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-localization                    | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-lock-adapter-redis              | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-logger                          | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-map                             | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-migration-manager               | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-multi-keyword-filter            | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-notification-email              | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-notification-in-app-message     | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-notification-manager            | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-password-policy                 | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-pubsub-adapter-redis            | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-queue-adapter-rabbitmq          | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-queue-adapter-redis             | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-request-encryption              | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-system-settings                 | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-telemetry-prometheus            | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-theme-editor                    | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-two-factor-authentication       | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-ui-schema-storage               | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-user-data-sync                  | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-users                           | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-verification                    | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-verification-totp-authenticator | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workerid-allocator-redis        | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow                        | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-action-trigger         | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-aggregate              | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-approval               | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-cc                     | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-custom-action-trigger  | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-date-calculation       | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-delay                  | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-dynamic-calculation    | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-javascript             | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-json-query             | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-json-variable-mapping  | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-loop                   | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-mailer                 | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-manual                 | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-notification           | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-parallel               | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-request                | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-request-interceptor    | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-response-message       | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-sql                    | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-subflow                | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-variable               | ✅ Supported                     | -         | -                                                |
| @nocobase/plugin-workflow-webhook                | ✅ Supported                     | -         | -                                                |
