---
title: "NocoBase v2.1.0-alpha.40: Backup-Erstellungs- und Wiederherstellungsbefehle hinzugefügt"
description: "Versionshinweise zu v2.1.0-alpha.40"
---

### 🎉 Neue Funktionen

- **[cli]** Backup-Erstellungs- und Wiederherstellungsbefehle hinzugefügt ([#9541](https://github.com/nocobase/nocobase/pull/9541)) von @chenos

- **[Backup-Manager]** Open-Source-Backup-Manager-Plugin ([#9550](https://github.com/nocobase/nocobase/pull/9550)) von @chenos

- **[Theme-Editor]** Der Theme-Editor ist jetzt in der v2-Oberfläche verfügbar ([#9530](https://github.com/nocobase/nocobase/pull/9530)) von @zhangzhonghe

- **[Zwei-Faktor-Authentifizierung (2FA)]** TOTP und Zwei-Faktor-Authentifizierung können jetzt über den v2-Client gebunden, verifiziert und konfiguriert werden. von @Molunerfinn

### 🚀 Verbesserungen

- **[cli]** Verbesserter Authentifizierungsablauf für Umgebungen ([#9546](https://github.com/nocobase/nocobase/pull/9546)) von @chenos

- **[Flow-Engine]** V2-Feldkonfigurationsmenüs unterstützen jetzt die Feldsuche ([#9489](https://github.com/nocobase/nocobase/pull/9489)) von @zhangzhonghe

- **[client]** Optimierte Anzeigeeinstellungen für Aktionsschaltflächen ([#9510](https://github.com/nocobase/nocobase/pull/9510)) von @katherinehhh

- **[undefined]**
  - Sicherheitsüberprüfung von Abhängigkeiten für Pull-Requests hinzugefügt ([#9523](https://github.com/nocobase/nocobase/pull/9523)) von @zhangzhonghe

  - Sicherheitsüberprüfung von Abhängigkeiten für Pull-Requests hinzugefügt von @zhangzhonghe

  - Sicherheitsüberprüfung von Abhängigkeiten für Pull-Requests hinzugefügt von @zhangzhonghe

- **[Verifizierung]** V2-Client zum Verifizierungs-Plugin hinzugefügt (Admin-Einstellungsseite, Benutzercenter-Einstieg, SMS-OTP-Formulare). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) von @Molunerfinn

- **[Authentifizierung]** Benutzerdefinierte Brand-Einstellungen funktionieren jetzt korrekt im v2-Client ([#9543](https://github.com/nocobase/nocobase/pull/9543)) von @zhangzhonghe

- **[Block: Karte]** V2-Client-Unterstützung für das Karten-Plugin hinzugefügt. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) von @jiannx

- **[Benutzerdefinierte Marke]** Benutzerdefinierte Brand-Einstellungen sind jetzt im v2-Client verfügbar von @zhangzhonghe

- **[KI: Wissensdatenbank]** Vektorspeicheränderung für KI-Wissensdatenbanken aktiviert von @cgyrock

- **[Workflow: Genehmigung]** `async`-Flag für Genehmigungsanweisung hinzugefügt, um sich an die neue API zum Erstellen von Knoten in der Workflow-Leinwand anzupassen von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**
  - Behobener Entwicklungsmodus-Ladevorgang für integrierte Speicher-Plugins, die von benannten Exporten lokaler Quell-Plugins abhängen. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) von @Molunerfinn

  - Behebt das Problem, dass verkleinerte v2-Blöcke nach dem Verlassen des Bearbeitungsmodus wieder volle Breite einnehmen ([#9529](https://github.com/nocobase/nocobase/pull/9529)) von @zhangzhonghe

  - Behebt das Löschen ausgewählter Werte, wenn abhängige Assoziationsfelder in der Datenbereichsverknüpfung geändert werden ([#9551](https://github.com/nocobase/nocobase/pull/9551)) von @katherinehhh

  - Behobener falscher JS-Feldmenüstatus in Unterformularen. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) von @gchust

- **[client-v2]** Behobene inkonsistente dnd-kit-Abhängigkeitsregistrierung. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) von @jiannx

- **[Flow-Engine]** Behebt Problem mit Mehrfachauswahl für Felder externer Datenquellen im v2-Formular ([#9542](https://github.com/nocobase/nocobase/pull/9542)) von @katherinehhh

- **[Block: iframe]** Behebt, dass der iframe-Inhalt nicht die konfigurierte Blockhöhe ausfüllt ([#9540](https://github.com/nocobase/nocobase/pull/9540)) von @katherinehhh

- **[Aktion: Datensätze exportieren]** Verbesserte Feldkonfigurationsleistung bei vielen Assoziationsfeldern ([#9524](https://github.com/nocobase/nocobase/pull/9524)) von @katherinehhh

- **[KI-Mitarbeiter]**
  - Fehler behoben, wenn KI-Mitarbeiter auf eine schreibgeschützte Wissensdatenbank zugreift ([#9539](https://github.com/nocobase/nocobase/pull/9539)) von @cgyrock

  - Fehler behoben, wenn KI-Mitarbeiter auf eine schreibgeschützte Wissensdatenbank zugreift ([#9538](https://github.com/nocobase/nocobase/pull/9538)) von @cgyrock

  - Behoben, dass KI-Tool-Aufrufkarten nicht sofort angezeigt werden, wenn gestreamte Tool-Ereignisse aufgeteilt werden ([#9534](https://github.com/nocobase/nocobase/pull/9534)) von @2013xile

- **[Lokalisierung]** Behobene integrierte Lokalisierungs-Referenzübersetzungen für KI-Übersetzungsaufgaben ([#9531](https://github.com/nocobase/nocobase/pull/9531)) von @2013xile

- **[Aktion: Stapelaktualisierung]** Behebt, dass der Ladezustand der Stapelaktualisierungsaktion nach einem Aktualisierungsfehler zurückgesetzt wird ([#9509](https://github.com/nocobase/nocobase/pull/9509)) von @katherinehhh

- **[Workflow]** Ladezustand für manuelle Workflow-Ausführung hinzugefügt. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) von @mytharcher

- **[Migrations-Manager]** Behobene Fehler bei der Erstellung von Migrationsdateien bei Verwendung von OceanBase von @2013xile

- **[Dateispeicher: S3(Pro)]** S3 Pro-Endpunktbehandlung korrigiert, sodass Server-Uploads und URL-Vorschauen den Bucket-Host nicht duplizieren. von @mytharcher

- **[Workflow: Genehmigung]** Behobene doppelte Genehmigungsdatensatzindizes, wenn Delegierungen gleichzeitig für denselben Genehmigungsauftrag auftreten. von @mytharcher
