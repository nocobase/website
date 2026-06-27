---
title: "NocoBase v2.1.0-beta.48: V2-Client-Unterstützung für die Topbar-Aktion des asynchronen Aufgabenmanagers hinzugefügt"
description: "Versionshinweise zu v2.1.0-beta.48"
---

### 🎉 Neue Funktionen

- **[client-v2]** Unterstützung für Scan-Eingabe bei Textfeldern ([#9599](https://github.com/nocobase/nocobase/pull/9599)) von @katherinehhh
- **[Async-Task-Manager]** V2-Client-Unterstützung für die Topbar-Aktion des Async-Task-Managers hinzugefügt. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) von @jiannx
- **[Backup-Manager]** V2-Client-Laufzeitunterstützung für das Backup-Manager-Plugin hinzugefügt. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) von @katherinehhh
- **[Datenquelle: Externes NocoBase]** Ein Datenquellen-Plugin hinzugefügt: externes NocoBase von @2013xile

### 🚀 Verbesserungen

- **[client-v2]** Unterstützung zum Deaktivieren der Mehrfachauswahl in v2-Popup-Auswahl-Assoziationsfeldern hinzugefügt. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) von @katherinehhh
- **[Dateimanager]** Internen Upload-`subPath`-Support für den Dateimanager hinzugefügt. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) von @mytharcher
- **[Variablen und Geheimnisse]** Umgebungsvariablen (`$env`) können jetzt von Flow-Engine-basierten Variablenauswahlen in der v1-Laufzeit ausgewählt werden. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[Datenbank]** Behoben, dass Passwortfelder bei Massenaktualisierungen nicht gehasht wurden. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) von @mytharcher
- **[Client]** Behoben, dass Popup-Untertabellen-Zeilenaktionen das gesamte Untertabellenfeld ausblendeten, wenn die Aktion durch Verknüpfungsregeln ausgeblendet wurde ([#9717](https://github.com/nocobase/nocobase/pull/9717)) von @katherinehhh
- **[KI-Mitarbeiter]** KI-Mitarbeiter-Datenabfrage-Prompts verbessert, um die erforderliche Fähigkeit vor der Nutzung von Abfragewerkzeugen zu laden. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) von @cgyrock
- **[Datenquellen-Manager]** Behoben, dass beim erneuten Öffnen des v2-Datenquellen-Feldkonfigurations-Drawers nach Änderung des Titelfelds eine veraltete Titelfeldanzeige angezeigt wurde. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) von @katherinehhh
- **[Block: Karte]**

  - Behoben, dass Karten-Geometriefelder nach Aktivierung des Karten-Plugins im v2-Datenquellen-Manager-Menü „Feld hinzufügen“ fehlten. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) von @katherinehhh
  - Behoben, dass der DrawingManager im v1-Google-Maps-Block nicht verfügbar war ([#9735](https://github.com/nocobase/nocobase/pull/9735)) von @katherinehhh
- **[Kalender]** Behoben, dass in v2-Kalenderblock-Detail-Drawern keine Details- und Bearbeiten-Blöcke hinzugefügt werden konnten ([#9729](https://github.com/nocobase/nocobase/pull/9729)) von @jiannx
