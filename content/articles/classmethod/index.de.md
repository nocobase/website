---
title: "Jenseits von Tabellenkalkulationen: Mitarbeiterdatenmanagement bei Classmethod mit NocoBase"
description: "Classmethod hat mit NocoBase ein zentrales Mitarbeiterinformationssystem aufgebaut, das über Tabellenkalkulationen hinausgeht und strukturierte, skalierbare Abläufe ermöglicht – während interne Erfahrungen in kundenorientierten Mehrwert umgewandelt werden."
---

## Einleitung

Durch den Abschied von Tabellenkalkulationen hat [Classmethod](https://classmethod.jp/) mit NocoBase eine Plattform für das Mitarbeiterinformationsmanagement geschaffen, die sich durch eine klare Struktur und flexible Zugriffskontrollen auszeichnet.

Dieses System hat nicht nur ihre internen Abläufe optimiert, sondern wird es ihnen auch ermöglichen, ihren Kunden effektivere technische Lösungen zu liefern.

![Classmethod.PNG](https://static-docs.nocobase.com/Classmethod-o0zgj9.PNG)

## Über Classmethod

Die [Classmethod](https://classmethod.jp/) Inc. ist einer der führenden IT-Dienstleister Japans, bekannt für seine umfassende AWS-Unterstützung – einschließlich Kostenoptimierung, Sicherheit, Implementierung und laufendem Betrieb.

Über AWS hinaus bietet Classmethod auch Dienstleistungen in den Bereichen Cloud-Adoption, Dateninfrastruktur, generative KI-Lösungen, Anwendungsentwicklung und SaaS-Integration an und arbeitet dabei mit großen Plattformen wie Google Cloud, Cloudflare, Informatica und Snowflake zusammen.

Viele Entwickler kennen Classmethod vielleicht von ihrer bekannten Tech-Medienseite [DevelopersIO](https://dev.classmethod.jp/). Ihrem Ruf entsprechend ist das Team hochtechnisch, schnell und ergebnisorientiert.

## Die Herausforderung des Informationsmanagements: Wenn Excel einfach nicht ausreicht

Mit dem Wachstum des Geschäfts von Classmethod ist auch die Teamstruktur immer komplexer geworden – mit rund 500 Mitarbeitern in Japan und über 850 in der gesamten Gruppe. Die Belegschaft umfasst nicht nur Vollzeitkräfte, sondern auch Teilzeitkräfte, Mitarbeiter im Nebenjob, Freiberufler und Partner, verteilt auf Japan und das Ausland.

Mit diesem Wachstum begann Classmethod nach besseren Möglichkeiten zu suchen, um ihre Organisation zu verwalten:

1. Wie können sie Mitarbeiter in verschiedenen Ländern und mit unterschiedlichen Beschäftigungsverhältnissen mit einem einzigen, einheitlichen Standard verwalten?
2. Wie können Prozesse wie Onboarding, Offboarding oder interne Versetzungen automatisiert werden – einschließlich Dateneingabe, Zugriffsberechtigungen und Benachrichtigungen?
3. Wie kann das Unternehmen zentral die Zertifizierungen, beruflichen Hintergründe und Schulungsaufzeichnungen aller verfolgen, um intelligentere Aufgabenverteilung, Talententwicklung und Einstellung zu unterstützen?
4. Wie kann ein systematisches Management nicht nur die betriebliche Effizienz steigern, sondern auch Junioren Entwicklern praktische Betriebs- und Entwicklungserfahrung bieten – und dabei die Systemkosten unter Kontrolle halten?

Stellen Sie sich nun vor, Sie versuchen, all dies nur mit Excel oder Google Sheets zu bewältigen. Es ist leicht zu erkennen, wie schnell Probleme auftauchen würden. Tatsächlich sind dies genau die Schmerzpunkte, die das Team von Classmethod aus erster Hand erfahren hat:

| **Verwaltung mit Excel und Google Sheets**                              | Wichtigste Herausforderungen                                                                                                           |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| ⚠️ Softwarelizenzaufzeichnungen wurden in Excel geführt                 | ❌ Lizenzzuweisungen waren oft ungenau – ungenutzte Konten hatten noch aktive Lizenzen                                                |
| ⚠️ Jede Abteilung verwaltete ihr eigenes Google Sheet                   | ❌ Audits wurden sowohl für Benutzer als auch für die IT langsam und aufwändig                                                         |
| ⚠️ Datenzugriffsberechtigungen wurden in separaten Tabellenkalkulationen verfolgt | ❌ Inkonsistente Datendefinitionen erschwerten das Teilen und Verwalten von Informationen, und Berechtigungen waren leicht falsch zu setzen |
| ⚠️ Komplexe Informationen mussten manuell mit VLOOKUP abgeglichen werden | ❌ Das Auffinden von Informationen über Abteilungen hinweg war schwierig und verlangsamte Arbeitsabläufe                                |
| ⚠️ Jedes Onboarding, jede Versetzung oder Kündigung erforderte manuelle Aktualisierungen | ❌ Das Onboarding konnte bis zu 10 Arbeitstage dauern, was eine schlechte Erfahrung für neue Mitarbeiter darstellte                     |

Am wichtigsten ist, dass diese Probleme mit dem Wachstum des Teams und der zunehmenden Komplexität der Prozesse nur noch schlimmer wurden. Ohne ein zentralisiertes und automatisiertes System stieg die Belastung des Verwaltungsteams – und die gesamte Organisation litt unter langsameren Reaktionszeiten und weniger zuverlässigen Daten.

Aus diesem Grund machte sich Classmethod auf die Suche nach einer systematischeren und flexibleren Lösung: einer, die das Datenmanagement zentralisieren, geschäftsspezifische Konfigurationen unterstützen und im Laufe der Zeit Automatisierung ermöglichen konnte.

## Systemauswahlprozess

Als Classmethod beschloss, über Tabellenkalkulationen hinauszugehen, evaluierte das Team eine Reihe von Tools, darunter Airtable und NocoDB. Diese Lösungen zeichneten sich durch ihre Benutzerfreundlichkeit, intuitive Oberflächen und ein gewisses Maß an Erweiterbarkeit aus. Letztendlich entschied sich das Team jedoch aus einigen klaren Gründen für NocoBase: Es bot die Flexibilität, Kontrolle und Übereinstimmung mit den Anforderungen von Classmethod, die andere Tools nicht bieten konnten.

Folgendes war bei ihrer Entscheidung am wichtigsten:

**1. Flexibles Open-Source-Deployment**

Als technologieorientiertes Unternehmen bevorzugt Classmethod den Betrieb kritischer Systeme in der eigenen AWS-Umgebung, um Sicherheits- und Compliance-Anforderungen zu erfüllen. NocoBase ist vollständig Open Source und überall einsetzbar, ohne SaaS-Einschränkungen.

**2. Keine Gebühren pro Benutzer – ideal für „viele Betrachter, wenige Bearbeiter"**

Während nur eine kleine Gruppe Daten eingibt, benötigen viele Abteilungen Zugriff. Bei einer Preisgestaltung pro Benutzer würden die Kosten schnell eskalieren. Das Open-Source-Modell von NocoBase vermeidet dieses Problem vollständig.

**3. Fein granulare Zugriffskontrolle**

NocoBase unterstützt Sichtbarkeitseinstellungen auf Datensatz- und Feldebene für verschiedene Benutzer – unerlässlich für einen sicheren, hierarchischen Datenzugriff in einem Mitarbeiterverwaltungssystem.

**4. Trennung von Benutzeroberfläche und Datenstruktur für benutzerdefinierte Oberflächen**

Verschiedene Teams müssen unterschiedliche Informationen sehen. Mit NocoBase werden die Benutzeroberfläche und das Datenmodell unabhängig voneinander konfiguriert, was die Erstellung flexibler, maßgeschneiderter Oberflächen erleichtert.

**5. Integrierte Workflow-Engine – keine externe Automatisierung erforderlich**

Geschäftslogik wie das automatische Erstellen von Konten für neue Mitarbeiter oder das Entziehen temporärer Berechtigungen kann vollständig mit integrierten Workflows abgewickelt werden, ohne dass Tools von Drittanbietern oder benutzerdefinierte Skripte erforderlich sind.

**6. Automatische API-Generierung für einfache Integration**

Jede neue Datensammlung in NocoBase wird mit automatisch generierten APIs ausgeliefert, was es für Entwicklungsteams viel einfacher macht, Skripte zu automatisieren und Daten zu synchronisieren.

Kurz gesagt, NocoBase hat vielleicht nicht die längste Funktionsliste, liefert aber genau das, was Classmethod am meisten braucht: Sicherheit, Autonomie, Flexibilität und die vollständige Kontrolle über Entwicklung und Betrieb.

## NocoBase in Aktion: Erste Auswirkungen

Sobald der Plan stand, hat Classmethod NocoBase schnell bereitgestellt und ihre Daten modelliert. Das Entwicklungsteam hat NocoBase in der eigenen AWS-Umgebung ausgerollt und Kerndatensammlungen eingerichtet, die die Organisation abbilden – darunter Mitarbeiter, Abteilungen, Softwarelizenzen, Unternehmensressourcen, Systemkonten (wie Slack und GitHub) und Zertifizierungen. Geschäftsanwender konnten Felder aktualisieren und das UI-Layout nach Bedarf anpassen.

Erste Daten wurden per CSV importiert, und zukünftige Aktualisierungen wurden mit Python-Skripten und den automatisch generierten APIs von NocoBase automatisiert. Durch die Verknüpfung aller Daten über relationale Felder erreichte das Team ein wirklich strukturiertes Informationsmanagement.

Nach der Einführung führte das neue System zu erheblichen Effizienzsteigerungen:

* Daten waren nicht länger über verschiedene Abteilungstabellenkalkulationen verstreut, was Synchronisationsprobleme und Versionskonflikte stark reduzierte
* Die SaaS-Lizenzverwaltung wurde automatisiert, was IT-Audits viel effizienter machte
* Aufgaben wie das Entziehen temporärer Berechtigungen, das Bestätigen von Gerätezuweisungen und das Senden von Ablaufwarnungen wurden zunehmend automatisiert
* Geschäftsteams konnten Felder und Oberflächen selbst anpassen – kein Warten mehr auf Entwickler, und der Wartungsaufwand wurde viel geringer
* Personaldaten (Zertifizierungen, Schulungen, Erfahrung) waren nun strukturiert, was die Verwaltung interner Versetzungen und Einstellungen erleichterte

![Mitarbeiterverwaltung.png](https://static-docs.nocobase.com/image_1-93c06z.png)

![Mitarbeiterverwaltung2.png](https://static-docs.nocobase.com/image_2-i5s50v.png)

Am wichtigsten ist, dass dieses neue System die Grundlage für zukünftiges Wachstum schafft. Ob es um die Integration neuer Systeme, die Erweiterung von Workflows oder das Hinzufügen von KI-Funktionen geht – NocoBase bietet die Flexibilität und technische Leistungsfähigkeit, die Classmethod für die weitere Entwicklung benötigt.

## Kontinuierliche Verbesserung: Internen Erfolg in Kundenwert umwandeln

Classmethod hat nun das tägliche Mitarbeiterinformationsmanagement vollständig auf NocoBase migriert und treibt die Automatisierung und Integration weiter voran, z. B.:

* Auslösen von Genehmigungsworkflows, wenn neue Daten hinzugefügt oder aktualisiert werden
* Senden von Benachrichtigungen an andere Teams über Slack
* Exportieren von Daten in externe Systeme (wie Google Sheets oder integrierte Plattformen)
* Automatisches Anfordern von Lizenzverlängerungen vor Ablauf
* Bestätigen des Gerätebesitzes (für Laptops, Sicherheitsausweise usw.)
* Automatisches Entziehen temporärer Berechtigungen
* Senden von Lizenzablauferinnerungen durch automatisierte Workflows
* Integration mit großen Sprachmodellen über deren MCP-Server

Das Team arbeitet auch daran, Mitarbeiterdaten – wie Zertifizierungen, Berufsverläufe und Schulungsaufzeichnungen – besser zu visualisieren, um Einstellungen, Talententwicklung und internen Wissensaustausch zu verbessern.

Mit NocoBase hat Classmethod sein Personalmanagement zentralisiert und automatisiert und gleichzeitig wertvolle praktische Erfahrungen in der Systementwicklung und im Betrieb gesammelt.

Als technologieorientiertes IT-Dienstleistungsunternehmen ist Classmethod bestrebt, praktische Erfahrungen in echten Mehrwert für Kunden umzuwandeln. Jetzt wenden sie diese bewährten Praktiken in Kundenprojekten an – und helfen mehr Unternehmen, flexible, kontrollierbare Systeme für die heutigen komplexen Umgebungen zu bauen.

Wie auf ihrer Website zu lesen ist: Machen Sie Technologie zum Kern Ihres Geschäfts und steigern Sie mit technischer Exzellenz und echten Ergebnissen höhere Qualität und Geschwindigkeit.

**Verwandte Lektüre:**

* [Wie eine Möbelfabrik ihr eigenes ERP baute – ganz ohne Programmierung](https://www.nocobase.com/en/blog/olmon)
* [Vom Designer zum Entwickler: L&As digitale Transformation mit NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Wie KIGLAND die Produktion kundenspezifischer Anime-Masken mit Open-Source-Tools skalierte](https://www.nocobase.com/en/blog/kigland)
* [Wie eine Kanzlei mit über 400 Anwälten das Provisionsmanagement mit NocoBase optimiert](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
* [Schnelle Entwicklung mit NocoBase: Digitale Transformation im Bauwesen vorantreiben](https://www.nocobase.com/en/blog/rapid-development-with-nocobase)
* [Orchiskys Upgrade zur intelligenten Fertigung: Warum sie sich für NocoBase entschieden haben](https://www.nocobase.com/en/blog/Orchisky)
