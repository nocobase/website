---
title: "NocoBase 0.21 : Prise en charge multi-source pour les graphiques et les workflows"
description: "NocoBase 0.21 introduit la prise en charge multi-source pour les graphiques et les workflows, des événements de déclenchement de workflow optimisés et plusieurs nouveaux types de champs, améliorant la flexibilité et les performances."
---

## Annonce

![v1.0](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/img_v3_029o_3dd91ba0-bb96-4315-a273-208f06d432fg.png)

## Nouvelles fonctionnalités

### Prise en charge multi-source de données pour les graphiques

![20240407222304](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222304.png)

[Pour plus d'informations, consultez la documentation [Visualisation des données]](https://docs.nocobase.com/handbook/data-visualization)

### Prise en charge multi-source de données pour les workflows

![20240407222523](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222523.png)

[Pour plus d'informations, consultez la documentation [Workflow]](https://docs.nocobase.com/handbook/workflow)

### Optimisation des événements déclencheurs de workflow

Modifications des noms des déclencheurs :

| Nom d'origine                     | Nouveau nom               |
| --------------------------------- | ------------------------- |
| Événements de formulaire, Événements d'opération | Événements post-opération |
| Tâches planifiées                 | Événements planifiés      |
| Intercepteurs de requêtes         | Événements pré-opération  |
| Approbation                       | Événements d'approbation  |

Améliorations de la configuration du mode de déclenchement pour les événements suivants :

#### Événements post-action

![20240407222652](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222652.png)

[Pour plus d'informations, consultez la documentation [Workflow - Événements post-action]](https://docs.nocobase.com/handbook/workflow-custom-action-trigger)

#### Événements pré-action

![20240407222834](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222834.png)

[Pour plus d'informations, consultez la documentation [Workflow - Événements pré-action]](https://docs.nocobase.com/handbook/workflow-request-interceptor)

### Plugin de marque personnalisée

![20240407222949](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222949.png)

[Pour plus d'informations, consultez la documentation [Personnalisation de la marque]](https://docs.nocobase.com/handbook/custom-brand)

### Prise en charge du champ nanoid

![20240407223221](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223221.png)

[Pour plus d'informations, consultez la documentation [champ nanoid]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/nano-id)

### Prise en charge du champ uuid

![20240407223431](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223431.png)

[Pour plus d'informations, consultez la documentation [champ uuid]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/uuid)

### Prise en charge du champ timestamp Unix

![20240407223512](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223512.png)

[Pour plus d'informations, consultez la documentation [champ timestamp Unix]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### Le champ de type numérique prend en charge la configuration du format

![20240407223736_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223736_rec_.gif)

[Pour plus d'informations, consultez la documentation [Configuration des champs / Paramètres de propriétés spécifiques / Composant numérique]](https://docs.nocobase.com/handbook/ui/fields/field-settings/number-format)

### Prise en charge du déploiement par sous-chemin

Ajout de la variable d'environnement `APP_PUBLIC_PATH` pour prendre en charge le déploiement par sous-chemin. Par exemple :

```
APP_PUBLIC_PATH=/nocobase/
```

Accès local via l'URL [http://localhost:13000/nocobase/](http://localhost:13000/nocobase/)

Exemple de proxy nginx :

```
server {
    listen 80;
    server_name your_domain.com;  # Remplacez your_domain.com par votre domaine

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Vous pouvez désormais accéder via http://your\_domain.com/nocobase/.

### Optimisation des performances des blocs

#### Prise en charge de l'effet d'écran squelette

Cartes de blocs

![20240407224956](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224956.png)

Cartes Kanban

![20240407224811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224811.png)

Cellules de tableau

![20240407230028](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407230028.png)

#### Traitement distribué de la configuration des blocs

Auparavant, toute modification d'un schéma sur l'ensemble de la page entraînait un re-rendu complet de la page. Désormais, le schéma de chaque bloc est indépendant.

```
<SchemaComponent distributed schema={} />
```

Le composant Grid prend également en charge le traitement distribué.

```
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## Modifications incompatibles

### Divers useProps du schéma d'interface utilisateur remplacés par x-use-decorator-props et x-use-component-props

x-use-decorator-props et x-use-component-props sont non intrusifs et pris en charge par tous les composants.
