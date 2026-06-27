---
title: "NocoBase v1.6.0-alpha.29: Unterstützung der Berechtigungskonfiguration für Aktionen"
description: "Versionshinweise zu v1.6.0-alpha.29"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Berechtigungskonfiguration bei Aktionen ([#6254](https://github.com/nocobase/nocobase/pull/6254)) von @katherinehhh

- **[Block: Vorlage]** Plugin `Block: Vorlage` hinzugefügt, das Vorlagenunterstützung für Blöcke auf Basis eines Vererbungsmechanismus bietet. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) von @gchust

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Workflow-Aktionstrigger unterstützt Zugriffskontrolle von @katherinehhh

### 🚀 Verbesserungen

- **[Client]**
  - Upgrade der React-Typdefinitionen ([#6278](https://github.com/nocobase/nocobase/pull/6278)) von @gchust

  - Erweiterung und Verbesserung des persönlichen Benutzerzentrums ([#6213](https://github.com/nocobase/nocobase/pull/6213)) von @katherinehhh

- **[Dateimanager]**
  - URL-Länge auf 1024 erhöht ([#6275](https://github.com/nocobase/nocobase/pull/6275)) von @mytharcher

  - Backend-Code zum Generieren von Dateivorschau-URLs hinzugefügt ([#6281](https://github.com/nocobase/nocobase/pull/6281)) von @jiannx

  - Dateinamen beim Hochladen ändern sich von zufällig zum ursprünglichen Namen mit einem zufälligen Suffix. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) von @chenos

  - Backend-Code zum Generieren von Dateivorschau-URLs hinzugefügt ([#6223](https://github.com/nocobase/nocobase/pull/6223)) von @jiannx

  - Speichertyp-API geändert und Plugin-API hinzugefügt ([#6246](https://github.com/nocobase/nocobase/pull/6246)) von @mytharcher

  - Speichertyp-API geändert und Plugin-API hinzugefügt ([#6246](https://github.com/nocobase/nocobase/pull/6246)) von @mytharcher

- **[Block: Aktionspanel]** Optimierung der mobilen Stile ([#6270](https://github.com/nocobase/nocobase/pull/6270)) von @zhangzhonghe

- **[Workflow]** Knoten-ID in der Knotenkarte der Workflow-Leinwand ausgeblendet ([#6251](https://github.com/nocobase/nocobase/pull/6251)) von @mytharcher

- **[Dateispeicher: S3(Pro)]**
  - Speicher-API basierend auf dem Haupt-Repository angepasst von @mytharcher

  - Unterstützung für die Option `thumbnailRule` Konfiguration von @jiannx

- **[Backup-Manager]** Erlaubt das Wiederherstellen eines Backups in einer Anwendung, selbst wenn einige Plugins fehlen von @gchust

### 🐛 Fehlerbehebungen

- **[Devtools]** Stellt sicher, dass der `X-Forwarded-For`-Header nur gesetzt wird, wenn `req.ip` nicht `undefined` ist. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) von @sheldon66

- **[Client]**
  - Falsche Position nach dem Ziehen des Menüs ([#6315](https://github.com/nocobase/nocobase/pull/6315)) von @zhangzhonghe

  - Fehler beim Erstellen eines Kommentarblocks ohne Kommentarsammlung ([#6309](https://github.com/nocobase/nocobase/pull/6309)) von @katherinehhh

  - Fehler beim Klicken auf einen Baumblock-Knoten ([#6314](https://github.com/nocobase/nocobase/pull/6314)) von @zhangzhonghe

  - Nach dem Klicken auf das linke Menü wird die Unterseite ungewöhnlich geschlossen ([#6305](https://github.com/nocobase/nocobase/pull/6305)) von @zhangzhonghe

  - Feldwert nicht löschen, wenn der Ausdruckswert leer ist ([#6300](https://github.com/nocobase/nocobase/pull/6300)) von @zhangzhonghe

  - Rich-Text-Feldkomponente kann nicht vollständig geleert werden ([#6287](https://github.com/nocobase/nocobase/pull/6287)) von @katherinehhh

  - Seite kann nicht in eine Gruppe verschoben werden ([#6289](https://github.com/nocobase/nocobase/pull/6289)) von @zhangzhonghe

  - Auth-Fehler für `CurrentUserProvider` überspringen. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) von @sheldon66

  - Fehler behoben, bei dem hochgeladene Dateien einzeln fehlten ([#6260](https://github.com/nocobase/nocobase/pull/6260)) von @mytharcher

  - HTML-Tag-Zeichen im Eingabefeld des Mail-Kanal-Konfigurationsformulars behoben. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) von @sheldon66

  - Fehler behoben, bei dem Dateien nach dem Hochladen fehlten ([#6247](https://github.com/nocobase/nocobase/pull/6247)) von @mytharcher

  - Formatkonflikt des Auswahlfelds im Filterformularfeld ([#6234](https://github.com/nocobase/nocobase/pull/6234)) von @katherinehhh

  - `<Variable.TextArea />`-Komponente im deaktivierten Modus korrekt anzeigen ([#6197](https://github.com/nocobase/nocobase/pull/6197)) von @mytharcher

- **[create-nocobase-app]** Fehler im Web-Client nach Ausführung von `create-nocobase-app` gefolgt von `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) von @gchust

- **[Auth]** Benutzer-Auth-Prüfung überspringen, wenn das Token ein API-Schlüssel ist ([#6291](https://github.com/nocobase/nocobase/pull/6291)) von @sheldon66

- **[CLI]** Verbesserung der internen Logik des `nocobase upgrade`-Befehls ([#6280](https://github.com/nocobase/nocobase/pull/6280)) von @chenos

- **[Dateimanager]**
  - Migration für vererbte Sammlungen behoben ([#6310](https://github.com/nocobase/nocobase/pull/6310)) von @mytharcher

  - Migration behoben und Testfälle hinzugefügt ([#6288](https://github.com/nocobase/nocobase/pull/6288)) von @mytharcher

  - Migration behoben und Testfälle hinzugefügt ([#6288](https://github.com/nocobase/nocobase/pull/6288)) von @mytharcher

  - Spaltentyp `path` der Dateisammlung behoben ([#6294](https://github.com/nocobase/nocobase/pull/6294)) von @mytharcher

  - AWS SDK-Version aktualisiert, um MinIO-Upload-Fehler zu beheben ([#6253](https://github.com/nocobase/nocobase/pull/6253)) von @mytharcher

- **[Block: Vorlage]** Anmeldung beim Zugriff auf öffentliche Formulare erforderlich ([#6258](https://github.com/nocobase/nocobase/pull/6258)) von @gchust

- **[Zugriffskontrolle]** Falsche Datensätze bei Verwendung von Viele-zu-Viele-Feldern als Datenbereich in Sammlungsberechtigungen ([#6304](https://github.com/nocobase/nocobase/pull/6304)) von @2013xile

- **[Block: Kanban]** Falsche Datenfilterung im Popup-Kanban-Block bei Verwendung von Popup-Datensatzvariablen ([#6290](https://github.com/nocobase/nocobase/pull/6290)) von @katherinehhh

- **[Sammlungsfeld: Sequenz]** Sequenzfeld im schreibgeschützten Modus nicht deaktiviert ([#6274](https://github.com/nocobase/nocobase/pull/6274)) von @mytharcher

- **[Workflow: Testkit]** E2E-Testfälle basierend auf neuen Funktionen behoben ([#6296](https://github.com/nocobase/nocobase/pull/6296)) von @mytharcher

- **[Öffentliche Formulare]** Auth-Prüfung im öffentlichen Formular überspringen ([#6284](https://github.com/nocobase/nocobase/pull/6284)) von @chenos

- **[Authentifizierung]** Überflüssigen `NavigateIfNotSignIn`-Wrapper aus `AdminProvider` entfernt. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) von @sheldon66

- **[Workflow]**
  - Stildetails in der Workflow-Leinwand behoben ([#6240](https://github.com/nocobase/nocobase/pull/6240)) von @mytharcher

  - Unterstützung zum Auslösen des Workflows bei Passwortänderung ([#6248](https://github.com/nocobase/nocobase/pull/6248)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]**
  - Build-Fehler behoben von @mytharcher

  - E2E-Testfälle behoben von @mytharcher

  - Workflow-Trigger-Initialisierer behoben von @mytharcher

  - Build-Fehler behoben von @mytharcher

- **[Workflow: Voraktionsereignis]** Fehler behoben, bei dem die Fehlermeldung vom Antwortnachrichtenknoten nicht angezeigt wurde von @mytharcher

- **[Workflow: JavaScript]** Unterstützung zum Anfordern von NocoBase-Modulen von @mytharcher

- **[E-Mail-Manager]** Öffentliche `mailmessage`-Sammlung und Datenverlust im Modal behoben von @jiannx

- **[Dateispeicher: S3(Pro)]**
  - AWS SDK-Version aktualisiert, um MinIO-Upload-Fehler zu beheben. von @mytharcher

  - Standardwert von `forcePathStyleForAccess` auf `virtual` gesetzt von @jiannx

- **[Block: Mehrschritt-Formular]** Sortierfehler der Elemente nach dem Ziehen von @jiannx

- **[Block: Baum]** Fehler beim Klicken auf einen Baumblock-Knoten von @zhangzhonghe

- **[Backup-Manager]** Löschsymbol des Dialogs "Wiederherstellen aus lokal" funktioniert nicht von @gchust

- **[Workflow: Genehmigung]**
  - Migration aufgrund der Versionsnummer nicht ausgeführt von @mytharcher

  - E2E-Testfälle basierend auf neuen Funktionen behoben von @mytharcher
