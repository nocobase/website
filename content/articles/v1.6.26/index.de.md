---
title: "NocoBase v1.6.26: Iframe-Block unterstützt die Konfiguration des allow-Attributs"
description: "Versionshinweise zu v1.6.26"
---

### 🎉 Neue Funktionen

- **[Block: iframe]** Der Iframe-Block unterstützt jetzt die Konfiguration des allow-Attributs ([#6824](https://github.com/nocobase/nocobase/pull/6824)) von @zhangzhonghe

- **[Vorlagendruck]** Funktion: Unterstützung für `{ label, value }` Select-Optionen im Vorlagendruck. von @sheldon66

### 🐛 Fehlerbehebungen

- **[Client]**
  - In verschachtelten Unterseiten wird die Blockliste nicht angezeigt, wenn die Maus über die Schaltfläche "Block hinzufügen" bewegt wird ([#6832](https://github.com/nocobase/nocobase/pull/6832)) von @zhangzhonghe

  - Wenn die Beziehungsfeldkomponente des Filterformulars zu einem Datenselektor geändert wird, fehlt das Konfigurationselement "Mehrfachauswahl zulassen" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) von @zhangzhonghe

  - Mehrere Fehlermeldungen werden angezeigt, wenn eine Validierungsregel in Formularfeldern verletzt wird ([#6805](https://github.com/nocobase/nocobase/pull/6805)) von @katherinehhh

  - Problem mit der Konfiguration von Verknüpfungsregeln in Unterformularen (Popup) innerhalb von Untertabellen ([#6803](https://github.com/nocobase/nocobase/pull/6803)) von @katherinehhh

  - Behebung des Problems, dass Unterfelder von 1:n-Feldern nicht als Filteroptionen in Filterformularen ausgewählt werden können ([#6809](https://github.com/nocobase/nocobase/pull/6809)) von @zhangzhonghe

  - Stilproblem der Untertabellen-Seitenleiste im schreibgeschützten Modus ([#6830](https://github.com/nocobase/nocobase/pull/6830)) von @katherinehhh

  - Tabellenselektor im Filterformular mit abnormalem Stil ([#6827](https://github.com/nocobase/nocobase/pull/6827)) von @zhangzhonghe

- **[Datenbank]**
  - Behebung, dass die "gehört-zu"-Assoziation nicht in appends geladen wird, wenn der Fremdschlüssel unter MariaDB bigInt ist ([#6823](https://github.com/nocobase/nocobase/pull/6823)) von @mytharcher

  - Behebung von Testfällen ([#6811](https://github.com/nocobase/nocobase/pull/6811)) von @mytharcher

- **[Sammlungsfeld: Anhang (URL)]** Anhangsfelder (URL) sollten keine Wertekonfiguration in Verknüpfungsregeln zulassen ([#6831](https://github.com/nocobase/nocobase/pull/6831)) von @katherinehhh

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem mit der Verknüpfung von ausgelösten Workflow-Aktionen von @katherinehhh
