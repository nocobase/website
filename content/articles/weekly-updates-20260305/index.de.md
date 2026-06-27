---
title: "Wöchentliche Updates｜KI-Mitarbeiter unterstützen jetzt die Suche in integrierten Dokumenten mit mehreren Schlüsselwörtern"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 27. Februar bis 5. März 2026."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.10](https://www.nocobase.com/en/blog/v2.0.10)

*Veröffentlichungsdatum: 04.03.2026*

### 🐛 Fehlerbehebungen

- **[KI-Mitarbeiter]** Fehler im KI-Mitarbeiter-Chat bei aktivierter Wissensdatenbank behoben ([#8746](https://github.com/nocobase/nocobase/pull/8746)) von @cgyrock
- **[Flow-Engine]** Fehler bei SQL-Destroy behoben ([#8745](https://github.com/nocobase/nocobase/pull/8745)) von @chenos
- **[Zugriffskontrolle]** Falsche Datenbankinstanz bei der Festlegung von ACL-Metadaten ([#8747](https://github.com/nocobase/nocobase/pull/8747)) von @2013xile
- **[Workflow: Genehmigung]** Problem behoben, bei dem Abfrageergebnisse aufgrund von nach Typ gefilterten Knoten nicht angezeigt wurden von @mytharcher

### [v2.0.9](https://www.nocobase.com/en/blog/v2.0.9)

*Veröffentlichungsdatum: 03.03.2026*

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem die CollectionField-Komponente in der DefaultValue-Komponente nicht gerendert wurde ([#8744](https://github.com/nocobase/nocobase/pull/8744)) von @mytharcher
  - Problem behoben, bei dem der Datenblock beim Wechseln von Menüs nicht aktualisiert wurde. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) von @gchust
- **[Datenbank]** Fehler bei benutzerdefinierter Feld-RegEx-Prüfung in v2 behoben ([#8729](https://github.com/nocobase/nocobase/pull/8729)) von @jiannx
- **[Flow-Engine]** Problem behoben, bei dem ctx.exit die Ausführung von benutzerdefinierten Ereignisflüssen nicht beenden konnte. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) von @gchust
- **[Workflow: Genehmigung]** Fehlenden Parameter hinzugefügt, um zu vermeiden, dass Verknüpfungen beim Einreichen einer neuen Genehmigung nicht aktualisiert werden von @mytharcher

### [v2.0.8](https://www.nocobase.com/en/blog/v2.0.8)

*Veröffentlichungsdatum: 01.03.2026*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** KI-Chatbox-Benutzeraufforderung aktualisiert ([#8725](https://github.com/nocobase/nocobase/pull/8725)) von @heziqiang

### 🐛 Fehlerbehebungen

- **[Server]** Cache-Problem durch Anhängen von Hash an Assets behoben ([#8730](https://github.com/nocobase/nocobase/pull/8730)) von @chenos
- **[KI-Mitarbeiter]** Darstellungsproblem der KI-Datenquellenkonfiguration behoben. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) von @cgyrock
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem behoben, bei dem der benutzerdefinierte Aktions-Workflow bei der Ausführung als Unter-Workflow hängen blieb ([#8738](https://github.com/nocobase/nocobase/pull/8738)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Assoziationswerte in Genehmigungsaktionen bereinigt, um Datenmanipulationen außerhalb der Berechtigungen zu vermeiden von @mytharcher
  - Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn der Genehmigungs-Workflow manuell ausgeführt wurde von @mytharcher
  - Fehler behoben, der durch fehlenden `dataAfter`-Wert beim Hinzufügen oder Delegieren verursacht wurde von @mytharcher
  - Problem behoben, bei dem die Filterung des `appends`-Parameters durch ACL erfolgte von @mytharcher
  - ACL-Problem behoben, bei dem Assoziationswerte nicht erstellt oder aktualisiert werden sollten, wenn der Benutzer keine Berechtigung hat von @mytharcher

### [v2.0.7](https://www.nocobase.com/en/blog/v2.0.7)

*Veröffentlichungsdatum: 27.02.2026*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Unterstützung für die Suche in integrierten Dokumenten mit mehreren Schlüsselwörtern und das Lesen mehrerer Dokumente in einem einzigen Tool-Aufruf ([#8718](https://github.com/nocobase/nocobase/pull/8718)) von @2013xile

### 🚀 Verbesserungen

- **[client]** Unterstützung für Zusammenfassungskonfiguration für Tabellen ([#8721](https://github.com/nocobase/nocobase/pull/8721)) von @chenos
- **[NocoBase einbetten]** Bereinigen-API bereitgestellt, um Assoziationswerte in Aktionen zu filtern ([#8688](https://github.com/nocobase/nocobase/pull/8688)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Datenvisualisierung]** i18n für den Plugin-Diagramm-Eintragstext behoben ([#8716](https://github.com/nocobase/nocobase/pull/8716)) von @heziqiang
- **[Workflow: JavaScript]** Problem behoben, dass Testfälle unter Windows nicht bestanden werden konnten ([#8722](https://github.com/nocobase/nocobase/pull/8722)) von @mytharcher
- **[KI-Mitarbeiter]** Problem behoben, bei dem KI-Nachrichten mit der Länge 0 gerendert wurden ([#8723](https://github.com/nocobase/nocobase/pull/8723)) von @heziqiang
- **[Vorlagendruck]** Problem behoben, bei dem die ACL-API geändert, aber nicht an das Plugin angepasst wurde von @mytharcher
- **[Workflow: Genehmigung]** Assoziationswerte in Genehmigungsaktionen bereinigt, um Datenmanipulationen außerhalb der Berechtigungen zu vermeiden von @mytharcher
- **[E-Mail-Manager]** Fehler beim Parsen des Bild-Content-ID-Formats behoben von @jiannx

### [v2.0.6](https://www.nocobase.com/en/blog/v2.0.6)

*Veröffentlichungsdatum: 26.02.2026*

### 🐛 Fehlerbehebungen

- **[KI-Mitarbeiter]** Fehler bei KI-Konversation bei Verwendung einer MySQL-Datenbank behoben. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) von @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.7](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Veröffentlichungsdatum: 04.03.2026*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** KI-Chatbox-Benutzeraufforderung aktualisiert ([#8725](https://github.com/nocobase/nocobase/pull/8725)) von @heziqiang

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem die CollectionField-Komponente in der DefaultValue-Komponente nicht gerendert wurde ([#8744](https://github.com/nocobase/nocobase/pull/8744)) von @mytharcher
  - Problem behoben, bei dem der Datenblock beim Wechseln von Menüs nicht aktualisiert wurde. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) von @gchust
- **[Flow-Engine]** Problem behoben, bei dem ctx.exit die Ausführung von benutzerdefinierten Ereignisflüssen nicht beenden konnte. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) von @gchust
- **[Datenbank]** Fehler bei benutzerdefinierter Feld-RegEx-Prüfung in v2 behoben ([#8729](https://github.com/nocobase/nocobase/pull/8729)) von @jiannx
- **[Server]** Cache-Problem durch Anhängen von Hash an Assets behoben ([#8730](https://github.com/nocobase/nocobase/pull/8730)) von @chenos
- **[Zugriffskontrolle]** Falsche Datenbankinstanz bei der Festlegung von ACL-Metadaten ([#8747](https://github.com/nocobase/nocobase/pull/8747)) von @2013xile
- **[KI-Mitarbeiter]**

  - Fehler im KI-Mitarbeiter-Chat bei aktivierter Wissensdatenbank behoben ([#8746](https://github.com/nocobase/nocobase/pull/8746)) von @cgyrock
  - Darstellungsproblem der KI-Datenquellenkonfiguration behoben. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) von @cgyrock
- **[Flow-Engine]** Fehler bei SQL-Destroy behoben ([#8745](https://github.com/nocobase/nocobase/pull/8745)) von @chenos
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem behoben, bei dem der benutzerdefinierte Aktions-Workflow bei der Ausführung als Unter-Workflow hängen blieb ([#8738](https://github.com/nocobase/nocobase/pull/8738)) von @mytharcher
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem Abfrageergebnisse aufgrund von nach Typ gefilterten Knoten nicht angezeigt wurden von @mytharcher
  - Fehlenden Parameter hinzugefügt, um zu vermeiden, dass Verknüpfungen beim Einreichen einer neuen Genehmigung nicht aktualisiert werden von @mytharcher
  - Problem behoben, bei dem ein Fehler ausgelöst wurde, wenn der Genehmigungs-Workflow manuell ausgeführt wurde von @mytharcher
  - Fehler behoben, der durch fehlenden `dataAfter`-Wert beim Hinzufügen oder Delegieren verursacht wurde von @mytharcher
  - ACL-Problem behoben, bei dem Assoziationswerte nicht erstellt oder aktualisiert werden sollten, wenn der Benutzer keine Berechtigung hat von @mytharcher
  - Assoziationswerte in Genehmigungsaktionen bereinigt, um Datenmanipulationen außerhalb der Berechtigungen zu vermeiden von @mytharcher
  - Problem behoben, bei dem die Filterung des `appends`-Parameters durch ACL erfolgte von @mytharcher

### [v2.1.0-beta.6](https://www.nocobase.com/en/blog/v2.1.0-beta.6)

*Veröffentlichungsdatum: 27.02.2026*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Unterstützung für die Suche in integrierten Dokumenten mit mehreren Schlüsselwörtern und das Lesen mehrerer Dokumente in einem einzigen Tool-Aufruf ([#8718](https://github.com/nocobase/nocobase/pull/8718)) von @2013xile

### 🚀 Verbesserungen

- **[client]** Unterstützung für Zusammenfassungskonfiguration für Tabellen ([#8721](https://github.com/nocobase/nocobase/pull/8721)) von @chenos
- **[KI-Mitarbeiter]** KI-Chatbox-Benutzeraufforderung aktualisiert ([#8717](https://github.com/nocobase/nocobase/pull/8717)) von @heziqiang
- **[NocoBase einbetten]** Bereinigen-API bereitgestellt, um Assoziationswerte in Aktionen zu filtern ([#8688](https://github.com/nocobase/nocobase/pull/8688)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[KI-Mitarbeiter]** Problem behoben, bei dem KI-Nachrichten mit der Länge 0 gerendert wurden ([#8723](https://github.com/nocobase/nocobase/pull/8723)) von @heziqiang
- **[Datenvisualisierung]** i18n für den Plugin-Diagramm-Eintragstext behoben ([#8716](https://github.com/nocobase/nocobase/pull/8716)) von @heziqiang
- **[Workflow: JavaScript]** Problem behoben, dass Testfälle unter Windows nicht bestanden werden konnten ([#8722](https://github.com/nocobase/nocobase/pull/8722)) von @mytharcher
- **[Vorlagendruck]** Problem behoben, bei dem die ACL-API geändert, aber nicht an das Plugin angepasst wurde von @mytharcher
- **[Workflow: Genehmigung]** Assoziationswerte in Genehmigungsaktionen bereinigt, um Datenmanipulationen außerhalb der Berechtigungen zu vermeiden von @mytharcher
- **[E-Mail-Manager]** Fehler beim Parsen des Bild-Content-ID-Formats behoben von @jiannx

### [v2.1.0-beta.5](https://www.nocobase.com/en/blog/v2.1.0-beta.5)

*Veröffentlichungsdatum: 26.02.2026*

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]** KI-Chatbox-Benutzeraufforderung aktualisiert ([#8717](https://github.com/nocobase/nocobase/pull/8717)) von @heziqiang

### 🐛 Fehlerbehebungen

- **[KI-Mitarbeiter]** Fehler bei KI-Konversation bei Verwendung einer MySQL-Datenbank behoben. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) von @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.7](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Veröffentlichungsdatum: 26.02.2026*

### 🎉 Neue Funktionen

- **[KI-Mitarbeiter]** Unterstützung für die Suche in integrierten Dokumenten mit mehreren Schlüsselwörtern und das Lesen mehrerer Dokumente in einem einzigen Tool-Aufruf ([#8718](https://github.com/nocobase/nocobase/pull/8718)) von @2013xile

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]** KI-Chatbox-Benutzeraufforderung aktualisiert ([#8717](https://github.com/nocobase/nocobase/pull/8717)) von @heziqiang

### 🐛 Fehlerbehebungen

- **[client]** Auf Mobilgeräten zuerst das Menü schließen und dann den Seitenwechsel durchführen ([#8699](https://github.com/nocobase/nocobase/pull/8699)) von @zhangzhonghe
- **[KI LLM: GigaChat]** Problem behoben, dass das GigaChat-Plugin in Version 2.0 nicht funktionierte. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) von @cgyrock
- **[KI-Mitarbeiter]**

  - Fehler bei KI-Konversation bei Verwendung einer MySQL-Datenbank behoben. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) von @cgyrock
  - Vereinheitlichung der Dateieingabe für ChatGPT-APIs mittels ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) von @cgyrock
  - Fehler im KI-Agenten behoben, wenn der Benutzer eine neue Nachricht sendet, ohne die Tool-Ausführung zu bestätigen ([#8697](https://github.com/nocobase/nocobase/pull/8697)) von @cgyrock
- **[KI: Wissensdatenbank]** Fehler beim Start des KI-Wissensdatenbank-Plugins behoben. von @cgyrock
- **[E-Mail-Manager]** Fehler bei der Bilddarstellung von @jiannx
