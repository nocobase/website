---
title: "Wöchentliche Updates｜Open-Source-Backup-Manager-Plugin"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 22. bis 28. Mai 2026."
---

Fassen Sie die wöchentlichen Produktaktualisierungen zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit in drei Zweigen aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation.
* `next`: Beta-Version, enthält bevorstehende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten.
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.58](https://www.nocobase.com/en/blog/v2.0.58)

*Veröffentlichungsdatum: 28.05.2026*

### 🎉 Neue Funktionen

* **[Workflow]** Administrator-API hinzugefügt, um gestartete Workflow-Ausführungen ab dem Startknoten oder einem bestimmten Knoten erneut auszuführen. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) von @mytharcher

### 🚀 Verbesserungen

* **[Client]** Die Option "Ausgeblendet" aus den Menüpunkt-Einstellungen entfernt. ([#9595](https://github.com/nocobase/nocobase/pull/9595)) von @zhangzhonghe

### 🐛 Fehlerbehebungen

* **[Client]**
  * Behoben: Das Popup für die mobile Datumsauswahl in v2 verwendete die aktuelle Zeit anstelle des Formularwerts. ([#9582](https://github.com/nocobase/nocobase/pull/9582)) von @katherinehhh
  * Behoben: Die Formateinstellungen für Zeitfelder in v2 hatten keine Wirkung. ([#9579](https://github.com/nocobase/nocobase/pull/9579)) von @katherinehhh
  * Upload-Limit für die Scan-Eingabekomponente in v1 auf 10 MB erhöht. ([#9580](https://github.com/nocobase/nocobase/pull/9580)) von @katherinehhh
  * Behoben: Der ausgeblendete Status von Unterformular-Verknüpfungen wurde nicht synchronisiert. ([#9594](https://github.com/nocobase/nocobase/pull/9594)) von @katherinehhh
  * Behoben: In einer Untertabelle innerhalb eines Unterformulars konnte keine zweite Zeile hinzugefügt werden. ([#9586](https://github.com/nocobase/nocobase/pull/9586)) von @katherinehhh
  * Behoben: Seiten-Tabs verschwanden nach dem Wechseln von Menüs. ([#9583](https://github.com/nocobase/nocobase/pull/9583)) von @zhangzhonghe
* **[Flow-Engine]** Behoben: Tabellenaktions-Verknüpfungsregeln wurden nach erfolgreichem Absenden eines Formulars in einem Popup falsch ausgeführt. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) von @gchust
* **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behoben: Benutzerdefinierte Aktions-Tabellenbuttons mit mehreren Datensatzkontexten erlaubten fälschlicherweise die Auswahl von benutzerdefinierten Kontext-Workflows. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) von @mytharcher
* **[Dateimanager]**
  * Unicode-Dateinamen-Normalisierung beim Datei-Upload korrigiert, um die Erzeugung von Objektschlüsseln mit Steuerzeichen zu vermeiden. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) von @mytharcher
  * Fehlermeldungen bei fehlgeschlagener PDF-Vorschau verbessert und CORS-Anforderungen für externe Speicher dokumentiert. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) von @mytharcher
    Referenz: [Dateivorschau](docs/docs/de/file-manager/file-preview/index.md)

### [v2.0.57](https://www.nocobase.com/en/blog/v2.0.57)

*Veröffentlichungsdatum: 26.05.2026*

### 🐛 Fehlerbehebungen

* **[Build]** Server-Verschleierung von Plugins korrigiert, um Browser-Globals in Node.js-Laufzeitpaketen zu vermeiden. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) von @Molunerfinn
* **[Workflow: Manueller Knoten]** Behoben: Temporäre Speicherungen für manuelle Workflow-Aufgaben behielten die übermittelten Formularwerte nicht bei. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) von @mytharcher
* **[KI-Mitarbeiter]** Falsche Toolnamen-Beschreibung im Arbeitskontext-Prompt korrigiert. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) von @cgyrock
* **[Dateimanager]** PDF-Vorschauen werden jetzt sicher mit PDF.js gerendert, anstatt mit iframe-basiertem Roh-PDF-Rendering. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) von @mytharcher
* **[Auth: OIDC]** Token-Leck behoben, wenn SSO-Login-Callbacks eine externe Weiterleitungs-URL erhielten. von @2013xile
* **[Workflow: Genehmigung]**
  * Behoben: Die `<span>jobs:resume</span>`-API wurde von Genehmigungsknoten nicht unterstützt. von @mytharcher
  * Genehmigungsrücknahme korrigiert, um übermittelte Geschäftsdaten zu aktualisieren und dabei die Aktualisierungsberechtigungen der Quellsammlung zu respektieren. von @mytharcher
  * Veraltete Genehmigungs-Todos behoben, wenn Genehmigungs-Workflows durch Fehler in Nicht-Genehmigungsknoten beendet wurden. von @mytharcher

### [v2.0.56](https://www.nocobase.com/en/blog/v2.0.56)

*Veröffentlichungsdatum: 22.05.2026*

### 🎉 Neue Funktionen

* **[Backup-Manager]** Das Backup-Manager-Plugin als Open Source veröffentlicht. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) von @chenos

### 🚀 Verbesserungen

* **[Client]** Anzeigeeinstellungen für Aktionsbuttons optimiert. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) von @katherinehhh
* **[Flow-Engine]** Suchunterstützung für v2-Feldkonfigurationsmenüs hinzugefügt. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) von @zhangzhonghe
* **[Sicherheit]** Abhängigkeits-Sicherheitsprüfung für Pull-Requests hinzugefügt. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) von @zhangzhonghe
* **[Benachrichtigungsmanager]** Warteschlangenstrategie geändert, um die Sendeleistung zu optimieren. ([#9407](https://github.com/nocobase/nocobase/pull/9407)) von @mytharcher
* **[KI: Wissensdatenbank]** Vektorspeicher-Modifikation für KI-Wissensdatenbanken aktiviert. von @cgyrock
* **[Workflow: Genehmigung]** Verwandte Genehmigungen mit Zeitleistenkarten verbessert. von @zhangzhonghe

### 🐛 Fehlerbehebungen

* **[Client]**
  * Behoben: Ausgewählte Werte wurden gelöscht, wenn sich abhängige Assoziationsfelder in der Datenbereichsverknüpfung änderten. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) von @katherinehhh
  * Behoben: Ein Menü-Badge zeigte weiterhin einen Punkt an, wenn sein Wert 0 war. ([#9491](https://github.com/nocobase/nocobase/pull/9491)) von @zhangzhonghe
  * Behoben: Filterformulare konnten keine aktuellen Formularvariablen verwenden. ([#9474](https://github.com/nocobase/nocobase/pull/9474)) von @zhangzhonghe
  * Behoben: Verschmälerte v2-Blöcke wurden nach Verlassen des Bearbeitungsmodus wieder voll breit. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) von @zhangzhonghe
  * Falscher JS-Feld-Menüzustand in Unterformularen korrigiert. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) von @gchust
* **[Flow-Engine]** Problem mit Mehrfachauswahl für externe Datenquellenfelder in v2-Formularen behoben. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) von @katherinehhh
* **[KI-Mitarbeiter]** Fehler behoben, der auftrat, wenn KI-Mitarbeiter auf schreibgeschützte Wissensdatenbanken zugriffen. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) von @cgyrock
* **[Kalender]** Behoben: Weitere Elemente im Kalender konnten nicht vollständig angezeigt werden. ([#9492](https://github.com/nocobase/nocobase/pull/9492)) von @zhangzhonghe
* **[Aktion: Stapelaktualisierung]** Behoben: Die Stapelaktualisierungsaktion setzte den Ladezustand nach einem Aktualisierungsfehler zurück. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) von @katherinehhh
* **[API-Dokumentation]** Sammlungs-API-Dokumentation korrigiert, sodass Abfrageparameter sich nicht mehr gegenseitig beeinflussen. ([#9442](https://github.com/nocobase/nocobase/pull/9442)) von @jiannx
* **[Workflow]** Ladezustand für manuelle Workflow-Ausführung hinzugefügt. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) von @mytharcher
* **[Migrationsmanager]** Fehler bei der Erstellung von Migrationsdateien bei Verwendung von OceanBase behoben. von @2013xile
* **[Dateispeicher: S3(Pro)]** S3 Pro-Endpunktbehandlung korrigiert, sodass Server-Uploads und URL-Vorschauen den Bucket-Host nicht duplizieren. von @mytharcher
* **[Workflow: Genehmigung]** Doppelte Genehmigungsdatensatz-Indizes behoben, wenn Delegierungen gleichzeitig für denselben Genehmigungsauftrag auftraten. von @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)


### [v2.1.0-beta.37](https://www.nocobase.com/en/blog/v2.1.0-beta.37)

*Veröffentlichungsdatum: 26.05.2026*

### 🎉 Neue Funktionen

* **[client-v2]** Ein Sicherheitsmenü und die Seite für Token-Richtlinieneinstellungen zum v2-Admin hinzugefügt. Das Benutzerzentrum unterstützt jetzt die Passwortänderung. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) von @Molunerfinn
* **[CLI]** Unterstützung für die Basisauthentifizierung hinzugefügt. ([#9558](https://github.com/nocobase/nocobase/pull/9558)) von @chenos
* **[Passwortrichtlinie]** Das Passwortrichtlinien-Plugin in die client-v2-Admin-Shell migriert, einschließlich der Einstellungsseiten für Passwortrichtlinie und gesperrte Benutzer, sowie clientseitige Regelprüfung im Formular zur Passwortänderung im Benutzerzentrum hinzugefügt. von @Molunerfinn

### 🚀 Verbesserungen

* **[Datenvisualisierung]** Client-v2-Unterstützung für Diagrammblöcke hinzugefügt. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) von @jiannx
* **[Workflow]** Überprüfung der Verfügbarkeit von asynchronen Workflow-Knoten überarbeitet. ([#9532](https://github.com/nocobase/nocobase/pull/9532)) von @mytharcher

### 🐛 Fehlerbehebungen

* **[Build]**
  * Text-Assets in Server-Builds werden jetzt als Dateien kopiert, anstatt in JavaScript-Module konvertiert zu werden. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) von @Molunerfinn
  * Server-Verschleierung von Plugins korrigiert, um Browser-Globals in Node.js-Laufzeitpaketen zu vermeiden. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) von @Molunerfinn
* **[client-v2]** Browser-Sprachmetadaten korrigiert, sodass die App-Seite der ausgewählten Anwendungssprache folgt, anstatt als Englisch markiert zu sein. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) von @Molunerfinn
* **[Dateimanager]** PDF-Vorschauen werden jetzt sicher mit PDF.js gerendert, anstatt mit iframe-basiertem Roh-PDF-Rendering. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) von @mytharcher
* **[KI-Mitarbeiter]** Falsche Toolnamen-Beschreibung im Arbeitskontext-Prompt korrigiert. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) von @cgyrock
* **[Workflow: Manueller Knoten]** Behoben: Temporäre Speicherungen für manuelle Workflow-Aufgaben behielten die übermittelten Formularwerte nicht bei. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) von @mytharcher
* **[Auth: OIDC]** Token-Leck behoben, wenn SSO-Login-Callbacks eine externe Weiterleitungs-URL erhielten. von @2013xile
* **[Workflow: Genehmigung]**
  * Genehmigungsrücknahme korrigiert, um übermittelte Geschäftsdaten zu aktualisieren und dabei die Aktualisierungsberechtigungen der Quellsammlung zu respektieren. von @mytharcher
  * Behoben: Die `<span>jobs:resume</span>`-API wurde von Genehmigungsknoten nicht unterstützt. von @mytharcher
  * Doppelte Genehmigungsdatensatz-Indizes behoben, wenn Delegierungen gleichzeitig für denselben Genehmigungsauftrag auftraten. von @mytharcher
  * Veraltete Genehmigungs-Todos behoben, wenn Genehmigungs-Workflows durch Fehler in Nicht-Genehmigungsknoten beendet wurden. von @mytharcher

