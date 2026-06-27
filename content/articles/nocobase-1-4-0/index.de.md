---
title: "NocoBase v1.4.0 offiziell veröffentlicht"
description: "Öffentliche Formulare, neue Datenquellen und weitere Funktionen."
---

## Wichtige neue Funktionen

### Vereinfachung des Hinzufügens und Aktualisierens von Plugins

![20241201170853](https://static-docs.nocobase.com/20241201170853.png)

* Die Plugin-Liste liest nun direkt aus dem lokalen Verzeichnis.
* Die Prozesse zum Hinzufügen und Aktualisieren von Plugins wurden zusammengelegt.
* Die Oberfläche unterstützt die Batch-Aktivierung von Plugins.
* Der Download- und Upgrade-Prozess für kommerzielle Plugins wurde vereinfacht.

Referenzdokumentation:

* [Installation und Upgrade von Plugins](https://docs.nocobase.com/welcome/getting-started/plugin)
* [Versionshinweise / Vereinfachung des Hinzufügens und Aktualisierens von Plugins](https://www.nocobase.com/en/blog/simplify-the-process-of-adding-and-updating-plugins)

### Benachrichtigung

![20241201171806](https://static-docs.nocobase.com/20241201171806.png)

* **Benachrichtigung: In-App-Nachricht**
  Ermöglicht Benutzern den Empfang von Echtzeit-Benachrichtigungen innerhalb der NocoBase-Anwendung;
* **Benachrichtigung: E-Mail**
  Wird zum Senden von E-Mail-Benachrichtigungen mit integriertem SMTP-Transport verwendet. Details;
* **Benachrichtigung: WeCom**
  Sendet Benachrichtigungen über den WeCom-Kanal.

Referenzdokumentation:

* [Benachrichtigungsmanager](https://docs.nocobase.com/handbook/notification-manager)

### Benutzerdatensynchronisation

![20241201172843](https://static-docs.nocobase.com/20241201172843.png)

Referenzdokumentation:

* [Benutzerdatensynchronisation](https://docs.nocobase.com/handbook/user-data-sync)

### Backup-Manager

![20241201170237](https://static-docs.nocobase.com/20241201170237.png)

Referenzdokumentation:

* [Backup-Manager](https://docs.nocobase.com/handbook/backups)

### Öffentliche Formulare

Teilen Sie öffentliche Formulare extern, um Informationen von anonymen Benutzern zu sammeln.

![20241201165614](https://static-docs.nocobase.com/20241201165614.png)

Referenzdokumentation:

* [Öffentliche Formulare](https://docs.nocobase.com/handbook/public-forms)

### Datenquelle: KingbaseES

Verwenden Sie die KingbaseES-Datenbank als Datenquelle, entweder als Hauptdatenbank oder als externe Datenbank.

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

Referenzdokumentation:

* [Datenquelle: KingbaseES-Datenbank](https://docs.nocobase.com/handbook/data-source-kingbase)

### Datenquelle: Externes Oracle

Verwenden Sie externe Oracle-Datenbanken als Datenquelle.

![628abc5eb797e6b903d4b548f773a13b.png](https://static-docs.nocobase.com/628abc5eb797e6b903d4b548f773a13b.png)

Referenzdokumentation:

* [Externe Datenquelle: Oracle](https://docs.nocobase.com/handbook/data-source-external-oracle)

### Sammlungsfeld: Anhänge (URL)

Unterstützt URL-basierte Anhänge.

![e8772bec3d4b1771c1b21d087c9a4185.png](https://static-docs.nocobase.com/e8772bec3d4b1771c1b21d087c9a4185.png)

Referenzdokumentation:

* [Datentabellenfeld: Anhänge (URL)](https://docs.nocobase.com/handbook/field-attachment-url)

### Feldkomponente: Maske

![20241201165938](https://static-docs.nocobase.com/20241201165938.png)

Referenzdokumentation:

* [Feldkomponente: Maske](https://docs.nocobase.com/handbook/field-component-mask)

### Workflow: JavaScript

JavaScript-Knoten ermöglichen es Benutzern, JavaScript innerhalb eines Workflows auszuführen. Das Skript kann Variablen von vorgelagerten Knoten im Prozess als Parameter verwenden, und der Rückgabewert des Skripts kann in nachgelagerten Knoten verwendet werden.

![20241202203655](https://static-docs.nocobase.com/20241202203655.png)

Referenzdokumentation:

* [Workflow-Knoten - JavaScript](https://docs.nocobase.com/handbook/workflow-javascript)

### Datenvisualisierung: ECharts

ECharts wurde hinzugefügt, unterstützt Trichter-, Radar- und weitere Diagramme und bietet benutzerfreundlichere Konfigurationen.

![data-visualization-echarts](https://static-docs.nocobase.com/202410091022965.png)

Referenzdokumentation:

* [Datenvisualisierung: Echarts](https://docs.nocobase.com/handbook/data-visualization-echarts)

### Block: Mehrschritt-Formular

Unterteilen Sie das Formular mit vielen Feldern in mehrere Schritte, um die Benutzer zu entlasten.

![a503e153e8d714b9ca56f512142aeef1.png](https://static-docs.nocobase.com/a503e153e8d714b9ca56f512142aeef1.png)

Referenzdokumentation:

* [Block: Mehrschritt-Formular](https://docs.nocobase.com/handbook/block-multi-step-from)

### Block: Aktionspanel

Entwickelt, um verschiedene Schnellaktionen aufzunehmen, unterstützt derzeit:

* Link
* QR-Code scannen
* Popup
* Benutzerdefinierte Anfrage

Unterstützt sowohl Raster- als auch Listenlayouts.

![9942e6741e99195713f9e2981b02f228.png](https://static-docs.nocobase.com/9942e6741e99195713f9e2981b02f228.png)

Referenzdokumentation:

* [Block: Aktionspanel](https://docs.nocobase.com/handbook/block-action-panel)

## Entfernte Funktionen

### Veraltetes Backup- und Wiederherstellungs-Plugin

Seit NocoBase v0.19 haben wir das Plugin `@nocobase/plugin-backup-restore` für die Anwendungssicherung und -wiederherstellung eingeführt. Benutzerfeedback zeigte jedoch mehrere Einschränkungen in seiner Funktionalität:

1. Unfähigkeit, Datenbank-Metadaten auf Schemaebene zu sichern und wiederherzustellen, wie z. B. Standardwerte für Datenbankfelder und eindeutige Indizes.
2. Konnte Datenbankobjekte wie Ansichten, gespeicherte Prozeduren, Funktionen und Trigger während der Sicherung oder Wiederherstellung nicht verarbeiten.
3. Erforderte die individuelle Konfiguration von `dumpRules` für jedes Plugin-Formular, was oft benutzerdefinierte Logik von Plugin-Entwicklern erforderte, um Fehler im Sicherungs- oder Wiederherstellungsprozess zu vermeiden.
4. Das komplexe Design der Sicherungsgruppierung erhöhte die kognitive Belastung und konnte bei falscher Auswahl zu Sicherungsfehlern oder Datenverlust führen.
5. Der Sicherungs- und Wiederherstellungsprozess fand auf der Anwendungsebene statt, was bedeutete, dass er fehlschlug, wenn die Anwendung nicht gestartet werden konnte.

Nach sorgfältiger Abwägung haben wir uns entschieden, dieses Plugin ab Version v1.4 als veraltet zu kennzeichnen. Für die neue Sicherungslösung lesen Sie bitte die folgende Dokumentation.

Referenzdokumentation:

* [So sichern und stellen Sie NocoBase wieder her](https://www.nocobase.com/en/blog/nocobase-backup-restore)
