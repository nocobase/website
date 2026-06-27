---
title: "NocoBase wöchentliche Updates: Optimierungen und Fehlerbehebungen"
description: "Die Updates dieser Woche umfassen: Unterstützung für die Konfiguration unabhängiger Authentifizierungsgeheimnisse für Unter-Apps und die Hinzufügung eines CC-Knotens zu Workflows."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.6](https://www.nocobase.com/en/blog/v1.8.6)

*Veröffentlichungsdatum: 2025-07-16*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Fehler behoben: Kann 'react-device-detect' nicht auflösen ([#7224](https://github.com/nocobase/nocobase/pull/7224)) von @zhangzhonghe
  - Anzeigeproblem für Assoziationsfelder in Verknüpfungsregeln ([#7220](https://github.com/nocobase/nocobase/pull/7220)) von @katherinehhh
- **[database]** Fehler beim Aktivieren der einfachen Paginierung für Tabellen externer Datenquellen behoben ([#7222](https://github.com/nocobase/nocobase/pull/7222)) von @aaaaaajie
- **[Sammlungsfeld: Sortierung]** Fehlende Sortierfeldauswahl beim Duplizieren von Datensätzen ([#7116](https://github.com/nocobase/nocobase/pull/7116)) von @katherinehhh
- **[Workflow: Genehmigung]**

  - Fehlertoleranz für gelöschte Genehmigungen in der Datensatzliste hinzugefügt von @mytharcher
  - Mehrstufige Assoziationen bei der Genehmigungseinreichung behoben von @mytharcher
  - Ausnahme beim Löschen von Datensätzen behoben von @mytharcher

### [v1.8.5](https://www.nocobase.com/en/blog/v1.8.5)

*Veröffentlichungsdatum: 2025-07-14*

#### 🚀 Verbesserungen

- **[Sammlungsfeld: Formel]** Weitere berechenbare Schnittstellen hinzugefügt ([#7215](https://github.com/nocobase/nocobase/pull/7215)) von @mytharcher
- **[Workflow]** Protokollierung anstelle von Fehlerwurf verwendet, wenn die Ausführung aufgrund des Status nicht ausgeführt werden soll ([#7217](https://github.com/nocobase/nocobase/pull/7217)) von @mytharcher
- **[Workflow: Genehmigung]** Unterstützung zum Löschen von Genehmigungen beim Löschen zugehöriger Daten von @mytharcher

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem, bei dem Anhangsfelder nicht als Variablen in Verknüpfungsregeln ausgewählt werden konnten ([#7213](https://github.com/nocobase/nocobase/pull/7213)) von @zhangzhonghe
  - Problem behoben, bei dem Dropdown-Auswahlkomponenten auf iOS durch die Tastatur blockiert wurden ([#7149](https://github.com/nocobase/nocobase/pull/7149)) von @zhangzhonghe
  - Wertzuweisung im Bearbeitungsformular schlägt fehl, wenn sowohl Wert als auch Optionen für ein Auswahlfeld festgelegt sind ([#7209](https://github.com/nocobase/nocobase/pull/7209)) von @katherinehhh
  - Filter zusammenklappen: Filter wird bei Seiteninitialisierung nach dem Setzen von Standardwerten für Felder nicht ausgelöst ([#7206](https://github.com/nocobase/nocobase/pull/7206)) von @zhangzhonghe
  - Fehler beim Zuweisen von Werten im Listenblock unter Verwendung des Kanban-Sortierfelds ([#7208](https://github.com/nocobase/nocobase/pull/7208)) von @katherinehhh
  - Browser-Tab-Titel wird beim Wechseln zwischen Untermenüs nicht synchronisiert ([#7207](https://github.com/nocobase/nocobase/pull/7207)) von @zhangzhonghe
  - Popup-Aktion: Seitenanzeige entspricht nach dem Wechseln von Tabs nicht den Erwartungen ([#7212](https://github.com/nocobase/nocobase/pull/7212)) von @zhangzhonghe
- **[acl]** Fehler beim Löschen einer Rolle im Rollenvereinigungsmodus, die die Root-Rolle enthält, behoben. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) von @aaaaaajie
- **[Multi-App-Manager]** Authentifizierungsoptionen an unerwarteter Position behoben ([#7210](https://github.com/nocobase/nocobase/pull/7210)) von @mytharcher
- **[Authentifizierung]** Problem behoben, bei dem die Anmeldeseite nicht scrollbar war ([#7159](https://github.com/nocobase/nocobase/pull/7159)) von @zhangzhonghe
- **[Workflow: Genehmigung]** Assoziationen bei der Genehmigungseinreichung behoben von @mytharcher

### [v1.8.4](https://www.nocobase.com/en/blog/v1.8.4)

*Veröffentlichungsdatum: 2025-07-13*

#### 🎉 Neue Funktionen

- **[Multi-App-Manager]** Unterstützung zur Konfiguration eines unabhängigen Authentifizierungs-Geheimnisses für Unter-Apps ([#7197](https://github.com/nocobase/nocobase/pull/7197)) von @mytharcher
- **[Workflow: CC]** CC-Knoten zum Workflow hinzugefügt ([#7201](https://github.com/nocobase/nocobase/pull/7201)) von @mytharcher

#### 🚀 Verbesserungen

- **[Benachrichtigung: In-App-Nachricht]** Schriftgröße für mobile Nachrichtenseite optimiert ([#7199](https://github.com/nocobase/nocobase/pull/7199)) von @zhangzhonghe
- **[Auth: DingTalk]** Unterstützung zur Konfiguration des Protokolls und der Portnummer der Callback-URL von @2013xile

#### 🐛 Fehlerbehebungen

- **[Benachrichtigung: In-App-Nachricht]** BigInt-Zeitstempel im String-Format verursacht dayjs-Problem behoben ([#7196](https://github.com/nocobase/nocobase/pull/7196)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Fehler vermeiden, wenn Benutzer nicht existiert von @mytharcher
  - Assoziation beim Datensatz neu laden von @mytharcher
  - `try/catch` in der Migration beim Aktualisieren des UI-Schemas hinzugefügt von @mytharcher

### [v1.8.3](https://www.nocobase.com/en/blog/v1.8.3)

*Veröffentlichungsdatum: 2025-07-11*

#### 🚀 Verbesserungen

- **[Multi-App-Manager]** Datenbank- und Autorisierungsoptionen für Unter-App hinzugefügt ([#7184](https://github.com/nocobase/nocobase/pull/7184)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Aktion: Benutzerdefinierte Anfrage]** Problem mit der Variablenanalyse in der URL während der Routennavigation nach erfolgreicher benutzerdefinierter Anfrage ([#7186](https://github.com/nocobase/nocobase/pull/7186)) von @katherinehhh

### [v1.8.2](https://www.nocobase.com/en/blog/v1.8.2)

*Veröffentlichungsdatum: 2025-07-10*

#### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Initialisierer für Trigger hinzugefügt von @mytharcher

#### 🚀 Verbesserungen

- **[Multi-App-Manager]** Datenbank- und Autorisierungsoptionen für Unter-App hinzugefügt ([#7184](https://github.com/nocobase/nocobase/pull/7184)) von @mytharcher
- **[Workflow]** Operanden vor dem String-Vergleich in der Logikberechnung in String konvertieren ([#7190](https://github.com/nocobase/nocobase/pull/7190)) von @mytharcher
- **[Sammlungsfeld: Code]** Einrückungseinstellung hinzugefügt von @mytharcher

#### 🐛 Fehlerbehebungen

- **[database]** Problem behoben, bei dem Felder von Ansichten nicht in Blöcken angezeigt wurden. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) von @aaaaaajie
- **[Block: Kanban]** UI-Probleme der Untertabelle in Kanban behoben und Unterstützung für die Kanban-Spaltenbreiteneinstellung hinzugefügt ([#7189](https://github.com/nocobase/nocobase/pull/7189)) von @katherinehhh
- **[Workflow: Genehmigung]** Block- und Assoziationsfehler behoben von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.3](https://www.nocobase.com/en/blog/v1.9.0-beta.3)

*Veröffentlichungsdatum: 2025-07-14*

#### 🎉 Neue Funktionen

- **[Multi-App-Manager]** Unterstützung zur Konfiguration eines unabhängigen Authentifizierungs-Geheimnisses für Unter-Apps ([#7197](https://github.com/nocobase/nocobase/pull/7197)) von @mytharcher
- **[Workflow: CC]** CC-Knoten zum Workflow hinzugefügt ([#7201](https://github.com/nocobase/nocobase/pull/7201)) von @mytharcher
- **[Workflow: Genehmigung]** Initialisierer für Trigger hinzugefügt von @mytharcher

#### 🚀 Verbesserungen

- **[Benachrichtigung: In-App-Nachricht]** Schriftgröße für mobile Nachrichtenseite optimiert ([#7199](https://github.com/nocobase/nocobase/pull/7199)) von @zhangzhonghe
- **[Workflow]** Operanden vor dem String-Vergleich in der Logikberechnung in String konvertieren ([#7190](https://github.com/nocobase/nocobase/pull/7190)) von @mytharcher
- **[Multi-App-Manager]**

  - Datenbank- und Autorisierungsoptionen für Unter-App hinzugefügt ([#7184](https://github.com/nocobase/nocobase/pull/7184)) von @mytharcher
  - Datenbank- und Autorisierungsoptionen für Unter-App hinzugefügt ([#7184](https://github.com/nocobase/nocobase/pull/7184)) von @mytharcher
- **[Sammlungsfeld: Code]** Einrückungseinstellung hinzugefügt von @mytharcher
- **[Auth: DingTalk]** Unterstützung zur Konfiguration des Protokolls und der Portnummer der Callback-URL von @2013xile

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem, bei dem Anhangsfelder nicht als Variablen in Verknüpfungsregeln ausgewählt werden konnten ([#7213](https://github.com/nocobase/nocobase/pull/7213)) von @zhangzhonghe
  - Fehler beim Zuweisen von Werten im Listenblock unter Verwendung des Kanban-Sortierfelds ([#7208](https://github.com/nocobase/nocobase/pull/7208)) von @katherinehhh
  - Filter zusammenklappen: Filter wird bei Seiteninitialisierung nach dem Setzen von Standardwerten für Felder nicht ausgelöst ([#7206](https://github.com/nocobase/nocobase/pull/7206)) von @zhangzhonghe
  - Wertzuweisung im Bearbeitungsformular schlägt fehl, wenn sowohl Wert als auch Optionen für ein Auswahlfeld festgelegt sind ([#7209](https://github.com/nocobase/nocobase/pull/7209)) von @katherinehhh
  - Popup-Aktion: Seitenanzeige entspricht nach dem Wechseln von Tabs nicht den Erwartungen ([#7212](https://github.com/nocobase/nocobase/pull/7212)) von @zhangzhonghe
  - Browser-Tab-Titel wird beim Wechseln zwischen Untermenüs nicht synchronisiert ([#7207](https://github.com/nocobase/nocobase/pull/7207)) von @zhangzhonghe
  - Problem behoben, bei dem Dropdown-Auswahlkomponenten auf iOS durch die Tastatur blockiert wurden ([#7149](https://github.com/nocobase/nocobase/pull/7149)) von @zhangzhonghe
- **[acl]** Fehler beim Löschen einer Rolle im Rollenvereinigungsmodus, die die Root-Rolle enthält, behoben. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) von @aaaaaajie
- **[Authentifizierung]** Problem behoben, bei dem die Anmeldeseite nicht scrollbar war ([#7159](https://github.com/nocobase/nocobase/pull/7159)) von @zhangzhonghe
- **[Multi-App-Manager]** Authentifizierungsoptionen an unerwarteter Position behoben ([#7210](https://github.com/nocobase/nocobase/pull/7210)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** BigInt-Zeitstempel im String-Format verursacht dayjs-Problem behoben ([#7196](https://github.com/nocobase/nocobase/pull/7196)) von @mytharcher
- **[Aktion: Benutzerdefinierte Anfrage]** Problem mit der Variablenanalyse in der URL während der Routennavigation nach erfolgreicher benutzerdefinierter Anfrage ([#7186](https://github.com/nocobase/nocobase/pull/7186)) von @katherinehhh
- **[Block: Kanban]** UI-Probleme der Untertabelle in Kanban behoben und Unterstützung für die Kanban-Spaltenbreiteneinstellung hinzugefügt ([#7189](https://github.com/nocobase/nocobase/pull/7189)) von @katherinehhh
- **[Workflow: Genehmigung]**

  - `try/catch` in der Migration beim Aktualisieren des UI-Schemas hinzugefügt von @mytharcher
  - Block- und Assoziationsfehler behoben von @mytharcher
  - Assoziation beim Datensatz neu laden von @mytharcher
  - Fehler vermeiden, wenn Benutzer nicht existiert von @mytharcher

### [v1.9.0-beta.2](https://www.nocobase.com/en/blog/v1.9.0-beta.2)

*Veröffentlichungsdatum: 2025-07-10*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Die Anzeige des Kontrollkästchenfelds ist in der Assoziationsfeldsammlung innerhalb des Formulars falsch ([#7176](https://github.com/nocobase/nocobase/pull/7176)) von @zhangzhonghe
  - Problem behoben, bei dem durch Klicken auf Schaltflächen keine Popups geöffnet werden konnten ([#7180](https://github.com/nocobase/nocobase/pull/7180)) von @zhangzhonghe
- **[database]** Problem behoben, bei dem Felder von Ansichten nicht in Blöcken angezeigt wurden. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) von @aaaaaajie
- **[Workflow: Manueller Knoten]** Fehler bei Verwendung einer Variable behoben ([#7177](https://github.com/nocobase/nocobase/pull/7177)) von @mytharcher
- **[Vorlagendruck]** Migrationsskript zum rootDataType-Feld hinzugefügt von @jiannx
- **[Workflow: Genehmigung]** Problem behoben, dass der genehmigte Zweig nicht ausgeführt wurde, wenn kein Bearbeiter vorhanden war von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.2](https://www.nocobase.com/en/blog/v1.9.0-alpha.2)

*Veröffentlichungsdatum: 2025-07-15*

#### 🎉 Neue Funktionen

- **[Multi-App-Manager]** Unterstützung zur Konfiguration eines unabhängigen Authentifizierungs-Geheimnisses für Unter-Apps ([#7197](https://github.com/nocobase/nocobase/pull/7197)) von @mytharcher
- **[Workflow: CC]** CC-Knoten zum Workflow hinzugefügt ([#7201](https://github.com/nocobase/nocobase/pull/7201)) von @mytharcher
- **[Workflow: Genehmigung]** Initialisierer für Trigger hinzugefügt von @mytharcher

#### 🚀 Verbesserungen

- **[Sammlungsfeld: Formel]** Weitere berechenbare Schnittstellen hinzugefügt ([#7215](https://github.com/nocobase/nocobase/pull/7215)) von @mytharcher
- **[Workflow]**

  - Protokollierung anstelle von Fehlerwurf verwendet, wenn die Ausführung aufgrund des Status nicht ausgeführt werden soll ([#7217](https://github.com/nocobase/nocobase/pull/7217)) von @mytharcher
  - Operanden vor dem String-Vergleich in der Logikberechnung in String konvertieren ([#7190](https://github.com/nocobase/nocobase/pull/7190)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** Schriftgröße für mobile Nachrichtenseite optimiert ([#7199](https://github.com/nocobase/nocobase/pull/7199)) von @zhangzhonghe
- **[Multi-App-Manager]**

  - Datenbank- und Autorisierungsoptionen für Unter-App hinzugefügt ([#7184](https://github.com/nocobase/nocobase/pull/7184)) von @mytharcher
  - Datenbank- und Autorisierungsoptionen für Unter-App hinzugefügt ([#7184](https://github.com/nocobase/nocobase/pull/7184)) von @mytharcher
- **[Sammlungsfeld: Code]** Einrückungseinstellung hinzugefügt von @mytharcher
- **[Workflow: Genehmigung]** Unterstützung zum Löschen von Genehmigungen beim Löschen zugehöriger Daten von @mytharcher
- **[Auth: DingTalk]** Unterstützung zur Konfiguration des Protokolls und der Portnummer der Callback-URL von @2013xile

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem, bei dem Anhangsfelder nicht als Variablen in Verknüpfungsregeln ausgewählt werden konnten ([#7213](https://github.com/nocobase/nocobase/pull/7213)) von @zhangzhonghe
  - Filter zusammenklappen: Filter wird bei Seiteninitialisierung nach dem Setzen von Standardwerten für Felder nicht ausgelöst ([#7206](https://github.com/nocobase/nocobase/pull/7206)) von @zhangzhonghe
  - Anzeigeproblem für Assoziationsfelder in Verknüpfungsregeln ([#7220](https://github.com/nocobase/nocobase/pull/7220)) von @katherinehhh
  - Wertzuweisung im Bearbeitungsformular schlägt fehl, wenn sowohl Wert als auch Optionen für ein Auswahlfeld festgelegt sind ([#7209](https://github.com/nocobase/nocobase/pull/7209)) von @katherinehhh
  - Fehler beim Zuweisen von Werten im Listenblock unter Verwendung des Kanban-Sortierfelds ([#7208](https://github.com/nocobase/nocobase/pull/7208)) von @katherinehhh
  - Popup-Aktion: Seitenanzeige entspricht nach dem Wechseln von Tabs nicht den Erwartungen ([#7212](https://github.com/nocobase/nocobase/pull/7212)) von @zhangzhonghe
  - Browser-Tab-Titel wird beim Wechseln zwischen Untermenüs nicht synchronisiert ([#7207](https://github.com/nocobase/nocobase/pull/7207)) von @zhangzhonghe
  - Problem behoben, bei dem Dropdown-Auswahlkomponenten auf iOS durch die Tastatur blockiert wurden ([#7149](https://github.com/nocobase/nocobase/pull/7149)) von @zhangzhonghe
  - Die Anzeige des Kontrollkästchenfelds ist in der Assoziationsfeldsammlung innerhalb des Formulars falsch ([#7176](https://github.com/nocobase/nocobase/pull/7176)) von @zhangzhonghe
  - Problem behoben, bei dem durch Klicken auf Schaltflächen keine Popups geöffnet werden konnten ([#7180](https://github.com/nocobase/nocobase/pull/7180)) von @zhangzhonghe
- **[acl]** Fehler beim Löschen einer Rolle im Rollenvereinigungsmodus, die die Root-Rolle enthält, behoben. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) von @aaaaaajie
- **[database]** Problem behoben, bei dem Felder von Ansichten nicht in Blöcken angezeigt wurden. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) von @aaaaaajie
- **[Multi-App-Manager]** Authentifizierungsoptionen an unerwarteter Position behoben ([#7210](https://github.com/nocobase/nocobase/pull/7210)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** BigInt-Zeitstempel im String-Format verursacht dayjs-Problem behoben ([#7196](https://github.com/nocobase/nocobase/pull/7196)) von @mytharcher
- **[Authentifizierung]** Problem behoben, bei dem die Anmeldeseite nicht scrollbar war ([#7159](https://github.com/nocobase/nocobase/pull/7159)) von @zhangzhonghe
- **[Aktion: Benutzerdefinierte Anfrage]** Problem mit der Variablenanalyse in der URL während der Routennavigation nach erfolgreicher benutzerdefinierter Anfrage ([#7186](https://github.com/nocobase/nocobase/pull/7186)) von @katherinehhh
- **[Block: Kanban]** UI-Probleme der Untertabelle in Kanban behoben und Unterstützung für die Kanban-Spaltenbreiteneinstellung hinzugefügt ([#7189](https://github.com/nocobase/nocobase/pull/7189)) von @katherinehhh
- **[Workflow: Manueller Knoten]** Fehler bei Verwendung einer Variable behoben ([#7177](https://github.com/nocobase/nocobase/pull/7177)) von @mytharcher
- **[Vorlagendruck]** Migrationsskript zum rootDataType-Feld hinzugefügt von @jiannx
- **[Workflow: Genehmigung]**

  - Assoziationen bei der Genehmigungseinreichung behoben von @mytharcher
  - Ausnahme beim Löschen von Datensätzen behoben von @mytharcher
  - Problem behoben, dass der genehmigte Zweig nicht ausgeführt wurde, wenn kein Bearbeiter vorhanden war von @mytharcher
  - Fehler vermeiden, wenn Benutzer nicht existiert von @mytharcher
  - Block- und Assoziationsfehler behoben von @mytharcher
  - `try/catch` in der Migration beim Aktualisieren des UI-Schemas hinzugefügt von @mytharcher
  - Assoziation beim Datensatz neu laden von @mytharcher
