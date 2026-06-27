---
title: "NocoBase als technologische Grundlage von ED: Von internen Systemen zu kommerziellen Produkten"
description: "ED baute seine technologische Grundlage auf NocoBase auf, verkürzte die Lieferzyklen um ein Drittel, beschleunigte Tests und Markteinführungen und sorgte für mehr Stabilität sowohl bei internen Systemen als auch bei kommerziellen Produkten."
---

## **Einleitung**

> Ein unterhaltsamer Fakt aus unserer Reise: In unserem Pre-Sales-Prozess kombinieren wir NocoBase oft mit KI, um Proof-of-Concepts in Rekordzeit zu liefern. Kunden sind häufig überrascht, wenn sie nach einem Treffen am Montag bereits am Mittwoch einen voll funktionsfähigen Prototypen sehen. Die übliche Reaktion ist: *"Was ist der Zauber?"* Wenn wir NocoBase enthüllen, sorgt das immer für einen Moment der Überraschung – und Neugier.
>
> **—— Fabio Farzat, CEO von ED**

## **Über ED**

[ED](https://ed.dev.br/) ist ein brasilianisches Technologieunternehmen mit **mehr als 130 Fachkräften in 16 Bundesstaaten**. Seit Jahren liefert und unterstützt das Team geschäftskritische Systeme für große Unternehmen in den Bereichen Versicherungen, Kapitalmärkte, Versorgungswirtschaft und öffentlicher Sektor.

![ED.png](https://static-docs.nocobase.com/ED-nvmw2z.png)

Auf der Lieferseite besitzt ED die **ISO 9001**-Zertifizierung (für Software-, Projekt- und Infrastrukturmanagementprozesse) und hat **CMMI-DEV Level 3** erreicht, was international anerkannte Standards und nachhaltige Engineering-Reife widerspiegelt.

Organisatorisch wurde ED vier Jahre in Folge unter den Top 10 der "Great Place to Work"-Liste Brasiliens geführt – mit dem Höhepunkt auf Platz 1 und derzeit auf Platz 6. Diese Auszeichnung unterstreicht die Fähigkeit von ED, Top-Talente anzuziehen und zu halten, was Professionalität und Stabilität in jedem Projekt gewährleistet.

Mit seiner Größe, strengen Qualitätssystemen und einem breiten Kundenstamm gilt ED als führender Anbieter von Unternehmens-Technologiedienstleistungen in Brasilien. Heute beschleunigt das Unternehmen seine Bemühungen im Bereich **moderne Plattformen und KI-gesteuerte Lösungen**, um Kunden auf die Zukunft vorzubereiten.

## **Herausforderungen und Entscheidung**

Im täglichen Projektgeschäft stand das ED-Engineering-Team immer wieder vor der gleichen Herausforderung: **endlose Zyklen von CRUD- und Integrationsentwicklung**. Ob für interne Systeme oder kundenorientierte Projekte – sie mussten schnell Datenverwaltungsebenen aufbauen, APIs generieren, Import/Export handhaben und dennoch Sicherheit und Skalierbarkeit gewährleisten. Jedes Mal bedeutete dies, bei Null anzufangen – was erhebliche Zeit und Ressourcen verschlang und letztlich Innovationen verlangsamte.

Um aus diesem Kreislauf auszubrechen, erstellte ED **eine Checkliste mit Anforderungen auf Unternehmensebene**:

* **Sicherheit** — Zugriffskontrolle, Datenisolierung, Compliance-Sicherstellung
* **Leistung** — schnelle Antwortzeiten auch bei großen Datensätzen
* **Skalierbarkeit** — flexible Anpassung an verschiedene Projekte und Kundenumgebungen
* **Beobachtbarkeit** — transparente Abläufe für Überwachung und Fehlerbehebung

![checklist.png](https://static-docs.nocobase.com/checklist-o8ncyd.png)

Was sie brauchten, war mehr als nur ein Tool zum Ziehen von Tabellen. Sie suchten nach einer Plattform, die vollständige Datenmodelle unterstützen, starke Typen und relationale Strukturen erzwingen und automatisch APIs generieren konnte.

Nach der Bewertung mehrerer Marktlösungen entschied sich ED letztendlich für **NocoBase**. Interne Proof-of-Concepts zeigten, dass NocoBase nicht nur jeden Punkt ihrer Checkliste erfüllte, sondern in der Praxis auch eine größere Flexibilität und Effizienz bot.

## **Implementierungsszenarien**

Nach Abschluss des Proof-of-Concepts führte ED NocoBase schnell in seine Kern-Geschäftssysteme ein und erweiterte es schrittweise auf mehrere Szenarien.

### **Szenario 1: Kommerzielles Produkt – [AssistFlow](https://assistflow.com.br/)**

Im Gegensatz zu den meisten Unternehmen, die NocoBase nur für interne Systeme nutzen, baute ED direkt darauf eine externe kommerzielle Plattform auf – **[AssistFlow](https://assistflow.com.br/)**. AssistFlow ermöglicht es Unternehmen, schnell intelligente Agenten zu erstellen, die nahtlos über mehrere Social-Media-Kanäle hinweg arbeiten und multimodale Interaktionen mit Text, Sprache, Bildern und Dateien unterstützen. Über den Kundenservice hinaus erstreckt es sich auch auf Vertrieb, Personalwesen, technischen Support und mehr.

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow-e60x5d.png)

In diesem kommerziellen Produkt werden das gesamte Konfigurationsmodul und die Verwaltungsoberfläche von NocoBase betrieben. Das bedeutet, dass das Team keine Frontend-Logik neu entwickeln muss; stattdessen können sie direkt in NocoBase modellieren und konfigurieren, um Kunden flexible und skalierbare Verwaltungsfunktionen zu bieten.

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow2-vd4e8i.png)

**AssistFlow-Highlights:**

* **Schnelle Einrichtung** — Erstellen und starten Sie einen intelligenten Agenten in nur 5 Minuten, ohne Programmierkenntnisse
* **Multi-Channel-Integration** — Unterstützt WhatsApp, Teams, Slack, Telegram, Facebook, Instagram, LinkedIn und mehr
* **Multimodale Interaktion** — Verarbeitet Text, Sprache, Bilder und Dateien, um vielfältige Geschäftsanforderungen zu erfüllen
* **Breite Anwendbarkeit** — Deckt Kundenservice, Vertrieb, Marketing, Personalwesen und technischen Support ab
* **Automatisierung und Integration** — Integrierte APIs ermöglichen nahtlose Verbindungen mit bestehenden Systemen und optimieren Arbeitsabläufe
* **Sicher und kontrollierbar** — Unterstützt Private-Cloud-Bereitstellung zur Erfüllung von Sicherheits- und Compliance-Anforderungen auf Unternehmensebene

### **Szenario 2: Projektmanagement-Plattform**

Entwickelt zur Unterstützung des gesamten Lebenszyklus von ED-Kundenlieferprojekten. Aufgaben, die zuvor mehrere Entwicklungsrunden erforderten – wie CRUD-Operationen und Berechtigungslogik – können nun in einem einzigen Schritt durch einfaches Datenmodellieren, Frontend-Konfiguration und automatisch generierte APIs erledigt werden.

![Projektmanagement-Plattform](https://static-docs.nocobase.com/Project%20Management%20Platform-o3heh6.png)

### **Szenario 3: Ticket-System**

Ein externes Support- und Serviceanfragesystem, das vollständig von der Datenebene und Oberfläche von NocoBase betrieben wird. Kunden können Tickets direkt einreichen und verfolgen, während Backend-Workflows automatisch ausgelöst werden, um jede Anfrage zu bearbeiten.

![Ticket-System](https://static-docs.nocobase.com/Ticketing%20System-a9un8k.png)

### **Szenario 4: Lieferantenmanagementsystem**

In diesem System können Lieferanten Rechnungen hochladen, die automatisch Zahlungsgenehmigungs-Workflows auslösen. Mit den Datenmodellierungs- und Workflow-Funktionen von NocoBase wird der gesamte Prozess automatisiert und ist vollständig nachvollziehbar.

## **Ergebnisse**

Mit NocoBase erzielte ED signifikante Verbesserungen sowohl bei der Liefergeschwindigkeit als auch bei der Qualität:

* **Kürzere Lieferzyklen** — Module, die zuvor 2–3 Iterationen von jeweils 15 Tagen erforderten, können nun in einer einzigen Iteration abgeschlossen werden
* **Schnelleres Testen und Einführen** — Die meisten Funktionen erfordern nur direkte Funktionstests, ohne die komplexen Schichten, die für die traditionelle Entwicklung typisch sind
* **Größere Produktionsstabilität** — Reibungslosere Einführungen und stärkeres Teamvertrauen

Ingenieure bei ED sind der Meinung, dass NocoBase die Art und Weise, wie sie bauen, verändert hat. Visuelles Modellieren, automatisiertes CRUD, flexible Workflows und automatisch generierte APIs haben Entwickler von repetitiver Arbeit befreit und ihnen ermöglicht, sich direkt auf Geschäftsergebnisse zu konzentrieren. Die Feedbackschleifen von QA und Benutzern sind viel kürzer geworden, sodass Projekte schneller in die Produktion gehen können.

Heute ist NocoBase das technologische Rückgrat von ED: Es betreibt interne Systeme, bildet die Grundlage externer kommerzieller Produkte und unterstützt nahezu die gesamte tägliche Liefertätigkeit. Noch wichtiger ist, dass diese "Montagstreffen, Mittwochs-Prototyp"-Magie nicht nur der Ausgangspunkt für Überraschung und Vertrauen der Kunden ist – sie repräsentiert auch ein neues Paradigma der Lieferung.

## **Ausblick**

Für Technologieteams weltweit zeigt die Erfahrung von ED, dass NocoBase nicht nur die Anforderungen auf Unternehmensebene erfüllt – Sicherheit, Leistung, Skalierbarkeit und Beobachtbarkeit –, sondern auch schnellere Iterationen ermöglicht und den Fokus von repetitiven Aufgaben auf Innovation und Wertschöpfung verlagert.

In Brasilien hat ED sein Liefermodell bereits mit NocoBase neu gestaltet. Als nächstes wollen sie diesen Ansatz gemeinsam mit NocoBase in weitere Branchen und Organisationen bringen.

**Weitere Kundenberichte:**

* [Sub-Second Response at Scale: Classact Runs NocoBase on Kubernetes](https://www.nocobase.com/en/blog/classact)
* [BIEL Crystal’s Digital Factory: Powering 1.85 Billion Units a Year](https://www.nocobase.com/en/blog/bielcrystal)
* [How Distinct HealthCare Uses NocoBase to Build a Personalized, Long-Term Care System](https://www.nocobase.com/en/blog/distinct-healthcare)
* [A No-Code Journey Inside SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [What made Japan’s leading real estate firm switch from Salesforce to open-source NocoBase?](https://www.nocobase.com/en/blog/century-21)
* [How Second-Brain built an AI system for financial institutions with NocoBase](https://www.nocobase.com/en/blog/second-brain)
