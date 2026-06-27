---
title: "NocoBase v2.1.0-alpha.2: ACL-Steuerung für Genehmigungs-APIs hinzugefügt"
description: "Versionshinweise zu v2.1.0-alpha.2"
---

### 🎉 Neue Funktionen

- **[Workflow: Genehmigung]** ACL-Steuerung für Genehmigungs-APIs hinzugefügt von @mytharcher
- **[Auth: DingTalk]** Ermöglicht die Bindung eines Benutzers mit `unionId` von @2013xile

### 🚀 Verbesserungen

- **[AI: Wissensdatenbank]** Die Build-Ausgabe optimiert, um die Paketgröße von plugin-ai-knowledge-base zu reduzieren. von @cgyrock
- **[Multi-Space]** Multi-Space-Berechtigungssteuerung für den Zugriff auf ACL von @jiannx
- **[Aktion: Datensätze exportieren Pro]** Export-Aktionsdatenbereich basierend auf ausgewählten Datensätzen oder Ressourcenfiltern verbessert von @katherinehhh
- **[Workflow: Genehmigung]**

  - Unterstützung für JS-Felder entfernt von @zhangzhonghe
  - Parameter in Abfragen vereinfacht und Leistung verbessert von @mytharcher
  - Zugriffskontrolle für APIs implementiert, um unbefugte Datenoperationen zu verhindern von @mytharcher
  - Reparaturlogik für synchronisierte Zielgruppen nach der Migration hinzugefügt von @mytharcher
- **[Auth: DingTalk]** `userid` als Standardschlüssel für die Benutzerzuordnung verwendet, während die Kompatibilität mit bestehenden Authentifikatoren, die auf Mobilgeräte angewiesen sind, erhalten bleibt von @2013xile

### 🐛 Fehlerbehebungen

- **[Multi-Space]**

  - Migrationsskript hinzugefügt, um `x-ready-pretty` im Space-Feld zu entfernen von @jiannx
  - Verwandter Space beim Hinzufügen zugehöriger Daten von @jiannx
  - Die Farbe des Space-Auswahlfelds folgt dem Theme von @jiannx
  - Das `read-pretty`-Attribut für das Space-Feld entfernt von @jiannx
- **[Feldkomponente: Maske]** Ein Problem behoben, bei dem das Einstellungs-Popup für das Maskenfeld nicht alle Benutzerrollen korrekt laden konnte. von @gchust
- **[Aktion: Datensätze importieren Pro]**

  - Problem behoben, bei dem der durch asynchronen Import ausgelöste Workflow verzögert ausgeführt wurde von @mytharcher
  - Zählzahlen im Importergebnis und Nachrichtenübersetzung korrigiert von @mytharcher
- **[AI: Wissensdatenbank]** Problem behoben, bei dem das System nach dem Build nicht starten konnte von @cgyrock
- **[Datenquelle: REST-API]** Fehlertoleranz für den Anforderungskontext hinzugefügt, um Fehler zu vermeiden, wenn die Methode nicht im Kontext ist von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Problem behoben, bei dem Parameter und Nutzlast beim Auslösen eines benutzerdefinierten Workflows falsch waren von @mytharcher
- **[Aktion: Datensätze exportieren Pro]** Fehler behoben, wenn Unteranwendungen asynchrone Import-/Exportaufgaben ausführen, während die Hauptanwendung das Import/Export Pro-Plugin nicht aktiviert hat von @cgyrock
- **[Workflow: Webhook]**

  - Problem behoben, bei dem ein 404-Fehler ausgelöst wurde, wenn eine POST-Anfrage an eine Webhook-URL in einer Unter-App gesendet wurde von @mytharcher
  - Problem behoben, bei dem Body-Daten fehlten, wenn keine Body-Parsing-Konfiguration vorhanden war von @mytharcher
