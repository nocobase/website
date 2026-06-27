---
title: "Licence open source et ajustements tarifaires de NocoBase"
description: "Nous avons ajusté le contrat de licence et la tarification des plugins commerciaux, des bundles de plugins commerciaux et des avantages des éditions commerciales. De plus, nous proposons des ajustements gratuits pour les utilisateurs ayant déjà effectué des achats."
---

NocoBase 2.0 a été officiellement publiée le 15 février 2026. À partir de cette version, NocoBase s'oriente vers une approche basée sur l'IA, aidant les entreprises traditionnelles à mettre en œuvre des capacités d'IA et garantissant que l'IA apporte une réelle valeur ajoutée dans des scénarios métier concrets. Conformément à cette nouvelle orientation, nous avons ajusté notre licence open-source et notre structure tarifaire afin de rendre la licence plus flexible et conviviale, le plan tarifaire plus simple et le coût d'utilisation plus bas pour nos utilisateurs.

### Changement de licence : d'AGPL-3.0 à Apache-2.0

Cette transition offre un environnement plus favorable aux entreprises, offrant aux utilisateurs une plus grande flexibilité pour la personnalisation et la distribution commerciale avec moins de contraintes.

### Passage en open source des principaux plugins commerciaux

Les plugins commerciaux suivants sont désormais **open-source et gratuits**

| Plugin                                          | Nom du package                                | Remarques                                                |
| ----------------------------------------------- | --------------------------------------------- | -------------------------------------------------------- |
| IA LLM : GigaChat                               | `@nocobase/plugin-ai-gigachat`                |                                                          |
| Formulaire multi-étapes                         | `@nocobase/plugin-block-multi-step-form`      | Disponible dans Page V1, pas encore adapté pour 2.0      |
| Bloc : Arborescence                             | `@nocobase/plugin-block-tree`                 | Disponible dans Page V1, pas encore adapté pour 2.0      |
| Commentaires                                    | `@nocobase/plugin-comments`                   |                                                          |
| Variables personnalisées                        | `@nocobase/plugin-custom-variables`           | Disponible dans Page V1, pas encore adapté pour 2.0      |
| Visualisation de données : ECharts              | `@nocobase/plugin-data-visualization-echarts` | Obsolète dans 2.0, utiliser le bloc Graphique à la place |
| Intégrer NocoBase                               | `@nocobase/plugin-embed`                      | Disponible dans Page V1, pas encore adapté pour 2.0      |
| Champ : Code                                    | `@nocobase/plugin-field-code`                 | Pas encore adapté pour 2.0                               |
| Brouillons de formulaire                        | `@nocobase/plugin-form-drafts`                | Prend en charge le bloc Formulaire 2.0 uniquement        |
| Filtre multi-mots-clés                          | `@nocobase/plugin-multi-keyword-filter`       |                                                          |
| Workflow : Déclencheur d'action personnalisée   | `@nocobase/plugin-workflow-custom-action-trigger` |                                                      |
| Workflow : Nœud de calcul de date               | `@nocobase/plugin-workflow-date-calculation`  |                                                          |
| Workflow : Nœud JavaScript                      | `@nocobase/plugin-workflow-javascript`        |                                                          |
| Workflow : Intercepteur de requête              | `@nocobase/plugin-workflow-request-interceptor` |                                                        |
| Workflow : Variable                             | `@nocobase/plugin-workflow-variable`          |                                                          |
| Collection : Connexion à des données externes (FDW) | `@nocobase/plugin-collection-fdw`             |                                                          |

### Regroupement des plugins commerciaux restants

