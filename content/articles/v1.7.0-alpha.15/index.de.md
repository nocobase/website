---
title: "NocoBase v1.7.0-alpha.15: Unterstützung für benutzerdefinierte Aggregationsvariablen"
description: "Versionshinweise zu v1.7.0-alpha.15"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für benutzerdefinierte Aggregationsvariablen ([#6916](https://github.com/nocobase/nocobase/pull/6916)) von @zhangzhonghe
Referenz: [Benutzerdefinierte Variablen](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Utils]** Unterstützung für benutzerdefinierten Offset in Datumsfeld-Filtern ([#6854](https://github.com/nocobase/nocobase/pull/6854)) von @katherinehhh

- **[Sammlungsfeld: Code]** Höheneinstellungen für das Code-Editor-Feld hinzugefügt von @mytharcher

- **[Aktion: Datensätze importieren Pro]**
  - Unterstützt die Definition eindeutiger Datensätze durch mehrere Felder beim Importieren von Einstellungen von @aaaaaajie

  - Unterstützt Einstellungen zum Überschreiben leerer Zellen und zum Ignorieren dieser beim Importieren von Einstellungen von @aaaaaajie

- **[Benutzerdefinierte Variablen]** Unterstützung für benutzerdefinierte Aggregationsvariablen von @zhangzhonghe
Referenz: [Benutzerdefinierte Variablen](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[E-Mail-Manager]**
  - Unterstützt E-Mail als "zu erledigen" markieren und Notiz hinzufügen von @jiannx

  - Unterstützt Labels und Kombinationseinstellungen von @jiannx

### 🚀 Verbesserungen

- **[Client]** Anpassung der Anzeige von Datumsfilteroptionen ([#6928](https://github.com/nocobase/nocobase/pull/6928)) von @katherinehhh

- **[undefined]** Node-Version auf 20 für CI aktualisiert ([#6927](https://github.com/nocobase/nocobase/pull/6927)) von @mytharcher

- **[Kalender]** Unterstützt konfigurierbare Aktualisierungsschaltfläche im Kalenderblock ([#6920](https://github.com/nocobase/nocobase/pull/6920)) von @katherinehhh

- **[Aktion: Datensätze importieren]**
  - Optimierung der XLSX-Importleistung ([#6850](https://github.com/nocobase/nocobase/pull/6850)) von @aaaaaajie

  - Optimierung der XLSX-Importleistung ([#6850](https://github.com/nocobase/nocobase/pull/6850)) von @aaaaaajie

- **[Aktion: Datensätze exportieren]** Leistungsoptimierung für den Export nach XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) von @aaaaaajie

- **[Block: iframe]** Verbesserung der Logik zur Datumsvariablenzuweisung ([#6828](https://github.com/nocobase/nocobase/pull/6828)) von @katherinehhh

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Korrektur der en-US-Lokalisierungen basierend auf zh-CN-Schlüsseln von @mytharcher

- **[Aktion: Datensätze exportieren Pro]** Leistungsoptimierung für den Export nach XLSX von @aaaaaajie

- **[Workflow: Genehmigung]** Unterstützt die Erledigung aller Aufgaben im Workflow-Aufgabenzentrum von @mytharcher

- **[E-Mail-Manager]** Schema-Implementierung, dann E-Mail-Versand und KI-Unterstützung von @jiannx

### 🐛 Fehlerbehebungen

- **[Datenbank]** Behoben: Automatische Generierung von UUID oder Nanoid funktioniert nicht in Viele-zu-Viele-Beziehungen ([#6912](https://github.com/nocobase/nocobase/pull/6912)) von @aaaaaajie

- **[Client]**
  - noneOf-Bedingungsprüfung in Verknüpfungsregeln fehlgeschlagen ([#6934](https://github.com/nocobase/nocobase/pull/6934)) von @katherinehhh

  - Blockhöheneinstellung wird nicht in Echtzeit angewendet ([#6904](https://github.com/nocobase/nocobase/pull/6904)) von @katherinehhh

  - Verschachtelte Bedingungsvariablen in Verknüpfungsregeln werden nicht korrekt dargestellt ([#6929](https://github.com/nocobase/nocobase/pull/6929)) von @katherinehhh

  - Falsche Datumsvariablenanalyse bei Datumsbereichsbegrenzung ([#6930](https://github.com/nocobase/nocobase/pull/6930)) von @katherinehhh

  - Falsche Leerwertprüfung für toMany-Assoziationsfeld in Verknüpfungsregel ([#6905](https://github.com/nocobase/nocobase/pull/6905)) von @katherinehhh

  - Darstellungsfehler durch ungültiges Stilformat beim Hinzufügen eines Assoziationsfeldes ([#6903](https://github.com/nocobase/nocobase/pull/6903)) von @katherinehhh

  - Fehlende aktuelle Objektvariable in Verknüpfungsregel innerhalb einer Untertabelle ([#6907](https://github.com/nocobase/nocobase/pull/6907)) von @katherinehhh

- **[undefined]** Node 20 aufgrund von Commander-Paketanforderungen verwendet ([#6924](https://github.com/nocobase/nocobase/pull/6924)) von @mytharcher

- **[Datenquellen-Manager]** Problem mit Drag-and-Drop-Sortierung behoben ([#6937](https://github.com/nocobase/nocobase/pull/6937)) von @chenos

- **[API-Dokumentation]** Fehlende Sub-App-Informationen zu req.headers hinzugefügt ([#6933](https://github.com/nocobase/nocobase/pull/6933)) von @chenos

- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Aktion "Alle als gelesen markieren" in In-App-Nachrichten die Daten anderer Benutzer beeinflussen konnte. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) von @sheldon66

- **[Aktion: Datensätze exportieren]** Problem behoben, bei dem verschachtelte Beziehungen nicht korrekt exportiert wurden. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) von @aaaaaajie

- **[Sammlungsfeld: Markdown(Vditor)]** Markdown (Vditor)-Feld passt sich nicht an das Theme an ([#6919](https://github.com/nocobase/nocobase/pull/6919)) von @katherinehhh

- **[Sammlung: Baum]** Vermeidung falscher Aktualisierungen ähnlicher Pfadpräfixe während Pfadaktualisierungen ([#6913](https://github.com/nocobase/nocobase/pull/6913)) von @2013xile

- **[Workflow: Mailer-Knoten]** Behandlung von undefiniertem 'to'-Feld und Verbesserung der E-Mail-Empfängerverarbeitung. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) von @sheldon66

- **[Verifizierung]** Korrektur der falschen englischen Benennung: "verificators" → "verifiers" ([#6834](https://github.com/nocobase/nocobase/pull/6834)) von @2013xile

- **[Dateimanager]**
  - Korrektur der Client-Sammlungsinjektion und Upload-Parameter ([#6909](https://github.com/nocobase/nocobase/pull/6909)) von @mytharcher

  - Korrektur der Vorschau-Übereinstimmungsregel ([#6902](https://github.com/nocobase/nocobase/pull/6902)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]**
  - Vermeidung von Fehlern durch Plugin-Ladereihenfolge von @mytharcher

  - Korrektur, dass der Fehlerhandler nicht per Klasse zugeordnet werden konnte von @mytharcher

  - Korrektur, dass die Schaltfläche nach einigen Klicks falsch ausgeführt wurde von @mytharcher

- **[Multi-Keyword-Filter]** Entfernung von Leerzeichen auf beiden Seiten jedes Schlüsselworts von @zhangzhonghe

- **[Zwei-Faktor-Authentifizierung (2FA)]** Erfordert die Konfiguration eines Verifiers bei Aktivierung von 2FA von @2013xile

- **[Dateispeicher: S3(Pro)]**
  - Korrektur doppelter Upload-Parameter von @mytharcher

  - Korrektur der Vorschau-URL und des Upload-Parameters von @mytharcher

- **[Vorlagendruck]** Verbesserung der hasChildren-Logik in useFieldsTree um uiSchema-Enum-Prüfung. von @sheldon66

- **[Block: Mehrschritt-Formular]** Korrektur von Typen von @mytharcher

- **[Workflow: Genehmigung]**
  - Korrektur der Lokalisierung von @mytharcher

  - Korrektur von Appends und Datenberechnung vor dem Absenden des Genehmigungsprozesses von @mytharcher

  - Korrektur der Assoziations-Appends-Berechnung von @mytharcher

  - Korrektur der falschen Datensatz-ID für ViewAction von @mytharcher

- **[E-Mail-Manager]**
  - Korrektur der API-Berechtigungen für mailMessageNotes und mailMessageLabels-Sammlungen von @jiannx

  - Korrektur des Fehlers im Notiz-Modal von @jiannx

  - Korrektur: Entfernen der Aktionsspalte von @jiannx