### [v2.1.0-beta.36](https://www.nocobase.com/en/blog/v2.1.0-beta.36)

*Veröffentlichungsdatum: 22.05.2026*

### 🎉 Neue Funktionen

* **[CLI]** Befehle zum Erstellen und Wiederherstellen von Backups hinzugefügt. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) von @chenos
* **[Backup-Manager]** Das Backup-Manager-Plugin als Open Source veröffentlicht. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) von @chenos
* **[Theme-Editor]** Theme-Editor-Unterstützung für die v2-Oberfläche hinzugefügt. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) von @zhangzhonghe
* **[Zwei-Faktor-Authentifizierung (2FA)]** Unterstützung für Bindung, Verifizierung und Konfiguration von TOTP und Zwei-Faktor-Authentifizierung über den v2-Client hinzugefügt. von @Molunerfinn

### 🚀 Verbesserungen

* **[Client]** Anzeigeeinstellungen für Aktionsbuttons optimiert. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) von @katherinehhh
* **[Flow-Engine]** Suchunterstützung für v2-Feldkonfigurationsmenüs hinzugefügt. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) von @zhangzhonghe
* **[CLI]** Umgebungsauthentifizierungsablauf verbessert. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) von @chenos
* **[Sicherheit]** Abhängigkeits-Sicherheitsprüfung für Pull-Requests hinzugefügt. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) von @zhangzhonghe
* **[Verifizierung]** Client-v2-Unterstützung für das Verifizierungs-Plugin hinzugefügt, einschließlich Admin-Einstellungsseite, Benutzerzentrum-Eintrag und SMS-OTP-Formulare. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) von @Molunerfinn
* **[Authentifizierung]** Benutzerdefinierte Brand-Einstellungen im v2-Client korrigiert. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) von @zhangzhonghe
* **[Block: Karte]** Client-v2-Unterstützung für das Karten-Plugin hinzugefügt. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) von @jiannx
* **[Benutzerdefiniertes Branding]** Unterstützung für benutzerdefinierte Brand-Einstellungen im v2-Client hinzugefügt. von @zhangzhonghe
* **[KI: Wissensdatenbank]** Vektorspeicher-Modifikation für KI-Wissensdatenbanken aktiviert. von @cgyrock
* **[Workflow: Genehmigung]** Das `<span>async</span>`-Flag für Genehmigungsanweisungen hinzugefügt, um die neue Knotenerstellungs-API in der Workflow-Leinwand zu unterstützen. von @mytharcher