Les plugins commerciaux restants ne seront plus vendus individuellement. Ils sont désormais **regroupés dans la licence commerciale**. Une fois que vous achetez une licence commerciale, vous accédez à ces fonctionnalités. Pour plus de détails, veuillez consulter notre page de tarification : [https://www.nocobase.com/commercial](https://www.google.com/search?q=https://www.nocobase.com/commercial)

### Crédit intégral pour les mises à niveau d'une édition inférieure vers une édition supérieure

Selon la politique tarifaire en vigueur avant le 15 février, lors d'une mise à niveau d'une édition inférieure vers une édition supérieure, seule la valeur résiduelle au prorata pouvait être créditée. Par exemple, si vous passiez de l'édition Standard à l'édition Professionnelle après 6 mois, avec une valeur résiduelle de 400 USD, la différence de prix requise serait de 7 600 USD.

Selon la politique tarifaire en vigueur après le 15 février, lors d'une mise à niveau d'une édition inférieure vers une édition supérieure, le montant total dépensé pour l'édition inférieure peut être crédité. Par exemple, si vous passez de l'édition Standard à l'édition Professionnelle après 18 mois, les 800 USD complets dépensés pour l'édition Standard peuvent être crédités, et la différence de prix requise serait de 7 200 USD.

### Politiques pour les clients existants

Pour les utilisateurs qui ont acheté des licences commerciales, des plugins ou des packs de plugins avant la transition :

1. Les droits acquis avant le 15 février restent inchangés.
   * Tous les plugins commerciaux achetés ou échangés précédemment vous appartiennent toujours.
   * Les points restants dans les packs de plugins peuvent toujours être utilisés pour échanger n'importe quel plugin commercial.
2. Les nouvelles fonctionnalités ajoutées aux versions commerciales après le 15 février seront disponibles gratuitement pour les utilisateurs qui ont précédemment acheté l'édition commerciale correspondante.
3. Mise à niveau à partir d'une édition commerciale achetée avant le 15 février : lors d'une mise à niveau vers une édition supérieure après le 15 février, le montant total payé pour l'édition d'origine peut être crédité pour la mise à niveau.
4. Mise à niveau de plugins commerciaux individuels vers une édition commerciale : si vous avez acheté des plugins commerciaux avant le 15 février et souhaitez passer à une édition commerciale qui inclut désormais ces plugins, le montant total dépensé pour les plugins d'origine peut être crédité pour l'achat de l'édition.

### FAQ

**Q :** J'ai acheté l'édition Professionnelle avant le 15 février, qui incluait Multi-app et Multi-espace. Maintenant, ces fonctionnalités ne sont que dans l'édition Entreprise. Vais-je les perdre ?

**R :** Non. Toutes les fonctionnalités que vous possédez déjà, y compris Multi-app et Multi-espace, sont incluses en permanence dans votre licence.

**Q :** J'ai acheté l'édition Standard avant le 15 février et il me reste 8 points. Je souhaite échanger le plugin Approbation, mais il est désormais limité à l'édition Professionnelle. Puis-je toujours l'obtenir ?

**R :** Oui. Vos points de plugin restants peuvent toujours être utilisés pour échanger n'importe quel plugin commercial, indépendamment du nouveau niveau.

**Q :** J'ai acheté l'édition Standard avant qu'elle n'inclue les Sources de données externes. Maintenant que l'édition Standard les inclut (après le 15 février), vais-je les obtenir gratuitement ?

**R :** Oui. Toutes les nouvelles fonctionnalités ajoutées à votre édition après le 15 février sont gratuites pour les propriétaires existants de cette édition. Cela inclut les sources de données externes MariaDB, MySQL, PostgreSQL, MSSQL et API Rest.

**Q :** J'ai acheté l'édition Standard et le plugin Approbation avant le 15 février, pour un total de 800 USD + 800 USD = 1 600 USD. Puis-je créditer ce montant pour une mise à niveau vers l'édition Professionnelle ?

**R :** Oui. Les 1 600 USD complets peuvent être crédités pour la mise à niveau.

*L'interprétation de ces ajustements appartient à la société mère de NocoBase. Pour les utilisateurs commerciaux existants, tous les droits et ajustements complémentaires seront finalisés d'ici le **24 février**.*

Nous tenons à remercier tous nos utilisateurs payants et gratuits, ainsi que nos contributeurs open-source. Nous continuerons à itérer rapidement pour offrir un meilleur produit à un prix plus bas.
