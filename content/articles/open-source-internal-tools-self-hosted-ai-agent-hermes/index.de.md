---
title: "5 Open-Source Interne Tools zur Verwendung mit Hermes Agent"
description: "Erfahren Sie, wie NocoBase, Appsmith, Budibase, Directus und Baserow mit Hermes Agent zusammenarbeiten können, um die Erstellung, Konfiguration und Wartung interner Tools zu verbessern."
---

KI-Agenten sind nicht mehr nur in Entwicklungsszenarien beliebt.

Neben Tools wie Claude Code und OpenClaw hat auch Hermes Agent in letzter Zeit mehr Aufmerksamkeit erhalten.

![reddit.png](https://static-docs.nocobase.com/reddit-px26au.png)

[Auf Reddit](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/comment/obgsyod/) erwähnte ein Benutzer, dass er nach dem Testen mehrerer Agent-Tools, darunter OpenClaw, Nanobot und Nanoclaw, am Ende doch Hermes Agent bevorzugte. Es behält die tatsächlich benötigten Fähigkeiten ohne unnötigen Overhead. Für Szenarien wie lokale Modelle, selbst gehostete Server, SSH-Zugriff und Telegram-basierte Operationen passt es auch zu einem leichteren und besser kontrollierbaren Setup.

> 💡Mehr lesen:
>
> [Wie kann OpenClaw im echten Geschäftsumfeld eingesetzt werden? 5 empfohlene Open-Source-Tools](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
>
> [Nach der Verwendung von Claude Code benötigen Sie diese 6 Open-Source-Tools](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)

Für Teams, die bereits planen, selbst gehostete Geschäftssysteme oder interne Tools zu erstellen, ist Hermes Agent eine gute Wahl, wenn der KI-Agent innerhalb echter Geschäftssysteme eingesetzt werden soll, um Datenabfragen, Systemkonfiguration, Workflow-Wartung und Aufgabenausführung zu handhaben.

Die interne Tool-Plattform bietet die Grundlage für das Geschäftssystem, während Hermes als selbst gehosteter Agent fungiert, der Teams hilft, Systeme mit natürlicher Sprache abzufragen, zu konfigurieren und zu warten und wiederholbare Operationen als wiederverwendbare Skills zu erfassen.

---

💬 Hey, du liest den NocoBase-Blog. NocoBase ist die erweiterbarste KI-gestützte No-Code/Low-Code-Entwicklungsplattform zum Erstellen von Unternehmensanwendungen, internen Tools und allen Arten von Systemen. Sie ist vollständig selbst gehostet, plugin-basiert und entwicklerfreundlich. →[ NocoBase auf GitHub erkunden](https://github.com/nocobase/nocobase)

---

Dieser Artikel konzentriert sich auf interne Tool-Plattformen wie NocoBase, Appsmith, Budibase, Directus und Baserow und erklärt, wie sie in verschiedenen Szenarien mit Hermes Agent verwendet werden können.

Zunächst eine Tabelle der in diesem Artikel behandelten Tools, der gängigen Geschäftssysteme, für die sie geeignet sind, und der Fähigkeiten, die Hermes Agent hinzufügen kann.


| Tool      | Empfohlene Geschäftssysteme / interne Tools                                                                                                              | Was Hermes Agent hinzufügen kann                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NocoBase  | CRM, ERP, Genehmigungssysteme, Ticketsysteme, Projektmanagement, Lieferantenmanagement, Anlagenverwaltung, Operations-Backends und andere Geschäftssysteme | Datenmodelle mit natürlicher Sprache planen, Seiten und Berechtigungen konfigurieren, Workflows warten und häufig genutzte Geschäftsmodule als wiederverwendbare Skills erfassen |
| Appsmith  | Admin-Panels, Daten-Dashboards, Kundenservice-Backends, Prüfpanels, Operations-Tools, Datenbank-Verwaltungsoberflächen                                    | Seitenstrukturen klären, Abfrage- und Filterlogik organisieren, Beziehungen zwischen Komponenten und Datenquellen erklären und gängige Admin-Seitenvorlagen wiederverwenden    |
| Budibase  | Formularsysteme, Genehmigungsworkflows, Mitarbeiteranfragen, IT-Service-Desks, Operations-Workflow-Apps, interne Workflow-Tools                           | Formularfelder, Genehmigungsknoten und Statusübergänge klären, Workflow-Vorlagen generieren und Skills zur Bearbeitung von Anfragen erfassen                                 |
| Directus  | Datenbank-Backends, API-Management, Content-Management-Systeme, Plattformen für strukturierte Datenverwaltung, Datenoperations-Backends                   | Datenstrukturen erklären, Feldbeziehungen organisieren, natürliche Sprachabfragen unterstützen und Workflows zur Datenverwaltung und Content-Pflege erfassen               |
| Baserow   | Tabellenbasierte Datenbanken, leichtes CRM, Lieferantenlisten, Content-Pläne, Projektfortschrittstabellen, Bestandslisten                                  | Tabellenstrukturen und Ansichten planen, Filterregeln organisieren, Kategorie- und Statusfelder generieren und Vorlagen für leichte Apps wiederverwenden                   |

## 1. NocoBase

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-orh9iv.png)

Offizielle Website: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Star: 22,6k

### Einführung

NocoBase ist eine Open-Source-KI-No-Code/Low-Code-Plattform zum Erstellen von internen Geschäftssystemen und Admin-Backends für Unternehmen.

Im Kern hilft NocoBase Teams, langlebige Geschäftssysteme durch Datenmodelle, Seitenkonfiguration, Berechtigungsverwaltung, Workflows und Plugin-Erweiterungen zu erstellen. Diese Systeme ändern sich im Laufe der Zeit: Felder müssen angepasst, Seiten optimiert, Berechtigungen neu definiert und Genehmigungs- und Benachrichtigungsworkflows an die sich ändernden Geschäftsanforderungen angepasst werden.

NocoBase ist gut für diese langfristigen Systeme geeignet, während Hermes Agent weiterhin am Systemaufbau, der Konfiguration und der Wartung teilnehmen kann.

In Bezug auf KI-Fähigkeiten bietet NocoBase bereits KI-Mitarbeiter, KI-Skills, CLI, MCP und verwandte Unterstützung. KI-Mitarbeiter können als intelligente Assistenten innerhalb des Systems agieren und bei Datenabfragen, Inhaltsgenerierung, Aufgabenbearbeitung und mehr helfen. KI-Skills helfen externen Agenten zu verstehen, wie NocoBase konfiguriert ist und was sie bedienen können und was nicht. Die CLI ermöglicht es Agenten, Installationen, Erstellungen, Änderungen und andere Operationen über Befehle auszuführen. MCP bietet einen standardisierteren Einstiegspunkt für externe KI-Tools, um eine Verbindung zu NocoBase herzustellen.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-civede.png)

### Was kann man mit Hermes machen?

Nachdem Hermes mit NocoBase verbunden ist, kann es das NocoBase-Konfigurationssystem über NocoBase-Skills verstehen und Erstellungs-, Änderungs-, Bereitstellungs- und andere Operationen über die NocoBase-CLI ausführen.

**1. Geschäftsmodule mit natürlicher Sprache erstellen**

Zum Beispiel kann man bei der Erstellung eines Moduls zur Verwaltung von Kundenverlängerungen zuerst Hermes die Datenstrukturen für Kunden, Verträge, Verlängerungsaufzeichnungen, Nachverfolgungsaufgaben usw. organisieren lassen. Dann kann es die Listenseiten, Detailseiten, Dashboards und grundlegenden Berechtigungen planen.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-auh66t.png)

