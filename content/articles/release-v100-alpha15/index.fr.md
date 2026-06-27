---
title: "NocoBase 1.0.0-alpha.15 : Nouveaux plugins et amélioration de l'interaction 'Configurer les actions'"
description: "NocoBase v1.0.0-alpha.15 introduit l'authentification LDAP, des déclencheurs d'actions personnalisés, la prise en charge des diagrammes de Gantt et des tableaux Kanban, et plus encore. Cette mise à jour améliore également l'interaction 'Configurer les actions' et corrige divers bugs pour améliorer les performances de la plateforme."
---

## Nouvelles fonctionnalités

### Plugin d'authentification : Authentification LDAP

Permet aux utilisateurs de se connecter à NocoBase en utilisant leurs identifiants de serveur LDAP. Pour plus d'informations, consultez la documentation [Authentification : LDAP](https://docs.nocobase.com/handbook/auth-ldap).

![](https://static-docs.nocobase.com/202405191513995.png)

### Plugin Workflow : Déclencheur d'action personnalisée

Lorsque les actions CRUD ne suffisent pas à vos besoins, vous pouvez utiliser le déclencheur d'action personnalisée du workflow pour orchestrer votre propre logique de traitement des données. Pour plus d'informations, consultez la documentation [Workflow / Déclencheur d'action personnalisée](https://docs.nocobase.com/handbook/workflow-custom-action-trigger).

![](https://static-docs.nocobase.com/202405191515770.png)

### Le bloc tableau prend en charge les colonnes fixes

![](https://static-docs.nocobase.com/202405191512587.png)

### Prise en charge de l'ajout de Gantt et Kanban dans les fenêtres contextuelles

![](https://static-docs.nocobase.com/202405191512280.png)

### Le bloc de détails prend en charge les règles de liaison

Permet de configurer les propriétés visibles et cachées des champs.

![](https://static-docs.nocobase.com/202405191513781.png)

### Le nœud de requête HTTP du workflow prend en charge les données au format `application/www-x-form-urlencoded`

![](https://static-docs.nocobase.com/202405191514472.png)

### Les zones de saisie du nœud de requête HTTP du workflow prennent en charge les modèles de chaîne

![](https://static-docs.nocobase.com/202405191514748.png)

### Exemples de plugins pour le développement

Consultez la documentation pour les [exemples de plugins](https://docs.nocobase.com/plugin-samples).

![20240521105056](https://static-docs.nocobase.com/20240521105056.png)

## Améliorations

### Interaction améliorée pour « Configurer les actions »

Toutes les actions sont affichées dans une seule liste dans le menu déroulant, sans plus distinguer entre « Activer les actions » et « Personnaliser ».

* Actions qui ne peuvent être ajoutées qu'une seule fois : Ces actions conservent l'effet d'interrupteur.
* Actions qui peuvent être ajoutées plusieurs fois : Ces actions n'utilisent plus l'interaction par interrupteur et peuvent être ajoutées plusieurs fois.
* Actions similaires fusionnées
  * « Ajouter nouveau » et « Ajouter un enregistrement »
  * « Soumettre » et « Enregistrer l'enregistrement »

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### Format de données unifié pour le résultat du nœud de requête HTTP du workflow :

```
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

### Réorganisation du manuel du workflow

![20240521104934](https://static-docs.nocobase.com/20240521104934.png)

## Corrections

### Le plugin de journalisation n'affiche désormais que les journaux de l'application en cours

Lorsqu'il y a plusieurs applications :

* Le plugin de journalisation affiche uniquement la liste des fichiers journaux pour l'application en cours.
* Les dossiers Workflow et Requête personnalisée sont placés dans le dossier de l'application.

![20240520152448](https://static-docs.nocobase.com/20240520152448.png)

Les autres corrections majeures incluent :

* Les graphiques ne convertissaient pas les champs de date dans le fuseau horaire du client lors de l'interrogation de données agrégées par champ de date. [fix(data-vi): should use local timezone when formatting date #4366](https://github.com/nocobase/nocobase/pull/4366)
* Problème de rafraîchissement de la vue, où la vue devait être quittée et ré-entrée après la synchronisation avec la base de données. [fix: collection fields should be refreshed after editing sync from database #4224](https://github.com/nocobase/nocobase/pull/4224)
* Le bloc de tableau arborescent ne réduisait pas tous les nœuds lors de l'ajout d'un nœud enfant. [fix: do not collapse all nodes when adding a child node in the tree table block #4289](https://github.com/nocobase/nocobase/pull/4289)
* Les paramètres du champ titre du tableau de données étaient invalides. [fix: collection title field setting is invalid #4358](https://github.com/nocobase/nocobase/pull/4358)
* Le champ Bigint perdait en précision en mode lecture seule. [fix: bigint field loses precision in read pretty mode #4360](https://github.com/nocobase/nocobase/pull/4360)
* Les fichiers journaux ouverts n'étaient pas fermés après l'arrêt d'une sous-application. [fix(logger): should close log stream after destroying app #4380](https://github.com/nocobase/nocobase/pull/4380)
* Bug de sélection du modèle de données relationnelles du nœud d'agrégation du workflow. [fix(plugin-workflow-aggregate): fix association field select #4315](https://github.com/nocobase/nocobase/pull/4315)
* L'option Ignorer les erreurs était inefficace en mode synchrone pour le nœud de requête HTTP du workflow. [fix(plugin-workflow-request): fix ignoreFail in sync mode #4334](https://github.com/nocobase/nocobase/pull/4334)
* La zone de saisie de la valeur du nœud de requête HTTP du workflow débordait. [fix(plugin-workflow-request): fix value fields overflowing #4354](https://github.com/nocobase/nocobase/pull/4353)
* Des caractères spéciaux provoquaient le blocage du nœud de requête HTTP du workflow. [fix(plugin-workflow-request): fix request hanging when invalid header value #4376](https://github.com/nocobase/nocobase/pull/4376)
* Correction d'un problème où le réglage de marginBlock dans l'éditeur de thème affectait l'espacement des champs de formulaire. [fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374](https://github.com/nocobase/nocobase/pull/4374)
* Correction d'un problème où le clic sur l'option « Licence » dans le coin supérieur droit de la page redirigeait incorrectement. [PR #4415](https://github.com/nocobase/nocobase/pull/4415)
* Correction d'un problème où l'opérateur de champ était invalide lors de l'enregistrement d'un formulaire de filtre en tant que modèle de bloc. [PR #4390](https://github.com/nocobase/nocobase/pull/4390)
