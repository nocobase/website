---
title: "NocoBase v1.7.0-beta.32: Einzeilige Textfelder unterstützen die Eingabe mehrerer Schlüsselwörter zum Filtern"
description: "Versionshinweise zu v1.7.0-beta.32"
---

### 🎉 Neue Funktionen

- **[Client]** Einzeilige Textfelder unterstützen die Eingabe mehrerer Schlüsselwörter zur Filterung ([#6685](https://github.com/nocobase/nocobase/pull/6685)) von @zhangzhonghe
  Referenz: [Multi-Keyword-Filter](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Multi-Keyword-Filter]** Einzeilige Textfelder unterstützen die Eingabe mehrerer Schlüsselwörter zur Filterung von @zhangzhonghe
  Referenz: [Multi-Keyword-Filter](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Vorlagendruck]** Unterstützung für Seriendruck im Vorlagendruck hinzugefügt. von @sheldon66

### 🚀 Verbesserungen

- **[Workflow]** Alle fehlenden en-US-Lokalisierungsschlüssel hinzugefügt ([#6885](https://github.com/nocobase/nocobase/pull/6885)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Kaskadenkomponente in Modalen lädt anfänglich keine Verknüpfungsdaten ([#6886](https://github.com/nocobase/nocobase/pull/6886)) von @katherinehhh
  - Verknüpfungsdaten werden nicht übermittelt, wenn Verknüpfungsfelder in subForm offengelegt werden ([#6883](https://github.com/nocobase/nocobase/pull/6883)) von @katherinehhh
  - Verschiebbare Sortierfelder zeigen verfügbare Optionen nicht korrekt an ([#6875](https://github.com/nocobase/nocobase/pull/6875)) von @katherinehhh
  - Fehlende aktuelle Formularvariablen im Datenbereich der Datenauswahltabelle ([#6882](https://github.com/nocobase/nocobase/pull/6882)) von @katherinehhh
  - Verknüpfungsauswahl-Datensatztabelle filterte bereits verknüpfte Datensätze nicht ([#6874](https://github.com/nocobase/nocobase/pull/6874)) von @katherinehhh
- **[Datenbank]** Behandlung leerer Zeichenfolgenzellen beim Feldimport, um Fehler zu vermeiden ([#6880](https://github.com/nocobase/nocobase/pull/6880)) von @aaaaaajie
- **[Workflow: Manueller Knoten]** Behebung eines Renderfehlers beim Anzeigen unbearbeiteter Elemente ([#6879](https://github.com/nocobase/nocobase/pull/6879)) von @mytharcher
- **[Dateimanager]** Typen korrigiert ([#6873](https://github.com/nocobase/nocobase/pull/6873)) von @mytharcher
- **[Block: Aktionspanel]** Liest den Routen-Basisnamen aus dem Scanner, um sich an die Desktop-Umgebung anzupassen. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) von @sheldon66
- **[KI-Integration]** Inhalt wird nicht angezeigt beim Wechsel zwischen LLM-Dienstkonfigurations- und Validierungskonfigurationsseiten ([#6887](https://github.com/nocobase/nocobase/pull/6887)) von @2013xile
- **[Workflow]** Behebung der fehlerhaften Stack-Begrenzung für Sammlungsereignisse ([#6876](https://github.com/nocobase/nocobase/pull/6876)) von @mytharcher
- **[Workflow: Genehmigung]** Behebung des Bearbeiterbereichs für Delegierte und Hinzufügen zu anderen Bearbeitern von @mytharcher
- **[Backup-Manager]** Behebung eines Typfehlers beim Build von @mytharcher
