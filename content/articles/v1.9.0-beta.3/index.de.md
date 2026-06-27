---
title: "NocoBase v1.9.0-beta.3: Unterstützung zur Konfiguration unabhängiger Authentifizierungsgeheimnisse für Unter-Apps"
description: "Versionshinweise zu v1.9.0-beta.3"
---

### 🎉 Neue Funktionen

- **[Multi-App-Manager]** Unterstützung für die Konfiguration eines unabhängigen Authentifizierungs-Secrets für Sub-Apps ([#7197](https://github.com/nocobase/nocobase/pull/7197)) von @mytharcher

- **[Workflow: CC]** CC-Knoten zum Workflow hinzugefügt ([#7201](https://github.com/nocobase/nocobase/pull/7201)) von @mytharcher

- **[Workflow: Genehmigung]** Initialisierer für Trigger hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Benachrichtigung: In-App-Nachricht]** Schriftgröße für die mobile Nachrichtenseite optimiert ([#7199](https://github.com/nocobase/nocobase/pull/7199)) von @zhangzhonghe

- **[Workflow]** Operanden vor dem String-Vergleich in der Logikberechnung in Strings umwandeln ([#7190](https://github.com/nocobase/nocobase/pull/7190)) von @mytharcher

- **[Multi-App-Manager]**
  - Datenbank- und Autorisierungsoptionen für Sub-Apps hinzugefügt ([#7184](https://github.com/nocobase/nocobase/pull/7184)) von @mytharcher

  - Datenbank- und Autorisierungsoptionen für Sub-Apps hinzugefügt ([#7184](https://github.com/nocobase/nocobase/pull/7184)) von @mytharcher

- **[Sammlungsfeld: Code]** Einrückungseinstellung hinzugefügt von @mytharcher

- **[Auth: DingTalk]** Unterstützung für die Konfiguration des Protokolls und der Portnummer der Callback-URL von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem, bei dem Anhangs-Felder nicht als Variablen in Verknüpfungsregeln ausgewählt werden konnten ([#7213](https://github.com/nocobase/nocobase/pull/7213)) von @zhangzhonghe

  - Fehler bei der Wertzuweisung im Listenblock bei Verwendung des Kanban-Sortierfelds ([#7208](https://github.com/nocobase/nocobase/pull/7208)) von @katherinehhh

  - Filter einklappen: Filter wird bei der Seiteninitialisierung nach dem Setzen von Standardwerten für Felder nicht ausgelöst ([#7206](https://github.com/nocobase/nocobase/pull/7206)) von @zhangzhonghe

  - Wertzuweisung im Bearbeitungsformular schlägt fehl, wenn sowohl Wert als auch Optionen für ein Auswahlfeld festgelegt sind ([#7209](https://github.com/nocobase/nocobase/pull/7209)) von @katherinehhh

  - Popup-Aktion: Seitenanzeige entspricht nicht den Erwartungen nach dem Wechseln von Tabs ([#7212](https://github.com/nocobase/nocobase/pull/7212)) von @zhangzhonghe

  - Browser-Tab-Titel wird beim Wechseln zwischen Untermenüs nicht synchronisiert ([#7207](https://github.com/nocobase/nocobase/pull/7207)) von @zhangzhonghe

  - Problem behoben, bei dem Dropdown-Auswahlkomponenten auf iOS durch die Tastatur blockiert werden ([#7149](https://github.com/nocobase/nocobase/pull/7149)) von @zhangzhonghe

- **[ACL]** Fehler beim Löschen einer Rolle im Rollen-Union-Modus behoben, der die Root-Rolle enthielt. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) von @aaaaaajie

- **[Authentifizierung]** Problem behoben, bei dem die Anmeldeseite nicht scrollbar war ([#7159](https://github.com/nocobase/nocobase/pull/7159)) von @zhangzhonghe

- **[Multi-App-Manager]** Auth-Optionen an unerwarteter Position behoben ([#7210](https://github.com/nocobase/nocobase/pull/7210)) von @mytharcher

- **[Benachrichtigung: In-App-Nachricht]** Problem mit BigInt-Zeitstempel im String-Format behoben, das dayjs betrifft ([#7196](https://github.com/nocobase/nocobase/pull/7196)) von @mytharcher

- **[Aktion: Benutzerdefinierte Anfrage]** Problem mit der Variablenanalyse in der URL während der Routennavigation nach erfolgreicher benutzerdefinierter Anfrage ([#7186](https://github.com/nocobase/nocobase/pull/7186)) von @katherinehhh

- **[Block: Kanban]** UI-Probleme mit Untertabellen in Kanban behoben und Unterstützung für die Kanban-Spaltenbreiteneinstellung hinzugefügt ([#7189](https://github.com/nocobase/nocobase/pull/7189)) von @katherinehhh

- **[Workflow: Genehmigung]**
  - `try/catch` in der Migration beim Aktualisieren des UI-Schemas hinzugefügt von @mytharcher

  - Fehler mit Blöcken und Verknüpfungen behoben von @mytharcher

  - Verknüpfung beim Datensatz neu laden von @mytharcher

  - Fehler vermeiden, wenn Benutzer nicht existiert von @mytharcher
