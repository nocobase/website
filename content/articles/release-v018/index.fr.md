---
title: "NocoBase 0.18 : Mise en place d'un système de test solide"
description: "NocoBase 0.18 renforce la robustesse avec des tests E2E complets, un plugin d'authentification optimisé et une décomposition modulaire en plugins, améliorant la flexibilité et les performances."
---

## Nouvelles fonctionnalités

Pour renforcer la robustesse de NocoBase, nous avons complété les tests E2E (de bout en bout) tout au long du quatrième trimestre. Parallèlement, nous avons également affiné l'ensemble du système de test.

### @nocobase/test

Kit de test NocoBase, incluant :

* `@nocobase/test/server` Tests côté serveur
  * Intégration de `supertest` pour les tests d'interface.
  * `mockDatabase` et `mockServer` intégrés.
* `@nocobase/test/client` Tests côté client
  * Intégration de `@testing-library/react` et `@testing-library/user-event`.
* `@nocobase/test/e2e` Tests E2E
  * Intégration de `@playwright/test`.
  * Méthodes de simulation courantes intégrées

### Cadre de test

* Tests côté serveur, utilisant le framework Vitest
* Tests côté client, utilisant le framework Vitest
* Tests E2E, utilisant le framework Playwright

### Rédaction de tests

#### Tests côté serveur

```
import { mockDatabase } from '@nocobase/test/server';

describe('ma suite de base de données', () => {
  let db;

  beforeEach(async () => {
    db = mockDatabase();
    db.collection({
      name: 'articles',
      fields: [
        {
          type: 'string',
          name: 'titre',
        },
      ],
    });
    await db.sync();
  });

  afterEach(async () => {
    await db.close();
  });

  test('mon cas', async () => {
    const repository = db.getRepository('articles');
    const article = await repository.create({
      values: {
        titre: 'bonjour',
      },
    });

    expect(article.get('titre')).toEqual('bonjour');
  });
});
```

#### Tests côté client

```
import { render, screen, userEvent, waitFor } from '@nocobase/test/client';

it('devrait afficher la valeur saisie par l\'utilisateur', async () => {
  const { container } = render(<App1 />);
  const input = container.querySelector('input');
  await userEvent.type(input, 'Bonjour le monde');
  await waitFor(() => {
    expect(screen.getByText('Bonjour le monde')).toBeInTheDocument();
  });
});
```

#### Tests E2E

```
import { test } from '@nocobase/test/e2e';

test('connexion', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Nom d\'utilisateur/Email').click();
  await page.getByPlaceholder('Nom d\'utilisateur/Email').fill('admin@nocobase.com');
  await page.getByPlaceholder('Mot de passe').click();
  await page.getByPlaceholder('Mot de passe').fill('admin123');
  await page.getByRole('button', { name: 'Se connecter' }).click();
  await expect(
      page.getByTestId('user-center-button').getByText('Super Admin')
    ).toBeVisible();
});
```

### Exécuter les tests Vitest

```
# Exécute tous les tests avec deux processus Vitest parallèles pour le frontend et le backend.
yarn test

# Exécute les cas de test côté client.
yarn test --client
# équivalent à
yarn cross-env TEST_ENV=client-side vitest

# Exécute les cas de test côté serveur.
yarn test --server
# équivalent à
yarn cross-env TEST_ENV=server-side vitest

# Spécifie un répertoire ou un fichier.
yarn test votre/chemin/src/__tests__/fichier-test.test.ts
# Les fichiers côté client doivent inclure /client/
yarn test votre/chemin/client/src/__tests__/fichier-test.test.ts
```

📢 Différence avec l'exécution directe de vitest

* Lorsque vous spécifiez le chemin, le frontend et le backend sont automatiquement reconnus ; le frontend doit inclure `/client/`.
* Le test backend est par défaut en `-single-thread` ; pour le désactiver, ajoutez `-single-thread=false`.
* Par défaut, c'est `--run` ; pour écouter, ajoutez `--watch`.

### Exécuter les tests Playwright

```
# Installer les dépendances
yarn e2e install-deps

# Exécuter les tests
yarn e2e test

# Mode interface utilisateur
yarn e2e test --ui

# Spécifier l'URL de l'application
yarn e2e test --url=http://localhost:20000

# Démarrer une application. Elle se réinstalle à chaque fois.
yarn e2e start-app
```

## Autres modifications

### Optimisation du plugin d'authentification

* Guide de développement d'extension d'authentification [https://docs.nocobase.com/handbook/auth/dev/guide](https://docs.nocobase.com/handbook/auth/dev/guide)
* Modifications cassantes [https://docs-cn.nocobase.com/handbook/auth/dev/api](https://docs-cn.nocobase.com/handbook/auth/dev/api)

### Décomposition modulaire en plugins

Afin d'affiner le noyau et de le rendre plus léger, certaines fonctionnalités ont subi une séparation modulaire. Les plugins qui ont récemment subi cette modularisation incluent :


| Nom du plugin                    | Nom du package                                  |
| -------------------------------- | ----------------------------------------------- |
| Action - Modification en masse   | @nocobase/plugin-action-bulk-edit               |
| Action - Mise à jour en masse    | @nocobase/plugin-action-bulk-update             |
| Action - Dupliquer               | @nocobase/plugin-action-duplicate               |
| Kanban                           | @nocobase/plugin-kanban                         |
| Gantt                            | @nocobase/plugin-gantt                          |
| Workflow - Agrégation            | @nocobase/plugin-workflow-aggregate             |
| Workflow - Approbation           | @nocobase/plugin-workflow-approval              |
| Workflow - Délai                 | @nocobase/plugin-workflow-delay                 |
| Workflow - Calcul dynamique      | @nocobase/plugin-workflow-dynamic-calculation   |
| Workflow - Déclencheur de formulaire | @nocobase/plugin-workflow-form-trigger        |
| Workflow - Requête JSON          | @nocobase/plugin-workflow-json-query            |
| Workflow - Boucle                | @nocobase/plugin-workflow-loop                  |
| Workflow - Manuel                | @nocobase/plugin-workflow-manual                |
| Workflow - Parallèle             | @nocobase/plugin-workflow-parallel              |
| Workflow - Requête               | @nocobase/plugin-workflow-request               |
| Workflow - SQL                   | @nocobase/plugin-workflow-sql                   |

Voir la [liste complète des plugins](https://www.nocobase.com/en/plugins) pour plus de détails. Le document est actuellement en cours de construction ; certains contenus peuvent être manquants ou en attente de traduction. Vous pouvez suivre [nocobase/docs](https://github.com/nocobase/docs) pour les mises à jour.
