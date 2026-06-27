---
title: "NocoBase v1.7.0-beta.9: Unterstützung für Benutzerrollen-Union"
description: "Versionshinweise zu v1.7.0-beta.9"
---

### 🎉 Neue Funktionen

- **[acl]** Unterstützung für Benutzerrollen-Vereinigung ([#6301](https://github.com/nocobase/nocobase/pull/6301)) von @aaaaaajie

- **[client]**
  - Unterstützung für die Erweiterung vordefinierter Felder in Sammlungen ([#6183](https://github.com/nocobase/nocobase/pull/6183)) von @katherinehhh

  - Unterstützung für die Erweiterung von Frontend-Filteroperatoren ([#6085](https://github.com/nocobase/nocobase/pull/6085)) von @katherinehhh

- **[Verification]** Unterstützung für die Bindung verschiedener Verifizierungstypen durch Benutzer, wie z. B. SMS- und TOTP-Authentifikatoren, sowie Identitätsüberprüfung in erforderlichen Szenarien. Ermöglicht die Entwicklung und Erweiterung von Verifizierungsmethoden. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) von @2013xile
Referenz: [Verification](https://docs.nocobase.com/handbook/verification)
- **[Calendar]** Unterstützung für die Erweiterung optionaler Felder für Kanban-, Kalender- und Formelfeld-Plugins ([#6076](https://github.com/nocobase/nocobase/pull/6076)) von @katherinehhh

- **[Block: Vorlage]** Plugin `Block: Vorlage` hinzugefügt, das Vorlagenunterstützung für Blöcke basierend auf einem Vererbungsmechanismus bietet. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) von @gchust

- **[plugin-demo-platform]** skipAuthCheck der Route "/new" auf true gesetzt. von @sheldon66

- **[Zwei-Faktor-Authentifizierung (2FA)]** Neue Plugins: Zwei-Faktor-Authentifizierung und Verifizierung: TOTP-Authentifikator von @2013xile
Referenz: [Zwei-Faktor-Authentifizierung (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verifizierung: TOTP-Authentifikator](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Verbesserungen

- **[client]**
  - skipAuthCheck zu router.add hinzugefügt, um die Weiterleitung zur Anmeldeseite auf öffentlichen Seiten zu verhindern. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) von @sheldon66

  - Upgrade der Ant-Design-bezogenen Abhängigkeiten auf 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) von @gchust

- **[utils]** Desktop-Seitenanpassung für mobile Geräte ([#6393](https://github.com/nocobase/nocobase/pull/6393)) von @zhangzhonghe

- **[Öffentliche Formulare]** Seitentitel öffentlicher Formulare bei der Erstellung auf den konfigurierten Titel setzen ([#6538](https://github.com/nocobase/nocobase/pull/6538)) von @katherinehhh

- **[Dateimanager]**
  - Backend-Code zum Generieren einer Dateivorschau-URL hinzugefügt ([#6223](https://github.com/nocobase/nocobase/pull/6223)) von @jiannx

  - API für Speichertyp ändern und Plugin-API hinzufügen ([#6246](https://github.com/nocobase/nocobase/pull/6246)) von @mytharcher

- **[Block: Vorlage]** Unterstützung zum Speichern von Datenblöcken als Blockvorlage von der Seite ([#6348](https://github.com/nocobase/nocobase/pull/6348)) von @gchust

- **[Workflow]** Binde-Workflow-Einstellungen in das Plugin verschieben ([#6143](https://github.com/nocobase/nocobase/pull/6143)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[client]**
  - Drag-and-Drop-Problem bei Tabellenzeilen-Schaltflächen ([#6544](https://github.com/nocobase/nocobase/pull/6544)) von @katherinehhh

  - Variable 'Aktueller Benutzer' kann beim Hinzufügen einer Linkseite nicht verwendet werden ([#6536](https://github.com/nocobase/nocobase/pull/6536)) von @zhangzhonghe

  - Datenbereichsverknüpfung von Beziehungsfeldern ist nicht wirksam ([#6530](https://github.com/nocobase/nocobase/pull/6530)) von @zhangzhonghe

  - Option 'Mehrfachauswahl zulassen' aus Dropdown-Einzelfeldern in Filterformularen entfernt ([#6515](https://github.com/nocobase/nocobase/pull/6515)) von @zhangzhonghe

  - Fehler im Befehl `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) von @gchust

  - Fehlende Felder in der Konfiguration der Verknüpfungsregel ([#6488](https://github.com/nocobase/nocobase/pull/6488)) von @katherinehhh

  - Inhalt wird in mobilen Browsern nicht vollständig angezeigt ([#6446](https://github.com/nocobase/nocobase/pull/6446)) von @zhangzhonghe

  - Bei Verwendung des Operators '$anyOf' ist die Verknüpfungsregel ungültig ([#6400](https://github.com/nocobase/nocobase/pull/6400)) von @zhangzhonghe

  - Falsche Formatierung des Zeitfeldes im Filterformular ([#6374](https://github.com/nocobase/nocobase/pull/6374)) von @katherinehhh

  - Eingabestil für die Standardwerteinstellung des Formulars nicht korrekt ([#6490](https://github.com/nocobase/nocobase/pull/6490)) von @gchust

- **[utils]** Bekannter Fehler 'Desktop responsiv' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) von @zhangzhonghe

- **[acl]** Problem behoben, bei dem Beziehungsfelder unter der Rollenvereinigung nicht angezeigt wurden. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) von @aaaaaajie

- **[Collection: Baum]** Migrationsproblem für plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) von @2013xile

- **[Aktion: Benutzerdefinierte Anfrage]** Herunterladen von UTF-8-kodierten Dateien nicht möglich ([#6541](https://github.com/nocobase/nocobase/pull/6541)) von @2013xile

- **[Variablen und Geheimnisse]** Schaltflächen wurden im Drawer zum Erstellen neuer Variablen nicht angezeigt ([#6485](https://github.com/nocobase/nocobase/pull/6485)) von @gchust

- **[WEB-Client]** Alle Vorkommen von ctx.state.currentRole (einzelne Rolle) durch ctx.state.currentRoles (unterstützt mehrere Rollen) ersetzt. ([#6427](https://github.com/nocobase/nocobase/pull/6427)) von @aaaaaajie

- **[Zugriffskontrolle]**
  - Fehler, wenn der Datenbereich auf eigene Daten gesetzt ist und der Tabelle ein Erstellerfeld fehlt. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) von @aaaaaajie

  - Problem behoben, bei dem das Wechseln der Rollen nicht wirksam wurde. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) von @aaaaaajie

- **[Block: Vorlage]**
  - Option 'Als Vorlage speichern' wurde im Seiten-Datenblock nicht angezeigt ([#6398](https://github.com/nocobase/nocobase/pull/6398)) von @gchust

  - Falsches Verhalten von 'Als Vorlage speichern' im mobilen Client ([#6420](https://github.com/nocobase/nocobase/pull/6420)) von @gchust

  - Anmeldung erforderlich beim Zugriff auf öffentliches Formular ([#6258](https://github.com/nocobase/nocobase/pull/6258)) von @gchust

- **[Auth: API-Schlüssel]** Entfernung der Rollenlistenvereinigung im API-Schlüssel-Plugin ([#6432](https://github.com/nocobase/nocobase/pull/6432)) von @aaaaaajie

- **[Block: Mehrschritt-Formular]** Die Senden-Schaltfläche hat die gleiche Farbe im Standard- und hervorgehobenen Zustand von @jiannx

- **[Workflow: Genehmigung]** Stilproblem mit dem Popup-Dialog 'Neue anwenden' von @zhangzhonghe
