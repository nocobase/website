---
title: "NocoBase wöchentliche Updates: Leistungsverbesserungen"
description: "Die Updates dieser Woche umfassen: Optimierung des Aktionspanels und öffentlicher Formularkomponenten für die mobile Anpassung und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie ist hauptsächlich für Testnutzer gedacht, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iteration. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.3](https://www.nocobase.com/en/blog/v1.4.3)

*Veröffentlichungsdatum: 2024-12-05*

#### 🚀 Verbesserungen

- **[test]** Anmeldung mit Rollennamen in Testfällen ermöglichen ([#5794](https://github.com/nocobase/nocobase/pull/5794)) von @mytharcher
- **[Benachrichtigung: In-App-Nachricht]** Titel für Detail-URLs in In-App-Nachrichtenformularen und Lokalisierungsdateien aktualisiert ([#5742](https://github.com/nocobase/nocobase/pull/5742)) von @sheldon66

#### 🐛 Fehlerbehebungen

- **[client]**
  - Problem behoben, bei dem der Token nicht gelöscht wird, nachdem ein Benutzer ohne Rolle auf einen Anmeldefehler stößt und auf die Schaltfläche „Mit einem anderen Konto anmelden“ klickt ([#5790](https://github.com/nocobase/nocobase/pull/5790)) von @2013xile
  - Verlust von Request-Headern bei stillen Anfragen ([#5795](https://github.com/nocobase/nocobase/pull/5795)) von @chenos
  - Leere Seite, wenn der Benutzer keine Rolle hat ([#5797](https://github.com/nocobase/nocobase/pull/5797)) von @chenos
  - Problem mit der Bildlaufleiste in einer Untertabelle mit der Größe „small“ unter dem kompakten Theme behoben ([#5796](https://github.com/nocobase/nocobase/pull/5796)) von @katherinehhh

### [v1.4.4](https://www.nocobase.com/en/blog/v1.4.4)

*Veröffentlichungsdatum: 2024-12-08*

#### 🐛 Fehlerbehebungen

- **[client]**
  - Problem behoben, bei dem Felder externer Datenquellen im Tabellenblock nicht angezeigt wurden ([#5825](https://github.com/nocobase/nocobase/pull/5825)) von @katherinehhh
  - Anzeigeproblem für geerbte Felder in der Formularkonfiguration behoben ([#5822](https://github.com/nocobase/nocobase/pull/5822)) von @katherinehhh
  - Problem behoben, dass geerbte Felder nicht in der Feldliste erscheinen und nicht überschrieben werden können ([#5800](https://github.com/nocobase/nocobase/pull/5800)) von @katherinehhh
- **[Datenvisualisierung]** Problem beim Formatieren zeitzonenbewusster Datumsfelder in MySQL behoben ([#5829](https://github.com/nocobase/nocobase/pull/5829)) von @2013xile
- **[Workflow]**
  - Transaktion über Datenquellen hinweg behoben, die einen Sammlungsereignisfehler verursachte ([#5818](https://github.com/nocobase/nocobase/pull/5818)) von @mytharcher
  - Fehlender Datumstyp in der datumsfeldbasierten Zeitplanungskonfiguration behoben ([#5816](https://github.com/nocobase/nocobase/pull/5816)) von @mytharcher
- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem behoben, bei dem das Aktualisieren von m2m-Array-Feldern in einer einzelnen Beziehungssammlung nicht wirksam wurde ([#5820](https://github.com/nocobase/nocobase/pull/5820)) von @2013xile
- **[Kalender]**
  - Fehler beim Klicken auf ein leeres Datum im Kalender behoben ([#5803](https://github.com/nocobase/nocobase/pull/5803)) von @katherinehhh
  - Problem behoben, bei dem das Schließen eines über den 'Kalenderblock' geöffneten Popups dazu führte, dass alle Popups geschlossen wurden ([#5793](https://github.com/nocobase/nocobase/pull/5793)) von @zhangzhonghe
- **[Öffentliche Formulare]** Falscher QR-Code-Scanpfad im öffentlichen Formular einer Unteranwendung behoben ([#5799](https://github.com/nocobase/nocobase/pull/5799)) von @katherinehhh

### [v1.4.5](https://www.nocobase.com/en/blog/v1.4.5)

*Veröffentlichungsdatum: 2024-12-08*

#### 🐛 Fehlerbehebungen

- **[Zugriffskontrolle]** Seite aktualisieren, wenn die Rolle des Benutzers falsch ist ([#5821](https://github.com/nocobase/nocobase/pull/5821)) von @chenos

### [v1.4.6](https://www.nocobase.com/en/blog/v1.4.6)

*Veröffentlichungsdatum: 2024-12-08*

#### 🐛 Fehlerbehebungen

- **[Aktion: Datensätze importieren]** Import von Daten mit Tabelle in Assoziationen behoben ([#5833](https://github.com/nocobase/nocobase/pull/5833)) von @chareice
- **[Zugriffskontrolle]** Problem bei der Verwendung von Feldern zur Abfrage der Beziehung in der ACL behoben ([#5832](https://github.com/nocobase/nocobase/pull/5832)) von @chareice

### [v1.4.7](https://www.nocobase.com/en/blog/v1.4.7)

*Veröffentlichungsdatum: 2024-12-09*

#### 🐛 Fehlerbehebungen

- **[Mobil]** Anzeigeproblem der Hintergrundfarbe auf Mobilgeräten behoben ([#5809](https://github.com/nocobase/nocobase/pull/5809)) von @katherinehhh

### [v1.4.8](https://www.nocobase.com/en/blog/v1.4.8)

*Veröffentlichungsdatum: 2024-12-10*

#### 🐛 Fehlerbehebungen

- **[client]**
  - Problem mit der Datenvorlage im Filterformular, das im Auswahlfeld für Assoziationsdatensätze konfiguriert ist, behoben ([#5837](https://github.com/nocobase/nocobase/pull/5837)) von @katherinehhh
  - Problem behoben, bei dem Markdown-String-Vorlagen keine Daten von Assoziationsdaten (externe Datenquelle) luden ([#5791](https://github.com/nocobase/nocobase/pull/5791)) von @katherinehhh
- **[Benutzerdatensynchronisation]** Nicht unterstützte Datentypen während der Synchronisation überspringen, anstatt einen Fehler auszulösen. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) von @chenzhizdt
- **[Backup-Manager]**
  - Langsames Öffnen des Download-Fensters für große Backup-Dateien behoben von @gchust
  - Problem behoben, bei dem das Wiederherstellen einer Backup-Unteranwendung dazu führte, dass alle Anwendungen neu gestartet wurden von @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.2](https://www.nocobase.com/en/blog/v1.5.0-beta.2)

*Veröffentlichungsdatum: 2024-12-06*

#### 🚀 Verbesserungen

- **[client]** Rekursive Logik in useMenuSearch für bessere Leistung optimiert ([#5784](https://github.com/nocobase/nocobase/pull/5784)) von @katherinehhh
- **[Öffentliche Formulare]** Aktionsbereich und öffentliche Formularkomponenten für die mobile Anpassung optimiert ([#5788](https://github.com/nocobase/nocobase/pull/5788)) von @katherinehhh

### [v1.5.0-beta.3](https://www.nocobase.com/en/blog/v1.5.0-beta.3)

*Veröffentlichungsdatum: 2024-12-10*

#### 🎉 Neue Funktionen

- **[client]** Unterstützung für die Konfiguration von Text, Symbol und Typ für Hinzufügen- und Auswählen-Schaltflächen in Untertabellen ([#5778](https://github.com/nocobase/nocobase/pull/5778)) von @katherinehhh
- **[Kalender]** Kalender-Plugin um Ereignis-Öffnungsmodus erweitert ([#5808](https://github.com/nocobase/nocobase/pull/5808)) von @Cyx649312038

### [v1.5.0-beta.4](https://www.nocobase.com/en/blog/v1.5.0-beta.4)

*Veröffentlichungsdatum: 2024-12-11*

#### 🐛 Fehlerbehebungen

- **[Mobil]** Mobile Anpassung der Datumskomponente auf Unterseiten behoben ([#5859](https://github.com/nocobase/nocobase/pull/5859)) von @katherinehhh

### [v1.5.0-beta.6](https://www.nocobase.com/en/blog/v1.5.0-beta.6)

*Veröffentlichungsdatum: 2024-12-11*

#### 🚀 Verbesserungen

- **[client]** Tabellenzeilen-Skelettkomponente entfernt ([#5751](https://github.com/nocobase/nocobase/pull/5751)) von @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.3](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Veröffentlichungsdatum: 2024-12-09*

#### 🚀 Verbesserungen

- **[client]** Formily-Komponenten aus der Tabelle entfernt, um die Leistung beim Wechseln der Tabellenseitenzahlen zu verbessern ([#5738](https://github.com/nocobase/nocobase/pull/5738)) von @zhangzhonghe

#### 🐛 Fehlerbehebungen

- **[client]**
  - Problem behoben, bei dem Felder nach dem Hinzufügen in einem Unterformular nicht angezeigt wurden ([#5827](https://github.com/nocobase/nocobase/pull/5827)) von @zhangzhonghe
  - Problem behoben, bei dem sich der Wert eines Assoziationsfeldes im Detailblock nicht sofort aktualisierte, wenn er geändert wurde ([#5826](https://github.com/nocobase/nocobase/pull/5826)) von @zhangzhonghe
  - Problem behoben, bei dem das Klicken auf Links kein Popup öffnete, wenn 'Link aktivieren' zum ersten Mal eingeschaltet wurde ([#5812](https://github.com/nocobase/nocobase/pull/5812)) von @zhangzhonghe
  - Mehrfache API-Aufrufe beim Schließen des Popups verhindert ([#5804](https://github.com/nocobase/nocobase/pull/5804)) von @zhangzhonghe
  - Problem behoben, bei dem die mobile Anmeldung zur Desktop-Seite weiterleitete ([#5805](https://github.com/nocobase/nocobase/pull/5805)) von @zhangzhonghe
  - Problem behoben, dass die Schaltfläche „Aktion konfigurieren“ linksbündig sein sollte ([#5798](https://github.com/nocobase/nocobase/pull/5798)) von @katherinehhh
- **[build]** Falsches Caching von Frontend-JS-Dateien nach dem Plugin-Build behoben ([#5801](https://github.com/nocobase/nocobase/pull/5801)) von @gchust

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in wenigen Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
