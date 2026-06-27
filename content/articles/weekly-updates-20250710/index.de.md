---
title: "NocoBase wöchentliche Updates: Unterstützung für benutzerdefinierte Aggregationsvariablen"
description: "Die Updates dieser Woche umfassen: Hinzufügen einer Ereigniswarteschlange zur Verarbeitung von Nachrichten in der Warteschlange und Unterstützung des bedarfsgesteuerten Ladens von Sammlungen aus externen Datenquellen."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**Diese Woche haben wir [NocoBase 1.8.0](https://www.nocobase.com/en/blog/nocobase-1-8-0) veröffentlicht, mit verbesserter Authentifizierung, Unterstützung für benutzerdefinierte Statistikvariablen, aktualisiertem E-Mail-Management sowie optimierten Workflow- und mobilen Interaktionen.**

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein. Hauptsächlich für die interne Entwicklung und schnelle Iteration gedacht. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.1](https://www.nocobase.com/en/blog/v1.8.1)

*Veröffentlichungsdatum: 09.07.2025*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Die Anzeige des Kontrollkästchenfelds ist in der Assoziationsfeld-Sammlung innerhalb des Formulars falsch ([#7176](https://github.com/nocobase/nocobase/pull/7176)) von @zhangzhonghe
  - Behebt das Problem, dass durch Klicken auf Schaltflächen keine Popups geöffnet werden können ([#7180](https://github.com/nocobase/nocobase/pull/7180)) von @zhangzhonghe
- **[Workflow: Manueller Knoten]** Behebt einen Fehler, der bei Verwendung einer Variable ausgelöst wurde ([#7177](https://github.com/nocobase/nocobase/pull/7177)) von @mytharcher
- **[Vorlagendruck]** Migrationsskript zum rootDataType-Feld hinzugefügt von @jiannx
- **[Workflow: Genehmigung]** Behebt, dass der genehmigte Zweig nicht ausgeführt wurde, wenn kein Bearbeiter zugewiesen war von @mytharcher

### [v1.7.20](https://www.nocobase.com/en/blog/v1.7.20)

*Veröffentlichungsdatum: 07.07.2025*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Nach Feldänderungen sollten Datenbereiche, die von diesem Feld abhängen, automatisch ausgewählte Werte löschen ([#7161](https://github.com/nocobase/nocobase/pull/7161)) von @zhangzhonghe
  - Behebt das Problem, dass die Einstellung der Tabellenspaltenbreite wirkungslos ist ([#7158](https://github.com/nocobase/nocobase/pull/7158)) von @zhangzhonghe
  - Behebt das Fehlerproblem mit Filterformularen im Popup der Schaltfläche "Duplizieren" ([#7154](https://github.com/nocobase/nocobase/pull/7154)) von @zhangzhonghe
  - Behebt einen Fehler, der beim Speichern einer Eins-zu-Eins-Beziehung in einem Konfigurationsfeld auftrat. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) von @aaaaaajie
- **[undefined]** Behebt e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) von @mytharcher
- **[Dateimanager]**

  - Behebt die MIME-Typ-Erkennung ([#7164](https://github.com/nocobase/nocobase/pull/7164)) von @mytharcher
  - Behebt Build-Fehler aufgrund eines ESM-Pakets ([#7169](https://github.com/nocobase/nocobase/pull/7169)) von @mytharcher
- **[Öffentliche Formulare]** Behebt das Problem, dass das Feld "Nur Datum" in öffentlichen Formularen kein Datum auswählen konnte. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) von @katherinehhh
- **[Workflow]** Behebt das Problem, dass auf mobilen Geräten mehrere Wischbewegungen nach links erforderlich sind, um zur vorherigen Seite zurückzukehren ([#7165](https://github.com/nocobase/nocobase/pull/7165)) von @zhangzhonghe
- **[Datenvisualisierung]** Problem mit der Tabellenseitennummerierung ([#7151](https://github.com/nocobase/nocobase/pull/7151)) von @2013xile
- **[Workflow: Genehmigung]**

  - Behebt, dass Assoziationen nach dem Zurückziehen nicht geladen wurden von @mytharcher
  - Entfernt die Transaktion zum Patchen des Schemas aufgrund von Timeout von @mytharcher
  - Behebt einen Fehler, der beim Löschen der Genehmigung ausgelöst wurde von @mytharcher
  - Behebt die Aktualisierung der Assoziation beim Absenden von @mytharcher

### [v1.7.19](https://www.nocobase.com/en/blog/v1.7.19)

*Veröffentlichungsdatum: 03.07.2025*

#### 🚀 Verbesserungen

- **[Datenbank]** Unterstützung zum Hinzufügen von Pool-Optionen aus der Umgebungsvariable ([#7133](https://github.com/nocobase/nocobase/pull/7133)) von @mytharcher
- **[Workflow]**

  - Verbessert die Ladeleistung der Ausführungsliste durch Ausschluss des JSON-Feldes ([#7138](https://github.com/nocobase/nocobase/pull/7138)) von @mytharcher
  - Fügt eine Log-API für Knotentests hinzu ([#7129](https://github.com/nocobase/nocobase/pull/7129)) von @mytharcher
- **[Multi-App-Manager]** Fügt Filterunterstützung für die Multi-App-Verwaltung hinzu ([#7124](https://github.com/nocobase/nocobase/pull/7124)) von @katherinehhh
- **[Workflow: Genehmigung]** Ändert die Zeit in der Zeitleiste auf absolut von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Das Setzen des Feld-Anzeigenamens in einer verbundenen Ansicht hatte keine Wirkung ([#7130](https://github.com/nocobase/nocobase/pull/7130)) von @aaaaaajie
  - Problem mit dem Hintergrundfarbstil in der Untertabelle im Detailblock ([#7144](https://github.com/nocobase/nocobase/pull/7144)) von @katherinehhh
  - Workflow-Manueller-Knoten-UI-Konfiguration: Verknüpfungsregeln können keine "Aktuelles Formular"-Variablen auswählen ([#7125](https://github.com/nocobase/nocobase/pull/7125)) von @zhangzhonghe
  - Standardwert des Assoziationsfeldes überschreibt vorhandene Daten in der Untertabelle ([#7120](https://github.com/nocobase/nocobase/pull/7120)) von @katherinehhh
  - Markdown spiegelte Änderungen nicht in Echtzeit wider, wenn $nForm-Variablen referenziert wurden ([#7147](https://github.com/nocobase/nocobase/pull/7147)) von @katherinehhh
  - Fehlertoleranz für Einstellungen basierend auf 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) von @mytharcher
- **[utils]** Filterproblem bei DateOnly oder Datetime (ohne Zeitzone) unter Verwendung der Variable "Exakter Tag" ([#7113](https://github.com/nocobase/nocobase/pull/7113)) von @katherinehhh
- **[Workflow]** Behebt einen Fehler, der durch zirkulären Import ausgelöst wurde ([#7134](https://github.com/nocobase/nocobase/pull/7134)) von @mytharcher
- **[Passwortrichtlinie]** Unterstützt das dauerhafte Sperren von Benutzerkonten von @2013xile
- **[Workflow: Unterworkflow]** Behebt Problem im Cluster-Modus von @mytharcher
- **[Workflow: Genehmigung]**

  - Entfernt nicht filterbare Felder aus dem Filter von @mytharcher
  - Fügt Formular-Layout-Einstellungen hinzu von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.1](https://www.nocobase.com/en/blog/v1.9.0-beta.1)

*Veröffentlichungsdatum: 07.07.2025*

#### 🎉 Neue Funktionen

- **[Server]** Fügt eine Ereigniswarteschlange zur Verarbeitung von Nachrichten in der Warteschlange hinzu ([#6819](https://github.com/nocobase/nocobase/pull/6819)) von @mytharcher

#### 🚀 Verbesserungen

- **[Workflow]** Verschiebt gemeinsame Komponenten in das Basis-Plugin ([#7140](https://github.com/nocobase/nocobase/pull/7140)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Nach Feldänderungen sollten Datenbereiche, die von diesem Feld abhängen, automatisch ausgewählte Werte löschen ([#7161](https://github.com/nocobase/nocobase/pull/7161)) von @zhangzhonghe
  - Behebt das Problem, dass die Einstellung der Tabellenspaltenbreite wirkungslos ist ([#7158](https://github.com/nocobase/nocobase/pull/7158)) von @zhangzhonghe
  - Behebt das Fehlerproblem mit Filterformularen im Popup der Schaltfläche "Duplizieren" ([#7154](https://github.com/nocobase/nocobase/pull/7154)) von @zhangzhonghe
  - Behebt einen Fehler, der beim Speichern einer Eins-zu-Eins-Beziehung in einem Konfigurationsfeld auftrat. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) von @aaaaaajie
- **[undefined]** Behebt e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) von @mytharcher
- **[Kalender]** Setzt den Standard-Starttag der Woche im Kalenderblock auf 'Montag' ([#7171](https://github.com/nocobase/nocobase/pull/7171)) von @katherinehhh
- **[Workflow]** Behebt das Problem, dass auf mobilen Geräten mehrere Wischbewegungen nach links erforderlich sind, um zur vorherigen Seite zurückzukehren ([#7165](https://github.com/nocobase/nocobase/pull/7165)) von @zhangzhonghe
- **[Dateimanager]**

  - Behebt Build-Fehler aufgrund eines ESM-Pakets ([#7169](https://github.com/nocobase/nocobase/pull/7169)) von @mytharcher
  - Behebt die MIME-Typ-Erkennung ([#7164](https://github.com/nocobase/nocobase/pull/7164)) von @mytharcher
- **[Workflow: Manueller Knoten]** Behebt falschen Import einer Variable ([#7156](https://github.com/nocobase/nocobase/pull/7156)) von @mytharcher
- **[Öffentliche Formulare]** Behebt das Problem, dass das Feld "Nur Datum" in öffentlichen Formularen kein Datum auswählen konnte. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) von @katherinehhh
- **[Workflow: Genehmigung]**

  - Entfernt die Transaktion zum Patchen des Schemas aufgrund von Timeout von @mytharcher
  - Behebt, dass Assoziationen nach dem Zurückziehen nicht geladen wurden von @mytharcher
  - Behebt einen Fehler, der beim Löschen der Genehmigung ausgelöst wurde von @mytharcher
  - Behebt die Aktualisierung der Assoziation beim Absenden von @mytharcher

### [v1.8.0-beta.13](https://www.nocobase.com/en/blog/v1.8.0-beta.13)

*Veröffentlichungsdatum: 03.07.2025*

#### 🎉 Neue Funktionen

- **[client]**

  - Unterstützt das BIT-Feld in SQL Server für externe Datenquellen. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) von @aaaaaajie
  - Unterstützt benutzerdefinierte Aggregationsvariablen ([#6916](https://github.com/nocobase/nocobase/pull/6916)) von @zhangzhonghe
    Referenz: [Benutzerdefinierte Variablen](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Build]** Unterstützt kommerzielle Autorisierung ([#6554](https://github.com/nocobase/nocobase/pull/6554)) von @jiannx
- **[Datenquellen-Manager]** ✨ Unterstützt das bedarfsgesteuerte Laden von Sammlungen aus externen Datenquellen ([#6979](https://github.com/nocobase/nocobase/pull/6979)) von @aaaaaajie
- **[Lizenz-Einstellungen]** Fügt Lizenzeinstellungen hinzu und validiert die Lizenz vor dem Herunterladen von Plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) von @jiannx
- **[Authentifizierung]** Unterstützt die Funktion "Passwort vergessen" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) von @zhangzhonghe
  Referenz: [Passwort vergessen](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Aktion: Stapelaktualisierung]** Unterstützt das Aktualisieren von Daten in anderen Datenblöcken nach der Aktualisierung von Daten in einem Block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) von @zhangzhonghe
- **[Datenquelle: Externer SQL Server]**

  - Unterstützung für das SQL Server BIT-Feld in externen Datenquellen hinzugefügt von @aaaaaajie
  - Unterstützt das bedarfsgesteuerte Laden von Sammlungen aus externen Datenquellen von @aaaaaajie
- **[Benutzerdefinierte Variablen]** Unterstützt benutzerdefinierte Aggregationsvariablen von @zhangzhonghe
  Referenz: [Benutzerdefinierte Variablen](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[E-Mail-Manager]**

  - Unterstützt das Löschen von E-Mails von @jiannx
  - Unterstützt die Einstellung des E-Mail-Synchronisationsintervalls von @jiannx
  - Unterstützt Massenversand von @jiannx

#### 🚀 Verbesserungen

- **[client]**

  - Unterstützt das Ausfüllen von Eingabefeldern durch QR-Code-Scannen ([#6943](https://github.com/nocobase/nocobase/pull/6943)) von @katherinehhh
  - Bestimmt die Anzeige mobiler Komponenten basierend auf dem Gerätetyp anstatt der Seitenbreite ([#6611](https://github.com/nocobase/nocobase/pull/6611)) von @zhangzhonghe
  - Unterstützt Lokalisierung für Markdown-Blockinhalte ([#6941](https://github.com/nocobase/nocobase/pull/6941)) von @katherinehhh
  - Bestimmt die Anzeige des mobilen Layouts basierend auf dem Gerätetyp anstatt der Seitenbreite ([#6600](https://github.com/nocobase/nocobase/pull/6600)) von @zhangzhonghe
- **[Asynchroner Aufgabenmanager]** Verbessert die Leistung der Aufgabenerstellung während des Exports ([#7078](https://github.com/nocobase/nocobase/pull/7078)) von @aaaaaajie
- **[Mobil]** Passt den Stil des Benachrichtigungs-Popups für mobile Geräte an ([#6557](https://github.com/nocobase/nocobase/pull/6557)) von @zhangzhonghe
- **[E-Mail-Manager]**

  - Unterstützt separates Antworten und Weiterleiten von E-Mails innerhalb desselben Betreffs von @jiannx
  - Schema-Implementierung, dann E-Mail-Versand und Unterstützung von KI von @jiannx
  - Unterstützt den Standard-Sendewert im Popup, unterstützt die Fuzzy-Suche nach Empfängern und behebt Probleme von @jiannx
  - Vervollständigt die Massenversandfunktion von @jiannx
  - Funktionsverbesserung und Problembehebung von @jiannx

#### 🐛 Fehlerbehebungen

- **[cli]**

  - Passt die Lizenzkopie bei der Installation des Plugins an ([#7135](https://github.com/nocobase/nocobase/pull/7135)) von @jiannx
  - Undefinierter Fehler beim Herunterladen von Plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) von @jiannx
- **[client]**

  - Nach dem Löschen des Badge-Werts wird die Benutzeroberfläche nicht aktualisiert ([#7055](https://github.com/nocobase/nocobase/pull/7055)) von @zhangzhonghe
  - Fehler beim Klicken auf die Filtersschaltfläche ([#7100](https://github.com/nocobase/nocobase/pull/7100)) von @zhangzhonghe
  - Behebt das Problem, dass die Daten des aktuellen Benutzers leer sind ([#7016](https://github.com/nocobase/nocobase/pull/7016)) von @zhangzhonghe
  - Der Inhalt wird auf Seiten, die über Popup-Links geöffnet werden, falsch angezeigt ([#6990](https://github.com/nocobase/nocobase/pull/6990)) von @zhangzhonghe
  - Übergibt andere Props an die Variable.Input-Komponente. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) von @sheldon66
  - Die Aktion "Als Vorlage speichern" schlägt fehl, wenn sie ein Assoziationsfeld enthält ([#6543](https://github.com/nocobase/nocobase/pull/6543)) von @gchust
- **[Datenbank]** Macht den eq-Operator für Zeichenfolgenfelder mit dem Zahlentyp kompatibel ([#7062](https://github.com/nocobase/nocobase/pull/7062)) von @chenos
- **[Build]** Behebt den Client-Laufzeitfehler in plugin-workflow-javascript, process undefine error ([#6859](https://github.com/nocobase/nocobase/pull/6859)) von @jiannx
- **[Datenvisualisierung]** Problem mit der Tabellenseitennummerierung ([#7151](https://github.com/nocobase/nocobase/pull/7151)) von @2013xile
- **[Datenquellen-Manager]** Behebt ein Problem, bei dem die Kombination aus bedarfsgesteuertem Laden der Datenquelle und Tabellenpräfix-Konfiguration einen Fehler "ConnectionManager.getConnection was called after the connection manager was closed" verursachte. ([#7150](https://github.com/nocobase/nocobase/pull/7150)) von @aaaaaajie
- **[plugin-service-platform]** Passt den Lizenztext an von @jiannx
- **[Benutzerdefinierte Variablen]** Nach dem Löschen des Badge-Werts wird die Benutzeroberfläche nicht aktualisiert von @zhangzhonghe
- **[E-Mail-Manager]**

  - Anhang wird nicht angezeigt von @jiannx
  - Fehler beim Löschen von E-Mails von @jiannx
  - Löschen von E-Mails fehlgeschlagen von @jiannx
  - Einstellungs-Popup wird nicht angezeigt von @jiannx
  - Das Antwort-Drawer ist nicht sichtbar von @jiannx
  - Fuzzy-Suche nach Empfängern unterstützt Assoziationsfelder von @jiannx
  - Fügt das Feld "id" zu mailmessagelabelsMailmessages hinzu von @jiannx
  - E-Mail-Fuzzy-Suche zur Erstellung eindeutiger Filter von @jiannx
  - Mehrere Primärschlüssel für Tabelle "mailmessagelabels_mailmessages" von @jiannx

### [v1.8.0-beta.12](https://www.nocobase.com/en/blog/v1.8.0-beta.12)

*Veröffentlichungsdatum: 03.07.2025*

#### 🚀 Verbesserungen

- **[Datenbank]** Unterstützung zum Hinzufügen von Pool-Optionen aus der Umgebungsvariable ([#7133](https://github.com/nocobase/nocobase/pull/7133)) von @mytharcher
- **[Workflow]**

  - Verbessert die Ladeleistung der Ausführungsliste durch Ausschluss des JSON-Feldes ([#7138](https://github.com/nocobase/nocobase/pull/7138)) von @mytharcher
  - Fügt eine Log-API für Knotentests hinzu ([#7129](https://github.com/nocobase/nocobase/pull/7129)) von @mytharcher
- **[Multi-App-Manager]** Fügt Filterunterstützung für die Multi-App-Verwaltung hinzu ([#7124](https://github.com/nocobase/nocobase/pull/7124)) von @katherinehhh
- **[Workflow: Genehmigung]** Ändert die Zeit in der Zeitleiste auf absolut von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Markdown spiegelte Änderungen nicht in Echtzeit wider, wenn $nForm-Variablen referenziert wurden ([#7147](https://github.com/nocobase/nocobase/pull/7147)) von @katherinehhh
  - Problem mit dem Hintergrundfarbstil in der Untertabelle im Detailblock ([#7144](https://github.com/nocobase/nocobase/pull/7144)) von @katherinehhh
  - Workflow-Manueller-Knoten-UI-Konfiguration: Verknüpfungsregeln können keine "Aktuelles Formular"-Variablen auswählen ([#7125](https://github.com/nocobase/nocobase/pull/7125)) von @zhangzhonghe
  - Das Setzen des Feld-Anzeigenamens in einer verbundenen Ansicht hatte keine Wirkung ([#7130](https://github.com/nocobase/nocobase/pull/7130)) von @aaaaaajie
  - Standardwert des Assoziationsfeldes überschreibt vorhandene Daten in der Untertabelle ([#7120](https://github.com/nocobase/nocobase/pull/7120)) von @katherinehhh
  - Fehlertoleranz für Einstellungen basierend auf 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) von @mytharcher
- **[utils]** Filterproblem bei DateOnly oder Datetime (ohne Zeitzone) unter Verwendung der Variable "Exakter Tag" ([#7113](https://github.com/nocobase/nocobase/pull/7113)) von @katherinehhh
- **[Workflow]** Behebt einen Fehler, der durch zirkulären Import ausgelöst wurde ([#7134](https://github.com/nocobase/nocobase/pull/7134)) von @mytharcher
- **[Passwortrichtlinie]** Unterstützt das dauerhafte Sperren von Benutzerkonten von @2013xile
- **[Workflow: Unterworkflow]** Behebt Problem im Cluster-Modus von @mytharcher
- **[Workflow: Genehmigung]**

  - Entfernt nicht filterbare Felder aus dem Filter von @mytharcher
  - Fügt Formular-Layout-Einstellungen hinzu von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.1](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Veröffentlichungsdatum: 07.07.2025*

#### 🎉 Neue Funktionen

- **[Server]** Fügt eine Ereigniswarteschlange zur Verarbeitung von Nachrichten in der Warteschlange hinzu ([#6819](https://github.com/nocobase/nocobase/pull/6819)) von @mytharcher

#### 🚀 Verbesserungen

- **[Workflow]** Verschiebt gemeinsame Komponenten in das Basis-Plugin ([#7140](https://github.com/nocobase/nocobase/pull/7140)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Nach Feldänderungen sollten Datenbereiche, die von diesem Feld abhängen, automatisch ausgewählte Werte löschen ([#7161](https://github.com/nocobase/nocobase/pull/7161)) von @zhangzhonghe
  - Behebt das Problem, dass die Einstellung der Tabellenspaltenbreite wirkungslos ist ([#7158](https://github.com/nocobase/nocobase/pull/7158)) von @zhangzhonghe
  - Behebt einen Fehler, der beim Speichern einer Eins-zu-Eins-Beziehung in einem Konfigurationsfeld auftrat. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) von @aaaaaajie
  - Behebt das Fehlerproblem mit Filterformularen im Popup der Schaltfläche "Duplizieren" ([#7154](https://github.com/nocobase/nocobase/pull/7154)) von @zhangzhonghe
- **[undefined]** Behebt e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) von @mytharcher
- **[Dateimanager]**

  - Behebt Build-Fehler aufgrund eines ESM-Pakets ([#7169](https://github.com/nocobase/nocobase/pull/7169)) von @mytharcher
  - Behebt die MIME-Typ-Erkennung ([#7164](https://github.com/nocobase/nocobase/pull/7164)) von @mytharcher
- **[Öffentliche Formulare]** Behebt das Problem, dass das Feld "Nur Datum" in öffentlichen Formularen kein Datum auswählen konnte. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) von @katherinehhh
- **[Kalender]** Setzt den Standard-Starttag der Woche im Kalenderblock auf 'Montag' ([#7171](https://github.com/nocobase/nocobase/pull/7171)) von @katherinehhh
- **[Workflow: Manueller Knoten]** Behebt falschen Import einer Variable ([#7156](https://github.com/nocobase/nocobase/pull/7156)) von @mytharcher
- **[Workflow]** Behebt das Problem, dass auf mobilen Geräten mehrere Wischbewegungen nach links erforderlich sind, um zur vorherigen Seite zurückzukehren ([#7165](https://github.com/nocobase/nocobase/pull/7165)) von @zhangzhonghe
- **[Workflow: Genehmigung]**

  - Behebt die Aktualisierung der Assoziation beim Absenden von @mytharcher
  - Behebt einen Fehler, der beim Löschen der Genehmigung ausgelöst wurde von @mytharcher
  - Behebt, dass Assoziationen nach dem Zurückziehen nicht geladen wurden von @mytharcher
- **[E-Mail-Manager]**

  - Nach dem Auswählen von Zeilen, "Gelesen" und "Ungelesen" setzen von @jiannx
  - Unter-E-Mail-Inhalt kann nicht gefiltert werden von @jiannx

### [v1.8.0-alpha.14](https://www.nocobase.com/en/blog/v1.8.0-alpha.14)

*Veröffentlichungsdatum: 04.07.2025*

#### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]** Entfernt die Transaktion zum Patchen des Schemas aufgrund von Timeout von @mytharcher

### [v1.8.0-alpha.13](https://www.nocobase.com/en/blog/v1.8.0-alpha.13)

*Veröffentlichungsdatum: 03.07.2025*

#### 🚀 Verbesserungen

- **[E-Mail-Manager]** Unterstützt separates Antworten und Weiterleiten von E-Mails innerhalb desselben Betreffs von @jiannx

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem mit dem Hintergrundfarbstil in der Untertabelle im Detailblock ([#7144](https://github.com/nocobase/nocobase/pull/7144)) von @katherinehhh
  - Markdown spiegelte Änderungen nicht in Echtzeit wider, wenn $nForm-Variablen referenziert wurden ([#7147](https://github.com/nocobase/nocobase/pull/7147)) von @katherinehhh
- **[Datenvisualisierung]** Problem mit der Tabellenseitennummerierung ([#7151](https://github.com/nocobase/nocobase/pull/7151)) von @2013xile
- **[Datenquellen-Manager]** Behebt ein Problem, bei dem die Kombination aus bedarfsgesteuertem Laden der Datenquelle und Tabellenpräfix-Konfiguration einen Fehler "ConnectionManager.getConnection was called after the connection manager was closed" verursachte. ([#7150](https://github.com/nocobase/nocobase/pull/7150)) von @aaaaaajie
