---
title: "KI-gestütztes Ticketing mit NocoBase 2.0"
description: "Eine erweiterbarere KI-Ticketing-Lösung, wenn Standardlösungen nicht ausreichen."
---

KI-gestütztes Ticketing, basierend auf NocoBase 2.0, bereit zum Einsatz und zur Erweiterung.

Einführung: [https://www.nocobase.com/en/solutions/ticketing-v2](https://www.nocobase.com/en/solutions/ticketing-v2)

Dokumentation: [https://v2.docs.nocobase.com/en/solution/ticket-system/](https://v2.docs.nocobase.com/en/solution/ticket-system/)

![ticketing.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(1)-x5nrzk.png)

## Entwickelt für Veränderung

In den Bereichen Kundensupport, IT-Betrieb, Gerätewartung und interne Service-Desk-Szenarien ist Ticketing ein grundlegender Bestandteil des Unternehmensbetriebs.

Dennoch stehen viele Teams in der Praxis vor denselben Herausforderungen:

* Ticketanfragen kommen von überall: Formulare, E-Mails und Kundenservice-Tools, die jeweils separat behandelt werden
* Die Klassifizierung und Zuweisung von Tickets erfolgt weitgehend manuell, was zu geringer Effizienz und häufigen Fehlern führt
* SLAs existieren auf dem Papier, sind aber in der Praxis schwer zu verfolgen und durchzusetzen
* Dieselben Probleme treten immer wieder auf, während Erfahrungen und Lösungen sich nicht ansammeln

**Ist es möglich, eine Ticketing-Lösung zu bauen, die schnell einsatzbereit ist und sich dennoch mit sich ändernden Geschäftsanforderungen weiterentwickeln kann?**

Dies ist das Kernproblem, das die **NocoBase KI-Ticketing-Lösung** lösen soll.

## Grenzen traditioneller Ticketing-Systeme

Basierend auf unserer Recherche entscheiden sich die meisten Teams letztendlich für eine der folgenden Optionen:

### SaaS-Ticketing

SaaS-Ticketing-Lösungen sind schnell einsatzbereit und bieten eine Vielzahl von Funktionen, aber ihre Grenzen sind klar:

* Begrenzte Flexibilität bei Workflow und Feldanpassung
* KI-Funktionen sind meist oberflächlich und nicht tief integriert
* Daten und Geschäftslogik sind nicht vollständig unter der Kontrolle des Teams
* Die Kosten steigen mit der Skalierung der Organisation kontinuierlich an

### Eigenentwicklung Ticketing

Dieser Ansatz scheint maximale Flexibilität zu bieten, aber in der Praxis:

* Die anfängliche Entwicklung dauert lange und erfordert erhebliche Investitionen
* Die laufende Wartung hängt vollständig von den ursprünglichen Entwicklern ab
* Jede Änderung des Workflows erfordert zusätzliche Entwicklungsarbeit
* Es ist schwierig, gesammelte Erfahrungen in ein wiederverwendbares, produktisiertes System zu überführen

## Designprinzipien

Unsere Positionierung ist eine erweiterbare, konfigurierbare und KI-native Ticketing-Architektur.

Das Ziel ist es, Unternehmen dabei zu helfen, flexible, skalierbare und vollständig selbst kontrollierte Ticketing-Systeme zu geringeren Kosten aufzubauen, sodass sich Systeme kontinuierlich an sich entwickelnde Geschäftsanforderungen anpassen können, anstatt durch starre Fähigkeiten eingeschränkt zu sein.

### Erweiterbares Datenmodell

Wir verwenden ein T-förmiges Datenmodell:

![T-förmiges Datenmodell.png](https://static-docs.nocobase.com/screenshot-20260108-130433-9gm35a.png)

* Ticket-Haupttabelle: verwaltet gemeinsame Fähigkeiten wie Status-Workflows, Bearbeiter, Prioritäten, SLAs und Kommunikationsverlauf
* Geschäftserweiterungstabellen: entwickelt für verschiedene Anwendungsfälle, darunter:
  * IT-Support-Tickets
  * Gerätewartungs-Tickets
  * Kundenbeschwerden und Feedback
  * Interne Verwaltungsanfragen

Dieses Design bringt mehrere entscheidende Vorteile:

* Neue Tickettypen können hinzugefügt werden, ohne den Kern-Workflow zu ändern
* Jedes Geschäftsszenario kann seine eigenen Felder und Seitenlayouts haben
* Die Kernlogik bleibt konsistent, wodurch die Erweiterungskosten extrem niedrig bleiben

Daher ist diese Lösung gut geeignet für Unternehmensumgebungen mit mehreren Abteilungen und Geschäftsbereichen.

### Einheitliche Ticket-Erfassung

In NocoBase können Tickets über mehrere Kanäle erstellt werden:

* Externe oder interne Formulare
* Automatisch geparste E-Mails
* APIs und Webhooks
* Manuelle Eingabe durch Kundensupport oder Betriebsteams

Das System standardisiert dann alles durch die Behandlung von:

* Quellenidentifikation
* Duplikaterkennung
* Grundlegende Datenanreicherung

Dadurch werden alle Anfragen in einen einzigen, einheitlichen Ticket-Workflow eingebracht, anstatt über verschiedene Tools und Systeme verstreut zu sein.

![E-Mails.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(3)-xzkr06.png)

### KI-gestützte Zuweisung

In NocoBase geht KI über automatisierte Antworten hinaus und spielt eine aktive Rolle im gesamten Ticketbearbeitungsprozess:

* Verstehen der Ticketabsicht und Dringlichkeit
* Bewertung der Priorität anhand von Regeln und historischen Daten
* Intelligente Zuweisung von Tickets basierend auf den Fähigkeiten der Teammitglieder und der aktuellen Arbeitsbelastung
* Bereitstellung von Antwortvorschlägen und relevantem Kontext für Agenten

KI ist nicht dazu gedacht, Menschen zu ersetzen. Ihr Zweck ist es, die Kosten manueller Entscheidungen zu senken, sodass sich Teams auf Entscheidungen konzentrieren können, die wirklich menschliches Eingreifen erfordern.

![KI.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(4)-q39am4.png)

### SLA

Ohne SLA-Durchsetzung wird Ticketing zwangsläufig zu nichts weiter als einer Aufgabenliste.

In dieser Lösung:

* Verschiedene Prioritäten (P0-P3) können mit unterschiedlichen SLA-Zielen konfiguriert werden
* Reaktionszeit und Lösungszeit werden automatisch verfolgt
* SLA-Verstöße lösen Benachrichtigungen oder Eskalations-Workflows aus
* SLA-Metriken können direkt für Berichte und Retrospektiven verwendet werden

![SLA.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(5)-04o2xf.png)

### Wissensdatenbank

Ein gut gestaltetes Ticketing entwickelt sich im Laufe der Zeit natürlich zu einem Wissenssystem.

In der NocoBase-Lösung:

* Ticketlösungsprozesse werden automatisch als Wissenseinträge erfasst
* Wenn neue Tickets erstellt werden, empfiehlt das System ähnliche Lösungen
* KI hilft bei der Erstellung von Zusammenfassungen, der Verfeinerung von Inhalten und der Unterstützung mehrerer Sprachen
* Diese Wissensdatenbank wiederum verbessert kontinuierlich die Effizienz der Ticketbearbeitung

![Wissensdatenbank.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(6)-bu5gpu.png)

Unterschiede zu traditionellen Lösungen


| Dimension           | Traditionelles SaaS-Ticketing | Eigenentwicklungssysteme | NocoBase Ticketing-Lösung |
| ------------------- | ----------------------------- | ------------------------ | ------------------------- |
| Zeit bis zum Start  | Schnell                       | Langsam                  | Schnell                   |
| Anpassbarkeit       | Begrenzt                      | Hoch                     | Hoch                      |
| Erweiterungskosten  | Hoch                          | Hoch                     | Niedrig                   |
| KI-Integration      | Einfach und als Add-on        | Erfordert Eigenentwicklung | Nativ und tief integriert |
| Daten und Bereitstellung | Teilweise kontrolliert   | Vollständig kontrolliert | Vollständig kontrolliert  |

## Installation und Nutzung

Bitte lesen Sie die Dokumentation und wählen Sie die Option, die am besten zu Ihrer NocoBase-Edition und Ihrem technischen Hintergrund passt.

[https://v2.docs.nocobase.com/cn/solution/ticket-system/installation](https://v2.docs.nocobase.com/cn/solution/ticket-system/installation?utm_source=chatgpt.com)

## Fahrplan

Die NocoBase-Ticketing-Lösung entwickelt sich noch weiter, und einige Funktionen sind in der aktuellen Version noch nicht vollständig verfügbar. Wir werden die Lösung basierend auf realen Anwendungsfällen und Feedback aus der Community kontinuierlich verbessern und erweitern.

Im kommenden Zeitraum planen wir, uns auf die folgenden Bereiche zu konzentrieren:

* **Mehrsprachige Unterstützung**: Erweiterung der Sprachabdeckung für globale Teams
* **Dokumentationsverbesserungen**: Bereitstellung detaillierter Dokumentation für Kern-Workflows und Module, um das System verständlicher und benutzerfreundlicher zu machen

Wenn Sie bei der Nutzung des Systems auf Probleme stoßen oder Vorschläge zu seinen Funktionen oder seinem Design haben, laden wir Sie ein, Ihr Feedback im NocoBase-Community-Forum zu teilen.

Wir prüfen dieses Feedback aktiv und nutzen es als wichtige Grundlage für zukünftige Iterationen.

Forum: [https://forum.nocobase.com](https://forum.nocobase.com)

Sie sind auch eingeladen, die vollständige Ticketing-Lösung in unserer Demo-Umgebung auszuprobieren: [https://demo.nocobase.com/new](https://demo.nocobase.com/new)
