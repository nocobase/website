---
title: "Wöchentliche Updates｜KI-Mitarbeiter unterstützt parallele Verarbeitung mehrerer Gespräche"
description: "Dies ist eine Zusammenfassung der NocoBase-Funktionsupdates und -Verbesserungen vom 7. bis 14. Mai 2026."
---

Fassen Sie die wöchentlichen Produktupdate-Logs zusammen. Die neuesten Veröffentlichungen finden Sie in [unserem Blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase wird derzeit mit drei Branches aktualisiert: `main`, `next` und `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Die derzeit stabilste Version, empfohlen für die Installation;
* `next`: Beta-Version, enthält kommende neue Funktionen und wurde vorläufig getestet. Es kann bekannte oder unbekannte Probleme geben. Sie dient hauptsächlich Testnutzern, um Feedback zu sammeln und Funktionen weiter zu optimieren. Ideal für Testnutzer, die neue Funktionen frühzeitig erleben und Feedback geben möchten;
* `develop`: Alpha-Version, enthält den neuesten Funktionscode, kann unvollständig oder instabil sein, hauptsächlich für die interne Entwicklung und schnelle Iterationen. Geeignet für technisch versierte Nutzer, die an der Spitze des Produkts interessiert sind, aber mit potenziellen Problemen und unvollständigen Funktionen rechnen müssen. Nicht für den Produktionseinsatz geeignet.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.52](https://www.nocobase.com/en/blog/v2.0.52)

*Veröffentlichungsdatum: 13.05.2026*

### 🎉 Neue Funktionen

- **[client]**
  - Aktuelle Benutzersprachenvariable in v2 hinzugefügt ([#9405](https://github.com/nocobase/nocobase/pull/9405)) von @katherinehhh
  - Option zur Begrenzung des Datumsbereichs für Datumsfelder in v2-Formularen hinzugefügt ([#9400](https://github.com/nocobase/nocobase/pull/9400)) von @katherinehhh

### 🚀 Verbesserungen

- **[client]** Bereits zugeordnete Datensätze im Auswahldialog für Assoziationen von 1:n-Tabellenblöcken ausschließen ([#9448](https://github.com/nocobase/nocobase/pull/9448)) von @katherinehhh
- **[Abteilungen]** Stil der Abteilungsliste durch Hinzufügen von Symbolen und Anpassen der Abstände optimiert ([#9435](https://github.com/nocobase/nocobase/pull/9435)) von @katherinehhh
- **[KI: Wissensdatenbank]** Die eindeutige Kennung für eine Wissensdatenbank ist bei der Erstellung konfigurierbar von @cgyrock

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem alte Standardwerteinstellungen nicht entfernt werden konnten. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) von @gchust
  - Problem behoben, bei dem keine Optionen für das Auswahlfeld einer Assoziation ausgewählt werden konnten. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) von @gchust
  - Problem behoben, bei dem der Datenbereich des Zielblocks falsch gesetzt wurde, wenn Zeilendaten in einem Tabellenblock-Ereignisfluss abgewählt wurden. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) von @gchust
  - Doppelte Tabellenanfragen behoben, wenn Filterformulare Standardwerte haben ([#9423](https://github.com/nocobase/nocobase/pull/9423)) von @zhangzhonghe
  - V2-Verknüpfungsregeln behoben, um das Setzen auswählbarer Optionen für Felder zu unterstützen ([#9399](https://github.com/nocobase/nocobase/pull/9399)) von @jiannx
  - Fehler beim Ändern des Titelfeldes eines Assoziationsfeldes im v2-Tabellenblock behoben ([#9451](https://github.com/nocobase/nocobase/pull/9451)) von @katherinehhh
  - Ein zeitweiliges Problem behoben, bei dem Verknüpfungsregeln für Aktionsschaltflächen nicht wirksam wurden. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) von @gchust
  - Untertabellenkomponente für n:m-Assoziationsfelder in v2-Untertabellen ausgeblendet ([#9438](https://github.com/nocobase/nocobase/pull/9438)) von @katherinehhh
- **[server]** fix(file-manager): Erzwingen des Downloads aktiver Inhaltsdateien im lokalen/öffentlichen Speicher ([#9437](https://github.com/nocobase/nocobase/pull/9437)) von @mytharcher
- **[KI-Mitarbeiter]** Problem behoben, bei dem der Ollama-Testflug die Eingabe eines Schlüssels erforderte ([#9450](https://github.com/nocobase/nocobase/pull/9450)) von @cgyrock
- **[Graph-Sammlungsmanager]** Problem behoben, bei dem das automatische Layout der grafischen Oberfläche einen Fehler beim Aktualisierungsaktionsfilter auslöste ([#9421](https://github.com/nocobase/nocobase/pull/9421)) von @katherinehhh
- **[Workflow]** fix: Hilfetext in FlowModel-Workflow-Bindungsdialogen für Operations- und benutzerdefinierte Aktionsereignisse wiederhergestellt ([#9447](https://github.com/nocobase/nocobase/pull/9447)) von @mytharcher
- **[Abteilungen]** Übersetzungskonflikt zwischen den Schaltflächen "Benutzer hinzufügen" und "Abteilung hinzufügen" in den Benutzer- & Berechtigungseinstellungen behoben ([#9456](https://github.com/nocobase/nocobase/pull/9456)) von @katherinehhh
- **[Sammlungsfeld: Markdown(Vditor)]** Problem behoben, bei dem der Tooltip des Markdown-Feldes im horizontalen Formularlayout versteckt war ([#9420](https://github.com/nocobase/nocobase/pull/9420)) von @katherinehhh
- **[WEB-Client]** Filterung des Routentyps bei Verwendung übersetzter Bezeichnungen behoben ([#9425](https://github.com/nocobase/nocobase/pull/9425)) von @zhangzhonghe
- **[Workflow: Genehmigung]**

  - Problem behoben, bei dem das JS-Feld in den Genehmigungsprozesseinstellungen angezeigt wurde von @zhangzhonghe
  - Layout des Genehmigungsformulars auf mobilen Geräten behoben von @zhangzhonghe
  - Doppelter Genehmigungsdatensatzindex bei der Delegierung von Genehmigungsaufgaben behoben. von @mytharcher
- **[Backup-Manager]** Problem behoben, bei dem Backups mit einem Fehler fehlschlugen, wenn Dateien nicht gefunden werden konnten. von @gchust

### [v2.0.51](https://www.nocobase.com/en/blog/v2.0.51)

*Veröffentlichungsdatum: 10.05.2026*

### 🚀 Verbesserungen

- **[Workflow: Genehmigung]** Validierungsverhalten für Pflichtfelder in Genehmigungsformularen behoben von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem JS-Code nach dem Setzen eines JS-Feldes auf schreibgeschützt nicht mehr bearbeitet werden konnte. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) von @gchust
  - Problem behoben, bei dem Feldzuweisungen in Untertabellen in Feldverknüpfungsregeln nicht wirksam wurden. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) von @gchust
  - Problem behoben, bei dem v2-Seitenregisterkarten nach dem Speichern der Einstellungen nicht sofort synchronisiert wurden ([#9396](https://github.com/nocobase/nocobase/pull/9396)) von @zhangzhonghe
  - Problem behoben, bei dem das Popup für Standardwerte von Assoziationsfeldern im Erstellungsformular falsch angezeigt wurde. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) von @gchust
- **[Passwortrichtlinie]** Problem behoben, bei dem sich dauerhaft gesperrte Benutzer nach einem Neustart des Dienstes anmelden konnten von @2013xile
- **[Aktion: Datensätze importieren Pro]** Problem behoben, bei dem die Duplikatsprüfung für Datumsfelder immer fehlschlug von @mytharcher
- **[Workflow: Genehmigung]** Problem behoben, bei dem der Auswahldatensatz-Drawer in der Genehmigungs-Workflow-Konfiguration verdeckt wurde von @zhangzhonghe

### [v2.0.50](https://www.nocobase.com/en/blog/v2.0.50)

*Veröffentlichungsdatum: 09.05.2026*

### 🎉 Neue Funktionen

- **[client]** Aktionen zum Zuordnen und Trennen von Assoziationen zu Assoziationsblöcken hinzugefügt ([#9366](https://github.com/nocobase/nocobase/pull/9366)) von @katherinehhh
- **[Text kopieren]** Option "Kopier-Button anzeigen" für schreibgeschützte Textfelder unterstützt ([#9394](https://github.com/nocobase/nocobase/pull/9394)) von @katherinehhh

### 🚀 Verbesserungen

- **[undefined]** Bereits veröffentlichte Versionen in pk überspringen ([#9374](https://github.com/nocobase/nocobase/pull/9374)) von @Molunerfinn
- **[client]** Zuweisen eines Feldwerts für Sequenzfelder erlauben ([#9397](https://github.com/nocobase/nocobase/pull/9397)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[flow-engine]** Unübersetzte Validierungsmeldungen für Datenbanktabellenfelder in v2-Flow-Formularen behoben ([#9393](https://github.com/nocobase/nocobase/pull/9393)) von @jiannx
- **[client]**

  - `Versteckte (reservierte Werte)` Felder in Formularblöcken behoben, sodass sie im UI-Editor-Modus sichtbar bleiben, und die Werteingabeunterstützung für ihre Zuweisung in der Feldzuweisung wiederhergestellt ([#9373](https://github.com/nocobase/nocobase/pull/9373)) von @jiannx
  - Falsche Download-Dateinamen für AttachmentURL-Felder behoben, wenn Dateimetadaten fehlen. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) von @mytharcher
  - Massen-Workflow-Trigger der v2-Tabelle behoben, sodass die Zeilenauswahl nach dem Umleiten zwischen Registerkarten konsistent bleibt und Zeilen nach der Rückkehr erneut ausgewählt werden können ([#9388](https://github.com/nocobase/nocobase/pull/9388)) von @jiannx
  - Problem behoben, dass Filterformulare nicht eingeklappt werden konnten ([#9386](https://github.com/nocobase/nocobase/pull/9386)) von @zhangzhonghe
  - Problem behoben, bei dem v1-Untertabellen-Verknüpfungsregeln fälschlicherweise die Stile von Pflichtfeldern änderten ([#9364](https://github.com/nocobase/nocobase/pull/9364)) von @zhangzhonghe
  - Falsche Datenwiedergabe im Grid-Kartenblock nach Aktualisierung und Neuladung behoben ([#9351](https://github.com/nocobase/nocobase/pull/9351)) von @katherinehhh
  - Problem behoben, bei dem ein Pflichtoptionsfeld in einer Untertabelle bei der ersten Auswahl auf Mobilgeräten nicht korrekt validiert wurde ([#9352](https://github.com/nocobase/nocobase/pull/9352)) von @katherinehhh
  - Problem behoben, bei dem URL-Abfrageparameter-Variablen nach dem Wechsel zwischen gecachten Seiten ungültig wurden ([#9263](https://github.com/nocobase/nocobase/pull/9263)) von @zhangzhonghe
  - Anpassung des DividerItem an das Theme in v2 behoben ([#9372](https://github.com/nocobase/nocobase/pull/9372)) von @katherinehhh
  - Option zum schnellen Erstellen für das Assoziationsauswahlfeld in v2-Untertabellen ausgeblendet ([#9358](https://github.com/nocobase/nocobase/pull/9358)) von @katherinehhh
  - Problem behoben, dass Verknüpfungsregeln nach Änderung der Formularwerte nicht erneut ausgeführt wurden. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) von @gchust
  - Fehler beim Filtern von Skalar-Feldern mit benutzerdefinierten Mehrfachauswahl-Filtern behoben ([#9387](https://github.com/nocobase/nocobase/pull/9387)) von @zhangzhonghe
- **[server]** Plugin-Paketnamen vor Dateisystemoperationen validieren ([#9367](https://github.com/nocobase/nocobase/pull/9367)) von @chenos
- **[Datenquellen-Manager]** Bearbeiten und Löschen aller Datensätze in benutzerdefinierten Bereichsberechtigungen für externe Datenquellen verhindern ([#9395](https://github.com/nocobase/nocobase/pull/9395)) von @katherinehhh
- **[Datenquelle: Haupt]** Problem behoben, bei dem importierte Datenbanktabellen den falschen präfixierten Tabellennamen verwendeten, wenn ein Tabellenpräfix aktiviert war ([#9403](https://github.com/nocobase/nocobase/pull/9403)) von @2013xile
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Liste der In-App-Nachrichten nach dem Empfang von Echtzeitbenachrichtigungen nicht aktualisiert wurde ([#9409](https://github.com/nocobase/nocobase/pull/9409)) von @mytharcher
- **[Block: Kanban]** Problem behoben, dass einzeiliger Text in einem Langtextfeld des v1-Kanban-Blocks umbrochen wurde ([#9356](https://github.com/nocobase/nocobase/pull/9356)) von @katherinehhh
- **[Sammlungsfeld: Formel]** Problem behoben, dass das Formelfeld in der v2-Untertabelle nicht zur automatischen Berechnung ausgelöst wurde ([#9354](https://github.com/nocobase/nocobase/pull/9354)) von @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.32](https://www.nocobase.com/en/blog/v2.1.0-beta.32)

*Veröffentlichungsdatum: 13.05.2026*

### 🎉 Neue Funktionen

- **[undefined]** Neuen KI-Mitarbeiter, Lokalisierungsingenieur Lina, hinzugefügt, um bei Lokalisierungsübersetzungsaufgaben zu helfen ([#9434](https://github.com/nocobase/nocobase/pull/9434)) von @2013xile
  Referenz: [Lokalisierungsverwaltung](https://docs.nocobase.com/system-management/localization)<br>[Lina: Lokalisierungsingenieur](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Lina und lokales HY-MT1.5-1.8B zum Übersetzen von Lokalisierungseinträgen verwenden](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Dateispeicher: S3(Pro)]** Unterstützt das Hochladen von Dateien über den S3 Pro-Speicher im v2-Dateimanager. von @Molunerfinn

### 🚀 Verbesserungen

- **[build]** Regressionstests hinzugefügt, um sicherzustellen, dass `deleteServerFiles` keine `client`- und `client-v2`-Build-Artefakte über Windows- und POSIX-Pfade entfernt. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) von @Molunerfinn
- **[client]** Bereits zugeordnete Datensätze im Auswahldialog für Assoziationen von 1:n-Tabellenblöcken ausschließen ([#9448](https://github.com/nocobase/nocobase/pull/9448)) von @katherinehhh
- **[Dateimanager]** Drittanbieter-Speicher-Plugins können jetzt ihr eigenes Speichertyp-Formular auf der v2-Dateimanager-Einstellungsseite registrieren. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) von @Molunerfinn
- **[KI: Wissensdatenbank]** Die eindeutige Kennung für eine Wissensdatenbank ist bei der Erstellung konfigurierbar von @cgyrock

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem keine Optionen für das Auswahlfeld einer Assoziation ausgewählt werden konnten. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) von @gchust
  - Problem behoben, bei dem die Systemeinstellungen nach dem Absenden leer erschienen ([#9458](https://github.com/nocobase/nocobase/pull/9458)) von @zhangzhonghe
  - Doppelte Tabellenanfragen behoben, wenn Filterformulare Standardwerte haben ([#9423](https://github.com/nocobase/nocobase/pull/9423)) von @zhangzhonghe
  - Problem behoben, bei dem der Datenbereich des Zielblocks falsch gesetzt wurde, wenn Zeilendaten in einem Tabellenblock-Ereignisfluss abgewählt wurden. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) von @gchust
  - V2-Verknüpfungsregeln behoben, um das Setzen auswählbarer Optionen für Felder zu unterstützen ([#9399](https://github.com/nocobase/nocobase/pull/9399)) von @jiannx
  - Fehler beim Ändern des Titelfeldes eines Assoziationsfeldes im v2-Tabellenblock behoben ([#9451](https://github.com/nocobase/nocobase/pull/9451)) von @katherinehhh
- **[client-v2]**

  - Problem behoben, bei dem die Seite hinter dem Plugin-Aktivierungsdialog leer wurde ([#9455](https://github.com/nocobase/nocobase/pull/9455)) von @zhangzhonghe
  - Abstürze von v1-Adminseiten behoben, wenn sie in Produktions-Builds auf v2-Plugin-Module verweisen. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) von @Molunerfinn
- **[cli-v1]** Fehlgeschlagene Entwicklungsstarts in Apps, die mit create-nocobase-app erstellt wurden, aufgrund der Auflösung des app-dev-Client-Pfads behoben. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) von @Molunerfinn
- **[server]** fix(file-manager): Erzwingen des Downloads aktiver Inhaltsdateien im lokalen/öffentlichen Speicher ([#9437](https://github.com/nocobase/nocobase/pull/9437)) von @mytharcher
- **[Abteilungen]** Übersetzungskonflikt zwischen den Schaltflächen "Benutzer hinzufügen" und "Abteilung hinzufügen" in den Benutzer- & Berechtigungseinstellungen behoben ([#9456](https://github.com/nocobase/nocobase/pull/9456)) von @katherinehhh
- **[Block: Markdown]** Problem behoben, bei dem der v2-Markdown-Block Fehler meldete ([#9440](https://github.com/nocobase/nocobase/pull/9440)) von @zhangzhonghe
- **[Workflow]** fix: Hilfetext in FlowModel-Workflow-Bindungsdialogen für Operations- und benutzerdefinierte Aktionsereignisse wiederhergestellt ([#9447](https://github.com/nocobase/nocobase/pull/9447)) von @mytharcher
- **[KI-Mitarbeiter]** Problem behoben, bei dem der Ollama-Testflug die Eingabe eines Schlüssels erforderte ([#9450](https://github.com/nocobase/nocobase/pull/9450)) von @cgyrock
- **[Workflow: Genehmigung]**

  - Doppelter Genehmigungsdatensatzindex bei der Delegierung von Genehmigungsaufgaben behoben. von @mytharcher
  - Layout des Genehmigungsformulars auf mobilen Geräten behoben von @zhangzhonghe
- **[Backup-Manager]** Problem behoben, bei dem Backups mit einem Fehler fehlschlugen, wenn Dateien nicht gefunden werden konnten. von @gchust

### [v2.1.0-beta.30](https://www.nocobase.com/en/blog/v2.1.0-beta.30)

*Veröffentlichungsdatum: 12.05.2026*

### 🎉 Neue Funktionen

- **[client]**
  - Unterstützung für Verknüpfungsregeln für Seitenmenüpunkte hinzugefügt ([#9304](https://github.com/nocobase/nocobase/pull/9304)) von @zhangzhonghe
  - Aktuelle Benutzersprachenvariable in v2 hinzugefügt ([#9405](https://github.com/nocobase/nocobase/pull/9405)) von @katherinehhh

### 🚀 Verbesserungen

- **[client-v2]** v1-Menüs im v2-Layout herausgefiltert und nur v2-Menüs anzeigen ([#9427](https://github.com/nocobase/nocobase/pull/9427)) von @zhangzhonghe
- **[undefined]** Unterstützung für sitzungsbezogene aktuelle Umgebung in der nb-CLI ([#9415](https://github.com/nocobase/nocobase/pull/9415)) von @chenos
- **[KI-Mitarbeiter]** KI-Mitarbeiter unterstützt die parallele Verarbeitung mehrerer Konversationen ([#9344](https://github.com/nocobase/nocobase/pull/9344)) von @cgyrock
- **[Abteilungen]** Stil der Abteilungsliste durch Hinzufügen von Symbolen und Anpassen der Abstände optimiert ([#9435](https://github.com/nocobase/nocobase/pull/9435)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[build]** Fehler beim Plugin-Build behoben, wenn v1-Client-Code den `/client-v2`-Einstieg eines anderen Plugins importiert. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) von @Molunerfinn
- **[client]**

  - Untertabellenkomponente für n:m-Assoziationsfelder in v2-Untertabellen ausgeblendet ([#9438](https://github.com/nocobase/nocobase/pull/9438)) von @katherinehhh
  - Ein zeitweiliges Problem behoben, bei dem Verknüpfungsregeln für Aktionsschaltflächen nicht wirksam wurden. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) von @gchust
- **[Graph-Sammlungsmanager]** Problem behoben, bei dem das automatische Layout der grafischen Oberfläche einen Fehler beim Aktualisierungsaktionsfilter auslöste ([#9421](https://github.com/nocobase/nocobase/pull/9421)) von @katherinehhh
- **[Block: Baum]** Verbesserte Einstellungen für Baumfilterblöcke und nicht unterstützte Assoziation, Titel-Feld-Fallback und Suchzurücksetzungsverhalten behoben. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) von @jiannx

### [v2.1.0-beta.29](https://www.nocobase.com/en/blog/v2.1.0-beta.29)

*Veröffentlichungsdatum: 10.05.2026*

### 🎉 Neue Funktionen

- **[client]** Option zur Begrenzung des Datumsbereichs für Datumsfelder in v2-Formularen hinzugefügt ([#9400](https://github.com/nocobase/nocobase/pull/9400)) von @katherinehhh
- **[flow-engine]** Migration von `plugin-environment-variables` zu client-v2 mit einer React-basierten Einstellungsseite und einer global registrierten `$env`-Laufzeitvariable; Hinzufügen eines client-v2-Einstiegs zu `plugin-file-manager` mit einer React-basierten Speicherkonfigurationsseite und FlowModel-basiertem Upload-Feld, Upload-Aktion und Vorschau. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem JS-Code nach dem Setzen eines JS-Feldes auf schreibgeschützt nicht mehr bearbeitet werden konnte. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) von @gchust
  - Problem behoben, bei dem v2-Seitenregisterkarten nach dem Speichern der Einstellungen nicht sofort synchronisiert wurden ([#9396](https://github.com/nocobase/nocobase/pull/9396)) von @zhangzhonghe
  - Problem behoben, bei dem Feldzuweisungen in Untertabellen in Feldverknüpfungsregeln nicht wirksam wurden. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) von @gchust
  - Problem behoben, bei dem das Popup für Standardwerte von Assoziationsfeldern im Erstellungsformular falsch angezeigt wurde. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) von @gchust
- **[Sammlungsfeld: Markdown(Vditor)]** Problem behoben, bei dem der Tooltip des Markdown-Feldes im horizontalen Formularlayout versteckt war ([#9420](https://github.com/nocobase/nocobase/pull/9420)) von @katherinehhh
- **[Mobil (veraltet)]** Problem behoben, dass mobile Nachrichten-Popups nicht geschlossen oder gescrollt werden konnten ([#9424](https://github.com/nocobase/nocobase/pull/9424)) von @zhangzhonghe
- **[WEB-Client]** Filterung des Routentyps bei Verwendung übersetzter Bezeichnungen behoben ([#9425](https://github.com/nocobase/nocobase/pull/9425)) von @zhangzhonghe
- **[Workflow: Genehmigung]** Problem behoben, bei dem das JS-Feld in den Genehmigungsprozesseinstellungen angezeigt wurde von @zhangzhonghe

### [v2.1.0-beta.27](https://www.nocobase.com/en/blog/v2.1.0-beta.27)

*Veröffentlichungsdatum: 09.05.2026*

### 🎉 Neue Funktionen

- **[server]** KI-Mitarbeiter können gebündelte Dokumentation mit Bash-Befehlen durchsuchen ([#9269](https://github.com/nocobase/nocobase/pull/9269)) von @2013xile
- **[KI-Mitarbeiter]** Workflow-KI-Mitarbeiterknoten unterstützt das Laden von Dateien aus Anhangs-Feldern. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) von @cgyrock
- **[Text kopieren]** Option "Kopier-Button anzeigen" für schreibgeschützte Textfelder unterstützt ([#9394](https://github.com/nocobase/nocobase/pull/9394)) von @katherinehhh

### 🚀 Verbesserungen

- **[client]** Zuweisen eines Feldwerts für Sequenzfelder erlauben ([#9397](https://github.com/nocobase/nocobase/pull/9397)) von @mytharcher
- **[Block: Kanban]** Verbesserte Konsistenz der Detailfeldabstände in v2 und Anpassung der Karten- und Spaltenabstände im Kanban an die Theme-Einstellungen. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) von @jiannx
- **[KI-Mitarbeiter]** Verbesserte Nathans RunJS-Bearbeitungswerkzeuge und reduzierte Verzögerungen während langer KI-Chat-Konversationen ([#9311](https://github.com/nocobase/nocobase/pull/9311)) von @2013xile
- **[Workflow: Genehmigung]** Validierungsverhalten für Pflichtfelder in Genehmigungsformularen behoben von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[flow-engine]** Unübersetzte Validierungsmeldungen für Datenbanktabellenfelder in v2-Flow-Formularen behoben ([#9393](https://github.com/nocobase/nocobase/pull/9393)) von @jiannx
- **[client]**

  - Problem behoben, dass Filterformulare nicht eingeklappt werden konnten ([#9386](https://github.com/nocobase/nocobase/pull/9386)) von @zhangzhonghe
  - Fehler beim Filtern von Skalar-Feldern mit benutzerdefinierten Mehrfachauswahl-Filtern behoben ([#9387](https://github.com/nocobase/nocobase/pull/9387)) von @zhangzhonghe
  - Falsche Download-Dateinamen für AttachmentURL-Felder behoben, wenn Dateimetadaten fehlen. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) von @mytharcher
  - Anpassung des DividerItem an das Theme in v2 behoben ([#9372](https://github.com/nocobase/nocobase/pull/9372)) von @katherinehhh
  - Problem behoben, bei dem v1-Untertabellen-Verknüpfungsregeln fälschlicherweise die Stile von Pflichtfeldern änderten ([#9364](https://github.com/nocobase/nocobase/pull/9364)) von @zhangzhonghe
  - `Versteckte (reservierte Werte)` Felder in Formularblöcken behoben, sodass sie im UI-Editor-Modus sichtbar bleiben, und die Werteingabeunterstützung für ihre Zuweisung in der Feldzuweisung wiederhergestellt ([#9373](https://github.com/nocobase/nocobase/pull/9373)) von @jiannx
  - Massen-Workflow-Trigger der v2-Tabelle behoben, sodass die Zeilenauswahl nach dem Umleiten zwischen Registerkarten konsistent bleibt und Zeilen nach der Rückkehr erneut ausgewählt werden können ([#9388](https://github.com/nocobase/nocobase/pull/9388)) von @jiannx
- **[client-v2]**

  - Fehler beim Auswählen von Assoziationsfeldern in den Feldeinstellungen behoben. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) von @gchust
  - Problem behoben, bei dem nach dem Start der App kurz eine 404-Seite aufblitzt ([#9365](https://github.com/nocobase/nocobase/pull/9365)) von @zhangzhonghe
- **[server]** Problem behoben, bei dem OAuth-Erkennungsanfragen von Unteranwendungen als Hauptanwendungsanfragen weitergeleitet wurden ([#9383](https://github.com/nocobase/nocobase/pull/9383)) von @2013xile
- **[Datenquelle: Haupt]** Problem behoben, bei dem importierte Datenbanktabellen den falschen präfixierten Tabellennamen verwendeten, wenn ein Tabellenpräfix aktiviert war ([#9403](https://github.com/nocobase/nocobase/pull/9403)) von @2013xile
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Liste der In-App-Nachrichten nach dem Empfang von Echtzeitbenachrichtigungen nicht aktualisiert wurde ([#9409](https://github.com/nocobase/nocobase/pull/9409)) von @mytharcher
- **[Datenquellen-Manager]** Bearbeiten und Löschen aller Datensätze in benutzerdefinierten Bereichsberechtigungen für externe Datenquellen verhindern ([#9395](https://github.com/nocobase/nocobase/pull/9395)) von @katherinehhh
- **[KI: MCP-Server]** Problem behoben, dass Laufzeitabhängigkeiten im MCP-Server-Paket enthalten sind ([#9401](https://github.com/nocobase/nocobase/pull/9401)) von @2013xile
- **[Flow-Engine]** Problem behoben, bei dem von KI generierte Blöcke nicht von Referenzvorlagen zurück in doppelte Vorlagen konvertiert werden konnten. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) von @gchust
- **[Aktion: Datensätze importieren Pro]** Problem behoben, bei dem die Duplikatsprüfung für Datumsfelder immer fehlschlug von @mytharcher
- **[Passwortrichtlinie]** Problem behoben, bei dem sich dauerhaft gesperrte Benutzer nach einem Neustart des Dienstes anmelden konnten von @2013xile
- **[Workflow: Genehmigung]** Problem behoben, bei dem der Auswahldatensatz-Drawer in der Genehmigungs-Workflow-Konfiguration verdeckt wurde von @zhangzhonghe
- **[Backup-Manager]** pg-Schema-Anpassung behoben von @Andrew1989Y

### [v2.1.0-beta.26](https://www.nocobase.com/en/blog/v2.1.0-beta.26)

*Veröffentlichungsdatum: 08.05.2026*

### 🎉 Neue Funktionen

- **[client]** Aktionen zum Zuordnen und Trennen von Assoziationen zu Assoziationsblöcken hinzugefügt ([#9366](https://github.com/nocobase/nocobase/pull/9366)) von @katherinehhh
- **[Datenvisualisierung]** Client-v2-Unterstützung für Block-Plugins hinzugefügt ([#9297](https://github.com/nocobase/nocobase/pull/9297)) von @zhangzhonghe

### 🚀 Verbesserungen

- **[undefined]** Bereits veröffentlichte Versionen in pk überspringen ([#9374](https://github.com/nocobase/nocobase/pull/9374)) von @Molunerfinn

### 🐛 Fehlerbehebungen

- **[client-v2]**

  - Problem behoben, bei dem einige v2-Seiten keine Remote-Plugins laden konnten ([#9369](https://github.com/nocobase/nocobase/pull/9369)) von @zhangzhonghe
  - Probleme mit dem Drag-Platzhalter und der Ablageposition von v2-Seitenblöcken behoben ([#9361](https://github.com/nocobase/nocobase/pull/9361)) von @zhangzhonghe
- **[client]**

  - Problem behoben, dass Verknüpfungsregeln nach Änderung der Formularwerte nicht erneut ausgeführt wurden. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) von @gchust
  - Problem behoben, bei dem ein Pflichtoptionsfeld in einer Untertabelle bei der ersten Auswahl auf Mobilgeräten nicht korrekt validiert wurde ([#9352](https://github.com/nocobase/nocobase/pull/9352)) von @katherinehhh
  - Option zum schnellen Erstellen für das Assoziationsauswahlfeld in v2-Untertabellen ausgeblendet ([#9358](https://github.com/nocobase/nocobase/pull/9358)) von @katherinehhh
  - Problem behoben, bei dem URL-Abfrageparameter-Variablen nach dem Wechsel zwischen gecachten Seiten ungültig wurden ([#9263](https://github.com/nocobase/nocobase/pull/9263)) von @zhangzhonghe
  - Falsche Datenwiedergabe im Grid-Kartenblock nach Aktualisierung und Neuladung behoben ([#9351](https://github.com/nocobase/nocobase/pull/9351)) von @katherinehhh
- **[server]** Plugin-Paketnamen vor Dateisystemoperationen validieren ([#9367](https://github.com/nocobase/nocobase/pull/9367)) von @chenos
- **[undefined]** Tote Links in übersetzter Dokumentation behoben und tote-Link-Erkennung standardmäßig im Docs-Build aktiviert. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) von @Molunerfinn
- **[KI-Mitarbeiter]**

  - Fehler beim Lesen von Assoziationsfeld-Anhängen durch den KI-Mitarbeiterknoten im Workflow behoben ([#9377](https://github.com/nocobase/nocobase/pull/9377)) von @cgyrock
  - Problem behoben, dass der Workflow-KI-Mitarbeiterknoten nach der Werkzeugzuweisung nicht ordnungsgemäß endete. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) von @cgyrock
- **[Block: Kanban]**

  - Verbessertes kompaktes Styling der Kanban-Karten und optimierte Vorlagenauswahl für das Schnellerstellungs-Popup. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) von @jiannx
  - Problem behoben, dass einzeiliger Text in einem Langtextfeld des v1-Kanban-Blocks umbrochen wurde ([#9356](https://github.com/nocobase/nocobase/pull/9356)) von @katherinehhh
  - Problem behoben, dass zugeordnete Kanban-Blöcke unaufgelöste Laufzeit-Ressourcenparameter in Popup- oder sekundären Seitenkontexten verwendeten. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) von @jiannx
- **[Aktion: Benutzerdefinierte Anfrage]** Upgrade von koa auf v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) von @chenos
- **[Sammlungsfeld: Formel]** Problem behoben, dass das Formelfeld in der v2-Untertabelle nicht zur automatischen Berechnung ausgelöst wurde ([#9354](https://github.com/nocobase/nocobase/pull/9354)) von @katherinehhh
- **[E-Mail-Manager]** Anzeige des Titels der Mail-Identitäten behoben von @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.34](https://www.nocobase.com/en/blog/v2.1.0-alpha.34)

*Veröffentlichungsdatum: 12.05.2026*

### 🚀 Verbesserungen

- **[KI-Mitarbeiter]** KI-Mitarbeiter unterstützt die parallele Verarbeitung mehrerer Konversationen ([#9344](https://github.com/nocobase/nocobase/pull/9344)) von @cgyrock

### [v2.1.0-alpha.33](https://www.nocobase.com/en/blog/v2.1.0-alpha.33)

*Veröffentlichungsdatum: 11.05.2026*

### 🎉 Neue Funktionen

- **[client]**
  - Aktuelle Benutzersprachenvariable in v2 hinzugefügt ([#9405](https://github.com/nocobase/nocobase/pull/9405)) von @katherinehhh
  - Unterstützung für Verknüpfungsregeln für Seitenmenüpunkte hinzugefügt ([#9304](https://github.com/nocobase/nocobase/pull/9304)) von @zhangzhonghe

### 🚀 Verbesserungen

- **[client-v2]** v1-Menüs im v2-Layout herausgefiltert und nur v2-Menüs anzeigen ([#9427](https://github.com/nocobase/nocobase/pull/9427)) von @zhangzhonghe
- **[Abteilungen]** Stil der Abteilungsliste durch Hinzufügen von Symbolen und Anpassen der Abstände optimiert ([#9435](https://github.com/nocobase/nocobase/pull/9435)) von @katherinehhh

### 🐛 Fehlerbehebungen

- **[build]** Fehler beim Plugin-Build behoben, wenn v1-Client-Code den `/client-v2`-Einstieg eines anderen Plugins importiert. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) von @Molunerfinn
- **[client]**

  - Ein zeitweiliges Problem behoben, bei dem Verknüpfungsregeln für Aktionsschaltflächen nicht wirksam wurden. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) von @gchust
  - Untertabellenkomponente für n:m-Assoziationsfelder in v2-Untertabellen ausgeblendet ([#9438](https://github.com/nocobase/nocobase/pull/9438)) von @katherinehhh
- **[Graph-Sammlungsmanager]** Problem behoben, bei dem das automatische Layout der grafischen Oberfläche einen Fehler beim Aktualisierungsaktionsfilter auslöste ([#9421](https://github.com/nocobase/nocobase/pull/9421)) von @katherinehhh
- **[Block: Baum]** Verbesserte Einstellungen für Baumfilterblöcke und nicht unterstützte Assoziation, Titel-Feld-Fallback und Suchzurücksetzungsverhalten behoben. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) von @jiannx

### [v2.1.0-alpha.32](https://www.nocobase.com/en/blog/v2.1.0-alpha.32)

*Veröffentlichungsdatum: 10.05.2026*

### 🎉 Neue Funktionen

- **[client]** Option zur Begrenzung des Datumsbereichs für Datumsfelder in v2-Formularen hinzugefügt ([#9400](https://github.com/nocobase/nocobase/pull/9400)) von @katherinehhh
- **[flow-engine]** Migration von `plugin-environment-variables` zu client-v2 mit einer React-basierten Einstellungsseite und einer global registrierten `$env`-Laufzeitvariable; Hinzufügen eines client-v2-Einstiegs zu `plugin-file-manager` mit einer React-basierten Speicherkonfigurationsseite und FlowModel-basiertem Upload-Feld, Upload-Aktion und Vorschau. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) von @Molunerfinn

### 🚀 Verbesserungen

- **[undefined]** Unterstützung für sitzungsbezogene aktuelle Umgebung in der nb-CLI ([#9415](https://github.com/nocobase/nocobase/pull/9415)) von @chenos

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, bei dem das Popup für Standardwerte von Assoziationsfeldern im Erstellungsformular falsch angezeigt wurde. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) von @gchust
  - Problem behoben, bei dem JS-Code nach dem Setzen eines JS-Feldes auf schreibgeschützt nicht mehr bearbeitet werden konnte. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) von @gchust
  - Problem behoben, bei dem v2-Seitenregisterkarten nach dem Speichern der Einstellungen nicht sofort synchronisiert wurden ([#9396](https://github.com/nocobase/nocobase/pull/9396)) von @zhangzhonghe
  - Problem behoben, bei dem Feldzuweisungen in Untertabellen in Feldverknüpfungsregeln nicht wirksam wurden. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) von @gchust
- **[Sammlungsfeld: Markdown(Vditor)]** Problem behoben, bei dem der Tooltip des Markdown-Feldes im horizontalen Formularlayout versteckt war ([#9420](https://github.com/nocobase/nocobase/pull/9420)) von @katherinehhh
- **[WEB-Client]** Filterung des Routentyps bei Verwendung übersetzter Bezeichnungen behoben ([#9425](https://github.com/nocobase/nocobase/pull/9425)) von @zhangzhonghe
- **[Mobil (veraltet)]** Problem behoben, dass mobile Nachrichten-Popups nicht geschlossen oder gescrollt werden konnten ([#9424](https://github.com/nocobase/nocobase/pull/9424)) von @zhangzhonghe
- **[Workflow: Genehmigung]** Problem behoben, bei dem das JS-Feld in den Genehmigungsprozesseinstellungen angezeigt wurde von @zhangzhonghe

### [v2.1.0-alpha.31](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Veröffentlichungsdatum: 09.05.2026*

### 🎉 Neue Funktionen

- **[client]** Aktionen zum Zuordnen und Trennen von Assoziationen zu Assoziationsblöcken hinzugefügt ([#9366](https://github.com/nocobase/nocobase/pull/9366)) von @katherinehhh
- **[Text kopieren]** Option "Kopier-Button anzeigen" für schreibgeschützte Textfelder unterstützt ([#9394](https://github.com/nocobase/nocobase/pull/9394)) von @katherinehhh
- **[KI-Mitarbeiter]** Workflow-KI-Mitarbeiterknoten unterstützt das Laden von Dateien aus Anhangs-Feldern. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) von @cgyrock
- **[Datenvisualisierung]** Client-v2-Unterstützung für Block-Plugins hinzugefügt ([#9297](https://github.com/nocobase/nocobase/pull/9297)) von @zhangzhonghe

### 🚀 Verbesserungen

- **[client]** Zuweisen eines Feldwerts für Sequenzfelder erlauben ([#9397](https://github.com/nocobase/nocobase/pull/9397)) von @mytharcher
- **[undefined]** Bereits veröffentlichte Versionen in pk überspringen ([#9374](https://github.com/nocobase/nocobase/pull/9374)) von @Molunerfinn
- **[Block: Kanban]** Verbesserte Konsistenz der Detailfeldabstände in v2 und Anpassung der Karten- und Spaltenabstände im Kanban an die Theme-Einstellungen. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) von @jiannx
- **[Workflow: Genehmigung]** Validierungsverhalten für Pflichtfelder in Genehmigungsformularen behoben von @zhangzhonghe

### 🐛 Fehlerbehebungen

- **[client]**

  - Problem behoben, dass Filterformulare nicht eingeklappt werden konnten ([#9386](https://github.com/nocobase/nocobase/pull/9386)) von @zhangzhonghe
  - Massen-Workflow-Trigger der v2-Tabelle behoben, sodass die Zeilenauswahl nach dem Umleiten zwischen Registerkarten konsistent bleibt und Zeilen nach der Rückkehr erneut ausgewählt werden können ([#9388](https://github.com/nocobase/nocobase/pull/9388)) von @jiannx
  - `Versteckte (reservierte Werte)` Felder in Formularblöcken behoben, sodass sie im UI-Editor-Modus sichtbar bleiben, und die Werteingabeunterstützung für ihre Zuweisung in der Feldzuweisung wiederhergestellt ([#9373](https://github.com/nocobase/nocobase/pull/9373)) von @jiannx
  - Anpassung des DividerItem an das Theme in v2 behoben ([#9372](https://github.com/nocobase/nocobase/pull/9372)) von @katherinehhh
  - Falsche Download-Dateinamen für AttachmentURL-Felder behoben, wenn Dateimetadaten fehlen. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) von @mytharcher
  - Fehler beim Filtern von Skalar-Feldern mit benutzerdefinierten Mehrfachauswahl-Filtern behoben ([#9387](https://github.com/nocobase/nocobase/pull/9387)) von @zhangzhonghe
  - Problem behoben, dass Verknüpfungsregeln nach Änderung der Formularwerte nicht erneut ausgeführt wurden. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) von @gchust
  - Problem behoben, bei dem v1-Untertabellen-Verknüpfungsregeln fälschlicherweise die Stile von Pflichtfeldern änderten ([#9364](https://github.com/nocobase/nocobase/pull/9364)) von @zhangzhonghe
  - Falsche Datenwiedergabe im Grid-Kartenblock nach Aktualisierung und Neuladung behoben ([#9351](https://github.com/nocobase/nocobase/pull/9351)) von @katherinehhh
  - Problem behoben, bei dem ein Pflichtoptionsfeld in einer Untertabelle bei der ersten Auswahl auf Mobilgeräten nicht korrekt validiert wurde ([#9352](https://github.com/nocobase/nocobase/pull/9352)) von @katherinehhh
  - Option zum schnellen Erstellen für das Assoziationsauswahlfeld in v2-Untertabellen ausgeblendet ([#9358](https://github.com/nocobase/nocobase/pull/9358)) von @katherinehhh
  - Problem behoben, bei dem URL-Abfrageparameter-Variablen nach dem Wechsel zwischen gecachten Seiten ungültig wurden ([#9263](https://github.com/nocobase/nocobase/pull/9263)) von @zhangzhonghe
- **[flow-engine]** Unübersetzte Validierungsmeldungen für Datenbanktabellenfelder in v2-Flow-Formularen behoben ([#9393](https://github.com/nocobase/nocobase/pull/9393)) von @jiannx
- **[server]**

  - Problem behoben, bei dem OAuth-Erkennungsanfragen von Unteranwendungen als Hauptanwendungsanfragen weitergeleitet wurden ([#9383](https://github.com/nocobase/nocobase/pull/9383)) von @2013xile
  - Plugin-Paketnamen vor Dateisystemoperationen validieren ([#9367](https://github.com/nocobase/nocobase/pull/9367)) von @chenos
- **[client-v2]**

  - Fehler beim Auswählen von Assoziationsfeldern in den Feldeinstellungen behoben. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) von @gchust
  - Problem behoben, bei dem nach dem Start der App kurz eine 404-Seite aufblitzt ([#9365](https://github.com/nocobase/nocobase/pull/9365)) von @zhangzhonghe
  - Probleme mit dem Drag-Platzhalter und der Ablageposition von v2-Seitenblöcken behoben ([#9361](https://github.com/nocobase/nocobase/pull/9361)) von @zhangzhonghe
  - Problem behoben, bei dem einige v2-Seiten keine Remote-Plugins laden konnten ([#9369](https://github.com/nocobase/nocobase/pull/9369)) von @zhangzhonghe
- **[undefined]** Tote Links in übersetzter Dokumentation behoben und tote-Link-Erkennung standardmäßig im Docs-Build aktiviert. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) von @Molunerfinn
- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem die Liste der In-App-Nachrichten nach dem Empfang von Echtzeitbenachrichtigungen nicht aktualisiert wurde ([#9409](https://github.com/nocobase/nocobase/pull/9409)) von @mytharcher
- **[Datenquellen-Manager]** Bearbeiten und Löschen aller Datensätze in benutzerdefinierten Bereichsberechtigungen für externe Datenquellen verhindern ([#9395](https://github.com/nocobase/nocobase/pull/9395)) von @katherinehhh
- **[KI: MCP-Server]** Problem behoben, dass Laufzeitabhängigkeiten im MCP-Server-Paket enthalten sind ([#9401](https://github.com/nocobase/nocobase/pull/9401)) von @2013xile
- **[Datenquelle: Haupt]** Problem behoben, bei dem importierte Datenbanktabellen den falschen präfixierten Tabellennamen verwendeten, wenn ein Tabellenpräfix aktiviert war ([#9403](https://github.com/nocobase/nocobase/pull/9403)) von @2013xile
- **[Flow-Engine]** Problem behoben, bei dem von KI generierte Blöcke nicht von Referenzvorlagen zurück in doppelte Vorlagen konvertiert werden konnten. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) von @gchust
- **[KI-Mitarbeiter]**

  - Fehler beim Lesen von Assoziationsfeld-Anhängen durch den KI-Mitarbeiterknoten im Workflow behoben ([#9377](https://github.com/nocobase/nocobase/pull/9377)) von @cgyrock
  - Problem behoben, dass der Workflow-KI-Mitarbeiterknoten nach der Werkzeugzuweisung nicht ordnungsgemäß endete. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) von @cgyrock
- **[Aktion: Benutzerdefinierte Anfrage]** Upgrade von koa auf v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) von @chenos
- **[Block: Kanban]**

  - Verbessertes kompaktes Styling der Kanban-Karten und optimierte Vorlagenauswahl für das Schnellerstellungs-Popup. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) von @jiannx
  - Problem behoben, dass einzeiliger Text in einem Langtextfeld des v1-Kanban-Blocks umbrochen wurde ([#9356](https://github.com/nocobase/nocobase/pull/9356)) von @katherinehhh
- **[Sammlungsfeld: Formel]** Problem behoben, dass das Formelfeld in der v2-Untertabelle nicht zur automatischen Berechnung ausgelöst wurde ([#9354](https://github.com/nocobase/nocobase/pull/9354)) von @katherinehhh
- **[Aktion: Datensätze importieren Pro]** Problem behoben, bei dem die Duplikatsprüfung für Datumsfelder immer fehlschlug von @mytharcher
- **[Passwortrichtlinie]** Problem behoben, bei dem sich dauerhaft gesperrte Benutzer nach einem Neustart des Dienstes anmelden konnten von @2013xile
- **[Workflow: Genehmigung]** Problem behoben, bei dem der Auswahldatensatz-Drawer in der Genehmigungs-Workflow-Konfiguration verdeckt wurde von @zhangzhonghe
- **[E-Mail-Manager]** Anzeige des Titels der Mail-Identitäten behoben von @jiannx
- **[Backup-Manager]** pg-Schema-Anpassung behoben von @Andrew1989Y
