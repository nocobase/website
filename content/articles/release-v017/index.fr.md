---
title: "NocoBase 0.17 : Nouveau SchemaInitializer et SchemaSettings"
description: "NocoBase 0.17 refond le concepteur de schémas UI avec un nouveau SchemaInitializer et SchemaSettings, réorganise la documentation et introduit plusieurs améliorations pour un meilleur développement frontend."
---

## Nouvelles fonctionnalités

Pour réduire les coûts d'apprentissage du développement et offrir une meilleure expérience de développement frontend, nous avons procédé à une refonte progressive du cœur du frontend ces derniers mois, notamment :

![nocobase-client](https://static-docs.nocobase.com/fab1903e1852480f8edce8213ac54a49.webp)

Cette fois, la v0.17 a refactorisé les SchemaInitializer et SchemaSettings liés au concepteur de schémas UI.

![SchemaInitializer](https://static-docs.nocobase.com/ddeb33e3170cef3107a48edec4b07b55.webp)

![SchemaSettings](https://static-docs.nocobase.com/4afac0186699e0e49951ba84522c5754.webp)

Pour répondre à la difficulté de prise en main des utilisateurs, nous avons également réorganisé plusieurs sections de la documentation :

* [Développement de plugins](https://docs.nocobase.com/development) (entièrement révisé et publié)
* [Référence API / Client](https://client.docs.nocobase.com/core/application/application) (nouvelle section, déjà publiée)
* Manuel utilisateur (entièrement révisé, sera publié dans les une à deux prochaines semaines)
* Liste des plugins (nouvelle section, incluant les présentations, l'utilisation et les instructions de développement d'extensions pour tous les plugins existants, sera publiée dans les une à deux prochaines semaines)

## Changements incompatibles

### Modifications de SchemaInitializer

* Ajout de `SchemaInitializerManager` pour enregistrer `SchemaInitializer`
* Ajout de `useSchemaInitializerRender()` pour remplacer l'original `useSchemaInitializer()` `render()`
* Ajout de `useSchemaInitializerItem()` pour obtenir le contexte de l'élément d'initialisation courant
* Ajout du composant `SchemaInitializerItemGroup` comme composant par défaut pour `type: 'itemGroup'`
* Ajout du composant `SchemaInitializerSubMenu` comme composant par défaut pour `type: 'subMenu'`
* Ajout du composant `SchemaInitializerDivider` comme composant par défaut pour `type: 'divider'`
* Ajout du composant `SchemaInitializerChildren` pour le rendu personnalisé de plusieurs éléments de liste
* Ajout du composant `SchemaInitializerChild` pour le rendu personnalisé d'un seul élément de liste
* Changement des responsabilités de `SchemaInitializerContext` pour stocker le contexte de l'initialiseur courant
* Changement des responsabilités de `useSchemaInitializer()` pour obtenir le contexte de l'initialiseur courant
* Changement de `function SchemaInitializer` en `class SchemaInitializer` pour définir l'initialiseur
* Changement des paramètres de `SchemaInitializer`
  * Ajout du paramètre obligatoire `name` pour la valeur de `x-initializer`
  * Ajout du paramètre `Component` pour le rendu personnalisé du bouton. Par défaut : `SchemaInitializerButton`.
  * Ajout de `componentProps`, `style` pour configurer les propriétés et le style de `Component`
  * Ajout du paramètre `ItemsComponent` pour le rendu personnalisé de la liste. Par défaut : `SchemaInitializerItems`.
  * Ajout de `itemsComponentProps`, `itemsComponentStyle` pour configurer les propriétés et le style de `ItemsComponent`
  * Ajout du paramètre `popover` pour configurer l'affichage de l'effet `popover`
  * Ajout du paramètre `useInsert` pour lorsque la fonction `insert` nécessite l'utilisation de hooks
  * Changement du paramètre `dropdown` en `popoverProps`, utilisant `Popover` au lieu de `Dropdown`
* Changement des paramètres de `items` pour `SchemaInitializer`
  * Ajout de la fonction `useChildren` pour contrôler dynamiquement les éléments enfants
  * Ajout de la fonction `componentProps` pour les propriétés du composant lui-même
  * Ajout de la fonction `useComponentProps` pour traiter dynamiquement les props du composant
  * Changement du paramètre `key` en `name` pour l'identification unique des éléments de liste
  * Changement du paramètre `visible` en fonction `useVisible` pour contrôler dynamiquement l'affichage
  * Changement du paramètre `component` en `Component` pour le rendu des éléments de liste
* Changement de `SchemaInitializer.Button` en `SchemaInitializerButton`, valeur par défaut du paramètre Component de SchemaInitializer
* Changement de `SchemaInitializer.Item` en `SchemaInitializerItem`, paramètres inchangés
* Changement de `SchemaInitializer.ActionModal` en `SchemaInitializerActionModal`, paramètres inchangés
* Changement de `SchemaInitializer.SwitchItem` en `SchemaInitializer.Switch`, paramètres inchangés
* Suppression de `SchemaInitializerProvider`, remplacé par `SchemaInitializerManager`
* Suppression de `SchemaInitializer.itemWrap`, il n'est plus nécessaire d'envelopper le composant `item`

### Modifications de SchemaSettings

* Ajout de `SchemaSettingsManager` pour enregistrer `SchemaSettings`
* Ajout de `useSchemaSettingsItem()`
* Ajout de `useSchemaSettingsRender()`
* Ajout du paramètre `x-settings` pour configurer les paramètres de schéma
* Ajout du paramètre `x-toolbar` pour configurer la barre d'outils de schéma
* Ajout du composant `SchemaToolbar` pour personnaliser la barre d'outils de schéma
* Ajout de `useSchemaToolbarRender()` pour remplacer l'original `useDesigner()`
* Changement de `function SchemaSettings` en `class SchemaSettings` pour définir les paramètres
* Changement de l'original `SchemaSettings` en `SchemaSettingsDropdown`
* Changement de `SchemaSettings.Item` en `SchemaSettingsItem`
* Changement de `SchemaSettings.ItemGroup` en `SchemaSettingsItemGroup`
* Changement de `SchemaSettings.SubMenu` en `SchemaSettingsSubMenu`
* Changement de `SchemaSettings.Divider` en `SchemaSettingsDivider`
* Changement de `SchemaSettings.Remove` en `SchemaSettingsRemove`
* Changement de `SchemaSettings.SelectItem` en `SchemaSettingsSelectItem`
* Changement de `SchemaSettings.CascaderItem` en `SchemaSettingsCascaderItem`
* Changement de `SchemaSettings.SwitchItem` en `SchemaSettingsSwitchItem`
* Changement de `SchemaSettings.ModalItem` en `SchemaSettingsModalItem`
* Changement de `SchemaSettings.ActionModalItem` en `SchemaSettingsActionModalItem`
* Suppression du paramètre `x-designer`, déprécié, sera supprimé à l'avenir, utilisez `x-toolbar` à la place
* Suppression de `useDesigner()`, déprécié, sera supprimé à l'avenir, utilisez `useSchemaToolbarRender()` à la place

Pour plus de détails, voir [Changements incompatibles dans NocoBase 0.17](https://docs.nocobase.com/welcome/release/upgrade-to/v017)
