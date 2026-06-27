---
title: "NocoBase v2.1.0-beta.45: Verbesserte verwaltete App und Plugin-Verwaltung in der CLI"
description: "Versionshinweise zu v2.1.0-beta.45"
---

### 🎉 Neue Funktionen

- **[undefined]** Verbesserte Verwaltung von Managed Apps und Plugins in der CLI, einschließlich appPath-bewusster Umgebungsbehandlung, Plugin-Import, lizenzierter Plugin-Synchronisation und zugehöriger Dokumentationsaktualisierungen. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) von @chenos
  Referenz: [CLI-Dokumentation](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Schnellstart](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Block: Gantt]** Eine Option für Gantt-Blöcke hinzugefügt, um standardmäßig auf heute zu fokussieren. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) von @jiannx
- **[IdP: OAuth]** Grundlegende Unterstützung für App Single Sign-On in Multi-App-Bereitstellungen hinzugefügt. ([#9547](https://github.com/nocobase/nocobase/pull/9547)) von @2013xile
- **[App SSO]** Ein App SSO-Plugin für automatisches Anmelden zwischen Anwendungen hinzugefügt. von @2013xile
- **[Multi-Space]** Client v2-Unterstützung für das Multi-Space-Plugin hinzugefügt, einschließlich Space-Wechsel und Space-Verwaltung. von @jiannx
- **[App-Supervisor]** App SSO-Einstellungen für Unteranwendungen hinzugefügt. von @2013xile

### 🚀 Verbesserungen

- **[Server]** Der moderne Client wird jetzt unter `/v/` anstelle von `/v2/` bereitgestellt. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) von @Molunerfinn
- **[KI]** `xlsx`-Version aktualisiert, um Sicherheitsprobleme zu vermeiden. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) von @mytharcher
- **[Multi-Keyword-Filter]** Multi-Keyword-Filter zu Client v2 migriert. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) von @gchust
- **[Workflow]** Entkopplung der Workflow-Verlaufstransaktion von der Workflow-Ausführung entfernt. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) von @mytharcher
- **[UI-Vorlagen]** UI-Vorlagen zu Client v2 migriert. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) von @gchust
- **[Abteilungen]** Eine v2-Einstellungsseite für die Verwaltung von Abteilungen, Abteilungsmitgliedern und Benutzer-Abteilungszuweisungen hinzugefügt. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) von @jiannx
- **[Auth: SAML 2.0]** SAML/CAS-Anmeldeweiterleitungen folgen jetzt dem modernen Client-Präfix. von @Molunerfinn
- **[Aktion: Datensätze importieren Pro]** `xlsx`-Version aktualisiert, um Sicherheitsprobleme zu vermeiden. von @mytharcher
- **[Workflow: Unterworkflow]** Entkopplung der Workflow-Verlaufstransaktion von Unterworkflow-Anweisungen entfernt. von @mytharcher
- **[Auth: OIDC]** OIDC-Anmeldeweiterleitung folgt jetzt dem modernen Client-Präfix. von @Molunerfinn
- **[Workflow: Genehmigung]** Entkopplung der Workflow-Verlaufstransaktion von Genehmigungs-Workflow-Anweisungen entfernt. von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behoben: Ausgeblendete verknüpfte Felder behielten weiterhin alte Werte. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) von @zhangzhonghe
  - Behoben: Fehler beim Speichern eines Baumbeziehungsfeldes in einer referenzierten Formularvorlage. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) von @zhangzhonghe
- **[Client-v2]**
  - Behoben: v2-Tabellenspalten wurden unsichtbar, wenn die benutzerdefinierte Spaltenbreite auf 0 gesetzt war. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) von @katherinehhh
  - Alle Beziehungsfeld-Auswahlen angepasst, um Assoziationsfelder auf maximal zwei Ebenen zu beschränken. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) von @jiannx
- **[Aktion: Datensätze importieren]** Behoben: Importierte Datensätze erhielten doppelte Sortierwerte. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) von @2013xile
- **[Flow-Engine]** Behoben: Ein Problem, bei dem das Konvertieren eines Referenzvorlagenblocks in eine Kopie zu einem Fehler führte. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) von @gchust
- **[Sammlung: SQL]** Zugriff auf sensible PostgreSQL-Metadaten durch SQL-Sammlungen blockiert. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) von @2013xile
- **[Workflow]** Behoben: Doppelte Workflow-Ausführungsverteilung bei gleichzeitigen Workern. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) von @mytharcher
- **[Block: Karte]** Behoben: Ein Problem, bei dem Kartenfeldwerte beim Wechsel zwischen Text- und Kartenanzeigemodus auf Detailseiten falsch konvertiert wurden. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) von @hongboji
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behoben: Die Workflow-Triggeraktion fehlte in der Schaltflächenliste des Arbeitsbereichs-Aktionspanels. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) von @katherinehhh
- **[KI-Mitarbeiter]**
  - KI-Mitarbeiterknoten in Workflows können jetzt das Standardmodell verwenden. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) von @cgyrock
  - Rohe LLM-Anbieterfehler wurden in Frontend-Nachrichten ausgeblendet. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) von @cgyrock
- **[Datenquellen-Manager]** Behoben: Multi-Space-Feldlokalisierung im v2-Datenquellen-Manager. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) von @jiannx
- **[Datenquelle: REST-API]** Behoben: Build-Fehler der REST-API-Datenquellen-Plugin-Deklaration aufgrund nicht übereinstimmender Client-v2-Typdeklarationen des Datenquellen-Managers. von @katherinehhh
- **[Passwortrichtlinie]** Behoben: Anmeldefehler maskierten den tatsächlichen Fehler mit "Argument #1 nicht unterstützter Typ undefined", wenn der zugrunde liegende Fehler keinen Statuscode hatte. von @Molunerfinn
- **[Workflow: Genehmigung]** Behoben: Das Problem, dass benutzerdefinierte Feldtitel in Genehmigungsformulardetails nicht angezeigt wurden. von @zhangzhonghe
