---
title: "NocoBase v1.6.33: Vollständiges Docker-Image erstellen"
description: "Versionshinweise zu v1.6.33"
---

### 🚀 Verbesserungen

- **[undefined]** Vollständiges Docker-Image erstellen ([#6898](https://github.com/nocobase/nocobase/pull/6898)) von @chenos

- **[client]** Optimierung des Problems, dass Seiten bei längerer Nutzung zunehmend langsamer werden ([#6888](https://github.com/nocobase/nocobase/pull/6888)) von @zhangzhonghe

- **[Kalender]** Unterstützung für konfigurierbare Aktualisierungsschaltfläche im Kalenderblock ([#6920](https://github.com/nocobase/nocobase/pull/6920)) von @katherinehhh

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Korrektur der en-US-Lokalisierungen basierend auf zh-CN-Schlüsseln von @mytharcher

- **[Workflow: Genehmigung]** Unterstützung zur Erledigung aller Aufgaben im Workflow-Aufgabenzentrum von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**
  - Rendering-Fehler durch ungültiges Stilformat beim Hinzufügen von Assoziationsfeldern ([#6903](https://github.com/nocobase/nocobase/pull/6903)) von @katherinehhh

  - Falsche Prüfung auf leere Werte für toMany-Assoziationsfelder in Verknüpfungsregeln ([#6905](https://github.com/nocobase/nocobase/pull/6905)) von @katherinehhh

- **[Sammlungsfeld: Markdown(Vditor)]** Markdown(Vditor)-Feld passt sich nicht an das Theme an ([#6919](https://github.com/nocobase/nocobase/pull/6919)) von @katherinehhh

- **[Sammlung: Baum]** Vermeidung falscher Aktualisierungen ähnlicher Pfadpräfixe während Pfadaktualisierungen ([#6913](https://github.com/nocobase/nocobase/pull/6913)) von @2013xile

- **[Dateimanager]**
  - Korrektur der Vorschau-Übereinstimmungsregel ([#6902](https://github.com/nocobase/nocobase/pull/6902)) von @mytharcher

  - Korrektur der Client-Sammlungsinjektion und des Upload-Parameters ([#6909](https://github.com/nocobase/nocobase/pull/6909)) von @mytharcher

  - Korrektur der Vorschau-URL bei Nicht-Bilddateien ([#6889](https://github.com/nocobase/nocobase/pull/6889)) von @mytharcher

- **[Workflow: Mailer-Knoten]** Behandlung des undefinierten 'to'-Feldes und Verbesserung der E-Mail-Empfängerverarbeitung ([#6915](https://github.com/nocobase/nocobase/pull/6915)) von @sheldon66

- **[Workflow: Benutzerdefiniertes Aktionsereignis]**
  - Korrektur der fehlerhaften Schaltflächenausführung nach wenigen Klicks von @mytharcher

  - Korrektur, dass der Fehlerbehandler nicht per Klasse gefunden werden konnte von @mytharcher

- **[Workflow: Genehmigung]** Korrektur der Berechnung von Assoziationsanhängen von @mytharcher
