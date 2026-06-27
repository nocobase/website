---
title: "NocoBase v1.7.12 : ajout des options « vide » et « non vide » aux règles de liaison des champs de case à cocher"
description: "Notes de version de la v1.7.12"
---

### 🚀 Améliorations

- **[client]** Ajout des options « vide » et « non vide » aux règles de liaison des champs de case à cocher ([#7073](https://github.com/nocobase/nocobase/pull/7073)) par @katherinehhh

### 🐛 Corrections de bugs

- **[client]** Après la création du champ de relation inverse, l'option « Créer un champ de relation inverse dans la table de données cible » dans les paramètres du champ d'association n'était pas cochée. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) par @aaaaaajie

- **[Gestionnaire de source de données]** Les modifications de portée prennent désormais effet immédiatement pour tous les rôles concernés. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) par @aaaaaajie

- **[Contrôle d'accès]** Correction d'un problème où l'application bloquait l'entrée lorsqu'aucun rôle par défaut n'existait ([#7059](https://github.com/nocobase/nocobase/pull/7059)) par @aaaaaajie

- **[Workflow : Événement d'action personnalisée]** Correction de la variable d'URL de redirection non analysée par @mytharcher
