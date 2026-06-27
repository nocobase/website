---
title: "Top 10 des projets CRM IA open-source avec le plus d'étoiles GitHub"
description: "Un tour d'horizon des projets CRM IA open source les plus populaires sur GitHub, incluant à la fois les plateformes avec des fonctionnalités IA natives et celles qui supportent des intégrations flexibles."
---

📝 Note : Cet article a été mis à jour pour la dernière fois le 21 janvier 2026. Nous actualisons régulièrement les informations pour vous garantir les dernières perspectives ! 😊

## Introduction

Quel CRM utilisez-vous aujourd'hui ?

Pour la plupart des équipes, la réponse est un CRM SaaS comme Salesforce. Ces plateformes sont riches en fonctionnalités, soutenues par des écosystèmes matures et largement adoptées dans les entreprises. Parallèlement, certaines équipes ayant des préférences techniques plus marquées ou des besoins de flexibilité plus élevés commencent à s'intéresser aux [alternatives open source à Salesforce](https://www.nocobase.com/en/blog/salesforce-open-source-crmalternative). Les plateformes low code et no code leur offrent un moyen de construire un CRM adapté à leurs workflows avec un coût réduit et des cycles de développement plus courts. Nous avons précédemment examiné plusieurs [projets CRM open source très populaires sur GitHub](https://www.nocobase.com/en/blog/github-open-source-crm-projects) comme point de départ pour l'évaluation des CRM, bien que l'IA ne soit pas encore devenue une capacité centrale de ces outils.

