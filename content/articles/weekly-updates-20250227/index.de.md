---
title: "NocoBase wöchentliche Updates: Routenverwaltung hinzugefügt"
description: "Die Updates dieser Woche umfassen: Unterstützung der Berechtigungskonfiguration für Seitenregisterkarten, Hinzufügen einer Routenverwaltungsseite und mehr."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technische Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.11](https://www.nocobase.com/en/blog/v1.5.11)

*Veröffentlichungsdatum: 20.02.2025*

#### 🎉 Neue Funktionen

- **[Workflow]** Unterstützung zur Erweiterung der Anweisungsgruppe im Workflow ([#6237](https://github.com/nocobase/nocobase/pull/6237)) von @mytharcher
  Referenz: [Erweitert Knotengruppe](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)

#### 🐛 Fehlerbehebungen

- **[client]**

  - Problem mit dem Assoziations-Popup auf mobilen Geräten ([#6235](https://github.com/nocobase/nocobase/pull/6235)) von @katherinehhh
  - Formatkonflikt des Pickers im Filterformularfeld ([#6234](https://github.com/nocobase/nocobase/pull/6234)) von @katherinehhh
  - `<Variable.TextArea />`-Komponente im deaktivierten Modus korrekt anzeigen ([#6197](https://github.com/nocobase/nocobase/pull/6197)) von @mytharcher
  - Fehlende Dateien nach dem Hochladen behoben ([#6247](https://github.com/nocobase/nocobase/pull/6247)) von @mytharcher
- **[Workflow]**

  - Stildetails in der Workflow-Leinwand behoben ([#6240](https://github.com/nocobase/nocobase/pull/6240)) von @mytharcher
  - Unterstützung zum Auslösen des Workflows bei Passwortänderung ([#6248](https://github.com/nocobase/nocobase/pull/6248)) von @mytharcher

### [v1.5.12](https://www.nocobase.com/en/blog/v1.5.12)

*Veröffentlichungsdatum: 21.02.2025*

#### 🚀 Verbesserungen

- **[Workflow]** Knoten-ID in der Knotenkarte der Workflow-Leinwand ausblenden ([#6251](https://github.com/nocobase/nocobase/pull/6251)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[Dateimanager]** AWS SDK-Version aktualisiert, um MinIO-Upload-Fehler zu beheben ([#6253](https://github.com/nocobase/nocobase/pull/6253)) von @mytharcher

### [v1.5.13](https://www.nocobase.com/en/blog/v1.5.13)

*Veröffentlichungsdatum: 22.02.2025*

#### 🐛 Fehlerbehebungen

- **[client]** Fehlende hochgeladene Datei bei Einzel-Upload behoben ([#6260](https://github.com/nocobase/nocobase/pull/6260)) von @mytharcher
- **[Workflow: Pre-Action-Event]** Fehlermeldung vom Antwortnachrichtenknoten wird nicht angezeigt, behoben von @mytharcher

### [v1.5.14](https://www.nocobase.com/en/blog/v1.5.14)

*Veröffentlichungsdatum: 24.02.2025*

#### 🐛 Fehlerbehebungen

- **[Backup-Manager]** Das Löschsymbol des Dialogs zum Wiederherstellen aus lokalem Betrieb funktioniert nicht von @gchust

### [v1.5.15](https://www.nocobase.com/en/blog/v1.5.15)

*Veröffentlichungsdatum: 24.02.2025*

#### 🚀 Verbesserungen

- **[Dateimanager]**

  - URL-Länge auf 1024 erhöht ([#6275](https://github.com/nocobase/nocobase/pull/6275)) von @mytharcher
  - Dateinamen während des Uploads ändern sich von zufällig zum ursprünglichen Namen mit einem zufälligen Suffix. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) von @chenos
- **[Block: Aktionspanel]** Mobile Stile optimiert ([#6270](https://github.com/nocobase/nocobase/pull/6270)) von @zhangzhonghe

#### 🐛 Fehlerbehebungen

- **[cli]** Interne Logik des nocobase upgrade-Befehls verbessert ([#6280](https://github.com/nocobase/nocobase/pull/6280)) von @chenos

### [v1.5.16](https://www.nocobase.com/en/blog/v1.5.16)

*Veröffentlichungsdatum: 26.02.2025*

#### 🚀 Verbesserungen

- **[Backup-Manager]** Erlaubt das Wiederherstellen eines Backups in einer Anwendung, auch wenn einige Plugins fehlen von @gchust

#### 🐛 Fehlerbehebungen

- **[client]** Rich-Text-Feldkomponente kann nicht vollständig geleert werden ([#6287](https://github.com/nocobase/nocobase/pull/6287)) von @katherinehhh
- **[Dateimanager]**

  - Migration behoben und Testfälle hinzugefügt ([#6288](https://github.com/nocobase/nocobase/pull/6288)) von @mytharcher
  - `path`-Spaltentyp der Dateisammlung behoben ([#6294](https://github.com/nocobase/nocobase/pull/6294)) von @mytharcher
  - Migration behoben und Testfälle hinzugefügt ([#6288](https://github.com/nocobase/nocobase/pull/6288)) von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.6.0-beta.11

*Veröffentlichungsdatum: 27.02.2025*

#### 🎉 Neue Funktionen

* [Workflow] Unterstützung zur Erweiterung der Anweisungsgruppe im Workflow ([#6237](https://github.com/nocobase/nocobase/pull/6237)) von @mytharcher
  Referenz: [Erweitert Knotengruppe](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)
* [Workflow: Benutzerdefiniertes Aktionsereignis] Unterstützung für globale oder Batch-Datensatzauslösung von benutzerdefinierten Aktionsereignissen ([#272](https://github.com/nocobase/pro-plugins/pull/272)) von @mytharcher
* **[client]**

  * Unterstützung für die Erweiterung von vordefinierten Feldern in Sammlungen ([#6183](https://github.com/nocobase/nocobase/pull/6183)) von @katherinehhh
  * Unterstützung für die Erweiterung von Frontend-Filteroperatoren ([#6085](https://github.com/nocobase/nocobase/pull/6085)) von @katherinehhh
  * Unterstützung für die Einstellung der Beschreibungseigenschaft in Blöcken ([#6015](https://github.com/nocobase/nocobase/pull/6015)) von @katherinehhh
  * schemaSetting hinzugefügt, um Dateinamen für Anhänge anzuzeigen ([#5995](https://github.com/nocobase/nocobase/pull/5995)) von @katherinehhh
* **[Kalender]** Unterstützung für die Erweiterung optionaler Felder für Kanban-, Kalender- und Formelfeld-Plugins ([#6076](https://github.com/nocobase/nocobase/pull/6076)) von @katherinehhh
* **[Lokalisierung]** Lokalisierung für Desktop- und Mobile-Routen ([#6180](https://github.com/nocobase/nocobase/pull/6180)) von @2013xile
* **[Block: Aktionspanel]** Unterstützung zur Konfiguration der Anzahl der Symbole pro Zeile im mobilen Aktionspanel ([#6046](https://github.com/nocobase/nocobase/pull/6046)) von @katherinehhh
* **[WEB-Client]** Unterstützung für Berechtigungskonfiguration von Seiten-Tabs und Hinzufügen einer Routenverwaltungsseite ([#5955](https://github.com/nocobase/nocobase/pull/5955)) von @zhangzhonghe
  Referenz: [Routen](https://docs.nocobase.com/handbook/routes)
* **[Authentifizierung]** Unterstützung für Token-Sicherheitskonfiguration ([#5948](https://github.com/nocobase/nocobase/pull/5948)) von @sheldon66
  Referenz: [Token-Sicherheitsrichtlinie](https://docs.nocobase.com/handbook/token-policy)
* **[Workflow: Manueller Knoten]** Aufgabentitelspalte im Todo-Block hinzugefügt ([#6051](https://github.com/nocobase/nocobase/pull/6051)) von @mytharcher
* **[Variablen und Geheimnisse]** Unterstützt die Konfiguration dynamischer Umgebungsvariablen und Geheimnisse ([#5966](https://github.com/nocobase/nocobase/pull/5966)) von @katherinehhh

#### 🚀 Verbesserungen

* [Sammlungsfeld: Markdown(Vditor)] Vditor-CDN verwendet lokale Ressourcen ([#6229](https://github.com/nocobase/nocobase/pull/6229)) von @chenos
* [Workflow] Knoten-ID in der Knotenkarte der Workflow-Leinwand ausblenden ([#6251](https://github.com/nocobase/nocobase/pull/6251)) von @mytharcher
* **[client]** Erweiterung und Verbesserung des persönlichen Benutzerzentrums ([#6213](https://github.com/nocobase/nocobase/pull/6213)) von @katherinehhh
* **[client]**

  * Seitentitel verwendet standardmäßig den Titel der Route ([#6188](https://github.com/nocobase/nocobase/pull/6188)) von @zhangzhonghe
  * Weitere Symbole zum IconPicker hinzugefügt ([#5996](https://github.com/nocobase/nocobase/pull/5996)) von @katherinehhh
* **[server]**

  * AesEncryptor in den Kern verschoben ([#6132](https://github.com/nocobase/nocobase/pull/6132)) von @chenos
  * 1. Server-Middleware hinzugefügt, um die IP-Adresse des Clients zu extrahieren.
    2. Problem mit endlosem Neuladen behoben, wenn eine IP blockiert ist.
    3. `X-Forwarded-For`-HTTP-Header im Proxy hinzugefügt, um die Weiterleitung für lokales Debugging zu ermöglichen ([#6069](https://github.com/nocobase/nocobase/pull/6069)) von @sheldon66
* **[Workflow]** Workflow-Bindungseinstellungen in Plugin verschoben ([#6143](https://github.com/nocobase/nocobase/pull/6143)) von @mytharcher
* **[Datenquellen-Manager]** Die Testfunktion login in asynchron geändert und die entsprechenden Testfälle aktualisiert ([#6181](https://github.com/nocobase/nocobase/pull/6181)) von @sheldon66

#### 🐛 Fehlerbehebungen

* [client]

  * Feld-Link-Popup in eingebetteter Seite kann nicht geöffnet werden ([#6222](https://github.com/nocobase/nocobase/pull/6222)) von @gchust
  * Beim Schließen der Unterseite werden mehrere Blockdatenanfragen ausgelöst ([#6233](https://github.com/nocobase/nocobase/pull/6233)) von @zhangzhonghe
  * Formatkonflikt des Pickers im Filterformularfeld ([#6234](https://github.com/nocobase/nocobase/pull/6234)) von @katherinehhh
  * Fehlender eindeutiger Schlüssel für das Untermenü von Assoziationsfeldern in der Benutzeroberfläche ([#6230](https://github.com/nocobase/nocobase/pull/6230)) von @gchust
  * `<Variable.TextArea />`-Komponente im deaktivierten Modus korrekt anzeigen ([#6197](https://github.com/nocobase/nocobase/pull/6197)) von @mytharcher
  * Problem mit horizontaler Bildlaufleiste auf der Seite ([#6232](https://github.com/nocobase/nocobase/pull/6232)) von @katherinehhh
  * HTML-Tag-Zeichen im Eingabefeld der Mail-Kanal-Konfiguration behoben. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) von @sheldon66
  * Problem mit dem Assoziations-Popup auf mobilen Geräten ([#6235](https://github.com/nocobase/nocobase/pull/6235)) von @katherinehhh
  * Fehlende Dateien nach dem Hochladen behoben ([#6247](https://github.com/nocobase/nocobase/pull/6247)) von @mytharcher
  * Auth-Fehler für CurrentUserProvider übersprungen. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) von @sheldon66
* [Workflow: Schleifenknoten] Problem behoben, bei dem die Schleife vorzeitig beendet wurde, wenn ein Knoten ausstehend war ([#6236](https://github.com/nocobase/nocobase/pull/6236)) von @mytharcher
* [Dateimanager] AWS SDK-Version aktualisiert, um MinIO-Upload-Fehler zu beheben ([#6253](https://github.com/nocobase/nocobase/pull/6253)) von @mytharcher
* [Mobil] Mobile Menüdaten in der Berechtigungskonfigurationstabelle unvollständig ([#6219](https://github.com/nocobase/nocobase/pull/6219)) von @zhangzhonghe
* [Workflow]

  * Stildetails in der Workflow-Leinwand behoben ([#6240](https://github.com/nocobase/nocobase/pull/6240)) von @mytharcher
  * Unterstützung zum Auslösen des Workflows bei Passwortänderung ([#6248](https://github.com/nocobase/nocobase/pull/6248)) von @mytharcher
* [Datenvisualisierung] Filterfehler tritt auf, wenn der Datenquellenname einen Bindestrich `-` enthält ([#6231](https://github.com/nocobase/nocobase/pull/6231)) von @2013xile
* [Workflow: Pre-Action-Event] Fehlermeldung vom Antwortnachrichtenknoten wird nicht angezeigt, behoben ([#277](https://github.com/nocobase/pro-plugins/pull/277)) von @mytharcher
* **[client]** Fehlende hochgeladene Datei bei Einzel-Upload behoben ([#6260](https://github.com/nocobase/nocobase/pull/6260)) von @mytharcher
* **[client]** Problem behoben, bei dem die Option "Aus vorhandenen Daten auswählen" weiterhin angezeigt wird, wenn "Mehrfachauswahl zulassen" in einem n:m-Beziehungssubformular deaktiviert ist ([#6167](https://github.com/nocobase/nocobase/pull/6167)) von @katherinehhh
* **[auth]** Client-Auth-Middleware-Logik aktualisiert, um Token-Aktualisierungsfehler aufgrund von Parallelität zu verhindern ([#6135](https://github.com/nocobase/nocobase/pull/6135)) von @sheldon66
* **[WEB-Client]**

  * Routenberechtigungen nach Upgrade abnormal ([#6177](https://github.com/nocobase/nocobase/pull/6177)) von @zhangzhonghe
  * Standard-Seiten-Tab-Titel entfernt ([#6178](https://github.com/nocobase/nocobase/pull/6178)) von @zhangzhonghe
* **[Datenquellen-Manager]** loginWithJti verwendet, um authentifizierungsbezogene Testfälle zu aktualisieren und Fehler zu verhindern ([#6175](https://github.com/nocobase/nocobase/pull/6175)) von @sheldon66
* **[Multi-App-Manager]** Nur Sub-Apps, die mit der Haupt-App beginnen, werden mit ihr aktualisiert ([#6133](https://github.com/nocobase/nocobase/pull/6133)) von @chenos
* **[Authentifizierung]** Migrationsregeln für ausgestellte Token und Token-Richtlinienkonfiguration aktualisiert ([#6107](https://github.com/nocobase/nocobase/pull/6107)) von @sheldon66
* **[Workflow]** Werttyp für die DatePicker-Komponente behoben ([#6039](https://github.com/nocobase/nocobase/pull/6039)) von @mytharcher

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die volle Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten deutlich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 Holen Sie sich NocoBase

[**Startseite**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
