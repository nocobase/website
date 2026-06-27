---
title: "NocoBase v1.7.8: Umgebungsvariable zur Steuerung der Audit-Log-Ausgabe hinzugefügt"
description: "Versionshinweise zu v1.7.8"
---

### 🎉 Neue Funktionen

- **[Audit-Logs]** Umgebungsvariable `AUDIT_LOGGER_TRANSPORT` hinzugefügt, um das Ausgabeverfahren der Audit-Logs zu steuern, von @2013xile

### 🚀 Verbesserungen

- **[Kalender]** Unterstützung für die Einstellung des Wochenstarttages im Kalenderblock ([#7032](https://github.com/nocobase/nocobase/pull/7032)) von @katherinehhh

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Berechtigungsbezogene Fehler bei der Anzeige von Viele-zu-viele(many)-Feldern in Datentabellen. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) von @aaaaaajie

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem mit automatischem Schließen beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7042](https://github.com/nocobase/nocobase/pull/7042)) von @katherinehhh

  - Auswahlfeld-Optionen funktionieren nicht in Verknüpfungsregeln des Filterformulars ([#7035](https://github.com/nocobase/nocobase/pull/7035)) von @katherinehhh

  - Validierungsregeln des Filterformulars führen dazu, dass der Filter-Button unwirksam wird ([#6975](https://github.com/nocobase/nocobase/pull/6975)) von @zhangzhonghe

  - Fehler behoben: Felder werden aufgrund doppelter API-Anfragen nicht in Blockvorlagen angezeigt ([#6985](https://github.com/nocobase/nocobase/pull/6985)) von @zhangzhonghe

- **[Aktion: Datensätze importieren]** Fehler beim Import von Untertabellen behoben, wenn relationale Felder betroffen sind ([#7039](https://github.com/nocobase/nocobase/pull/7039)) von @aaaaaajie

- **[Datenvisualisierung]** Kontrollkästchengruppen-Felder in Diagrammen sollten Beschriftungen anstelle von Rohwerten anzeigen ([#7033](https://github.com/nocobase/nocobase/pull/7033)) von @2013xile

- **[Workflow]** Fehler behoben, der bei der manuellen Ausführungsaktion ausgelöst wird, wenn der Auslöser nicht korrekt konfiguriert ist ([#7036](https://github.com/nocobase/nocobase/pull/7036)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Vermeidung eines undefinierten Feld-Fehlers von @mytharcher

  - API-Fehler beim Aktualisieren der Detailseite behoben von @mytharcher

- **[WeCom]** Prüfung auf Callback-Pfad in der Gateway-Middleware hinzugefügt von @2013xile
