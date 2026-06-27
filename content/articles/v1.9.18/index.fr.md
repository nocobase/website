---
title: "NocoBase v1.9.18 : Corrections de bugs"
description: "Notes de version de la v1.9.18"
---

### 🐛 Corrections de bugs

- **[Action : Importer des enregistrements]** Les champs importés ne correspondent pas aux champs définis dans les paramètres ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) par @2013xile

- **[Workflow]** Correction du problème où la page d'exécution générait une erreur lorsque les tâches sur un nœud sont indéfinies ([#8066](https://github.com/nocobase/nocobase/pull/8066)) par @mytharcher

- **[Contrôle d'accès]** Ajout d'un middleware pour les vérifications de permissions sur les opérations d'association pour les sources de données externes ([#8062](https://github.com/nocobase/nocobase/pull/8062)) par @2013xile

- **[Workflow : Approbation]**
  - Correction du problème d'erreur de permission levée lors du chargement des approbations liées à un enregistrement dans le tiroir de détails par @mytharcher

  - Correction du problème où les enregistrements d'approbation ne sont pas inclus dans le résultat de la tâche dans la branche de retour par @mytharcher

  - Correction du problème où le processus est incorrect lors du branchement avec ordre et contreseing par @mytharcher
