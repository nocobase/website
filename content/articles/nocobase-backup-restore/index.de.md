---
title: "So sichern und wiederherstellen Sie NocoBase"
description: "Wie sollte die Sicherung und Wiederherstellung in der neuen Version gehandhabt werden? Dieser Artikel bietet eine detaillierte Einführung in die neue Sicherungslösung."
---

## Hintergrund

Ab NocoBase v0.19 haben wir das Plugin `@nocobase/plugin-backup-restore` für die Sicherung und Wiederherstellung von Anwendungen eingeführt. Die tatsächliche Benutzererfahrung war jedoch nicht ideal, mit den folgenden Hauptproblemen:

1. Das Plugin unterstützt keine Sicherung und Wiederherstellung von Datenbank-Metadaten wie Standardwerten, eindeutigen Indizes usw.
2. Datenbank-Views, gespeicherte Prozeduren, Funktionen, Trigger und andere Komponenten können nicht gesichert oder wiederhergestellt werden.
3. Jedes Plugin-Formular erfordert eine separate Konfiguration von `dumpRules`, und Plugin-Entwickler müssen möglicherweise benutzerdefinierte Logik implementieren. Ohne dies kann die Sicherung und Wiederherstellung leicht fehlschlagen.
4. Das Sicherungsgruppierungsdesign ist komplex und hat eine hohe Lernkurve. Eine falsche Auswahl kann zu Sicherungsfehlern oder Datenverlust führen.
5. Der Sicherungs- und Wiederherstellungsprozess findet auf der Anwendungsebene statt. Wenn die Anwendung nicht startet, schlägt auch die Sicherung oder Wiederherstellung fehl.

Nach sorgfältiger Überlegung haben wir uns ab Version v1.4 entschieden, dieses Plugin zu verwerfen. Wie sollte die Sicherung und Wiederherstellung in der neuen Version gehandhabt werden? Dieser Artikel stellt die neue Sicherungslösung im Detail vor.

## Welche Daten sollten gesichert werden?

Im Sicherungs- und Wiederherstellungsprozess von NocoBase sind hauptsächlich die folgenden Datentypen beteiligt:

* **Hauptdatenbank-Daten**: Unterstützte Hauptdatenbanktypen sind PostgreSQL, MySQL, MariaDB und KingbaseES.
* **Externe Datenbank-Daten**: Unterstützte externe Datenbanktypen sind PostgreSQL, MySQL, MariaDB, MSSQL, Oracle und KingbaseES.
* **Sub-Anwendungs-Datenbankdaten**: Jede Sub-Anwendung ist eine unabhängige Datenbank. Bei Verwendung von PostgreSQL können verschiedene Sub-Anwendungen auch durch Schemas unterschieden werden.
* **Speicherverzeichnis-Daten**: Sie können den gesamten Ordner oder nur bestimmte wichtige Daten sichern, wie z.B.:
  * **Anhangsdaten**: Dateien im Verzeichnis `./storage/uploads`, dem lokalen Speicher für den Dateimanager.
  * **Plugin-Code**: Plugins im Verzeichnis `./storage/plugins`, einschließlich kommerzieller Plugins und Drittanbieter-Plugins.

## Sicherungs- und Wiederherstellungsprozess

### 1. Sichern von Datenbankdaten

Die Sicherungsbefehle für verschiedene Datenbanken lauten wie folgt:

#### PostgreSQL

```bash
pg_dump -U [benutzername] -h [host] -p [port] -F c -b --quote-all-identifiers -f [sicherungs-dateipfad] [datenbank-name]
```

#### MySQL/MariaDB

```bash
mysqldump -u [benutzername] -p -h [host] -P [port] --databases [datenbank-name] --replace --single-transaction --column-statistics=0 --skip-lock-tables --routines --triggers > [sicherungs-dateipfad].sql
```

### 2. Wiederherstellen des Backups in der Zieldatenbank der Anwendung

Die Wiederherstellungsbefehle für verschiedene Datenbanken lauten wie folgt:

#### PostgreSQL

```bash
pg_restore -U [benutzername] -h [host] -p [port] -d [datenbank-name] --clean --if-exists --no-owner [sicherungs-dateipfad]
```

#### MySQL/MariaDB

```bash
mysql -u [benutzername] -p -h [host] -P [port] [datenbank-name] < [sicherungs-dateipfad].sql
```

### 3. Überschreiben des Speichers der Zielanwendung mit dem Sicherungsspeicher

```bash
# 1. Sichern des Verzeichnisses /app2/storage/ nach /app2/storage-bak/
mv /app2/storage /app2/storage-bak

# 2. Kopieren aller Inhalte von /app1/storage/ nach /app2/storage/
cp -r /app1/storage/. /app2/storage/
```

### 4. Ausführen des Upgrade-Befehls und Starten der Anwendung

```bash
# Aktualisieren der Anwendung
yarn nocobase upgrade

# Starten der Anwendung in der Produktionsumgebung
yarn start

# Starten der Anwendung in der lokalen Entwicklungsumgebung
yarn dev
```

Hinweis:

* Wenn Sie Docker verwenden, starten Sie einfach den Container neu.

## Backups Manager Plugin

Ab NocoBase v1.4 können Benutzer der Professional- oder Enterprise-Edition direkt das brandneue [Backups Manager](https://docs.nocobase.com/handbook/backups) Plugin verwenden, um die Sicherung und Wiederherstellung von Anwendungsdaten einfach zu verwalten.
