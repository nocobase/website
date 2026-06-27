---
title: "NocoBase v2.1.0-beta.36: Theme-Editor jetzt in der v2-Oberfläche verfügbar"
description: "Versionshinweise zu v2.1.0-beta.36"
---

### 🎉 Neue Funktionen

- **[cli]** Backup-Erstellungs- und Wiederherstellungsbefehle hinzugefügt ([#9541](https://github.com/nocobase/nocobase/pull/9541)) von @chenos
- **[Backup-Manager]** Open-Source-Backup-Manager-Plugin ([#9550](https://github.com/nocobase/nocobase/pull/9550)) von @chenos
- **[Theme-Editor]** Der Theme-Editor ist jetzt in der v2-Oberfläche verfügbar ([#9530](https://github.com/nocobase/nocobase/pull/9530)) von @zhangzhonghe
- **[Zwei-Faktor-Authentifizierung (2FA)]** TOTP und Zwei-Faktor-Authentifizierung können jetzt über den v2-Client gebunden, verifiziert und konfiguriert werden. von @Molunerfinn

### 🚀 Verbesserungen

- **[Client]** Optimierung der Anzeigeeinstellungen für Aktionsschaltflächen ([#9510](https://github.com/nocobase/nocobase/pull/9510)) von @katherinehhh
- **[Flow-Engine]** V2-Feldkonfigurationsmenüs unterstützen jetzt die Feldsuche ([#9489](https://github.com/nocobase/nocobase/pull/9489)) von @zhangzhonghe
- **[cli]** Verbesserter Authentifizierungsablauf für Umgebungsvariablen ([#9546](https://github.com/nocobase/nocobase/pull/9546)) von @chenos
- **[undefined]**

  - Abhängigkeitssicherheitsprüfung für Pull-Requests hinzugefügt ([#9523](https://github.com/nocobase/nocobase/pull/9523)) von @zhangzhonghe
- **[Verifizierung]** V2-Client zum Verifizierungs-Plugin hinzugefügt (Admin-Einstellungsseite, Benutzerzentrum-Eintrag, SMS-OTP-Formulare). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) von @Molunerfinn
- **[Authentifizierung]** Benutzerdefinierte Markeneinstellungen funktionieren jetzt korrekt im v2-Client ([#9543](https://github.com/nocobase/nocobase/pull/9543)) von @zhangzhonghe
- **[Block: Karte]** V2-Client-Unterstützung für das Karten-Plugin hinzugefügt. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) von @jiannx
- **[Benutzerdefinierte Marke]** Benutzerdefinierte Markeneinstellungen sind jetzt im v2-Client verfügbar von @zhangzhonghe
- **[KI: Wissensdatenbank]** Vektorspeicheränderung für KI-Wissensdatenbanken aktiviert von @cgyrock
- **[Workflow: Genehmigung]** `async`-Flag für Genehmigungsanweisung hinzugefügt, um sich an die neue Knotenerstellungs-API im Workflow-Canvas anzupassen von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem behoben, bei dem ausgewählte Werte nicht gelöscht wurden, wenn sich abhängige Assoziationsfelder in der Datenbereichsverknüpfung ändern ([#9551](https://github.com/nocobase/nocobase/pull/9551)) von @katherinehhh
  - Fehler beim Laden im Entwicklermodus für integrierte Speicher-Plugins behoben, die von benannten Exporten lokaler Quell-Plugins abhängen. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) von @Molunerfinn
  - Falscher JS-Feldmenüstatus in Unterformularen behoben. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) von @gchust
  - Problem behoben, bei dem verkleinerte v2-Blöcke nach Verlassen des Bearbeitungsmodus wieder volle Breite einnahmen ([#9529](https://github.com/nocobase/nocobase/pull/9529)) von @zhangzhonghe
- **[Client-v2]** Inkonsistente dnd-kit-Abhängigkeitsregistrierung behoben. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) von @jiannx
- **[Flow-Engine]** Problem mit Mehrfachauswahl für Felder externer Datenquellen im v2-Formular behoben ([#9542](https://github.com/nocobase/nocobase/pull/9542)) von @katherinehhh
- **[Block: iframe]** Problem behoben, bei dem der iframe-Inhalt die konfigurierte Blockhöhe nicht ausfüllte ([#9540](https://github.com/nocobase/nocobase/pull/9540)) von @katherinehhh
- **[KI-Mitarbeiter]**

  - Fehler behoben, wenn ein KI-Mitarbeiter auf eine schreibgeschützte Wissensdatenbank zugreift ([#9539](https://github.com/nocobase/nocobase/pull/9539)) von @cgyrock
  - Problem behoben, bei dem KI-Tool-Aufrufkarten nicht sofort erschienen, wenn gestreamte Tool-Ereignisse aufgeteilt wurden ([#9534](https://github.com/nocobase/nocobase/pull/9534)) von @2013xile
  - Fehler behoben, wenn ein KI-Mitarbeiter auf eine schreibgeschützte Wissensdatenbank zugreift ([#9538](https://github.com/nocobase/nocobase/pull/9538)) von @cgyrock
- **[Aktion: Datensätze exportieren]** Verbesserte Feldkonfigurationsleistung bei vielen Assoziationsfeldern ([#9524](https://github.com/nocobase/nocobase/pull/9524)) von @katherinehhh
- **[Aktion: Stapelaktualisierung]** Problem behoben, bei dem der Ladestatus der Stapelaktualisierungsaktion nach einem Aktualisierungsfehler zurückgesetzt wurde ([#9509](https://github.com/nocobase/nocobase/pull/9509)) von @katherinehhh
- **[Workflow]** Ladestatus für manuelle Workflow-Ausführung hinzugefügt. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) von @mytharcher
- **[Lokalisierung]** Korrigierte integrierte Lokalisierungsreferenzübersetzungen für KI-Übersetzungsaufgaben ([#9531](https://github.com/nocobase/nocobase/pull/9531)) von @2013xile
- **[Migrations-Manager]** Fehler bei der Erstellung von Migrationsdateien bei Verwendung von OceanBase behoben von @2013xile
- **[Dateispeicher: S3(Pro)]** S3 Pro-Endpunktbehandlung korrigiert, sodass Server-Uploads und URL-Vorschauen den Bucket-Host nicht duplizieren. von @mytharcher
