---
title: "NocoBase v2.1.0-beta.34: Client-v2-Unterstützung für das Kanban-Plugin hinzugefügt"
description: "Versionshinweise zu v2.1.0-beta.34"
---

### 🎉 Neue Funktionen

- **[Block: Kanban]** Client-v2-Unterstützung für das Kanban-Plugin hinzugefügt ([#9475](https://github.com/nocobase/nocobase/pull/9475)) von @jiannx

### 🚀 Verbesserungen

- **[cli]** Die NocoBase CLI-Eingabeaufforderung verbessert, indem Setup- und Verwaltungsworkflows zu Inquirer migriert wurden; damit verbundene Installations-, Skills- und Docker-Laufzeitprobleme behoben. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) von @chenos

- **[KI-Mitarbeiter]** Aufforderung bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank ([#9497](https://github.com/nocobase/nocobase/pull/9497)) von @cgyrock

- **[Benachrichtigungsmanager]** Warteschlangenstrategie geändert, um die Sendeleistung zu optimieren ([#9407](https://github.com/nocobase/nocobase/pull/9407)) von @mytharcher

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Die Plugins block-workbench und workflow-custom-action-trigger zu Client v2 migriert, einschließlich ihrer Aktionsmodelle und des QR-Scanner-Ablaufs. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) von @jiannx

- **[Authentifizierung]** Die Authenticators-Einstellungsseite in Client-v2 implementiert und wiederverwendbare Client-v2-Tabellen-, Variableingabe- und Formular-Primitive ausgeliefert. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) von @Molunerfinn

- **[KI: Wissensdatenbank]** Aufforderung bei doppeltem Tabellennamen beim Speichern in der Vektordatenbank von @cgyrock

- **[Auth: SAML 2.0]** Client-v2-Einträge für die CAS- und SAML-Authentifizierungs-Plugins hinzugefügt, damit sie mit der v2-Anmeldeseite und den Authenticators-Einstellungen funktionieren. von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[client-v2]**
  - Behoben, dass die v2-Route des Kanban-Plugins nicht geladen werden konnte, da dnd-kit-Abhängigkeiten nicht vom Client bereitgestellt wurden. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) von @jiannx

  - Die gemeinsame v2-Tabellenkomponente zeigt jetzt standardmäßig den Seitenzahl-Auswähler an, entsprechend dem v1-Verhalten. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) von @Molunerfinn

- **[client]**
  - Behoben: JS-Feldwerte in Unterformularen wurden beim Absenden des Formulars nicht korrekt gesetzt. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) von @gchust

  - Behoben: Aktuelle Popup-Datensatzvariablen konnten in Aktionsschaltflächen-Ereignisabläufen nicht aufgelöst werden. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) von @gchust

- **[flow-engine]** Behoben: Falsche Fehlermeldung in der Browser-Konsole. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) von @gchust

- **[KI-Mitarbeiter]**
  - Behoben: Operator-Rollenberechtigungen werden in KI-Mitarbeiterknoten nicht wirksam ([#9513](https://github.com/nocobase/nocobase/pull/9513)) von @cgyrock

  - Behoben: KI-Mitarbeiter-OSS-Dateilesefehler ([#9493](https://github.com/nocobase/nocobase/pull/9493)) von @cgyrock

- **[API-Dokumentation]** Behoben: Abfrageparameter in der Sammlungs-API-Dokumentation stören sich nicht mehr gegenseitig ([#9442](https://github.com/nocobase/nocobase/pull/9442)) von @jiannx

- **[Datenquelle: Haupt]** Behoben: Feldoptionen werden nach dem Synchronisieren von Feldern in das Schema geschrieben ([#9505](https://github.com/nocobase/nocobase/pull/9505)) von @2013xile

- **[Workflow: JavaScript]** Behoben: Laden des Workflow-JavaScript-QuickJS-Laufzeitpakets in Produktions-Builds. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) von @mytharcher

- **[WEB-Client]** Blockdaten nach dem Entfernen von Menüs bereinigen. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) von @gchust

- **[Aktion: Datensätze importieren]** Behoben: Importierte Datensätze bei datumsähnlichen Feldern zeigen das falsche Datum ([#9463](https://github.com/nocobase/nocobase/pull/9463)) von @mytharcher

- **[Aktion: Datensätze importieren Pro]** Zeitzonenbehandlung für professionelle xlsx-Importe behoben von @mytharcher

- **[Auth: SAML 2.0]** Behoben: SAML-Auto-Redirect-Interceptor flackert die App-Shell und öffnet Drawer bei jeder Navigation doppelt. von @Molunerfinn

- **[Aktion: Datensätze exportieren Pro]** Behoben: Fehler beim Exportieren von Anhängen aus dem Anhang-URL-Feld von @mytharcher
