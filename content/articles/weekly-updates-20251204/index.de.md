---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Das dieswöchige Update umfasst: Hinzufügen von `Fehlermeldungstransformator`-Optionen in der RESTful-API-Datenquellenkonfiguration, Möglichkeit zur Auswahl, ob im Genehmigungsprozess-UI der Snapshot oder der neueste Datensatz angezeigt werden soll, und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860-djgsxo.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es könnte einige bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.19](https://www.nocobase.com/en/blog/v1.9.19)

*Veröffentlichungsdatum: 04.12.2025*

### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]**
  - Behebt das Problem, wenn bei der Auflistung von Genehmigungen ein OOM-Fehler auftritt, von @mytharcher
  - Behebt das Problem, dass das Popup-Fenster des Genehmigers keinen Titel anzeigt, von @zhangzhonghe

### [v1.9.18](https://www.nocobase.com/en/blog/v1.9.18)

*Veröffentlichungsdatum: 04.12.2025*

### 🐛 Fehlerbehebungen

- **[Aktion: Datensätze importieren]** Importierte Felder stimmen nicht mit den in den ACL-Einstellungen festgelegten Feldern überein ([#8075](https://github.com/nocobase/nocobase/pull/8075)) von @2013xile
- **[Workflow]** Behebt das Problem, dass die Ausführungsseite einen Fehler ausgibt, wenn Jobs auf einem Knoten undefiniert sind ([#8066](https://github.com/nocobase/nocobase/pull/8066)) von @mytharcher
- **[Zugriffskontrolle]** Middleware für Berechtigungsprüfungen bei Assoziationsoperationen für externe Datenquellen hinzugefügt ([#8062](https://github.com/nocobase/nocobase/pull/8062)) von @2013xile
- **[Workflow: Genehmigung]**
  - Behebt das Problem eines Berechtigungsfehlers beim Laden von datensatzbezogenen Genehmigungen im Detail-Drawer, von @mytharcher
  - Behebt das Problem, dass Genehmigungsdatensätze im Rückgabezweig nicht im Job-Ergebnis enthalten sind, von @mytharcher
  - Behebt das Problem, dass der Prozess bei Verzweigung mit Reihenfolge und Gegenzeichnung falsch ist, von @mytharcher

### [v1.9.17](https://www.nocobase.com/en/blog/v1.9.17)

*Veröffentlichungsdatum: 02.12.2025*

### 🐛 Fehlerbehebungen

- **[client]** Behebt das Flackerproblem des Dropdown-Auswahlfelds für Verknüpfungsregeln ([#8018](https://github.com/nocobase/nocobase/pull/8018)) von @zhangzhonghe
- **[acl]** Behebt ein Problem, bei dem ACL-Metainformationen falsch sind, wenn Berechtigungsbereiche externer Datenquellen aktuelle benutzerbezogene Variablen verwenden ([#8013](https://github.com/nocobase/nocobase/pull/8013)) von @2013xile
- **[Theme-Editor]** Aktiviert den Theme-Umschalter auf mobilen Geräten ([#8046](https://github.com/nocobase/nocobase/pull/8046)) von @zhangzhonghe
- **[Multi-App-Manager]** Protokollebene-Einstellungen werden nicht auf Unteranwendungen angewendet ([#8045](https://github.com/nocobase/nocobase/pull/8045)) von @2013xile

### [v1.9.16](https://www.nocobase.com/en/blog/v1.9.16)

*Veröffentlichungsdatum: 02.12.2025*

### 🎉 Neue Funktionen

- **[Datenquelle: REST-API]** `Fehlermeldungstransformator`-Optionen in der RESTful-API-Datenquellenkonfiguration hinzugefügt von @cgyrock

### 🚀 Verbesserungen

- **[client]**
  - Zeigt zusammengeklappte Optionen beim Hovern in der Select-Komponente an ([#8029](https://github.com/nocobase/nocobase/pull/8029)) von @katherinehhh
  - Optimiert Validierungsmeldungen für Untertabellen ([#8001](https://github.com/nocobase/nocobase/pull/8001)) von @katherinehhh
- **[Workflow]** "main"-Datenquellenkontext für UserSelect hinzugefügt, um eine allgemeinere Komponente bereitzustellen, die auch an anderer Stelle verwendet werden kann ([#8010](https://github.com/nocobase/nocobase/pull/8010)) von @mytharcher
- **[Workflow: Genehmigung]** Verwendung einer gemeinsamen Komponente zur Reduzierung von doppeltem Code von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Behebt einen Lazy-Load-Fehler in Variable.Input, der dazu führt, dass das Variablenoptionsmenü falsch neu gerendert wird ([#8009](https://github.com/nocobase/nocobase/pull/8009)) von @mytharcher
- **[Aktion: Datensätze importieren]** Behebt das Problem, dass ein Fehler ausgelöst wird, wenn ein Feld in der importierenden xlsx-Datei einen `null`-Wert hat ([#8037](https://github.com/nocobase/nocobase/pull/8037)) von @mytharcher
- **[Workflow]** Behebt das Problem, dass die Warteschlange vor dem Veröffentlichen von Nachrichten geschlossen wurde ([#8003](https://github.com/nocobase/nocobase/pull/8003)) von @mytharcher
- **[Workflow: Unterworkflow]** Behebt das Problem, dass der ausgewählte Workflow "N/A" anzeigt, wenn die Workflow-Anzahl größer als 200 ist, von @mytharcher
- **[Workflow: Genehmigung]**
  - Behebt ein Berechtigungsproblem beim Abrufen von `approvalRecords.reassignee` aufgrund einer Änderung von `RemoteSelect` von @mytharcher
  - Behebt das Problem, dass die Druckaktion nicht funktioniert, wenn die Seite mit geöffnetem Modal aktualisiert wird, von @mytharcher

### [v1.9.15](https://www.nocobase.com/en/blog/v1.9.15)

*Veröffentlichungsdatum: 28.11.2025*

### 🐛 Fehlerbehebungen

- **[client]**
  - Vermeidet einen Fehler beim Öffnen der Standardwerteinstellungen ([#7997](https://github.com/nocobase/nocobase/pull/7997)) von @mytharcher
  - Behebt einen Fehler beim Hinzufügen von Unterdatensätzen im Assoziationsbaum-Tabellenblock ([#7989](https://github.com/nocobase/nocobase/pull/7989)) von @katherinehhh
- **[Abteilungen]** Behebt das Problem, dass abteilungsassoziierte Felder nicht bearbeitet werden konnten ([#7462](https://github.com/nocobase/nocobase/pull/7462)) von @heziqiang
- **[Sammlung: Baum]** Behebt Aktualisierungsfehler der Pfadtabelle, die durch falsche Baum-Elternfeldsuche verursacht wurden ([#8000](https://github.com/nocobase/nocobase/pull/8000)) von @2013xile
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Behebt das Problem, dass das m2m-Array-Feld in der Untertabelle nicht aktualisiert werden konnte ([#7998](https://github.com/nocobase/nocobase/pull/7998)) von @cgyrock
- **[Workflow: Genehmigung]**
  - Behebt fehlende Antragstellerdaten im Ausführungskontext nach erneuter Einreichung durch den Benutzer, von @mytharcher
  - Behebt das Problem, dass der Kommentar im Job-Ergebnis null ist, nachdem der Benutzer eine Genehmigung mit Kommentar eingereicht hat, von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.50](https://www.nocobase.com/en/blog/v2.0.0-alpha.50)

*Veröffentlichungsdatum: 02.12.2025*

### 🚀 Verbesserungen

- **[client]**
  - Unterstützt die Einstellung "Mehrere erlauben" in der Anhang-Upload-Komponente ([#8052](https://github.com/nocobase/nocobase/pull/8052)) von @katherinehhh
  - Zeigt zusammengeklappte Optionen beim Hovern in der Select-Komponente an ([#8029](https://github.com/nocobase/nocobase/pull/8029)) von @katherinehhh
  - Zeigt zusammengeklappte Optionen beim Hovern in der Select-Komponente an ([#8030](https://github.com/nocobase/nocobase/pull/8030)) von @katherinehhh
- **[KI-Mitarbeiter]** Fehlendes Anbieterfeld zum LLM-Hinzufügen-Formular hinzugefügt ([#8049](https://github.com/nocobase/nocobase/pull/8049)) von @heziqiang
- **[Workflow]** "main"-Datenquellenkontext für UserSelect hinzugefügt, um eine allgemeinere Komponente bereitzustellen, die auch an anderer Stelle verwendet werden kann ([#8010](https://github.com/nocobase/nocobase/pull/8010)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**
  - Behebt Problem, dass "N/A" angezeigt wird, nachdem "Mehrere erlauben" in der Viele-zu-viele-Assoziationsdatensatzauswahl deaktiviert wurde ([#8050](https://github.com/nocobase/nocobase/pull/8050)) von @katherinehhh
  - Behebt das Flackerproblem des Dropdown-Auswahlfelds für Verknüpfungsregeln ([#8018](https://github.com/nocobase/nocobase/pull/8018)) von @zhangzhonghe
  - Behebt ein Problem, bei dem das Umschalten eines Datumsfeldes auf ein Zeitfeld in der Filteraktion einen Rendering-Fehler verursachte. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) von @gchust
  - Behebt ein Problem, bei dem das aktuelle Datensatzmenü beim Hinzufügen eines Kommentarblocks erschien. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) von @gchust
  - Behebt fehlgeschlagenes Löschen eines Datensatzes im Datensatzauswahl-Block ([#8023](https://github.com/nocobase/nocobase/pull/8023)) von @katherinehhh
  - Behebt ein Problem, bei dem der Standardstil des JS-Feldes im Detailblock falsch war. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) von @gchust
  - Behebt, dass der Baum-Tabellenblock keine untergeordneten Knoten erweitern kann ([#8011](https://github.com/nocobase/nocobase/pull/8011)) von @katherinehhh
  - Behebt, dass das Ziehen von Unterspalten nicht funktioniert ([#8026](https://github.com/nocobase/nocobase/pull/8026)) von @katherinehhh
  - Behebt, dass die Spaltenbreite von Untertabellen nicht angewendet wird ([#8027](https://github.com/nocobase/nocobase/pull/8027)) von @katherinehhh
  - Behebt ein Problem, das Fehler beim Laden von Daten für Assoziationsfelder in Popup-Fenstern verursachte, und sorgt für eine reibungslosere Datenanzeige und -funktionalität. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) von @gchust
  - Behebt ein Stilproblem des Markdown-Anzeigefeld-Popovers ([#8012](https://github.com/nocobase/nocobase/pull/8012)) von @katherinehhh
  - Behebt ein Problem, bei dem die Standardtitel der Popups für die Aktionen "Bearbeiten" und "Neu erstellen" falsch waren. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) von @gchust
  - Behebt einen Lazy-Load-Fehler in Variable.Input, der dazu führt, dass das Variablenoptionsmenü falsch neu gerendert wird ([#8009](https://github.com/nocobase/nocobase/pull/8009)) von @mytharcher
  - Behebt ein Problem, bei dem die aktuelle Popup-Datensatzvariable in einem durch ein Assoziationsfeld geöffneten Popup nicht korrekt aufgelöst werden konnte. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) von @gchust
- **[acl]** Behebt ein Problem, bei dem ACL-Metainformationen falsch sind, wenn Berechtigungsbereiche externer Datenquellen aktuelle benutzerbezogene Variablen verwenden ([#8013](https://github.com/nocobase/nocobase/pull/8013)) von @2013xile
- **[flow-engine]**
  - Behebt, dass der Kommentardatensatz nach dem Bearbeiten nicht gespeichert wird ([#8035](https://github.com/nocobase/nocobase/pull/8035)) von @katherinehhh
  - Behebt ein Problem, bei dem Datenblöcke beim Schließen eines Popups durch Klicken auf die Formular-Senden-Schaltfläche im Popup nicht aktualisiert wurden. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) von @gchust
- **[Theme-Editor]** Aktiviert den Theme-Umschalter auf mobilen Geräten ([#8046](https://github.com/nocobase/nocobase/pull/8046)) von @zhangzhonghe
- **[Multi-App-Manager (veraltet)]** Protokollebene-Einstellungen werden nicht auf Unteranwendungen angewendet ([#8045](https://github.com/nocobase/nocobase/pull/8045)) von @2013xile
- **[Datenquellen-Manager]** Behebt Fehler beim Aktualisieren von Passwörtern für externe Datenquellen ([#8024](https://github.com/nocobase/nocobase/pull/8024)) von @cgyrock
- **[Aktion: Datensätze importieren]** Behebt das Problem, dass ein Fehler ausgelöst wird, wenn ein Feld in der importierenden xlsx-Datei einen `null`-Wert hat ([#8037](https://github.com/nocobase/nocobase/pull/8037)) von @mytharcher
- **[Workflow]** Behebt das Problem, dass die Warteschlange vor dem Veröffentlichen von Nachrichten geschlossen wurde ([#8003](https://github.com/nocobase/nocobase/pull/8003)) von @mytharcher
- **[Kommentare]**
  - Behebt fehlgeschlagenes Löschen eines Datensatzes im Kommentarblock von @katherinehhh
  - Behebt die Anzeige einer Warnung, wenn der Kommentarblock in einer Nicht-Kommentar-Sammlung verwendet wird, von @katherinehhh
- **[Multi-Space]** Mobile Geräte unterstützen den Space-Wechsel von @jiannx
- **[Workflow: Unterworkflow]** Behebt das Problem, dass der ausgewählte Workflow "N/A" anzeigt, wenn die Workflow-Anzahl größer als 200 ist, von @mytharcher
- **[Workflow: Genehmigung]**
  - Behebt einen Fehler beim Erstellen eines Genehmigungsinformationsblocks von @mytharcher
  - Migration hinzugefügt, um doppelte Datensatzfehler beim Hinzufügen eines Index zu vermeiden, von @mytharcher
  - Behebt das Problem, dass die Druckaktion nicht funktioniert, wenn die Seite mit geöffnetem Modal aktualisiert wird, von @mytharcher

### [v2.0.0-alpha.49](https://www.nocobase.com/en/blog/v2.0.0-alpha.49)

*Veröffentlichungsdatum: 29.11.2025*

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Ermöglicht die Auswahl, ob im Genehmigungsprozess-UI ein Schnappschuss oder der neueste Datensatz angezeigt werden soll, von @mytharcher

### 🚀 Verbesserungen

- **[client]** Optimiert Validierungsmeldungen für Untertabellen ([#8001](https://github.com/nocobase/nocobase/pull/8001)) von @katherinehhh
- **[Telemetrie: Prometheus]** Upgrade von `@opentelemetry/exporter-prometheus` von @2013xile
- **[Aktion: Datensätze importieren Pro]** Verbesserte Fehlermeldungen für asynchrone Aufgaben, um Benutzern spezifische Gründe für Aufgabenfehler zu liefern, von @mytharcher

### 🐛 Fehlerbehebungen

- **[flow-engine]** Behebt ein Problem, bei dem die aktuelle Datensatzvariable im Detailblock nicht korrekt zum Auflösen ausgelöst werden konnte. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) von @gchust
- **[client]** Behebt Probleme bei der Auswahl und Löschung von Tabellenblöcken für zusammengesetzte Schlüssel ([#7978](https://github.com/nocobase/nocobase/pull/7978)) von @katherinehhh
- **[Aktion: Datensätze exportieren]** Behebt fehlende Systemfelder in der Liste der exportierbaren Felder ([#8002](https://github.com/nocobase/nocobase/pull/8002)) von @katherinehhh
- **[Sammlung: Baum]** Behebt Aktualisierungsfehler der Pfadtabelle, die durch falsche Baum-Elternfeldsuche verursacht wurden ([#8000](https://github.com/nocobase/nocobase/pull/8000)) von @2013xile
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Behebt das Problem, dass das m2m-Array-Feld in der Untertabelle nicht aktualisiert werden konnte ([#7998](https://github.com/nocobase/nocobase/pull/7998)) von @cgyrock
- **[Abteilungen]** Behebt das Problem, dass abteilungsassoziierte Felder nicht bearbeitet werden konnten ([#7462](https://github.com/nocobase/nocobase/pull/7462)) von @heziqiang
- **[Workflow: Genehmigung]** Behebt ein Berechtigungsproblem beim Abrufen von `approvalRecords.reassignee` aufgrund einer Änderung von `RemoteSelect` von @mytharcher

### [v2.0.0-alpha.48](https://www.nocobase.com/en/blog/v2.0.0-alpha.48)

*Veröffentlichungsdatum: 28.11.2025*

### 🎉 Neue Funktionen

- **[Block: Karte]** Kartenblock 2.0 hinzugefügt ([#7944](https://github.com/nocobase/nocobase/pull/7944)) von @katherinehhh
- **[Auth: OIDC]** Unterstützt automatische Weiterleitung zur SSO-URL, wenn nicht authentifiziert, von @heziqiang

### 🐛 Fehlerbehebungen

- **[client]**
  - Vermeidet einen Fehler beim Öffnen der Standardwerteinstellungen ([#7997](https://github.com/nocobase/nocobase/pull/7997)) von @mytharcher
  - Behebt einen Fehler beim Hinzufügen von Unterdatensätzen im Assoziationsbaum-Tabellenblock ([#7989](https://github.com/nocobase/nocobase/pull/7989)) von @katherinehhh
  - Behebt ein Anzeigeproblem, wenn das Markdown-Feld im HTML-Modus abgeschnitten wird ([#7994](https://github.com/nocobase/nocobase/pull/7994)) von @katherinehhh
  - Behebt unvollständige Suchergebnisse im Kaskadenauswahlfeld ([#7990](https://github.com/nocobase/nocobase/pull/7990)) von @katherinehhh
  - Behebt das Problem, dass der Seiten-Tab-Status und die Route nicht übereinstimmen ([#7991](https://github.com/nocobase/nocobase/pull/7991)) von @zhangzhonghe
  - Behebt, dass die Remote-Auswahl kein korrektes Label für Nicht-Objekt-Werte anzeigt ([#7975](https://github.com/nocobase/nocobase/pull/7975)) von @katherinehhh
- **[Datenbank]** Behebung: Entfernt die UTC-Verarbeitung bei der Zeitumwandlung für reine Zeitfelder, um zeitzonenbedingte Verschiebungen zu verhindern. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) von @ChimingLiu
- **[Workflow]**
  - Behebt das Problem, dass vorbereitete Ausführungen nicht vor dem Stoppen an die Warteschlange gesendet werden ([#7981](https://github.com/nocobase/nocobase/pull/7981)) von @mytharcher
  - Behebt das Problem, dass einige Workflow-Aufgabenmenüs nicht angezeigt werden ([#7980](https://github.com/nocobase/nocobase/pull/7980)) von @mytharcher
  - Behebt das Problem, dass der Aufgabenlink zu einer Fehlerseite führt ([#7983](https://github.com/nocobase/nocobase/pull/7983)) von @mytharcher
- **[Datenvisualisierung]** Filterfeldeinstellungen für externe Datenquellensammlungen zeigen keine spezifischen Eigenschaften an ([#7982](https://github.com/nocobase/nocobase/pull/7982)) von @2013xile
- **[Datenquellen-Manager]** Behebt Aktualisierungsfehler des Datenquellen-Passworts, wenn das Datenbank-Passwort geändert wird ([#7977](https://github.com/nocobase/nocobase/pull/7977)) von @cgyrock
- **[Aktion: Datensätze importieren]** Behebt das Problem beim Importieren von Daten in einer Baumtabelle ([#7976](https://github.com/nocobase/nocobase/pull/7976)) von @cgyrock
- **[Workflow: Manueller Knoten]** Behebt das Problem, dass die Anzahl der manuellen Aufgaben nicht korrekt ist ([#7984](https://github.com/nocobase/nocobase/pull/7984)) von @mytharcher
- **[Workflow: Genehmigung]**
  - Behebt fehlende Antragstellerdaten im Ausführungskontext nach erneuter Einreichung durch den Benutzer, von @mytharcher
  - Behebt das Problem, dass der Kommentar im Job-Ergebnis null ist, nachdem der Benutzer eine Genehmigung mit Kommentar eingereicht hat, von @mytharcher
