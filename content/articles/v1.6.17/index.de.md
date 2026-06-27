---
title: "NocoBase v1.6.17: Unterstützung für die Suche nach Feldern im Filter-Komponenten"
description: "Versionshinweise zu v1.6.17"
---

### 🚀 Verbesserungen

- **[utils]** Dauererweiterung für dayjs hinzugefügt ([#6630](https://github.com/nocobase/nocobase/pull/6630)) von @mytharcher

- **[client]**
  - Unterstützung für die Feldsuche in der Filterkomponente ([#6627](https://github.com/nocobase/nocobase/pull/6627)) von @mytharcher

  - `trim`-API für `Input` und `Variable.TextArea` hinzugefügt ([#6624](https://github.com/nocobase/nocobase/pull/6624)) von @mytharcher

- **[Fehlerbehandlung]** Benutzerdefinierter Titel in der AppError-Komponente unterstützt. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) von @sheldon66

- **[IP-Einschränkung]** Inhalt der IP-Einschränkungsmeldung aktualisiert. von @sheldon66

- **[Dateispeicher: S3(Pro)]** Unterstützung für globale Variablen in der Speicherkonfiguration von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**
  - Regel mit 'beliebig'-Bedingung wird nicht wirksam, wenn die Bedingungsliste leer ist ([#6628](https://github.com/nocobase/nocobase/pull/6628)) von @katherinehhh

  - Datenproblem mit Gantt-Block in Baumkollektion ([#6617](https://github.com/nocobase/nocobase/pull/6617)) von @katherinehhh

  - Die Beziehungsfelder im Filterformular melden nach dem Seitenaktualisieren einen Fehler, da x-data-source nicht übertragen wird ([#6619](https://github.com/nocobase/nocobase/pull/6619)) von @zhangzhonghe

  - Fehler beim Parsen von Variablen, wenn URL-Parameter chinesische Zeichen enthalten ([#6618](https://github.com/nocobase/nocobase/pull/6618)) von @katherinehhh

- **[Benutzer]** Problem beim Parsen des Benutzerprofil-Formularschemas ([#6635](https://github.com/nocobase/nocobase/pull/6635)) von @2013xile

- **[Mobil]** Einzelfeld-Auswahl mit 'enthält'-Filter auf Mobilgeräten unterstützt keine Mehrfachauswahl ([#6629](https://github.com/nocobase/nocobase/pull/6629)) von @katherinehhh

- **[Aktion: Datensätze exportieren]** Fehlende Filterparameter beim Exportieren von Daten nach Seitenwechsel ([#6633](https://github.com/nocobase/nocobase/pull/6633)) von @katherinehhh

- **[E-Mail-Verwaltung]** Berechtigungsproblem der E-Mail-Verwaltung behoben, das das Anzeigen der E-Mail-Liste verhinderte von @jiannx

- **[Dateispeicher: S3(Pro)]]** Fehler an Benutzer ausgeben, wenn Logo in den S3 Pro-Speicher hochgeladen wird (als Standard festgelegt) von @mytharcher

- **[Workflow: Genehmigung]** Behoben: `updatedAt` wurde nach der Migration geändert von @mytharcher

- **[Migrationsverwaltung]** Erstellungszeit des Migrationslogs wird in manchen Umgebungen falsch angezeigt von @gchust
