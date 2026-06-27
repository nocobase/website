---
title: "NocoBase v1.8.0-beta.13: Unterstützung des BIT-Felds in SQL Server für externe Datenquellen"
description: "Versionshinweise zu v1.8.0-beta.13"
---

### 🎉 Neue Funktionen

- **[Client]**

  - Unterstützung des BIT-Felds in SQL Server für externe Datenquellen. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) von @aaaaaajie
  - Unterstützung benutzerdefinierter Aggregationsvariablen ([#6916](https://github.com/nocobase/nocobase/pull/6916)) von @zhangzhonghe
    Referenz: [Benutzerdefinierte Variablen](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[Build]** Unterstützung kommerzieller Lizenzierung ([#6554](https://github.com/nocobase/nocobase/pull/6554)) von @jiannx
- **[Datenquellen-Manager]** ✨ Unterstützung des bedarfsgesteuerten Ladens von Sammlungen aus externen Datenquellen ([#6979](https://github.com/nocobase/nocobase/pull/6979)) von @aaaaaajie
- **[Lizenzeinstellungen]** Lizenzierungseinstellung hinzugefügt und Lizenz vor dem Herunterladen von Plugins validieren ([#7026](https://github.com/nocobase/nocobase/pull/7026)) von @jiannx
- **[Authentifizierung]** Unterstützung der Funktion "Passwort vergessen" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) von @zhangzhonghe
  Referenz: [Passwort vergessen](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Aktion: Stapelaktualisierung]** Unterstützung der Datenaktualisierung in anderen Datenblöcken nach der Aktualisierung von Daten in einem Block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) von @zhangzhonghe
- **[Datenquelle: Externer SQL Server]**

  - Unterstützung für das SQL Server BIT-Feld in externen Datenquellen hinzugefügt von @aaaaaajie
  - Unterstützung des bedarfsgesteuerten Ladens von Sammlungen aus externen Datenquellen von @aaaaaajie
- **[Benutzerdefinierte Variablen]** Unterstützung benutzerdefinierter Aggregationsvariablen von @zhangzhonghe
  Referenz: [Benutzerdefinierte Variablen](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[E-Mail-Manager]**

  - Unterstützung zum Löschen von E-Mails von @jiannx
  - Unterstützung der Einstellung des E-Mail-Synchronisationsintervalls von @jiannx
  - Unterstützung des Massenversands von @jiannx

### 🚀 Verbesserungen

- **[Client]**

  - Unterstützung zum Ausfüllen von Eingabefeldern durch QR-Code-Scannen ([#6943](https://github.com/nocobase/nocobase/pull/6943)) von @katherinehhh
  - Bestimmung, ob mobile Komponenten basierend auf dem Gerätetyp und nicht auf der Seitenbreite angezeigt werden sollen ([#6611](https://github.com/nocobase/nocobase/pull/6611)) von @zhangzhonghe
  - Unterstützung der Lokalisierung für Markdown-Blockinhalte ([#6941](https://github.com/nocobase/nocobase/pull/6941)) von @katherinehhh
  - Bestimmung, ob das mobile Layout basierend auf dem Gerätetyp und nicht auf der Seitenbreite angezeigt werden soll ([#6600](https://github.com/nocobase/nocobase/pull/6600)) von @zhangzhonghe
- **[Asynchroner Aufgabenmanager]** Verbesserung der Leistung der Aufgabenerstellung während des Exports ([#7078](https://github.com/nocobase/nocobase/pull/7078)) von @aaaaaajie
- **[Mobil]** Anpassung des Stils des Benachrichtigungs-Popups für mobile Geräte ([#6557](https://github.com/nocobase/nocobase/pull/6557)) von @zhangzhonghe
- **[E-Mail-Manager]**

  - Unterstützung des separaten Antwortens und Weiterleitens von E-Mails innerhalb desselben Betreffs von @jiannx
  - Schema-Implementierung, dann E-Mail-Versand und Unterstützung von KI von @jiannx
  - Unterstützt den Standard-Sendewert im Popup, unterstützt die Fuzzy-Suche nach Empfängern und behebt Probleme von @jiannx
  - Vervollständigung der Massenversandfunktion von @jiannx
  - Funktionsverbesserung und Problembehebung von @jiannx

### 🐛 Fehlerbehebungen

- **[CLI]**

  - Anpassung der Lizenzkopie bei der Installation des Plugins ([#7135](https://github.com/nocobase/nocobase/pull/7135)) von @jiannx
  - Undefinierter Fehler beim Herunterladen von Plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) von @jiannx
- **[Client]**

  - Nach dem Löschen des Badge-Werts wird die Benutzeroberfläche nicht aktualisiert ([#7055](https://github.com/nocobase/nocobase/pull/7055)) von @zhangzhonghe
  - Fehler beim Klicken auf die Filtersschaltfläche ([#7100](https://github.com/nocobase/nocobase/pull/7100)) von @zhangzhonghe
  - Behebung des Problems, dass aktuelle Benutzerdaten leer sind ([#7016](https://github.com/nocobase/nocobase/pull/7016)) von @zhangzhonghe
  - Falsch angezeigter Inhalt auf Seiten, die über Popup-Links geöffnet wurden ([#6990](https://github.com/nocobase/nocobase/pull/6990)) von @zhangzhonghe
  - Übergabe anderer Props an die Variable.Input-Komponente. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) von @sheldon66
  - Die Aktion "Als Vorlage speichern" schlägt fehl, wenn sie ein Assoziationsfeld enthält ([#6543](https://github.com/nocobase/nocobase/pull/6543)) von @gchust
- **[Datenbank]** eq-Operator für Zeichenfolgenfelder mit dem Zahlentyp kompatibel machen ([#7062](https://github.com/nocobase/nocobase/pull/7062)) von @chenos
- **[Build]** Behebung des Client-Laufzeitfehlers in plugin-workflow-javascript, Prozess undefinierter Fehler ([#6859](https://github.com/nocobase/nocobase/pull/6859)) von @jiannx
- **[Datenvisualisierung]** Problem mit der Tabellen-Seitennummerierung ([#7151](https://github.com/nocobase/nocobase/pull/7151)) von @2013xile
- **[Datenquellen-Manager]** Problem behoben, bei dem die Kombination aus bedarfsgesteuertem Laden der Datenquelle und der Konfiguration des Tabellenpräfixes einen Fehler "ConnectionManager.getConnection was called after the connection manager was closed" verursachte. ([#7150](https://github.com/nocobase/nocobase/pull/7150)) von @aaaaaajie
- **[plugin-service-platform]** Anpassung des Lizenztextes von @jiannx
- **[Benutzerdefinierte Variablen]** Nach dem Löschen des Badge-Werts wird die Benutzeroberfläche nicht aktualisiert von @zhangzhonghe
- **[E-Mail-Manager]**

  - Anhang wird nicht angezeigt von @jiannx
  - Fehler beim Löschen von E-Mails von @jiannx
  - Löschen der E-Mail fehlgeschlagen von @jiannx
  - Einstellungs-Popup wird nicht angezeigt von @jiannx
  - Der Antwort-Drawer ist nicht sichtbar von @jiannx
  - Fuzzy-Suche nach Empfängern unterstützt assoziierte Felder von @jiannx
  - Hinzufügen des Feldes "id" zu mailmessagelabelsMailmessages von @jiannx
  - Eindeutige Filter für die E-Mail-Fuzzy-Suche von @jiannx
  - Mehrere Primärschlüssel für Tabelle "mailmessagelabels_mailmessages" von @jiannx
