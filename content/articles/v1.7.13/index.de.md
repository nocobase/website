---
title: "NocoBase v1.7.13: Logo-Container-Breite passt sich an Inhaltstyp an"
description: "Versionshinweise zu v1.7.13"
---

### 🚀 Verbesserungen

- **[Client]** Die Breite des Logo-Containers passt sich dem Inhaltstyp an (feste 168px für Bilder, automatische Breite für Text) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) von @Cyx649312038

- **[Workflow: Genehmigung]** Option für ein zusätzliches Feld zur Liste der erneuten Zuweisungen hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Pflichtfeld-Validierungsmeldung in der Untertabelle bleibt beim Seitenwechsel bestehen ([#7080](https://github.com/nocobase/nocobase/pull/7080)) von @katherinehhh

  - Dezimalpunkt geht nach dem Wechsel des Betragskomponenten von Mask zu InputNumber verloren ([#7077](https://github.com/nocobase/nocobase/pull/7077)) von @katherinehhh

  - Falsche Darstellung von Markdown (Vditor) in der Untertabelle ([#7074](https://github.com/nocobase/nocobase/pull/7074)) von @katherinehhh

- **[Sammlungsfeld: Sequenz]** Korrektur der Berechnung von BigInt-Sequenzen auf String-Basis ([#7079](https://github.com/nocobase/nocobase/pull/7079)) von @mytharcher

- **[Backup-Manager]** Unbekannter Befehlsfehler beim Wiederherstellen von MySQL-Backups auf der Windows-Plattform von @gchust
