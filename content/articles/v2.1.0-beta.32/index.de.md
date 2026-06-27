---
title: "NocoBase v2.1.0-beta.32: Neuer KI-Mitarbeiter, Lokalisierungsingenieurin Lina, zur Unterstützung bei Lokalisierungsübersetzungsaufgaben"
description: "Versionshinweise zu v2.1.0-beta.32"
---

### 🎉 Neue Funktionen

- **[undefined]** Neuer KI-Mitarbeiter, Lokalisierungsingenieurin Lina, zur Unterstützung bei Lokalisierungsübersetzungsaufgaben hinzugefügt ([#9434](https://github.com/nocobase/nocobase/pull/9434)) von @2013xile
Referenz: [Lokalisierungsverwaltung](https://docs.nocobase.com/system-management/localization)<br>[Lina: Lokalisierungsingenieurin](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Lina und lokales HY-MT1.5-1.8B zur Übersetzung von Lokalisierungseinträgen verwenden](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Dateispeicher: S3(Pro)]** Unterstützung für das Hochladen von Dateien über den S3 Pro-Speicher im v2-Dateimanager. von @Molunerfinn

### 🚀 Verbesserungen

- **[build]** Regressionstests hinzugefügt, um sicherzustellen, dass `deleteServerFiles` keine `client`- und `client-v2`-Build-Artefakte unter Windows- und POSIX-Pfaden entfernt. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) von @Molunerfinn

- **[client]** Bereits verknüpfte Datensätze im Assoziationsauswahldialog von Eins-zu-Viele-Tabellenblöcken ausschließen ([#9448](https://github.com/nocobase/nocobase/pull/9448)) von @katherinehhh

- **[Dateimanager]** Drittanbieter-Speicher-Plugins können jetzt ihr eigenes Speichertyp-Formular auf der Einstellungsseite des v2-Dateimanagers registrieren. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) von @Molunerfinn

- **[KI: Wissensdatenbank]** Die eindeutige Kennung für eine Wissensdatenbank kann zum Zeitpunkt der Erstellung konfiguriert werden von @cgyrock

### 🐛 Fehlerbehebungen

- **[client]**
  - Problem behoben, bei dem Optionen für das Auswahlfeld einer Assoziation nicht ausgewählt werden konnten. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) von @gchust

  - Problem behoben, bei dem Systemeinstellungen nach dem Absenden leer erschienen ([#9458](https://github.com/nocobase/nocobase/pull/9458)) von @zhangzhonghe

  - Doppelte Tabellenanfragen behoben, wenn Filterformulare Standardwerte haben ([#9423](https://github.com/nocobase/nocobase/pull/9423)) von @zhangzhonghe

  - Problem behoben, bei dem der Datenbereich des Zielblocks falsch gesetzt wurde, wenn Zeilendaten in einem Tabellenblock-Ereignisablauf abgewählt wurden. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) von @gchust

  - V2-Verknüpfungsregeln korrigiert, um die Einstellung auswählbarer Optionen für Felder zu unterstützen ([#9399](https://github.com/nocobase/nocobase/pull/9399)) von @jiannx

  - Fehler beim Ändern des Titelfeldes eines Assoziationsfeldes im v2-Tabellenblock behoben ([#9451](https://github.com/nocobase/nocobase/pull/9451)) von @katherinehhh

- **[client-v2]**
  - Problem behoben, bei dem die Seite hinter dem Plugin-Aktivierungsdialog leer wurde ([#9455](https://github.com/nocobase/nocobase/pull/9455)) von @zhangzhonghe

  - Abstürze von v1-Adminseiten behoben, wenn sie in Produktions-Builds auf v2-Plugin-Module verweisen. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) von @Molunerfinn

- **[cli-v1]** Fehler beim Entwicklungsstart in Apps behoben, die mit create-nocobase-app erstellt wurden, verursacht durch die Auflösung des app-dev-Client-Pfads. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) von @Molunerfinn

- **[server]** fix(file-manager): Erzwingen des Downloads aktiver Inhaltsdateien im lokalen/öffentlichen Speicher ([#9437](https://github.com/nocobase/nocobase/pull/9437)) von @mytharcher

- **[Abteilungen]** Übersetzungskonflikt zwischen den Schaltflächen "Benutzer hinzufügen" und "Abteilung hinzufügen" in den Einstellungen für Benutzer & Berechtigungen behoben ([#9456](https://github.com/nocobase/nocobase/pull/9456)) von @katherinehhh

- **[Block: Markdown]** Problem mit Fehlermeldungen im v2-Markdown-Block behoben ([#9440](https://github.com/nocobase/nocobase/pull/9440)) von @zhangzhonghe

- **[Workflow]** fix: Hilfetext in FlowModel-Workflow-Bindungsdialogen für Operations- und benutzerdefinierte Aktionsereignisse wiederhergestellt ([#9447](https://github.com/nocobase/nocobase/pull/9447)) von @mytharcher

- **[KI-Mitarbeiter]** Problem behoben, bei dem der Ollama-Testflug die Eingabe eines Schlüssels erforderte ([#9450](https://github.com/nocobase/nocobase/pull/9450)) von @cgyrock

- **[Workflow: Genehmigung]**
  - Doppelter Genehmigungsdatensatzindex bei der Delegierung von Genehmigungsaufgaben behoben. von @mytharcher

  - Layout des Genehmigungsformulars auf mobilen Geräten korrigiert von @zhangzhonghe

- **[Backup-Manager]** Problem behoben, bei dem Backups mit einem Fehler fehlschlugen, wenn Dateien nicht gefunden werden konnten. von @gchust
