---
title: "NocoBase v2.1.0-alpha.32: Option zur Begrenzung des Datumsbereichs für Datumsfelder in v2-Formularen hinzugefügt"
description: "Versionshinweise zu v2.1.0-alpha.32"
---

### 🎉 Neue Funktionen

- **[client]** Option zur Begrenzung des Datumsbereichs für Datumsfelder in v2-Formularen hinzugefügt ([#9400](https://github.com/nocobase/nocobase/pull/9400)) von @katherinehhh

- **[flow-engine]** Migration von `plugin-environment-variables` zu client-v2 mit einer React-basierten Einstellungsseite und einer global registrierten `$env`-Laufzeitvariable; Hinzufügen eines client-v2-Eintrags zu `plugin-file-manager` mit einer React-basierten Speicherkonfigurationsseite und FlowModel-basiertem Upload-Feld, Upload-Aktion und Vorschau. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) von @Molunerfinn

### 🚀 Verbesserungen

- **[undefined]** Unterstützung für sitzungsbezogene aktuelle Umgebung in der nb-CLI ([#9415](https://github.com/nocobase/nocobase/pull/9415)) von @chenos

### 🐛 Fehlerbehebungen

- **[client]**
  - Ein Problem behoben, bei dem das Popup für Standardwerte von Assoziationsfeldern im Erstellungsformular falsch angezeigt wurde. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) von @gchust

  - Ein Problem behoben, bei dem JS-Code nach dem Setzen eines JS-Feldes auf schreibgeschützt nicht mehr bearbeitet werden konnte. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) von @gchust

  - Problem behoben, bei dem v2-Seitenreiter nach dem Speichern von Einstellungen nicht sofort synchronisiert wurden ([#9396](https://github.com/nocobase/nocobase/pull/9396)) von @zhangzhonghe

  - Ein Problem behoben, bei dem Feldzuweisungen in Untertabellen in Feldverknüpfungsregeln nicht wirksam wurden. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) von @gchust

- **[Sammlungsfeld: Markdown(Vditor)]** Problem behoben, bei dem der Tooltip des Markdown-Feldes im horizontalen Formularlayout versteckt war ([#9420](https://github.com/nocobase/nocobase/pull/9420)) von @katherinehhh

- **[WEB-Client]** Filterung des Routentyps bei Verwendung übersetzter Bezeichnungen korrigiert ([#9425](https://github.com/nocobase/nocobase/pull/9425)) von @zhangzhonghe

- **[Mobil (veraltet)]** Problem behoben, bei dem mobile Nachrichten-Popups nicht geschlossen oder gescrollt werden konnten ([#9424](https://github.com/nocobase/nocobase/pull/9424)) von @zhangzhonghe

- **[Workflow: Genehmigung]** Problem behoben, bei dem das JS-Feld in den Genehmigungsprozess-Einstellungen erschien von @zhangzhonghe
