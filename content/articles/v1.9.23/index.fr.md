---
title: "NocoBase v1.9.23 : autoriser la sélection de l'ID pour les champs d'importation"
description: "Notes de version de la v1.9.23"
---

### 🚀 Améliorations

- **[auth]** Correction de [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) par @2013xile

- **[Action : Importer des enregistrements]** Permettre la sélection de l'ID pour les champs d'importation ([#8132](https://github.com/nocobase/nocobase/pull/8132)) par @katherinehhh

### 🐛 Corrections de bugs

- **[serveur]** Correction d'un problème où les workflows déclenchés n'étaient pas ajoutés à la file d'attente de traitement après l'importation de données, garantissant ainsi que les workflows s'exécutent comme prévu immédiatement après l'importation ([#8121](https://github.com/nocobase/nocobase/pull/8121)) par @mytharcher
