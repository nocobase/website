---
title: "NocoBase wöchentliche Updates: REST-API-Plugin optimiert"
description: "Die Updates dieser Woche umfassen: Optimierung des REST-API-Plugins, Unterstützung für die Massenaktivierung von Plugins in der Oberfläche und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie ist hauptsächlich für Testnutzer gedacht, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.52](https://www.nocobase.com/en/blog/v1.3.52)

*Veröffentlichungsdatum: 2024-11-21*

### 🚀 Verbesserungen

- **[Workflow]**

  - Seitenlimit im Abfrageknoten entfernt ([#5694](https://github.com/nocobase/nocobase/pull/5694)) von @mytharcher
  - Ausführungen werden nicht mehr gelöscht, wenn der Workflow gelöscht wird ([#5666](https://github.com/nocobase/nocobase/pull/5666)) von @mytharcher
- **[Datenquelle: REST-API]** Textbeschreibungen des REST-API-Plugins optimiert von @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.2](https://www.nocobase.com/en/blog/v1.4.0-beta.2)

*Veröffentlichungsdatum: 2024-11-21*

### 🐛 Fehlerbehebungen

- **[build]** Client-Build-Tool von `rspack` zurück zu `vite` geändert, um das Problem zu beheben, dass der Befehl `yarn dev` nach dem Ausführen des create-nocobase-app-Befehls einen Fehler meldet ([#5697](https://github.com/nocobase/nocobase/pull/5697)) von @gchust
- **[client]** Problem behoben, bei dem eine rechts fixierte Spalte nicht rechtsbündig ausgerichtet war, wenn es weniger Spalten gab ([#5690](https://github.com/nocobase/nocobase/pull/5690)) von @katherinehhh
- **[Mobil]** Problem behoben, bei dem das Modal 'Feldwerte zuweisen' auf der mobilen Konfigurationsseite verdeckt wurde ([#5701](https://github.com/nocobase/nocobase/pull/5701)) von @zhangzhonghe

## [v1.4.0-beta.3](https://www.nocobase.com/en/blog/v1.4.0-beta.3)

*Veröffentlichungsdatum: 2024-11-21*

### 🐛 Fehlerbehebungen

- **[client]**

  - Schaltfläche "Aus Datenbank synchronisieren" in der Ansichtssammlung externer Datenquellen entfernt ([#5696](https://github.com/nocobase/nocobase/pull/5696)) von @katherinehhh
  - Fallback für nicht-String-Werte in `Variable.TextArea` hinzugefügt ([#5704](https://github.com/nocobase/nocobase/pull/5704)) von @mytharcher
- **[Kalender]** Problem behoben, dass Ereignisse im Kalenderblock nicht angezeigt wurden, wenn Start- und Enddatum über Monate hinweg reichten ([#5699](https://github.com/nocobase/nocobase/pull/5699)) von @katherinehhh

## [v1.4.0-beta.5](https://www.nocobase.com/en/blog/v1.4.0-beta.5)

*Veröffentlichungsdatum: 2024-11-24*

### 🐛 Fehlerbehebungen

- **[client]**
  - Problem mit der Labelbreite für Assoziationsfelder in horizontalen Layouts behoben ([#5709](https://github.com/nocobase/nocobase/pull/5709)) von @katherinehhh
  - Verknüpfung von Assoziationsdaten in verschachtelten Untertabellen innerhalb mehrschichtiger Unterformulare behoben ([#5710](https://github.com/nocobase/nocobase/pull/5710)) von @katherinehhh
  - Problem mit der Labelbreite für Assoziationsfelder in horizontalen Layouts behoben ([#5709](https://github.com/nocobase/nocobase/pull/5709)) von @katherinehhh

## [v1.4.0-beta.6](https://www.nocobase.com/en/blog/v1.4.0-beta.6)

*Veröffentlichungsdatum: 2024-11-26*

### 🚀 Verbesserungen

- **[client]** Unterstützung für die Massenaktivierung von Plugins in der Oberfläche hinzugefügt ([#5730](https://github.com/nocobase/nocobase/pull/5730)) von @chenos

### 🐛 Fehlerbehebungen

- **[client]** Problem mit der Mindestbreite von Untertabellen-Labels im horizontalen Modus behoben ([#5719](https://github.com/nocobase/nocobase/pull/5719)) von @katherinehhh

## [v1.4.0-beta.7](https://www.nocobase.com/en/blog/v1.4.0-beta.7)

*Veröffentlichungsdatum: 2024-11-27*

### 🎉 Neue Funktionen

- **[Authentifizierung]** Ermöglicht das Hinzufügen weiterer Felder der Benutzersammlung im Registrierungsformular ([#5741](https://github.com/nocobase/nocobase/pull/5741)) von @2013xile

### 🐛 Fehlerbehebungen

- **[client]** Problem behoben, dass das Label der ausgewählten Option beim ersten Rendern nicht geladen wurde ([#5736](https://github.com/nocobase/nocobase/pull/5736)) von @sheldon66

## [v1.4.0-beta.8](https://www.nocobase.com/en/blog/v1.4.0-beta.8)

*Veröffentlichungsdatum: 2024-11-27*

### 🐛 Fehlerbehebungen

- **[Benachrichtigung: In-App-Nachricht]** Logik zum Abschneiden von In-App-Nachrichtentiteln entfernt ([#5728](https://github.com/nocobase/nocobase/pull/5728)) von @sheldon66

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.5](https://www.nocobase.com/en/blog/v1.5.0-alpha.5)

*Veröffentlichungsdatum: 2024-11-23*

### 🐛 Fehlerbehebungen

- **[build]** Problem behoben, dass die Ausführung von `yarn dev` nach create-nocobase-app zu einem Fehler führt ([#5708](https://github.com/nocobase/nocobase/pull/5708)) von @gchust

## Über NocoBase

NocoBase ist eine private Open-Source-No-Code-Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
