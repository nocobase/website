---
title: "NocoBase v1.7.0-alpha.4: Unterstützung langer Textfelder als Titelfelder für Assoziationsfelder"
description: "Versionshinweise zu v1.7.0-alpha.4"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Unterstützung von Langtextfeldern als Titelfelder für Assoziationsfelder ([#6495](https://github.com/nocobase/nocobase/pull/6495)) von @katherinehhh

  - Unterstützung von Feld-Stileinstellungen für Schriftgröße, Schriftstärke und Schriftart ([#6489](https://github.com/nocobase/nocobase/pull/6489)) von @katherinehhh

- **[Variablen und Geheimnisse]** Unterstützung von Umgebungsvariablen in Link-Button-URLs ([#6494](https://github.com/nocobase/nocobase/pull/6494)) von @katherinehhh

- **[Workflow: Aggregationsknoten]** Unterstützung zur Konfiguration der Genauigkeit für Aggregationsergebnisse ([#6491](https://github.com/nocobase/nocobase/pull/6491)) von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Unterstützung von unscharfer Suche für im Filter-Button ausgewählte Felder ([#6496](https://github.com/nocobase/nocobase/pull/6496)) von @katherinehhh

- **[Benachrichtigung: E-Mail]** Beschreibung der Sicherheitsfeld-Konfiguration hinzugefügt. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) von @sheldon66

- **[Workflow: Mailer-Knoten]** Beschreibung der Sicherheitsfeld-Konfiguration hinzugefügt. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) von @sheldon66

- **[Kalender]** Kalender-Plugin mit optionalen Einstellungen zum Aktivieren oder Deaktivieren der schnellen Ereigniserstellung ([#6391](https://github.com/nocobase/nocobase/pull/6391)) von @Cyx649312038

- **[WEB-Client]** Sekundäre Bestätigungsaufforderung für "Cache leeren" hinzugefügt ([#6505](https://github.com/nocobase/nocobase/pull/6505)) von @katherinehhh

- **[E-Mail-Manager]** Unterstützung für erneute Autorisierung & automatische Auswahl des Kontos beim Senden einer E-Mail von @jiannx

### 🐛 Fehlerbehebungen

- **[Client]**
  - Transparenz von Aktionsschaltflächen verursacht Anzeigeprobleme bei Einstellungen beim Hovern ([#6529](https://github.com/nocobase/nocobase/pull/6529)) von @katherinehhh

  - Fehler bei der Übermittlung von Zeitfeldern im chinesischen Gebietsschema (ungültige Eingabesyntax für Typ time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) von @katherinehhh

  - Die Höhe der Untertabelle im Formular wird zusammen mit der Formularhöhe festgelegt ([#6518](https://github.com/nocobase/nocobase/pull/6518)) von @katherinehhh

  - Standardmäßig ausgeblendetes Verknüpfungsregelfeld mit beibehaltenem Wert funktioniert nicht ([#6503](https://github.com/nocobase/nocobase/pull/6503)) von @katherinehhh

  - Schaltfläche "Untergeordnetes Element hinzufügen" zeigt im Nur-Symbol-Modus nicht an ([#6504](https://github.com/nocobase/nocobase/pull/6504)) von @katherinehhh

- **[Server]** Der Upgrade-Befehl kann Workflow-Fehler verursachen ([#6524](https://github.com/nocobase/nocobase/pull/6524)) von @gchust

- **[Utils]** Bekannter Fehler 'Desktop-Responsive' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) von @zhangzhonghe

- **[Evaluatoren]** Dezimalstellen auf 9 zurückgesetzt ([#6492](https://github.com/nocobase/nocobase/pull/6492)) von @mytharcher

- **[Authentifizierung]**
  - Trimmen der Authentifikator-Optionen ([#6527](https://github.com/nocobase/nocobase/pull/6527)) von @2013xile

  - X-Authenticator fehlt ([#6526](https://github.com/nocobase/nocobase/pull/6526)) von @chenos

- **[Block: Karte]**
  - Problem mit der Schlüsselverwaltung des Kartenblocks, das aufgrund unsichtbarer Zeichen zu Anfragefehlern führt ([#6521](https://github.com/nocobase/nocobase/pull/6521)) von @katherinehhh

  - Geheimschlüsselfelder lösen keine Validierung in der Kartenverwaltung aus ([#6509](https://github.com/nocobase/nocobase/pull/6509)) von @katherinehhh

- **[Dateimanager]**
  - Zugriff auf in COS gespeicherte Dateien nicht möglich ([#6512](https://github.com/nocobase/nocobase/pull/6512)) von @chenos

  - URL kodieren ([#6497](https://github.com/nocobase/nocobase/pull/6497)) von @chenos

- **[WEB-Client]** Der Pfad in der Routenverwaltungstabelle unterscheidet sich vom tatsächlichen Pfad ([#6483](https://github.com/nocobase/nocobase/pull/6483)) von @zhangzhonghe

- **[Block: Aktionspanel]** Layoutproblem im mobilen Aktionspanel nach dem Ausblenden von Schaltflächen aufgrund von Berechtigungssteuerung ([#6502](https://github.com/nocobase/nocobase/pull/6502)) von @katherinehhh

- **[Datenquelle: Haupt]** MySQL-Ansicht kann nicht erstellt werden. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) von @aaaaaajie

- **[Workflow]** Korrektur der Anzahl veralteter Aufgaben nach dem Löschen des Workflows ([#6493](https://github.com/nocobase/nocobase/pull/6493)) von @mytharcher

- **[Aktion: Datensätze exportieren Pro]** Anhänge können nicht exportiert werden von @chenos

- **[Backup-Manager]**
  - Hochgeladene Dateien wurden beim Erstellen einer Unter-App aus einer Backup-Vorlage nicht wiederhergestellt von @gchust

  - Wiederherstellung kann zu Workflow-Ausführungsfehlern führen von @gchust

  - Fehler bei der MySQL-Datenbankwiederherstellung aufgrund von GTID-Set-Überlappung von @gchust

- **[WeCom]** Umgebungsvariablen und Geheimnisse beim Abrufen der Benachrichtigungskonfiguration auflösen. von @2013xile

- **[Workflow: Genehmigung]**
  - Fehler in der Prozesstabelle behoben, wenn ein Job gelöscht wurde von @mytharcher

  - Zurückgegebene Genehmigung als "zu erledigen" geändert von @mytharcher

  - Fehler beim Hinzufügen eines Abfrageknotenergebnisses behoben von @mytharcher

  - Fehlende Aktionsschaltfläche in der Prozesstabelle behoben von @mytharcher

  - Stilproblem mit dem Popup-Dialog "Neue anwenden" von @zhangzhonghe
