---
title: "NocoBase v2.1.0-beta.29: Datumsbereichsbegrenzungsoption für Datumsfelder in v2-Formularen hinzugefügt"
description: "Versionshinweise zu v2.1.0-beta.29"
---

### 🎉 Neue Funktionen

- **[client]** Option zur Begrenzung des Datumsbereichs für Datumsfelder in v2-Formularen hinzugefügt ([#9400](https://github.com/nocobase/nocobase/pull/9400)) von @katherinehhh

- **[flow-engine]** Migration von `plugin-environment-variables` zu client-v2 mit einer React-basierten Einstellungsseite und einer global registrierten `$env`-Laufzeitvariable; Hinzufügen eines client-v2-Eintrags zu `plugin-file-manager` mit einer React-basierten Speicherkonfigurationsseite und FlowModel-basiertem Upload-Feld, Upload-Aktion und Vorschau. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[client]**
  - Ein Problem behoben, bei dem JS-Code nach dem Setzen eines JS-Feldes auf schreibgeschützt nicht mehr bearbeitet werden konnte. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) von @gchust

  - Problem behoben, bei dem v2-Seitenregisterkarten nach dem Speichern von Einstellungen nicht sofort synchronisiert wurden ([#9396](https://github.com/nocobase/nocobase/pull/9396)) von @zhangzhonghe

  - Ein Problem behoben, bei dem Feldzuweisungen in Untertabellen in Feldverknüpfungsregeln nicht wirksam wurden. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) von @gchust

  - Ein Problem behoben, bei dem das Popup für Standardwerte von Assoziationsfeldern im Erstellungsformular falsch angezeigt wurde. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) von @gchust

- **[Sammlungsfeld: Markdown(Vditor)]** Problem behoben, bei dem der Tooltip des Markdown-Feldes im horizontalen Formularlayout ausgeblendet wurde ([#9420](https://github.com/nocobase/nocobase/pull/9420)) von @katherinehhh

- **[Mobil (veraltet)]** Problem behoben, bei dem mobile Nachrichten-Popups nicht geschlossen oder gescrollt werden konnten ([#9424](https://github.com/nocobase/nocobase/pull/9424)) von @zhangzhonghe

- **[WEB-Client]** Problem bei der Routentyp-Filterung bei Verwendung übersetzter Bezeichnungen behoben ([#9425](https://github.com/nocobase/nocobase/pull/9425)) von @zhangzhonghe

- **[Workflow: Genehmigung]** Problem behoben, bei dem das JS-Feld in den Genehmigungsprozess-Einstellungen angezeigt wurde von @zhangzhonghe
