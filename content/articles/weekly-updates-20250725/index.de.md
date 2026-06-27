---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: Unterstützung für die Anzeige von plugin-definierten Tabellen in der Hauptdatenquelle, Testläufe für Knoten und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.10](https://www.nocobase.com/en/blog/v1.8.10)

*Veröffentlichungsdatum: 24.07.2025*

#### 🎉 Neue Funktionen

* **[Auth: SAML 2.0]** Unterstützt automatische Weiterleitung zur SSO-URL, wenn der Benutzer nicht authentifiziert ist, von @2013xile
* **[Server]** Unterstützt die Konfiguration des Limits für die Größe des Anforderungstextes über Umgebungsvariablen ([#7273](https://github.com/nocobase/nocobase/pull/7273)) von @aaaaaajie
* **[Workflow: Paralleler Knoten]** "Alle erledigt"-Modus für parallelen Knoten hinzugefügt ([#7263](https://github.com/nocobase/nocobase/pull/7263)) von @mytharcher
* **[Redis-Warteschlangen-Adapter]** Redis-Adapter für Ereigniswarteschlange hinzugefügt von @mytharcher

#### 🚀 Verbesserungen

* **[Workflow]** JSON-Typ-Konstante für Testvariable hinzugefügt ([#7274](https://github.com/nocobase/nocobase/pull/7274)) von @mytharcher
* **[KI-Integration]** `await` für den Aufruf von `saveJob` entfernt ([#7275](https://github.com/nocobase/nocobase/pull/7275)) von @mytharcher
* **[Workflow: JSON-Berechnung]** JSON-Abfrageknoten testbar gemacht von @mytharcher
* **[Server]** Gleichzeitige Speicherwarteschlange verfügbar gemacht, wenn die Verarbeitung von Elementen nicht vollständig ist ([#7267](https://github.com/nocobase/nocobase/pull/7267)) von @mytharcher
* **[Datenbank]** Aktiviert automatisch einfache Paginierung, wenn der Datensatz einen Schwellenwert überschreitet ([#7227](https://github.com/nocobase/nocobase/pull/7227)) von @aaaaaajie
* **[Workflow: Manueller Knoten]** storePopupContext unterstützt das Speichern des Standardkontexts ([#7264](https://github.com/nocobase/nocobase/pull/7264)) von @zhangzhonghe
* **[Redis-Warteschlangen-Adapter]** Gleichzeitige Warteschlange verfügbar gemacht, wenn die Verarbeitung von Elementen nicht vollständig ist, für den Redis-Adapter von @mytharcher

#### 🐛 Fehlerbehebungen

* **[Client]**
  * Fuzzy-Suche funktioniert nicht im Auswahl-Assoziationsfeld bei Verwendung einer Formel als Titelfeld ([#7280](https://github.com/nocobase/nocobase/pull/7280)) von @katherinehhh
  * Fehlende aktuelle Objektvariable in Untertabellen-Verknüpfungsregeln ([#7266](https://github.com/nocobase/nocobase/pull/7266)) von @katherinehhh
  * Einstellung des Titelfelds im Datenauswahl ist ungültig ([#7251](https://github.com/nocobase/nocobase/pull/7251)) von @zhangzhonghe
  * Problem behoben, bei dem Markdown-Felder in der Detailansicht nicht korrekt dargestellt wurden. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) von @aaaaaajie
  * Nach Feldänderungen wurden die Werte der abhängigen Assoziationsfelder nicht gelöscht ([#7262](https://github.com/nocobase/nocobase/pull/7262)) von @zhangzhonghe
  * Anzeigeproblem bei Verwendung veralteter Datumsvariablen in Datumsfeldern historischer Daten ([#7253](https://github.com/nocobase/nocobase/pull/7253)) von @katherinehhh
* **[Datenbank]**
  * Behebung des automatischen einfachen Paginierungsfehlers, der durch die Tabellenbenennungskonvention verursacht wurde. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) von @aaaaaajie
  * Fehler beim Exportieren großer Datensätze aus PostgreSQL behoben ([#7228](https://github.com/nocobase/nocobase/pull/7228)) von @aaaaaajie
  * Problem behoben, bei dem die Standardsortierung nach Primärschlüssel zu einem Ladefehler der Liste führte, wenn eine MSSQL-externe Datenquelle im Tabellenblock verwendet wurde. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) von @aaaaaajie
* **[Auth]** Problem behoben, bei dem ein leeres `secret` in der Unteranwendungskonfiguration die Anmeldung verhindert ([#7239](https://github.com/nocobase/nocobase/pull/7239)) von @2013xile
* **[Datenquellen-Manager]** Beibehaltung externer Datenquellenattribute in der Sammlungskonfiguration behoben ([#7249](https://github.com/nocobase/nocobase/pull/7249)) von @aaaaaajie
* **[Aktion: Stapelbearbeitung]** Stapelbearbeitung und Stapelaktualisierung im Datenauswahl nicht möglich ([#7250](https://github.com/nocobase/nocobase/pull/7250)) von @zhangzhonghe
* **[Workflow]** Falsche Version der Abhängigkeit behoben ([#7258](https://github.com/nocobase/nocobase/pull/7258)) von @mytharcher
* **[Datenquelle: Externes Oracle]** Beibehaltung externer Datenquellenattribute in der Sammlungskonfiguration behoben von @aaaaaajie
* **[Workflow: Genehmigung]** Die URL des Link-Buttons zeigt auf ein Popup auf der aktuellen Seite, aber beim Klicken wird ein 404-Fehler angezeigt von @zhangzhonghe
* **[E-Mail-Manager]** Die Beziehungssammlung zwischen Nachrichten und Labels ist unter MySQL fehlerhaft von @jiannx

### [v1.8.7](https://www.nocobase.com/en/blog/v1.8.7)

*Veröffentlichungsdatum: 18.07.2025*

#### 🎉 Neue Funktionen

- **[Workflow: Datumsberechnungsknoten]** Unterstützung zum Testen des Knotens von @mytharcher

#### 🚀 Verbesserungen

- **[Client]** Farbauswahl: Vier empfohlene Farben hinzugefügt ([#7226](https://github.com/nocobase/nocobase/pull/7226)) von @zhangzhonghe
- **[Workflow]** Vergleich für Datumswerte kompatibel gemacht ([#7237](https://github.com/nocobase/nocobase/pull/7237)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**
  - Stilregeln funktionieren nicht in der Tabellenaktionsspalte ([#7225](https://github.com/nocobase/nocobase/pull/7225)) von @katherinehhh
  - Beim Löschen eines Menüs werden die entsprechenden Daten in der uiSchemas-Tabelle nicht gelöscht ([#7232](https://github.com/nocobase/nocobase/pull/7232)) von @zhangzhonghe
  - Vermeidung der Auswahl von Nicht-Assoziationsfeldern in appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) von @mytharcher
- **[Workflow: Unterworkflow]** Fehler behoben, der ausgelöst wird, wenn ein Rückrufsignal eintrifft, die ausstehende Ausführung jedoch nicht auf der aktuellen Instanz erfolgt von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.5](https://www.nocobase.com/en/blog/v1.9.0-beta.5)

*Veröffentlichungsdatum: 24.07.2025*

#### 🎉 Neue Funktionen

- **[Server]** Unterstützt die Konfiguration des Limits für die Größe des Anforderungstextes über Umgebungsvariablen ([#7273](https://github.com/nocobase/nocobase/pull/7273)) von @aaaaaajie
- **[Workflow: Paralleler Knoten]** "Alle erledigt"-Modus für parallelen Knoten hinzugefügt ([#7263](https://github.com/nocobase/nocobase/pull/7263)) von @mytharcher
- **[Auth: SAML 2.0]** Unterstützt automatische Weiterleitung zur SSO-URL, wenn der Benutzer nicht authentifiziert ist, von @2013xile
- **[Redis-Warteschlangen-Adapter]** Redis-Adapter für Ereigniswarteschlange hinzugefügt von @mytharcher
- **[Workflow: Datumsberechnungsknoten]** Unterstützung zum Testen des Knotens von @mytharcher

#### 🚀 Verbesserungen

- **[Server]** Gleichzeitige Speicherwarteschlange verfügbar gemacht, wenn die Verarbeitung von Elementen nicht vollständig ist ([#7267](https://github.com/nocobase/nocobase/pull/7267)) von @mytharcher
- **[Datenbank]** Aktiviert automatisch einfache Paginierung, wenn der Datensatz einen Schwellenwert überschreitet ([#7227](https://github.com/nocobase/nocobase/pull/7227)) von @aaaaaajie
- **[Client]** Farbauswahl: Vier empfohlene Farben hinzugefügt ([#7226](https://github.com/nocobase/nocobase/pull/7226)) von @zhangzhonghe
- **[KI-Integration]** `await` für den Aufruf von `saveJob` entfernt ([#7275](https://github.com/nocobase/nocobase/pull/7275)) von @mytharcher
- **[Workflow: Manueller Knoten]** storePopupContext unterstützt das Speichern des Standardkontexts ([#7264](https://github.com/nocobase/nocobase/pull/7264)) von @zhangzhonghe
- **[Workflow]**
  - JSON-Typ-Konstante für Testvariable hinzugefügt ([#7274](https://github.com/nocobase/nocobase/pull/7274)) von @mytharcher
  - Protokollierung anstelle des Auslösens eines Fehlers verwendet, wenn die Ausführung aufgrund des Status nicht ausgeführt werden sollte ([#7217](https://github.com/nocobase/nocobase/pull/7217)) von @mytharcher
  - Vergleich für Datumswerte kompatibel gemacht ([#7237](https://github.com/nocobase/nocobase/pull/7237)) von @mytharcher
- **[Sammlungsfeld: Formel]** Weitere berechenbare Schnittstellen hinzugefügt ([#7215](https://github.com/nocobase/nocobase/pull/7215)) von @mytharcher
- **[Redis-Warteschlangen-Adapter]** Gleichzeitige Warteschlange verfügbar gemacht, wenn die Verarbeitung von Elementen nicht vollständig ist, für den Redis-Adapter von @mytharcher
- **[Workflow: JSON-Berechnung]** JSON-Abfrageknoten testbar gemacht von @mytharcher
- **[Workflow: Genehmigung]** Unterstützung zum Löschen der Genehmigung, wenn zugehörige Daten gelöscht werden von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**
  - Fuzzy-Suche funktioniert nicht im Auswahl-Assoziationsfeld bei Verwendung einer Formel als Titelfeld ([#7280](https://github.com/nocobase/nocobase/pull/7280)) von @katherinehhh
  - Fehlende aktuelle Objektvariable in Untertabellen-Verknüpfungsregeln ([#7266](https://github.com/nocobase/nocobase/pull/7266)) von @katherinehhh
  - Nach Feldänderungen wurden die Werte der abhängigen Assoziationsfelder nicht gelöscht ([#7262](https://github.com/nocobase/nocobase/pull/7262)) von @zhangzhonghe
  - Problem behoben, bei dem Markdown-Felder in der Detailansicht nicht korrekt dargestellt wurden. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) von @aaaaaajie
  - Einstellung des Titelfelds im Datenauswahl ist ungültig ([#7251](https://github.com/nocobase/nocobase/pull/7251)) von @zhangzhonghe
  - Vermeidung der Auswahl von Nicht-Assoziationsfeldern in appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) von @mytharcher
  - Beim Löschen eines Menüs werden die entsprechenden Daten in der uiSchemas-Tabelle nicht gelöscht ([#7232](https://github.com/nocobase/nocobase/pull/7232)) von @zhangzhonghe
  - Stilregeln funktionieren nicht in der Tabellenaktionsspalte ([#7225](https://github.com/nocobase/nocobase/pull/7225)) von @katherinehhh
  - Anzeigeproblem bei Verwendung veralteter Datumsvariablen in Datumsfeldern historischer Daten ([#7253](https://github.com/nocobase/nocobase/pull/7253)) von @katherinehhh
  - Anzeigeproblem für Assoziationsfelder in Verknüpfungsregeln ([#7220](https://github.com/nocobase/nocobase/pull/7220)) von @katherinehhh
  - Fehler behoben: Kann 'react-device-detect' nicht auflösen ([#7224](https://github.com/nocobase/nocobase/pull/7224)) von @zhangzhonghe
- **[Datenbank]**
  - Behebung des automatischen einfachen Paginierungsfehlers, der durch die Tabellenbenennungskonvention verursacht wurde. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) von @aaaaaajie
  - Problem behoben, bei dem die Standardsortierung nach Primärschlüssel zu einem Ladefehler der Liste führte, wenn eine MSSQL-externe Datenquelle im Tabellenblock verwendet wurde. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) von @aaaaaajie
  - Fehler beim Exportieren großer Datensätze aus PostgreSQL behoben ([#7228](https://github.com/nocobase/nocobase/pull/7228)) von @aaaaaajie
  - Fehler beim Aktivieren der einfachen Paginierung für externe Datenquellentabellen behoben ([#7222](https://github.com/nocobase/nocobase/pull/7222)) von @aaaaaajie
- **[Auth]** Problem behoben, bei dem ein leeres `secret` in der Unteranwendungskonfiguration die Anmeldung verhindert ([#7239](https://github.com/nocobase/nocobase/pull/7239)) von @2013xile
- **[Workflow]** Falsche Version der Abhängigkeit behoben ([#7258](https://github.com/nocobase/nocobase/pull/7258)) von @mytharcher
- **[Aktion: Stapelbearbeitung]** Stapelbearbeitung und Stapelaktualisierung im Datenauswahl nicht möglich ([#7250](https://github.com/nocobase/nocobase/pull/7250)) von @zhangzhonghe
- **[Datenquellen-Manager]** Beibehaltung externer Datenquellenattribute in der Sammlungskonfiguration behoben ([#7249](https://github.com/nocobase/nocobase/pull/7249)) von @aaaaaajie
- **[Sammlungsfeld: Sortierung]** Fehlende Sortierfeldauswahl beim Duplizieren von Datensätzen ([#7116](https://github.com/nocobase/nocobase/pull/7116)) von @katherinehhh
- **[Datenquelle: Externes Oracle]** Beibehaltung externer Datenquellenattribute in der Sammlungskonfiguration behoben von @aaaaaajie
- **[Workflow: Unterworkflow]** Fehler behoben, der ausgelöst wird, wenn ein Rückrufsignal eintrifft, die ausstehende Ausführung jedoch nicht auf der aktuellen Instanz erfolgt von @mytharcher
- **[Workflow: Genehmigung]**
  - Mehrere Assoziationsebenen beim Einreichen der Genehmigung behoben von @mytharcher
  - Die URL des Link-Buttons zeigt auf ein Popup auf der aktuellen Seite, aber beim Klicken wird ein 404-Fehler angezeigt von @zhangzhonghe
  - Assoziationen beim Einreichen der Genehmigung behoben von @mytharcher
  - Fehlertoleranz für gelöschte Genehmigungen in der Datensatzliste hinzugefügt von @mytharcher
  - Ausnahme beim Löschen eines Datensatzes behoben von @mytharcher
- **[E-Mail-Manager]** Die Beziehungssammlung zwischen Nachrichten und Labels ist unter MySQL fehlerhaft von @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/en/blog/v1.9.0-alpha.3)

*Veröffentlichungsdatum: 18.07.2025*

#### 🎉 Neue Funktionen

- **[Datenquelle: Haupt]** Unterstützt die Anzeige von plugin-definierten Tabellen in der Hauptdatenquelle. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) von @aaaaaajie
- **[Workflow: Datumsberechnungsknoten]** Unterstützung zum Testen des Knotens von @mytharcher

#### 🚀 Verbesserungen

- **[Client]** Farbauswahl: Vier empfohlene Farben hinzugefügt ([#7226](https://github.com/nocobase/nocobase/pull/7226)) von @zhangzhonghe
- **[Workflow]** Vergleich für Datumswerte kompatibel gemacht ([#7237](https://github.com/nocobase/nocobase/pull/7237)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Client]**
  - Stilregeln funktionieren nicht in der Tabellenaktionsspalte ([#7225](https://github.com/nocobase/nocobase/pull/7225)) von @katherinehhh
  - Vermeidung der Auswahl von Nicht-Assoziationsfeldern in appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) von @mytharcher
  - Fehler behoben: Kann 'react-device-detect' nicht auflösen ([#7224](https://github.com/nocobase/nocobase/pull/7224)) von @zhangzhonghe
  - Beim Löschen eines Menüs werden die entsprechenden Daten in der uiSchemas-Tabelle nicht gelöscht ([#7232](https://github.com/nocobase/nocobase/pull/7232)) von @zhangzhonghe
- **[Datenbank]** Fehler beim Aktivieren der einfachen Paginierung für externe Datenquellentabellen behoben ([#7222](https://github.com/nocobase/nocobase/pull/7222)) von @aaaaaajie
- **[Sammlungsfeld: Sortierung]** Fehlende Sortierfeldauswahl beim Duplizieren von Datensätzen ([#7116](https://github.com/nocobase/nocobase/pull/7116)) von @katherinehhh
- **[Workflow: Unterworkflow]** Fehler behoben, der ausgelöst wird, wenn ein Rückrufsignal eintrifft, die ausstehende Ausführung jedoch nicht auf der aktuellen Instanz erfolgt von @mytharcher
- **[Workflow: Genehmigung]**
  - Mehrere Assoziationsebenen beim Einreichen der Genehmigung behoben von @mytharcher
  - Fehlertoleranz für gelöschte Genehmigungen in der Datensatzliste hinzugefügt von @mytharcher
- **[E-Mail-Manager]** Optimierte Leistung der E-Mail-Nachrichtenliste von @jiannx
