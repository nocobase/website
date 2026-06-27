---
title: "NocoBase v2.0.51: Korrektur des Verhaltens der Pflichtfeldvalidierung für Genehmigungsformulare"
description: "Versionshinweise zu v2.0.51"
---

### 🚀 Verbesserungen

- **[Workflow: Genehmigung]** Korrektur des Validierungsverhaltens für Pflichtfelder in Genehmigungsformularen von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ein Problem behoben, bei dem JS-Code nach dem Setzen eines JS-Feldes auf schreibgeschützt nicht mehr bearbeitet werden konnte. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) von @gchust

  - Ein Problem behoben, bei dem Feldzuweisungen in Untertabellen in Feldverknüpfungsregeln nicht wirksam wurden. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) von @gchust

  - Ein Problem behoben, bei dem die Tabs der v2-Seite nach dem Speichern der Einstellungen nicht sofort synchronisiert wurden ([#9396](https://github.com/nocobase/nocobase/pull/9396)) von @zhangzhonghe

  - Ein Problem behoben, bei dem das Popup für den Standardwert von Assoziationsfeldern im Erstellungsformular falsch angezeigt wurde. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) von @gchust

- **[Passwortrichtlinie]** Ein Problem behoben, bei dem dauerhaft gesperrte Benutzer sich nach einem Neustart des Dienstes anmelden konnten von @2013xile

- **[Aktion: Datensätze importieren Pro]** Ein Problem behoben, bei dem die Duplikatsprüfung für Datumsfelder immer fehlschlug von @mytharcher

- **[Workflow: Genehmigung]** Ein Problem behoben, bei dem der Auswahldialog für Datensätze in der Genehmigungsworkflow-Konfiguration verdeckt wurde von @zhangzhonghe
