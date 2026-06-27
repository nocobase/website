---
title: "NocoBase v2.0.0-alpha.35: Unterstützung für verzögerte Operationen im Flow-Modell"
description: "Versionshinweise zu v2.0.0-alpha.35"
---

### 🚀 Verbesserungen

- **[Flow-Engine]** Unterstützung für verzögerte Ausführung im Flow-Modell ([#7786](https://github.com/nocobase/nocobase/pull/7786)) von @gchust

- **[Workflow: JavaScript]** Behebung einer Sicherheitslücke, die durch die Übergabe von übergeordneten Funktionen in die Ausführungsumgebung verursacht wurde, um zu verhindern, dass diese ausgenutzt werden kann, um Zugriff auf den übergeordneten Ausführungskontext zu erhalten, von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behebung des Problems mit einer leeren nächsten Seite im einfachen Paginierungs-Detailblock ([#7784](https://github.com/nocobase/nocobase/pull/7784)) von @katherinehhh

  - Behebung, dass die Breite von Tabellenaktionen und jsColumn nicht angewendet wurde ([#7777](https://github.com/nocobase/nocobase/pull/7777)) von @katherinehhh

  - Der Datenbereich eines Blocks funktioniert nicht, wenn er durch einen Seitenereignisablauf festgelegt wurde ([#7788](https://github.com/nocobase/nocobase/pull/7788)) von @gchust

- **[Workflow]** Hinzufügen von `workflowId` als Identitätsdaten für Protokolle von Workflows ([#7789](https://github.com/nocobase/nocobase/pull/7789)) von @mytharcher

- **[Workflow: Benutzerdefinierte Variable]** Behebung eines Fehlers, der ausgelöst wurde, wenn keine Konfiguration im Variablenknoten vorhanden war, von @mytharcher

- **[E-Mail-Manager]** Sammlung mailMessages fügt Indizes hinzu, von @jiannx
