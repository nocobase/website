---
title: "NocoBase wöchentliche Updates: Unterstützung für globales oder batchweises Auslösen benutzerdefinierter Aktionsereignisse"
description: "Die Updates dieser Woche umfassen: Unterstützung für das globale oder batchweise Auslösen benutzerdefinierter Aktionen, Erweiterung voreingestellter Felder in Sammlungen und mehr."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.7](https://www.nocobase.com/en/blog/v1.5.7)

*Veröffentlichungsdatum: 2025-02-14*

#### 🚀 Verbesserungen

- **[Benachrichtigung: In-App-Nachricht]** Konsolen-Fehlerprotokollierung für SSE-Verbindungswiederholungen entfernt. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) von @sheldon66

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Fehlende Zieheinstellung im Modal für die Schnellerstellungsaktion von Beziehungsdaten ([#6201](https://github.com/nocobase/nocobase/pull/6201)) von @katherinehhh
  - Problem mit der nicht angewendeten Formatierung von Zahlen mit hoher Genauigkeit ([#6202](https://github.com/nocobase/nocobase/pull/6202)) von @katherinehhh
  - Behebung eines Problems, bei dem das Leeren eines Verknüpfungsfeldes in einem Formular den Feldwert beim Absenden des Formulars nicht tatsächlich löscht ([#5540](https://github.com/nocobase/nocobase/pull/5540)) von @zhangzhonghe
  - Block wird nach dem Absenden des Formulars nicht aktualisiert ([#6206](https://github.com/nocobase/nocobase/pull/6206)) von @zhangzhonghe
  - Verknüpfter Feldwert bleibt nach dem Zurücksetzen des Beziehungsfeldes beim Absenden bestehen ([#6207](https://github.com/nocobase/nocobase/pull/6207)) von @katherinehhh
  - Aktualisierungsaktion wird für Zeilen ohne Aktualisierungsberechtigung in der Tabelle angezeigt ([#6204](https://github.com/nocobase/nocobase/pull/6204)) von @katherinehhh
- **[Sammlungsfeld: Sortierung]** Behebung, dass der Sortierfeldtyp in externen Datenquellen nicht registriert ist ([#6212](https://github.com/nocobase/nocobase/pull/6212)) von @mytharcher
- **[Authentifizierung]** WebSocket-Authentifizierungsproblem ([#6209](https://github.com/nocobase/nocobase/pull/6209)) von @2013xile
- **[Sammlungsfeld: Anhang (URL)]** Behebung der veralteten Request-URL im Hook von @mytharcher

### [v1.5.8](https://www.nocobase.com/en/blog/v1.5.8)

*Veröffentlichungsdatum: 2025-02-17*

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Feld-Link-Popup kann in eingebetteten Seiten nicht geöffnet werden ([#6222](https://github.com/nocobase/nocobase/pull/6222)) von @gchust
  - Im Bearbeitungsformular ändert sich der angezeigte Wert des Verknüpfungsfeldes nicht, wenn das verknüpfte Feld aktualisiert wird ([#6210](https://github.com/nocobase/nocobase/pull/6210)) von @Cyx649312038
- **[Mobil]** Mobile Menüdaten sind in der Berechtigungskonfigurationstabelle unvollständig ([#6219](https://github.com/nocobase/nocobase/pull/6219)) von @zhangzhonghe

### [v1.5.9](https://www.nocobase.com/en/blog/v1.5.9)

*Veröffentlichungsdatum: 2025-02-17*

#### 🐛 Fehlerbehebungen

- **[Client]**

  - Problem mit der horizontalen Bildlaufleiste auf der Seite ([#6232](https://github.com/nocobase/nocobase/pull/6232)) von @katherinehhh
  - Beim Schließen der Unterseite werden mehrere Blockdatenanfragen ausgelöst ([#6233](https://github.com/nocobase/nocobase/pull/6233)) von @zhangzhonghe
  - Fehlender eindeutiger Schlüssel für das Untermenü der Verknüpfungsfelder in der Benutzeroberfläche ([#6230](https://github.com/nocobase/nocobase/pull/6230)) von @gchust
- **[Datenvisualisierung]** Filterfehler tritt auf, wenn der Datenquellenname einen Bindestrich `-` enthält ([#6231](https://github.com/nocobase/nocobase/pull/6231)) von @2013xile

### [v1.5.10](https://www.nocobase.com/en/blog/v1.5.10)

*Veröffentlichungsdatum: 2025-02-18*

#### 🚀 Verbesserungen

- **[Sammlungsfeld: Markdown (Vditor)]** Vditor CDN verwendet lokale Ressourcen ([#6229](https://github.com/nocobase/nocobase/pull/6229)) von @chenos

#### 🐛 Fehlerbehebungen

- **[Workflow: Schleifenknoten]** Behebung, dass die Schleife vorzeitig beendet wird, wenn ein Knoten innerhalb ausstehend ist ([#6236](https://github.com/nocobase/nocobase/pull/6236)) von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.7](https://www.nocobase.com/en/blog/v1.6.0-beta.7)

*Veröffentlichungsdatum: 2025-02-14*

#### 🐛 Fehlerbehebungen

- **[Authentifizierung]** Verbesserte Logik für gleichzeitige Token-Aktualisierung und Auth-Fehlerbehandlung. ([#6208](https://github.com/nocobase/nocobase/pull/6208)) von @sheldon66

### [v1.6.0-beta.8](https://www.nocobase.com/en/blog/v1.6.0-beta.8)

*Veröffentlichungsdatum: 2025-02-15*

#### 🐛 Fehlerbehebungen

- **[WeCom]** Problem mit der automatischen Anmeldung im WeCom-Client von @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.26](https://www.nocobase.com/en/blog/v1.6.0-alpha.26)

*Veröffentlichungsdatum: 2025-02-16*

#### 🎉 Neue Funktionen

- **[Client]** Unterstützung für die Erweiterung von Frontend-Filteroperatoren ([#6085](https://github.com/nocobase/nocobase/pull/6085)) von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Unterstützung für globale oder Batch-Datensätze, die ein benutzerdefiniertes Aktionsereignis auslösen von @mytharcher

#### 🚀 Verbesserungen

- **[Workflow]** Workflow-Bindungseinstellungen in das Plugin verschoben ([#6143](https://github.com/nocobase/nocobase/pull/6143)) von @mytharcher

### [v1.6.0-alpha.27](https://www.nocobase.com/en/blog/v1.6.0-alpha.27)

*Veröffentlichungsdatum: 2025-02-16*

#### 🎉 Neue Funktionen

- **[Client]** Unterstützung für die Erweiterung von vordefinierten Feldern in Sammlungen ([#6183](https://github.com/nocobase/nocobase/pull/6183)) von @katherinehhh
- **[Kalender]** Unterstützung für die Erweiterung optionaler Felder für die Plugins Kanban, Kalender und Formelfeld ([#6076](https://github.com/nocobase/nocobase/pull/6076)) von @katherinehhh

## Über NocoBase

NocoBase ist eine private Open-Source-No-Code-Plattform, die volle Kontrolle und unendliche Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
