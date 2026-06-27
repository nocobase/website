---
title: "NocoBase v2.1.0: Verbesserte verwaltete App und Plugin-Verwaltung in der CLI"
description: "Versionshinweise zu v2.1.0"
---

### 🎉 Neue Funktionen

- **[undefined]**

  - Proxy-Befehle der obersten Ebene für nginx und caddy hinzugefügt ([#9721](https://github.com/nocobase/nocobase/pull/9721)) von @chenos
  - Verbesserte Verwaltung von verwalteten Apps und Plugins in der CLI, einschließlich appPath-bewusster Umgebungsbehandlung, Plugin-Import, lizenzierter Plugin-Synchronisierung und zugehöriger Dokumentationsaktualisierungen. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) von @chenos
    Referenz: [CLI-Dokumentation](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Schnellstart](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
  - Neuer KI-Mitarbeiter, Lokalisierungsingenieur Lina, zur Unterstützung bei Lokalisierungsübersetzungsaufgaben hinzugefügt ([#9434](https://github.com/nocobase/nocobase/pull/9434)) von @2013xile
    Referenz: [Lokalisierungsverwaltung](https://docs.nocobase.com/system-management/localization)<br>[Lina: Lokalisierungsingenieur](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Lina und lokales HY-MT1.5-1.8B zur Übersetzung von Lokalisierungseinträgen verwenden](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
  - Indonesische und vietnamesische Dokumentation hinzugefügt. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) von @Molunerfinn
  - CI-Workflow hinzugefügt, der auf fehlende `plugin-*` peerDependencies prüft und den Build ausführt, mit PR-Kommentarberichterstattung. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) von @Molunerfinn
- **[client-v2]**

  - Scan-Eingabe für Textfelder unterstützen ([#9599](https://github.com/nocobase/nocobase/pull/9599)) von @katherinehhh
  - `TypedVariableInput` hinzugefügt, sodass die SMTP-Port- und Secure-Mode-Felder des v2-E-Mail-Plugins entweder eine typisierte Konstante oder eine `{{ $env.X }}`-Variable akzeptieren können. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) von @Molunerfinn
  - Feldwertzuweisung in Formularübermittlungsaktionen unterstützen ([#9570](https://github.com/nocobase/nocobase/pull/9570)) von @katherinehhh
  - Eingebettete v2-Seiten und öffentliche Formular-v2-Seiten unterstützen ([#9431](https://github.com/nocobase/nocobase/pull/9431)) von @zhangzhonghe
  - Die client-v2 Plugin-Manager-Seite in eine responsive kartenbasierte Benutzeroberfläche mit Kategoriefilter, Suche, Aktivieren/Deaktivieren/Entfernen, Massenaktivierung und einem Plugin-Detail-Modal umgeschrieben; außerdem die client-v1 Plugin-Manager-Seite auf schmalen Bildschirmen responsiv gemacht. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) von @Molunerfinn
  - Ein Sicherheitsmenü und die Token-Richtlinien-Einstellungsseite zur v2-Administration hinzugefügt; das Benutzercenter unterstützt jetzt Passwort ändern. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) von @Molunerfinn
- **[cli]**

  - Kompatibilitätsprüfungen für dynamische API-Befehle hinzugefügt ([#9613](https://github.com/nocobase/nocobase/pull/9613)) von @chenos
  - Basisauthentifizierung unterstützen ([#9558](https://github.com/nocobase/nocobase/pull/9558)) von @chenos
  - Backup-Erstellungs- und Wiederherstellungsbefehle hinzugefügt ([#9541](https://github.com/nocobase/nocobase/pull/9541)) von @chenos
  - Release-Befehl in der API hinzugefügt ([#9308](https://github.com/nocobase/nocobase/pull/9308)) von @Andrew1989Y
  - NocoBase CLI umgestaltet ([#9122](https://github.com/nocobase/nocobase/pull/9122)) von @chenos
- **[client]**

  - Unterstützung für Verknüpfungsregeln für Seitenmenüpunkte hinzugefügt ([#9304](https://github.com/nocobase/nocobase/pull/9304)) von @zhangzhonghe
  - JS-Variablen zum Ereignisfluss hinzugefügt ([#8938](https://github.com/nocobase/nocobase/pull/8938)) von @jiannx
  - JS-Element-Aktion hinzugefügt ([#8911](https://github.com/nocobase/nocobase/pull/8911)) von @jiannx
- **[flow-engine]**

  - `plugin-environment-variables` zu client-v2 migriert mit einer React-basierten Einstellungsseite und einer global registrierten `$env`-Laufzeitvariable; einen client-v2-Eintrag zu `plugin-file-manager` mit einer React-basierten Speicherkonfigurationsseite und FlowModel-basiertem Upload-Feld, Upload-Aktion und Vorschau hinzugefügt. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) von @Molunerfinn
  - `getSubclassesOfAsync` zu FlowEngine hinzugefügt, um asynchron registrierte Modellklassen über das neue `extends`-Feld in `registerModelLoaders` zu entdecken. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) von @Molunerfinn
- **[server]** KI-Mitarbeiter können gebündelte Dokumentation mit Bash-Befehlen durchsuchen ([#9269](https://github.com/nocobase/nocobase/pull/9269)) von @2013xile
- **[cli-v1]** Speicherpfad aus der Umgebungsvariable auflösen ([#9147](https://github.com/nocobase/nocobase/pull/9147)) von @chenos
- **[Async task manager]** V2-Client-Unterstützung für die Async-Task-Manager-Topbar-Aktion hinzugefügt. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) von @jiannx
- **[Backup manager]**

  - V2-Client-Laufzeitunterstützung für das Backup-Manager-Plugin hinzugefügt. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) von @katherinehhh
  - An das neue Versionskontroll-Plugin anpassen ([#9563](https://github.com/nocobase/nocobase/pull/9563)) von @cgyrock
- **[Block: Gantt]**

  - Option für Gantt-Blöcke hinzugefügt, um beim Öffnen standardmäßig auf heute zu fokussieren ([#9692](https://github.com/nocobase/nocobase/pull/9692)) von @jiannx
  - V2-Unterstützung für den Gantt-Block hinzugefügt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) von @jiannx
- **[Access control]** Die Einstellungsseiten für Benutzer und Rollen & Berechtigungen zu v2 migriert. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) von @jiannx
- **[Office File Previewer]** Das Office-Dateivorschau-Plugin zum v2 (FlowEngine)-Client migriert. ([#9620](https://github.com/nocobase/nocobase/pull/9620)) von @Molunerfinn
- **[Workflow]**

  - Zeitüberschreitungssteuerung für Workflows hinzugefügt, unterstützt automatischen Abbruch bei Zeitüberschreitung, wenn die Option gesetzt ist ([#9363](https://github.com/nocobase/nocobase/pull/9363)) von @mytharcher
  - Felder für "Erstellt von" und "Aktualisiert von" für Workflows hinzugefügt ([#9217](https://github.com/nocobase/nocobase/pull/9217)) von @mytharcher
  - API zur Überprüfung der Knotenerstellung hinzugefügt ([#9207](https://github.com/nocobase/nocobase/pull/9207)) von @mytharcher
  - Protokollfeld für Jobs hinzugefügt, um Protokollinhalte einiger Knoten zum Debuggen anzuzeigen ([#9165](https://github.com/nocobase/nocobase/pull/9165)) von @mytharcher
- **[IdP: OAuth]**

  - Grundlegende Unterstützung für App Single Sign-On in Multi-App-Bereitstellungen hinzugefügt ([#9547](https://github.com/nocobase/nocobase/pull/9547)) von @2013xile
  - Neues IdP: OAuth-Plugin hinzugefügt, um MCP-Diensten die Authentifizierung über OAuth zu ermöglichen ([#8896](https://github.com/nocobase/nocobase/pull/8896)) von @2013xile
- **[Theme editor]** Der Theme-Editor ist jetzt in der v2-Oberfläche verfügbar ([#9530](https://github.com/nocobase/nocobase/pull/9530)) von @zhangzhonghe
- **[Block: Kanban]**

  - Client-v2-Unterstützung für das Kanban-Plugin hinzugefügt ([#9475](https://github.com/nocobase/nocobase/pull/9475)) von @jiannx
  - Kanban-Block v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) von @jiannx
- **[Block: Markdown]** Client-v2-Unterstützung für Markdown-Blöcke hinzugefügt ([#9487](https://github.com/nocobase/nocobase/pull/9487)) von @jiannx
- **[Block: List]** Listenblöcke unterstützen client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) von @jiannx
- **[Calendar]**

  - Client-v2-Unterstützung für das Kalender-Plugin hinzugefügt. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) von @jiannx
  - Kalenderblock v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) von @jiannx
- **[Block: Tree]**

  - Client-v2-Unterstützung für den Baumfilterblock hinzugefügt. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) von @jiannx
  - Baumfilterblock hinzugefügt ([#9016](https://github.com/nocobase/nocobase/pull/9016)) von @jiannx
- **[AI employees]**

  - Der Workflow-KI-Mitarbeiterknoten unterstützt das Laden von Dateien aus Anhangsfeldern. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) von @cgyrock
  - Der Workflow hat eine KI-Mitarbeiteranweisung hinzugefügt ([#9025](https://github.com/nocobase/nocobase/pull/9025)) von @cgyrock
  - Ein Datenabfrage-Tool und ein Geschäftsanalysebericht-Tool für KI-Mitarbeiter hinzugefügt ([#9040](https://github.com/nocobase/nocobase/pull/9040)) von @2013xile
  - Die Fähigkeit hinzugefügt, Unteragenten für KI-Mitarbeiter aufzurufen ([#8935](https://github.com/nocobase/nocobase/pull/8935)) von @cgyrock
  - SKILLS-Fähigkeit für KI-Mitarbeiter hinzugefügt. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) von @cgyrock
- **[Data visualization]** Client-v2-Unterstützung für Block-Plugins hinzugefügt ([#9297](https://github.com/nocobase/nocobase/pull/9297)) von @zhangzhonghe
- **[Auth: API keys]** `pm list`- und `generate-api-key`-Befehle hinzugefügt ([#9076](https://github.com/nocobase/nocobase/pull/9076)) von @chenos
- **[AI: MCP server]**

  - Stellt eine generische Datenabfrage-API für Sammlungen bereit, die über MCP aufrufbar ist ([#8985](https://github.com/nocobase/nocobase/pull/8985)) von @2013xile
  - Neues MCP-Server-Plugin hinzugefügt, um NocoBase-Systeme zu erstellen und Geschäftsworkflows zu unterstützen. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) von @2013xile
- **[Data source manager]** Unterstützt bedarfsgesteuertes Laden von MCP-Tools ([#8936](https://github.com/nocobase/nocobase/pull/8936)) von @2013xile
- **[Collection field: Code]** field-code unterstützt 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) von @jiannx
- **[Data source: External NocoBase]** Datenquellen-Plugin hinzugefügt: externes NocoBase von @2013xile
- **[Multi-space]** Client-v2-Unterstützung für das Multi-Space-Plugin hinzugefügt, einschließlich Space-Wechsel und Space-Verwaltung. von @jiannx
- **[App SSO]** App-SSO-Plugin für automatisches Einloggen zwischen Anwendungen hinzugefügt von @2013xile
- **[Version control]** Versionskontroll-Plugin hinzugefügt von @cgyrock
- **[Two-factor authentication (2FA)]** TOTP und Zwei-Faktor-Authentifizierung können jetzt über den v2-Client gebunden, verifiziert und konfiguriert werden. von @Molunerfinn
- **[Password policy]** plugin-password-policy in die client-v2-Admin-Shell migriert mit den Einstellungsseiten für Passwortrichtlinien / Gesperrte Benutzer und clientseitiger Durchsetzung von Regeln im Passwort-Ändern-Formular des Benutzercenters. von @Molunerfinn
- **[Workflow: Webhook]** 408-Antwortstatus für zeitüberschrittene Webhook-Workflows (Sync-Modus) hinzugefügt von @mytharcher
- **[Workflow: Subflow]** Unterstützt Zeitüberschreitungseinstellung im Workflow von @mytharcher
- **[Migration manager]** Einige APIs für die nocobase cli hinzugefügt von @Andrew1989Y
- **[File storage: S3(Pro)]** Unterstützt das Hochladen von Dateien über S3 Pro-Speicher im v2-Dateimanager. von @Molunerfinn
- **[Auth: OIDC]** `plugin-auth-oidc` zur v2-Administration migriert; der Anmeldebutton, das Admin-Einstellungsformular und die SSO-Autoweiterleitung funktionieren jetzt unter v2. von @Molunerfinn
- **[Workflow: Approval]**

  - Unterstützt Zeitüberschreitungseinstellung im Workflow von @mytharcher
  - Unterstützt das Löschen von Entwurfsgenehmigungen von @mytharcher
- **[Email manager]** Gmail unterstützt das Senden von E-Mails mit Aliasen von @jiannx
- **[App supervisor]** App-SSO-Einstellungen für Unteranwendungen hinzugefügt von @2013xile
- **[Auth: LDAP]** V2-Client-Eintrag hinzugefügt, sodass der LDAP-Authentifikator sein Anmeldeformular und die Admin-Einstellungen auf v2-Apps rendert. von @Molunerfinn

### 🚀 Verbesserungen

- **[undefined]**

  - Sitzungsbezogene aktuelle Umgebung in der nb-CLI unterstützen ([#9415](https://github.com/nocobase/nocobase/pull/9415)) von @chenos
  - Spanische, portugiesische, russische und deutsche Dokumentation an die englische Quelle angeglichen. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) von @Molunerfinn
  - Französische Dokumentation mit der chinesischen Quelle synchronisiert. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) von @Molunerfinn
  - KI-Dokumentation aktualisiert, um NocoBase >= 2.1.0-beta.20 zu erfordern und die neueste Beta-Version zu empfehlen. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) von @Molunerfinn
  - KI-Agenten-Installationsanleitung verbessert, um zu verhindern, dass Agenten den `--ui`-Assistenten umgehen, und um Node-Version-Manager automatisch zu erkennen. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) von @Molunerfinn
  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) von @Molunerfinn
  - Dedizierten client-v2-Eintrag hinzugefügt und ihn unabhängig mit rsbuild erstellt, während v1 unverändert bleibt. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) von @Molunerfinn
- **[client-v2]**

  - Unterstützung zum Deaktivieren der Mehrfachauswahl in v2-Popup-Auswahl-Assoziationsfeldern hinzugefügt. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) von @katherinehhh
  - Verbesserte v2-Blockdarstellung, wenn eine konfigurierte externe Datenquelle deaktiviert ist, wodurch Renderfehler verhindert und ein klareren UI-Editor-Platzhalter angezeigt wird. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) von @katherinehhh
  - V2-Tabellenzeilenauswahl-Einstellung hinzugefügt ([#9614](https://github.com/nocobase/nocobase/pull/9614)) von @katherinehhh
  - Aktionsfarben für Aktionspanels unterstützen ([#9612](https://github.com/nocobase/nocobase/pull/9612)) von @katherinehhh
  - Die Option "Ausgeblendet" aus der Menükonfiguration entfernt ([#9596](https://github.com/nocobase/nocobase/pull/9596)) von @zhangzhonghe
  - V1-Menüs im v2-Layout herausgefiltert und nur v2-Menüs anzeigen ([#9427](https://github.com/nocobase/nocobase/pull/9427)) von @zhangzhonghe
  - client-v2 von client-v1 getrennt und seine Abhängigkeit von client-v1 entfernt ([#8937](https://github.com/nocobase/nocobase/pull/8937)) von @zhangzhonghe
- **[server]**

  - Der moderne Client wird jetzt unter `/v/` anstelle von `/v2/` bereitgestellt. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) von @Molunerfinn
  - Swagger-API-Dokumentation des Plugin-Managers verbessert ([#9080](https://github.com/nocobase/nocobase/pull/9080)) von @2013xile
- **[cli]**

  - Init- und Selbstaktualisierungsanleitung verbessern ([#9633](https://github.com/nocobase/nocobase/pull/9633)) von @chenos
  - App-Upgrade-Ablauf optimieren ([#9587](https://github.com/nocobase/nocobase/pull/9587)) von @chenos
  - Umgebungs-Auth-Ablauf verbessern ([#9546](https://github.com/nocobase/nocobase/pull/9546)) von @chenos
  - Verbesserte NocoBase CLI-Eingabeaufforderung durch Migration von Setup- und Verwaltungsworkflows zu Inquirer und Behebung damit verbundener Installations-, Skill- und Docker-Laufzeitprobleme. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) von @chenos
  - CLI-Anfragenquellenverfolgung in Anfrageprotokollen und Auditprotokollen hinzugefügt ([#9223](https://github.com/nocobase/nocobase/pull/9223)) von @2013xile
  - Verbesserte generierte API-CLI-Hilfeausgabe und ACL-Befehlsgruppierung ([#9166](https://github.com/nocobase/nocobase/pull/9166)) von @2013xile
  - Verbesserte `nb API`-Hilfe-Fallback und einheitliche Warnmeldungen für Laufzeit-Bootstrap-Fehler ([#9153](https://github.com/nocobase/nocobase/pull/9153)) von @2013xile
- **[client]**

  - jsonLogic von Application v1 zu BaseApplication migriert ([#9522](https://github.com/nocobase/nocobase/pull/9522)) von @zhangzhonghe
  - Unterstützt das Setzen von Feldstilen über runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) von @jiannx
  - Admin-Layout-Einstellungen und Anwendung zur Modell-Host-Architektur mit v1-v2-Kompatibilitätssicherungen umgestaltet ([#8710](https://github.com/nocobase/nocobase/pull/8710)) von @zhangzhonghe
- **[build]**

  - Regressionstests hinzugefügt, um zu verhindern, dass `deleteServerFiles` die Build-Artefakte von `client` und `client-v2` über Windows- und POSIX-Pfade entfernt. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) von @Molunerfinn
  - App-Client-Produktionsbuilds laufen jetzt auf Rsbuild, und Build-Profiling plus Deklarationsplanungsverbesserungen machen Build-Engpässe leichter identifizierbar und reduzierbar. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) von @Molunerfinn
  - Die Client-Build-Pipeline in `@nocobase/build` von Vite zu Rsbuild migriert. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) von @Molunerfinn
- **[database]** Fehlerhafte KI-Geschäftsberichtsgenerierung und Datenabfrageverhalten behoben, um fehlerhafte Diagrammausgabe, falsche Datums-/Uhrzeitbehandlung und fehlende Multi-Datenquellen-Abdeckung zu vermeiden ([#9078](https://github.com/nocobase/nocobase/pull/9078)) von @2013xile
- **[flow-engine]**

  - Schema-Validierung für die UI-Erstellungs-API verbessern. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) von @gchust
- **[app]** Rsbuild-basierten Entwicklungs-Workflow für client-v1 hinzugefügt, während lokale Plugin-Entwicklung und die aktuelle `/v2/`-Topologie kompatibel bleiben ([#8902](https://github.com/nocobase/nocobase/pull/8902)) von @Molunerfinn
- **[Variables and secrets]** Umgebungsvariablen (`$env`) können jetzt über flow-engine-basierte Variablenauswahlen in der v1-Laufzeit ausgewählt werden. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) von @Molunerfinn
- **[Data source manager]**

  - Client-v2-Datenquellenberechtigungsverwaltung hinzugefügt und zugehörige Berechtigungsauswahl-Drawer angeglichen. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) von @jiannx
  - Die Datenmodellierungs-API optimiert, um das Erstellen von Kommentarsammlungen mit KI, das Konfigurieren von Beziehungsfeldern für externe Datenquellen und das Festlegen von Feldvalidierungsregeln zu unterstützen ([#9480](https://github.com/nocobase/nocobase/pull/9480)) von @2013xile
- **[Collection: Connect to foreign data (FDW)]** Verbesserte V2-Sammlungsvorlagenparität für SQL-Sammlungen und Fremddatensammlungen, einschließlich SQL-Bestätigung, Fremddatenbank-Serververwaltung und Vorlagensortierung. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) von @katherinehhh
- **[Multi-keyword filter]** Multi-Keyword-Filter zu client-v2 migriert. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) von @gchust
- **[Workflow]**

  - Workflow-Verlaufstransaktionskopplung von der Workflow-Ausführung entfernt. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) von @mytharcher
  - Async-Knoten-Verfügbarkeitsprüfungen im Workflow umgestaltet ([#9532](https://github.com/nocobase/nocobase/pull/9532)) von @mytharcher
  - Validierung für alle Trigger und Knoten hinzugefügt ([#8930](https://github.com/nocobase/nocobase/pull/8930)) von @mytharcher
- **[UI templates]** UI-Vorlagen zu client-v2 migriert. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) von @gchust
- **[Departments]** V2-Einstellungsseite für die Verwaltung von Abteilungen, Abteilungsmitgliedern und Benutzerabteilungszuweisungen hinzugefügt. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) von @jiannx
- **[Notification manager]** Die benachrichtigungsbezogenen Plugins zu v2 migriert. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) von @Molunerfinn
- **[Data visualization]** Client-v2-Unterstützung für Diagrammblöcke hinzugefügt. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) von @jiannx
- **[Verification]** V2-Client zum Verifizierungs-Plugin hinzugefügt (Admin-Einstellungsseite, Benutzercenter-Eintrag, SMS-OTP-Formulare). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) von @Molunerfinn
- **[Authentication]**

  - Benutzerdefinierte Markeneinstellungen funktionieren jetzt korrekt im v2-Client ([#9543](https://github.com/nocobase/nocobase/pull/9543)) von @zhangzhonghe
  - Die Authentifikator-Einstellungsseite in client-v2 implementiert und wiederverwendbare client-v2-Tabellen-, Variableneingabe- und Formular-Primitive ausgeliefert. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) von @Molunerfinn
- **[Block: Map]** V2-Client-Unterstützung für das Karten-Plugin hinzugefügt. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) von @jiannx
- **[Localization]** Lina-Lokalisierungsübersetzungsaufgaben mit Übersetzungsbereich, Referenzspracheinstellungen und Schnellbearbeitung verbessert ([#9521](https://github.com/nocobase/nocobase/pull/9521)) von @2013xile
- **[Workflow: Custom action event]**

  - Die Plugins block-workbench und workflow-custom-action-trigger zu client-v2 migriert, einschließlich ihrer Aktionsmodelle und des QR-Scanner-Flusses. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) von @jiannx
  - ACL-Steuerung des Auslösens im Datensatzmodus (sowohl einzeln als auch mehrfach) hinzugefügt ([#9125](https://github.com/nocobase/nocobase/pull/9125)) von @mytharcher
- **[Block: iframe]** V2-Unterstützung für den iframe-Block hinzugefügt. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) von @jiannx
- **[Block: GridCard]** Grid-Karten-Plugin aktualisiert, um client-v2 zu unterstützen ([#9484](https://github.com/nocobase/nocobase/pull/9484)) von @jiannx
- **[AI employees]**

  - KI-Mitarbeiter-Parallelgesprächsinteraktion und Leistungsoptimierung ([#9462](https://github.com/nocobase/nocobase/pull/9462)) von @cgyrock
  - KI-Mitarbeiter unterstützen die parallele Verarbeitung mehrerer Gespräche ([#9344](https://github.com/nocobase/nocobase/pull/9344)) von @cgyrock
  - Nathans RunJS-Bearbeitungswerkzeuge verbessert und Verzögerungen während langer KI-Chat-Gespräche reduziert ([#9311](https://github.com/nocobase/nocobase/pull/9311)) von @2013xile
  - KI-Mitarbeiter-Kurzaufgabenkonfiguration aktualisiert, um dieselbe Skill-Einstellungskomponente wie die Workflow-KI-Mitarbeiterknotenkonfiguration zu verwenden ([#9246](https://github.com/nocobase/nocobase/pull/9246)) von @cgyrock
  - Die Skill-/Tool-Konfigurationsinteraktion für KI-Mitarbeiteranweisungen angepasst ([#9232](https://github.com/nocobase/nocobase/pull/9232)) von @cgyrock
  - KI-Chatbox-Benutzeraufforderung aktualisiert ([#8717](https://github.com/nocobase/nocobase/pull/8717)) von @heziqiang
  - KI-Chatbox-Benutzeraufforderung aktualisiert ([#8717](https://github.com/nocobase/nocobase/pull/8717)) von @heziqiang
- **[File manager]** Drittanbieter-Speicher-Plugins können jetzt ihren eigenen Speichertyp-Formular auf der v2-Dateimanager-Einstellungsseite registrieren. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) von @Molunerfinn
- **[Block: Kanban]**

  - Verbesserte Konsistenz des Detailfeldabstands in v2 und Kanban-Karten- und Spaltenabstand passen sich jetzt besser an die Theme-Einstellungen an. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) von @jiannx
  - Standard-Kanban-Spaltenbreite reduziert. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) von @jiannx
  - Verbesserte Kalender- und Kanban-Blockerstellungseinstellungen. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) von @jiannx
- **[IdP: OAuth]** OAuth-Sitzungen verwenden jetzt dieselben Ablaufeinstellungen wie die System-Token-Richtlinie ([#9345](https://github.com/nocobase/nocobase/pull/9345)) von @2013xile
- **[Access control]** Neue APIs für acl skill hinzugefügt ([#9198](https://github.com/nocobase/nocobase/pull/9198)) von @Andrew1989Y
- **[Flow engine]** Neue APIs für die UI-Erstellung hinzugefügt. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) von @gchust
- **[Action: Custom request]**

  - Aktionsmodelle für benutzerdefinierte Anfragen hinzugefügt ([#8890](https://github.com/nocobase/nocobase/pull/8890)) von @jiannx
  - Ereignis-Streaming unterstützt benutzerdefinierte Anfragen ([#8749](https://github.com/nocobase/nocobase/pull/8749)) von @jiannx
- **[Workflow: Pre-action event]** Validierungsregeln für Trigger und Knoten hinzugefügt ([#8971](https://github.com/nocobase/nocobase/pull/8971)) von @mytharcher
- **[Collection field: administrative divisions of China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) von @jiannx
- **[Auth: SAML 2.0]**

  - SAML/CAS-Anmeldeweiterleitungen folgen jetzt dem modernen Client-Präfix. von @Molunerfinn
  - Client-v2-Einträge für die CAS- und SAML-Authentifizierungs-Plugins hinzugefügt, sodass sie mit der v2-Anmeldeseite und den Authentifikator-Einstellungen funktionieren. von @Molunerfinn
- **[IP restriction]** V2-Client für das IP-Einschränkungs-Plugin hinzugefügt. von @Molunerfinn
- **[Custom brand]** Benutzerdefinierte Markeneinstellungen sind jetzt im v2-Client verfügbar von @zhangzhonghe
- **[Workflow: Webhook]** Validierung für die Erstellung von Trigger-/Knoten-APIs hinzugefügt von @mytharcher
- **[Workflow: Subflow]**

  - Workflow-Verlaufstransaktionskopplung von Subflow-Workflow-Anweisungen entfernt. von @mytharcher
  - Validierung für die Erstellung von Knoten-APIs hinzugefügt von @mytharcher
- **[Template print]** Druckvorlagen-Sammlungsmetadaten für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[Auth: OIDC]** OIDC-Anmeldeweiterleitung folgt jetzt dem modernen Client-Präfix. von @Molunerfinn
- **[Record history]** Datensatzverlaufs-Sammlungsmetadaten für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[Workflow: Approval]**

  - `async`-Flag für Genehmigungsanweisungen hinzugefügt, um sich an die neue Knotenerstellungs-API in der Workflow-Leinwand anzupassen von @mytharcher
  - Workflow-Verlaufstransaktionskopplung von Genehmigungs-Workflow-Anweisungen entfernt. von @mytharcher
  - Validierung für die Erstellung von Genehmigungsknoten hinzugefügt von @mytharcher
  - Workflow-Genehmigungs-Sammlungsmetadaten für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
  - Validierung für Trigger-/Knoten-APIs hinzugefügt von @mytharcher
  - Validierungsregeln für Genehmigungs-Trigger-Konfiguration und Knotenkonfiguration angepasst, um sicherzustellen, dass das UI-Feld vorhanden ist von @mytharcher
- **[Audit logs]** Audit-Protokoll-Sammlungsmetadaten für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[Email manager]** E-Mail-Manager-Sammlungsmetadaten für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock
- **[App supervisor]** App-Supervisor-Sammlungsmetadaten für die Versionskontroll-Backup-Klassifizierung aktualisiert. von @cgyrock

### 🐛 Fehlerbehebungen

- **[undefined]**

  - nginx-Konfigurationspfade angleichen ([#9528](https://github.com/nocobase/nocobase/pull/9528)) von @chenos
  - Tote Links in übersetzter Dokumentation behoben und tote-Link-Erkennung standardmäßig im Docs-Build aktiviert. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) von @Molunerfinn
  - Den Abhängigkeits-und-Build-Workflow behoben, sodass fehlgeschlagene Checkouts eigenständiger Pro-Plugins den CI zum Scheitern bringen, anstatt die Build-Abdeckung stillschweigend zu überspringen. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) von @Molunerfinn
  - Aufgeblähte Übersetzungsdateien behoben und sprachübergreifende Dokumentationsstruktur angeglichen. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) von @Molunerfinn
  - Sprachumschalter behoben, der falsche URLs generierte (z. B. `/cn/es/` anstelle von `/es/`) in der Dokumentationsseite. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) von @Molunerfinn
- **[client-v2]**

  - JSON-Felder in client-v2-Anzeigeansichten behoben, die leere Zellen für Objektwerte renderten. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) von @katherinehhh
  - V2-Optionsfelder behoben, die einfache Optionsbezeichnungen in lokalisierten Umgebungen fälschlicherweise übersetzten. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) von @katherinehhh
  - V2-Tabellenspalten behoben, die unsichtbar wurden, wenn die benutzerdefinierte Spaltenbreite auf 0 gesetzt war. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) von @katherinehhh
  - Alle Beziehungsfeldauswahlen angepasst, um Assoziationsfelder auf maximal zwei Ebenen zu beschränken ([#9454](https://github.com/nocobase/nocobase/pull/9454)) von @jiannx
  - Fehler beim Speichern von Menüverknüpfungsregeln behoben ([#9666](https://github.com/nocobase/nocobase/pull/9666)) von @zhangzhonghe
  - Übermäßigen Abstand oberhalb von Blöcken auf v2-Seiten behoben ([#9647](https://github.com/nocobase/nocobase/pull/9647)) von @zhangzhonghe
  - Feldwerte bei Zuweisung beibehalten ([#9640](https://github.com/nocobase/nocobase/pull/9640)) von @katherinehhh
  - Die Anmelde-Tabs von Unter-Apps behoben, die rohe Übersetzungsvorlagen renderten, und verhindert, dass der v2-Authentifizierungsmethode-Bearbeitungs-Drawer beim Absenden Feldwerte verliert. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) von @Molunerfinn
  - Leistung der Plugin-Manager-Seite verbessert, indem CSS line-clamp anstelle von antd Typography ellipsis verwendet wird. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) von @Molunerfinn
  - Browser-Sprachmetadaten behoben, sodass die App-Seite der ausgewählten Anwendungssprache folgt, anstatt als Englisch markiert zu sein. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) von @Molunerfinn
  - Inkonsistente dnd-kit-Abhängigkeitsregistrierung behoben. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) von @jiannx
  - Fehler behoben, bei dem die v2-Route des Kanban-Plugins nicht geladen werden konnte, weil dnd-kit-Abhängigkeiten nicht vom Client bereitgestellt wurden. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) von @jiannx
  - Die gemeinsam genutzte v2-Tabellenkomponente zeigt jetzt standardmäßig den Seitenzahl-Auswähler an, was dem v1-Verhalten entspricht. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) von @Molunerfinn
  - Problem behoben, bei dem die Liste der Titel-Feldoptionen für Beziehungsfelder in Tabellenblöcken leer war ([#9490](https://github.com/nocobase/nocobase/pull/9490)) von @katherinehhh
  - Leere Gruppen nach dem Filtern von v1-Menüs im v2-Layout beibehalten ([#9478](https://github.com/nocobase/nocobase/pull/9478)) von @zhangzhonghe
  - Problem behoben, bei dem die Seite hinter dem Plugin-Aktivierungsdialog leer wurde ([#9455](https://github.com/nocobase/nocobase/pull/9455)) von @zhangzhonghe
  - Abstürze von v1-Admin-Seiten behoben, wenn sie in Produktionsbuilds auf v2-Plugin-Module verweisen. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) von @Molunerfinn
  - Fehler beim Auswählen von Assoziationsfeldern in den Feldeinstellungen behoben. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) von @gchust
  - Problem behoben, bei dem nach dem Start der App kurz eine 404-Seite aufblitzt ([#9365](https://github.com/nocobase/nocobase/pull/9365)) von @zhangzhonghe
  - Problem behoben, bei dem einige v2-Seiten keine Remote-Plugins laden konnten ([#9369](https://github.com/nocobase/nocobase/pull/9369)) von @zhangzhonghe
  - Probleme mit dem Drag-Platzhalter und der Ablageposition von v2-Seitenblöcken behoben ([#9361](https://github.com/nocobase/nocobase/pull/9361)) von @zhangzhonghe
  - Remote-Plugin-Laden behoben, sodass Plugin-URLs, die bereits auf `.js` enden, nicht zu doppelten `.js.js`-Pfaden aufgelöst werden. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) von @Molunerfinn
  - Problem behoben, bei dem `RemoteSelect` in der Konfiguration von gebundenen Workflows nicht gerendert wurde ([#9314](https://github.com/nocobase/nocobase/pull/9314)) von @mytharcher
- **[client]**

  - Problem behoben, bei dem Blöcke nach dem Aktualisieren der Seite fälschlicherweise als gelöscht angezeigt werden konnten ([#9662](https://github.com/nocobase/nocobase/pull/9662)) von @zhangzhonghe
  - Problem behoben, bei dem in einer Untertabelle in einem Unterformular keine zweite Zeile hinzugefügt werden konnte ([#9586](https://github.com/nocobase/nocobase/pull/9586)) von @katherinehhh
  - Zeitformat für v2-Zeitfelder beim Speichern beibehalten ([#9579](https://github.com/nocobase/nocobase/pull/9579)) von @katherinehhh
  - Upload-Limit für Scan-Eingabebilder erhöht ([#9580](https://github.com/nocobase/nocobase/pull/9580)) von @katherinehhh
  - Synchronisierung des mobilen Datumsauswahl-Popup-Werts behoben ([#9582](https://github.com/nocobase/nocobase/pull/9582)) von @katherinehhh
  - Dev-Modus-Laden für gebaute Speicher-Plugins behoben, die von benannten Exporten aus lokalen Quell-Plugins abhängen. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) von @Molunerfinn
  - Problem behoben, bei dem Systemeinstellungen nach dem Absenden leer erschienen ([#9458](https://github.com/nocobase/nocobase/pull/9458)) von @zhangzhonghe
  - Nicht wesentliche optionale Blöcke im Auswahl-Popup-Fenster verwandter Felder herausgefiltert ([#9224](https://github.com/nocobase/nocobase/pull/9224)) von @jiannx
  - Problem behoben, bei dem sich der Seitentitel nach dem Wechseln von Menüs nicht aktualisierte ([#8864](https://github.com/nocobase/nocobase/pull/8864)) von @zhangzhonghe
- **[flow-engine]**

  - Problem behoben, bei dem die Feldsuche beim Überfahren von Assoziationsfeldern gelöscht wurde ([#9646](https://github.com/nocobase/nocobase/pull/9646)) von @zhangzhonghe
  - Instabile Kaskadenmenüs bei der Eingabe in Suchfelder behoben ([#9473](https://github.com/nocobase/nocobase/pull/9473)) von @zhangzhonghe
  - Falsche Fehlermeldung in der Browser-Konsole behoben. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) von @gchust
  - Instabile Beziehungsfeld-Untermenüs in Submodell-Menüs behoben ([#9417](https://github.com/nocobase/nocobase/pull/9417)) von @jiannx
  - JS-Snippets zum Setzen von Formularelementen und Detail-Elementen hinzugefügt ([#8974](https://github.com/nocobase/nocobase/pull/8974)) von @jiannx
- **[build]**

  - Text-Assets in Server-Builds werden jetzt als Dateien kopiert, anstatt in JavaScript-Module konvertiert zu werden. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) von @Molunerfinn
  - Plugin-Build-Fehler behoben, wenn v1-Client-Code den `/client-v2`-Eintrag eines anderen Plugins importiert. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) von @Molunerfinn
- **[cli-v1]**

  - create-nocobase-app-Entwicklungsstart behoben, indem gepackte App-Shells wiederverwendet werden, während lokale Plugin-Entwicklung ermöglicht wird. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) von @Molunerfinn
  - Entwicklungsstartfehler in Apps behoben, die mit create-nocobase-app erstellt wurden, verursacht durch die app-dev-Client-Pfadauflösung. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) von @Molunerfinn
- **[server]**

  - OAuth-Entdeckungsanfragen von Unteranwendungen behoben, die als Haupt-App-Anfragen weitergeleitet wurden ([#9383](https://github.com/nocobase/nocobase/pull/9383)) von @2013xile
  - Unterstützt das Abrufen der Zielanwendung per Hostname ([#8978](https://github.com/nocobase/nocobase/pull/8978)) von @2013xile
- **[cli]**

  - CLI-Boolesche Optionen behoben, sodass sie mit negierten Flags deaktiviert werden können ([#9337](https://github.com/nocobase/nocobase/pull/9337)) von @2013xile
  - CLI-OAuth-Anmeldefehler unter Windows behoben, die durch lange Autorisierungs-URLs verursacht wurden ([#9159](https://github.com/nocobase/nocobase/pull/9159)) von @2013xile
- **[ai]** Fehlende Kategoriefeldeinrichtung während der KI-Mitarbeiterregistrierung behoben ([#9300](https://github.com/nocobase/nocobase/pull/9300)) von @cgyrock
- **[test]** Plugin-Builds behoben, sodass Server-Abhängigkeiten mit gepunkteten Paketnamen wie `big.js` in `dist/node_modules` verpackt werden. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) von @Molunerfinn
- **[Calendar]**

  - Problem behoben, bei dem in v2-Kalenderblock-Detail-Drawern keine Detail- und Bearbeitungsblöcke hinzugefügt werden konnten ([#9729](https://github.com/nocobase/nocobase/pull/9729)) von @jiannx
  - Kalenderereignisfarben behoben, die nicht aus dem konfigurierten Farbfeld auf v2-Seiten gerendert wurden. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) von @jiannx
  - Cursor-Stil für Ereigniselemente in der Kalender-Mehr-Ereignis-Überlagerung behoben ([#9519](https://github.com/nocobase/nocobase/pull/9519)) von @jiannx
  - Kalenderaktionen nicht für andere Blöcke registrieren ([#9200](https://github.com/nocobase/nocobase/pull/9200)) von @jiannx
- **[AI employees]**

  - KI-Mitarbeiter-Datenabfrageaufforderungen verbessert, um den erforderlichen Skill vor der Verwendung von Abfrage-Tools zu laden. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) von @cgyrock
  - Fehlenden Dara-Assistenten-Button in client-v2-Diagrammeinstellungen behoben. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) von @cgyrock
  - Workflow-KI-Mitarbeiterknoten können das Standardmodell verwenden ([#9679](https://github.com/nocobase/nocobase/pull/9679)) von @cgyrock
  - `ctx.get`-Fehler in KI-Mitarbeiter-Workflow-Knoten behoben ([#9661](https://github.com/nocobase/nocobase/pull/9661)) von @cgyrock
  - Fehler beim Zugriff auf eine schreibgeschützte Wissensdatenbank durch KI-Mitarbeiter behoben ([#9538](https://github.com/nocobase/nocobase/pull/9538)) von @cgyrock
  - Problem behoben, bei dem KI-Tool-Aufrufkarten nicht sofort erschienen, wenn gestreamte Tool-Ereignisse aufgeteilt wurden ([#9534](https://github.com/nocobase/nocobase/pull/9534)) von @2013xile
  - Problem behoben, bei dem Operator-Rollenberechtigungen in KI-Mitarbeiterknoten nicht wirksam wurden ([#9513](https://github.com/nocobase/nocobase/pull/9513)) von @cgyrock
  - plugin-ai-Ladefehler behoben ([#9483](https://github.com/nocobase/nocobase/pull/9483)) von @cgyrock
  - Problem behoben, bei dem der Workflow-KI-Mitarbeiterknoten nach der Tool-Zuweisung nicht richtig endete. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) von @cgyrock
  - Fehler beim Lesen von Assoziationsfeld-Anhängen durch KI-Mitarbeiterknoten im Workflow behoben ([#9377](https://github.com/nocobase/nocobase/pull/9377)) von @cgyrock
  - Problem behoben, bei dem der Workflow-KI-Mitarbeiterknoten nach dem Wechseln von KI-Mitarbeitern Skills löscht ([#9342](https://github.com/nocobase/nocobase/pull/9342)) von @cgyrock
  - Renderfehler bei KI-Mitarbeiter-Kurzaufgaben behoben ([#9267](https://github.com/nocobase/nocobase/pull/9267)) von @cgyrock
  - Fehler in der API zum Abrufen der KI-Mitarbeiterliste behoben ([#9241](https://github.com/nocobase/nocobase/pull/9241)) von @cgyrock
  - Atlas-Aufgabendelegierungsverhalten verfeinert und Viz aktualisiert, um den Geschäftsbericht-Workflow für Berichtsanfragen zu verwenden ([#9229](https://github.com/nocobase/nocobase/pull/9229)) von @2013xile
  - Workflow-KI-Mitarbeiter: UI-Anpassung und Fehlerbehebungen. ([#9213](https://github.com/nocobase/nocobase/pull/9213)) von @cgyrock
  - Anomalien bei der Protokollaufzeichnung in KI-Mitarbeiteranweisungen behoben ([#9180](https://github.com/nocobase/nocobase/pull/9180)) von @cgyrock
  - Durch ACL fallengelassene Sortierung von Aggregatabfragen behoben ([#9099](https://github.com/nocobase/nocobase/pull/9099)) von @2013xile
  - Problem behoben, bei dem Fehlermeldungen in KI-Mitarbeiter-Gesprächen nicht angezeigt wurden ([#9097](https://github.com/nocobase/nocobase/pull/9097)) von @cgyrock
  - Problem behoben, bei dem KI-Mitarbeiter keine Skills verwenden konnten ([#9023](https://github.com/nocobase/nocobase/pull/9023)) von @cgyrock
  - Problem behoben, bei dem das LLM weiterhin versucht, Skills zu laden, nachdem das getSkill-Tool deaktiviert wurde ([#9013](https://github.com/nocobase/nocobase/pull/9013)) von @cgyrock
  - Fehlgeschlagene Testfälle im KI-Modul des Kernpakets behoben. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) von @cgyrock
- **[Data source manager]**

  - Veraltete Titel-Feldanzeige beim erneuten Öffnen des v2-Datenquellen-Feldkonfigurations-Drawers nach Änderung des Titel-Felds behoben. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) von @katherinehhh
  - Verbesserte Fehlermeldungen des V2-Datenquellen-Managers, wenn Sammlungs-, Feld-, Synchronisierungs- und Tabellenladevorgänge fehlschlagen. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) von @katherinehhh
  - Multi-Space-Feldlokalisierung im v2-Datenquellen-Manager behoben. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) von @jiannx
  - MCP-Tool-Benennung optimiert und redundante API-Antworten reduziert, um übermäßigen Verbrauch des KI-Gesprächskontexts zu vermeiden ([#9000](https://github.com/nocobase/nocobase/pull/9000)) von @2013xile
- **[Block: Map]** Fehlende Karten-Geometriefelder im v2-Datenquellen-Manager-Hinzufügen-Feld-Menü nach Aktivierung des Karten-Plugins behoben. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) von @katherinehhh
- **[Collection: SQL]** Zugriff auf sensible PostgreSQL-Metadaten durch SQL-Sammlungen blockiert ([#9683](https://github.com/nocobase/nocobase/pull/9683)) von @2013xile
- **[Workflow: Custom action event]**

  - Fehlende Workflow-Trigger-Aktion in der Workbench-Aktionspanel-Button-Liste behoben. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) von @katherinehhh
  - Doppelte Trigger-Workflow-Optionen in v2-Block-Aktionsmenüs behoben ([#9622](https://github.com/nocobase/nocobase/pull/9622)) von @zhangzhonghe
  - Benutzerdefinierte Aktions-Workflow-Bindungsoptionen nach der aktuellen Blocksammlung filtern. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) von @mytharcher
- **[Action: Duplicate record]** Button-Status bei fehlgeschlagener Übermittlung zurücksetzen ([#9676](https://github.com/nocobase/nocobase/pull/9676)) von @katherinehhh
- **[Block: Gantt]**

  - Gantt-Tooltip-Platzierung verbessert, um Aufgabenbalken nicht zu überdecken, und Aufgabenbeschriftungen innerhalb und außerhalb der Balken konsistent ausgerichtet ([#9638](https://github.com/nocobase/nocobase/pull/9638)) von @jiannx
  - V2-Gantt-Ordnerpfad für gemeinsame Nutzung behoben und Zebrastreifen hinzugefügt. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) von @jiannx
- **[License settings]**

  - Client-v2-Unterstützung für Lizenz einstellungen und kommerzielle Lizenzeinspritzung hinzugefügt. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) von @jiannx
  - Symlink-gebündelte Abhängigkeiten aufgelöst ([#9518](https://github.com/nocobase/nocobase/pull/9518)) von @chenos
- **[File manager]** Verbesserte PDF-Vorschau-Fehlermeldungen und CORS-Anforderungen für externen Speicher dokumentiert. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) von @mytharcher
  Referenz: [Dateivorschau](docs/docs/en/file-manager/file-preview/index.md)
- **[Block: iframe]** Problem behoben, bei dem der iframe-Inhalt nicht die konfigurierte Blockhöhe ausfüllte ([#9540](https://github.com/nocobase/nocobase/pull/9540)) von @katherinehhh
- **[Action: Export records]** Feldkonfigurationsleistung mit vielen Assoziationsfeldern verbessern ([#9524](https://github.com/nocobase/nocobase/pull/9524)) von @katherinehhh
- **[Localization]** Eingebaute Lokalisierungsreferenzübersetzungen für KI-Übersetzungsaufgaben behoben ([#9531](https://github.com/nocobase/nocobase/pull/9531)) von @2013xile
- **[Authentication]** Verhindern, dass der Server abstürzt, wenn ein WebSocket-Auth-Token auf einen Authentifikator verweist, dessen Auth-Typ-Plugin entladen oder fehlt. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) von @Molunerfinn
- **[Workflow: JavaScript]**

  - Laden des Workflow-JavaScript-QuickJS-Laufzeitpakets in Produktionsbuilds behoben. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) von @mytharcher
  - Problem behoben, bei dem beim Konfigurieren des JavaScript-Knotens ein Fehler ausgelöst wurde ([#9169](https://github.com/nocobase/nocobase/pull/9169)) von @mytharcher
- **[Block: Markdown]** Problem mit Fehlermeldungen des v2-Markdown-Blocks behoben ([#9440](https://github.com/nocobase/nocobase/pull/9440)) von @zhangzhonghe
- **[Block: Tree]**

  - Baumfilter-Blockeinstellungen verbessert und nicht unterstützte Assoziation, Titel-Feld-Fallback und Suchzurücksetzungsverhalten behoben. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) von @jiannx
  - Abnormale Anzeige von Filterblockknoten behoben ([#9260](https://github.com/nocobase/nocobase/pull/9260)) von @jiannx
- **[Mobile (deprecated)]** Mobile Nachrichten-Popups behoben, die nicht geschlossen oder gescrollt werden konnten ([#9424](https://github.com/nocobase/nocobase/pull/9424)) von @zhangzhonghe
- **[AI: MCP server]**

  - MCP-Server-Paketierung behoben, sodass Laufzeitabhängigkeiten enthalten sind ([#9401](https://github.com/nocobase/nocobase/pull/9401)) von @2013xile
  - Authentifizierungskonflikte behoben, die durch nicht zusammenhängende weitergeleitete Header im MCP-generischen CRUD-Tool verursacht wurden ([#8983](https://github.com/nocobase/nocobase/pull/8983)) von @2013xile
  - MCP-Tools behoben, die aus Swagger generiert wurden, wenn Eingabeschemata `null`-Typen oder `nullable`-Marker enthalten, die für die OpenAI-Tool-Validierung ungültig sind ([#8994](https://github.com/nocobase/nocobase/pull/8994)) von @2013xile
- **[Flow engine]** Problem behoben, bei dem von KI generierte Blöcke nicht von Referenzvorlagen zurück in doppelte Vorlagen konvertiert werden konnten. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) von @gchust
- **[Block: Kanban]**

  - Kompaktes Styling von Kanban-Karten verbessert und Schnellerstellungs-Popup-Vorlagenauswahl optimiert. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) von @jiannx
  - Kanban-assoziierte Blöcke behoben, die unaufgelöste Laufzeit-Ressourcenparameter in Popup- oder Unterseitenkontexten verwendeten. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) von @jiannx
  - Wiederholte Anzeige der Feldkonfigurations-Schwebeschicht behoben ([#9271](https://github.com/nocobase/nocobase/pull/9271)) von @jiannx
- **[Action: Custom request]** Koa auf v3 aktualisiert ([#9368](https://github.com/nocobase/nocobase/pull/9368)) von @chenos
- **[Data visualization]** Leere Feldauswahlen in der Diagrammabfragekonfiguration auf Flussseiten behoben ([#9276](https://github.com/nocobase/nocobase/pull/9276)) von @2013xile
- **[IdP: OAuth]**

  - OAuth-CLI-Anmeldefehler behoben und dynamische Registrierung auf lokale Callback-URLs beschränkt ([#9248](https://github.com/nocobase/nocobase/pull/9248)) von @2013xile
  - OAuth-Client-Registrierungs- und Token-Aktualisierungsfehler nach Dienstneustart behoben ([#9139](https://github.com/nocobase/nocobase/pull/9139)) von @2013xile
  - OAuth-Zugriff für reguläre API-Anfragen behoben ([#9120](https://github.com/nocobase/nocobase/pull/9120)) von @2013xile
  - Falsche Weiterleitung nach MCP-OAuth-Anmeldung in Unteranwendungen behoben ([#9015](https://github.com/nocobase/nocobase/pull/9015)) von @2013xile
- **[Workflow: Aggregate node]** Problem behoben, bei dem der Aggregatknoten aufgrund einer falschen Validierungsregel nicht gespeichert werden konnte ([#9208](https://github.com/nocobase/nocobase/pull/9208)) von @mytharcher
- **[Workflow: Loop node]** Validierungen von Workflow-Knoten behoben ([#9111](https://github.com/nocobase/nocobase/pull/9111)) von @mytharcher
- **[Access control]** acl swagger für den MCP-Server aktualisiert ([#9096](https://github.com/nocobase/nocobase/pull/9096)) von @Andrew1989Y
- **[Workflow: mailer node]** Validierung für Variablenfelder behoben ([#9047](https://github.com/nocobase/nocobase/pull/9047)) von @mytharcher
- **[Workflow]**

  - Falsche Validierungsregel der Bedingungsanweisung behoben ([#9017](https://github.com/nocobase/nocobase/pull/9017)) von @mytharcher
  - Problem behoben, bei dem der Modus des Sammlungstriggers nicht auf "Erstellen oder Aktualisieren" gesetzt werden konnte ([#8980](https://github.com/nocobase/nocobase/pull/8980)) von @mytharcher
- **[Password policy]** Anmeldefehler behoben, die den eigentlichen Fehler mit "Argument #1 nicht unterstützter Typ undefined" maskierten, wenn der zugrunde liegende Fehler keinen Statuscode hat. von @Molunerfinn
- **[Data source: REST API]** Build-Fehler der REST-API-Datenquellen-Plugin-Deklaration behoben, die durch nicht übereinstimmende client-v2-Typdeklarationen des Datenquellen-Managers verursacht wurden. von @katherinehhh
- **[plugin-commercial]** Client-v2-kommerzielle Lizenzkomponenten und Topbar-Lizenzstatuseintrag hinzugefügt. von @jiannx
- **[Auth: SAML 2.0]** SAML-Autoweiterleitungs-Interceptor behoben, der die App-Shell zum Flackern brachte und bei jeder Navigation Drawer doppelt öffnete. von @Molunerfinn
- **[Workflow: Webhook]** Problem behoben, bei dem die Erstellung eines Antwortknotens durch die Validierung der `statusCode`-Konfiguration abgefangen wurde von @mytharcher
- **[Migration manager]** `migration:create` behoben, das `taskId` aus dem asynchronen Aufgabenprotokoll zurückgibt. von @Andrew1989Y
- **[Template print]** Fehler bei der PDF-Konvertierung von Druckvorlagen behoben, die nicht korrekt an den Client zurückgegeben wurden von @jiannx
- **[Email manager]**

  - Nach dem Senden der E-Mail wird keine Schließbestätigung angezeigt von @jiannx
  - Titelanzeige der Mail-Identitäten behoben von @jiannx
