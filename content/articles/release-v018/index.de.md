---
title: "NocoBase 0.18: Aufbau eines soliden Testsystems"
description: "NocoBase 0.18 verbessert die Robustheit mit umfassenden E2E-Tests, einem optimierten Auth-Plugin und modularer Zerlegung in Plugins, was Flexibilität und Leistung steigert."
---

## Neue Funktionen

Um die Robustheit von NocoBase zu erhöhen, haben wir im vierten Quartal kontinuierlich E2E-Tests (End-to-End) ergänzt. Gleichzeitig haben wir auch das gesamte Testsystem verfeinert.

### @nocobase/test

NocoBase Test-Kit, beinhaltet:

* `@nocobase/test/server` Serverseitige Tests
  * Integriert `supertest` für Schnittstellentests.
  * `mockDatabase` und `mockServer` sind eingebaut.
* `@nocobase/test/client` Clientseitige Tests
  * `@testing-library/react` und `@testing-library/user-event` sind integriert.
* `@nocobase/test/e2e` E2E-Tests
  * Integration von `@playwright/test`.
  * Eingebaute gängige Mock-Methoden

### Test-Framework

* Serverseitige Tests, Verwendung des Vitest-Frameworks
* Clientseitige Tests, Verwendung des Vitest-Frameworks
* E2E-Tests, Verwendung des Playwright-Frameworks

### Tests schreiben

#### Serverseitige Tests

```
import { mockDatabase } from '@nocobase/test/server';

describe('my db suite', () => {
  let db;

  beforeEach(async () => {
    db = mockDatabase();
    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });
    await db.sync();
  });

  afterEach(async () => {
    await db.close();
  });

  test('my case', async () => {
    const repository = db.getRepository('posts');
    const post = await repository.create({
      values: {
        title: 'hello',
      },
    });

    expect(post.get('title')).toEqual('hello');
  });
});
```

#### Clientseitige Tests

```
import { render, screen, userEvent, waitFor } from '@nocobase/test/client';

it('should display the value of user input', async () => {
  const { container } = render(<App1 />);
  const input = container.querySelector('input');
  await userEvent.type(input, 'Hello World');
  await waitFor(() => {
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

#### E2E-Tests

```
import { test } from '@nocobase/test/e2e';

test('sign in', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username/Email').click();
  await page.getByPlaceholder('Username/Email').fill('admin@nocobase.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(
      page.getByTestId('user-center-button').getByText('Super Admin')
    ).toBeVisible();
});
```

### Vitest-Tests ausführen

```
# Alle Tests mit zwei parallelen Vitest-Prozessen für Frontend und Backend ausführen.
yarn test

# Client-Testfälle ausführen.
yarn test --client
# gleichbedeutend mit
yarn cross-env TEST_ENV=client-side vitest

# Server-Testfälle ausführen.
yarn test --server
# gleichbedeutend mit
yarn cross-env TEST_ENV=server-side vitest

# Ein bestimmtes Verzeichnis oder eine Datei angeben.
yarn test your/path/src/__tests__/test-file.test.ts
# Clientseitige Dateien müssen /client/ enthalten
yarn test your/path/client/src/__tests__/test-file.test.ts
```

📢 Unterschied zur direkten Ausführung von vitest

* Wenn Sie den Pfad angeben, wird automatisch zwischen Frontend und Backend unterschieden; das Frontend muss `/client/` enthalten.
* Der Backend-Test ist standardmäßig `-single-thread`. Zum Deaktivieren fügen Sie `-single-thread=false` hinzu.
* Standardmäßig ist `--run` aktiv. Zum Lauschen fügen Sie `--watch` hinzu.

### Playwright-Tests ausführen

```
# Abhängigkeiten installieren
yarn e2e install-deps

# Tests ausführen
yarn e2e test

# UI-Modus
yarn e2e test --ui

# URL der Anwendung angeben
yarn e2e test --url=http://localhost:20000

# Eine App starten. Sie wird jedes Mal neu installiert.
yarn e2e start-app
```

## Weitere Änderungen

### Optimierung des Auth-Plugins

* Entwicklungsleitfaden für Auth-Erweiterungen [https://docs.nocobase.com/handbook/auth/dev/guide](https://docs.nocobase.com/handbook/auth/dev/guide)
* Breaking Changes [https://docs-cn.nocobase.com/handbook/auth/dev/api](https://docs-cn.nocobase.com/handbook/auth/dev/api)

### Modulare Aufteilung in Plugins

Um den Kern zu verfeinern und schlanker zu gestalten, wurden bestimmte Funktionalitäten modularisiert. Zu den kürzlich modularisierten Plugins gehören:

| Plugin-Name                    | Paketname                                    |
| ------------------------------ | --------------------------------------------- |
| Aktion - Stapelbearbeitung     | @nocobase/plugin-action-bulk-edit             |
| Aktion - Stapelaktualisierung  | @nocobase/plugin-action-bulk-update           |
| Aktion - Duplizieren           | @nocobase/plugin-action-duplicate             |
| Kanban                         | @nocobase/plugin-kanban                       |
| Gantt                          | @nocobase/plugin-gantt                        |
| Workflow - Aggregat            | @nocobase/plugin-workflow-aggregate           |
| Workflow - Genehmigung         | @nocobase/plugin-workflow-approval            |
| Workflow - Verzögerung         | @nocobase/plugin-workflow-delay               |
| Workflow - Dynamische Berechnung | @nocobase/plugin-workflow-dynamic-calculation |
| Workflow - Formular-Trigger    | @nocobase/plugin-workflow-form-trigger        |
| Workflow - JSON-Abfrage        | @nocobase/plugin-workflow-json-query          |
| Workflow - Schleife            | @nocobase/plugin-workflow-loop                |
| Workflow - Manuell             | @nocobase/plugin-workflow-manual              |
| Workflow - Parallel            | @nocobase/plugin-workflow-parallel            |
| Workflow - Anfrage             | @nocobase/plugin-workflow-request             |
| Workflow - SQL                 | @nocobase/plugin-workflow-sql                 |

Details finden Sie in der [vollständigen Liste der Plugins](https://www.nocobase.com/en/plugins). Das Dokument befindet sich derzeit im Aufbau; einige Inhalte fehlen möglicherweise oder warten auf Übersetzung. Sie können [nocobase/docs](https://github.com/nocobase/docs) für Updates verfolgen.
