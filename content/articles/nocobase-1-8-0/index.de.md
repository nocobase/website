---
title: "Ankündigung von NocoBase v1.8.0"
description: "Verbesserter Authentifizierungsprozess, Unterstützung benutzerdefinierter statistischer Variablen und E-Mail-Verwaltungs-Upgrades, Optimierung der Workflow-Erfahrung und mobilen Interaktion"
---

## Neue Funktion

### Passwort vergessen – E-Mail-Wiederherstellung unterstützt

Benutzer können ihre Passwörter jetzt per E-Mail wiederherstellen. Aktivieren Sie diese Funktion in **Einstellungen > Authentifizierung > Passwort vergessen**, konfigurieren Sie einen E-Mail-Benachrichtigungskanal und passen Sie die E-Mail zum Zurücksetzen des Passworts an (unterstützt Variablen und HTML-Format).

![Passwort vergessen – E-Mail-Wiederherstellung unterstützt.gif](https://static-docs.nocobase.com/20250707104631_rec_-ihynhs.gif)

Referenz: [Passwort vergessen](https://docs.nocobase.com/handbook/auth/user#forgot-password)

### Benutzerdefinierte Aggregationsvariablen

Unterstützt die Erstellung statistischer Variablen wie Anzahl, Summe und Durchschnitt. Diese Variablen können in Menü-Badges, Seitenbeschriftungen und anderen Bereichen verwendet werden, um die Oberfläche intuitiver und informationsreicher zu gestalten.

![Benutzerdefinierte Aggregationsvariablen.gif](https://static-docs.nocobase.com/20250707110736_rec_-fzpk98.gif)

Referenz: [Benutzerdefinierte Variablen](https://docs.nocobase.com/handbook/custom-variables)

### E-Mail-Verwaltung

Das E-Mail-Verwaltungsmodul wurde vollständig überarbeitet und unterstützt jetzt das Löschen von E-Mails, den Massenversand, die Einstellung von Synchronisationsintervallen sowie verschiedene Verbesserungen der Benutzerfreundlichkeit.

![E-Mail-Verwaltung.png](https://static-docs.nocobase.com/image-9dyulg.png)

### Datenquellen

Unterstützt das SQL Server BIT-Feld in externen Datenquellen und ermöglicht das bedarfsgesteuerte Laden von Datentabellen aus externen Quellen.

![Datenquellen.png](https://static-docs.nocobase.com/image-rml96b.png)

### Text kopieren

Unterstützt das Kopieren von Textfeldinhalten mit einem Klick.

![Text kopieren.gif](https://static-docs.nocobase.com/20250707105447_rec_-m25b6x.gif)

### [Workflow: HTTP-Anfrageknoten] Unterstützung für `multipart/form-data`-Typ

Beim Konfigurieren eines HTTP-Anfrageknotens in einem Workflow kann jetzt der Inhaltstyp `multipart/form-data` ausgewählt werden. Nach der Aktivierung akzeptiert der Anforderungstext Formular-Dateneingaben – einschließlich `file`-Felder – um Datei-Uploads und ähnliche Szenarien zu unterstützen.

![Workflow.png](https://static-docs.nocobase.com/image-gutu74.png)

### [Workflow: Genehmigung] Ergebnisse des Genehmigungsknotens unterstützen die Erstellung von Genehmigungsdatensatzvariablen

Ausführungsergebnisse von Genehmigungsknoten können jetzt als Variablen in nachfolgenden Knoten verwendet werden, wobei Status und zugehörige Daten automatisch aufgezeichnet werden.

![Workflow: Genehmigung](https://static-docs.nocobase.com/20250614095052.png)

Referenz: [Knotenergebnisse](https://docs.nocobase.com/handbook/workflow-approval/node#node-results)

## Verbesserungen

### Scan-to-Fill-Eingabe

Die generische Texteingabekomponente enthält jetzt eine Option **Scan aktivieren**. Wenn aktiviert, erscheint eine Scan-Schaltfläche auf der rechten Seite des Eingabefelds, die die Dateneingabe über Scan-Geräte ermöglicht. Sie können auch konfigurieren, ob manuelle Eingabe erlaubt ist.

![Scan-to-Fill-Eingabe.png](https://static-docs.nocobase.com/image-u7gfro.png)

Referenz: [Scan aktivieren](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/enable-scan)

### Lokalisierungsunterstützung im Markdown-Block

Markdown-Inhalte unterstützen jetzt die Lokalisierung mit der `{{t 'xxx'}}`-Syntax, um mehrsprachigen Text einzufügen.

![Lokalisierungsunterstützung im Markdown-Block.gif](https://static-docs.nocobase.com/20250707132207_rec_-a1fu68.gif)

Referenz: [Lokalisierung](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#localization)

### Menü-Links unterstützen Öffnen in neuem Fenster

Eine neue Option **"In neuem Fenster öffnen"** wurde für Menü-Links hinzugefügt, mit der Sie das Öffnungsverhalten von Links anpassen können.

![Menü-Links unterstützen Öffnen in neuem Fenster.png](https://static-docs.nocobase.com/image-x0qfsq.png)

### Kalenderblock unterstützt Einstellung des Wochenstarttages

Sie können jetzt den Wochenstarttag der Kalenderansicht anpassen und entweder Sonntag oder Montag wählen, um unterschiedlichen regionalen Vorlieben und Gewohnheiten gerecht zu werden.

![Kalenderblock unterstützt Einstellung des Wochenstarttages.png](https://static-docs.nocobase.com/image-uu5ubi.png)

Referenz: [Wochenstarttag](https://docs.nocobase.com/handbook/calendar#week-start-day)

### Markdown (Vditor) Ansichtsmodus unterstützt Bildklick zum Zoomen

Im Ansichtsmodus können Bilder in Markdown-Inhalten durch Anklicken vergrößert werden, was das Leseerlebnis verbessert.

![Markdown (Vditor) Ansichtsmodus unterstützt Bildklick zum Zoomen.gif](https://static-docs.nocobase.com/20250707134351_rec_-zd0mvw.gif)

### Umfassende Verbesserung der Funktionalität und Leistung des Workflow-Moduls

- Unterstützung der Filterung von Workflows nach weiteren Feldern zur Verbesserung der Sucheffizienz
- Optimierung der mobilen Anzeigestile zur Verbesserung der Benutzerfreundlichkeit
- Ausschluss des Ladens von JSON-Feldern zur deutlichen Verbesserung der Ladeleistung der Ausführungsplanliste
- Hinzufügen einer neuen Log-API für Knotentestläufe
- Anpassung der API-Schnittstelle der `getCollectionFieldOptions`-Methode zur Erhöhung der Flexibilität

![Workflow-Modul.png](https://static-docs.nocobase.com/image-5b3byb.png)

### Funktionserweiterungen und Erfahrungsverbesserungen im Genehmigungsprozess

- Konfigurationsoption für Übertragungs- und Hinzufügen-Auswahllisten von Unterzeichnern hinzugefügt, die die Anzeige weiterer Feldinformationen zur Unterstützung einer genaueren Auswahl ermöglicht
- Zeitangabe in der Zeitleiste auf absolute Zeit umgestellt, um die Lesbarkeit zu verbessern
- Import von genehmigungsbezogenen Datentabellen aus dem Workflow-Plugin, um das Überschreiben lokaler Tabellen zu verhindern
- Anpassung der API-Schnittstellenstruktur von Variablen zur Erhöhung der Flexibilität und Konsistenz

![Genehmigungsprozess.gif](https://static-docs.nocobase.com/20250707141716_rec_-v2nc4q.gif)

### Unterstützung der Konfiguration von Datenbankverbindungspool-Optionen über Umgebungsvariablen

Datenbankverbindungspool-Parameter können flexibel über Umgebungsvariablen eingestellt werden, um die Bereitstellungsflexibilität zu verbessern.

![Unterstützung der Konfiguration von Datenbankverbindungspool-Optionen über Umgebungsvariablen.png](https://static-docs.nocobase.com/image-tz87as.png)

### Kommentarblock unterstützt Paginierung

Unterstützt das seitenweise Laden von Kommentaren, um die Ladeleistung und das Leseerlebnis bei großen Datenmengen zu verbessern.

![Kommentarblock unterstützt Paginierung.gif](https://static-docs.nocobase.com/20250707155143_rec_-ch7qvy.gif)

### Verbesserungen der mobilen Erfahrung

- Benachrichtigungs-Popups an mobile Stile angepasst
- Optimierte mobile Layout-Erkennungslogik zur Verbesserung der Reaktionsgenauigkeit
