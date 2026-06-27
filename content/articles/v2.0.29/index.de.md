---
title: "NocoBase v2.0.29: Reduzierte Log-Ausgabe beim Serverstart durch Unterdrückung von Entpack-Befehlen für LibreOffice und Oracle Instant Client"
description: "Versionshinweise zu v2.0.29"
---

### 🚀 Verbesserungen

- **[undefined]** Reduzierte Log-Ausgabe beim Serverstart durch Unterdrückung von Entpack-Befehlen für LibreOffice und Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) von @Rishabh1925

### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, bei dem Leerzeichen in Variablenausdrücken dazu führten, dass Labels nicht angezeigt wurden ([#8988](https://github.com/nocobase/nocobase/pull/8988)) von @mytharcher

- **[flow-engine]** Problem behoben, bei dem Menüeinträge nicht ausgewählt werden konnten, wenn die UI-Komponentenbreite im Konfigurationszustand zu klein war. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) von @gchust

- **[Datenvisualisierung]** Bei Verwendung von variablenbasierten Filtern konnten Diagramme beim ersten Rendern die Variablenwerte nicht korrekt auflösen ([#8964](https://github.com/nocobase/nocobase/pull/8964)) von @2013xile
