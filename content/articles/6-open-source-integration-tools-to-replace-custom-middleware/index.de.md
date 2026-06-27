---
title: "6 beste Open-Source-Tools als Ersatz für benutzerdefinierte Integrations-Middleware"
description: "Vergleichen Sie 6 Open-Source-Integrationstools hinsichtlich Bereitstellung, Konnektivität, Erweiterbarkeit und langfristigen Kosten, um die Toolauswahl zu unterstützen."
---

Da Unternehmen immer mehr Systeme einsetzen, wird die Integration schwieriger. Für Software-Outsourcing-Firmen und Enterprise-IT-Teams sind die Hauptanliegen bei der Systemintegration die langfristigen Wartungskosten, die Datenhoheit und -kontrolle sowie der Spielraum, den die Lösung für zukünftige Erweiterungen lässt.

[Eine ähnliche Situation wurde auf Reddits r/ITManagers diskutiert](https://www.reddit.com/r/ITManagers/comments/1l4or3u/whats_the_best_integration_platform_for/): Ein mittelständisches bis großes Unternehmen betrieb bereits gleichzeitig ERP, CRM, WMS, branchenspezifische Systeme und Excel-basierte Workflows. Das Team wollte mit der Systemintegration vorankommen, aber nicht für immer benutzerdefinierte APIs von Grund auf neu erstellen. Sie mussten auch über Kosten, Kompatibilität mit bestehenden Systemen, Sicherheit, Wartbarkeit und darüber nachdenken, ob jede zukünftige Änderung immer noch umfangreiche Entwicklungsarbeit erfordern würde.

![image.png](https://static-docs.nocobase.com/image-m2qbsj.png)

Dies ist eine häufige Situation für Unternehmen, die eine Integrationslösung auswählen.

Der Aufbau einer Middleware im eigenen Haus bietet Flexibilität, ist aber in der Regel mit hohen Entwicklungs- und Wartungskosten verbunden. Reine SaaS-Tools sind anfangs einfacher zu implementieren, können aber auch laufende Kosten und eine Plattformabhängigkeit verursachen.

Open-Source-Integrationstools bieten einen anderen Weg. Sie können selbst gehostet werden und lassen gleichzeitig Raum für zukünftige Erweiterungen und individuelle Entwicklungen.

💡Mehr lesen: [Empfohlene selbst gehostete Tools für Unternehmen: 20+ Tools für vollständige Datenkontrolle](https://www.nocobase.com/en/blog/20-best-self-hosted-tools-for-enterprises)

Dieser Artikel vergleicht 6 gängige Open-Source-Integrationstools in vier Schlüsseldimensionen: Bereitstellung, Konnektivität, Erweiterbarkeit und langfristige Kosten.

---

💬 Hey, du liest den NocoBase-Blog. NocoBase ist die erweiterbarste KI-gestützte No-Code/Low-Code-Entwicklungsplattform zum Erstellen von Unternehmensanwendungen, internen Tools und allen Arten von Systemen. Sie ist vollständig selbst gehostet, plugin-basiert und entwicklerfreundlich. → [NocoBase auf GitHub erkunden](https://github.com/nocobase/nocobase)

---

## Vergleichstabelle

Hier ist ein kurzer Überblick über die 6 in diesem Artikel behandelten Tools.

| Tool        | Integrationsansatz | Datenquellenunterstützung | Selbst gehostet | Erweiterbarkeit      | Lernkurve | Am besten geeignet für                                       |
| ----------- | ------------------ | ------------------------- | --------------- | -------------------- | --------- | ------------------------------------------------------------ |
| NocoBase    | API + Datenbank    | 15+                       | ✅ Ja           | Plugin-System        | Mittel    | Integrationsszenarien, die eine stärkere Datenkontrolle erfordern |
| n8n         | Workflow-Automatisierung | 200+                | ✅ Ja           | Benutzerdefinierte Knoten | Niedrig   | Schnelle Geschäftsprozessautomatisierung                     |
| Apache NiFi | Datenflussverarbeitung | 100+                   | ✅ Ja           | Prozessor-Erweiterungen | Hoch      | Komplexe Datenpipelines und Workloads mit hohem Durchsatz    |
| Node-RED    | Ereignisgesteuert   | Benutzerdefiniert  | ✅ Ja           | Benutzerdefinierte Knoten | Mittel    | IoT und Echtzeit-Datenverarbeitung                           |
| Airbyte     | ELT-Pipelines      | 150+                      | ✅ Ja           | Benutzerdefinierte Konnektoren | Mittel    | Data Warehouse-Synchronisierung                              |
| LogicMesh   | API-Integration    | 50+                       | ✅ Ja           | Benutzerdefinierte Adapter | Mittel    | API-lastige Integration                                      |

## 6 Open-Source-Tools, die hausinterne Integrations-Middleware ersetzen können

### 1. NocoBase

**Einführung**: NocoBase ist eine Open-Source-KI-No-Code/Low-Code-Plattform mit integrierter Unterstützung für mehrere Datenquellen, selbst gehosteter Bereitstellung und einer Plugin-Architektur, die kontinuierlich erweitert werden kann.

![nocobase2.jpg](https://static-docs.nocobase.com/20260422-164821-sydvg1.jpg)

**Kernfunktionen**:

* **Datenquellen und Integration**: Es kann sowohl an primäre Datenbanken als auch an externe Datenquellen angebunden werden. Die kommerzielle Funktionsmatrix umfasst MySQL, PostgreSQL, MariaDB, MSSQL und REST-APIs, während die Enterprise-Edition zusätzlich Oracle, ClickHouse, Doris und mehr unterstützt.

![nocobase1.png](https://static-docs.nocobase.com/nocobase1-9lfd2m.png)

* **Workflow-Engine**: Unterstützt Ereignisauslöser, geplante Aufgaben, Bedingungen, Schleifen, CRUD-Operationen, HTTP-Anfragen, Webhooks, Genehmigungen und mehr.
* **Plugin-System**: Plugins können verwendet werden, um Datenquellen, Schnittstellen, Aktionen und Workflows zu erweitern.

![nocobase3.png](https://static-docs.nocobase.com/nocobase3-w864ff.png)

* **100 % selbst gehostet**: Daten bleiben vollständig unter Ihrer Kontrolle, mit klarer Kontrolle darüber, wohin sie fließen.
* **KI-Fähigkeiten**: KI-Mitarbeiter können den Geschäftskontext innerhalb des Systems verstehen und direkt Maßnahmen ergreifen. NocoBase bietet auch offizielle Skills für Codex, Claude Code und OpenCode, was die Verwendung von Agents für Installation, Datenmodellierung, UI-Einrichtung und Workflow-Konfiguration erleichtert.

**Vorteile**:

* ✅ Stärkste Datenhoheit (vollständig selbst gehostet)
* ✅ Hoch erweiterbar (Plugin-System)
* ✅ Keine Anbieterbindung (Apache 2.0-Lizenz)
* ✅ Gut geeignet für datenbanklastige Integration

**Typische Szenarien**: Eine gute Wahl für Teams, die bestehende Datenbanken, APIs und Geschäftsdaten integrieren und gleichzeitig schnell interne Tools wie CRM, Ticketing, Genehmigungen und Projektmanagementsysteme erstellen müssen. Im Vergleich zu Tools, die nur Verbindungen herstellen, ist NocoBase besser für Teams geeignet, die Integration und den Aufbau interner Systeme auf derselben Plattform halten und im Laufe der Zeit weiterentwickeln möchten.

💡Mehr lesen: [Mehr als PostgreSQL: 5 No-Code/Low-Code-Plattformen, die externe Datenbanken unterstützen](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)

**Open-Source-Lizenz**: Apache 2.0 (kommerzielle Nutzung erlaubt)

**Offizielle Website**: [https://nocobase.com/](https://nocobase.com/)

**GitHub**: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase) (22k+ Sterne)

### 2. n8n

![n8n.png](https://static-docs.nocobase.com/n8n-9iw1r6.png)

**Einführung**: n8n ist ein Workflow-Automatisierungstool mit über 200 Integrationen, das entwickelt wurde, um Anwendungen zu verbinden und Geschäftsprozesse zu automatisieren.

💡Mehr lesen: [7 Open-Source-Workflow-Tools, die Zapier ersetzen können](https://www.nocobase.com/en/blog/zapier-open-source-alternatives)

**Kernfunktionen**:

* **200+ integrierte Integrationen**: Deckt eine breite Palette gängiger SaaS-Apps ab.
* **Visueller Workflow-Editor**: Erstellen Sie Workflows per Drag & Drop.
* **Selbst gehostete Bereitstellung**: Unterstützt die Ein-Klick-Docker-Bereitstellung.
* **Entwicklung benutzerdefinierter Knoten**: Erweiterbar mit TypeScript.

**Vorteile**:

* ✅ Große Integrationsbibliothek
* ✅ Einfach für Nicht-Entwickler zu bedienen
* ✅ Aktive Community-Unterstützung

**Typische Szenarien**: Am besten geeignet für die Automatisierung zwischen SaaS-Anwendungen, wie z. B. Lead-Synchronisierung, Formularerfassung, Benachrichtigungen, Genehmigungsrouting und KI-Workflow-Orchestrierung. Seine Hauptstärken sind die große Anzahl vorgefertigter Integrationen und die schnelle Einrichtung. Allerdings weist die offizielle selbst gehostete Option auch deutlich darauf hin, dass Benutzer technische Kenntnisse in Servern, Containern, Sicherheit und Betrieb benötigen.

**Open-Source-Lizenz**: Fair Code (kommerzielle Nutzung erlaubt, mit Einschränkungen)

**Offizielle Website**: [https://n8n.io/](https://n8n.io/)

**GitHub**: [https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n) (50k+ Sterne)

### 3. Apache NiFi

![Apache_NiFi.png](https://static-docs.nocobase.com/Apache_NiFi-b6cms1.png)

**Einführung**: Apache NiFi ist eine automatisierte Datenflussplattform mit einer leistungsstarken visuellen Oberfläche zur Verwaltung der Datenbewegung zwischen Systemen.

**Kernfunktionen**:

* **100+ Prozessoren**: Unterstützt eine breite Palette von Datenquellen und Protokollen.
* **Visuelles Datenflussdesign**: Erstellen Sie Pipelines per Drag & Drop.
* **Enterprise-Funktionen**: Integrierte Überwachung, Protokollierung und Backpressure-Steuerung.
* **Hohe Verfügbarkeit**: Unterstützt Cluster-Bereitstellung.

**Vorteile**:

* ✅ Starke Daten transformationsfähigkeiten
* ✅ Unternehmenszuverlässigkeit
* ✅ Gut geeignet für Szenarien mit hohem Durchsatz
* ✅ Feinkörnige Sicherheitskontrollen

**Typische Szenarien**: Am besten geeignet für Workloads mit hohem Durchsatz und systemübergreifendem Datenfluss, wie z. B. Logs, Ereignisströme, Observability-Daten sowie Batch- oder kontinuierliche Pipelines. Es ist auch eine gute Wahl für Unternehmensszenarien, die Datenherkunft, Clustering und stabilen Langzeitbetrieb erfordern.

**Open-Source-Lizenz**: Apache 2.0

**Offizielle Website**: [https://nifi.apache.org/](https://nifi.apache.org/)

**GitHub**: [https://github.com/apache/nifi](https://github.com/apache/nifi) (4k+ Sterne)

### 4. Node-RED

![Node Red.png](https://static-docs.nocobase.com/Node%20Red-086qz8.png)

**Einführung**: Node-RED ist ein browserbasierter Flow-Editor, der ursprünglich für IoT entwickelt wurde und heute weit verbreitet für ereignisgesteuerte Integrationen ist.

**Kernfunktionen**:

* **Ereignisgesteuerte Architektur**: Entwickelt für die Echtzeit-Datenverarbeitung.
* **Node-Ökosystem**: 3000+ Community-Knoten.
* **Leichtgewichtige Bereitstellung**: Kann auf eingebetteten Geräten ausgeführt werden.
* **Native JavaScript-Unterstützung**: Flexibel für benutzerdefinierte Logik.

**Vorteile**:

* ✅ Hervorragend für Echtzeit-Datenströme geeignet
* ✅ Große Community-Knotenbibliothek
* ✅ Leicht zu erlernen und zu verwenden

**Typische Szenarien**: Am besten geeignet für Echtzeit-Ereignisströme, geräteseitige Workflows, IoT, industrielle Steuerung, Edge-Szenarien und leichtgewichtige API-Orchestrierung. Seine offizielle Positionierung konzentriert sich seit langem auf ereignisgesteuertes Low-Code, mit Schwerpunkt auf dem Sammeln, Transformieren und Visualisieren von Echtzeitdaten in den Bereichen Hausautomation und industrielle Steuerung.

**Open-Source-Lizenz**: Apache 2.0

**Offizielle Website**: [https://nodered.org/](https://nodered.org/)

**GitHub**: [https://github.com/node-red/node-red](https://github.com/node-red/node-red) (20k+ Sterne)

### 5. Airbyte

![Airbyte.png](https://static-docs.nocobase.com/Airbyte-jgu9ap.png)

**Einführung**: Airbyte ist eine Datenintegrationsplattform, die sich auf ELT (Extract, Load, Transform) konzentriert und hauptsächlich zum Synchronisieren von Daten in Data Warehouses verwendet wird.

**Kernfunktionen**:

* **150+ Datenquellen-Konnektoren**: Unterstützt Datenbanken, SaaS-Tools und Dateien.
* **Standardisierte Konnektor-API**: Erleichtert die Erstellung benutzerdefinierter Konnektoren.
* **Inkrementelle Synchronisierung**: Synchronisiert nur geänderte Daten.
* **CDC-Unterstützung**: Unterstützt Change Data Capture.

💡Mehr lesen: [7 beste Datenintegrationsplattformen](https://www.nocobase.com/en/blog/data-integration-platforms)

**Vorteile**:

* ✅ Entwickelt für Data Warehouses
* ✅ Starke Synchronisierungsfähigkeiten
* ✅ Aktive Entwickler-Community

**Typische Szenarien**: Am besten geeignet zum Synchronisieren von Daten aus Geschäftssystemen in Data Warehouses, Data Lakes und Datenbanken. Seine Kernaufgabe ist die Batch-Replikation, inkrementelle Synchronisierung und CDC, nicht die komplexe Orchestrierung von Geschäftsworkflows. Die Startseite und die Preisseiten von Airbyte konzentrieren sich stark auf Datenreplikation, Batch-Verarbeitung und CDC.

**Open-Source-Lizenz**: ELv2 (kommerzielle Nutzung erlaubt)

**Offizielle Website**: [https://airbyte.com/](https://airbyte.com/)

**GitHub**: [https://github.com/airbytehq/airbyte](https://github.com/airbytehq/airbyte) (16k+ Sterne)

### 6. LogicMesh

![LogicMesh.png](https://static-docs.nocobase.com/LogicMesh-ig9uqa.png)

**Einführung**: LogicMesh ist eine leichtgewichtige API-Integrationsplattform, die sich auf API-Aggregation und -Orchestrierung konzentriert.

**Kernfunktionen**:

* **API-Orchestrierung**: Kombiniert mehrere API-Aufrufe zu einem.
* **Antwortaggregation**: Führt Antworten von mehreren APIs zusammen.
* **Caching und Ratenbegrenzung**: Integrierte API-Verwaltungsfunktionen.
* **Low-Code-Konfiguration**: Verwendet YAML-Dateien zur Definition der Integrationslogik.

**Vorteile**:

* ✅ Leichtgewichtige Bereitstellung
* ✅ Fokussiert auf API-Integration
* ✅ Einfach zu konfigurieren

**Am besten geeignet für**: API-lastige Integrationsszenarien

**Open-Source-Lizenz**: MIT

**GitHub**: [https://github.com/logicmesh/logicmesh](https://github.com/logicmesh/logicmesh) (1k+ Sterne)

## So wählen Sie das richtige Integrationstool aus

Hier ist ein schneller Entscheidungsrahmen basierend auf verschiedenen Anforderungen.

| Szenario                                         | Empfohlene Tools      | Warum                                                                             |
| ------------------------------------------------ | --------------------- | --------------------------------------------------------------------------------- |
| **Unternehmen mit Datenresidenzanforderungen**   | NocoBase, Apache NiFi | Vollständig selbst gehostet, ohne Risiko externer Datenübertragung                |
| **Schnelle App-zu-App-Integration**              | n8n, LogicMesh        | Niedrige Lernkurve und große Konnektorbibliotheken                                |
| **Komplexe Datenpipelines (ETL/ELT)**            | Airbyte, Apache NiFi  | Entwickelt für Data Warehouse- und Datenflussszenarien                            |
| **IoT und Echtzeit-Ereignisverarbeitung**        | Node-RED              | Ereignisgesteuerte Architektur, optimiert für Echtzeitanwendungen                 |
| **Nicht-technische Geschäftsteams**              | n8n                   | No-Code und einfach zu starten                                                    |
| **Ersatz für hausinterne Middleware**            | NocoBase              | Plugin-basierte Erweiterbarkeit erleichtert die Erstellung benutzerdefinierter Logik auf einer Plattform |

### Wichtige Fragen vor der Auswahl

1. **Benötigen Sie eine Integration auf Datenbankebene, nicht nur eine API-Integration?**
   1. Wenn ja → Ziehen Sie NocoBase oder Airbyte in Betracht
   2. Wenn API-Integration ausreicht → n8n oder LogicMesh könnten besser geeignet sein
2. **Wer wird die Integrationen erstellen und warten?**
   1. Technische Teams → Apache NiFi, NocoBase
   2. Nicht-technische Benutzer → n8n, Node-RED
3. **Müssen Sie benutzerdefinierte Konnektoren entwickeln?**
   1. Wenn ja, suchen Sie nach Tools mit starker Erweiterbarkeit, wie z. B. NocoBase-Plugins oder n8n-Benutzerdefinierten Knoten
4. **Was sind Ihre Anforderungen an Datenvolumen und Leistung?**
   1. Hoher Durchsatz → Apache NiFi
   2. Mittlere Workloads → NocoBase, n8n
   3. Integration mit geringer Häufigkeit → Jedes dieser Tools kann funktionieren

## Kostenvergleich (beispielhafte Gesamtkosten über 3 Jahre)

Nehmen Sie als Beispiel ein mittelgroßes Integrationsprojekt: Es müssen 5 Systeme verbunden, etwa 10 Kernintegrationsflüsse konfiguriert und über 3 Jahre hinweg kontinuierlich gewartet, angepasst und erweitert werden. **Die folgenden Schätzungen sind nur illustrative Beispiele. Sie umfassen Softwarekosten, Implementierungsaufwand, Wartungsarbeit und zukünftige Anpassungskosten und stellen keine offiziellen Produktpreise dar.**

| Option                       | Beispielhafte Gesamtkosten über 3 Jahre | Kostenprofil                                                                                                   | Zusammenfassung                                                        |
| ---------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Eigenentwicklung             | 1,2 Mio. ¥ bis 2,5 Mio. ¥+            | Hohe anfängliche Entwicklungskosten, laufende Wartung und Änderungen verbrauchen weiterhin Ingenieursressourcen | Am flexibelsten, aber in der Regel am teuersten                        |
| Kommerzielles iPaaS          | 600.000 ¥ bis 1,5 Mio. ¥+             | Jährliches Abonnement plus Implementierungsdienste, Kosten steigen mit der Nutzung                             | Ausgereift und zuverlässig, aber auf Dauer teuer                       |
| SaaS-Tools (Zapier)          | 50.000 ¥ bis 200.000 ¥+               | Niedrige Anschaffungskosten, aber die Ausgaben steigen mit dem Aufgabenvolumen und der Nutzung deutlich        | Kosteneffizient für leichte Anwendungsfälle, aber Kosten steigen mit dem Betrieb |
| Open-Source-Tools (NocoBase) | 80.000 ¥ bis 300.000 ¥                | Einige anfängliche Bereitstellungs- und Einrichtungskosten, dann relativ stabil über die Zeit                  | In der Regel ein besserer langfristiger Wert                           |

## Häufig gestellte Fragen (FAQ)

### Was ist der Unterschied zwischen Open-Source-Tools und kommerziellen iPaaS-Plattformen wie MuleSoft?

Kommerzielle iPaaS-Plattformen bieten in der Regel einen umfassenderen Enterprise-Support, integrierte Konnektoren und SLA-Garantien, sind aber teuer, wobei die jährlichen Gebühren oft sechsstellige USD-Beträge erreichen. Open-Source-Tools erfordern, dass Ihr Team sie bereitstellt und wartet, aber die Lizenzkosten sind null und die Daten bleiben vollständig unter Ihrer Kontrolle. Für die meisten mittelständischen Unternehmen betragen die **Gesamtbetriebskosten von Open-Source-Tools oft nur 1/3 bis 1/5 derer kommerzieller Alternativen**.

### Benötige ich Entwicklungserfahrung, um diese Tools zu verwenden?

n8n und Node-RED sind relativ benutzerfreundlich für Business-Analysten und andere nicht-technische Benutzer.

NocoBase und Apache NiFi erfordern einige technische Kenntnisse, einschließlich grundlegender SQL- und API-Kenntnisse.

**KI hat die Einstiegshürde für NocoBase bereits gesenkt.** NocoBase bietet offizielle Skills für Codex, Claude Code und OpenCode, sodass Agents bei der Installation, Datenmodellierung, UI-Einrichtung und Workflow-Konfiguration helfen können. Menschen können sich mehr auf Geschäftsentscheidungen, die Überprüfung der Ergebnisse und die endgültige Bestätigung konzentrieren.

### Welche Datenbanken werden von diesen Tools unterstützt?

NocoBase unterstützt die breiteste Palette von Datenbanktypen, darunter PostgreSQL, MySQL, SQL Server, Oracle, MongoDB und mehr. Airbyte und Apache NiFi bieten ebenfalls starke Datenbankkonnektivität. n8n verbindet sich hauptsächlich über APIs mit Datenbanken.

### Kann ich mehrere Tools zusammen verwenden?

Ja. Viele Unternehmen verwenden eine hybride Einrichtung, aber es ist wichtig, die Gesamtarchitektur nicht zu komplex zu machen.

Sie können beispielsweise NocoBase für die Integration auf Datenbankebene, n8n für die SaaS-Integration und Airbyte für die Data Warehouse-Synchronisierung verwenden.

### Erlauben die Open-Source-Lizenzen die kommerzielle Nutzung?

Ja. Alle in diesem Artikel behandelten Tools, einschließlich NocoBase, n8n, Apache NiFi, Node-RED, Airbyte und LogicMesh, erlauben die kommerzielle Nutzung. NocoBase, Apache NiFi und Node-RED verwenden die Apache 2.0-Lizenz, eine der freizügigsten Lizenzen. Airbyte verwendet ELv2 und n8n verwendet Fair Code.

**Verwandte Lektüre:**

* [Excel durch NocoBase oder Airtable ersetzen? Ein Kostenvergleich](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Möglichkeiten, schnell Web-Apps aus Excel-Daten zu erstellen](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Nicht nur PostgreSQL: Vergleich von 5 No-Code/Low-Code-Plattformen mit Unterstützung für externe Datenbanken](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Open-Source-Projektmanagement-Tool-Auswahlleitfaden, Ausgabe 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [So erstellen Sie ein benutzerdefiniertes CRM mit PostgreSQL](https://www.nocobase.com/en/blog/how-to-build-a-custom-crm-with-postgresql)
* [Top 20 KI-Projekte auf GitHub, die man 2026 im Auge behalten sollte: Nicht nur OpenClaw](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)
* [Bestes Open-Source-KI-CRM: NocoBase vs. Twenty vs. Krayin](https://www.nocobase.com/en/blog/best-ai-crm-open-source-nocobase-twenty-krayin)
* [Top 3 Open-Source-ERP mit KI auf GitHub: NocoBase vs. Odoo vs. ERPNext](https://www.nocobase.com/en/blog/top-3-open-source-erp-with-ai-on-github-nocobase-vs-odoo-vs-erpnext)
* [Die 5 beliebtesten Open-Source-KI-Projektmanagement-Tools auf GitHub](https://www.nocobase.com/en/blog/5-most-popular-open-source-ai-project-management-tools-on-github)
