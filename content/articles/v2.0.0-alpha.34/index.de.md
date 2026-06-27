---
title: "NocoBase v2.0.0-alpha.34: Fehlerbehebungen"
description: "Versionshinweise zu v2.0.0-alpha.34"
---

### 🚀 Verbesserungen

- **[Datenbank]** Die Option `multipleStatements` zur MariaDB-Verbindungsinstanz hinzugefügt, um die Ausführung mehrerer Anweisungen in einer einzelnen Abfrage zu unterstützen ([#7781](https://github.com/nocobase/nocobase/pull/7781)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Flow-Engine]** Ein Problem behoben, bei dem die Aktionsschaltflächen im Tabellenblock nach dem Seitenwechsel nicht korrekt aktualisiert wurden, sodass ihre Funktionalität nun mit den Daten der aktuellen Seite übereinstimmt. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) von @gchust

- **[Client]**
  - „Maximum call stack size exceeded“ behoben ([#7780](https://github.com/nocobase/nocobase/pull/7780)) von @zhangzhonghe

  - Auslassungspunkte im Titelfeld von Assoziationsfeldern wurden nicht angewendet ([#7778](https://github.com/nocobase/nocobase/pull/7778)) von @katherinehhh

  - Die Verknüpfungsregel der Aktion „Datensatz aktualisieren“ funktioniert nicht ([#7774](https://github.com/nocobase/nocobase/pull/7774)) von @gchust

- **[Datenbank]** Falsche Indexfelderkennung, wenn Feldnamen im snake_case-Stil verwendet werden ([#7776](https://github.com/nocobase/nocobase/pull/7776)) von @2013xile

- **[Mobil (veraltet)]]** Problem behoben, bei dem im Popup für den Standardwert des Datumsfelds auf Mobilgeräten kein Datum ausgewählt werden konnte ([#7783](https://github.com/nocobase/nocobase/pull/7783)) von @zhangzhonghe
