---
title: "Wie Second-Brain mit NocoBase ein KI-System für Finanzinstitute aufbaute"
description: "Das in Hongkong ansässige KI-Unternehmen Second-Brain nutzte NocoBase, um Herausforderungen mit hohen Sicherheitsanforderungen und kurzen Zyklen zu bewältigen und ein KI-System für Finanzunternehmen aufzubauen, das eine effiziente Bereitstellung und Kompetenzakkumulation ermöglicht."
---

## Die entscheidende Wahl eines KI-Startups

[Second-Brain](http://www.dbl-brain.com/) ist ein KI-Startup mit Sitz in Hongkong, gegründet von einem Team mit Hintergründen in den Bereichen Finanzen und Beratung. Sie sind auf die Entwicklung KI-gesteuerter Entscheidungssysteme für Unternehmen spezialisiert.

![Second-Brain](https://static-docs.nocobase.com/1-esvvr0.PNG)

Im B2B-Unternehmensumfeld ist der schwierigste Teil beim Aufbau von KI-Systemen nicht die Modelle selbst – sondern die unstrukturierten und fragmentierten Daten dahinter. Interne Richtlinien, Arbeitsabläufe und Geschäftsaufzeichnungen existieren oft in Silos, in inkonsistenten Formaten und widersprechen sich manchmal sogar. Ohne Bereinigung und Strukturierung dieser Daten kann KI einfach keine aussagekräftigen Erkenntnisse generieren.

Um es der KI zu ermöglichen, ein Unternehmen zu "verstehen", besteht der erste Schritt von Second-Brain darin, eine grundlegende Schicht aufzubauen, die unternehmenseigenes Wissen konsolidiert, einschließlich interner Regeln und Vorschriften, Geschäftsprozesse und externer Compliance-Standards.

Während der Entwicklung eines KI-Wissenssystems für einen Bankkunden stand Second-Brain vor erheblichen Auslieferungsherausforderungen:

* Unterstützung von **hunderten von Seiten** mit komplexer Berechtigungssteuerung
* Vollständig offline Bereitstellung **ohne Zugang zu Online-Diensten**
* **Enger Lieferzeitplan** ohne Kompromisse bei der Benutzererfahrung

Mit einem starken Fokus auf KI-Modelle und vertikales Produktdesign benötigte Second-Brain ein System-Rückgrat, das **flexibel, selbst gehostet und schnell implementierbar** ist – mit leistungsstarker Unterstützung für Datenmodellierung und Konfiguration.

## Warum NocoBase?

Zu Projektbeginn prüfte Second-Brain sorgfältig mehrere Low-Code- und No-Code-Plattformen. Dies umfasste verschiedene SaaS-Tools und Open-Source-Projekte aus dem In- und Ausland. Aufgrund von Problemen mit Bereitstellungsoptionen, Lizenzierung oder Code-Kontrolle konnten sie jedoch die strengen Anforderungen des Kunden an Offline-Bereitstellung und Informationssicherheit nicht erfüllen.

An einem Punkt erwogen sie sogar, zu einem "traditionellen Ansatz" zurückzukehren: die Entwicklung des gesamten Frontends und Backends im eigenen Haus. Diese Methode bot große Kontrolle und half, geistiges Eigentum (IP) zu schützen. Aber angesichts eines engen Liefertermins und hoher Kundenerwartungen war dieser Weg zu kostspielig und riskant.

Gerade als das Team mit dieser Entscheidung kämpfte, entdeckten sie NocoBase.

Das Team fühlte sich von der Architektur und den Prinzipien von NocoBase angezogen: **es ist nicht auf SaaS angewiesen, bietet Flexibilität und ist anpassbar, erweiterbar und auslieferbar**. Sein Open-Source-Charakter ermöglichte es Second-Brain, ein tiefes Verständnis dafür zu erlangen, wie NocoBase funktioniert, und half ihnen, schnell auf Kundenfeedback zu reagieren.

Letztendlich entschied sich Second-Brain für NocoBase als grundlegende Plattform für ihr System und begann mit dem Aufbau und der Auslieferung des Projekts. Die eigentliche Herausforderung bestand nicht nur darin, das Werkzeug auszuwählen, sondern darin, es zu nutzen, um ein komplexes, datengesteuertes KI-Anwendungssystem zu bauen und schnell auszuliefern.

## Projektimplementierung: Herausforderungen und Lösungen

Bei diesem Projekt ging es nicht nur um den Aufbau einer traditionellen Wissensmanagement-Plattform – es ging darum, eine zuverlässige, langfristige Wissensdatenbank zu schaffen, die KI tatsächlich verstehen und nutzen kann.

Das Ziel war es, unstrukturierte interne Vorschriften und Geschäftsregeln zu bereinigen, zu klassifizieren und zu modellieren und sie dann über standardisierte APIs für den Zugriff durch KI-Modelle bereitzustellen. Dies erforderte fortschrittliche Fähigkeiten in den Bereichen Datenmodellierung, -organisation und Schnittstellendesign.

Da der Kunde in der Finanzbranche tätig ist, hatte Sicherheit höchste Priorität. **Die gesamte Bereitstellung musste vollständig offline erfolgen, und jedes Update musste einen physisch isolierten Genehmigungs- und Übertragungsprozess durchlaufen.**

Sobald NocoBase technisch machbar war, schritt Second-Brain mit der Lösungsarchitektur und Technologieauswahl voran, gewann schließlich die Ausschreibung und trieb das Projekt voran.

NocoBase diente als Rückgrat des Systems und ermöglichte es dem Team:

* **Regulierungsdokumente und Richtlinien in strukturierte, standardisierte Daten umzuwandeln**, die KI-Modelle konsumieren konnten

![Umwandlung von Regulierungsdokumenten und Richtlinien in strukturierte, standardisierte Daten](https://static-docs.nocobase.com/2-5xor3v.PNG)

* **Die Dateninfrastruktur hinter dem KI-Frage-Antwort-Modul zu betreiben**, was Folgendes ermöglichte:
  * Alltägliche Fragen und Antworten sowie richtlinienbezogene Anfragen
  * Geschäftsabfragen, die mehrere Datensätze umfassen
  * Managementorientierte Analysen, die strukturierte Schlussfolgerungen liefern

![Betreiben der Dateninfrastruktur hinter dem KI-Frage-Antwort-Modul](https://static-docs.nocobase.com/3-p8o62u.PNG)

* **KI-Workflows mit internen Tools zu unterstützen**, wie z.B.:Dokumentenvorverarbeitung (z.B. Konvertierung von PDFs, Word-Dateien oder Bildern in extrahierbaren Text)

  ![Dokumentenvorverarbeitung](https://static-docs.nocobase.com/4-sdv8mt.png)

  Generierung von Frage-Antwort-Paaren aus kuratierten Korpora zur Anreicherung von Feintuning-Datensätzen.![Generierung von Frage-Antwort-Paaren](https://static-docs.nocobase.com/5-hb6nly.png)
* **Ein benutzerdefiniertes ECharts-Plugin zu bauen, um Beziehungen** zwischen Regeln und Vorschriften als Wissensgraph zu visualisieren.

![ECharts-Plugin](https://static-docs.nocobase.com/6-qalqnu.png)

## Die Plugin-Architektur: Eine angenehme Überraschung

Im Umgang mit strengen Sicherheitsanforderungen **erwies sich das plugin-basierte Design von NocoBase als Game-Changer sowohl für die Bereitstellung als auch für die Zusammenarbeit**.

Second-Brain modularisierte Kernfunktionen in einzelne Plugins – so dass sie bei jeder Systemaktualisierung nur die aktualisierten Plugins zur Genehmigung einreichen konnten. Dies erleichterte die Einhaltung des Prüfprozesses des Kunden erheblich und reduzierte den Aufwand für Sicherheitsscans und Tests drastisch. Es war eine ideale Lösung für Finanzinstitute mit strenger Kontrolle über Software-Updates.

Die Vorteile hörten hier nicht auf. **Der Plugin-Ansatz steigerte auch die Entwicklungsgeschwindigkeit des Teams.**

Es dauerte etwa zwei Wochen, um das erste Plugin zu erstellen, während die ideale Struktur und Vorlage ermittelt wurden. Danach konnten neue Plugins in einem Bruchteil der Zeit geklont und angepasst werden.

Sie haben inzwischen fast 20 Plugins entwickelt, die verschiedene Module wie Graphvisualisierung, Berechtigungsverwaltung und Datenbereinigung abdecken. Dies baute eine Bibliothek wiederverwendbarer Assets für zukünftige Auslieferungen auf.

## Einblicke aus erster Hand aus der Praxis

Während des gesamten Auslieferungsprozesses teilte Second-Brain mehrere wichtige Erkenntnisse aus der Arbeit mit NocoBase in der Produktion.

**1. Stabilität**

Selbst bei häufigen Iterationen behielt NocoBase eine starke Versionskonsistenz bei. **Das System ist aufgrund eines Upgrades nie ausgefallen** – ein entscheidender Faktor bei der Arbeit mit Kunden in der Finanzbranche.

> "NocoBase war über Versionen hinweg beeindruckend konsistent. Wir sind bei versionsübergreifenden Upgrades auf keinen einzigen Absturz gestoßen – was ehrlich gesagt ziemlich selten ist." – Zhengxing Yang, Technischer Leiter bei Second-Brain

**2. Zusammenarbeit**

Second-Brain hatte während des gesamten Auslieferungszyklus eine reibungslose, reaktionsschnelle Zusammenarbeit mit dem NocoBase-Technologie-Team. Von Fehlerbehebungen bis hin zu Funktionsanfragen war jede Antwort zeitnah und hilfreich.

Dieses "Open Source, aber niemals allein" Arbeitsmodell war ein entscheidender Erfolgsfaktor in einem Projekt mit hohem Risiko und hohen Sicherheitsanforderungen.

Obwohl das Projekt nun abgeschlossen ist, prägen seine Werkzeuge und Ansätze weiterhin die Arbeitsweise des Kunden heute.

## Fazit

Second-Brain lieferte ein komplexes, hochsicheres KI-System mit einem schlanken Team. Indem sie sich auf NocoBase für die Systemgrundlage verließen, konnte das Team seine Energie auf den Aufbau von KI-Fähigkeiten konzentrieren, die wirklich wichtig waren.

Genau das ist das Ziel von NocoBase: **Teams von repetitiver Systementwicklung zu befreien, damit sie sich auf wirkungsvolle, kreative Arbeit konzentrieren können, die echten Geschäftswert schafft.**

In Branchen mit strengen Sicherheitsanforderungen und komplexen Anforderungen zeigt dieses Projekt, wie eine wirklich flexible No-Code- und Low-Code-Plattform neu definieren kann, was bei der Auslieferung von Unternehmenssystemen möglich ist.

**Verwandte Lektüre:**

* [Wie die Nr. 1 KI-Diktiergerät-Marke ihre internen Systeme aufbaute](https://www.nocobase.com/en/blog/plaud)
* [Jenseits von Tabellenkalkulationen: Classmethods Mitarbeiterdatenmanagement mit NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [Wie eine Möbelfabrik ihr eigenes ERP baute – ganz ohne Programmierung](https://www.nocobase.com/en/blog/olmon)
* [Vom Designer zum Entwickler: L&As digitale Transformation mit NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Wie KIGLAND die Produktion von maßgeschneiderten Anime-Masken mit Open-Source-Tools skalierte](https://www.nocobase.com/en/blog/kigland)
* [Wie eine Kanzlei mit über 400 Anwälten das Provisionsmanagement mit NocoBase optimiert](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
