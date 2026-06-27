---
title: "NocoBase v2.0.8: Update des KI-Chatbox-Benutzer-Prompts"
description: "Versionshinweise zu v2.0.8"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Aktualisierung des Benutzer-Prompts im KI-Chatfenster ([#8725](https://github.com/nocobase/nocobase/pull/8725)) von @heziqiang

### 🐛 Fehlerbehebungen

- **[Server]** Behebung eines Cache-Problems durch Anhängen eines Hashs an Assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) von @chenos

- **[KI-Mitarbeiter]** Problem mit der Darstellung der KI-Datenquellenkonfiguration behoben. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) von @cgyrock

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem behoben, bei dem ein benutzerdefinierter Aktions-Workflow hängen blieb, wenn er als Unter-Workflow ausgeführt wurde ([#8738](https://github.com/nocobase/nocobase/pull/8738)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Bereinigung von Assoziationswerten in Genehmigungsaktionen, um jegliche Datenmanipulation außerhalb der Berechtigungen zu vermeiden von @mytharcher

  - Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn ein Genehmigungs-Workflow manuell ausgeführt wurde von @mytharcher

  - Fehler behoben, der durch fehlende Werte von `dataAfter` beim Hinzufügen oder Delegieren verursacht wurde von @mytharcher

  - Problem behoben, bei dem der Parameter `appends` durch die ACL gefiltert wurde von @mytharcher

  - ACL-Problem behoben, bei dem Assoziationswerte nicht erstellt oder aktualisiert werden sollten, wenn der Benutzer keine Berechtigung hat von @mytharcher
