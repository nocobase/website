---
title: "Wie man ein RBAC-System (rollenbasierte Zugriffskontrolle) entwirft"
description: "Detaillierte Erklärung der Kernkonzepte, Entwurfsmuster und Implementierungsmethoden eines RBAC-Systems mit praktischen Beispielen von NocoBase, um Ihnen beim Aufbau eines sicheren und effizienten Berechtigungssystems zu helfen."
---

📝 Hinweis: Dieser Artikel wurde zuletzt am 12. März 2026 aktualisiert. Wir aktualisieren die Informationen regelmäßig, um sicherzustellen, dass Sie die neuesten Erkenntnisse haben! 😊

## Warum RBAC wichtig ist

In modernen Unternehmensanwendungen ist die Kontrolle, **wer auf welche Daten zugreifen und welche Aktionen ausführen kann**, eine grundlegende und dennoch kritische Fähigkeit. Wenn Organisationen wachsen, werden Systeme komplexer, Benutzerrollen vielfältiger und die Anforderungen an Datensicherheit, Zugriffskontrolle und Compliance immer strenger. An diesem Punkt wird ein klares, wartbares und skalierbares Zugriffskontrollsystem unerlässlich.

Eines der am weitesten verbreiteten und praktischsten Modelle für diesen Zweck ist **RBAC – Role-Based Access Control (Rollenbasierte Zugriffskontrolle)**.

---

