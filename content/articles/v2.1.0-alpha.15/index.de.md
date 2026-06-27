---
title: "NocoBase v2.1.0-alpha.15: Baumfilterblock hinzugefügt"
description: "Versionshinweise zu v2.1.0-alpha.15"
---

### 🎉 Neue Funktionen

- **[Block: Baum]** Baumfilterblock hinzugefügt ([#9016](https://github.com/nocobase/nocobase/pull/9016)) von @jiannx

- **[Auth: API-Schlüssel]** `pm list` und `generate-api-key` Befehle hinzugefügt ([#9076](https://github.com/nocobase/nocobase/pull/9076)) von @chenos

- **[KI-Mitarbeiter]**
  - Datenabfrage-Tool und Geschäftsanalysebericht-Tool für KI-Mitarbeiter hinzugefügt ([#9040](https://github.com/nocobase/nocobase/pull/9040)) von @2013xile

  - LLM-basiertes Websuch-Tool für KI-Mitarbeiter hinzugefügt ([#9032](https://github.com/nocobase/nocobase/pull/9032)) von @cgyrock

- **[Migrationsmanager]** Unterstützung für Migrationsbefehle von @chenos

- **[E-Mail-Manager]** Gmail unterstützt das Senden von E-Mails mit Aliasen von @jiannx

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Problem behoben, dass viele-zu-eins-Felder aus externen Datenquellen nicht im Tabellenblock hinzugefügt werden konnten ([#9068](https://github.com/nocobase/nocobase/pull/9068)) von @jiannx

- **[Client]**
  - Fehler beim Hinzufügen von viele-zu-viele-Feldern in Untertabellen behoben ([#9070](https://github.com/nocobase/nocobase/pull/9070)) von @jiannx

  - Problem behoben, bei dem das Popup zur Datensatzauswahl über die Auswahlschaltfläche einer Untertabelle die Variablenwerte des übergeordneten Elements nicht korrekt auflösen konnte. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) von @gchust

  - Problem behoben, bei dem für die Stapelbearbeitungsaktion eine falsche Bestätigungsmeldung für nicht gespeicherte Änderungen angezeigt wurde ([#9054](https://github.com/nocobase/nocobase/pull/9054)) von @gchust

  - Problem behoben, bei dem nach dem Erstellen eines Datensatzes über eine Popup-Untertabelle beim Absenden des Formulars ein falsches sekundäres Bestätigungs-Popup erschien. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) von @gchust

  - Problem behoben, bei dem ctx.request den Authorization-Header nicht überschreiben konnte. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) von @gchust

- **[Datenquellen-Manager]** Problem behoben, bei dem einige Feldtypen nach der Synchronisierung von Feldern aus der Datenbank nicht korrekt aktualisiert wurden ([#9046](https://github.com/nocobase/nocobase/pull/9046)) von @2013xile

- **[Benachrichtigungsmanager]** Leistung der In-App-Benachrichtigungsübermittlung in Workflow-Szenarien optimiert ([#9066](https://github.com/nocobase/nocobase/pull/9066)) von @mytharcher

- **[Sammlungsfeld: Code]** UI-Oberfläche der Code-Felder korrigiert ([#9061](https://github.com/nocobase/nocobase/pull/9061)) von @2013xile

- **[Workflow: HTTP-Anfrageknoten]** Ergebnisse des Workflow-Anfrageknotens bereinigt, um die Offenlegung der Anfragekonfiguration zu vermeiden, neue Knoten standardmäßig so eingestellt, dass nur Antwortdaten zurückgegeben werden, und Debug-Logging für fehlgeschlagene Anfragen hinzugefügt. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) von @mytharcher

- **[KI-Mitarbeiter]**
  - Problem behoben, bei dem das Abbrechen der Argumentation von KI-Mitarbeitern zum Absturz des Dienstes führte ([#9031](https://github.com/nocobase/nocobase/pull/9031)) von @cgyrock

  - Fehler beim Hochladen von KI-Mitarbeiter-Dokumenten bei Subpfad-Zugriff mit konfiguriertem APP_PUBLIC_PATH behoben. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) von @cgyrock

  - Problem bei Verwendung von DeepSeek- oder MinMax-Modellen auf DashScope behoben ([#9033](https://github.com/nocobase/nocobase/pull/9033)) von @cgyrock
