---
title: "NocoBase v1.6.0 officiellement publiée"
description: "Déploiement en mode cluster, optimisation des politiques de sécurité et gestionnaire de migration, ont conduit à une amélioration complète des performances, de la sécurité et de l'expérience utilisateur."
---

## Nouvelles fonctionnalités

### Mode cluster

L'édition Entreprise prend en charge le déploiement en mode cluster via des plugins appropriés. Lorsque l'application fonctionne en mode cluster, elle peut exploiter plusieurs instances et le traitement multicœur pour améliorer ses performances en matière de gestion des accès simultanés.

![Capture d'écran du mode cluster](https://static-docs.nocobase.com/20241231010814.png)

Référence : [Déploiement - Mode cluster](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode)

### Politique de mot de passe

Une politique de mot de passe est établie pour tous les utilisateurs, incluant des règles de complexité des mots de passe, des périodes de validité et des stratégies de sécurité de connexion, ainsi que la gestion des comptes verrouillés.

![Capture d'écran de la politique de mot de passe](https://static-docs.nocobase.com/202412281329313.png)

Référence : [Politique de mot de passe](https://docs.nocobase.com/handbook/password-policy)

### Politique de jeton

La politique de sécurité des jetons est une configuration fonctionnelle conçue pour protéger la sécurité du système et améliorer l'expérience utilisateur. Elle comprend trois éléments de configuration principaux : « validité de la session », « période de validité du jeton » et « limite de rafraîchissement du jeton expiré ».

![Capture d'écran de la politique de jeton](https://static-docs.nocobase.com/20250105111821-2025-01-05-11-18-24.png)

Référence : [Politique de jeton](https://docs.nocobase.com/handbook/token-policy)

### Restriction IP

NocoBase permet aux administrateurs de configurer une liste blanche ou noire d'adresses IP pour l'accès des utilisateurs, afin de restreindre les connexions réseau externes non autorisées ou de bloquer les adresses IP malveillantes connues, réduisant ainsi les risques de sécurité. Il prend également en charge la consultation des journaux de refus d'accès pour identifier les IP à risque.

![Capture d'écran de la restriction IP](https://static-docs.nocobase.com/2025-01-23-10-07-34-20250123100733.png)

Référence : [Restriction IP](https://docs.nocobase.com/handbook/IP-restriction)

### Variables et secrets

Configuration et gestion centralisées des variables d'environnement et des secrets pour le stockage de données sensibles, la réutilisation de la configuration, l'isolation des environnements, etc.

![Capture d'écran des variables d'environnement](https://static-docs.nocobase.com/1ee6c3fa09533b19f4d6038f53b06006.png)

Référence : [Variables et secrets](https://docs.nocobase.com/handbook/environment-variables)

### Gestionnaire de migration

Cette fonctionnalité vous permet de migrer les configurations d'application d'un environnement à un autre.

![Capture d'écran du gestionnaire de migration](https://static-docs.nocobase.com/20250107105005.png)

Référence :

- [Gestionnaire de migration](https://docs.nocobase.com/handbook/migration-manager)
- [Gestion des versions](https://docs.nocobase.com/handbook/release-management)

### Gestion des routes

- **Données de menu séparées et renommées en Routes** : Les données de menu ont été découplées du schéma d'interface utilisateur et renommées en « routes ». Elles sont divisées en deux tables, desktopRoutes et mobileRoutes, qui correspondent respectivement aux routes de bureau et mobiles.
- **Optimisation du menu frontal avec prise en charge du repli et de l'adaptabilité** : Le menu frontal prend désormais en charge la fonctionnalité de repli et une conception adaptative pour une expérience utilisateur améliorée.

![Capture d'écran de la gestion des routes](https://static-docs.nocobase.com/20250107115449.png)

Référence : [Routes](https://docs.nocobase.com/handbook/routes)

### Rôles et permissions

- Prend en charge la configuration des permissions d'action.
  ![Capture d'écran des rôles et permissions 1](https://static-docs.nocobase.com/b0a7905d9fd4beaaf21592b1f56fe752.png)
- Prend en charge la configuration des permissions d'onglet.

![Capture d'écran des rôles et permissions 2](https://static-docs.nocobase.com/4fd3a5144a2301638b9f24b033d33add.png)

### Gestion des utilisateurs

Prend en charge la personnalisation des formulaires de profil utilisateur.

![Capture d'écran de la gestion des utilisateurs](https://static-docs.nocobase.com/171e5a4c61033afb237c9ae1a3d89000.png)

### Workflow

Une entrée pour le centre des tâches du workflow a été ajoutée à la barre d'outils globale, fournissant des notifications en temps réel pour les nœuds manuels et les tâches d'approbation en attente.

![Capture d'écran du workflow](https://static-docs.nocobase.com/855c58536f9fd29ae353dd19b3aff73f.png)

### Workflow : Événements d'action personnalisés

Prend en charge le déclenchement d'événements d'action personnalisés à la fois globalement et dans les actions par lots.

![Capture d'écran des événements d'action personnalisés](https://static-docs.nocobase.com/106ae1296d180718799eb6d7f423805c.png)

### Workflow : Approbation

- Prend en charge le transfert des responsabilités d'approbation et l'ajout d'approbateurs supplémentaires.
  ![Capture d'écran du formulaire d'approbation](https://static-docs.nocobase.com/20241226232013.png)
- Permet aux approbateurs de modifier le contenu de la demande lors de la soumission d'une approbation.
  ![Capture d'écran de la modification d'approbation](https://static-docs.nocobase.com/20241226232124.png)
- Prend en charge la configuration d'un bloc d'informations de base dans l'interface d'approbation.
- Optimise le style et l'interaction pour lancer des approbations et visualiser les tâches en attente, ces améliorations étant également intégrées dans le centre des tâches du processus global.
  ![Capture d'écran du centre des tâches d'approbation](https://static-docs.nocobase.com/20250310161203.png)
- Ne fait plus de distinction sur l'emplacement où l'approbation est lancée ; le bloc du centre d'approbation peut à la fois lancer et traiter toutes les approbations.

### Workflow : Nœud de mappage de variables JSON

Un nouveau nœud dédié a été ajouté pour mapper les données JSON des résultats des nœuds en amont en variables.

![Capture d'écran du nœud de mappage de variables JSON](https://static-docs.nocobase.com/20250113173635.png)

Référence : [Mappage de variables JSON](https://docs.nocobase.com/handbook/workflow/nodes/json-variable-mapping)

### Améliorations des capacités et exemples de plugins

| Extension                         | Exemple de plugin                                                |
| --------------------------------- | ---------------------------------------------------------------- |
| Champs prédéfinis personnalisés de source de données | @nocobase-sample/plugin-data-source-main-custom-preset-fields    |
| Champ de couleur d'enregistrement du calendrier | @nocobase-sample/plugin-calendar-register-color-field            |
| Champ de titre d'enregistrement du calendrier | @nocobase-sample/plugin-calendar-register-title-field            |
| Champ d'expression d'enregistrement de formule | @nocobase-sample/plugin-field-formula-register-expression-field  |
| Champ de groupe d'enregistrement Kanban | @nocobase-sample/plugin-kanban-register-group-field              |
| Opérateur de filtre d'enregistrement | @nocobase-sample/plugin-register-filter-operator                 |
| Extension de stockage de fichiers | @nocobase-sample/plugin-file-storage-demo                        |

## Changements cassants

### Mise à jour de la politique de jeton

Dans la version 1.6, une nouvelle [Politique de jeton](https://docs.nocobase.com/handbook/token-policy) a été introduite. Lorsque l'authentification échoue, une erreur 401 sera renvoyée avec une redirection vers la page de connexion. Ce comportement diffère des versions précédentes. Pour contourner la vérification, reportez-vous aux exemples suivants :

Requête frontale :

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

Middleware backend :

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

### La fonction de test unitaire agent.login est passée de synchrone à asynchrone

En raison de plusieurs opérations asynchrones nécessaires dans le processus d'authentification, la fonction de test login est désormais asynchrone. Exemple :

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

### Nouvelle API d'extension pour les éléments de paramètres du centre utilisateur

API :

```TypeScript
type UserCenterSettingsItemOptions = SchemaSettingsItemType & { aclSnippet?: string };

class Application {
  addUserCenterSettingsItem(options: UserCenterSettingsItemOptions);
}
```

Exemple :

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
