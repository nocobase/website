---
title: "NocoBase v2.2.0-beta.5: Schema-Versionsaufzeichnungen für Umgebungskonfiguration hinzugefügt"
description: "Versionshinweise zu v2.2.0-beta.5"
---

### 🚀 Verbesserungen

* **[cli]** Schemaversionseinträge für die Umgebungskonfiguration hinzugefügt. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) von @chenos
* **[Dateimanager]** Verbesserte PDF-Vorschauen: PDF-Dateien von fremden Ursprüngen verwenden jetzt die native Browser-Vorschau, während PDF-Dateien vom gleichen Ursprung weiterhin mit PDF.js gerendert werden. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) von @mytharcher

### 🐛 Fehlerbehebungen

* **[client-v2]**
  * Behoben: Ereignisflusseinstellungen konnten nach der Umwandlung eines Blocks in eine Vorlage nicht mehr geändert werden. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) von @gchust
  * Behoben: Die übersetzten Texte wurden in den Dropdown-Optionen von Kontrollkästchen in v2-Filterformularen nicht angezeigt. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) von @katherinehhh
  * Behoben: Falsche Anzeige und Formateinstellungen, wenn das Titelfeld eines v2-Tabellenbeziehungsfelds ein Zeit-, Datums- oder Datetime-Feld verwendete. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) von @katherinehhh
* **[Flow-Engine]** Behoben: Falsche Daten in aktuellen Datensatzformularen und Detaildaten innerhalb von Popups während der KI-Erstellung. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) von @gchust
* **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behoben: Die Workflow-Trigger-Schaltflächen im Aktionspanel v2 zeigten weiterhin Erfolg an und sendeten Anfragen, wenn kein Workflow gebunden war. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) von @mytharcher
* **[KI-Mitarbeiter]** Behoben: KI-Mitarbeiter konnten Untertabellendaten nicht korrekt ausfüllen. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) von @gchust
