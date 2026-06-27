---
title: "Erstellung interner Tools mit Codex: 6 Open-Source-Projekte für Entwickler"
description: "Entdecken Sie Open-Source-Projekte wie NocoBase, Refine und Payload CMS, die Codex dabei helfen, stabilere und wartbarere interne Tools zu entwickeln."
---

## Hintergrund

Kürzlich bin ich auf eine Diskussion über KI-Coding-Agenten auf [Hacker News](https://news.ycombinator.com/item?id=47796469) gestoßen: **Eine KI zu bitten, eine App von Grund auf zu bauen, ist normalerweise nicht der zuverlässigste Weg, sie zu nutzen.**

![HN.png](https://static-docs.nocobase.com/HN-nb8ae5.png)

Der Entwickler wies darauf hin, dass die KI, wenn man ihr einfach sagt: „Hilf mir, eine App zu bauen“, oft etwas generiert, das **zunächst gut aussieht, aber eine unzuverlässige Struktur darunter hat.**

KI ist großartig darin, die Ausführungsgeschwindigkeit zu verbessern, aber sie funktioniert am besten, wenn sie innerhalb einer klaren Struktur arbeitet.

Für echte unternehmensinterne Tools benötigt man zuerst eine zuverlässige technische Grundlage und kann dann einen Coding-Agenten nutzen, um die Entwicklungseffizienz zu steigern.

In diesem Artikel konzentrieren wir uns auf unternehmensinterne Tools und empfehlen mehrere Open-Source-Projekte, die gut mit Codex zusammenarbeiten und Entwicklern helfen, interne Systeme und Tools effizienter zu erstellen.

---

💬 Hey, du liest den NocoBase-Blog. NocoBase ist die erweiterbarste KI-gestützte No-Code/Low-Code-Entwicklungsplattform für den Bau von Unternehmensanwendungen, internen Tools und allen Arten von Systemen. Sie ist vollständig selbst gehostet, plugin-basiert und entwicklerfreundlich. → [NocoBase auf GitHub erkunden](https://github.com/nocobase/nocobase)

---

| Projekt     | Am besten geeignet für                                                                     | Am besten geeignet für                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| NocoBase    | Aufbau interner Geschäftssysteme wie CRM, Ticketing, Genehmigungen und Anlagenverwaltung   | Entwickler, die schnell wartbare Geschäftssysteme erstellen müssen                                     |
| Refine      | Aufbau von React-Admin-Panels, Dashboards und B2B-Apps                                     | Entwickler, die mit React vertraut sind und die volle Kontrolle über den Code haben möchten            |
| Payload CMS | Aufbau von TypeScript / Next.js-Daten-Backends und Admin-Systemen                          | Entwickler, die ein TypeScript-First-Backend und Admin-Panel bevorzugen                                |
| Directus    | Generierung von APIs und Admin-Panels für bestehende SQL-Datenbanken                       | Teams mit bestehenden Datenbanken, die schnell ein Admin-Panel und eine API-Schicht benötigen          |
| Supabase    | Aufbau eines Postgres-Backends für interne Tools                                           | Entwickler, die Authentifizierung, Datenbank, Speicher, Echtzeitfunktionen und Backend-Funktionen benötigen |
| Windmill    | Verwandlung von Skripten in interne Tools, Aufgaben und Workflows                          | Technische Teams mit vielen internen Skripten und Automatisierungsaufgaben                             |

## 1. NocoBase

Offizielle Website: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Stars: 22,4k

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-nfhndl.png)

NocoBase ist eine Open-Source-KI-No-Code-Plattform für den Aufbau unternehmensinterner Systeme wie CRM, Ticketing-Systeme, Genehmigungssysteme, Projektmanagement, Anlagenverwaltung und Betriebs-Backends.

Der Kernwert von NocoBase **besteht darin, dass es ein vollständiges System-Framework für interne Tools bereitstellt**, einschließlich Datenmodellen, Seitenkonfiguration, Berechtigungssteuerung, Workflows, Plugin-Erweiterungen und KI-Funktionen. Für Entwickler ist es mehr als nur ein Drag-and-Drop-Seitenersteller. Es ist eine Geschäftssystem-Infrastruktur, die dennoch mit Code erweitert werden kann.

NocoBase bietet eine offizielle Codex-Dokumentation: [Verwendung von Codex mit NocoBase für Aufbau und Entwicklung](https://docs.nocobase.com/en/ai/codex)

Nach der Verbindung mit Codex kann Codex [NocoBase Skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills) und die [CLI](https://docs.nocobase.com/en/api/cli/) nutzen, um zu verstehen, wie NocoBase konfiguriert und entwickelt wird. Es kann Entwicklern helfen, Datentabellen zu erstellen, Seiten zu konfigurieren, Workflows zu entwerfen, Berechtigungen festzulegen und weiterhin Plugin-Entwicklung, Funktionserweiterungen und Fehlerbehebung durch natürliche Sprache zu handhaben.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-40774f.png)

**Im Vergleich dazu, Codex zu bitten, ein internes System von Grund auf zu generieren, gibt NocoBase ihm ein stabileres System-Framework, in dem es arbeiten kann**. Das Ergebnis ist kein Wegwerfcode, der schwer zu warten ist, sondern ein System, das innerhalb des NocoBase-Frameworks läuft und kontinuierlich verbessert werden kann.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-qu1ijq.png)

Über die anfängliche Bauphase hinaus bietet NocoBase auch KI-Mitarbeiter-Funktionen. KI-Mitarbeiter können mit Geschäftsseiten, Datentabellen und Workflow-Kontexten zusammenarbeiten, um bei der Datenorganisation, Datenanalyse, Übersetzung, Recherche, E-Mail-Verarbeitung, Datenmodellierung, Diagrammkonfiguration und mehr zu helfen. Mit anderen Worten: Codex eignet sich besser, um Entwicklern beim Aufbau und der Erweiterung von Systemen zu helfen, während NocoBase-KI-Mitarbeiter nach der Inbetriebnahme des Systems an den täglichen Geschäftsabläufen teilnehmen können.

![ai员工填表单-yhms5j.gif](https://static-docs.nocobase.com/ai%E5%91%98%E5%B7%A5%E5%A1%AB%E8%A1%A8%E5%8D%95-yhms5j.gif)

Durch die Konfiguration von LLM-Diensten, Skills, Wissensdatenbanken und Schnellaufgaben können KI-Mitarbeiter natürlicher in reale Geschäftsabläufe integriert werden und Teams helfen, sowohl die Systemerstellung als auch die tägliche Nutzungseffizienz zu verbessern.

### Was Sie mit Codex und NocoBase bauen können

Codex und NocoBase können Entwicklern helfen, schneller wartbare unternehmensinterne Systeme zu erstellen, wie zum Beispiel:

* CRM
* Ticketing-Systeme
* Genehmigungssysteme
* Projektmanagement
* Anlagenverwaltung
* Betriebs-Backends
* Daten-Dashboards

Codex übernimmt das Verständnis der Anforderungen, die Aufschlüsselung der Geschäftsstruktur und die Generierung der Implementierung. NocoBase stellt die Datenmodelle, Berechtigungen, Seiten, Workflows und Plugin-Erweiterungen bereit. Anstatt die KI zu bitten, schwer wartbaren Code von Grund auf zu generieren, können Entwickler Codex innerhalb des bestehenden System-Frameworks von NocoBase bauen und entwickeln lassen.

### Vorgeschlagener Prompt

#### NocoBase installieren

Kopieren Sie den folgenden Prompt in Codex, um NocoBase automatisch zu installieren und zu konfigurieren:

```text
Hilf mir, die NocoBase CLI zu installieren und die Initialisierung abzuschließen: https://docs.nocobase.com/en/ai/ai-quick-start.md Bitte öffne und lies den Link direkt.
```

#### Ein System entwerfen

```text
Hilf mir, mit der nocobase-dsl-reconciler-Fähigkeit ein Ticket-Management-System zu erstellen, einschließlich eines Dashboards, einer Ticketliste, Benutzerverwaltung und SLA-Konfiguration.
```

#### Tatsächliches Ergebnis

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-1klco2.png)

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-fhuwo3.png)

### Verwandte Ressourcen

Sie können diese Links kopieren und zur direkten Verwendung an Codex senden.

Dokumentation: [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

## 2. Refine

Offizielle Website: [https://refine.dev/](https://refine.dev/)

GitHub: [https://github.com/refinedev/refine](https://github.com/refinedev/refine)

GitHub Stars: 34,7k

![Refine1.png](https://static-docs.nocobase.com/Refine1-8qgxcz.png)

Refine ist ein Open-Source-React-Framework für Entwickler. Es wird hauptsächlich verwendet, um interne Tools, Admin-Panels, Dashboards und B2B-Anwendungen zu erstellen. Es bietet Kernfunktionen wie Authentifizierung, Berechtigungssteuerung, Routing, Datenabruf, Zustandsverwaltung und Internationalisierung und eignet sich daher für die schnelle Erstellung von CRUD-lastigen Anwendungen.

Refine verstärkt auch seine Unterstützung für KI-Agenten-Szenarien. Es bietet einen Workflow, der für KI-generierte Anwendungen entwickelt wurde: Verbinden Sie sich mit einer bestehenden REST-API oder einem Supabase-Projekt, analysieren Sie die Backend-Struktur und erstellen Sie Blaupausen für KI-Agenten, damit die generierten Ergebnisse besser zu realen Datenmodellen passen.

Deshalb funktioniert Refine gut mit Codex. Codex muss nicht raten, wie ein internes Tool von Grund auf gebaut werden soll. Es kann Listenseiten, Detailseiten, Bearbeitungsseiten, Formulare, Filter, Berechtigungsprüfungen und API-Aufruflogik basierend auf der Projektstruktur, dem Ressourcenmodell und der Datenquellenkonfiguration von Refine generieren.

![Refine2.png](https://static-docs.nocobase.com/Refine2-jpcnwg.png)

Refine bietet auch eine CLI zum Erstellen von Ressourcen, Verwalten von Updates, Swizzeln von Komponenten und Ausführen von Projektaufgaben wie Build, Start und Dev. Für Coding-Agenten wie Codex sind diese klaren Befehlszeilen-Einstiegspunkte einfacher zu automatisieren und besser geeignet für die kontinuierliche Iteration in bestehenden Projekten.

### Was Sie mit Codex und Refine bauen können

Codex und Refine eignen sich besonders für die schnelle Entwicklung interner Admin-Oberflächen im React-Stack, wie CRM-Backends, Bestellverwaltungs-Backends, Betriebsprüfplattformen, Kundendienst-Arbeitsplätze, Datenverwaltungspanels und B2B-SaaS-Admin-Portale.

Wenn Sie beispielsweise ein Bestellverwaltungs-Backend erstellen möchten, kann Codex Bestelllisten, Bestelldetailseiten, Bearbeitungsformulare, Filter, Statusaktualisierungsschaltflächen und Berechtigungslogik basierend auf Datenstrukturen wie Bestellungen, Kunden, Produkten und Zahlungsstatus generieren. Refine bietet die grundlegende Struktur für React-Interne-Tools, während Codex die Entwicklung spezifischer Geschäftsseiten beschleunigt.

Dieses Setup ist besser für Entwickler geeignet, die die volle Kontrolle über den Code haben möchten. Das Endergebnis ist ein React-Projekt, keine Konfiguration, die in einer geschlossenen Plattform eingesperrt ist. Sie können Codex später weiterhin verwenden, um Komponenten zu ändern, Logik umzugestalten, neue APIs anzubinden oder Geschäftsmodule zu erweitern.

### Vorgeschlagener Prompt

```text
Hilf mir, ein Bestellverwaltungs-Backend basierend auf Refine zu erstellen, das eine REST-API als Datenquelle verwendet. Es sollte eine Bestellliste, Bestelldetails, ein Bestellbearbeitungsformular, Kundenfilter, Bestellstatusaktualisierungen und eine grundlegende Berechtigungssteuerung enthalten.
```

## 3. Payload CMS

Offizielle Website: [https://payloadcms.com/](https://payloadcms.com/)

GitHub: [https://github.com/payloadcms/payload](https://github.com/payloadcms/payload)

GitHub Stars: 42,5k

![Payload CMS1.png](https://static-docs.nocobase.com/Payload%20CMS1-9l7yh9.png)

Payload CMS ist ein Open-Source-Full-Stack-Next.js-Framework für den Aufbau von CMS, Admin-Panels, datengesteuerten Anwendungen und unternehmensinternen Tools. Es bietet TypeScript-Konfiguration, Datensammlungen, Berechtigungssteuerung, ein Admin-Panel, REST / GraphQL-APIs, Hooks, Plugins, Dateiverwaltung und mehr.

Payload definiert Datenmodelle und Geschäftslogik durch Code. Sie können Sammlungen, Felder, Zugriffskontrolle, Hooks und die Admin-Benutzeroberfläche in TypeScript konfigurieren und so das Backend, die API und die Admin-Oberfläche eines internen Tools in einer Codebasis halten.

Payload hat auch begonnen, KI-Agenten-Szenarien zu unterstützen. Die offizielle Dokumentation bietet ein MCP-Plugin, mit dem Entwickler steuern können, welche Sammlungen und Globals die KI für Operationen wie Finden, Erstellen, Aktualisieren und Löschen verwenden kann. Entwickler können auch ihre eigenen Prompts, Tools und Ressourcen definieren.

![Payload CMS2.png](https://static-docs.nocobase.com/Payload%20CMS2-jczl8t.png)

### Was Sie mit Codex und Payload bauen können

Codex und Payload eignen sich für die schnelle Entwicklung von TypeScript / Next.js-basierten Daten-Backends, Content-Management-Systemen, Kundenportalen, Bestell-Backends, Anlagenverwaltungssystemen und Betriebsverwaltungstools.

![Payload CMS3.png](https://static-docs.nocobase.com/Payload%20CMS3-lejqn0.png)

Wenn Sie beispielsweise ein Anlagenverwaltungs-Backend erstellen möchten, kann Codex Payload-Sammlungen, Feldkonfigurationen, Zugriffsberechtigungen und Hooks basierend auf Anforderungen wie Ausrüstung, Mitarbeiter, Abteilungen, Nutzungsaufzeichnungen, Wartungsaufzeichnungen und Genehmigungsstatus generieren. Payload stellt die Datenverwaltungsschnittstelle, APIs und die Durchsetzung von Berechtigungen bereit. Wenn Sie später weitere Geschäftslogik hinzufügen müssen, können Sie Codex weiterhin verwenden, um TypeScript-Konfigurationen und Erweiterungscode zu ändern.

### Vorgeschlagener Prompt

```text
Hilf mir, ein Anlagenverwaltungs-Backend basierend auf Payload CMS zu erstellen, einschließlich Sammlungen für Ausrüstung, Mitarbeiter, Abteilungen, Nutzungsaufzeichnungen und Wartungsaufzeichnungen. Konfiguriere auch grundlegende Felder, Zugriffsberechtigungen, Admin-Panel-Anzeigefelder und gängige Hooks.
```

## 4. Directus

Offizielle Website: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Stars: 35,7k

![Directus1.png](https://static-docs.nocobase.com/Directus1-7w23p8.png)

Directus ist eine Open-Source-Daten-Backend-Plattform, die SQL-Datenbanken wie PostgreSQL, MySQL, SQLite, MariaDB, MS SQL und OracleDB schnell in REST / GraphQL-APIs und ein visuelles Admin-Panel verwandeln kann. Es eignet sich für den Aufbau von Datenverwaltungs-Backends, Content-Management-Systemen, Betriebs-Backends, Kundendaten-Backends, internen API-Schichten und ähnlichen Projekten.

Directus ist besonders freundlich zu bestehenden Datenbanken. Viele interne Tools beginnen nicht bei Null. Eine Geschäftsdatenbank existiert möglicherweise bereits, aber dem Team fehlt noch ein nutzbares Admin-Panel, eine Berechtigungsverwaltung und eine API-Schicht. Directus kann sich direkt mit einer bestehenden SQL-Datenbank verbinden und darauf aufbauend Datenmodellverwaltung, Rollenberechtigungen, Dateiverwaltung, Automatisierungs-Workflows und Erweiterungsfunktionen bereitstellen.

Directus bietet bereits einen MCP-Server, der es KI-Tools wie Claude, ChatGPT und Cursor ermöglicht, eine Verbindung zu Directus herzustellen. Die KI kann Inhalte innerhalb des bestehenden Berechtigungssystems erstellen, bearbeiten und verwalten, ohne Daten an einen anderen Ort zu kopieren oder die Directus-Berechtigungssteuerungen zu umgehen.

![Directus2.png](https://static-docs.nocobase.com/Directus2-otlau7.png)

### Was Sie mit Codex und Directus bauen können

Codex und Directus eignen sich für die schnelle Erstellung interner Daten-Backends und API-Schichten auf Basis bestehender Datenbanken, wie Kundendatenverwaltung, Bestelldatenverwaltung, Content-Management, Produktkatalogverwaltung, Betriebskonfigurations-Backends und Datenprüfsysteme.

Der Wert dieser Kombination ist klar: Directus verbindet die Datenbank, generiert APIs, stellt das Admin-Panel bereit und übernimmt die Berechtigungen. Codex versteht Geschäftsanforderungen, entwirft Datenstrukturen, schreibt Erweiterungslogik, Hooks, benutzerdefinierte Endpunkte, Datenskripte und Frontend-Integrationscode.

Der Vorteil ist, dass Entwickler bestehende Datenbanken oder Backends nicht neu schreiben müssen. Directus stellt die Datenschicht und das Admin-Panel bereit, während Codex die Geschäftslogik und Erweiterungsentwicklung beschleunigt. Dies macht die Kombination geeignet für Teams, die bereits eine Datenbank haben, aber schnell interne Tool-Funktionen hinzufügen müssen.

### Vorgeschlagener Prompt

```text
Hilf mir, ein internes Admin-Panel für eine bestehende Bestelldatenbank basierend auf Directus zu entwerfen. Es sollte vier Datentypen enthalten: Bestellungen, Kunden, Produkte und Zahlungsaufzeichnungen. Konfiguriere auch grundlegende Berechtigungen, Listenansichten, Workflows zur Statusaktualisierung und einen Benachrichtigungs-Hook nach einer Änderung des Bestellstatus.
```

## 5. Supabase

Offizielle Website: [https://supabase.com/](https://supabase.com/)

GitHub: [https://github.com/supabase/supabase](https://github.com/supabase/supabase)

GitHub Stars: 103k

Supabase braucht wohl kaum eine Einführung.

Supabase bietet einen offiziellen Supabase MCP-Server, der es KI-Tools ermöglicht, eine Verbindung zu Supabase-Projekten herzustellen und diese im Rahmen der erlaubten Berechtigungen abzufragen oder zu bedienen. Supabase bietet auch Fähigkeiten für KI-Agenten, die Datenbanken, Auth, Edge Functions, Realtime, Storage, Vektoren, Cron, Warteschlangen, CLI, MCP, Schemaänderungen, Migrationen, RLS-Richtlinien, Sicherheitsaudits und mehr abdecken.

![Supabase1-rq907o.png](https://static-docs.nocobase.com/Supabase1-rq907o.png)

### Was kann man mit Codex und Supabase bauen?

Codex und Supabase eignen sich für die schnelle Erstellung der Backend-Schicht interner Tools. Supabase stellt die Datenbank, Authentifizierung, API, Speicher und Funktionslaufzeitumgebung bereit. Codex entwirft Schemata basierend auf Geschäftsanforderungen, schreibt SQL, konfiguriert RLS-Berechtigungen, generiert Edge Functions und hilft dem Frontend, Supabase-APIs aufzurufen.

Wenn Sie beispielsweise ein Kundenverwaltungs-Backend erstellen möchten, kann Codex Postgres-Tabellen, Feldbeziehungen, Indizes und RLS-Richtlinien basierend auf Anforderungen wie Kunden, Kontakte, Nachverfolgungsaufzeichnungen, Verkaufschancen, Verträge und Anhänge entwerfen. Supabase stellt die Datenbank, Authentifizierung, automatische APIs und die Durchsetzung von Berechtigungen bereit. Später, wenn Sie eine automatische Kundenverteilung, externe Datensynchronisation oder KI-Zusammenfassungsgenerierung benötigen, können Sie Codex weiterhin verwenden, um Edge Functions oder Datenbankfunktionen zu schreiben.

### Vorgeschlagener Prompt

```text
Hilf mir, das Backend für ein Kundenverwaltungssystem basierend auf Supabase zu entwerfen. Es sollte Tabellen für Kunden, Kontakte, Chancen, Verträge, follow_ups und Anhänge enthalten. Bitte generiere SQL-Migration, grundlegende Indizes, RLS-Richtlinien, Authentifizierungs- und Berechtigungsdesign sowie eine Edge Function zur automatischen Zuweisung von Vertriebsmitarbeitern.
```

## 6. Windmill

Offizielle Website: [https://www.windmill.dev/](https://www.windmill.dev/)

GitHub: [https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)

GitHub Stars: 16,5k

Windmill ist eine Open-Source-Plattform für Entwickler. Sie kann schnell Skripte, die in Python, TypeScript, Go, Bash, SQL und anderen Sprachen geschrieben wurden, in APIs, Hintergrundaufgaben, Workflows und interne Apps verwandeln. Sie eignet sich für den Aufbau von Automatisierungs-Workflows, Datenverarbeitungsaufgaben, Betriebstools, Hintergrundaufgabenverwaltung, internen Skriptplattformen und leichten Admin-Oberflächen.

![Windmill1-kcvxsb.png](https://static-docs.nocobase.com/Windmill1-kcvxsb.png)

Mit seiner CLI und integrierten KI-Fähigkeiten können Entwickler Claude Code oder Codex lokal verwenden und dann über `wmill sync push` in einem entfernten Arbeitsbereich bereitstellen. In diesem Setup schreibt Codex Skripte und Workflow-Logik, während Windmill die Ausführung, Planung, Berechtigungen, Protokolle und visuelle Bedienoberflächen übernimmt.

### Was Sie mit Codex und Windmill bauen können

Codex und Windmill eignen sich besonders, um von Entwicklern geschriebene Skripte in interne Tools zu verwandeln, die das gesamte Team nutzen kann. Beispiele hierfür sind Datensynchronisation, Berichtsgenerierung, Stapelimport und -export, Webhook-Verarbeitung, geplante Aufgaben, Kundendatenbereinigung, Bestellstatus-Synchronisation, Slack / E-Mail-Benachrichtigungen und KI-Datenverarbeitungs-Workflows.

Wenn Sie beispielsweise einen internen Workflow erstellen möchten, der jede Nacht CRM-Kundendaten synchronisiert und einen Ausnahmebericht generiert, kann Codex beim Schreiben von Skripten zum Lesen, Bereinigen, Vergleichen und Melden von Daten helfen. Windmill kann den Workflow als geplante Aufgabe konfigurieren, Ausführungsprotokolle aufzeichnen und eine interne Seite bereitstellen, auf der das Team den Workflow manuell auslösen oder die Ergebnisse anzeigen kann.

### Vorgeschlagener Prompt

```text
Hilf mir, einen Kundendatensynchronisations-Workflow basierend auf Windmill zu erstellen: Lese jede Nacht Kundendaten aus PostgreSQL, bereinige doppelte Datensätze, identifiziere abnormale E-Mails, generiere einen Ausnahmebericht und benachrichtige das Betriebsteam über Slack. Bitte schreibe das Skript in TypeScript und erkläre, wie die geplante Aufgabe und die Eingabeparameter konfiguriert werden.
```

## Abschließende Gedanken

KI-Coding-Agenten wie Codex verändern die Art und Weise, wie Entwickler interne Tools erstellen.

NocoBase, Refine, Payload, Directus, Supabase und Windmill bieten jeweils aus verschiedenen Blickwinkeln eine klarere technische Grundlage, darunter Geschäftssysteme, Frontend-Frameworks, Daten-Backends, Backend-Dienste und Skriptautomatisierung.

Der Wert von Codex liegt darin, dass es die Entwicklungseffizienz auf diesen Grundlagen verbessert: Es hilft Ihnen, Anforderungen aufzuschlüsseln, Code zu generieren, Ressourcen zu konfigurieren, Skripte zu schreiben, Workflows zu entwerfen, Integrationen zu handhaben und Probleme zu beheben.

Ein besserer Entwicklungsansatz ist:

> Wählen Sie zuerst die richtige Open-Source-Infrastruktur aus und lassen Sie dann Codex die spezifische Implementierung innerhalb einer klaren Struktur durchführen.

So erstellte interne Tools sind einfacher zu warten, zu erweitern und tatsächlich zu nutzen.

**Verwandte Lektüre**

* [Nach Claude Code: 6 Open-Source-Tools, die Sie kennen sollten](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 Open-Source-KI- und No-Code-Tools für die Unternehmenssoftwareentwicklung](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Open-Source-KI-Agentenplattformen für den Bau interner Tools](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [Die besten unternehmenstauglichen, selbst gehosteten CRMs mit RBAC, KI und Open-API-Unterstützung](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 beste Open-Source-Tools zur Ablösung benutzerdefinierter Integrations-Middleware](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Excel durch NocoBase oder Airtable ersetzen? Ein Kostenvergleich](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Möglichkeiten, schnell Web-Apps aus Excel-Daten zu erstellen](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Nicht nur PostgreSQL: Vergleich von 5 No-Code/Low-Code-Plattformen mit Unterstützung für externe Datenbanken](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Open-Source-Projektmanagement-Tool-Auswahlleitfaden, Ausgabe 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [So erstellen Sie ein benutzerdefiniertes CRM mit PostgreSQL](https://www.nocobase.com/en/blog/how-to-build-a-custom-crm-with-postgresql)
* [Top 20 KI-Projekte auf GitHub, die Sie 2026 im Auge behalten sollten: Nicht nur OpenClaw](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)
