---
title: "NocoBase v1.9.32: Behebung eines Stack-Overflows durch Endlosschleife beim Lazy Loading von Assoziationsfeldern"
description: "Versionshinweise zu v1.9.32"
---

### 🎉 Neue Funktionen

- **[Workflow]** Neue Systemvariablen im Workflow hinzugefügt, darunter `instanceId` und `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]** Behebung eines Stack-Overflows, der durch eine Endlosschleife beim Lazy Loading von assoziierten Feldern in der Anzeige verursacht wurde ([#8262](https://github.com/nocobase/nocobase/pull/8262)) von @zhangzhonghe

- **[Aktion: Datensätze importieren]** Behebung des Problems, dass der Zeilenindex in der Fehlermeldung immer 1 war, wenn beim Import ein Fehler ausgelöst wurde ([#8244](https://github.com/nocobase/nocobase/pull/8244)) von @mytharcher

- **[Workflow: Manueller Knoten]** Behebung des Problems, dass ein Fehler ausgelöst wurde, wenn die Ausführung eines gelöschten Workflows abgebrochen wurde ([#8258](https://github.com/nocobase/nocobase/pull/8258)) von @mytharcher

- **[Sammlungsfeld: Sequenz]** Behebung eines Fehlers, wenn der Befehl zur Reparatur des Feld-Sequenz auf eine nicht existierende Sammlung in der aktuellen Umgebung trifft ([#8251](https://github.com/nocobase/nocobase/pull/8251)) von @cgyrock

- **[Aktion: Datensätze importieren Pro]** Behebung der Logik zur Eindeutigkeitsprüfung, die einen Fehler auslöste, wenn der Wert des eindeutigen Feldes null war, von @mytharcher

- **[Workflow: Genehmigung]** Behebung des doppelten Rollbacks derselben Transaktion von @mytharcher