**2. Hilfe bei der Wartung von Berechtigungen und Workflows**

Wenn die Regel beispielsweise lautet "Verkäufer können nur ihre eigenen Kunden sehen, Vorgesetzte können die Kunden ihres Teams sehen und die Finanzabteilung kann die Vertragsbeträge sehen", kann Hermes diese Geschäftsbeschreibung in spezifischere Berechtigungs- und Workflow-Konfigurationslogik umwandeln.

**3. Hochfrequente Operationen als Skills erfassen**

Nach der erstmaligen Erstellung eines CRM-, Genehmigungsworkflow- oder Lieferantenverwaltungsmoduls kann Hermes Praktiken wie Feldbenennung, Seitenstruktur und Berechtigungsregeln erfassen. Diese können dann beim späteren Erstellen ähnlicher Module wiederverwendet werden.

### Beispiel für eine Aufgabenanweisung

```text
Hilf mir, ein Modul zur Verwaltung von Kundenverlängerungen in NocoBase zu erstellen.

Es muss Kundeninformationen, Vertragsablaufdatum, Verlängerungsstatus, Besitzer, Nachverfolgungsaufzeichnungen und einen Genehmigungsworkflow enthalten.

Für Berechtigungen:
Verkäufer können nur ihre eigenen Kunden sehen.
Verkaufsleiter können Teamkunden sehen.
Die Finanzabteilung kann Vertragsbeträge und Zahlungsstatus sehen.
Administratoren können alle Inhalte sehen und bearbeiten.

Für Workflows:
Automatisch eine Verlängerungserinnerung 30 Tage vor Vertragsablauf generieren.
Wenn der Verlängerungsbetrag 100.000 Yuan übersteigt, ist die Genehmigung durch den Vorgesetzten und die Finanzabteilung erforderlich.
Nach der Genehmigung den Verlängerungsstatus aktualisieren und die nächste Nachverfolgungsaufgabe generieren.

Bitte organisiere nach Abschluss diesen Modulerstellungsprozess in einem wiederverwendbaren Skill, damit er später zum Erstellen von Lieferantenverwaltungs-, Vertragsverwaltungs- oder Projektverwaltungsmodulen verwendet werden kann.
```

