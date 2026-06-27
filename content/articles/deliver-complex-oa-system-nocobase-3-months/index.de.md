---
title: "Wie man mit NocoBase in 3 Monaten ein komplexes OA-System ausliefert"
description: "Ein Team lieferte mit NocoBase in nur 3 Monaten ein komplexes OA-System aus, das Module für Finanzen, Verwaltung und Budgetverwaltung umfasst, und erreichte eine Zeitersparnis von 75 % bei gleichzeitiger Erforschung der KI-Integration."
---

**Vertraulichkeitshinweis**

Zum Schutz der Privatsphäre und Sicherheit der Organisation und ihrer Kunden wird diese Fallstudie anonym präsentiert. Alle Details basieren auf einer realen Implementierung.

## Kontext & Rahmenbedingungen

Das Projekt wurde von einem Team geleitet, das Erfahrung mit Unternehmensmanagementsystemen und prozessintensiven Branchen wie der Petrochemie hatte. Sie waren mit Umgebungen vertraut, in denen Anforderungen komplex, sich ständig weiterentwickelnd und betriebliche Einschränkungen streng sind.

Bisher verließen sie sich auf traditionelle kundenspezifische Entwicklung. Ein Projekt ähnlichen Umfangs würde normalerweise fast ein Jahr von der Anforderungsanalyse bis zur Auslieferung dauern.

---