- **[Workflow: Unterworkflow]** Routenpfad des Workflow-Links korrigiert von @mytharcher
- **[Vorlagendruck]**

  - Problem mit der Feldlistenanzeige in der Konfiguration der Vorlagendruckaktion behoben von @katherinehhh
  - Problem behoben, bei dem Felder mit demselben Schlüssel zu Rendering-Fehlern führten von @jiannx
  - Problem mit verdecktem Konfigurationsvorlagen-Popup behoben von @zhangzhonghe
  - Fußzeilen-Schaltflächen aus der Druckvorlagenkonfiguration entfernt von @katherinehhh
  - Falsche Logik der Druckberechtigungsschaltfläche behoben, wenn Rollen vereinigt wurden. von @jiannx
  - Unterstützung für Space-Feld hinzugefügt von @jiannx
  - Space-Felder in Version 2.0 anzeigen von @jiannx
- **[Dateispeicher: S3(Pro)]** Problem behoben, bei dem der Dateiumbenennungsmodus nicht funktionierte von @mytharcher
- **[Datenvisualisierung: ECharts]** Rechtschreibfehler in ECharts korrigiert von @heziqiang
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem ein Fehler beim Genehmigen eines gelöschten Datensatzes auftrat von @mytharcher
  - Fehler behoben, der im Modus "Vor dem Speichern" auftrat von @mytharcher
  - Problem behoben, bei dem Genehmigungsdaten im Detail-Popup des Datensatzes nicht angezeigt wurden, wenn der Workflow-Modus auf "Vor dem Speichern" gesetzt war von @mytharcher
  - Fehlertoleranz für gelöschte Workflows hinzugefügt, um Ladefehler in der Aufgabenliste zu vermeiden von @mytharcher
  - Problem behoben, bei dem Werte im Detail-Popup von "Mein Antrag" fehlten von @mytharcher
  - Problem behoben, bei dem ein Fehler im Genehmigungsdatensatz-Popup der Version 1.x auftrat von @mytharcher
  - Leistungsproblem behoben, das durch JSON-Felder beim Laden von Listen verursacht wurde (MySQL) von @mytharcher
  - Falsche ID zum Laden des Detaildatensatzes korrigiert von @mytharcher
  - Problem behoben, bei dem Parallelität die wiederholte Fortsetzung der Ausführung verursachte von @mytharcher
  - Build-Fehler behoben, der durch fehlende Abhängigkeiten verursacht wurde von @mytharcher
  - Problem behoben, bei dem aufgrund falscher Parameter der falsche Datensatz geladen wurde von @mytharcher
  - Problem behoben, bei dem eine Genehmigung an den vorherigen Knoten zurückgegeben wurde, aber zum Start zurückkehrte von @mytharcher
  - Fehler behoben, der beim Hinzufügen einer Rolle zu einem Benutzer auftrat, wenn der Workflow für Zielgruppen deaktiviert war von @mytharcher
  - Problem behoben, bei dem der Werteblock aufgrund der fehlenden `ValueBlock.Result`-Komponente nicht angezeigt wurde von @mytharcher
  - Problem behoben, bei dem Felder auf Genehmigungsaufgabenkarten nicht angezeigt wurden von @zhangzhonghe
  - Problem behoben, bei dem Filterfelder im Aufgabencenter nicht korrekt funktionierten von @mytharcher
- **[E-Mail-Manager]**

  - Gesprächskette korrigiert von @jiannx
  - Problem behoben, bei dem der Outlook-Antwortlink gelegentlich unterbrochen wurde von @jiannx
  - Der Textkörper wird nicht eingeklappt, wenn Text ausgewählt ist. Problem mit fehlgeschlagenem Download von Anhängen behoben von @jiannx
  - Problem mit E-Mails im selben Postfach zwischen mehreren Benutzern behoben und Leistung optimiert von @jiannx
  - Filter zur Verwaltung hinzugefügt von @jiannx
  - Schaltfläche "Allen antworten" anzeigen und Datenbereich unterstützt das Filtern von Unternachrichten. von @jiannx
  - Problem behoben, bei dem das E-Mail-Konfigurations-Popup verdeckt wurde von @zhangzhonghe
- **[WeCom]** Problem behoben, bei dem Benutzer nicht automatisch registriert werden konnten, wenn die Mobilnummer fehlte von @2013xile
- **[Migrationsmanager]** Ein potenzielles Einfrieren des Prozesses behoben, das durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen verursacht wurde von @cgyrock