### 🐛 Fehlerbehebungen

* **[Client]**
  * Behoben: Ausgewählte Werte wurden gelöscht, wenn sich abhängige Assoziationsfelder in der Datenbereichsverknüpfung änderten. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) von @katherinehhh
  * Dev-Modus-Laden für gebaute Speicher-Plugins korrigiert, die von benannten Exporten lokaler Quell-Plugins abhängen. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) von @Molunerfinn
  * Falscher JS-Feld-Menüzustand in Unterformularen korrigiert. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) von @gchust
  * Behoben: Verschmälerte v2-Blöcke wurden nach Verlassen des Bearbeitungsmodus wieder voll breit. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) von @zhangzhonghe
* **[client-v2]** Inkonsistente dnd-kit-Abhängigkeitsregistrierung korrigiert. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) von @jiannx
* **[Flow-Engine]** Problem mit Mehrfachauswahl für externe Datenquellenfelder in v2-Formularen behoben. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) von @katherinehhh
* **[Block: iframe]** Behoben: Der iframe-Inhalt füllte nicht die konfigurierte Blockhöhe aus. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) von @katherinehhh
* **[KI-Mitarbeiter]**
  * Fehler behoben, der auftrat, wenn KI-Mitarbeiter auf schreibgeschützte Wissensdatenbanken zugriffen. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) von @cgyrock
  * Behoben: KI-Tool-Aufrufkarten erschienen nicht sofort, wenn gestreamte Tool-Ereignisse aufgeteilt wurden. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) von @2013xile
  * Fehler behoben, der auftrat, wenn KI-Mitarbeiter auf schreibgeschützte Wissensdatenbanken zugriffen. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) von @cgyrock
