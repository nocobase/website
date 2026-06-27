---
title: "NocoBase v1.6.34: Unterstützung für die Definition eindeutiger Datensätze durch mehrere Felder beim Importieren von Einstellungen"
description: "Versionshinweise zu v1.6.34"
---

### 🎉 Neue Funktionen

- **[Aktion: Datensätze importieren Pro]**
  - Unterstützt die Definition eindeutiger Datensätze über mehrere Felder bei den Importeinstellungen von @aaaaaajie

  - Unterstützt Einstellungen zum Überschreiben leerer Zellen und deren Ignorieren bei den Importeinstellungen von @aaaaaajie

### 🚀 Verbesserungen

- **[undefined]** Node-Version auf 20 für CI aktualisiert ([#6927](https://github.com/nocobase/nocobase/pull/6927)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**
  - noneOf-Bedingungsprüfung in Verknüpfungsregeln fehlgeschlagen ([#6934](https://github.com/nocobase/nocobase/pull/6934)) von @katherinehhh

  - Blockhöheneinstellung nicht in Echtzeit angewendet ([#6904](https://github.com/nocobase/nocobase/pull/6904)) von @katherinehhh

- **[undefined]** Node 20 aufgrund von Anforderungen des Commander-Pakets verwendet ([#6924](https://github.com/nocobase/nocobase/pull/6924)) von @mytharcher

- **[Datenbank]** Fehler behoben: Automatische Generierung von UUID oder Nanoid funktionierte nicht bei Viele-zu-Viele-Assoziationen ([#6912](https://github.com/nocobase/nocobase/pull/6912)) von @aaaaaajie

- **[Aktion: Datensätze exportieren]** Problem behoben, bei dem verschachtelte Beziehungen nicht korrekt exportiert wurden. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) von @aaaaaajie

- **[Datenquellen-Manager]** Problem mit der Drag-and-Drop-Sortierung behoben ([#6937](https://github.com/nocobase/nocobase/pull/6937)) von @chenos

- **[API-Dokumentation]** Fehlende Sub-App-Informationen zu req.headers hinzugefügt ([#6933](https://github.com/nocobase/nocobase/pull/6933)) von @chenos

- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Aktion "Alle als gelesen markieren" in In-App-Nachrichten die Daten anderer Benutzer beeinflussen konnte. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) von @sheldon66

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Fehler durch Plugin-Ladereihenfolge vermieden von @mytharcher

- **[Dateispeicher: S3(Pro)]**
  - Vorschau-URL und Upload-Parameter korrigiert von @mytharcher

  - Doppelte Upload-Parameter korrigiert von @mytharcher

- **[Block: Mehrschritt-Formular]** Typen korrigiert von @mytharcher

- **[Workflow: Genehmigung]**
  - Falsche Datensatz-ID für ViewAction korrigiert von @mytharcher

  - Appends und Datenberechnung vor dem Absenden des Genehmigungsprozesses korrigiert von @mytharcher
