---
title: "NocoBase v1.7.0-alpha.2: Unterstützung der Konfiguration auswählbarer Feldoptionen in Verknüpfungsregeln"
description: "Versionshinweise zu v1.7.0-alpha.2"
---

### 🎉 Neue Funktionen

- **[Client]**
  - Kaskadenauswahl-Komponente: Datenbereichseinstellung hinzugefügt ([#6386](https://github.com/nocobase/nocobase/pull/6386)) von @Cyx649312038

  - Tabellenblock unterstützt das Ausblenden der Indexspalte (standardmäßig sichtbar) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) von @katherinehhh

  - Unterstützung für die Konfiguration auswählbarer Feldoptionen in Verknüpfungsregeln ([#6338](https://github.com/nocobase/nocobase/pull/6338)) von @katherinehhh

  - Unterstützung für Datumsbereich (min/max)-Konfiguration für Zeitfelder in Verknüpfungsregeln ([#6356](https://github.com/nocobase/nocobase/pull/6356)) von @katherinehhh

- **[ACL]** Unterstützung für Benutzerrollen-Vereinigung ([#6301](https://github.com/nocobase/nocobase/pull/6301)) von @aaaaaajie

- **[Block: Aktionspanel]** Unterstützung für Zeilenumbruch bei Aktions-Titeln im Aktionspanel ([#6433](https://github.com/nocobase/nocobase/pull/6433)) von @katherinehhh

- **[Plugin-Demo-Plattform]** `skipAuthCheck` der Route "/new" auf true gesetzt. von @sheldon66

- **[WeCom]** Ermöglicht die Festlegung eines benutzerdefinierten Tooltips für den Anmeldebutton von @2013xile

### 🚀 Verbesserungen

- **[Utils]**
  - `md5` in die Utils verschoben ([#6468](https://github.com/nocobase/nocobase/pull/6468)) von @mytharcher

  - Desktop-Seitenanpassung für mobile Geräte ([#6393](https://github.com/nocobase/nocobase/pull/6393)) von @zhangzhonghe

- **[Client]** `skipAuthCheck` zu `router.add` hinzugefügt, um die Weiterleitung zur Anmeldeseite auf öffentlichen Seiten zu verhindern. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) von @sheldon66

- **[Datenvisualisierung]** Veraltetes `x-designer` durch `x-settings` ersetzt ([#6442](https://github.com/nocobase/nocobase/pull/6442)) von @2013xile

### 🐛 Fehlerbehebungen

- **[Client]**
  - Im Baumblock werden die Daten im Datenblock nicht gelöscht, wenn die Auswahl aufgehoben wird ([#6460](https://github.com/nocobase/nocobase/pull/6460)) von @zhangzhonghe

  - Sonderzeichen in Bild-URLs führten dazu, dass Bilder nicht angezeigt wurden ([#6459](https://github.com/nocobase/nocobase/pull/6459)) von @mytharcher

  - Falsche Seitenzahl beim Hinzufügen von Daten nach Änderung der Seitengröße in einer Untertabelle ([#6437](https://github.com/nocobase/nocobase/pull/6437)) von @katherinehhh

  - Inhalt wird in mobilen Browsern nicht vollständig angezeigt ([#6446](https://github.com/nocobase/nocobase/pull/6446)) von @zhangzhonghe

  - Der Logo-Stil ist inkonsistent zum vorherigen ([#6444](https://github.com/nocobase/nocobase/pull/6444)) von @zhangzhonghe

  - Datumsbereichsauswahl schließt das maximale Datum aus ([#6418](https://github.com/nocobase/nocobase/pull/6418)) von @katherinehhh

  - Bei Verwendung des Operators '$anyOf' ist die Verknüpfungsregel ungültig ([#6415](https://github.com/nocobase/nocobase/pull/6415)) von @zhangzhonghe

  - Wertänderungen bei Mehrfachauswahl-Feldern und Optionsverlust beim Löschen von Untertabelleneinträgen ([#6405](https://github.com/nocobase/nocobase/pull/6405)) von @katherinehhh

  - Daten werden in Popup-Fenstern, die über Link-Buttons geöffnet werden, nicht aktualisiert ([#6411](https://github.com/nocobase/nocobase/pull/6411)) von @zhangzhonghe

- **[ACL]** Problem behoben, dass Beziehungsfelder unter der Rollenvereinigung nicht angezeigt werden. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) von @aaaaaajie

- **[Dateimanager]**
  - Löschen von in S3 gespeicherten Dateien nicht möglich. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) von @chenos

  - Einige Probleme des Dateimanagers behoben ([#6436](https://github.com/nocobase/nocobase/pull/6436)) von @mytharcher

- **[Workflow]** Schaltfläche "Workflow-Einstellungen binden" aus der Datenauswahl entfernt ([#6455](https://github.com/nocobase/nocobase/pull/6455)) von @mytharcher

- **[Workflow: Manueller Knoten]**
  - Fehler bei der Migration behoben ([#6445](https://github.com/nocobase/nocobase/pull/6445)) von @mytharcher

  - Versionsgrenze der Migration auf `<1.7.0` geändert ([#6430](https://github.com/nocobase/nocobase/pull/6430)) von @mytharcher

  - Migration behoben, die Tabellenpräfix und Schema-Logik vermisste ([#6425](https://github.com/nocobase/nocobase/pull/6425)) von @mytharcher

- **[Zugriffskontrolle]**
  - Problem behoben, dass der Rollenwechsel nicht wirksam wurde. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) von @aaaaaajie

  - Fehler, wenn der Datenbereich auf "eigene Daten" gesetzt ist und der Tabelle ein Erstellerfeld fehlt. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) von @aaaaaajie

- **[WEB-Client]** Alle Vorkommen von `ctx.state.currentRole` (einzelne Rolle) durch `ctx.state.currentRoles` (unterstützt mehrere Rollen) ersetzt. ([#6427](https://github.com/nocobase/nocobase/pull/6427)) von @aaaaaajie

- **[Aktion: Stapelbearbeitung]** Problem behoben, dass Workflow bei der Stapelbearbeitungs-Übermittlung nicht ausgelöst werden konnte ([#6440](https://github.com/nocobase/nocobase/pull/6440)) von @mytharcher

- **[Datenquellen-Manager]** Wechsel der Datenquelle in der Rollenverwaltung lädt keine entsprechenden Sammlungen ([#6431](https://github.com/nocobase/nocobase/pull/6431)) von @katherinehhh

- **[Datenvisualisierung]** Entfernte Felder erscheinen beim Hinzufügen benutzerdefinierter Filterfelder ([#6450](https://github.com/nocobase/nocobase/pull/6450)) von @2013xile

- **[Benachrichtigung: In-App-Nachricht]**
  - Unterscheidung der Hintergrundfarbe der In-App-Nachrichtenliste von den Nachrichtenkarten zur Verbesserung der visuellen Hierarchie und Lesbarkeit. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) von @sheldon66

  - Vermeidung, dass eine falsche Empfängerkonfiguration alle Benutzer abfragt ([#6424](https://github.com/nocobase/nocobase/pull/6424)) von @sheldon66

- **[Aktion: Benutzerdefinierte Anfrage]** Validierungsfehler der serverseitigen Berechtigung bei benutzerdefinierten Anfragen ([#6438](https://github.com/nocobase/nocobase/pull/6438)) von @katherinehhh

- **[Authentifizierung: API-Schlüssel]** Entfernung der Rollenlisten-Vereinigung im API-Schlüssel-Plugin ([#6432](https://github.com/nocobase/nocobase/pull/6432)) von @aaaaaajie

- **[Block: Vorlage]** Falsches Verhalten von "Als Vorlage speichern" im mobilen Client ([#6420](https://github.com/nocobase/nocobase/pull/6420)) von @gchust

- **[Workflow: Benutzerdefiniertes Aktionsereignis]** `only` im E2E-Testfall entfernt von @mytharcher

- **[Dateispeicher: S3(Pro)]** Problem mit unzugänglichen signierten S3-Pro-URLs behoben von @chenos

- **[Workflow: Genehmigung]**
  - Seitenabsturz vermieden, wenn kein Antragsteller in der Genehmigungsprozess-Tabelle vorhanden ist von @mytharcher

  - Problem behoben, dass Verknüpfungsdaten im Genehmigungsformular nicht angezeigt wurden von @mytharcher

  - Fehler behoben, der beim Genehmigen bei externen Datenquellen auftrat von @mytharcher
