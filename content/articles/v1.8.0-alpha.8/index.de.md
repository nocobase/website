---
title: "NocoBase v1.8.0-alpha.8: Unterstützung für das Kopieren von Textfeldinhalten mit einem Klick"
description: "Versionshinweise zu v1.8.0-alpha.8"
---

### 🎉 Neue Funktionen

- **[Text kopieren]** Unterstützung für das Ein-Klick-Kopieren von Textfeldinhalten ([#6954](https://github.com/nocobase/nocobase/pull/6954)) von @zhangzhonghe

- **[E-Mail-Manager]** Unterstützung zum Löschen von E-Mails von @jiannx

### 🚀 Verbesserungen

- **[Client]**
  - Optionen "leer" und "nicht leer" zu den Verknüpfungsregeln für Kontrollkästchenfelder hinzugefügt ([#7073](https://github.com/nocobase/nocobase/pull/7073)) von @katherinehhh

  - Die Breite des Logo-Containers passt sich dem Inhaltstyp an (feste 168px für Bilder, automatische Breite für Text) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) von @Cyx649312038

- **[Async-Aufgabenmanager]** Verbesserte Leistung der Aufgabenerstellung während des Exports ([#7078](https://github.com/nocobase/nocobase/pull/7078)) von @aaaaaajie

- **[Workflow: Genehmigung]** Option für zusätzliches Feld zur Liste der erneuten Zuweisungen hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Dezimalpunkt nach dem Wechsel des Betragskomponenten von Mask zu InputNumber verloren ([#7077](https://github.com/nocobase/nocobase/pull/7077)) von @katherinehhh

  - Falsche Darstellung von Markdown (Vditor) in Untertabellen ([#7074](https://github.com/nocobase/nocobase/pull/7074)) von @katherinehhh

  - Nach dem Erstellen des umgekehrten Beziehungsfeldes war die Option "Umgekehrtes Beziehungsfeld in der Zieldatentabelle erstellen" in den Einstellungen des Assoziationsfeldes nicht aktiviert. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) von @aaaaaajie

  - Der Assoziationsfeld-Auswähler löscht die ausgewählten Daten nach dem Absenden nicht ([#7067](https://github.com/nocobase/nocobase/pull/7067)) von @katherinehhh

- **[Server]** Eigenschaften von undefined können nicht gelesen werden (Lesen von 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) von @chenos

- **[Zugriffskontrolle]** Problem behoben, bei dem die App den Eintritt blockierte, wenn keine Standardrolle vorhanden war ([#7059](https://github.com/nocobase/nocobase/pull/7059)) von @aaaaaajie

- **[Datenquellen-Manager]** Bereichsänderungen wirken sich jetzt sofort auf alle zugehörigen Rollen aus. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) von @aaaaaajie

- **[Workflow: Schleifenknoten]** Problem behoben, bei dem der Schleifenzweig ausgeführt wurde, wenn die Bedingung nicht erfüllt war ([#7063](https://github.com/nocobase/nocobase/pull/7063)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem behoben, bei dem die Variable der Weiterleitungs-URL nicht geparst wurde von @mytharcher

- **[Workflow: Genehmigung]** Problem behoben, bei dem die Todo-Statistiken nicht aktualisiert wurden, wenn die Ausführung abgebrochen wurde von @mytharcher

- **[E-Mail-Manager]** E-Mail-Löschung fehlgeschlagen von @jiannx

- **[Backup-Manager]** Unbekannter Befehlsfehler beim Wiederherstellen von MySQL-Backups auf der Windows-Plattform von @gchust
