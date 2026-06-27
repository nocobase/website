---
title: "Wöchentliche Updates｜Hinzufügen von Kompatibilitätsprüfungen für dynamische API-Befehle"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 28. Mai bis 04. Juni 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Hauptsächlich für Testnutzer, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technisch versierte Nutzer, die an der neuesten Entwicklung des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.61](https://www.nocobase.com/en/blog/v2.0.61)

*Veröffentlichungsdatum: 03.06.2026*

### 🚀 Verbesserungen

- **[client]** Verbesserte Autovervollständigungsunterstützung für einige integrierte RunJS-Funktionen. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) von @gchust
- **[undefined]** Aktualisierte die Embed NocoBase-Dokumentation für das Open-Source-Plugin. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) von @zhangzhonghe
  Referenz: [NocoBase einbetten](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Fehlerbehebungen

- **[flow-engine]**

  - Behoben: Problem, bei dem die Seite beim Setzen von Feldwerten für ein Unterformular hängen blieb. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) von @gchust
  - Behoben: Problem, bei dem das Popup nach dem Umschalten des UI-Konfigurationsmodus-Schalters veraltete UI-Daten anzeigte. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) von @gchust
- **[client]**

  - Behoben: Falsches Verhalten von Verknüpfungsregeln für Datensatzaktionen in Tabellenblöcken. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) von @gchust
  - Behoben: Problem, dass ausgewählte Beziehungsfelddaten auf Mobilgeräten nicht angezeigt wurden. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) von @zhangzhonghe
  - Behoben: Problem, dass Felder schreibgeschützt wurden, wenn sie nach dem Ausblenden durch Verknüpfungsregeln wieder angezeigt wurden. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) von @katherinehhh
- **[cli]** Behoben: Die Nginx-Vorlage dient nun `.mjs`-Assets mit dem JavaScript-MIME-Typ aus. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) von @mytharcher
- **[database]** Behoben: Problem, dass der Import numerischer Passwortwerte fehlschlagen konnte. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) von @2013xile
- **[AI-Mitarbeiter]** Behoben: Validierung der Basis-URL des KI-Anbieters. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) von @cgyrock
- **[Flow-Engine]**

  - Behoben: Problem, dass das Ziehen von Popup-Tabs zum Neuanordnen nicht funktionierte. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) von @gchust
  - Behoben: Problem, dass das Ändern eines Blocks nach dem Duplizieren seiner Vorlage unbeabsichtigt den Inhalt des Originalblocks beeinflussen konnte. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) von @gchust
- **[Benachrichtigung: In-App-Nachricht]** Behoben: Ein SQL-Injection-Risiko im Zeitstempelfilter des In-App-Benachrichtigungskanals. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) von @mytharcher
- **[Lizenzeinstellungen]** Behoben: Problem, dass die Seite der Lizenzeinstellungen lange hängen bleiben konnte, wenn die Paket-Anmeldeüberprüfung langsam oder nicht erreichbar war. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) von @hongboji
- **[Workflow: JavaScript]** Klargestellt, dass der Unterstützungsmodus des Workflow-JavaScript-Moduls unsicher ist und keine Berechtigungsgrenze darstellt. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) von @mytharcher
  Referenz: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Zugriffskontrolle]** Behoben: Unvollständige Berechtigungen bei der ersten Anmeldung, wenn eine Verbundrolle die Standardrolle war. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) von @2013xile
- **[Dateimanager]** Behoben: Validierung des lokalen Dateispeicherpfads, um zu verhindern, dass unsichere Pfade aus dem konfigurierten Speicherstammverzeichnis entkommen. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) von @mytharcher
- **[Passwortrichtlinie]** Behoben: Problem, dass die Passwortrichtlinienvalidierung für numerische Passwortwerte fehlschlagen konnte. von @2013xile

### [v2.0.60](https://www.nocobase.com/en/blog/v2.0.60)

*Veröffentlichungsdatum: 29.05.2026*

### 🚀 Verbesserungen

- **[AI-Mitarbeiter]** Verbessert: Das LLM-Basis-URL-Feld kann nun global gültige Variablen in Erstellungs- und Bearbeitungsformularen verwenden. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) von @cgyrock

### 🐛 Fehlerbehebungen

