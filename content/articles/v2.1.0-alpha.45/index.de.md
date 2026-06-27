---
title: "NocoBase v2.1.0-alpha.45: Unterstützung der Feldwertzuweisung in Formularübermittlungsaktionen"
description: "Versionshinweise zu v2.1.0-alpha.45"
---

### 🎉 Neue Funktionen

- **[client-v2]**

  - Unterstützung der Feldwertzuweisung in Aktionen zum Absenden von Formularen ([#9570](https://github.com/nocobase/nocobase/pull/9570)) von @katherinehhh
  - Unterstützung für eingebettete v2-Seiten und öffentliche Formular-v2-Seiten ([#9431](https://github.com/nocobase/nocobase/pull/9431)) von @zhangzhonghe
  - Hinzufügen eines Sicherheitsmenüs und der Seite für Token-Richtlinieneinstellungen zum v2-Admin; das Benutzerzentrum unterstützt jetzt die Passwortänderung. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) von @Molunerfinn
  - Neugestaltung der client-v2 Plugin-Manager-Seite als responsive kartenbasierte Benutzeroberfläche mit Kategoriefilter, Suche, Aktivieren/Deaktivieren/Entfernen, Massenaktivierung und einem Plugin-Detail-Modal; außerdem wurde die client-v1 Plugin-Manager-Seite für schmale Bildschirme responsive gemacht. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) von @Molunerfinn
- **[cli]**

  - Hinzufügen von Kompatibilitätsprüfungen für dynamische API-Befehle ([#9613](https://github.com/nocobase/nocobase/pull/9613)) von @chenos
  - Unterstützung der Basisauthentifizierung ([#9558](https://github.com/nocobase/nocobase/pull/9558)) von @chenos
- **[Office-Dateivorschau]** Migration des Office-Dateivorschau-Plugins zum v2 (FlowEngine) Client. ([#9620](https://github.com/nocobase/nocobase/pull/9620)) von @Molunerfinn
- **[Workflow]**

  - Hinzufügen einer Zeitüberschreitungssteuerung für Workflows; unterstützt das automatische Abbrechen einer zeitlich überschrittenen Ausführung, wenn die Zeitüberschreitungsoption gesetzt ist ([#9363](https://github.com/nocobase/nocobase/pull/9363)) von @mytharcher
  - Hinzugefügt eine Administrator-API, um gestartete Workflow-Ausführungen vom Anfang oder einem bestimmten Knoten erneut auszuführen. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) von @mytharcher
- **[IdP: OAuth]** Grundlegende Unterstützung für App-Single-Sign-On in Multi-App-Bereitstellungen hinzugefügt ([#9547](https://github.com/nocobase/nocobase/pull/9547)) von @2013xile
- **[Block: Gantt]** v2-Unterstützung für den Gantt-Block hinzugefügt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) von @jiannx
- **[App SSO]** Ein App-SSO-Plugin für automatisches Anmelden zwischen Anwendungen hinzugefügt von @2013xile
- **[Passwortrichtlinie]** Migration von plugin-password-policy zur client-v2 Admin-Shell mit den Seiten für Passwortrichtlinie / Gesperrte Benutzer und clientseitiger Durchsetzung der Regeln im Formular zur Passwortänderung im Benutzerzentrum. von @Molunerfinn
- **[Workflow: Webhook]** 408-Antwortstatus für zeitlich überschrittene Webhook-Workflows (Sync-Modus) hinzugefügt von @mytharcher
- **[Workflow: Unterworkflow]** Unterstützung der Zeitüberschreitungseinstellung im Workflow von @mytharcher
- **[Auth: OIDC]** Migration von `plugin-auth-oidc` zum v2-Admin; der Anmeldebutton, das Admin-Einstellungsformular und die SSO-Autoweiterleitung funktionieren jetzt unter v2. von @Molunerfinn
- **[Workflow: Genehmigung]** Unterstützung der Zeitüberschreitungseinstellung im Workflow von @mytharcher
- **[App-Supervisor]** App-SSO-Einstellungen für Unteranwendungen hinzugefügt von @2013xile
- **[Auth: LDAP]** v2-Client-Eintrag hinzugefügt, sodass der LDAP-Authentifikator sein Anmeldeformular und die Admin-Einstellungen auf v2-Apps rendert. von @Molunerfinn

### 🚀 Verbesserungen

- **[client-v2]**

  - v2-Tabellenzeilenauswahl-Einstellung hinzugefügt ([#9614](https://github.com/nocobase/nocobase/pull/9614)) von @katherinehhh
  - Unterstützung für Aktionsfarben im Aktionspanel ([#9612](https://github.com/nocobase/nocobase/pull/9612)) von @katherinehhh
  - Entfernen der Option "Ausgeblendet" aus der Menükonfiguration ([#9596](https://github.com/nocobase/nocobase/pull/9596)) von @zhangzhonghe
- **[client]** Entfernen der Option "Ausgeblendet" aus den Menüpunkteinstellungen ([#9595](https://github.com/nocobase/nocobase/pull/9595)) von @zhangzhonghe
- **[cli]** Optimierung des App-Upgrade-Ablaufs ([#9587](https://github.com/nocobase/nocobase/pull/9587)) von @chenos
- **[Benachrichtigungsmanager]** Migration der benachrichtigungsbezogenen Plugins zu v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) von @Molunerfinn
- **[KI-Mitarbeiter]** Verbesserung des LLM-Basis-URL-Feldes, sodass es globale Variablen in Erstellungs- und Bearbeitungsformularen verwenden kann. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) von @cgyrock
- **[Workflow]** Refaktorierung der Verfügbarkeitsprüfungen für asynchrone Workflow-Knoten ([#9532](https://github.com/nocobase/nocobase/pull/9532)) von @mytharcher
- **[Datenvisualisierung]** Client-v2-Unterstützung für Diagrammblöcke hinzugefügt. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) von @jiannx
- **[IP-Einschränkung]** Einen v2-Client für das IP-Einschränkungs-Plugin hinzugefügt. von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[client]**

  - Korrektur der Badge-Breite in der oberen Navigationsleiste ([#9607](https://github.com/nocobase/nocobase/pull/9607)) von @zhangzhonghe
  - Erhöhung des Upload-Limits für Scaneingabe-Bilder ([#9580](https://github.com/nocobase/nocobase/pull/9580)) von @katherinehhh
  - Behebung des Problems, dass Seiten-Tabs nach dem Wechseln von Menüs verschwinden ([#9583](https://github.com/nocobase/nocobase/pull/9583)) von @zhangzhonghe
  - Behebung des Problems, dass in einer Untertabelle innerhalb eines Unterformulars keine zweite Zeile hinzugefügt werden konnte ([#9586](https://github.com/nocobase/nocobase/pull/9586)) von @katherinehhh
  - Korrektur des beibehaltenen Zeitformats für v2-Zeitfelder ([#9579](https://github.com/nocobase/nocobase/pull/9579)) von @katherinehhh
  - Korrektur der Synchronisation des mobilen Datumsauswahl-Popup-Werts ([#9582](https://github.com/nocobase/nocobase/pull/9582)) von @katherinehhh
  - Korrektur der Synchronisation des ausgeblendeten Zustands für die Unterformularverknüpfung ([#9594](https://github.com/nocobase/nocobase/pull/9594)) von @katherinehhh
  - Korrektur des beibehaltenen Zeitformats für v2-Zeitfelder ([#9579](https://github.com/nocobase/nocobase/pull/9579)) von @katherinehhh
  - Behebung des Problems, dass in einer Untertabelle innerhalb eines Unterformulars keine zweite Zeile hinzugefügt werden konnte ([#9586](https://github.com/nocobase/nocobase/pull/9586)) von @katherinehhh
  - Korrektur der Synchronisation des mobilen Datumsauswahl-Popup-Werts ([#9582](https://github.com/nocobase/nocobase/pull/9582)) von @katherinehhh
  - Erhöhung des Upload-Limits für Scaneingabe-Bilder ([#9580](https://github.com/nocobase/nocobase/pull/9580)) von @katherinehhh
- **[flow-engine]**

  - Korrektur der falschen Frontend-Protokollebene. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) von @gchust
  - Behebung von instabilen Kaskadenmenüs bei der Eingabe in Suchfelder ([#9473](https://github.com/nocobase/nocobase/pull/9473)) von @zhangzhonghe
  - Behebung eines Problems, bei dem Tabellenaktionsverknüpfungsregeln nach erfolgreichem Absenden eines Formulars in einem Popup falsch ausgeführt wurden. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) von @gchust
- **[ai]** LangChain-Abhängigkeiten auf stabile Versionen festgelegt, um Ausführungsfehler von Ollama-Tools zu verhindern und betroffene Upstream-Releases zu vermeiden ([#9604](https://github.com/nocobase/nocobase/pull/9604)) von @cgyrock
- **[client-v2]**

  - Korrektur der Darstellung von rohen Übersetzungsvorlagen in den Anmelde-Tabs der Sub-App und Verhinderung, dass der v2-Authentifizierungsmethode-Bearbeitungs-Drawer Feldwerte beim Absenden verwirft. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) von @Molunerfinn
  - Verbesserung der Leistung der Plugin-Manager-Seite durch Verwendung von CSS line-clamp anstelle von antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) von @Molunerfinn
  - Korrektur der Browser-Sprachmetadaten, sodass die App-Seite der ausgewählten Anwendungssprache folgt, anstatt als Englisch markiert zu sein. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) von @Molunerfinn
- **[build]**

  - Text-Assets in Server-Builds werden jetzt als Dateien kopiert, anstatt in JavaScript-Module konvertiert zu werden. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) von @Molunerfinn
  - Korrektur der Plugin-Server-Verschleierungsausgabe, um Browser-Globals in Node.js-Laufzeit-Bundles zu vermeiden. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) von @Molunerfinn
- **[Block: Gantt]** Korrektur des v2-Gantt-Pfads für freigegebene Ordner und Hinzufügen von Zebrastreifen. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) von @jiannx
- **[Lizenzeinstellungen]** Client-v2-Unterstützung für Lizenzeinstellungen und kommerzielle Lizenzinjektion hinzugefügt. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) von @jiannx
- **[Workflow: Benutzerdefiniertes Aktionsereignis]**

  - Behebung doppelter "Trigger-Workflow"-Optionen in v2-Blockaktionsmenüs ([#9622](https://github.com/nocobase/nocobase/pull/9622)) von @zhangzhonghe
  - Filterung der Bindungsoptionen für benutzerdefinierte Aktions-Workflows nach der aktuellen Blocksammlung. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) von @mytharcher
  - Korrektur, dass benutzerdefinierte Aktions-Tabellen-Buttons mit Mehrfachdatensatz-Kontext fälschlicherweise die Auswahl von benutzerdefinierten Kontext-Workflows erlaubten. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) von @mytharcher
- **[Sammlung: Baum]** Behebung des Fehlers, der durch zirkuläre Eltern-Kind-Daten in Baumsammlungen verursacht wird ([#9603](https://github.com/nocobase/nocobase/pull/9603)) von @zhangzhonghe
- **[Dateimanager]**

  - Verbesserte Fehlermeldungen bei fehlgeschlagener PDF-Vorschau und Dokumentation der CORS-Anforderungen für externe Speicher. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) von @mytharcher
    Referenz: [Dateivorschau](docs/docs/de/file-manager/file-preview/index.md)
  - Verbesserte Fehlermeldungen bei fehlgeschlagener PDF-Vorschau und Dokumentation der CORS-Anforderungen für externe Speicher. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) von @mytharcher
    Referenz: [Dateivorschau](docs/docs/de/file-manager/file-preview/index.md)
  - Sicheres Rendern von PDF-Vorschauen mit PDF.js anstelle von iframe-basiertem rohem PDF-Rendering. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) von @mytharcher
  - Korrektur der Unicode-Dateinamen-Normalisierung beim Dateiupload, um die Generierung von Objektschlüsseln mit Steuerzeichen zu vermeiden. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) von @mytharcher
- **[KI-Mitarbeiter]**

  - Korrektur, dass KI-Shortcut-Buttons einen leeren Blockkontext erhielten, nachdem referenzierte Tabellenblöcke entfernt wurden. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) von @cgyrock
  - Korrektur der falschen Beschreibung des Tool-Namens im Arbeitskontext-Prompt ([#9567](https://github.com/nocobase/nocobase/pull/9567)) von @cgyrock
- **[Workflow: Manueller Knoten]** Korrektur, dass temporäre Speicherungen für manuelle Workflow-Aufgaben die gesendeten Formularwerte nicht beibehielten. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) von @mytharcher
- **[plugin-commercial]** Client-v2-Kommerzielle-Lizenz-Komponenten und Topbar-Lizenzstatus-Eintrag hinzugefügt. von @jiannx
- **[KI: Wissensdatenbank]** LangChain-Abhängigkeiten auf stabile Versionen festgelegt, um Ausführungsfehler von Ollama-Tools zu verhindern und betroffene Upstream-Releases zu vermeiden von @cgyrock
- **[Migrationsmanager]** Korrektur von PostgreSQL-Migrationsdiffs, sodass geerbte Kind-Spalten nicht gelöscht werden, wenn eine lokale Spalte geerbt wird. von @hongboji
- **[Vorlagendruck]** Korrektur, dass PDF-Konvertierungsfehler beim Vorlagendruck nicht korrekt an den Client zurückgegeben wurden von @jiannx
- **[Auth: OIDC]** Korrektur von Token-Leckagen, wenn SSO-Anmelde-Callbacks eine externe Weiterleitungs-URL erhalten von @2013xile
- **[Workflow: Genehmigung]**

  - Behebung des Problems, dass die `jobs:resume`-API vom Genehmigungsknoten nicht unterstützt wird von @mytharcher
  - Korrektur des Genehmigungs-Widerrufs, um gesendete Geschäftsdaten zu aktualisieren, während die Aktualisierungsberechtigungen der Quellsammlung respektiert werden. von @mytharcher
  - Korrektur von veralteten Genehmigungs-Todos, wenn Genehmigungs-Workflows durch Fehler in Nicht-Genehmigungsknoten beendet werden. von @mytharcher
