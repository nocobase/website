---
title: "NocoBase v2.0.55: Hinweis bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank"
description: "Versionshinweise zu v2.0.55"
---

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]** Hinweis bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank ([#9497](https://github.com/nocobase/nocobase/pull/9497)) von @cgyrock

- **[KI: Wissensdatenbank]** Hinweis bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank von @cgyrock

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ein Problem behoben, bei dem aktuelle Popup-Datensatzvariablen in Ereignisabläufen von Aktionsschaltflächen nicht aufgelöst werden konnten. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) von @gchust

  - Ein Problem behoben, bei dem JS-Feldwerte in Unterformularen während der Formularübermittlung nicht korrekt gesetzt wurden. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) von @gchust

- **[Dateimanager]** Fehler behoben, bei dem beim `tx-cos`-Upload des Dateimanagers die Metadaten zur Dateigröße fehlten. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) von @mytharcher

- **[Datenquelle: Hauptdatenquelle]** Problem behoben, bei dem Feldoptionen nach der Synchronisierung von Feldern in das Schema geschrieben wurden ([#9505](https://github.com/nocobase/nocobase/pull/9505)) von @2013xile

- **[WEB-Client]** Blockdaten nach dem Entfernen von Menüs bereinigt. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) von @gchust

- **[KI-Mitarbeiter]** Fehler beim Lesen von OSS-Dateien durch KI-Mitarbeiter behoben ([#9493](https://github.com/nocobase/nocobase/pull/9493)) von @cgyrock

- **[Aktion: Datensätze importieren]** Problem behoben, bei dem importierte Datensätze in datumsähnlichen Feldern ein falsches Datum anzeigten ([#9463](https://github.com/nocobase/nocobase/pull/9463)) von @mytharcher

- **[Aktion: Datensätze exportieren Pro]** Problem behoben, bei dem beim Export eines Anhangs aus einem Anhang-URL-Feld ein Fehler ausgelöst wurde von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Zeitzonenbehandlung für professionelle xlsx-Importe korrigiert von @mytharcher
