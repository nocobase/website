---
title: "NocoBase v1.9.0-beta.5: Unterstützung zur Konfiguration des Limits für die Anfragekörpergröße über Umgebungsvariable"
description: "Versionshinweise zu v1.9.0-beta.5"
---

### 🎉 Neue Funktionen

- **[Server]** Unterstützung zur Konfiguration des Limits für die Anfragekörpergröße über Umgebungsvariablen ([#7273](https://github.com/nocobase/nocobase/pull/7273)) von @aaaaaajie

- **[Workflow: Paralleler Knoten]** "Alle erledigt"-Modus für parallele Knoten hinzugefügt ([#7263](https://github.com/nocobase/nocobase/pull/7263)) von @mytharcher

- **[Auth: SAML 2.0]** Unterstützung für automatische Weiterleitung zur SSO-URL, wenn der Benutzer nicht authentifiziert ist, von @2013xile

- **[Redis-Warteschlangen-Adapter]** Redis-Adapter für Ereigniswarteschlange hinzugefügt von @mytharcher

- **[Workflow: Datumsberechnungsknoten]** Unterstützung zum Testen des Knotenlaufs von @mytharcher

### 🚀 Verbesserungen

- **[Server]** Gleichzeitige Speicherwarteschlange verfügbar machen, wenn Elemente nicht vollständig verarbeitet werden ([#7267](https://github.com/nocobase/nocobase/pull/7267)) von @mytharcher

- **[Datenbank]** Automatische Aktivierung der einfachen Paginierung, wenn der Datensatz einen Schwellenwert überschreitet ([#7227](https://github.com/nocobase/nocobase/pull/7227)) von @aaaaaajie

- **[Client]** Farbwähler: Vier empfohlene Farben hinzugefügt ([#7226](https://github.com/nocobase/nocobase/pull/7226)) von @zhangzhonghe

- **[KI-Integration]** `await` für den Aufruf von `saveJob` entfernt ([#7275](https://github.com/nocobase/nocobase/pull/7275)) von @mytharcher

- **[Workflow: Manueller Knoten]** storePopupContext unterstützt das Speichern des Standardkontexts ([#7264](https://github.com/nocobase/nocobase/pull/7264)) von @zhangzhonghe

- **[Workflow]**
  - JSON-Typ-Konstante für Testvariable hinzugefügt ([#7274](https://github.com/nocobase/nocobase/pull/7274)) von @mytharcher

  - Protokollierung anstelle von Fehlerauslösung verwenden, wenn die Ausführung aufgrund des Status nicht ausgeführt werden soll ([#7217](https://github.com/nocobase/nocobase/pull/7217)) von @mytharcher

  - Vergleich für Datumswerte kompatibel gemacht ([#7237](https://github.com/nocobase/nocobase/pull/7237)) von @mytharcher

- **[Sammlungsfeld: Formel]** Weitere berechenbare Schnittstellen hinzugefügt ([#7215](https://github.com/nocobase/nocobase/pull/7215)) von @mytharcher

- **[Redis-Warteschlangen-Adapter]** Gleichzeitige Warteschlange verfügbar machen, wenn Elemente nicht vollständig verarbeitet werden, für den Redis-Adapter von @mytharcher

- **[Workflow: JSON-Berechnung]** JSON-Abfrageknoten testbar gemacht von @mytharcher

- **[Workflow: Genehmigung]** Unterstützung zum Löschen der Genehmigung, wenn zugehörige Daten gelöscht werden von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Unscharfe Suche funktioniert nicht im Auswahl-Assoziationsfeld bei Verwendung einer Formel als Titelfeld ([#7280](https://github.com/nocobase/nocobase/pull/7280)) von @katherinehhh

  - Fehlende aktuelle Objektvariable in den Verknüpfungsregeln von Untertabellen ([#7266](https://github.com/nocobase/nocobase/pull/7266)) von @katherinehhh

  - Nach Feldänderungen haben die von diesem Feld abhängigen Assoziationsfelder ihre Werte nicht gelöscht ([#7262](https://github.com/nocobase/nocobase/pull/7262)) von @zhangzhonghe

  - Problem behoben, bei dem Markdown-Felder in der Detailansicht nicht korrekt dargestellt wurden. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) von @aaaaaajie

  - Einstellung des Titelfelds der Datenauswahl ist ungültig ([#7251](https://github.com/nocobase/nocobase/pull/7251)) von @zhangzhonghe

  - Vermeidung der Auswahl von Nicht-Assoziationsfeldern in Appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) von @mytharcher

  - Beim Löschen eines Menüs werden die entsprechenden Daten in der uiSchemas-Tabelle nicht gelöscht ([#7232](https://github.com/nocobase/nocobase/pull/7232)) von @zhangzhonghe

  - Stilregeln funktionieren nicht in der Tabellenaktionsspalte ([#7225](https://github.com/nocobase/nocobase/pull/7225)) von @katherinehhh

  - Anzeigeproblem bei Verwendung veralteter Datumsvariablen in Datumsfeldern historischer Daten ([#7253](https://github.com/nocobase/nocobase/pull/7253)) von @katherinehhh

  - Anzeigeproblem für Assoziationsfelder in Verknüpfungsregeln ([#7220](https://github.com/nocobase/nocobase/pull/7220)) von @katherinehhh

  - Fehler behoben: Kann 'react-device-detect' nicht auflösen ([#7224](https://github.com/nocobase/nocobase/pull/7224)) von @zhangzhonghe

- **[Datenbank]**
  - Behebung des automatischen einfachen Paginierungsfehlers, der durch die Tabellenbenennungskonvention verursacht wurde. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) von @aaaaaajie

  - Problem behoben, bei dem die Standardsortierung des Primärschlüssels zu einem Ladefehler der Liste führte, wenn eine MSSQL-externe Datenquelle im Tabellenblock verwendet wurde. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) von @aaaaaajie

  - Fehler beim Exportieren großer Datensätze aus PostgreSQL behoben ([#7228](https://github.com/nocobase/nocobase/pull/7228)) von @aaaaaajie

  - Fehler beim Aktivieren der einfachen Paginierung für Tabellen externer Datenquellen behoben ([#7222](https://github.com/nocobase/nocobase/pull/7222)) von @aaaaaajie

- **[Auth]** Problem behoben, bei dem ein leeres `secret` in der Unteranwendungskonfiguration die Anmeldung verhindert ([#7239](https://github.com/nocobase/nocobase/pull/7239)) von @2013xile

- **[Workflow]** Falsche Version einer Abhängigkeit behoben ([#7258](https://github.com/nocobase/nocobase/pull/7258)) von @mytharcher

- **[Aktion: Stapelbearbeitung]** Stapelbearbeitung und Stapelaktualisierung in der Datenauswahl nicht möglich ([#7250](https://github.com/nocobase/nocobase/pull/7250)) von @zhangzhonghe

- **[Datenquellen-Manager]** Beibehaltung externer Datenquellenattribute in der Sammlungskonfiguration behoben ([#7249](https://github.com/nocobase/nocobase/pull/7249)) von @aaaaaajie

- **[Sammlungsfeld: Sortierung]** Fehlende Sortierfeldauswahl beim Duplizieren von Datensätzen ([#7116](https://github.com/nocobase/nocobase/pull/7116)) von @katherinehhh

- **[Datenquelle: Externes Oracle]** Beibehaltung externer Datenquellenattribute in der Sammlungskonfiguration behoben von @aaaaaajie

- **[Workflow: Unterworkflow]** Fehler behoben, der ausgelöst wird, wenn ein Rückrufsignal eintrifft, die ausstehende Ausführung jedoch nicht auf der aktuellen Instanz erfolgt von @mytharcher

- **[Workflow: Genehmigung]**
  - Mehrere Assoziationsebenen beim Einreichen der Genehmigung behoben von @mytharcher

  - Die URL des Link-Buttons verweist auf ein Popup auf der aktuellen Seite, aber beim Klicken wird ein 404-Fehler angezeigt von @zhangzhonghe

  - Assoziationen beim Einreichen der Genehmigung behoben von @mytharcher

  - Fehlertoleranz für gelöschte Genehmigungen in der Datensatzliste hinzugefügt von @mytharcher

  - Ausnahme beim Löschen von Datensätzen behoben von @mytharcher

- **[E-Mail-Manager]** Die Beziehungssammlung von Nachrichten und Labels ist unter MySQL fehlerhaft von @jiannx
