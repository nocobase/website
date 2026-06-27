---
title: "NocoBase v1.6.0 offiziell veröffentlicht"
description: "Cluster-Modus-Bereitstellung, Sicherheitsrichtlinienoptimierung und Migrations-Manager führten zu einer umfassenden Verbesserung von Leistung, Sicherheit und Benutzererfahrung."
---

## Neue Funktionen

### Cluster-Modus

Die Enterprise-Edition unterstützt die Bereitstellung im Cluster-Modus über entsprechende Plugins. Wenn die Anwendung im Cluster-Modus läuft, kann sie mehrere Instanzen und Mehrkernverarbeitung nutzen, um ihre Leistung bei der Bewältigung von gleichzeitigem Zugriff zu verbessern.

![Cluster-Modus Screenshot](https://static-docs.nocobase.com/20241231010814.png)

Referenz: [Bereitstellung - Cluster-Modus](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode)

### Passwortrichtlinie

Für alle Benutzer wird eine Passwortrichtlinie festgelegt, die Regeln für die Passwortkomplexität, Gültigkeitsdauern und Anmeldesicherheitsstrategien sowie die Verwaltung gesperrter Konten umfasst.

![Passwortrichtlinie Screenshot](https://static-docs.nocobase.com/202412281329313.png)

Referenz: [Passwortrichtlinie](https://docs.nocobase.com/handbook/password-policy)

### Token-Richtlinie

Die Token-Sicherheitsrichtlinie ist eine Funktionskonfiguration zum Schutz der Systemsicherheit und zur Verbesserung der Benutzererfahrung. Sie umfasst drei Hauptkonfigurationselemente: "Sitzungsgültigkeit", "Token-Gültigkeitsdauer" und "Limit für die Verlängerung abgelaufener Token".

![Token-Richtlinie Screenshot](https://static-docs.nocobase.com/20250105111821-2025-01-05-11-18-24.png)

Referenz: [Token-Richtlinie](https://docs.nocobase.com/handbook/token-policy)

### IP-Beschränkung

NocoBase ermöglicht Administratoren die Einrichtung einer IP-Whitelist oder -Blacklist für den Benutzerzugriff, um unbefugte externe Netzwerkverbindungen einzuschränken oder bekannte bösartige IP-Adressen zu blockieren und so Sicherheitsrisiken zu reduzieren. Es unterstützt auch die Abfrage von Zugriffsverweigerungsprotokollen zur Identifizierung riskanter IPs.

![IP-Beschränkung Screenshot](https://static-docs.nocobase.com/2025-01-23-10-07-34-20250123100733.png)

Referenz: [IP-Beschränkung](https://docs.nocobase.com/handbook/IP-restriction)

### Variablen und Geheimnisse

Zentrale Konfiguration und Verwaltung von Umgebungsvariablen und Geheimnissen werden für die Speicherung sensibler Daten, die Wiederverwendung von Konfigurationen, die Umgebungsisolierung und mehr bereitgestellt.

![Umgebungsvariablen Screenshot](https://static-docs.nocobase.com/1ee6c3fa09533b19f4d6038f53b06006.png)

Referenz: [Variablen und Geheimnisse](https://docs.nocobase.com/handbook/environment-variables)

### Migrationsmanager

Diese Funktion ermöglicht es Ihnen, Anwendungskonfigurationen von einer Umgebung in eine andere zu migrieren.

![Migrationsmanager Screenshot](https://static-docs.nocobase.com/20250107105005.png)

Referenz:

- [Migrationsmanager](https://docs.nocobase.com/handbook/migration-manager)
- [Release-Management](https://docs.nocobase.com/handbook/release-management)

### Routenverwaltung

- **Menüdaten getrennt und in Routen umbenannt**: Die Menüdaten wurden vom UI-Schema entkoppelt und in "Routen" umbenannt. Sie sind in zwei Tabellen unterteilt, desktopRoutes und mobileRoutes, die den Desktop- bzw. Mobilrouten entsprechen.
- **Frontend-Menüoptimierung mit Einklapp- und Responsive-Unterstützung**: Das Frontend-Menü unterstützt jetzt eine Einklappfunktion und responsives Design für eine verbesserte Benutzererfahrung.

![Routenverwaltung Screenshot](https://static-docs.nocobase.com/20250107115449.png)

Referenz: [Routen](https://docs.nocobase.com/handbook/routes)

### Rollen und Berechtigungen

- Unterstützt die Konfiguration von Aktionsberechtigungen.
  ![Rollen und Berechtigungen Screenshot 1](https://static-docs.nocobase.com/b0a7905d9fd4beaaf21592b1f56fe752.png)
- Unterstützt die Konfiguration von Tab-Berechtigungen.

![Rollen und Berechtigungen Screenshot 2](https://static-docs.nocobase.com/4fd3a5144a2301638b9f24b033d33add.png)

### Benutzerverwaltung

Unterstützt die Anpassung von Benutzerprofilformularen.

![Benutzerverwaltung Screenshot](https://static-docs.nocobase.com/171e5a4c61033afb237c9ae1a3d89000.png)

### Workflow

Ein Eintrag für das Workflow-Aufgabenzentrum wurde zur globalen Symbolleiste hinzugefügt, der Echtzeitbenachrichtigungen für manuelle Knoten und ausstehende Genehmigungsaufgaben bereitstellt.

![Workflow Screenshot](https://static-docs.nocobase.com/855c58536f9fd29ae353dd19b3aff73f.png)

### Workflow: Benutzerdefinierte Aktionsereignisse

Unterstützt das Auslösen benutzerdefinierter Aktionsereignisse sowohl global als auch in Batch-Aktionen.

![Benutzerdefinierte Aktionsereignisse Screenshot](https://static-docs.nocobase.com/106ae1296d180718799eb6d7f423805c.png)

### Workflow: Genehmigung

- Unterstützt die Übertragung von Genehmigungsverantwortlichkeiten und das Hinzufügen zusätzlicher Genehmiger.
  ![Genehmigungsformular Screenshot](https://static-docs.nocobase.com/20241226232013.png)
- Ermöglicht es Genehmigern, den Antragsinhalt bei der Einreichung einer Genehmigung zu ändern.
  ![Genehmigungsänderung Screenshot](https://static-docs.nocobase.com/20241226232124.png)
- Unterstützt die Konfiguration eines Basisinformationsblocks innerhalb der Genehmigungsoberfläche.
- Optimiert den Stil und die Interaktion beim Initiieren von Genehmigungen und Anzeigen ausstehender Aufgaben, wobei diese Verbesserungen auch in das globale Prozessaufgabenzentrum integriert wurden.
  ![Genehmigungs-Aufgabenzentrum Screenshot](https://static-docs.nocobase.com/20250310161203.png)
- Unterscheidet nicht mehr den Ort, an dem die Genehmigung initiiert wird; der Genehmigungszentrumsblock kann alle Genehmigungen sowohl initiieren als auch bearbeiten.

### Workflow: JSON-Variablenzuordnungsknoten

Ein neuer dedizierter Knoten wurde hinzugefügt, um JSON-Daten aus Ergebnissen vorgelagerter Knoten in Variablen abzubilden.

![JSON-Variablenzuordnungsknoten Screenshot](https://static-docs.nocobase.com/20250113173635.png)

Referenz: [JSON-Variablenzuordnung](https://docs.nocobase.com/handbook/workflow/nodes/json-variable-mapping)

### Funktionserweiterungen und Plugin-Beispiele


| Erweiterung                         | Plugin-Beispiel                                                  |
| --------------------------------- | --------------------------------------------------------------- |
| Benutzerdefinierte Vorgabefelder der Datenquelle  | @nocobase-sample/plugin-data-source-main-custom-preset-fields   |
| Kalender-Farbfeld registrieren     | @nocobase-sample/plugin-calendar-register-color-field           |
| Kalender-Titelfeld registrieren     | @nocobase-sample/plugin-calendar-register-title-field           |
| Formel-Ausdrucksfeld registrieren | @nocobase-sample/plugin-field-formula-register-expression-field |
| Kanban-Gruppenfeld registrieren       | @nocobase-sample/plugin-kanban-register-group-field             |
| Filteroperator registrieren          | @nocobase-sample/plugin-register-filter-operator                |
| Dateispeichererweiterung            | @nocobase-sample/plugin-file-storage-demo                       |

## Bahnbrechende Änderungen

### Aktualisierung der Token-Richtlinie

In Version 1.6 wurde eine neue [Token-Richtlinie](https://docs.nocobase.com/handbook/token-policy) eingeführt. Wenn die Authentifizierung fehlschlägt, wird ein 401-Fehler zusammen mit einer Weiterleitung zur Anmeldeseite zurückgegeben. Dieses Verhalten unterscheidet sich von früheren Versionen. Um die Prüfung zu umgehen, beachten Sie die folgenden Beispiele:

Frontend-Anfrage:

```javascript
useRequest({
  url: '/test',
  skipAuth: true,
});

api.request({
  url: '/test',
  skipAuth: true,
});
```

Backend-Middleware:

```javascript
class PluginMiddlewareExampleServer extends plugin {
  middlewareExample = (ctx, next) => {
    if (ctx.path === '/path/to') {
      ctx.skipAuthCheck = true;
    }
    await next();
  };
  async load() {
    this.app.dataSourceManager.afterAddDataSource((dataSource) => {
      dataSource.resourceManager.use(this.middlewareExample, {
        before: 'auth',
      });
    });
  }
}
```

### Unit-Test-Funktion agent.login von synchron zu asynchron geändert

Aufgrund mehrerer asynchroner Operationen, die im Authentifizierungsprozess erforderlich sind, ist die Testfunktion login jetzt asynchron. Beispiel:

```TypeScript
import { createMockServer } from '@nocobase/test';

describe('my db suite', () => {
  let app;
  let agent;

  beforeEach(async () => {
    app = await createMockServer({
      registerActions: true,
      acl: true,
      plugins: ['users', 'auth', 'acl'],
    });
    agent = await app.agent().login(1);
  });

  test('case1', async () => {
    await agent.get('/examples');
    await agent.get('/examples');
    await agent.resource('examples').create();
  });
});
```

### Neue Erweiterungs-API für Einstellungselemente des Benutzercenters

API:

```TypeScript
type UserCenterSettingsItemOptions = SchemaSettingsItemType & { aclSnippet?: string };

class Application {
  addUserCenterSettingsItem(options: UserCenterSettingsItemOptions);
}
```

Beispiel:

```javascript
class PluginUserCenterSettingsExampleClient extends plugin {
  async load() {
    this.app.addUserCenterSettingsItem({
      name: 'nickName',
      Component: NickName,
      sort: 0,
    });
  }
}
```
