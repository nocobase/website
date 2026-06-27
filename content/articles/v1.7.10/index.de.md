---
title: "NocoBase v1.7.10: Fehlerbehebungen"
description: "Versionshinweise zu v1.7.10"
---

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung des Problems, dass Verknüpfungsregeln eine Endlosschleife verursachen ([#7050](https://github.com/nocobase/nocobase/pull/7050)) von @zhangzhonghe

  - Behebung: Verwendung von optionaler Verkettung, um Anfragen im APIClient sicher abzulehnen, wenn der Handler möglicherweise undefiniert ist ([#7054](https://github.com/nocobase/nocobase/pull/7054)) von @sheldon66

  - Automatisches Schließen des Problems beim Konfigurieren von Feldern im sekundären Popup-Formular ([#7052](https://github.com/nocobase/nocobase/pull/7052)) von @katherinehhh

- **[Datenvisualisierung]** Falsche Anzeige des Datumsfelds "zwischen" im Diagrammfilter ([#7051](https://github.com/nocobase/nocobase/pull/7051)) von @katherinehhh

- **[API-Dokumentation]** Nicht offizielle NocoBase-Plugins können die API-Dokumentation nicht anzeigen ([#7045](https://github.com/nocobase/nocobase/pull/7045)) von @chenzhizdt

- **[Aktion: Datensätze importieren]** Behobener xlsx-Import, um Textbereichsfelder auf die Annahme von nicht-String-formatierten Daten zu beschränken ([#7049](https://github.com/nocobase/nocobase/pull/7049)) von @aaaaaajie
