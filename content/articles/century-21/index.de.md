---
title: "Was brachte Japans führendes Immobilienunternehmen dazu, von Salesforce auf Open-Source NocoBase umzusteigen?"
description: "HouseWell wechselte von Salesforce zu NocoBase, von hohen langfristigen Kosten zu einem flexiblen Einmalkaufmodell, von starren Modulen zu einer offenen Architektur und entwickelte sich zum Entwickler und Anbieter von Branchenlösungen."
---

## **Einleitung**

Sie hatten Optionen wie Salesforce und Kintone. Warum entschied sich dieser Marktführer der japanischen Immobilienbranche letztendlich für eine Open-Source-Plattform – NocoBase?

## **Wer ist HouseWell?**

In Japan ist Century 21 ein Begriff. Seit dem Eintritt in den japanischen Markt im Jahr 1983 hat Century 21 landesweit fast tausend Filialen eröffnet und sich zu einer führenden Marke in der japanischen Immobilienmaklerbranche entwickelt.

![Century 21](https://static-docs.nocobase.com/1-cuikzt.PNG)

Innerhalb dieses riesigen Franchise-Netzwerks sticht ein Unternehmen besonders hervor. Es gehört seit Jahren durchgängig zu den Top-Performern von Century 21 Japan und ist damit einer der angesehensten und einflussreichsten Franchisenehmer. Dieses Unternehmen ist **[HouseWell](https://housewell-group.jp/)**.

![HouseWell](https://static-docs.nocobase.com/2-r5onnn.PNG)

HouseWell mit Sitz in Saitama hat ein sehr vielfältiges Geschäftsmodell. Es deckt ein breites Spektrum ab, darunter Immobilienverkauf und -kauf, Mietverwaltung, Renovierungen und Bauarbeiten, Versicherungsberatung und IT-Dienstleistungen.

## **HR: Das fehlende Puzzleteil in HouseWells Digitalisierungsstrategie**

HouseWell ist schnell gewachsen – und mit ihm das Team, das nun über 110 Mitarbeiter zählt.

Während das Unternehmen in vielen Bereichen bereits digitalisiert war – mit Salesforce für Kundendaten und Geschäftsabläufe –, sah es bei den HR- und internen Verwaltungsprozessen anders aus. Ein Großteil lief immer noch über Papierformulare und Tabellenkalkulationen.

Nehmen wir zum Beispiel Urlaubsanträge. Monatlich werden etwa 30 eingereicht, aber der Prozess umfasst immer noch das Ausdrucken, Unterschreiben und Weiterleiten von Papieren zwischen den Abteilungen. Verzögerungen, verlorene Formulare und übersehene Details waren an der Tagesordnung – was die Kosten in die Höhe trieb und die Mitarbeiter frustrierte.

Die Verwaltung von HR-Daten – von Teamstrukturen über Stellenwechsel bis hin zu jährlichen Einstellungsplänen – war nicht besser. Informationen waren über Dateien verstreut, ohne klares System zur Nachverfolgung oder Analyse. Diese mangelnde Transparenz verlangsamte Entscheidungen und schwächte die Managementeffizienz.

Mit der Expansion des Unternehmens wurde klar, dass CRM allein nicht alles abdecken konnte. Auch die Personalabteilung brauchte ein digitales Upgrade.

Also startete HouseWell eine gründliche Suche nach einem System, das neben den bestehenden Tools funktionieren – und gleichzeitig flexibel für die Zukunft bleiben würde.

## **Eine sorgfältig abgewogene Entscheidung**

HouseWell hatte drei Hauptoptionen auf dem Tisch, jede mit ihren eigenen Stärken:

* **Weiter mit Salesforce:** Salesforce ist das weltweit führende CRM. Es ist funktionsreich, nutzt ausgereifte Technologie, hat ein starkes Ökosystem und kann auf viele Erfolgsgeschichten in der Immobilienbranche verweisen.
* **Einführung von Kintone, einer Low-Code-Plattform:** Kintone ist Japans führende Low-Code-Plattform. Sie ist einfach zu bedienen, schnell einsatzbereit und sehr bekannt mit einem großen Marktanteil unter japanischen Unternehmen.
* **Wahl von Open-Source NocoBase:** Als Open-Source-No-Code-Plattform bietet NocoBase hochflexible Datenmodellierung und UI-Anpassung. Es unterstützt zudem die lokale Bereitstellung und ein Einmalkaufmodell.

Vor der endgültigen Entscheidung führte das Team einen detaillierten Vergleich dieser drei Optionen durch:

### 1. Salesforce: Leistungsstark, aber im Umfang begrenzt

Salesforce gilt weithin als leistungsstarkes Werkzeug in der Immobilienbranche. Es bietet eine umfangreiche Palette an CRM-Funktionen, standardisierte Prozesse und zahlreiche Drittanbieter-Integrationen – alles gut geeignet für große Unternehmen, die Kundenmanagement, Datenanalyse und Vertriebsautomatisierung anstreben.

Bei einer tiefergehenden Bewertung stieß das HouseWell-Team jedoch auf mehrere praktische Herausforderungen:

* **Kostenbedenken**: Salesforce wurde hauptsächlich von den Vertriebs- und Investmentteams genutzt, während andere Abteilungen wenig Bedarf an CRM-Funktionen hatten. Um die in diesem Projekt anvisierten Back-Office-Abläufe zu unterstützen, hätten Lizenzen für Benutzer gekauft werden müssen, die eigentlich keine CRM-Funktionen benötigen, was die Gesamtkosten erheblich erhöht hätte.
* **Begrenzte Anpassungsmöglichkeiten**: Obwohl funktionsreich, sind die Anpassungsmöglichkeiten der Benutzeroberfläche und der Prozesse von Salesforce in der Praxis relativ begrenzt, was eine präzise Anpassung des Systems an die spezifischen Bedürfnisse der verschiedenen Geschäftsbereiche von HouseWell erschwert.

### 2. Kintone: Einfach zu bedienen, aber es fehlt an Flexibilität

Als eine in Japan entwickelte Plattform hat Kintone klare Vorteile in Bezug auf Benutzerfreundlichkeit, Bedienung und die schnelle Einführung neuer Prozesse. Viele kleine und mittlere Unternehmen schätzen es. HouseWell hatte anfangs große Hoffnungen, aber eine genauere Betrachtung zeigte:

* **Zu starre Module:** Das Low-Code-Modell von Kintone ermöglicht eine schnelle Bereitstellung von Geschäftsprozessen. Die Systemmodule sind jedoch recht standardisiert und bieten nur begrenzten Spielraum für Personalisierung. Dies machte es schwierig, die genauen Anforderungen komplexer Geschäftsszenarien zu erfüllen.
* **Begrenzte Skalierbarkeit:** HouseWell plante, später sein CRM, die HR-Systeme und die Verwaltungsabläufe zu integrieren. Die geschlossene Architektur und die begrenzten API-Fähigkeiten von Kintone erwiesen sich als Nachteil und konnten die langfristige Strategie nicht unterstützen.

### 3. NocoBase: Sowohl leistungsstark als auch flexibel

Anfangs war NocoBase nur eine weitere Option auf ihrer Bewertungsliste. Aber je tiefer der Vergleich ging, desto mehr zeigte es seine starke Flexibilität und Kontrollmöglichkeit.

* Hochflexible Datenmodellierungs- und Oberflächendesign-Fähigkeiten, die fast perfekt auf die Geschäftsanforderungen von HouseWell abgestimmt werden konnten.
* Ein Einmalkaufmodell, das keine laufenden hohen Abonnementgebühren bedeutet und die Gesamtkosten überschaubar hält.
* Starke API-Integrationsfähigkeiten, die eine nahtlose Verbindung mit bestehenden Systemen wie Salesforce ermöglichen und Raum für zukünftige Systemintegrationen bieten.
* Vollständig quelloffen, was tiefgreifende Anpassungen und Weiterentwicklungen erleichtert. Dies bietet auch eine technische Grundlage für die mögliche Standardisierung des Systems für die externe Nutzung zu einem späteren Zeitpunkt.

Nach gründlichen Funktionstests und Kostenbewertungen kam das Team zu dem Schluss, dass NocoBase nicht nur in Bezug auf die Funktionalität hochflexibel ist, sondern auch in puncto Offenheit und Skalierbarkeit hervorragt – ein System, das sich gemeinsam mit dem Unternehmen weiterentwickeln und wachsen kann.

Nach sorgfältiger Abwägung entschied sich HouseWell letztendlich für NocoBase.

## **Von der Entscheidung zum Live-Gang: Was hat NocoBase verändert?**

Nach der Entscheidung für NocoBase machte sich das HouseWell-Team sofort an die Implementierung.

### **Phase Eins: Schnelle Einrichtung eines Verwaltungs- und HR-Systems**

Als erstes Projekt begann HouseWell damit, seine papierbasierten und ineffizienten HR- und Verwaltungsprozesse auf das NocoBase-System zu verlagern:

* **Vollständige Digitalisierung des Urlaubsantragsprozesses**

Bisher mussten monatlich etwa 30 Urlaubsanträge als Papierkopien im Unternehmen zirkulieren. Mit NocoBase reichen die Mitarbeiter Anträge einfach über ein Online-Formular ein. Genehmigende erhalten sofortige Benachrichtigungen und können online genehmigen. Der gesamte Prozess ist reibungslos und unkompliziert, was menschliche Fehler und Informationsverluste erheblich reduziert. Nach der Einführung des Systems wurde dieser häufige Prozess sofort nahezu papierlos, was zu einer deutlichen Steigerung der Managementeffizienz führte.

![Vollständige Digitalisierung des Urlaubsantragsprozesses](https://static-docs.nocobase.com/3-ck72ql.png)

![Vollständige Digitalisierung des Urlaubsantragsprozesses](https://static-docs.nocobase.com/4-ekoebi.png)

* **Klarere Sichtbarkeit der HR-Informationen**

Dank der flexiblen Datenmodellierungs- und Anpassungsfunktionen von NocoBase baute HouseWell schnell Module für Dinge wie die Mitarbeiterorganisationsstruktur, Rekrutierungskanäle und HR-Statistiken auf. Die Personalabteilung kann nun den Einstellungsstatus jeder Abteilung und die Verteilung der Mitarbeiter auf verschiedene Rollen in Echtzeit einsehen. Das gesamte HR-Bild des Unternehmens wurde viel klarer.

Im Vergleich zur Verwaltung von Informationen über verstreute Tabellenkalkulationen und E-Mails zuvor war die Effizienzsteigerung beträchtlich.

![Klarere Sichtbarkeit der HR-Informationen](https://static-docs.nocobase.com/5-3aw62g.png)

### Phase Zwei: Systemintegration und Entwicklung eines Immobilienverwaltungspakets

Vor der Einführung von NocoBase nutzte HouseWell bereits Salesforce für das Kundenmanagement, wobei alle Kundendetails und Transaktionsaufzeichnungen dort gespeichert waren. Mit der weiteren Nutzung von NocoBase erkannten sie allmählich, dass es nicht nur für flexibles HR-Management geeignet war, sondern auch die Entwicklung eines CRM-Systems voll unterstützen konnte.

Das technische Team begann sofort mit der Arbeit an der Systemintegration:

* **Durch die Nutzung der leistungsstarken API-Fähigkeiten von NocoBase** synchronisierten sie bestehende Kundendaten aus Salesforce und ermöglichten so einen nahtlosen Datenaustausch. Diese effiziente Integration erlaubte es dem Team, sowohl Kundeninformationen als auch interne Geschäftsdaten an einem Ort abzurufen, doppelte Dateneingaben zu vermeiden und die Datenkonsistenz zu verbessern.
* **Unter Verwendung der anpassbaren Datenmodelle und Seitenlayouts von NocoBase** entwickelt HouseWell derzeit eine neue, auf die Branche zugeschnittene Immobilienverwaltungslösung, die auf ihrer Expertise im Kundenmanagement aufbaut. (Veröffentlichung in Kürze geplant)

Durch diesen Prozess entwickelte sich NocoBase von einem bloßen "Ergänzungswerkzeug" zur Kernplattform für HouseWell, um ein einheitliches Geschäftssystem zu schaffen.

### **Echtes Feedback nach der Implementierung**

Nach der Implementierung von NocoBase teilte das HouseWell-Team klares Feedback mit:

* Die Flexibilität des Systems und die UI-Anpassung entsprachen voll und ganz ihren Erwartungen.
* Die API-Integrationsfähigkeiten übertrafen ihre Erwartungen und machten die Datenintegration reibungsloser.
* Die Gesamtkosten wurden erheblich reduziert, was es für den Langzeiteinsatz wesentlich wirtschaftlicher macht.
* Das NocoBase-Supportteam war sehr reaktionsschnell, und alle aufgetretenen Probleme wurden schnell gelöst.

## **Größere Ambitionen: Vom Systemnutzer zum Lösungsanbieter**

HouseWell bleibt nicht bei der Aufrüstung seiner eigenen internen Systeme stehen. Aufbauend auf ihrer tiefen Erfahrung im Immobilienbereich planen sie, mit NocoBase standardisierte Informationsmanagementsysteme für die Branche zu erstellen. Diese wollen sie dann als reproduzierbare Lösungen anderen Unternehmen anbieten.

Dank des Open-Source-Charakters und des flexiblen Einmalkaufmodells von NocoBase kann HouseWell es frei anpassen und weiterentwickeln. Dies ermöglicht es ihnen, Lösungen perfekt auf die spezifischen Bedürfnisse verschiedener Kunden in der Immobilienbranche zuzuschneiden.

Dieser strategische Schritt verwandelt HouseWell von einem bloßen Nutzer interner Systeme in einen Lösungsanbieter für die gesamte Immobilienbranche.

Dies hilft ihnen nicht nur, ihre Systementwicklungskosten schnell wieder hereinzuholen, sondern eröffnet dem Unternehmen auch neue Einnahmequellen und vervielfacht den Wert ihrer IT-Investition.

## **Fazit**

HouseWells Entscheidung für NocoBase anstelle von Salesforce oder Kintone war weit mehr als eine einfache Softwareentscheidung – es war ein **präziser, zukunftsorientierter strategischer Schachzug**:

* **Von** hohen langfristigen Kosten zu einem flexiblen und kosteneffizienten Einmalkaufmodell.
* **Von** starren Funktionsmodulen zu einer hochgradig anpassbaren offenen Architektur.
* **Vom** Systemnutzer zum Entwickler und Anbieter von Branchenlösungen.

Die Erfolgsgeschichte von HouseWell zeigt uns, dass **wahre digitale Transformation darin liegt, eine Lösung zu finden, die wirklich mit Ihren Geschäftsanforderungen und Ihrer zukünftigen Strategie übereinstimmt.**

Wir hoffen, dass die Geschichte von HouseWell andere Unternehmen inspiriert.

**Verwandte Lektüre:**

* [Wie Second-Brain mit NocoBase ein KI-System für Finanzinstitute aufbaute](https://www.nocobase.com/en/blog/second-brain)
* [Wie die Nr. 1 KI-Diktiergerät-Marke ihre internen Systeme aufbaute](https://www.nocobase.com/en/blog/plaud)
* [Jenseits von Tabellenkalkulationen: Classmethods Mitarbeiterdatenmanagement mit NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [Wie eine Möbelfabrik ihr eigenes ERP baute – ganz ohne Programmierung](https://www.nocobase.com/en/blog/olmon)
* [Vom Designer zum Entwickler: L&As digitale Transformation mit NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Wie KIGLAND mit Open-Source-Tools die Produktion kundenspezifischer Anime-Masken skalierte](https://www.nocobase.com/en/blog/kigland)
