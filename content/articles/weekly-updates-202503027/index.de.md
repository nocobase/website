---
title: "NocoBase wöchentliche Updates: Unterstützung für Benutzerrollen-Vereinigung"
description: "Die Updates dieser Woche umfassen: Unterstützung für Umgebungsvariablen in Link-Button-URLs, Aktivierung von Langtextfeldern als Titelfelder für Assoziationsfelder und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Protokolle zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es könnte einige bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.7](https://www.nocobase.com/en/blog/v1.6.7)

*Veröffentlichungsdatum: 2025-03-20*

#### 🚀 Verbesserungen

- **[Workflow: Mailer-Knoten]** Beschreibung der Secure-Feld-Konfiguration hinzugefügt. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) von @sheldon66
- **[Benachrichtigung: E-Mail]** Beschreibung der Secure-Feld-Konfiguration hinzugefügt. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) von @sheldon66
- **[Kalender]** Kalender-Plugin mit optionalen Einstellungen zum Aktivieren oder Deaktivieren der schnellen Ereigniserstellung ([#6391](https://github.com/nocobase/nocobase/pull/6391)) von @Cyx649312038

#### 🐛 Fehlerbehebungen

- **[Client]** Fehler bei der Übermittlung von Zeitfeldern im chinesischen Gebietsschema (ungültige Eingabesyntax für Typ time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) von @katherinehhh
- **[Dateimanager]** Zugriff auf in COS gespeicherte Dateien nicht möglich ([#6512](https://github.com/nocobase/nocobase/pull/6512)) von @chenos
- **[Block: Karte]** Geheimschlüsselfelder lösen keine Validierung in der Kartenverwaltung aus ([#6509](https://github.com/nocobase/nocobase/pull/6509)) von @katherinehhh
- **[WEB-Client]** Der Pfad in der Routenverwaltungstabelle weicht vom tatsächlichen Pfad ab ([#6483](https://github.com/nocobase/nocobase/pull/6483)) von @zhangzhonghe
- **[Aktion: Datensätze exportieren Pro]** Export von Anhängen nicht möglich von @chenos
- **[Workflow: Genehmigung]**

  - Fehler durch null-Benutzer behoben von @mytharcher
  - Fehler beim Hinzufügen eines Abfrageknotenergebnisses behoben von @mytharcher

### [v1.6.8](https://www.nocobase.com/en/blog/v1.6.8)

*Veröffentlichungsdatum: 2025-03-22*

#### 🐛 Fehlerbehebungen

- **[Server]** Der Upgrade-Befehl kann Workflow-Fehler verursachen ([#6524](https://github.com/nocobase/nocobase/pull/6524)) von @gchust
- **[Client]** Die Höhe der Untertabelle im Formular wird zusammen mit der Formularhöhe festgelegt ([#6518](https://github.com/nocobase/nocobase/pull/6518)) von @katherinehhh
- **[Authentifizierung]**

  - X-Authenticator fehlt ([#6526](https://github.com/nocobase/nocobase/pull/6526)) von @chenos
  - Authentifikator-Optionen kürzen ([#6527](https://github.com/nocobase/nocobase/pull/6527)) von @2013xile
- **[Block: Karte]** Problem mit der Schlüsselverwaltung des Kartenblocks, das aufgrund unsichtbarer Zeichen zu Anforderungsfehlern führt ([#6521](https://github.com/nocobase/nocobase/pull/6521)) von @katherinehhh
- **[Backup-Manager]** Wiederherstellung kann Workflow-Ausführungsfehler verursachen von @gchust
- **[WeCom]** Umgebungsvariablen und Geheimnisse beim Abrufen der Benachrichtigungskonfiguration auflösen. von @2013xile

### [v1.6.9](https://www.nocobase.com/en/blog/v1.6.9)

*Veröffentlichungsdatum: 2025-03-23*

#### 🐛 Fehlerbehebungen

- **[Client]** Transparenz des Aktionsbuttons verursacht Anzeigeprobleme der Einstellungen beim Hovern ([#6529](https://github.com/nocobase/nocobase/pull/6529)) von @katherinehhh

### [v1.6.10](https://www.nocobase.com/en/blog/v1.6.10)

*Veröffentlichungsdatum: 2025-03-25*

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Variable 'Aktueller Benutzer' beim Hinzufügen einer Linkseite nicht verwendbar ([#6536](https://github.com/nocobase/nocobase/pull/6536)) von @zhangzhonghe
  - Feldzuweisung mit 'Nullwert' für Felder unwirksam ([#6549](https://github.com/nocobase/nocobase/pull/6549)) von @katherinehhh
  - Fehler im Befehl `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) von @gchust
  - Option 'Mehrfachauswahl zulassen' aus Dropdown-Einzelfeldern in Filterformularen entfernt ([#6515](https://github.com/nocobase/nocobase/pull/6515)) von @zhangzhonghe
  - Datenbereichsverknüpfung von Beziehungsfeldern ist nicht wirksam ([#6530](https://github.com/nocobase/nocobase/pull/6530)) von @zhangzhonghe
- **[Sammlung: Baum]** Migrationsproblem für plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) von @2013xile
- **[Aktion: Benutzerdefinierte Anfrage]** Herunterladen von UTF-8-kodierten Dateien nicht möglich ([#6541](https://github.com/nocobase/nocobase/pull/6541)) von @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.7](https://www.nocobase.com/en/blog/v1.7.0-beta.7)

*Veröffentlichungsdatum: 2025-03-19*

#### 🚀 Verbesserungen

- **[Kalender]** Kalender-Plugin mit optionalen Einstellungen zum Aktivieren oder Deaktivieren der schnellen Ereigniserstellung ([#6391](https://github.com/nocobase/nocobase/pull/6391)) von @Cyx649312038

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Schaltfläche 'Unterelement hinzufügen' zeigt im Nur-Symbol-Modus nicht an ([#6504](https://github.com/nocobase/nocobase/pull/6504)) von @katherinehhh
  - Standardmäßig ausgeblendetes Feld der Verknüpfungsregel mit beibehaltenem Wert funktioniert nicht ([#6503](https://github.com/nocobase/nocobase/pull/6503)) von @katherinehhh
- **[Block: Aktionspanel]** Layoutproblem im mobilen Aktionspanel nach dem Ausblenden von Schaltflächen aufgrund von Berechtigungssteuerung ([#6502](https://github.com/nocobase/nocobase/pull/6502)) von @katherinehhh
- **[WEB-Client]** Der Pfad in der Routenverwaltungstabelle weicht vom tatsächlichen Pfad ab ([#6483](https://github.com/nocobase/nocobase/pull/6483)) von @zhangzhonghe

### [v1.7.0-beta.8](https://www.nocobase.com/en/blog/v1.7.0-beta.8)

*Veröffentlichungsdatum: 2025-03-23*

#### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Feld-Stil-Einstellungen für Schriftgröße, Schriftstärke und Schriftstil ([#6489](https://github.com/nocobase/nocobase/pull/6489)) von @katherinehhh
- **[Variablen und Geheimnisse]** Unterstützung von Umgebungsvariablen in Link-Button-URLs ([#6494](https://github.com/nocobase/nocobase/pull/6494)) von @katherinehhh

#### 🚀 Verbesserungen

- **[Client]** Unterstützung für unscharfe Suche bei in der Filtersschaltfläche ausgewählten Feldern ([#6496](https://github.com/nocobase/nocobase/pull/6496)) von @katherinehhh
- **[Workflow: Mailer-Knoten]** Beschreibung der Secure-Feld-Konfiguration hinzugefügt. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) von @sheldon66
- **[WEB-Client]** Sekundäre Bestätigungsaufforderung für 'Cache leeren' hinzugefügt ([#6505](https://github.com/nocobase/nocobase/pull/6505)) von @katherinehhh
- **[Benachrichtigung: E-Mail]** Beschreibung der Secure-Feld-Konfiguration hinzugefügt. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) von @sheldon66
- **[E-Mail-Manager]** Unterstützung für erneute Autorisierung und automatische Auswahl des Kontos beim Senden einer E-Mail von @jiannx

#### 🐛 Fehlerbehebungen

- **[Server]** Der Upgrade-Befehl kann Workflow-Fehler verursachen ([#6524](https://github.com/nocobase/nocobase/pull/6524)) von @gchust
- **[Client]**

  - Die Höhe der Untertabelle im Formular wird zusammen mit der Formularhöhe festgelegt ([#6518](https://github.com/nocobase/nocobase/pull/6518)) von @katherinehhh
  - Fehler bei der Übermittlung von Zeitfeldern im chinesischen Gebietsschema (ungültige Eingabesyntax für Typ time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) von @katherinehhh
  - Transparenz des Aktionsbuttons verursacht Anzeigeprobleme der Einstellungen beim Hovern ([#6529](https://github.com/nocobase/nocobase/pull/6529)) von @katherinehhh
- **[Authentifizierung]**

  - Authentifikator-Optionen kürzen ([#6527](https://github.com/nocobase/nocobase/pull/6527)) von @2013xile
  - X-Authenticator fehlt ([#6526](https://github.com/nocobase/nocobase/pull/6526)) von @chenos
- **[Block: Karte]**

  - Problem mit der Schlüsselverwaltung des Kartenblocks, das aufgrund unsichtbarer Zeichen zu Anforderungsfehlern führt ([#6521](https://github.com/nocobase/nocobase/pull/6521)) von @katherinehhh
  - Geheimschlüsselfelder lösen keine Validierung in der Kartenverwaltung aus ([#6509](https://github.com/nocobase/nocobase/pull/6509)) von @katherinehhh
- **[Dateimanager]** Zugriff auf in COS gespeicherte Dateien nicht möglich ([#6512](https://github.com/nocobase/nocobase/pull/6512)) von @chenos
- **[Aktion: Datensätze exportieren Pro]** Export von Anhängen nicht möglich von @chenos
- **[Backup-Manager]** Wiederherstellung kann Workflow-Ausführungsfehler verursachen von @gchust
- **[WeCom]** Umgebungsvariablen und Geheimnisse beim Abrufen der Benachrichtigungskonfiguration auflösen. von @2013xile
- **[Workflow: Genehmigung]**

  - Fehler in der Prozesstabelle behoben, wenn Job gelöscht wurde von @mytharcher
  - Fehler beim Hinzufügen eines Abfrageknotenergebnisses behoben von @mytharcher
  - Fehler durch null-Benutzer behoben von @mytharcher

### [v1.7.0-beta.9](https://www.nocobase.com/en/blog/v1.7.0-beta.9)

*Veröffentlichungsdatum: 2025-03-25*

#### 🎉 Neue Funktionen

- **[acl]** Unterstützung für Benutzerrollenvereinigung ([#6301](https://github.com/nocobase/nocobase/pull/6301)) von @aaaaaajie
- **[Client]**

  - Unterstützung für die Erweiterung vordefinierter Felder in Sammlungen ([#6183](https://github.com/nocobase/nocobase/pull/6183)) von @katherinehhh
  - Unterstützung für die Erweiterung von Frontend-Filteroperatoren ([#6085](https://github.com/nocobase/nocobase/pull/6085)) von @katherinehhh
- **[Verifizierung]** Unterstützung für die Bindung verschiedener Verifizierungstypen durch Benutzer, wie SMS- und TOTP-Authentifikatoren, sowie Identitätsverifizierung in erforderlichen Szenarien. Ermöglicht Entwicklung und Erweiterung von Verifizierungsmethoden. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) von @2013xile
  Referenz: [Verifizierung](https://docs.nocobase.com/handbook/verification)
- **[Kalender]** Unterstützung für die Erweiterung optionaler Felder für Kanban-, Kalender- und Formelfeld-Plugins ([#6076](https://github.com/nocobase/nocobase/pull/6076)) von @katherinehhh
- **[Block: Vorlage]** Plugin `Block: Vorlage` hinzugefügt, das Vorlagenunterstützung für Blöcke basierend auf einem Vererbungsmechanismus bietet. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) von @gchust
- **[plugin-demo-platform]** skipAuthCheck der Route "/new" auf true gesetzt. von @sheldon66
- **[Zwei-Faktor-Authentifizierung (2FA)]** Neue Plugins: Zwei-Faktor-Authentifizierung und Verifizierung: TOTP-Authentifikator von @2013xile
  Referenz: [Zwei-Faktor-Authentifizierung (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verifizierung: TOTP-Authentifikator](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Verbesserungen

- **[Client]**

  - skipAuthCheck zu router.add hinzugefügt, um die Weiterleitung zur Anmeldeseite auf öffentlichen Seiten zu verhindern. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) von @sheldon66
  - Upgrade der Ant-Design-bezogenen Abhängigkeiten auf 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) von @gchust
- **[utils]** Desktop-Seitenanpassung für mobile Geräte ([#6393](https://github.com/nocobase/nocobase/pull/6393)) von @zhangzhonghe
- **[Öffentliche Formulare]** Seitentitel des öffentlichen Formulars bei der Erstellung auf den konfigurierten Titel setzen ([#6538](https://github.com/nocobase/nocobase/pull/6538)) von @katherinehhh
- **[Dateimanager]**

  - Backend-Code zum Generieren der Dateivorschau-URL hinzugefügt ([#6223](https://github.com/nocobase/nocobase/pull/6223)) von @jiannx
  - Speichertyp-API geändert und Plugin-API hinzugefügt ([#6246](https://github.com/nocobase/nocobase/pull/6246)) von @mytharcher
- **[Block: Vorlage]** Unterstützung zum Speichern von Datenblöcken als Blockvorlage von der Seite ([#6348](https://github.com/nocobase/nocobase/pull/6348)) von @gchust
- **[Workflow]** Workflow-Bindungseinstellungen in das Plugin verschoben ([#6143](https://github.com/nocobase/nocobase/pull/6143)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Drag-and-Drop-Problem der Tabellenzeilenschaltfläche ([#6544](https://github.com/nocobase/nocobase/pull/6544)) von @katherinehhh
  - Variable 'Aktueller Benutzer' beim Hinzufügen einer Linkseite nicht verwendbar ([#6536](https://github.com/nocobase/nocobase/pull/6536)) von @zhangzhonghe
  - Datenbereichsverknüpfung von Beziehungsfeldern ist nicht wirksam ([#6530](https://github.com/nocobase/nocobase/pull/6530)) von @zhangzhonghe
  - Option 'Mehrfachauswahl zulassen' aus Dropdown-Einzelfeldern in Filterformularen entfernt ([#6515](https://github.com/nocobase/nocobase/pull/6515)) von @zhangzhonghe
  - Fehler im Befehl `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) von @gchust
  - Fehlende Felder in der Konfiguration der Verknüpfungsregel ([#6488](https://github.com/nocobase/nocobase/pull/6488)) von @katherinehhh
  - Inhalt wird in mobilen Browsern nicht vollständig angezeigt ([#6446](https://github.com/nocobase/nocobase/pull/6446)) von @zhangzhonghe
  - Bei Verwendung des Operators '$anyOf' ist die Verknüpfungsregel ungültig ([#6400](https://github.com/nocobase/nocobase/pull/6400)) von @zhangzhonghe
  - Falsche Formatierung des Zeitfelds im Filterformular ([#6374](https://github.com/nocobase/nocobase/pull/6374)) von @katherinehhh
  - Eingabestil für die Standardwerteinstellung des Formulars nicht korrekt ([#6490](https://github.com/nocobase/nocobase/pull/6490)) von @gchust
- **[utils]** Bekannter Fehler 'Desktop-Responsive' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) von @zhangzhonghe
- **[acl]** Problem behoben, dass Beziehungsfelder unter der Rollenvereinigung nicht angezeigt werden. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) von @aaaaaajie
- **[Sammlung: Baum]** Migrationsproblem für plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) von @2013xile
- **[Aktion: Benutzerdefinierte Anfrage]** Herunterladen von UTF-8-kodierten Dateien nicht möglich ([#6541](https://github.com/nocobase/nocobase/pull/6541)) von @2013xile
- **[Variablen und Geheimnisse]** Schaltflächen wurden im Drawer zum Erstellen neuer Variablen nicht angezeigt ([#6485](https://github.com/nocobase/nocobase/pull/6485)) von @gchust
- **[WEB-Client]** Alle Instanzen von ctx.state.currentRole (einzelne Rolle) durch ctx.state.currentRoles (unterstützt mehrere Rollen) ersetzt. ([#6427](https://github.com/nocobase/nocobase/pull/6427)) von @aaaaaajie
- **[Zugriffskontrolle]**

  - Fehler, wenn der Datenbereich auf eigene Daten gesetzt ist und der Tabelle ein Erstellerfeld fehlt. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) von @aaaaaajie
  - Problem behoben, dass das Wechseln der Rollen nicht wirksam wurde. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) von @aaaaaajie
- **[Block: Vorlage]**

  - Option 'Als Vorlage speichern' wurde im Seiten-Datenblock nicht angezeigt ([#6398](https://github.com/nocobase/nocobase/pull/6398)) von @gchust
  - Falsches Verhalten von 'Als Vorlage speichern' im mobilen Client ([#6420](https://github.com/nocobase/nocobase/pull/6420)) von @gchust
  - Anmeldung beim Zugriff auf öffentliches Formular erforderlich ([#6258](https://github.com/nocobase/nocobase/pull/6258)) von @gchust
- **[Auth: API-Schlüssel]** Entfernung der Rollenlistenvereinigung im API-Schlüssel-Plugin ([#6432](https://github.com/nocobase/nocobase/pull/6432)) von @aaaaaajie
- **[Block: Mehrschritt-Formular]** Die Schaltfläche 'Absenden' hat im Standard- und hervorgehobenen Zustand die gleiche Farbe von @jiannx
- **[Workflow: Genehmigung]** Stilproblem mit dem Popup-Dialog 'Neu beantragen' von @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.4](https://www.nocobase.com/en/blog/v1.7.0-alpha.4)

*Veröffentlichungsdatum: 2025-03-23*

#### 🎉 Neue Funktionen

- **[Client]**

  - Unterstützung für lange Textfelder als Titelfelder für Assoziationsfelder ([#6495](https://github.com/nocobase/nocobase/pull/6495)) von @katherinehhh
  - Unterstützung für Feld-Stil-Einstellungen für Schriftgröße, Schriftstärke und Schriftstil ([#6489](https://github.com/nocobase/nocobase/pull/6489)) von @katherinehhh
- **[Variablen und Geheimnisse]** Unterstützung von Umgebungsvariablen in Link-Button-URLs ([#6494](https://github.com/nocobase/nocobase/pull/6494)) von @katherinehhh
- **[Workflow: Aggregationsknoten]** Unterstützung zum Konfigurieren der Genauigkeit für Aggregationsergebnisse ([#6491](https://github.com/nocobase/nocobase/pull/6491)) von @mytharcher

#### 🚀 Verbesserungen

- **[Client]** Unterstützung für unscharfe Suche bei in der Filtersschaltfläche ausgewählten Feldern ([#6496](https://github.com/nocobase/nocobase/pull/6496)) von @katherinehhh
- **[Benachrichtigung: E-Mail]** Beschreibung der Secure-Feld-Konfiguration hinzugefügt. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) von @sheldon66
- **[Workflow: Mailer-Knoten]** Beschreibung der Secure-Feld-Konfiguration hinzugefügt. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) von @sheldon66
- **[Kalender]** Kalender-Plugin mit optionalen Einstellungen zum Aktivieren oder Deaktivieren der schnellen Ereigniserstellung ([#6391](https://github.com/nocobase/nocobase/pull/6391)) von @Cyx649312038
- **[WEB-Client]** Sekundäre Bestätigungsaufforderung für 'Cache leeren' hinzugefügt ([#6505](https://github.com/nocobase/nocobase/pull/6505)) von @katherinehhh
- **[E-Mail-Manager]** Unterstützung für erneute Autorisierung und automatische Auswahl des Kontos beim Senden einer E-Mail von @jiannx

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Transparenz des Aktionsbuttons verursacht Anzeigeprobleme der Einstellungen beim Hovern ([#6529](https://github.com/nocobase/nocobase/pull/6529)) von @katherinehhh
  - Fehler bei der Übermittlung von Zeitfeldern im chinesischen Gebietsschema (ungültige Eingabesyntax für Typ time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) von @katherinehhh
  - Die Höhe der Untertabelle im Formular wird zusammen mit der Formularhöhe festgelegt ([#6518](https://github.com/nocobase/nocobase/pull/6518)) von @katherinehhh
  - Standardmäßig ausgeblendetes Feld der Verknüpfungsregel mit beibehaltenem Wert funktioniert nicht ([#6503](https://github.com/nocobase/nocobase/pull/6503)) von @katherinehhh
  - Schaltfläche 'Unterelement hinzufügen' zeigt im Nur-Symbol-Modus nicht an ([#6504](https://github.com/nocobase/nocobase/pull/6504)) von @katherinehhh
- **[Server]** Der Upgrade-Befehl kann Workflow-Fehler verursachen ([#6524](https://github.com/nocobase/nocobase/pull/6524)) von @gchust
- **[utils]** Bekannter Fehler 'Desktop-Responsive' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) von @zhangzhonghe
- **[Evaluatoren]** Dezimalstellen auf 9 zurückgesetzt ([#6492](https://github.com/nocobase/nocobase/pull/6492)) von @mytharcher
- **[Authentifizierung]**

  - Authentifikator-Optionen kürzen ([#6527](https://github.com/nocobase/nocobase/pull/6527)) von @2013xile
  - X-Authenticator fehlt ([#6526](https://github.com/nocobase/nocobase/pull/6526)) von @chenos
- **[Block: Karte]**

  - Problem mit der Schlüsselverwaltung des Kartenblocks, das aufgrund unsichtbarer Zeichen zu Anforderungsfehlern führt ([#6521](https://github.com/nocobase/nocobase/pull/6521)) von @katherinehhh
  - Geheimschlüsselfelder lösen keine Validierung in der Kartenverwaltung aus ([#6509](https://github.com/nocobase/nocobase/pull/6509)) von @katherinehhh
- **[Dateimanager]**

  - Zugriff auf in COS gespeicherte Dateien nicht möglich ([#6512](https://github.com/nocobase/nocobase/pull/6512)) von @chenos
  - URL kodieren ([#6497](https://github.com/nocobase/nocobase/pull/6497)) von @chenos
- **[WEB-Client]** Der Pfad in der Routenverwaltungstabelle weicht vom tatsächlichen Pfad ab ([#6483](https://github.com/nocobase/nocobase/pull/6483)) von @zhangzhonghe
- **[Block: Aktionspanel]** Layoutproblem im mobilen Aktionspanel nach dem Ausblenden von Schaltflächen aufgrund von Berechtigungssteuerung ([#6502](https://github.com/nocobase/nocobase/pull/6502)) von @katherinehhh
- **[Datenquelle: Haupt]** Erstellen einer MySQL-Ansicht nicht möglich. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) von @aaaaaajie
- **[Workflow]** Anzahl der veralteten Aufgaben nach dem Löschen des Workflows korrigiert ([#6493](https://github.com/nocobase/nocobase/pull/6493)) von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Export von Anhängen nicht möglich von @chenos
- **[Backup-Manager]**

  - Hochgeladene Dateien wurden beim Erstellen einer Unter-App aus einer Backup-Vorlage nicht wiederhergestellt von @gchust
  - Wiederherstellung kann Workflow-Ausführungsfehler verursachen von @gchust
  - Fehler bei der MySQL-Datenbankwiederherstellung aufgrund von GTID-Set-Überlappung von @gchust
- **[WeCom]** Umgebungsvariablen und Geheimnisse beim Abrufen der Benachrichtigungskonfiguration auflösen. von @2013xile
- **[Workflow: Genehmigung]**

  - Fehler in der Prozesstabelle behoben, wenn Job gelöscht wurde von @mytharcher
  - Zurückgegebene Genehmigung als 'zu erledigen' geändert von @mytharcher
  - Fehler beim Hinzufügen eines Abfrageknotenergebnisses behoben von @mytharcher
  - Fehlende Aktionsschaltfläche in der Prozesstabelle behoben von @mytharcher
  - Stilproblem mit dem Popup-Dialog 'Neu beantragen' von @zhangzhonghe

## Über NocoBase

NocoBase ist eine private, quelloffene No-Code-Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase erhalten

[**Startseite**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
