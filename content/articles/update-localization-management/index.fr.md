---
title: "Mise à jour (gestion de la localisation) : Organiser les espaces de noms textuels par modules"
description: "Optimisez votre gestion de la localisation avec les espaces de noms textuels basés sur les modules de NocoBase. Ce guide détaille la nouvelle approche pour organiser les textes de traduction par modules, éliminant les problèmes de déduplication et améliorant la personnalisation. Découvrez les changements, les étapes de migration et l'impact sur votre processus de développement."
---

## Contexte

* Le plugin de gestion de la localisation synchronise les textes originaux en les plaçant dans le même espace de noms (module). Lorsqu'il rencontre des textes identiques dans différents plugins, il supprime les doublons et conserve la traduction trouvée dans [`packages/core/client/src/locale`](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale) pour une utilisation ultérieure.
* Le client NocoBase crée une instance `i18n` avec l'option `fallbackNS: "client"` ([référence](https://github.com/nocobase/nocobase/blob/8983eed3308d018a309f1d39f5c6988bbc632878/packages/core/client/src/i18n/i18n.ts#L20)). Par conséquent, lors du développement de plugins, certains textes déjà présents dans `packages/core/client/src/locale` peuvent être omis des fichiers de langue du plugin.

Ces deux paramètres présentent cependant un problème. Les mêmes textes originaux ne peuvent être associés qu'à une seule traduction et ne peuvent pas différer selon les espaces de noms. Par exemple, si un utilisateur crée un contenu avec le même texte qu'une traduction existante, comme "Users" avec la traduction chinoise "用户", il sera affiché comme "用户" dans l'environnement "zh-CN". Cela se produit même si l'utilisateur préfère afficher le texte original plutôt que la traduction.

## Changement

Les textes de traduction sont catégorisés en fonction de leurs modules correspondants (menus, collections & champs, différents plugins), sans déduplication. Sur la page de gestion de la localisation, les textes peuvent être filtrés à l'aide d'un menu déroulant en sélectionnant le module correspondant.

![Page de gestion de la localisation](https://static-docs.nocobase.com/148e5cf34a8a761f7d16429f1c0338f1.jpg)

## Comment migrer

Suivez le [processus de mise à niveau](https://docs.nocobase.com/welcome/getting-started/upgrading) normal pour mettre à niveau le système. Basculez ensuite vers l'environnement linguistique correspondant, et sur la page de gestion de la localisation, synchronisez les textes de traduction en cliquant sur le bouton **"Synchroniser"**.

![Comment migrer](https://static-docs.nocobase.com/bb1c1563770b5c7bfc4f683fc8efaad9.jpg)

## Changements majeurs

### Les textes de traduction ne sont plus dédupliqués

Les textes en double entre les modules nécessitent des traductions séparées.

![Les textes de traduction ne sont plus dédupliqués](https://static-docs.nocobase.com/c090ade730c7d71841cef340d865615b.jpg)

### Suppression de l'option `fallbackNS` de l'instance `i18n`

L'instance `i18n` du client n'inclut plus l'option `fallbackNS: "client"`.

Pour les développeurs de plugins, si les fichiers de langue d'un plugin omettent certains textes déjà présents dans le client principal, il est nécessaire de les compléter. Si vous souhaitez toujours réutiliser le contenu de `packages/core/client/src/locale`, transmettez les paramètres appropriés lors de son utilisation, par exemple :

```
import { useTranslation } from 'react-i18next';

export const NAMESPACE = 'localization-management';

export const useLocalTranslation = () => {
  return useTranslation([NAMESPACE, 'client'], { nsMode: 'fallback' });
};
```
