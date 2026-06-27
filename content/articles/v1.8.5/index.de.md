---
title: "NocoBase v1.8.5: Weitere berechenbare Schnittstellen hinzugefügt"
description: "Versionshinweise zu v1.8.5"
---

### 🚀 Verbesserungen

- **[Sammlungsfeld: Formel]** Weitere berechenbare Schnittstellen hinzugefügt ([#7215](https://github.com/nocobase/nocobase/pull/7215)) von @mytharcher

- **[Workflow]** Verwende Protokollierung anstelle von Fehlerauslösung, wenn die Ausführung aufgrund des Status nicht ausgeführt werden soll ([#7217](https://github.com/nocobase/nocobase/pull/7217)) von @mytharcher

- **[Workflow: Genehmigung]** Unterstützung zum Löschen von Genehmigungen, wenn zugehörige Daten gelöscht werden, von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem, bei dem Anhangs-Felder nicht als Variablen in Verknüpfungsregeln ausgewählt werden konnten ([#7213](https://github.com/nocobase/nocobase/pull/7213)) von @zhangzhonghe

  - Behebt das Problem, dass Dropdown-Auswahlkomponenten auf iOS durch die Tastatur blockiert werden ([#7149](https://github.com/nocobase/nocobase/pull/7149)) von @zhangzhonghe

  - Wertzuweisung schlägt im Bearbeitungsformular fehl, wenn sowohl Wert als auch Optionen für ein Auswahlfeld festgelegt sind ([#7209](https://github.com/nocobase/nocobase/pull/7209)) von @katherinehhh

  - Filter zusammenklappen: Filter wird bei Seiteninitialisierung nach dem Setzen von Standardwerten für Felder nicht ausgelöst ([#7206](https://github.com/nocobase/nocobase/pull/7206)) von @zhangzhonghe

  - Fehler beim Zuweisen von Werten im Listenblock unter Verwendung des Kanban-Sortierfeldes ([#7208](https://github.com/nocobase/nocobase/pull/7208)) von @katherinehhh

  - Der Titel des Browser-Tabs wird beim Wechseln zwischen Untermenüs nicht synchronisiert ([#7207](https://github.com/nocobase/nocobase/pull/7207)) von @zhangzhonghe

  - Popup-Aktion: Seitenanzeige entspricht nach dem Wechseln von Tabs nicht den Erwartungen ([#7212](https://github.com/nocobase/nocobase/pull/7212)) von @zhangzhonghe

- **[ACL]** Behebt einen Fehler beim Löschen einer Rolle im Rollenvereinigungsmodus, die die Root-Rolle enthält. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) von @aaaaaajie

- **[Multi-App-Manager]** Behebt Authentifizierungsoptionen an unerwarteter Position ([#7210](https://github.com/nocobase/nocobase/pull/7210)) von @mytharcher

- **[Authentifizierung]** Behebt das Problem, dass die Anmeldeseite nicht scrollbar ist ([#7159](https://github.com/nocobase/nocobase/pull/7159)) von @zhangzhonghe

- **[Workflow: Genehmigung]** Behebt Verknüpfungen beim Einreichen der Genehmigung von @mytharcher
