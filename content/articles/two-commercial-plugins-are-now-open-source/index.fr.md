---
title: "Deux plugins commerciaux sont désormais open source"
description: "Explique les raisons de l'ouverture du code source, les capacités des plugins et les ajustements pour les clients existants."
---

Sur la base des retours utilisateurs, nous avons décidé de rendre open source deux plugins commerciaux de workflow :

* [Calcul JSON](https://v2.docs.nocobase.com/workflow/nodes/json-query)
* [Mappage de variables JSON](https://v2.docs.nocobase.com/workflow/nodes/json-variable-mapping)

## Pourquoi les rendre open source ?

Ces plugins font partie des plus utilisés dans les workflows et sont souvent nécessaires après les nœuds SQL ou Requête HTTP. Lorsqu'ils étaient des plugins commerciaux, les utilisateurs de l'édition communautaire ne pouvaient pas utiliser pleinement le nœud Requête HTTP, ce qui créait une mauvaise expérience. C'est pourquoi nous les rendons open source.

## Présentation des plugins

### Calcul JSON

Gère le JSON complexe produit par les nœuds en amont, vous permettant de calculer, extraire ou remodeler les données.

Les cas d'utilisation courants incluent :

* Résultats de requêtes SQL
* Données renvoyées par des requêtes HTTP

Il aide à convertir ces sorties dans les formats de variables et les valeurs de champ nécessaires aux nœuds en aval.

### Mappage de variables JSON

Mappe des structures JSON complexes en variables plus faciles à utiliser dans les étapes ultérieures du workflow.

Les cas d'utilisation courants incluent :

* Extraction de champs clés à partir de JSON imbriqué renvoyé par des API ou SQL
* Renommage de champs ou ajustement de structures de tableaux
* Préparation de variables plus propres pour les nœuds suivants

Avec ce plugin, vous évitez de configurer à plusieurs reprises des chemins de champ profonds dans chaque nœud.

## Ajustements pour les clients existants

Vos droits resteront inchangés. Nous rembourserons les points de plugin comme suit :

* *Utilisation à vie, mise à niveau 1 an* → 2 points
* *Utilisation et mise à niveau à vie* → 4 points

Ces ajustements seront effectués pour tous les clients existants d'ici le 23 novembre 2025, et la société mère de NocoBase fournira l'interprétation finale.

## En conclusion

Merci à tous les utilisateurs de NocoBase et aux contributeurs open source. Vos retours et signalements nous aident à nous améliorer à chaque version. Nous continuerons à aller plus vite et à offrir des fonctionnalités plus puissantes à un prix plus abordable.
