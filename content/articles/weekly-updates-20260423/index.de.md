---
title: "Wöchentliche Updates｜Verbesserung der Fähigkeit von KI-Mitarbeitern, hochgeladene Dokumente zu analysieren"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 16. bis 23. April 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.41](https://www.nocobase.com/en/blog/v2.0.41)

*Veröffentlichungsdatum: 22.04.2026*

### 🎉 Neue Funktionen

- **[Auth: OIDC]** Mapping-Attribut unterstützt benutzerdefinierte Felder von @chenzhizdt
- **[DingTalk]** DingTalk: Benachrichtigungen, automatisches Login in DingTalk und Benutzersynchronisation. von @chenzhizdt

### 🚀 Verbesserungen

- **[ai]** KI-Mitarbeiter und Wissensdatenbank unterstützen jetzt zusätzliche Dateitypen für Uploads (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) von @cgyrock
- **[undefined]** Arabische Übersetzung für den Leitfadenabschnitt und die Navigation hinzugefügt ([#9141](https://github.com/nocobase/nocobase/pull/9141)) von @saraTabbane

### 🐛 Fehlerbehebungen

- **[data-source-manager]** Fehler behoben, bei dem Prozentfelder beim erneuten Synchronisieren externer Datenquellen auf numerisch zurückgesetzt wurden ([#9178](https://github.com/nocobase/nocobase/pull/9178)) von @jiannx
- **[client]**

  - Problem behoben, bei dem der Standardwert nach dem Erstellen eines Datensatzes nicht wirksam wurde. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) von @gchust
  - Problem behoben, bei dem der Schalter „Tab hinzufügen“ zu nah am rechten Rand war ([#9177](https://github.com/nocobase/nocobase/pull/9177)) von @zhangzhonghe
- **[Abteilungen]** Problem behoben, bei dem eine wiederholte Abteilungssynchronisation die Abteilungssortierreihenfolge nicht aktualisieren konnte ([#9173](https://github.com/nocobase/nocobase/pull/9173)) von @2013xile
- **[Datenquelle: Haupt]** Feldsynchronisation aus der Datenbank für verbundene Ansichten behoben, wenn der Sammlungsname vom Datenbankansichtsnamen abweicht ([#9155](https://github.com/nocobase/nocobase/pull/9155)) von @2013xile
- **[Workflow: JavaScript]** Sicherheitsproblem bei der Skriptausführung im `node:vm`-Modus behoben ([#9084](https://github.com/nocobase/nocobase/pull/9084)) von @mytharcher
- **[KI: Wissensdatenbank]** Problem behoben, bei dem die Vektordatenbank beim Löschen von Wissensdatenbankdokumenten nicht synchronisiert wurde. von @cgyrock
- **[WeCom]** Fehlende Abteilungsreihenfolge beim Synchronisieren von Abteilungen aus WeCom behoben von @2013xile

### [v2.0.40](https://www.nocobase.com/en/blog/v2.0.40)

*Veröffentlichungsdatum: 20.04.2026*

### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem das Aktualisieren von Untertabellenwerten durch Feldzuweisung zu Datenkontamination führte. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) von @gchust
- **[data-source-manager]** Problem behoben, bei dem Sequenzfelder nach der Datenbanksynchronisation in Zeichenfolgen geändert werden konnten ([#9143](https://github.com/nocobase/nocobase/pull/9143)) von @2013xile
- **[Dateimanager]** Rückgabe von null, wenn die Vorschau-URL fehlt ([#9104](https://github.com/nocobase/nocobase/pull/9104)) von @gaston98765
- **[Workflow: JavaScript]** Sicherheitsproblem bei der Skriptausführung im `node:vm`-Modus behoben ([#9084](https://github.com/nocobase/nocobase/pull/9084)) von @mytharcher
- **[Abteilungen]**

  - Problem behoben, bei dem Abteilungslisten in der Abteilungsverwaltung nicht der `sort`-Feldreihenfolge folgten ([#9150](https://github.com/nocobase/nocobase/pull/9150)) von @2013xile
  - Fehlende oder veraltete Hauptabteilungswerte nach dem Speichern von Benutzerabteilungen behoben ([#9156](https://github.com/nocobase/nocobase/pull/9156)) von @2013xile

### [v2.0.39](https://www.nocobase.com/en/blog/v2.0.39)

*Veröffentlichungsdatum: 18.04.2026*

### 🚀 Verbesserungen

- **[Abteilungen]** Anzeige des `parentId`-Fremdschlüsselfeldes der Abteilungssammlung in der Benutzeroberfläche ([#9130](https://github.com/nocobase/nocobase/pull/9130)) von @2013xile

### 🐛 Fehlerbehebungen

- **[data-source-manager]** Fehler behoben, bei dem die Dateisammlungsfeldsynchronisation das `preview`-Feld entfernte ([#9129](https://github.com/nocobase/nocobase/pull/9129)) von @2013xile
- **[client]**

  - Problem behoben, bei dem die Assoziationsfeldkomponente in den Feldwerteinstellungen falsch war. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) von @gchust
  - Korrektur der übermäßigen Höhe und Breite von Tabs im Seitenkonfigurationsmodus ([#9144](https://github.com/nocobase/nocobase/pull/9144)) von @zhangzhonghe
- **[Datenbank]** SQL-Injection-Risiken beim rekursiven Tree-Eager-Loading und der bereichsbezogenen Sortierinitialisierung behoben ([#9133](https://github.com/nocobase/nocobase/pull/9133)) von @2013xile
- **[Datenvisualisierung]** Fehler behoben, bei dem die Diagrammblock-Sortierung Alias-Metriken und -Dimensionen in aggregierten Abfragen verwendete ([#9131](https://github.com/nocobase/nocobase/pull/9131)) von @2013xile
- **[Sammlung: SQL]** Fehlende SQL-Validierung bei SQL-Sammlungsaktualisierungen behoben ([#9134](https://github.com/nocobase/nocobase/pull/9134)) von @2013xile

### [v2.0.38](https://www.nocobase.com/en/blog/v2.0.38)

*Veröffentlichungsdatum: 16.04.2026*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Verbesserung der Fähigkeit von KI-Mitarbeitern, hochgeladene Dokumente zu analysieren ([#9126](https://github.com/nocobase/nocobase/pull/9126)) von @cgyrock

### 🚀 Verbesserungen

- **[logger]** `referer`-Informationen zu Anforderungsprotokollen hinzugefügt ([#9110](https://github.com/nocobase/nocobase/pull/9110)) von @2013xile
- **[undefined]** Synchronisierte übersetzte Dokumentationen zu Umgebungsvariablen und Cluster-Modus mit den neuesten chinesischen Aktualisierungen. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) von @mytharcher
- **[KI-Mitarbeiter]** Nach der KI-Mitarbeiter-Blockauswahl, Formularanhang in den Upload-Bereich einfügen ([#9127](https://github.com/nocobase/nocobase/pull/9127)) von @cgyrock
- **[Workflow: Manueller Knoten]** Verwendung von `simplePagination` für Workflow-Aufgaben-bezogene Sammlungen für bessere Listenleistung ([#9117](https://github.com/nocobase/nocobase/pull/9117)) von @mytharcher
- **[Workflow: Genehmigung]** Verwendung von `simplePagination` für die Sammlungen `approvals` und `approvalRecords` für bessere Listenleistung von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem die optionalen Optionen von Einzelfeldern in der Feldregelkonfiguration leer waren ([#9119](https://github.com/nocobase/nocobase/pull/9119)) von @jiannx
  - Falsche Standardwerteinstellungen für Untertabellen im Formular behoben. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) von @gchust
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Empfängerauswahlkomponente nicht korrekt funktionierte ([#9123](https://github.com/nocobase/nocobase/pull/9123)) von @mytharcher
- **[KI-Mitarbeiter]** Problem behoben, bei dem die baseURL-Einstellungen des google-gen-ai-LLM-Dienstes nicht wirksam wurden ([#9107](https://github.com/nocobase/nocobase/pull/9107)) von @cgyrock
- **[E-Mail-Manager]** Entfernen der Formular-Schließaufforderung nach erfolgreichem E-Mail-Versand von @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.14](https://www.nocobase.com/en/blog/v2.1.0-beta.14)

*Veröffentlichungsdatum: 20.04.2026*

### 🎉 Neue Funktionen

- **[Kalender]** Kalenderblock v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) von @jiannx
- **[KI-Mitarbeiter]** Verbesserung der Fähigkeit von KI-Mitarbeitern, hochgeladene Dokumente zu analysieren ([#9126](https://github.com/nocobase/nocobase/pull/9126)) von @cgyrock
- **[Block: Baum]** Baumfilterblock hinzugefügt ([#9016](https://github.com/nocobase/nocobase/pull/9016)) von @jiannx
- **[E-Mail-Manager]** Gmail unterstützt das Senden von E-Mails mit Aliasen von @jiannx

### 🚀 Verbesserungen

- **[undefined]**

  - Arabische Übersetzung für den Leitfadenabschnitt und die Navigation hinzugefügt ([#9141](https://github.com/nocobase/nocobase/pull/9141)) von @saraTabbane
  - Synchronisierte übersetzte Dokumentationen zu Umgebungsvariablen und Cluster-Modus mit den neuesten chinesischen Aktualisierungen. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) von @mytharcher
  - Arabische Übersetzung für die Dokumentations-Startseite hinzugefügt ([#9043](https://github.com/nocobase/nocobase/pull/9043)) von @gaston98765
  - Konsistenz des Inhaltsverzeichnisses in lokalisierten READMEs hinzugefügt ([#9038](https://github.com/nocobase/nocobase/pull/9038)) von @gaston98765
  - Inhaltsverzeichnis zum französischen README hinzugefügt ([#9037](https://github.com/nocobase/nocobase/pull/9037)) von @saraTabbane
  - Docs: Arabische Übersetzung für die Einführungsseiten „Erste Schritte“ hinzugefügt ([#9044](https://github.com/nocobase/nocobase/pull/9044)) von @gaston98765
- **[logger]** `referer`-Informationen zu Anforderungsprotokollen hinzugefügt ([#9110](https://github.com/nocobase/nocobase/pull/9110)) von @2013xile
- **[client]** Schalter für die erforderliche Formularvalidierung hinzugefügt ([#9060](https://github.com/nocobase/nocobase/pull/9060)) von @jiannx
- **[Datenbank]** Optimierung von Repository-Count-Abfragen, indem DISTINCT nur aktiviert wird, wenn Includes vorhanden sind. ([#9094](https://github.com/nocobase/nocobase/pull/9094)) von @mytharcher
- **[Abteilungen]** Anzeige des `parentId`-Fremdschlüsselfeldes der Abteilungssammlung in der Benutzeroberfläche ([#9130](https://github.com/nocobase/nocobase/pull/9130)) von @2013xile
- **[KI-Mitarbeiter]** Nach der KI-Mitarbeiter-Blockauswahl, Formularanhang in den Upload-Bereich einfügen ([#9127](https://github.com/nocobase/nocobase/pull/9127)) von @cgyrock
- **[Workflow: Manueller Knoten]** Verwendung von `simplePagination` für Workflow-Aufgaben-bezogene Sammlungen für bessere Listenleistung ([#9117](https://github.com/nocobase/nocobase/pull/9117)) von @mytharcher
- **[Workflow: Genehmigung]** Verwendung von `simplePagination` für die Sammlungen `approvals` und `approvalRecords` für bessere Listenleistung von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem das Aktualisieren von Untertabellenwerten durch Feldzuweisung zu Datenkontamination führte. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) von @gchust
  - Korrektur der übermäßigen Höhe und Breite von Tabs im Seitenkonfigurationsmodus ([#9144](https://github.com/nocobase/nocobase/pull/9144)) von @zhangzhonghe
  - Problem behoben, bei dem die Assoziationsfeldkomponente in den Feldwerteinstellungen falsch war. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) von @gchust
  - Problem behoben, bei dem die optionalen Optionen von Einzelfeldern in der Feldregelkonfiguration leer waren ([#9119](https://github.com/nocobase/nocobase/pull/9119)) von @jiannx
  - Falsche Standardwerteinstellungen für Untertabellen im Formular behoben. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) von @gchust
  - Fehler beim Hinzufügen von n:m-Feldern in Untertabellen behoben ([#9070](https://github.com/nocobase/nocobase/pull/9070)) von @jiannx
  - Problem behoben, bei dem das Popup zur Datensatzübernahme über die Auswahlschaltfläche einer Untertabelle die Variablenwerte des übergeordneten Elements nicht korrekt auflösen konnte. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) von @gchust
- **[data-source-manager]**

  - Problem behoben, bei dem Sequenzfelder nach der Datenbanksynchronisation in Zeichenfolgen geändert werden konnten ([#9143](https://github.com/nocobase/nocobase/pull/9143)) von @2013xile
  - Fehler behoben, bei dem die Dateisammlungsfeldsynchronisation das `preview`-Feld entfernte ([#9129](https://github.com/nocobase/nocobase/pull/9129)) von @2013xile
- **[Datenbank]** SQL-Injection-Risiken beim rekursiven Tree-Eager-Loading und der bereichsbezogenen Sortierinitialisierung behoben ([#9133](https://github.com/nocobase/nocobase/pull/9133)) von @2013xile
- **[undefined]** Renderfehler in benutzerdefinierten Ressourcenblöcken behoben, wenn die Ressource nicht existiert ([#9095](https://github.com/nocobase/nocobase/pull/9095)) von @Molunerfinn
- **[utils]** Sicherheitskontrolle für das Senden von HTTP-Anfragen des Servers hinzugefügt, um mögliche SSRF zu vermeiden ([#9079](https://github.com/nocobase/nocobase/pull/9079)) von @mytharcher
  Referenz: [Umgebungsvariablen](https://docs.nocobase.com/get-started/installation/env)
- **[flow-engine]**

  - Problem behoben, dass n:1-Felder aus externen Datenquellen nicht im Tabellenblock hinzugefügt werden konnten ([#9068](https://github.com/nocobase/nocobase/pull/9068)) von @jiannx
  - Zufälligen Observer-Fehler bei Änderung der Seitensichtbarkeit behoben ([#9067](https://github.com/nocobase/nocobase/pull/9067)) von @zhangzhonghe
- **[Datenquelle: Haupt]** Feldsynchronisation aus der Datenbank für verbundene Ansichten behoben, wenn der Sammlungsname vom Datenbankansichtsnamen abweicht ([#9155](https://github.com/nocobase/nocobase/pull/9155)) von @2013xile
- **[Dateimanager]** Rückgabe von null, wenn die Vorschau-URL fehlt ([#9104](https://github.com/nocobase/nocobase/pull/9104)) von @gaston98765
- **[Abteilungen]**

  - Fehlende oder veraltete Hauptabteilungswerte nach dem Speichern von Benutzerabteilungen behoben ([#9156](https://github.com/nocobase/nocobase/pull/9156)) von @2013xile
  - Problem behoben, bei dem Abteilungslisten in der Abteilungsverwaltung nicht der `sort`-Feldreihenfolge folgten ([#9150](https://github.com/nocobase/nocobase/pull/9150)) von @2013xile
- **[Workflow: JavaScript]** Sicherheitsproblem bei der Skriptausführung im `node:vm`-Modus behoben ([#9084](https://github.com/nocobase/nocobase/pull/9084)) von @mytharcher
- **[Sammlung: SQL]** Fehlende SQL-Validierung bei SQL-Sammlungsaktualisierungen behoben ([#9134](https://github.com/nocobase/nocobase/pull/9134)) von @2013xile
- **[Datenvisualisierung]** Fehler behoben, bei dem die Diagrammblock-Sortierung Alias-Metriken und -Dimensionen in aggregierten Abfragen verwendete ([#9131](https://github.com/nocobase/nocobase/pull/9131)) von @2013xile
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Empfängerauswahlkomponente nicht korrekt funktionierte ([#9123](https://github.com/nocobase/nocobase/pull/9123)) von @mytharcher
- **[KI-Mitarbeiter]** Problem behoben, bei dem die baseURL-Einstellungen des google-gen-ai-LLM-Dienstes nicht wirksam wurden ([#9107](https://github.com/nocobase/nocobase/pull/9107)) von @cgyrock
- **[Benachrichtigungsmanager]** Optimierung der Leistung beim Senden von In-App-Benachrichtigungen in Workflow-Szenarien ([#9066](https://github.com/nocobase/nocobase/pull/9066)) von @mytharcher
- **[Zugriffskontrolle]** Problem behoben, bei dem das Löschen von Beziehungswerten mit einem leeren Array unter ACL fehlschlagen konnte ([#9059](https://github.com/nocobase/nocobase/pull/9059)) von @2013xile
- **[Sammlungsfeld: Code]** Korrektur der Benutzeroberfläche der Codefelder ([#9061](https://github.com/nocobase/nocobase/pull/9061)) von @2013xile
- **[E-Mail-Manager]** Entfernen der Formular-Schließaufforderung nach erfolgreichem E-Mail-Versand von @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.20](https://www.nocobase.com/en/blog/v2.1.0-alpha.20)

*Veröffentlichungsdatum: 20.04.2026*

### 🎉 Neue Funktionen

- **[Workflow]** Log-Feld für Jobs hinzugefügt, um den Log-Inhalt einiger Knoten zum Debuggen anzuzeigen ([#9165](https://github.com/nocobase/nocobase/pull/9165)) von @mytharcher

### 🚀 Verbesserungen

- **[undefined]** Arabische Übersetzung für den Leitfadenabschnitt und die Navigation hinzugefügt ([#9141](https://github.com/nocobase/nocobase/pull/9141)) von @saraTabbane
- **[cli]** Verbesserte generierte API-CLI-Hilfeausgabe und ACL-Befehlsgruppierung ([#9166](https://github.com/nocobase/nocobase/pull/9166)) von @2013xile

### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem das Aktualisieren von Untertabellenwerten durch Feldzuweisung zu Datenkontamination führte. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) von @gchust
- **[data-source-manager]** Problem behoben, bei dem Sequenzfelder nach der Datenbanksynchronisation in Zeichenfolgen geändert werden konnten ([#9143](https://github.com/nocobase/nocobase/pull/9143)) von @2013xile
- **[cli]** CLI-OAuth-Anmeldefehler unter Windows behoben, die durch lange Autorisierungs-URLs verursacht wurden ([#9159](https://github.com/nocobase/nocobase/pull/9159)) von @2013xile
- **[Abteilungen]** Fehlende oder veraltete Hauptabteilungswerte nach dem Speichern von Benutzerabteilungen behoben ([#9156](https://github.com/nocobase/nocobase/pull/9156)) von @2013xile
- **[Datenquelle: Haupt]** Feldsynchronisation aus der Datenbank für verbundene Ansichten behoben, wenn der Sammlungsname vom Datenbankansichtsnamen abweicht ([#9155](https://github.com/nocobase/nocobase/pull/9155)) von @2013xile
- **[Dateimanager]** Rückgabe von null, wenn die Vorschau-URL fehlt ([#9104](https://github.com/nocobase/nocobase/pull/9104)) von @gaston98765

### [v2.1.0-alpha.19](https://www.nocobase.com/en/blog/v2.1.0-alpha.19)

*Veröffentlichungsdatum: 19.04.2026*

### 🎉 Neue Funktionen

- **[cli-v1]** Speicherpfad aus Umgebungsvariablen auflösen ([#9147](https://github.com/nocobase/nocobase/pull/9147)) von @chenos
- **[Kalender]** Kalenderblock v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) von @jiannx

### 🚀 Verbesserungen

- **[cli]** Verbesserte `nb api`-Hilfe-Fallback und einheitliche Warnmeldungen für Laufzeit-Bootstrap-Fehler ([#9153](https://github.com/nocobase/nocobase/pull/9153)) von @2013xile
- **[Abteilungen]** Anzeige des `parentId`-Fremdschlüsselfeldes der Abteilungssammlung in der Benutzeroberfläche ([#9130](https://github.com/nocobase/nocobase/pull/9130)) von @2013xile

### 🐛 Fehlerbehebungen

- **[client]** Korrektur der übermäßigen Höhe und Breite von Tabs im Seitenkonfigurationsmodus ([#9144](https://github.com/nocobase/nocobase/pull/9144)) von @zhangzhonghe
- **[Datenbank]** SQL-Injection-Risiken beim rekursiven Tree-Eager-Loading und der bereichsbezogenen Sortierinitialisierung behoben ([#9133](https://github.com/nocobase/nocobase/pull/9133)) von @2013xile
- **[Workflow: JavaScript]** Sicherheitsproblem bei der Skriptausführung im `node:vm`-Modus behoben ([#9084](https://github.com/nocobase/nocobase/pull/9084)) von @mytharcher
- **[IdP: OAuth]** Fehler bei der OAuth-Client-Registrierung und Token-Aktualisierung nach einem Dienstneustart behoben ([#9139](https://github.com/nocobase/nocobase/pull/9139)) von @2013xile
- **[Abteilungen]** Problem behoben, bei dem Abteilungslisten in der Abteilungsverwaltung nicht der `sort`-Feldreihenfolge folgten ([#9150](https://github.com/nocobase/nocobase/pull/9150)) von @2013xile
- **[Sammlung: SQL]** Fehlende SQL-Validierung bei SQL-Sammlungsaktualisierungen behoben ([#9134](https://github.com/nocobase/nocobase/pull/9134)) von @2013xile
- **[Datenvisualisierung]** Fehler behoben, bei dem die Diagrammblock-Sortierung Alias-Metriken und -Dimensionen in aggregierten Abfragen verwendete ([#9131](https://github.com/nocobase/nocobase/pull/9131)) von @2013xile

### [v2.1.0-alpha.18](https://www.nocobase.com/en/blog/v2.1.0-alpha.18)

*Veröffentlichungsdatum: 17.04.2026*

### 🐛 Fehlerbehebungen

- **[data-source-manager]** Fehler behoben, bei dem die Dateisammlungsfeldsynchronisation das `preview`-Feld entfernte ([#9129](https://github.com/nocobase/nocobase/pull/9129)) von @2013xile

### [v2.1.0-alpha.17](https://www.nocobase.com/en/blog/v2.1.0-alpha.17)

*Veröffentlichungsdatum: 17.04.2026*

### 🎉 Neue Funktionen

- **[cli]** NocoBase CLI umgestaltet ([#9122](https://github.com/nocobase/nocobase/pull/9122)) von @chenos
- **[KI-Mitarbeiter]** Verbesserung der Fähigkeit von KI-Mitarbeitern, hochgeladene Dokumente zu analysieren ([#9126](https://github.com/nocobase/nocobase/pull/9126)) von @cgyrock

### 🚀 Verbesserungen

- **[undefined]**

  - Synchronisierte übersetzte Dokumentationen zu Umgebungsvariablen und Cluster-Modus mit den neuesten chinesischen Aktualisierungen. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) von @mytharcher
  - Docs: Arabische Übersetzung für die Einführungsseiten „Erste Schritte“ hinzugefügt ([#9044](https://github.com/nocobase/nocobase/pull/9044)) von @gaston98765
  - Arabische Übersetzung für die Dokumentations-Startseite hinzugefügt ([#9043](https://github.com/nocobase/nocobase/pull/9043)) von @gaston98765
- **[logger]** `referer`-Informationen zu Anforderungsprotokollen hinzugefügt ([#9110](https://github.com/nocobase/nocobase/pull/9110)) von @2013xile
- **[client]** Schalter für die erforderliche Formularvalidierung hinzugefügt ([#9060](https://github.com/nocobase/nocobase/pull/9060)) von @jiannx
- **[Workflow: Manueller Knoten]** Verwendung von `simplePagination` für Workflow-Aufgaben-bezogene Sammlungen für bessere Listenleistung ([#9117](https://github.com/nocobase/nocobase/pull/9117)) von @mytharcher
- **[KI-Mitarbeiter]** Nach der KI-Mitarbeiter-Blockauswahl, Formularanhang in den Upload-Bereich einfügen ([#9127](https://github.com/nocobase/nocobase/pull/9127)) von @cgyrock
- **[Workflow: Genehmigung]** Verwendung von `simplePagination` für die Sammlungen `approvals` und `approvalRecords` für bessere Listenleistung von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem die optionalen Optionen von Einzelfeldern in der Feldregelkonfiguration leer waren ([#9119](https://github.com/nocobase/nocobase/pull/9119)) von @jiannx
  - Problem behoben, bei dem die Assoziationsfeldkomponente in den Feldwerteinstellungen falsch war. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) von @gchust
  - Falsche Standardwerteinstellungen für Untertabellen im Formular behoben. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) von @gchust
- **[utils]** Sicherheitskontrolle für das Senden von HTTP-Anfragen des Servers hinzugefügt, um mögliche SSRF zu vermeiden ([#9079](https://github.com/nocobase/nocobase/pull/9079)) von @mytharcher
  Referenz: [Umgebungsvariablen](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow: Schleifenknoten]** Validierungen von Workflow-Knoten behoben ([#9111](https://github.com/nocobase/nocobase/pull/9111)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Empfängerauswahlkomponente nicht korrekt funktionierte ([#9123](https://github.com/nocobase/nocobase/pull/9123)) von @mytharcher
- **[IdP: OAuth]** OAuth-Zugriff für reguläre API-Anfragen behoben ([#9120](https://github.com/nocobase/nocobase/pull/9120)) von @2013xile
- **[KI-Mitarbeiter]**

  - Problem behoben, bei dem die Sortierung aggregierter Abfragen durch ACL verworfen wurde ([#9099](https://github.com/nocobase/nocobase/pull/9099)) von @2013xile
  - Problem behoben, bei dem die baseURL-Einstellungen des google-gen-ai-LLM-Dienstes nicht wirksam wurden ([#9107](https://github.com/nocobase/nocobase/pull/9107)) von @cgyrock
- **[E-Mail-Manager]** Entfernen der Formular-Schließaufforderung nach erfolgreichem E-Mail-Versand von @jiannx
