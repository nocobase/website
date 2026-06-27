---
title: "NocoBase v2.0.0-alpha.56: Unterstützung für benutzerdefinierte Spaltenbreiten in Tabellen"
description: "Versionshinweise zu v2.0.0-alpha.56"
---

### 🚀 Verbesserungen

- **[Client]** Unterstützung für benutzerdefinierte Spaltenbreiten in Tabellen ([#8200](https://github.com/nocobase/nocobase/pull/8200)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Client]** Verhindert Überlauf der Zeilengesamtbreite beim Ändern der Spaltenbreite ([#8166](https://github.com/nocobase/nocobase/pull/8166)) von @zhangzhonghe

- **[Flow-Engine]** Behebt das Problem, dass beim Absenden des Formulars in einem wiederverwendeten Modal über die Popup-UID die Blockdaten nicht aktualisiert werden. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) von @gchust

- **[Sammlungsfeld: Formel]** Behebt das Problem, dass BigInt-Felder nicht zu Detail- und Formularblöcken hinzugefügt werden können ([#8201](https://github.com/nocobase/nocobase/pull/8201)) von @katherinehhh

- **[Workflow]** Behebt das Problem, dass ein Fehler ausgelöst wird, wenn eine Workflow-Version gelöscht wird, die nicht die aktuelle ist ([#8203](https://github.com/nocobase/nocobase/pull/8203)) von @mytharcher
