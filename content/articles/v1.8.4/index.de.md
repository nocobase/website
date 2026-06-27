---
title: "NocoBase v1.8.4: Unterstützung zur Konfiguration unabhängiger Authentifizierungsgeheimnisse für Unter-Apps"
description: "Versionshinweise zu v1.8.4"
---

### 🎉 Neue Funktionen

- **[Multi-App-Manager]** Unterstützung für die Konfiguration eines unabhängigen Authentifizierungs-Geheimnisses für Unter-Apps ([#7197](https://github.com/nocobase/nocobase/pull/7197)) von @mytharcher

- **[Workflow: CC]** CC-Knoten zum Workflow hinzugefügt ([#7201](https://github.com/nocobase/nocobase/pull/7201)) von @mytharcher

### 🚀 Verbesserungen

- **[Benachrichtigung: In-App-Nachricht]** Schriftgröße für die mobile Nachrichtenseite optimiert ([#7199](https://github.com/nocobase/nocobase/pull/7199)) von @zhangzhonghe

- **[Auth: DingTalk]** Unterstützung für die Konfiguration des Protokolls und der Portnummer der Callback-URL von @2013xile

### 🐛 Fehlerbehebungen

- **[Benachrichtigung: In-App-Nachricht]** Problem mit BigInt-Zeitstempel im Zeichenfolgenformat behoben, das dayjs betrifft ([#7196](https://github.com/nocobase/nocobase/pull/7196)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Fehler vermieden, wenn Benutzer nicht existiert von @mytharcher

  - Assoziation beim Datensatz neu geladen von @mytharcher

  - `try/catch` in der Migration beim Aktualisieren des UI-Schemas hinzugefügt von @mytharcher
