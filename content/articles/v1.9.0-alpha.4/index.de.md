---
title: "NocoBase v1.9.0-alpha.4: Unterstützung der Konfiguration des Limits für die Anfragekörpergröße über Umgebungsvariable"
description: "Versionshinweise zu v1.9.0-alpha.4"
---

### 🎉 Neue Funktionen

- **[Server]** Unterstützung zur Konfiguration des Limits der Anfragekörpergröße über Umgebungsvariablen ([#7273](https://github.com/nocobase/nocobase/pull/7273)) von @aaaaaajie
- **[Client]** Tabellenblöcke unterstützen das Hinzufügen einer Schaltfläche 'Spalteneinstellungen' zum Konfigurieren der Spaltenreihenfolge und -sichtbarkeit ([#7204](https://github.com/nocobase/nocobase/pull/7204)) von @kerwin612
- **[Office-Dateivorschau]** Unterstützung zur Vorschau von Office-Dateien über die Microsoft Live-Vorschau ([#7300](https://github.com/nocobase/nocobase/pull/7300)) von @mytharcher
- **[Datenquelle: Hauptdatenquelle]**

  - Unterstützung zum Lesen von Tabellen aus der Hauptdatenquelle ([#7238](https://github.com/nocobase/nocobase/pull/7238)) von @aaaaaajie
- **[Workflow: Paralleler Knoten]** Modus "Alle abgeschlossen" für parallele Knoten hinzugefügt ([#7263](https://github.com/nocobase/nocobase/pull/7263)) von @mytharcher
- **[Auth: SAML 2.0]** Unterstützung der automatischen Weiterleitung zur SSO-URL, wenn der Benutzer nicht authentifiziert ist, von @2013xile
- **[Redis-Warteschlangenadapter]** Redis-Adapter für Ereigniswarteschlangen hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Client]** Menü nach Auswahl nicht automatisch schließen ([#7252](https://github.com/nocobase/nocobase/pull/7252)) von @kerwin612
- **[Server]** Gleichzeitige Speicherwarteschlange verfügbar machen, wenn Elemente nicht vollständig verarbeitet werden ([#7267](https://github.com/nocobase/nocobase/pull/7267)) von @mytharcher
- **[Datenbank]** Automatische Aktivierung der einfachen Paginierung, wenn der Datensatz einen Schwellenwert überschreitet ([#7227](https://github.com/nocobase/nocobase/pull/7227)) von @aaaaaajie
- **[Benachrichtigung: In-App-Nachricht]** Änderung der In-App-Nachricht von SSE zu WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) von @mytharcher
- **[Workflow]**

  - Reduzierung der zu ladenden Job-Anzahl bei der Vorbereitung der Ausführung ([#7284](https://github.com/nocobase/nocobase/pull/7284)) von @mytharcher
  - Hinzufügen eines JSON-Typ-Konstanten für Testvariablen ([#7274](https://github.com/nocobase/nocobase/pull/7274)) von @mytharcher
- **[KI-Integration]** Entfernen von `await` für den Aufruf von `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) von @mytharcher
- **[Workflow: Manueller Knoten]** storePopupContext unterstützt das Speichern des Standardkontexts ([#7264](https://github.com/nocobase/nocobase/pull/7264)) von @zhangzhonghe
- **[Workflow: JSON-Berechnung]** JSON-Abfrageknoten testbar gemacht von @mytharcher
- **[Redis-Warteschlangenadapter]** Gleichzeitige Warteschlange verfügbar machen, wenn Elemente nicht vollständig verarbeitet werden, für den Redis-Adapter von @mytharcher
- **[Auth: DingTalk]** Im DingTalk-Client den Titel der Navigationsleiste auf einen leeren String setzen, anstatt "Laden..." anzuzeigen, von @2013xile

### 🐛 Fehlerbehebungen

- **[Utils]** Falsche Zeitzonenbehandlung für parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) von @katherinehhh
- **[Client]**

  - Fehler bei der Dateivorschau bei null-URL ([#7315](https://github.com/nocobase/nocobase/pull/7315)) von @mytharcher
  - Vollständige URL zu lokalen Dateien bei der Vorschau hinzufügen ([#7314](https://github.com/nocobase/nocobase/pull/7314)) von @mytharcher
  - Problem behoben, bei dem eine Baumtabelle nicht erweitert werden konnte ([#7309](https://github.com/nocobase/nocobase/pull/7309)) von @zhangzhonghe
  - Unerwartetes Verhalten beim Drag-and-Drop-Sortieren von Tabellenzeilen behoben ([#6959](https://github.com/nocobase/nocobase/pull/6959)) von @ChimingLiu
  - Endlosschleifenproblem beim Parsen von Feldstandardwerten behoben ([#7301](https://github.com/nocobase/nocobase/pull/7301)) von @zhangzhonghe
  - Anzeigeproblem des Datumsfelds im Datenauswahl-Popup des Verknüpfungsfelds im Filterformular ([#7290](https://github.com/nocobase/nocobase/pull/7290)) von @katherinehhh
  - Fuzzy-Suche funktioniert nicht im Auswahl-Verknüpfungsfeld bei Verwendung einer Formel als Titelfeld ([#7280](https://github.com/nocobase/nocobase/pull/7280)) von @katherinehhh
  - Fehlende aktuelle Objektvariable in den Verknüpfungsregeln von Untertabellen ([#7266](https://github.com/nocobase/nocobase/pull/7266)) von @katherinehhh
  - Problem behoben, bei dem Markdown-Felder in der Detailansicht nicht korrekt dargestellt wurden. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) von @aaaaaajie
  - Nach Feldänderungen wurden die Werte der abhängigen Verknüpfungsfelder nicht gelöscht ([#7262](https://github.com/nocobase/nocobase/pull/7262)) von @zhangzhonghe
  - Anzeigeproblem bei Verwendung veralteter Datumsvariablen in Datumsfeldern historischer Daten ([#7253](https://github.com/nocobase/nocobase/pull/7253)) von @katherinehhh
  - Einstellung des Titelfelds im Datenauswahl ist ungültig ([#7251](https://github.com/nocobase/nocobase/pull/7251)) von @zhangzhonghe
- **[Datenbank]**

  - Behebung des Fehlschlags der automatischen einfachen Paginierung aufgrund der Tabellenbenennungskonvention. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) von @aaaaaajie
  - Fehler beim Exportieren großer Datensätze aus PostgreSQL behoben ([#7228](https://github.com/nocobase/nocobase/pull/7228)) von @aaaaaajie
  - Problem behoben, bei dem die Standardsortierung nach Primärschlüssel zu einem Ladefehler der Liste führt, wenn eine MSSQL-externe Datenquelle in einem Tabellenblock verwendet wird. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) von @aaaaaajie
- **[Auth]** Problem behoben, bei dem ein leeres `secret` in der Unteranwendungskonfiguration die Anmeldung verhindert ([#7239](https://github.com/nocobase/nocobase/pull/7239)) von @2013xile
- **[Dateimanager]** Berechtigung des Speicherfelds behoben ([#7316](https://github.com/nocobase/nocobase/pull/7316)) von @mytharcher
- **[Workflow]**

  - Problem mit `undefined`-Ergebnis beim Beenden des Prozessors behoben ([#7317](https://github.com/nocobase/nocobase/pull/7317)) von @mytharcher
  - BigInt-ID-Problem in MySQL beim Speichern von Jobs behoben ([#7292](https://github.com/nocobase/nocobase/pull/7292)) von @mytharcher
  - Falsche Version einer Abhängigkeit behoben ([#7258](https://github.com/nocobase/nocobase/pull/7258)) von @mytharcher
- **[Workflow: HTTP-Anfrageknoten]** Wettlaufsituation (Race Condition) behoben ([#7310](https://github.com/nocobase/nocobase/pull/7310)) von @mytharcher
- **[Aktion: Datensätze exportieren]** Falsche Formatierung von verschachtelten Beziehungsfeldern beim Export nach Excel behoben. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) von @aaaaaajie
- **[Datenquellen-Manager]** Beibehalten externer Datenquellenattribute in der Sammlungskonfiguration behoben ([#7249](https://github.com/nocobase/nocobase/pull/7249)) von @aaaaaajie
- **[Aktion: Stapelbearbeitung]** Stapelbearbeitung und Stapelaktualisierung im Datenauswahl nicht möglich ([#7250](https://github.com/nocobase/nocobase/pull/7250)) von @zhangzhonghe
- **[Datenquelle: Externes Oracle]** Beibehalten externer Datenquellenattribute in der Sammlungskonfiguration behoben von @aaaaaajie
- **[Datenquelle: Externes SQL Server]** Inkonsistentes Speicherformat für MSSQL-Datetime-Felder (ohne Zeitzone) aus externen Datenquellen behoben von @aaaaaajie
- **[Workflow: Unterworkflow]** Angehaltener Workflow behoben von @mytharcher
- **[Workflow: Genehmigung]**

  - Fehler behoben, der vom Auswahlfeld für Bearbeiter innerhalb einer externen Datenquelle ausgelöst wurde von @mytharcher
  - Die URL des Link-Buttons zeigt auf ein Popup auf der aktuellen Seite, aber beim Klicken wird ein 404-Fehler angezeigt von @zhangzhonghe
- **[E-Mail-Manager]**

  - rawId-Feld zur Leistungsoptimierung hinzugefügt von @jiannx
  - ref-Attribut in HTML verursacht Rendering-Ausnahme von @jiannx
  - Die Beziehungssammlung zwischen Nachrichten und Labels ist unter MySQL außergewöhnlich von @jiannx
