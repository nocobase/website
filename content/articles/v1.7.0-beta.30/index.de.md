---
title: "NocoBase v1.7.0-beta.30: Fehlerbehebungen"
description: "Versionshinweise zu v1.7.0-beta.30"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Wenn das Beziehungsfeld-Komponente des Filterformulars zu einem Datenselektor geändert wird, fehlt das Konfigurationselement "Mehrfachauswahl erlauben" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) von @zhangzhonghe

  - Tabellenselektor im Filterformular mit abnormalem Stil ([#6827](https://github.com/nocobase/nocobase/pull/6827)) von @zhangzhonghe

  - In verschachtelten Unterseiten wird die Blockliste nicht angezeigt, wenn die Maus über die Schaltfläche "Block hinzufügen" bewegt wird ([#6832](https://github.com/nocobase/nocobase/pull/6832)) von @zhangzhonghe

  - Mehrfachverknüpfungsfeld konnte nicht übermittelt werden, wenn Felder aus der verknüpften Sammlung angezeigt wurden ([#6833](https://github.com/nocobase/nocobase/pull/6833)) von @katherinehhh

  - Es können keine anderen Schaltflächen auf die Duplizieren-Schaltfläche gezogen werden ([#6822](https://github.com/nocobase/nocobase/pull/6822)) von @katherinehhh

  - Stilproblem der Untertabellen-Seitenleiste im schreibgeschützten Modus ([#6830](https://github.com/nocobase/nocobase/pull/6830)) von @katherinehhh

- **[Datenbank]** Behebung, dass die "gehört-zu"-Verknüpfung in Anhängen nicht geladen wird, wenn der Fremdschlüssel unter MariaDB bigInt ist ([#6823](https://github.com/nocobase/nocobase/pull/6823)) von @mytharcher

- **[Sammlungsfeld: Anhang (URL)]** Anhang (URL)-Felder sollten keine Wertekonfiguration in Verknüpfungsregeln erlauben ([#6831](https://github.com/nocobase/nocobase/pull/6831)) von @katherinehhh