💡En savoir plus : [Top 4 des études de cas de CRM personnalisés (Pour vous aider à choisir une solution CRM plus flexible)](https://www.nocobase.com/en/blog/custom-crm-case-studies)

Alors que de plus en plus d'outils et de systèmes s'intègrent plus profondément avec l'IA, les projets CRM open source évoluent également. Le CRM passe progressivement d'un système centré sur la saisie de données et la gestion d'enregistrements à un système jouant un rôle plus proactif dans les opérations commerciales. Certains projets incluent désormais l'IA comme fonctionnalité native, tandis que d'autres combinent l'IA via des extensions, des plugins ou des connexions API.

Dans cette revue mise à jour, nous avons examiné les dépôts les plus populaires sous le [sujet CRM GitHub](https://github.com/topics/crm) et les avons regroupés en deux catégories : les CRM avec capacités d'IA intégrées et les CRM prenant en charge les extensions d'IA. Nous résumons leurs fonctionnalités d'IA et leurs cas d'utilisation courants pour vous aider à comprendre leurs limites de capacité et à choisir l'option qui correspond le mieux à vos besoins.

🎉[La solution CRM NocoBase est désormais disponible — Prête à être explorée](https://www.nocobase.com/en/blog/crm-solution)

---

💬Hé, vous lisez le blog NocoBase. NocoBase est la plateforme de développement no-code/low-code alimentée par l'IA la plus extensible pour créer des applications d'entreprise, des outils internes et toutes sortes de systèmes. Elle est entièrement auto-hébergée, basée sur des plugins et conviviale pour les développeurs. → [Explorez NocoBase sur GitHub](https://github.com/nocobase/nocobase)

---

Si vous souhaitez un aperçu rapide des outils présentés dans cet article, le résumé ci-dessous donne un aperçu clair de chaque catégorie.

**CRM avec capacités d'IA natives**

* **NocoBase** : Une plateforme no code et low code qui intègre profondément l'IA dans la modélisation des données, l'analyse commerciale et les workflows CRM via son framework d'employés IA.
* **Huly Platform** : Un espace de travail collaboratif avec transcription IA en temps réel intégrée pour les scénarios de communication et de réunion.
* **Krayin CRM** : Un CRM open source pour les équipes commerciales qui inclut la génération de contenu alimentée par l'IA et une assistance intelligente dans l'application.

**CRM qui étendent ou intègrent l'IA**

* **Twenty** : Un CRM open source moderne et hautement personnalisable qui intègre des systèmes d'IA externes via GraphQL et REST.
* **ERPNext** : Une plateforme centrée sur l'ERP qui intègre l'IA dans le CRM et les processus métier plus larges via des plugins et des intégrations API.
* **SuiteCRM** : Un CRM open source mature qui peut incorporer l'IA via des extensions et des services tiers.
* **Monica** : Un gestionnaire de relations personnelles qui se connecte à des services d'IA externes via des appels API.
* **Akaunting** : Une plateforme de comptabilité et de gestion d'entreprise qui ajoute des capacités d'IA via des applications et des intégrations API.
* **Idurar ERP CRM** : Une solution ERP plus CRM pour les petites équipes qui intègre l'IA via sa couche API.
* **Dolibarr** : Un système CRM modulaire qui prend en charge l'IA via des modules complémentaires et des intégrations basées sur API.

## CRM IA natifs

### NocoBase

![nocobase1.png](https://static-docs.nocobase.com/nocobase1-voq8jv.png)

Site officiel : [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub : [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

Stars GitHub : 20,8k

Documentation IA : [[https://v2.docs.nocobase.com/cn/ai-employees](https://v2.docs.nocobase.com/cn/ai-employees)]([https://v2.docs.nocobase.com/ai-employees](https://v2.docs.nocobase.com/ai-employees))

**Aperçu**

NocoBase est une plateforme de développement no code et low code open source, auto-hébergée et activée par l'IA. Construite autour d'une architecture orientée modèle de données et basée sur des plugins, elle permet aux équipes de créer rapidement des systèmes métier de niveau entreprise, y compris des workflows CRM.

**Comment l'IA fonctionne dans le système**

L'IA est implémentée sous forme d'« Employés IA », des agents intelligents intégrés directement dans les pages et les workflows :

* **Comprend le contexte des données au niveau de la page** : Les agents IA peuvent lire les tables, les champs et les enregistrements associés à la vue actuelle et agir en pleine connaissance de ce contexte.
* **Génère du contenu et aide à l'exécution** : Ils peuvent résumer du texte, extraire des informations, analyser des données ou remplir automatiquement des champs en fonction des besoins métier.
* **Accélère la construction du système** : Lors de la configuration, ils aident à rédiger des modèles de données, des mises en page et une logique d'automatisation, accélérant ainsi la création du CRM.

**Cas d'utilisation typiques**

Les agents IA de NocoBase peuvent prendre en charge un large éventail de processus CRM, rendant le système plus intelligent dans la gestion et l'analyse des données :

* **Nettoyage des données et saisie structurée** : L'IA peut extraire les détails clés de textes non structurés tels que les e-mails ou les notes et les transformer en attributs client structurés ou en événements métier.

![nocobase2.gif](https://static-docs.nocobase.com/nocobase2-3jul27.gif)

* **Analyse commerciale et visualisation** : Sur des pages comme les prospects ou les opportunités, l'IA peut générer des graphiques de tendance, des comparaisons, des cartes KPI et des informations concises directement à partir des données existantes.

![nocobase3.gif](https://static-docs.nocobase.com/nocobase3-0aik71.gif)

* **Traduction multilingue et remplissage de champs** : L'IA peut traduire des e-mails ou des enregistrements en langue étrangère et écrire les résultats dans les champs CRM pertinents, garantissant des données cohérentes entre les langues.

![nocobase4.gif](https://static-docs.nocobase.com/nocobase4-plcdr3.gif)

### Huly Platform

![Huly Platform.png](https://static-docs.nocobase.com/Huly%20Platform-3s2br9.png)

Site officiel : [https://huly.io/](https://huly.io/)

GitHub : [https://github.com/hcengineering/platform](https://github.com/hcengineering/platform)

Stars GitHub : 23,9k

Documentation IA : [https://docs.huly.io/communication/live-transcription/](https://docs.huly.io/communication/live-transcription/)

**Aperçu**

Huly Platform est un espace de travail open source tout-en-un pour la collaboration et la gestion d'entreprise. Il rassemble la gestion de projet, la communication, les fonctionnalités de bureau virtuel et le CRM dans un seul environnement intégré.

**Comment l'IA fonctionne dans le système**

Ses capacités d'IA sont centrées sur la transcription en temps réel, alimentée par l'assistant intégré Hulia. Lors de réunions vocales ou vidéo tenues sur la plateforme, Hulia capture les conversations et les convertit instantanément en texte. Les transcriptions sont sauvegardées dans le cadre de la discussion, permettant aux utilisateurs de les lire, d'y répondre et de les marquer comme des messages de chat. Cela réduit le besoin de prise de notes manuelle et rationalise la communication.

**Cas d'utilisation typiques**

Huly est idéal pour les équipes qui collaborent fréquemment, comme :

* Transcription automatique et création de notes de réunion lors d'appels audio ou vidéo
* Partage de résumés de discussion sous forme de texte pour une révision plus facile
* Gestion de projets, de communication et de connaissances dans un espace de travail unifié

---

### Krayin CRM

![Krayin CRM.png](https://static-docs.nocobase.com/Krayin%20CRM-wo95u4.png)

Site officiel : [https://krayincrm.com/](https://krayincrm.com/)

GitHub : [https://github.com/krayin/laravel-crm](https://github.com/krayin/laravel-crm)

Stars GitHub : 20,6k

Documentation IA : [https://krayincrm.com/ai-crm/](https://krayincrm.com/ai-crm/)

**Aperçu**

Krayin CRM est un système open source construit sur Laravel, offrant des fonctionnalités CRM de base telles que les pipelines de vente, les contacts, les prospects et le suivi des activités, avec une architecture de plugins flexible.

**Comment l'IA fonctionne dans le système**

Le module IA officiel intègre de grands modèles de langage pour améliorer les workflows CRM. Il est utilisé pour :

* **Création et affinement de contenu commercial** — génération d'e-mails de suivi, de notes de contact, de résumés de réunion et de contenu similaire
* **Assistance aux prospects et aux contacts** — fourniture de suggestions ou complétion automatique d'informations sur les pages de détails
* **Saisie de texte plus intelligente** — intégration de la génération et des suggestions alimentées par l'IA dans les journaux, les tâches et les notes

Ces fonctionnalités aident les équipes à travailler plus rapidement et à améliorer la qualité de la rédaction liée au CRM.

**Cas d'utilisation typiques**

Les capacités d'IA de Krayin fonctionnent bien pour :

* Les équipes commerciales qui ont besoin de messages de suivi ou de résumés soignés
* Les gestionnaires de comptes qui souhaitent un contexte de contact plus riche ou des notes suggérées par l'IA
* Les équipes cherchant à améliorer l'efficacité de la rédaction et l'intelligence globale au sein de leur CRM

## CRM prenant en charge les extensions ou intégrations d'IA

### Twenty

![Twenty.png](https://static-docs.nocobase.com/Twenty-9id6n2.png)

Site officiel : [https://twenty.com/](https://twenty.com/)

GitHub : [https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

Stars GitHub : 37,3k

**Aperçu**

Twenty est un CRM open source moderne conçu comme une alternative hautement personnalisable à des systèmes comme Salesforce. Il donne aux équipes un contrôle total sur les données, les workflows et l'architecture, ce qui le rend adapté aux organisations qui souhaitent auto-héberger et personnaliser leur CRM en profondeur.

**Comment l'IA s'intègre**

Twenty offre des API GraphQL et REST complètes, facilitant l'intégration avec des systèmes d'IA externes. Une extension basée sur MCP existe déjà, où un serveur MCP expose les données et les opérations de Twenty aux assistants IA tels que Claude. Cela permet des actions en langage naturel comme l'interrogation, la création, la mise à jour et la gestion des enregistrements CRM.

### ERPNext

![ERPNext.png](https://static-docs.nocobase.com/ERPNext-jtmlm0.png)

Site officiel : [https://erpnext.com/](https://erpnext.com/)

GitHub : [https://github.com/frappe/erpnext](https://github.com/frappe/erpnext)

Stars GitHub : 30,6k

**Aperçu**

ERPNext est une plateforme de gestion d'entreprise open source tout-en-un qui couvre le CRM, les ventes, les achats, les stocks, les finances, les RH, et plus encore. Construit sur le framework Frappe, il prend en charge une personnalisation étendue et une expansion modulaire, ce qui le rend idéal pour les équipes construisant un système métier unifié.

**Comment l'IA s'intègre**

ERPNext prend en charge l'IA via son API et son framework de plugins. L'écosystème comprend désormais diverses extensions d'IA construites sur Frappe, apportant des capacités telles que la génération de texte, l'affinement de contenu et l'assistance intelligente dans les formulaires, les notes et les modules de communication. ERPNext est également fréquemment utilisé comme épine dorsale d'application, intégrant les données métier avec des services d'IA externes pour permettre l'analyse et la génération automatisée de contenu.

### SuiteCRM

![SuiteCRM.png](https://static-docs.nocobase.com/SuiteCRM-8wdoh4.png)

Site officiel : [https://suitecrm.com/](https://suitecrm.com/)

GitHub : [https://github.com/SuiteCRM/SuiteCRM](https://github.com/SuiteCRM/SuiteCRM)

Stars GitHub : 5,2k

**Aperçu**

SuiteCRM est un CRM open source mature offrant des modules pour les prospects, les contacts, les comptes, les opportunités et les activités marketing. Il est largement utilisé par les organisations qui préfèrent ou nécessitent des environnements CRM auto-hébergés.

**Comment l'IA s'intègre**

SuiteCRM fournit une API REST complète et un framework d'extension modulaire, permettant l'intégration avec l'IA via des plugins ou un développement personnalisé. Les écosystèmes officiel et communautaire offrent des extensions qui ajoutent du contenu généré par l'IA, des suggestions intelligentes ou une analyse automatisée aux workflows CRM. Les données métier peuvent également être connectées à des services d'IA externes via l'API pour prendre en charge des interactions client plus intelligentes.

### Monica

![Monica.png](https://static-docs.nocobase.com/Monica-bj87me.png)

Site officiel : [https://www.monicahq.com/](https://www.monicahq.com/)

GitHub : [https://github.com/monicahq/monica](https://github.com/monicahq/monica)

Stars GitHub : 23,8k

**Aperçu**

Monica est un outil open source de gestion des relations personnelles qui aide les individus à organiser leurs contacts, suivre les interactions et gérer les rappels, avec un fort accent sur la confidentialité et l'auto-hébergement.

**Comment l'IA s'intègre**

Monica s'intègre à l'IA principalement via son API REST et ses Webhooks. Dans la plupart des workflows, les utilisateurs envoient des données de contact ou d'interaction à des services externes, où l'IA gère le traitement du texte, l'analyse ou les suggestions, et les résultats sont ensuite synchronisés en retour. Les capacités d'IA proviennent d'outils externes plutôt que du cœur de Monica lui-même.

### Akaunting

![Akaunting.png](https://static-docs.nocobase.com/Akaunting-3j2qgv.png)

Site officiel : [https://akaunting.com/](https://akaunting.com/)

GitHub : [https://github.com/akaunting/akaunting](https://github.com/akaunting/akaunting)

Stars GitHub : 9,4k

**Aperçu**

Akaunting est une plateforme open source de comptabilité et de gestion d'entreprise conçue pour les petites et moyennes entreprises. Elle propose des modules pour la comptabilité, la facturation, les dépenses et la gestion des clients ou des fournisseurs, et prend en charge les extensions CRM et métier via sa place de marché d'applications.

**Comment l'IA s'intègre**

L'IA est introduite dans Akaunting via son API REST et son framework d'extension. En pratique, des applications tierces ou des services d'IA externes sont utilisés pour analyser les données financières ou clients, les résultats étant réécrits dans le système. La fonctionnalité d'IA est donc ajoutée via des intégrations et des extensions plutôt que d'être intégrée à la plateforme de base.

### IDURAR

![IDURAR.png](https://static-docs.nocobase.com/IDURAR-vys5jd.png)

Site officiel : [https://www.idurarapp.com/](https://www.idurarapp.com/)

GitHub : [https://github.com/idurar/idurar-erp-crm](https://github.com/idurar/idurar-erp-crm)

Stars GitHub : 8,1k

**Aperçu**

IDURAR est une plateforme open source de gestion d'entreprise qui combine des capacités ERP et CRM. Elle comprend la gestion des clients, les ventes, la facturation, la comptabilité et les opérations de base, et est conçue pour les petites équipes et les développeurs qui ont besoin d'un système auto-hébergé et personnalisable.

**Comment l'IA s'intègre**

IDURAR propose des API et une architecture extensible qui lui permettent de fonctionner avec des services d'IA externes ou des modules développés sur mesure. Dans la plupart des configurations, l'IA s'exécute en dehors du système de base et se connecte via des API pour lire ou mettre à jour les données métier, améliorant ainsi les workflows existants sans modifier la plateforme elle-même. L'intégration repose principalement sur les API et les extensions externes.

### Dolibarr

![Dolibarr.png](https://static-docs.nocobase.com/Dolibarr-1j7qnu.png)

Site officiel : [https://www.dolibarr.org/](https://www.dolibarr.org/)

GitHub : [https://github.com/Dolibarr/dolibarr](https://github.com/Dolibarr/dolibarr)

Stars GitHub : 6,8k

**Aperçu**

Dolibarr est une plateforme ERP et CRM open source mature avec des modules pour la gestion des clients et des fournisseurs, les ventes, la facturation, les stocks et la comptabilité. Sa conception modulaire et son déploiement auto-hébergé en font un choix courant pour les petites et moyennes organisations.

**Comment l'IA s'intègre**

Dolibarr prend en charge les API REST et un système d'extension basé sur des modules, ce qui permet de se connecter à des services d'IA externes ou à des modules personnalisés. Les fonctionnalités d'IA sont généralement gérées en dehors de la plateforme de base et interagissent avec Dolibarr en lisant ou en mettant à jour les données via des API, permettant d'ajouter des fonctions intelligentes sans modifier le système principal. L'intégration se fait généralement via des modules et des connexions API.

## Conclusion

En pratique, les CRM avec IA intégrée ont tendance à offrir une expérience plus cohérente et intégrée. Parce que l'IA fait partie de l'architecture du système, les interactions, les fonctionnalités et les workflows semblent plus unifiés. Si votre priorité est d'adopter l'IA rapidement ou de laisser l'IA soutenir directement les tâches CRM quotidiennes, une plateforme avec des fonctionnalités d'IA natives est généralement le meilleur choix.

Les CRM open source qui reposent sur des extensions nécessitent souvent plus d'expertise technique et fonctionnent mieux pour les équipes qui souhaitent personnaliser leur système en fonction de besoins métier spécifiques. Avec des plugins, des modules complémentaires ou des connexions API à des services d'IA externes, les équipes peuvent introduire des capacités d'IA étape par étape.

Les CRM IA natifs prennent également en charge les plugins et les API, et les CRM extensibles peuvent offrir une expérience d'IA solide avec les bons investissements. La clé est de considérer votre stade d'activité, vos ressources techniques et vos exigences de flexibilité pour décider quel type de CRM est le plus pertinent.

Si vous avez trouvé cet article utile, n'hésitez pas à le partager avec toute personne intéressée par l'IA et le CRM.

**Lectures connexes :**

* [Comment construire rapidement un vrai système pour remplacer Excel : Un guide complet](https://www.nocobase.com/en/blog/how-to-quickly-build-a-real-system-to-replace-excel)
* [Top 5 des outils internes d'IA open source sur GitHub](https://www.nocobase.com/en/blog/top-5-open-source-ai-internal-tools-on-github)
* [Les 8 meilleures alternatives à Google Sheets (Spécifications et tarifs)](https://www.nocobase.com/en/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6 outils No/Low-Code open source pour construire des PoC](https://www.nocobase.com/en/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [Guide de décision technique pour les développeurs sur le No-Code et le Low-Code (2026)](https://www.nocobase.com/en/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [Comparaison approfondie de 6 RBAC dans les plateformes No-Code/Low-Code de niveau entreprise](https://www.nocobase.com/en/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [14 plateformes Low-Code alimentées par l'IA sur GitHub à surveiller](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github)
* [Top 11 des outils d'IA No-Code open source avec le plus d'étoiles GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