- **[client]** Behebung der Badge-Breite in der oberen Navigationsleiste ([#9607](https://github.com/nocobase/nocobase/pull/9607)) von @zhangzhonghe
- **[AI-Mitarbeiter]** Behoben: KI-Shortcut-Buttons erhielten einen leeren Blockkontext, nachdem referenzierte Tabellenblöcke entfernt wurden. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) von @cgyrock
- **[Migrationsmanager]** Behebung von PostgreSQL-Migrationsdiffs, sodass geerbte Spalten von Kindtabellen nicht gelöscht werden, wenn eine lokale Spalte geerbt wird. von @hongboji

### [v2.0.59](https://www.nocobase.com/en/blog/v2.0.59)

*Veröffentlichungsdatum: 28.05.2026*

### 🐛 Fehlerbehebungen

* **[ai]** LangChain-Abhängigkeiten auf stabile Versionen festgelegt, um Fehler bei Ollama-Modell-Tool-Aufrufen zu verhindern und betroffene Upstream-Releases zu vermeiden. ([#9604](https://github.com/nocobase/nocobase/pull/9604)) von @cgyrock
* **[flow-engine]** Behoben: Falscher Frontend-Log-Level. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) von @gchust
* **[Sammlung: Baum]** Behoben: Unklare Fehlermeldungen bei fehlgeschlagenen Abfragen aufgrund zirkulärer Eltern-Kind-Beziehungen in Baumdaten. ([#9603](https://github.com/nocobase/nocobase/pull/9603)) von @zhangzhonghe
* **[KI: Wissensdatenbank]** LangChain-Abhängigkeiten auf stabile Versionen festgelegt, um Fehler bei Ollama-Modell-Tool-Aufrufen zu verhindern und betroffene Upstream-Releases zu vermeiden. von @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.44](https://www.nocobase.com/en/blog/v2.1.0-beta.44)

*Veröffentlichungsdatum: 03.06.2026*

### 🚀 Verbesserungen

- **[Workflow: Genehmigung]** Validierungsregeln für Genehmigungsauslöser- und Knotenkonfigurationen angepasst, um sicherzustellen, dass UI-bezogene Felder vorhanden sind. von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]** Behoben: Problem, dass ausgewählte Beziehungsfelddaten auf Mobilgeräten nicht angezeigt wurden. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) von @zhangzhonghe
- **[client-v2]**

  - Behoben: Speicherfehler bei Menüverknüpfungsregeln. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) von @zhangzhonghe
  - Behoben: Übermäßiger Abstand oberhalb von Blöcken auf v2-Seiten. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) von @zhangzhonghe
- **[flow-engine]** Behoben: Problem, bei dem die Seite beim Setzen von Feldwerten für ein Unterformular hängen blieb. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) von @gchust
- **[AI-Mitarbeiter]**

  - Behoben: Validierung der Basis-URL des KI-Anbieters. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) von @cgyrock
  - Behoben: `ctx.get`-Fehler in KI-Mitarbeiter-Workflow-Knoten. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) von @cgyrock
- **[Benachrichtigung: In-App-Nachricht]** Behoben: Ein SQL-Injection-Risiko im Zeitstempelfilter des In-App-Benachrichtigungskanals. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) von @mytharcher
- **[Aktion: Datensatz duplizieren]** Behoben: Problem, dass der Button-Status nicht zurückgesetzt wurde, wenn die Duplizierung eines Datensatzes fehlschlug. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) von @katherinehhh
- **[Kalender]** Behoben: Problem, dass Kalenderereignisfarben auf v2-Seiten nicht aus dem konfigurierten Farbfeld gerendert wurden. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) von @jiannx
- **[Flow-Engine]**

  - Behoben: Problem, dass das Ändern eines Blocks nach dem Duplizieren seiner Vorlage unbeabsichtigt den Inhalt des Originalblocks beeinflussen konnte. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) von @gchust
  - Behoben: Problem, dass das Ziehen von Popup-Tabs zum Neuanordnen nicht funktionierte. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) von @gchust

### [v2.1.0-beta.43](https://www.nocobase.com/en/blog/v2.1.0-beta.43)

*Veröffentlichungsdatum: 02.06.2026*

### 🎉 Neue Funktionen

- **[client-v2]** `TypedVariableInput` hinzugefügt, sodass die SMTP-Port- und Secure-Mode-Felder des v2-E-Mail-Plugins entweder eine typisierte Konstante oder eine `{{ $env.X }}`-Variable akzeptieren können. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) von @Molunerfinn
- **[Zugriffskontrolle]** Die Einstellungsseiten für Benutzer und Rollen & Berechtigungen wurden auf v2 migriert. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) von @jiannx

### 🚀 Verbesserungen

