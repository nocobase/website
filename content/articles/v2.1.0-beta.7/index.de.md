---
title: "NocoBase v2.1.0-beta.7: Update des KI-Chatbox-Benutzerprompts"
description: "Versionshinweise zu v2.1.0-beta.7"
---

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** KI-Chatbox-Benutzeraufforderung aktualisiert ([#8725](https://github.com/nocobase/nocobase/pull/8725)) von @heziqiang

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem die CollectionField-Komponente in der DefaultValue-Komponente nicht gerendert wurde ([#8744](https://github.com/nocobase/nocobase/pull/8744)) von @mytharcher

  - Problem behoben, bei dem der Datenblock beim Wechseln von Menüs nicht aktualisiert wurde. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) von @gchust

- **[Flow-Engine]** Problem behoben, bei dem ctx.exit die Ausführung von benutzerdefinierten Ereignisflüssen nicht beenden konnte. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) von @gchust

- **[Datenbank]** Fehler bei benutzerdefinierter Feld-RegEx-Prüfung in v2 behoben ([#8729](https://github.com/nocobase/nocobase/pull/8729)) von @jiannx

- **[Server]** Cache-Problem durch Anhängen eines Hashs an Assets behoben ([#8730](https://github.com/nocobase/nocobase/pull/8730)) von @chenos

- **[Zugriffskontrolle]** Bei der Einstellung von ACL-Metadaten verwendete Datenbankinstanz ist falsch ([#8747](https://github.com/nocobase/nocobase/pull/8747)) von @2013xile

- **[KI-Mitarbeiter]**
  - Fehler beim KI-Mitarbeiter-Chat bei aktivierter Wissensdatenbank behoben ([#8746](https://github.com/nocobase/nocobase/pull/8746)) von @cgyrock

  - Darstellungsproblem der KI-Datenquellenkonfiguration behoben. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) von @cgyrock

- **[Flow-Engine]** SQL-Destroy-Fehler behoben ([#8745](https://github.com/nocobase/nocobase/pull/8745)) von @chenos

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem behoben, bei dem der benutzerdefinierte Aktions-Workflow bei Ausführung als Unter-Workflow hängen blieb ([#8738](https://github.com/nocobase/nocobase/pull/8738)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem Abfrageergebnisse aufgrund von nach Typ gefilterten Knoten nicht angezeigt wurden von @mytharcher

  - Fehlenden Parameter hinzugefügt, um zu vermeiden, dass Assoziationen beim Einreichen einer neuen Genehmigung nicht aktualisiert werden von @mytharcher

  - Problem behoben, bei dem bei manueller Ausführung des Genehmigungs-Workflows ein Fehler ausgelöst wurde von @mytharcher

  - Problem behoben, bei dem ein Fehler durch fehlenden Wert von `dataAfter` beim Hinzufügen oder Delegieren ausgelöst wurde von @mytharcher

  - ACL-Problem behoben, bei dem Assoziationswerte nicht erstellt oder aktualisiert werden sollten, wenn der Benutzer keine Berechtigung hat von @mytharcher

  - Assoziationswerte in Genehmigungsaktionen bereinigt, um jegliche Datenmanipulation jenseits der Berechtigung zu vermeiden von @mytharcher

  - Problem behoben, bei dem der Parameter `appends` durch ACL gefiltert wurde von @mytharcher
