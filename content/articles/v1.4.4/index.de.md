---
title: "NocoBase v1.4.4: Fehlerbehebungen"
description: "Versionshinweise zu v1.4.4"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem Felder aus externen Datenquellen in Tabellenblöcken nicht angezeigt wurden ([#5825](https://github.com/nocobase/nocobase/pull/5825)) von @katherinehhh

  - Anzeigeproblem für vererbte Felder in der Formularkonfiguration behoben ([#5822](https://github.com/nocobase/nocobase/pull/5822)) von @katherinehhh

  - Problem behoben, dass vererbte Felder nicht in der Feldliste erschienen und nicht überschrieben werden konnten ([#5800](https://github.com/nocobase/nocobase/pull/5800)) von @katherinehhh

- **[Datenvisualisierung]** Problem beim Formatieren zeitzonenbewusster Datumsfelder in MySQL behoben ([#5829](https://github.com/nocobase/nocobase/pull/5829)) von @2013xile

- **[Workflow]**
  - Problem mit Transaktionen über Datenquellen hinweg behoben, das zu Fehlern bei Sammlungsereignissen führte ([#5818](https://github.com/nocobase/nocobase/pull/5818)) von @mytharcher

  - Problem behoben, bei dem der Datumstyp in der datumsfeldbasierten Zeitplankonfiguration fehlte ([#5816](https://github.com/nocobase/nocobase/pull/5816)) von @mytharcher

- **[Sammlungsfeld: Viele-zu-viele (Array)]** Problem behoben, bei dem das Aktualisieren von m2m-Arrayfeldern in einer einzelnen Beziehungssammlung nicht wirksam wurde ([#5820](https://github.com/nocobase/nocobase/pull/5820)) von @2013xile

- **[Kalender]**
  - Fehler beim Klicken auf ein leeres Datum im Kalender behoben ([#5803](https://github.com/nocobase/nocobase/pull/5803)) von @katherinehhh

  - Problem behoben, bei dem das Schließen eines über den 'Kalenderblock' geöffneten Popups dazu führte, dass alle Popups geschlossen wurden ([#5793](https://github.com/nocobase/nocobase/pull/5793)) von @zhangzhonghe

- **[Öffentliche Formulare]** Falschen QR-Code-Scanpfad im öffentlichen Formular einer Unteranwendung behoben ([#5799](https://github.com/nocobase/nocobase/pull/5799)) von @katherinehhh
