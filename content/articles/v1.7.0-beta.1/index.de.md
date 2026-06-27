---
title: "NocoBase v1.7.0-beta.1: Kompatibel mit historischen Zugriffssteuerungseinstellungen für Schaltflächen"
description: "Versionshinweise zu v1.7.0-beta.1"
---

### 🎉 Neue Funktionen

- **[Client]** Kompatibilität mit historischen Schaltflächen-Berechtigungseinstellungen ([#6376](https://github.com/nocobase/nocobase/pull/6376)) von @katherinehhh

- **[Workflow: Ereignis nach Aktion]** Unterstützung zur Statusbestimmung mittels Endknoten ([#6399](https://github.com/nocobase/nocobase/pull/6399)) von @mytharcher

- **[Workflow: Antwortnachricht]** Unterstützung zur Verwendung im Aktionsauslöser von @mytharcher

### 🚀 Verbesserungen

- **[Workflow]** Behebung von API 401 bei fehlender Anmeldung ([#6412](https://github.com/nocobase/nocobase/pull/6412)) von @mytharcher

- **[Workflow: Manueller Knoten]** Anpassung der Benutzeroberfläche des Workflow-Aufgabenzentrums ([#6272](https://github.com/nocobase/nocobase/pull/6272)) von @mytharcher

- **[E-Mail-Manager]** Verwendung derselben Elementstruktur und desselben Stils für Symbolleistenschaltflächen global von @mytharcher

- **[Workflow: Genehmigung]** Anpassung der Benutzeroberfläche des Aufgabenzentrums von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Seite kann nicht in eine Gruppe verschoben werden ([#6413](https://github.com/nocobase/nocobase/pull/6413)) von @zhangzhonghe

  - Symbole werden in tiefen Menüebenen nicht angezeigt ([#6410](https://github.com/nocobase/nocobase/pull/6410)) von @zhangzhonghe

  - Problem mit dem Theme-Kontext von FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) von @katherinehhh

- **[Workflow: Manueller Knoten]** Vermeidung von Konflikten bei eindeutigen Schlüsseln ([#6407](https://github.com/nocobase/nocobase/pull/6407)) von @mytharcher

- **[Datenquellen-Manager]** Fehler beim Bearbeiten von Feldern in externen Datenquellen ([#6402](https://github.com/nocobase/nocobase/pull/6402)) von @katherinehhh

- **[Authentifizierung]** Benutzer ohne Rollen sollten zur Fehlermeldungsseite weitergeleitet werden. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) von @sheldon66

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Fehlende Verknüpfungsregelkonfiguration für die Schaltfläche „Workflow auslösen“ von @katherinehhh

- **[Backup-Manager]** Fehlende Verschlüsselungsschlüsseldaten bei der Backup-Wiederherstellung von @gchust

- **[Workflow: Genehmigung]** Vermeidung von Konflikten bei eindeutigen Schlüsseln von @mytharcher
