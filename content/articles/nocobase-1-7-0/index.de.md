---
title: "NocoBase v1.7.0 offiziell veröffentlicht"
description: "Verbessertes Berechtigungsmanagement, optimierte Systemleistung und Open-Source-Plugins zur umfassenden Verbesserung von Funktionalität und Benutzererfahrung"
---

## Neue Funktion

### Rollenvereinigung

Die Rollenvereinigung ist ein Berechtigungsverwaltungsmodus. Abhängig von den Systemeinstellungen können Systementwickler wählen, ob sie `Unabhängige Rollen`, `Rollenvereinigung zulassen` oder `Rollenvereinigung zulassen` verwenden möchten, um unterschiedliche Berechtigungsanforderungen zu erfüllen.

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

Referenz: [Rollenvereinigung](https://docs.nocobase.com/handbook/acl/manual)

### Verifizierung und Zwei-Faktor-Authentifizierung (2FA)

Die ursprüngliche Verifizierungscode-Funktion wurde zu einem umfassenden Verifizierungsverwaltungssystem aufgewertet, das mehrere Authentifizierungsmethoden (wie TOTP) unterstützt. Das System unterstützt auch die Zwei-Faktor-Authentifizierung (2FA), die bei der Anmeldung zusätzlich zum Passwort einen weiteren Verifizierungsschritt erfordert, was die Kontosicherheit erheblich erhöht.

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

Referenz:

* [Verifizierung](https://docs.nocobase.com/handbook/verification)
* [Zwei-Faktor-Authentifizierung](https://docs.nocobase.com/handbook/two-factor-authentication)
* [TOTP-Authentifikator](https://docs.nocobase.com/handbook/verification-totp-authenticator)

### Vorlagendruck

Der Vorlagendruck unterstützt jetzt die dynamische Darstellung von Bildern und Barcodes.

![](https://static-docs.nocobase.com/20250414211130-2025-04-14-21-11-31.png)

Referenz: [Vorlagendruck](https://docs-cn.nocobase.com/handbook/action-template-print#%E5%9C%A8-docx-%E6%96%87%E4%BB%B6%E4%B8%AD%E6%8F%92%E5%85%A5%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87)

### Mehrfach-Stichwortfilter

Das Plugin für die Mehrfach-Stichwortfilterung fügt der NocoBase-Plattform leistungsstarke Textfilterfunktionen hinzu, mit denen Sie Daten mit mehreren Stichwörtern filtern können, was die Flexibilität und Effizienz von Datenabfragen erheblich verbessert.

![20250603152726_rec_-ix3j8w.gif](https://static-docs.nocobase.com/20250603152726_rec_-ix3j8w.gif)

Referenz: [Mehrfach-Stichwortfilter](https://docs.nocobase.com/handbook/multi-keyword-filter)

### Datumsfilter unterstützt Auswahl relativer Datumsbereiche

Unterstützt das Filtern nach benutzerdefinierten Zeitversätzen (Tage/Wochen/Monate/Quartale/Jahre) und bestimmten Daten, was flexiblere Zeitbereichsabfragen ermöglicht.

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### Linksseitige Variablen

Die linksseitigen Variablen in einer Bedingung werden verwendet, um das "zu beurteilende Objekt" in der Verknüpfungsregel zu definieren, d.h. die Bedingung wertet den Wert dieser Variable aus, um zu bestimmen, ob das Verknüpfungsverhalten ausgelöst werden soll.

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

Referenz: [Linksseitige Variablen](https://docs.nocobase.com/handbook/ui/linkage-rule#left-side-variables)

### Geerbte Vorlage

Geerbte Vorlagen sind ideal, wenn Blöcke den grundlegenden Aktualisierungen einer Vorlage folgen, aber auch spezifische Änderungen zulassen sollen. Blöcke erben die Einstellungen der Vorlage und können diese erweitern oder überschreiben. Einstellungen, die im Block nicht geändert wurden, werden automatisch mit der Vorlage aktualisiert.

![Hauptbildschirm](https://static-docs.nocobase.com/main-screen-block-templates.png)

Referenz: [Geerbte Vorlage](https://docs.nocobase.com/handbook/block-template#inherited-template)

### Block-Verknüpfungsregeln

Block-Verknüpfungsregeln ermöglichen es Benutzern, die Sichtbarkeit von Blöcken dynamisch zu steuern und so die Anzeige von Elementen auf Blockebene zu verwalten.

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

Referenz: [Block-Verknüpfungsregeln](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-linkage-rule)

### Nach erfolgreicher Übermittlung

Nach erfolgreicher Übermittlung wird das Aktualisieren von Daten in anderen Blöcken und das Navigieren zu Detailseiten mit Parametern unterstützt.

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

Referenz: [Nach erfolgreicher Übermittlung](https://docs.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### Workflow-Kategorieverwaltung

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

### Open-Source-Plugins für Abteilung und Anhang-URL

![image-br8u55.png](https://static-docs.nocobase.com/image-br8u55.png)

## Verbesserungen

### Verbesserungen der Verknüpfungsregel-Eigenschaften

* Auswählbare Felder unterstützen jetzt konfigurierbare Optionen
* Datumsfelder unterstützen jetzt das Festlegen eines Datumsbereichs

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

Referenz: [Feld-Verknüpfungsregeln](https://docs.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### Import Pro

Die Importkonfiguration unterstützt jetzt die Verwendung mehrerer Felder zur eindeutigen Identifizierung von Datensätzen sowie Optionen zum Überschreiben oder Ignorieren leerer Zellen während des Imports.

![20250603153457_rec_-9zfsfx.gif](https://static-docs.nocobase.com/20250603153457_rec_-9zfsfx.gif)

Referenz:[Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Leistungsoptimierung für den Export von XLSX

* Speicherüberlauf und Einfrieren der Anwendung beim Exportieren großer Datentabellen
* Es besteht eine Wahrscheinlichkeit für doppelte Daten in den exportierten Daten
* Abfrageoptimierung für exportierte Daten basierend auf Indizes, eindeutigen Einschränkungen und Indexstrategien
* Hinzufügen einer Export-Warteschlange und Festlegen der Parallelitätsnummer über Umgebungsvariablen.

![20250505171706](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250505171706.png)

Referenz:

* [Parallele Exporte](https://docs.nocobase.com/handbook/action-export-pro#concurrent-exports)
* [Über die Leistung](https://docs.nocobase.com/handbook/action-export-pro#about-performance)

### Leistungsoptimierung für den Import von XLSX-Dateien

* Änderung der ursprünglichen Einzelzeilen-Importstrategie zur Batch-Einfügung
* Rekonstruktion des Mechanismus zur Duplikaterkennung. Änderung von Einzelzeilenverarbeitung zu Batchverarbeitung, während die Aktualisierungslogik und das Auslösen von Workflows unverändert bleiben

Referenz: [Über die Leistung](https://docs.nocobase.com/handbook/action-import-pro#about-performance)

### Workflow-Ausführungseffizienz um 100% verbessert

![image-ligrnm.png](https://static-docs.nocobase.com/image-ligrnm.png)
