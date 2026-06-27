---
title: "NocoBase wöchentliche Updates: Neuen Benachrichtigungskanal hinzufügen"
description: "NocoBase wöchentliche Updates 2024-11-07"
---

Fassen Sie die wöchentlichen Produktupdate-Protokolle zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase wird derzeit mit zwei Branches aktualisiert: `main` und `next`.

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Alpha-Version, die einige unveröffentlichte neue Funktionen enthält. Diese Version ist möglicherweise nicht vollständig stabil und eignet sich für Entwickler oder Tester, um neue Funktionen vorab zu testen oder Kompatibilitätstests durchzuführen.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.43-beta](https://www.nocobase.com/en/blog/v1.3.43-beta)

*Veröffentlichungsdatum: 2024-11-05*

### 🚀 Verbesserungen

- **[client]** Numerische Genauigkeit kann auf 8 Stellen konfiguriert werden ([#5552](https://github.com/nocobase/nocobase/pull/5552)) von @chenos

### 🐛 Fehlerbehebungen

- **[client]** Behebt, dass der Verknüpfungsstil im Formular nicht aktualisiert wird. ([#5539](https://github.com/nocobase/nocobase/pull/5539)) von @sheldon66
- **[Auth: API keys]** Korrigiert den URL-Pfad für die Einstellungsseite der API-Schlüssel ([#5562](https://github.com/nocobase/nocobase/pull/5562)) von @2013xile
- **[Mobile]** Behebt das Problem, dass Vorschaubilder von der Seite überdeckt werden ([#5535](https://github.com/nocobase/nocobase/pull/5535)) von @zhangzhonghe
- **[Block: Map]** Behebt die Kartenwiedergabe in Unterdetails und die falsche Wertanzeige für leere Felder ([#5526](https://github.com/nocobase/nocobase/pull/5526)) von @katherinehhh
- **[Collection: Tree]** Behebt Fehler beim Aktualisieren der Pfad-Collection ([#5551](https://github.com/nocobase/nocobase/pull/5551)) von @2013xile

## [v1.3.44-beta](https://www.nocobase.com/en/blog/v1.3.44-beta)

*Veröffentlichungsdatum: 2024-11-05*

### 🎉 Neue Funktionen

- **[Auth: OIDC]** Fügt eine Option "RP-initiated logout aktivieren" hinzu von @2013xile

### 🐛 Fehlerbehebungen

- **[client]** Behebt Filterproblem, wenn ein Single-Select-Feld als Titelfeld in der Assoziationsauswahl festgelegt ist ([#5581](https://github.com/nocobase/nocobase/pull/5581)) von @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241031134640](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241031134640)

*Veröffentlichungsdatum: 2024-10-31*

### 🎉 Neue Funktionen

- **[WeCom]** WeCom-Benachrichtigungskanal hinzugefügt von @chenzhizdt

### 🚀 Verbesserungen

- **[client]** Standardwert wiederherstellen, wenn der Feldtitel gelöscht wird ([#5549](https://github.com/nocobase/nocobase/pull/5549)) von @katherinehhh
- **[Notification manager]**

  - Fügt UserSelect- und UserAddition-Komponenten hinzu, um die Entwicklung von Benachrichtigungskanälen zu optimieren ([#5553](https://github.com/nocobase/nocobase/pull/5553)) von @2013xile
  - API zum Abrufen der Kanaltypen-Registrierung des Benachrichtigungs-Plugins hinzugefügt ([#5531](https://github.com/nocobase/nocobase/pull/5531)) von @mytharcher
  - Anpassung des Kanaltypen-Registrierungsnamens des Benachrichtigungs-Plugins ([#5532](https://github.com/nocobase/nocobase/pull/5532)) von @mytharcher
  - API des Benachrichtigungsmanager-Plugins zum Abrufen aller registrierten Typen hinzugefügt ([#5529](https://github.com/nocobase/nocobase/pull/5529)) von @mytharcher
- **[Notification: In-app message]** Verbessert die In-App-Nachrichten-UI und fügt einige Logs hinzu. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) von @sheldon66

### 🐛 Fehlerbehebungen

- **[database]**

  - Behebt das Aktualisieren von Collection-Optionen mit Filter-Zielschlüssel ([#5558](https://github.com/nocobase/nocobase/pull/5558)) von @chareice
  - Behebt falschen primaryKeyField-Wert in Sequelize bei Verwendung mehrerer Filter-Zielschlüssel ([#5556](https://github.com/nocobase/nocobase/pull/5556)) von @chareice
- **[client]**

  - Behebt das Problem, dass Skelett-Komponenten in Tabellenblöcken nicht verschwinden ([#5548](https://github.com/nocobase/nocobase/pull/5548)) von @zhangzhonghe
  - Behebt Probleme mit der Löschaktion, Textauslassungspunkten und der Anzeige neuer Daten in Untertabellen ([#5523](https://github.com/nocobase/nocobase/pull/5523)) von @katherinehhh
- **[Data source manager]** Behebt das Entfernen einer Datenquelle im Fehlerstatus ([#5554](https://github.com/nocobase/nocobase/pull/5554)) von @chareice
- **[Notification: Email]**

  - Behebt die Abfrage für Benutzer nach IDs in E-Mail-Benachrichtigungen ([#5533](https://github.com/nocobase/nocobase/pull/5533)) von @mytharcher
  - Behebt fehlenden Betreff in E-Mail-Benachrichtigungen basierend auf Benutzer-IDs ([#5534](https://github.com/nocobase/nocobase/pull/5534)) von @mytharcher
  - Behebt den Reaktionsfeldpfad im dynamischen Formular der E-Mail-Benachrichtigung ([#5527](https://github.com/nocobase/nocobase/pull/5527)) von @mytharcher
- **[Collection field: Many to many (array)]** Behebt das Problem, dass die Auswahlkomponente für ein Many-to-Many (Array)-Feld nur eine Option hat ([#5544](https://github.com/nocobase/nocobase/pull/5544)) von @2013xile
- **[Notification manager]** Behebt Seitenabsturz aufgrund falschen Kanaltyps ([#5528](https://github.com/nocobase/nocobase/pull/5528)) von @mytharcher
- **[Workflow: SQL node]** Behebt, dass SSE zu einem Timeout von "waitForLoadState('networkidle')" führt ([#5524](https://github.com/nocobase/nocobase/pull/5524)) von @hongboji
- **[Field component: mask]** Behebt, dass Originaldaten durch Klicken nicht angezeigt werden können, wenn die Komponente im Nur-Lese-Status ist von @gchust
- **[Workflow: Custom action event]** Behebt, dass SSE zu einem Timeout von "waitForLoadState('networkidle')" führt von @hongboji
- **[WeCom]** Behebt das Problem der 404-Antwort beim Betreten der Anwendung über die WeCom-Arbeitsumgebung von @chenzhizdt

## [v1.4.0-alpha.20241104151643](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241104151643)

*Veröffentlichungsdatum: 2024-11-04*

### 🎉 Neue Funktionen

- **[client]**
  - [table] 'Popup'-Aktion zum Konfigurieren von Aktionen hinzugefügt ([#5580](https://github.com/nocobase/nocobase/pull/5580)) von @bignof
  - "Konfigurationsfelder" unterstützen das Filtern von Feldern ([#5471](https://github.com/nocobase/nocobase/pull/5471)) von @katherinehhh

### 🚀 Verbesserungen

- **[client]** Unterstützung für Layout-Parameter (labelAlign, labelWidth, labelWrap) hinzugefügt ([#5521](https://github.com/nocobase/nocobase/pull/5521)) von @katherinehhh
- **[Multi-app manager]** Asynchroner Schnellstart für Sub-Apps ([#5571](https://github.com/nocobase/nocobase/pull/5571)) von @chenos
- **[Collection: Tree]** Verbessert die Ladelogik von Collections mit Schema-Attribut ([#5541](https://github.com/nocobase/nocobase/pull/5541)) von @chareice

### 🐛 Fehlerbehebungen

- **[client]**
  - Das Suchfeld sollte basierend auf dem übersetzten Text durchsuchen ([#5572](https://github.com/nocobase/nocobase/pull/5572)) von @katherinehhh
  - Behebt Problem beim Hinzufügen von Daten zur Untertabelle nach dem Löschen ([#5566](https://github.com/nocobase/nocobase/pull/5566)) von @katherinehhh

## [v1.4.0-alpha.20241105053324](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105053324)

*Veröffentlichungsdatum: 2024-11-05*

### 🐛 Fehlerbehebungen

- **[client]** Entfernt das Suchfeld beim Hinzufügen eines Blocks zur Seite ([#5577](https://github.com/nocobase/nocobase/pull/5577)) von @katherinehhh

## [v1.4.0-alpha.20241105230315](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105230315)

*Veröffentlichungsdatum: 2024-11-06*

### 🐛 Fehlerbehebungen

- **[client]** Behebt Auflösungsfehler beim Konfigurieren von Feldern nach dem Hinzufügen einer neuen Datenquelle ([#5576](https://github.com/nocobase/nocobase/pull/5576)) von @katherinehhh

## [v1.4.0-alpha.1](https://www.nocobase.com/en/blog/v1.4.0-alpha.1)

*Veröffentlichungsdatum: 2024-11-06*

### 🎉 Neue Funktionen

- **[utils]** Unterstützt die Verwendung von Handlebars im Nachrichteninhalt ([#5559](https://github.com/nocobase/nocobase/pull/5559)) von @mytharcher
- **[client]** Tabellenblock unterstützt Größeneinstellungen ([#5563](https://github.com/nocobase/nocobase/pull/5563)) von @katherinehhh
- **[Notification: In-app message]** Unterstützt In-App-Nachrichten für mobile Clients ([#5560](https://github.com/nocobase/nocobase/pull/5560)) von @sheldon66

### 🚀 Verbesserungen

- **[Notification manager]** Empfänger zu Benachrichtigungsprotokollen hinzugefügt ([#5561](https://github.com/nocobase/nocobase/pull/5561)) von @sheldon66

### 🐛 Fehlerbehebungen

- **[client]** Behebt Fehler beim Öffnen eines Popups in Kanban ([#5592](https://github.com/nocobase/nocobase/pull/5592)) von @zhangzhonghe
- **[Access control]** Behebt acl-Meta mit mehreren Filter-Zielschlüsseln ([#5598](https://github.com/nocobase/nocobase/pull/5598)) von @chareice

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 Holen Sie sich NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
