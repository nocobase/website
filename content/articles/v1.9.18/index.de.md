---
title: "NocoBase v1.9.18: Fehlerbehebungen"
description: "Versionshinweise zu v1.9.18"
---

### 🐛 Fehlerbehebungen

- **[Aktion: Datensätze importieren]** Importierte Felder stimmen nicht mit den in den ACL-Einstellungen festgelegten Feldern überein ([#8075](https://github.com/nocobase/nocobase/pull/8075)) von @2013xile

- **[Workflow]** Behebung des Problems, dass die Ausführungsseite einen Fehler ausgibt, wenn Jobs auf einem Knoten undefiniert sind ([#8066](https://github.com/nocobase/nocobase/pull/8066)) von @mytharcher

- **[Zugriffskontrolle]** Middleware für Berechtigungsprüfungen bei Assoziationsoperationen für externe Datenquellen hinzugefügt ([#8062](https://github.com/nocobase/nocobase/pull/8062)) von @2013xile

- **[Workflow: Genehmigung]**
  - Behebung des Problems, dass ein Berechtigungsfehler ausgelöst wird, wenn zugehörige Genehmigungen eines Datensatzes im Detail-Drawer geladen werden, von @mytharcher

  - Behebung des Problems, dass Genehmigungsdatensätze im Rückgabezweig nicht im Job-Ergebnis enthalten sind, von @mytharcher

  - Behebung des Problems, dass der Prozess bei Verzweigung mit Reihenfolge und Gegenzeichnung falsch ist, von @mytharcher
