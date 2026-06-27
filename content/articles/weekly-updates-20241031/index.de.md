---
title: "NocoBase wöchentliche Updates: Verbesserung der Rendering-Leistung von Tabellenblöcken und mehr"
description: "NocoBase wöchentliche Updates 2024-10-31"
---

Fassen Sie die wöchentlichen Produktupdate-Protokolle zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase wird derzeit mit zwei Branches aktualisiert: `main` und `next`.

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Alpha-Version, die einige noch nicht veröffentlichte neue Funktionen enthält. Diese Version ist möglicherweise nicht vollständig stabil und eignet sich für Entwickler oder Tester, um neue Funktionen vorab zu testen oder Kompatibilitätstests durchzuführen.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.38-beta](https://www.nocobase.com/en/blog/v1.3.38-beta)

*Veröffentlichungsdatum: 2024-10-24*

### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem mit der Seitennummerierung im Listenblock bei Sammlungen mit einfacher Seitennummerierung ([#5500](https://github.com/nocobase/nocobase/pull/5500)) von @katherinehhh
  - Im Nicht-Konfigurationsmodus wird im Bearbeitungsformular nur die aktuelle Sammlung angezeigt. ([#5499](https://github.com/nocobase/nocobase/pull/5499)) von @katherinehhh
- **[Workflow: HTTP-Request-Knoten]** Problem behoben, bei dem beim Einfügen von Inhalten in ein Variablen-Textfeld ein spezielles Leerzeichen auftrat ([#5497](https://github.com/nocobase/nocobase/pull/5497)) von @mytharcher
- **[Abteilungen]** Problem mit der falschen Berechtigungsprüfung für externe Datenquellen unter der Abteilungsrolle behoben von @2013xile

## [v1.3.39-beta](https://www.nocobase.com/en/blog/v1.3.39-beta)

*Veröffentlichungsdatum: 2024-10-24*

### 🐛 Fehlerbehebungen

- **[Client]** Problem behoben, bei dem Filterblöcke im Popup nicht hinzugefügt werden konnten ([#5502](https://github.com/nocobase/nocobase/pull/5502)) von @zhangzhonghe

## [v1.3.40-beta](https://www.nocobase.com/en/blog/v1.3.40-beta)

*Veröffentlichungsdatum: 2024-10-25*

### 🎉 Neue Funktionen

- **[Auth: OIDC]** Option zum Überspringen der SSL-Überprüfung hinzugefügt von @2013xile

### 🚀 Verbesserungen

- **[Client]** Deaktivierte, nicht ausgewählte Kontrollkästchen für nicht ausgewählte Felder anzeigen ([#5503](https://github.com/nocobase/nocobase/pull/5503)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Datenbank]** Problem behoben, bei dem die Zeichenfolgenoperatoren "enthält" und "enthält nicht" `null`-Werte nicht korrekt verarbeiteten ([#5509](https://github.com/nocobase/nocobase/pull/5509)) von @2013xile
- **[Client]** Verknüpfungsregel korrigiert, um URL-Parametervariablen korrekt auszuwerten ([#5504](https://github.com/nocobase/nocobase/pull/5504)) von @katherinehhh
- **[Block: Karte]** Problem behoben, bei dem einige Karten falsch angezeigt wurden, wenn mehrere Karten vorhanden waren, aufgrund mehrfacher Aufrufe der `load`-Methode von AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) von @Cyx649312038

## [v1.3.41-beta](https://www.nocobase.com/en/blog/v1.3.41-beta)

*Veröffentlichungsdatum: 2024-10-27*

### 🚀 Verbesserungen

- **[Zugriffskontrolle]** Leistung für große Tabellen in der ACL optimiert ([#5496](https://github.com/nocobase/nocobase/pull/5496)) von @chareice

## [v1.3.42-beta](https://www.nocobase.com/en/blog/v1.3.42-beta)

*Veröffentlichungsdatum: 2024-10-28*

### 🐛 Fehlerbehebungen

- **[Sammlung: Baum]** Problem behoben, bei dem Knotenpfade nicht aktualisiert wurden, wenn untergeordnete Elemente getrennt wurden ([#5522](https://github.com/nocobase/nocobase/pull/5522)) von @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241024133132](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024133132)

*Veröffentlichungsdatum: 2024-10-24*

### 🎉 Neue Funktionen

- **[Client]** Unterstützung zum Hinzufügen von Gruppen in Formularen und Detailblöcken ([#5498](https://github.com/nocobase/nocobase/pull/5498)) von @katherinehhh
- **[Kalender]** plugin-calendar: Standardansichtseinstellungen und Internationalisierungskonfigurationen hinzugefügt ([#5487](https://github.com/nocobase/nocobase/pull/5487)) von @Cyx649312038
- **[Datenquelle: KingbaseES]** Unterstützung für die Verwendung der Kingbase-Datenbank als Haupt- oder externe Datenquelle (pg-Modus) von @chareice
  Referenz: [Datenquelle - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### 🚀 Verbesserungen

- **[Datenbank]** Unterstützung für die statische Ladelogik von Plugins ([#5466](https://github.com/nocobase/nocobase/pull/5466)) von @chareice
- **[Client]** Verbesserte Rendering-Leistung von Tabellenblöcken (erste Renderzeit um ca. 50% reduziert) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) von @zhangzhonghe
- **[Mobil]** Mobiler Client unterstützt Filterformularblöcke ([#5482](https://github.com/nocobase/nocobase/pull/5482)) von @katherinehhh
- **[Backup-Manager]**

  - Standardeinstellung für `Backup local storage files` auf true geändert von @gchust
  - Datenbankdaten bei fehlgeschlagener Wiederherstellungsaktion zurücksetzen von @gchust

### 🐛 Fehlerbehebungen

- **[Server]** Das afterLoad-Ereignis der App wurde nach der Installation nicht ausgelöst ([#5506](https://github.com/nocobase/nocobase/pull/5506)) von @chenos
- **[Öffentliche Formulare]** Registrierung des ACL-Snippets für öffentliche Formulare ([#5505](https://github.com/nocobase/nocobase/pull/5505)) von @katherinehhh
- **[Backup-Manager]** Behoben: Nach der Wiederherstellung einer Sub-App stürzte die Haupt-App ab, wenn die Sub-App ein anderes Schema verwendete von @gchust

## [v1.4.0-alpha.20241024151311](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024151311)

*Veröffentlichungsdatum: 2024-10-24*

### 🎉 Neue Funktionen

- **[Block: Aktionspanel]** Titel-Einstellung für Aktionspanel-Blöcke hinzugefügt ([#5492](https://github.com/nocobase/nocobase/pull/5492)) von @Cyx649312038

## Über NocoBase

NocoBase ist eine private Open-Source-No-Code-Plattform, die vollständige Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Startseite**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
