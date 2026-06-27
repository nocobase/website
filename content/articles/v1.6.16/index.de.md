---
title: "NocoBase v1.6.16: Fehlerbehebungen"
description: "Versionshinweise zu v1.6.16"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Die Eigenschaft `x-disabled` wirkt nicht auf Formularfelder ([#6610](https://github.com/nocobase/nocobase/pull/6610)) von @katherinehhh

  - Problem mit der Feldbeschriftungsanzeige, um Abschneiden durch Doppelpunkt zu verhindern ([#6599](https://github.com/nocobase/nocobase/pull/6599)) von @katherinehhh

- **[Datenbank]** Beim Löschen von 1:n-Datensätzen, wenn sowohl `filter` als auch `filterByTk` übergeben werden und `filter` ein Assoziationsfeld enthält, wird `filterByTk` ignoriert ([#6606](https://github.com/nocobase/nocobase/pull/6606)) von @2013xile
