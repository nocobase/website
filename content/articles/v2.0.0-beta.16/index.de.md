---
title: "NocoBase v2.0.0-beta.16: API zum Verschieben von Knoten hinzugefügt"
description: "Versionshinweise zu v2.0.0-beta.16"
---

### 🎉 Neue Funktionen

- **[Client]** Untertabelle (Popup-Bearbeitung) als Feldkomponente hinzugefügt ([#8280](https://github.com/nocobase/nocobase/pull/8280)) von @katherinehhh

- **[Workflow]** API zum Verschieben von Knoten hinzugefügt ([#8507](https://github.com/nocobase/nocobase/pull/8507)) von @mytharcher

### 🚀 Verbesserungen

- **[Client]**
  - Vollständiges Neu-Rendern der Tabelle beim Aktualisieren einer Zelle verhindert ([#8349](https://github.com/nocobase/nocobase/pull/8349)) von @katherinehhh

  - Verbesserung des n-zu-m-Unterformulars: Initialisierung mit einem Standardeintrag und Vermeidung der Erstellung von Datensätzen, wenn das Feld leer bleibt ([#8458](https://github.com/nocobase/nocobase/pull/8458)) von @katherinehhh

- **[Dateimanager]** Erweiterbare Vorschau für den Dateimanager hinzugefügt ([#8501](https://github.com/nocobase/nocobase/pull/8501)) von @mytharcher

- **[Workflow]** Routenpfad der Workflow-Unterseiten geändert, sodass alle Workflow-Seiten unter dem Präfix `/admin/settings/workflow` liegen ([#8519](https://github.com/nocobase/nocobase/pull/8519)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Doppelte Zeitangabe im Filter für DateTime-Werte behoben ([#8506](https://github.com/nocobase/nocobase/pull/8506)) von @zhangzhonghe

  - Problem behoben, das die Verwendung von Formularvariablen zur Wertzuweisung in Verknüpfungsregeln für mehrstufige n-zu-m-Unterformularfelder verhinderte. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) von @gchust

  - Problem behoben, bei dem Daten nach Änderungen über mehrere Ebenen von Popups und über Blöcke hinweg nicht aktualisiert wurden. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) von @gchust

  - Problem behoben, bei dem Unterdetaildaten im schreibgeschützten Modus im Bearbeitungsformular nicht korrekt angezeigt wurden ([#8469](https://github.com/nocobase/nocobase/pull/8469)) von @katherinehhh

  - Verbesserte Logik für optionales targetKey ([#8333](https://github.com/nocobase/nocobase/pull/8333)) von @katherinehhh

  - Falsche Filterparameter für das Beziehungsfeld "Auswählen" in der bearbeitbaren Untertabelle behoben ([#8335](https://github.com/nocobase/nocobase/pull/8335)) von @katherinehhh

- **[Flow-Engine]** FilterByTK-Problem behoben, wenn filterTargetKey ein einzelnes Element in einem Array in einer externen Datenquelle ist ([#8522](https://github.com/nocobase/nocobase/pull/8522)) von @katherinehhh

- **[KI-Mitarbeiter]** Probleme mit inkonsistenter Konfiguration auswählbarer Felder zwischen KI-Modellierung und Datenquellenverwaltung behoben ([#8488](https://github.com/nocobase/nocobase/pull/8488)) von @cgyrock

- **[E-Mail-Manager]** Textauswahl verhindert nicht mehr das Einklappen des Nachrichtentexts. Fehler beim Herunterladen von Anhängen behoben von @jiannx
