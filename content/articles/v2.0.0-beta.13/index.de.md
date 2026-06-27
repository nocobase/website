---
title: "NocoBase v2.0.0-beta.13: Unterstützung für die Konfiguration einer CORS-Origin-Whitelist"
description: "Versionshinweise zu v2.0.0-beta.13"
---

### 🚀 Verbesserungen

- **[Server]** Unterstützung zur Konfiguration einer CORS-Origin-Whitelist ([#8454](https://github.com/nocobase/nocobase/pull/8454)) von @2013xile

- **[Aktion: Datensätze exportieren]** Verbesserung des Datenbereichs der Exportaktion basierend auf ausgewählten Datensätzen oder Ressourcenfiltern ([#8442](https://github.com/nocobase/nocobase/pull/8442)) von @katherinehhh

- **[Aktion: Datensätze exportieren Pro]** Verbesserung des Datenbereichs der Exportaktion basierend auf ausgewählten Datensätzen oder Ressourcenfiltern von @katherinehhh

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung des Problems, dass das Popup "Benutzerdefinierte Variablen" verdeckt wird ([#8463](https://github.com/nocobase/nocobase/pull/8463)) von @zhangzhonghe

  - Behebung eines Problems beim Bearbeiten einer Sammlung in der grafischen Oberfläche ([#8451](https://github.com/nocobase/nocobase/pull/8451)) von @katherinehhh

  - Behebung eines Problems, bei dem die Sortiereinstellungen für Sammlungsfeldgruppen nicht wirkten. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) von @katherinehhh

  - Behebung des Problems, dass die Höhe des Tastenkombinations-Modals die Viewport-Höhe überschreitet ([#8437](https://github.com/nocobase/nocobase/pull/8437)) von @zhangzhonghe

  - Behebung des Problems, dass Verknüpfungsregeln für Tabellenzeilen-Schaltflächen den Zustand von Schaltflächen in Popup-Formularen beeinflussen ([#8434](https://github.com/nocobase/nocobase/pull/8434)) von @zhangzhonghe

  - Behebung eines Problems, bei dem der Zustand der Tabellenaktionsspalte beim Seitenwechsel beeinträchtigt wurde. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) von @gchust

  - Behebung des Problems, dass die Schaltfläche "Spalteneinstellungen" der Tabelle nicht funktioniert ([#8441](https://github.com/nocobase/nocobase/pull/8441)) von @zhangzhonghe

  - Behebung eines Problems, bei dem das Auswahl-Popup des Dateiverknüpfungsfelds einen falschen Z-Index hatte und die Popup-Konfiguration nicht korrekt gespeichert werden konnte. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) von @gchust

- **[Flow-Engine]**
  - Behebung eines Problems, bei dem Variablen in RunJS-Codeparametern vor der Ausführung aufgelöst wurden. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) von @gchust

  - Behebung eines Problems, bei dem Popup-Variablen im Schnellerstellungs-Popup des Datenauswahlfelds nicht ausgewählt werden konnten. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) von @gchust

  - Behebung eines Problems, bei dem durch wiederholtes Klicken auf das Konfigurationsmenü mehrere Konfigurations-Popups geöffnet werden konnten. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) von @gchust

- **[Mobil (veraltet)]** Veraltetes Mobil-Plugin (ersetzt durch das ui-layout-Plugin ab Version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) von @chenos

- **[Flow-Engine]** Behebung eines Problems, bei dem Variablen mit Bindestrichen nicht korrekt analysiert werden konnten. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) von @gchust

- **[E-Mail-Manager]** Behebung des Problems, dass das E-Mail-Konfigurations-Popup verdeckt wird von @zhangzhonghe
