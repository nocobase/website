---
title: "NocoBase v1.3.40-beta: Option zum Überspringen der SSL-Überprüfung hinzugefügt"
description: "Versionshinweise zu v1.3.40-beta"
---

### 🎉 Neue Funktionen

- **[Auth: OIDC]** Option zum Überspringen der SSL-Überprüfung hinzugefügt von @2013xile

### 🚀 Verbesserungen

- **[client]** Deaktivierte, nicht ausgewählte Kontrollkästchen für nicht ausgewählte Felder anzeigen ([#5503](https://github.com/nocobase/nocobase/pull/5503)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[database]** Problem behoben, bei dem die Zeichenfolgenoperatoren "enthält" und "enthält nicht" `null`-Werte nicht korrekt verarbeiten ([#5509](https://github.com/nocobase/nocobase/pull/5509)) von @2013xile

- **[client]** Verknüpfungsregel korrigiert, um URL-Parametervariablen korrekt auszuwerten ([#5504](https://github.com/nocobase/nocobase/pull/5504)) von @katherinehhh

- **[Block: Karte]** Problem behoben, bei dem einige Karten bei mehreren Karten aufgrund mehrfacher Aufrufe der `load`-Methode von AMap falsch angezeigt wurden ([#5490](https://github.com/nocobase/nocobase/pull/5490)) von @Cyx649312038
