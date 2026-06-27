---
title: "Ankündigung von NocoBase v1.9.0"
description: "Verbesserte Datenvalidierung und Aufgabenplanung, Unterstützung von Service-Entkopplung und Graceful Shutdown zur Steigerung der Systemstabilität und Flexibilität."
---

## Neue Funktion

### Feldvalidierungsregeln

Unterstützt die Konfiguration mehrerer Validierungsregeln für Felder – wie Pflichtfeld, Format, Länge, Bereich und benutzerdefinierte Ausdrücke.
Eingegebene Daten werden beim Absenden des Formulars automatisch validiert, um Genauigkeit und Konsistenz sicherzustellen.
Validierungsregeln können flexibel in den Feldeinstellungen konfiguriert werden.

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

Referenz: [Feldvalidierung](https://docs.nocobase.com/handbook/data-modeling/collection-fields/validation)

### Tabellenblock unterstützt Spalteneinstellungen

Der Tabellenblock enthält jetzt eine Spalteneinstellungsfunktion, die es Benutzern ermöglicht, die Spaltenreihenfolge, Sichtbarkeit und Fixierposition anzupassen, ohne den Bearbeitungsmodus zu verlassen – was die Datenanzeige flexibler und benutzerfreundlicher macht.

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### Trigger-Modus "Vor dem Speichern von Daten" für Genehmigungen

Genehmigungen unterstützen jetzt einen Trigger-Modus "Vor dem Speichern von Daten" – wenn aktiviert, werden die Daten beim Start der Genehmigung nicht gespeichert und erst nach der Genehmigung gespeichert.

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### Genehmigungs-Trigger gibt Genehmigungs-ID-Variable frei

Der Genehmigungs-Trigger gibt jetzt die Genehmigungs-ID-Variable frei, sodass sie in Workflows und Automatisierungsprozessen referenziert werden kann für flexiblere Konfiguration und Datenverfolgung.

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### [Async Task Manager] Unterstützung für Dienstaufteilung mittels Umgebungsvariablen und Warteschlangen

Führt einen neuen Mechanismus zur Dienstaufteilung ein, der es asynchronen Aufgaben- und Workflow-Diensten ermöglicht, unabhängig über die Umgebungsvariable `WORKER_MODE` zu laufen – was Multi-Node-Bereitstellung und Leistungsoptimierung ermöglicht.

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

Referenz: [Dienstaufteilung](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting)

### Neue Ereigniswarteschlange zur Verarbeitung von Warteschlangennachrichten

Fügt eine dedizierte Ereigniswarteschlange zur Verarbeitung von Systemwarteschlangennachrichten hinzu, was die asynchrone Aufgabenverarbeitung und Zuverlässigkeit verbessert.

Referenz: [Cluster-Modus: Nachrichtenwarteschlange](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode#message-queue)

### Lebenszyklusunterstützung für Graceful Shutdown

Führt eine Graceful-Shutdown-Behandlung ein.
Wenn der Anwendungsprozess ein SIGTERM- oder SIGINT-Signal empfängt, startet er jetzt eine ordnungsgemäße Herunterfahrabfolge, um Probleme durch laufende Vorgänge zu verhindern.

## Verbesserungen

### Systemtabellen verwenden 53-Bit-Snowflake-ähnliche IDs

Aktualisiert die IDs von Systemtabellen, die zuvor automatisch inkrementierende Primärschlüssel ohne globale Eindeutigkeit verwendeten, auf 53-Bit-Snowflake-ähnliche IDs für global eindeutige Identifikation.

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

### Aufgaben aus deaktivierten Workflows anzeigen und fortsetzen

Manuelle Aufgabenblöcke zeigen jetzt ausstehende Aufgaben auch aus deaktivierten Workflows an und erlauben Benutzern, diese weiter zu bearbeiten.

### Mail-Manager-Verbesserungen

* Mail-Daten unterstützen Resynchronisation
* Ermöglicht die Größenänderung von in den E-Mail-Editor eingefügten Bildern.
* Der Rich-Text-Editor unterstützt jetzt weiche Zeilenumbrüche, was die E-Mail-Formatierung verbessert.
* Verbesserte Leistung der E-Mail-Liste für flüssigere Bedienung.

![20251031234300_rec_-jifryr.gif](https://static-docs.nocobase.com/20251031234300_rec_-jifryr.gif)

### Optimierung des Workflow-Moduls

* Optimierte Abfrageleistung bei der Workflow-Warteschlangenausführung durch Einführung getrennter Felder und Indizes für schnellere Datenabfragen.

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)