![NocoBase4-yks1wd.png](https://static-docs.nocobase.com/NocoBase4-yks1wd.png)

### Verwandte Ressourcen

Dokumentation: [https://docs.nocobase.com/](https://docs.nocobase.com/)

KI-Dokumentation: [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

Hermes Agent: [https://docs.nocobase.com/en/ai/hermes-agent](https://docs.nocobase.com/en/ai/hermes-agent)

## 2. Appsmith

![Appsmith1.png](https://static-docs.nocobase.com/Appsmith1-ixuhwg.png)

Offizielle Website: [https://www.appsmith.com/](https://www.appsmith.com/)

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

GitHub Star: 39,9k

### Einführung

Appsmith ist eine Open-Source-Low-Code-Plattform, die hauptsächlich zum Erstellen interner Apps wie Admin-Panels, Daten-Dashboards, Kundensupport-Backends, Prüftools und IT-Tools verwendet wird. Sie kann eine Verbindung zu Datenbanken, APIs und Drittanbieterdiensten herstellen und über Drag-and-Drop-Komponenten, Abfragekonfiguration und JavaScript-Erweiterungen schnell Oberflächen für interne Teams erstellen.

Appsmith bietet Appsmith AI, das KI-Abfragen, Textgenerierung, Klassifizierung, Zusammenfassung und andere Fähigkeiten zu Anwendungen hinzufügen kann. Es kann auch KI-Interaktionen rund um interne Daten aufbauen. Appsmith entwickelt auch Appsmith Agents, um KI-Fähigkeiten in die Tools und Systeme zu bringen, die Teams täglich nutzen.

![Appsmith2.png](https://static-docs.nocobase.com/Appsmith2-64xce0.png)

### Was kann man mit Hermes machen?

Appsmith erstellt spezifische Seiten und Datenoperationsschnittstellen, während Hermes Teams hilft, Anforderungen in natürlicher Sprache in klarere Seitenstrukturen, Abfragelogik und Operationsregeln umzuwandeln.

1. Interne Admin-Oberflächen planen

Beim Erstellen eines Panels zur Bearbeitung von Auftragsausnahmen kann man Hermes zuerst bitten, zu klären, welche Felder angezeigt werden sollen, welche Filter benötigt werden, welche Aktionsschaltflächen erforderlich sind und wie die Seite in Abschnitte unterteilt werden soll. Appsmith kann dann die spezifische Oberflächenerstellung und Datenverbindung übernehmen.

2. Abfrage- und Filterlogik organisieren

Ein häufiges Problem bei internen Tools ist nicht, ob eine Seite existiert, sondern ob die Datenlogik hinter der Seite klar ist. Hermes kann Teams helfen, Beschreibungen wie "welche Aufträge möchte ich sehen", "wie sollen Ausnahmen identifiziert werden" und "welche Datensätze sollten priorisiert werden" in Abfragebedingungen und Operationsregeln umzuwandeln.

3. Admin-Seitenvorlagen erfassen

Kundensupport-Backends, Prüfpanels, Operations-Dashboards und Finanzabfrageseiten treten oft wiederholt auf. Hermes kann gängige Felder, Komponentenlayouts, Filter und Operationslogik als Skills erfassen, sodass ähnliche Seiten später wiederverwendet werden können.

### Beispiel für eine Aufgabenanweisung

```text
Hilf mir, ein Panel zur Bearbeitung von Auftragsausnahmen zu planen, das später in Appsmith erstellt wird.

Die Seite muss Ausnahmeaufträge, Kundennamen, Auftragsbeträge, Besitzer, Ausnahmegründe, Bearbeitungsstatus und den letzten Kommunikationsverlauf anzeigen.

Filter umfassen:
Region.
Auftragsbetrag.
Bearbeitungsstatus.
Besitzer.
Ausnahmetyp.

Für Operationen:
Mitarbeiter der Operationsabteilung können den Bearbeitungsstatus aktualisieren.
Vorgesetzte können Besitzer in Stapeln zuweisen.
Die Finanzabteilung kann nur Auftragsbeträge und Zahlungsstatus sehen.

Bitte organisiere die Seitenstruktur, die Datenabfragelogik und das Komponentenlayout und erfasse sie als wiederverwendbare Vorlage für eine interne Tool-Seite.
```

### Verwandte Ressourcen

Dokumentation: [https://docs.appsmith.com/](https://docs.appsmith.com/)

Appsmith AI: [https://docs.appsmith.com/connect-data/reference/appsmith-ai](https://docs.appsmith.com/connect-data/reference/appsmith-ai)

## 3. Budibase

![Budibase1.png](https://static-docs.nocobase.com/Budibase1-py408w.png)

Offizielle Website: [https://budibase.com/](https://budibase.com/)

GitHub: [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

GitHub Star: 28k

### Einführung

Budibase ist eine Open-Source-Operationsplattform, die hauptsächlich zum Erstellen interner Apps, Automatisierungsworkflows und KI-Agenten verwendet wird. Sie konzentriert sich mehr auf prozessbasierte Geschäftsszenarien wie Mitarbeiteranfragen, Genehmigungsbearbeitung, IT-Service-Desks, Formularweiterleitung, Datenaktualisierungen und Operationsautomatisierung.

Budibase unterstützt die Codegenerierung, die Erstellung von Datenbanktabellen und die Erstellung von Automatisierungsworkflows, die von großen Sprachmodellen angetrieben werden. Budibase Agents werden ebenfalls entwickelt, sodass Teams das Agentenverhalten durch natürliche Sprache definieren und mit internen Daten und APIs verbinden können.

### Was kann man mit Hermes machen?

Budibase ist besser für Formulare, Genehmigungen und workflowbasierte Anwendungen geeignet. Hermes kann Teams helfen, Regeln in der frühen Phase des Workflow-Designs zu klären und später hochfrequente Anforderungsbearbeitungsmethoden zu erfassen.

1. Formulare und Genehmigungsworkflows klären

Für Prozesse wie Geräteanfragen, Spesenabrechnungen, Kundensupport und Vertragsgenehmigungen kann Hermes Teams zuerst helfen, Felder, Genehmigungsknoten, Auslösebedingungen und Benachrichtigungsregeln aufzuschlüsseln. Budibase kann dann die eigentliche Anwendungserstellung übernehmen.

2. Workflow-Bearbeitungsvorlagen generieren

Viele interne Anfragen folgen festen Bearbeitungsmustern. Hermes kann Workflows wie "Mitarbeiter reicht Anfrage ein, Vorgesetzter genehmigt, die zuständige Abteilung bearbeitet, Status wird aktualisiert, Antragsteller wird benachrichtigt" in Vorlagen organisieren, die später schnell wiederverwendet werden können.

3. Operationsregeln erfassen

Workflowbasierte Anwendungen müssen sich oft ändern, wenn sich Organisationsregeln ändern. Hermes kann Genehmigungssequenzen, Ausnahmebehandlungsmethoden, Rollenverantwortlichkeiten und Benachrichtigungsregeln aufzeichnen und in wiederverwendbare Skills umwandeln.

![Budibase2.png](https://static-docs.nocobase.com/Budibase2-b8427g.png)

### Beispiel für eine Aufgabenanweisung

```text
Hilf mir, einen Prozess für Mitarbeiter-Geräteanfragen zu entwerfen, der später in Budibase erstellt wird.

Der Prozess umfasst:
Der Mitarbeiter reicht eine Geräteanfrage ein.
Der Vorgesetzte genehmigt sie.
Die IT-Abteilung bestätigt den Bestand.
Nach der Genehmigung wird der Gerätestatus aktualisiert.
Das System benachrichtigt den Antragsteller zur Abholung des Geräts.

Die Formularfelder umfassen:
Antragsteller.
Abteilung.
Gerätetyp.
Zweckbeschreibung.
Voraussichtliche Abholzeit.
Genehmigungsstatus.
Bearbeiter.

Bitte organisiere die Formularfelder, Genehmigungsknoten, Statusübergänge und Benachrichtigungsregeln und erfasse diesen Geräteanforderungsprozess als wiederverwendbaren Skill.
```

### Verwandte Ressourcen

Dokumentation: [https://docs.budibase.com/](https://docs.budibase.com/)

Budibase AI: [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai)

## 4. Directus

![Directus1.png](https://static-docs.nocobase.com/Directus1-tqzvl0.png)

Offizielle Website: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Star: 35,9k

### Einführung

Directus ist eine Echtzeit-API und ein App-Backend zur Verwaltung von SQL-Datenbankinhalten. Es kann REST/GraphQL-APIs und eine Admin-Oberfläche auf Basis vorhandener Datenbanken generieren. Es unterstützt PostgreSQL, MySQL, SQLite, OracleDB, MariaDB, MS SQL und andere Datenbanken sowie lokale Bereitstellung, private Bereitstellung und Cloud-Dienste.

In Bezug auf KI-Fähigkeiten bietet Directus Directus MCP, das es KI-Tools wie Claude und ChatGPT ermöglicht, Directus-Daten zu lesen, zu erstellen und zu verwalten. Directus MCP folgt dem vorhandenen Berechtigungssystem, sodass KI-Zugriffs- und Änderungsaktionen dieselbe Authentifizierungs- und Autorisierungsebene durchlaufen müssen.

![Directus2.png](https://static-docs.nocobase.com/Directus2-92qier.png)

### Was kann man mit Hermes machen?

Directus konzentriert sich mehr auf Daten-Backends und API-Management. Wenn Hermes mit Directus verwendet wird, liegt der Fokus nicht auf der Generierung von Seiten, sondern darauf, Teams zu helfen, Datenstrukturen zu verstehen, Geschäftsdaten abzufragen und gängige Datenverwaltungsaktionen zu erfassen.

1. Datenstrukturen erklären

Für bestehende Datenbanken verstehen Geschäftsanwender oft nicht, wie Felder miteinander in Beziehung stehen. Hermes kann helfen, Sammlungen, Felder, Beziehungen und Berechtigungsgrenzen zu organisieren, wodurch die Datenstruktur leichter verständlich wird.

2. Unterstützung bei Datenabfragen und -organisation

Beim Abfragen von Lieferanten, Verträgen, Zahlungen, Inhaltsstatus, Kundenaufzeichnungen und ähnlichen Informationen kann Hermes Anforderungen in natürlicher Sprache in spezifischere Datenabfragelogik umwandeln.

3. Datenverwaltungsaktionen erfassen

Aktionen wie Inhaltsüberprüfung, Pflege von Lieferantenprofilen, Organisation von Kundendaten und Überprüfung des Vertragsstatus wiederholen sich oft. Hermes kann diese Datenoperationsprozesse in Skills organisieren, sodass sie später nach denselben Regeln ausgeführt werden können.

### Beispiel für eine Aufgabenanweisung

```text
Hilf mir, die Lieferantendatenstruktur in Directus zu organisieren.

Es muss unterschieden werden:
Lieferanten-Stammdaten.
Kontakte.
Vertragsaufzeichnungen.
Zahlungsstatus.
Kooperationsstatus.
Letzter Kommunikationsverlauf.

Bitte erkläre, wie diese Sammlungen in Beziehung gesetzt werden sollten, und organisiere einen Prozess zur Überprüfung des Lieferantenstatus.

Später möchte ich mit natürlicher Sprache abfragen:
Welche Lieferantenverträge laufen bald ab.
Welche Lieferanten haben einen abnormalen Zahlungsstatus.
Welche Lieferanten haben seit mehr als 30 Tagen keinen aktualisierten Kommunikationsverlauf.

Bitte erfasse diese Datenorganisations- und Abfragemethode als wiederverwendbaren Skill.
```

### Verwandte Ressourcen

Dokumentation: [https://directus.io/docs](https://directus.io/docs)

Directus MCP: [https://directus.io/mcp](https://directus.io/mcp)

MCP-Dokumentation: [https://directus.io/docs/guides/ai/mcp](https://directus.io/docs/guides/ai/mcp)

## 5. Baserow

![Baserow1.png](https://static-docs.nocobase.com/Baserow1-23hy4e.png)

Offizielle Website: [https://baserow.io/](https://baserow.io/)

GitHub: [https://github.com/baserow/baserow](https://github.com/baserow/baserow)

GitHub Star: 4,9k

### Einführung

Baserow ist eine Open-Source-No-Code-Plattform, die zum Erstellen von Datenbanken, Anwendungen, Automatisierungen und KI-Agenten verwendet werden kann. Sie wird oft als Open-Source-Alternative zu Airtable angesehen. Sie unterstützt sowohl Cloud- als auch selbst gehostete Bereitstellung und eignet sich für die Verwaltung strukturierter Daten und leichter Geschäftsanwendungen.

Baserow 2.0 führte den KI-Assistenten Kuma ein, der Datenbanken erstellen, Formeln schreiben und Automatisierungen mit natürlicher Sprache erstellen kann. Es bietet auch KI-Felder, einen Automatisierungs-Builder, Workspace-Suche und andere Fähigkeiten.

![Baserow2.png](https://static-docs.nocobase.com/Baserow2-1684s9.png)

### Was kann man mit Hermes machen?

Baserow eignet sich besser zum Erstellen leichter Apps, die auf tabellenbasierten Daten basieren. In Verbindung mit Baserow kann Hermes Teams helfen, von "Tabellen organisieren" zu "Datenverwaltungsgewohnheiten erfassen" überzugehen.

1. Tabellenstrukturen und Ansichten erstellen

Für Kundenlisten, Lieferantenlisten, Content-Pläne, Projektfortschritte, Bestandsaufzeichnungen und ähnliche Anwendungsfälle kann Hermes zuerst Tabellenstrukturen, Felder und Ansichten basierend auf Geschäftsbeschreibungen planen. Baserow übernimmt dann die Datenverwaltung.

2. Filter und Klassifizierungsregeln organisieren

Leichte Apps verlassen sich oft auf verschiedene Ansichten. Hermes kann Geschäftsregeln wie "ausstehende Überprüfung", "in Kooperation", "bald ablaufend" und "hohe Priorität" in Filterbedingungen und Ansichtseinstellungen umwandeln.

3. Vorlagen für leichte Apps erfassen

Wenn ein Team Baserow häufig zur Verwaltung ähnlicher Geschäftsdaten verwendet, kann Hermes Feldstrukturen, Ansichtsregeln und Statuskategorien als Skills erfassen und sie dann beim späteren Erstellen neuer Tabellen wiederverwenden.

### Beispiel für eine Aufgabenanweisung

```text
Hilf mir, eine Lieferantenverwaltungstabelle zu planen, die später in Baserow erstellt wird.

Die Felder umfassen:
Lieferantenname.
Ansprechpartner.
Kontaktinformationen.
Kooperationsstatus.
Vertragsablaufdatum.
Zahlungsstatus.
Besitzer.
Letzte Kommunikationszeit.
Notizen.

Es müssen drei Ansichten erstellt werden:
Lieferanten mit ausstehender Überprüfung.
Lieferanten in Kooperation.
Lieferanten mit bald ablaufenden Verträgen.

Bitte entwirf Filterbedingungen für jede Ansicht und erfasse diese Lieferantentabellenstruktur und Ansichtsregeln als wiederverwendbaren Skill, damit später das Erstellen von Kundentabellen, Kanaltabellen oder Partnertabellen einfacher wird.
```

### Verwandte Ressourcen

Dokumentation: [https://baserow.io/user-docs](https://baserow.io/user-docs)

Baserow AI: [https://baserow.io/product/baserow-ai](https://baserow.io/product/baserow-ai)

## FAQ

### 1. Wenn diese Plattformen bereits KI-Fähigkeiten haben, warum wird Hermes trotzdem benötigt?

Die integrierte KI in diesen Plattformen ist normalerweise besser darin, bestimmte produktspezifische Aufgaben zu erledigen, wie das Generieren von Seiten, SQL, Formularlogik oder Komponentenkonfigurationen.

Der Wert von Hermes liegt im Selbsthosting, dem Langzeitgedächtnis und der Skill-Akkumulation. Es ist besser geeignet, sich Geschäftsregeln, Berechtigungsgewohnheiten und Systemkonfigurationsmethoden über mehrere Aufgaben und Gespräche hinweg zu merken.

### 2. Welche internen Tool-Plattformen funktionieren am besten mit Hermes?

Plattformen, die besser für Hermes geeignet sind, sind langlebige Geschäftssystemplattformen, die kontinuierliche Wartung erfordern, wie NocoBase, Budibase, Appsmith, Directus und Baserow.

Darunter ist NocoBase besser geeignet für die Wartung vollständiger Geschäftssysteme. Appsmith ist besser geeignet für interne Oberflächen und Datenpanels. Budibase ist besser geeignet für Formulare und Workflows. Directus und Baserow sind besser geeignet für Datenverwaltungsszenarien.

### 3. Für welche Art von Teams ist Hermes Agent geeignet?

Hermes ist besser geeignet für Teams, die bereits selbst gehostete Tools verwenden, Wert auf Datensicherheit legen, Geschäftssysteme langfristig warten müssen und möchten, dass KI sich Konfigurationsgewohnheiten merkt und Betriebserfahrungen erfasst.

### 4. Warum sind selbst gehostete KI-Agenten für interne Unternehmens-Tools wichtig?

Weil interne Tools normalerweise sensible Geschäftsdaten enthalten, wie Kunden, Aufträge, Verträge, Genehmigungen, Mitarbeiter und Finanzen.

Wenn ein KI-Agent auf diese Daten zugreifen und an Systemoperationen teilnehmen muss, achten Teams mehr darauf, wo Daten gespeichert werden, wie Berechtigungen gesteuert werden, wie Operationen überprüft werden und wie das Langzeitgedächtnis verwaltet wird. Selbst gehostete Agenten sind besser geeignet für Teams, die eine stärkere Kontrolle benötigen.

Es gibt viele KI-Agent-Produkte, aber wenn Ihr Team bereits Open-Source-Plattformen für interne Tools verwendet und KI-Agenten auf sicherere und kontrollierbarere Weise in interne Unternehmenssysteme bringen möchte, ist Hermes Agent einen Versuch wert. Wenn dieser Artikel hilfreich ist, teile ihn gerne mit Freunden, die sich für selbst gehostete KI-Agenten und den Bau interner Tools interessieren.


**Verwandte Lektüre**

* [OpenClaw und 5 Open-Source-Tools zur Überwachung von Geschäftsworkflows](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [Welche Open-Source-Tools funktionieren gut mit OpenCode? 5 Projekte zum Ausprobieren](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Erstellen interner Tools mit Codex: 6 Open-Source-Projekte für Entwickler](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Nach Claude Code: 6 Open-Source-Tools, die Sie kennen sollten](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 Open-Source-KI- und No-Code-Tools für die Unternehmenssoftwareentwicklung](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Open-Source-KI-Agent-Plattformen zum Erstellen interner Tools](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [Die besten selbst gehosteten CRMs der Enterprise-Klasse mit RBAC, KI und Open-API-Unterstützung](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 beste Open-Source-Tools zum Ersetzen benutzerdefinierter Integrations-Middleware](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Excel durch NocoBase oder Airtable ersetzen? Ein Kostenvergleich](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Möglichkeiten, schnell Web-Apps aus Excel-Daten zu erstellen](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Nicht nur PostgreSQL: Vergleich von 5 No-Code/Low-Code-Plattformen mit Unterstützung für externe Datenbanken](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Open-Source-Projektmanagement-Tool-Auswahlleitfaden, Ausgabe 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
