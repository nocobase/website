---
title: "NocoBase v1.8.23: Optimierte Listen-API-Abfrage der Anzahl"
description: "Versionshinweise zu v1.8.23"
---

### 🚀 Verbesserungen

- **[Datenbank]** Optimierte Listen-API-Abfrage zur Reduzierung des Ressourcenverbrauchs. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) von @aaaaaajie

- **[Benachrichtigung: In-App-Nachricht]** Unterstützung zur Konfiguration der automatischen Schließverzögerung für In-App-Benachrichtigungen ([#7472](https://github.com/nocobase/nocobase/pull/7472)) von @mytharcher

- **[Workflow: Benachrichtigungsknoten]** Unterstützung zum Testen des Benachrichtigungsknotens ([#7470](https://github.com/nocobase/nocobase/pull/7470)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Assoziationsfeld-Renderfehler beim Wechsel zur Tag-Komponente im Bearbeitungsformular-Block ([#7468](https://github.com/nocobase/nocobase/pull/7468)) von @katherinehhh

  - Zeitbegrenzungsproblem, wenn das ausgewählte Datum gleich minDate ist ([#7461](https://github.com/nocobase/nocobase/pull/7461)) von @katherinehhh

- **[Mobil]** Mobiles Datumsfeld ohne Zeitzone zeigt Datum/Uhrzeit nicht korrekt an ([#7473](https://github.com/nocobase/nocobase/pull/7473)) von @katherinehhh

- **[Öffentliche Formulare]** Standardwert des öffentlichen Formularfelds wird bei Verwendung von Variablen nicht angewendet ([#7467](https://github.com/nocobase/nocobase/pull/7467)) von @katherinehhh

- **[Aktion: Datensätze importieren]** Korrektur der falsch angezeigten Zeilennummer beim Import doppelter Daten ([#7440](https://github.com/nocobase/nocobase/pull/7440)) von @aaaaaajie

- **[Sammlung: Baum]** Entfernen von Datenbankereignissen im Zusammenhang mit der Sammlung nach dem Löschen einer Baumsammlung ([#7459](https://github.com/nocobase/nocobase/pull/7459)) von @2013xile

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebung des Problems, dass benutzerdefinierte Aktionsereignisse nach der Initialisierung nicht sofort manuell ausgeführt werden können von @mytharcher

- **[Workflow: Unterprozess]** Behebung des Problems, dass Unterprozesse mehrfach fortgesetzt und ausgeführt werden von @mytharcher

- **[Workflow: Genehmigung]** Für Benutzer, die nicht der aktuelle Genehmiger sind, wird der entsprechende Ansichtsbutton in der Prozessablauftabelle nicht angezeigt von @mytharcher
