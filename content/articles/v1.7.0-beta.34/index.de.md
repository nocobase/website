---
title: "NocoBase v1.7.0-beta.34: Verbesserung der Importfunktion"
description: "Versionshinweise zu v1.7.0-beta.34"
---

### 🎉 Neue Funktionen

- **[undefined]** Neue Unterstützung für Gitpod ermöglicht es, die Entwicklungsumgebung mit einem Klick zu starten und schnell mit der Entwicklung zu beginnen. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) von @kerwin612
- **[Aktion: Datensätze importieren Pro]**

  - Unterstützt die Definition eindeutiger Datensätze durch mehrere Felder beim Importieren von Einstellungen von @aaaaaajie
  - Unterstützt Einstellungen zum Überschreiben leerer Zellen und zum Ignorieren dieser beim Importieren von Einstellungen von @aaaaaajie
- **[Sammlungsfeld: Code]** Höheneinstellung für das Code-Editor-Feld hinzugefügt von @mytharcher
- **[E-Mail-Manager]**

  - Unterstützt das Markieren von E-Mails als "zu erledigen" und das Hinzufügen von Notizen von @jiannx
  - Unterstützt Labels und kombinierte Einstellungen von @jiannx

### 🚀 Verbesserungen

- **[Client]**

  - Verbesserte Stile für die Datumsbereichs-Filterkomponente ([#6939](https://github.com/nocobase/nocobase/pull/6939)) von @katherinehhh
  - Problem behoben, bei dem ausgeblendete Formularsteuerelemente die Tabulatortaste abfingen, was die Effizienz der Formularbedienung erheblich verbessert ([#6942](https://github.com/nocobase/nocobase/pull/6942)) von @kerwin612
  - Pflichtfelder werden validiert, bevor der Bestätigungsdialog angezeigt wird ([#6931](https://github.com/nocobase/nocobase/pull/6931)) von @katherinehhh
  - Anzeige des Inhalts der Datumsfilteroption angepasst ([#6928](https://github.com/nocobase/nocobase/pull/6928)) von @katherinehhh
- **[undefined]** Node-Version für CI auf 20 aktualisiert ([#6927](https://github.com/nocobase/nocobase/pull/6927)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Einstellung zur Sichtbarkeit des Doppelpunkts bei Formularlabels funktioniert nicht ([#6947](https://github.com/nocobase/nocobase/pull/6947)) von @katherinehhh
  - Blockgrößenänderung durch Ziehen funktioniert nicht ([#6944](https://github.com/nocobase/nocobase/pull/6944)) von @chenos
  - i18n der Feldzuweisungskomponente funktioniert nicht ([#6945](https://github.com/nocobase/nocobase/pull/6945)) von @katherinehhh
  - Fehlgeschlagene Prüfung der noneOf-Bedingung in Verknüpfungsregeln ([#6934](https://github.com/nocobase/nocobase/pull/6934)) von @katherinehhh
  - Verschachtelte Bedingungsvariablen in Verknüpfungsregeln werden nicht korrekt dargestellt ([#6929](https://github.com/nocobase/nocobase/pull/6929)) von @katherinehhh
  - Blockhöheneinstellung wird nicht in Echtzeit angewendet ([#6904](https://github.com/nocobase/nocobase/pull/6904)) von @katherinehhh
  - Problem mit der Kopier-Schaltfläche im Fehler-Popup behoben, die [object Object] kopierte. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) von @kerwin612
  - Falsche Datumsvariablenanalyse bei Datumsbereichsbegrenzung ([#6930](https://github.com/nocobase/nocobase/pull/6930)) von @katherinehhh
- **[Datenbank]** Fehlerhafte automatische Generierung von UUID oder Nanoid in Viele-zu-Viele-Assoziationen behoben ([#6912](https://github.com/nocobase/nocobase/pull/6912)) von @aaaaaajie
- **[undefined]** Node 20 aufgrund von Anforderungen des Commander-Pakets verwendet ([#6924](https://github.com/nocobase/nocobase/pull/6924)) von @mytharcher
- **[Sammlungsfeld: Markdown(Vditor)]** Problem mit der Komponentenbreite des Markdown-Vditor-Feldes nach Zoom-In und Zoom-Out ([#6946](https://github.com/nocobase/nocobase/pull/6946)) von @katherinehhh
- **[API-Dokumentation]** Fehlende Sub-App-Informationen zu req.headers hinzugefügt ([#6933](https://github.com/nocobase/nocobase/pull/6933)) von @chenos
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Aktion "Alle als gelesen markieren" in In-App-Nachrichten die Daten anderer Benutzer beeinflussen konnte. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) von @sheldon66
- **[Datenquellen-Manager]** Problem behoben, bei dem die Drag-and-Drop-Sortierung nicht funktionierte ([#6937](https://github.com/nocobase/nocobase/pull/6937)) von @chenos
- **[Aktion: Datensätze exportieren]** Problem behoben, bei dem verschachtelte Beziehungen nicht korrekt exportiert wurden. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) von @aaaaaajie
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Fehler durch Plugin-Ladereihenfolge vermieden von @mytharcher
- **[Dateispeicher: S3(Pro)]**

  - Doppelte Upload-Parameter behoben von @mytharcher
  - Vorschau-URL und Upload-Parameter behoben von @mytharcher
- **[Block: Mehrschritt-Formular]** Typen korrigiert von @mytharcher
- **[Workflow: Genehmigung]**

  - Falsche Datensatz-ID für ViewAction behoben von @mytharcher
  - Locale korrigiert von @mytharcher
  - Appends und Datenberechnung vor dem Absenden des Genehmigungsprozesses behoben von @mytharcher
- **[E-Mail-Manager]**

  - Fehlerbehebung: Aktionsspalte entfernt von @jiannx
  - Fehler im Modal "Notiz hinzufügen" behoben von @jiannx
  - API-Berechtigungen der Sammlungen mailMessageNotes und mailMessageLabels korrigiert von @jiannx
