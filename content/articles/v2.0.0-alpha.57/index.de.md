---
title: "NocoBase v2.0.0-alpha.57: Neue Systemvariablen im Workflow hinzugefügt, einschließlich `instanceId` und `genSnowflakeId`"
description: "Versionshinweise zu v2.0.0-alpha.57"
---

### 🎉 Neue Funktionen

- **[Workflow]** Neue Systemvariablen im Workflow hinzugefügt, darunter `instanceId` und `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Verwendung von Select für die Konfiguration der Spaltenbreite von Aktionen ([#8218](https://github.com/nocobase/nocobase/pull/8218)) von @katherinehhh
- **[KI-Mitarbeiter]** Fehler behoben, bei dem KI-Mitarbeiter nach der ersten Bearbeitung nicht antworteten<br/>Überflüssigen integrierten KI-Mitarbeiter "Avery Form Assistant" entfernt<br/>Standard-Berechtigungen für die erste Rolle von integrierten KI-Mitarbeitern hinzugefügt<br/>Fehlerbehandlung und Ausgabeverhalten von KI-Mitarbeitern verbessert<br/>Unterstützung für den Zugriff auf modale Kontextvariablen durch KI hinzugefügt<br/>Unterstützung für externe Datenquellen für KI hinzugefügt<br/>Fehler behoben, bei dem die Konversation bei der Verarbeitung großer Datenmengen durch KI falsch abgeschnitten wurde ([#8191](https://github.com/nocobase/nocobase/pull/8191)) von @heziqiang
- **[Workflow]**

  - Ursprüngliche Workflow-Instanz zur Duplizieren-API hinzugefügt ([#8225](https://github.com/nocobase/nocobase/pull/8225)) von @mytharcher
  - Beschreibung des Feldes `changed` im Sammlungsereignis verbessert ([#8216](https://github.com/nocobase/nocobase/pull/8216)) von @mytharcher
- **[Async-Task-Manager]** Verbesserte Fehlerbehandlung bei Bereinigungsaufgaben durch Hinzufügen von Ausnahmefangmechanismen, um Anwendungsabstürze zu verhindern ([#8215](https://github.com/nocobase/nocobase/pull/8215)) von @mytharcher
- **[Block: Aktionspanel]** Verbesserte Anzeige von ausgeblendeten Blöcken, Aktionen und Feldern im Konfigurationsmodus ([#8174](https://github.com/nocobase/nocobase/pull/8174)) von @katherinehhh
- **[UI-Vorlagen]** UI-Vorlagen-Plugin hinzugefügt, das die Möglichkeit zur Wiederverwendung von Blockvorlagen und Popup-Vorlagen bietet. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) von @gchust
- **[Aktion: Datensätze exportieren Pro]** Import Pro & Export Pro Aktion unterstützt jetzt Berechtigungssteuerung von @katherinehhh
- **[Workflow: Genehmigung]** `approval.data` wird bei Ausführungsende auf die neueste Version des zu genehmigenden Datensatzes aktualisiert, um dem Anzeigemodus "Neueste" zu entsprechen von @mytharcher

### 🐛 Fehlerbehebungen

- **[Flow-Engine]**

  - Problem mit der Berechtigungsprüfung beim Hinzufügen von Unterdatensätzen in einer Baumtabelle behoben ([#8240](https://github.com/nocobase/nocobase/pull/8240)) von @katherinehhh
  - Problem behoben, bei dem einige blockbezogene Popup-Datensatzvariablen falsch angezeigt wurden. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) von @gchust
  - Problem behoben, dass Aktionen oder Tabs, die nach dem Ziehen von Aktionen oder Tabs hinzugefügt wurden, nicht angezeigt wurden. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) von @gchust
  - Problem mit der Berechtigungsprüfung in externen Datenquellen ([#8221](https://github.com/nocobase/nocobase/pull/8221)) von @katherinehhh
  - Problem behoben, dass Aktionen externer Datenquellen trotz vorhandener Berechtigung ausgeblendet wurden ([#8217](https://github.com/nocobase/nocobase/pull/8217)) von @katherinehhh
- **[Client]**

  - Behandlung leerer Verknüpfungsregeln, um Fehler zu verhindern ([#8239](https://github.com/nocobase/nocobase/pull/8239)) von @zhangzhonghe
  - Problem behoben, dass die Aktionsspalte des Tabellenblocks nicht entfernt werden konnte. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) von @gchust
  - Problem behoben, dass die Vorschauausführung kompilierte JSX-Ausgabe zurück in stepParams schrieb, was dazu führte, dass der gespeicherte Quellcode überschrieben wurde. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) von @gchust
  - Fehler beim Hochladen von S3 Pro-Anhängen behoben und Dateivorschau verbessert ([#8211](https://github.com/nocobase/nocobase/pull/8211)) von @katherinehhh
- **[CLI]** license-kit ist kompatibel mit dem Fall, dass DB_PASSWORD leer ist ([#8220](https://github.com/nocobase/nocobase/pull/8220)) von @jiannx
- **[Datenbank]** Inkonsistenz bei der Abfrage von Datumsfeldern zwischen Haupt- und externen Datenquellen behoben ([#8181](https://github.com/nocobase/nocobase/pull/8181)) von @cgyrock
- **[Sammlungsfeld: Sequenz]** Fehler behoben, der auftrat, wenn der Feld-Sequenz-Reparaturbefehl auf eine nicht vorhandene Sammlung in der aktuellen Umgebung traf. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) von @cgyrock
- **[Workflow: Manueller Knoten]** Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn die Ausführung eines gelöschten Workflows abgebrochen wurde ([#8258](https://github.com/nocobase/nocobase/pull/8258)) von @mytharcher
- **[UI-Vorlagen]** Fehler behoben, bei dem das Öffnen eines Popups für ein Assoziationsfeld fälschlicherweise eine Popup-Vorlage für ein Nicht-Assoziationsfeld verwendete. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) von @gchust
- **[Abteilungen]** Problem behoben, bei dem die Aggregatsuche keine Benutzer finden konnte ([#8222](https://github.com/nocobase/nocobase/pull/8222)) von @2013xile
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem behoben, dass Viele-zu-viele (Array)-Felder nicht erstellt werden konnten, wenn der Zielschlüsseltyp Snowflake-ID (53-Bit) war ([#8226](https://github.com/nocobase/nocobase/pull/8226)) von @2013xile
- **[Lizenzeinstellungen]** Abnormale Anzeige des lizenzierten Plugins behoben ([#8214](https://github.com/nocobase/nocobase/pull/8214)) von @jiannx
- **[Aktion: Datensätze importieren]** Problem behoben, dass der Zeilenindex in der Fehlermeldung bei einem Fehler in der Importaktion immer 1 war ([#8244](https://github.com/nocobase/nocobase/pull/8244)) von @mytharcher
- **[Vorlagendruck]** Problem behoben, dass die Vorlagendruckanfrage nicht mit externen Datenquellen funktionierte von @katherinehhh
- **[Workflow: Genehmigung]**

  - Doppeltes Zurücksetzen derselben Transaktion behoben von @mytharcher
  - Problem behoben, dass die Genehmigung eine Assoziation zur Erstellung eines neuen Datensatzes verursachte von @mytharcher
  - Problem behoben, dass die Genehmigung eine Viele-Assoziation zur Erstellung neuer Datensätze verursachte von @mytharcher
