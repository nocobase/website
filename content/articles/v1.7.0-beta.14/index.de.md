---
title: "NocoBase v1.7.0-beta.14: Lokalisierungsmodul hinzugefügt"
description: "Versionshinweise zu v1.7.0-beta.14"
---

### 🎉 Neue Funktionen

- **[UI-Schema-Speicherung]** Lokalisierungsmodul für UISchema hinzugefügt, das benutzerdefinierte Übersetzungen für Schema-Titel und -Beschreibung ermöglicht ([#6574](https://github.com/nocobase/nocobase/pull/6574)) von @chenos

### 🚀 Verbesserungen

- **[utils]** Dauer-Erweiterung für dayjs hinzugefügt ([#6630](https://github.com/nocobase/nocobase/pull/6630)) von @mytharcher

- **[client]**
  - Unterstützung für die Feldsuche in der Filter-Komponente ([#6627](https://github.com/nocobase/nocobase/pull/6627)) von @mytharcher

  - `trim`-API für `Input` und `Variable.TextArea` hinzugefügt ([#6624](https://github.com/nocobase/nocobase/pull/6624)) von @mytharcher

- **[Workflow]** Speicherlogik für Jobs optimiert ([#6613](https://github.com/nocobase/nocobase/pull/6613)) von @mytharcher

- **[Fehlerbehandlung]** Unterstützung für benutzerdefinierte Titel in der AppError-Komponente ([#6409](https://github.com/nocobase/nocobase/pull/6409)) von @sheldon66

- **[IP-Einschränkung]** Inhalt der IP-Einschränkungsmeldung aktualisiert. von @sheldon66

- **[Dateispeicher: S3(Pro)]** Unterstützung für globale Variablen in der Speicherkonfiguration von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**
  - Die Beziehungsfelder im Filterformular melden nach dem Seitenrefresh einen Fehler, da x-data-source nicht übergeben wird ([#6619](https://github.com/nocobase/nocobase/pull/6619)) von @zhangzhonghe

  - Datenproblem mit dem Gantt-Block in der Baumstruktur-Sammlung ([#6617](https://github.com/nocobase/nocobase/pull/6617)) von @katherinehhh

  - Leerer Bereich zwischen dem Titel der Blockvorlagen-Konfigurationsseite und dem Menü ([#6625](https://github.com/nocobase/nocobase/pull/6625)) von @gchust

  - Regel mit 'any'-Bedingung wird nicht wirksam, wenn die Bedingungsliste leer ist ([#6628](https://github.com/nocobase/nocobase/pull/6628)) von @katherinehhh

  - x-disabled-Eigenschaft wirkt nicht auf Formularfelder ([#6610](https://github.com/nocobase/nocobase/pull/6610)) von @katherinehhh

  - Fehler beim Parsen von Variablen, wenn URL-Parameter chinesische Zeichen enthalten ([#6618](https://github.com/nocobase/nocobase/pull/6618)) von @katherinehhh

  - Anzeigeproblem bei Feldbezeichnungen, um Abschneiden durch Doppelpunkt zu verhindern ([#6599](https://github.com/nocobase/nocobase/pull/6599)) von @katherinehhh

- **[Aktion: Datensätze exportieren]** Fehlende Filterparameter beim Exportieren von Daten nach Änderung der Seitennummerierung ([#6633](https://github.com/nocobase/nocobase/pull/6633)) von @katherinehhh

- **[Benutzer]** Problem beim Parsen des Benutzerprofil-Formularschemas ([#6635](https://github.com/nocobase/nocobase/pull/6635)) von @2013xile

- **[Mobil]** Einzelfeld-Auswahl mit 'enthält'-Filter auf Mobilgeräten unterstützt keine Mehrfachauswahl ([#6629](https://github.com/nocobase/nocobase/pull/6629)) von @katherinehhh

- **[Zugriffskontrolle]** Korrektur der Berechnungslogik für Rollenvereinigungen ([#6605](https://github.com/nocobase/nocobase/pull/6605)) von @aaaaaajie

- **[Block: Vorlage]** Ändern und Löschen derselben Felder aus Vorlage und Block kann nach dem Erstellen eines Blocks aus einer Vorlage zu Rendering-Fehlern führen ([#6626](https://github.com/nocobase/nocobase/pull/6626)) von @gchust

- **[E-Mail-Manager]**
  - Fehlendes await für den nächsten Aufruf behoben. von @jiannx

  - Fehler behoben, bei dem die E-Mail-Verwaltungsberechtigung die E-Mail-Liste nicht anzeigen konnte von @jiannx

- **[Dateispeicher: S3(Pro)]**
  - Fehlendes await für den nächsten Aufruf behoben. von @jiannx

  - Fehler an Benutzer ausgeben, wenn das Logo im S3 Pro-Speicher hochgeladen wird (auf Standard gesetzt) von @mytharcher

- **[Workflow: Genehmigung]** `updatedAt` nach der Migration geändert behoben von @mytharcher

- **[Migrations-Manager]** Erstellungszeit des Migrationslogs wird in einigen Umgebungen falsch angezeigt von @gchust
