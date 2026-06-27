---
title: "NocoBase wöchentliche Updates: Verbesserung der Erweiterbarkeit der Dateispeicherung"
description: "Die Updates dieser Woche umfassen: Verbesserung der Erweiterbarkeit der Dateispeicherung, Fehlerbehebungen und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.25](https://www.nocobase.com/en/blog/v1.4.25)

*Veröffentlichungsdatum: 2025-01-16*

#### 🚀 Verbesserungen

- **[client]** Verbesserung der Erweiterbarkeit der Dateispeicherung ([#6071](https://github.com/nocobase/nocobase/pull/6071)) von @chenos
- **[Workflow]** Fehlerbehebung bei der Wiederholungsfeldkomponente in der Zeitplan-Konfiguration ([#6067](https://github.com/nocobase/nocobase/pull/6067)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Mobile]** Behebung des Problems, dass untere Schaltflächen auf mobilen Geräten verdeckt werden ([#6068](https://github.com/nocobase/nocobase/pull/6068)) von @zhangzhonghe
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Kontext für HTTP-Sammlung korrigiert von @mytharcher
- **[Backup-Manager]** Behob einen möglichen Backup-Fehler, wenn das collection-fdw-Plugin nicht aktiviert ist von @gchust
- **[Abteilungen]** Behebung, dass das benutzerdefinierte Aktionsereignis in der Abteilungssammlung nicht ausgelöst werden kann von @mytharcher

### [v1.4.26](https://www.nocobase.com/en/blog/v1.4.26)

*Veröffentlichungsdatum: 2025-01-16*

#### 🚀 Verbesserungen

- **[client]** Ermöglicht das Hinzufügen von Beschreibungen für SQL-Sammlungen ([#6081](https://github.com/nocobase/nocobase/pull/6081)) von @2013xile
- **[resourcer]** Leeres Objekt als Werte in Aktionen erlauben ([#6070](https://github.com/nocobase/nocobase/pull/6070)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Lokalisierung]** API-Anfrage vermeiden, wenn versucht wird, eine leere Übersetzung zu löschen ([#6078](https://github.com/nocobase/nocobase/pull/6078)) von @2013xile

### [v1.4.27](https://www.nocobase.com/en/blog/v1.4.27)

*Veröffentlichungsdatum: 2025-01-18*

#### 🐛 Fehlerbehebungen

- **[client]** Behebung des Problems, dass Blockdaten im Popup-Fenster auf der eingebetteten Seite leer sind ([#6086](https://github.com/nocobase/nocobase/pull/6086)) von @zhangzhonghe
- **[Workflow]** Behebung, dass der Dispatch in der Vorbereitungsphase nicht verarbeitet wird ([#6087](https://github.com/nocobase/nocobase/pull/6087)) von @mytharcher

### [v1.4.28](https://www.nocobase.com/en/blog/v1.4.28)

*Veröffentlichungsdatum: 2025-01-21*

#### 🐛 Fehlerbehebungen

- **[client]** Der Standardwert des Assoziationsfeldes wurde nicht aktualisiert ([#6103](https://github.com/nocobase/nocobase/pull/6103)) von @chenos
- **[Aktion: Stapelbearbeitung]** Entfernen der Formular-Datenvorlage aus den Einstellungen des Stapelbearbeitungs-Aktionsformulars ([#6098](https://github.com/nocobase/nocobase/pull/6098)) von @katherinehhh
- **[Verifizierung]** Behebung, dass die Anbieter-ID bearbeitet werden konnte ([#6097](https://github.com/nocobase/nocobase/pull/6097)) von @mytharcher

### [v1.4.29](https://www.nocobase.com/en/blog/v1.4.29)

*Veröffentlichungsdatum: 2025-01-21*

#### 🎉 Neue Funktionen

- **[Block: Aktionspanel]** Unterstützung der Konfiguration der Anzahl der Symbole pro Zeile im mobilen Aktionspanel ([#6106](https://github.com/nocobase/nocobase/pull/6106)) von @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.29](https://www.nocobase.com/en/blog/v1.5.0-beta.29)

*Veröffentlichungsdatum: 2025-01-16*

#### 🚀 Verbesserungen

- **[Backup-Manager]** Verbesserte Fehlermeldungen bei fehlgeschlagenen Wiederherstellungen von @gchust

### [v1.5.0-beta.30](https://www.nocobase.com/en/blog/v1.5.0-beta.30)

*Veröffentlichungsdatum: 2025-01-16*

#### 🐛 Fehlerbehebungen

- **[client]** Behebung des Problems, dass Standardwerte für Assoziationsfelder im Lesemodus nicht wirksam werden ([#6066](https://github.com/nocobase/nocobase/pull/6066)) von @zhangzhonghe

### [v1.5.0-beta.31](https://www.nocobase.com/en/blog/v1.5.0-beta.31)

*Veröffentlichungsdatum: 2025-01-17*

#### 🐛 Fehlerbehebungen

- **[Benutzerdatensynchronisation]** Behebung des Problems, dass die Schaltfläche "Wiederholen" in der Aufgabenliste nicht angezeigt wird ([#6079](https://github.com/nocobase/nocobase/pull/6079)) von @2013xile

### [v1.5.0-beta.32](https://www.nocobase.com/en/blog/v1.5.0-beta.32)

*Veröffentlichungsdatum: 2025-01-17*

#### 🚀 Verbesserungen

- **[Workflow]** API-Namen in sinnvollere geändert ([#6082](https://github.com/nocobase/nocobase/pull/6082)) von @mytharcher

### [v1.5.0-beta.33](https://www.nocobase.com/en/blog/v1.5.0-beta.33)

*Veröffentlichungsdatum: 2025-01-21*

#### 🎉 Neue Funktionen

- **[Workflow]** Stapellimit-Konfiguration für Workflows hinzugefügt ([#6077](https://github.com/nocobase/nocobase/pull/6077)) von @citlalinda

#### 🚀 Verbesserungen

- **[Workflow: Schleifenknoten]** Stile korrigiert ([#6095](https://github.com/nocobase/nocobase/pull/6095)) von @mytharcher
- **[Dateimanager]** Unterstützung für andere Speicher-Plugins ([#6096](https://github.com/nocobase/nocobase/pull/6096)) von @jiannx
  Referenz: [Dateispeicher: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Workflow: Testkit]** Stil der Workflow-Leinwand angepasst, um den Inhalt kompakter zu machen ([#6088](https://github.com/nocobase/nocobase/pull/6088)) von @mytharcher
- **[Workflow: JSON-Abfrageknoten]** Symbol zu Knoten hinzugefügt von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.15](https://www.nocobase.com/en/blog/v1.6.0-alpha.15)

*Veröffentlichungsdatum: 2025-01-19*

#### 🎉 Neue Funktionen

- **[client]** Unterstützung zum Setzen der Beschreibungseigenschaft in Blöcken ([#6015](https://github.com/nocobase/nocobase/pull/6015)) von @katherinehhh
- **[Authentifizierung]** Unterstützung der Token-Sicherheitskonfiguration. ([#5948](https://github.com/nocobase/nocobase/pull/5948)) von @sheldon66
  Referenz: [Token-Sicherheitsrichtlinie](https://docs.nocobase.com/handbook/token-policy)
- **[Workflow: Manueller Knoten]** Aufgaben-Titelspalte im Todo-Block hinzugefügt ([#6051](https://github.com/nocobase/nocobase/pull/6051)) von @mytharcher

#### 🚀 Verbesserungen

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** API für manuelle Ausführung geändert von @mytharcher

### [v1.6.0-alpha.16](https://www.nocobase.com/en/blog/v1.6.0-alpha.16)

*Veröffentlichungsdatum: 2025-01-19*

#### 🎉 Neue Funktionen

- **[Block: Aktionspanel]** Unterstützung der Konfiguration der Anzahl der Symbole pro Zeile im mobilen Aktionspanel ([#6046](https://github.com/nocobase/nocobase/pull/6046)) von @katherinehhh

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 Holen Sie sich NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