* **[Aktion: Datensätze exportieren]** Feldkonfigurationsleistung bei vielen Assoziationsfeldern verbessert. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) von @katherinehhh
* **[Aktion: Stapelaktualisierung]** Behoben: Die Stapelaktualisierungsaktion setzte den Ladezustand nach einem Aktualisierungsfehler zurück. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) von @katherinehhh
* **[Workflow]** Ladezustand für manuelle Workflow-Ausführung hinzugefügt. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) von @mytharcher
* **[Lokalisierung]** Integrierte Lokalisierungs-Referenzübersetzungen für KI-Übersetzungsaufgaben korrigiert. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) von @2013xile
* **[Migrationsmanager]** Fehler bei der Erstellung von Migrationsdateien bei Verwendung von OceanBase behoben. von @2013xile
* **[Dateispeicher: S3(Pro)]** S3 Pro-Endpunktbehandlung korrigiert, sodass Server-Uploads und URL-Vorschauen den Bucket-Host nicht duplizieren. von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.40](https://www.nocobase.com/en/blog/v2.1.0-alpha.40)

*Veröffentlichungsdatum: 22.05.2026*

### 🎉 Neue Funktionen

* **[CLI]** Befehle zum Erstellen und Wiederherstellen von Backups hinzugefügt. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) von @chenos
* **[Backup-Manager]** Das Backup-Manager-Plugin als Open Source veröffentlicht. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) von @chenos
* **[Theme-Editor]** Theme-Editor-Unterstützung für die v2-Oberfläche hinzugefügt. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) von @zhangzhonghe
* **[Zwei-Faktor-Authentifizierung (2FA)]** Unterstützung für Bindung, Verifizierung und Konfiguration von TOTP und Zwei-Faktor-Authentifizierung über den v2-Client hinzugefügt. von @Molunerfinn