💬 Hey, du liest den NocoBase-Blog. NocoBase ist die erweiterbarste KI-gestützte No-Code/Low-Code-Entwicklungsplattform zum Erstellen von Unternehmensanwendungen, internen Tools und allen Arten von Systemen. Sie ist vollständig selbst gehostet, plugin-basiert und entwicklerfreundlich. → [NocoBase auf GitHub erkunden](https://github.com/nocobase/nocobase)

---

Die Kernidee hinter RBAC ist einfach: **Berechtigungen werden Rollen zugewiesen, und Benutzer erhalten Berechtigungen, indem ihnen Rollen zugewiesen werden.** Mit anderen Worten: Anstatt jedem Benutzer einzeln Berechtigungen zuzuweisen, definieren Sie eine Reihe von Rollen und deren zugehörige Berechtigungen und weisen dann die Benutzer den entsprechenden Rollen zu.

Dieses Design ist besonders effektiv in Organisationen mit mehreren Rollen, abgestuften Berechtigungen und systemübergreifender Zusammenarbeit.

💡 Mehr lesen: [Wie man effiziente CRUD-Anwendungen erstellt?](https://www.nocobase.com/en/blog/how-to-build-efficient-crud-apps)

## Kernkonzepte von RBAC

Im Kern beantwortet das RBAC-Modell eine einzige Frage:

> **Wer (Benutzer) kann was (Berechtigung) mit welcher Ressource (Ressource) tun?**

Um dies zu adressieren, unterteilt RBAC die Zugriffskontrolle in vier Schlüsselelemente:

### 1. **Benutzer**

Eine Person, die das System nutzt. Dies kann ein Mitarbeiter, ein externer Partner oder ein Systemkonto sein. Einem Benutzer können eine oder mehrere Rollen zugewiesen werden.

### 2. **Rolle**

Eine Rolle repräsentiert eine berufliche Funktion oder Verantwortung – wie Vertriebsmitarbeiter, Vertriebsleiter oder Administrator. Eine Rolle ist keine Person, sondern eine **abstrakte Gruppierung von Berechtigungen**.

Zum Beispiel:

* Ein **Vertriebsleiter** könnte Berechtigungen haben für:
  * Alle Kundendaten anzeigen
  * Verkaufsstatus aktualisieren
  * Leads anderen Vertriebsmitarbeitern zuweisen
* Ein **Vertriebsmitarbeiter** hingegen könnte nur in der Lage sein:
  * Seine eigenen Kundenaufzeichnungen anzuzeigen
  * Folge-Notizen hinzuzufügen

### 3. **Berechtigung**

Eine Berechtigung definiert, welche Aktion an einer Ressource ausgeführt werden kann. Übliche Aktionen umfassen:

* Lesen (Anzeigen)
* Erstellen
* Bearbeiten / Aktualisieren
* Löschen
* Genehmigen, Exportieren, Drucken oder andere benutzerdefinierte Aktionen

### 4. **Ressource**

Das Objekt, auf das zugegriffen oder das kontrolliert wird. Dies könnte sein:

* Kundendatenbank
* Verträge
* Finanzberichte
* Dateien, Aufzeichnungen oder UI-Module

Berechtigungen sind nur dann sinnvoll, wenn sie an bestimmte Ressourcen gebunden sind.

**Eine typische RBAC-Struktur könnte so aussehen:**


| Benutzer | Rolle         | Berechtigungen      | Ressource          |
| -------- | ------------- | ------------------- | ------------------ |
| Alice    | Vertrieb      | Anzeigen, Erstellen | Kundenaufzeichnungen |
| Bob      | Manager       | Anzeigen, Bearbeiten, Genehmigen | Kundenaufzeichnungen |
| Charlie  | HR-Admin      | Anzeigen, Bearbeiten | Mitarbeiterprofile |
| David    | Finanzteam    | Anzeigen, Exportieren | Finanzberichte     |

Diese Struktur entkoppelt Benutzerkonten von spezifischen Berechtigungen. Anstatt den Zugriff pro Benutzer zu verwalten, müssen Sie nur die **Beziehung zwischen Rollen und Berechtigungen** pflegen. Dies macht das Zugriffskontrollsystem **klar, konsistent und einfach zu warten**.

## Häufige Entwurfsmuster in RBAC

Obwohl das Konzept von RBAC einfach ist, **werden Berechtigungssysteme in der Praxis oft unübersichtlich** – und können sich als einer der am schwierigsten zu wartenden Teile erweisen.

Um Verwirrung zu vermeiden und langfristige Skalierbarkeit zu gewährleisten, empfehlen wir, beim Entwurf eines klaren und erweiterbaren RBAC-Systems diese vier Schritte zu befolgen:

### 1. Rollen definieren

Rollen sind das Rückgrat jedes RBAC-Systems. Jede Rolle repräsentiert eine Gruppe von Benutzern mit ähnlichen Verantwortlichkeiten und Zugriffsanforderungen.

Häufige Arten, Rollen zu definieren:

* **Nach Organisationsstruktur** (z. B. Vertrieb, Finanzen, Personal)
* **Nach funktionalen Verantwortlichkeiten** (z. B. Dateneingabe, Prüfer, Administrator)

Beispielrollen:

* Vertriebsmitarbeiter
* Teamleiter
* Personalmanager
* Finanzmitarbeiter
* Systemadministrator

**Empfehlung**: Halten Sie die Anzahl der Rollen überschaubar. Vermeiden Sie das Muster „ein Benutzer, eine Rolle“. Jede Rolle sollte einen **allgemeinen Satz von Berechtigungen** für einen Benutzertyp darstellen.

### 2. Ressourcen und Aktionen definieren

Identifizieren Sie als Nächstes die Ressourcen in Ihrem System, die eine Zugriffskontrolle erfordern, sowie die Aktionen, die an ihnen ausgeführt werden können.

**Beispiele für Ressourcen**:

* Kundendaten
* Vertragsmanagement
* Genehmigungsworkflows
* Finanzberichte

**Beispiele für Aktionen**:

* Anzeigen (Lesen)
* Erstellen
* Bearbeiten (Aktualisieren)
* Löschen
* Genehmigen
* Exportieren

Diese Ressourcen und Aktionen bilden die **horizontale Achse** Ihres Berechtigungsmodells.

### 3. Berechtigungen Rollen zuordnen

Sobald Rollen, Ressourcen und Aktionen definiert sind, können Sie Berechtigungen Rollen zuordnen.

**Wichtige zu berücksichtigende Fragen**:

* Auf welche Ressourcen kann jede Rolle zugreifen?
* Welche Aktionen sind für diese Ressourcen erlaubt?
* Unterstützt Ihr System die **Zuweisung mehrerer Rollen** (Benutzer mit mehreren Rollen)?
* Unterstützen Sie **Rollenvererbung** (z. B. erbt Senior-Vertrieb von Vertrieb)?

**Beispiele**:

* Vertriebsmitarbeiter: kann eigene Kunden anzeigen und erstellen
* Teamleiter: kann alle Kunden anzeigen, Leads zuweisen und Geschäfte genehmigen
* Administrator: uneingeschränkter Zugriff auf alle Ressourcen

In dieser Phase erstellen viele Teams eine **Rollen–Ressourcen–Aktionen-Matrix**, die zur Grundlage für Konfiguration und Audits wird.

**Beispiel-Berechtigungsmatrix**:


| Rolle / Ressource | Kundendaten                       | Vertragsmanagement              | Genehmigungsworkflow | Finanzberichte           |
| ----------------- | --------------------------------- | ------------------------------- | -------------------- | ------------------------ |
| Vertriebsmitarbeiter | Anzeigen (eigene) / Erstellen / Bearbeiten (eigene) | Anzeigen (eigene) / Erstellen / Bearbeiten (eigene) | —                   | —                       |
| Teamleiter        | Anzeigen (alle) / Erstellen / Bearbeiten / Exportieren | Anzeigen / Bearbeiten           | Zur Genehmigung einreichen | —                       |
| Personalmanager   | —                                 | —                              | Genehmiger           | Anzeigen / Bearbeiten (Mitarbeiterdaten) |
| Finanzmitarbeiter | —                                 | Anzeigen                        | —                   | Anzeigen / Exportieren   |
| Systemadministrator | Vollzugriff                      | Vollzugriff                     | Vollzugriff          | Vollzugriff              |

### 4. Feld- und Bedingungsberechtigungen implementieren

Die grundlegende RBAC kontrolliert typischerweise den Zugriff auf Ressourcenebene. Viele reale Systeme erfordern jedoch **feinere Kontrolle**, wie z. B. feld- oder bedingungsbasierte Berechtigungen.

✅ **Feldberechtigungen**:

* Personal kann alle Mitarbeiteraufzeichnungen anzeigen, aber **nur Gehaltsfelder für die eigene Abteilung bearbeiten**
* Finanzmitarbeiter können Rechnungsnummern exportieren, aber **keine internen Kommentare anzeigen**

✅ **Bedingungsberechtigungen**:

* Vertriebsmitarbeiter können nur **von ihnen erstellte Aufzeichnungen** anzeigen oder bearbeiten
* In Genehmigungsworkflows können nur Aufzeichnungen mit dem Status **"Ausstehende Genehmigung"** geändert werden

Diese erweiterten Fähigkeiten sind oft das, was **grundlegende Implementierungen von wirklich robustem RBAC-Support** in einem Tool oder einer Plattform unterscheidet.

## Wie man RBAC in echten Projekten implementiert: Ein NocoBase-Beispiel

Angenommen, Sie bauen ein CRM-System und müssen verschiedenen Teammitgliedern unterschiedliche Datenzugriffs- und Betriebsberechtigungen zuweisen. Nachfolgend finden Sie einen typischen RBAC-Implementierungsprozess – Schritt für Schritt demonstriert am **CRM-System von NocoBase**.

### 1. **Wer wird das System nutzen?**

Beginnen Sie damit, alle Benutzer zentral im Modul **Benutzer & Berechtigungen** zu verwalten. In NocoBase können Sie Benutzer in Abteilungen organisieren – zum Beispiel alle Vertriebsmitarbeiter unter der Abteilung „Vertrieb“. Dies legt die Grundlage für **Datensegmentierung** und **Genehmigungsrouting** basierend auf der Organisationsstruktur.

![Wer wird das System nutzen?](https://static-docs.nocobase.com/11-sl6keh.png)

![Wer wird das System nutzen?](https://static-docs.nocobase.com/12-fut1wu.png)

### 2. **Was sind ihre Rollen?**

Definieren Sie als Nächstes Rollen für verschiedene Benutzertypen im Bereich **Rollen & Berechtigungen**. Zum Beispiel:

* **Vertrieb** – reguläre Vertriebsmitarbeiter, die ihre eigenen Kunden verwalten
* **Vertriebsleiter** – beaufsichtigt das gesamte Team und hat Genehmigungsrechte
* **Administrator** – voller Zugriff für die Systemwartung

Jede Rolle kann einem oder mehreren Benutzern zugewiesen werden.

![Was sind ihre Rollen?](https://static-docs.nocobase.com/13-zeboed.png)

### 3. **Auf welche Daten können sie zugreifen und sie ändern?**

Konfigurieren Sie Berechtigungen für jede Rolle für wichtige Datensammlungen wie **Kunden**, **Leads** und **Opportunities**. Sie können granulare Kontrollen festlegen, wie z. B.:

* Können sie Daten hinzufügen, anzeigen, bearbeiten, löschen, importieren oder exportieren?
* Können sie **nur auf von ihnen erstellte Aufzeichnungen zugreifen**?

![Auf welche Daten können sie zugreifen und sie ändern?](https://static-docs.nocobase.com/14-g02514.png)

### 4. **Welche Module sollen sie sehen?**

Nicht jeder benötigt Zugriff auf jeden Teil des CRM. In NocoBase können Sie steuern, **welche Seitenmodule für jede Rolle sichtbar sind** – sowohl auf dem Desktop als auch auf dem Handy.

Zum Beispiel:

* **Vertrieb** sieht möglicherweise nur das Kundenmanagement und Folgeaufzeichnungen
* **Vertriebsleiter** haben möglicherweise Zugriff auf Dashboards und Genehmigungszentren

![Welche Module sollen sie sehen?](https://static-docs.nocobase.com/15-tngndo.png)

### 5. **Wie sollen Berechtigungen auf die Organisationsstruktur reagieren?**

Mit Rollen und Abteilungen können Sie **bedingte Berechtigungen** für eine dynamischere Kontrolle definieren. Zum Beispiel:

* Benutzer können nur Daten aus ihrer eigenen Abteilung anzeigen
* Manager können nur Leads genehmigen, die von ihren direkten Untergebenen eingereicht wurden
* Nach der Genehmigung wird ein Datensatz automatisch dem Manager neu zugewiesen

![Wie sollen Berechtigungen auf die Organisationsstruktur reagieren?](https://static-docs.nocobase.com/16-i5mddu.png)

Indem Sie diese fünf Schritte befolgen, können Sie schnell ein **praxistaugliches RBAC-System** in NocoBase implementieren. Von der Benutzeridentität → Seitenzugriff → Datenoperationen → dynamische Regeln, jeder Schritt kann **ohne eine einzige Zeile Code** visuell konfiguriert werden. Dieser Ansatz funktioniert sowohl für einfache Anwendungsfälle als auch für komplexe Geschäftsprozesse.

## Zusammenfassung

In modernen Geschäftssystemen ist **RBAC ein grundlegender Mechanismus zur Gewährleistung von Datensicherheit, klaren Verantwortlichkeiten und reibungsloser Zusammenarbeit**.

Ein gut gestaltetes Berechtigungssystem sollte bieten:

* **Klare Struktur** – wer auf was zugreifen kann und welche Aktionen sie ausführen können, sollte leicht verständlich sein
* **Flexible Konfiguration** – anpassbar an organisatorische Veränderungen und sich entwickelnde Geschäftsanforderungen
* **Wartbarkeit** – für Nicht-Entwickler zugänglich zur Konfiguration und Verwaltung

Mit den richtigen Tools müssen Berechtigungen nicht mehr fest codiert werden. Sie können **visuell modelliert, zentral verwaltet und kontinuierlich verbessert werden**. Dies stärkt nicht nur die Sicherheit, sondern optimiert auch die Zusammenarbeit und beschleunigt die Entwicklung.

![NocoBase CRM](https://static-docs.nocobase.com/17-9bcgd6.png)

📌 Möchten Sie sehen, wie RBAC in der Praxis funktioniert? Wir haben eine vollständige Reihe von Rollen, Datenberechtigungen, Seitensteuerungen und Bedingungsregeln in der **NocoBase CRM-Demo** vorkonfiguriert.

👉 [Klicken Sie hier, um das RBAC-System von NocoBase in Aktion zu testen.](https://www.nocobase.com/en/solutions/crm)

**Verwandte Lektüre:**

* [Die 6 besten Open-Source-Ticketingsysteme für 2025](https://www.nocobase.com/en/blog/open-source-ticketing-systems)
* [Die 8 besten Open-Source-Tools für die Webanwendungsentwicklung](https://www.nocobase.com/en/blog/top-8-open-source-tools-for-web-application-development)
* [Die 6 besten Mitarbeiterverwaltungssysteme für 2025](https://www.nocobase.com/en/blog/employee-management-system)
* [Die 5 besten All-in-One-Business-Software für 2025](https://www.nocobase.com/en/blog/all-in-one-business-software)
* [Die 8 besten Open-Source-IT-Asset-Management-Software für 2025](https://www.nocobase.com/en/blog/it-asset-management-software)
* [Die 7 besten Open-Source-Schnellentwicklungsplattformen](https://www.nocobase.com/en/blog/rapid-development-platform)
