---
title: "Zwei kommerzielle Plugins sind jetzt Open Source"
description: "Erläutert die Gründe für die Open-Source-Stellung, die Funktionen der Plugins und die Anpassungen für bestehende Kunden."
---

Basierend auf Nutzerfeedback haben wir uns entschieden, zwei kommerzielle Workflow-Plugins als Open Source zu veröffentlichen:

* [JSON-Berechnung](https://v2.docs.nocobase.com/workflow/nodes/json-query)
* [JSON-Variablenzuordnung](https://v2.docs.nocobase.com/workflow/nodes/json-variable-mapping)

## Warum Open Source?

Diese Plugins gehören zu den am häufigsten in Workflows verwendeten und werden oft nach SQL- oder HTTP-Request-Knoten benötigt. Als sie kommerzielle Plugins waren, konnten Community-Edition-Nutzer den HTTP-Request-Knoten nicht vollständig nutzen, was eine schlechte Erfahrung darstellte. Deshalb machen wir sie jetzt Open Source.

## Plugin-Übersicht

### JSON-Berechnung

Verarbeitet komplexe JSON-Daten, die von vorgelagerten Knoten erzeugt werden, und ermöglicht es Ihnen, die Daten zu berechnen, zu extrahieren oder umzuformen.

Häufige Anwendungsfälle sind:

* Ergebnisse von SQL-Abfragen
* Daten, die von HTTP-Anfragen zurückgegeben werden

Es hilft, diese Ausgaben in die Variablenformate und Feldwerte umzuwandeln, die von nachgelagerten Knoten benötigt werden.

### JSON-Variablenzuordnung

Ordnet komplexe JSON-Strukturen Variablen zu, die in späteren Workflow-Schritten einfacher zu verwenden sind.

Häufige Anwendungsfälle sind:

* Extrahieren von Schlüsselfeldern aus verschachtelten JSON-Daten, die von APIs oder SQL zurückgegeben werden
* Umbenennen von Feldern oder Anpassen von Array-Strukturen
* Vorbereiten sauberer Variablen für nachfolgende Knoten

Mit diesem Plugin vermeiden Sie, in jedem Knoten wiederholt tiefe Feldpfade konfigurieren zu müssen.

## Anpassungen für bestehende Kunden

Ihre Berechtigungen bleiben unverändert. Wir werden Plugin-Punkte wie folgt erstatten:

* *Lebenslange Nutzung, 1 Jahr Upgrade* → 2 Punkte
* *Lebenslange Nutzung & Upgrade* → 4 Punkte

Diese Anpassungen werden bis zum 23. November 2025 für alle bestehenden Kunden abgeschlossen, und das Mutterunternehmen von NocoBase behält sich die endgültige Auslegung vor.

## Abschließend

Vielen Dank an alle NocoBase-Nutzer und Open-Source-Mitwirkenden. Ihr Feedback und Ihre Issues helfen uns, mit jedem Release besser zu werden. Wir werden weiterhin schneller voranschreiten und leistungsfähigere Funktionen zu einem noch freundlicheren Preis anbieten.
