---
title: "NocoBase v2.0.45: Problem behoben, bei dem Variablen in der Systemaufforderung von KI-Mitarbeitern nicht wirksam wurden"
description: "Versionshinweise zu v2.0.45"
---

### 🚀 Verbesserungen

- **[Workflow: JavaScript]** Aktualisierung von Docker-Images, CI-Workflows und der JavaScript-Sandbox-Abhängigkeit für Workflows auf Node.js 22-Kompatibilität. ([#9245](https://github.com/nocobase/nocobase/pull/9245)) von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[KI-Mitarbeiter]** Behoben: Variablen im System-Prompt von KI-Mitarbeitern wurden nicht wirksam ([#9256](https://github.com/nocobase/nocobase/pull/9256)) von @cgyrock

- **[Lizenzeinstellungen]** Erfolgsmeldung beim Speichern der Lizenz aktualisiert ([#9251](https://github.com/nocobase/nocobase/pull/9251)) von @jiannx

- **[Aktion: Datensätze importieren]** Behoben: Fehler beim Import von XLSX-Dateien mit der Meldung "no header matched" ([#9253](https://github.com/nocobase/nocobase/pull/9253)) von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Behoben: Fehler beim Import von XLSX-Dateien mit der Meldung "no header matched" von @mytharcher

- **[KI: Wissensdatenbank]** Behoben: Löschen von Wissensdatenbank-Dokumenten entfernte nicht die zugehörigen Vektordaten von @cgyrock
