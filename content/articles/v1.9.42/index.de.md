---
title: "NocoBase v1.9.42: Fehler behoben, bei dem Benutzer ohne Mobilnummer nicht automatisch registriert werden konnten"
description: "Versionshinweise zu v1.9.42"
---

### 🚀 Verbesserungen

- **[Auth: DingTalk]** Verwende `userid` als Standardschlüssel für die Benutzerzuordnung, während die Kompatibilität mit bestehenden Authentifikatoren, die auf Mobilgeräte angewiesen sind, erhalten bleibt – von @2013xile

### 🐛 Fehlerbehebungen

- **[Workflow: Genehmigung]** Behebung eines Leistungsproblems, das durch ein JSON-Feld beim Laden von Listen (MySQL) verursacht wurde – von @mytharcher

- **[WeCom]** Behebung eines Problems, bei dem Benutzer nicht automatisch registriert werden konnten, wenn die Mobilnummer fehlte – von @2013xile
