---
title: "6 Open-Source-Tools zur Verwendung mit WorkBuddy"
description: "Entdecken Sie sechs Open-Source-Tools, darunter NocoBase, Activepieces und Twenty, und erfahren Sie, wie sie mit WorkBuddy zusammenarbeiten, um Geschäftssysteme zu verbinden, Arbeitsabläufe zu automatisieren, CRM, Projektmanagement, Daten-APIs und BI-Analysen zu ermöglichen."
---

## Was ist WorkBuddy?

WorkBuddy ist ein KI-Arbeitsbereich für Büroaufgaben, der von Tencent entwickelt wurde. Es ist hauptsächlich für die Unternehmensbüroarbeit, Dateiverarbeitung, Datenanalyse und die Bearbeitung mehrstufiger Aufgaben konzipiert.![WorkBuddy-8xxz2q.png](https://static-docs.nocobase.com/WorkBuddy-8xxz2q.png)

Im Vergleich zu Tools wie OpenClaw, Claude Code und Codex hat WorkBuddy einen anderen Fokus. OpenClaw betont offene Agent-Fähigkeiten und ein plattformübergreifendes Skill-Ökosystem. Claude Code und Codex eignen sich besser für Codegenerierung, Entwicklungskooperation und technische Aufgaben. WorkBuddy konzentriert sich mehr auf Büroszenarien. Es kann eine Verbindung zu gängigen Kommunikations- und Kollaborationstools wie WeChat, QQ, WeCom, Feishu und DingTalk herstellen, sodass Benutzer Aufgaben von vertrauten Arbeitseinstiegspunkten aus starten können.

Wenn ein Team eine tiefere Verbindung mit Unternehmensgeschäftssystemen und internen Arbeitsabläufen herstellen möchte, kann WorkBuddy auch als KI-Aufgabeneinstiegspunkt und Orchestrierungsschicht dienen. WorkBuddy empfängt Anweisungen, zerlegt Aufgaben und gibt Ergebnisse zurück. Open-Source-Tools bieten die zugrunde liegenden Geschäftssysteme, Automatisierungsworkflows, CRM, Projektmanagement, Daten-APIs und BI-Analysefunktionen.

---

💬 Hey, du liest den NocoBase-Blog. NocoBase ist die erweiterbarste KI-gestützte No-Code/Low-Code-Entwicklungsplattform zum Erstellen von Unternehmensanwendungen, internen Tools und allen Arten von Systemen. Sie ist vollständig selbst gehostet, plugin-basiert und entwicklerfreundlich. →[ NocoBase auf GitHub erkunden](https://github.com/nocobase/nocobase)

---



Dieser Artikel stellt mehrere Open-Source-Tools vor, die gut mit WorkBuddy zusammenarbeiten. Wir werden uns ansehen, welche Fähigkeiten sie für Unternehmen bereitstellen können und welche typischen Szenarien sie in Kombination mit WorkBuddy abdecken können.

## 1. NocoBase: Geeignet zum Erstellen benutzerdefinierter Geschäftssysteme, die WorkBuddy aufrufen kann

![NocoBase1-vpe2x5.png](https://static-docs.nocobase.com/NocoBase1-vpe2x5.png)

**Offizielle Website**: [https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub**: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**: 22,3k

**Dokumentation**: [https://docs.nocobase.com/](https://docs.nocobase.com/)

**Verwandte Ressourcen**:

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

WorkBuddy + NocoBase: [https://docs.nocobase.com/en/ai/workbuddy](https://docs.nocobase.com/en/ai/workbuddy)

### Produktvorstellung

NocoBase ist eine KI-gestützte Open-Source-No-Code/Low-Code-Entwicklungsplattform zum schnellen Erstellen von Unternehmensanwendungen, internen Tools und verschiedenen Geschäftssystemen. Sie unterstützt private Bereitstellung und basiert auf einer plugin-basierten Architektur, was sie für Unternehmen geeignet macht, um CRM, ERP, Genehmigungssysteme, Ticketsysteme, Inventarsysteme, Projektmanagementsysteme, Betriebs-Backends und andere Systeme basierend auf ihren eigenen Geschäftsanforderungen zu erstellen.

![NocoBase2-t4x1fo.png](https://static-docs.nocobase.com/NocoBase2-t4x1fo.png)

Für Teams, die WorkBuddy mit internen Tools verbinden möchten, eignet sich NocoBase besser als Geschäftsanwendungsschicht. Es bietet stabile Datenstrukturen, Berechtigungsgrenzen, Prozessregeln und aufrufbare Systemfunktionen.

NocoBase entwirft seine KI-Fähigkeiten auch um reale Geschäftssysteme herum. Es unterstützt KI-Mitarbeiter, KI-Skills, CLI, MCP und mehr. KI-Mitarbeiter können als intelligente Assistenten innerhalb des Systems agieren und bei Datenabfragen, Inhaltsgenerierung, Aufgabenbearbeitung und anderen Arbeiten helfen. KI-Skills helfen externen Agents zu verstehen, wie NocoBase konfiguriert ist und was sie bedienen können und was nicht. Die CLI ermöglicht es Agents, Installationen, Erstellungen, Änderungen und andere Operationen über Befehle auszuführen. MCP bietet einen standardisierteren Einstiegspunkt für externe KI-Tools, um eine Verbindung zu NocoBase herzustellen.

![NocoBase3-ejtyuu.png](https://static-docs.nocobase.com/NocoBase3-ejtyuu.png)

### Kernvorteile

* **Datenmodellgetrieben**: NocoBase unterstützt die Definition von Datentabellen, Feldern und Beziehungen zuerst, dann den Aufbau von Seiten und Interaktionen. Dies macht es für komplexe Geschäftssysteme geeigneter als einfache Formularsammlungen.
* **Geeignet für private Bereitstellung**: Unternehmen können das System auf ihren eigenen Servern bereitstellen, was es besser für interne Systeme mit Anforderungen an Datensicherheit, Zugriffskontrolle und langfristige Wartung geeignet macht.
* **Vollständige Berechtigungs- und Workflow-Funktionen**: Es unterstützt Rollenberechtigungen, Feldberechtigungen, Datenberechtigungen und Operationsberechtigungen. Workflows können auch Genehmigungen, Benachrichtigungen, Datenaktualisierungen, Webhooks, HTTP-Anfragen und andere Prozesse verarbeiten.
* **Flexible Plugin-Architektur**: NocoBase verwendet eine plugin-basierte Mikrokernel-Architektur. Funktionen können über Plugins erweitert werden, was es für Unternehmen geeignet macht, die über Standardfunktionen hinausgehende Geschäftslogik anpassen müssen.
* **KI-Fähigkeiten näher an Geschäftssystemen**: NocoBase unterstützt KI-Mitarbeiter, KI-Skills, Wissensdatenbanken und andere Fähigkeiten. Diese können rund um Seiten, Datentabellen, ausgewählte Datensätze und Geschäftsregeln arbeiten.

### Typische Anwendungsfälle mit WorkBuddy

In vielen Szenarien empfängt WorkBuddy Anweisungen, zerlegt Aufgaben und gibt Ergebnisse zurück, während NocoBase spezifische Geschäftsobjekte und Systemfunktionen wie Kunden, Bestellungen, Genehmigungen, Tickets, Inventar und Projekte bereitstellt.

![NocoBase4-ono1dm.png](https://static-docs.nocobase.com/NocoBase4-ono1dm.png)

Hier sind 3 häufige Szenarien:

**CRM** Unternehmen können NocoBase verwenden, um ein Kundenverwaltungssystem aufzubauen und Kundenprofile, Nachverfolgungsstatus, Kundensegmente, Betreuer, Vertragsbeträge und andere Informationen zentral zu verwalten. Vertriebsleiter können direkt von WeCom oder Feishu aus Anweisungen senden und WorkBuddy bitten, kürzlich hinzugefügte Kunden, Leads, die lange nicht nachverfolgt wurden, und Schlüsselkunden abzufragen. NocoBase stellt Kundendaten, Berechtigungen und Filterlogik bereit. KI-Mitarbeiter oder verwandte Skills können weiterhelfen, Nachverfolgungsprioritäten zu organisieren, Kundenübersichten zu erstellen oder Vertriebs-To-Do-Listen zu generieren.

**Ticketverwaltung** In After-Sales- oder Betriebsteams kann NocoBase den Ticketstatus, den Problemtyp, die Priorität, den Bearbeiter und die Frist aufzeichnen. Bei täglichen Überprüfungen oder wöchentlichen Besprechungen können Teams WorkBuddy bitten, überfällige Tickets, Probleme mit hoher Priorität und ausstehende Elemente zusammenzufassen, sie dann nach Bearbeiter, Dringlichkeit oder Problemtyp zu klassifizieren, um die Bearbeitungsreihenfolge zu bestätigen.

**Projektmanagement** Für Manager sind Genehmigungen und Projektfortschritte oft über mehrere Knoten verteilt. NocoBase kann Genehmigungsworkflows, Projektmeilensteine, Betreuer, Risiken und Fortschrittsstatus verwalten. WorkBuddy kann basierend auf Anweisungen ausstehende Genehmigungen, verzögerte Aufgaben und Projektrisiken extrahieren und dann Zusammenfassungen nach Abteilung, Betreuer oder Priorität erstellen.

## 2. Activepieces: Geeignet zum Verbinden von WorkBuddy mit mehr Automatisierungsworkflows

![Activepieces1-xrlqbe.png](https://static-docs.nocobase.com/Activepieces1-xrlqbe.png)

**Offizielle Website**: [https://www.activepieces.com/](https://www.activepieces.com/)

**GitHub**: [https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)

**GitHub Stars**: etwa 23k

**Dokumentation**: [https://www.activepieces.com/docs](https://www.activepieces.com/docs)

### Produktvorstellung

Activepieces ist eine Open-Source-KI-Automatisierungsplattform zum Erstellen von Automatisierungsworkflows über Tools und Systeme hinweg. Es kann APIs, Webhooks, Datenbanken, Tabellenkalkulationen, E-Mails, CRM, Projektmanagement-Tools und andere Drittanbieterdienste verbinden und so Operationen, die über verschiedene Tools verteilt sind, in wiederverwendbare Workflows verwandeln.

Activepieces arbeitet gut mit WorkBuddy in Szenarien zusammen, in denen Anweisungen von einem Büroeinstiegspunkt ausgehen und Aktionen über mehrere Systeme hinweg stattfinden. WorkBuddy kann Anfragen von WeCom, Feishu, DingTalk und anderen Arbeitseinstiegspunkten empfangen. Activepieces führt dann den zugrunde liegenden Workflow aus, wie das Lesen von Daten, Aufrufen von APIs, Synchronisieren von Datensätzen, Senden von Benachrichtigungen oder Auslösen von Folgeaufgaben.

### Kernvorteile

* **Starke plattformübergreifende Konnektivität**: Geeignet zum Verbinden von APIs, Webhooks, Datenbanken und Drittanbieteranwendungen, wodurch sich wiederholende manuelle Arbeit reduziert wird.
* **Geeignet zum Umwandeln von Automatisierung in wiederverwendbare Workflows**: Prozesse wie Lead-Synchronisation, Benachrichtigungs-Push, Tabellenaktualisierungen, Aufgabenverteilung und Datenorganisation können in feste Workflows umgewandelt werden.
* **Unterstützt Self-Hosting**: Unternehmen können es in ihrer eigenen Umgebung bereitstellen, was die Verwaltung von Schlüsseln, Daten und Ausführungsprotokollen erleichtert.
* **Nah an der Art und Weise, wie KI-Agents Tools aufrufen**: Activepieces-Stücke können als MCP-Server verwendet werden, was die Kombination mit Agent-Tools erleichtert.

![Activepieces2-6x447z.png](https://static-docs.nocobase.com/Activepieces2-6x447z.png)

### Typische Anwendungsfälle mit WorkBuddy

Activepieces eignet sich für systemübergreifende Automatisierung. Zum Beispiel können Website-Formulare, Kunden-Support-Feedback, GitHub Issues und Vertriebs-Leads über verschiedene Tools verteilt sein. Teams können zunächst Activepieces verwenden, um Workflows zum Lesen, Deduplizieren, Klassifizieren und Synchronisieren von Daten zu konfigurieren. Dann kann mit einer einfachen WorkBuddy-Anweisung wie "organisiere die heutigen neuen Leads und gruppiere sie nach Quelle und Priorität" das Ergebnis an eine Gruppe, ein Dokument oder eine Tabelle zurückgegeben werden.

## 3. Twenty: Geeignet zum Erstellen einer selbst gehosteten CRM-Datenschicht

![Twenty-tqe8g2.png](https://static-docs.nocobase.com/Twenty-tqe8g2.png)

**Offizielle Website**: [https://twenty.com/](https://twenty.com/)

**GitHub**: [https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

**GitHub Stars**: 49k

**Dokumentation**: [https://twenty.com/developers](https://twenty.com/developers)

### Produktvorstellung

Twenty ist ein Open-Source-CRM, offiziell positioniert als Open-Source-Alternative zu Salesforce. Es eignet sich zur Verwaltung von Unternehmen, Kontakten, Kundenbeziehungen, Opportunities, Aufgaben, Notizen und Vertriebsprozessen. Technische Teams können es auch basierend auf ihren eigenen Geschäftsprozessen anpassen.

Wenn ein Unternehmen die Kontrolle über Kundendaten behalten und sich nicht vollständig auf ein geschlossenes CRM verlassen möchte, kann Twenty als Kundendatenschicht hinter WorkBuddy dienen. Kundenaufzeichnungen, Opportunities und Vertriebsnachverfolgungsaufzeichnungen werden in Twenty gespeichert, während WorkBuddy Abfrage-, Organisations- und Erinnerungsanfragen von Büroeinstiegspunkten empfängt.

### Kernvorteile

* **Fokussiert auf CRM-Szenarien**: Besser geeignet für Kundenverwaltung, Opportunity-Nachverfolgung, Vertriebsaufgaben und Kundendatenorganisation.
* **Open Source und selbst hostbar**: Unternehmen können Kundendaten, Systemumgebungen und zukünftige Anpassungen besser kontrollieren.
* **Geeignet für technische Teams zur Anpassung**: Objekte, Felder und Geschäftsstrukturen können um den eigenen Vertriebsprozess des Unternehmens herum angepasst werden.
* **Fokussiertere Geschäftsobjekte**: Im Vergleich zu allgemeinen internen Tools ist die Datenstruktur von Twenty näher an der täglichen Arbeit von Vertriebsteams.

### Typische Anwendungsfälle mit WorkBuddy

Vertriebsteams können Kundenprofile, Firmeninformationen, Opportunity-Phasen, Nachverfolgungsaufzeichnungen und nächste Aktionen in Twenty pflegen. Wenn Vertriebsleiter wichtige Kunden einsehen müssen, müssen sie nicht unbedingt das CRM-Backend betreten und Datensätze einzeln filtern. Sie können Abfragen über WorkBuddy initiieren, wie "finde hochwertige Kunden, die seit 7 Tagen nicht nachverfolgt wurden", "organisiere neue Opportunities dieser Woche" oder "liste hochwertige Deals ohne nächste Aktion auf".

Twenty speichert und verwaltet Vertriebsdaten. WorkBuddy organisiert Abfrageergebnisse in Nachverfolgungslisten, Erinnerungsübersichten oder Wochenberichten. Dies hilft Teams, Kunden und Opportunities, die vorrangig bearbeitet werden müssen, schnell zu identifizieren und das Risiko zu verringern, dass Vertriebsdaten im CRM-Backend vergraben bleiben, ohne rechtzeitig überprüft zu werden.

## 4. Plane: Geeignet, damit WorkBuddy Projektstatus und Aufgabenfortschritt lesen kann

![Plane1-a68yj9.png](https://static-docs.nocobase.com/Plane1-a68yj9.png)

**Offizielle Website**: [https://plane.so/](https://plane.so/)

**GitHub**: [https://github.com/makeplane/plane](https://github.com/makeplane/plane)

**GitHub Stars**: 49,8k

**Dokumentation**: [https://docs.plane.so/](https://docs.plane.so/)

### Produktvorstellung

Plane ist ein Open-Source-Projektmanagement-Tool zum Verfolgen von Issues, Verwalten von Cycles, Pflegen von Roadmaps und Speichern von Projektdokumenten und Teamaufgaben. Es eignet sich besser für Produkt-, Engineering- und Projektmanagementteams, um Release-Pläne, Aufgabenstatus, Projektrisiken und den Kollaborationsrhythmus zu verwalten.

Plane betont offiziell auch die Zusammenarbeit zwischen Teams und Agents. Im WorkBuddy-Szenario kann Plane als Projektkollaborationsschicht dienen: Projekte, Aufgaben, Betreuer, Status, Priorität und Release-Pläne werden in Plane gespeichert, während WorkBuddy diese Status in die täglichen Arbeitseinstiegspunkte des Teams bringt.

![Plane2-ojwlpm.png](https://static-docs.nocobase.com/Plane2-ojwlpm.png)

### Kernvorteile

* **Geeignet für Produkt- und Engineering-Zusammenarbeit**: Es kann Issues, Cycles, Roadmaps, Dokumente und Teamaufgaben verwalten.
* **Klarerer Aufgabenstatus**: Geeignet zum Verfolgen von Priorität, Betreuer, Release-Plänen und Verzögerungsrisiken.
* **Unterstützt Self-Hosting**: Geeigneter für Teams, die die Kontrolle über Projektdaten und technische Informationen benötigen.
* **Geeignet für die Verwendung mit Agents**: Plane betont bereits den Kollaborationsraum für Teams und Agents, was es für Kombinationen rund um Aufgabenfortschritt, Projektstatus und Wissensaufbau geeignet macht.

### Typische Anwendungsfälle mit WorkBuddy

Produktmanager können WorkBuddy in Feishu fragen: "Welche P0-Issues in diesem Release sind noch offen?" Projektverantwortliche können fragen: "Welche Aufgaben sind diese Woche verzögert und bei wem sind sie blockiert?" Engineering-Leiter können WorkBuddy auch bitten, hochpriorisierte Issues nach Modul zu organisieren.

In diesem Szenario zeichnet Plane Projekte, Issues, Roadmaps und Betreuerinformationen auf. WorkBuddy initiiert Abfragen vom Büroeinstiegspunkt aus und organisiert die Ergebnisse in Zusammenfassungen oder Erinnerungen. Für Teams mit vielen Aufgaben, schnellen Release-Zyklen und häufigem Status-Synchronisationsbedarf kann diese Kombination den Aufwand reduzieren, wiederholt das Projekt-Backend zu öffnen, um den Status zu überprüfen.

## 5. Directus: Geeignet zum Umwandeln vorhandener Datenbanken in aufrufbare Datenschnittstellen

![Directus1-x5gl6h.png](https://static-docs.nocobase.com/Directus1-x5gl6h.png)

**Offizielle Website**: [https://directus.io/](https://directus.io/)

**GitHub**: [https://github.com/directus/directus](https://github.com/directus/directus)

**GitHub Stars**: 34,2k

**Dokumentation**: [https://directus.io/docs](https://directus.io/docs)

### Produktvorstellung

Directus ist eine Open-Source-Datenplattform, die eine Verwaltungsoberfläche, REST-API und GraphQL-API auf SQL-Datenbanken generieren kann. Es eignet sich für Teams, die bereits Datenbanken haben, aber ein benutzerfreundliches Backend, Standardschnittstellen oder eine einheitliche Datenzugriffsschicht vermissen.

Vielen Unternehmen mangelt es nicht an Daten. Das Problem ist, dass Daten über Altsysteme, Datenbanktabellen oder mehrere interne Anwendungen verteilt sind. Einen Agent direkt auf eine Datenbank zugreifen zu lassen, ist relativ riskant, und Geschäftsanwender zu bitten, SQL zu schreiben, ist unrealistisch. Directus kann eine API- und Berechtigungsverwaltungsschicht zwischen der Datenbank und WorkBuddy hinzufügen, wodurch vorhandene Daten leichter abgefragt, organisiert und aufgerufen werden können.

### Kernvorteile

* **Verbindet sich mit vorhandenen SQL-Datenbanken**: Geeignet zum Verpacken vorhandener Datenbanken in benutzerfreundlichere Datendienste.
* **Generiert automatisch APIs**: Auf Daten kann über REST, GraphQL oder SDKs zugegriffen werden.
* **Bietet eine Datenverwaltungsoberfläche**: Es ist nicht nur eine API-Schicht, sondern kann auch als Daten-Backend verwendet werden.
* **Geeignet für schrittweise Modernisierung**: Unternehmen müssen nicht das gesamte System neu aufbauen. Sie können zunächst wichtige Datentabellen über Directus verfügbar machen.

![Directus2-9ia8ca.png](https://static-docs.nocobase.com/Directus2-9ia8ca.png)

### Typische Anwendungsfälle mit WorkBuddy

Ein Unternehmen kann beispielsweise bereits Kundendatenbanken, Auftragsdatenbanken, Inventartabellen oder Content-Asset-Bibliotheken haben, aber die Daten sind über Altsysteme verstreut, was es Geschäftsanwendern erschwert, schnell Abfragen durchzuführen. Das Unternehmen kann zunächst Directus verwenden, um wichtige Datentabellen zu verbinden, Berechtigungen und APIs zu konfigurieren und dann WorkBuddy die Daten über Schnittstellen abfragen zu lassen.

Mitarbeiter können Anfragen von Büroeinstiegspunkten aus initiieren, wie "überprüfe die heutigen neuen Bestellungen", "finde Produkte, deren Lagerbestand unter dem Sicherheitsbestand liegt" oder "fasse die letzten 3 Transaktionen eines Kunden zusammen". Directus stellt APIs und Berechtigungsgrenzen bereit. WorkBuddy wandelt natürlichsprachliche Anfragen in Abfrageaufgaben um und organisiert die Ergebnisse in leichter lesbare Zusammenfassungen.

## 6. Metabase: Geeignet, damit WorkBuddy Berichte und Geschäftskennzahlen lesen kann

![Metabase-uupms9.png](https://static-docs.nocobase.com/Metabase-uupms9.png)

**Offizielle Website**: [https://www.metabase.com/](https://www.metabase.com/)

**GitHub**: [https://github.com/metabase/metabase](https://github.com/metabase/metabase)

**GitHub Stars**: 47k

**Dokumentation**: [https://www.metabase.com/docs](https://www.metabase.com/docs)

### Produktvorstellung

Metabase ist ein Open-Source-BI-Tool zum Erstellen von Daten-Dashboards, Geschäftsberichten und Self-Service-Analysen. Es kann eine Verbindung zu Datenbanken herstellen, sodass Teams Kennzahlensysteme und Dashboards rund um Vertrieb, Betrieb, Produkt, Finanzen, Kundensupport und andere Daten aufbauen können.

Wenn Directus besser geeignet ist, um Datenbanken in APIs zu verwandeln, ist Metabase besser geeignet, um Daten in Geschäftsfragen und Kennzahlen-Dashboards zu verwandeln. In Kombination mit WorkBuddy kann Metabase als Datenanalyseschicht dienen, sodass Manager wichtige Kennzahlen und Geschäftszusammenfassungen über Büroeinstiegspunkte erhalten können.

### Kernvorteile

* **Geeignet für Geschäftsdatenanalyse**: Es kann eine Verbindung zu Datenbanken herstellen und Dashboards, Diagramme und Berichte erstellen.
* **Senkt die Hürde für Datenabfragen**: Geschäftsanwender können Kennzahlen über visuelle Oberflächen anzeigen und müssen nicht unbedingt SQL schreiben.
* **Geeignet für Management- und Betriebsteams**: Häufige Szenarien sind Vertriebs-Dashboards, Kanalanalyse, Nutzerwachstum, Ticket-Trends und Bestandsanalyse.
* **Bietet API-Funktionen**: Metabase stellt APIs bereit, die zur Automatisierung einiger Backend-Aufgaben und Datenabfrageszenarien verwendet werden können.

### Typische Anwendungsfälle mit WorkBuddy

Manager öffnen nicht unbedingt jeden Tag BI-Systeme, um mehrere Dashboards zu durchsuchen, aber sie müssen normalerweise schnell wichtige Änderungen verstehen. Zum Beispiel: "Wie hat sich der Umsatz dieser Woche im Vergleich zur letzten Woche verändert?" "Aus welchen Kanälen kamen die heutigen neuen registrierten Benutzer?" "Welche Produktlinie hatte den schnellsten Anstieg des Ticketvolumens?" "Welche Seiten hatten den deutlichsten Rückgang der Conversion-Rate?" Dies macht die Kombination von Metabase und WorkBuddy gut geeignet für Geschäftsdatenzusammenfassungen.

Metabase verbindet Datenbanken und speichert Kennzahlen und Dashboards. WorkBuddy bringt diese Kennzahlen in WeCom, Feishu oder DingTalk. Benutzer können direkt von Büroeinstiegspunkten aus Fragen stellen, und WorkBuddy kann die relevanten Berichte oder Datenschnittstellen aufrufen und dann strukturierte Zusammenfassungen zurückgeben.

## FAQ

### 1. Kann WorkBuddy direkt eine Verbindung zu traditionellen SaaS-, ERP- oder CRM-Systemen herstellen?

Ja, aber es hängt davon ab, ob das System selbst APIs, Webhooks, Plugins, MCP oder andere aufrufbare Fähigkeiten bereitstellt.

Viele traditionelle SaaS-, ERP- und CRM-Systeme haben relativ feste Datenstrukturen und Prozessregeln. Die Systeme können verwendet werden, aber ihre Feldbeziehungen, Schnittstellenfähigkeiten, Berechtigungsgrenzen und Prüfprotokolle sind möglicherweise nicht für den direkten Agent-Zugriff geeignet.

Für einfache Abfragen, Benachrichtigungen oder Datensynchronisation können traditionelle Systeme auch über APIs oder Integrationsplattformen verbunden werden. Aber wenn ein Unternehmen Daten, Berechtigungen und Workflows flexibel um Objekte wie Kunden, Bestellungen, Genehmigungen, Tickets, Inventar und Projekte konfigurieren möchte, sind Open-Source-Tools oder selbst hostbare Plattformen in der Regel besser geeignet als die Schicht, die diese Fähigkeiten bereitstellt.

### 2. Warum sollte man Open-Source-Tools mit WorkBuddy verwenden?

Open-Source-Tools sind in der Regel besser geeignet für Teams, die Self-Hosting, Datenkontrolle, offene Schnittstellen und langfristige Erweiterbarkeit benötigen.

Unternehmen können besser verstehen, wo Daten gespeichert sind, wie Systemberechtigungen konfiguriert sind, wie Schnittstellen aufgerufen werden und wie Betriebsprotokolle geführt werden. Sie können auch basierend auf ihren eigenen Anforderungen Sekundärentwicklungen oder Systemintegrationen durchführen. Für Szenarien mit Kundeninformationen, Projektdaten, Auftragsaufzeichnungen, Geschäftskennzahlen und internen Arbeitsabläufen ist diese Kontrollmöglichkeit besonders wichtig.

WorkBuddy übernimmt den Büroeinstiegspunkt und die Aufgabenorchestrierung. Open-Source-Tools hosten Fähigkeiten wie Geschäftssysteme, Automatisierungsworkflows, CRM, Projektmanagement, Daten-APIs und BI-Analysen. Zusammen verbinden sie alltägliche Büroeinstiegspunkte mit spezifischen Geschäftssystemen.

### 3. Wenn wir systemweite interne Tools erstellen möchten, welches sollten wir uns zuerst ansehen?

**NocoBase**.

Wenn ein Unternehmen CRM, ERP, Ticketsysteme, Genehmigungssysteme, Bestandsverwaltung, Projektmanagement oder Betriebs-Backends erstellen möchte, ist NocoBase besser als systemweite interne Tool-Plattform geeignet. Es verwendet eine datenmodellgetriebene Architektur, was es geeignet macht, zuerst Geschäftsobjekte wie Kunden, Bestellungen, Tickets, Genehmigungen, Inventar und Projekte zu definieren und dann Seiten, Berechtigungen, Workflows und Plugins zu konfigurieren.

Gleichzeitig hat NocoBase bereits Dokumentation zur WorkBuddy-Integration veröffentlicht, was es direkt für dieses Thema relevant macht. Für Teams, die komplexe Geschäftsdaten, Berechtigungsgrenzen und Workflow-Regeln verwalten müssen, bietet NocoBase eine breitere Abdeckung als ein einzelnes CRM, ein einzelnes Automatisierungstool oder ein einzelnes BI-Tool.

### 4. Wenn das Hauptziel Dashboard-Überwachung und Geschäftsdatenanalyse ist, welches sollten wir wählen?

**Metabase**.

Metabase eignet sich besser zum Verbinden von Datenbanken, Erstellen von Dashboards, Pflegen von Geschäftskennzahlen und Generieren von Datenberichten. Szenarien wie Vertriebs-Dashboards, Kanalanalyse, Nutzerwachstum, Ticket-Trends, Bestandsänderungen und Conversion-Rate-Änderungen sind alle für Metabase geeignet.

In Kombination mit WorkBuddy können Manager wichtige Kennzahlen von Büroeinstiegspunkten aus abfragen, wie "Wie hat sich der Umsatz dieser Woche im Vergleich zur letzten Woche verändert?" "Aus welchen Kanälen kamen die heutigen neuen Benutzer hauptsächlich?" und "Welche Produktlinie hatte den schnellsten Anstieg des Ticketvolumens?" Metabase speichert die Kennzahlen und Dashboards, während WorkBuddy Abfragen initiiert und strukturierte Zusammenfassungen zurückgibt.

### 5. Was sollte ein Unternehmen tun, wenn es bereits Datenbanken hat, aber einen einheitlichen Abfrageeinstiegspunkt vermisst?

Viele Unternehmen haben bereits Kundendatenbanken, Auftragsdatenbanken, Inventartabellen oder Content-Asset-Bibliotheken, aber die Daten sind über Altsysteme oder interne Datenbanken verstreut. Wenn Geschäftsanwender Daten abfragen möchten, müssen sie oft mehrere Backends betreten oder technische Kollegen bitten, Daten temporär zu exportieren.

Directus kann eine Verwaltungsoberfläche, REST-API und GraphQL-API auf SQL-Datenbanken generieren, was im Grunde einen klareren Datenzugriffseinstiegspunkt für vorhandene Datenbanken hinzufügt. In Kombination mit WorkBuddy können Mitarbeiter Informationen wie "heutige neue Bestellungen", "Produkte, deren Lagerbestand unter dem Sicherheitsbestand liegt" und "die letzten 3 Transaktionen eines Kunden" von Büroeinstiegspunkten aus abfragen.

### 6. Erfordert die Verwendung von WorkBuddy mit Open-Source-Tools technische Teams?

Es hängt davon ab, wie tief es genutzt wird.

Für einfache Abfragen, Erinnerungen, Informationsorganisation oder Berichtszusammenfassungen können Geschäftsteams mit den Fähigkeiten vorhandener Tools beginnen. Aber wenn WorkBuddy eine zuverlässige Integration mit internen Systemen benötigt, wie das Aufrufen von APIs, Konfigurieren von Berechtigungen, Entwerfen von Workflows, Verwalten von Schlüsseln und Führen von Betriebsprotokollen, müssen IT- oder Entwicklungsteams einbezogen werden.

Ein sichererer Ansatz ist, mit risikoarmen, häufigen Szenarien zu beginnen, wie Kunden-Nachverfolgungslisten, Projektfortschrittsübersichten, Erinnerungen an überfällige Tickets, Geschäftsdaten-Dashboards und Bestandsausnahmeabfragen. Nachdem der Workflow stabil geworden ist, kann er schrittweise auf komplexere Systemoperationen und plattformübergreifende Automatisierung ausgeweitet werden.

### 7. Wann ist WorkBuddy eine gute Wahl?

WorkBuddy ist eine gute Wahl, wenn ein Team hauptsächlich über WeChat, QQ, WeCom, Feishu, DingTalk und ähnliche Einstiegspunkte zusammenarbeitet und KI-Agents für alltägliche Büroaufgaben wie Dateiorganisation, Tabellenanalyse, PPT-Erstellung, Besprechungszusammenfassungen und Aufgabenverteilung verwenden möchte.

Wenn das Unternehmen auch interne Tools, CRM, Projektmanagement, Daten-Dashboards, Automatisierungsworkflows und andere Systeme weiter verbinden möchte, kann es WorkBuddy als Aufgabeneinstiegspunkt verwenden und es mit Open-Source-Tools wie NocoBase, Activepieces und Twenty kombinieren, um spezifische Geschäftssysteme und Datenfähigkeiten hinzuzufügen.

Wenn dieser Artikel hilfreich ist, teile ihn gerne mit Freunden, die KI-Agents verfolgen.


**Verwandte Lektüre**

* [Top 6 Open-Source-KI-Tools nach GitHub Stars für stärkere KI-Agents](https://www.nocobase.com/en/blog/6-github-top-open-source-ai-tools-for-ai-agents)
* [5 Open-Source-Interne-Tools zur Verwendung mit Hermes Agent](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)
* [OpenClaw und 5 Open-Source-Tools zur Überwachung von Geschäftsworkflows](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [Welche Open-Source-Tools funktionieren gut mit OpenCode? 5 Projekte zum Ausprobieren](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Erstellen interner Tools mit Codex: 6 Open-Source-Projekte für Entwickler](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Nach Claude Code: 6 Open-Source-Tools, die Sie kennen sollten](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 Open-Source-KI- und No-Code-Tools für die Unternehmenssoftwareentwicklung](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Open-Source-KI-Agent-Plattformen zum Erstellen interner Tools](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [Die besten unternehmensgerechten selbst gehosteten CRMs mit RBAC, KI und Open-API-Unterstützung](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 beste Open-Source-Tools zum Ersetzen benutzerdefinierter Integrations-Middleware](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Excel durch NocoBase oder Airtable ersetzen? Ein Kostenvergleich](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Möglichkeiten, schnell Web-Apps aus Excel-Daten zu erstellen](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
