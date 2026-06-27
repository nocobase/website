---
title: "NocoBase v2.1.0-beta.16: Refaktorierung der NocoBase CLI"
description: "Versionshinweise zu v2.1.0-beta.16"
---

### 🎉 Neue Funktionen

- **[undefined]** Hinzufügen eines CI-Workflows, der nach fehlenden `plugin-*` peerDependencies sucht und den Build ausführt, mit PR-Kommentar-Berichterstattung. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) von @Molunerfinn

- **[cli-v1]** Speicherpfad aus der Umgebungsvariable auflösen ([#9147](https://github.com/nocobase/nocobase/pull/9147)) von @chenos

- **[cli]** NocoBase CLI umgestaltet ([#9122](https://github.com/nocobase/nocobase/pull/9122)) von @chenos

- **[flow-engine]** `getSubclassesOfAsync` zur FlowEngine hinzugefügt, um asynchron registrierte Modellklassen über das neue `extends`-Feld in `registerModelLoaders` zu entdecken. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) von @Molunerfinn

- **[Workflow]**
  - API zur Überprüfung der Knotenerstellung hinzugefügt ([#9207](https://github.com/nocobase/nocobase/pull/9207)) von @mytharcher

  - Protokollfeld für Jobs hinzugefügt, um Protokollinhalte einiger Knoten zum Debuggen anzuzeigen ([#9165](https://github.com/nocobase/nocobase/pull/9165)) von @mytharcher

- **[KI-Mitarbeiter]**
  - Der Workflow hat eine KI-Mitarbeiteranweisung hinzugefügt ([#9025](https://github.com/nocobase/nocobase/pull/9025)) von @cgyrock

  - Ein Datenabfrage-Tool und ein Tool für Geschäftsanalyseberichte für KI-Mitarbeiter hinzugefügt ([#9040](https://github.com/nocobase/nocobase/pull/9040)) von @2013xile

  - Möglichkeit hinzugefügt, Unteragenten für KI-Mitarbeiter aufzurufen ([#8935](https://github.com/nocobase/nocobase/pull/8935)) von @cgyrock

  - SKILLS-Fähigkeit für KI-Mitarbeiter hinzugefügt. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) von @cgyrock

- **[Auth: API-Schlüssel]** `pm list` und `generate-api-key` Befehle hinzugefügt ([#9076](https://github.com/nocobase/nocobase/pull/9076)) von @chenos

- **[KI: MCP-Server]**
  - Bietet eine generische Datenabfrage-API für Sammlungen, die über MCP aufrufbar ist ([#8985](https://github.com/nocobase/nocobase/pull/8985)) von @2013xile

  - Ein neues MCP-Server-Plugin hinzugefügt, um NocoBase-Systeme zu erstellen und Geschäftsworkflows zu unterstützen. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) von @2013xile

- **[Datenquellen-Manager]** Unterstützung für bedarfsgesteuertes Laden von MCP-Tools ([#8936](https://github.com/nocobase/nocobase/pull/8936)) von @2013xile

- **[IdP: OAuth]** Ein neues IdP: OAuth-Plugin hinzugefügt, um MCP-Diensten die Authentifizierung über OAuth zu ermöglichen ([#8896](https://github.com/nocobase/nocobase/pull/8896)) von @2013xile

### 🚀 Verbesserungen

- **[cli]**
  - CLI-Anfragenquellenverfolgung in Anfrageprotokollen und Auditprotokollen hinzugefügt ([#9223](https://github.com/nocobase/nocobase/pull/9223)) von @2013xile

  - Verbesserte Ausgabe der generierten API-CLI-Hilfe und ACL-Befehlsgruppierung ([#9166](https://github.com/nocobase/nocobase/pull/9166)) von @2013xile

  - Verbesserte `nb api` Hilfe-Fallback und einheitliche Warnmeldungen für Laufzeit-Bootstrap-Fehler ([#9153](https://github.com/nocobase/nocobase/pull/9153)) von @2013xile

- **[Server]** Verbesserte Swagger-API-Dokumentation des Plugin-Managers ([#9080](https://github.com/nocobase/nocobase/pull/9080)) von @2013xile

- **[Datenbank]** Fehlerhafte KI-Geschäftsberichterstellung und Datenabfrageverhalten behoben, um fehlerhafte Diagrammausgaben, falsche Datums-/Zeitbehandlung und fehlende Abdeckung mehrerer Datenquellen zu vermeiden ([#9078](https://github.com/nocobase/nocobase/pull/9078)) von @2013xile

- **[Build]**
  - App-Client-Produktionsbuilds laufen jetzt auf Rsbuild, und Build-Profiling plus Deklarationsplanungsverbesserungen machen Build-Engpässe leichter identifizierbar und reduzieren sie. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) von @Molunerfinn

  - Migrieren der Client-Build-Pipeline in `@nocobase/build` von Vite zu Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) von @Molunerfinn

- **[Client]** Admin-Layout-Einstellungen und Anwendung zur Modell-Host-Architektur mit v1 v2-Kompatibilitätssicherungen umgestaltet ([#8710](https://github.com/nocobase/nocobase/pull/8710)) von @zhangzhonghe

- **[flow-engine]**
  - Schema-Validierung für die UI-Erstellungs-API verbessert. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) von @gchust

  - Schema-Validierung für die UI-Erstellungs-API verbessert. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) von @gchust

- **[App]** Einen Rsbuild-basierten Entwicklungs-Workflow für client-v1 hinzugefügt, während die lokale Plugin-Entwicklung und die aktuelle `/v2/`-Topologie kompatibel bleiben ([#8902](https://github.com/nocobase/nocobase/pull/8902)) von @Molunerfinn

- **[undefined]** Einen dedizierten client-v2-Einstiegspunkt hinzugefügt und diesen unabhängig mit Rsbuild erstellt, während v1 unverändert bleibt. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) von @Molunerfinn

- **[Zugriffskontrolle]** Einige neue APIs für die ACL-Fähigkeit hinzugefügt ([#9198](https://github.com/nocobase/nocobase/pull/9198)) von @Andrew1989Y

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** ACL-Kontrolle für das Auslösen im Datensatzmodus (sowohl einzeln als auch mehrfach) hinzugefügt ([#9125](https://github.com/nocobase/nocobase/pull/9125)) von @mytharcher

- **[Flow-Engine]** Neue APIs für die UI-Erstellung hinzugefügt. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) von @gchust

- **[Workflow: Voraktionsereignis]** Validierungsregeln für Trigger und Knoten hinzugefügt ([#8971](https://github.com/nocobase/nocobase/pull/8971)) von @mytharcher

- **[Workflow]** Validierung für alle Trigger und Knoten hinzugefügt ([#8930](https://github.com/nocobase/nocobase/pull/8930)) von @mytharcher

- **[Workflow: Webhook]** Validierung für die Erstellung von Trigger-/Knoten-APIs hinzugefügt von @mytharcher

- **[Workflow: Unterworkflow]** Validierung für die Erstellung von Knoten-APIs hinzugefügt von @mytharcher

- **[Workflow: Genehmigung]**
  - Validierung für die Erstellung von Genehmigungsknoten hinzugefügt von @mytharcher

  - Validierung für Trigger-/Knoten-APIs hinzugefügt von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ausgeblendeter Sortierschalter für Beziehungsfelder ([#9220](https://github.com/nocobase/nocobase/pull/9220)) von @jiannx

  - Problem behoben, bei dem der Seitentitel nach dem Wechseln von Menüs nicht aktualisiert wurde ([#8864](https://github.com/nocobase/nocobase/pull/8864)) von @zhangzhonghe

- **[cli]** CLI-OAuth-Anmeldefehler unter Windows behoben, die durch lange Autorisierungs-URLs verursacht wurden ([#9159](https://github.com/nocobase/nocobase/pull/9159)) von @2013xile

- **[Test]** Plugin-Builds behoben, sodass Serverabhängigkeiten mit gepunkteten Paketnamen wie `big.js` in `dist/node_modules` verpackt werden. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) von @Molunerfinn

- **[Server]** Unterstützung zum Abrufen der Zielanwendung per Hostname hinzugefügt ([#8978](https://github.com/nocobase/nocobase/pull/8978)) von @2013xile

- **[Workflow: Aggregatknoten]** Problem behoben, bei dem der Aggregatknoten aufgrund einer falschen Validierungsregel nicht gespeichert werden konnte ([#9208](https://github.com/nocobase/nocobase/pull/9208)) von @mytharcher

- **[KI-Mitarbeiter]**
  - Anomalien bei der Protokollaufzeichnung in der KI-Mitarbeiteranweisung behoben ([#9180](https://github.com/nocobase/nocobase/pull/9180)) von @cgyrock

  - Behoben, dass die Sortierung von Aggregatabfragen durch die ACL verworfen wurde ([#9099](https://github.com/nocobase/nocobase/pull/9099)) von @2013xile

  - Problem behoben, bei dem Fehlermeldungen in den KI-Mitarbeiter-Konversationen nicht angezeigt wurden ([#9097](https://github.com/nocobase/nocobase/pull/9097)) von @cgyrock

  - Problem behoben, bei dem KI-Mitarbeiter keine Fähigkeiten nutzen konnten ([#9023](https://github.com/nocobase/nocobase/pull/9023)) von @cgyrock

  - Problem behoben, bei dem das LLM weiterhin versucht, Fähigkeiten zu laden, nachdem das getSkill-Tool deaktiviert wurde ([#9013](https://github.com/nocobase/nocobase/pull/9013)) von @cgyrock

  - Fehlerhafte Testfälle im KI-Modul des Kernpakets behoben. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) von @cgyrock

- **[Workflow: JavaScript]** Problem behoben, bei dem beim Konfigurieren des JavaScript-Knotens ein Fehler ausgelöst wurde ([#9169](https://github.com/nocobase/nocobase/pull/9169)) von @mytharcher

- **[IdP: OAuth]**
  - Fehler bei der OAuth-Client-Registrierung und Token-Aktualisierung nach einem Dienstneustart behoben ([#9139](https://github.com/nocobase/nocobase/pull/9139)) von @2013xile

  - OAuth-Zugriff für reguläre API-Anfragen behoben ([#9120](https://github.com/nocobase/nocobase/pull/9120)) von @2013xile

  - Falsche Weiterleitung nach MCP-OAuth-Anmeldung in Unteranwendungen behoben ([#9015](https://github.com/nocobase/nocobase/pull/9015)) von @2013xile

- **[Workflow: Schleifenknoten]** Validierungen von Workflow-Knoten behoben ([#9111](https://github.com/nocobase/nocobase/pull/9111)) von @mytharcher

- **[Zugriffskontrolle]** ACL-Swagger für den MCP-Server aktualisiert ([#9096](https://github.com/nocobase/nocobase/pull/9096)) von @Andrew1989Y

- **[Workflow: Mailer-Knoten]** Validierung für variable Felder behoben ([#9047](https://github.com/nocobase/nocobase/pull/9047)) von @mytharcher

- **[Workflow]**
  - Falsche Validierungsregel der Bedingungsanweisung behoben ([#9017](https://github.com/nocobase/nocobase/pull/9017)) von @mytharcher

  - Problem behoben, bei dem der Modus des Sammlungstriggers nicht auf "Erstellen oder Aktualisieren" gesetzt werden konnte ([#8980](https://github.com/nocobase/nocobase/pull/8980)) von @mytharcher

- **[Datenquellen-Manager]** MCP-Tool-Benennung optimiert und redundante API-Antworten reduziert, um übermäßigen Verbrauch des KI-Konversationskontexts zu vermeiden ([#9000](https://github.com/nocobase/nocobase/pull/9000)) von @2013xile

- **[KI: MCP-Server]**
  - MCP-Tools, die aus Swagger generiert wurden, behoben, wenn Eingabeschemas `null`-Typen oder `nullable`-Marker enthalten, die für die OpenAI-Tool-Validierung ungültig sind ([#8994](https://github.com/nocobase/nocobase/pull/8994)) von @2013xile

  - Authentifizierungskonflikte behoben, die durch nicht zusammenhängende weitergeleitete Header im generischen MCP-CRUD-Tool verursacht wurden ([#8983](https://github.com/nocobase/nocobase/pull/8983)) von @2013xile
