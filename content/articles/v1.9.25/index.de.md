---
title: "NocoBase v1.9.25: Fehlertoleranzlogik für fehlende Daten in der Prozessorvorbereitung hinzugefügt"
description: "Versionshinweise zu v1.9.25"
---

### 🚀 Verbesserungen

- **[Workflow]**
  - Fehlertoleranzlogik für fehlende Daten in der Prozessorvorbereitung hinzugefügt, um Ausführungsstopps zu vermeiden ([#8156](https://github.com/nocobase/nocobase/pull/8156)) von @mytharcher

  - Lazy Loading für assoziierte Daten auf der Workflow-Leinwand verwendet, um die Leistung zu verbessern ([#8142](https://github.com/nocobase/nocobase/pull/8142)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[acl]** Problem behoben, bei dem die API `acl.can` `null` zurückgibt, wenn die Rolle `root` ist ([#8150](https://github.com/nocobase/nocobase/pull/8150)) von @mytharcher

- **[Workflow: Manueller Knoten]** Problem behoben, bei dem die manuelle Aufgabenliste eine falsche API verwendet ([#8144](https://github.com/nocobase/nocobase/pull/8144)) von @mytharcher

- **[HTTP-Anfrageverschlüsselung]** Eckige Klammern für das Array-Format in der qs-Parsing verwendet von @chenos

- **[Workflow: Genehmigung]** Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn eine Ausführung abgebrochen wird, während der zugehörige Workflow gelöscht wurde von @mytharcher

- **[Migrationsmanager]** Problem behoben, bei dem Zeilenumbrüche in Daten während der Migration verloren gingen von @cgyrock
