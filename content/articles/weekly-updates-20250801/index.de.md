---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: Unterstützung für die Konfiguration des Limits der Anfragekörpergröße über Umgebungsvariablen, Unterstützung für die Vorschau von Office-Dateien über Microsoft Live Preview und weitere Verbesserungen."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.11](https://www.nocobase.com/en/blog/v1.8.11)

*Veröffentlichungsdatum: 2025-07-31*

#### 🎉 Neue Funktionen

- **[Office-Datei-Vorschau]** Unterstützung für die Vorschau von Office-Dateien über die Microsoft-Live-Vorschau ([#7300](https://github.com/nocobase/nocobase/pull/7300)) von @mytharcher

#### 🚀 Verbesserungen

- **[client]** Menü nach Auswahl nicht automatisch schließen ([#7252](https://github.com/nocobase/nocobase/pull/7252)) von @kerwin612
- **[Benachrichtigung: In-App-Nachricht]** In-App-Nachricht von SSE auf WebSocket umgestellt ([#7302](https://github.com/nocobase/nocobase/pull/7302)) von @mytharcher
- **[Workflow]** Anzahl der zu ladenden Jobs bei der Vorbereitung der Ausführung reduziert ([#7284](https://github.com/nocobase/nocobase/pull/7284)) von @mytharcher
- **[Auth: DingTalk]** Im DingTalk-Client wird der Titel der Navigationsleiste auf einen leeren String gesetzt, anstatt „Lädt…“ anzuzeigen von @2013xile

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem eine Baumtabelle nicht erweitert werden konnte ([#7309](https://github.com/nocobase/nocobase/pull/7309)) von @zhangzhonghe
  - Unerwartetes Verhalten beim Drag-and-Drop-Sortieren von Tabellenzeilen behoben ([#6959](https://github.com/nocobase/nocobase/pull/6959)) von @ChimingLiu
  - Endlosschleifenproblem beim Parsen von Feldstandardwerten behoben ([#7301](https://github.com/nocobase/nocobase/pull/7301)) von @zhangzhonghe
  - Problem behoben, bei dem die Datumsfeldanzeige im Popup des Datenauswahlfensters für die Konfiguration von Beziehungsfeldern im Filterformular fehlerhaft war ([#7290](https://github.com/nocobase/nocobase/pull/7290)) von @katherinehhh
- **[Workflow: HTTP-Anfrage-Knoten]** Wettlaufsituation (Racing Condition) behoben ([#7310](https://github.com/nocobase/nocobase/pull/7310)) von @mytharcher
- **[Workflow]** BigInt-ID-Problem in MySQL beim Speichern von Jobs behoben ([#7292](https://github.com/nocobase/nocobase/pull/7292)) von @mytharcher
- **[Aktion: Datensätze exportieren]** Falsche Formatierung von verschachtelten Beziehungsfeldern beim Export nach Excel behoben. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) von @aaaaaajie
- **[Datenquelle: Externer SQL Server]** Inkonsistentes Speicherformat für MSSQL-Datetime-Felder (ohne Zeitzone) aus externen Datenquellen behoben von @aaaaaajie
- **[Workflow: Genehmigung]** Fehler behoben, der bei der Auswahl von Bearbeitern innerhalb einer externen Datenquelle ausgelöst wurde von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.4](https://www.nocobase.com/en/blog/v1.9.0-alpha.4)

*Veröffentlichungsdatum: 2025-08-01*

#### 🎉 Neue Funktionen

- **[server]** Unterstützung für die Konfiguration des Limits der Anfragekörpergröße über Umgebungsvariablen ([#7273](https://github.com/nocobase/nocobase/pull/7273)) von @aaaaaajie
- **[client]** Tabellenblöcke unterstützen das Hinzufügen einer Schaltfläche „Spalteneinstellungen“ zum Konfigurieren der Spaltenreihenfolge und -sichtbarkeit ([#7204](https://github.com/nocobase/nocobase/pull/7204)) von @kerwin612
- **[Office-Datei-Vorschau]** Unterstützung für die Vorschau von Office-Dateien über die Microsoft-Live-Vorschau ([#7300](https://github.com/nocobase/nocobase/pull/7300)) von @mytharcher
- **[Datenquelle: Hauptdatenquelle]**

  - Unterstützung zum Lesen von Tabellen aus der Hauptdatenquelle ([#7238](https://github.com/nocobase/nocobase/pull/7238)) von @aaaaaajie
- **[Workflow: Paralleler Knoten]** Modus „Alle abgeschlossen“ für parallele Knoten hinzugefügt ([#7263](https://github.com/nocobase/nocobase/pull/7263)) von @mytharcher
- **[Auth: SAML 2.0]** Unterstützung für automatische Weiterleitung zur SSO-URL, wenn der Benutzer nicht authentifiziert ist von @2013xile
- **[Redis-Warteschlangenadapter]** Redis-Adapter für Ereigniswarteschlange hinzugefügt von @mytharcher

#### 🚀 Verbesserungen

- **[client]** Menü nach Auswahl nicht automatisch schließen ([#7252](https://github.com/nocobase/nocobase/pull/7252)) von @kerwin612
- **[server]** Gleichzeitige Speicherwarteschlange verfügbar machen, wenn Elemente nicht vollständig verarbeitet werden ([#7267](https://github.com/nocobase/nocobase/pull/7267)) von @mytharcher
- **[database]** Aktiviert automatisch einfache Paginierung, wenn der Datensatz einen Schwellenwert überschreitet ([#7227](https://github.com/nocobase/nocobase/pull/7227)) von @aaaaaajie
- **[Benachrichtigung: In-App-Nachricht]** In-App-Nachricht von SSE auf WebSocket umgestellt ([#7302](https://github.com/nocobase/nocobase/pull/7302)) von @mytharcher
- **[Workflow]**

  - Anzahl der zu ladenden Jobs bei der Vorbereitung der Ausführung reduziert ([#7284](https://github.com/nocobase/nocobase/pull/7284)) von @mytharcher
  - JSON-Typkonstante für Testvariable hinzugefügt ([#7274](https://github.com/nocobase/nocobase/pull/7274)) von @mytharcher
- **[KI-Integration]** `await` für den Aufruf von `saveJob` entfernt ([#7275](https://github.com/nocobase/nocobase/pull/7275)) von @mytharcher
- **[Workflow: Manueller Knoten]** storePopupContext unterstützt das Speichern des Standardkontexts ([#7264](https://github.com/nocobase/nocobase/pull/7264)) von @zhangzhonghe
- **[Workflow: JSON-Berechnung]** JSON-Abfrageknoten testbar gemacht von @mytharcher
- **[Redis-Warteschlangenadapter]** Gleichzeitige Warteschlange verfügbar machen, wenn Elemente nicht vollständig verarbeitet werden, für den Redis-Adapter von @mytharcher
- **[Auth: DingTalk]** Im DingTalk-Client wird der Titel der Navigationsleiste auf einen leeren String gesetzt, anstatt „Lädt…“ anzuzeigen von @2013xile

#### 🐛 Fehlerbehebungen

- **[utils]** Falsche Zeitzonenbehandlung für parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) von @katherinehhh
- **[client]**

  - Dateivorschau-Element bei null-URL behoben ([#7315](https://github.com/nocobase/nocobase/pull/7315)) von @mytharcher
  - Vollständige URL zu lokaler Datei bei der Vorschau hinzugefügt ([#7314](https://github.com/nocobase/nocobase/pull/7314)) von @mytharcher
  - Problem behoben, bei dem eine Baumtabelle nicht erweitert werden konnte ([#7309](https://github.com/nocobase/nocobase/pull/7309)) von @zhangzhonghe
  - Unerwartetes Verhalten beim Drag-and-Drop-Sortieren von Tabellenzeilen behoben ([#6959](https://github.com/nocobase/nocobase/pull/6959)) von @ChimingLiu
  - Endlosschleifenproblem beim Parsen von Feldstandardwerten behoben ([#7301](https://github.com/nocobase/nocobase/pull/7301)) von @zhangzhonghe
  - Problem mit der Datumsfeldanzeige im Popup des Datenauswahlfensters für Beziehungsfelder im Filterformular behoben ([#7290](https://github.com/nocobase/nocobase/pull/7290)) von @katherinehhh
  - Fuzzy-Suche funktioniert nicht im Auswahl-Beziehungsfeld bei Verwendung einer Formel als Titelfeld ([#7280](https://github.com/nocobase/nocobase/pull/7280)) von @katherinehhh
  - Fehlende aktuelle Objektvariable in den Verknüpfungsregeln von Untertabellen ([#7266](https://github.com/nocobase/nocobase/pull/7266)) von @katherinehhh
  - Problem behoben, bei dem Markdown-Felder in der Detailansicht nicht korrekt gerendert wurden. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) von @aaaaaajie
  - Nach Feldänderungen wurden die von diesem Feld abhängigen Beziehungsfelder nicht geleert ([#7262](https://github.com/nocobase/nocobase/pull/7262)) von @zhangzhonghe
  - Anzeigeproblem bei Verwendung veralteter Datumsvariablen in Datumsfeldern historischer Daten ([#7253](https://github.com/nocobase/nocobase/pull/7253)) von @katherinehhh
  - Einstellung des Titelfelds im Datenauswahlfenster ist ungültig ([#7251](https://github.com/nocobase/nocobase/pull/7251)) von @zhangzhonghe
- **[database]**

  - Fehler bei der automatischen einfachen Paginierung aufgrund der Tabellenbenennungskonvention behoben. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) von @aaaaaajie
  - Fehler beim Exportieren großer Datensätze aus PostgreSQL behoben ([#7228](https://github.com/nocobase/nocobase/pull/7228)) von @aaaaaajie
  - Problem behoben, bei dem die Standardsortierung nach Primärschlüssel zu einem Ladefehler der Liste führt, wenn eine MSSQL-externe Datenquelle in einem Tabellenblock verwendet wird. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) von @aaaaaajie
- **[auth]** Problem behoben, bei dem ein leeres `secret` in der Unteranwendungskonfiguration die Anmeldung verhindert ([#7239](https://github.com/nocobase/nocobase/pull/7239)) von @2013xile
- **[Dateimanager]** Berechtigung für Speicherfeld behoben ([#7316](https://github.com/nocobase/nocobase/pull/7316)) von @mytharcher
- **[Workflow]**

  - Problem mit `undefined`-Ergebnis beim Beenden des Prozessors behoben ([#7317](https://github.com/nocobase/nocobase/pull/7317)) von @mytharcher
  - BigInt-ID-Problem in MySQL beim Speichern von Jobs behoben ([#7292](https://github.com/nocobase/nocobase/pull/7292)) von @mytharcher
  - Falsche Version einer Abhängigkeit behoben ([#7258](https://github.com/nocobase/nocobase/pull/7258)) von @mytharcher
- **[Workflow: HTTP-Anfrage-Knoten]** Wettlaufsituation (Racing Condition) behoben ([#7310](https://github.com/nocobase/nocobase/pull/7310)) von @mytharcher
- **[Aktion: Datensätze exportieren]** Falsche Formatierung von verschachtelten Beziehungsfeldern beim Export nach Excel behoben. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) von @aaaaaajie
- **[Datenquellen-Manager]** Problem behoben, bei dem Attribute externer Datenquellen in der Sammlungskonfiguration erhalten blieben ([#7249](https://github.com/nocobase/nocobase/pull/7249)) von @aaaaaajie
- **[Aktion: Stapelbearbeitung]** Stapelbearbeitung und Stapelaktualisierung im Datenauswahlfenster nicht möglich ([#7250](https://github.com/nocobase/nocobase/pull/7250)) von @zhangzhonghe
- **[Datenquelle: Externes Oracle]** Problem behoben, bei dem Attribute externer Datenquellen in der Sammlungskonfiguration erhalten blieben von @aaaaaajie
- **[Datenquelle: Externer SQL Server]** Inkonsistentes Speicherformat für MSSQL-Datetime-Felder (ohne Zeitzone) aus externen Datenquellen behoben von @aaaaaajie
- **[Workflow: Unterworkflow]** Problem behoben, bei dem der Workflow angehalten wurde von @mytharcher
- **[Workflow: Genehmigung]**

  - Fehler behoben, der bei der Auswahl von Bearbeitern innerhalb einer externen Datenquelle ausgelöst wurde von @mytharcher
  - Die URL des Link-Buttons zeigt auf ein Popup auf der aktuellen Seite, aber beim Klicken wird ein 404-Fehler angezeigt von @zhangzhonghe
- **[E-Mail-Manager]**

  - rawId-Feld zur Leistungsoptimierung hinzugefügt von @jiannx
  - ref-Attribut in HTML verursacht Rendering-Ausnahme von @jiannx
  - Die Beziehungssammlung von Nachrichten und Labels ist unter MySQL fehlerhaft von @jiannx
