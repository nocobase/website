---
title: "NocoBase v1.8.0-beta.7: Unterstützung für das Kopieren von Textfeldinhalten mit einem Klick"
description: "Versionshinweise zu v1.8.0-beta.7"
---

### 🎉 Neue Funktionen

- **[Text kopieren]** Unterstützung für das Kopieren von Textfeldinhalten mit einem Klick ([#6954](https://github.com/nocobase/nocobase/pull/6954)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Server]** Kann Eigenschaften von undefined nicht lesen (Lesevorgang: 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) von @chenos

- **[Client]**
  - Der Auswahlfeld für Verknüpfungsfelder löscht nach dem Absenden nicht die ausgewählten Daten ([#7067](https://github.com/nocobase/nocobase/pull/7067)) von @katherinehhh

  - Nach dem Erstellen des inversen Beziehungsfelds war die Option "Inverses Beziehungsfeld in der Zieldatentabelle erstellen" in den Einstellungen des Verknüpfungsfelds nicht aktiviert. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) von @aaaaaajie

- **[Zugriffskontrolle]** Problem behoben, bei dem die App den Zugriff blockierte, wenn keine Standardrolle vorhanden war ([#7059](https://github.com/nocobase/nocobase/pull/7059)) von @aaaaaajie

- **[Workflow: Schleifenknoten]** Fehler behoben, bei dem der Schleifenzweig ausgeführt wurde, obwohl die Bedingung nicht erfüllt war ([#7063](https://github.com/nocobase/nocobase/pull/7063)) von @mytharcher

- **[Datenquellen-Manager]** Bereichsänderungen wirken sich jetzt sofort auf alle zugehörigen Rollen aus. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) von @aaaaaajie

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Fehler behoben, bei dem die Variable der Weiterleitungs-URL nicht analysiert wurde von @mytharcher

- **[Workflow: Genehmigung]**
  - Fehler beim Auslösen der Variable bei Filterung nach Typ behoben von @mytharcher

  - Fehler behoben, bei dem die Aufgabestatistiken nicht aktualisiert wurden, wenn die Ausführung abgebrochen wurde von @mytharcher
