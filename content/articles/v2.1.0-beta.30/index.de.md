---
title: "NocoBase v2.1.0-beta.30: Unterstützung für Verknüpfungsregeln für Seitenmenüeinträge hinzugefügt"
description: "Versionshinweise zu v2.1.0-beta.30"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Unterstützung für Verknüpfungsregeln bei Seitenmenüeinträgen hinzugefügt ([#9304](https://github.com/nocobase/nocobase/pull/9304)) von @zhangzhonghe

  - Variable für die aktuelle Benutzersprache in v2 hinzugefügt ([#9405](https://github.com/nocobase/nocobase/pull/9405)) von @katherinehhh

### 🚀 Verbesserungen

- **[Client-v2]** V1-Menüs im v2-Layout ausblenden und nur v2-Menüs anzeigen ([#9427](https://github.com/nocobase/nocobase/pull/9427)) von @zhangzhonghe

- **[Undefiniert]** Unterstützung für sitzungsbezogene aktuelle Umgebung in der nb-CLI ([#9415](https://github.com/nocobase/nocobase/pull/9415)) von @chenos

- **[KI-Mitarbeiter]** KI-Mitarbeiter unterstützt die parallele Verarbeitung mehrerer Konversationen ([#9344](https://github.com/nocobase/nocobase/pull/9344)) von @cgyrock

- **[Abteilungen]** Optimierung des Abteilungslisten-Stils durch Hinzufügen von Symbolen und Anpassen der Abstände ([#9435](https://github.com/nocobase/nocobase/pull/9435)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Build]** Fehler beim Plugin-Build behoben, wenn v1-Client-Code den `/client-v2`-Einstieg eines anderen Plugins importiert. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) von @Molunerfinn

- **[Client]**
  - Untertabellen-Komponente für "zu-viele"-Assoziationsfelder in der v2-Untertabelle ausgeblendet ([#9438](https://github.com/nocobase/nocobase/pull/9438)) von @katherinehhh

  - Ein intermittierendes Problem behoben, bei dem Verknüpfungsregeln für Aktionsschaltflächen nicht wirksam wurden. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) von @gchust

- **[Graphischer Sammlungsmanager]** Fehler behoben, bei dem die automatische Layout-Funktion der grafischen Oberfläche einen Aktualisierungsfehler für Aktionsfilter auslöste ([#9421](https://github.com/nocobase/nocobase/pull/9421)) von @katherinehhh

- **[Block: Baum]** Verbesserte Einstellungen für den Baumfilter-Block und behobene Probleme mit nicht unterstützten Assoziationen, Titel-Feld-Fallback und Suchzurücksetzungsverhalten. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) von @jiannx
