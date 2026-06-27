---
title: "Sub-Sekunden-Antwort bei Skalierung: Classact betreibt NocoBase auf Kubernetes"
description: "Classact hat NocoBase auf Kubernetes bereitgestellt und erreicht Sub-Sekunden-Antwortzeiten für Hunderttausende von Datensätzen, die HR- und Compliance-Management abdecken, und steigert so die Effizienz und Benutzererfahrung erheblich."
---

## **Über Classact**

Die [Classact Co., Ltd](https://www.classact.co.jp/). ist ein IT-Infrastrukturdienstleister, der technischen Support und Engineer-Staffing anbietet. Sie gehört zu den ersten Unternehmen in Japan, die die Proxmox Gold Partner-Zertifizierung erhalten haben, und verfügt über umfangreiche Erfahrung in den Bereichen Virtualisierung und Rechenzentren. Während Classact seinen Kunden hochverfügbare IT-Lösungen liefert, arbeitet das Unternehmen auch kontinuierlich daran, seine eigenen internen Systeme und Prozesse zu optimieren, um Betriebseffizienz und Compliance zu gewährleisten.

Wie viele Unternehmen gehen auch bei Classact die digitalen Anforderungen über die technischen Teams hinaus. Abteilungen wie Verwaltung, Personalwesen und Vertrieb benötigen zuverlässige Systeme für die Verwaltung von Rekrutierung, Mitarbeiterabläufen, Schulungen und der Einhaltung von Informationssicherheitsstandards.

![company.png](https://static-docs.nocobase.com/1-ifaq7k.png)

## **Herausforderungen und Anforderungen**

Vor der Einführung von NocoBase verließ sich Classact hauptsächlich auf das Open-Source-Tool Exment für die interne Datenbankverwaltung.

![exment.PNG](https://static-docs.nocobase.com/2-x35h8j.PNG)

Mit zunehmendem Geschäftsumfang und wachsenden Datenmengen begannen jedoch die Leistungsprobleme von Exment den täglichen Betrieb zu beeinträchtigen:

* **Langsame Seitenladezeiten**: Bei großen Datensätzen konnte das Laden einer einzelnen Seite 5–10 Sekunden dauern, was Arbeitsabläufe erheblich verlangsamte.
* **Schlechte Benutzererfahrung**: Lange Wartezeiten führten zu häufigen Beschwerden der Mitarbeiter und einer geringeren Bereitschaft, das System zu nutzen.
* **Begrenzte Skalierbarkeit**: Dem System fehlte die Flexibilität, um wachsenden Geschäftsanforderungen gerecht zu werden oder neue Anwendungsszenarien zu unterstützen.

Gleichzeitig experimentierten verschiedene Teams mit anderen Tools. Einige führten ClickUp für das Aufgabenmanagement ein, während Classact auch Airtable und NocoDB evaluierte.

Durch diese Erkundung präzisierte Classact seine Anforderungen an eine neue Lösung:

* **Hohe Leistung**: Verarbeitung von Hunderttausenden von Datensätzen bei gleichzeitig schnellen Antwortzeiten.
* **Flexibilität**: Ermöglicht es den Abteilungen, Anwendungen schnell an ihre spezifischen Bedürfnisse anzupassen.
* **Unternehmenskontrolle**: Unterstützung von selbst gehosteten und privaten Bereitstellungen, die die vollständige Kontrolle über die Daten gewährleisten.

Diese Anforderungen führten Classact letztendlich dazu, NocoBase als die am besten geeignete Lösung auszuwählen.

## **Bereitstellung und Validierung**

Vor dem Live-Gang testete Classact NocoBase zunächst in einer Staging-Umgebung. Das Team importierte Hunderttausende von Datensätzen, um reale Geschäftsszenarien zu simulieren, wobei der Fokus auf der Abfrage- und Seitenladeleistung lag. Die Ergebnisse zeigten, dass NocoBase auch bei großen Datensätzen eine stabile Leistung beibehielt und die Erwartungen voll erfüllte.

Basierend auf dieser Validierung stellte das Unternehmen NocoBase auf seinem selbstverwalteten Kubernetes-Cluster bereit, um eine unternehmensgerechte Stabilität zu gewährleisten. Das technische Team kaufte außerdem mehrere Plugins, was die Anwendungsentwicklung beschleunigte und die schnelle Einführung von Mitarbeiterbetriebs- und Schulungsmanagementsystemen ermöglichte, die zuvor ins Stocken geraten waren.

Dieser Ansatz der Bereitstellung und Validierung bestätigte nicht nur die Zuverlässigkeit von NocoBase in Bezug auf Leistung und Skalierbarkeit, sondern ermöglichte Classact auch eine Migration mit minimalem Risiko und einen schnellen Fortschritt der internen digitalen Transformation.

## **Anwendungsabdeckung**

Nach der Bereitstellung baute und startete Classact schnell eine Reihe von Anwendungen, um verschiedene Aspekte des internen Betriebs zu unterstützen. Diese Anwendungen deckten gängige Geschäftsprozesse wie Personalwesen, Mitarbeiterservices und Anlagenverwaltung ab, sowie speziellere Bereiche wie ISMS-Compliance und Mentoring-Programme.

![nocobase](https://static-docs.nocobase.com/3-z5vksi.PNG)

![nocobase.PNG](https://static-docs.nocobase.com/4-g1sz0z.PNG)

* **Personalverwaltung**

Mitarbeiterdatenpflege, Schulungsberichte und -benachrichtigungen, Rekrutierungsaktivitäten (Interviewaufzeichnungen und -benachrichtigungen), Rollen- und Positionszuweisungen, Mitarbeitervertreterwahlen und Nachverfolgung von Berufszertifikaten.

* **Mitarbeiterservices**

Informationsaktualisierungen (z. B. Adresse oder Pendelroute), Leistungsanträge, Spesenabrechnungen, Geräte- und Buchkäufe, Visitenkartenanfragen, medizinische Konsultationen und Meldungen zu Feierlichkeiten oder Trauerfällen.

* **Anlagen- und Aufgabenmanagement**

Verwaltung interner Systeme und Gerätebestände sowie tägliche Aufgabenverfolgung.

* **Lernen und Entwicklung**

E-Learning-Lizenzverwaltung, Mentoring-Programm-Management und Berichterstattung zur Unterstützung der kontinuierlichen Mitarbeiterentwicklung.

* **Informationssicherheit und Compliance**

ISMS-Betriebsmanagement zur Erfüllung von Informationssicherheitsstandards.

* **Datenerfassung und Engagement**

Öffentliche Formulare zur Erfassung von Kandidateninformationen, Mitarbeiterumfragen und internem Feedback.

Die meisten Unternehmenssysteme decken nur ein einziges Szenario ab, was Organisationen dazu zwingt, sich auf mehrere Tools zu verlassen, um verschiedene Prozesse parallel zu verwalten. **NocoBase durchbricht diese Einschränkung und ermöglicht es Classact, Anwendungen innerhalb einer einzigen Plattform frei zu erstellen und zu kombinieren.**

Mit diesem Ansatz hat Classact eine integrierte interne Managementplattform geschaffen, die auf seine Bedürfnisse zugeschnitten ist und eine weitaus größere Flexibilität bietet als traditionelle Lösungen.

## **Ergebnisse**

Durch die Einführung von NocoBase erzielte Classact signifikante Verbesserungen sowohl bei der Leistung als auch bei der Benutzererfahrung:

* **Leistungsoptimierung**: Die Seitenladezeiten sanken von 5–10 Sekunden auf nur 1–2 Sekunden, was die tägliche Effizienz erheblich steigerte.
* **Höhere Benutzerzufriedenheit**: Reduzierte Wartezeiten verringerten Frustration und Widerstand, was zu durchweg positivem Mitarbeiterfeedback führte.
* **Visualisierung**: Diagramme, flexible Filter und Anzeigeoptionen machten die Datenanalyse wesentlich intuitiver.
* **Prozessoptimierung**: Workflow-Funktionen vereinfachten komplexe Geschäftsprozesse noch weiter.

Classact teilte auch positives Feedback zu seinen Erfahrungen mit NocoBase:

> *„Was wir an NocoBase am meisten schätzen, ist seine Stabilität und Skalierbarkeit. Selbst mit großen Datensätzen liefert es konstant eine stabile Leistung. Die Diagrammfunktionen bieten uns intuitive Datenvisualisierungen, das LDAP-Plugin ermöglicht eine nahtlose Integration mit Active Directory, öffentliche Formulare erleichtern die Erfassung von Kandidaten- und Mitarbeiterdaten, und die Workflow-Funktionen haben unsere internen Prozesse erheblich optimiert.“*  — **Hidetoshi Honma, CEO von Classact**

## **Fazit**

Die Erfahrung von Classact zeigt, dass NocoBase nicht nur sub-Sekunden-Antwortzeiten bei Datensätzen im sechsstelligen Bereich liefert, sondern durch die Kubernetes-Bereitstellung und seine Plugin-Architektur auch komplexe, abteilungsübergreifende und multiprozessuale Anforderungen auf einer einzigen Plattform unterstützt.

Im Gegensatz zu traditionellen, isolierten Systemen bietet NocoBase eine modellgetriebene, erweiterbare und zusammensetzbare Architektur. Dies ermöglicht es Unternehmen, ihre internen Systeme zu geringeren Kosten kontinuierlich weiterzuentwickeln und gleichzeitig Raum für zukünftige Erweiterungen zu lassen.

**Weitere Kundenberichte:**

* [BIEL Crystal’s Digital Factory: Powering 1.85 Billion Units a Year](https://www.nocobase.com/en/blog/bielcrystal)
* [How Distinct HealthCare Uses NocoBase to Build a Personalized, Long-Term Care System](https://www.nocobase.com/en/blog/distinct-healthcare)
* [A No-Code Journey Inside SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [What made Japan’s leading real estate firm switch from Salesforce to open-source NocoBase?](https://www.nocobase.com/en/blog/century-21)
* [How Second-Brain built an AI system for financial institutions with NocoBase](https://www.nocobase.com/en/blog/second-brain)
* [How the No.1 AI Voice Recorder Brand Built Its Internal Systems](https://www.nocobase.com/en/blog/plaud)
