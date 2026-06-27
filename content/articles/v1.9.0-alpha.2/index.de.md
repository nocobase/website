---
title: "NocoBase v1.9.0-alpha.2: Unterstützung zur Konfiguration unabhängiger Authentifizierungsgeheimnisse für Unter-Apps"
description: "Versionshinweise zu v1.9.0-alpha.2"
---

### 🎉 Neue Funktionen

- **[Multi-App-Manager]** Unterstützung für die Konfiguration eines unabhängigen Authentifizierungs-Geheimnisses für Unter-Apps ([#7197](https://github.com/nocobase/nocobase/pull/7197)) von @mytharcher

- **[Workflow: CC]** CC-Knoten zum Workflow hinzugefügt ([#7201](https://github.com/nocobase/nocobase/pull/7201)) von @mytharcher

- **[Workflow: Genehmigung]** Initialisierer für Trigger hinzugefügt von @mytharcher

### 🚀 Verbesserungen

- **[Sammlungsfeld: Formel]** Weitere berechenbare Schnittstellen hinzugefügt ([#7215](https://github.com/nocobase/nocobase/pull/7215)) von @mytharcher

- **[Workflow]**
  - Verwende Protokollierung anstelle des Auslösens eines Fehlers, wenn die Ausführung aufgrund des Status nicht ausgeführt werden soll ([#7217](https://github.com/nocobase/nocobase/pull/7217)) von @mytharcher

  - Konvertiere Operanden vor dem String-Vergleich in der Logikberechnung in Strings ([#7190](https://github.com/nocobase/nocobase/pull/7190)) von @mytharcher

- **[Benachrichtigung: In-App-Nachricht]** Schriftgröße für die mobile Nachrichtenseite optimiert ([#7199](https://github.com/nocobase/nocobase/pull/7199)) von @zhangzhonghe

- **[Multi-App-Manager]**
  - Datenbank- und Autorisierungsoptionen für Unter-App hinzugefügt ([#7184](https://github.com/nocobase/nocobase/pull/7184)) von @mytharcher

  - Datenbank- und Autorisierungsoptionen für Unter-App hinzugefügt ([#7184](https://github.com/nocobase/nocobase/pull/7184)) von @mytharcher

- **[Sammlungsfeld: Code]** Einrückungseinstellung hinzugefügt von @mytharcher

- **[Workflow: Genehmigung]** Unterstützung zum Löschen der Genehmigung, wenn zugehörige Daten gelöscht werden von @mytharcher

- **[Auth: DingTalk]** Unterstützung für die Konfiguration des Protokolls und der Portnummer der Callback-URL von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem, bei dem Anhangsfelder nicht als Variablen in Verknüpfungsregeln ausgewählt werden konnten ([#7213](https://github.com/nocobase/nocobase/pull/7213)) von @zhangzhonghe

  - Filter zusammenklappen: Filter wird bei Seiteninitialisierung nach dem Setzen von Standardwerten für Felder nicht ausgelöst ([#7206](https://github.com/nocobase/nocobase/pull/7206)) von @zhangzhonghe

  - Anzeigeproblem für Assoziationsfelder in Verknüpfungsregeln ([#7220](https://github.com/nocobase/nocobase/pull/7220)) von @katherinehhh

  - Wertzuweisung schlägt im Bearbeitungsformular fehl, wenn sowohl Wert als auch Optionen für ein Auswahlfeld festgelegt sind ([#7209](https://github.com/nocobase/nocobase/pull/7209)) von @katherinehhh

  - Fehler bei der Wertzuweisung im Listenblock unter Verwendung des Kanban-Sortierfeldes ([#7208](https://github.com/nocobase/nocobase/pull/7208)) von @katherinehhh

  - Popup-Aktion: Seitenanzeige entspricht nicht den Erwartungen nach dem Wechseln von Tabs ([#7212](https://github.com/nocobase/nocobase/pull/7212)) von @zhangzhonghe

  - Browser-Tab-Titel wird beim Wechseln zwischen Untermenüs nicht synchronisiert ([#7207](https://github.com/nocobase/nocobase/pull/7207)) von @zhangzhonghe

  - Behebt das Problem, dass Dropdown-Auswahlkomponenten auf iOS durch die Tastatur blockiert werden ([#7149](https://github.com/nocobase/nocobase/pull/7149)) von @zhangzhonghe

  - Die Anzeige des Kontrollkästchenfeldes ist in der Assoziationsfeld-Sammlung innerhalb des Formulars falsch ([#7176](https://github.com/nocobase/nocobase/pull/7176)) von @zhangzhonghe

  - Behebt das Problem, dass durch Klicken auf Schaltflächen keine Popups geöffnet werden können ([#7180](https://github.com/nocobase/nocobase/pull/7180)) von @zhangzhonghe

- **[ACL]** Behebt einen Fehler beim Löschen einer Rolle im Rollenvereinigungsmodus, die die Root-Rolle enthält. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) von @aaaaaajie

- **[Datenbank]** Behebt ein Problem, bei dem Felder von Ansichten nicht in Blöcken angezeigt wurden. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) von @aaaaaajie

- **[Multi-App-Manager]** Behebt Authentifizierungsoptionen an unerwarteter Position ([#7210](https://github.com/nocobase/nocobase/pull/7210)) von @mytharcher

- **[Benachrichtigung: In-App-Nachricht]** Behebt, dass BigInt-Zeitstempel im String-Format ein dayjs-Problem verursachen ([#7196](https://github.com/nocobase/nocobase/pull/7196)) von @mytharcher

- **[Authentifizierung]** Behebt das Problem, dass die Anmeldeseite nicht scrollbar ist ([#7159](https://github.com/nocobase/nocobase/pull/7159)) von @zhangzhonghe

- **[Aktion: Benutzerdefinierte Anfrage]** Problem mit der Variablenanalyse in der URL während der Routennavigation nach erfolgreicher benutzerdefinierter Anfrage ([#7186](https://github.com/nocobase/nocobase/pull/7186)) von @katherinehhh

- **[Block: Kanban]** Behebt UI-Probleme der Untertabelle in Kanban und fügt Unterstützung für die Kanban-Spaltenbreiteneinstellung hinzu ([#7189](https://github.com/nocobase/nocobase/pull/7189)) von @katherinehhh

- **[Workflow: Manueller Knoten]** Behebt Fehler bei Verwendung einer Variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) von @mytharcher

- **[Vorlagendruck]** Migrationsskript zum rootDataType-Feld hinzugefügt von @jiannx

- **[Workflow: Genehmigung]**
  - Behebt Assoziationen beim Einreichen der Genehmigung von @mytharcher

  - Behebt Ausnahme beim Löschen eines Datensatzes von @mytharcher

  - Behebt, dass der genehmigte Zweig nicht ausgeführt wird, wenn kein Bearbeiter vorhanden ist von @mytharcher

  - Vermeidet Fehler, wenn Benutzer nicht existiert von @mytharcher

  - Behebt Block- und Assoziationsfehler von @mytharcher

  - Fügt `try/catch` in der Migration beim Aktualisieren des UI-Schemas hinzu von @mytharcher

  - Lädt Assoziationen beim Datensatz neu von @mytharcher
