---
title: "NocoBase v1.5.0: Datumsbegrenzung zum Datumsfeld-Komponente hinzugefügt"
description: "Versionshinweise zu v1.5.0"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Datumsbegrenzung für das Datumsfeld-Komponente hinzugefügt ([#5852](https://github.com/nocobase/nocobase/pull/5852)) von @Cyx649312038

  - Unterstützung zur Konfiguration von Text, Symbol und Typ für Hinzufügen- und Auswählen-Schaltflächen in Untertabellen ([#5778](https://github.com/nocobase/nocobase/pull/5778)) von @katherinehhh

  - Unterstützung zum Öffnen von Popups über Links im readPretty-Feld ([#5747](https://github.com/nocobase/nocobase/pull/5747)) von @katherinehhh

  - Unterstützung für Aktionen zum Verknüpfen und Trennen von Verknüpfungen in Verknüpfungsblöcken ([#5695](https://github.com/nocobase/nocobase/pull/5695)) von @katherinehhh

- **[Server]** Audit-Manager hinzugefügt ([#5601](https://github.com/nocobase/nocobase/pull/5601)) von @chenzhizdt

- **[Workflow]**
  - Zufällige Zeichenmuster hinzugefügt ([#5959](https://github.com/nocobase/nocobase/pull/5959)) von @kennnnnnnnnn

  - Stack-Limit-Konfiguration für Workflows hinzugefügt ([#6077](https://github.com/nocobase/nocobase/pull/6077)) von @citlalinda

  - Manuelles Auslösen von Workflows unterstützt ([#5664](https://github.com/nocobase/nocobase/pull/5664)) von @mytharcher

- **[Mobil]** Globaler Schalter zur Steuerung aller Zurück-Schaltflächen in der mobilen Ansicht hinzugefügt (standardmäßig aktiviert) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) von @katherinehhh

- **[Kalender]** Kalender-Plugin um Ereignis-Öffnungsmodus erweitert ([#5808](https://github.com/nocobase/nocobase/pull/5808)) von @Cyx649312038

- **[Sammlung: Baum]** Ermöglicht das Filtern von Kindknoten in Baumtabellenblöcken ([#4770](https://github.com/nocobase/nocobase/pull/4770)) von @jimmy201602

- **[Workflow: Vor-Aktions-Ereignis]** Manuelles Auslösen von Workflows unterstützt von @mytharcher

- **[Redis Pub Sub Adapter]** Redis-Synchronisationsadapter-Plugin hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Client]**
  - Verknüpfungsregeln von der Verknüpfen-Schaltfläche entfernt ([#6016](https://github.com/nocobase/nocobase/pull/6016)) von @katherinehhh

  - Tabellenzeilen-Skelett-Komponente entfernt ([#5751](https://github.com/nocobase/nocobase/pull/5751)) von @zhangzhonghe

  - Rekursive Logik in useMenuSearch für bessere Leistung optimiert ([#5784](https://github.com/nocobase/nocobase/pull/5784)) von @katherinehhh

  - Formily-Komponenten aus der Tabelle entfernt, um die Leistung beim Wechseln der Tabellenseitennummerierung zu verbessern ([#5738](https://github.com/nocobase/nocobase/pull/5738)) von @zhangzhonghe

  - Seiten-Rendering-Leistung verbessert und Seiten-Keep-Alive-Funktionalität unterstützt ([#5515](https://github.com/nocobase/nocobase/pull/5515)) von @zhangzhonghe

  - Bedarfsgesteuertes Laden für Frontend-Komponenten implementiert ([#5647](https://github.com/nocobase/nocobase/pull/5647)) von @gchust

- **[Benachrichtigung: E-Mail]** Startseiten-Links zu Benachrichtigungs-Plugins in package.json hinzugefügt. ([#6150](https://github.com/nocobase/nocobase/pull/6150)) von @sheldon66

- **[Workflow: Schleifenknoten]** Stile korrigiert ([#6095](https://github.com/nocobase/nocobase/pull/6095)) von @mytharcher

- **[Dateimanager]** Unterstützung für andere Speicher-Plugins ([#6096](https://github.com/nocobase/nocobase/pull/6096)) von @jiannx
Referenz: [Dateispeicher: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Workflow: Testkit]** Stil der Workflow-Leinwand angepasst, um den Inhalt kompakter zu gestalten ([#6088](https://github.com/nocobase/nocobase/pull/6088)) von @mytharcher

- **[Workflow]** API-Namen in sinnvollere geändert ([#6082](https://github.com/nocobase/nocobase/pull/6082)) von @mytharcher

- **[Datenvisualisierung]** Offset-Parameter zu charts-query hinzugefügt ([#5911](https://github.com/nocobase/nocobase/pull/5911)) von @Albert-mah

- **[Mobil]** Zeit- & Datumsbereichsauswahl-Komponente für Mobilgeräte angepasst ([#5863](https://github.com/nocobase/nocobase/pull/5863)) von @katherinehhh

- **[Authentifizierung]** Logik zum Abrufen von Metadaten von Audit-Aktionen optimiert. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) von @chenzhizdt

- **[Öffentliche Formulare]** Aktionsbereich und öffentliche Formularkomponenten für mobile Anpassung optimiert ([#5788](https://github.com/nocobase/nocobase/pull/5788)) von @katherinehhh

- **[Sammlungsfeld: Sortierung]** Plugin-Beschreibung hinzugefügt ([#5720](https://github.com/nocobase/nocobase/pull/5720)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** API der manuellen Ausführung geändert von @mytharcher

- **[Workflow: JSON-Berechnung]**
  - JSON-Query-Knotenname und -Gruppe geändert von @mytharcher

  - Symbol zu Knoten hinzugefügt von @mytharcher

- **[NocoBase einbetten]** Seiten-Rendering-Leistung verbessert von @zhangzhonghe

- **[Backup-Manager]** Verbesserte Fehlermeldungen bei fehlgeschlagenen Wiederherstellungen von @gchust

### 🐛 Fehlerbehebungen

- **[Client]**
  - Die Verknüpfungsregeln der Schaltfläche funktionieren aufgrund eines Problems mit der Reihenfolge nicht richtig ([#6147](https://github.com/nocobase/nocobase/pull/6147)) von @zhangzhonghe

  - Layout-Anomalie nach dem Löschen von Blöcken oder Feldern ([#6139](https://github.com/nocobase/nocobase/pull/6139)) von @zhangzhonghe

  - Fehler behoben: Einstellungen für nicht filterbare Felder der Filtersschaltfläche wirken sich auf andere Tabellen mit derselben Sammlung aus ([#6121](https://github.com/nocobase/nocobase/pull/6121)) von @katherinehhh

  - Daten für das Verknüpfungsfeld in den Unterdetails werden nicht angezeigt ([#6117](https://github.com/nocobase/nocobase/pull/6117)) von @zhangzhonghe

  - Fehler behoben: 'Datenlademodus' wird nach dem Seitenwechsel ungültig ([#6115](https://github.com/nocobase/nocobase/pull/6115)) von @zhangzhonghe

  - Fehler behoben: Standardwerte für Verknüpfungsfelder werden nach dem Seitenwechsel nicht aktualisiert ([#6114](https://github.com/nocobase/nocobase/pull/6114)) von @zhangzhonghe

  - Fehler behoben: Standardwerte für Verknüpfungsfelder werden im Lesemodus nicht wirksam ([#6066](https://github.com/nocobase/nocobase/pull/6066)) von @zhangzhonghe

  - Fehler behoben: Feldzuweisungen für Formularschaltflächen in manuellen Workflow-Knoten sind ungültig ([#6054](https://github.com/nocobase/nocobase/pull/6054)) von @zhangzhonghe

  - Fehlende aktuelle Popup-Variable im Modal zum Aktivieren von Feldlinks behoben ([#6045](https://github.com/nocobase/nocobase/pull/6045)) von @katherinehhh

  - Seite wird nach Abschluss der Authentifizierungsprüfungsanforderung weiter gerendert ([#6020](https://github.com/nocobase/nocobase/pull/6020)) von @2013xile

  - Fehler behoben: Tabellenzeilen können nicht per Drag & Drop sortiert werden ([#6013](https://github.com/nocobase/nocobase/pull/6013)) von @zhangzhonghe

  - Fehler behoben: Leere Untertabellen zeigen auf iOS eine Zeile mit leeren Daten an ([#5990](https://github.com/nocobase/nocobase/pull/5990)) von @zhangzhonghe

  - Fehler behoben: Klicken auf Verknüpfungsfelder öffnet nicht den Popup-Dialog ([#5972](https://github.com/nocobase/nocobase/pull/5972)) von @zhangzhonghe

  - Fehler behoben: Datumsbereichsauswahl im Filterformular/Aktion zeigt keine Zeitauswahl an, wenn showTime gesetzt ist ([#5956](https://github.com/nocobase/nocobase/pull/5956)) von @katherinehhh

  - Fehler behoben: Unerwartete Tabellenzellenanzeige in Drittanbieter-Plugins ([#5934](https://github.com/nocobase/nocobase/pull/5934)) von @zhangzhonghe

  - Fehler behoben: Löschen-Schaltfläche ist auf der Blockvorlagen-Verwaltungsseite deaktiviert ([#5922](https://github.com/nocobase/nocobase/pull/5922)) von @zhangzhonghe

  - Fehler behoben: Formularverknüpfungsregeln schlagen fehl, wenn sie von Feldwerten aus Untertabellen abhängen ([#5876](https://github.com/nocobase/nocobase/pull/5876)) von @zhangzhonghe

  - Fehler behoben: Daten ändern sich nach dem Seitenwechsel in der Untertabelle nicht ([#5856](https://github.com/nocobase/nocobase/pull/5856)) von @zhangzhonghe

  - Fehler behoben: Der Titel des Browser-Tabs wird nach dem Seitenwechsel nicht aktualisiert ([#5857](https://github.com/nocobase/nocobase/pull/5857)) von @zhangzhonghe

  - Fehler behoben: Aktualisieren der Seite in der Datenquellenverwaltung leitet zur Startseite weiter ([#5855](https://github.com/nocobase/nocobase/pull/5855)) von @zhangzhonghe

  - Fehler behoben: Verknüpfungsfelder in Referenzvorlagen zeigen manchmal keine Daten an ([#5848](https://github.com/nocobase/nocobase/pull/5848)) von @zhangzhonghe

  - Fehler behoben: Rollendaten werden in der Benutzerverwaltungstabelle nicht angezeigt ([#5846](https://github.com/nocobase/nocobase/pull/5846)) von @zhangzhonghe

  - Fehler behoben: Die Schaltfläche 'Benutzerdefinierte Anfrage' ist nach dem Hinzufügen nicht sofort sichtbar ([#5845](https://github.com/nocobase/nocobase/pull/5845)) von @zhangzhonghe

  - Fehler behoben: In einem Popup-Fenster hinzugefügte Blöcke werden beim erneuten Öffnen des Popups nicht angezeigt ([#5838](https://github.com/nocobase/nocobase/pull/5838)) von @zhangzhonghe

  - Verhindert, dass ausgeblendete Seiten Interaktionen mit anderen Seiten beeinträchtigen ([#5836](https://github.com/nocobase/nocobase/pull/5836)) von @zhangzhonghe

  - Fehler behoben: Ändern des Werts eines Verknüpfungsfelds im Detailblock wird nicht sofort aktualisiert ([#5826](https://github.com/nocobase/nocobase/pull/5826)) von @zhangzhonghe

  - Fehler behoben: Felder werden nach dem Hinzufügen in einem Unterformular nicht angezeigt ([#5827](https://github.com/nocobase/nocobase/pull/5827)) von @zhangzhonghe

  - Fehler behoben: Klicken auf Links öffnet kein Popup, wenn 'Link aktivieren' zum ersten Mal eingeschaltet wird ([#5812](https://github.com/nocobase/nocobase/pull/5812)) von @zhangzhonghe

  - Fehler behoben: Mobiler Login leitet zur Desktop-Seite weiter ([#5805](https://github.com/nocobase/nocobase/pull/5805)) von @zhangzhonghe

  - Fehler behoben: Schaltfläche 'Aktion konfigurieren' sollte linksbündig sein ([#5798](https://github.com/nocobase/nocobase/pull/5798)) von @katherinehhh

  - Mehrere API-Aufrufe beim Schließen des Popups verhindert ([#5804](https://github.com/nocobase/nocobase/pull/5804)) von @zhangzhonghe

  - Fehler behoben: Variablen können in Drittanbieter-Datenquellenblöcken nicht richtig verwendet werden ([#5782](https://github.com/nocobase/nocobase/pull/5782)) von @zhangzhonghe

  - Fehler behoben: Werte von Verknüpfungsfeldern sind in Blockvorlagen leer. Problem behoben, bei dem der Blockdatenbereich mit Variablen in Drittanbieter-Datenquellen nicht richtig funktioniert ([#5777](https://github.com/nocobase/nocobase/pull/5777)) von @zhangzhonghe

  - Fehler behoben: Dynamische Eigenschaften von Komponenten funktionieren nicht mit Lazy Loading ([#5776](https://github.com/nocobase/nocobase/pull/5776)) von @gchust

  - Warnmeldung in React beim dynamischen Laden von Hooks in der Entwicklungsumgebung behoben ([#5758](https://github.com/nocobase/nocobase/pull/5758)) von @gchust

- **[Build]**
  - Problem mit dem Laden nach dem Setzen der Umgebungsvariable `APP_PUBLIC_PATH` behoben ([#5924](https://github.com/nocobase/nocobase/pull/5924)) von @gchust

  - Falsches Caching von Frontend-JS-Dateien nach dem Plugin-Build behoben ([#5801](https://github.com/nocobase/nocobase/pull/5801)) von @gchust

  - Fehler beim Ausführen von `yarn dev` nach create-nocobase-app behoben ([#5708](https://github.com/nocobase/nocobase/pull/5708)) von @gchust

- **[Server]** Standardmäßig verfügbare Aktionen für die ACL festgelegt ([#5847](https://github.com/nocobase/nocobase/pull/5847)) von @chenos

- **[Öffentliche Formulare]** Felder können im `Unterformular(Popover)` von öffentlichen Formularen nicht hinzugefügt werden ([#6157](https://github.com/nocobase/nocobase/pull/6157)) von @gchust

- **[Sammlung: SQL]** Fehler behoben: Filtern einer SQL-Sammlung wirft einen Fehler, wenn `DB_TABLE_PREFIX` gesetzt ist ([#6156](https://github.com/nocobase/nocobase/pull/6156)) von @2013xile

- **[Workflow]**
  - Testfall für die Aktion "Verschieben" zum Auslösen eines Workflows hinzugefügt ([#6145](https://github.com/nocobase/nocobase/pull/6145)) von @mytharcher

  - Fehler behoben, der beim Fortsetzen eines asynchronen Knotens in einem manuell ausgeführten Workflow ausgelöst wird ([#5877](https://github.com/nocobase/nocobase/pull/5877)) von @mytharcher

- **[Benutzerdatensynchronisation]**
  - Fehler behoben: Die Schaltfläche "Wiederholen" wird in der Aufgabenliste nicht angezeigt ([#6079](https://github.com/nocobase/nocobase/pull/6079)) von @2013xile

  - Anzeigeprobleme der Synchronisations- und Aufgaben-Schaltflächen behoben. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) von @2013xile

- **[Verifizierung]** Leere Formularfelder beim Öffnen des Bearbeitungs-Drawers auf der Verifizierungseinstellungsseite behoben ([#5949](https://github.com/nocobase/nocobase/pull/5949)) von @chenos

- **[Datenquelle: Haupt]** Fehler behoben: Systemfelder im Filterformularblock können nicht bearbeitet werden ([#5885](https://github.com/nocobase/nocobase/pull/5885)) von @zhangzhonghe

- **[Datenvisualisierung]**
  - Anfangshöhe des Diagrammblocks behoben ([#5879](https://github.com/nocobase/nocobase/pull/5879)) von @2013xile

  - Fehler behoben: Filterfeldkomponenten von Diagrammblöcken werden nicht gerendert ([#5769](https://github.com/nocobase/nocobase/pull/5769)) von @2013xile

- **[Mobil]**
  - Mobile Anpassung der Datumskomponente auf Unterseiten behoben ([#5859](https://github.com/nocobase/nocobase/pull/5859)) von @katherinehhh

  - Fehlendes Datumseingabefeld im Filtervorgang auf Mobilgeräten behoben ([#5779](https://github.com/nocobase/nocobase/pull/5779)) von @katherinehhh

- **[Workflow: Benutzerdefiniertes Aktionsereignis]**
  - Testfälle für benutzerdefinierten Aktionsauslöser behoben von @mytharcher

  - Fehlgeschlagenen Testfall auf SQLite behoben von @mytharcher

- **[Workflow: Vor-Aktions-Ereignis]** Testfälle für Request-Interceptor behoben von @mytharcher

- **[Workflow: Antwortnachricht]** Falschen Parameternamen behoben von @mytharcher
