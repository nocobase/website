---
title: "NocoBase v1.5.7: Entfernen der Konsolen-Fehlerprotokollierung für SSE-Verbindungswiederholungen"
description: "Versionshinweise zu v1.5.7"
---

### 🚀 Verbesserungen

- **[Benachrichtigung: In-App-Nachricht]** Konsolen-Fehlerprotokollierung für SSE-Verbindungswiederholungen entfernt. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) von @sheldon66

### 🐛 Fehlerbehebungen

- **[Client]**
  - Fehlende Zieheinstellung im Modal für Schnellerstellungsaktionen von Beziehungsdaten ([#6201](https://github.com/nocobase/nocobase/pull/6201)) von @katherinehhh

  - Problem, dass die Formatierung von Zahlen mit hoher Genauigkeit nicht angewendet wird ([#6202](https://github.com/nocobase/nocobase/pull/6202)) von @katherinehhh

  - Behebung eines Problems, bei dem das Leeren eines Assoziationsfeldes in einem Formular den Feldwert beim Absenden des Formulars nicht tatsächlich löscht ([#5540](https://github.com/nocobase/nocobase/pull/5540)) von @zhangzhonghe

  - Block wird nach dem Absenden des Formulars nicht aktualisiert ([#6206](https://github.com/nocobase/nocobase/pull/6206)) von @zhangzhonghe

  - Verknüpfter Feldwert bleibt nach dem Zurücksetzen des Beziehungsfeldes beim Absenden bestehen ([#6207](https://github.com/nocobase/nocobase/pull/6207)) von @katherinehhh

  - Aktualisierungsaktion wird für Zeilen ohne Aktualisierungsberechtigung in der Tabelle angezeigt ([#6204](https://github.com/nocobase/nocobase/pull/6204)) von @katherinehhh

- **[Sammlungsfeld: Sortierung]** Problem behoben, dass der Sortierfeldtyp in externen Datenquellen nicht registriert ist ([#6212](https://github.com/nocobase/nocobase/pull/6212)) von @mytharcher

- **[Authentifizierung]** Problem mit der WebSocket-Authentifizierung ([#6209](https://github.com/nocobase/nocobase/pull/6209)) von @2013xile

- **[Sammlungsfeld: Anhang (URL)]** Veraltete Request-URL im Hook behoben von @mytharcher
