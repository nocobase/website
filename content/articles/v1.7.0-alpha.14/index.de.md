---
title: "NocoBase v1.7.0-alpha.14: Unterstützung für kommerzielle Autorisierung"
description: "Versionshinweise zu v1.7.0-alpha.14"
---

### 🎉 Neue Funktionen

- **[Client]**

  - Einzeilige Textfelder unterstützen die Eingabe mehrerer Schlüsselwörter zur Filterung ([#6685](https://github.com/nocobase/nocobase/pull/6685)) von @zhangzhonghe
    Referenz: [Multi-Keyword-Filter](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - Aktionsverknüpfungsregeln unterstützen 'aktuelles Formular'-Variablen ([#6810](https://github.com/nocobase/nocobase/pull/6810)) von @katherinehhh
- **[Build]** Unterstützung für kommerzielle Lizenzierung ([#6554](https://github.com/nocobase/nocobase/pull/6554)) von @jiannx
- **[Undefiniert]** Protokollierung des Import-Plugins hinzugefügt von @aaaaaajie
- **[Aktion: Datensätze importieren]** Protokollierung des Import-Plugins hinzugefügt ([#6841](https://github.com/nocobase/nocobase/pull/6841)) von @aaaaaajie
- **[Plugin-Commercial]** Unterstützung für kommerzielle Nutzung von @jiannx
- **[Multi-Keyword-Filter]** Einzeilige Textfelder unterstützen die Eingabe mehrerer Schlüsselwörter zur Filterung von @zhangzhonghe
  Referenz: [Multi-Keyword-Filter](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Vorlagendruck]**

  - Unterstützung für Seriendruck im Vorlagendruck hinzugefügt. von @sheldon66
  - Unterstützung für Seriendruck im Vorlagendruck hinzugefügt. von @sheldon66

### 🚀 Verbesserungen

- **[Undefiniert]** Vollständiges Docker-Image erstellen ([#6898](https://github.com/nocobase/nocobase/pull/6898)) von @chenos
- **[Client]**

  - Optimierung des Problems, dass Seiten bei Nutzung zunehmend langsamer werden ([#6888](https://github.com/nocobase/nocobase/pull/6888)) von @zhangzhonghe
  - Weitere integrierte Größenoptionen für das Lesestatus-Bild hinzugefügt ([#6868](https://github.com/nocobase/nocobase/pull/6868)) von @katherinehhh
- **[Workflow]**

  - Alle fehlenden en-US-Lokalisierungsschlüssel hinzugefügt ([#6885](https://github.com/nocobase/nocobase/pull/6885)) von @mytharcher
  - Ermöglicht die Überarbeitung von mehr als einem Entwurf ([#6851](https://github.com/nocobase/nocobase/pull/6851)) von @mytharcher
- **[Sammlungsfeld: Anhang (URL)]** Weitere integrierte Größen zum Anhang-URL-Feld für den Lesestatus hinzugefügt ([#6871](https://github.com/nocobase/nocobase/pull/6871)) von @katherinehhh
- **[E-Mail-Manager]**

  - Synchronisationsfehler und andere Benutzerfreundlichkeitsprobleme behoben von @jiannx
  - Entwurfsverwaltung hinzugefügt, unterstützt E-Mail-Ansicht für Untergebene von @jiannx

### 🐛 Fehlerbehebungen

- **[Client]**

  - Deaktivierte Verknüpfungsregel funktioniert nicht für Aktionsschaltfläche ([#6896](https://github.com/nocobase/nocobase/pull/6896)) von @katherinehhh
  - Seite wird nach dem Löschen des letzten Elements nicht korrekt weitergeleitet ([#6892](https://github.com/nocobase/nocobase/pull/6892)) von @katherinehhh
  - Kaskadenkomponente in Modalen lädt anfänglich keine Verknüpfungsdaten ([#6886](https://github.com/nocobase/nocobase/pull/6886)) von @katherinehhh
  - Tabelle zur Auswahl verknüpfter Datensätze filterte bereits verknüpfte Datensätze nicht heraus ([#6874](https://github.com/nocobase/nocobase/pull/6874)) von @katherinehhh
  - Verknüpfungsdaten werden nicht übermittelt, wenn Verknüpfungsfelder in subForm offengelegt werden ([#6883](https://github.com/nocobase/nocobase/pull/6883)) von @katherinehhh
  - Fehlende aktuelle Formularvariablen im Datenbereich der Datenauswahltabelle ([#6882](https://github.com/nocobase/nocobase/pull/6882)) von @katherinehhh
  - Verschiebbare Sortierfelder zeigen verfügbare Optionen nicht korrekt an ([#6875](https://github.com/nocobase/nocobase/pull/6875)) von @katherinehhh
  - Wert auf der rechten Seite löschen, wenn sich der Operator in der Verknüpfungsregel ändert ([#6862](https://github.com/nocobase/nocobase/pull/6862)) von @katherinehhh
  - Operator fehlt beim Wechseln in Verknüpfungsregeln ([#6857](https://github.com/nocobase/nocobase/pull/6857)) von @katherinehhh
  - Problem mit Schaltflächenverknüpfung im Detailblock ([#6867](https://github.com/nocobase/nocobase/pull/6867)) von @katherinehhh
  - Falsche Auswertung von Operatoren für Datumsvariablen in Verknüpfungsbedingungen ([#6825](https://github.com/nocobase/nocobase/pull/6825)) von @katherinehhh
  - Ausgeblendete Felder werden weiterhin angezeigt ([#6844](https://github.com/nocobase/nocobase/pull/6844)) von @zhangzhonghe
  - Inkompatibilität der Variablenanalyse mit {{title}}-Daten in der sekundären Bestätigung ([#6838](https://github.com/nocobase/nocobase/pull/6838)) von @katherinehhh
  - Inkompatibilität der Variablenanalyse mit {{title}}-Daten in der sekundären Bestätigung ([#6838](https://github.com/nocobase/nocobase/pull/6838)) von @katherinehhh
  - Verbesserung des Stils der Wertkomponente in Verknüpfungsregeln ([#6836](https://github.com/nocobase/nocobase/pull/6836)) von @katherinehhh
- **[Datenbank]** Behandlung leerer Zeichenfolgenzellen beim Feldimport, um Fehler zu vermeiden ([#6880](https://github.com/nocobase/nocobase/pull/6880)) von @aaaaaajie
- **[Build]** Behebung des Client-Laufzeitfehlers in plugin-workflow-javascript, Prozess undefinierter Fehler ([#6859](https://github.com/nocobase/nocobase/pull/6859)) von @jiannx
- **[Dateimanager]**

  - Vorschau-URL für Nicht-Bilddateien korrigiert ([#6889](https://github.com/nocobase/nocobase/pull/6889)) von @mytharcher
  - Typen korrigiert ([#6873](https://github.com/nocobase/nocobase/pull/6873)) von @mytharcher
  - Erstellen von Dateieinträgen ohne Fremdschlüsselberechtigung korrigiert ([#6863](https://github.com/nocobase/nocobase/pull/6863)) von @mytharcher
- **[Block: Aktionspanel]**

  - Liest den Routen-Basename aus dem Scanner, um sich an die Desktop-Umgebung anzupassen. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) von @sheldon66
  - Die Farbe des Aktionspanels ist im Dunkelmodus falsch ([#6842](https://github.com/nocobase/nocobase/pull/6842)) von @zhangzhonghe
- **[KI-Integration]** Inhalt wird nicht angezeigt, wenn zwischen LLM-Dienstkonfiguration und Validierungskonfigurationsseiten gewechselt wird ([#6887](https://github.com/nocobase/nocobase/pull/6887)) von @2013xile
- **[Workflow: Manueller Knoten]**

  - Testfall korrigiert, da Plugin aus der integrierten Liste entfernt wurde ([#6895](https://github.com/nocobase/nocobase/pull/6895)) von @mytharcher
  - Rendering-Fehler beim Anzeigen eines nicht verarbeiteten Elements behoben ([#6879](https://github.com/nocobase/nocobase/pull/6879)) von @mytharcher
  - Falsche Zählung der Statistiknummern bei Aufgaben korrigiert ([#6783](https://github.com/nocobase/nocobase/pull/6783)) von @mytharcher
- **[Workflow]**

  - Stapellimit funktioniert falsch für Sammlungsereignisse korrigiert ([#6876](https://github.com/nocobase/nocobase/pull/6876)) von @mytharcher
  - Navigieren zurück funktioniert nicht, wenn Popup-Link direkt im Aufgabencenter geöffnet wird ([#6853](https://github.com/nocobase/nocobase/pull/6853)) von @mytharcher
- **[Datenvisualisierung]**

  - Diagrammblöcke werden nicht angezeigt, wenn sie zu Popups hinzugefügt werden, die durch blockweite Aktionen ausgelöst werden ([#6864](https://github.com/nocobase/nocobase/pull/6864)) von @2013xile
  - Fehler beim Filtern von verschachtelten m2m-Feldern behoben ([#6855](https://github.com/nocobase/nocobase/pull/6855)) von @2013xile
- **[Aktion: Datensätze exportieren]**

  - Leistungsverbesserung beim Löschen von Feldern in den Import/Export-Feldeinstellungen ([#6861](https://github.com/nocobase/nocobase/pull/6861)) von @katherinehhh
  - Export von leeren Werten in verschachtelten Verknüpfungen und Anhangs-URLs korrigiert ([#6845](https://github.com/nocobase/nocobase/pull/6845)) von @aaaaaajie
- **[Block: Vorlage]** Fehler beim Öffnen des Popups nach dem Speichern als geerbte Vorlage ([#6840](https://github.com/nocobase/nocobase/pull/6840)) von @gchust
- **[Aktion: Datensatz duplizieren]** Modal schließt beim ersten Klick auf die Eingabe beim Bearbeiten duplizierter Daten ([#6848](https://github.com/nocobase/nocobase/pull/6848)) von @katherinehhh
- **[Workflow: Testkit]** Fehlgeschlagene Testfälle aufgrund des erforderlichen Preset-Plugins behoben ([#6839](https://github.com/nocobase/nocobase/pull/6839)) von @mytharcher
- **[Workflow: Nachaktionsereignis]** Variable 'user acted' in Hanldebars-Vorlage nicht zugänglich korrigiert ([#6837](https://github.com/nocobase/nocobase/pull/6837)) von @mytharcher
- **[Plugin-Commercial]**

  - Senden kommerzieller Logs an CRM und Textübersetzung korrigiert von @jiannx
  - Implementierung der withCommercial-Funktion mittels Prototypenkette von @jiannx
- **[Aktion: Datensätze exportieren Pro]**

  - Leistungsverbesserung beim Löschen von Feldern in den Import/Export-Pro-Feldeinstellungen von @katherinehhh
  - Fehler beim Exportieren langer Texte behoben. von @aaaaaajie
- **[Workflow: Unterworkflow]** Undefinierter Trigger, der Seitenabsturz verursacht, behoben von @mytharcher
- **[Vorlagendruck]**

  - Problem 'Formatierer nicht gefunden' behoben. von @sheldon66
  - Formatierer nicht gefunden behoben von @sheldon66
- **[Dateispeicher: S3(Pro)]**

  - Zugriffs-URL-Ablauf ungültig von @jiannx
  - Änderung zur Verwendung des Sammlungsfeldes zur Lokalisierung des Speichers von @mytharcher
- **[Workflow: Genehmigung]**

  - Falsche Zählung der Statistiknummern bei Aufgaben korrigiert von @mytharcher
  - Bereich der Beauftragten für Delegierung und Hinzufügen zu anderen Beauftragten korrigiert von @mytharcher
- **[E-Mail-Manager]**

  - TS-Fehler behoben von @jiannx
  - Listen-API unterstützt Betreff-Zusammenführung von @jiannx
- **[Backup-Manager]** Typfehler im Build korrigiert von @mytharcher
