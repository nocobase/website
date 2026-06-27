---
title: "NocoBase v1.7.0-beta.27: Unterstützung von Variablen in Titel und Inhalt der sekundären Bestätigung"
description: "Versionshinweise zu v1.7.0-beta.27"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Variablen in Titel und Inhalt der sekundären Bestätigung ([#6787](https://github.com/nocobase/nocobase/pull/6787)) von @katherinehhh

- **[Vorlagendruck]**
  - Unterstützung für dynamische Bilder und Barcode-Rendering in Dokumentvorlagen. von @sheldon66

  - Funktion: Unterstützung von `{ label, value }` Select-Optionen im Vorlagendruck. von @sheldon66

- **[Block: Baum]** Filterbaum-Block unterstützt Verknüpfungsregeln von @katherinehhh

- **[Datenvisualisierung: ECharts]** "Y-Achse umkehren"-Einstellung für Balkendiagramme hinzugefügt von @2013xile

### 🚀 Verbesserungen

- **[Client]** Optimierung des Stils der "Hinzufügen"-Schaltfläche in Untertabellen und Ausrichtung des Paginators in derselben Zeile ([#6790](https://github.com/nocobase/nocobase/pull/6790)) von @katherinehhh

- **[Dateimanager]** OSS-Timeout-Option hinzugefügt, standardmäßig 10 Minuten ([#6795](https://github.com/nocobase/nocobase/pull/6795)) von @mytharcher

- **[Passwortrichtlinie]** Standard-Passwortablauf auf "Nie ablaufen" geändert von @2013xile

### 🐛 Fehlerbehebungen

- **[Datenbank]**
  - Testfälle korrigiert ([#6811](https://github.com/nocobase/nocobase/pull/6811)) von @mytharcher

  - Fehler vermieden, wenn der Datentyp kein String ist ([#6797](https://github.com/nocobase/nocobase/pull/6797)) von @mytharcher

- **[Client]**
  - Wenn die Variablenauswahl asynchrones Laden erfordert, geht das zuletzt ausgewählte Menü verloren. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) von @gchust

  - Problem behoben, bei dem Unterfelder von 1:n-Feldern nicht als Filteroptionen in Filterformularen ausgewählt werden konnten ([#6809](https://github.com/nocobase/nocobase/pull/6809)) von @zhangzhonghe

  - Problem bei der Konfiguration von Verknüpfungsregeln im Unterformular (Popup) innerhalb einer Untertabelle ([#6803](https://github.com/nocobase/nocobase/pull/6803)) von @katherinehhh

  - Mehrere Fehlermeldungen werden angezeigt, wenn eine Validierungsregel in Formularfeldern verletzt wird ([#6805](https://github.com/nocobase/nocobase/pull/6805)) von @katherinehhh

  - Assoziationsfeld übermittelt keine Daten, wenn ein Feld aus der verknüpften Sammlung angezeigt wird ([#6798](https://github.com/nocobase/nocobase/pull/6798)) von @katherinehhh

  - In Untertabellen fehlen in den Verknüpfungsregeln von Unterformularen (Popups) die Feldeigenschaftseinstellungen ([#6800](https://github.com/nocobase/nocobase/pull/6800)) von @katherinehhh

- **[Authentifizierung]** Ändern des Authentifikatornamens nicht erlaubt ([#6808](https://github.com/nocobase/nocobase/pull/6808)) von @2013xile

- **[Aktion: Benutzerdefinierte Anfrage]** Antwort der benutzerdefinierten Anfrage, die auf eine Variable gesetzt ist, wird nicht korrekt angezeigt ([#6793](https://github.com/nocobase/nocobase/pull/6793)) von @katherinehhh