### 🚀 Verbesserungen

* **[CLI]** Umgebungsauthentifizierungsablauf verbessert. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) von @chenos
* **[Flow-Engine]** Suchunterstützung für v2-Feldkonfigurationsmenüs hinzugefügt. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) von @zhangzhonghe
* **[Client]** Anzeigeeinstellungen für Aktionsbuttons optimiert. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) von @katherinehhh
* **[Sicherheit]** Abhängigkeits-Sicherheitsprüfung für Pull-Requests hinzugefügt. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) von @zhangzhonghe
* **[Verifizierung]** Client-v2-Unterstützung für das Verifizierungs-Plugin hinzugefügt, einschließlich Admin-Einstellungsseite, Benutzerzentrum-Eintrag und SMS-OTP-Formulare. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) von @Molunerfinn
* **[Authentifizierung]** Benutzerdefinierte Brand-Einstellungen im v2-Client korrigiert. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) von @zhangzhonghe
* **[Block: Karte]** Client-v2-Unterstützung für das Karten-Plugin hinzugefügt. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) von @jiannx
* **[Benutzerdefiniertes Branding]** Unterstützung für benutzerdefinierte Brand-Einstellungen im v2-Client hinzugefügt. von @zhangzhonghe
* **[KI: Wissensdatenbank]** Vektorspeicher-Modifikation für KI-Wissensdatenbanken aktiviert. von @cgyrock
* **[Workflow: Genehmigung]** Das `<span>async</span>`-Flag für Genehmigungsanweisungen hinzugefügt, um die neue Knotenerstellungs-API in der Workflow-Leinwand zu unterstützen. von @mytharcher

### 🐛 Fehlerbehebungen

* **[Client]**
  * Dev-Modus-Laden für gebaute Speicher-Plugins korrigiert, die von benannten Exporten lokaler Quell-Plugins abhängen. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) von @Molunerfinn
  * Behoben: Verschmälerte v2-Blöcke wurden nach Verlassen des Bearbeitungsmodus wieder voll breit. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) von @zhangzhonghe
  * Behoben: Ausgewählte Werte wurden gelöscht, wenn sich abhängige Assoziationsfelder in der Datenbereichsverknüpfung änderten. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) von @katherinehhh
  * Falscher JS-Feld-Menüzustand in Unterformularen korrigiert. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) von @gchust
* **[client-v2]** Inkonsistente dnd-kit-Abhängigkeitsregistrierung korrigiert. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) von @jiannx
* **[Flow-Engine]** Problem mit Mehrfachauswahl für externe Datenquellenfelder in v2-Formularen behoben. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) von @katherinehhh
* **[Block: iframe]** Behoben: Der iframe-Inhalt füllte nicht die konfigurierte Blockhöhe aus. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) von @katherinehhh
* **[Aktion: Datensätze exportieren]** Feldkonfigurationsleistung bei vielen Assoziationsfeldern verbessert. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) von @katherinehhh
* **[KI-Mitarbeiter]**
  * Fehler behoben, der auftrat, wenn KI-Mitarbeiter auf schreibgeschützte Wissensdatenbanken zugriffen. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) von @cgyrock
  * Fehler behoben, der auftrat, wenn KI-Mitarbeiter auf schreibgeschützte Wissensdatenbanken zugriffen. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) von @cgyrock
  * Behoben: KI-Tool-Aufrufkarten erschienen nicht sofort, wenn gestreamte Tool-Ereignisse aufgeteilt wurden. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) von @2013xile
* **[Lokalisierung]** Integrierte Lokalisierungs-Referenzübersetzungen für KI-Übersetzungsaufgaben korrigiert. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) von @2013xile
* **[Aktion: Stapelaktualisierung]** Behoben: Die Stapelaktualisierungsaktion setzte den Ladezustand nach einem Aktualisierungsfehler zurück. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) von @katherinehhh
* **[Workflow]** Ladezustand für manuelle Workflow-Ausführung hinzugefügt. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) von @mytharcher
* **[Migrationsmanager]** Fehler bei der Erstellung von Migrationsdateien bei Verwendung von OceanBase behoben. von @2013xile
* **[Dateispeicher: S3(Pro)]** S3 Pro-Endpunktbehandlung korrigiert, sodass Server-Uploads und URL-Vorschauen den Bucket-Host nicht duplizieren. von @mytharcher
* **[Workflow: Genehmigung]** Doppelte Genehmigungsdatensatz-Indizes behoben, wenn Delegierungen gleichzeitig für denselben Genehmigungsauftrag auftraten. von @mytharcher
