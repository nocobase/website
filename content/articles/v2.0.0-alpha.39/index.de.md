---
title: "NocoBase v2.0.0-alpha.39: Komponenten für mobile Geräte anpassen"
description: "Versionshinweise zu v2.0.0-alpha.39"
---

### 🚀 Verbesserungen

- **[Client]** Komponenten für mobile Geräte anpassen ([#7870](https://github.com/nocobase/nocobase/pull/7870)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem die Standardkonfiguration des JS-Feldes die Anzeigemodus-Einstellung nicht verwendete. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) von @gchust

  - Problem behoben, bei dem duplizierte Vorlagen nicht angezeigt werden, verursacht durch Ziehen und anschließendes Löschen einer referenzierten Vorlage ([#7847](https://github.com/nocobase/nocobase/pull/7847)) von @zhangzhonghe

  - Problem behoben, bei dem der Standardwert eines Datumsfeldes im Filterformular-Blockmodell nicht gesetzt werden konnte. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) von @gchust

  - Problem behoben, bei dem die Verknüpfungsregel für das Genehmigungsformular nicht funktionierte ([#7858](https://github.com/nocobase/nocobase/pull/7858)) von @zhangzhonghe

  - Problem behoben, bei dem Schnellbearbeitungsvorgänge im Tabellenblock Daten nicht korrekt aktualisierten. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) von @gchust

  - Problem behoben, bei dem im Rich-Text-Feld kein Standardwert eingegeben werden konnte und beim Mehrfachauswahlfeld nicht mehrere Optionen als Standardwert ausgewählt werden konnten. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) von @gchust

- **[Multi-App-Manager (veraltet)]** Nach dem Stoppen einer Unteranwendung eine Synchronisationsnachricht veröffentlichen, um andere Knoten zu benachrichtigen, die entsprechende Unteranwendung zu stoppen ([#7849](https://github.com/nocobase/nocobase/pull/7849)) von @2013xile

- **[Workflow: Genehmigung]** Problem behoben, bei dem die Verknüpfungsregel für das Genehmigungsformular nicht funktionierte von @zhangzhonghe

- **[E-Mail-Manager]** ShadowHtml-Aktualisierungsfehler von @jiannx