- **[undefined]** Aktualisierte die Embed NocoBase-Dokumentation für das Open-Source-Plugin ([#9642](https://github.com/nocobase/nocobase/pull/9642)) von @zhangzhonghe
  Referenz: [NocoBase einbetten](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Verbesserte Autovervollständigungsunterstützung für einige integrierte RunJS-Funktionen. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) von @gchust
- **[cli]** Verbesserte Init- und Selbstupdate-Anleitung ([#9633](https://github.com/nocobase/nocobase/pull/9633)) von @chenos

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebung des Problems, dass Blöcke nach dem Aktualisieren der Seite fälschlicherweise als gelöscht angezeigt werden können ([#9662](https://github.com/nocobase/nocobase/pull/9662)) von @zhangzhonghe
  - Behoben: Falsches Verhalten von Verknüpfungsregeln für Datensatzaktionen in Tabellenblöcken. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) von @gchust
  - (Verknüpfungsregel) Behebung, dass Felder schreibgeschützt werden, wenn sie nach dem Ausblenden wieder angezeigt werden ([#9649](https://github.com/nocobase/nocobase/pull/9649)) von @katherinehhh
- **[cli]** Behebung der Nginx-Vorlage, um `.mjs`-Assets mit dem JavaScript-MIME-Typ auszuliefern. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) von @mytharcher
- **[database]** Behoben: Problem, dass der Import numerischer Passwortwerte fehlschlagen konnte ([#9635](https://github.com/nocobase/nocobase/pull/9635)) von @2013xile
- **[flow-engine]**

  - Behoben: Problem, bei dem das Popup nach dem Umschalten des UI-Konfigurationsmodus-Schalters veraltete UI-Daten anzeigte. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) von @gchust
  - Behebung des Problems, dass die Feldsuche beim Überfahren von Assoziationsfeldern geleert wird ([#9646](https://github.com/nocobase/nocobase/pull/9646)) von @zhangzhonghe
- **[client-v2]** Feldwertzuweisung beibehalten ([#9640](https://github.com/nocobase/nocobase/pull/9640)) von @katherinehhh
- **[Dateimanager]** Behoben: Validierung des lokalen Dateispeicherpfads, um zu verhindern, dass unsichere Pfade aus dem konfigurierten Speicherstammverzeichnis entkommen. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) von @mytharcher
- **[Block: Gantt]** Verbesserte Platzierung von Gantt-Tooltips, um Aufgabenbalken nicht zu überdecken, und konsistente Ausrichtung von Aufgabenbezeichnungen innerhalb und außerhalb der Balken ([#9638](https://github.com/nocobase/nocobase/pull/9638)) von @jiannx
- **[Zugriffskontrolle]** Behoben: Unvollständige Berechtigungen bei der ersten Anmeldung, wenn eine Verbundrolle die Standardrolle ist ([#9632](https://github.com/nocobase/nocobase/pull/9632)) von @2013xile
- **[Lizenzeinstellungen]** Behoben: Problem, dass die Seite der Lizenzeinstellungen lange hängen bleibt, wenn die Paket-Anmeldeüberprüfung langsam oder nicht erreichbar ist ([#9650](https://github.com/nocobase/nocobase/pull/9650)) von @hongboji
- **[Workflow: JavaScript]** Klargestellt, dass der Unterstützungsmodus des Workflow-JavaScript-Moduls unsicher ist und keine Berechtigungsgrenze darstellt ([#9629](https://github.com/nocobase/nocobase/pull/9629)) von @mytharcher
  Referenz: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Passwortrichtlinie]** Behoben: Problem, dass die Passwortrichtlinienvalidierung für numerische Passwortwerte fehlschlagen konnte von @2013xile

### [v2.1.0-beta.40](https://www.nocobase.com/en/blog/v2.1.0-beta.40)

*Veröffentlichungsdatum: 30.05.2026*

### 🎉 Neue Funktionen

- **[client-v2]** Unterstützung für Feldwertzuweisung in Formular-Submit-Aktionen ([#9570](https://github.com/nocobase/nocobase/pull/9570)) von @katherinehhh
- **[Office-Dateivorschau]** Migration des Office-Dateivorschau-Plugins auf den v2 (FlowEngine)-Client. ([#9620](https://github.com/nocobase/nocobase/pull/9620)) von @Molunerfinn

### 🚀 Verbesserungen

- **[Benachrichtigungsmanager]** Migration der benachrichtigungsbezogenen Plugins auf v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[client]** Behebung der Badge-Breite in der oberen Navigationsleiste ([#9607](https://github.com/nocobase/nocobase/pull/9607)) von @zhangzhonghe
- **[Block: Gantt]** Behoben: Pfad des freigegebenen v2-Gantt-Ordners und Zebrastreifen hinzugefügt. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) von @jiannx
- **[Lizenzeinstellungen]** Client-v2-Unterstützung für Lizenzeinstellungen und kommerzielle Lizenzeinspritzung hinzugefügt. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) von @jiannx
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebung doppelter "Workflow auslösen"-Optionen in v2-Block-Aktionsmenüs ([#9622](https://github.com/nocobase/nocobase/pull/9622)) von @zhangzhonghe
- **[AI-Mitarbeiter]** Behoben: KI-Shortcut-Buttons erhielten einen leeren Blockkontext, nachdem referenzierte Tabellenblöcke entfernt wurden. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) von @cgyrock
- **[plugin-commercial]** Client-v2-Komponenten für kommerzielle Lizenzen und Topbar-Lizenzstatuseintrag hinzugefügt. von @jiannx
- **[Migrationsmanager]** Behebung von PostgreSQL-Migrationsdiffs, sodass geerbte Spalten von Kindtabellen nicht gelöscht werden, wenn eine lokale Spalte geerbt wird. von @hongboji

### [v2.1.0-beta.38](https://www.nocobase.com/en/blog/v2.1.0-beta.38)

*Veröffentlichungsdatum: 29.05.2026*

### 🎉 Neue Funktionen

- **[cli]** Kompatibilitätsprüfungen für dynamische API-Befehle hinzugefügt ([#9613](https://github.com/nocobase/nocobase/pull/9613)) von @chenos
- **[client-v2]**

  - Unterstützung für eingebettete v2-Seiten und öffentliche Formular-v2-Seiten ([#9431](https://github.com/nocobase/nocobase/pull/9431)) von @zhangzhonghe
  - Neugestaltung der client-v2 Plugin-Manager-Seite als responsive Karten-basierte Benutzeroberfläche mit Kategoriefilter, Suche, Aktivieren/Deaktivieren/Entfernen, Massenaktivierung und einem Plugin-Detail-Modal; außerdem wurde die client-v1 Plugin-Manager-Seite auf schmalen Bildschirmen responsiv gemacht. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) von @Molunerfinn
- **[Workflow]**

  - Timeout-Steuerung für Workflows hinzugefügt, unterstützt das automatische Abbrechen einer zeitlich begrenzten Ausführung, wenn die Timeout-Option gesetzt ist ([#9363](https://github.com/nocobase/nocobase/pull/9363)) von @mytharcher
  - Administrator-API hinzugefügt, um gestartete Workflow-Ausführungen vom Anfang oder einem bestimmten Knoten erneut auszuführen. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) von @mytharcher
- **[Block: Gantt]** v2-Unterstützung für den Gantt-Block hinzugefügt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) von @jiannx
- **[Workflow: Webhook]** 408-Antwortstatus für zeitlich abgelaufene Webhook-Workflows (Sync-Modus) hinzugefügt von @mytharcher
- **[Workflow: Unterworkflow]** Unterstützung für Timeout-Einstellungen im Workflow von @mytharcher
- **[Auth: OIDC]** Migration von `plugin-auth-oidc` auf v2-Admin; Anmeldebutton, Admin-Einstellungsformular und SSO-Auto-Weiterleitung funktionieren jetzt unter v2. von @Molunerfinn
- **[Workflow: Genehmigung]** Unterstützung für Timeout-Einstellungen im Workflow von @mytharcher
- **[Auth: LDAP]** v2-Client-Eintrag hinzugefügt, sodass der LDAP-Authentifikator sein Anmeldeformular und seine Admin-Einstellungen auf v2-Apps rendert. von @Molunerfinn

### 🚀 Verbesserungen

- **[client-v2]**

  - Einstellung für die Zeilenauswahl in v2-Tabellen hinzugefügt ([#9614](https://github.com/nocobase/nocobase/pull/9614)) von @katherinehhh
  - Unterstützung für Aktionsfarben im Aktionspanel ([#9612](https://github.com/nocobase/nocobase/pull/9612)) von @katherinehhh
  - Entfernen der Option "Ausgeblendet" aus der Menükonfiguration ([#9596](https://github.com/nocobase/nocobase/pull/9596)) von @zhangzhonghe
- **[client]** Entfernen der Option "Ausgeblendet" aus den Menüpunkteinstellungen ([#9595](https://github.com/nocobase/nocobase/pull/9595)) von @zhangzhonghe
- **[cli]** Optimierung des App-Upgrade-Ablaufs ([#9587](https://github.com/nocobase/nocobase/pull/9587)) von @chenos
- **[AI-Mitarbeiter]** Verbessert: Das LLM-Basis-URL-Feld kann nun global gültige Variablen in Erstellungs- und Bearbeitungsformularen verwenden. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) von @cgyrock
- **[IP-Einschränkung]** Einen v2-Client für das IP-Einschränkungs-Plugin hinzugefügt. von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[flow-engine]**

  - Behoben: Falscher Frontend-Log-Level. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) von @gchust
  - Behebung instabiler Kaskadenmenüs bei der Eingabe in Suchfelder ([#9473](https://github.com/nocobase/nocobase/pull/9473)) von @zhangzhonghe
  - Behoben: Problem, dass Tabellenaktionsverknüpfungsregeln nach erfolgreicher Formularübermittlung in einem Popup falsch ausgeführt wurden. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) von @gchust
- **[ai]** LangChain-Abhängigkeiten auf stabile Versionen festgelegt, um Fehler bei Ollama-Tool-Ausführungen zu verhindern und betroffene Upstream-Releases zu vermeiden ([#9604](https://github.com/nocobase/nocobase/pull/9604)) von @cgyrock
- **[client-v2]**

  - Behebung, dass die Anmeldetabs der Sub-App rohe Übersetzungsvorlagen rendern, und verhindern, dass der v2-Authentifizierungsmethode-Bearbeitungs-Drawer beim Absenden Feldwerte verwirft. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) von @Molunerfinn
  - Verbesserung der Leistung der Plugin-Manager-Seite durch Verwendung von CSS line-clamp anstelle von antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) von @Molunerfinn
- **[client]**

  - Behebung der Zeiterhaltung für v2-Zeitfelder ([#9579](https://github.com/nocobase/nocobase/pull/9579)) von @katherinehhh
  - Behebung des synchronisierten Ausblendstatus für Unterformularverknüpfungen ([#9594](https://github.com/nocobase/nocobase/pull/9594)) von @katherinehhh
  - Erhöhung des Upload-Limits für Scan-Eingabebilder ([#9580](https://github.com/nocobase/nocobase/pull/9580)) von @katherinehhh
  - Behebung des synchronisierten mobilen Datumswähler-Popup-Werts ([#9582](https://github.com/nocobase/nocobase/pull/9582)) von @katherinehhh
  - Behebung, dass Seiten-Tabs nach dem Wechseln von Menüs verschwinden ([#9583](https://github.com/nocobase/nocobase/pull/9583)) von @zhangzhonghe
  - Behebung des Problems, dass in einer Untertabelle in einem Unterformular keine zweite Zeile hinzugefügt werden konnte ([#9586](https://github.com/nocobase/nocobase/pull/9586)) von @katherinehhh
  - Erhöhung des Upload-Limits für Scan-Eingabebilder ([#9580](https://github.com/nocobase/nocobase/pull/9580)) von @katherinehhh
- **[Sammlung: Baum]** Behebung des Fehlers, der durch zirkuläre Eltern-Kind-Daten in Baumsammlungen verursacht wurde ([#9603](https://github.com/nocobase/nocobase/pull/9603)) von @zhangzhonghe
- **[Workflow: Benutzerdefiniertes Aktionsereignis]**

  - Behoben: Benutzerdefinierte Aktions-Tabellenbuttons mit Mehrfachdatensatzkontext erlaubten fälschlicherweise die Auswahl von Workflows mit benutzerdefiniertem Kontext. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) von @mytharcher
  - Filterung der Bindungsoptionen für benutzerdefinierte Aktionsworkflows nach der aktuellen Blocksammlung. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) von @mytharcher
- **[Dateimanager]**

  - Verbesserte Fehlermeldungen bei fehlgeschlagener PDF-Vorschau und Dokumentation der CORS-Anforderungen für externen Speicher. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) von @mytharcher
    Referenz: [Dateivorschau](docs/docs/en/file-manager/file-preview/index.md)
  - Behoben: Unicode-Dateinamen-Normalisierung beim Dateiupload, um die Generierung von Objektschlüsseln mit Steuerzeichen zu vermeiden. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) von @mytharcher
- **[KI: Wissensdatenbank]** LangChain-Abhängigkeiten auf stabile Versionen festgelegt, um Fehler bei Ollama-Tool-Ausführungen zu verhindern und betroffene Upstream-Releases zu vermeiden von @cgyrock
- **[Vorlagendruck]** Behoben: Fehler bei der PDF-Konvertierung des Vorlagendrucks wurden nicht korrekt an den Client zurückgegeben von @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.45](https://www.nocobase.com/en/blog/v2.1.0-alpha.45)

*Veröffentlichungsdatum: 29.05.2026*

### 🎉 Neue Funktionen

- **[client-v2]**

  - Unterstützung für Feldwertzuweisung in Formular-Submit-Aktionen ([#9570](https://github.com/nocobase/nocobase/pull/9570)) von @katherinehhh
  - Unterstützung für eingebettete v2-Seiten und öffentliche Formular-v2-Seiten ([#9431](https://github.com/nocobase/nocobase/pull/9431)) von @zhangzhonghe
  - Hinzufügen eines Sicherheitsmenüs und der Seite für Token-Richtlinieneinstellungen zum v2-Admin; das Benutzerzentrum unterstützt jetzt die Passwortänderung. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) von @Molunerfinn
  - Neugestaltung der client-v2 Plugin-Manager-Seite als responsive Karten-basierte Benutzeroberfläche mit Kategoriefilter, Suche, Aktivieren/Deaktivieren/Entfernen, Massenaktivierung und einem Plugin-Detail-Modal; außerdem wurde die client-v1 Plugin-Manager-Seite auf schmalen Bildschirmen responsiv gemacht. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) von @Molunerfinn
- **[cli]**

  - Kompatibilitätsprüfungen für dynamische API-Befehle hinzugefügt ([#9613](https://github.com/nocobase/nocobase/pull/9613)) von @chenos
  - Unterstützung für Basisauthentifizierung ([#9558](https://github.com/nocobase/nocobase/pull/9558)) von @chenos
- **[Office-Dateivorschau]** Migration des Office-Dateivorschau-Plugins auf den v2 (FlowEngine)-Client. ([#9620](https://github.com/nocobase/nocobase/pull/9620)) von @Molunerfinn
- **[Workflow]**

  - Timeout-Steuerung für Workflows hinzugefügt, unterstützt das automatische Abbrechen einer zeitlich begrenzten Ausführung, wenn die Timeout-Option gesetzt ist ([#9363](https://github.com/nocobase/nocobase/pull/9363)) von @mytharcher
  - Administrator-API hinzugefügt, um gestartete Workflow-Ausführungen vom Anfang oder einem bestimmten Knoten erneut auszuführen. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) von @mytharcher
- **[IdP: OAuth]** Grundlegende Unterstützung für App-Single-Sign-On in Multi-App-Bereitstellungen hinzugefügt ([#9547](https://github.com/nocobase/nocobase/pull/9547)) von @2013xile
- **[Block: Gantt]** v2-Unterstützung für den Gantt-Block hinzugefügt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) von @jiannx
- **[App SSO]** Ein App-SSO-Plugin für automatische Anmeldung zwischen Anwendungen hinzugefügt von @2013xile
- **[Passwortrichtlinie]** Migration von plugin-password-policy in die client-v2-Admin-Shell mit den Einstellungsseiten für Passwortrichtlinie / Gesperrte Benutzer und clientseitiger Durchsetzung der Regeln im Passwortänderungsformular des Benutzerzentrums. von @Molunerfinn
- **[Workflow: Webhook]** 408-Antwortstatus für zeitlich abgelaufene Webhook-Workflows (Sync-Modus) hinzugefügt von @mytharcher
- **[Workflow: Unterworkflow]** Unterstützung für Timeout-Einstellungen im Workflow von @mytharcher
- **[Auth: OIDC]** Migration von `plugin-auth-oidc` auf v2-Admin; Anmeldebutton, Admin-Einstellungsformular und SSO-Auto-Weiterleitung funktionieren jetzt unter v2. von @Molunerfinn
- **[Workflow: Genehmigung]** Unterstützung für Timeout-Einstellungen im Workflow von @mytharcher
- **[App-Supervisor]** App-SSO-Einstellungen für Unteranwendungen hinzugefügt von @2013xile
- **[Auth: LDAP]** v2-Client-Eintrag hinzugefügt, sodass der LDAP-Authentifikator sein Anmeldeformular und seine Admin-Einstellungen auf v2-Apps rendert. von @Molunerfinn

### 🚀 Verbesserungen

- **[client-v2]**

  - Einstellung für die Zeilenauswahl in v2-Tabellen hinzugefügt ([#9614](https://github.com/nocobase/nocobase/pull/9614)) von @katherinehhh
  - Unterstützung für Aktionsfarben im Aktionspanel ([#9612](https://github.com/nocobase/nocobase/pull/9612)) von @katherinehhh
  - Entfernen der Option "Ausgeblendet" aus der Menükonfiguration ([#9596](https://github.com/nocobase/nocobase/pull/9596)) von @zhangzhonghe
- **[client]** Entfernen der Option "Ausgeblendet" aus den Menüpunkteinstellungen ([#9595](https://github.com/nocobase/nocobase/pull/9595)) von @zhangzhonghe
- **[cli]** Optimierung des App-Upgrade-Ablaufs ([#9587](https://github.com/nocobase/nocobase/pull/9587)) von @chenos
- **[Benachrichtigungsmanager]** Migration der benachrichtigungsbezogenen Plugins auf v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) von @Molunerfinn
- **[AI-Mitarbeiter]** Verbessert: Das LLM-Basis-URL-Feld kann nun global gültige Variablen in Erstellungs- und Bearbeitungsformularen verwenden. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) von @cgyrock
- **[Workflow]** Refaktorierung der Verfügbarkeitsprüfungen für asynchrone Workflow-Knoten ([#9532](https://github.com/nocobase/nocobase/pull/9532)) von @mytharcher
- **[Datenvisualisierung]** Client-v2-Unterstützung für Diagrammblöcke hinzugefügt. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) von @jiannx
- **[IP-Einschränkung]** Einen v2-Client für das IP-Einschränkungs-Plugin hinzugefügt. von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[client]**

  - Behebung der Badge-Breite in der oberen Navigationsleiste ([#9607](https://github.com/nocobase/nocobase/pull/9607)) von @zhangzhonghe
  - Erhöhung des Upload-Limits für Scan-Eingabebilder ([#9580](https://github.com/nocobase/nocobase/pull/9580)) von @katherinehhh
  - Behebung, dass Seiten-Tabs nach dem Wechseln von Menüs verschwinden ([#9583](https://github.com/nocobase/nocobase/pull/9583)) von @zhangzhonghe
  - Behebung des Problems, dass in einer Untertabelle in einem Unterformular keine zweite Zeile hinzugefügt werden konnte ([#9586](https://github.com/nocobase/nocobase/pull/9586)) von @katherinehhh
  - Behebung der Zeiterhaltung für v2-Zeitfelder ([#9579](https://github.com/nocobase/nocobase/pull/9579)) von @katherinehhh
  - Behebung des synchronisierten mobilen Datumswähler-Popup-Werts ([#9582](https://github.com/nocobase/nocobase/pull/9582)) von @katherinehhh
  - Behebung des synchronisierten Ausblendstatus für Unterformularverknüpfungen ([#9594](https://github.com/nocobase/nocobase/pull/9594)) von @katherinehhh
- **[flow-engine]**

  - Behoben: Falscher Frontend-Log-Level. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) von @gchust
  - Behebung instabiler Kaskadenmenüs bei der Eingabe in Suchfelder ([#9473](https://github.com/nocobase/nocobase/pull/9473)) von @zhangzhonghe
  - Behoben: Problem, dass Tabellenaktionsverknüpfungsregeln nach erfolgreicher Formularübermittlung in einem Popup falsch ausgeführt wurden. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) von @gchust
- **[ai]** LangChain-Abhängigkeiten auf stabile Versionen festgelegt, um Fehler bei Ollama-Tool-Ausführungen zu verhindern und betroffene Upstream-Releases zu vermeiden ([#9604](https://github.com/nocobase/nocobase/pull/9604)) von @cgyrock
- **[client-v2]**

  - Behebung, dass die Anmeldetabs der Sub-App rohe Übersetzungsvorlagen rendern, und verhindern, dass der v2-Authentifizierungsmethode-Bearbeitungs-Drawer beim Absenden Feldwerte verwirft. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) von @Molunerfinn
  - Verbesserung der Leistung der Plugin-Manager-Seite durch Verwendung von CSS line-clamp anstelle von antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) von @Molunerfinn
  - Behoben: Metadaten der Browsersprache, sodass die App-Seite der ausgewählten Anwendungssprache folgt, anstatt als Englisch markiert zu sein. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) von @Molunerfinn
- **[build]**

  - Text-Assets in Server-Builds werden jetzt als Dateien kopiert, anstatt in JavaScript-Module konvertiert zu werden. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) von @Molunerfinn
  - Behoben: Ausgabe der Plugin-Server-Verschleierung, um Browser-Globals in Node.js-Laufzeit-Bundles zu vermeiden. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) von @Molunerfinn
- **[Block: Gantt]** Behoben: Pfad des freigegebenen v2-Gantt-Ordners und Zebrastreifen hinzugefügt. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) von @jiannx
- **[Lizenzeinstellungen]** Client-v2-Unterstützung für Lizenzeinstellungen und kommerzielle Lizenzeinspritzung hinzugefügt. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) von @jiannx
- **[Workflow: Benutzerdefiniertes Aktionsereignis]**

  - Behebung doppelter "Workflow auslösen"-Optionen in v2-Block-Aktionsmenüs ([#9622](https://github.com/nocobase/nocobase/pull/9622)) von @zhangzhonghe
  - Filterung der Bindungsoptionen für benutzerdefinierte Aktionsworkflows nach der aktuellen Blocksammlung. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) von @mytharcher
  - Behoben: Benutzerdefinierte Aktions-Tabellenbuttons mit Mehrfachdatensatzkontext erlaubten fälschlicherweise die Auswahl von Workflows mit benutzerdefiniertem Kontext. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) von @mytharcher
- **[Sammlung: Baum]** Behebung des Fehlers, der durch zirkuläre Eltern-Kind-Daten in Baumsammlungen verursacht wurde ([#9603](https://github.com/nocobase/nocobase/pull/9603)) von @zhangzhonghe
- **[Dateimanager]**

  - Verbesserte Fehlermeldungen bei fehlgeschlagener PDF-Vorschau und Dokumentation der CORS-Anforderungen für externen Speicher. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) von @mytharcher
    Referenz: [Dateivorschau](docs/docs/en/file-manager/file-preview/index.md)
  - Sicheres Rendern von PDF-Vorschauen mit PDF.js anstelle von iframe-basiertem rohem PDF-Rendering. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) von @mytharcher
  - Behoben: Unicode-Dateinamen-Normalisierung beim Dateiupload, um die Generierung von Objektschlüsseln mit Steuerzeichen zu vermeiden. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) von @mytharcher
- **[AI-Mitarbeiter]**

  - Behoben: KI-Shortcut-Buttons erhielten einen leeren Blockkontext, nachdem referenzierte Tabellenblöcke entfernt wurden. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) von @cgyrock
  - Behoben: Falsche Beschreibung des Tool-Namens im Arbeitskontext-Prompt ([#9567](https://github.com/nocobase/nocobase/pull/9567)) von @cgyrock
- **[Workflow: Manueller Knoten]** Behoben: Temporäre Speicherungen für manuelle Workflow-Aufgaben haben übermittelte Formularwerte nicht beibehalten. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) von @mytharcher
- **[plugin-commercial]** Client-v2-Komponenten für kommerzielle Lizenzen und Topbar-Lizenzstatuseintrag hinzugefügt. von @jiannx
- **[KI: Wissensdatenbank]** LangChain-Abhängigkeiten auf stabile Versionen festgelegt, um Fehler bei Ollama-Tool-Ausführungen zu verhindern und betroffene Upstream-Releases zu vermeiden von @cgyrock
- **[Migrationsmanager]** Behebung von PostgreSQL-Migrationsdiffs, sodass geerbte Spalten von Kindtabellen nicht gelöscht werden, wenn eine lokale Spalte geerbt wird. von @hongboji
- **[Vorlagendruck]** Behoben: Fehler bei der PDF-Konvertierung des Vorlagendrucks wurden nicht korrekt an den Client zurückgegeben von @jiannx
- **[Auth: OIDC]** Behoben: Token-Leck, wenn SSO-Anmelde-Callbacks eine externe Weiterleitungs-URL erhalten von @2013xile
- **[Workflow: Genehmigung]**

  - Behebung des Problems, dass die `jobs:resume`-API vom Genehmigungsknoten nicht unterstützt wird von @mytharcher
  - Behoben: Genehmigungsrücknahme aktualisiert nun übermittelte Geschäftsdaten unter Berücksichtigung der Aktualisierungsberechtigungen der Quellsammlung. von @mytharcher
  - Behoben: Veraltete Genehmigungsaufgaben, wenn Genehmigungsworkflows durch Fehler in Nicht-Genehmigungsknoten beendet wurden. von @mytharcher
