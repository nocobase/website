---
title: "NocoBase v2.1.0-beta.38: Kompatibilitätsprüfungen für dynamische API-Befehle hinzugefügt"
description: "Versionshinweise zu v2.1.0-beta.38"
---

### 🎉 Neue Funktionen

- **[cli]** Dynamische API-Kompatibilitätsprüfungen für Befehle hinzugefügt ([#9613](https://github.com/nocobase/nocobase/pull/9613)) von @chenos
- **[client-v2]**

  - Unterstützung für eingebettete v2-Seiten und öffentliche Formular-v2-Seiten ([#9431](https://github.com/nocobase/nocobase/pull/9431)) von @zhangzhonghe
  - Die Plugin-Manager-Seite von client-v2 wurde in eine responsive kartenbasierte Benutzeroberfläche mit Kategoriefilter, Suche, Aktivieren/Deaktivieren/Entfernen, Massenaktivierung und einem Plugin-Detail-Modal umgeschrieben; außerdem wurde die Plugin-Manager-Seite von client-v1 für schmale Bildschirme responsiv gemacht. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) von @Molunerfinn
- **[Workflow]**

  - Timeout-Steuerung für Workflows hinzugefügt, unterstützt automatischen Abbruch von zeitlich überschrittener Ausführung, wenn die Timeout-Option gesetzt ist ([#9363](https://github.com/nocobase/nocobase/pull/9363)) von @mytharcher
  - Eine Administrator-API hinzugefügt, um gestartete Workflow-Ausführungen vom Anfang oder einem bestimmten Knoten erneut auszuführen. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) von @mytharcher
- **[Block: Gantt]** v2-Unterstützung für den Gantt-Block hinzugefügt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) von @jiannx
- **[Workflow: Webhook]** 408-Antwortstatus für zeitlich überschrittene Webhook-Workflows (Sync-Modus) hinzugefügt von @mytharcher
- **[Workflow: Subflow]** Unterstützung für Timeout-Einstellung im Workflow von @mytharcher
- **[Auth: OIDC]** Migration von `plugin-auth-oidc` zur v2-Administration; Anmeldebutton, Admin-Einstellungsformular und SSO-Auto-Weiterleitung funktionieren jetzt unter v2. von @Molunerfinn
- **[Workflow: Approval]** Unterstützung für Timeout-Einstellung im Workflow von @mytharcher
- **[Auth: LDAP]** v2-Client-Eintrag hinzugefügt, sodass der LDAP-Authentifikator sein Anmeldeformular und die Admin-Einstellungen auf v2-Apps rendert. von @Molunerfinn

### 🚀 Verbesserungen

- **[client-v2]**

  - v2-Tabellenzeilenauswahl-Einstellung hinzugefügt ([#9614](https://github.com/nocobase/nocobase/pull/9614)) von @katherinehhh
  - Unterstützung für Aktionsfarben im Aktionspanel ([#9612](https://github.com/nocobase/nocobase/pull/9612)) von @katherinehhh
  - Die Option "Ausgeblendet" aus der Menükonfiguration entfernt ([#9596](https://github.com/nocobase/nocobase/pull/9596)) von @zhangzhonghe
- **[client]** Die Option "Ausgeblendet" aus den Menüpunkteinstellungen entfernt ([#9595](https://github.com/nocobase/nocobase/pull/9595)) von @zhangzhonghe
- **[cli]** Optimierung des App-Upgrade-Ablaufs ([#9587](https://github.com/nocobase/nocobase/pull/9587)) von @chenos
- **[KI-Mitarbeiter]** Das LLM-Basis-URL-Feld verbessert, sodass es globale Variablen in Erstellungs- und Bearbeitungsformularen verwenden kann. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) von @cgyrock
- **[IP-Einschränkung]** Einen v2-Client für das IP-Einschränkungs-Plugin hinzugefügt. von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[flow-engine]**

  - Korrektur des falschen Frontend-Log-Levels. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) von @gchust
  - Behebung von instabilen Kaskadenmenüs bei der Eingabe in Suchfelder ([#9473](https://github.com/nocobase/nocobase/pull/9473)) von @zhangzhonghe
  - Behebung eines Problems, bei dem Tabellenaktionsverknüpfungsregeln nach erfolgreicher Formularübermittlung in einem Popup falsch ausgeführt wurden. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) von @gchust
- **[ai]** LangChain-Abhängigkeiten auf stabile Versionen festgelegt, um Ausführungsfehler von Ollama-Tools zu verhindern und betroffene Upstream-Releases zu vermeiden ([#9604](https://github.com/nocobase/nocobase/pull/9604)) von @cgyrock
- **[client-v2]**

  - Behebung der Darstellung von rohen Übersetzungsvorlagen in den Sub-App-Anmelde-Tabs und Verhinderung des Verlusts von Feldwerten im v2-Authentifizierungsmethode-Bearbeitungs-Drawer beim Absenden. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) von @Molunerfinn
  - Verbesserung der Leistung der Plugin-Manager-Seite durch Verwendung von CSS line-clamp anstelle von antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) von @Molunerfinn
- **[client]**

  - Behebung der Zeiterhaltung für v2-Zeitfelder ([#9579](https://github.com/nocobase/nocobase/pull/9579)) von @katherinehhh
  - Behebung der Synchronisation des ausgeblendeten Zustands für Unterformularverknüpfungen ([#9594](https://github.com/nocobase/nocobase/pull/9594)) von @katherinehhh
  - Erhöhung des Upload-Limits für Scan-Eingabebilder ([#9580](https://github.com/nocobase/nocobase/pull/9580)) von @katherinehhh
  - Behebung der Synchronisation des mobilen Datumsauswahl-Popup-Werts ([#9582](https://github.com/nocobase/nocobase/pull/9582)) von @katherinehhh
  - Behebung des Verschwindens von Seiten-Tabs nach dem Wechseln von Menüs ([#9583](https://github.com/nocobase/nocobase/pull/9583)) von @zhangzhonghe
  - Behebung eines Problems, bei dem in einer Untertabelle innerhalb eines Unterformulars keine zweite Zeile hinzugefügt werden konnte ([#9586](https://github.com/nocobase/nocobase/pull/9586)) von @katherinehhh
  - Erhöhung des Upload-Limits für Scan-Eingabebilder ([#9580](https://github.com/nocobase/nocobase/pull/9580)) von @katherinehhh
  - Behebung der Synchronisation des mobilen Datumsauswahl-Popup-Werts ([#9582](https://github.com/nocobase/nocobase/pull/9582)) von @katherinehhh
  - Behebung eines Problems, bei dem in einer Untertabelle innerhalb eines Unterformulars keine zweite Zeile hinzugefügt werden konnte ([#9586](https://github.com/nocobase/nocobase/pull/9586)) von @katherinehhh
  - Behebung der Zeiterhaltung für v2-Zeitfelder ([#9579](https://github.com/nocobase/nocobase/pull/9579)) von @katherinehhh
- **[Collection: Tree]** Behebung des Fehlers, der durch zirkuläre Eltern-Kind-Daten in Baumstruktur-Sammlungen verursacht wurde ([#9603](https://github.com/nocobase/nocobase/pull/9603)) von @zhangzhonghe
- **[Workflow: Custom action event]**

  - Behebung, dass benutzerdefinierte Aktions-Tabellen-Buttons mit Mehrfachdatensatz-Kontext fälschlicherweise die Auswahl von benutzerdefinierten Kontext-Workflows erlaubten. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) von @mytharcher
  - Filterung der Bindungsoptionen für benutzerdefinierte Aktions-Workflows nach der aktuellen Block-Sammlung. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) von @mytharcher
- **[Dateimanager]**

  - Verbesserte PDF-Vorschau-Fehlermeldungen und dokumentierte CORS-Anforderungen für externen Speicher. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) von @mytharcher
    Referenz: [Dateivorschau](docs/docs/en/file-manager/file-preview/index.md)
  - Verbesserte PDF-Vorschau-Fehlermeldungen und dokumentierte CORS-Anforderungen für externen Speicher. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) von @mytharcher
    Referenz: [Dateivorschau](docs/docs/en/file-manager/file-preview/index.md)
  - Behebung der Unicode-Dateinamen-Normalisierung beim Dateiupload, um die Generierung von Objektschlüsseln mit Steuerzeichen zu vermeiden. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) von @mytharcher
- **[KI: Wissensdatenbank]** LangChain-Abhängigkeiten auf stabile Versionen festgelegt, um Ausführungsfehler von Ollama-Tools zu verhindern und betroffene Upstream-Releases zu vermeiden von @cgyrock
- **[Vorlagendruck]** Behebung, dass PDF-Konvertierungsfehler beim Vorlagendruck nicht korrekt an den Client zurückgegeben wurden von @jiannx
