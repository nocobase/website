---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: Unterstützung für benutzerdefinierte Aggregationsvariablen, benutzerdefinierten Offset in Datumsfeld-Filtern und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.33](https://www.nocobase.com/en/blog/v1.6.33)

*Veröffentlichungsdatum: 2025-05-23*

#### 🚀 Verbesserungen

- **[undefined]** Erstellen des vollständigen Docker-Images ([#6898](https://github.com/nocobase/nocobase/pull/6898)) von @chenos
- **[client]** Optimierung des Problems, dass Seiten mit der Nutzung zunehmend langsamer werden ([#6888](https://github.com/nocobase/nocobase/pull/6888)) von @zhangzhonghe
- **[Kalender]** Konfigurierbare Aktualisierungsschaltfläche im Kalenderblock unterstützen ([#6920](https://github.com/nocobase/nocobase/pull/6920)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Korrektur der en-US-Lokalisierungen basierend auf zh-CN-Schlüsseln von @mytharcher
- **[Workflow: Genehmigung]** Unterstützung zum Erledigen aller Aufgaben im Workflow-Aufgabenzentrum von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Rendering-Fehler durch ungültiges Stilformat beim Hinzufügen von Assoziationsfeldern ([#6903](https://github.com/nocobase/nocobase/pull/6903)) von @katherinehhh
  - Falsche Prüfung auf leeren Wert für toMany-Assoziationsfeld in Verknüpfungsregeln ([#6905](https://github.com/nocobase/nocobase/pull/6905)) von @katherinehhh
- **[Sammlungsfeld: Markdown(Vditor)]** Markdown (Vditor)-Feld passt sich nicht an das Theme an ([#6919](https://github.com/nocobase/nocobase/pull/6919)) von @katherinehhh
- **[Sammlung: Baum]** Vermeidung von falschen Aktualisierungen ähnlicher Pfadpräfixe während Pfadaktualisierungen ([#6913](https://github.com/nocobase/nocobase/pull/6913)) von @2013xile
- **[Dateimanager]**

  - Korrektur der Vorschau-Übereinstimmungsregel ([#6902](https://github.com/nocobase/nocobase/pull/6902)) von @mytharcher
  - Korrektur der Client-Sammlungsinjektion und des Upload-Parameters ([#6909](https://github.com/nocobase/nocobase/pull/6909)) von @mytharcher
  - Korrektur der Vorschau-URL bei Nicht-Bilddateien ([#6889](https://github.com/nocobase/nocobase/pull/6889)) von @mytharcher
- **[Workflow: Mailer-Knoten]** Behandlung des undefinierten 'to'-Feldes und Verbesserung der E-Mail-Empfängerverarbeitung. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) von @sheldon66
- **[Workflow: Benutzerdefiniertes Aktionsereignis]**

  - Korrektur der falschen Schaltflächenausführung nach einigen Klicks von @mytharcher
  - Korrektur, dass der Fehlerhandler nicht per Klasse gefunden werden kann von @mytharcher
- **[Workflow: Genehmigung]** Korrektur der Berechnung von Assoziationsanhängen von @mytharcher

### [v1.6.34](https://www.nocobase.com/en/blog/v1.6.34)

*Veröffentlichungsdatum: 2025-05-27*

#### 🎉 Neue Funktionen

- **[Aktion: Datensätze importieren Pro]**
  - Unterstützung zur Definition eindeutiger Datensätze über mehrere Felder beim Importieren von Einstellungen von @aaaaaajie
  - Unterstützt Einstellungen zum Überschreiben leerer Zellen und zum Ignorieren dieser beim Importieren von Einstellungen von @aaaaaajie

#### 🚀 Verbesserungen

- **[undefined]** Upgrade der Node-Version auf 20 für CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Fehlgeschlagene noneOf-Bedingungsprüfung in Verknüpfungsregeln ([#6934](https://github.com/nocobase/nocobase/pull/6934)) von @katherinehhh
  - Blockhöheneinstellung wird nicht in Echtzeit angewendet ([#6904](https://github.com/nocobase/nocobase/pull/6904)) von @katherinehhh
- **[undefined]** Verwendung von Node 20 aufgrund von Anforderungen des Commander-Pakets ([#6924](https://github.com/nocobase/nocobase/pull/6924)) von @mytharcher
- **[Datenbank]** Behobenes Problem, dass die automatische Generierung von uuid oder nanoid in vielen-zu-vielen-Assoziationen nicht funktionierte ([#6912](https://github.com/nocobase/nocobase/pull/6912)) von @aaaaaajie
- **[Aktion: Datensätze exportieren]** Behobenes Problem, dass verschachtelte Beziehungen nicht korrekt exportiert wurden. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) von @aaaaaajie
- **[Datenquellen-Manager]** Problem behoben, dass die Drag-and-Drop-Sortierung nicht funktionierte ([#6937](https://github.com/nocobase/nocobase/pull/6937)) von @chenos
- **[API-Dokumentation]** Fehlende Sub-App-Informationen zu req.headers hinzugefügt ([#6933](https://github.com/nocobase/nocobase/pull/6933)) von @chenos
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Aktion "Alle als gelesen markieren" in In-App-Nachrichten die Daten anderer Benutzer beeinflussen konnte. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) von @sheldon66
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Vermeidung von Fehlern durch Plugin-Ladereihenfolge von @mytharcher
- **[Dateispeicher: S3(Pro)]**

  - Korrektur der Vorschau-URL und des Upload-Parameters von @mytharcher
  - Korrektur doppelter Upload-Parameter von @mytharcher
- **[Block: Mehrschritt-Formular]** Korrektur der Typen von @mytharcher
- **[Workflow: Genehmigung]**

  - Korrektur der falschen Datensatz-ID für ViewAction von @mytharcher
  - Korrektur von Anhängen und Datenberechnung vor dem Absenden des Genehmigungsprozesses von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.34](https://www.nocobase.com/en/blog/v1.7.0-beta.34)

*Veröffentlichungsdatum: 2025-05-28*

#### 🎉 Neue Funktionen

- **[undefined]** Neue Unterstützung für Gitpod ermöglicht es, die Entwicklungsumgebung mit einem Klick zu starten und schnell mit der Entwicklung zu beginnen. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) von @kerwin612
- **[Aktion: Datensätze importieren Pro]**

  - Unterstützung zur Definition eindeutiger Datensätze über mehrere Felder beim Importieren von Einstellungen von @aaaaaajie
  - Unterstützt Einstellungen zum Überschreiben leerer Zellen und zum Ignorieren dieser beim Importieren von Einstellungen von @aaaaaajie
- **[Sammlungsfeld: Code]** Höheneinstellungen für das Code-Editor-Feld hinzugefügt von @mytharcher
- **[E-Mail-Manager]**

  - Unterstützung für E-Mail-Markierung als Aufgabe und Hinzufügen von Notizen von @jiannx
  - Unterstützung für Labels und Kombinationseinstellungen von @jiannx

#### 🚀 Verbesserungen

- **[client]**

  - Verbesserung der Stile für die Datumsbereichsfilterkomponente ([#6939](https://github.com/nocobase/nocobase/pull/6939)) von @katherinehhh
  - Problem behoben, bei dem ausgeblendete Formularsteuerelemente die Tabulatortaste abfingen, was die Formularbedienungseffizienz erheblich verbesserte ([#6942](https://github.com/nocobase/nocobase/pull/6942)) von @kerwin612
  - Validierung erforderlicher Felder vor dem Anzeigen des Bestätigungsdialogs ([#6931](https://github.com/nocobase/nocobase/pull/6931)) von @katherinehhh
  - Anpassung der Anzeige von Datumsfilteroptionen ([#6928](https://github.com/nocobase/nocobase/pull/6928)) von @katherinehhh
- **[undefined]** Upgrade der Node-Version auf 20 für CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Sichtbarkeitseinstellung des Formularlabel-Doppelpunkts funktioniert nicht ([#6947](https://github.com/nocobase/nocobase/pull/6947)) von @katherinehhh
  - Blockgrößenänderung durch Ziehen funktioniert nicht ([#6944](https://github.com/nocobase/nocobase/pull/6944)) von @chenos
  - i18n der Feldzuweisungskomponente funktioniert nicht ([#6945](https://github.com/nocobase/nocobase/pull/6945)) von @katherinehhh
  - Fehlgeschlagene noneOf-Bedingungsprüfung in Verknüpfungsregeln ([#6934](https://github.com/nocobase/nocobase/pull/6934)) von @katherinehhh
  - Verschachtelte Bedingungsvariablen in Verknüpfungsregeln werden nicht korrekt gerendert ([#6929](https://github.com/nocobase/nocobase/pull/6929)) von @katherinehhh
  - Blockhöheneinstellung wird nicht in Echtzeit angewendet ([#6904](https://github.com/nocobase/nocobase/pull/6904)) von @katherinehhh
  - Problem mit der Kopierschaltfläche im Fehler-Popup behoben, die [object Object] kopierte. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) von @kerwin612
  - Falsche Datumsvariablenanalyse in der Datumsbereichsbegrenzung ([#6930](https://github.com/nocobase/nocobase/pull/6930)) von @katherinehhh
- **[Datenbank]** Behobenes Problem, dass die automatische Generierung von uuid oder nanoid in vielen-zu-vielen-Assoziationen nicht funktionierte ([#6912](https://github.com/nocobase/nocobase/pull/6912)) von @aaaaaajie
- **[undefined]** Verwendung von Node 20 aufgrund von Anforderungen des Commander-Pakets ([#6924](https://github.com/nocobase/nocobase/pull/6924)) von @mytharcher
- **[Sammlungsfeld: Markdown(Vditor)]** Problem mit der Breite der Markdown-Vditor-Feldkomponente nach dem Vergrößern und Verkleinern ([#6946](https://github.com/nocobase/nocobase/pull/6946)) von @katherinehhh
- **[API-Dokumentation]** Fehlende Sub-App-Informationen zu req.headers hinzugefügt ([#6933](https://github.com/nocobase/nocobase/pull/6933)) von @chenos
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Aktion "Alle als gelesen markieren" in In-App-Nachrichten die Daten anderer Benutzer beeinflussen konnte. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) von @sheldon66
- **[Datenquellen-Manager]** Problem behoben, dass die Drag-and-Drop-Sortierung nicht funktionierte ([#6937](https://github.com/nocobase/nocobase/pull/6937)) von @chenos
- **[Aktion: Datensätze exportieren]** Behobenes Problem, dass verschachtelte Beziehungen nicht korrekt exportiert wurden. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) von @aaaaaajie
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Vermeidung von Fehlern durch Plugin-Ladereihenfolge von @mytharcher
- **[Dateispeicher: S3(Pro)]**

  - Korrektur doppelter Upload-Parameter von @mytharcher
  - Korrektur der Vorschau-URL und des Upload-Parameters von @mytharcher
- **[Block: Mehrschritt-Formular]** Korrektur der Typen von @mytharcher
- **[Workflow: Genehmigung]**

  - Korrektur der falschen Datensatz-ID für ViewAction von @mytharcher
  - Korrektur der Lokalisierung von @mytharcher
  - Korrektur von Anhängen und Datenberechnung vor dem Absenden des Genehmigungsprozesses von @mytharcher
- **[E-Mail-Manager]**

  - Korrektur: Entfernen der Aktionsspalte von @jiannx
  - Korrektur des Fehlers im Notiz-Modal von @jiannx
  - Korrektur der API-Berechtigungen für die Sammlungen mailMessageNotes und mailMessageLabels von @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.15](https://www.nocobase.com/en/blog/v1.7.0-alpha.15)

*Veröffentlichungsdatum: 2025-05-28*

#### 🎉 Neue Funktionen

- **[client]** Unterstützung für benutzerdefinierte Aggregationsvariablen ([#6916](https://github.com/nocobase/nocobase/pull/6916)) von @zhangzhonghe
  Referenz: [Benutzerdefinierte Variablen](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** Unterstützung für benutzerdefinierten Offset in Datumsfeld-Filtern ([#6854](https://github.com/nocobase/nocobase/pull/6854)) von @katherinehhh
- **[Sammlungsfeld: Code]** Höheneinstellungen für das Code-Editor-Feld hinzugefügt von @mytharcher
- **[Aktion: Datensätze importieren Pro]**

  - Unterstützung zur Definition eindeutiger Datensätze über mehrere Felder beim Importieren von Einstellungen von @aaaaaajie
  - Unterstützt Einstellungen zum Überschreiben leerer Zellen und zum Ignorieren dieser beim Importieren von Einstellungen von @aaaaaajie
- **[Benutzerdefinierte Variablen]** Unterstützung für benutzerdefinierte Aggregationsvariablen von @zhangzhonghe
  Referenz: [Benutzerdefinierte Variablen](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[E-Mail-Manager]**

  - Unterstützung für E-Mail-Markierung als Aufgabe und Hinzufügen von Notizen von @jiannx
  - Unterstützung für Labels und Kombinationseinstellungen von @jiannx

#### 🚀 Verbesserungen

- **[client]** Anpassung der Anzeige von Datumsfilteroptionen ([#6928](https://github.com/nocobase/nocobase/pull/6928)) von @katherinehhh
- **[undefined]** Upgrade der Node-Version auf 20 für CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) von @mytharcher
- **[Kalender]** Konfigurierbare Aktualisierungsschaltfläche im Kalenderblock unterstützen ([#6920](https://github.com/nocobase/nocobase/pull/6920)) von @katherinehhh
- **[Aktion: Datensätze importieren]**

  - Optimierung der xlsx-Importleistung ([#6850](https://github.com/nocobase/nocobase/pull/6850)) von @aaaaaajie
  - Optimierung der xlsx-Importleistung ([#6850](https://github.com/nocobase/nocobase/pull/6850)) von @aaaaaajie
- **[Aktion: Datensätze exportieren]** Leistungsoptimierung für den Export nach XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) von @aaaaaajie
- **[Block: iframe]** Verbesserung der Logik zur Zuweisung von Datumsvariablen ([#6828](https://github.com/nocobase/nocobase/pull/6828)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Korrektur der en-US-Lokalisierungen basierend auf zh-CN-Schlüsseln von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Leistungsoptimierung für den Export nach XLSX von @aaaaaajie
- **[Workflow: Genehmigung]** Unterstützung zum Erledigen aller Aufgaben im Workflow-Aufgabenzentrum von @mytharcher
- **[E-Mail-Manager]** Schema-Implementierung, dann E-Mail-Versand und Unterstützung für KI von @jiannx

#### 🐛 Fehlerbehebungen

- **[Datenbank]** Behobenes Problem, dass die automatische Generierung von uuid oder nanoid in vielen-zu-vielen-Assoziationen nicht funktionierte ([#6912](https://github.com/nocobase/nocobase/pull/6912)) von @aaaaaajie
- **[client]**

  - Fehlgeschlagene noneOf-Bedingungsprüfung in Verknüpfungsregeln ([#6934](https://github.com/nocobase/nocobase/pull/6934)) von @katherinehhh
  - Blockhöheneinstellung wird nicht in Echtzeit angewendet ([#6904](https://github.com/nocobase/nocobase/pull/6904)) von @katherinehhh
  - Verschachtelte Bedingungsvariablen in Verknüpfungsregeln werden nicht korrekt gerendert ([#6929](https://github.com/nocobase/nocobase/pull/6929)) von @katherinehhh
  - Falsche Datumsvariablenanalyse in der Datumsbereichsbegrenzung ([#6930](https://github.com/nocobase/nocobase/pull/6930)) von @katherinehhh
  - Falsche Prüfung auf leeren Wert für toMany-Assoziationsfeld in Verknüpfungsregeln ([#6905](https://github.com/nocobase/nocobase/pull/6905)) von @katherinehhh
  - Rendering-Fehler durch ungültiges Stilformat beim Hinzufügen von Assoziationsfeldern ([#6903](https://github.com/nocobase/nocobase/pull/6903)) von @katherinehhh
  - Fehlende aktuelle Objektvariable in Verknüpfungsregeln innerhalb von Untertabellen ([#6907](https://github.com/nocobase/nocobase/pull/6907)) von @katherinehhh
- **[undefined]** Verwendung von Node 20 aufgrund von Anforderungen des Commander-Pakets ([#6924](https://github.com/nocobase/nocobase/pull/6924)) von @mytharcher
- **[Datenquellen-Manager]** Problem behoben, dass die Drag-and-Drop-Sortierung nicht funktionierte ([#6937](https://github.com/nocobase/nocobase/pull/6937)) von @chenos
- **[API-Dokumentation]** Fehlende Sub-App-Informationen zu req.headers hinzugefügt ([#6933](https://github.com/nocobase/nocobase/pull/6933)) von @chenos
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Aktion "Alle als gelesen markieren" in In-App-Nachrichten die Daten anderer Benutzer beeinflussen konnte. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) von @sheldon66
- **[Aktion: Datensätze exportieren]** Behobenes Problem, dass verschachtelte Beziehungen nicht korrekt exportiert wurden. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) von @aaaaaajie
- **[Sammlungsfeld: Markdown(Vditor)]** Markdown (Vditor)-Feld passt sich nicht an das Theme an ([#6919](https://github.com/nocobase/nocobase/pull/6919)) von @katherinehhh
- **[Sammlung: Baum]** Vermeidung von falschen Aktualisierungen ähnlicher Pfadpräfixe während Pfadaktualisierungen ([#6913](https://github.com/nocobase/nocobase/pull/6913)) von @2013xile
- **[Workflow: Mailer-Knoten]** Behandlung des undefinierten 'to'-Feldes und Verbesserung der E-Mail-Empfängerverarbeitung. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) von @sheldon66
- **[Verifizierung]** Korrektur der falschen englischen Benennung: “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) von @2013xile
- **[Dateimanager]**

  - Korrektur der Client-Sammlungsinjektion und des Upload-Parameters ([#6909](https://github.com/nocobase/nocobase/pull/6909)) von @mytharcher
  - Korrektur der Vorschau-Übereinstimmungsregel ([#6902](https://github.com/nocobase/nocobase/pull/6902)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]**

  - Vermeidung von Fehlern durch Plugin-Ladereihenfolge von @mytharcher
  - Korrektur, dass der Fehlerhandler nicht per Klasse gefunden werden kann von @mytharcher
  - Korrektur der falschen Schaltflächenausführung nach einigen Klicks von @mytharcher
- **[Multi-Keyword-Filter]** Entfernen von Leerzeichen auf beiden Seiten jedes Schlüsselworts von @zhangzhonghe
- **[Zwei-Faktor-Authentifizierung (2FA)]]** Erfordert die Konfiguration eines Verifizierers bei Aktivierung von 2FA von @2013xile
- **[Dateispeicher: S3(Pro)]**

  - Korrektur doppelter Upload-Parameter von @mytharcher
  - Korrektur der Vorschau-URL und des Upload-Parameters von @mytharcher
- **[Vorlagendruck]** Verbesserung der hasChildren-Logik in useFieldsTree um eine uiSchema-enum-Prüfung. von @sheldon66
- **[Block: Mehrschritt-Formular]** Korrektur der Typen von @mytharcher
- **[Workflow: Genehmigung]**

  - Korrektur der Lokalisierung von @mytharcher
  - Korrektur von Anhängen und Datenberechnung vor dem Absenden des Genehmigungsprozesses von @mytharcher
  - Korrektur der Berechnung von Assoziationsanhängen von @mytharcher
  - Korrektur der falschen Datensatz-ID für ViewAction von @mytharcher
- **[E-Mail-Manager]**

  - Korrektur der API-Berechtigungen für die Sammlungen mailMessageNotes und mailMessageLabels von @jiannx
  - Korrektur des Fehlers im Notiz-Modal von @jiannx
  - Korrektur: Entfernen der Aktionsspalte von @jiannx
