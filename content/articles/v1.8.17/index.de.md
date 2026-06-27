---
title: "NocoBase v1.8.17: Unterstützung für einheitliche Aufgabentitel für alle Genehmigungsknoten im selben Workflow"
description: "Versionshinweise zu v1.8.17"
---

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** Unterstützung für einheitliche Aufgabenbezeichnungen für alle Genehmigungsknoten im selben Workflow von @mytharcher

### 🚀 Verbesserungen

- **[Authentifizierung]** Entfernung des Token-Parameters aus der URL nach erfolgreicher Anmeldung ([#7386](https://github.com/nocobase/nocobase/pull/7386)) von @2013xile

- **[Vorlagendruck]** Unterstützung für m2m-Feld-Array von @jiannx

### 🐛 Fehlerbehebungen

- **[Mobil]** Behebung des Problems, dass die Formularübermittlungsdaten im mobilen Genehmigungsdialog falsch waren ([#7389](https://github.com/nocobase/nocobase/pull/7389)) von @zhangzhonghe

- **[Workflow]** Korrektur der Übersetzung des Seitentitels im Workflow-Aufgabenzentrum ([#7392](https://github.com/nocobase/nocobase/pull/7392)) von @mytharcher

- **[Kalender]** Tooltip für Kalenderereigniselemente zeigt [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) von @katherinehhh

- **[Benachrichtigung: In-App-Nachricht]** Korrektur von Übersetzungen ([#7384](https://github.com/nocobase/nocobase/pull/7384)) von @mytharcher

- **[Dateimanager]** Entfernung des Hinweises zur Datei-Upload-Größenbeschränkung ([#7391](https://github.com/nocobase/nocobase/pull/7391)) von @mytharcher

- **[Dateispeicher: S3(Pro)]**
  - Ablehnung des problematischen Parameters `attachmentField` von @mytharcher

  - Behebung des Problems, dass die IAM-Authentifizierungsmethode nicht zum Hochladen von Dateien verwendet werden konnte von @mytharcher
