---
title: "NocoBase v2.1.0-alpha.25: Unterstützung zum Löschen von Entwurfsgenehmigungen"
description: "Versionshinweise zu v2.1.0-alpha.25"
---

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützung zum Löschen von Entwurfsgenehmigungen von @mytharcher

### 🚀 Verbesserungen

- **[undefined]** KI-Dokumentation aktualisiert, um NocoBase >= 2.1.0-beta.20 zu erfordern und die neueste Beta-Version zu empfehlen. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) von @Molunerfinn

- **[KI-Mitarbeiter]** Konfiguration für Kurzbefehlsaufgaben von KI-Mitarbeitern aktualisiert, um dieselbe Fähigkeiten-Einstellungskomponente wie die Workflow-KI-Mitarbeiter-Knotenkonfiguration zu verwenden ([#9246](https://github.com/nocobase/nocobase/pull/9246)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ein Problem behoben, bei dem Standardwerte nicht angewendet wurden, wenn ein Datensatz nach dem Entfernen aus einer Untertabelle erneut hinzugefügt wurde. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) von @gchust

  - Nicht wesentliche optionale Blöcke im Auswahl-Popup-Fenster für verknüpfte Felder herausgefiltert ([#9224](https://github.com/nocobase/nocobase/pull/9224)) von @jiannx

- **[Aktion: Datensätze importieren]** Problem behoben, bei dem der xlsx-Import fehlschlug und einen Fehler "Keine Header-Übereinstimmung" auslöste ([#9253](https://github.com/nocobase/nocobase/pull/9253)) von @mytharcher

- **[Lizenzeinstellungen]** Erfolgsmeldung beim Speichern der Lizenz aktualisiert ([#9251](https://github.com/nocobase/nocobase/pull/9251)) von @jiannx

- **[KI-Mitarbeiter]** Problem behoben, bei dem Variablen im System-Prompt von KI-Mitarbeitern nicht wirkten ([#9256](https://github.com/nocobase/nocobase/pull/9256)) von @cgyrock

- **[IdP: OAuth]** Fehler bei der OAuth-CLI-Anmeldung behoben und dynamische Registrierung auf lokale Callback-URLs beschränkt ([#9248](https://github.com/nocobase/nocobase/pull/9248)) von @2013xile

- **[KI: Wissensdatenbank]** Problem behoben, bei dem das Löschen von Wissensdatenbank-Dokumenten nicht die zugehörigen Vektordaten löschte von @cgyrock

- **[Aktion: Datensätze importieren Pro]** Problem behoben, bei dem der xlsx-Import fehlschlug und einen Fehler "Keine Header-Übereinstimmung" auslöste von @mytharcher
