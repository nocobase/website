---
title: "NocoBase 0.20 : Prise en charge de plusieurs sources de données"
description: "NocoBase 0.20 introduit la prise en charge de plusieurs sources de données, des ajustements à la gestion des collections, des clés primaires non-ID, des interfaces utilisateur et de permissions améliorées, ainsi que de nouveaux nœuds de workflow pour une flexibilité et des performances accrues."
---

## Nouvelles fonctionnalités

### Prise en charge de multiples sources de données

Ajout du plugin « [Gestionnaire de sources de données](https://docs.nocobase.com/handbook/data-source-manager) », utilisé pour gérer toutes les collections et tous les champs des sources de données. Le plugin Gestionnaire de sources de données fournit une interface centralisée pour la gestion des sources de données et ne permet pas d'accéder aux sources de données. Il doit être utilisé conjointement avec divers plugins de sources de données. Les sources de données actuellement prises en charge incluent :

* [Base de données principale](https://docs.nocobase.com/handbook/data-source-main) : Base de données principale de NocoBase, prenant en charge les bases de données relationnelles telles que MySQL, PostgreSQL, SQLite, etc.
* [Source de données MySQL externe](https://docs.nocobase.com/handbook/data-source-external-mysql) : Accéder à une base de données MySQL existante en tant que source de données.
* [Source de données MariaDB externe](https://docs.nocobase.com/handbook/data-source-external-mariadb) : Accéder à une base de données MariaDB existante en tant que source de données.
* [Source de données PostgreSQL externe](https://docs.nocobase.com/handbook/data-source-external-postgres) : Accéder à une base de données PostgreSQL existante en tant que source de données.

De plus, d'autres sources de données peuvent être étendues, qu'il s'agisse de types courants de bases de données ou de plateformes fournissant des API (SDK).

![Gestionnaire de sources de données](https://static-docs.nocobase.com/fe8ecdaf640097eeb310c94a997b9090.png)

### Ajustement de la gestion des collections

Le « Gestionnaire de collections » d'origine a été déplacé vers « Source de données > Base de données principale > Configuration ».

![Configuration de la base de données principale](https://static-docs.nocobase.com/b5ad882a131e447f78b0c22a92ec9df6.gif)

### Prise en charge des champs non-ID comme clés primaires et contraintes de relation

Lors de la création d'une collection, vous pouvez choisir de ne pas créer de champ ID.

![Champs prédéfinis](https://static-docs.nocobase.com/87dc4101a884f97cbfce00f1891f7cf6.png)

Les champs de type entier peuvent être utilisés comme clés primaires.

![Les champs de type entier peuvent être utilisés comme clés primaires](https://static-docs.nocobase.com/cce37d7d8e9feaa66970da0c643a2d9d.png)

Les champs de texte sur une seule ligne peuvent également être utilisés comme clés primaires.

![Les champs de texte sur une seule ligne peuvent également être utilisés comme clés primaires](https://static-docs.nocobase.com/b2c797f52bedfcfa06936a244dd9be4b.png)

Les contraintes de relation prennent en charge la sélection d'autres champs avec des index Uniques définis comme champs non-clés primaires.

![](https://static-docs.nocobase.com/e5515e58426c5be08ba982b0bb311410.png)

### Ajustement du tri par glisser-déposer

Ajout d'un champ de type « Tri ». Les champs de tri ne sont plus générés automatiquement lors de la création de collections et doivent être créés manuellement.

![](https://static-docs.nocobase.com/470891c7bb34c506328c1f3824a6cf20.png)

Lors de la sélection d'un champ comme groupe, le regroupement sera effectué avant le tri.

![](https://static-docs.nocobase.com/0794d0a9c0dc288a8fc924a3542bb86e.png)

Lors de l'activation du tri par glisser-déposer dans un bloc de tableau, vous devez sélectionner le champ de tri.

![](https://static-docs.nocobase.com/20cf12fd7ca3d8c0aa1917a95c0a7e7c.png)

Lors de la création d'un bloc Kanban, vous devez sélectionner le champ de tri.

![](https://static-docs.nocobase.com/b810265790d6a1ec099e3d88d1361271.png)

### Ajustement des interfaces utilisateur et des autorisations

Ajout d'une interface de gestion des utilisateurs et unification de la gestion des utilisateurs et des rôles sous un seul menu.

![](https://static-docs.nocobase.com/7be26746652098f07ce105dbae373522.png)

Ajustement de l'interface de gestion des rôles pour faciliter la gestion des rôles, des autorisations, des départements, etc. associés aux utilisateurs.

![](https://static-docs.nocobase.com/4ec942af764dfcec1ddc9a244816a6ee.png)

Les « Autorisations d'action » d'origine ont été déplacées vers l'onglet « Source de données ».

![](https://static-docs.nocobase.com/461ab881fe94a33f9a122e9734b85f4d.gif)

### Plugin Département

![](https://static-docs.nocobase.com/093473d9c23a789d41899df9bcaf3389.png)

Organisez les utilisateurs par départements, définissez des relations hiérarchiques, liez des rôles pour contrôler les autorisations et utilisez les départements comme variables dans les workflows et les expressions.

### Workflow : Approbation

Le plugin d'approbation fournit des types de workflow dédiés (déclencheurs) « Lancer une approbation » et des nœuds « Approbation » pour ce processus. Combiné avec les tables de données personnalisées et les blocs personnalisés uniques de NocoBase, divers scénarios d'approbation peuvent être rapidement et flexiblement créés et gérés.

Configuration de l'approbation

![Configuration de l'approbation](https://static-docs.nocobase.com/21acc5615ecc03aeeb44671ab945baea.png)

Processus d'approbation

![Processus d'approbation](https://static-docs.nocobase.com/6a879641bd15de0648cd4602779ef9fa.png)

Plus de détails peuvent être trouvés dans la documentation : [Approbation de workflow](https://docs.nocobase.com/handbook/workflow-approval)

### Workflow : Nœud de fin de processus

Ce nœud termine immédiatement l'exécution en cours du workflow lorsqu'il est exécuté et se termine avec le statut configuré dans le nœud. Il est généralement utilisé pour le contrôle de flux logique spécifique, pour quitter le workflow actuel après avoir satisfait à certaines conditions logiques, sans continuer avec le traitement ultérieur. On peut le comparer à la commande return dans les langages de programmation, utilisée pour quitter la fonction en cours d'exécution.

![](https://static-docs.nocobase.com/38d6352211d791fd4233f5cd4bdb34f2.png)

Plus de détails peuvent être trouvés dans la documentation : [Nœud de fin de processus](https://docs.nocobase.com/handbook/workflow/nodes/end)

### Workflow : Nœud de variable personnalisée

Des variables peuvent être déclarées dans le workflow ou des valeurs peuvent être attribuées à des variables précédemment déclarées, généralement utilisées pour stocker des données temporaires dans le workflow. Il convient aux scénarios où les résultats de calcul doivent être stockés pour une utilisation ultérieure en dehors de la branche (tels que les boucles, le parallélisme, etc.).

![](https://static-docs.nocobase.com/c19913f99968d987a52aaa53578a7318.png)

Plus de détails peuvent être trouvés dans la documentation : [Nœud de variable personnalisée](https://docs.nocobase.com/handbook/workflow-variable)

### Workflow : Intercepteur de requête

Le plugin d'intercepteur de requête fournit un mécanisme pour intercepter les opérations sur les formulaires, où l'événement d'interception est déclenché après la soumission de l'opération de formulaire correspondante et avant son traitement. Si un nœud « Fin de processus » est exécuté dans le flux de processus ultérieur après le déclenchement, ou si d'autres nœuds échouent à s'exécuter (erreurs ou autres exécutions incomplètes), l'opération de formulaire sera interceptée ; sinon, l'opération planifiée sera exécutée normalement. Il peut être utilisé pour la validation métier ou les vérifications logiques afin d'approuver ou d'intercepter les opérations de création, de mise à jour et de suppression soumises par le client.

![](https://static-docs.nocobase.com/3f3991aaf9d73b8c2f7c179e7702d16b.png)

Plus de détails peuvent être trouvés dans la documentation : [Intercepteur de requête](https://docs.nocobase.com/handbook/workflow/triggers/pre-action)

### Workflow : Nœud de message de réponse

Le nœud de message de réponse est utilisé pour fournir des commentaires au client avec des messages personnalisés dans des types spécifiques de workflows (tels que l'interception de requête et les événements de formulaire).

Configuration du nœud

![](https://static-docs.nocobase.com/4376843af541ef6a08696e074cb6cd07.png)

Message d'invite

![](https://static-docs.nocobase.com/051f12855bd0ce74b22de191b8b87cf5.png)

Plus de détails peuvent être trouvés dans la documentation : [Nœud de message de réponse](https://docs.nocobase.com/handbook/workflow-response-message)

## Changements incompatibles

### API avec noms conflictuels

Dans ce changement de noyau, certaines API de nouvelle version entrent en conflit avec les noms de l'ancienne version. Ces API d'ancienne version conflictuelles seront conservées dans cette version mais seront uniformément suffixées par `_deprecated`.

| API d'origine                     | API obsolète                     | Nouvelle API                                                                                                     |
| --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| CollectionProvider                | CollectionProvider\_deprecated   | [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider)                      |
| useCollection                     | useCollection\_deprecated        | [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#hooks)                     |
| useCollectionField                | useCollectionField\_deprecated   | [useCollectionField](https://client.docs.nocobase.com/core/data-source/collection-field#hooks)                   |
| useCollectionManager              | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks)      |
| useContext(CollectionManagerContext) | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks)      |

Si vous utilisez les API connexes ci-dessus, vous avez deux façons de procéder :

* Remplacement simple : Remplacez l'API d'origine par celle suffixée par `_deprecated`, par exemple, remplacez `useCollection()` par `useRecord_deprecated()`.
* Utilisez la nouvelle API selon la nouvelle documentation : Bien que les noms des nouvelles API soient les mêmes que les anciennes API, il existe des différences dans les paramètres et les valeurs de retour. Vous devez vous référer à la nouvelle documentation

pour ajuster le code correspondant.

### Autres API nécessitant un ajustement

* `registerTemplate()` changé en `app.dataSourceManager.addCollectionTemplates()`
* `registerField()` changé en `app.dataSourceManager.addFieldInterfaces()`
* `registerGroup()` changé en `app.dataSourceManager.addFieldInterfaceGroups()`
* `useContext(CollectionManagerContext)` changé en `useCollectionManager_deprecated()`
* Étendre les collections en utilisant `ExtendCollectionsProvider`
* `RecordProvider` nécessite le passage explicite du paramètre parent lorsque nécessaire

## Exemples de changements

### Extension de modèle de collection

#### Définition

Auparavant défini comme un objet, il doit maintenant être changé en une classe. Par exemple :

Avant :

```
import { ICollectionTemplate } from '@nocobase/client';

const calendar: ICollectionTemplate = {
  name: 'calendar',
  title: 'Collection de calendrier',
  order: 2,
  color: 'orange',
  // ...
}
```

Maintenant :

```
import { CollectionTemplate } from '@nocobase/client';

class CalendarCollectionTemplate extends CollectionTemplate {
  name = 'calendar';
  title = 'Collection de calendrier';
  order = 2;
  color = 'orange';
}
```

Les propriétés de l'objet d'origine deviennent des membres de la classe.

#### Enregistrement

Auparavant enregistré via `registerTemplate`, maintenant doit être enregistré via `dataSourceManager.addCollectionTemplates` du plugin. Par exemple :

Avant :

```
import { registerTemplate } from '@nocobase/client';
import { calendar } from './calendar'

registerTemplate('calendar', calendar);
```

Maintenant :

```
import { Plugin } from '@nocobase/client';
import { CalendarCollectionTemplate } from './calendar'

export class CalendarPluginClient extends Plugin {
  async load() {
    this.app.dataSourceManager.addCollectionTemplates([CalendarCollectionTemplate]);
  }
}
```

### Extension d'interface de champ

#### Définition

Auparavant défini comme un objet, il doit maintenant être changé en une classe. Par exemple :

Avant :

```
import { IField } from '@nocobase/client';

const attachment: IField = {
  name: 'attachment',
  type: 'object',
  group: 'media',
  title: 'Pièce jointe',
  // ...
}
```

Maintenant :

```
import { CollectionFieldInterface } from '@nocobase/client';

class AttachmentFieldInterface extends CollectionFieldInterface {
  name = 'attachment';
  type = 'object';
  group = 'media';
  title = 'Pièce jointe';
  // ...
}
```

Les propriétés de l'objet d'origine deviennent des membres de la classe.

#### Enregistrement

Auparavant enregistré via `registerField`, maintenant doit être enregistré via `dataSourceManager.addFieldInterfaces` du plugin et ne nécessite pas de passer à nouveau `CollectionManagerProvider`. Par exemple :

Avant :

```
import { registerField } from '@nocobase/client';
import { attachment } from './attachment'

- registerField(attachment.group, 'attachment', attachment);

export const FileManagerProvider: FC = (props) => {
  return (
-   <CollectionManagerProvider interfaces={{ attachment }}>
      <SchemaComponentOptions scope={hooks} components={{ UploadActionInitializer }}>
        {props.children}
      </SchemaComponentOptions>
-   </CollectionManagerProvider>
  );
};
```

Maintenant :

```
import { Plugin } from '@nocobase/client';
import { AttachmentFieldInterface } from './attachment'

export class FilPlugin extends Plugin {
  async load() {
    this.app.dataSourceManager.addFieldInterfaces([AttachmentFieldInterface]);
  }
}
```

### Extension de groupe d'interfaces de champ

Auparavant enregistré via `registerGroup`, maintenant doit être enregistré via `dataSourceManager.addFieldInterfaceGroups` du plugin. Par exemple :

```
- import { registerGroup, Plugin } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

- registerGroup('map', {
-        label: 'Géométrie basée sur la carte',
-        order: 10
- })

export class MapPlugin extends Plugin {
  async load() {
+    this.app.dataSourceManager.addFieldInterfaceGroups({
+      map: {
+        label: generateNTemplate('Géométrie basée sur la carte'),
+        order: 51,
+      },
+    });
  }
}
```

### `useContext(CollectionManagerContext)` changé en `useCollectionManager_deprecated()`

```
- const ctx = useContext(CollectionManagerContext);
+ const ctx = useCollectionManager_deprecated();
```

### Étendre les collections, utiliser `ExtendCollectionsProvider` au lieu de `CollectionManagerProvider`

```
const Demo = () => {
-  <CollectionManagerProvider collections={[apiKeysCollection]}>
+  <ExtendCollectionsProvider collections={[apiKeysCollection]}>
...
-  </CollectionManagerProvider>
+  </ExtendCollectionsProvider>
}
```

### Changements dans RecordProvider

Auparavant, lorsque la propriété parent n'était pas transmise, la valeur du dernier RecordProvider était automatiquement récupérée comme parent. Maintenant, le parent doit être explicitement transmis, et lorsque le parent n'est pas transmis, la valeur du parent sera undefined.

```
- <RecordProvider record={recordData}>
+ <RecordProvider record={recordData} parent={parentRecordData}>
...
</RecordProvider>
```

S'il n'y a pas de bagage historique, vous pouvez également utiliser directement CollectionRecordProvider pour remplacer.

```
- <RecordProvider record={recordData}>
+ <CollectionRecordProvider record={recordData} parent={parentRecordData}>
...
- </RecordProvider>
+ </CollectionRecordProvider>
```

> ⚠️Différence entre RecordProvider et CollectionRecordProvider
>
> * RecordProvider est obsolète et sera supprimé à l'avenir.
> * RecordProvider porte l'ancien RecordContext, tandis que CollectionRecordProvider ne le fait pas.
