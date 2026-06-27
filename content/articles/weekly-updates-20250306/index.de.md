---
title: "NocoBase wöchentliche Updates: Unterstützung für Berechtigungskonfiguration von Aktionen"
description: "Die Updates dieser Woche umfassen: Unterstützung für Berechtigungskonfiguration von Aktionen, Zeitfeld unterstützt Zeitformat und mehr."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Versionen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es könnte bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an den neuesten Funktionen des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.17](https://www.nocobase.com/en/blog/v1.5.17)

*Veröffentlichungsdatum: 27.02.2025*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Fehler beim Erstellen eines Kommentar-Blocks ohne Kommentar-Collection ([#6309](https://github.com/nocobase/nocobase/pull/6309)) von @katherinehhh
  - Fehler beim Klicken auf einen Baumblock-Knoten ([#6314](https://github.com/nocobase/nocobase/pull/6314)) von @zhangzhonghe
  - Nach dem Klicken auf das linke Menü wird die Unterseite ungewöhnlich geschlossen ([#6305](https://github.com/nocobase/nocobase/pull/6305)) von @zhangzhonghe
  - Feldwert nicht löschen, wenn der Ausdruckswert leer ist ([#6300](https://github.com/nocobase/nocobase/pull/6300)) von @zhangzhonghe
- **[Collection-Feld: Sequenz]** Behebt, dass das Sequenzfeld im schreibgeschützten Modus nicht deaktiviert wird ([#6274](https://github.com/nocobase/nocobase/pull/6274)) von @mytharcher
- **[Dateimanager]** Behebt Migration für vererbte Collection ([#6310](https://github.com/nocobase/nocobase/pull/6310)) von @mytharcher
- **[Zugriffskontrolle]** Falsche Datensätze bei Verwendung von n-zu-n-Feldern als Datenbereich in Collection-Berechtigungen ([#6304](https://github.com/nocobase/nocobase/pull/6304)) von @2013xile
- **[Block: Kanban]** Falsche Datenfilterung im Popup-Kanban-Block bei Verwendung von Popup-Datensatzvariablen ([#6290](https://github.com/nocobase/nocobase/pull/6290)) von @katherinehhh
- **[Block: Baum]** Fehler beim Klicken auf einen Baumblock-Knoten von @zhangzhonghe

### [v1.5.18](https://www.nocobase.com/en/blog/v1.5.18)

*Veröffentlichungsdatum: 27.02.2025*

#### 🐛 Fehlerbehebungen

- **[Block: Aktionspanel]** Das Einstellen der Höhe des Aktionspanels ist ungültig ([#6321](https://github.com/nocobase/nocobase/pull/6321)) von @zhangzhonghe

### [v1.5.19](https://www.nocobase.com/en/blog/v1.5.19)

*Veröffentlichungsdatum: 01.03.2025*

#### 🐛 Fehlerbehebungen

- **[client]** Schaltfläche "Neu hinzufügen" erscheint beim Überfahren im schreibgeschützten Modus des Assoziationsfeldes ([#6322](https://github.com/nocobase/nocobase/pull/6322)) von @katherinehhh
- **[Aktion: Datensätze exportieren Pro]** Entfernt die Option 'Block hinzufügen' in den Einstellungen der Export-Anhang-Schaltfläche von @katherinehhh
- **[Aktion: Datensätze importieren Pro]** Die Erkennung doppelter Datensätze über die Import-Schaltfläche des Assoziationsblocks zeigt keine Daten im Feld-Dropdown an von @katherinehhh

### [v1.5.20](https://www.nocobase.com/en/blog/v1.5.20)

*Veröffentlichungsdatum: 03.03.2025*

#### 🐛 Fehlerbehebungen

- **[client]** Seiten mit benutzerdefiniertem Favicon zeigen kurz das NocoBase-Favicon während des Ladens ([#6337](https://github.com/nocobase/nocobase/pull/6337)) von @zhangzhonghe
- **[Block: Karte]** Konfigurationseinstellungen für das Kartenfeld fehlen/sind nicht sichtbar ([#6336](https://github.com/nocobase/nocobase/pull/6336)) von @zhangzhonghe
- **[Benutzerdefiniertes Branding]** Seiten mit benutzerdefiniertem Favicon zeigen kurz das NocoBase-Favicon während des Ladens von @zhangzhonghe
- **[Vorlagendruck]** Wiederherstellung aus lokalem Speicher fehlgeschlagen, wenn sowohl die Plugins für Aktionsvorlagendruck als auch Backup-Manager aktiviert waren von @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.15](https://www.nocobase.com/en/blog/v1.6.0-beta.15)

*Veröffentlichungsdatum: 27.02.2025*

#### 🐛 Fehlerbehebungen

- **[client]**

  - Fehler beim Erstellen eines Kommentar-Blocks ohne Kommentar-Collection ([#6309](https://github.com/nocobase/nocobase/pull/6309)) von @katherinehhh
  - Falsche Position nach dem Ziehen des Menüs ([#6315](https://github.com/nocobase/nocobase/pull/6315)) von @zhangzhonghe
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebt Build-Fehler von @mytharcher

### [v1.6.0-beta.16](https://www.nocobase.com/en/blog/v1.6.0-beta.16)

*Veröffentlichungsdatum: 04.03.2025*

#### 🎉 Neue Funktionen

- **[client]** Zeitfeld unterstützt Zeitformat ([#6329](https://github.com/nocobase/nocobase/pull/6329)) von @katherinehhh

#### 🚀 Verbesserungen

- **[server]** Upgrade von koa auf 2.15.4; Upgrade von @koa/cors auf 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) von @2013xile
- **[Workflow]** Verzögertes Laden von Auftragsergebnissen für bessere Leistung ([#6344](https://github.com/nocobase/nocobase/pull/6344)) von @mytharcher

#### 🐛 Fehlerbehebungen

- **[auth]** Vermeidet die Erneuerung des Tokens während der WebSocket-Autorisierung. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) von @sheldon66
- **[client]**

  - Seiten mit benutzerdefiniertem Favicon zeigen kurz das NocoBase-Favicon während des Ladens ([#6337](https://github.com/nocobase/nocobase/pull/6337)) von @zhangzhonghe
  - Schaltfläche "Neu hinzufügen" erscheint beim Überfahren im schreibgeschützten Modus des Assoziationsfeldes ([#6322](https://github.com/nocobase/nocobase/pull/6322)) von @katherinehhh
- **[devtools]** Stellt sicher, dass der X-Forwarded-For-Header nur gesetzt wird, wenn req.ip nicht undefiniert ist. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) von @sheldon66
- **[Block: Karte]** Konfigurationseinstellungen für das Kartenfeld fehlen/sind nicht sichtbar ([#6336](https://github.com/nocobase/nocobase/pull/6336)) von @zhangzhonghe
- **[Mobil]** Seitenfehler: Eigenschaften von null können nicht gelesen werden (Lesen von 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) von @zhangzhonghe
- **[Benutzer]** Eine Fehleroberfläche blinkt kurz auf, wenn die Benutzerberechtigungsverwaltungstabelle zum ersten Mal geladen wird ([#6324](https://github.com/nocobase/nocobase/pull/6324)) von @zhangzhonghe
- **[Block: Aktionspanel]** Das Einstellen der Höhe des Aktionspanels ist ungültig ([#6321](https://github.com/nocobase/nocobase/pull/6321)) von @zhangzhonghe
- **[Aktion: Datensätze importieren Pro]** Die Erkennung doppelter Datensätze über die Import-Schaltfläche des Assoziationsblocks zeigt keine Daten im Feld-Dropdown an von @katherinehhh
- **[Aktion: Datensätze exportieren Pro]** Entfernt die Option 'Block hinzufügen' in den Einstellungen der Export-Anhang-Schaltfläche von @katherinehhh
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Behebt Migration für alte Schaltflächen, die mit benutzerdefiniertem Aktions-Workflow verbunden sind von @mytharcher
- **[Benutzerdefiniertes Branding]** Seiten mit benutzerdefiniertem Favicon zeigen kurz das NocoBase-Favicon während des Ladens von @zhangzhonghe
- **[Vorlagendruck]** Wiederherstellung aus lokalem Speicher fehlgeschlagen, wenn sowohl die Plugins für Aktionsvorlagendruck als auch Backup-Manager aktiviert waren von @gchust
- **[Workflow: Genehmigung]**

  - Behebt `.toJSON()` verursachten Fehler von @mytharcher
  - Behebt, dass die Migration aufgrund der Versionsnummer nicht ausgeführt wurde von @mytharcher
  - Behebt Migration für alte Blöcke von @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.29](https://www.nocobase.com/en/blog/v1.6.0-alpha.29)

*Veröffentlichungsdatum: 27.02.2025*

#### 🎉 Neue Funktionen

- **[client]** Unterstützt Berechtigungskonfiguration für Aktionen ([#6254](https://github.com/nocobase/nocobase/pull/6254)) von @katherinehhh
- **[Block: Vorlage]** Fügt das Plugin `Block: Vorlage` hinzu, das Vorlagenunterstützung für Blöcke basierend auf einem Vererbungsmechanismus bietet. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) von @gchust
- **[Workflow: Benutzerdefiniertes Aktionsereignis]** Trigger-Workflow-Aktion unterstützt Zugriffskontrolle von @katherinehhh

#### 🚀 Verbesserungen

- **[client]**

  - Upgrade der React-Typdefinitionen ([#6278](https://github.com/nocobase/nocobase/pull/6278)) von @gchust
  - Erweiterung und Verbesserung des persönlichen Benutzerzentrums ([#6213](https://github.com/nocobase/nocobase/pull/6213)) von @katherinehhh
- **[Dateimanager]**

  - Erhöhung der URL-Länge auf 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) von @mytharcher
  - Hinzufügen von Backend-Code zur Generierung von Dateivorschau-URLs ([#6281](https://github.com/nocobase/nocobase/pull/6281)) von @jiannx
  - Dateinamen während des Uploads ändern sich von zufällig zum ursprünglichen Namen mit einem zufälligen Suffix. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) von @chenos
  - Hinzufügen von Backend-Code zur Generierung von Dateivorschau-URLs ([#6223](https://github.com/nocobase/nocobase/pull/6223)) von @jiannx
  - Änderung des Speichertyp-APIs und Hinzufügen von Plugin-APIs ([#6246](https://github.com/nocobase/nocobase/pull/6246)) von @mytharcher
  - Änderung des Speichertyp-APIs und Hinzufügen von Plugin-APIs ([#6246](https://github.com/nocobase/nocobase/pull/6246)) von @mytharcher
- **[Block: Aktionspanel]** Optimierung der mobilen Stile ([#6270](https://github.com/nocobase/nocobase/pull/6270)) von @zhangzhonghe
- **[Workflow]** Knoten-ID in der Knotenkarte der Workflow-Leinwand ausblenden ([#6251](https://github.com/nocobase/nocobase/pull/6251)) von @mytharcher
- **[Dateispeicher: S3(Pro)]**

  - Anpassung der Speicher-API basierend auf dem Haupt-Repository von @mytharcher
  - Unterstützung der Konfigurationsoption thumbnailRule von @jiannx
- **[Backup-Manager]** Erlaubt das Wiederherstellen eines Backups in einer Anwendung, auch wenn einige Plugins fehlen von @gchust

#### 🐛 Fehlerbehebungen

- **[devtools]** Stellt sicher, dass der X-Forwarded-For-Header nur gesetzt wird, wenn req.ip nicht undefiniert ist. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) von @sheldon66
- **[client]**

  - Falsche Position nach dem Ziehen des Menüs ([#6315](https://github.com/nocobase/nocobase/pull/6315)) von @zhangzhonghe
  - Fehler beim Erstellen eines Kommentar-Blocks ohne Kommentar-Collection ([#6309](https://github.com/nocobase/nocobase/pull/6309)) von @katherinehhh
  - Fehler beim Klicken auf einen Baumblock-Knoten ([#6314](https://github.com/nocobase/nocobase/pull/6314)) von @zhangzhonghe
  - Nach dem Klicken auf das linke Menü wird die Unterseite ungewöhnlich geschlossen ([#6305](https://github.com/nocobase/nocobase/pull/6305)) von @zhangzhonghe
  - Feldwert nicht löschen, wenn der Ausdruckswert leer ist ([#6300](https://github.com/nocobase/nocobase/pull/6300)) von @zhangzhonghe
  - Rich-Text-Feldkomponente kann nicht vollständig geleert werden ([#6287](https://github.com/nocobase/nocobase/pull/6287)) von @katherinehhh
  - Seite kann nicht in eine Gruppe verschoben werden ([#6289](https://github.com/nocobase/nocobase/pull/6289)) von @zhangzhonghe
  - Auth-Fehler für CurrentUserProvider überspringen. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) von @sheldon66
  - Behebt, dass hochgeladene Dateien beim Einzel-Upload fehlen ([#6260](https://github.com/nocobase/nocobase/pull/6260)) von @mytharcher
  - Behebt HTML-Tag-Zeichen im Eingabefeld des Mail-Kanal-Konfigurationsformulars. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) von @sheldon66
  - Behebt, dass Dateien nach dem Upload fehlen ([#6247](https://github.com/nocobase/nocobase/pull/6247)) von @mytharcher
  - Picker-Format stimmt nicht im Filterformularfeld überein ([#6234](https://github.com/nocobase/nocobase/pull/6234)) von @katherinehhh
  - `<Variable.TextArea />`-Komponente im deaktivierten Modus korrekt anzeigen ([#6197](https://github.com/nocobase/nocobase/pull/6197)) von @mytharcher
- **[create-nocobase-app]** Fehler im Web-Client nach Ausführung von `create-nocobase-app` gefolgt von `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) von @gchust
- **[auth]** Benutzer-Auth-Prüfung überspringen, wenn das Token ein API-Key ist ([#6291](https://github.com/nocobase/nocobase/pull/6291)) von @sheldon66
- **[cli]** Verbesserung der internen Logik des nocobase upgrade-Befehls ([#6280](https://github.com/nocobase/nocobase/pull/6280)) von @chenos
- **[Dateimanager]**

  - Behebt Migration für vererbte Collection ([#6310](https://github.com/nocobase/nocobase/pull/6310)) von @mytharcher
  - Behebt Migration und fügt Testfälle hinzu ([#6288](https://github.com/nocobase/nocobase/pull/6288)) von @mytharcher
  - Behebt Migration und fügt Testfälle hinzu ([#6288](https://github.com/nocobase/nocobase/pull/6288)) von @mytharcher
  - Behebt den Spaltentyp `path` der Datei-Collection ([#6294](https://github.com/nocobase/nocobase/pull/6294)) von @mytharcher
  - Upgrade der AWS SDK-Version zur Behebung des MinIO-Upload-Fehlers ([#6253](https://github.com/nocobase/nocobase/pull/6253)) von @mytharcher
- **[Block: Vorlage]** Anmeldung erforderlich beim Zugriff auf öffentliches Formular ([#6258](https://github.com/nocobase/nocobase/pull/6258)) von @gchust
- **[Zugriffskontrolle]** Falsche Datensätze bei Verwendung von n-zu-n-Feldern als Datenbereich in Collection-Berechtigungen ([#6304](https://github.com/nocobase/nocobase/pull/6304)) von @2013xile
- **[Block: Kanban]** Falsche Datenfilterung im Popup-Kanban-Block bei Verwendung von Popup-Datensatzvariablen ([#6290](https://github.com/nocobase/nocobase/pull/6290)) von @katherinehhh
- **[Collection-Feld: Sequenz]** Behebt, dass das Sequenzfeld im schreibgeschützten Modus nicht deaktiviert wird ([#6274](https://github.com/nocobase/nocobase/pull/6274)) von @mytharcher
- **[Workflow: Test-Kit]** Behebt E2E-Testfälle basierend auf neuen Funktionen ([#6296](https://github.com/nocobase/nocobase/pull/6296)) von @mytharcher
- **[Öffentliche Formulare]** Auth-Prüfung im öffentlichen Formular überspringen ([#6284](https://github.com/nocobase/nocobase/pull/6284)) von @chenos
- **[Authentifizierung]** Entfernt unnötigen NavigateIfNotSignIn-Wrapper von AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) von @sheldon66
- **[Workflow]**

  - Behebt Stildetails in der Workflow-Leinwand ([#6240](https://github.com/nocobase/nocobase/pull/6240)) von @mytharcher
  - Unterstützt das Auslösen von Workflows bei Passwortänderung ([#6248](https://github.com/nocobase/nocobase/pull/6248)) von @mytharcher
- **[Workflow: Benutzerdefiniertes Aktionsereignis]**

  - Behebt Build-Fehler von @mytharcher
  - Behebt E2E-Testfälle von @mytharcher
  - Behebt Trigger-Workflow-Initialisierer von @mytharcher
  - Behebt Build-Fehler von @mytharcher
- **[Workflow: Voraktionsereignis]** Behebt, dass die Fehlermeldung vom Antwortnachrichtenknoten nicht angezeigt wird von @mytharcher
- **[Workflow: JavaScript]** Unterstützt das Anfordern von NocoBase-Modulen von @mytharcher
- **[E-Mail-Manager]** Öffentliche mailmessage-Collection und Behebung von Modal-Datenverlust von @jiannx
- **[Dateispeicher: S3(Pro)]**

  - Upgrade der AWS SDK-Version zur Behebung des MinIO-Upload-Fehlers. von @mytharcher
  - Setzt den Standardwert von forcePathStyleForAccess auf virtual von @jiannx
- **[Block: Mehrschritt-Formular]** Sortierfehler von Elementen nach dem Ziehen von @jiannx
- **[Block: Baum]** Fehler beim Klicken auf einen Baumblock-Knoten von @zhangzhonghe
- **[Backup-Manager]** Das Löschsymbol des Dialogs "Aus lokalem Speicher wiederherstellen" funktioniert nicht von @gchust
- **[Workflow: Genehmigung]**

  - Behebt, dass die Migration aufgrund der Versionsnummer nicht ausgeführt wurde von @mytharcher
  - Behebt E2E-Testfälle basierend auf neuen Funktionen von @mytharcher

## Über NocoBase

NocoBase ist eine private, quelloffene, codefreie Plattform, die vollständige Kontrolle und unbegrenzte Skalierbarkeit bietet. Sie befähigt Teams, sich schnell an Veränderungen anzupassen und gleichzeitig die Kosten erheblich zu senken. Vermeiden Sie jahrelange Entwicklung und erhebliche Investitionen, indem Sie NocoBase in Minuten bereitstellen.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Entdecken Sie NocoBase in 3 Minuten!

## 👇 NocoBase herunterladen

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