💬 Hey, du liest den NocoBase-Blog. NocoBase ist die erweiterbarste KI-gestützte No-Code/Low-Code-Entwicklungsplattform für den Bau von Unternehmensanwendungen, internen Tools und allen Arten von Systemen. Sie ist vollständig selbst gehostet, plugin-basiert und entwicklerfreundlich. →[ NocoBase auf GitHub erkunden](https://github.com/nocobase/nocobase)

---

Dieses Mal brachte der Kunde eine Reihe von nicht verhandelbaren Einschränkungen mit:

* **Netzwerkisolation**: Das System musste vollständig innerhalb eines internen Netzwerks laufen, physisch vom Internet getrennt
* **Datensouveränität**: Alle Daten müssen vollständig unter der Kontrolle der Organisation bleiben
* **Bereitstellungsmodell**: Nur selbst gehostete / On-Premise-Bereitstellung war akzeptabel

Gleichzeitig musste das System dennoch komplexe Workflows, große Datenmengen und die Integration mit bestehenden Systemen unterstützen.

Das Team brauchte eine Grundlage, die strenge Sicherheitsanforderungen erfüllen und gleichzeitig **schnelle Auslieferung, kontinuierliche Iteration und langfristige Erweiterbarkeit** ermöglichen konnte.

Sie wählten **NocoBase**.

## Lösung & Implementierung

### 1. Digitalisierung administrativer und finanzieller Workflows

Die erste Phase konzentrierte sich auf die kritischsten und am häufigsten genutzten Szenarien: administrative und finanzielle Prozesse.

Bisher basierten diese Prozesse stark auf Papierformularen und manueller Weiterleitung. Das Team migrierte sie schrittweise in ein einheitliches System.

Sie bauten fast **60 Module** auf, die den täglichen Verwaltungsbetrieb abdecken.

Dies war keine einfache „Formular-Digitalisierung“. Stattdessen restrukturierte das Team die Workflows:

* Abhängigkeiten zwischen Prozessen wurden abgebildet
* implizite Offline-Regeln wurden in explizite Systemlogik umgewandelt
* manuelle Entscheidungsfindung wurde in konfigurierbare Geschäftsregeln transformiert
* bereichsübergreifende Kollaborationspfade wurden geklärt

Mit den Datenmodellierungs- und Workflow-Fähigkeiten von NocoBase wurden diese komplexen Prozesse in einen stabilen, systemgesteuerten Betrieb verwandelt.

### 2. Einbettung der Budgetkontrolle in Workflows

Bisher wurde das Budgetmanagement in Excel abgewickelt, über Abteilungen hinweg fragmentiert und erst nach der Ausgabe überprüft.

Das Team gestaltete dies neu, indem es die Budgetlogik direkt in Geschäftsprozesse wie Reisen, Genehmigungen und Erstattungen einbettete.

Nach der Implementierung:

* **Führungskräfte** erhielten Echtzeit-Einblick in die gesamte Budgetausführung
* **Abteilungsleiter** konnten die Nutzung dynamisch verfolgen
* **Mitarbeiter** konnten Budgetlimits zum Zeitpunkt der Antragstellung validieren

Das Budgetmanagement verlagerte sich von der **nachträglichen Berichterstattung** hin zu:

* Vorabkontrolle
* prozessbegleitender Durchsetzung
* Echtzeit-Validierung

Dies wurde durch die Fähigkeit von NocoBase ermöglicht, Geschäftslogik direkt in Workflows zu integrieren.

### 3. Automatisierung der Finanzintegration mit ERP

Für Erstattungs- und Finanzprozesse integrierte das Team das System über benutzerdefinierte Plugins mit **Yonyou ERP**.

Mithilfe einer integrierten Transformations-Engine konvertierte das System automatisch Geschäftsdaten (Reiseanträge, Darlehen, Steuerdaten usw.) in Finanzdatensätze, die mit den ERP-Anforderungen kompatibel waren.

Die Engine verarbeitete komplexe Buchhaltungslogik, einschließlich:

* Umsatzsteueraufteilung
* Verrechnung von Mitarbeiterschulden
* abteilungsspezifische Kontenzuordnung

Nach der Verarbeitung wurden Finanzbelege automatisch generiert und in das Hauptbuch übertragen.

Dies ersetzte die manuelle Eingabe von etwa **1.400 Finanzdatensätzen pro Monat**.

Die größte Herausforderung war nicht die API-Integration selbst, sondern die Strukturierung der Geschäftslogik.

Mithilfe der [Datenmodelle](https://docs.nocobase.com/data-sources) und der [Plugin-Architektur](https://docs.nocobase.com/plugins/) von NocoBase verwandelte das Team manuelle Buchhaltungsregeln in systemseitige Logik und ermöglichte so eine stabile End-to-End-Automatisierung.

### 4. Systemintegration & einheitliche Identität

Um die zukünftige Systemerweiterung zu unterstützen, richtete das Team zunächst ein einheitliches [Identitätssystem](https://docs.nocobase.com/auth-verification/auth/) ein:

* Integration mit bestehenden Authentifizierungsdiensten
* Nutzung von NocoBase als zentrale Benutzerverwaltungsebene
* Sicherstellung der Konsistenz von Benutzerdaten über Systeme hinweg

Für die Kommunikation wurde ein privates IM-System eingeführt:

* Genehmigungs- und Aufgabenbenachrichtigungen wurden direkt an das IM gesendet
* Benutzer konnten auf Aufgaben zugreifen, ohne sich wiederholt im System anmelden zu müssen
* Ein-Klick-Navigation von der Nachricht zur Genehmigungsseite

Dies reduzierte die Reaktionszeit erheblich und verbesserte die betriebliche Effizienz.

### 5. Iteration in einer luftgekapselten Umgebung

Das Projekt wurde in einer vollständig isolierten Umgebung bereitgestellt.

Um die Entwicklungseffizienz aufrechtzuerhalten, verfolgte das Team einen hybriden Ansatz:

* Entwicklung und Tests wurden extern durchgeführt
* validierte Konfigurationen wurden im internen Netzwerk bereitgestellt

Mithilfe des Konfigurationsmigrationsmechanismus von NocoBase konnte das System als Ganzes bereitgestellt werden, ohne dass innerhalb der isolierten Umgebung wiederholt neu entwickelt werden musste.

Dies ermöglichte [wöchentliche oder sogar schnellere Iterationszyklen](https://docs.nocobase.com/ops-management/migration-manager/) trotz strenger Sicherheitsauflagen.

## Bereitstellungszeitplan

Das Projekt verlief wie folgt:

* **Anfang September**: Projektstart
* **Mitte Oktober**: Phase-1-Anforderungen finalisiert
* **Mitte November**: Erste Charge administrativer Module gestartet
* **Mitte Dezember**: Vollständiger Start der administrativen + finanziellen Systeme

Angesichts der Komplexität, des Integrationsumfangs und der Bereitstellungsbeschränkungen war diese Liefergeschwindigkeit deutlich schneller als bei typischen Unternehmensprojekten.

## Vorbereitung auf die KI-Integration

Nach der ersten Phase begann der Kunde, KI-Fähigkeiten zu erkunden:

* **Rechnungsautomatisierung**: OCR-basierte Erkennung und Compliance-Validierung
* **Wissensabruf**: Vektorisierung interner Dokumente und Aufbau einer privaten Wissensdatenbank

Das Team experimentiert derzeit mit der Integration von leichten privaten Modellen in NocoBase.

Mit der Plugin-Architektur und den KI-Fähigkeiten von NocoBase 2.0 kann KI schrittweise in bestehende Workflows und Datenstrukturen eingebettet werden, was sie in realen Geschäftsszenarien praktikabel macht.

## Ergebnis

Von der Anforderungsbestätigung bis zur vollständigen Einführung der administrativen und finanziellen Systeme wurde das gesamte Projekt in **3 Monaten** abgeschlossen, was einer **Reduzierung der Lieferzeit um 75 %** entspricht.

Dies senkte nicht nur die Entwicklungskosten, sondern ermöglichte dem Team auch die parallele Bearbeitung mehrerer komplexer Projekte.

Dieser Fall unterstreicht einen wichtigen Punkt:

In komplexen Unternehmensumgebungen hängt der Erfolg nicht nur von der Plattform ab, sondern auch von der Fähigkeit:

* komplexe Workflows zu strukturieren
* Systeme effektiv zu integrieren
* Geschäftslogik zu formalisieren

NocoBase bietet die Grundlage, die dies ermöglicht.

Es ermöglicht erfahrenen Teams, schneller zu liefern, sich kontinuierlich anzupassen und Systeme im Laufe der Zeit weiterzuentwickeln, selbst unter strengen Einschränkungen.

Das Team plant, dem [NocoBase-Partner-Ökosystem](https://www.nocobase.com/en/partner) beizutreten und dieses Bereitstellungsmodell auf weitere Unternehmensprojekte zu übertragen.

**Weitere Kundenberichte:**

* [Fallstudie: Digitalisierung von Workflows in der Medizintechnikfertigung mit NocoBase](https://www.nocobase.com/en/blog/medical-device-manufacturer-builds-self-hosted-management-system-with-nocobase)
* [Softwareanbieter steigert Liefereffizienz um 70 % mit NocoBase](https://www.nocobase.com/en/blog/software-vendor-boosts-delivery-efficiency-with-nocobase)
* [Community-Highlight: Aufbau eines echten ERP mit NocoBase](https://www.nocobase.com/en/blog/an-erp-built-with-nocobase)
* [Einblick: Wie ein 8-köpfiges Team mit Unternehmensgeschwindigkeit liefert](https://www.nocobase.com/en/blog/shenzhen-chuanglianyun-tech-development-methodology)
* [In wenigen Tagen eine KI-multimodale F&E-Plattform gebaut – mit NocoBase](https://www.nocobase.com/en/blog/ai-multimodal-platform)
* [NocoBase in Russland: Mehrszenarien-Digitallösungen in Aktion](https://www.nocobase.com/en/blog/nocobase-in-russia)
* [NocoBase hält Einzug in deutsche Universitätsklassenzimmer](https://www.nocobase.com/en/blog/university-course)
* [NocoBase als technologische Grundlage von ED: Von internen Systemen zu kommerziellen Produkten](https://www.nocobase.com/en/blog/ed)
